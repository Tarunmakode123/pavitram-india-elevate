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
  Factory,
  Warehouse,
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
  Scale,
  Unlock,
  UserCheck,
  ClipboardCheck,
  Target,
  HeartHandshake,
  Sprout,
} from "lucide-react";
import LOGO_URL from "@/assets/pavitram-logo.jpg";
import { PremiumModal, type ModalData } from "@/components/premium-modal";
import { FinalCTA } from "@/components/site";

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

/* ─────────── Modal Data Definitions ─────────── */

const VISION_MODALS: Record<string, ModalData> = {
  "Intellectual Citizen": {
    icon: GraduationCap,
    hindi: "प्रबुद्ध नागरिक",
    title: "Intellectual Citizen",
    philosophy: "An aware mind is the foundation of a prosperous nation.",
    tag: "Our Vision",
    highlights: [
      {
        point: "Awareness & Education",
        desc: "Every member gains access to knowledge that empowers informed decision-making",
      },
      {
        point: "Rational Thinking",
        desc: "We promote scientific temperament and critical thinking in daily life",
      },
      {
        point: "Constitutional Rights",
        desc: "Members understand their rights, duties, and responsibilities as Indian citizens",
      },
      {
        point: "Skill Development",
        desc: "Continuous learning opportunities through Pavitram Gyan for all age groups",
      },
    ],
  },
  "Prosperous Family": {
    icon: Home,
    hindi: "समृद्ध परिवार",
    title: "Prosperous Family",
    philosophy: "When a family thrives, the nation flourishes.",
    tag: "Our Vision",
    highlights: [
      {
        point: "Higher Income",
        desc: "Multiple earning opportunities through the cooperative business network",
      },
      {
        point: "Lower Expenses",
        desc: "Access to quality goods and services at fair cooperative prices",
      },
      {
        point: "Financial Security",
        desc: "Investment and insurance solutions through Pavitram Finance",
      },
      {
        point: "Essential Services",
        desc: "Health, education, and daily needs fulfilled within the community",
      },
    ],
  },
  "Self-Reliant Society": {
    icon: Users,
    hindi: "आत्मनिर्भर समाज",
    title: "Self-Reliant Society",
    philosophy: "A society that fulfills its own needs has no dependency.",
    tag: "Our Vision",
    highlights: [
      {
        point: "Community First",
        desc: "Every need of the community is met by members within the community itself",
      },
      {
        point: "No Middlemen",
        desc: "Direct producer-to-consumer connections eliminate unnecessary costs",
      },
      {
        point: "Cooperative Strength",
        desc: "10,000+ members working together create an unstoppable economic force",
      },
      {
        point: "Local Empowerment",
        desc: "Businesses, farmers, and workers all benefit equally from the network",
      },
    ],
  },
  "Developed India": {
    icon: Flag,
    hindi: "विकसित भारत",
    title: "Developed India",
    philosophy: "Individual growth multiplied across millions becomes national progress.",
    tag: "Our Vision",
    highlights: [
      {
        point: "Village to Nation",
        desc: "Growth that starts at the grassroots and scales to the entire country",
      },
      {
        point: "Inclusive Development",
        desc: "Every citizen — urban or rural — has an equal opportunity to prosper",
      },
      {
        point: "Ethical Economy",
        desc: "A transparent, corruption-free business ecosystem that uplifts everyone",
      },
      {
        point: "Sabka Vikas",
        desc: "Contributing to India's vision of becoming a developed nation by 2047",
      },
    ],
  },
};

const MISSION_MODALS: Record<string, ModalData> = {
  "Sabka Saath": {
    icon: Handshake,
    hindi: "सबका साथ",
    title: "Sabka Saath",
    philosophy: "No one grows alone — we rise by lifting each other.",
    tag: "Our Mission",
    highlights: [
      {
        point: "United Community",
        desc: "Members support each other across every sector and every region",
      },
      {
        point: "Cooperative Partnerships",
        desc: "Businesses, consumers, and investors work as one cooperative family",
      },
      {
        point: "Mutual Support Network",
        desc: "In times of need, the community stands together for every member",
      },
      {
        point: "Inclusive by Design",
        desc: "Everyone — regardless of background — has a place and a role in our network",
      },
    ],
  },
  "Sabka Prayaas": {
    icon: Zap,
    hindi: "सबका प्रयास",
    title: "Sabka Prayaas",
    philosophy: "Every effort counts when we work toward a common goal.",
    tag: "Our Mission",
    highlights: [
      {
        point: "Individual Contribution",
        desc: "Each member's skills and efforts strengthen the entire community",
      },
      {
        point: "Collective Action",
        desc: "Small contributions from thousands create massive collective impact",
      },
      {
        point: "Volunteer Spirit",
        desc: "Members actively mentor, guide, and support others in the network",
      },
      {
        point: "Shared Responsibility",
        desc: "Every member takes ownership of the community's growth and success",
      },
    ],
  },
  "Sabka Vikas": {
    icon: TrendingUp,
    hindi: "सबका विकास",
    title: "Sabka Vikas",
    philosophy: "True development reaches every doorstep, not just the privileged few.",
    tag: "Our Mission",
    highlights: [
      {
        point: "Rural Inclusion",
        desc: "5,000+ villages connected to the cooperative growth network",
      },
      {
        point: "Equal Opportunity",
        desc: "Every member gets fair access to business, income, and education",
      },
      {
        point: "Economic Upliftment",
        desc: "Families see measurable increase in income and reduction in expenses",
      },
      {
        point: "Grassroots Growth",
        desc: "Development that flows from the village level upward to the nation",
      },
    ],
  },
  "Sabka Vishwas": {
    icon: Shield,
    hindi: "सबका विश्वास",
    title: "Sabka Vishwas",
    philosophy: "Trust is the currency that powers our entire ecosystem.",
    tag: "Our Mission",
    highlights: [
      {
        point: "Full Transparency",
        desc: "Every transaction and decision is open and visible to all members",
      },
      {
        point: "Ethical Governance",
        desc: "27 Golden Rules guide every interaction within our network",
      },
      {
        point: "Member Protection",
        desc: "Your data, money, and interests are always protected and secure",
      },
      {
        point: "Proven Track Record",
        desc: "10,000+ members trust Pavitram India with their families' futures",
      },
    ],
  },
};

