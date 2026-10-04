import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CURRENT_USER } from "@/data/mock";
import markAsset from "@/assets/sgsits-mark.png.asset.json";
import { MarketplaceIcon, type IconName } from "@/components/icons/MarketplaceIcons";

const links = [
  { to: "/explore", label: "Browse", icon: "browse" },
  { to: "/upload", label: "Upload", icon: "upload" },
  { to: "/saved", label: "Saved", icon: "saved" },
] as const satisfies ReadonlyArray<{ to: string; label: string; icon: IconName }>;

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem("sgsits-theme");
    const next = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("sgsits-theme", next ? "dark" : "light");
  };
  return <button type="button" onClick={toggle} aria-label={dark ? "Switch to day mode" : "Switch to Night shift"} title={dark ? "Day mode" : "Night shift"} className="theme-toggle"><span aria-hidden className="theme-toggle-glyph">{dark ? "☀" : "☾"}</span><span className="hidden text-[11px] font-bold lg:inline">{dark ? "Day mode" : "Night shift"}</span></button>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-30 border-b border-border bg-card/95">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
      <Link to="/" className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-lg bg-brand-deep"><img src={markAsset.url} alt="SGSITS Marketplace mark" className="size-9" width={36} height={36}/></span>
        <span className="leading-tight"><span className="block font-display text-base font-bold text-brand-deep">SGSITS Marketplace</span><span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">The unofficial internet of SGSITS</span></span>
      </Link>
      <div className="hidden items-center gap-1 md:flex">{links.map(l => <Link key={l.to} to={l.to} className="rounded-md px-3 py-2 text-sm font-semibold text-ink/65 hover:bg-brand-soft hover:text-brand" activeProps={{className:"bg-brand-soft text-brand"}}>{l.label}</Link>)}</div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Link to="/explore" aria-label="Search resources" className="grid size-9 place-items-center rounded-md border border-border bg-card text-ink/60 hover:text-brand"><MarketplaceIcon name="search" className="size-4"/></Link>
        <Link to="/profile" aria-label="Your profile" className="hidden size-9 place-items-center rounded-md border border-border bg-brand-soft text-[11px] font-bold text-brand sm:grid">{CURRENT_USER.initials}</Link>
        <Link to="/login" className="hidden rounded-md bg-brand-deep px-4 py-2 text-sm font-bold text-primary-foreground sm:block">Log in</Link>
        <button type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="grid size-9 place-items-center rounded-md border border-border bg-card text-ink md:hidden"><MarketplaceIcon name={open?"close":"menu"} className="size-4"/></button>
      </div>
    </nav>
    {open && <div className="border-t border-border bg-card p-3 md:hidden">{links.map(l=><Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-ink/70 hover:bg-brand-soft"><MarketplaceIcon name={l.icon} className="size-4"/>{l.label}</Link>)}<Link to="/profile" onClick={()=>setOpen(false)} className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-ink/70"><MarketplaceIcon name="profile" className="size-4"/>My stuff</Link></div>}
  </header>;
}

export function MobileTabBar(){return <nav className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-around rounded-lg border border-border bg-card px-2 py-2 shadow-lg md:hidden">{[
  {to:"/",label:"Home",icon:"home"},{to:"/explore",label:"Browse",icon:"browse"},{to:"/upload",label:"Upload",icon:"upload"},{to:"/saved",label:"Saved",icon:"saved"},{to:"/profile",label:"My stuff",icon:"profile"}
].map(t=><Link key={t.to} to={t.to} className="flex flex-1 flex-col items-center gap-1 rounded-md py-1.5 text-[10px] font-semibold text-ink/50" activeProps={{className:"bg-brand-soft text-brand"}} activeOptions={{exact:t.to==="/"}}><MarketplaceIcon name={t.icon as IconName} className="size-4"/>{t.label}</Link>)}</nav>}
