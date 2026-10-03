import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/marketplace/PageShell";
import { ResourceCard } from "@/components/marketplace/ResourceCard";
import { SubjectCard } from "@/components/marketplace/SubjectCard";
import { CategoryCard } from "@/components/marketplace/CategoryCard";
import { Rating } from "@/components/marketplace/Rating";
import { Highlight, MarginMark, Pattern, Sticker } from "@/components/brand/BrandVisuals";
import { MarketplaceIcon } from "@/components/icons/MarketplaceIcons";
import {
  BRANCHES,
  CATEGORIES,
  MOST_DOWNLOADED,
  RECENTLY_ADDED,
  RESOURCES,
  SEMESTERS,
  SUBJECTS,
} from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGSITS Marketplace — Your college. Your notes. One place." },
      {
        name: "description",
        content:
          "Find notes, PYQs and academic resources shared by SGSITS Indore students, across every branch and semester.",
      },
      {
        property: "og:title",
        content: "SGSITS Marketplace — Your college. Your notes. One place.",
      },
      {
        property: "og:description",
        content:
          "Find notes, PYQs and academic resources shared by SGSITS Indore students.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = RESOURCES[0]!;

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-8 overflow-hidden px-4 pb-10 pt-12 sm:px-5 md:grid-cols-[1.1fr_0.9fr] md:pt-16">
        <Pattern variant="marks" className="opacity-[.08]" />
        <div>
          <Sticker tone="blue">Student-built · SGSITS</Sticker>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-6xl">
            Your college.
            <br />
            Your <Highlight>notes</Highlight>.
            <br />
            One place.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65">
            Find notes, PYQs and academic resources shared by SGSITS students — across
            every branch and semester.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/explore"
              className="brand-gradient rounded-md px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              Explore Notes
            </Link>
            <Link
              to="/upload"
              className="rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-ink"
            >
              Upload Notes
            </Link>
          </div>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display text-2xl font-bold text-ink">340+</p>
              <p className="text-xs text-ink/50">Resources</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-ink">1.2k</p>
              <p className="text-xs text-ink/50">Downloads</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-ink">8</p>
              <p className="text-xs text-ink/50">Branches</p>
            </div>
          </div>
        </div>

        {/* featured resource glass card */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-brand/20 to-accent2/20 blur-xl"
          />
          <div className="glass paper-card relative rounded-lg p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
                {featured.type}
              </span>
              <span className="text-xs text-ink/45">
                {featured.branch} · Sem {featured.semester}
              </span>
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
              {featured.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm text-ink/60">
              {featured.description}
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/70 bg-white/50 p-3">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand/80 to-accent2/80 text-sm font-bold text-white">
                {featured.uploader.initials}
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-ink">
                  {featured.uploader.name}
                </span>
                <span className="block text-xs text-ink/50">
                  {featured.uploader.branch} · Semester {featured.uploader.semester}
                </span>
              </span>
              <span className="text-right">
                <Rating value={featured.rating} />
                <span className="block text-[11px] text-ink/50">
                  {featured.downloads} dl
                </span>
              </span>
            </div>
            <Link
              to="/resource/$resourceId"
              params={{ resourceId: featured.id }}
                className="mt-4 block rounded-md bg-ink py-3 text-center text-sm font-semibold text-background"
            >
              View resource
            </Link>
          </div>
        </div>
      </section>

      <Section
        title="Popular Subjects"
        subtitle="What students are searching for this month"
        action={
          <Link
            to="/explore"
            className="text-sm font-semibold text-brand hover:underline"
          >
            View all →
          </Link>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.slice(0, 6).map((s) => (
            <SubjectCard key={s.id} subject={s} />
          ))}
        </div>
      </Section>

      <Section
        title="Recently Added"
        subtitle="Fresh resources from your batchmates"
        action={
          <Link
            to="/explore"
            className="text-sm font-semibold text-brand hover:underline"
          >
            View all →
          </Link>
        }
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RECENTLY_ADDED.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </Section>

      <Section title="Most Downloaded" subtitle="The files everyone keeps coming back to">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MOST_DOWNLOADED.map((r, i) => (
            <Link
              key={r.id}
              to="/resource/$resourceId"
              params={{ resourceId: r.id }}
              className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
            >
              <span className="font-display text-3xl font-bold text-brand/30">
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-display text-[15px] font-semibold text-ink">
                  {r.title}
                </span>
                <span className="mt-1 block text-xs text-ink/55">
                  {r.branch} · Sem {r.semester}
                </span>
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink/60">
                <MarketplaceIcon name="download" className="size-3.5" />
                {r.downloads}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Browse by Branch" subtitle="Every department at SGSITS, Indore">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {BRANCHES.map((b) => (
            <Link
              key={b.code}
              to="/explore"
              search={{ branch: b.code }}
              className="glass glass-hover rounded-xl p-4"
            >
              <p className="font-display text-lg font-bold text-ink">{b.code}</p>
              <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-ink/55">
                {b.name}
              </p>
              <p className="mt-2 text-[11px] font-semibold text-brand">
                {b.resourceCount} resources
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Browse by Semester" subtitle="Jump straight to your current term">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {SEMESTERS.map((s) => (
            <Link
              key={s}
              to="/explore"
              search={{ semester: s }}
              className="glass glass-hover rounded-xl p-4 text-center"
            >
              <span className="block font-display text-xl font-bold text-ink">{s}</span>
              <span className="block text-[11px] text-ink/50">Sem</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Resource Categories" subtitle="Pick the kind of material you need">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.type} {...c} />
          ))}
        </div>
        <Link
          to="/explore"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
        >
          Browse everything <MarketplaceIcon name="arrow-right" className="size-4" />
        </Link>
      </Section>
    </PageShell>
  );
}
