import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/about/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission — Pavitram India" },
      { name: "description", content: "Empowering every Indian family through a transparent, ethical, cooperative platform." },
      { property: "og:title", content: "Our Mission — Pavitram India" },
      { property: "og:description", content: "Making self-reliance a reality for all, not just a few." },
    ],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Our Mission" }]}
        label="Our Mission"
        title="Empower Every Indian Family"
        hindi="हमारा मिशन"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <GoldLabel>The Mission</GoldLabel>
            <p className="mt-8 font-display text-2xl leading-[1.6] text-ink md:text-3xl">
              To empower every Indian family by creating a <span className="text-gold">transparent, ethical, and cooperative platform</span> that connects people, businesses, and opportunities — making self-reliance a reality for all, not just a few.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { Icon: Heart, title: "Empower", body: "Lift every family with real opportunities." },
              { Icon: Users, title: "Connect", body: "Bridge people, businesses and capabilities." },
              { Icon: ShieldCheck, title: "Protect", body: "Operate with transparency and ethics." },
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
            <Link to="/about/philosophy" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              Read Our Philosophy <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
