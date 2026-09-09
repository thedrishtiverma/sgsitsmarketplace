import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Star } from "lucide-react";
import { PageShell } from "@/components/marketplace/PageShell";
import { TypePill } from "@/components/marketplace/ResourceCard";
import { EmptyState } from "@/components/marketplace/States";
import { MY_UPLOADS } from "@/data/mock";

export const Route = createFileRoute("/my-uploads")({
  head: () => ({
    meta: [
      { title: "My Uploads — SGSITS Marketplace" },
      {
        name: "description",
        content:
          "Manage the notes, PYQs and manuals you shared, and see how they're performing.",
      },
      { property: "og:title", content: "My Uploads — SGSITS Marketplace" },
      {
        property: "og:description",
        content: "Manage what you shared and see how it's performing.",
      },
    ],
  }),
  component: MyUploadsPage,
});

function MyUploadsPage() {
  const uploads = MY_UPLOADS;
  const totalDownloads = uploads.reduce((s, r) => s + r.downloads, 0);

  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Stuff you shared
            </h1>
            <p className="mt-2 text-sm text-ink/60">
              {uploads.length} files · {totalDownloads} downloads by your batchmates
            </p>
          </div>
          <Link
            to="/upload"
            className="brand-gradient rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25"
          >
            Upload something
          </Link>
        </div>

        <div className="mt-8 space-y-3">
          {uploads.length === 0 ? (
            <EmptyState
              title="You haven't shared anything yet"
              description="Your first upload helps someone in your batch pass a paper."
              actionLabel="Upload Notes"
              actionTo="/upload"
            />
          ) : (
            uploads.map((r) => (
              <Link
                key={r.id}
                to="/resource/$resourceId"
                params={{ resourceId: r.id }}
                className="glass glass-hover flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <TypePill type={r.type} />
                  <p className="mt-2 truncate font-display text-lg font-bold text-ink">
                    {r.title}
                  </p>
                  <p className="mt-0.5 text-xs text-ink/50">
                    {r.subject} · {r.branch} · Semester {r.semester}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-5 text-sm text-ink/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Download className="size-4" /> {r.downloads}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="size-4 fill-amber-400 text-amber-400" />{" "}
                    {r.rating.toFixed(1)}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </PageShell>
  );
}
