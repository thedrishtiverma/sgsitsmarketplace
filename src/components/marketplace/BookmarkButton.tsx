import { cn } from "@/lib/utils";
import { useSaved } from "@/lib/saved-store";
import { MarketplaceIcon } from "@/components/icons/MarketplaceIcons";
import { Button } from "@/components/ui/button";
export function BookmarkButton({resourceId,withLabel=false,className}:{resourceId:string;withLabel?:boolean;className?:string}){const{isSaved,toggleSaved}=useSaved();const active=isSaved(resourceId);return <Button variant="ghost" type="button" aria-pressed={active} title={active?"Remove from saved":"Save resource"} aria-label={active?"Remove from saved":"Save resource"} onClick={e=>{e.preventDefault();e.stopPropagation();toggleSaved(resourceId)}} className={cn("bookmark-control",active&&"bookmark-active",withLabel&&"bookmark-labeled",className)}><MarketplaceIcon name="saved" className={cn("size-4",active&&"bookmark-pop fill-current")}/>{withLabel&&(active?"Saved":"Save")}</Button>}
