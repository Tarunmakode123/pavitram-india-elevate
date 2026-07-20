import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sprout,
  Star,
  Rocket,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/about/values")({
  head: () => ({
    meta: [
      { title: "Core Values — Pavitram India" },
      {
        name: "description",
        content:
          "Explore Pavitram India's Five Core Values: Integrity, Responsibility, Excellence, Pioneering, and Unity guiding our nationwide cooperative network.",
      },
      { property: "og:title", content: "Core Values — Pavitram India" },
      {
        property: "og:description",
        content: "Five Core Values guiding our cooperative business network.",
      },
    ],
  }),
  component: ValuesPage,
});

const VALUES_DETAIL = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    hindi: "अखंडता",
    desc: "Fair, honest, transparent, and ethical in conduct at all times.",
    points: [
      "Zero tolerance for corruption or deceptive markups.",
      "100% transparent pricing and transaction records.",
      "Fair treatment for all members regardless of business size.",
    ],
  },
  {
    icon: Sprout,
    title: "Responsibility",
    hindi: "जिम्मेदारी",
    desc: "Upholding environmental and social commitments across every sector.",
    points: [
      "Promoting sustainable local production and waste reduction.",
      "Protecting family livelihoods through safety net funds.",
      "Fulfilling social duties to uplift underprivileged communities.",
    ],
  },
  {
    icon: Star,
    title: "Excellence",
    hindi: "उत्कृष्टता",
    desc: "Maintaining the highest standard of quality and meritocracy.",
    points: [
      "Rigorous quality standards for all network goods and services.",
      "Merit-based growth and leadership opportunities.",
      "Continuous improvement driven by member feedback.",
    ],
  },
  {
    icon: Rocket,
    title: "Pioneering",
    hindi: "अग्रगामी",
    desc: "Bold, agile, and courageous solutions for a modern cooperative era.",
    points: [
      "Digital cloud technology powering traditional cooperatives.",
      "Disrupting intermediary exploitation with direct peer supply chains.",
      "Pioneering new employment and enterprise models across 15+ states.",
    ],
  },
  {
    icon: Handshake,
    title: "Unity",
    hindi: "एकता",
    desc: "Fostering collaborative relationships, caring, and mutual strength.",
    points: [
      "Standing together as one unified family of 10,000+ members.",
      "Cross-sector collaboration between farmers, merchants, and youth.",
      "Shared prosperity where the success of one uplifts all.",
    ],
  },
];

function ValuesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Core Values" },
        ]}
        label="OUR VALUES"
        title="Five Core Values"
        hindi="पंच मूल्य"
        subtitle="The bedrock principles guiding every decision, partnership, and service in Pavitram India."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <GoldLabel>OUR FOUNDATION</GoldLabel>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              Principles That Shape Our Ecosystem
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              Pavitram India operates on five immutable core values. These principles ensure that
              every member, business, and associate is treated with dignity, fairness, and
              transparency.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES_DETAIL.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col justify-between rounded-[24px] border border-haze bg-white p-8 card-shadow transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                        <v.icon className="h-7 w-7" />
                      </div>
                      <span className="font-deva text-base font-semibold text-gold">{v.hindi}</span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{v.desc}</p>

                    <div className="mt-6 space-y-2.5 border-t border-haze pt-4">
                      {v.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2.5 text-xs text-ink/80">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <Link
              to="/about/ethics"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white transition hover:bg-gold hover:text-navy cursor-pointer"
            >
              Read Our Ethics & Governance <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
