import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/marketplace/PageShell";
import { UploadForm } from "@/components/marketplace/UploadForm";
import { Highlight, MarginMark, Sticker } from "@/components/brand/BrandVisuals";

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
        <Sticker tone="blue">Pass it on</Sticker>
        <h1 className="mt-4 flex items-center gap-3 font-display text-3xl font-bold text-ink sm:text-4xl">
          Got something useful? <Highlight>Drop it here.</Highlight><MarginMark variant="arrow" />
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
