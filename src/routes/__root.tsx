import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SavedProvider } from "../lib/saved-store";

function NotFoundComponent() {
  return (
    <div className="app-canvas flex min-h-screen items-center justify-center px-4 font-sans">
      <div className="glass max-w-md rounded-2xl p-8 text-center">
        <h1 className="font-display text-6xl font-bold text-ink">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-ink">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-ink/55">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="brand-gradient inline-flex rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="app-canvas flex min-h-screen items-center justify-center px-4 font-sans">
      <div className="glass max-w-md rounded-2xl p-8 text-center">
        <h1 className="font-display text-xl font-semibold tracking-tight text-ink">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="brand-gradient rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand/25"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-xl border border-white/70 bg-white/60 px-5 py-2.5 text-sm font-semibold text-ink"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SGSITS Marketplace" },
      {
        name: "description",
        content:
          "The student marketplace for SGSITS Indore — notes, PYQs and academic resources shared by students.",
      },
      { name: "author", content: "SGSITS Marketplace" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SGSITS Marketplace" },
      { property: "og:description", content: "The unofficial internet of SGSITS — notes, PYQs and resources passed student to student." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&family=Instrument+Serif&family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Syne:wght@700;800&display=swap",
      },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-mood="calm" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: "try{var m=localStorage.getItem('sgsits-mood');if(m)document.documentElement.dataset.mood=m}catch(e){}" }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SavedProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </SavedProvider>
    </QueryClientProvider>
  );
}
