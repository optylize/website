import { ImagePlaceholder } from "./ImagePlaceholder";

const points = [
  { n: "01", pct: "100%", title: "Geographical Reach (Urban + Rural)", body: "Pan India coverage including extreme remote locations and tribal areas." },
  { n: "02", pct: "98%", title: "Customer satisfaction rate", body: "Long-term partnerships built on reliability and rigorous methodology." },
  { n: "03", pct: "100%", title: "International Standards Adherence", body: "IRB Registration with US OHRP. 760+ Study Protocols Reviewed." },
];

export function WhyUs() {
  return (
    <section className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-background/60">Why choose us</p>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Proven results for every project, with a focus on rigorous, ethical, and actionable research.
            </h2>
            <p className="mt-6 text-background/70">
              Your project success begins with a conversation. Let's talk today.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full border border-background px-6 py-3 text-sm hover:bg-background hover:text-foreground"
            >
              Let's talk
            </a>
          </div>
          <div>
            <ImagePlaceholder label="Portrait photo" aspect="4/5" className="!border-background/20 !bg-background/10" />
          </div>
        </div>

        <p className="mt-16 max-w-3xl text-lg text-background/80">
          With over 2,000 completed studies and a team of 81+ professionals, we serve a diverse clientele,
          including governments, international organizations, corporations, and NGOs.
        </p>

        <div className="mt-12 grid gap-8 border-t border-background/15 pt-12 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.n}>
              <div className="text-xs text-background/50">{p.n}</div>
              <div className="mt-2 text-5xl font-semibold">{p.pct}</div>
              <h3 className="mt-4 font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-background/60">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
