import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sigma Research" },
      { name: "description", content: "Get in touch with Sigma Research." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-32">
        <h1 className="text-5xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-6 text-foreground/60">Content coming soon — placeholder page.</p>
      </main>
      <Footer />
    </div>
  );
}
