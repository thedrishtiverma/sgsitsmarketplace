import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/marketplace/PageShell";
import { ResourceCard } from "@/components/marketplace/ResourceCard";
import { EmptyState } from "@/components/marketplace/States";
import { RESOURCES } from "@/data/mock";
import { useSaved } from "@/lib/saved-store";
import { Highlight, MarginMark, Sticker } from "@/components/brand/BrandVisuals";

export const Route = createFileRoute("/saved")({
  head: () => ({
    meta: [
      { title: "Saved Resources — SGSITS Marketplace" },
      {
        name: "description",
        content:
          "Every note, PYQ and lab manual you bookmarked, ready for exam week.",
      },
      { property: "og:title", content: "Saved Resources — SGSITS Marketplace" },
      {
        property: "og:description",
        content: "Every note and PYQ you bookmarked, ready for exam week.",
      },
    ],
  }),
  component: SavedPage,
});

function SavedPage() {
  const { saved } = useSaved();
  const items = RESOURCES.filter((r) => saved.includes(r.id));

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-5">
        <Sticker tone="gold">Exam save</Sticker>
        <h1 className="mt-4 flex items-center gap-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          <Highlight>Saved for later</Highlight><MarginMark variant="star" />
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          {items.length} {items.length === 1 ? "thing" : "things"} waiting for you.
        </p>

        <div className="mt-8">
          {items.length === 0 ? (
            <EmptyState
              title="Nothing saved yet"
              description="Bookmark resources while you browse and they'll wait for you here."
              actionLabel="Explore Notes"
              actionTo="/explore"
            />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
