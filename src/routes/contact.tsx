import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  User,
  HelpCircle,
  Building,
  UserPlus,
  ArrowRight,
  Globe,
} from "lucide-react";
import { PageHero, Reveal, GoldLabel, FinalCTA, showToast } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Pavitram India Help Center" },
      {
        name: "description",
        content:
          "Get in touch with Pavitram India headquarters, regional support hubs, or helpline. Send quick inquiries or find office locations.",
      },
      { property: "og:title", content: "Contact Pavitram India Help Center" },
      { property: "og:description", content: "Reach our cooperative community support team." },
    ],
  }),
  component: ContactPage,
});

type QuickInquiryForm = {
  name: string;
  contact: string;
  subject: string;
  message: string;
};

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Business & Trade Association",
  "Member Service Support",
  "Media & Press",
  "Suggestions & Feedback",
];

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
        <span className="font-deva font-semibold text-gold text-[12px]">{hindi}</span>
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-[12px] border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm text-ink outline-none transition focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,149,42,0.18)]";

function ContactPage() {
  const [f, setF] = useState<QuickInquiryForm>({
    name: "",
    contact: "",
    subject: "General Inquiry",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof QuickInquiryForm>(k: K, v: QuickInquiryForm[K]) =>
    setF((p) => ({ ...p, [k]: v }));

  const submit = async () => {
    if (!f.name || !f.contact || !f.message) {
      showToast("Please fill all required fields (*)");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1100));
    setSending(false);
    setSubmitted(true);
    showToast("Message sent! Our support team will get back to you shortly.");
  };

  const resetForm = () => {
    setSubmitted(false);
    setF({
      name: "",
      contact: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
        label="CONTACT US"
        title="Contact & Help Center"
        hindi="हमसे संपर्क करें"
        subtitle="Have questions, partnership inquiries, or need support? Reach out to our dedicated cooperative support team."
      />

      {/* Top 4 Floating Action Cards */}
      <section className="bg-haze pt-12 pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Phone */}
            <Reveal delay={0.05}>
              <div className="group flex flex-col justify-between rounded-[20px] bg-white p-6 card-shadow transition-all hover:card-shadow-lg hover:border-gold border border-transparent">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">Call Support</h3>
                  <p className="mt-1 font-deva text-xs font-semibold text-gold">फोन हेल्पलाइन</p>
                  <p className="mt-3 text-sm text-mist">+91 98765 43210</p>
                  <p className="text-xs text-mist/80">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
                <a
                  href="tel:+919876543210"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition group-hover:gap-2"
                >
                  Call Now <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>

            {/* 2. Email */}
            <Reveal delay={0.1}>
              <div className="group flex flex-col justify-between rounded-[20px] bg-white p-6 card-shadow transition-all hover:card-shadow-lg hover:border-gold border border-transparent">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">Official Email</h3>
                  <p className="mt-1 font-deva text-xs font-semibold text-gold">ईमेल सहायता</p>
                  <p className="mt-3 text-sm text-mist">info@pavitramindia.org</p>
                  <p className="text-xs text-mist/80">support@pavitramindia.org</p>
                </div>
                <a
                  href="mailto:info@pavitramindia.org"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition group-hover:gap-2"
                >
                  Send Email <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>

            {/* 3. Office */}
            <Reveal delay={0.15}>
              <div className="group flex flex-col justify-between rounded-[20px] bg-white p-6 card-shadow transition-all hover:card-shadow-lg hover:border-gold border border-transparent">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">Headquarters</h3>
                  <p className="mt-1 font-deva text-xs font-semibold text-gold">मुख्य कार्यालय</p>
                  <p className="mt-3 text-sm text-mist">Pavitram India Elevate Hub</p>
                  <p className="text-xs text-mist/80">Indore & Bhopal, Madhya Pradesh</p>
                </div>
                <a
                  href="#locations"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition group-hover:gap-2"
                >
                  View Locations <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>

            {/* 4. WhatsApp */}
            <Reveal delay={0.2}>
              <div className="group flex flex-col justify-between rounded-[20px] bg-white p-6 card-shadow transition-all hover:card-shadow-lg hover:border-gold border border-transparent">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FDF3E0] text-gold transition group-hover:bg-gold group-hover:text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">Instant Connect</h3>
                  <p className="mt-1 font-deva text-xs font-semibold text-gold">व्हाट्सएप सपोर्ट</p>
                  <p className="mt-3 text-sm text-mist">Chat directly with support</p>
                  <p className="text-xs text-mist/80">Quick responses via WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition group-hover:gap-2"
                >
                  Start Chat <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Section: Form & Information */}
      <section className="bg-haze pb-24 pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            {/* Left: Streamlined Quick Inquiry Form */}
            <Reveal className="rounded-[24px] border border-gold/30 bg-white p-8 md:p-12 card-shadow relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-gold via-navy to-gold" />

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#FDF3E0] text-gold ring-4 ring-gold/20">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold text-ink">
                    Message Received!
                  </h3>
                  <p className="mt-2 font-deva text-lg font-semibold text-gold">
                    आपका संदेश प्राप्त हो गया है
                  </p>
                  <p className="mx-auto mt-4 max-w-md text-mist text-[15px] leading-relaxed">
                    Thank you, <span className="font-bold text-ink">{f.name}</span>. Your inquiry
                    regarding <span className="font-bold text-ink">{f.subject}</span> has been
                    assigned to our team. We will reach out to you shortly.
                  </p>

                  <button
                    onClick={resetForm}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy cursor-pointer"
                  >
                    Send Another Message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <GoldLabel>GET IN TOUCH WITH US</GoldLabel>
                      <h2 className="mt-2 font-display text-3xl font-bold text-ink">
                        Quick Inquiry Form
                      </h2>
                      <p className="mt-1 font-deva text-sm font-semibold text-gold">
                        त्वरित पूछताछ फॉर्म
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    {/* 1. Name */}
                    <Field label="Full Name" hindi="पूरा नाम" required>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.name}
                          onChange={(e) => set("name", e.target.value)}
                          placeholder="e.g. Amit Sharma"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 2. Contact */}
                    <Field label="Mobile Number or Email" hindi="मोबाइल नंबर या ईमेल" required>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                        <input
                          type="text"
                          value={f.contact}
                          onChange={(e) => set("contact", e.target.value)}
                          placeholder="e.g. +91 98765 43210 or amit@example.com"
                          className={`${inputCls} pl-11`}
                        />
                      </div>
                    </Field>

                    {/* 3. Subject */}
                    <Field label="Inquiry Topic" hindi="पूछताछ का विषय" required>
                      <div className="relative">
                        <HelpCircle className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist pointer-events-none" />
                        <select
                          value={f.subject}
                          onChange={(e) => set("subject", e.target.value)}
                          className={`${inputCls} pl-11 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23C9952A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat`}
                        >
                          {SUBJECT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Field>

                    {/* 4. Message */}
                    <Field label="Your Message / Query" hindi="आपका संदेश" required>
                      <textarea
                        rows={4}
                        value={f.message}
                        onChange={(e) => set("message", e.target.value)}
                        placeholder="Write your question, feedback, or partnership request here..."
                        className="w-full rounded-[12px] border border-[#E2E8F0] bg-white p-4 text-sm text-ink outline-none transition focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,149,42,0.18)] resize-none"
                      />
                    </Field>
                  </div>

                  <button
                    onClick={submit}
                    disabled={sending}
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-9 py-4 font-bold text-white transition hover:bg-gold hover:text-navy disabled:opacity-60 cursor-pointer"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </Reveal>

            {/* Right: Office Locations & Join Prompt Callout */}
            <div className="space-y-6" id="locations">
              {/* Callout Prompt to Join Form */}
              <Reveal className="rounded-[24px] bg-gradient-to-br from-navy via-navy to-[#131a4a] p-8 text-white shadow-xl relative overflow-hidden border border-gold/30">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/20 text-gold ring-1 ring-gold/40">
                    <UserPlus className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
                      OFFICIAL REGISTRATION
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      Looking to Join Pavitram India?
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  If you want to register as an official member, business partner, or investor,
                  please use our dedicated membership registration form.
                </p>
                <Link
                  to="/join"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy transition hover:bg-white hover:scale-[1.02]"
                >
                  Open Membership Registration <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>

              {/* Corporate HQ Details Card */}
              <Reveal className="rounded-[24px] border border-haze bg-white p-8 card-shadow">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#FDF3E0] text-gold">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      Corporate Headquarters
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      मुख्य कार्यालय
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm text-mist">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>
                      Pavitram Elevate Tower, Commercial Hub, Indore & Bhopal, Madhya Pradesh —
                      452001
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gold shrink-0" />
                    <span>Monday - Saturday: 9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gold shrink-0" />
                    <span>Pan-India Network covering 15+ States</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="bg-haze pb-24 pt-4">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="rounded-[24px] border border-gold/30 bg-white p-6 md:p-8 card-shadow overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-haze">
              <div>
                <GoldLabel>LOCATION MAP</GoldLabel>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">
                  Find Us on Google Maps
                </h3>
                <p className="font-deva text-sm font-semibold text-gold">
                  गूगल मैप्स पर हमारा स्थान
                </p>
              </div>
              <a
                href="https://www.google.com/maps?q=22.623899677230373,75.81073416067343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-gold hover:text-navy self-start sm:self-auto cursor-pointer"
              >
                Open Directions in Google Maps <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-[18px] border border-haze shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.3866960429234!2d75.81073416067343!3d22.623899677230373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fb002840f491%3A0x9eea1480470096c7!2z4KS44KSu4KSw4KWN4KSlIOCkquCliOCksOCkvuCkoeCkvuCkh-CknA!5e1!3m2!1sen!2sin!4v1784489621811!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Pavitram India Google Map Location"
                className="w-full h-[380px] md:h-[450px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
