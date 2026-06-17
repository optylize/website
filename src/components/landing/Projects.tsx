import { ImagePlaceholder } from "./ImagePlaceholder";

const projects = [
  { title: "National Family Health Survey (NFHS-6)", year: "2023–2024" },
  { title: "Comprehensive National Nutrition Survey (CNNS)", year: "2015–2018" },
  { title: "Longitudinal Ageing Study in India (LASI)", year: "2016–2017" },
  { title: "Evaluation of Mid Day Meal Scheme (MDMS)", year: "2017–2018" },
  { title: "Digital Payments Penetration Survey", year: "2020–2021" },
  { title: "GAIL CSR Impact Assessment", year: "2019" },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-foreground/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-foreground/60">Selected · (2000+)</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">Projects.</h2>
            <p className="mt-4 max-w-2xl text-foreground/60">
              We've helped governments and businesses across industries achieve their goals. Here are some of our recent projects.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group block rounded-2xl border border-foreground/10 p-6 hover:bg-foreground/5">
              <div className="flex items-center justify-between text-xs text-foreground/50">
                <span>/</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-6 text-xl font-medium leading-snug">{p.title}</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <ImagePlaceholder label="Project image" aspect="1/1" />
                <ImagePlaceholder label="Client logo" aspect="1/1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
