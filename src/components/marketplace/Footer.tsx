import { Link } from "@tanstack/react-router";
import markAsset from "@/assets/sgsits-mark.png.asset.json";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-4 pb-24 sm:px-5 sm:pb-10">
      <div className="glass rounded-2xl px-6 py-5 text-sm text-ink/55">
        <div className="flex items-center gap-2.5">
          <img src={markAsset.url} alt="" className="size-7" width={28} height={28} />
          <p className="font-display font-semibold text-ink">SGSITS Marketplace</p>
        </div>
        <p className="mt-2 max-w-2xl">
          Made by students, for students at Shri G. S. Institute of Technology &amp;
          Science, Indore. Not an official SGSITS website — just the place your notes
          should have been all along. Everything you see right now is sample content,
          not real uploads.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-ink/60">
          <Link to="/explore" className="hover:text-brand">
            Browse
          </Link>
          <Link to="/upload" className="hover:text-brand">
            Give back
          </Link>
          <Link to="/saved" className="hover:text-brand">
            Saved
          </Link>
          <Link to="/my-uploads" className="hover:text-brand">
            My stuff
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
