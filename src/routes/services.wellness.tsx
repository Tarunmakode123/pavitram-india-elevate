import { createFileRoute } from "@tanstack/react-router";
import { HeartPulse, Stethoscope, Activity, Smile, Apple, Users } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/wellness")({
  head: () => ({
    meta: [
      { title: "Pavitram Wellness — Holistic Health & Care" },
      {
        name: "description",
        content: "Healthy body, peaceful mind, and true wealth for every member.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "wellness",
        name: "Pavitram Wellness",
        hindi: "पवित्रम वेलनेस",
        tagline: "Healthy body, peaceful mind, and true wealth for every member",
        heroIcon: HeartPulse,
        aboutTitle: "About Pavitram Wellness",
        aboutP1:
          "Pavitram Wellness is dedicated to nurturing physical health, mental well-being, and preventive healthcare for our community members.",
        aboutP2:
          "We combine traditional wellness practices with modern medical access, offering health consultations, nutrition counseling, and cooperative discounts at top medical centers.",
        pills: ["Holistic Health", "Preventive Care", "Health Camps"],
        whyUs: [
          "Accessible healthcare consultations and expert advice",
          "Discounted diagnostics and medicine through network",
          "Regular community health camps in rural and urban areas",
        ],
        features: [
          {
            icon: Stethoscope,
            title: "Health Consultations",
            desc: "Access to verified doctors and wellness experts.",
          },
          {
            icon: Activity,
            title: "Wellness Programs",
            desc: "Yoga, fitness, and lifestyle management plans.",
          },
          {
            icon: HeartPulse,
            title: "Preventive Care",
            desc: "Regular checkups and early health risk detection.",
          },
          {
            icon: Smile,
            title: "Mental Wellness",
            desc: "Counseling and stress reduction initiatives.",
          },
          {
            icon: Apple,
            title: "Nutrition Guidance",
            desc: "Personalized diet and wholesome nutrition advice.",
          },
          {
            icon: Users,
            title: "Community Health Camps",
            desc: "Free medical screening camps across villages.",
          },
        ],
        steps: [
          { num: "01", title: "Join", desc: "Access the Pavitram Wellness network portal." },
          { num: "02", title: "Assess Health", desc: "Complete a basic wellness assessment." },
          { num: "03", title: "Get Plan", desc: "Receive customized healthcare guidance." },
          { num: "04", title: "Live Better", desc: "Enjoy long-term vitality and peace of mind." },
        ],
      }}
    />
  ),
});
