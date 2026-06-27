import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import {
  GraduationCap,
  Home,
  Users,
  Flag,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  ChevronDown,
  Cpu,
  ShoppingBag,
  Building2,
  HeartPulse,
  BookOpen,
  Landmark,
  Plane,
  Heart,
  Briefcase,
  Wrench,
  Radio,
  Truck,
  User,
  Store,
  TrendingUp,
  BriefcaseBusiness,
  Globe,
  ShieldCheck,
  BarChart3,
  Building,
  CheckCircle2,
  UsersRound,
  Handshake,
  Quote,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Sparkles,
  Zap,
  Shield,
  Eye,
  Lightbulb,
  Link2,
  Map,
  Network as NetworkIcon,
} from "lucide-react";
import LOGO_URL from "@/assets/pavitram-logo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pavitram India — Self-Reliant Community Platform" },
      {
        name: "description",
        content:
          "Pavitram India connects 10,000+ members across 15+ states through a cooperative network of 12 services — from finance and education to wellness and matrimonial.",
      },
      { property: "og:title", content: "Pavitram India — Self-Reliant Community" },
      {
        property: "og:description",
        content:
          "Intellectual Citizen · Prosperous Family · Self-Reliant Society · Developed India.",
      },
    ],
  }),
  component: Index,
});

/* ─────────── helpers ─────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

function GoldLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </span>
  );
}

function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <GoldLabel>{label}</GoldLabel>
      <h2
        className={`mt-5 font-display text-4xl font-bold leading-tight text-balance md:text-[52px] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-balance ${light ? "text-white/70" : "text-mist"}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ─────────── Logo ─────────── */

function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-navy ring-1 ring-gold/40 shadow-[0_0_20px_rgba(201,149,42,0.35)] transition group-hover:shadow-[0_0_28px_rgba(201,149,42,0.55)]">
        <img src={LOGO_URL} alt="Pavitram India" className="h-11 w-11 object-contain" />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
        Pavitram <span className="text-gold">India</span>
      </span>
    </a>
  );
}

/* ─────────── Navbar ─────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#pillars", caret: true },
    { label: "Services", href: "#services", caret: true },
    { label: "Opportunities", href: "#opportunities", caret: true },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
              {l.caret && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm font-bold text-white/90 transition hover:border-gold hover:text-gold font-deva">
            हि
          </button>
          <a
            href="#join"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-gold hover:shadow-[0_8px_24px_-6px_rgba(201,149,42,0.6)]"
          >
            Join the Community
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#join"
              className="mt-3 rounded-full bg-white px-5 py-3 text-center font-bold text-navy"
            >
              Join the Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────── Hero diagram ─────────── */

