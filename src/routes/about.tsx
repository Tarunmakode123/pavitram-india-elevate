import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sprout, Star, Rocket, Handshake, User, Home, Users, Flag, Quote, ArrowRight } from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pavitram India — Our Story, Vision & Values" },
      { name: "description", content: "Pavitram India organizes independent professionals and businesses into a cooperative network rooted in integrity, responsibility, excellence, pioneering and unity." },
      { property: "og:title", content: "About Pavitram India" },
      { property: "og:description", content: "Our story, vision, mission, philosophy and five core values." },
    ],
  }),
  component: AboutPage,
});

const TABS = [
  { id: "vision", label: "Our Vision", body: "We are building a business network where every associate can fulfill their requirements through a self-supporting cooperative ecosystem. Our focus is on developing professional excellence, prosperous partnerships, and a self-reliant economic structure." },
  { id: "mission", label: "Our Mission", body: "To empower every Indian family by creating a transparent, ethical, and cooperative platform that connects people, businesses, and opportunities — making self-reliance a reality for all, not just a few." },
  { id: "philosophy", label: "Our Philosophy", body: "We believe in the power of unity, fairness, and shared growth. Our philosophy is rooted in the ancient Indian principle of Vasudhaiva Kutumbakam — the world is one family. Every member contributes, every member benefits." },
];

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", body: "Fair, honest, transparent and ethical in conduct." },
  { icon: Sprout, title: "Responsibility", body: "Environmental and social principles in all businesses." },
  { icon: Star, title: "Excellence", body: "Highest standard of qualities, promoting meritocracy." },
  { icon: Rocket, title: "Pioneering", body: "Bold, agile, courageous — innovative solutions." },
  { icon: Handshake, title: "Unity", body: "Continuous learning, caring and collaborative relationships." },
];

const TREE = [
  { Icon: User, label: "Intellectual Citizen" },
  { Icon: Home, label: "Prosperous Family" },
  { Icon: Users, label: "Self-Reliant Society" },
  { Icon: Flag, label: "Developed India" },
];

function AboutPage() {
  const [tab, setTab] = useState("vision");
  const active = TABS.find(t => t.id === tab)!;

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        label="Our Story"
        title="About Pavitram India"
        hindi="हमारे बारे में"
      />

      {/* How it began */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <GoldLabel>How It Began</GoldLabel>
            <h2 className="mt-5 font-display text-3xl font-bold text-ink md:text-[42px]">Our Story</h2>
            <p className="mt-6 text-[17px] leading-[1.85] text-mist">
              Pavitram India began with a clear mission: to organize independent professionals and businesses into a powerful, cooperative network. Our founders recognized that by working together, we could create a more efficient and transparent ecosystem for everyone.
            </p>
            <div className="mt-8 text-2xl text-gold">◆</div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl bg-navy p-8 shadow-[0_30px_80px_-20px_rgba(10,15,30,0.5)] ring-1 ring-gold/30 md:p-10">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gold/10 blur-2xl" />
              <div className="flex gap-6 border-b border-white/10">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative pb-4 text-sm font-semibold transition ${tab === t.id ? "text-gold" : "text-white/60 hover:text-white"}`}
                  >
                    {t.label}
                    {tab === t.id && <motion.span layoutId="aboutTab" className="absolute -bottom-px left-0 right-0 h-0.5 bg-gold" />}
                  </button>
                ))}
              </div>
              <motion.p
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-[15px] leading-[1.85] text-white/80"
              >
                {active.body}
              </motion.p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Five core values */}
      <section className="bg-haze py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <GoldLabel>Core Values</GoldLabel>
            <h2 className="mt-5 font-display text-4xl font-bold text-ink md:text-[48px]">Five Core Values</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="group relative h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-10px_rgba(13,27,62,0.18)]">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Code of conduct banner */}
      <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(rgba(201,149,42,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
          <Quote className="mx-auto h-10 w-10 text-gold" />
          <p className="mt-6 font-display text-xl italic leading-[1.6] text-white md:text-2xl">
            "The code of conducts provides an ethical road map and guidelines for our values of integrity, responsibility, excellence, pioneering and unity to protect the interests of all associates."
          </p>
          <Quote className="mx-auto mt-6 h-10 w-10 rotate-180 text-gold" />
        </Reveal>
      </section>

      {/* Family tree */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <GoldLabel>Our Structure</GoldLabel>
            <h2 className="mt-5 font-display text-4xl font-bold text-ink md:text-[48px]">The Pavitram Family Tree</h2>
          </Reveal>

          <div className="relative mt-16">
            {TREE.map((n, i) => (
              <Reveal key={n.label} delay={i * 0.15}>
                <div className="relative flex items-center gap-6 py-5">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy text-gold ring-2 ring-gold/40 shadow-[0_0_30px_rgba(201,149,42,0.25)]">
                    <n.Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">Level {i + 1}</p>
                    <p className="font-display text-2xl font-bold text-ink">{n.label}</p>
                  </div>
                  {i < TREE.length - 1 && (
                    <motion.span
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="absolute left-8 top-[76px] block h-10 w-0.5 origin-top bg-gradient-to-b from-gold to-gold/20"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex justify-center gap-4">
            <Link to="/about/vision" className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-6 py-3 text-sm font-bold text-gold transition hover:bg-gold hover:text-navy">
              Explore Our Vision <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
