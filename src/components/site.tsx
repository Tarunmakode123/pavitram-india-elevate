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
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/components/translations";

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
  { label: "Overview", to: "/about" },
  { label: "Our Vision", to: "/about/vision" },
  { label: "Our Mission", to: "/about/mission" },
  { label: "Our Philosophy", to: "/about/philosophy" },
  { label: "Core Values", to: "/about/values" },
  { label: "Our Ethics", to: "/about/ethics" },
  { label: "Our Focus", to: "/about/focus" },
  { label: "Business Network", to: "/about/network" },
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
  const { language, setLanguage, t } = useLanguage();
  const isHindi = language === "hi";
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const aboutItems = [
    { label: t(translations.nav.aboutItems.overview), to: "/about" },
    { label: t(translations.nav.aboutItems.vision), to: "/about/vision" },
    { label: t(translations.nav.aboutItems.mission), to: "/about/mission" },
    { label: t(translations.nav.aboutItems.philosophy), to: "/about/philosophy" },
    { label: t(translations.nav.aboutItems.values), to: "/about/values" },
    { label: t(translations.nav.aboutItems.ethics), to: "/about/ethics" },
    { label: t(translations.nav.aboutItems.focus), to: "/about/focus" },
    { label: t(translations.nav.aboutItems.network), to: "/about/network" },
  ];

  const oppItems = [
    { label: t(translations.nav.oppItems.consumer), to: "/opportunities/consumer" },
    { label: t(translations.nav.oppItems.merchant), to: "/opportunities/merchant" },
    { label: t(translations.nav.oppItems.investor), to: "/opportunities/investor" },
    { label: t(translations.nav.oppItems.career), to: "/opportunities/career" },
  ];

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

  const toggleLanguage = () => {
    setLanguage(isHindi ? "en" : "hi");
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
            {t(translations.nav.home)}
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
              {t(translations.nav.aboutUs)} <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </Link>
            {dropdownPanel(
              "about",
              <div className="min-w-[200px]">
                {aboutItems.map((i) => (
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
              {t(translations.nav.services)} <ChevronDown className="h-3.5 w-3.5 opacity-70" />
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
              {t(translations.nav.opportunities)} <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </Link>
            {dropdownPanel(
              "opp",
              <div className="min-w-[200px]">
                {oppItems.map((i) => (
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
            {t(translations.nav.faq)}
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-medium transition-colors ${isActive("/contact") ? "text-gold" : "text-white/85 hover:text-white"}`}
          >
            {t(translations.nav.contact)}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLanguage}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm font-bold text-white/90 transition hover:border-gold hover:text-gold font-deva cursor-pointer"
            title={t(translations.nav.translateTitle)}
          >
            {t(translations.nav.translateBtn)}
          </button>
          <Link
            to="/join"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-gold hover:shadow-[0_8px_24px_-6px_rgba(201,149,42,0.6)]"
          >
            {t(translations.nav.joinCommunity)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-sm font-bold text-white/90 transition hover:border-gold hover:text-gold font-deva cursor-pointer"
            title={t(translations.nav.translateTitle)}
          >
            {t(translations.nav.translateBtn)}
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
              {t(translations.nav.home)}
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-white/85">
                {t(translations.nav.aboutUs)} <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="pl-4">
                {aboutItems.map((i) => (
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
              {t(translations.nav.services)}
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between py-3 text-white/85">
                {t(translations.nav.opportunities)} <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="pl-4">
                {oppItems.map((i) => (
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
              {t(translations.nav.faq)}
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-3 text-white/85">
              {t(translations.nav.contact)}
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                toggleLanguage();
              }}
              className="py-3 text-left font-bold text-gold cursor-pointer"
            >
              {t({ en: "Translate to English (EN)", hi: "हिंदी में अनुवाद करें (हि)" })}
            </button>
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-white px-5 py-3 text-center font-bold text-navy"
            >
              {t(translations.nav.joinCommunity)}
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
    philosophyHi: "संगठित जनशक्ति ही आत्मनिर्भरता और राष्ट्र निर्माण का सबसे बड़ा आधार है।",
    tag: "Our Motto",
    pageUrl: "/about/motto",
    pageLabel: "Explore Motto Page",
    pageLabelHi: "ध्येय पेज देखें",
    highlights: [
      {
        point: "Collective Power",
        desc: "Uniting individual members into a cohesive, organized economic force.",
        pointHi: "सामूहिक शक्ति",
        descHi: "व्यक्तिगत सदस्यों को एक ठोस, संगठित और आर्थिक रूप से सशक्त इकाई में जोड़ना।"
      },
      {
        point: "Structured Operations",
        desc: "Operating through transparent, well-managed regional cooperatives.",
        pointHi: "व्यवस्थित संचालन",
        descHi: "पारदर्शी, अनुशासित और सुव्यवस्थित क्षेत्रीय सहकारी समितियों के माध्यम से काम करना।"
      },
      {
        point: "Community Discipline",
        desc: "Living by the 27 Golden Rules for mutual protection and growth.",
        pointHi: "सामुदायिक अनुशासन",
        descHi: "आपसी सुरक्षा और विकास के लिए पवित्रम के 27 स्वर्ण नियमों का अनुशासन से पालन करना।"
      },
      {
        point: "Organizing Others",
        desc: "Helping local merchants, workers, and families to structure their livelihoods.",
        pointHi: "दूसरों को संगठित करना",
        descHi: "स्थानीय व्यापारियों, श्रमिकों और परिवारों को उनके व्यवसाय को व्यवस्थित करने में सहयोग देना।"
      },
    ],
  },
  Educated: {
    icon: GraduationCap,
    hindi: "शिक्षित (शिक्षित बनो, शिक्षित करो)",
    title: "Be Educated, Make Educated",
    philosophy: "Fostering awareness, rational learning, and continuous skill building for all.",
    philosophyHi: "ज्ञान और कौशल का प्रसार ही समाज को जागरूक, विचारशील और आर्थिक रूप से स्वतंत्र बनाता है।",
    tag: "Our Motto",
    pageUrl: "/about/motto",
    pageLabel: "Explore Motto Page",
    pageLabelHi: "ध्येय पेज देखें",
    highlights: [
      {
        point: "Pavitram Gyan",
        desc: "Providing accessible education, skill building, and civic awareness.",
        pointHi: "पवित्रम ज्ञान",
        descHi: "सदस्यों के लिए व्यावहारिक शिक्षा, डिजिटल कौशल और नागरिक जागरूकता सुनिश्चित करना।"
      },
      {
        point: "Rights & Guidance",
        desc: "Educating members on constitutional rights and government schemes.",
        pointHi: "अधिकार एवं मार्गदर्शन",
        descHi: "सदस्यों को उनके संवैधानिक अधिकारों और सरकारी योजनाओं के लाभ के प्रति जागरूक करना।"
      },
      {
        point: "Youth Empowerment",
        desc: "Training the next generation with modern digital and technical skills.",
        pointHi: "युवा सशक्तिकरण",
        descHi: "आने वाली पीढ़ी को आधुनिक तकनीकों, डिजिटल साक्षरता और सॉफ्टवेयर कौशल में निपुण बनाना।"
      },
      {
        point: "Knowledge Sharing",
        desc: "Inspiring every educated member to teach and mentor others.",
        pointHi: "ज्ञान का दान",
        descHi: "हर शिक्षित सदस्य को अपने आसपास के लोगों को शिक्षित और प्रेरित करने के लिए प्रोत्साहित करना।"
      },
    ],
  },
  Striving: {
    icon: Sparkles,
    hindi: "संघर्षशील (संघर्षशील बनो, संघर्षशील बनाओ)",
    title: "Be Striving, Make Striving",
    philosophy: "Relentless effort, resilience, and determination to build a self-reliant India.",
    philosophyHi: "चुनौतियों का सामना करने का अटूट हौसला ही राष्ट्र को आत्मनिर्भर और विकसित बनाता है।",
    tag: "Our Motto",
    pageUrl: "/about/motto",
    pageLabel: "Explore Motto Page",
    pageLabelHi: "ध्येय पेज देखें",
    highlights: [
      {
        point: "Active Engagement",
        desc: "Overcoming challenges through collective action and perseverance.",
        pointHi: "सक्रिय सहभागिता",
        descHi: "सामूहिक संकल्प और निरंतर प्रयासों के माध्यम से सभी बाधाओं को पार करना।"
      },
      {
        point: "Pivotal Growth",
        desc: "Striving for higher family income, lower costs, and self-reliance.",
        pointHi: "सकारात्मक उन्नति",
        descHi: "पारिवारिक आय बढ़ाने, खर्चों को घटाने और पूर्ण आत्मनिर्भरता के लिए सतत प्रयास करना।"
      },
      {
        point: "Community Motivation",
        desc: "Inspiring fellow members to work hard and overcome economic barriers.",
        pointHi: "सामुदायिक प्रेरणा",
        descHi: "अन्य सदस्यों को कठिन परिश्रम करने और आर्थिक चुनौतियों से उबरने के लिए प्रेरित करना।"
      },
      {
        point: "Unbreakable Resolve",
        desc: "Standing strong against corruption, exploitation, and unorganized debt.",
        pointHi: "अटूट संकल्प",
        descHi: "भ्रष्टाचार, शोषण और असंगठित कर्ज के चक्र के खिलाफ मजबूती से खड़े रहना।"
      },
    ],
  },
  Empowered: {
    icon: Zap,
    hindi: "सशक्त (सशक्त बनो, सशक्त करो)",
    title: "Be Empowered, Make Empowered",
    philosophy: "Achieving financial independence, dignity, and self-sufficiency for every home.",
    philosophyHi: "जब देश का हर परिवार आर्थिक रूप से सशक्त और स्वावलंबी होगा, तभी विकसित भारत 2047 का संकल्प पूरा होगा।",
    tag: "Our Motto",
    pageUrl: "/about/motto",
    pageLabel: "Explore Motto Page",
    pageLabelHi: "ध्येय पेज देखें",
    highlights: [
      {
        point: "Economic Independence",
        desc: "Freeing families from debt traps and unfair intermediary fees.",
        pointHi: "आर्थिक स्वतंत्रता",
        descHi: "परिवारों को भारी ब्याज वाले कर्जों के जाल और बिचौलियों के चंगुल से मुक्त कराना।"
      },
      {
        point: "Women & Youth Autonomy",
        desc: "Empowering women and youth through micro-enterprises and jobs.",
        pointHi: "महिला एवं युवा स्वायत्तता",
        descHi: "महिलाओं और युवाओं को सूक्ष्म उद्योगों तथा आजीविका के अवसरों से जोड़कर आत्मनिर्भर बनाना।"
      },
      {
        point: "Cooperative Safety Nets",
        desc: "Access to cooperative loans, health insurance, and mutual aid.",
        pointHi: "सहकारी सुरक्षा कवच",
        descHi: "सदस्यों को आपातकालीन ऋण, चिकित्सा सहायता और सहकारी वित्तीय लाभ प्रदान करना।"
      },
      {
        point: "National Elevation",
        desc: "Empowering every household to contribute directly to a developed India.",
        pointHi: "राष्ट्र का गौरव",
        descHi: "प्रत्येक भारतीय परिवार को सक्षम बनाकर उन्हें देश की जीडीपी और विकास में भागीदार बनाना।"
      },
    ],
  },
};

export function FinalCTA({ onOpenModal }: { onOpenModal?: (data: ModalData) => void }) {
  const { t, language } = useLanguage();
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
            {t({ en: "OUR MOTTO", hi: "हमारा ध्येय" })}
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            {t({ en: "Our Core Mantras", hi: "हमारे मूल मंत्र" })}
          </h2>
          {language === "en" && <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />}
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
                    {language === "en" ? c.en : c.hi}
                  </h3>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-mist">
            {t({
              en: "Join thousands of network partners working together for a self-reliant, prosperous India. Your contribution matters.",
              hi: "एक आत्मनिर्भर, समृद्ध भारत के लिए मिलकर काम करने वाले हजारों नेटवर्क भागीदारों में शामिल हों। आपका योगदान महत्वपूर्ण है।"
            })}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy hover:scale-[1.03]"
            >
              {t({ en: "Join Pavitram India", hi: "पवित्रम इंडिया से जुड़ें" })} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold"
            >
              {t({ en: "Contact Us", hi: "हमसे संपर्क करें" })} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Footer ─────────── */

export function Footer() {
  const { t } = useLanguage();
  const explore = [
    { label: t(translations.nav.home), to: "/" },
    { label: t(translations.nav.aboutUs), to: "/about" },
    { label: t(translations.nav.services), to: "/services" },
    { label: t(translations.nav.opportunities), to: "/opportunities" },
    { label: t(translations.nav.faq), to: "/faq" },
    { label: t(translations.nav.contact), to: "/contact" },
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
              {t(translations.footer.tagline)}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-[1.8] text-white/60">
              {t(translations.footer.taglineEn)}
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
            <h4 className="font-display text-lg font-bold text-gold">{t(translations.footer.explore)}</h4>
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
            <h4 className="font-display text-lg font-bold text-gold">{t(translations.footer.services)}</h4>
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
          <span>© 2026 Pavitram India. {t(translations.footer.copyright)}</span>
          <span className="text-gold font-semibold">
            {t({
              en: "Sabka Saath · Sabka Vikas · Sabka Vishwas · Sabka Prayaas",
              hi: "सबका साथ · सबका विकास · सबका विश्वास · सबका प्रयास"
            })}
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
