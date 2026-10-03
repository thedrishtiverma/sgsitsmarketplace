import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/marketplace/PageShell";
import { Highlight, MarginMark, Pattern, Sticker } from "@/components/brand/BrandVisuals";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — SGSITS Marketplace" },
      {
        name: "description",
        content: "Sign in with your SGSITS account to download and save resources.",
      },
      { property: "og:title", content: "Login — SGSITS Marketplace" },
      {
        property: "og:description",
        content: "Sign in with your SGSITS account to download and save resources.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <PageShell>
      <div className="relative mx-auto flex max-w-md flex-col overflow-hidden px-4 pb-20 pt-12 sm:px-5">
        <Pattern variant="documents" className="opacity-[.08]" />
        <Sticker tone="blue">Back to the stash</Sticker>
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink">
          Welcome <Highlight>back</Highlight><MarginMark variant="underline" className="ml-2 inline-block" />
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          Sign in to download, save and share resources with your batch.
        </p>

        <form
          className="glass paper-card relative mt-6 space-y-4 rounded-lg p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
              College email
            </span>
            <input
              type="email"
              required
              className="field"
              placeholder="you@sgsits.ac.in"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
              Password
            </span>
            <input type="password" required className="field" placeholder="••••••••" />
          </label>

          <button
            type="submit"
            className="brand-gradient w-full rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand/25"
          >
            Sign in
          </button>

          <p className="text-center text-xs text-ink/50">
            Accounts are limited to SGSITS students. College email verification will be
            enabled before launch.
          </p>
        </form>

        <p className="mt-5 text-center text-sm text-ink/60">
          New here?{" "}
          <Link to="/signup" className="font-semibold text-brand hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
