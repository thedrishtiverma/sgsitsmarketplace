import { Link } from "@tanstack/react-router";
import type { ResourceType } from "@/data/types";

export function CategoryCard({
  type,
  blurb,
  count,
}: {
  type: ResourceType;
  blurb: string;
  count: number;
}) {
  return (
    <Link
      to="/explore"
      search={{ type }}
      className="glass glass-hover block rounded-2xl p-4"
    >
      <p className="font-display text-[15px] font-semibold text-ink">{type}</p>
      <p className="mt-1 text-xs text-ink/55">{blurb}</p>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
        {count} resources
      </p>
    </Link>
  );
}
