import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import type { Resource, ResourceType } from "@/data/types";
import { Rating } from "./Rating";
import { BookmarkButton } from "./BookmarkButton";
import { cn } from "@/lib/utils";

const typeStyles: Record<ResourceType, string> = {
  Notes: "bg-brand/10 text-brand",
  "Handwritten Notes": "bg-accent2/20 text-cyan-700",
  PYQ: "bg-rose-500/10 text-rose-600",
  "Important Questions": "bg-emerald-500/10 text-emerald-600",
  "Lab Manual": "bg-violet-500/10 text-violet-600",
  Assignment: "bg-amber-500/10 text-amber-600",
  "Study Guide": "bg-sky-500/10 text-sky-700",
  Other: "bg-ink/10 text-ink/70",
};

export function TypePill({
  type,
  className,
}: {
  type: ResourceType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[11px] font-semibold",
        typeStyles[type],
        className,
      )}
    >
      {type}
    </span>
  );
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="glass glass-hover group rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <TypePill type={resource.type} />
        <BookmarkButton resourceId={resource.id} />
      </div>

      <Link
        to="/resource/$resourceId"
        params={{ resourceId: resource.id }}
        className="mt-3 block"
      >
        <h3 className="font-display text-[16px] font-semibold leading-snug text-ink group-hover:text-brand">
          {resource.title}
        </h3>
        <p className="mt-1 text-xs text-ink/55">
          {resource.subject} · {resource.branch} · Sem {resource.semester}
        </p>
      </Link>

      <div className="mt-4 flex items-center gap-2 border-t border-white/60 pt-3">
        <span className="grid size-7 place-items-center rounded-full bg-brand/15 text-[11px] font-bold text-brand">
          {resource.uploader.initials}
        </span>
        <span className="truncate text-xs font-medium text-ink/70">
          {resource.uploader.name}
        </span>
        <Rating value={resource.rating} className="ml-auto" />
        <span className="inline-flex items-center gap-1 text-[11px] text-ink/45">
          <Download className="size-3" />
          {resource.downloads}
        </span>
      </div>
    </article>
  );
}
