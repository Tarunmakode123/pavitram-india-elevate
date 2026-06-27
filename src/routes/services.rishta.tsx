import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Users, Lock, Award, HeartHandshake } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/rishta")({
  head: () => ({
    meta: [
      { title: "Pavitram Rishta — Trusted Matrimonial Network" },
      {
        name: "description",
        content: "Trusted matrimonial connections within a values-driven community.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "rishta",
        name: "Pavitram Rishta",
        hindi: "पवित्रम रिश्ता",
        tagline: "Trusted matrimonial connections within a values-driven community",
        heroIcon: HeartHandshake,
        aboutTitle: "About Pavitram Rishta",
        aboutP1:
          "Pavitram Rishta is a dignified matchmaking platform built on trust, traditional values, and verified family backgrounds.",
        aboutP2:
          "Unlike commercial matrimonial websites, we prioritize security, genuine compatibility, and cultural alignment within our ethical network.",
        pills: ["Verified Profiles", "Privacy Protected", "Family First"],
        whyUs: [
          "100% manually verified profiles within trusted network",
          "Complete privacy protection and respectful communication",
          "Guided family-to-family introductions and support",
        ],
        features: [
          {
            icon: ShieldCheck,
            title: "Verified Profiles",
            desc: "Background check for authenticity and trust.",
          },
          {
            icon: Heart,
            title: "Community Matching",
            desc: "Filter by values, education, and background.",
          },
          {
            icon: Users,
            title: "Family Connect",
            desc: "Facilitated meetings between respected families.",
          },
          {
            icon: Lock,
            title: "Privacy Protected",
            desc: "Contact details shared only upon mutual consent.",
          },
          {
            icon: Award,
            title: "Values Aligned",
            desc: "Connecting individuals who share cultural ethics.",
          },
          {
            icon: HeartHandshake,
            title: "Counseling Support",
            desc: "Pre-marriage guidance and family counseling.",
          },
        ],
        steps: [
          { num: "01", title: "Register", desc: "Create your confidential matchmaking profile." },
          {
            num: "02",
            title: "Create Profile",
            desc: "Add verified education, career, and family details.",
          },
          {
            num: "03",
            title: "Match",
            desc: "Discover compatible profiles aligned with your values.",
          },
          { num: "04", title: "Connect", desc: "Initiate dignified family conversations." },
        ],
      }}
    />
  ),
});
