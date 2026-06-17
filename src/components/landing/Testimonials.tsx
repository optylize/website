import { ImagePlaceholder } from "./ImagePlaceholder";

export function Testimonials() {
  return (
    <section className="border-t border-foreground/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-foreground/60">Testimonials</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Experiences.</h2>
            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-6xl font-semibold">4.9</span>
              <span className="text-2xl text-foreground/50">/5</span>
            </div>
            <p className="mt-4 max-w-md text-foreground/60">
              We've delivered 2000+ projects that help companies and organizations get real insights.
            </p>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <ImagePlaceholder label="Client logo" aspect="1/1" />
              <ImagePlaceholder label="Client logo" aspect="1/1" />
              <ImagePlaceholder label="Client logo" aspect="1/1" />
            </div>
            <div className="rounded-2xl border border-foreground/10 p-6">
              <div className="text-3xl font-semibold">300+</div>
              <p className="mt-2 text-sm text-foreground/60">Trusted by 300+ clients worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
