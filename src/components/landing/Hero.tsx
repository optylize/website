import { ImagePlaceholder } from "./ImagePlaceholder";

const tags = [
  "Research",
  "Social and Developmental Research",
  "Commercial Research",
  "Data Collection and Analysis",
  "Ethical Consulting",
  "CSR & Impact Assessments",
];

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="relative overflow-hidden rounded-2xl">
          <ImagePlaceholder
            label="Hero background image — warm-toned field photo"
            aspect="16/10"
            rounded="rounded-2xl"
            className="!border-0 !bg-foreground/10"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="select-none text-[22vw] font-semibold leading-none text-white/85 mix-blend-overlay">
              sigma
            </span>
          </div>
          <div className="absolute right-6 top-6 rotate-180 text-xs tracking-widest text-white/80 [writing-mode:vertical-rl]">
            sigma research
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-xl text-sm text-white/90 md:text-base">
              Over 17 years of excellence in social, developmental, and commercial research across India and beyond.
            </p>
            <p className="text-[11px] uppercase tracking-widest text-white/70">© 2022 sigma research</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
