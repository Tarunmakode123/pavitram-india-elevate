import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Zap, Users, Heart, ArrowRight } from "lucide-react";
import { Reveal, GoldLabel, FinalCTA } from "@/components/site";
import LOGO_URL from "@/assets/pavitram-logo.jpg";

export const Route = createFileRoute("/about/network")({
  head: () => ({
    meta: [
      { title: "Business Network — Pavitram India" },
      {
        name: "description",
        content:
          "A professionally managed cooperative business network connecting 10,000+ members across 15+ states.",
      },
    ],
  }),
  component: BusinessNetworkPage,
});

function NetworkRings() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px]">
      <div className="absolute inset-0 animate-spin-slower rounded-full border border-gold/30" />
      <div className="absolute inset-[14%] animate-spin-reverse rounded-full border border-gold/40" />
      <div className="absolute inset-[28%] animate-spin-slow rounded-full border border-gold/50" />

      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-haze px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mist">
        Country
      </span>
      <span className="absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mist shadow">
        Society
      </span>
      <span className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-haze px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink shadow">
        Family
      </span>

      <div className="absolute left-1/2 top-1/2 grid h-20 w-20 sm:h-28 sm:w-28 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full bg-navy ring-2 ring-gold/60 animate-pulse-glow">
        <img
          src={LOGO_URL}
          alt="Pavitram India"
          className="h-16 w-16 sm:h-24 sm:w-24 object-contain"
        />
      </div>
    </div>
  );
}

function ProgressBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const bars = [
    { label: "Community Satisfaction", val: 89 },
    { label: "Member Retention Rate", val: 94 },
    { label: "Business Growth", val: 78 },
  ];

  return (
    <div ref={ref} className="space-y-6 text-left">
      {bars.map((b) => (
        <div key={b.label}>
          <div className="flex justify-between text-xs sm:text-sm font-bold text-ink mb-2">
            <span>{b.label}</span>
            <span className="text-gold">{b.val}%</span>
          </div>
          <div className="h-2.5 sm:h-3 w-full rounded-full bg-haze overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${b.val}%` } : { width: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function BusinessNetworkPage() {
  const stats = [
    { num: "10,000+", label: "Members" },
    { num: "15+", label: "States" },
    { num: "12%+", label: "Returns" },
    { num: "27", label: "Golden Rules" },
  ];

  const flowSteps = [
    {
      num: "01",
      title: "Join as a Member",
      desc: "Register as Consumer, Merchant, Investor, or Career associate.",
    },
    {
      num: "02",
      title: "Access the Ecosystem",
      desc: "Instantly connect with 10,000+ members across all 12 service areas.",
    },
    {
      num: "03",
      title: "Contribute & Benefit",
      desc: "Your participation strengthens the network and returns value to you.",
    },
    {
      num: "04",
      title: "Grow Together",
      desc: "As the network grows, every member's opportunities and returns increase.",
    },
  ];

  const values = [
    { icon: ShieldCheck, title: "100% Transparency", desc: "Every process and return is visible." },
    { icon: Zap, title: "Fast-Track Growth", desc: "Cooperative strength accelerates results." },
    { icon: Users, title: "Community Owned", desc: "Governed by and for the members." },
    { icon: Heart, title: "Social Impact", desc: "Lifting families and grassroots India." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20 md:py-36 min-h-[50vh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 mb-6">
            <Link to="/" className="hover:text-gold transition">
              Home
            </Link>
            <span>/</span>
            <Link to="/about" className="hover:text-gold transition">
              About Us
            </Link>
            <span>/</span>
            <span className="text-gold">Our Network</span>
          </nav>

          <GoldLabel>BUSINESS NETWORK</GoldLabel>
          <h1 className="mt-4 font-display text-3xl sm:text-5xl md:text-[64px] font-bold text-white leading-tight">
            The Pavitram Business Network
          </h1>
          <p className="mt-2 font-deva text-lg sm:text-xl md:text-[22px] font-semibold text-gold">
            Cooperative. Transparent. Nationwide.
          </p>
          <p className="mt-4 max-w-[580px] text-base sm:text-lg text-white/80 leading-relaxed">
            A professionally managed cooperative business network connecting 10,000+ members across
            15+ states — built on ethics, transparency, and collective growth.
          </p>
        </div>
      </section>

      {/* Network Stats Bar */}
      <section className="bg-white py-10 sm:py-12 border-b border-haze">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl sm:text-4xl font-bold text-gold">{s.num}</div>
                <div className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-mist">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-haze py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <NetworkRings />
            </Reveal>

            <Reveal delay={0.2} className="text-left">
              <GoldLabel>HOW IT WORKS</GoldLabel>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-ink md:text-[36px]">
                A Self-Sustaining Ecosystem
              </h2>
              <p className="mt-4 text-base leading-[1.85] text-mist">
                In the Pavitram network, every member is both a contributor and a beneficiary.
                Consumers support merchants, merchants support investors, investors fuel growth, and
                growth empowers careers — creating a perfect cooperative cycle.
              </p>

              <div className="mt-8 space-y-5 sm:space-y-6">
                {flowSteps.map((step) => (
                  <div key={step.num} className="flex items-start gap-3.5 sm:gap-4">
                    <span className="font-display text-xl sm:text-2xl font-bold text-gold shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="font-display text-base sm:text-lg font-bold text-ink">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-mist leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Network Values */}
      <section className="relative isolate overflow-hidden bg-navy py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mx-auto max-w-3xl">
            <GoldLabel>OUR CORE VALUES</GoldLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white md:text-[40px]">
              Built on Trust & Integrity
            </h2>
          </Reveal>

          <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-[20px] border border-gold/30 bg-white/5 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 text-left">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold mb-6">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Power of Collaboration */}
      <section className="bg-white py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 items-center">
            <Reveal className="text-left space-y-3 font-display text-xl sm:text-3xl md:text-[28px] font-bold leading-relaxed">
              <p className="text-navy">A manufacturer gets fair prices.</p>
              <p className="text-gold">A worker gets dignity.</p>
              <p className="text-navy">A consumer gets purity.</p>
              <p className="text-gold">No middlemen. No exploitation.</p>
            </Reveal>

            <Reveal delay={0.2}>
              <ProgressBars />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative overflow-hidden bg-navy py-16 sm:py-20 border-t border-gold/20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[20px] sm:rounded-[24px] border border-gold/40 bg-white/5 p-6 sm:p-14 backdrop-blur-md text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white md:text-4xl">
              Ready to join the Pavitram Business Network?
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base text-white/80">
              Become part of a 10,000+ strong nationwide movement transforming business and
              community life.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-navy transition hover:bg-white hover:scale-105 shadow-lg"
              >
                Register With Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
