import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  Briefcase,
  Building2,
  MapPin,
  UserCheck,
  Loader2,
  CheckCircle2,
  ShieldCheck,
  UsersRound,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA, showToast } from "@/components/site";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Community — Pavitram India" },
      {
        name: "description",
        content:
          "Register to join Pavitram India cooperative community business network. Access 12 core services, growth opportunities, and peer support.",
      },
      { property: "og:title", content: "Join Pavitram India Community" },
      {
        property: "og:description",
        content: "Register to join our nationwide cooperative network.",
      },
    ],
  }),
  component: JoinPage,
});

type JoinForm = {
  name: string;
  mobile: string;
  email: string;
  profession: string;
  designation: string;
  organization: string;
  location: string;
  reference: string;
};

function Field({
  label,
  hindi,
  required,
  children,
}: {
  label: string;
  hindi: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-ink/80">
        <span>
          {label}
          {required && <span className="text-gold"> *</span>}
        </span>
        <span className="font-deva font-semibold text-gold text-[12px] capitalize">{hindi}</span>
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-[12px] border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,149,42,0.18)]";

function JoinPage() {
  const [f, setF] = useState<JoinForm>({
    name: "",
    mobile: "",
    email: "",
    profession: "",
    designation: "",
    organization: "",
    location: "",
    reference: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof JoinForm>(k: K, v: JoinForm[K]) => setF((p) => ({ ...p, [k]: v }));

  const submit = async () => {
    if (
      !f.name ||
      !f.mobile ||
      !f.email ||
      !f.profession ||
      !f.designation ||
      !f.organization ||
      !f.location
    ) {
      showToast("Please fill all required fields (*)");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
    showToast("Application submitted successfully!");
  };

  const resetForm = () => {
    setSubmitted(false);
    setF({
      name: "",
      mobile: "",
      email: "",
      profession: "",
      designation: "",
      organization: "",
      location: "",
      reference: "",
    });
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Join Community" }]}
        label="JOIN COMMUNITY"
        title="Become a Community Member"
        hindi="समुदाय में शामिल हों"
        subtitle="Fill in your details below to register with Pavitram India and connect with 10,000+ network partners across India."
      />

      <section className="bg-haze py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            {/* Left: Registration Form */}
            <Reveal className="rounded-[24px] border border-gold/30 bg-white p-8 md:p-12 card-shadow relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-gold via-navy to-gold" />

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#FDF3E0] text-gold ring-4 ring-gold/20">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold text-ink">
                    Application Submitted!
                  </h3>
                  <p className="mt-2 font-deva text-lg font-semibold text-gold">
                    आपका आवेदन सफलतापूर्वक जमा हो गया है
                  </p>
                  <p className="mx-auto mt-4 max-w-lg text-mist text-[15px] leading-relaxed">
                    Thank you, <span className="font-bold text-ink">{f.name}</span>. Our membership
                    orientation team will verify your details and connect with you at{" "}
                    <span className="font-bold text-ink">{f.mobile}</span> shortly.
                  </p>

                  <div className="mt-8 rounded-2xl bg-haze p-6 text-left border border-haze max-w-md mx-auto">
                    <div className="text-xs font-bold uppercase tracking-wider text-gold">
                      Summary of Registration
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-ink/80">
                      <div>
                        <span className="font-semibold text-ink">Name:</span> {f.name}
                      </div>
                      <div>
                        <span className="font-semibold text-ink">Mobile:</span> {f.mobile}
                      </div>
                      <div>
                        <span className="font-semibold text-ink">Organization:</span>{" "}
                        {f.organization}
                      </div>
                      <div>
                        <span className="font-semibold text-ink">Location:</span> {f.location}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy cursor-pointer"
                  >
                    Submit Another Application <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#FDF3E0] text-gold">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink">
                        Membership Application Form
                      </h2>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                        सदस्यता पंजीकरण फार्म
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {/* 1. Name */}
                    <Field label="Full Name" hindi="नाम" required>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="e.g. Rajesh Makode"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 2. Mobile No */}
                    <Field label="Mobile Number" hindi="मोबाइल नंबर" required>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="tel"
                          value={f.mobile}
                          onChange={(e) => set("mobile", e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 3. E-mail */}
                    <Field label="E-mail Address" hindi="ईमेल" required>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="email"
                          value={f.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="e.g. rajesh@example.com"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 4. Profession */}
                    <Field label="Profession" hindi="व्यवसाय / पेशा" required>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.profession}
                          onChange={(e) => set("profession", e.target.value)}
                          placeholder="e.g. Business / Agriculture / Service"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 5. Designation */}
                    <Field label="Designation" hindi="पद / पदनाम" required>
                      <div className="relative">
                        <UserCheck className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.designation}
                          onChange={(e) => set("designation", e.target.value)}
                          placeholder="e.g. Proprietor / Manager / Executive"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 6. Organization */}
                    <Field label="Organization" hindi="संस्था / कंपनी" required>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.organization}
                          onChange={(e) => set("organization", e.target.value)}
                          placeholder="e.g. Pavitram Store / Self Employed"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 7. Location */}
                    <Field label="Location (City & State)" hindi="स्थान / शहर / राज्य" required>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.location}
                          onChange={(e) => set("location", e.target.value)}
                          placeholder="e.g. Indore, Madhya Pradesh"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 8. Reference */}
                    <Field label="Reference (Optional)" hindi="संदर्भ / किसके माध्यम से जुड़े">
                      <div className="relative">
                        <UsersRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.reference}
                          onChange={(e) => set("reference", e.target.value)}
                          placeholder="e.g. Referred by Member Name / Code"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>
                  </div>

                  <div className="mt-10 pt-6 border-t border-haze flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-mist">
                      By submitting this form, you agree to follow Pavitram India's 27 Golden Rules.
                    </p>
                    <button
                      onClick={submit}
                      disabled={sending}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-navy px-9 py-4 font-bold text-white transition hover:bg-gold hover:text-navy disabled:opacity-60 cursor-pointer"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </Reveal>

            {/* Right: Benefits Sidebar */}
            <div className="space-y-6">
              <Reveal className="rounded-[24px] bg-navy p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
                <GoldLabel>WHY JOIN US</GoldLabel>
                <h3 className="mt-4 font-display text-2xl font-bold">Pavitram India Ecosystem</h3>
                <p className="mt-1 font-deva text-sm font-semibold text-gold">
                  हमारा नेटवर्क एवं लाभ
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                      <UsersRound className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white">10,000+ Members</div>
                      <div className="mt-1 text-xs text-white/70">
                        Connect directly with verified businesses and families across 15+ states.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white">12 Core Services</div>
                      <div className="mt-1 text-xs text-white/70">
                        Access Pavitram Mart, Finance, Wellness, Rozgar, Gyan & Property services.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Transparent Cooperative</div>
                      <div className="mt-1 text-xs text-white/70">
                        Operated with absolute integrity, zero debt trap, and shared community
                        returns.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="rounded-[24px] border border-gold/30 bg-white p-6 card-shadow text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-gold">
                  Need Help?
                </div>
                <div className="mt-2 font-display text-lg font-bold text-ink">
                  Membership Helpline
                </div>
                <p className="mt-1 text-xs text-mist">
                  Our community support leads are available Monday - Saturday.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-navy">
                  <Phone className="h-4 w-4 text-gold" /> +91 98765 43210
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
