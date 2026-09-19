import type { SVGProps } from "react";
import type { ResourceType } from "@/data/types";
import { cn } from "@/lib/utils";

export type IconName =
  | "notes" | "handwritten" | "pyq" | "lab" | "important" | "assignment"
  | "study-guide" | "books" | "upload" | "download" | "saved" | "search"
  | "profile" | "semester" | "subject" | "branch" | "verified" | "report"
  | "exam" | "resource" | "home" | "browse" | "menu" | "close" | "star"
  | "calendar" | "filter" | "arrow-right";

export interface MarketplaceIconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  label?: string;
}

const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Glyph({ name }: { name: IconName }) {
  switch (name) {
    case "notes": return <><path {...common} d="M7 3.5h8.5L19 7v13.5H7z"/><path {...common} d="M15.5 3.5V7H19M5 7.5v13h10M9.5 12h6M9 16.2c2.6-.7 5-.8 7.1-.2"/><path d="M8.5 17.7c2.8-.8 5.6-.8 8.2-.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".35"/></>;
    case "handwritten": return <><path {...common} d="M6 3.5h10l2 2v15H6zM16 3.5v3h2"/><path {...common} d="M9 11c1.4-2.1 2.2 2.8 3.6.3 1-1.7 1.5 1.8 2.8.2M9 15.5c2.3-.7 4.6-.7 6.7 0"/></>;
    case "pyq": return <><path {...common} d="M6 3.5h10l2 2v15H6zM16 3.5v3h2"/><path {...common} d="M10.1 10.1a2.3 2.3 0 1 1 3.4 2c-.9.5-1.4 1-1.4 2M12.1 17.2h.01"/></>;
    case "lab": return <><path {...common} d="M9 3.5h6M10 3.5v5L5.7 17a2.3 2.3 0 0 0 2 3.5h8.6a2.3 2.3 0 0 0 2-3.5L14 8.5v-5M8.2 15h7.6"/><path {...common} d="M9.5 17.8h.01M13 16.7h.01"/></>;
    case "important": return <><path {...common} d="M6 3.5h10l2 2v15H6zM16 3.5v3h2M12 9v5M12 17.3h.01"/><path d="M8.5 15.5h7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity=".3"/></>;
    case "assignment": return <><path {...common} d="M7 3.5h10v17H7zM9.5 9l1 1 1.7-2M13.5 9.2h1.7M9.5 14l1 1 1.7-2M13.5 14.2h1.7"/></>;
    case "study-guide": return <><path {...common} d="M6 3.5h12v17l-6-3-6 3zM9 8h6M9 11.5h4"/><path {...common} d="M15 3.5v5l-1.5-1-1.5 1v-5"/></>;
    case "books": return <><path {...common} d="M3.5 6.5c3-1.5 5.8-.9 8.5 1.2v12c-2.7-2.1-5.5-2.7-8.5-1.2zM20.5 6.5c-3-1.5-5.8-.9-8.5 1.2v12c2.7-2.1 5.5-2.7 8.5-1.2z"/><path {...common} d="M12 7.7v12"/></>;
    case "upload": return <><path {...common} d="M5 16.5v4h14v-4M12 16V4M8.5 7.5 12 4l3.5 3.5"/><path {...common} d="M7 12.5c-2.6 0-3-4-.4-4.5.8-3.1 5.3-3.5 6.8-.8 2.4-.6 4.4 1.1 4.4 3.3"/></>;
    case "download": return <><path {...common} d="M5 16.5v4h14v-4M12 4v12M8.5 12.5 12 16l3.5-3.5"/></>;
    case "saved": return <path {...common} d="M7 3.5h10v17l-5-3.4-5 3.4z"/>;
    case "search": return <><circle {...common} cx="10.5" cy="10.5" r="5.5"/><path {...common} d="m15 15 5 5"/><path {...common} d="M8.4 8.2c1-.9 2.4-1.1 3.6-.5"/></>;
    case "profile": return <><circle {...common} cx="12" cy="8" r="3.4"/><path {...common} d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6"/><path {...common} d="M9 20h6"/></>;
    case "semester": return <><path {...common} d="M5 5.5h14v15H5zM8 3.5v4M16 3.5v4M5 9h14"/><path {...common} d="M8.5 12.5h2M13.5 12.5h2M8.5 16.5h2"/></>;
    case "subject": return <><path {...common} d="M5 4h10a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM8 20c-2 0-3-1-3-3s1-3 3-3h10M9 8h5"/></>;
    case "branch": return <><path {...common} d="M12 4v5M6 20v-5h12v5M6 15v-3h12v3"/><circle {...common} cx="12" cy="4" r="2"/><circle {...common} cx="6" cy="20" r="2"/><circle {...common} cx="18" cy="20" r="2"/></>;
    case "verified": return <><path {...common} d="m12 2.8 2.2 1.6 2.8-.1.8 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.8 2.7-2.8-.1L12 21.2l-2.2-1.6-2.8.1-.8-2.7-2.3-1.6.9-2.7-.9-2.7 2.3-1.6L7 4.3l2.8.1z"/><path {...common} d="m8.5 12 2.2 2.2 4.8-5"/></>;
    case "report": return <><path {...common} d="M6 21V4M6 5h11l-2 3 2 3H6"/><path {...common} d="M6 18h5"/></>;
    case "exam": return <><path {...common} d="M6 3.5h12v17H6zM9 8h6M9 12h4M9 16h2"/><path {...common} d="m14.5 15 1 1 2-2"/></>;
    case "resource": return <><path {...common} d="M7 3.5h8.5L19 7v13.5H7zM15.5 3.5V7H19M10 11h6M10 15h6"/><path {...common} d="M5 7v13"/></>;
    case "home": return <><path {...common} d="m4 11 8-7 8 7M6.5 9v11h11V9M10 20v-6h4v6"/></>;
    case "browse": return <><circle {...common} cx="12" cy="12" r="8.5"/><path {...common} d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9z"/></>;
    case "menu": return <><path {...common} d="M4 7h16M4 12h12M4 17h16"/></>;
    case "close": return <path {...common} d="m6 6 12 12M18 6 6 18"/>;
    case "star": return <path {...common} d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z"/>;
    case "calendar": return <><path {...common} d="M5 5.5h14v15H5zM8 3.5v4M16 3.5v4M5 9h14"/></>;
    case "filter": return <><path {...common} d="M4 6h16M7 12h10M10 18h4"/><circle cx="8" cy="6" r="1.2" fill="currentColor"/><circle cx="15" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="18" r="1.2" fill="currentColor"/></>;
    case "arrow-right": return <path {...common} d="M4 12h15M14 7l5 5-5 5"/>;
  }
}

export function MarketplaceIcon({ name, label, className, ...props }: MarketplaceIconProps) {
  return <svg viewBox="0 0 24 24" role={label ? "img" : undefined} aria-hidden={label ? undefined : true} aria-label={label} className={cn("shrink-0", className)} {...props}><Glyph name={name} /></svg>;
}

export const RESOURCE_ICON: Record<ResourceType, IconName> = {
  Notes: "notes", "Handwritten Notes": "handwritten", PYQ: "pyq",
  "Important Questions": "important", "Lab Manual": "lab", Assignment: "assignment",
  "Study Guide": "study-guide", Other: "resource",
};
