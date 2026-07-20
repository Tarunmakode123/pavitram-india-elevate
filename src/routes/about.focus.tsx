import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartHandshake,
  GraduationCap,
  Sparkles,
  Sprout,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/about/focus")({
  head: () => ({
    meta: [
      { title: "Our Focus Areas — Pavitram India" },
      {
        name: "description",
        content:
          "Pavitram India's core focus areas: Uplifting Economically Weaker Families (गरीब), Youth (युवा), Women (महिला), and Farmers (किसान).",
      },
      { property: "og:title", content: "Our Focus Areas — Pavitram India" },
      {
        property: "og:description",
        content: "Targeted cooperative empowerment for Poor, Youth, Women, and Farmers.",
      },
    ],
  }),
  component: FocusPage,
});

const FOCUS_SECTORS = [
  {
    icon: HeartHandshake,
    title: "Garib (गरीब)",
    subtitle: "Economically Weaker & Underprivileged",
    desc: "Direct support and cost reduction to protect low-income households from economic exploitation.",
    initiatives: [
      "Access to essential goods at fair cooperative prices via Pavitram Mart.",
      "Protection from unorganized debt traps and predatory moneylenders.",
      "Direct health, emergency aid, and insurance through community safety nets.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Yuva (युवा)",
    subtitle: "Youth Empowerment & Skills",
    desc: "Equipping young minds with modern digital capabilities, vocational skills, and career pathways.",
    initiatives: [
      "Skill certification and practical training workshops via Pavitram Gyan.",
      "Job opportunities and freelance service leads via Pavitram Rozgar.",
      "Incubation and micro-entrepreneurship guidance for young founders.",
    ],
  },
  {
    icon: Sparkles,
    title: "Mahila (महिला)",
    subtitle: "Women Empowerment & Dignity",
    desc: "Fostering financial independence and leadership for women in urban and rural households.",
    initiatives: [
      "Support for home-based enterprises and cottage handicraft production.",
      "Financial literacy and micro-loan access through Pavitram Finance.",
      "Matrimonial and social family guidance via Pavitram Rishta.",
    ],
  },
  {
    icon: Sprout,
    title: "Kisan (किसान)",
    subtitle: "Farmer Prosperity & Agri-Growth",
    desc: "Empowering farmers with direct buyer links, fair crop prices, and modern agricultural tools.",
    initiatives: [
      "Direct producer-to-market channels eliminating middleman commissions.",
      "Bulk raw material sourcing for agro-processing and manufacturing units.",
      "Fair price guarantees and timely payment settlements for harvests.",
    ],
  },
];

function FocusPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Our Focus" },
        ]}
        label="OUR FOCUS"
        title="Empowering 4 Key Pillars of India"
        hindi="हमारा ध्यान — गरीब, युवा, महिला, किसान"
        subtitle="Targeted cooperative initiatives for Economically Weaker Families, Youth, Women, and Farmers."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <GoldLabel>TARGETED UPLIFTMENT</GoldLabel>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              Building Self-Reliance at the Grassroots
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              True national growth happens when those who need support the most are empowered to
              prosper independently.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_SECTORS.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col justify-between rounded-[24px] border border-haze bg-white p-8 card-shadow transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl">
                  <div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                      <f.icon className="h-7 w-7" />
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold text-ink">{f.title}</h3>
                    <p className="mt-1 font-deva text-xs font-semibold text-gold">{f.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{f.desc}</p>

                    <div className="mt-6 space-y-2.5 border-t border-haze pt-4">
                      {f.initiatives.map((init) => (
                        <div key={init} className="flex items-start gap-2.5 text-xs text-ink/80">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          <span>{init}</span>
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
              to="/about/network"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white transition hover:bg-gold hover:text-navy cursor-pointer"
            >
              Explore Business Network <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
