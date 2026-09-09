import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/marketplace/PageShell";
import { UploadForm } from "@/components/marketplace/UploadForm";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: "Upload a Resource — SGSITS Marketplace" },
      {
        name: "description",
        content:
          "Share your notes, PYQs, lab manuals and study guides with other SGSITS students.",
      },
      { property: "og:title", content: "Upload a Resource — SGSITS Marketplace" },
      {
        property: "og:description",
        content: "Share your notes and PYQs with other SGSITS students.",
      },
    ],
  }),
  component: UploadPage,
});

function UploadPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-5">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Got something useful? Drop it here.
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          Notes, PYQs, lab files, important questions — whatever helps. Only share what
          you made or are allowed to share, and give it a clear title.
        </p>
        <div className="mt-6">
          <UploadForm />
        </div>
      </div>
    </PageShell>
  );
}
