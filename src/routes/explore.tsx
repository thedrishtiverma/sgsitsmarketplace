import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { PageShell } from "@/components/marketplace/PageShell";
import { ResourceCard } from "@/components/marketplace/ResourceCard";
import { SearchBar } from "@/components/marketplace/SearchBar";
import {
  FilterPanel,
  emptyFilters,
  type Filters,
} from "@/components/marketplace/FilterPanel";
import { EmptyState, ResourceCardSkeleton } from "@/components/marketplace/States";
import { RESOURCES, SORT_OPTIONS, type SortOption } from "@/data/mock";
import type { Branch, ResourceType, Semester } from "@/data/types";
import { Highlight, MarginMark, Sticker } from "@/components/brand/BrandVisuals";

interface ExploreSearch {
  q?: string;
  branch?: Branch;
  semester?: Semester;
  subject?: string;
  type?: ResourceType;
}

const PAGE_SIZE = 6;

export const Route = createFileRoute("/explore")({
  validateSearch: (search: Record<string, unknown>): ExploreSearch => {
    const out: ExploreSearch = {};
    if (typeof search["q"] === "string") out.q = search["q"];
    if (search["branch"]) out.branch = search["branch"] as Branch;
    if (search["semester"]) out.semester = Number(search["semester"]) as Semester;
    if (typeof search["subject"] === "string") out.subject = search["subject"];
    if (search["type"]) out.type = search["type"] as ResourceType;
    return out;
  },
  head: () => ({
    meta: [
      { title: "Explore Resources — SGSITS Marketplace" },
      {
        name: "description",
        content:
          "Search and filter notes, PYQs, lab manuals and study guides by branch, semester, subject and type.",
      },
      { property: "og:title", content: "Explore Resources — SGSITS Marketplace" },
      {
        property: "og:description",
        content: "Search notes, PYQs and lab manuals shared by SGSITS students.",
      },
    ],
  }),
  component: Explore,
});

function Explore() {
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");
  const [filters, setFilters] = useState<Filters>({
    branch: search.branch ?? "all",
    semester: search.semester ?? "all",
    subject: search.subject ?? "all",
    type: search.type ?? "all",
  });
  const [sort, setSort] = useState<SortOption>("Most recent");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = RESOURCES.filter((r) => {
      if (filters.branch !== "all" && r.branch !== filters.branch) return false;
      if (filters.semester !== "all" && r.semester !== filters.semester) return false;
      if (filters.subject !== "all" && r.subject !== filters.subject) return false;
      if (filters.type !== "all" && r.type !== filters.type) return false;
      if (!q) return true;
      return [r.title, r.subject, r.description, ...r.tags]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });

    switch (sort) {
      case "Most downloaded":
        return list.sort((a, b) => b.downloads - a.downloads);
      case "Highest rated":
        return list.sort((a, b) => b.rating - a.rating);
      case "A–Z":
        return list.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return list.sort((a, b) => b.uploadedOn.localeCompare(a.uploadedOn));
    }
  }, [query, filters, sort]);

  const shown = results.slice(0, visible);

  const loadMore = () => {
    setLoadingMore(true);
    // Placeholder for the paginated backend query.
    window.setTimeout(() => {
      setVisible((v) => v + PAGE_SIZE);
      setLoadingMore(false);
    }, 500);
  };

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-5">
        <Sticker tone="blue">Find your save</Sticker>
        <h1 className="mt-4 flex items-center gap-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          What are you <Highlight>looking for?</Highlight><MarginMark variant="circle" />
        </h1>
        <p className="mt-2 max-w-xl text-sm text-ink/60">
          Narrow it down by branch, semester, subject or type — and find the thing that
          actually saves your week.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <SearchBar value={query} onChange={setQuery} className="flex-1" />
          <div className="flex gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              aria-label="Sort resources"
              className="field sm:w-48"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-ink lg:hidden"
            >
              <SlidersHorizontal className="size-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
          <FilterPanel
            filters={filters}
            onChange={(f) => {
              setFilters(f);
              setVisible(PAGE_SIZE);
            }}
            onReset={() => setFilters(emptyFilters)}
            className={filtersOpen ? "" : "hidden lg:block"}
          />

          <div>
            <p className="mb-4 text-xs font-medium text-ink/50">
              {results.length} resource{results.length === 1 ? "" : "s"} found
            </p>

            {shown.length === 0 ? (
              <EmptyState
                title="No resources match those filters"
                description="Try clearing a filter or searching for a different subject. If nobody has uploaded it yet, you could be the first."
                actionLabel="Upload Notes"
                actionTo="/upload"
              />
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {shown.map((r) => (
                    <ResourceCard key={r.id} resource={r} />
                  ))}
                  {loadingMore &&
                    Array.from({ length: 3 }).map((_, i) => (
                      <ResourceCardSkeleton key={`s-${i}`} />
                    ))}
                </div>

                {visible < results.length && (
                  <button
                    type="button"
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="mt-8 w-full rounded-xl border border-white/70 bg-white/60 py-3 text-sm font-semibold text-ink disabled:opacity-60"
                  >
                    {loadingMore ? "Loading…" : "Load more resources"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
