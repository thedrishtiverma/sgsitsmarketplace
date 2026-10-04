import { Link } from "@tanstack/react-router";
import type { Resource, ResourceType } from "@/data/types";
import { TYPE_LABELS } from "@/data/mock";
import { Rating } from "./Rating";
import { BookmarkButton } from "./BookmarkButton";
import { cn } from "@/lib/utils";
import { MarketplaceIcon, RESOURCE_ICON } from "@/components/icons/MarketplaceIcons";
import { ResourceVisual } from "@/components/brand/ResourceVisual";
export function TypePill({type,className}:{type:ResourceType;className?:string}){return <span data-category={type} className={cn("resource-pill",className)}><MarketplaceIcon name={RESOURCE_ICON[type]} className="size-3.5"/>{TYPE_LABELS[type]}</span>}
export function ResourceCard({resource}:{resource:Resource}){return <article className="resource-card group"><div className="resource-card-cover"><Link to="/resource/$resourceId" params={{resourceId:resource.id}} aria-label={`View ${resource.title}`}><ResourceVisual resource={resource}/></Link><BookmarkButton resourceId={resource.id} className="cover-bookmark"/></div><div className="resource-card-body"><div className="flex items-center justify-between gap-2"><TypePill type={resource.type}/><span className="text-[10px] text-muted-foreground">{resource.fileSize}</span></div><Link to="/resource/$resourceId" params={{resourceId:resource.id}}><h3 className="resource-card-title">{resource.title}</h3></Link><p className="text-xs text-muted-foreground">{resource.branch} · Semester {resource.semester} · {resource.pages} pages</p><div className="resource-card-bottom"><span className="resource-uploader">{resource.uploader.name}</span><Rating value={resource.rating}/><span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><MarketplaceIcon name="download" className="size-3.5"/>{resource.downloads}</span></div></div></article>}
