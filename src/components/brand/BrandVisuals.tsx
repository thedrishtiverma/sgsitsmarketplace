import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MarketplaceIcon, type IconName } from "@/components/icons/MarketplaceIcons";

export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("highlight-mark", className)}>{children}</span>;
}

export function MarginMark({ variant = "spark", className }: { variant?: "spark" | "arrow" | "bracket" | "check"; className?: string }) {
  const paths = {
    spark: "M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3",
    arrow: "M3 18c5-1 9-4 13-10M11 7l6 1-1 6",
    bracket: "M16 3H8v18h8",
    check: "M4 13l5 5L20 6",
  };
  return <svg viewBox="0 0 24 24" aria-hidden className={cn("margin-mark", className)}><path d={paths[variant]} /></svg>;
}

export function Sticker({ children, tone = "gold", className }: { children: ReactNode; tone?: "gold" | "blue" | "ink"; className?: string }) {
  return <span className={cn("sticker", `sticker-${tone}`, className)}>{children}</span>;
}

export function Pattern({ variant = "grid", className }: { variant?: "grid" | "marks" | "documents"; className?: string }) {
  return <span aria-hidden className={cn("brand-pattern", `brand-pattern-${variant}`, className)} />;
}

export function IconTile({ icon, label, className }: { icon: IconName; label?: string; className?: string }) {
  return <span className={cn("icon-tile", className)}><MarketplaceIcon name={icon} label={label} className="size-6" /></span>;
}
