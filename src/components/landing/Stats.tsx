const stats = [
  { n: "17+", label: "Years of Research Excellence since 2008" },
  { n: "220+", label: "Clients served across public and private sector" },
  { n: "10M+", label: "Data Points Collected with 98% accuracy" },
  { n: "1912+", label: "Successful projects completed" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-5xl font-semibold tracking-tight md:text-6xl">{s.n}</div>
            <p className="mt-3 max-w-[14rem] text-sm text-foreground/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
