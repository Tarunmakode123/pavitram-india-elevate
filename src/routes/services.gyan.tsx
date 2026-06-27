import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Award, Compass, Globe, Compass as CompassIcon, Scale } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/gyan")({
  head: () => ({
    meta: [
      { title: "Pavitram Gyan — Skill Development & Education" },
      { name: "description", content: "Equal education and skill development for every Indian." },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "gyan",
        name: "Pavitram Gyan",
        hindi: "पवित्रम ज्ञान",
        tagline: "Equal education and skill development for every Indian",
        heroIcon: BookOpen,
        aboutTitle: "About Pavitram Gyan",
        aboutP1:
          "Pavitram Gyan focuses on empowering members through knowledge, practical skills, and awareness of constitutional rights and economic opportunities.",
        aboutP2:
          "We offer online and offline courses, vocational training, and leadership mentorship so that every youth and adult can achieve financial self-reliance.",
        pills: ["Skill Building", "Equal Access", "Career Guidance"],
        whyUs: [
          "Practical, employment-oriented skill courses",
          "Equal educational access regardless of economic background",
          "Awareness programs on constitutional duties and self-reliance",
        ],
        features: [
          {
            icon: Award,
            title: "Skill Development",
            desc: "Vocational and digital skill training for youth.",
          },
          {
            icon: Compass,
            title: "Awareness Programs",
            desc: "Workshops on legal rights and government schemes.",
          },
          {
            icon: BookOpen,
            title: "Equal Education",
            desc: "Scholarships and learning support for students.",
          },
          {
            icon: Globe,
            title: "Online Learning",
            desc: "Flexible digital courses accessible nationwide.",
          },
          {
            icon: CompassIcon,
            title: "Career Guidance",
            desc: "Mentorship for jobs and entrepreneurship.",
          },
          {
            icon: Scale,
            title: "Constitutional Education",
            desc: "Understanding civic duties and rights.",
          },
        ],
        steps: [
          { num: "01", title: "Enroll", desc: "Select a course or educational program." },
          { num: "02", title: "Learn", desc: "Participate in practical modules and mentorship." },
          { num: "03", title: "Apply Skills", desc: "Gain certifications and practical exposure." },
          { num: "04", title: "Grow", desc: "Unlock higher income and career growth." },
        ],
      }}
    />
  ),
});
