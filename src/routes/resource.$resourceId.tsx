import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, Flag, FileText, Calendar } from "lucide-react";
import { PageShell } from "@/components/marketplace/PageShell";
import { ResourceCard, TypePill } from "@/components/marketplace/ResourceCard";
import { BookmarkButton } from "@/components/marketplace/BookmarkButton";
import { Rating } from "@/components/marketplace/Rating";
import { getRelatedResources, getResourceById } from "@/data/mock";

export const Route = createFileRoute("/resource/$resourceId")({
  loader: ({ params }) => {
    const resource = getResourceById(params.resourceId);
    if (!resource) throw notFound();
    return { resource, related: getRelatedResources(resource) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Resource unavailable — SGSITS Marketplace" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { resource } = loaderData;
    const description = `${resource.type} · ${resource.subject} · ${resource.branch} Sem ${resource.semester} — shared on SGSITS Marketplace.`;
    return {
      meta: [
        { title: `${resource.title} — SGSITS Marketplace` },
        { name: "description", content: description },
        { property: "og:title", content: `${resource.title} — SGSITS Marketplace` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ResourceDetails,
});

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/70 bg-white/55 p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}

function ResourceDetails() {
  const { resource, related } = Route.useLoaderData();

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-5">
        <Link to="/explore" className="text-xs font-semibold text-brand hover:underline">
          ← Back to explore
        </Link>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3">
                <TypePill type={resource.type} />
                <Rating value={resource.rating} count={resource.ratingCount} size="lg" />
                <span className="inline-flex items-center gap-1 text-xs text-ink/55">
                  <Download className="size-3.5" /> {resource.downloads} downloads
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink">
                {resource.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {resource.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Meta label="Subject" value={resource.subject} />
                <Meta label="Branch" value={resource.branch} />
                <Meta label="Semester" value={`Semester ${resource.semester}`} />
                <Meta label="Type" value={resource.type} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {resource.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/70 bg-white/55 px-2.5 py-1 text-[11px] font-medium text-ink/60"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Preview area */}
            <div className="glass-soft mt-6 rounded-2xl p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                Preview
              </p>
              <div className="mt-3 grid h-64 place-items-center rounded-xl border border-dashed border-ink/15 bg-white/45 text-center">
                <div>
                  <FileText className="mx-auto size-7 text-ink/30" />
                  <p className="mt-3 text-sm font-semibold text-ink/70">
                    {resource.pages} pages · {resource.fileSize}
                  </p>
                  <p className="mt-1 text-xs text-ink/45">
                    In-browser preview appears here once file storage is connected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand/80 to-accent2/80 text-sm font-bold text-white">
                  {resource.uploader.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {resource.uploader.name}
                  </span>
                  <span className="block text-xs text-ink/50">
                    {resource.uploader.branch} · Semester {resource.uploader.semester}
                  </span>
                </span>
              </div>

              <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink/55">
                <Calendar className="size-3.5" />
                Uploaded on{" "}
                {new Date(resource.uploadedOn).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>

              <button
                type="button"
                className="brand-gradient mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg shadow-brand/25"
              >
                <Download className="size-4" /> Download
              </button>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <BookmarkButton
                  resourceId={resource.id}
                  withLabel
                  className="justify-center"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-sm font-semibold text-ink/70 hover:text-rose-600"
                >
                  <Flag className="size-4" /> Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
              Related resources
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
