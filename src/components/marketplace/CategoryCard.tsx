import { Link } from "@tanstack/react-router";
import type { ResourceType } from "@/data/types";
import { IconTile, MarginMark } from "@/components/brand/BrandVisuals";
import { RESOURCE_ICON } from "@/components/icons/MarketplaceIcons";

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
      className="glass glass-hover resource-category-card block rounded-lg p-4"
    >
      <div className="flex items-start justify-between"><IconTile icon={RESOURCE_ICON[type]} label={type}/><MarginMark variant="star" /></div>
      <p className="mt-4 font-display text-[15px] font-semibold text-ink">{type}</p>
      <p className="mt-1 text-xs text-ink/55">{blurb}</p>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
        {count} resources
      </p>
    </Link>
  );
}