function HeroDiagram() {
  const labels = [
    { text: "Intellectual Citizen", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { text: "Prosperous Family", pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
    { text: "Developed India", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { text: "Self-Reliant Society", pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[270px] sm:max-w-[360px] md:max-w-[460px] py-6 sm:py-0">
      {/* dot grid */}
      <div
        className="absolute inset-[-20px] sm:inset-[-40px] opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(201,149,42,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle, black 40%, transparent 75%)",
        }}
      />

      {/* circle + traveling arrow */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <linearGradient id="ring" x1="0" x2="1">
            <stop offset="0" stopColor="#C9952A" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#E8B84B" />
            <stop offset="1" stopColor="#C9952A" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="170" fill="none" stroke="url(#ring)" strokeWidth="1.5" />
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="#C9952A"
          strokeWidth="2"
          strokeDasharray="40 1028"
          strokeLinecap="round"
        />
        {/* arrow head at end of dash */}
        <g transform="translate(200 30)">
          <polygon points="0,-6 10,0 0,6" fill="#E8B84B" />
        </g>
      </svg>

      {/* center logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="grid h-20 w-20 sm:h-28 sm:w-28 place-items-center overflow-hidden rounded-full bg-navy ring-2 ring-gold/60 animate-pulse-glow">
          <img
            src={LOGO_URL}
            alt="Pavitram India"
            className="h-16 w-16 sm:h-24 sm:w-24 object-contain"
          />
        </div>
      </div>

      {/* labels */}
      {labels.map((l) => (
        <div key={l.text} className={`absolute ${l.pos} z-10`}>
          <div className="glass-card whitespace-nowrap rounded-full border-gold/40 px-2.5 py-1 text-[10px] sm:px-4 sm:py-2 sm:text-xs font-semibold text-white shadow-[0_0_24px_rgba(201,149,42,0.18)]">
            {l.text}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────── Hero ─────────── */

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      {/* particles */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(201,149,42,0.12), transparent 60%)",
          }}
        />
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/40"
            style={{
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animation: `float-particle ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-24 pt-36 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <GoldLabel>Pavitram India</GoldLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-[80px]">
              Pavitram{" "}
              <span className="relative inline-block">
                India
                <span className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-gold to-gold-light animate-draw-underline" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-display text-xl italic text-gold md:text-[22px]">
              Intellectual Citizen, Prosperous Family,
              <br />
              Self-Reliant Society, Developed India
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.8] text-white/65">
              Pavitram India is a self-reliant community where the needs of the members are
              fulfilled by the members themselves, including daily needs, education, health, real
              estate, and essential services. As a family, the Pavitram India community connects the
              capabilities and needs of all its members to form a self-sustaining ecosystem, helping
              them increase their income and reduce expenses.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#join"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-gold hover:scale-[1.03] hover:shadow-[0_12px_40px_-8px_rgba(232,184,75,0.6)]"
              >
                Join the Community
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold"
              >
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <HeroDiagram />
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50 animate-bounce">
        Scroll <ArrowDown className="mx-auto mt-1 h-3 w-3" />
      </div>
    </section>
  );
}

/* ─────────── Stats ─────────── */

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2.2, ease: [0.2, 0.7, 0.2, 1] });
  }, [inView, mv, to]);
  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function Stats() {
  const items = [
    { icon: UsersRound, value: 10000, suffix: "+", label: "Community Members" },
    { icon: Cpu, value: 8, suffix: "", label: "Service Sectors" },
    { icon: BookOpen, value: 27, suffix: "", label: "Golden Rules" },
    { icon: Globe, value: 15, suffix: "+", label: "States Covered" },
  ];
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-16 md:grid-cols-4 md:divide-x md:divide-haze md:gap-y-0">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.08} className="flex flex-col items-center text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[#FDF3E0]">
              <it.icon className="h-6 w-6 text-gold" />
            </div>
            <div className="mt-4 font-display text-4xl font-bold text-ink md:text-[42px]">
              <CountUp to={it.value} suffix={it.suffix} />
            </div>
            <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
              {it.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────── Four Pillars ─────────── */

function Pillars() {
  const cards = [
    {
      icon: GraduationCap,
      title: "Intellectual Citizen",
      hi: "प्रबुद्ध नागरिक",
      text: "Aware, educated, and rational citizen",
    },
    {
      icon: Home,
      title: "Prosperous Family",
      hi: "समृद्ध परिवार",
      text: "Ensuring availability of all basic needs, higher income, and lower expenses",
    },
    {
      icon: Users,
      title: "Self-Reliant Society",
      hi: "आत्मनिर्भर समाज",
      text: "Fulfilling all needs of the society by the society itself",
    },
    {
      icon: Flag,
      title: "Developed India",
      hi: "विकसित भारत",
      text: "Enlightened, prosperous, self-reliant, and developed India",
    },
  ];
  return (
    <section id="pillars" className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label="Our Vision" title="The Four Pillars of Pavitram" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-shadow hover:card-shadow-lg"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">{c.title}</h3>
              <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
              <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Mission ─────────── */

function Mission() {
  const cards = [
    {
      num: "01",
      icon: Handshake,
      title: "Sabka Saath",
      hi: "सबका साथ",
      body: "Building a united community where every member stands together, supports each other, and grows as one cooperative family across India.",
    },
    {
      num: "02",
      icon: Zap,
      title: "Sabka Prayaas",
      hi: "सबका प्रयास",
      body: "Encouraging every individual to contribute their skills, time, and efforts toward building a stronger, self-reliant, and prosperous society.",
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Sabka Vikas",
      hi: "सबका विकास",
      body: "Ensuring inclusive development where growth reaches every village, every family, and every citizen — leaving no one behind in our nation's progress.",
    },
    {
      num: "04",
      icon: Shield,
      title: "Sabka Vishwas",
      hi: "सबका विश्वास",
      body: "Earning and maintaining the complete trust of every member through absolute transparency, integrity, and ethical governance at every level.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>OUR MISSION</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-[48px]">
            Our Mission
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारा मिशन</p>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 0 25px rgba(201, 149, 42, 0.25)" }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[20px] border border-gold/30 bg-white/5 p-7 backdrop-blur-md transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="font-display text-4xl font-bold text-gold/30 transition-colors group-hover:text-gold/60">
                  {c.num}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold">
                  <c.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">{c.title}</h3>
              <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
              <p className="mt-3 text-[15px] leading-[1.7] text-white/70">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Philosophy ─────────── */

function Philosophy() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Akhanda — Integrity",
      hi: "अखंडता",
      body: "We conduct ourselves with complete honesty, fairness, and ethical principles in every interaction, decision, and partnership within our cooperative network.",
    },
    {
      icon: Eye,
      title: "Paardarsita — Transparency",
      hi: "पारदर्शिता",
      body: "Every process, transaction, and decision in our network is open and visible to all members. We believe transparency builds the trust that holds our community together.",
    },
    {
      icon: Lightbulb,
      title: "Navaachar — Innovation",
      hi: "नवाचार",
      body: "We continuously embrace new ideas, technologies, and approaches to solve real problems and create better opportunities for our members and society.",
    },
    {
      icon: Link2,
      title: "Gathbandhan — Collaboration",
      hi: "गठबंधन",
      body: "Our strength lies in unity. By forging meaningful partnerships between individuals, businesses, and organizations, we create an ecosystem far stronger than the sum of its parts.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>OUR PHILOSOPHY</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            Our Philosophy
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारा दर्शन</p>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all duration-300 flex flex-col"
            >
              {/* Top gold accent line */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gold/40 transition-colors group-hover:bg-gold" />

              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-gold ring-2 ring-gold/20">
                <c.icon className="h-5 w-5" />
              </div>

              <div className="mt-6 text-left">
                <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-gold">
                  {c.title}
                </h3>
                <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
                <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Journey Strip ─────────── */

function JourneyStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const nodes = [
    { emoji: "🏡", en: "Villages", hi: "गांव" },
    { emoji: "🏙️", en: "Cities", hi: "शहर" },
    { emoji: "🗺️", en: "States", hi: "प्रदेश" },
    { emoji: "🇮🇳", en: "Nation", hi: "देश" },
  ];

  return (
    <div ref={ref} className="relative mt-20 max-w-4xl mx-auto px-4">
      {/* SVG Connecting Line */}
      <div className="absolute top-10 left-8 right-8 h-1 -translate-y-1/2 z-0 hidden md:block">
        <svg className="w-full h-full" fill="none">
          <line
            x1="0"
            y1="2"
            x2="100%"
            y2="2"
            stroke="rgba(201, 149, 42, 0.15)"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <motion.line
            x1="0"
            y1="2"
            x2="100%"
            y2="2"
            stroke="#C9952A"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Nodes */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {nodes.map((n, i) => (
          <div key={n.en} className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-navy border-2 border-gold ring-4 ring-gold/15 shadow-[0_0_20px_rgba(201, 149, 42, 0.3)] text-3xl"
            >
              {n.emoji}
            </motion.div>
            <span className="mt-4 text-sm font-bold uppercase tracking-wider text-white">
              {n.en}
            </span>
            <span className="mt-1 font-deva text-xs font-semibold text-gold">{n.hi}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Presence ─────────── */

function Presence() {
  const cards = [
    {
      icon: Home,
      num: 5000,
      suffix: "+",
      label: "Villages",
      hi: "गांव",
      body: "Active community members in rural villages across India",
    },
    {
      icon: Building2,
      num: 200,
      suffix: "+",
      label: "Cities",
      hi: "शहर",
      body: "Urban business associates and cooperative networks",
    },
    {
      icon: Map,
      num: 15,
      suffix: "+",
      label: "States",
      hi: "प्रदेश",
      body: "States covered with active Pavitram India operations",
    },
    {
      icon: Flag,
      num: 1,
      suffix: "",
      label: "Nation",
      hi: "देश",
      body: "One united cooperative movement building a developed India",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>OUR PRESENCE</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-[48px]">
            Our Presence Across India
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारी उपस्थिति</p>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            From the smallest village to the heart of the nation — Pavitram India is building a
            connected, self-reliant community at every level of society.
          </p>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 0 25px rgba(201, 149, 42, 0.25)" }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[20px] border border-gold/30 bg-white/5 p-7 backdrop-blur-md transition-all duration-300"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="mt-6 font-display text-4xl md:text-5xl font-bold text-gold">
                <CountUp to={c.num} suffix={c.suffix} />
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-white uppercase tracking-wider">
                {c.label}
              </h3>
              <p className="mt-0.5 font-deva text-sm font-semibold text-gold">{c.hi}</p>
              <p className="mt-3 text-[13px] leading-[1.6] text-white/60">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <JourneyStrip />
      </div>
    </section>
  );
}

/* ─────────── Association With ─────────── */

function AssociationWith() {
  const cards = [
    {
      icon: Landmark,
      title: "With Government",
      hi: "सरकार के साथ",
      body: "Aligning with government policies, schemes, and initiatives to bring their benefits directly to our community members across India.",
      tag: "Government Policies & Schemes",
    },
    {
      icon: Briefcase,
      title: "With Govt Departments",
      hi: "सरकारी विभागों के साथ",
      body: "Partnering with government departments for effective on-ground implementation of welfare schemes and development programs.",
      tag: "Implementation Partner",
    },
    {
      icon: Users,
      title: "With Beneficiaries",
      hi: "लाभार्थियों के साथ",
      body: "Directly connecting with and empowering the real beneficiaries — families, farmers, workers, and entrepreneurs — who need support.",
      tag: "लाभार्थी / हितग्राही",
    },
    {
      icon: NetworkIcon,
      title: "With Organizations",
      hi: "संगठनों के साथ",
      body: "Collaborating with NGOs, cooperatives, professional bodies, and community organizations to strengthen our nationwide network.",
      tag: "संगठन",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>ASSOCIATION WITH</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            Who We Work With
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारे सहयोगी</p>
          <p className="mx-auto mt-6 max-w-xl text-mist">
            Pavitram India builds powerful associations at every level — from government bodies to
            grassroots organizations — to create maximum impact for our members.
          </p>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "#C9952A" }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col justify-between rounded-[20px] border border-transparent bg-white p-7 card-shadow transition-all duration-300"
            >
              <div className="text-left">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy text-gold ring-2 ring-gold/20 transition-colors group-hover:bg-gold group-hover:text-navy">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors group-hover:text-gold">
                  {c.title}
                </h3>
                <p className="mt-1 font-deva text-sm font-semibold text-gold">{c.hi}</p>
                <p className="mt-3 text-sm leading-[1.7] text-mist">{c.body}</p>
              </div>
              <div className="mt-6 border-t border-haze pt-4 text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                  {c.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy hover:scale-[1.03]"
          >
            Join Pavitram India <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Services ─────────── */

function Services() {
  const items = [
    { icon: Cpu, title: "Pavitram Technology", text: "Technology, digital and software services" },
    {
      icon: ShoppingBag,
      title: "Pavitram Mart",
      text: "All products on one platform, multi-category, multi-vendor, multi-location B2B, B2C",
    },
    {
      icon: Building2,
      title: "Pavitram Properties",
      text: "Complete solution for property-related needs",
    },
    { icon: HeartPulse, title: "Pavitram Wellness", text: "Healthy body, mind, and wealth" },
    {
      icon: BookOpen,
      title: "Pavitram Gyan",
      text: "Awareness, skill development, and education for all, equal education",
    },
    {
      icon: Landmark,
      title: "Pavitram Finance",
      text: "Banking, loans, investment, and insurance",
    },
    { icon: Plane, title: "Pavitram Travels", text: "Complete solution for tour and travel needs" },
    { icon: Heart, title: "Pavitram Rishta", text: "Complete solution for matrimonial needs" },
    {
      icon: Briefcase,
      title: "Pavitram Rozgar",
      text: "Employment and business according to qualification, ability, and interest",
    },
    {
      icon: Wrench,
      title: "Pavitram Services",
      text: "All types of maintenance, housekeeping, security, etc. services",
    },
    { icon: Radio, title: "Pavitram Media", text: "Electronic and social media, e-paper" },
    { icon: Truck, title: "Pavitram Delivery", text: "Anything, anywhere, anytime" },
    {
      icon: Heart,
      title: "Pavitram Foundation",
      text: "Social welfare, community development, and charitable initiatives",
    },
  ];
  return (
    <section id="services" className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Our Ecosystem"
          title="Core Services"
          subtitle="A professional network of distinct services designed to handle every aspect of your personal and professional life."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-[20px] border border-transparent bg-white p-6 card-shadow transition-all hover:border-gold hover:card-shadow-lg"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-haze text-mist transition group-hover:bg-[#FDF3E0] group-hover:text-gold">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-gold">{s.title}</h3>
              <p className="mt-2 flex-1 text-[14.5px] leading-[1.7] text-mist">{s.text}</p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold transition group-hover:gap-2"
              >
                Explore Portal <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="mt-14 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:scale-[1.03]"
          >
            Explore All Services <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Opportunities ─────────── */

function Opportunities() {
  const items = [
    {
      icon: User,
      title: "As a Consumer",
      hi: "उपभोक्ता के रूप में",
      to: "/opportunities/consumer",
    },
    {
      icon: Store,
      title: "As a Merchant",
      hi: "व्यापारी के रूप में",
      to: "/opportunities/merchant",
    },
    {
      icon: TrendingUp,
      title: "As an Investor",
      hi: "निवेश के रूप में",
      to: "/opportunities/investor",
      filled: true,
    },
    {
      icon: BriefcaseBusiness,
      title: "As a Career",
      hi: "करियर के रूप में",
      to: "/opportunities/career",
    },
  ];
  return (
    <section id="opportunities" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Opportunities"
          title="Explore Opportunities"
          subtitle="Join the Pavitram India community in a role that suits your goals."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((it) => (
            <motion.div key={it.title} variants={fadeUp} whileHover={{ y: -6 }} className="flex">
              <Link
                to={it.to}
                className="group flex flex-1 flex-col items-center justify-between rounded-[20px] border border-haze bg-white p-7 text-center card-shadow transition-all hover:border-gold hover:card-shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`mx-auto grid h-16 w-16 place-items-center rounded-full transition ${
                      it.filled
                        ? "bg-navy text-white group-hover:bg-gold group-hover:text-navy"
                        : "bg-[#FDF3E0] text-gold group-hover:bg-gold group-hover:text-white"
                    }`}
                  >
                    <it.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{it.title}</h3>
                  <p className="mt-1 font-deva text-sm font-semibold text-gold">{it.hi}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition group-hover:text-gold">
                  Register <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Network ─────────── */

function NetworkRings() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
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

      <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full bg-navy ring-2 ring-gold/60 animate-pulse-glow">
        <img src={LOGO_URL} alt="Pavitram India" className="h-24 w-24 object-contain" />
      </div>
    </div>
  );
}

function Network() {
  const feats = [
    {
      icon: UsersRound,
      title: "Business Network",
      text: "Connect with 10,000+ members across all sectors",
    },
    { icon: Globe, title: "Pan-India Reach", text: "Services and business spanning 15+ states" },
    {
      icon: BarChart3,
      title: "Growth Focused",
      text: "Transparent cooperative model with 12%+ returns",
    },
    {
      icon: ShieldCheck,
      title: "Ethical Standards",
      text: "Highest integrity and accountability at every level",
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <GoldLabel>Business Network</GoldLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[52px]">
              The Pavitram Business Network
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-display text-xl italic text-gold">
              Cooperative. Transparent. Nationwide.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-mist">
              Pavitram India is a professionally managed cooperative business network and a
              self-reliant community where the needs of members are fulfilled by the members
              themselves. It provides transparent access to daily needs, education, health, real
              estate, investment opportunities, employment, and essential services. As a family, it
              connects capabilities and needs to increase income, reduce expenses, and foster
              nationwide business partnerships.
            </p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid gap-5 sm:grid-cols-2"
          >
            {feats.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="rounded-[20px] border border-haze bg-white p-5 card-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#FDF3E0] text-gold">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-ink">{f.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-mist">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
          <Reveal delay={0.2}>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
            >
              Learn About Our Network <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <NetworkRings />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Testimonials ─────────── */

function Testimonials() {
  const items = [
    {
      quote:
        "Pavitram India helped me understand my constitutional rights and connect with others who share the same values of equality and dignity.",
      name: "Suresh Kumar",
      initial: "S",
      role: "Government Employee · Bhopal",
    },
    {
      quote:
        "As a small business owner, I found a community that supports ethical business practices and gives me access to genuine customers.",
      name: "Meena Devi",
      initial: "M",
      role: "Business Associate · Indore",
    },
    {
      quote:
        "The health guidance and cooperative services have genuinely improved our family's quality of life. This is real community support.",
      name: "Ramesh Patel",
      initial: "R",
      role: "Community Member · Jabalpur",
    },
    {
      quote:
        "Through Pavitram Gyan and Rozgar, our youth are gaining valuable skills and dignified employment right within our region.",
      name: "Sunita Sharma",
      initial: "S",
      role: "Education Coordinator · Gwalior",
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label="Community Voices" title="What Our Members Say" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-[20px] border-l-4 border-transparent bg-haze p-8 transition hover:border-gold hover:card-shadow-lg"
            >
              <Quote className="h-10 w-10 text-gold/70" />
              <p className="mt-4 text-[16px] leading-[1.8] text-ink/85">{t.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy font-display text-lg font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-ink">{t.name}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── CTA Banner ─────────── */

function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-x-0 top-1/2 -z-10 h-[400px] -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,149,42,0.18), transparent 60%)",
        }}
      />
      <Reveal className="mx-auto max-w-3xl px-6">
        <div className="glass-card rounded-[28px] p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-bold text-white text-balance md:text-[44px] leading-tight">
            Ready to join the Pavitram Business Network?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Connect with thousands of business associates, service providers, and investors across
            India — all governed by a strict ethical framework.
          </p>
          <a
            href="#join"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-3.5 text-sm font-bold text-gold transition hover:bg-gold hover:text-navy hover:scale-[1.03]"
          >
            Register With Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────── Final CTA ─────────── */

function FinalCTA() {
  return (
    <section
      id="join"
      className="relative isolate overflow-hidden py-28"
      style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #131a4a 60%, #1a237e 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(201,149,42,0.45), transparent 50%), radial-gradient(circle at 80% 70%, rgba(232,184,75,0.3), transparent 50%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold text-white text-balance md:text-[56px] leading-[1.1]">
          Be Organised · Be Educated · <span className="text-gold">Be Empowered</span>
        </h2>
        <p className="mt-5 font-deva text-xl text-white/70">संगठित बनो · शिक्षित बनो · सशक्त बनो</p>
        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Join thousands of network partners working together for a self-reliant, prosperous India.
          Your contribution matters.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-gold hover:scale-[1.03]"
          >
            Join Pavitram India <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────── Footer ─────────── */

function Footer() {
  const explore = ["Home", "About Us", "Services", "FAQ", "Contact"];
  const services = [
    "Pavitram Technology",
    "Pavitram Mart",
    "Pavitram Properties",
    "Pavitram Wellness",
    "Pavitram Gyan",
    "Pavitram Finance",
    "Pavitram Travels",
    "Pavitram Rishta",
    "Pavitram Rozgar",
    "Pavitram Services",
    "Pavitram Media",
    "Pavitram Delivery",
    "Pavitram Foundation",
  ];
  const socials = [MessageCircle, Facebook, Instagram, Youtube, Twitter];

  return (
    <footer id="contact" className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-6 font-deva text-sm font-semibold text-gold">
              प्रबुद्ध नागरिक | समृद्ध परिवार | आत्मनिर्भर समाज
            </p>
            <p className="mt-4 max-w-sm text-sm leading-[1.8] text-white/60">
              Building Intellectual Citizens, Prosperous Families & Self-Reliant Society
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:text-gold hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-gold">Explore</h4>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/70 transition hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-gold">Our Services</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-white/70 transition hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 text-center text-xs text-white/50 md:flex-row md:justify-between md:text-left">
          <span>© 2026 Pavitram India. All rights reserved.</span>
          <span className="text-gold font-semibold">
            Sabka Saath · Sabka Vikas · Sabka Vishwas · Sabka Prayaas
          </span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── Page ─────────── */

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <Pillars /> {/* Section A: Our Vision */}
      <Mission /> {/* Section B: Our Mission */}
      <Philosophy /> {/* Section C: Our Philosophy */}
      <Presence /> {/* Section D: Our Presence */}
      <Opportunities /> {/* Section E: Opportunities */}
      <AssociationWith /> {/* Section F: Association With */}
      <Services /> {/* Section G: Our Working Areas / Core Services */}
      <Network />
      <Testimonials />
      <CTABanner />
      <FinalCTA />
    </>
  );
}