const PHILOSOPHY_MODALS: Record<string, ModalData> = {
  Integrity: {
    icon: ShieldCheck,
    hindi: "अखंडता",
    title: "Integrity",
    philosophy: "We do what is right, even when no one is watching.",
    tag: "Our Philosophy",
    highlights: [
      {
        point: "Honest Dealings",
        desc: "Every transaction, partnership, and communication is fully honest",
      },
      {
        point: "Ethical Business",
        desc: "No shortcuts, no exploitation — only fair and principled conduct",
      },
      {
        point: "Member Accountability",
        desc: "All 27 Golden Rules are built on the foundation of integrity",
      },
      {
        point: "Zero Tolerance",
        desc: "Corrupt or unethical behavior is never accepted within our network",
      },
    ],
  },
  Transparency: {
    icon: Eye,
    hindi: "पारदर्शिता",
    title: "Transparency",
    philosophy: "When everything is visible, trust becomes inevitable.",
    tag: "Our Philosophy",
    highlights: [
      {
        point: "Open Financials",
        desc: "All cooperative returns, investments, and fund usage are fully disclosed",
      },
      {
        point: "Clear Processes",
        desc: "Every step — from registration to returns — is explained and visible",
      },
      {
        point: "No Hidden Charges",
        desc: "Members always know exactly what they pay for and what they receive",
      },
      {
        point: "Public Accountability",
        desc: "Leadership decisions are shared openly with the entire community",
      },
    ],
  },
  Innovation: {
    icon: Lightbulb,
    hindi: "नवाचार",
    title: "Innovation",
    philosophy: "We solve today's problems with tomorrow's thinking.",
    tag: "Our Philosophy",
    highlights: [
      {
        point: "Tech-Driven Solutions",
        desc: "Pavitram Technology powers digital innovation across all 12 service areas",
      },
      {
        point: "Continuous Improvement",
        desc: "We constantly evolve our platform based on member feedback and needs",
      },
      {
        point: "Modern Cooperative Model",
        desc: "Reinventing the traditional cooperative with cutting-edge digital infrastructure",
      },
      {
        point: "Future Ready",
        desc: "Building systems today that will serve millions of Indians tomorrow",
      },
    ],
  },
  Collaboration: {
    icon: Link2,
    hindi: "गठबंधन",
    title: "Collaboration",
    philosophy: "Alone we are strong — together we are unstoppable.",
    tag: "Our Philosophy",
    highlights: [
      {
        point: "Cross-Sector Partnerships",
        desc: "Connecting businesses, individuals, and organizations across all sectors",
      },
      {
        point: "Government Alignment",
        desc: "Working with government schemes to maximize member benefits",
      },
      {
        point: "Community Synergy",
        desc: "Members' capabilities complement each other creating a full ecosystem",
      },
      {
        point: "Network Effect",
        desc: "Every new member makes the entire network more valuable for everyone",
      },
    ],
  },
};

const CORE_VALUES_MODALS: Record<string, ModalData> = {
  Equality: {
    icon: Scale,
    hindi: "समानता",
    title: "Equality",
    philosophy: "Equal opportunities, rights, and treatment for every citizen.",
    tag: "Core Values",
    highlights: [
      {
        point: "Social Equality",
        desc: "Eliminating any discrimination based on caste, class, gender, or belief.",
      },
      {
        point: "Economic Opportunity",
        desc: "Giving all members equal access to cooperative wealth generation.",
      },
      {
        point: "Equal Voice",
        desc: "One member, one vote structure for transparent governance.",
      },
      {
        point: "Human Dignity",
        desc: "Respecting and protecting the dignity of every individual in our network.",
      },
    ],
  },
  Liberty: {
    icon: Unlock,
    hindi: "स्वतंत्रता",
    title: "Liberty",
    philosophy: "Empowering citizens to think, express, and live freely.",
    tag: "Core Values",
    highlights: [
      {
        point: "Financial Freedom",
        desc: "Freeing families from high-interest debt cycles and intermediaries.",
      },
      {
        point: "Choice of Livelihood",
        desc: "Empowering members to pursue and grow in their chosen careers.",
      },
      {
        point: "Independent Thought",
        desc: "Fostering rational learning and intellectual freedom.",
      },
      {
        point: "Local Autonomy",
        desc: "Supporting local merchants and farmers to operate independently.",
      },
    ],
  },
  Fraternity: {
    icon: Users,
    hindi: "बंधुत्व",
    title: "Fraternity",
    philosophy: "Promoting brotherhood and mutual support among all sections of society.",
    tag: "Core Values",
    highlights: [
      {
        point: "Unified Community",
        desc: "Building a nationwide family of 10,000+ cooperative members.",
      },
      {
        point: "Mutual Support",
        desc: "Fostering a community culture where members stand by members in times of need.",
      },
      {
        point: "Shared Progress",
        desc: "Collective action ensuring that local prosperity is distributed evenly.",
      },
      {
        point: "Social Harmony",
        desc: "Celebrating diversity while maintaining absolute unity.",
      },
    ],
  },
  Unity: {
    icon: Link2,
    hindi: "एकता",
    title: "Unity",
    philosophy: "Stronger together — building national unity through community action.",
    tag: "Core Values",
    highlights: [
      {
        point: "National Integration",
        desc: "Aligning regional cooperative networks across 15+ states.",
      },
      {
        point: "Slogan Alignment",
        desc: "Living the mantra of 'Be Organised, Do Organised' collectively.",
      },
      {
        point: "Common Purpose",
        desc: "Working toward the singular goal of a prosperous, developed India.",
      },
      {
        point: "Strong Institution",
        desc: "A unified structure that remains stable and resilient over the long term.",
      },
    ],
  },
};

