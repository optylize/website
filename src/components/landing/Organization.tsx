import { ImagePlaceholder } from "./ImagePlaceholder";

const units = [
  {
    n: "01",
    title: "Social Research Centre (SRC)",
    body: "The team meticulously plans the design of the research study in accordance to client requirements.",
  },
  {
    n: "02",
    title: "Field and Tab Unit (FTU)",
    body: "They execute the research/study on field with all the relevant tools they would require to collect data accurately and efficiently.",
  },
  {
    n: "03",
    title: "Data Processing Unit",
    body: "They process, analyze, and interpret complex social data with advanced statistical methodologies and data analysis tools.",
  },
  {
    n: "04",
    title: "Institutional Review Board (IRB)",
    body: "Ensures that research is conducted in an ethical and legally compliant manner, safeguarding the rights, safety, and well-being of research participants.",
  },
];

export function Organization() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-foreground/60">Our Organization</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          How we deliver research excellence.
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/60">
          See how our team combines expertise, technology, and strategy to build powerful research solutions.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {units.map((u) => (
          <div key={u.n} className="flex flex-col rounded-2xl border border-foreground/10 p-6">
            <div className="text-xs text-foreground/50">{u.n}</div>
            <div className="mt-4">
              <ImagePlaceholder label="Unit thumbnail" aspect="1/1" className="!w-20" rounded="rounded-md" />
            </div>
            <h3 className="mt-6 text-lg font-medium">{u.title}</h3>
            <p className="mt-3 flex-1 text-sm text-foreground/60">{u.body}</p>
            <a href="#" className="mt-6 text-sm underline underline-offset-4">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
