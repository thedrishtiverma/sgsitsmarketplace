import { Link } from "@tanstack/react-router";
import { FileQuestion, Loader2, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  actionLabel,
  actionTo,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: "/explore" | "/upload";
}) {
  return (
    <div className="glass-soft flex flex-col items-center rounded-2xl px-6 py-14 text-center">
      <FileQuestion className="size-7 text-ink/35" />
      <p className="mt-4 font-display text-lg font-bold text-ink">{title}</p>
      <p className="mt-1.5 max-w-sm text-sm text-ink/55">{description}</p>
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="brand-gradient mt-6 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

export function LoadingState({
  label = "Digging through the shelves…",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-soft flex items-center justify-center gap-3 rounded-2xl px-6 py-14 text-sm text-ink/60",
        className,
      )}
      role="status"
    >
      <Loader2 className="size-4 animate-spin text-brand" />
      {label}
    </div>
  );
}

export function ResourceCardSkeleton() {
  return (
    <div className="glass-soft rounded-2xl p-5">
      <div className="h-5 w-20 animate-pulse rounded-full bg-ink/10" />
      <div className="mt-4 h-4 w-4/5 animate-pulse rounded bg-ink/10" />
      <div className="mt-2 h-3 w-3/5 animate-pulse rounded bg-ink/10" />
      <div className="mt-6 h-7 w-full animate-pulse rounded bg-ink/5" />
    </div>
  );
}

export function ErrorState({
  title = "That didn't work",
  description = "We couldn't load this right now. Give it another go.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="glass-soft flex flex-col items-center rounded-2xl px-6 py-14 text-center">
      <TriangleAlert className="size-7 text-rose-500" />
      <p className="mt-4 font-display text-lg font-bold text-ink">{title}</p>
      <p className="mt-1.5 max-w-sm text-sm text-ink/55">{description}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-semibold text-ink"
        >
          Try again
        </button>
      )}
    </div>
  );
}