const OUR_ETHICS_MODALS: Record<string, ModalData> = {
  Rights: {
    icon: Shield,
    hindi: "अधिकार",
    title: "Rights",
    philosophy: "Securing fundamental rights and entitlements for every individual.",
    tag: "Our Ethics",
    highlights: [
      {
        point: "Constitutional Awareness",
        desc: "Educating members about their rights as citizens.",
      },
      {
        point: "Fair Trade Rights",
        desc: "Guaranteeing fair purchase prices for producers and fair pricing for consumers.",
      },
      {
        point: "Voice & Representation",
        desc: "Ensuring every member has a voice in cooperative decisions.",
      },
      {
        point: "Social Security",
        desc: "Building cooperative safety nets for health, education, and security.",
      },
    ],
  },
  Responsibility: {
    icon: UserCheck,
    hindi: "उत्तरदायित्व",
    title: "Responsibility",
    philosophy: "Embracing duty towards our family, community, and nation.",
    tag: "Our Ethics",
    highlights: [
      {
        point: "Individual Contribution",
        desc: "Actively sharing skills, resources, and mentoring others.",
      },
      {
        point: "Community Support",
        desc: "Supporting fellow local merchants and purchasing locally.",
      },
      {
        point: "Civic Responsibility",
        desc: "Maintaining high ethical standards in all public and business dealings.",
      },
      {
        point: "Nation Building",
        desc: "Aligning our daily efforts with the long-term goal of a developed India.",
      },
    ],
  },
  Accountability: {
    icon: ClipboardCheck,
    hindi: "जवाबदेही",
    title: "Accountability",
    philosophy: "Being answerable for our commitments, actions, and transactions.",
    tag: "Our Ethics",
    highlights: [
      {
        point: "Transparent Auditing",
        desc: "Open accounting logs for all business transactions.",
      },
      {
        point: "Clean Governance",
        desc: "Strict rules for management to prevent any personal gain.",
      },
      {
        point: "Quality Assured",
        desc: "Accountable delivery systems ensuring top service standards.",
      },
      {
        point: "Clear Metrics",
        desc: "Regular reports on community returns and wealth distribution.",
      },
    ],
  },
  Outcome: {
    icon: Target,
    hindi: "परिणाम",
    title: "Outcome",
    philosophy: "Focused on real, measurable impact and positive results for people.",
    tag: "Our Ethics",
    highlights: [
      {
        point: "Tangible Development",
        desc: "Measurable increase in member incomes and savings.",
      },
      {
        point: "Skill Acquisition",
        desc: "Clear educational outcomes and employment match rates.",
      },
      {
        point: "Ground-level Progress",
        desc: "Direct benefits reaching the intended final beneficiaries.",
      },
      {
        point: "Long-Term Growth",
        desc: "Reinvesting yields into sustainable community infrastructures.",
      },
    ],
  },
};

