import { ImagePlaceholder } from "./ImagePlaceholder";

const people = [
  { role: "Founder, CEO and Executive Director", name: "Dr Ulimiri V Somayajulu", bio: "30+ years experience in social and development sector research" },
  { role: "Director", name: "Dr KVR Subrahmanyam", bio: "30+ years in socio-economic, demographic and health surveys" },
  { role: "Permanent Advisor", name: "Prof. (Dr) K Srinivasan", bio: "40+ years in population and health research" },
  { role: "DP and IT Coordinator", name: "SVSRK Bharadwaj", bio: "17+ years in data management and large-scale studies" },
];

export function TeamPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <div className="text-2xl font-semibold">Σ<span className="text-[var(--accent-red)]">i</span>gma</div>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            The faces behind the projects.
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/60">
            We believe great work comes from collaboration. That's why we work closely with each other to ensure every project meets your goals and exceeds expectations.
          </p>
        </div>
        <a href="/team" className="shrink-0 text-sm underline underline-offset-4">See full team</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {people.map((p) => (
          <a key={p.name} href="#" className="block">
            <ImagePlaceholder label="Portrait" aspect="3/4" rounded="rounded-xl" />
            <div className="mt-4 text-xs uppercase tracking-widest text-foreground/50">{p.role}</div>
            <div className="mt-2 text-lg font-medium">{p.name}</div>
            <p className="mt-1 text-sm text-foreground/60">{p.bio}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
