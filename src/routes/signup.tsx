import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/marketplace/PageShell";
import { BRANCHES, SEMESTERS } from "@/data/mock";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — SGSITS Marketplace" },
      {
        name: "description",
        content:
          "Create your SGSITS Marketplace account to share and download academic resources.",
      },
      { property: "og:title", content: "Sign Up — SGSITS Marketplace" },
      {
        property: "og:description",
        content: "Create your account to share and download academic resources.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <PageShell>
      <div className="mx-auto flex max-w-md flex-col px-4 pb-20 pt-12 sm:px-5">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          Built for SGSITS students — tell us your branch so we can show the right
          resources first.
        </p>

        <form
          className="glass mt-6 space-y-4 rounded-2xl p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block">
            <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
              Full name
            </span>
            <input required className="field" placeholder="Aarav Raghav" />
          </label>
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
            <input
              type="password"
              required
              minLength={8}
              className="field"
              placeholder="At least 8 characters"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                Branch
              </span>
              <select required className="field" defaultValue="">
                <option value="" disabled>
                  Select branch
                </option>
                {BRANCHES.map((b) => (
                  <option key={b.code} value={b.code}>
                    {b.code}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                Semester
              </span>
              <select required className="field" defaultValue="">
                <option value="" disabled>
                  Select semester
                </option>
                {SEMESTERS.map((s) => (
                  <option key={s} value={s}>
                    Semester {s}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="brand-gradient w-full rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand/25"
          >
            Create account
          </button>
          <p className="text-center text-xs text-ink/50">
            We'll verify college emails before launch so the marketplace stays
            student-only.
          </p>
        </form>

        <p className="mt-5 text-center text-sm text-ink/60">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-brand hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