const OUR_FOCUS_MODALS: Record<string, ModalData> = {
  Garib: {
    icon: HeartHandshake,
    hindi: "गरीब (कल्याण एवं सामाजिक सुरक्षा)",
    title: "Economically Weaker & Underprivileged",
    philosophy:
      "Uplifting low-income families through direct savings, cooperative safety nets, and self-reliance.",
    tag: "Our Focus",
    highlights: [
      {
        point: "Cost Reduction",
        desc: "Lowering daily household expenses through cooperative buying networks.",
      },
      {
        point: "Cooperative Safety Net",
        desc: "Emergency financial, medical, and social support for vulnerable families.",
      },
      {
        point: "Dignified Livelihoods",
        desc: "Creating accessible earning opportunities through local micro-tasks and services.",
      },
      {
        point: "Equal Access",
        desc: "Ensuring zero discrimination in accessing all 12 Pavitram services.",
      },
    ],
  },
  Yuva: {
    icon: GraduationCap,
    hindi: "युवा (कौशल एवं रोजगार)",
    title: "Youth Empowerment",
    philosophy:
      "Equipping young minds with modern skills, digital tools, and dignified employment opportunities.",
    tag: "Our Focus",
    highlights: [
      {
        point: "Pavitram Rozgar",
        desc: "Matching youth qualifications with verified local and national job opportunities.",
      },
      {
        point: "Skill Development",
        desc: "Practical training in technology, digital commerce, and modern business management.",
      },
      {
        point: "Entrepreneurship Support",
        desc: "Guiding young entrepreneurs to launch their own micro-businesses within the cooperative network.",
      },
      {
        point: "Rational Learning",
        desc: "Fostering leadership, constitutional awareness, and civic responsibility.",
      },
    ],
  },
  Mahila: {
    icon: Sparkles,
    hindi: "महिला (महिला सशक्तिकरण)",
    title: "Women Empowerment",
    philosophy: "Fostering financial independence and leadership for women in every household.",
    tag: "Our Focus",
    highlights: [
      {
        point: "Self-Help Enterprise",
        desc: "Supporting women-led micro-enterprises and home-based production units.",
      },
      {
        point: "Pavitram Rishta & Health",
        desc: "Dedicated healthcare, preventive wellness, and trusted family network support.",
      },
      {
        point: "Financial Autonomy",
        desc: "Empowering women with direct cooperative bank accounts and micro-savings schemes.",
      },
      {
        point: "Equal Governance",
        desc: "Active representation of women in local network councils and decision-making.",
      },
    ],
  },
  Kisan: {
    icon: Sprout,
    hindi: "किसान (कृषि एवं समृद्धि)",
    title: "Farmer Prosperity",
    philosophy:
      "Empowering farmers with direct market links, fair prices, and modern agricultural support.",
    tag: "Our Focus",
    highlights: [
      {
        point: "Direct Produce Sourcing",
        desc: "Connecting farmers directly with Pavitram Mart and Wholesaler networks to eliminate middlemen.",
      },
      {
        point: "Fair Purchase Prices",
        desc: "Guaranteeing transparent, dignified purchase rates for agricultural crops.",
      },
      {
        point: "Agri-Technology",
        desc: "Sharing modern farming techniques, organic inputs, and digital crop planning tools.",
      },
      {
        point: "Rural Prosperity",
        desc: "Building sustainable cooperative storage and delivery infrastructure across rural regions.",
      },
    ],
  },
};

const PRESENCE_MODALS: Record<string, ModalData> = {
  Villages: {
    icon: Home,
    hindi: "गांव",
    title: "Village Presence",
    philosophy: "Bharat lives in its villages — so does Pavitram India.",
    tag: "Our Presence",
    highlights: [
      {
        point: "5,000+ Villages Reached",
        desc: "Active cooperative members in rural communities across multiple states",
      },
      {
        point: "Agricultural Support",
        desc: "Connecting farmers to fair markets through Pavitram Mart directly",
      },
      {
        point: "Rural Employment",
        desc: "Pavitram Rozgar brings dignified work opportunities to village doorsteps",
      },
      {
        point: "Essential Services",
        desc: "Health, education, and daily needs now accessible in rural India",
      },
    ],
  },
  Cities: {
    icon: Building2,
    hindi: "शहर",
    title: "City Presence",
    philosophy: "Urban India powers the engine of our cooperative network.",
    tag: "Our Presence",
    highlights: [
      {
        point: "200+ Cities Active",
        desc: "Business associates and cooperative networks thriving in urban centers",
      },
      {
        point: "B2B & B2C Commerce",
        desc: "Pavitram Mart connecting urban businesses with community consumers",
      },
      {
        point: "Professional Network",
        desc: "Skilled urban professionals driving Pavitram Technology and Finance",
      },
      {
        point: "Service Hubs",
        desc: "City centers serve as operational hubs for surrounding rural areas",
      },
    ],
  },
  States: {
    icon: Map,
    hindi: "प्रदेश",
    title: "State Presence",
    philosophy: "15 states, one vision — a self-reliant India for all.",
    tag: "Our Presence",
    highlights: [
      {
        point: "15+ States Covered",
        desc: "Active operations spanning North, South, East, and West India",
      },
      {
        point: "Regional Leadership",
        desc: "State-level coordinators managing the cooperative network locally",
      },
      {
        point: "Government Tie-ups",
        desc: "Working with state governments on scheme implementation and welfare",
      },
      {
        point: "Expanding Rapidly",
        desc: "New states being added as the community grows month by month",
      },
    ],
  },
  Nation: {
    icon: Flag,
    hindi: "देश",
    title: "National Vision",
    philosophy: "One nation, one cooperative movement, unlimited possibilities.",
    tag: "Our Presence",
    highlights: [
      {
        point: "Pan-India Network",
        desc: "A single unified platform connecting members from Kashmir to Kanyakumari",
      },
      {
        point: "Viksit Bharat 2047",
        desc: "Contributing to India's national goal of becoming a developed nation",
      },
      {
        point: "National Cooperative Movement",
        desc: "Reviving and modernizing India's cooperative tradition for the 21st century",
      },
      {
        point: "10,000+ Strong & Growing",
        desc: "A community that doubles in strength with every passing quarter",
      },
    ],
  },
};

