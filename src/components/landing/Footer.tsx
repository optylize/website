export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-foreground py-16 text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <div className="text-2xl font-semibold">Σ<span className="text-[var(--accent-red)]">i</span>gma</div>
          <p className="mt-4 text-sm text-background/60">
            Research that informs decisions and creates measurable impact.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-background/60">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/about" className="hover:opacity-70">About</a></li>
            <li><a href="/team" className="hover:opacity-70">Team</a></li>
            <li><a href="/contact" className="hover:opacity-70">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-background/60">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li>{"{address placeholder}"}</li>
            <li>{"{email placeholder}"}</li>
            <li>{"{phone placeholder}"}</li>
          </ul>
        </div>
        <div className="text-xs text-background/50 md:text-right">
          © {new Date().getFullYear()} sigma research. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
