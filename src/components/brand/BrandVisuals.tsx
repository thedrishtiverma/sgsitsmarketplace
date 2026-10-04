import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MarketplaceIcon, type IconName } from "@/components/icons/MarketplaceIcons";

export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("highlight-mark", className)}>{children}</span>;
}

export function MarginMark({ variant = "star", className }: { variant?: "star" | "arrow" | "circle" | "underline"; className?: string }) {
  const paths = {
    star: "M12 2l1.7 7.7L21 12l-7.3 2.3L12 22l-1.7-7.7L3 12l7.3-2.3z",
    arrow: "M3 18c5-1 9-4 13-10M11 7l6 1-1 6",
    circle: "M19 5c4 5 1 14-6 16S1 17 3 10 11 0 19 5z",
    underline: "M3 15c5-2 11-2 18 0M5 19c4-1 9-1 14 0",
  };
  return <svg viewBox="0 0 24 24" aria-hidden className={cn("margin-mark", className)}><path d={paths[variant]} /></svg>;
}

export function Sticker({ children, tone = "gold", className }: { children: ReactNode; tone?: "gold" | "blue" | "ink"; className?: string }) {
  return <span className={cn("sticker", `sticker-${tone}`, className)}>{children}</span>;
}

export function Pattern({ variant = "grid", className }: { variant?: "grid" | "marks" | "documents" | "paper"; className?: string }) {
  return <span aria-hidden className={cn("brand-pattern", `brand-pattern-${variant}`, className)} />;
}

export function IconTile({ icon, label, className }: { icon: IconName; label?: string; className?: string }) {
  return <span className={cn("icon-tile", className)}><MarketplaceIcon name={icon} {...(label ? { label } : {})} className="size-6" /></span>;
}
