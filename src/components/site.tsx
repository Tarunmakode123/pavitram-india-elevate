import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight, ArrowUp, ChevronDown, Menu, X,
  MessageCircle, Facebook, Instagram, Youtube, Twitter,
} from "lucide-react";
import logoAsset from "@/assets/pavitram-logo.png.asset.json";

export const LOGO_URL = logoAsset.url;

/* ─────────── motion helpers ─────────── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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

export function GoldLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold ${className}`}>
      <span className="h-px w-8 bg-gold" />
      {children}
    </span>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${className}`} />;
}

/* ─────────── Logo ─────────── */

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-navy ring-1 ring-gold/40 shadow-[0_0_20px_rgba(201,149,42,0.35)] transition group-hover:shadow-[0_0_28px_rgba(201,149,42,0.55)]">
        <img src={LOGO_URL} alt="Pavitram India" className="h-11 w-11 object-contain" />
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Pavitram <span className="text-gold">India</span>
      </span>
    </Link>
  );
}

/* ─────────── Navbar ─────────── */

type NavItem = {
  label: string;
  to?: string;
  dropdown?: { label: string; to: string }[];
  dropdownGrid?: string[][]; // for services: rows of 2
};

const ABOUT_ITEMS = [
  { label: "Our Vision", to: "/about/vision" },
  { label: "Our Mission", to: "/about/mission" },
  { label: "Our Philosophy", to: "/about/philosophy" },
];

const OPP_ITEMS = [
  { label: "Consumer", to: "/opportunities/consumer" },
  { label: "Merchant", to: "/opportunities/merchant" },
  { label: "Investor", to: "/opportunities/investor" },
  { label: "Career", to: "/opportunities/career" },
];

const SERVICES_GRID: [string, string][] = [
  ["Pavitram Technology", "Pavitram Mart"],
  ["Pavitram Properties", "Pavitram Wellness"],
  ["Pavitram Shiksha", "Pavitram Finance"],
  ["Pavitram Travels", "Pavitram Matrimonial"],
  ["Pavitram Naukari", "Pavitram Services"],
  ["Pavitram Media", "Pavitram Delivery"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); setActive(null); }, [pathname]);

  const isActive = (to: string) => to === "/" ? pathname === "/" : pathname.startsWith(to);

  const dropdownPanel = (id: string, body: ReactNode) => (
    <AnimatePresence>
      {active === id && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
        >
          <div className="rounded-2xl border border-gold/30 bg-navy/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            {body}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const linkCls = "block rounded-lg px-4 py-2.5 text-sm font-medium text-white/85 transition hover:bg-gold/10 hover:text-gold whitespace-nowrap";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/" ? "bg-navy/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            className={`relative px-4 py-2 text-sm font-medium transition-colors ${isActive("/") ? "text-gold" : "text-white/85 hover:text-white"}`}
          >
            Home
          </Link>

          {/* About */}
          <div className="relative" onMouseEnter={() => setActive("about")} onMouseLeave={() => setActive(null)}>
            <Link
              to="/about"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${pathname.startsWith("/about") ? "text-gold" : "text-white/85 hover:text-white"}`}
            >
              About Us <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </Link>
            {dropdownPanel(
              "about",
              <div className="min-w-[200px]">
                {ABOUT_ITEMS.map((i) => (
                  <Link key={i.to} to={i.to} className={linkCls}>{i.label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative" onMouseEnter={() => setActive("services")} onMouseLeave={() => setActive(null)}>
            <Link
              to="/services"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${pathname.startsWith("/services") ? "text-gold" : "text-white/85 hover:text-white"}`}
            >
              Services <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </Link>
            {dropdownPanel(
              "services",
              <div className="grid w-[520px] grid-cols-2 gap-1">
                {SERVICES_GRID.flat().map((s) => (
                  <Link key={s} to="/services" className={linkCls}>{s}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Opportunities */}
          <div className="relative" onMouseEnter={() => setActive("opp")} onMouseLeave={() => setActive(null)}>
            <Link
              to="/opportunities"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${pathname.startsWith("/opportunities") ? "text-gold" : "text-white/85 hover:text-white"}`}
            >
              Opportunities <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </Link>
            {dropdownPanel(
              "opp",
              <div className="min-w-[200px]">
                {OPP_ITEMS.map((i) => (
                  <Link key={i.to} to={i.to} className={linkCls}>{i.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/faq" className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/faq") ? "text-gold" : "text-white/85 hover:text-white"}`}>FAQ</Link>
          <Link to="/contact" className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/contact") ? "text-gold" : "text-white/85 hover:text-white"}`}>Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm font-bold text-white/90 transition hover:border-gold hover:text-gold font-deva">
            हि
          </button>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-gold hover:shadow-[0_8px_24px_-6px_rgba(201,149,42,0.6)]"
          >
            Join the Community
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-gold">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4">
            <Link to="/" className="py-3 text-white/85">Home</Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-white/85">About Us <ChevronDown className="h-4 w-4" /></summary>
              <div className="pl-4">{ABOUT_ITEMS.map(i => <Link key={i.to} to={i.to} className="block py-2 text-sm text-white/70">{i.label}</Link>)}</div>
            </details>
            <Link to="/services" className="py-3 text-white/85">Services</Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-white/85">Opportunities <ChevronDown className="h-4 w-4" /></summary>
              <div className="pl-4">{OPP_ITEMS.map(i => <Link key={i.to} to={i.to} className="block py-2 text-sm text-white/70">{i.label}</Link>)}</div>
            </details>
            <Link to="/faq" className="py-3 text-white/85">FAQ</Link>
            <Link to="/contact" className="py-3 text-white/85">Contact</Link>
            <Link to="/contact" className="mt-3 rounded-full bg-white px-5 py-3 text-center font-bold text-navy">Join the Community</Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────── Inner page hero ─────────── */

export function PageHero({
  label, title, hindi, subtitle, breadcrumb,
}: { label: string; title: string; hindi?: string; subtitle?: string; breadcrumb?: { label: string; to?: string }[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 30%, rgba(201,149,42,0.14), transparent 60%)",
      }} />
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(rgba(201,149,42,0.25) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
      }} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {breadcrumb && (
          <Reveal>
            <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-white/50">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  {b.to ? <Link to={b.to} className="hover:text-gold">{b.label}</Link> : <span className="text-white/80">{b.label}</span>}
                  {i < breadcrumb.length - 1 && <span>›</span>}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}><GoldLabel>{label}</GoldLabel></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-[64px]">
            {title}
          </h1>
        </Reveal>
        {hindi && <Reveal delay={0.18}><p className="mt-4 font-deva text-xl text-gold md:text-2xl">{hindi}</p></Reveal>}
        {subtitle && <Reveal delay={0.25}><p className="mx-auto mt-6 max-w-xl text-white/70">{subtitle}</p></Reveal>}
      </div>
    </section>
  );
}

/* ─────────── Final CTA ─────────── */

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-28"
      style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #131a4a 60%, #1a237e 100%)" }}>
      <div className="absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(circle at 20% 30%, rgba(201,149,42,0.45), transparent 50%), radial-gradient(circle at 80% 70%, rgba(232,184,75,0.3), transparent 50%)" }} />
      <Reveal className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-4xl font-bold text-white text-balance md:text-[56px] leading-[1.1]">
          Be Organised · Be Educated · <span className="text-gold">Be Empowered</span>
        </h2>
        <p className="mt-5 font-deva text-xl text-white/70">संगठित बनो · शिक्षित बनो · सशक्त बनो</p>
        <p className="mx-auto mt-6 max-w-2xl text-white/70">
          Join thousands of network partners working together for a self-reliant, prosperous India. Your contribution matters.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-gold hover:scale-[1.03]">
            Join Pavitram India <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────── Footer ─────────── */