const ASSOCIATION_MODALS: Record<string, ModalData> = {
  "With Government": {
    icon: Landmark,
    hindi: "सरकार के साथ",
    title: "With Government",
    philosophy: "Where government policy meets community action, real change happens.",
    tag: "Association With",
    highlights: [
      {
        point: "Policy Alignment",
        desc: "All Pavitram activities align with national government policy frameworks",
      },
      {
        point: "Scheme Implementation",
        desc: "Helping deliver central government welfare schemes to eligible members",
      },
      {
        point: "Regulatory Compliance",
        desc: "Fully compliant cooperative structure registered under government norms",
      },
      {
        point: "Public Welfare Focus",
        desc: "Bridging the gap between government intent and grassroots reality",
      },
    ],
  },
  "With Govt Departments": {
    icon: Briefcase,
    hindi: "सरकारी विभागों के साथ",
    title: "With Govt Departments",
    philosophy: "Department partnerships turn policy into real impact for real people.",
    tag: "Association With",
    highlights: [
      {
        point: "Direct Department Links",
        desc: "Active relationships with education, health, and agriculture departments",
      },
      {
        point: "Scheme Delivery",
        desc: "Last-mile delivery of government benefits to deserving beneficiaries",
      },
      {
        point: "Digital Integration",
        desc: "Technology solutions connecting department services with members",
      },
      {
        point: "Employment Linkage",
        desc: "Collaborating on skill development and employment generation programs",
      },
    ],
  },
  "With Beneficiaries": {
    icon: Users,
    hindi: "लाभार्थियों के साथ",
    title: "With Beneficiaries",
    philosophy: "The real measure of our success is the life we improve.",
    tag: "Association With",
    highlights: [
      {
        point: "Direct Beneficiary Connect",
        desc: "No intermediaries between Pavitram and the people who need support most",
      },
      {
        point: "Farmers & Workers",
        desc: "Agriculture, labor, and self-employed individuals are priority beneficiaries",
      },
      {
        point: "Women Empowerment",
        desc: "Special focus on enabling financial independence for women members",
      },
      {
        point: "Youth Inclusion",
        desc: "Young Indians gain skills, employment, and entrepreneurship opportunities",
      },
    ],
  },
  "With Organizations": {
    icon: NetworkIcon,
    hindi: "संगठनों के साथ",
    title: "With Organizations",
    philosophy: "Every organization that joins us multiplies our collective strength.",
    tag: "Association With",
    highlights: [
      {
        point: "NGO Partnerships",
        desc: "Collaborating with trusted NGOs for community welfare and outreach",
      },
      {
        point: "Professional Bodies",
        desc: "Tie-ups with trade associations and professional networks across sectors",
      },
      {
        point: "Cooperative Alliances",
        desc: "Partnering with other cooperatives to build a stronger national network",
      },
      {
        point: "Academic Institutions",
        desc: "Working with universities and training institutes for skill development",
      },
    ],
  },
};

const NETWORK_MODALS: Record<string, ModalData> = {
  Manufacturer: {
    icon: Factory,
    hindi: "उत्पादक / निर्माता",
    title: "Manufacturer",
    philosophy: "Empowering local production and raw material processing.",
    tag: "Business Network",
    highlights: [
      {
        point: "Direct Sourcing Links",
        desc: "Manufacturers connect directly to wholesalers and retailers, eliminating unnecessary agent markups.",
      },
      {
        point: "Assured Demand",
        desc: "Access a guaranteed internal buyer base consisting of 10,000+ community members.",
      },
      {
        point: "Quality Standards",
        desc: "All manufacturing partners follow strict compliance rules to deliver high-grade products.",
      },
      {
        point: "Value Creation",
        desc: "Focus on domestic local production to build a self-reliant economy.",
      },
    ],
  },
  Wholesaler: {
    icon: Warehouse,
    hindi: "थोक व्यापारी",
    title: "Wholesaler",
    philosophy: "Bulk distribution and supply chain connectivity.",
    tag: "Business Network",
    highlights: [
      {
        point: "Bulk Logistics Support",
        desc: "Integrated transport and courier logistics through Pavitram Delivery.",
      },
      {
        point: "Transparent Inventory",
        desc: "Shared digital inventory systems for instant demand-matching across regions.",
      },
      {
        point: "Stable Trade Volumes",
        desc: "Assured volume requirements driven by our network-wide consumption networks.",
      },
      {
        point: "Fair Pricing Schemes",
        desc: "Maintained price control to guarantee fair returns for merchants and wholesalers.",
      },
    ],
  },
  Retailer: {
    icon: Store,
    hindi: "खुदरा विक्रेता",
    title: "Retailer",
    philosophy: "Direct consumer storefronts and local market presence.",
    tag: "Business Network",
    highlights: [
      {
        point: "Free Digital Tools",
        desc: "Vite and cloud-powered e-commerce store setups with direct consumer order routing.",
      },
      {
        point: "Dedicated Buyer Flow",
        desc: "Community members are incentivized to buy locally from Pavitram Retailers.",
      },
      {
        point: "Direct Sourcing",
        desc: "Source inventory directly from verified community manufacturers and wholesalers.",
      },
      {
        point: "Merchant Empowerment",
        desc: "Grow sales figures while retaining business autonomy and independence.",
      },
    ],
  },
  "Service Provider": {
    icon: Wrench,
    hindi: "सेवा प्रदाता",
    title: "Service Provider",
    philosophy: "Professional maintenance, digital, and household services.",
    tag: "Business Network",
    highlights: [
      {
        point: "Verified Lead Generation",
        desc: "Receive customer service booking requests directly from community families.",
      },
      {
        point: "Standardized Fair Pricing",
        desc: "Ethical service pricing cards that protect both the provider's livelihood and the user's budget.",
      },
      {
        point: "Professional Skill Building",
        desc: "Free capacity-building workshops and certifications through Pavitram Gyan.",
      },
      {
        point: "Zero Listing Commission",
        desc: "Keep 100% of your earnings; the platform charges zero commissions from service providers.",
      },
    ],
  },
};

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

