import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSaved } from "@/lib/saved-store";

export function BookmarkButton({
  resourceId,
  withLabel = false,
  className,
}: {
  resourceId: string;
  withLabel?: boolean;
  className?: string;
}) {
  const { isSaved, toggleSaved } = useSaved();
  const active = isSaved(resourceId);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? "Remove from saved" : "Save resource"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSaved(resourceId);
      }}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl text-ink/45 transition-colors hover:bg-white/70 hover:text-brand",
        active && "text-brand",
        withLabel ? "border border-white/70 bg-white/60 px-4 py-3 text-sm font-semibold" : "size-8 justify-center",
        className,
      )}
    >
      <Bookmark className={cn("size-4", active && "fill-current")} />
      {withLabel && (active ? "Saved" : "Save")}
    </button>
  );
}
