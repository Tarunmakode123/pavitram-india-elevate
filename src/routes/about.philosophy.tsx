import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Handshake, Sparkles, ArrowRight } from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/about/philosophy")({
  head: () => ({
    meta: [
      { title: "Our Philosophy — Pavitram India" },
      { name: "description", content: "Rooted in Vasudhaiva Kutumbakam — the world is one family. Every member contributes, every member benefits." },
      { property: "og:title", content: "Our Philosophy — Pavitram India" },
      { property: "og:description", content: "Unity, fairness, and shared growth." },
    ],
  }),
  component: PhilosophyPage,
});

function PhilosophyPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Our Philosophy" }]}
        label="Our Philosophy"
        title="Vasudhaiva Kutumbakam"
        hindi="वसुधैव कुटुम्बकम्"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <GoldLabel>The Philosophy</GoldLabel>
            <p className="mt-8 font-display text-2xl leading-[1.6] text-ink md:text-3xl">
              We believe in the power of unity, fairness, and shared growth. Our philosophy is rooted in the ancient Indian principle of <span className="text-gold">Vasudhaiva Kutumbakam</span> — the world is one family. Every member contributes, every member benefits.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { Icon: Globe, title: "One Family", body: "A worldview where boundaries dissolve in shared purpose." },
              { Icon: Handshake, title: "Fairness", body: "Equal voice, equal opportunity, equal dignity." },
              { Icon: Sparkles, title: "Shared Growth", body: "When one rises, the whole community rises." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-haze p-6 transition hover:-translate-y-1.5 hover:shadow-lg">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold">
                    <c.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-mist">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex gap-4">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              Back to About <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
