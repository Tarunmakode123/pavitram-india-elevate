import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, Compass, Award, Stethoscope, Smile } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/foundation")({
  head: () => ({
    meta: [
      { title: "Pavitram Foundation — Social Welfare & Community Impact" },
      {
        name: "description",
        content: "Social welfare and community development at the heart of our mission.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "foundation",
        name: "Pavitram Foundation",
        hindi: "पवित्रम फाउंडेशन",
        tagline: "Social welfare and community development at the heart of our mission",
        heroIcon: Heart,
        aboutTitle: "About Pavitram Foundation",
        aboutP1:
          "Pavitram Foundation is the non-profit philanthropic arm of Pavitram India, driving grassroots social upliftment, disaster relief, and educational empowerment.",
        aboutP2:
          "We channel cooperative goodwill and resources into sustainable community development, empowering women, supporting underprivileged students, and organizing healthcare camps.",
        pills: ["Social Impact", "Scholarships", "Community Care"],
        whyUs: [
          "100% transparent utilization of charitable donations",
          "Direct grassroots impact in remote rural areas",
          "Focus on long-term self-reliance rather than temporary aid",
        ],
        features: [
          {
            icon: Users,
            title: "Community Welfare",
            desc: "Socio-economic support programs for vulnerable families.",
          },
          {
            icon: Heart,
            title: "Charitable Initiatives",
            desc: "Food drives, clothing distribution, and relief work.",
          },
          {
            icon: Compass,
            title: "Rural Development",
            desc: "Clean water, sanitation, and infrastructure projects.",
          },
          {
            icon: Award,
            title: "Education Scholarships",
            desc: "Financial aid for meritorious underprivileged youth.",
          },
          {
            icon: Stethoscope,
            title: "Health Camps",
            desc: "Free diagnostic clinics and medical aid.",
          },
          {
            icon: Smile,
            title: "Women Empowerment",
            desc: "Self-help groups and vocational skill centers for women.",
          },
        ],
        steps: [
          {
            num: "01",
            title: "Donate / Volunteer",
            desc: "Contribute resources or join ground teams.",
          },
          { num: "02", title: "Join Program", desc: "Participate in local community initiatives." },
          { num: "03", title: "Create Impact", desc: "Empower families with education and care." },
          {
            num: "04",
            title: "Transform Lives",
            desc: "Build a compassionate and self-reliant India.",
          },
        ],
      }}
    />
  ),
});
