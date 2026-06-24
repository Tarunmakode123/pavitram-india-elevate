import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Target, Compass, ArrowRight } from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/about/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision — Pavitram India" },
      { name: "description", content: "A self-supporting cooperative ecosystem of professional excellence, prosperous partnerships and self-reliant economic structure." },
      { property: "og:title", content: "Our Vision — Pavitram India" },
      { property: "og:description", content: "A cooperative ecosystem of professional excellence and self-reliance." },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Our Vision" }]}
        label="Our Vision"
        title="A Self-Reliant Tomorrow"
        hindi="हमारी दृष्टि"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <GoldLabel>The Vision</GoldLabel>
            <p className="mt-8 font-display text-2xl leading-[1.6] text-ink md:text-3xl">
              We are building a business network where every associate can fulfill their requirements through a self-supporting cooperative ecosystem. Our focus is on developing <span className="text-gold">professional excellence</span>, <span className="text-gold">prosperous partnerships</span>, and a <span className="text-gold">self-reliant economic structure</span>.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { Icon: Eye, title: "Clarity", body: "A clear view of what an organised community can become." },
              { Icon: Target, title: "Focus", body: "Disciplined execution against meaningful outcomes." },
              { Icon: Compass, title: "Direction", body: "An ethical compass guiding every partnership." },
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
            <Link to="/about/mission" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              Read Our Mission <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
