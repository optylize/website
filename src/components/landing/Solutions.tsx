import { ImagePlaceholder } from "./ImagePlaceholder";

const solutions = [
  {
    n: "(001)",
    title: "Social and Developmental Research",
    body: "Comprehensive studies addressing critical societal challenges, from health and nutrition to gender and environmental issues.",
    areas: ["Health Surveys", "Nutrition Studies", "Gender Research", "Environmental Impact", "Social Policy", "Community Development"],
  },
  {
    n: "(002)",
    title: "Commercial Research",
    body: "In-depth market insights and consumer behavior analysis to empower businesses across diverse sectors.",
    areas: ["Market Segmentation", "Brand Tracking", "Consumer Behavior Studies", "Product Testing", "Competitive Analysis", "Retail Audits"],
  },
  {
    n: "(003)",
    title: "Data Collection and Analysis",
    body: "Advanced data gathering and processing using cutting-edge tools to deliver precise, actionable insights.",
    areas: ["Quantitative and Qualitative Data Collection", "Real-Time Monitoring", "Statistical Analysis", "Survey Design", "Data Validation"],
  },
  {
    n: "(004)",
    title: "Ethical Research Consulting",
    body: "Expert guidance on research protocols and compliance, ensuring adherence to international ethical standards.",
    areas: ["IRB Protocol Development", "US OHRP Compliance", "Ethical Review Processes", "Data Security", "Cross-Border Research Support"],
    link: { label: "Sigma IRB", href: "#" },
  },
  {
    n: "(005)",
    title: "CSR & Impact Assessments",
    body: "Partnering with corporations, NGOs, foundations, and government bodies to design, implement, and evaluate programs that create lasting positive change.",
    areas: ["Education", "Health", "Skilling and Livelihoods", "Environment", "Community Development", "Elderly Care and Ageing"],
    link: { label: "Read more about our CSR Offerings", href: "#" },
  },
];

export function Solutions() {
  return (
    <section className="border-t border-foreground/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-foreground/60">What we do</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Solutions.</h2>
          </div>
          <span className="text-sm text-foreground/50">(5)</span>
        </div>

        <div className="space-y-24">
          {solutions.map((s) => (
            <div key={s.n} className="grid gap-10 border-t border-foreground/10 pt-12 md:grid-cols-[1fr_2fr]">
              <div>
                <div className="text-xs text-foreground/50">{s.n}</div>
                <h3 className="mt-4 text-3xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-4 text-foreground/60">{s.body}</p>
                {s.link && (
                  <a href={s.link.href} className="mt-6 inline-block text-sm underline underline-offset-4">
                    {s.link.label}
                  </a>
                )}
                <div className="mt-8">
                  <p className="mb-3 text-xs uppercase tracking-widest text-foreground/60">Focus Areas</p>
                  <ul className="flex flex-wrap gap-2">
                    {s.areas.map((a) => (
                      <li key={a} className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/70">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <ImagePlaceholder label="Image 1" aspect="3/4" />
                <ImagePlaceholder label="Image 2" aspect="3/4" />
                <ImagePlaceholder label="Image 3" aspect="3/4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="/contact"
            className="rounded-full bg-foreground px-8 py-3 text-sm text-background hover:opacity-80"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
