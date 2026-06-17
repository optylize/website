import { ImagePlaceholder } from "./ImagePlaceholder";

const cities = [
  { v: "+2.6k", k: "Delhi" },
  { v: "+1.5k", k: "Kol" },
  { v: "+1.1k", k: "B'lore" },
  { v: "+1.3k", k: "Bom" },
  { v: "+1k", k: "H'bad" },
];

export function CaseStudy() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-foreground/60">Case study</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Pan-India Two-Wheeler Market Analysis
          </h2>
          <p className="mt-2 text-sm text-foreground/60">Marketing Service Co. (Japan)</p>
        </div>
        <a href="#projects" className="text-sm underline underline-offset-4">See more such cases</a>
      </div>

      <p className="max-w-2xl text-foreground/70">
        Comprehensive pan-India data collection for strategic automotive insights. We do it all.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
        <ImagePlaceholder label="Case study hero image" aspect="16/10" />
        <div className="space-y-6 rounded-2xl border border-foreground/10 p-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">Project Highlights</p>
            <div className="mt-3 text-5xl font-semibold">8,730+</div>
            <p className="text-sm text-foreground/60">Consumer Interviews</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">Vehicle Segments</p>
            <p className="mt-2 text-sm">Motorcycles, Scooters &amp; Scooterettes</p>
          </div>
          <blockquote className="border-l-2 border-foreground/30 pl-4 text-sm italic text-foreground/70">
            "Sigma's extensive fieldwork provided crucial data on two-wheeler preferences, directly informing our market strategy in India."
          </blockquote>
          <div className="flex items-center gap-3">
            <ImagePlaceholder label="" aspect="1/1" className="!w-10" rounded="rounded-full" />
            <div className="text-sm">
              <div>Kenji Nakamura</div>
              <div className="text-foreground/50">Client representative</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-foreground/10 p-8">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-4xl font-semibold">9</div>
            <p className="mt-1 text-sm text-foreground/60">Major Urban Centers</p>
          </div>
          <p className="max-w-md text-sm text-foreground/60">
            Ensuring robust data collection across key metropolitan areas for comprehensive market understanding.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {cities.map((c) => (
            <div key={c.k} className="rounded-xl bg-foreground/5 p-4">
              <div className="text-2xl font-semibold">{c.v}</div>
              <div className="text-xs text-foreground/60">{c.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
