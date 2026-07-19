import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  UsersRound,
  GraduationCap,
  Zap,
  Plus,
  Sparkles,
} from "lucide-react";
import LOGO_URL from "@/assets/pavitram-logo.jpg";
import { type ModalData } from "@/components/premium-modal";

export { LOGO_URL };

/* ─────────── motion helpers ─────────── */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export function Reveal({
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

export function GoldLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold ${className}`}
    >
      <span className="h-px w-8 bg-gold" />
      {children}
    </span>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${className}`}
    />
  );
}

/* ─────────── Logo ─────────── */

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-navy ring-1 ring-gold/40 shadow-[0_0_20px_rgba(201,149,42,0.35)] transition group-hover:shadow-[0_0_28px_rgba(201,149,42,0.55)]">
        <img src={LOGO_URL} alt="Pavitram India" className="h-11 w-11 object-contain" />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
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
  ["Pavitram Mart", "Pavitram Properties"],
  ["Pavitram Wellness", "Pavitram Gyan"],
  ["Pavitram Finance", "Pavitram Travels"],
  ["Pavitram Rishta", "Pavitram Rozgar"],
  ["Pavitram Services", "Pavitram Media"],
  ["Pavitram Delivery", "Pavitram Technology"],
];

const SERVICE_SLUGS: Record<string, string> = {
  "Pavitram Technology": "/services/technology",
  "Pavitram Mart": "/services/mart",
  "Pavitram Properties": "/services/properties",
  "Pavitram Wellness": "/services/wellness",
  "Pavitram Gyan": "/services/gyan",
  "Pavitram Finance": "/services/finance",
  "Pavitram Travels": "/services/travels",
  "Pavitram Rishta": "/services/rishta",
  "Pavitram Rozgar": "/services/rozgar",
  "Pavitram Services": "/services/services",
  "Pavitram Media": "/services/media",
  "Pavitram Delivery": "/services/delivery",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isHindi, setIsHindi] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Cookie helper to check current translation
  const getCookie = (name: string) => {
    if (typeof document === "undefined") return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length > 1) {
      return parts[1].split(";").shift() || null;
    }
    return null;
  };

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActive(null);
  }, [pathname]);

  useEffect(() => {
    const checkLang = () => {
      const transCookie = getCookie("googtrans");
      setIsHindi(transCookie === "/en/hi" || transCookie?.includes("/hi") || false);
    };
    checkLang();
    const interval = setInterval(checkLang, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateTransCookie = (value: string | null) => {
    if (typeof document === "undefined") return;

    // 1. Get all path prefixes of the current URL to override path-specific cookies
    const paths = ["/"];
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    let currentPath = "";
    for (const part of pathParts) {
      currentPath += "/" + part;
      paths.push(currentPath);
      paths.push(currentPath + "/");
    }

    // 2. Get all domain variations
    const host = window.location.hostname;
    const domains = [undefined, host, `.${host}`];
    const hostParts = host.split(".");
    for (let i = 0; i < hostParts.length; i++) {
      const domain = hostParts.slice(i).join(".");
      if (domain) {
        domains.push(domain);
        domains.push(`.${domain}`);
      }
    }

    const uniqueDomains = Array.from(new Set(domains));
    const uniquePaths = Array.from(new Set(paths));

    // 3. Clear/expire existing cookies on all combinations of paths and domains
    for (const path of uniquePaths) {
      for (const domain of uniqueDomains) {
        const domainString = domain ? `; Domain=${domain}` : "";
        const pathString = `; Path=${path}`;
        const expireString = "; Expires=Thu, 01 Jan 1970 00:00:01 GMT";

        document.cookie = `googtrans=;${domainString}${pathString}${expireString};`;
      }
    }

    // 4. Set the new cookie value on all paths and domains
    if (value) {
      for (const path of uniquePaths) {
        for (const domain of uniqueDomains) {
          const domainString = domain ? `; Domain=${domain}` : "";
          const pathString = `; Path=${path}`;
          document.cookie = `googtrans=${value}${domainString}${pathString};`;
        }
      }
    }
  };

  const toggleLanguage = () => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (isHindi) {
      // Revert to English: clear cookies and reload to restore original state
      updateTransCookie("/en/en");

      if (select) {
        // Try setting select value to "" first (original page language)
        select.value = "";
        // If that didn't work (some browsers), try index 0
        if (!select.value && select.options.length > 0) {
          select.selectedIndex = 0;
        }
        // If "en" option exists specifically, use it
        const hasEn = Array.from(select.options).some((opt) => opt.value === "en");
        if (hasEn) {
          select.value = "en";
        }
        select.dispatchEvent(new Event("change"));
      }
      setIsHindi(false);
      setTimeout(() => {
        window.location.reload();
      }, 150);
    } else {
      // Translate to Hindi
      updateTransCookie("/en/hi");

      if (select) {
        select.value = "hi";
        select.dispatchEvent(new Event("change"));
      }
      setIsHindi(true);
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  };

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

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

  const linkCls =
    "block rounded-lg px-4 py-2.5 text-sm font-medium text-white/85 transition hover:bg-gold/10 hover:text-gold whitespace-nowrap";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-navy/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
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
          <div
            className="relative"
            onMouseEnter={() => setActive("about")}
            onMouseLeave={() => setActive(null)}
          >
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
                  <Link key={i.to} to={i.to} className={linkCls}>
                    {i.label}
                  </Link>
                ))}
              </div>,
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setActive("services")}
            onMouseLeave={() => setActive(null)}
          >
            <Link
              to="/services"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${pathname.startsWith("/services") ? "text-gold" : "text-white/85 hover:text-white"}`}
            >
              Services <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </Link>
            {dropdownPanel(
              "services",
              <div className="grid w-[520px] grid-cols-2 gap-1">
                {SERVICES_GRID.flat()
                  .filter(Boolean)
                  .map((s) => (
                    <Link key={s} to={SERVICE_SLUGS[s] || "/services"} className={linkCls}>
                      {s}
                    </Link>
                  ))}
              </div>,
            )}
          </div>

          {/* Opportunities */}
          <div
            className="relative"
            onMouseEnter={() => setActive("opp")}
            onMouseLeave={() => setActive(null)}
          >
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
                  <Link key={i.to} to={i.to} className={linkCls}>
                    {i.label}
                  </Link>
                ))}
              </div>,
            )}
          </div>

          <Link
            to="/faq"
            className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/faq") ? "text-gold" : "text-white/85 hover:text-white"}`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/contact") ? "text-gold" : "text-white/85 hover:text-white"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLanguage}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm font-bold text-white/90 transition hover:border-gold hover:text-gold font-deva cursor-pointer"
            title={isHindi ? "Translate to English" : "हिन्दी में अनुवाद करें"}
          >
            {isHindi ? "EN" : "हि"}
          </button>
          <Link
            to="/join"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-gold hover:shadow-[0_8px_24px_-6px_rgba(201,149,42,0.6)]"
          >
            Join the Community
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm font-bold text-white/90 transition hover:border-gold hover:text-gold font-deva cursor-pointer"
            title={isHindi ? "Translate to English" : "हिन्दी में अनुवाद करें"}
          >
            {isHindi ? "EN" : "हि"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-gold cursor-pointer"
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-3 text-white/85">
              Home
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-white/85">
                About Us <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="pl-4">
                {ABOUT_ITEMS.map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-white/70"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link to="/services" onClick={() => setOpen(false)} className="py-3 text-white/85">
              Services
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-white/85">
                Opportunities <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="pl-4">
                {OPP_ITEMS.map((i) => (
                  <Link
                    key={i.to}
                    to={i.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-white/70"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link to="/faq" onClick={() => setOpen(false)} className="py-3 text-white/85">
              FAQ
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-3 text-white/85">
              Contact
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                toggleLanguage();
              }}
              className="py-3 text-left font-bold text-gold cursor-pointer"
            >
              {isHindi ? "Translate to English (EN)" : "हिंदी में अनुवाद करें (हि)"}
            </button>
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-white px-5 py-3 text-center font-bold text-navy"
            >
              Join the Community
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────── Inner page hero ─────────── */

export function PageHero({
  label,
  title,
  hindi,
  subtitle,
  breadcrumb,
}: {
  label: string;
  title: string;
  hindi?: string;
  subtitle?: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-36 pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(201,149,42,0.14), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(201,149,42,0.25) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {breadcrumb && (
          <Reveal>
            <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-white/50">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  {b.to ? (
                    <Link to={b.to} className="hover:text-gold">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{b.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span>›</span>}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <GoldLabel>{label}</GoldLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-[64px]">
            {title}
          </h1>
        </Reveal>
        {hindi && (
          <Reveal delay={0.18}>
            <p className="mt-4 font-deva text-xl text-gold md:text-2xl">{hindi}</p>
          </Reveal>
        )}
        {subtitle && (
          <Reveal delay={0.25}>
            <p className="mx-auto mt-6 max-w-xl text-white/70">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ─────────── Final CTA ─────────── */

/* ─────────── Final CTA (Our Core Mantras) ─────────── */

const MOTTO_MODALS: Record<string, ModalData> = {
  Organised: {
    icon: UsersRound,
    hindi: "संगठित (संगठित बनो, संगठित करो)",
    title: "Be Organised, Do Organised",
    philosophy: "Building an organized, united cooperative network across all sectors of society.",
    tag: "Our Motto",
    highlights: [
      {
        point: "Collective Power",
        desc: "Uniting individual members into a cohesive, organized economic force.",
      },
      {
        point: "Structured Operations",
        desc: "Operating through transparent, well-managed regional cooperatives.",
      },
      {
        point: "Community Discipline",
        desc: "Living by the 27 Golden Rules for mutual protection and growth.",
      },
      {
        point: "Organizing Others",
        desc: "Helping local merchants, workers, and families to structure their livelihoods.",
      },
    ],
  },
  Educated: {
    icon: GraduationCap,
    hindi: "शिक्षित (शिक्षित बनो, शिक्षित करो)",
    title: "Be Educated, Make Educated",
    philosophy: "Fostering awareness, rational learning, and continuous skill building for all.",
    tag: "Our Motto",
    highlights: [
      {
        point: "Pavitram Gyan",
        desc: "Providing accessible education, skill building, and civic awareness.",
      },
      {
        point: "Rights & Guidance",
        desc: "Educating members on constitutional rights and government schemes.",
      },
      {
        point: "Youth Empowerment",
        desc: "Training the next generation with modern digital and technical skills.",
      },
      {
        point: "Knowledge Sharing",
        desc: "Inspiring every educated member to teach and mentor others.",
      },
    ],
  },
  Striving: {
    icon: Sparkles,
    hindi: "संघर्षशील (संघर्षशील बनो, संघर्षशील बनाओ)",
    title: "Be Striving, Make Striving",
    philosophy: "Relentless effort, resilience, and determination to build a self-reliant India.",
    tag: "Our Motto",
    highlights: [
      {
        point: "Active Engagement",
        desc: "Overcoming challenges through collective action and perseverance.",
      },
      {
        point: "Pivotal Growth",
        desc: "Striving for higher family income, lower costs, and self-reliance.",
      },
      {
        point: "Community Motivation",
        desc: "Inspiring fellow members to work hard and overcome economic barriers.",
      },
      {
        point: "Unbreakable Resolve",
        desc: "Standing strong against corruption, exploitation, and unorganized debt.",
      },
    ],
  },
  Empowered: {
    icon: Zap,
    hindi: "सशक्त (सशक्त बनो, सशक्त करो)",
    title: "Be Empowered, Make Empowered",
    philosophy: "Achieving financial independence, dignity, and self-sufficiency for every home.",
    tag: "Our Motto",
    highlights: [
      {
        point: "Economic Independence",
        desc: "Freeing families from debt traps and unfair intermediary fees.",
      },
      {
        point: "Women & Youth Autonomy",
        desc: "Empowering women and youth through micro-enterprises and jobs.",
      },
      {
        point: "Cooperative Safety Nets",
        desc: "Access to cooperative loans, health insurance, and mutual aid.",
      },
      {
        point: "National Elevation",
        desc: "Empowering every household to contribute directly to a developed India.",
      },
    ],
  },
};

export function FinalCTA({ onOpenModal }: { onOpenModal?: (data: ModalData) => void }) {
  const cards = [
    {
      icon: UsersRound,
      en: "Organised",
      hi: "संगठित",
    },
    {
      icon: GraduationCap,
      en: "Educated",
      hi: "शिक्षित",
    },
    {
      icon: Sparkles,
      en: "Striving",
      hi: "संघर्षशील",
    },
    {
      icon: Zap,
      en: "Empowered",
      hi: "सशक्त",
    },
  ];

  return (
    <section className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            OUR MOTTO
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            Our Core Mantras
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारा मंत्र</p>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal?.(MOTTO_MODALS[c.en])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-gold/50"
            >
              <div>
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gold/40 transition-colors group-hover:bg-gold" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="font-display text-2xl font-bold text-ink leading-snug transition-colors group-hover:text-gold">
                    {c.en}
                  </h3>
                  <p className="mt-1 font-deva text-base font-semibold text-gold leading-relaxed">
                    {c.hi}
                  </p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-mist">
            Join thousands of network partners working together for a self-reliant, prosperous
            India. Your contribution matters.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy hover:scale-[1.03]"
            >
              Join Pavitram India <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Footer ─────────── */

export function Footer() {
  const explore: { label: string; to: string }[] = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Opportunities", to: "/opportunities" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
  ];
  const services = SERVICES_GRID.flat().filter(Boolean);
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
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/70 transition hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-gold">Our Services</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to={SERVICE_SLUGS[s] || "/services"}
                    className="text-sm text-white/70 transition hover:text-gold"
                  >
                    {s}
                  </Link>
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
export function showToast(msg: string) {
  toastListener?.(msg);
}

export function ToastHost() {
  const [msg, setMsg] = useState<string | null>(null);
  const tRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    toastListener = (m: string) => {
      setMsg(m);
      if (tRef.current) clearTimeout(tRef.current);
      tRef.current = setTimeout(() => setMsg(null), 3500);
    };
    return () => {
      toastListener = null;
    };
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
