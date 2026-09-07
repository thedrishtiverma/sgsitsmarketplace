import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/marketplace/PageShell";
import { ResourceCard } from "@/components/marketplace/ResourceCard";
import { EmptyState } from "@/components/marketplace/States";
import { CURRENT_USER, MY_UPLOADS, RESOURCES } from "@/data/mock";
import { useSaved } from "@/lib/saved-store";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Your Profile — SGSITS Marketplace" },
      {
        name: "description",
        content:
          "Your SGSITS Marketplace profile: uploads, saved resources and download stats.",
      },
      { property: "og:title", content: "Your Profile — SGSITS Marketplace" },
      {
        property: "og:description",
        content: "Uploads, saved resources and download stats.",
      },
    ],
  }),
  component: ProfilePage,
});

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/55 p-4 text-center">
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
      <p className="mt-0.5 text-[11px] text-ink/50">{label}</p>
    </div>
  );
}

function ProfilePage() {
  const { saved } = useSaved();
  const savedResources = RESOURCES.filter((r) => saved.includes(r.id));

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-5">
        <div className="glass flex flex-col items-start gap-5 rounded-2xl p-6 sm:flex-row sm:items-center">
          <span className="grid size-20 place-items-center rounded-full bg-gradient-to-br from-brand to-accent2 font-display text-2xl font-bold text-white shadow-lg shadow-brand/30">
            {CURRENT_USER.initials}
          </span>
          <div className="flex-1">
            <h1 className="font-display text-2xl font-bold tracking-tight text-ink">
              {CURRENT_USER.name}
            </h1>
            <p className="mt-1 text-sm text-ink/60">
              {CURRENT_USER.branch} · Semester {CURRENT_USER.semester} ·{" "}
              {CURRENT_USER.email}
            </p>
            <p className="mt-1 text-xs text-ink/45">
              Member since{" "}
              {new Date(CURRENT_USER.joinedOn).toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <Link
            to="/upload"
            className="brand-gradient rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25"
          >
            Upload Notes
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Uploads" value={CURRENT_USER.uploadsCount} />
          <Stat label="Downloads received" value={CURRENT_USER.totalDownloads} />
          <Stat label="Average rating" value={CURRENT_USER.avgRating.toFixed(1)} />
          <Stat label="Saved" value={savedResources.length} />
        </div>

        <section className="mt-10">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Uploaded resources
            </h2>
            <Link
              to="/my-uploads"
              className="text-sm font-semibold text-brand hover:underline"
            >
              Manage →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MY_UPLOADS.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
            Saved resources
          </h2>
          <div className="mt-6">
            {savedResources.length === 0 ? (
              <EmptyState
                title="Nothing saved yet"
                description="Tap the bookmark on any resource to keep it here for exam week."
                actionLabel="Explore Notes"
                actionTo="/explore"
              />
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {savedResources.map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
