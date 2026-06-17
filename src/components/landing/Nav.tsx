import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Σ<span className="text-[var(--accent-red)]">i</span>gma
        </Link>
        <nav className="hidden gap-10 text-sm md:flex">
          <Link to="/about" className="hover:opacity-60">About</Link>
          <Link to="/team" className="hover:opacity-60">Team</Link>
        </nav>
        <Link
          to="/contact"
          className="rounded-full border border-foreground px-4 py-2 text-sm hover:bg-foreground hover:text-background"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
