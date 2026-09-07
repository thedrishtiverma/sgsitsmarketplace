import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { MobileTabBar, Navbar } from "./Navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-canvas relative min-h-screen overflow-x-hidden font-sans text-ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="frost-blob absolute -left-24 top-10 size-80 rounded-full bg-brand/25 blur-3xl" />
        <div
          className="frost-blob absolute right-0 top-40 size-96 rounded-full bg-accent2/20 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="frost-blob absolute bottom-0 left-1/3 size-72 rounded-full bg-brand/15 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
      <MobileTabBar />
    </div>
  );
}

export function Section({
  title,
  subtitle,
  action,
  children,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-5 sm:pb-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
            {title}
          </h2>
          {subtitle && <p className="text-sm text-ink/55">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
