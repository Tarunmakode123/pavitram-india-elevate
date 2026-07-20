import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  HeartHandshake,
  FileText,
  Award,
  ArrowRight,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/about/ethics")({
  head: () => ({
    meta: [
      { title: "Our Ethics & Governance — Pavitram India" },
      {
        name: "description",
        content:
          "Pavitram India's ethical roadmap and code of conduct: Rights, Responsibility, Accountability, and Outcome for zero corruption.",
      },
      { property: "og:title", content: "Our Ethics — Pavitram India" },
      {
        property: "og:description",
        content: "Ethical roadmap, rights, responsibility, and code of conduct.",
      },
    ],
  }),
  component: EthicsPage,
});

const ETHICS_PILLARS = [
  {
    icon: Shield,
    title: "Rights",
    hindi: "अधिकार",
    desc: "Protecting the constitutional rights, dignity, and economic entitlements of every associate.",
    items: [
      "Fair access to economic opportunities and digital tools.",
      "Protection from predatory debt traps and unethical interest rates.",
      "Equal voice in community decision-making regardless of status.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Responsibility",
    hindi: "कर्तव्य",
    desc: "Embracing personal and collective duty towards family, community, and national progress.",
    items: [
      "Living by the 27 Golden Rules of Pavitram India.",
      "Mentoring new members and sharing business knowledge.",
      "Upholding social and environmental duties in all commercial activities.",
    ],
  },
  {
    icon: FileText,
    title: "Accountability",
    hindi: "जवाबदेही",
    desc: "Complete transparency and answerability for all commitments and financial dealings.",
    items: [
      "Open auditing of all cooperative funds and returns.",
      "Clear service-level commitments across all 12 core service arms.",
      "Regular reporting to members on network growth and impact.",
    ],
  },
  {
    icon: Award,
    title: "Outcome",
    hindi: "परिणाम",
    desc: "Delivering tangible, measurable improvements in family income and self-reliance.",
    items: [
      "Higher household savings through direct cooperative sourcing.",
      "Creation of verified local jobs and entrepreneurship avenues.",
      "Long-term economic security for future generations.",
    ],
  },
];

function EthicsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Our Ethics" },
        ]}
        label="OUR ETHICS"
        title="Ethical Governance & Roadmap"
        hindi="नैतिकता एवं आचार संहिता"
        subtitle="The ethical roadmap and guidelines that protect member interests and ensure zero corruption across Pavitram India."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <GoldLabel>CODE OF CONDUCT</GoldLabel>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
              Four Pillars of Ethical Practice
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              Our code of conduct provides an ethical roadmap for all network associates, merchants,
              and members.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ETHICS_PILLARS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col justify-between rounded-[24px] border border-haze bg-white p-8 card-shadow transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                        <e.icon className="h-7 w-7" />
                      </div>
                      <span className="font-deva text-base font-semibold text-gold">{e.hindi}</span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold text-ink">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{e.desc}</p>

                    <div className="mt-6 space-y-2.5 border-t border-haze pt-4">
                      {e.items.map((it) => (
                        <div key={it} className="flex items-start gap-2.5 text-xs text-ink/80">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(201,149,42,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto h-10 w-10 text-gold" />
          <p className="mt-6 font-display text-xl italic leading-[1.6] text-white md:text-2xl">
            "The code of conduct provides an ethical road map and guidelines for our values of
            integrity, responsibility, excellence, pioneering and unity to protect the interests of
            all associates."
          </p>
          <Quote className="mx-auto mt-6 h-10 w-10 rotate-180 text-gold" />

          <div className="mt-10">
            <Link
              to="/about/focus"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-navy transition hover:bg-white hover:scale-[1.02]"
            >
              Explore Our Focus Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}
