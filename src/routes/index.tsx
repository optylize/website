import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ClientsMarquee } from "@/components/landing/ClientsMarquee";
import { Stats } from "@/components/landing/Stats";
import { Mission } from "@/components/landing/Mission";
import { Organization } from "@/components/landing/Organization";
import { Solutions } from "@/components/landing/Solutions";
import { WhyUs } from "@/components/landing/WhyUs";
import { CaseStudy } from "@/components/landing/CaseStudy";
import { Projects } from "@/components/landing/Projects";
import { TeamPreview } from "@/components/landing/TeamPreview";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sigma Research — Social, Developmental & Commercial Research" },
      { name: "description", content: "Over 17 years of excellence in social, developmental, and commercial research across India and beyond." },
      { property: "og:title", content: "Sigma Research" },
      { property: "og:description", content: "Research that informs decisions and creates measurable impact." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ClientsMarquee />
        <Stats />
        <Mission />
        <Organization />
        <Solutions />
        <WhyUs />
        <CaseStudy />
        <Projects />
        <TeamPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
