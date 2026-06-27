import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, Store, Tag, Truck, ShieldCheck, Layers } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/mart")({
  head: () => ({
    meta: [
      { title: "Pavitram Mart — Cooperative B2B & B2C Marketplace" },
      { name: "description", content: "One platform. Every product. Fair cooperative prices." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "mart",
        name: "Pavitram Mart",
        hindi: "पवित्रम मार्ट",
        tagline: "One platform. Every product. Fair cooperative prices.",
        heroIcon: ShoppingBag,
        aboutTitle: "About Pavitram Mart",
        aboutP1:
          "Pavitram Mart connects consumers, producers, and merchants on a single unified marketplace. By eliminating unnecessary middlemen, we deliver high-quality products at genuine cooperative prices.",
        aboutP2:
          "Whether you are sourcing raw materials for your business or buying daily household groceries, Pavitram Mart guarantees quality, transparency, and timely delivery.",
        pills: ["Multi-Vendor", "B2B & B2C", "Fair Pricing"],
        whyUs: [
          "Direct producer-to-consumer marketplace model",
          "Unbeatable cooperative savings and discounts",
          "Rigorous quality verification for every listing",
        ],
        features: [
          {
            icon: Layers,
            title: "Multi-Category Products",
            desc: "Groceries, electronics, apparel, and agricultural goods.",
          },
          {
            icon: Store,
            title: "Multi-Vendor Platform",
            desc: "Empowering local manufacturers and merchants.",
          },
          {
            icon: Tag,
            title: "B2B & B2C Commerce",
            desc: "Serving both wholesale businesses and individual homes.",
          },
          { icon: Tag, title: "Fair Pricing", desc: "Cooperative rates ensuring max savings." },
          {
            icon: Truck,
            title: "Fast Delivery",
            desc: "Reliable logistics straight to your doorstep.",
          },
          {
            icon: ShieldCheck,
            title: "Quality Assured",
            desc: "Verified products backed by customer guarantees.",
          },
        ],
        steps: [
          {
            num: "01",
            title: "Browse",
            desc: "Explore thousands of verified cooperative products.",
          },
          { num: "02", title: "Select", desc: "Add items to your cart at transparent prices." },
          { num: "03", title: "Order", desc: "Checkout securely using member payments." },
          {
            num: "04",
            title: "Delivered to You",
            desc: "Receive doorstep delivery with full satisfaction.",
          },
        ],
      }}
    />
  ),
});
