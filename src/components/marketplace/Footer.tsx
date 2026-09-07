import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-5 sm:pb-10">
      <div className="glass-soft rounded-2xl px-6 py-5 text-sm text-ink/55">
        <p className="font-display font-semibold text-ink">SGSITS Marketplace</p>
        <p className="mt-1 max-w-2xl">
          A student-built resource hub for Shri G. S. Institute of Technology &amp;
          Science, 23 Park Road, Indore — an autonomous institute affiliated to RGPV,
          Bhopal. Content shown during development is sample data, not real uploads.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-ink/60">
          <Link to="/explore" className="hover:text-brand">
            Explore
          </Link>
          <Link to="/upload" className="hover:text-brand">
            Upload
          </Link>
          <Link to="/saved" className="hover:text-brand">
            Saved
          </Link>
          <Link to="/my-uploads" className="hover:text-brand">
            My uploads
          </Link>
          <a
            href="https://sgsits.ac.in/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-brand"
          >
            sgsits.ac.in
          </a>
        </div>
      </div>
    </footer>
  );
}
