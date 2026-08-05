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
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/components/translations";

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
    philosophyHi: "जागरूक और शिक्षित नागरिक ही सशक्त और विकसित राष्ट्र की सबसे मजबूत नींव है।",
    tag: "Our Vision",
    pageUrl: "/about/vision",
    pageLabel: "Explore Vision Page",
    pageLabelHi: "दृष्टिकोण पेज देखें",
    highlights: [
      {
        point: "Awareness & Education",
        desc: "Every member gains access to knowledge that empowers informed decision-making",
        pointHi: "जागरूकता और शिक्षा",
        descHi: "संवैधानिक अधिकारों, कर्तव्यों और सरकारी नीतियों के प्रति नागरिकों को जागरूक करना।"
      },
      {
        point: "Rational Thinking",
        desc: "We promote scientific temperament and critical thinking in daily life",
        pointHi: "बौद्धिक विकास",
        descHi: "नागरिकों में वैज्ञानिक दृष्टिकोण, तार्किक सोच और कर्तव्य-भावना को बढ़ावा देना।"
      },
      {
        point: "Constitutional Rights",
        desc: "Members understand their rights, duties, and responsibilities as Indian citizens",
        pointHi: "कौशल संवर्धन",
        descHi: "युवाओं को आधुनिक कौशल और व्यावसायिक प्रशिक्षण प्रदान करना ताकि वे आत्मनिर्भर बन सकें।"
      },
      {
        point: "Skill Development",
        desc: "Continuous learning opportunities through Pavitram Gyan for all age groups",
        pointHi: "सक्रिय भागीदारी",
        descHi: "राष्ट्र निर्माण और विकास कार्यों में प्रत्येक नागरिक की व्यक्तिगत भागीदारी सुनिश्चित करना।"
      },
    ],
  },
  "Prosperous Family": {
    icon: Home,
    hindi: "समृद्ध परिवार",
    title: "Prosperous Family",
    philosophy: "When a family thrives, the nation flourishes.",
    philosophyHi: "जब देश का हर परिवार आर्थिक रूप से समृद्ध होगा, तभी भारत पूर्णतः विकसित राष्ट्र बनेगा।",
    tag: "Our Vision",
    pageUrl: "/about/vision",
    pageLabel: "Explore Vision Page",
    pageLabelHi: "दृष्टिकोण पेज देखें",
    highlights: [
      {
        point: "Higher Income",
        desc: "Multiple earning opportunities through the cooperative business network",
        pointHi: "लागत में कमी",
        descHi: "सहकारी व्यवस्था के जरिए दैनिक आवश्यकताओं और जीवन स्तर के खर्चों को कम करना।"
      },
      {
        point: "Lower Expenses",
        desc: "Access to quality goods and services at fair cooperative prices",
        pointHi: "आय में वृद्धि",
        descHi: "कृषि, लघु उद्योगों और महिला गृह-व्यवसायों को प्रत्यक्ष बाजार देकर पारिवारिक आय बढ़ाना।"
      },
      {
        point: "Financial Security",
        desc: "Investment and insurance solutions through Pavitram Finance",
        pointHi: "वित्तीय सुरक्षा",
        descHi: "बचत योजनाओं और आसान वित्तीय सहयोग से परिवारों को ऋण-मुक्त और सुरक्षित बनाना।"
      },
      {
        point: "Essential Services",
        desc: "Health, education, and daily needs fulfilled within the community",
        pointHi: "मूलभूत सुविधाएं",
        descHi: "गुणवत्तापूर्ण स्वास्थ्य, शिक्षा and जीवन स्तर को हर परिवार तक सुलभ बनाना।"
      },
    ],
  },
  "Self-Reliant Society": {
    icon: Users,
    hindi: "आत्मनिर्भर समाज",
    title: "Self-Reliant Society",
    philosophy: "A society that fulfills its own needs has no dependency.",
    philosophyHi: "एक आत्मनिर्भर समाज ही बाहरी निर्भरता को समाप्त कर राष्ट्र को स्वावलंबी बनाता है।",
    tag: "Our Vision",
    pageUrl: "/about/vision",
    pageLabel: "Explore Vision Page",
    pageLabelHi: "दृष्टिकोण पेज देखें",
    highlights: [
      {
        point: "Community First",
        desc: "Every need of the community is met by members within the community itself",
        pointHi: "संसाधनाें का साझाकरण",
        descHi: "सामुदायिक संसाधनों, उपकरणों और ज्ञान को आपस में साझा कर आत्मनिर्भरता बढ़ाना।"
      },
      {
        point: "No Middlemen",
        desc: "Direct producer-to-consumer connections eliminate unnecessary costs",
        pointHi: "बिचौलियों की समाप्ति",
        descHi: "उत्पादक और उपभोक्ता को सीधे जोड़कर स्थानीय आर्थिक तंत्र को मजबूत बनाना।"
      },
      {
        point: "Cooperative Strength",
        desc: "10,000+ members working together create an unstoppable economic force",
        pointHi: "सहकारिता की शक्ति",
        descHi: "परिवारों और स्थानीय व्यापारियों को संगठित कर एक मजबूत स्थानीय बाजार बनाना।"
      },
      {
        point: "Local Empowerment",
        desc: "Businesses, farmers, and workers all benefit equally from the network",
        pointHi: "स्थानीय रोजगार",
        descHi: "स्थानीय स्तर पर आजीविका के साधन विकसित कर युवाओं को रोजगार के अवसर प्रदान करना।"
      },
    ],
  },
  "Developed India": {
    icon: Flag,
    hindi: "विकसित भारत",
    title: "Developed India",
    philosophy: "Individual growth multiplied across millions becomes national progress.",
    philosophyHi: "नागरिक, परिवार और समाज की आत्मनिर्भरता से ही विकसित भारत 2047 का संकल्प सिद्ध होगा।",
    tag: "Our Vision",
    pageUrl: "/about/vision",
    pageLabel: "Explore Vision Page",
    pageLabelHi: "दृष्टिकोण पेज देखें",
    highlights: [
      {
        point: "Village to Nation",
        desc: "Growth that starts at the grassroots and scales to the entire country",
        pointHi: "जमीनी स्तर से विकास",
        descHi: "विकास की शुरुआत ग्रामीण और जमीनी स्तर से कर संपूर्ण राष्ट्र को समृद्ध बनाना।"
      },
      {
        point: "Inclusive Development",
        desc: "Every citizen — urban or rural — has an equal opportunity to prosper",
        pointHi: "समावेशी प्रगति",
        descHi: "गरीब, युवा, महिला और किसान — सभी को देश की प्रगति में समान अवसर और सम्मान दिलाना।"
      },
      {
        point: "Ethical Economy",
        desc: "A transparent, corruption-free business ecosystem that uplifts everyone",
        pointHi: "पारदर्शी व्यवस्था",
        descHi: "नैतिक और पारदर्शी व्यावसायिक नेटवर्क बनाकर भ्रष्टाचार मुक्त समाज का निर्माण करना।"
      },
      {
        point: "Sabka Vikas",
        desc: "Contributing to India's vision of becoming a developed nation by 2047",
        pointHi: "राष्ट्र निर्माण 2047",
        descHi: "भारत सरकार के 'विकसित भारत @ 2047' के महत्वाकांक्षी लक्ष्य में अपना सक्रिय योगदान देना।"
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
    philosophyHi: "जब देश का हर नागरिक और समाज मिलकर एक साथ काम करेंगे, तभी विकसित भारत 2047 का लक्ष्य प्राप्त होगा।",
    tag: "Our Mission",
    pageUrl: "/about/mission",
    pageLabel: "Explore Mission Page",
    pageLabelHi: "मिशन पेज देखें",
    highlights: [
      {
        point: "United Community",
        desc: "Members support each other across every sector and every region",
        pointHi: "एकजुट समुदाय",
        descHi: "देश के विभिन्न क्षेत्रों के लोगों को सहकारिता के माध्यम से एक सूत्र में पिरोना।"
      },
      {
        point: "Cooperative Partnerships",
        desc: "Businesses, consumers, and investors work as one cooperative family",
        pointHi: "सहकारी भागीदारी",
        descHi: "व्यापारियों, किसानों और उपभोक्ताओं को आपस में जोड़कर आत्मनिर्भर तंत्र विकसित करना।"
      },
      {
        point: "Mutual Support Network",
        desc: "In times of need, the community stands together for every member",
        pointHi: "परस्पर सहयोग",
        descHi: "समुदाय के हर सदस्य की प्रगति और सुख-दुख में सामूहिक रूप से खड़े रहना।"
      },
      {
        point: "Inclusive by Design",
        desc: "Everyone — regardless of background — has a place and a role in our network",
        pointHi: "समान अवसर",
        descHi: "बिना किसी भेदभाव के समाज के हर वर्ग को विकास की मुख्यधारा से जोड़ना।"
      },
    ],
  },
  "Sabka Prayaas": {
    icon: Zap,
    hindi: "सबका प्रयास",
    title: "Sabka Prayaas",
    philosophy: "Every effort counts when we work toward a common goal.",
    philosophyHi: "देश के 140 करोड़ नागरिकों का सामूहिक प्रयास ही भारत को एक समृद्ध और विकसित राष्ट्र बनाएगा।",
    tag: "Our Mission",
    pageUrl: "/about/mission",
    pageLabel: "Explore Mission Page",
    pageLabelHi: "मिशन पेज देखें",
    highlights: [
      {
        point: "Individual Contribution",
        desc: "Each member's skills and efforts strengthen the entire community",
        pointHi: "व्यक्तिगत योगदान",
        descHi: "प्रत्येक नागरिक को अपने कौशल और क्षमताओं से राष्ट्र निर्माण में योगदान देने के लिए प्रेरित करना।"
      },
      {
        point: "Collective Action",
        desc: "Small contributions from thousands create massive collective impact",
        pointHi: "सामूहिक श्रम",
        descHi: "हजारों लोगों के छोटे-छोटे प्रयासों को जोड़कर समाज में बड़ा बदलाव लाना।"
      },
      {
        point: "Volunteer Spirit",
        desc: "Members actively mentor, guide, and support others in the network",
        pointHi: "मार्गदर्शन और मेंटरशिप",
        descHi: "अनुभवी सदस्यों द्वारा युवाओं को कौशल विकास और रोजगार के लिए मार्गदर्शन देना।"
      },
      {
        point: "Shared Responsibility",
        desc: "Every member takes ownership of the community's growth and success",
        pointHi: "दायित्व की भावना",
        descHi: "हर सदस्य को समुदाय और राष्ट्र के विकास के प्रति जिम्मेदार बनाना।"
      },
    ],
  },
  "Sabka Vikas": {
    icon: TrendingUp,
    hindi: "सबका विकास",
    title: "Sabka Vikas",
    philosophy: "True development reaches every doorstep, not just the privileged few.",
    philosophyHi: "सच्चा विकास वही है जो अंतिम छोर पर खड़े व्यक्ति और हर गांव तक समान रूप से पहुंचे।",
    tag: "Our Mission",
    pageUrl: "/about/mission",
    pageLabel: "Explore Mission Page",
    pageLabelHi: "मिशन पेज देखें",
    highlights: [
      {
        point: "Rural Inclusion",
        desc: "5,000+ villages connected to the cooperative growth network",
        pointHi: "ग्रामीण विकास",
        descHi: "देश के गांवों को डिजिटल और आर्थिक रूप से जोड़कर समृद्ध बनाना।"
      },
      {
        point: "Equal Opportunity",
        desc: "Every member gets fair access to business, income, and education",
        pointHi: "समान आजीविका",
        descHi: "हर सदस्य को व्यापार, आय और आधुनिक शिक्षा के समान अवसर सुनिश्चित करना।"
      },
      {
        point: "Economic Upliftment",
        desc: "Families see measurable increase in income and reduction in expenses",
        pointHi: "आर्थिक उत्थान",
        descHi: "प्रत्येक परिवार के खर्चों में कमी और उनकी मासिक आय में निरंतर वृद्धि करना।"
      },
      {
        point: "Grassroots Growth",
        desc: "Development that flows from the village level upward to the nation",
        pointHi: "जमीनी प्रगति",
        descHi: "ग्रामीण स्तर पर छोटे उद्योगों को बढ़ावा देकर देश की जीडीपी में योगदान देना।"
      },
    ],
  },
  "Sabka Vishwas": {
    icon: Shield,
    hindi: "सबका विश्वास",
    title: "Sabka Vishwas",
    philosophy: "Trust is the currency that powers our entire ecosystem.",
    philosophyHi: "पारदर्शिता और सत्यनिष्ठा ही वह मजबूत विश्वास है जो पूरे आत्मनिर्भर तंत्र की ताकत है।",
    tag: "Our Mission",
    pageUrl: "/about/mission",
    pageLabel: "Explore Mission Page",
    pageLabelHi: "मिशन पेज देखें",
    highlights: [
      {
        point: "Full Transparency",
        desc: "Every transaction and decision is open and visible to all members",
        pointHi: "पूर्ण पारदर्शिता",
        descHi: "लेन-देन और निर्णयों को पूरी तरह से पारदर्शी और स्पष्ट रखना।"
      },
      {
        point: "Ethical Governance",
        desc: "27 Golden Rules guide every interaction within our network",
        pointHi: "नैतिक शासन",
        descHi: "पवित्रम के 27 स्वर्ण नियमों के आधार पर नैतिक और मूल्य-आधारित समाज का संचालन करना।"
      },
      {
        point: "Member Protection",
        desc: "Your data, money, and interests are always protected and secure",
        pointHi: "सदस्य सुरक्षा",
        descHi: "सभी सदस्यों के डेटा, हितों और धन की पूर्ण सुरक्षा सुनिश्चित करना।"
      },
      {
        point: "Proven Track Record",
        desc: "10,000+ members trust Pavitram India with their families' futures",
        pointHi: "विश्वसनीय इतिहास",
        descHi: "हजारों सदस्यों का पवित्रम इंडिया पर अटूट विश्वास और उनके सुखद भविष्य की गारंटी।"
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
    philosophyHi: "सत्यनिष्ठा और नैतिकता ही आत्मनिर्भर राष्ट्र निर्माण का आधार स्तंभ हैं।",
    tag: "Our Philosophy",
    pageUrl: "/about/philosophy",
    pageLabel: "Explore Philosophy Page",
    pageLabelHi: "दर्शनशास्त्र पेज देखें",
    highlights: [
      {
        point: "Honest Dealings",
        desc: "Every transaction, partnership, and communication is fully honest",
        pointHi: "ईमानदार व्यवहार",
        descHi: "सहकारी नेटवर्क के भीतर हर बातचीत, लेनदेन और साझेदारी में पूर्ण ईमानदारी बरतना।"
      },
      {
        point: "Ethical Business",
        desc: "No shortcuts, no exploitation — only fair and principled conduct",
        pointHi: "नैतिक व्यापार",
        descHi: "बिना किसी शोषण के, केवल न्यायसंगत और नैतिक व्यावसायिक नीतियों का पालन करना।"
      },
      {
        point: "Member Accountability",
        desc: "All 27 Golden Rules are built on the foundation of integrity",
        pointHi: "व्यक्तिगत जवाबदेही",
        descHi: "पवित्रम के सभी 27 स्वर्ण नियमों का पूर्ण सत्यनिष्ठा के साथ पालन सुनिश्चित करना।"
      },
      {
        point: "Zero Tolerance",
        desc: "Corrupt or unethical behavior is never accepted within our network",
        pointHi: "भ्रष्टाचार मुक्त आचरण",
        descHi: "नेटवर्क के भीतर किसी भी प्रकार के अनैतिक या भ्रष्ट आचरण के लिए शून्य सहनशीलता (Zero Tolerance) रखना।"
      },
    ],
  },
  Transparency: {
    icon: Eye,
    hindi: "पारदर्शिता",
    title: "Transparency",
    philosophy: "When everything is visible, trust becomes inevitable.",
    philosophyHi: "जब नीतियां और लेनदेन पूरी तरह पारदर्शी होते हैं, तभी विकास का वास्तविक लाभ अंतिम नागरिक तक पहुंचता है।",
    tag: "Our Philosophy",
    pageUrl: "/about/philosophy",
    pageLabel: "Explore Philosophy Page",
    pageLabelHi: "दर्शनशास्त्र पेज देखें",
    highlights: [
      {
        point: "Open Financials",
        desc: "All cooperative returns, investments, and fund usage are fully disclosed",
        pointHi: "खुला वित्तीय विवरण",
        descHi: "सहकारी लाभ, निवेश और फंड के उपयोग की पूरी जानकारी सभी सदस्यों के लिए खुली रखना।"
      },
      {
        point: "Clear Processes",
        desc: "Every step — from registration to returns — is explained and visible",
        pointHi: "स्पष्ट नीतियां",
        descHi: "पंजीकरण से लेकर लाभ वितरण तक की हर प्रक्रिया को सरल और स्पष्ट बनाना।"
      },
      {
        point: "No Hidden Charges",
        desc: "Members always know exactly what they pay for and what they receive",
        pointHi: "कोई गुप्त शुल्क नहीं",
        descHi: "सदस्यों को उनके द्वारा किए गए योगदान और प्राप्त सेवाओं की पूरी और सटीक जानकारी देना।"
      },
      {
        point: "Public Accountability",
        desc: "Leadership decisions are shared openly with the entire community",
        pointHi: "सार्वजनिक जवाबदेही",
        descHi: "नेतृत्व के निर्णयों को पूरे समुदाय के साथ साझा कर लोकतांत्रिक मूल्यों को बढ़ावा देना।"
      },
    ],
  },
  Innovation: {
    icon: Lightbulb,
    hindi: "नवाचार",
    title: "Innovation",
    philosophy: "We solve today's problems with tomorrow's thinking.",
    philosophyHi: "आधुनिक तकनीकों और डिजिटल नवाचारों का उपयोग करके ही हम विकसित भारत 2047 के स्वप्न को साकार कर सकते हैं।",
    tag: "Our Philosophy",
    pageUrl: "/about/philosophy",
    pageLabel: "Explore Philosophy Page",
    pageLabelHi: "दर्शनशास्त्र पेज देखें",
    highlights: [
      {
        point: "Tech-Driven Solutions",
        desc: "Pavitram Technology powers digital innovation across all 12 service areas",
        pointHi: "तकनीकी समाधान",
        descHi: "पवित्रम टेक्नोलॉजी के माध्यम से सभी 12 सेवा क्षेत्रों में डिजिटल और सॉफ्टवेयर सेवाएं देना।"
      },
      {
        point: "Continuous Improvement",
        desc: "We constantly evolve our platform based on member feedback and needs",
        pointHi: "निरंतर सुधार",
        descHi: "सदस्यों की प्रतिक्रियाओं और आवश्यकताओं के आधार पर अपनी तकनीकी प्रणालियों में सुधार करना।"
      },
      {
        point: "Modern Cooperative Model",
        desc: "Reinventing the traditional cooperative with cutting-edge digital infrastructure",
        pointHi: "आधुनिक सहकारी मॉडल",
        descHi: "पारंपरिक सहकारिता को आधुनिक डिजिटल बुनियादी ढांचे से जोड़कर नया रूप देना।"
      },
      {
        point: "Future Ready",
        desc: "Building systems today that will serve millions of Indians tomorrow",
        pointHi: "भविष्य के लिए तैयारी",
        descHi: "आज ऐसी मजबूत प्रणालियों का निर्माण करना जो कल करोड़ों भारतीयों की सेवा कर सकें।"
      },
    ],
  },
  Collaboration: {
    icon: Link2,
    hindi: "गठबंधन",
    title: "Collaboration",
    philosophy: "Alone we are strong — together we are unstoppable.",
    philosophyHi: "व्यक्ति, समाज और सरकार के सामूहिक गठबंधन से ही आत्मनिर्भर भारत का निर्माण संभव है।",
    tag: "Our Philosophy",
    pageUrl: "/about/philosophy",
    pageLabel: "Explore Philosophy Page",
    pageLabelHi: "दर्शनशास्त्र पेज देखें",
    highlights: [
      {
        point: "Cross-Sector Partnerships",
        desc: "Connecting businesses, individuals, and organizations across all sectors",
        pointHi: "बहु-क्षेत्रीय साझेदारी",
        descHi: "विभिन्न क्षेत्रों के व्यवसायों, व्यक्तियों और संगठनों को एक मंच पर जोड़ना।"
      },
      {
        point: "Government Alignment",
        desc: "Working with government schemes to maximize member benefits",
        pointHi: "सरकारी नीतियों से जुड़ाव",
        descHi: "सरकारी योजनाओं और नीतियों के साथ मिलकर सदस्यों को अधिकतम लाभ पहुंचाना।"
      },
      {
        point: "Community Synergy",
        desc: "Members' capabilities complement each other creating a full ecosystem",
        pointHi: "सामूहिक सामंजस्य",
        descHi: "सदस्यों की क्षमताओं का आपस में तालमेल बनाकर एक मजबूत आत्मनिर्भर पारिस्थितिकी तंत्र बनाना।"
      },
      {
        point: "Network Effect",
        desc: "Every new member makes the entire network more valuable for everyone",
        pointHi: "नेटवर्क का प्रभाव",
        descHi: "जैसे-जैसे नेटवर्क बढ़ता है, यह हर नए और पुराने सदस्य के लिए अधिक मूल्यवान और उपयोगी बनता जाता।"
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
    philosophyHi: "समान अवसर और अधिकार ही हर नागरिक के समग्र विकास की कुंजी हैं।",
    tag: "Core Values",
    pageUrl: "/about/values",
    pageLabel: "Explore Values Page",
    pageLabelHi: "मूल्य पेज देखें",
    highlights: [
      {
        point: "Social Equality",
        desc: "Eliminating any discrimination based on caste, class, gender, or belief.",
        pointHi: "सामाजिक समानता",
        descHi: "जाति, वर्ग, लिंग या मत के आधार पर किसी भी प्रकार के भेदभाव को समाप्त करना।"
      },
      {
        point: "Economic Opportunity",
        desc: "Giving all members equal access to cooperative wealth generation.",
        pointHi: "आर्थिक अवसर",
        descHi: "सहकारी माध्यम से समाज के हर सदस्य को समान रूप से धन और आजीविका अर्जित करने के अवसर देना।"
      },
      {
        point: "Equal Voice",
        desc: "One member, one vote structure for transparent governance.",
        pointHi: "समान अधिकार",
        descHi: "पारदर्शी और निष्पक्ष निर्णय प्रक्रिया में प्रत्येक सदस्य की समान आवाज सुनिश्चित करना।"
      },
      {
        point: "Human Dignity",
        desc: "Respecting and protecting the dignity of every individual in our network.",
        pointHi: "मानवीय गरिमा",
        descHi: "समुदाय के भीतर हर व्यक्ति के आत्मसम्मान और गरिमा का आदर और संरक्षण करना।"
      },
    ],
  },
  Liberty: {
    icon: Unlock,
    hindi: "स्वतंत्रता",
    title: "Liberty",
    philosophy: "Empowering citizens to think, express, and live freely.",
    philosophyHi: "नागरिकों की विचार, अभिव्यक्ति और आजीविका की स्वतंत्रता ही देश की प्रगति का इंजन है।",
    tag: "Core Values",
    pageUrl: "/about/values",
    pageLabel: "Explore Values Page",
    pageLabelHi: "मूल्य पेज देखें",
    highlights: [
      {
        point: "Financial Freedom",
        desc: "Freeing families from high-interest debt cycles and intermediaries.",
        pointHi: "आर्थिक स्वतंत्रता",
        descHi: "मध्यस्थों के शोषण और अत्यधिक ब्याज वाले ऋणों के चक्र से परिवारों को मुक्त करना।"
      },
      {
        point: "Choice of Livelihood",
        desc: "Empowering members to pursue and grow in their chosen careers.",
        pointHi: "आजीविका का चयन",
        descHi: "प्रत्येक सदस्य को अपनी रुचि के अनुसार करियर या व्यवसाय चुनने और उसमें आगे बढ़ने की आजादी।"
      },
      {
        point: "Independent Thought",
        desc: "Fostering rational learning and intellectual freedom.",
        pointHi: "स्वतंत्र और तार्किक सोच",
        descHi: "जागरूकता कार्यक्रमों और शिक्षा के जरिए स्वतंत्र सोच और वैज्ञानिक दृष्टिकोण को बढ़ावा देना।"
      },
      {
        point: "Local Autonomy",
        desc: "Supporting local merchants and farmers to operate independently.",
        pointHi: "स्थानीय स्वायत्तता",
        descHi: "स्थानीय दुकानदार, किसान और कारीगर को स्वतंत्र रूप से कार्य करने के लिए सशक्त बनाना।"
      },
    ],
  },
  Fraternity: {
    icon: Users,
    hindi: "बंधुता",
    title: "Fraternity",
    philosophy: "Promoting brotherhood and mutual support among all sections of society.",
    philosophyHi: "आपसी भाईचारा और सहकारिता की भावना ही समाज की सबसे बड़ी सुरक्षा और एकता की शक्ति है।",
    tag: "Core Values",
    pageUrl: "/about/values",
    pageLabel: "Explore Values Page",
    pageLabelHi: "मूल्य पेज देखें",
    highlights: [
      {
        point: "Unified Community",
        desc: "Building a nationwide family of 10,000+ cooperative members.",
        pointHi: "एकजुट समुदाय",
        descHi: "देश भर के 10,000+ सदस्यों का एक मजबूत और प्रेमपूर्ण सहकारी परिवार विकसित करना।"
      },
      {
        point: "Mutual Support",
        desc: "Fostering a community culture where members stand by members in times of need.",
        pointHi: "परस्पर सहयोग",
        descHi: "एक ऐसी संस्कृति बनाना जहाँ आवश्यकता पड़ने पर सदस्य हमेशा अन्य सदस्यों की मदद के लिए खड़े रहें।"
      },
      {
        point: "Shared Progress",
        desc: "Collective action ensuring that local prosperity is distributed evenly.",
        pointHi: "साझा प्रगति",
        descHi: "सामूहिक आर्थिक प्रयासों द्वारा यह सुनिश्चित करना कि समृद्धि सभी में समान रूप से वितरित हो।"
      },
      {
        point: "Social Harmony",
        desc: "Celebrating diversity while maintaining absolute unity.",
        pointHi: "सामाजिक समरसता",
        descHi: "सांस्कृतिक विविधताओं का सम्मान करते हुए पूर्ण एकता और भाईचारे को बनाए रखना।"
      },
    ],
  },
  Unity: {
    icon: Link2,
    hindi: "एकता",
    title: "Unity",
    philosophy: "Stronger together — building national unity through community action.",
    philosophyHi: "जब पूरा देश एकता के सूत्र में बंधकर एक दिशा में चलेगा, तभी विकसित भारत 2047 का लक्ष्य प्राप्त होगा।",
    tag: "Core Values",
    pageUrl: "/about",
    pageLabel: "Explore About Page",
    pageLabelHi: "हमारे बारे में देखें",
    highlights: [
      {
        point: "National Integration",
        desc: "Aligning regional cooperative networks across 15+ states.",
        pointHi: "राष्ट्रीय एकीकरण",
        descHi: "विभिन्न राज्यों में फैले सहकारी नेटवर्क को देशहित में एक ही लक्ष्य से जोड़ना।"
      },
      {
        point: "Slogan Alignment",
        desc: "Living the mantra of 'Be Organised, Do Organised' collectively.",
        pointHi: "संगठन का मंत्र",
        descHi: "‘संगठित बनो, संगठित करो’ के पवित्रम मूलमंत्र को सामूहिक रूप से अपने जीवन में उतारना।"
      },
      {
        point: "Common Purpose",
        desc: "Working toward the singular goal of a prosperous, developed India.",
        pointHi: "साझा संकल्प",
        descHi: "एक समृद्ध, स्वावलंबी और पूर्णतः विकसित भारत के निर्माण के साझा लक्ष्य के लिए मिलकर काम करना।"
      },
      {
        point: "Strong Institution",
        desc: "A unified structure that remains stable and resilient over the long term.",
        pointHi: "मजबूत संस्थान",
        descHi: "एक ऐसा टिकाऊ और अटूट संगठनात्मक ढांचा तैयार करना जो भविष्य की पीढ़ियों के लिए मार्गदर्शक बने।"
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
    philosophyHi: "नागरिकों के संवैधानिक अधिकारों और हितों की रक्षा करना ही एक न्यायसंगत समाज की पहचान है।",
    tag: "Our Ethics",
    pageUrl: "/about/ethics",
    pageLabel: "Explore Ethics Page",
    pageLabelHi: "नैतिकता पेज देखें",
    highlights: [
      {
        point: "Constitutional Awareness",
        desc: "Educating members about their rights as citizens.",
        pointHi: "संवैधानिक जागरूकता",
        descHi: "समुदाय के सदस्यों को उनके नागरिक अधिकारों और कर्तव्यों के बारे में शिक्षित करना।"
      },
      {
        point: "Fair Trade Rights",
        desc: "Guaranteeing fair purchase prices for producers and fair pricing for consumers.",
        pointHi: "निष्पक्ष व्यापार अधिकार",
        descHi: "उत्पादकों के लिए उचित मूल्य और उपभोक्ताओं के लिए सही दरों की गारंटी देना।"
      },
      {
        point: "Voice & Representation",
        desc: "Ensuring every member has a voice in cooperative decisions.",
        pointHi: "समान प्रतिनिधित्व",
        descHi: "सहकारी निर्णयों में समाज के हर व्यक्ति की बात सुने जाने का समान अधिकार सुनिश्चित करना।"
      },
      {
        point: "Social Security",
        desc: "Building cooperative safety nets for health, education, and security.",
        pointHi: "सामाजिक सुरक्षा",
        descHi: "स्वास्थ्य, शिक्षा और सुरक्षा के लिए मिलकर सामूहिक सुरक्षा चक्र तैयार करना।"
      },
    ],
  },
  Responsibility: {
    icon: UserCheck,
    hindi: "उत्तरदायित्व",
    title: "Responsibility",
    philosophy: "Embracing duty towards our family, community, and nation.",
    philosophyHi: "परिवार, समाज और राष्ट्र के प्रति अपनी जिम्मेदारियों को समझना ही एक प्रबुद्ध नागरिक का कर्तव्य है।",
    tag: "Our Ethics",
    pageUrl: "/about/ethics",
    pageLabel: "Explore Ethics Page",
    pageLabelHi: "नैतिकता पेज देखें",
    highlights: [
      {
        point: "Individual Contribution",
        desc: "Actively sharing skills, resources, and mentoring others.",
        pointHi: "व्यक्तिगत कर्तव्य",
        descHi: "अपने कौशल, ज्ञान और अनुभवों को साझा कर दूसरों को आगे बढ़ने में मदद करना।"
      },
      {
        point: "Community Support",
        desc: "Supporting fellow local merchants and purchasing locally.",
        pointHi: "स्थानीय सहयोग",
        descHi: "स्थानीय उत्पादकों, किसानों और छोटे दुकानदारों से खरीद कर आत्मनिर्भरता बढ़ाना।"
      },
      {
        point: "Civic Responsibility",
        desc: "Maintaining high ethical standards in all public and business dealings.",
        pointHi: "नागरिक जिम्मेदारी",
        descHi: "सार्वजनिक और व्यावसायिक लेन-देन में उच्च नैतिक और कानूनी मानकों को बनाए रखना।"
      },
      {
        point: "Nation Building",
        desc: "Aligning our daily efforts with the long-term goal of a developed India.",
        pointHi: "राष्ट्र निर्माण",
        descHi: "अपने दैनिक श्रम और कार्यों को भारत के 2047 तक विकसित राष्ट्र बनने के लक्ष्य से जोड़ना।"
      },
    ],
  },
  Accountability: {
    icon: ClipboardCheck,
    hindi: "जवाबदेही",
    title: "Accountability",
    philosophy: "Being answerable for our commitments, actions, and transactions.",
    philosophyHi: "हमारे संकल्पों, कार्यों और लेन-देन के प्रति पूरी पारदर्शिता और जवाबदेही ही हमारी ताकत है।",
    tag: "Our Ethics",
    pageUrl: "/about/ethics",
    pageLabel: "Explore Ethics Page",
    pageLabelHi: "नैतिकता पेज देखें",
    highlights: [
      {
        point: "Transparent Auditing",
        desc: "Open accounting logs for all business transactions.",
        pointHi: "पारदर्शी ऑडिट",
        descHi: "सभी व्यावसायिक लेन-देन और लेखा-जोखा को पूरी तरह पारदर्शी और खुला रखना।"
      },
      {
        point: "Clean Governance",
        desc: "Strict rules for management to prevent any personal gain.",
        pointHi: "स्वच्छ शासन",
        descHi: "प्रबंधन में किसी भी व्यक्तिगत लाभ को रोकने के लिए कड़े नियमों का पालन करना।"
      },
      {
        point: "Quality Assured",
        desc: "Accountable delivery systems ensuring top service standards.",
        pointHi: "गुणवत्ता का आश्वासन",
        descHi: "सेवाओं और उत्पादों में उच्च गुणवत्ता और उत्कृष्ट मानकों को सुनिश्चित करना।"
      },
      {
        point: "Clear Metrics",
        desc: "Regular reports on community returns and wealth distribution.",
        pointHi: "नियमित रिपोर्ट",
        descHi: "सामुदायिक लाभांश और विकास की रिपोर्ट नियमित रूप से सदस्यों के साथ साझा करना।"
      },
    ],
  },
  Outcome: {
    icon: Target,
    hindi: "परिणाम",
    title: "Outcome",
    philosophy: "Focused on real, measurable impact and positive results for people.",
    philosophyHi: "सच्ची प्रगति केवल नीतियों में नहीं, बल्कि जमीन पर दिखने वाले वास्तविक सकारात्मक परिणामों से आंकी जाती है।",
    tag: "Our Ethics",
    pageUrl: "/about",
    pageLabel: "Explore About Page",
    pageLabelHi: "हमारे बारे में देखें",
    highlights: [
      {
        point: "Tangible Development",
        desc: "Measurable increase in member incomes and savings.",
        pointHi: "वास्तविक विकास",
        descHi: "सदस्यों की आय में वास्तविक वृद्धि और दैनिक जीवन के खर्चों में स्पष्ट कमी लाना।"
      },
      {
        point: "Skill Acquisition",
        desc: "Clear educational outcomes and employment match rates.",
        pointHi: "कौशल और रोजगार",
        descHi: "युवाओं के कौशल विकास और रोजगार के दरों में सकारात्मक वृद्धि सुनिश्चित करना।"
      },
      {
        point: "Grassroots Growth",
        desc: "Direct benefits reaching the intended final beneficiaries.",
        pointHi: "जमीनी स्तर पर लाभ",
        descHi: "सहकारी योजनाओं का प्रत्यक्ष लाभ अंतिम हितग्राही तक पारदर्शी रूप से पहुंचाना।"
      },
      {
        point: "Long-Term Growth",
        desc: "Reinvesting yields into sustainable community infrastructures.",
        pointHi: "दीर्घकालिक विकास",
        descHi: "प्राप्त लाभों को पुनः सामुदायिक बुनियादी ढांचे में निवेश कर भविष्य को सुरक्षित करना।"
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
    philosophyHi: "कम आय वाले परिवारों को आत्मनिर्भर बनाकर ही विकसित भारत की ठोस नींव रखी जा सकती है।",
    tag: "Our Focus",
    pageUrl: "/about/focus",
    pageLabel: "Explore Focus Page",
    pageLabelHi: "प्राथमिकता पेज देखें",
    highlights: [
      {
        point: "Cost Reduction",
        desc: "Lowering daily household expenses through cooperative buying networks.",
        pointHi: "लागत में कमी",
        descHi: "सहकारी खरीद नेटवर्क के जरिए दैनिक घरेलू खर्चों को न्यूनतम स्तर पर लाना।"
      },
      {
        point: "Cooperative Safety Net",
        desc: "Emergency financial, medical, and social support for vulnerable families.",
        pointHi: "सहकारी सुरक्षा कवच",
        descHi: "वंचित परिवारों के लिए आपातकालीन वित्तीय, चिकित्सा और सामाजिक सहायता तंत्र बनाना।"
      },
      {
        point: "Dignified Livelihoods",
        desc: "Creating accessible earning opportunities through local micro-tasks and services.",
        pointHi: "सम्मानजनक आजीविका",
        descHi: "स्थानीय सूक्ष्म-कार्यों और सेवाओं के माध्यम से सभी के लिए नियमित रोजगार पैदा करना।"
      },
      {
        point: "Equal Access",
        desc: "Ensuring zero discrimination in accessing all 12 Pavitram services.",
        pointHi: "समान पहुंच",
        descHi: "पवित्रम की सभी 12 सेवाओं तक बिना किसी भेदभाव के हर नागरिक की पहुंच सुनिश्चित करना।"
      },
    ],
  },
  Yuva: {
    icon: GraduationCap,
    hindi: "युवा (कौशल एवं रोजगार)",
    title: "Youth Empowerment",
    philosophy:
      "Equipping young minds with modern skills, digital tools, and dignified employment opportunities.",
    philosophyHi: "युवाओं के कौशल, ऊर्जा और डिजिटल सशक्तिकरण से ही 2047 का आत्मनिर्भर भारत संभव होगा।",
    tag: "Our Focus",
    pageUrl: "/about/focus",
    pageLabel: "Explore Focus Page",
    pageLabelHi: "प्राथमिकता पेज देखें",
    highlights: [
      {
        point: "Pavitram Rozgar",
        desc: "Matching youth qualifications with verified local and national job opportunities.",
        pointHi: "पवित्रम रोजगार",
        descHi: "युवाओं की शैक्षणिक योग्यता के आधार पर उन्हें स्थानीय और राष्ट्रीय रोजगार के अवसरों से जोड़ना।"
      },
      {
        point: "Skill Development",
        desc: "Practical training in technology, digital commerce, and modern business management.",
        pointHi: "कौशल विकास",
        descHi: "तकनीकी, डिजिटल वाणिज्य और आधुनिक व्यापार प्रबंधन में व्यावहारिक प्रशिक्षण देना।"
      },
      {
        point: "Entrepreneurship Support",
        desc: "Guiding young entrepreneurs to launch their own micro-businesses within the cooperative network.",
        pointHi: "उद्यमिता को बढ़ावा",
        descHi: "युवा उद्यमियों को सहकारी नेटवर्क के भीतर अपने खुद के सूक्ष्म उद्योग शुरू करने में मदद करना।"
      },
      {
        point: "Rational Learning",
        desc: "Fostering leadership, constitutional awareness, and civic responsibility.",
        pointHi: "तार्किक शिक्षा",
        descHi: "युवाओं में नेतृत्व क्षमता, संवैधानिक जागरूकता और नागरिक जिम्मेदारी की भावना विकसित करना।"
      },
    ],
  },
  Mahila: {
    icon: Sparkles,
    hindi: "महिला (महिला सशक्तिकरण)",
    title: "Women Empowerment",
    philosophy: "Fostering financial independence and leadership for women in every household.",
    philosophyHi: "जब नारी सशक्त और आर्थिक रूप से स्वतंत्र होगी, तभी एक समृद्ध और विकसित राष्ट्र का निर्माण होगा।",
    tag: "Our Focus",
    pageUrl: "/about",
    pageLabel: "Explore About Page",
    pageLabelHi: "हमारे बारे में देखें",
    highlights: [
      {
        point: "Self-Help Enterprise",
        desc: "Supporting women-led micro-enterprises and home-based production units.",
        pointHi: "स्वयं सहायता उद्यम",
        descHi: "महिला-नेतृत्व वाले सूक्ष्म उद्यमों और गृह-उद्योगों को बढ़ावा व आर्थिक सहायता देना।"
      },
      {
        point: "Pavitram Rishta & Health",
        desc: "Dedicated healthcare, preventive wellness, and trusted family network support.",
        pointHi: "स्वास्थ्य और कल्याण",
        descHi: "महिलाओं के लिए समर्पित स्वास्थ्य देखभाल, निवारक कल्याण और पारिवारिक सहायता तंत्र बनाना।"
      },
      {
        point: "Financial Autonomy",
        desc: "Empowering women with direct cooperative bank accounts and micro-savings schemes.",
        pointHi: "वित्तीय स्वायत्तता",
        descHi: "सीधे सहकारी बैंक खातों और सूक्ष्म-बचत योजनाओं के जरिए महिलाओं को वित्तीय रूप से स्वतंत्र बनाना।"
      },
      {
        point: "Equal Governance",
        desc: "Active representation of women in local network councils and decision-making.",
        pointHi: "समान सहभागिता",
        descHi: "स्थानीय निर्णय समितियों और शासन में महिलाओं की सक्रिय भागीदारी सुनिश्चित करना।"
      },
    ],
  },
  Kisan: {
    icon: Sprout,
    hindi: "किसान (कृषि एवं समृद्धि)",
    title: "Farmer Prosperity",
    philosophy:
      "Empowering farmers with direct market links, fair prices, and modern agricultural support.",
    philosophyHi: "अन्नदाता की समृद्धि ही राष्ट्र की खुशहाली और खाद्य सुरक्षा की सबसे बड़ी गारंटी है।",
    tag: "Our Focus",
    pageUrl: "/about",
    pageLabel: "Explore About Page",
    pageLabelHi: "हमारे बारे में देखें",
    highlights: [
      {
        point: "Direct Produce Sourcing",
        desc: "Connecting farmers directly with Pavitram Mart and Wholesaler networks to eliminate middlemen.",
        pointHi: "प्रत्यक्ष बाजार संपर्क",
        descHi: "किसानों को पवित्रम मार्ट और थोक खरीदारों से सीधे जोड़कर बिचौलियों के शोषण से बचाना।"
      },
      {
        point: "Fair Purchase Prices",
        desc: "Guaranteeing transparent, dignified purchase rates for agricultural crops.",
        pointHi: "फसलों का सही मूल्य",
        descHi: "पारदर्शी और सम्मानजनक दरों पर कृषि उपज की खरीद सुनिश्चित करना।"
      },
      {
        point: "Agri-Technology",
        desc: "Sharing modern farming techniques, organic inputs, and digital crop planning tools.",
        pointHi: "कृषि-तकनीक साझाकरण",
        descHi: "आधुनिक खेती, जैविक खाद और डिजिटल फसल योजना के उपकरणों को किसानों तक पहुंचाना।"
      },
      {
        point: "Rural Prosperity",
        desc: "Building sustainable cooperative storage and delivery infrastructure across rural regions.",
        pointHi: "ग्रामीण समृद्धि",
        descHi: "ग्रामीण क्षेत्रों में सहकारी कोल्ड-स्टोरेज और आपूर्ति प्रणालियों का विकास करना।"
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
    pageUrl: "/about/network",
    pageLabel: "Explore Business Network Page",
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
    pageUrl: "/about/network",
    pageLabel: "Explore Business Network Page",
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
    pageUrl: "/about/network",
    pageLabel: "Explore Business Network Page",
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
    pageUrl: "/about/network",
    pageLabel: "Explore Business Network Page",
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
  const { t } = useLanguage();
  const labels = [
    { text: t(translations.pillars.family.title), pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { text: t(translations.pillars.society.title), pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
    { text: t(translations.pillars.india.title), pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { text: t(translations.pillars.citizen.title), pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
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
  const { t } = useLanguage();
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
            <GoldLabel>{t(translations.hero.tag)}</GoldLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-[80px]">
              {t(translations.hero.title)}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.8] text-white/65">
              {t(translations.hero.desc)}
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
  const { t, language } = useLanguage();
  const cards = [
    {
      icon: GraduationCap,
      key: "Intellectual Citizen",
      title: t(translations.pillars.citizen.title),
      hi: "प्रबुद्ध नागरिक",
      text: t({ en: "Aware, educated, and rational citizen", hi: "जागरूक, शिक्षित और तार्किक नागरिक" }),
    },
    {
      icon: Home,
      key: "Prosperous Family",
      title: t(translations.pillars.family.title),
      hi: "समृद्ध परिवार",
      text: t({
        en: "Ensuring availability of all basic needs, higher income, and lower expenses",
        hi: "सभी बुनियादी आवश्यकताओं की उपलब्धता, उच्च आय और कम खर्च सुनिश्चित करना"
      }),
    },
    {
      icon: Users,
      key: "Self-Reliant Society",
      title: t(translations.pillars.society.title),
      hi: "आत्मनिर्भर समाज",
      text: t({
        en: "Fulfilling all needs of the society by the society itself",
        hi: "समाज की सभी आवश्यकताओं को समाज द्वारा स्वयं पूरा करना"
      }),
    },
    {
      icon: Flag,
      key: "Developed India",
      title: t(translations.pillars.india.title),
      hi: "विकसित भारत",
      text: t({
        en: "Enlightened, prosperous, self-reliant, and developed India",
        hi: "प्रबुद्ध, समृद्ध, आत्मनिर्भर और विकसित भारत"
      }),
    },
  ];
  return (
    <section id="pillars" className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t(translations.pillars.tag)}
          title={t(translations.pillars.title)}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => onOpenModal(VISION_MODALS[c.key])}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-white p-7 card-shadow transition-all hover:card-shadow-lg flex flex-col justify-between border border-transparent hover:border-gold/50"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.text}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t, language } = useLanguage();
  const cards = [
    {
      num: "01",
      icon: Handshake,
      key: "Sabka Saath",
      title: "Sabka Saath",
      hi: "सबका साथ",
      body: t({
        en: "Building a united community where every member stands together, supports each other, and grows as one cooperative family across India.",
        hi: "एकजुट समुदाय का निर्माण करना जहाँ प्रत्येक सदस्य एक साथ खड़ा होता है, एक-दूसरे का समर्थन करता है, और पूरे भारत में एक सहकारी परिवार के रूप में विकसित होता है।"
      }),
    },
    {
      num: "02",
      icon: Zap,
      key: "Sabka Prayaas",
      title: "Sabka Prayaas",
      hi: "सबका प्रयास",
      body: t({
        en: "Encouraging every individual to contribute their skills, time, and efforts toward building a stronger, self-reliant, and prosperous society.",
        hi: "एक मजबूत, आत्मनिर्भर और समृद्ध समाज के निर्माण की दिशा में अपने कौशल, समय और प्रयासों का योगदान देने के लिए प्रत्येक व्यक्ति को प्रोत्साहित करना।"
      }),
    },
    {
      num: "03",
      icon: TrendingUp,
      key: "Sabka Vikas",
      title: "Sabka Vikas",
      hi: "सबका विकास",
      body: t({
        en: "Ensuring inclusive development where growth reaches every village, every family, and every citizen — leaving no one behind in our nation's progress.",
        hi: "समावेशी विकास सुनिश्चित करना जहाँ विकास हर गाँव, हर परिवार और हर नागरिक तक पहुँचे — हमारे राष्ट्र की प्रगति में कोई भी पीछे न छूटे।"
      }),
    },
    {
      num: "04",
      icon: Shield,
      key: "Sabka Vishwas",
      title: "Sabka Vishwas",
      hi: "सबका विश्वास",
      body: t({
        en: "Earning and maintaining the complete trust of every member through absolute transparency, integrity, and ethical governance at every level.",
        hi: "हर स्तर पर पूर्ण पारदर्शिता, अखंडता और नैतिक शासन के माध्यम से प्रत्येक सदस्य का पूर्ण विश्वास अर्जित करना और उसे बनाए रखना।"
      }),
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t(translations.mission.tag)}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-[48px]">
            {t(translations.mission.subtitle)}
          </h2>
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
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 0 25px rgba(201, 149, 42, 0.25)" }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(MISSION_MODALS[c.key])}
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
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{language === "en" ? c.title : c.hi}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-white/70">{c.body}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t, language } = useLanguage();
  const cards = [
    {
      icon: ShieldCheck,
      key: "Integrity",
      title: t({ en: "Integrity", hi: "अखंडता" }),
      hi: "अखंडता",
      body: t({
        en: "We conduct ourselves with complete honesty, fairness, and ethical principles in every interaction, decision, and partnership within our cooperative network.",
        hi: "हम अपने सहकारी नेटवर्क के भीतर प्रत्येक बातचीत, निर्णय और साझेदारी में पूर्ण ईमानदारी, निष्पक्षता और नैतिक सिद्धांतों के साथ काम करते हैं।"
      }),
    },
    {
      icon: Eye,
      key: "Transparency",
      title: t({ en: "Transparency", hi: "पारदर्शिता" }),
      hi: "पारदर्शिता",
      body: t({
        en: "Every process, transaction, and decision in our network is open and visible to all members. We believe transparency builds the trust that holds our community together.",
        hi: "हमारे नेटवर्क में हर प्रक्रिया, लेनदेन और निर्णय सभी सदस्यों के लिए खुला और स्पष्ट है। हमारा मानना है कि पारदर्शिता उस विश्वास का निर्माण करती है जो हमारे समुदाय को एक साथ रखता है।"
      }),
    },
    {
      icon: Lightbulb,
      key: "Innovation",
      title: t({ en: "Innovation", hi: "नवाचार" }),
      hi: "नवाचार",
      body: t({
        en: "We continuously embrace new ideas, technologies, and approaches to solve real problems and create better opportunities for our members and society.",
        hi: "हम वास्तविक समस्याओं को हल करने और अपने सदस्यों और समाज के लिए बेहतर अवसर पैदा करने के लिए नए विचारों, तकनीकों और दृष्टिकोणों को लगातार अपनाते हैं।"
      }),
    },
    {
      icon: Link2,
      key: "Collaboration",
      title: t({ en: "Collaboration", hi: "गठबंधन" }),
      hi: "गठबंधन",
      body: t({
        en: "Our strength lies in unity. By forging meaningful partnerships between individuals, businesses, and organizations, we create an ecosystem far stronger than the sum of its parts.",
        hi: "हमारी ताकत एकता में है। व्यक्तियों, व्यवसायों और संगठनों के बीच सार्थक साझेदारी बनाकर, हम एक ऐसा पारिस्थितिकी तंत्र बनाते हैं जो इसके हिस्सों के योग से कहीं अधिक मजबूत है।"
      }),
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t(translations.philosophy.tag)}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            {language === "en" ? t(translations.philosophy.title) : "हमारे सिद्धांत"}
          </h2>
          {language === "en" && (
            <>
              <p className="mt-3 font-deva text-lg font-semibold text-gold">
                {t(translations.philosophy.subtitle)}
              </p>
              <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
            </>
          )}
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
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(PHILOSOPHY_MODALS[c.key])}
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
                  <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t, language } = useLanguage();
  const cards = [
    {
      icon: Scale,
      key: "Equality",
      title: t(translations.coreValues.equality.title),
      hi: "समानता",
      body: t(translations.coreValues.equality.desc),
    },
    {
      icon: Unlock,
      key: "Liberty",
      title: t(translations.coreValues.liberty.title),
      hi: "स्वतंत्रता",
      body: t(translations.coreValues.liberty.desc),
    },
    {
      icon: Users,
      key: "Fraternity",
      title: t(translations.coreValues.fraternity.title),
      hi: "बंधुता",
      body: t(translations.coreValues.fraternity.desc),
    },
    {
      icon: Link2,
      key: "Unity",
      title: t(translations.coreValues.unity.title),
      hi: "एकता",
      body: t(translations.coreValues.unity.desc),
    },
  ];

  return (
    <section className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t(translations.coreValues.tag)}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            {language === "en" ? t(translations.coreValues.title) : "हमारे आदर्श"}
          </h2>
          {language === "en" && (
            <>
              <p className="mt-3 font-deva text-lg font-semibold text-gold">{t(translations.coreValues.subtitle)}</p>
              <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
            </>
          )}
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
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(CORE_VALUES_MODALS[c.key])}
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
                  <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t, language } = useLanguage();
  const cards = [
    {
      icon: Shield,
      key: "Rights",
      title: t(translations.ethics.rights.title),
      hi: "अधिकार",
      body: t(translations.ethics.rights.desc),
    },
    {
      icon: UserCheck,
      key: "Responsibility",
      title: t(translations.ethics.responsibility.title),
      hi: "उत्तरदायित्व",
      body: t(translations.ethics.responsibility.desc),
    },
    {
      icon: ClipboardCheck,
      key: "Accountability",
      title: t(translations.ethics.accountability.title),
      hi: "जवाबदेही",
      body: t(translations.ethics.accountability.desc),
    },
    {
      icon: Target,
      key: "Outcome",
      title: t(translations.ethics.outcome.title),
      hi: "परिणाम",
      body: t(translations.ethics.outcome.desc),
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t(translations.ethics.tag)}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            {language === "en" ? t(translations.ethics.title) : "हमारे कर्तव्य"}
          </h2>
          {language === "en" && (
            <>
              <p className="mt-3 font-deva text-lg font-semibold text-gold">{t(translations.ethics.subtitle)}</p>
              <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
            </>
          )}
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
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(OUR_ETHICS_MODALS[c.key])}
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
                  <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t, language } = useLanguage();
  const cards = [
    {
      icon: HeartHandshake,
      key: "Garib",
      title: t({ en: "Garib", hi: "गरीब" }),
      hi: "कल्याण एवं सुरक्षा",
      body: t({
        en: "Empowering low-income families and workers through cooperative safety nets, financial support, and cost-reduction initiatives.",
        hi: "सहकारी सुरक्षा तंत्र, वित्तीय सहायता और लागत कम करने की पहलों के माध्यम से कम आय वाले परिवारों और श्रमिकों को सशक्त बनाना।"
      }),
    },
    {
      icon: GraduationCap,
      key: "Yuva",
      title: t({ en: "Yuva", hi: "युवा" }),
      hi: "कौशल एवं रोजगार",
      body: t({
        en: "Nurturing the next generation with digital skills, entrepreneurship guidance, and dignified employment opportunities.",
        hi: "डिजिटल कौशल, उद्यमिता मार्गदर्शन और सम्मानजनक रोजगार के अवसरों के साथ अगली पीढ़ी का पोषण करना।"
      }),
    },
    {
      icon: Sparkles,
      key: "Mahila",
      title: t({ en: "Mahila", hi: "महिला" }),
      hi: "महिला सशक्तिकरण",
      body: t({
        en: "Fostering self-reliance for women through self-help groups, micro-enterprises, and skill development programs.",
        hi: "स्वयं सहायता समूहों, सूक्ष्म उद्यमों और कौशल विकास कार्यक्रमों के माध्यम से महिलाओं के लिए आत्मनिर्भरता को बढ़ावा देना।"
      }),
    },
    {
      icon: Sprout,
      key: "Kisan",
      title: t({ en: "Kisan", hi: "किसान" }),
      hi: "कृषि एवं समृद्धि",
      body: t({
        en: "Supporting agricultural communities with direct market access, fair crop prices, and cooperative supply chains.",
        hi: "सीधे बाजार पहुंच, फसलों की उचित कीमतों और सहकारी आपूर्ति श्रृंखलाओं के साथ कृषि समुदायों का समर्थन करना।"
      }),
    },
  ];

  return (
    <section className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t({ en: "OUR FOCUS", hi: "हमारा ध्यान" })}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            {language === "en" ? t({ en: "Our Primary Focus", hi: "हमारा मुख्य ध्यान क्षेत्र" }) : "हमारी प्राथमिकताएं"}
          </h2>
          {language === "en" && (
            <>
              <p className="mt-3 font-deva text-lg font-semibold text-gold">{t({ en: "Garib, Yuva, Mahila, Kisan", hi: "गरीब, युवा, महिला, किसान" })}</p>
              <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />
            </>
          )}
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
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(OUR_FOCUS_MODALS[c.key])}
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
                  <p className="mt-3 text-[15px] leading-[1.7] text-mist">{c.body}</p>
                </div>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t, language } = useLanguage();
  const cards = [
    {
      icon: Home,
      num: 5000,
      suffix: "+",
      key: "Villages",
      label: t({ en: "Villages", hi: "गांव" }),
      body: t({ en: "Active community members in rural villages across India", hi: "पूरे भारत के ग्रामीण गाँवों में सक्रिय समुदाय के सदस्य" }),
    },
    {
      icon: Building2,
      num: 200,
      suffix: "+",
      key: "Cities",
      label: t({ en: "Cities", hi: "शहर" }),
      body: t({ en: "Urban business associates and cooperative networks", hi: "शहरी व्यावसायिक सहयोगी और सहकारी नेटवर्क" }),
    },
    {
      icon: Map,
      num: 15,
      suffix: "+",
      key: "States",
      label: t({ en: "States", hi: "प्रदेश" }),
      body: t({ en: "States covered with active Pavitram India operations", hi: "सक्रिय पवित्रम इंडिया परिचालन वाले राज्य" }),
    },
    {
      icon: Flag,
      num: 1,
      suffix: "",
      key: "Nation",
      label: t({ en: "Nation", hi: "देश" }),
      body: t({ en: "One united cooperative movement building a developed India", hi: "एकजुट सहकारी आंदोलन जो विकसित भारत का निर्माण कर रहा है" }),
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t({ en: "OUR PRESENCE", hi: "हमारी उपस्थिति" })}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-[48px]">
            {t({ en: "Our Reach & Impact", hi: "हमारा विस्तार और प्रभाव" })}
          </h2>
          <p className="mt-3 font-deva text-lg font-semibold text-gold">{t({ en: "Our Extension", hi: "हमारा विस्तार" })}</p>
          <p className="mx-auto mt-6 max-w-xl text-white/70">
            {t({
              en: "From remote villages to major metropolitan cities, Pavitram India is actively organizing individuals and businesses into a cohesive economic community.",
              hi: "दूर-दराज के गाँवों से लेकर बड़े महानगरों तक, पवित्रम इंडिया सक्रिय रूप से व्यक्तियों और व्यवसायों को एक मजबूत आर्थिक समुदाय में संगठित कर रहा है।"
            })}
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
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02, boxShadow: "0 0 25px rgba(201, 149, 42, 0.25)" }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(PRESENCE_MODALS[c.key])}
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
                <p className="mt-3 text-[14.5px] leading-[1.7] text-white/70">{c.body}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t, language } = useLanguage();
  const cards = [
    {
      icon: Landmark,
      key: "With Government",
      title: t({ en: "With Government", hi: "सरकार के साथ" }),
      body: t({
        en: "Aligning with government policies, schemes, and initiatives to bring their benefits directly to our community members across India.",
        hi: "सरकारी नीतियों, योजनाओं और पहलों के साथ संरेखित होकर उनके लाभों को सीधे भारत भर में हमारे समुदाय के सदस्यों तक पहुँचाना।"
      }),
    },
    {
      icon: Briefcase,
      key: "With Govt Departments",
      title: t({ en: "With Govt Departments", hi: "सरकारी विभागों के साथ" }),
      body: t({
        en: "Partnering with government departments for effective on-ground implementation of welfare schemes and development programs.",
        hi: "कल्याणकारी योजनाओं और विकास कार्यक्रमों के प्रभावी जमीनी क्रियान्वयन के लिए सरकारी विभागों के साथ साझेदारी करना।"
      }),
    },
    {
      icon: Users,
      key: "With Beneficiaries",
      title: t({ en: "With Beneficiaries", hi: "लाभार्थियों के साथ" }),
      body: t({
        en: "Directly connecting with and empowering the real beneficiaries — families, farmers, workers, and entrepreneurs — who need support.",
        hi: "वास्तविक लाभार्थियों—परिवारों, किसानों, श्रमिकों और उद्यमियों—जिन्हें सहायता की आवश्यकता है, से सीधे जुड़ना और उन्हें सशक्त बनाना।"
      }),
    },
    {
      icon: NetworkIcon,
      key: "With Organizations",
      title: t({ en: "With Organizations", hi: "संगठनों के साथ" }),
      body: t({
        en: "Collaborating with NGOs, cooperatives, professional bodies, and community organizations to strengthen our nationwide network.",
        hi: "हमारे राष्ट्रव्यापी नेटवर्क को मजबूत करने के लिए गैर सरकारी संगठनों (NGOs), सहकारी समितियों, पेशेवर निकायों और सामुदायिक संगठनों के साथ सहयोग करना।"
      }),
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t({ en: "STRATEGIC PARTNERSHIPS", hi: "रणनीतिक सहभागिता" })}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[48px]">
            {t({ en: "Our Strategic Partners", hi: "हमारे रणनीतिक भागीदार" })}
          </h2>
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
              key={c.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02, borderColor: "#C9952A" }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenModal(ASSOCIATION_MODALS[c.key])}
              className="group cursor-pointer flex flex-col justify-between rounded-[20px] border border-transparent bg-white p-7 card-shadow transition-all duration-300"
            >
              <div className="text-left">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy text-gold ring-2 ring-gold/20 transition-colors group-hover:bg-gold group-hover:text-navy">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors group-hover:text-gold">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-mist">{c.body}</p>
              </div>
              <div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                  {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
  const { t } = useLanguage();
  const items = [
    {
      icon: ShoppingBag,
      title: t({ en: "Pavitram Mart", hi: "पवित्रम मार्ट" }),
      text: t({ en: "Multi-vendor B2B, B2C e-commerce platform", hi: "मल्टी-वेन्डर B2B, B2C ई-कॉमर्स प्लेटफॉर्म" }),
      to: "/services/mart",
    },
    {
      icon: Building2,
      title: t({ en: "Pavitram Properties", hi: "पवित्रम प्रॉपर्टीज" }),
      text: t({ en: "Complete solution for property needs", hi: "संपत्ति की सभी जरूरतों का संपूर्ण समाधान" }),
      to: "/services/properties",
    },
    {
      icon: HeartPulse,
      title: t({ en: "Pavitram Wellness", hi: "पवित्रम वेलनेस" }),
      text: t({ en: "Healthy body, mind, and preventive care", hi: "स्वस्थ शरीर, मन और निवारक स्वास्थ्य देखभाल" }),
      to: "/services/wellness",
    },
    {
      icon: BookOpen,
      title: t({ en: "Pavitram Gyan", hi: "पवित्रम ज्ञान" }),
      text: t({ en: "Awareness, skill building, and education", hi: "जागरूकता, कौशल विकास और शिक्षा" }),
      to: "/services/gyan",
    },
    {
      icon: Landmark,
      title: t({ en: "Pavitram Finance", hi: "पवित्रम फाइनेंस" }),
      text: t({ en: "Banking, loans, and cooperative returns", hi: "बैंकिंग, ऋण और सहकारी लाभ" }),
      to: "/services/finance",
    },
    {
      icon: Plane,
      title: t({ en: "Pavitram Travels", hi: "पवित्रम ट्रेवल्स" }),
      text: t({ en: "Complete solution for tours and travels", hi: "टूर और ट्रेवल्स का संपूर्ण समाधान" }),
      to: "/services/travels",
    },
    {
      icon: Heart,
      title: t({ en: "Pavitram Rishta", hi: "पवित्रम रिश्ता" }),
      text: t({ en: "Trusted matrimonial matchmaking network", hi: "विश्वसनीय वैवाहिक मिलान नेटवर्क" }),
      to: "/services/rishta",
    },
    {
      icon: Briefcase,
      title: t({ en: "Pavitram Rozgar", hi: "पवित्रम रोजगार" }),
      text: t({ en: "Dignified employment & job matching", hi: "सम्मानजनक रोजगार और नौकरी मिलान" }),
      to: "/services/rozgar",
    },
    {
      icon: Wrench,
      title: t({ en: "Pavitram Services", hi: "पवित्रम सर्विसेज" }),
      text: t({ en: "Verified household & maintenance fixes", hi: "सत्यापित घरेलू और रखरखाव सेवाएं" }),
      to: "/services/services",
    },
    {
      icon: Radio,
      title: t({ en: "Pavitram Media", hi: "पवित्रम मीडिया" }),
      text: t({ en: "Electronic and social media, e-paper", hi: "इलेक्ट्रॉनिक और सोशल मीडिया, ई-पेपर" }),
      to: "/services/media",
    },
    {
      icon: Truck,
      title: t({ en: "Pavitram Delivery", hi: "पवित्रम डिलीवरी" }),
      text: t({ en: "Logistics, anything, anywhere, anytime", hi: "लॉजिस्टिक्स, कुछ भी, कहीं भी, कभी भी" }),
      to: "/services/delivery",
    },
    {
      icon: Cpu,
      title: t({ en: "Pavitram Technology", hi: "पवित्रम टेक्नोलॉजी" }),
      text: t({ en: "Technology, digital and software services", hi: "प्रौद्योगिकी, डिजिटल और सॉफ्टवेयर सेवाएं" }),
      to: "/services/technology",
    },
  ];

  return (
    <section id="services" className="bg-haze py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t({ en: "Our Ecosystem", hi: "हमारा पारिस्थितिकी तंत्र" })}
          title={t({ en: "Core Services", hi: "मुख्य सेवाएं" })}
          subtitle={t({
            en: "A professional network of distinct services designed to handle every aspect of your personal and professional life.",
            hi: "आपके व्यक्तिगत और व्यावसायिक जीवन के हर पहलू को संभालने के लिए डिज़ाइन की गई विशिष्ट सेवाओं का एक पेशेवर नेटवर्क।"
          })}
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
              key={s.to}
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
                {t({ en: "Explore Portal", hi: "पोर्टल देखें" })} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="mt-14 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:scale-[1.03]"
          >
            {t({ en: "Explore All Services", hi: "सभी सेवाएं देखें" })} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────── Opportunities, Network, Testimonials, CTA ─────────── */

function Opportunities() {
  const { t } = useLanguage();
  const items = [
    {
      icon: User,
      key: "As a Consumer",
      title: t({ en: "As a Consumer", hi: "उपभोक्ता के रूप में" }),
      to: "/opportunities/consumer",
    },
    {
      icon: Store,
      key: "As a Merchant",
      title: t({ en: "As a Merchant", hi: "व्यापारी के रूप में" }),
      to: "/opportunities/merchant",
    },
    {
      icon: TrendingUp,
      key: "As an Investor",
      title: t({ en: "As an Investor", hi: "निवेशक के रूप में" }),
      to: "/opportunities/investor",
    },
    {
      icon: BriefcaseBusiness,
      key: "As a Career",
      title: t({ en: "As a Career", hi: "करियर के रूप में" }),
      to: "/opportunities/career",
    },
  ];
  return (
    <section id="opportunities" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t({ en: "Opportunities", hi: "अवसर" })}
          title={t({ en: "Explore Opportunities", hi: "अवसरों की खोज करें" })}
          subtitle={language === "en" ? "Join the Pavitram India community in a role that suits your goals." : undefined}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((it) => (
            <motion.div key={it.key} variants={fadeUp} whileHover={{ y: -6 }} className="flex">
              <Link
                to={it.to}
                className="group flex flex-1 flex-col items-center justify-between rounded-[20px] border border-haze bg-white p-7 text-center card-shadow transition-all hover:border-gold hover:card-shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                    <it.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{it.title}</h3>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition group-hover:text-gold">
                  {t({ en: "Register", hi: "पंजीकरण करें" })} <ArrowRight className="h-4 w-4" />
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
  const { t } = useLanguage();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div className="absolute inset-0 animate-spin-slower rounded-full border border-gold/30" />
      <div className="absolute inset-[14%] animate-spin-reverse rounded-full border border-gold/40" />
      <div className="absolute inset-[28%] animate-spin-slow rounded-full border border-gold/50" />

      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-haze px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mist">
        {t({ en: "Country", hi: "देश / राष्ट्र" })}
      </span>
      <span className="absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-mist shadow">
        {t({ en: "Society", hi: "समाज" })}
      </span>
      <span className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-haze px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink shadow">
        {t({ en: "Family", hi: "परिवार" })}
      </span>
    </div>
  );
}

function Network({ onOpenModal }: { onOpenModal: (data: ModalData) => void }) {
  const { t, language } = useLanguage();
  const feats = [
    {
      icon: Factory,
      key: "Manufacturer",
      title: t({ en: "Manufacturer", hi: "उत्पादक / निर्माता" }),
      text: t({
        en: "Connecting local production units and raw material processors to build strong domestic supply chains.",
        hi: "मजबूत घरेलू आपूर्ति श्रृंखला बनाने के लिए स्थानीय उत्पादन इकाइयों और कच्चे माल के प्रसंस्करणकर्ताओं को जोड़ना।"
      }),
    },
    {
      icon: Warehouse,
      key: "Wholesaler",
      title: t({ en: "Wholesaler", hi: "थोक व्यापारी" }),
      text: t({
        en: "Facilitating bulk inventory distribution and regional trade connectivity within the ecosystem.",
        hi: "पारिस्थितिकी तंत्र के भीतर थोक सूची वितरण और क्षेत्रीय व्यापार संपर्क की सुविधा प्रदान करना।"
      }),
    },
    {
      icon: Store,
      key: "Retailer",
      title: t({ en: "Retailer", hi: "खुदरा विक्रेता" }),
      text: t({
        en: "Powering local storefronts and retail markets to deliver products directly to community consumers.",
        hi: "सामुदायिक उपभोक्ताओं को सीधे उत्पाद वितरित करने के लिए स्थानीय दुकानों और खुदरा बाजारों को सशक्त बनाना।"
      }),
    },
    {
      icon: Wrench,
      key: "Service Provider",
      title: t({ en: "Service Provider", hi: "सेवा प्रदाता" }),
      text: t({
        en: "Deploying professional skills, digital services, and household maintenance directly to members.",
        hi: "पेशेवर कौशल, डिजिटल सेवाएं और घरेलू रखरखाव सीधे सदस्यों तक पहुँचाना।"
      }),
    },
  ];

  const stats = [
    { icon: UsersRound, value: 10000, suffix: "+", label: t({ en: "Community Members", hi: "सामुदायिक सदस्य" }) },
    { icon: Cpu, value: 12, suffix: "", label: t({ en: "Service Sectors", hi: "सेवा क्षेत्र" }) },
    { icon: BookOpen, value: 27, suffix: "", label: t({ en: "Golden Rules", hi: "स्वर्ण नियम" }) },
    { icon: Globe, value: 15, suffix: "+", label: t({ en: "States Covered", hi: "कवर किए गए राज्य" }) },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <GoldLabel>{t({ en: "Business Network", hi: "व्यापार नेटवर्क" })}</GoldLabel>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-ink md:text-[52px]">
            {t({ en: "The Pavitram Business Network", hi: "पवित्रम बिजनेस नेटवर्क" })}
          </h2>
          <p className="mt-4 font-display text-xl italic text-gold">
            {t({ en: "Cooperative. Transparent. Nationwide.", hi: "सहकारी। पारदर्शी। राष्ट्रव्यापी।" })}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-mist">
            {t({
              en: "Pavitram India is a professionally managed cooperative business network and a self-reliant community where the needs of members are fulfilled by the members themselves.",
              hi: "पवित्रम इंडिया एक पेशेवर रूप से प्रबंधित सहकारी व्यवसाय नेटवर्क और एक आत्मनिर्भर समुदाय है जहाँ सदस्यों की आवश्यकताओं को स्वयं सदस्यों द्वारा पूरा किया जाता है।"
            })}
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
              key={f.key}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => onOpenModal(NETWORK_MODALS[f.key])}
              className="group cursor-pointer flex flex-col justify-between rounded-[20px] border border-transparent bg-white p-7 card-shadow transition-all duration-300 hover:border-gold"
            >
              <div className="text-center flex flex-col items-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-6 font-display text-xl font-bold text-ink">{f.title}</h4>
                <p className="mt-3 text-sm leading-[1.7] text-mist">{f.text}</p>
              </div>
              <div className="mt-5 text-center">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold transition group-hover:gap-2">
                  {t({ en: "Click to explore", hi: "अन्वेषण करने के लिए क्लिक करें" })} <ArrowRight className="h-3.5 w-3.5" />
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
              {t({ en: "Learn About Our Network", hi: "हमारे नेटवर्क के बारे में जानें" })} <ArrowRight className="h-4 w-4" />
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
  const { t } = useLanguage();
  const items = [
    {
      key: "suresh",
      quote: t({
        en: "Pavitram India helped me understand my constitutional rights and connect with others who share the same values of equality and dignity.",
        hi: "पवित्रम इंडिया ने मुझे मेरे संवैधानिक अधिकारों को समझने और उन लोगों से जुड़ने में मदद की जो समानता और गरिमा के समान मूल्यों को साझा करते हैं।"
      }),
      name: t({ en: "Suresh Kumar", hi: "सुरेश कुमार" }),
      initial: "S",
      role: t({ en: "Government Employee · Bhopal", hi: "सरकारी कर्मचारी · भोपाल" }),
    },
    {
      key: "meena",
      quote: t({
        en: "As a small business owner, I found a community that supports ethical business practices and gives me access to genuine customers.",
        hi: "एक छोटे व्यवसाय के मालिक के रूप में, मुझे एक ऐसा समुदाय मिला जो नैतिक व्यावसायिक प्रथाओं का समर्थन करता है और मुझे वास्तविक ग्राहकों तक पहुंच प्रदान करता है।"
      }),
      name: t({ en: "Meena Devi", hi: "मीना देवी" }),
      initial: "M",
      role: t({ en: "Business Associate · Indore", hi: "व्यावसायिक सहयोगी · इंदौर" }),
    },
    {
      key: "ramesh",
      quote: t({
        en: "The health guidance and cooperative services have genuinely improved our family's quality of life. This is real community support.",
        hi: "स्वास्थ्य मार्गदर्शन और सहकारी सेवाओं ने वास्तव में हमारे परिवार के जीवन की गुणवत्ता में सुधार किया है। यह वास्तविक सामुदायिक समर्थन है।"
      }),
      name: t({ en: "Ramesh Patel", hi: "रमेश पटेल" }),
      initial: "R",
      role: t({ en: "Community Member · Jabalpur", hi: "सामुदायिक सदस्य · जबलपुर" }),
    },
    {
      key: "sunita",
      quote: t({
        en: "Through Pavitram Gyan and Rozgar, our youth are gaining valuable skills and dignified employment right within our region.",
        hi: "पवित्रम ज्ञान और रोजगार के माध्यम से, हमारे युवाओं को हमारे क्षेत्र के भीतर ही मूल्यवान कौशल और सम्मानजनक रोजगार मिल रहा है।"
      }),
      name: t({ en: "Sunita Sharma", hi: "सुनीता शर्मा" }),
      initial: "S",
      role: t({ en: "Education Coordinator · Gwalior", hi: "शिक्षा समन्वयक · ग्वालियर" }),
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={t({ en: "Community Voices", hi: "सामुदायिक स्वर" })}
          title={t({ en: "What Our Members Say", hi: "हमारे सदस्य क्या कहते हैं" })}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((t) => (
            <motion.div
              key={t.key}
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