export function Footer() {
  const explore: { label: string; to: string }[] = [
    { label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Services", to: "/services" },
    { label: "Opportunities", to: "/opportunities" }, { label: "FAQ", to: "/faq" }, { label: "Contact", to: "/contact" },
  ];
  const services = SERVICES_GRID.flat();
  const socials = [MessageCircle, Facebook, Instagram, Youtube, Twitter];

  return (
    <footer className="bg-navy-deep text-white">
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
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:text-gold hover:scale-110">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-gold">Explore</h4>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-sm text-white/70 transition hover:text-gold">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-gold">Our Services</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {services.map((s) => (
                <li key={s}><Link to="/services" className="text-sm text-white/70 transition hover:text-gold">{s}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 text-center text-xs text-white/50 md:flex-row md:justify-between md:text-left">
          <span>© 2026 Pavitram India. All rights reserved.</span>
          <span className="text-gold font-semibold">Sabka Saath · Sabka Vikas · Sabka Vishwas · Sabka Prayaas</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── Scroll to top ─────────── */

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 300);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_30px_rgba(201,149,42,0.45)] transition hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ─────────── Toast (lightweight, no deps) ─────────── */

let toastListener: ((msg: string) => void) | null = null;
export function showToast(msg: string) { toastListener?.(msg); }

export function ToastHost() {
  const [msg, setMsg] = useState<string | null>(null);
  const tRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    toastListener = (m: string) => {
      setMsg(m);
      if (tRef.current) clearTimeout(tRef.current);
      tRef.current = setTimeout(() => setMsg(null), 3500);
    };
    return () => { toastListener = null; };
  }, []);
  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed right-6 top-24 z-[60] rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-[0_12px_30px_rgba(201,149,42,0.45)]"
        >
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
