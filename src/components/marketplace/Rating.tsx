import { cn } from "@/lib/utils";
import { MarketplaceIcon } from "@/components/icons/MarketplaceIcons";
export function Rating({value,count,size="sm",className}:{value:number;count?:number;size?:"sm"|"lg";className?:string}){return <span className={cn("inline-flex items-center gap-1 font-bold text-accent2",size==="sm"?"text-xs":"text-sm",className)} aria-label={`Rated ${value} out of 5`}><MarketplaceIcon name="star" className={cn(size==="sm"?"size-3.5":"size-4","fill-current")}/>{value.toFixed(1)}{count!==undefined&&<span className="font-medium text-ink/45">({count})</span>}</span>}