/* ─────────── Hero & Stats ─────────── */

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

function HeroDiagram() {
  const labels = [
    { text: "Prosperous Family", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { text: "Self-Reliant Society", pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
    { text: "Developed India", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { text: "Intellectual Citizen", pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
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
              Pavitram India
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.8] text-white/65">
              The dream of a prosperous, self-reliant India starts not in policy — but in people.
              Pavitram India brings that dream to life through a cooperative community where every
              farmer, every woman, every youth, and every family grows together — sharing resources,
              reducing costs, and building a better life from within.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <HeroDiagram />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Pillars (Our Vision) ─────────── */

function Pillars({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
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
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => onOpenModal(VISION_MODALS[c.title])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all hover:card-shadow-lg flex flex-col justify-between border border-transparent hover:border-gold/50"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">{c.title}</h3>
                <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
                <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.text}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Mission ─────────── */

function Mission({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
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
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 0 25px rgba(201, 149, 42, 0.25)" }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(MISSION_MODALS[c.title])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] border border-gold/30 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
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
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Philosophy ─────────── */

function Philosophy({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      hi: "अखंडता",
      body: "We conduct ourselves with complete honesty, fairness, and ethical principles in every interaction, decision, and partnership within our cooperative network.",
    },
    {
      icon: Eye,
      title: "Transparency",
      hi: "पारदर्शिता",
      body: "Every process, transaction, and decision in our network is open and visible to all members. We believe transparency builds the trust that holds our community together.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      hi: "नवाचार",
      body: "We continuously embrace new ideas, technologies, and approaches to solve real problems and create better opportunities for our members and society.",
    },
    {
      icon: Link2,
      title: "Collaboration",
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
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारे सिद्धांत</p>
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
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(PHILOSOPHY_MODALS[c.title])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-gold/50"
            >
              <div>
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
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Core Values ─────────── */

function CoreValues({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
  const cards = [
    {
      icon: Scale,
      title: "Equality",
      hi: "समानता",
      body: "We believe in equal rights, equal status, and equal opportunities for every member of our community, breaking all traditional barriers.",
    },
    {
      icon: Unlock,
      title: "Liberty",
      hi: "स्वतंत्रता",
      body: "We empower individuals with financial freedom, independent choices, and the power to build their own prosperous livelihoods.",
    },
    {
      icon: Users,
      title: "Fraternity",
      hi: "बंधुत्व",
      body: "We foster a deep sense of brotherhood, mutual trust, and cooperative solidarity across all states and sectors of our network.",
    },
    {
      icon: Link2,
      title: "Unity",
      hi: "एकता",
      body: "Stronger together. By combining our strengths and organizing collectively, we build an unbreakable path to regional and national growth.",
    },
  ];

  return (
    <section className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>CORE VALUES</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            Core Values
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">मुख्य मूल्य</p>
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
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(CORE_VALUES_MODALS[c.title])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-gold/50"
            >
              <div>
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gold/40 transition-colors group-hover:bg-gold" />
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-gold">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
                  <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Our Ethics ─────────── */

function OurEthics({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
  const cards = [
    {
      icon: Shield,
      title: "Rights",
      hi: "अधिकार",
      body: "We protect and advocate for the rights of all farmers, workers, women, and service providers, ensuring they receive their fair due.",
    },
    {
      icon: UserCheck,
      title: "Responsibility",
      hi: "उत्तरदायित्व",
      body: "We share a collective duty to elevate each other, support local community merchants, and contribute directly to society's upliftment.",
    },
    {
      icon: ClipboardCheck,
      title: "Accountability",
      hi: "जवाबदेही",
      body: "We practice transparent audits, ethical financial reporting, and clean governance rules to remain fully answerable to our members.",
    },
    {
      icon: Target,
      title: "Outcome",
      hi: "परिणाम",
      body: "We focus on real, tangible, and measurable progress — bringing direct savings, income boosts, and educational growth to every home.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>OUR ETHICS</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            Our Ethics
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारी नैतिकता</p>
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
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(OUR_ETHICS_MODALS[c.title])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-gold/50"
            >
              <div>
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gold/40 transition-colors group-hover:bg-gold" />
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-gold">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
                  <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Our Focus ─────────── */

function OurFocus({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
  const cards = [
    {
      icon: HeartHandshake,
      title: "Garib",
      hi: "गरीब",
      body: "Empowering low-income families and workers through cooperative safety nets, financial support, and cost-reduction initiatives.",
    },
    {
      icon: GraduationCap,
      title: "Yuva",
      hi: "युवा",
      body: "Nurturing the next generation with digital skills, entrepreneurship guidance, and dignified employment opportunities.",
    },
    {
      icon: Sparkles,
      title: "Mahila",
      hi: "महिला",
      body: "Fostering self-reliance for women through self-help groups, micro-enterprises, and skill development programs.",
    },
    {
      icon: Sprout,
      title: "Kisan",
      hi: "किसान",
      body: "Supporting agricultural communities with direct market access, fair crop prices, and cooperative supply chains.",
    },
  ];

  return (
    <section className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>OUR FOCUS</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            Our Primary Focus
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">गरीब, युवा, महिला, किसान</p>
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
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(OUR_FOCUS_MODALS[c.title])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-gold/50"
            >
              <div>
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gold/40 transition-colors group-hover:bg-gold" />
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 text-left">
                  <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-gold">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
                  <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Journey Strip & Presence ─────────── */

function IndiaFlagIcon() {
  return (
    <svg viewBox="0 0 900 600" className="h-9 w-9 rounded-sm shadow-md overflow-hidden">
      <rect width="900" height="200" fill="#FF9933" />
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      <rect y="400" width="900" height="200" fill="#138808" />
      <g transform="translate(450, 300)">
        <circle r="90" fill="none" stroke="#000080" strokeWidth="16" />
        <circle r="18" fill="#000080" />
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-90"
            stroke="#000080"
            strokeWidth="7"
            transform={`rotate(${i * 15})`}
          />
        ))}
      </g>
    </svg>
  );
}

function JourneyStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const nodes = [
    { emoji: "🏡", en: "Villages", hi: "गांव" },
    { emoji: "🏙️", en: "Cities", hi: "शहर" },
    { emoji: "🗺️", en: "States", hi: "प्रदेश" },
    { customIcon: <IndiaFlagIcon />, en: "Nation", hi: "देश" },
  ];

  return (
    <div ref={ref} className="relative mt-20 max-w-4xl mx-auto px-4">
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

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {nodes.map((n, i) => (
          <div key={n.en} className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-navy border-2 border-gold ring-4 ring-gold/15 shadow-[0_0_20px_rgba(201, 149, 42, 0.3)] text-3xl overflow-hidden"
            >
              {n.customIcon ? n.customIcon : n.emoji}
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

function Presence({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
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
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>OUR PRESENCE</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-[48px]">
            Our Reach & Impact
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">हमारा विस्तार</p>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            From remote villages to major metropolitan cities, Pavitram India is actively organizing
            individuals and businesses into a cohesive economic community.
          </p>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 0 25px rgba(201, 149, 42, 0.25)" }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(PRESENCE_MODALS[c.label])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] border border-gold/30 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-gold">
                    {c.num.toLocaleString()}
                    {c.suffix}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{c.label}</h3>
                <p className="mt-1 font-deva text-base font-semibold text-gold">{c.hi}</p>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-white/70">{c.body}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                Click to explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </motion.div>

        <JourneyStrip />
      </div>
    </section>
  );
}

/* ─────────── Association With ─────────── */

function AssociationWith({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
  const cards = [
    {
      icon: Landmark,
      title: "With Government",
      hi: "सरकार के साथ",
      body: "Aligning with government policies, schemes, and initiatives to bring their benefits directly to our community members across India.",
    },
    {
      icon: Briefcase,
      title: "With Govt Departments",
      hi: "सरकारी विभागों के साथ",
      body: "Partnering with government departments for effective on-ground implementation of welfare schemes and development programs.",
    },
    {
      icon: Users,
      title: "With Beneficiaries",
      hi: "लाभार्थियों के साथ",
      body: "Directly connecting with and empowering the real beneficiaries — families, farmers, workers, and entrepreneurs — who need support.",
    },
    {
      icon: NetworkIcon,
      title: "With Organizations",
      hi: "संगठनों के साथ",
      body: "Collaborating with NGOs, cooperatives, professional bodies, and community organizations to strengthen our nationwide network.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>STRATEGIC PARTNERSHIPS</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            Our Strategic Partners
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">रणनीतिक सहभागिता</p>
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
              whileHover={{ y: -6, scale: 1.02, borderColor: "#C9952A" }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(ASSOCIATION_MODALS[c.title])}
              className="group cursor-pointer flex flex-col justify-between rounded-[20px] border border-transparent bg-white p-7 card-shadow transition-all duration-300"
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
              <div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                  Click to explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────── Services (Core Services) ─────────── */

function Services() {
  const items = [
    {
      icon: ShoppingBag,
      title: "Pavitram Mart",
      text: "Multi-vendor B2B, B2C e-commerce platform",
      to: "/services/mart",
    },
    {
      icon: Building2,
      title: "Pavitram Properties",
      text: "Complete solution for property needs",
      to: "/services/properties",
    },
    {
      icon: HeartPulse,
      title: "Pavitram Wellness",
      text: "Healthy body, mind, and preventive care",
      to: "/services/wellness",
    },
    {
      icon: BookOpen,
      title: "Pavitram Gyan",
      text: "Awareness, skill building, and education",
      to: "/services/gyan",
    },
    {
      icon: Landmark,
      title: "Pavitram Finance",
      text: "Banking, loans, and cooperative returns",
      to: "/services/finance",
    },
    {
      icon: Plane,
      title: "Pavitram Travels",
      text: "Complete solution for tours and travels",
      to: "/services/travels",
    },
    {
      icon: Heart,
      title: "Pavitram Rishta",
      text: "Trusted matrimonial matchmaking network",
      to: "/services/rishta",
    },
    {
      icon: Briefcase,
      title: "Pavitram Rozgar",
      text: "Dignified employment & job matching",
      to: "/services/rozgar",
    },
    {
      icon: Wrench,
      title: "Pavitram Services",
      text: "Verified household & maintenance fixes",
      to: "/services/services",
    },
    {
      icon: Radio,
      title: "Pavitram Media",
      text: "Electronic and social media, e-paper",
      to: "/services/media",
    },
    {
      icon: Truck,
      title: "Pavitram Delivery",
      text: "Logistics, anything, anywhere, anytime",
      to: "/services/delivery",
    },
    {
      icon: Cpu,
      title: "Pavitram Technology",
      text: "Technology, digital and software services",
      to: "/services/technology",
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
              className="group relative flex flex-col justify-between rounded-[20px] border border-transparent bg-white p-6 card-shadow transition-all hover:border-gold hover:card-shadow-lg text-left"
            >
              <div>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-haze text-mist transition group-hover:bg-[#FDF3E0] group-hover:text-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-gold">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-mist">{s.text}</p>
              </div>
              <Link
                to={s.to}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold transition group-hover:gap-2"
              >
                Explore Portal <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="mt-14 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:scale-[1.03]"
          >
            Explore All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Opportunities, Network, Testimonials, CTA ─────────── */

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
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
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
    </div>
  );
}

function Network({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
  const feats = [
    {
      icon: Factory,
      title: "Manufacturer",
      hi: "उत्पादक / निर्माता",
      text: "Connecting local production units and raw material processors to build strong domestic supply chains.",
    },
    {
      icon: Warehouse,
      title: "Wholesaler",
      hi: "थोक व्यापारी",
      text: "Facilitating bulk inventory distribution and regional trade connectivity within the ecosystem.",
    },
    {
      icon: Store,
      title: "Retailer",
      hi: "खुदरा विक्रेता",
      text: "Powering local storefronts and retail markets to deliver products directly to community consumers.",
    },
    {
      icon: Wrench,
      title: "Service Provider",
      hi: "सेवा प्रदाता",
      text: "Deploying professional skills, digital services, and household maintenance directly to members.",
    },
  ];

  const stats = [
    { icon: UsersRound, value: 10000, suffix: "+", label: "Community Members" },
    { icon: Cpu, value: 12, suffix: "", label: "Service Sectors" },
    { icon: BookOpen, value: 27, suffix: "", label: "Golden Rules" },
    { icon: Globe, value: 15, suffix: "+", label: "States Covered" },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>Business Network</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[52px]">
            The Pavitram Business Network
          </h2>
          <p className="mt-4 font-display text-xl italic text-gold">
            Cooperative. Transparent. Nationwide.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-mist">
            Pavitram India is a professionally managed cooperative business network and a
            self-reliant community where the needs of members are fulfilled by the members
            themselves.
          </p>
          <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {feats.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => onOpenModal(NETWORK_MODALS[f.title])}
              className="group cursor-pointer flex flex-col justify-between rounded-[20px] border border-transparent bg-white p-7 card-shadow transition-all duration-300 hover:border-gold"
            >
              <div className="text-center flex flex-col items-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-6 font-display text-xl font-bold text-ink">{f.title}</h4>
                <p className="mt-1 font-deva text-base font-semibold text-gold">{f.hi}</p>
                <p className="mt-3 text-sm leading-[1.7] text-mist">{f.text}</p>
              </div>
              <div className="mt-5 text-center">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                  Click to explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 flex flex-col items-center gap-10">
          <Reveal delay={0.2}>
            <NetworkRings />
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/about/network"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
            >
              Learn About Our Network <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Integrated Stats Bar */}
        <div className="mt-24 border-t border-haze pt-16">
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:divide-x md:divide-haze md:gap-y-0 text-center">
            {stats.map((it, i) => (
              <Reveal key={i} delay={i * 0.08} className="flex flex-col items-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FDF3E0] text-gold">
                  <it.icon className="h-5.5 w-5.5" />
                </div>
                <div className="mt-4 font-display text-3.5xl font-bold text-ink md:text-[38px]">
                  <CountUp to={it.value} suffix={it.suffix} />
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-mist">
                  {it.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
              className="group relative flex flex-col justify-between rounded-[20px] border-l-4 border-transparent bg-haze p-8 transition hover:border-gold hover:card-shadow-lg text-left"
            >
              <div>
                <Quote className="h-10 w-10 text-gold/70" />
                <p className="mt-4 text-[16px] leading-[1.8] text-ink/85">{t.quote}</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy font-display text-lg font-bold text-white">
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

/* ─────────── Main Page ─────────── */

function Index() {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  return (
    <>
      {/* 1) Overview */}
      <Hero />
      {/* 2) Our Vision */}
      <Pillars onOpenModal={(data) => setModalData(data)} />
      {/* 3) Our Mission */}
      <Mission onOpenModal={(data) => setModalData(data)} />
      {/* 4) Our Philosophy */}
      <Philosophy onOpenModal={(data) => setModalData(data)} />
      {/* 5) Core Values */}
      <CoreValues onOpenModal={(data) => setModalData(data)} />
      {/* 6) Our Ethics */}
      <OurEthics onOpenModal={(data) => setModalData(data)} />
      {/* 7) Our Focus */}
      <OurFocus onOpenModal={(data) => setModalData(data)} />
      {/* 8) Our Mantras */}
      <FinalCTA onOpenModal={(data) => setModalData(data)} />
      {/* 9) Opportunity */}
      <Opportunities />
      {/* 10) Partner */}
      <AssociationWith onOpenModal={(data) => setModalData(data)} />
      {/* 11) Business Network */}
      <Network onOpenModal={(data) => setModalData(data)} />
      {/* 12) Our Reach */}
      <Presence onOpenModal={(data) => setModalData(data)} />
      {/* 13) Our Services */}
      <Services />
      {/* 14) Members Say */}
      <Testimonials />
      {/* Global Premium Modal */}
      <PremiumModal data={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
