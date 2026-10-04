import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { MobileTabBar, Navbar, WorkspaceHeader } from "./Navbar";
export function PageShell({children}:{children:ReactNode}){return <div className="app-canvas workspace-shell min-h-screen font-sans text-ink"><Navbar/><div className="workspace-main"><WorkspaceHeader/><main className="workspace-content">{children}</main><Footer/></div><MobileTabBar/></div>}
export function Section({title,subtitle,action,children}:{title:string;subtitle?:string;action?:ReactNode;children:ReactNode}){return <section className="workspace-section"><div className="section-heading"><div><h2 className="font-display text-2xl font-bold">{title}</h2>{subtitle&&<p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}</div>{action}</div><div className="mt-5">{children}</div></section>}
