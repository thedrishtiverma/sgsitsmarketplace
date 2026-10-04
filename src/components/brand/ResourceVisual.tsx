import type { Resource } from "@/data/types";
import { MarketplaceIcon, RESOURCE_ICON } from "@/components/icons/MarketplaceIcons";
export function ResourceVisual({resource}:{resource:Resource}) {
 return <div className="resource-art" data-category={resource.type} aria-hidden="true"><span className="art-index">{resource.branch} / {String(resource.semester).padStart(2,"0")}</span><div className="document-back"/><div className="document-front"><div className="document-topline"><span>SG / STUDENT EDITION</span><MarketplaceIcon name={RESOURCE_ICON[resource.type]} className="size-6"/></div><span className="document-subject">{resource.subject}</span><span className="document-rule"/><span className="document-lines"/><span className="document-footer">{resource.pages} PAGES <span>↗</span></span></div><span className="art-type">{resource.type}</span></div>;
}
