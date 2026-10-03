import { Link } from "@tanstack/react-router";
import type { Subject } from "@/data/types";
import { Rating } from "./Rating";
import { MarginMark } from "@/components/brand/BrandVisuals";

export function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <Link
      to="/explore"
      search={{ subject: subject.name }}
      className="glass glass-hover paper-card block rounded-lg p-4"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
          {subject.code}
        </span>
        <span className="flex items-center gap-2"><MarginMark variant="circle"/><Rating value={subject.avgRating} /></span>
      </div>
      <p className="mt-2 font-display text-[15px] font-semibold leading-snug text-ink">
        {subject.name}
      </p>
      <p className="mt-1 text-xs text-ink/55">
        {subject.branch} · Sem {subject.semester} · {subject.resourceCount} resources
      </p>
    </Link>
  );
}
