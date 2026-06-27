import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Home, ShieldCheck, Zap, UserCheck, Clock } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/services")({
  head: () => ({
    meta: [
      { title: "Pavitram Services — Verified Household & Maintenance Services" },
      {
        name: "description",
        content: "Every home service you need, delivered with trust and quality.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "services",
        name: "Pavitram Services",
        hindi: "पवित्रम सर्विसेज",
        tagline: "Every home service you need, delivered with trust and quality",
        heroIcon: Wrench,
        aboutTitle: "About Pavitram Services",
        aboutP1:
          "Pavitram Services delivers trusted home maintenance, housekeeping, repair, and security solutions directly to your doorstep.",
        aboutP2:
          "All our service technicians and professionals undergo thorough background checks and skill certifications to guarantee safety, quality, and fair pricing.",
        pills: ["Verified Pros", "On-Demand", "Transparent Rates"],
        whyUs: [
          "Rigorous background checks on every technician",
          "Fixed cooperative pricing with no surprise charges",
          "Guaranteed satisfaction and prompt service delivery",
        ],
        features: [
          {
            icon: Home,
            title: "Home Maintenance",
            desc: "Carpentry, painting, and general household repairs.",
          },
          {
            icon: Zap,
            title: "Plumbing & Electrical",
            desc: "Certified technicians for urgent home fixes.",
          },
          {
            icon: ShieldCheck,
            title: "Security Services",
            desc: "Trained security personnel for homes and events.",
          },
          {
            icon: UserCheck,
            title: "Housekeeping",
            desc: "Professional cleaning and sanitation services.",
          },
          {
            icon: UserCheck,
            title: "Verified Professionals",
            desc: "ID-verified and background-tested staff.",
          },
          {
            icon: Clock,
            title: "On-Demand Booking",
            desc: "Easy scheduling via app or phone call.",
          },
        ],
        steps: [
          { num: "01", title: "Book", desc: "Select the service needed and choose a time." },
          {
            num: "02",
            title: "Verified Pro Assigned",
            desc: "Receive technician details and ETA.",
          },
          { num: "03", title: "Service Done", desc: "Work completed with high quality." },
          { num: "04", title: "Review", desc: "Pay transparently and share your experience." },
        ],
      }}
    />
  ),
});
