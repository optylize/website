import { ImagePlaceholder } from "./ImagePlaceholder";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = Array.from({ length: 10 });
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-8 ${reverse ? "animate-[marquee_50s_linear_infinite_reverse]" : "animate-[marquee_45s_linear_infinite]"}`}
        style={{ width: "max-content" }}
      >
        {[...items, ...items].map((_, i) => (
          <div key={i} className="w-40 shrink-0">
            <ImagePlaceholder label={`Client logo ${i + 1}`} aspect="3/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientsMarquee() {
  return (
    <section className="border-y border-foreground/10 py-12">
      <div className="mx-auto mb-8 flex max-w-7xl items-end justify-between px-6">
        <h2 className="text-sm uppercase tracking-widest text-foreground/60">Our clients</h2>
        <span className="text-xs text-foreground/50">(2008–25)</span>
      </div>
      <div className="space-y-6">
        <Row />
        <Row reverse />
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
