import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/marketplace/PageShell";
import { ResourceCard } from "@/components/marketplace/ResourceCard";
import { Highlight, MarginMark, Sticker } from "@/components/brand/BrandVisuals";
import { MarketplaceIcon, RESOURCE_ICON, type IconName } from "@/components/icons/MarketplaceIcons";
import { MOODS, useMood } from "@/lib/mood";
import { BRANCHES, CATEGORIES, MOST_DOWNLOADED, RECENTLY_ADDED, SEMESTERS, SUBJECTS, TYPE_LABELS } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGSITS Marketplace — Your college. Your notes. One place." },
      { name: "description", content: "Find notes, PYQs and academic resources shared by SGSITS Indore students, in the mood that suits you." },
      { property: "og:title", content: "SGSITS Marketplace — Your college. Your notes. One place." },
      { property: "og:description", content: "Notes, PYQs and resources passed student to student at SGSITS Indore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const TICKER = ["Just dropped: DAA unit 4", "Exam save", "1K+ downloads", "Student pick", "From your sem", "Seniors → juniors", "Most saved", "Fresh PYQs"];
const PALETTE: IconName[] = ["notes", "handwritten", "pyq", "lab", "important", "assignment", "study-guide", "books", "upload", "download", "saved", "search", "profile", "semester", "subject", "branch", "verified", "report", "exam", "resource"];

function Home() {
  const { mood, setMood } = useMood();
  return (
    <PageShell>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-5 md:pt-20">
        <Sticker tone="gold">Unofficial · student-built · SGSITS</Sticker>
        <h1 className="mt-6 font-display text-[3.2rem] leading-[0.95] text-ink sm:text-7xl lg:text-[6.5rem]">
          Your college.<br />Your <Highlight>notes</Highlight>.<br />One place.
        </h1>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-ink/65">
            A shared shelf of notes, PYQs and lab manuals, passed from seniors to juniors. Pick a mood and the whole place changes with you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/explore" className="brand-gradient inline-flex items-center gap-2 px-6 py-3 text-sm font-bold">
              <MarketplaceIcon name="browse" className="size-4" />Explore Notes
            </Link>
            <Link to="/upload" className="glass inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-ink">
              <MarketplaceIcon name="upload" className="size-4" />Upload Notes
            </Link>
          </div>
        </div>

        {/* MOOD STAGE */}
        <div className="mt-14">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/50">
            <MarginMark variant="arrow" /> Choose your mood
          </p>
          <div role="radiogroup" aria-label="Interface mood" className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {MOODS.map((m) => (
              <button key={m.id} type="button" role="radio" aria-checked={mood === m.id} onClick={() => setMood(m.id)} className={`mood-tile mood-tile-${m.id}`}>
                <span className="text-3xl leading-none sm:text-4xl">{m.label}</span>
                <span className="mt-4 font-sans text-xs normal-case leading-snug opacity-80">{m.blurb}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee mb-14" aria-hidden>
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track">
            {TICKER.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 font-display text-lg">
                <MarketplaceIcon name="star" className="size-4" />{t}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* CHANNELS — subjects as collections */}
      <Section title="Popular Subjects" subtitle="Collections students keep adding to" action={<Link to="/explore" className="text-sm font-bold text-brand hover:underline">All channels →</Link>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SUBJECTS.slice(0, 6).map((s, i) => (
            <Link key={s.id} to="/explore" search={{ q: s.name }} className="glass glass-hover group flex flex-col justify-between p-5" style={{ minHeight: i % 3 === 0 ? 180 : 150 }}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink/45">{s.code} · {s.branch} · Sem {s.semester}</span>
                <MarketplaceIcon name="subject" className="size-6 text-brand" />
              </div>
              <div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{s.name}</h3>
                <p className="mt-2 text-xs font-semibold text-ink/55">{s.resourceCount} blocks · ★ {s.avgRating.toFixed(1)}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* BOARD — recent drops */}
      <Section title="Recently Added" subtitle="Fresh off the photocopier" action={<Link to="/explore" className="text-sm font-bold text-brand hover:underline">View all →</Link>}>
        <div className="board">
          <div className="glass p-6">
            <Sticker tone="ink">Just dropped</Sticker>
            <p className="mt-4 font-display text-3xl leading-tight text-ink">Someone in your sem just saved your weekend.</p>
          </div>
          {RECENTLY_ADDED.map((r) => <ResourceCard key={r.id} resource={r} />)}
        </div>
      </Section>

      <Section title="Most Downloaded" subtitle="The files everyone keeps coming back to">
        <ol className="glass divide-y divide-border">
          {MOST_DOWNLOADED.map((r, i) => (
            <li key={r.id}>
              <Link to="/resource/$resourceId" params={{ resourceId: r.id }} className="flex items-center gap-5 px-5 py-4 hover:bg-brand-soft/60">
                <span className="w-12 font-display text-4xl text-brand/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-display text-lg text-ink">{r.title}</span>
                  <span className="block text-xs text-ink/55">{r.subject} · {r.branch} · Sem {r.semester}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-ink/70"><MarketplaceIcon name="download" className="size-4" />{r.downloads}</span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Browse by Branch" subtitle="Every department at SGSITS, Indore">
        <div className="flex flex-wrap gap-3">
          {BRANCHES.map((b) => (
            <Link key={b.code} to="/explore" search={{ branch: b.code }} title={b.name} className="glass glass-hover inline-flex items-baseline gap-2 px-5 py-3">
              <span className="font-display text-xl text-ink">{b.code}</span>
              <span className="text-xs font-semibold text-ink/50">{b.resourceCount}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Browse by Semester" subtitle="Jump straight to your current term">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {SEMESTERS.map((s) => (
            <Link key={s} to="/explore" search={{ semester: s }} className="glass glass-hover py-5 text-center">
              <span className="block font-display text-3xl text-ink">{s}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink/45">Sem</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Resource Categories" subtitle="Every type has its own symbol">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link key={c.type} to="/explore" search={{ type: c.type }} className="glass glass-hover flex flex-col gap-4 p-5">
              <span className="icon-tile"><MarketplaceIcon name={RESOURCE_ICON[c.type]} className="size-6" /></span>
              <span>
                <span className="block font-display text-xl text-ink">{TYPE_LABELS[c.type]}</span>
                <span className="mt-1 block text-xs text-ink/55">{c.blurb}</span>
              </span>
              <span className="text-xs font-bold text-brand">{c.count} files</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="The icon palette" subtitle="20 original symbols. Switch moods to see them change.">
        <div className="glass grid grid-cols-4 gap-px overflow-hidden sm:grid-cols-5 lg:grid-cols-10">
          {PALETTE.map((n) => (
            <div key={n} className="flex flex-col items-center gap-2 bg-card px-2 py-5 text-ink">
              <MarketplaceIcon name={n} label={n} className="size-8" />
              <span className="text-[10px] font-semibold text-ink/50">{n}</span>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
