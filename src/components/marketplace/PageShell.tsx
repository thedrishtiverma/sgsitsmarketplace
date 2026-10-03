import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { MobileTabBar, Navbar } from "./Navbar";
import { Highlight, MarginMark, Pattern } from "@/components/brand/BrandVisuals";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-canvas relative min-h-screen overflow-x-hidden font-sans text-ink">
      <Pattern variant="grid" className="fixed opacity-[.045]" />
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
          <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-ink">
            <Highlight>{title}</Highlight><MarginMark variant="underline" className="hidden sm:block" />
          </h2>
          {subtitle && <p className="text-sm text-ink/55">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
