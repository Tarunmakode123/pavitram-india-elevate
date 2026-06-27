import { Link } from "@tanstack/react-router";
import { type LucideIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type ServiceStep = {
  num: string;
  title: string;
  desc: string;
};

export type ServiceDetail = {
  slug: string;
  name: string;
  hindi: string;
  tagline: string;
  heroIcon: LucideIcon;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  pills: string[];
  whyUs: string[];
  features: ServiceFeature[];
  steps: ServiceStep[];
};

export function ServiceDetailPage({ d }: { d: ServiceDetail }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-navy pt-32 pb-20 md:py-36 min-h-[50vh] flex items-center">
        {/* Background glow */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="text-left">
              <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 mb-6">
                <Link to="/" className="hover:text-gold transition">
                  Home
                </Link>
                <span>/</span>
                <Link to="/services" className="hover:text-gold transition">
                  Services
                </Link>
                <span>/</span>
                <span className="text-gold">{d.name}</span>
              </nav>

              <GoldLabel>OUR ECOSYSTEM</GoldLabel>
              <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl md:text-[64px] leading-tight">
                {d.name}
              </h1>
              <p className="mt-2 font-deva text-xl md:text-[22px] font-semibold text-gold">
                {d.hindi}
              </p>
              <p className="mt-4 max-w-2xl text-lg text-white/80 leading-relaxed">{d.tagline}</p>
            </div>

            <div className="hidden lg:flex justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-40 w-40 place-items-center rounded-3xl bg-white/5 border border-gold/40 backdrop-blur-md text-gold shadow-[0_0_50px_rgba(201,149,42,0.25)]"
              >
                <d.heroIcon className="h-20 w-20" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <Reveal className="text-left">
              <GoldLabel>Overview</GoldLabel>
              <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-[36px]">
                {d.aboutTitle}
              </h2>
              <p className="mt-6 text-[16px] leading-[1.85] text-mist">{d.aboutP1}</p>
              <p className="mt-4 text-[16px] leading-[1.85] text-mist">{d.aboutP2}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {d.pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-navy border border-gold px-4 py-2 text-xs font-bold text-white uppercase tracking-wider"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-[24px] bg-navy p-8 sm:p-10 text-left border border-gold/40 shadow-[0_0_40px_rgba(201,149,42,0.15)]">
                <h3 className="font-display text-2xl font-bold text-gold mb-6">Why Choose Us</h3>
                <div className="space-y-5">
                  {d.whyUs.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/20 text-gold mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <p className="text-[15px] leading-relaxed text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-haze py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mx-auto max-w-3xl">
            <GoldLabel>WHAT WE OFFER</GoldLabel>
            <h2 className="mt-4 font-display text-4xl font-bold text-ink md:text-[40px]">
              Key Features
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {d.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-[20px] bg-white p-8 card-shadow transition-all duration-300 hover:-translate-y-1.5 hover:card-shadow-lg text-left">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold ring-1 ring-gold/30">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors group-hover:text-gold">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7] text-mist">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center mx-auto max-w-3xl">
            <GoldLabel>THE PROCESS</GoldLabel>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-[40px]">
              How It Works
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {d.steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.1}>
                <div className="relative flex flex-col items-start text-left">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/10 text-gold font-display text-2xl font-bold ring-2 ring-gold/30">
                    {s.num}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gold-dark via-gold to-gold-light py-16 text-navy">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
                Ready to explore {d.name}?
              </h2>
              <p className="mt-2 text-base font-semibold text-navy/80">
                Join thousands of Pavitram members already benefiting from this service.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white transition hover:bg-black hover:scale-105 shadow-lg"
              >
                Register Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-8 py-3.5 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
