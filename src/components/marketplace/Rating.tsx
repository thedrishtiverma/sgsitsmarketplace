import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  value,
  count,
  size = "sm",
  className,
}: {
  value: number;
  count?: number;
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-semibold text-amber-500",
        size === "sm" ? "text-xs" : "text-sm",
        className,
      )}
      aria-label={`Rated ${value} out of 5`}
    >
      <Star
        className={size === "sm" ? "size-3.5 fill-amber-400 stroke-amber-400" : "size-4 fill-amber-400 stroke-amber-400"}
      />
      {value.toFixed(1)}
      {count !== undefined && (
        <span className="font-medium text-ink/45">({count})</span>
      )}
    </span>
  );
}
