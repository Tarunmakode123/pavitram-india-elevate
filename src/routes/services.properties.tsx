import { createFileRoute } from "@tanstack/react-router";
import { Building2, Home, Key, TrendingUp, ShieldCheck, MapPin } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/properties")({
  head: () => ({
    meta: [
      { title: "Pavitram Properties — Complete Real Estate Solutions" },
      { name: "description", content: "Your complete solution for every property need in India." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "properties",
        name: "Pavitram Properties",
        hindi: "पवित्रम प्रॉपर्टीज",
        tagline: "Your complete solution for every property need in India",
        heroIcon: Building2,
        aboutTitle: "About Pavitram Properties",
        aboutP1:
          "Pavitram Properties offers a trustworthy, transparent environment for buying, selling, renting, and investing in real estate across India.",
        aboutP2:
          "We eliminate fraudulent listings and hidden brokerage fees by connecting verified property owners directly with genuine buyers within our ethical cooperative network.",
        pills: ["Verified Listings", "Legal Support", "Pan-India"],
        whyUs: [
          "100% verified properties with legal due diligence",
          "Transparent pricing with zero hidden commissions",
          "Expert legal and documentation assistance",
        ],
        features: [
          {
            icon: Home,
            title: "Buy & Sell",
            desc: "Residential houses, plots, and commercial spaces.",
          },
          {
            icon: Key,
            title: "Rental Solutions",
            desc: "Hassle-free renting for tenants and owners.",
          },
          {
            icon: TrendingUp,
            title: "Real Estate Investment",
            desc: "High-growth group investment opportunities.",
          },
          {
            icon: ShieldCheck,
            title: "Legal Support",
            desc: "Title verification and agreement assistance.",
          },
          {
            icon: Building2,
            title: "Property Valuation",
            desc: "Accurate market valuation reports.",
          },
          {
            icon: MapPin,
            title: "Pan-India Listings",
            desc: "Properties spanning major cities and towns.",
          },
        ],
        steps: [
          {
            num: "01",
            title: "List / Search",
            desc: "Post your property or search verified listings.",
          },
          { num: "02", title: "Verify", desc: "Review legal documentation and site details." },
          { num: "03", title: "Negotiate", desc: "Connect directly with owners for fair deals." },
          { num: "04", title: "Close Deal", desc: "Complete transfer with our guided assistance." },
        ],
      }}
    />
  ),
});
