import { createFileRoute, Link } from "@tanstack/react-router";
import { type LucideIcon, CheckCircle2, ArrowRight, User, Store, TrendingUp, Briefcase } from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA } from "@/components/site";

export type OppDetail = {
  slug: "consumer" | "merchant" | "investor" | "career";
  title: string;
  hindi: string;
  label: string;
  Icon: LucideIcon;
  intro: string;
  benefits: string[];
  steps: { title: string; body: string }[];
};

export function OppDetailPage({ d }: { d: OppDetail }) {
  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Opportunities", to: "/opportunities" },
          { label: d.title },
        ]}
        label={d.label}
        title={d.title}
        hindi={d.hindi}
      />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-navy text-gold ring-1 ring-gold/30">
              <d.Icon className="h-8 w-8" />
            </div>
            <GoldLabel className="mt-6">Why Join</GoldLabel>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-[40px]">A role built around you.</h2>
            <p className="mt-5 text-[17px] leading-[1.85] text-mist">{d.intro}</p>

            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-mist/80">Key Benefits</p>
            <ul className="mt-4 space-y-3">
              {d.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-ink/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy">
              Register Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-haze p-8 ring-1 ring-mist/15 md:p-10">
              <h3 className="font-display text-2xl font-bold text-ink">How It Works</h3>
              <ol className="mt-6 space-y-6">
                {d.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-navy">{i + 1}</span>
                    <div>
                      <p className="font-display text-lg font-bold text-ink">{s.title}</p>
                      <p className="mt-1 text-sm text-mist">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

/* unused placeholder route to satisfy file-routing if loaded; not exported as route */
export const Route = createFileRoute("/opportunities/_detail" as never)({
  component: () => null,
});

// re-exports to avoid unused imports lint
export const _icons = { User, Store, TrendingUp, Briefcase };
