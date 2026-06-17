import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Sigma Research" },
      { name: "description", content: "The team behind Sigma Research." },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-32">
        <h1 className="text-5xl font-semibold tracking-tight">Team</h1>
        <p className="mt-6 text-foreground/60">Content coming soon — placeholder page.</p>
      </main>
      <Footer />
    </div>
  );
}
