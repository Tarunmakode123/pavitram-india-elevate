import { createFileRoute } from "@tanstack/react-router";
import { Cpu, ShieldCheck, Smartphone, Monitor, Wrench, Headphones, Lock } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/technology")({
  head: () => ({
    meta: [
      { title: "Pavitram Technology — Cooperative Tech Platform" },
      {
        name: "description",
        content: "Powering India's cooperative future with cutting-edge digital infrastructure.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "technology",
        name: "Pavitram Technology",
        hindi: "पवित्रम टेक्नोलॉजी",
        tagline: "Powering India's cooperative future with cutting-edge technology",
        heroIcon: Cpu,
        aboutTitle: "About Pavitram Technology",
        aboutP1:
          "Pavitram Technology is the digital backbone of our cooperative ecosystem. We develop modern, reliable, and secure software solutions that connect members across India.",
        aboutP2:
          "From member management portals to e-commerce and cooperative finance platforms, our goal is to empower every associate with digital tools for maximum efficiency.",
        pills: ["Digital Platform", "Secure Cloud", "Pan-India Connect"],
        whyUs: [
          "Enterprise-grade security protecting member data",
          "Seamless integration across all 12 service domains",
          "Dedicated 24/7 technical support and training",
        ],
        features: [
          {
            icon: Monitor,
            title: "Digital Platform",
            desc: "Intuitive web and mobile interfaces for easy access.",
          },
          {
            icon: Smartphone,
            title: "Mobile App",
            desc: "Manage your cooperative services anytime, anywhere.",
          },
          {
            icon: ShieldCheck,
            title: "Member Portal",
            desc: "Transparent access to accounts and transactions.",
          },
          {
            icon: Wrench,
            title: "Business Tools",
            desc: "Digital enablement for merchants and associates.",
          },
          {
            icon: Lock,
            title: "Data Security",
            desc: "End-to-end encryption ensuring total privacy.",
          },
          {
            icon: Headphones,
            title: "Tech Support",
            desc: "Continuous assistance for all technical needs.",
          },
        ],
        steps: [
          {
            num: "01",
            title: "Register",
            desc: "Create your digital member account on the platform.",
          },
          {
            num: "02",
            title: "Set Up Profile",
            desc: "Configure your preferences and verify details.",
          },
          {
            num: "03",
            title: "Access Tools",
            desc: "Explore tech services and business dashboards.",
          },
          {
            num: "04",
            title: "Grow Digitally",
            desc: "Scale your reach within our cooperative network.",
          },
        ],
      }}
    />
  ),
});
