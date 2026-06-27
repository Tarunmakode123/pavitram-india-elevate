import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Building, Award, Users, DollarSign, TrendingUp } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/rozgar")({
  head: () => ({
    meta: [
      { title: "Pavitram Rozgar — Dignified Employment & Jobs" },
      {
        name: "description",
        content: "Dignified employment matching your qualifications and ambitions.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "rozgar",
        name: "Pavitram Rozgar",
        hindi: "पवित्रम रोजगार",
        tagline: "Dignified employment matching your qualifications and ambitions",
        heroIcon: Briefcase,
        aboutTitle: "About Pavitram Rozgar",
        aboutP1:
          "Pavitram Rozgar bridges job seekers and verified employers within our cooperative network, fostering dignified employment and entrepreneurship.",
        aboutP2:
          "We match individuals to roles that fit their exact qualifications, technical skills, and personal interests while ensuring fair compensation.",
        pills: ["Dignified Work", "Skill Matching", "Fair Wages"],
        whyUs: [
          "Direct linkage with growing businesses in our network",
          "No placement fees or exploitation for job seekers",
          "Equal employment opportunities for rural and urban candidates",
        ],
        features: [
          {
            icon: Briefcase,
            title: "Job Listings",
            desc: "Openings across technology, retail, finance, and services.",
          },
          {
            icon: Building,
            title: "Business Opportunities",
            desc: "Franchise and associate business models.",
          },
          {
            icon: Award,
            title: "Skill Matching",
            desc: "AI-assisted pairing of candidate skills with jobs.",
          },
          {
            icon: Users,
            title: "Employer Connect",
            desc: "Direct interviews with verified network employers.",
          },
          {
            icon: DollarSign,
            title: "Fair Wages",
            desc: "Ensuring timely and respectful compensation.",
          },
          {
            icon: TrendingUp,
            title: "Career Growth",
            desc: "Continuous skill upgrading and promotion pathways.",
          },
        ],
        steps: [
          { num: "01", title: "Register", desc: "Create your employment seeker profile." },
          {
            num: "02",
            title: "Upload Skills",
            desc: "Detail your experience, education, and interests.",
          },
          { num: "03", title: "Match Jobs", desc: "Get recommendations tailored to your goals." },
          {
            num: "04",
            title: "Get Hired",
            desc: "Secure dignified work in our cooperative ecosystem.",
          },
        ],
      }}
    />
  ),
});
