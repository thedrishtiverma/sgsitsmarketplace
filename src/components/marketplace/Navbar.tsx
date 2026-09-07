import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bookmark, Compass, Home, Menu, Search, Upload, User, X } from "lucide-react";
import { CURRENT_USER } from "@/data/mock";
import markAsset from "@/assets/sgsits-mark.png.asset.json";

const links = [
  { to: "/explore", label: "Browse", icon: Compass },
  { to: "/upload", label: "Upload", icon: Upload },
  { to: "/saved", label: "Saved", icon: Bookmark },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto max-w-6xl px-4 pt-5 sm:px-5 sm:pt-6">
      <nav className="glass flex items-center justify-between rounded-2xl px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={markAsset.url}
            alt="SGSITS Marketplace logo"
            className="size-9 shrink-0"
            width={36}
            height={36}
          />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight text-ink">
              SGSITS Marketplace
            </span>
            <span className="block text-[11px] text-ink/45">
              The unofficial internet of SGSITS
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 hover:bg-brand-soft hover:text-ink"
              activeProps={{ className: "bg-brand-soft text-brand" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/explore"
            aria-label="What are you looking for?"
            className="grid size-9 place-items-center rounded-xl border border-lav bg-white text-ink/60 hover:text-brand"
          >
            <Search className="size-4" />
          </Link>
          <Link
            to="/profile"
            aria-label="Your profile"
            className="hidden size-9 place-items-center rounded-xl border border-lav bg-white text-[11px] font-bold text-ink/70 sm:grid"
          >
            {CURRENT_USER.initials}
          </Link>
          <Link
            to="/login"
            className="hidden rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white sm:block"
          >
            Log in
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-xl border border-lav bg-white text-ink/70 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mt-2 rounded-2xl p-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-ink/75 hover:bg-brand-soft"
            >
              <l.icon className="size-4" /> {l.label}
            </Link>
          ))}
          <Link
            to="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-ink/75 hover:bg-brand-soft"
          >
            <User className="size-4" /> My stuff
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-brand px-3 py-3 text-center text-sm font-semibold text-white"
          >
            Log in
          </Link>
        </div>
      )}
    </header>
  );
}

export function MobileTabBar() {
  return (
    <nav className="glass fixed inset-x-3 bottom-3 z-30 flex items-center justify-around rounded-2xl px-2 py-2 md:hidden">
      {[
        { to: "/", label: "Home", icon: Home },
        { to: "/explore", label: "Browse", icon: Compass },
        { to: "/upload", label: "Upload", icon: Upload },
        { to: "/saved", label: "Saved", icon: Bookmark },
        { to: "/profile", label: "My stuff", icon: User },
      ].map((t) => (
        <Link
          key={t.to}
          to={t.to}
          className="flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-medium text-ink/55"
          activeProps={{ className: "text-brand" }}
          activeOptions={{ exact: t.to === "/" }}
        >
          <t.icon className="size-4" />
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
