export function Mission() {
  return (
    <section className="border-y border-foreground/10 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <div className="text-2xl font-semibold tracking-tight">
            Σ<span className="text-[var(--accent-red)]">i</span>gma
          </div>
          <p className="mt-6 text-sm text-foreground/60">
            Every project we take on is designed for long-term success.
          </p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            Our approach is simple: we empower decision-makers with rigorous, ethical, and actionable research,
            addressing complex societal challenges through evidence-based solutions.
          </p>
          <p>
            We envision being the go-to partner for organizations aiming to create measurable impact, upholding
            the highest standards of research excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
