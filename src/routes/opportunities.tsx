import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Store, TrendingUp, Briefcase, ShieldCheck, Zap, Users, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities — Pavitram India" },
      { name: "description", content: "Join as a Consumer, Merchant, Investor or Career associate — find your role in the cooperative network." },
      { property: "og:title", content: "Opportunities — Pavitram India" },
      { property: "og:description", content: "Explore how you can contribute to the Pavitram network." },
    ],
  }),
  component: OpportunitiesPage,
});

const CARDS = [
  {
    Icon: User, title: "As a Consumer", hindi: "उपभोक्ता के रूप में", to: "/opportunities/consumer",
    body: "Access high-quality, ethically sourced products and services at fair cooperative prices.",
    benefits: ["Access to daily needs and essential services", "Significant reduction in expenses", "Cooperative community support"],
  },
  {
    Icon: Store, title: "As a Merchant", hindi: "व्यापारी के रूप में", to: "/opportunities/merchant",
    body: "Partner with us to reach a dedicated community customer base and grow your business with transparent partnerships.",
    benefits: ["Transparent business partnerships", "Multi-vendor, multi-location B2B and B2C framework", "Significant income enhancement"],
  },
  {
    Icon: TrendingUp, title: "As an Investor", hindi: "निवेश के रूप में", to: "/opportunities/investor",
    body: "Invest in community-driven projects with transparent returns and a focus on collective growth.",
    benefits: ["12%+ target cooperative annual return", "Transparent funding and ownership model", "Community-driven real estate & projects"],
  },
  {
    Icon: Briefcase, title: "As a Career", hindi: "करियर के रूप में", to: "/opportunities/career",
    body: "Connect with dignified and organized employment opportunities tailored perfectly to your qualifications and skills.",
    benefits: ["Employment according to qualification and interest", "Dignified and organized work culture", "Skill development and awareness"],
  },
];

function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-white/60">
        <span>Community Satisfaction</span><span className="text-gold">85%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "85%" } : {}}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
        />
      </div>
    </div>
  );
}

function OpportunitiesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-36 pb-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=70')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/85 to-navy" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-white/50">
              <Link to="/" className="hover:text-gold">Home</Link><span>›</span><span className="text-white/80">Opportunities</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}><GoldLabel>Grow With Us</GoldLabel></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-5xl font-bold text-white md:text-7xl">Opportunities</h1>
          </Reveal>
          <Reveal delay={0.2}><p className="mt-4 font-deva text-2xl text-gold">अवसर और योगदान</p></Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Explore how you can contribute to the Pavitram network and find the right role that aligns with your skills, resources, and vision.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contribution grid */}
      <section className="bg-haze py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl font-bold text-ink md:text-[48px]">How You Can Contribute</h2>
            <p className="mt-4 font-deva text-xl text-gold">आप कैसे योगदान दे सकते हैं?</p>
            <div className="mx-auto mt-6 h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(13,27,62,0.06)] ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:ring-gold hover:shadow-[0_24px_60px_-12px_rgba(13,27,62,0.18)]">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-haze text-ink ring-1 ring-mist/20">
                      <c.Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink">{c.title}</h3>
                      <p className="font-deva text-sm font-semibold text-gold">{c.hindi}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-mist">{c.body}</p>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.22em] text-mist/80">Key Benefits</p>
                  <ul className="mt-3 space-y-2">
                    {c.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={c.to} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink/15 px-5 py-3 text-sm font-bold text-ink transition group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                    Register Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <GoldLabel>Why Join Pavitram</GoldLabel>
            <h2 className="mt-5 font-display text-3xl font-bold text-white md:text-[42px]">A Platform Built for People, Not Profits</h2>
            <p className="mt-5 text-white/65">
              Pavitram India is not just a company; it's a movement to create a fair, transparent, and sustainable ecosystem where every member shares in the growth and success.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { Icon: ShieldCheck, label: "100% Transparency" },
                { Icon: Zap, label: "Fast-Track Growth" },
                { Icon: Users, label: "Community Owned" },
                { Icon: Heart, label: "Social Impact" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
                  <p.Icon className="h-4 w-4 text-gold" /> {p.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-gold/30 bg-white/5 p-8 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] md:p-10">
              <h3 className="font-display text-2xl font-bold text-white">The Power of Collaboration</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                In our network, a manufacturer gets fair prices, a worker gets dignity, and a consumer gets purity. No middlemen, no exploitation.
              </p>
              <div className="mt-8"><ProgressBar /></div>
              <Link to="/contact" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-navy transition hover:bg-gold">
                Start Your Journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
