import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Wallet, TrendingUp, ShieldCheck, PieChart, Calculator } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/finance")({
  head: () => ({
    meta: [
      { title: "Pavitram Finance — Transparent Cooperative Banking & Returns" },
      {
        name: "description",
        content: "Transparent banking, smart investment, and cooperative returns.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "finance",
        name: "Pavitram Finance",
        hindi: "पवित्रम फाइनेंस",
        tagline: "Transparent banking, smart investment, and cooperative returns",
        heroIcon: Landmark,
        aboutTitle: "About Pavitram Finance",
        aboutP1:
          "Pavitram Finance provides transparent financial services, cooperative investment plans, and micro-loan assistance to foster economic independence.",
        aboutP2:
          "By pooling community resources ethically, members enjoy strong returns of 12%+ through real business asset investments while protecting family capital.",
        pills: ["12%+ Returns", "Transparent KYC", "Cooperative Finance"],
        whyUs: [
          "Proven cooperative return model generating 12%+ annually",
          "Ethical micro-loans for small businesses and farmers",
          "Total transparency in fund allocation and security",
        ],
        features: [
          {
            icon: Wallet,
            title: "Banking Solutions",
            desc: "Cooperative savings accounts and digital transfers.",
          },
          {
            icon: Landmark,
            title: "Loans Assistance",
            desc: "Fair-rate business and personal micro-loans.",
          },
          {
            icon: TrendingUp,
            title: "Investment Plans",
            desc: "High-yield cooperative asset investment pools.",
          },
          {
            icon: ShieldCheck,
            title: "Insurance Cover",
            desc: "Life and health security options for families.",
          },
          {
            icon: PieChart,
            title: "12%+ Cooperative Returns",
            desc: "Share in community growth and business profits.",
          },
          {
            icon: Calculator,
            title: "Financial Planning",
            desc: "Expert guidance for wealth preservation.",
          },
        ],
        steps: [
          { num: "01", title: "Register", desc: "Sign up for financial member services." },
          { num: "02", title: "KYC Verification", desc: "Complete basic identity verification." },
          { num: "03", title: "Choose Plan", desc: "Select savings, loan, or investment pools." },
          {
            num: "04",
            title: "Earn Returns",
            desc: "Track earnings and build financial security.",
          },
        ],
      }}
    />
  ),
});
