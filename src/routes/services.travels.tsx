import { createFileRoute } from "@tanstack/react-router";
import { Plane, Map, Hotel, Users, Tag, ShieldCheck } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/travels")({
  head: () => ({
    meta: [
      { title: "Pavitram Travels — Curated Tours & Cooperative Travel" },
      { name: "description", content: "Complete travel solutions for the Pavitram community." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "travels",
        name: "Pavitram Travels",
        hindi: "पवित्रम ट्रेवल्स",
        tagline: "Complete travel solutions for the Pavitram community",
        heroIcon: Plane,
        aboutTitle: "About Pavitram Travels",
        aboutP1:
          "Pavitram Travels provides seamless, affordable, and joyful travel services for families, groups, and business associates throughout India.",
        aboutP2:
          "From sacred pilgrimage tours to family vacations and corporate retreats, our cooperative booking network delivers exclusive discounts and dedicated support.",
        pills: ["Pilgrimage Tours", "Group Discounts", "End-to-End"],
        whyUs: [
          "Curated spiritual and cultural itineraries",
          "Exclusive cooperative rates on hotels and transport",
          "Dedicated group coordinators ensuring safe journeys",
        ],
        features: [
          {
            icon: Map,
            title: "Tour Packages",
            desc: "Customized domestic and pilgrimage tour itineraries.",
          },
          {
            icon: Plane,
            title: "Travel Booking",
            desc: "Flight, train, and bus ticket reservations.",
          },
          {
            icon: Hotel,
            title: "Hotel Stays",
            desc: "Verified hotel accommodations at negotiated prices.",
          },
          {
            icon: Users,
            title: "Group Tours",
            desc: "Community group trips with shared camaraderie.",
          },
          {
            icon: Tag,
            title: "Cooperative Discounts",
            desc: "Special savings for registered community members.",
          },
          {
            icon: ShieldCheck,
            title: "Travel Insurance",
            desc: "Coverage for hassle-free and safe travel.",
          },
        ],
        steps: [
          { num: "01", title: "Plan", desc: "Select your desired destination or pilgrimage." },
          { num: "02", title: "Book", desc: "Confirm transport and stay with cooperative rates." },
          { num: "03", title: "Travel", desc: "Enjoy organized support throughout your trip." },
          { num: "04", title: "Enjoy Savings", desc: "Experience memorable journeys for less." },
        ],
      }}
    />
  ),
});
