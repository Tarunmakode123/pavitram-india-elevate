import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu, ShoppingBag, Building2, HeartPulse, BookOpen, Landmark,
  Plane, Heart, Briefcase, Wrench, Radio, Truck,
} from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pavitram India" },
      { name: "description", content: "Twelve cooperative services — from technology and retail to wellness, education, finance, travel and matrimonial." },
      { property: "og:title", content: "Pavitram Services" },
      { property: "og:description", content: "12 cooperative services unified under one network." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { Icon: Cpu, name: "Pavitram Technology", body: "Digital platforms, software and tech enablement for the community." },
  { Icon: ShoppingBag, name: "Pavitram Mart", body: "Multi-vendor B2B and B2C e-commerce at fair cooperative prices." },
  { Icon: Building2, name: "Pavitram Properties", body: "Complete real-estate solutions — buy, sell, rent and invest." },
  { Icon: HeartPulse, name: "Pavitram Wellness", body: "Holistic wellness, preventive care and trusted healthcare access." },
  { Icon: BookOpen, name: "Pavitram Shiksha", body: "Awareness, skill development and equal education access for all." },
  { Icon: Landmark, name: "Pavitram Finance", body: "Cooperative finance, investments and transparent funding." },
  { Icon: Plane, name: "Pavitram Travels", body: "Community travel, pilgrimage and curated experiences." },
  { Icon: Heart, name: "Pavitram Matrimonial", body: "Trusted matchmaking within an ethical community network." },
  { Icon: Briefcase, name: "Pavitram Naukari", body: "Dignified employment matched to qualifications and interest." },
  { Icon: Wrench, name: "Pavitram Services", body: "Verified local services for everyday household needs." },
  { Icon: Radio, name: "Pavitram Media", body: "Community-driven storytelling, news and creator platform." },
  { Icon: Truck, name: "Pavitram Delivery", body: "Last-mile logistics powered by the cooperative network." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
        label="Our Services"
        title="Twelve Pillars of Self-Reliance"
        hindi="हमारी सेवाएँ"
        subtitle="Every essential service families need — built cooperatively, owned collectively, delivered transparently."
      />

      <section className="bg-haze py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <GoldLabel>All Services</GoldLabel>
            <h2 className="mt-5 font-display text-4xl font-bold text-ink md:text-[48px]">One Network. Twelve Services.</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 0.05}>
                <div className="group relative h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(13,27,62,0.2)]">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold ring-1 ring-gold/30">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
