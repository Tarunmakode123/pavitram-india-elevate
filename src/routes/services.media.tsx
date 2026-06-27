import { createFileRoute } from "@tanstack/react-router";
import { Radio, Newspaper, Share2, Video, Users, Megaphone } from "lucide-react";
import { ServiceDetailPage } from "@/lib/service-detail";

export const Route = createFileRoute("/services/media")({
  head: () => ({
    meta: [
      { title: "Pavitram Media — Community Media & E-Paper" },
      {
        name: "description",
        content: "Truthful media, e-paper, and digital voice for our community.",
      },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      d={{
        slug: "media",
        name: "Pavitram Media",
        hindi: "पवित्रम मीडिया",
        tagline: "Truthful media, e-paper, and digital voice for our community",
        heroIcon: Radio,
        aboutTitle: "About Pavitram Media",
        aboutP1:
          "Pavitram Media is the constructive, truthful voice of our cooperative community, highlighting inspirational stories, local developments, and positive national progress.",
        aboutP2:
          "Through our digital e-papers, video channels, and social networks, we amplify ground reality, champion ethical journalism, and educate citizens.",
        pills: ["E-Paper", "Ethical News", "Member Stories"],
        whyUs: [
          "Unbiased, constructive journalism focused on community growth",
          "Digital e-paper access covering national and regional news",
          "Platform for local members to share their stories and achievements",
        ],
        features: [
          {
            icon: Newspaper,
            title: "E-Newspaper",
            desc: "Daily digital edition covering news and analysis.",
          },
          {
            icon: Share2,
            title: "Social Media",
            desc: "Engaging video channels and social updates.",
          },
          {
            icon: Megaphone,
            title: "Community News",
            desc: "Spotlighting regional developments and grassroots issues.",
          },
          {
            icon: Video,
            title: "Digital Content",
            desc: "Educational videos on health, finance, and rights.",
          },
          {
            icon: Users,
            title: "Member Stories",
            desc: "Inspirational profiles of self-reliant individuals.",
          },
          {
            icon: Megaphone,
            title: "Awareness Campaigns",
            desc: "Promoting social welfare and civic responsibility.",
          },
        ],
        steps: [
          { num: "01", title: "Subscribe", desc: "Access free digital media subscriptions." },
          { num: "02", title: "Read", desc: "Stay updated with daily e-papers and videos." },
          { num: "03", title: "Share", desc: "Spread positive news across your network." },
          { num: "04", title: "Stay Informed", desc: "Empower yourself with authentic knowledge." },
        ],
      }}
    />
  ),
});
