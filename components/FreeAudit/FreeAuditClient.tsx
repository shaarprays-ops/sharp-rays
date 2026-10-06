"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Globe2,
  Loader2,
  Megaphone,
  Search,
  Sparkles,
} from "lucide-react";

const auditAreas = [
  {
    icon: Globe2,
    number: "01",
    title: "Website",
    description:
      "We review your website structure, messaging, user journey and obvious conversion barriers.",
  },
  {
    icon: Search,
    number: "02",
    title: "SEO Visibility",
    description:
      "We look for basic search visibility issues, on-page gaps and opportunities worth exploring.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Social Presence",
    description:
      "We review positioning, consistency, content direction and how clearly your brand communicates.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Growth Opportunities",
    description:
      "We identify a few practical areas where your digital presence could work harder for the business.",
  },
];

const services = [
  "SEO",
  "Social Media",
  "Performance Marketing",
  "Website",
  "Content Marketing",
  "AI Automation",
  "Not Sure Yet",
];

const whatYouGet = [
  "Initial website and digital presence review",
  "Important issues we notice",
  "3–5 priority opportunities",
  "Recommended next steps",
  "No obligation to work with us",
];

const faqs = [
  {
    question: "Is the digital marketing audit really free?",
    answer:
      "Yes. The initial audit is complimentary and there is no obligation to purchase a service.",
  },
  {
    question: "What will Sharp Rays review?",
    answer:
      "The exact review depends on your business and selected service. We may review your website, SEO visibility, social presence, conversion journey, paid marketing setup or other relevant digital touchpoints.",
  },
  {
    question: "Is this a complete technical audit?",
    answer:
      "No. The free audit is an initial review designed to identify important issues and opportunities. A complete technical audit, implementation plan or detailed strategy may require a separate project scope.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "We review the information you provide and use it to understand where the most useful opportunities may exist. If appropriate, we can then discuss the findings and possible next steps.",
  },
];

type FormDataState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  challenge: string;
};

const initialForm: FormDataState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  website: "",
  service: "",
  challenge: "",
};

export default function FreeAuditClient() {
  const [form, setForm] = useState<FormDataState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(
    field: keyof FormDataState,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!form.name || !form.email || !form.service) {
      setError("Please complete your name, email and primary area of interest.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/free-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      setForm(initialForm);
    } catch {
      setError(
        "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="overflow-hidden bg-white text-[#0B2A52]"
      style={{ fontFamily: '"New York", Georgia, serif' }}
    >
      {/* HERO */}
      <section className="relative border-b border-[#0B2A52]/10">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#DDEBFA]/70 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-[950px] text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6285AD]/20 bg-[#F7FAFD] px-4 py-2">
              <Sparkles size={14} strokeWidth={1.8} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs">
                Free Digital Marketing Audit
              </span>
            </div>

            <h1
              className="mx-auto max-w-[900px] text-[2.6rem] leading-[0.98] tracking-[-0.045em] 
              sm:text-[2.6rem]
                  md:text-[2.95rem]
                  lg:text-[3.1rem]
                  xl:text-[3.35rem]"
              style={{ fontFamily: ' Georgia, serif' }}
            >
              Find Out What Is Holding Your Digital Growth Back.
            </h1>

            <p className="mx-auto mt-7 max-w-[710px] text-[16px] leading-8 text-[#0B2A52]/65 sm:text-[18px]">
              Get an initial review of your website and digital presence with
              clear observations, priority opportunities and practical next
              steps.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B2A52]/50 sm:text-xs">
              <span>No Payment</span>
              <span className="h-1 w-1 rounded-full bg-[#0B2A52]/25" />
              <span>No Obligation</span>
              <span className="h-1 w-1 rounded-full bg-[#0B2A52]/25" />
              <span>Clear Opportunities</span>
            </div>

            <a
              href="#audit-form"
              title="Request Your Free Audit"
              className="mt-10 inline-flex items-center gap-3 rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-7 py-4 text-[14px] font-semibold text-[#0B2A52] shadow-[0_14px_45px_rgba(11,42,82,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(11,42,82,0.15)]"
            >
              Get My Free Audit
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE REVIEW */}
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6285AD] sm:text-xs">
              What We Look At
            </p>

            <h2
              className="mt-4 text-[2.6rem] leading-[1.02] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
              style={{ fontFamily: ' Georgia, serif' }}
            >
              A Focused Review of What Matters Most.
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-[16px] leading-8 text-[#0B2A52]/60">
              We are not trying to overwhelm you with a hundred-point checklist.
              We focus on the issues and opportunities that could matter most
              for your business.
            </p>
          </div>

          <div className="mt-16 grid border-y border-[#0B2A52]/10 md:grid-cols-2 lg:grid-cols-4">
            {auditAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group relative px-6 py-10 sm:px-8 lg:py-12 ${
                    index !== auditAreas.length - 1
                      ? "border-b border-[#0B2A52]/10 lg:border-b-0 lg:border-r"
                      : ""
                  } ${
                    index === 1
                      ? "md:border-b-0 lg:border-b-0"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F7FB] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#E8F1FA]">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>
                  </div>

                  <h3 className="mt-10 text-[24px] tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#0B2A52]/60">
                    {item.description}
                  </p>

                  <div className="mt-8 h-[2px] w-8 bg-[#7FA6CF] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#F8FBFE] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6285AD] sm:text-xs">
              What You Receive
            </p>

            <h2
              className="mt-4 text-[2.6rem] leading-[1.02] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
              style={{ fontFamily: '"", Georgia, serif' }}
            >
              Useful Direction. Not a Generic Sales Pitch.
            </h2>

            <p className="mt-6 max-w-[560px] text-[16px] leading-8 text-[#0B2A52]/60">
              The purpose of the audit is to help you understand where your
              current digital presence may be creating friction and where
              stronger opportunities may exist.
            </p>
          </div>

          <div className="space-y-0 border-y border-[#0B2A52]/10">
            {whatYouGet.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-[#0B2A52]/10 py-5 last:border-b-0"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF3FC]">
                  <Check size={14} strokeWidth={2} />
                </div>

                <span className="text-[15px] leading-6 sm:text-[16px]">
                  {item}
                </span>

                <span className="ml-auto text-[11px] tracking-[0.14em] text-[#0B2A52]/25">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT FORM */}
      <section
        id="audit-form"
        className="relative scroll-mt-20 py-20 sm:py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute bottom-[-140px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#DCEBFA]/60 blur-[110px]" />

        <div className="relative mx-auto grid max-w-[1260px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6285AD] sm:text-xs">
              Request Your Audit
            </p>

            <h2
              className="mt-4 text-[2.6rem] leading-[1.02] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
              style={{ fontFamily: '"", Georgia, serif' }}
            >
              Tell Us a Little About Your Business.
            </h2>

            <p className="mt-6 max-w-[480px] text-[15px] leading-7 text-[#0B2A52]/60">
              Give us enough context to understand what you are working with.
              Keep it simple—we do not need a long brief.
            </p>

            <div className="mt-10 border-t border-[#0B2A52]/10 pt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B2A52]/45">
                Important
              </p>

              <p className="mt-3 max-w-[460px] text-[13px] leading-6 text-[#0B2A52]/55">
                The complimentary audit is an initial review. Detailed
                implementation, technical diagnostics, competitor research or a
                complete marketing strategy may require a separate scope.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#6285AD]/20 bg-white p-5 shadow-[0_25px_80px_rgba(11,42,82,0.08)] sm:p-8 lg:p-10">
            {isSubmitted ? (
              <div className="flex min-h-[540px] flex-col items-center justify-center px-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4FD]">
                  <CheckCircle2 size={30} strokeWidth={1.6} />
                </div>

                <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6285AD]">
                  Request Received
                </p>

                <h3
                  className="mt-3 max-w-[500px] text-[2.2rem] leading-[1.08] tracking-[-0.035em] sm:text-[2.7rem]"
                  style={{ fontFamily: '"", Georgia, serif' }}
                >
                  Thanks. We Have Your Details.
                </h3>

                <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-[#0B2A52]/60">
                  We can now review the information you submitted and identify
                  the most relevant areas to look at.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-[16px] border border-[#6285AD]/30 bg-white px-6 py-3.5 text-[14px] font-semibold shadow-sm transition hover:-translate-y-1"
                >
                  Submit Another Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Your Name *">
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Business Name">
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) =>
                        updateField("businessName", e.target.value)
                      }
                      placeholder="Company or brand"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Email Address *">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField label="Phone / WhatsApp">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+91"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="mt-6">
                  <FormField label="Website URL">
                    <input
                      type="url"
                      value={form.website}
                      onChange={(e) => updateField("website", e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className={inputClass}
                    />
                  </FormField>
                </div>

                <div className="mt-8">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0B2A52]/55">
                    What would you like us to look at? *
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {services.map((service) => {
                      const active = form.service === service;

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => updateField("service", service)}
                          className={`rounded-full border px-4 py-2.5 text-[13px] transition ${
                            active
                              ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                              : "border-[#6285AD]/20 bg-[#F9FBFD] text-[#0B2A52]/70 hover:border-[#6285AD]/50 hover:bg-white"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8">
                  <FormField label="What Is Your Biggest Challenge Right Now?">
                    <textarea
                      rows={5}
                      value={form.challenge}
                      onChange={(e) => updateField("challenge", e.target.value)}
                      placeholder="For example: We have a website but are not getting enough organic leads..."
                      className={`${inputClass} resize-none`}
                    />
                  </FormField>
                </div>

                {error && (
                  <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[13px] leading-5 text-red-700">
                    {error}
                  </p>
                )}

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-[16px] border border-[#0B2A52] bg-[#0B2A52] px-6 py-4 text-[14px] font-semibold text-white shadow-[0_16px_40px_rgba(11,42,82,0.18)] transition duration-300 hover:-translate-y-1 disabled:pointer-events-none disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={17} />
                      Sending Request
                    </>
                  ) : (
                    <>
                      Request My Free Audit
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-[#0B2A52]/40">
                  By submitting this form, you agree to be contacted regarding
                  your audit request. No payment is required.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-[#0B2A52]/10 bg-[#FAFCFE] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6285AD]">
              What Happens Next
            </p>

            <h2
              className="mt-4 text-[2.6rem] leading-[1.02] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
              style={{ fontFamily: '"", Georgia, serif' }}
            >
              Simple From Request to Recommendations.
            </h2>
          </div>

          <div className="mt-14 grid gap-0 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Share Your Details",
                text: "Tell us about your business, website and the area you want us to review.",
              },
              {
                number: "02",
                title: "We Review",
                text: "We look at the most relevant parts of your current digital presence.",
              },
              {
                number: "03",
                title: "Get Clear Direction",
                text: "We highlight important observations, opportunities and sensible next steps.",
              },
            ].map((step, index) => (
              <div
                key={step.number}
                className={`px-2 py-8 md:px-8 ${
                  index !== 2
                    ? "border-b border-[#0B2A52]/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
               

                <h3 className="mt-6 text-[22px] tracking-[-0.025em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#0B2A52]/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[960px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6285AD]">
              Free Audit FAQs
            </p>

            <h2
              className="mt-4 text-[2.6rem] leading-[1.02] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
              style={{ fontFamily: '"", Georgia, serif' }}
            >
              Before You Request Your Audit.
            </h2>
          </div>

          <div className="mt-14 border-t border-[#0B2A52]/10">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-[#0B2A52]/10"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 py-6">
                  <span className="text-[11px] font-semibold text-[#6285AD]">
                    0{index + 1}
                  </span>

                  <span className="flex-1 text-[16px] font-medium sm:text-[17px]">
                    {faq.question}
                  </span>

                  <span className="relative h-5 w-5">
                    <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 bg-[#0B2A52]" />
                    <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-y-1/2 bg-[#0B2A52] transition-transform group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>

                <div className="pb-7 pl-9 pr-8">
                  <p className="max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/60">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12 lg:pb-12">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[30px] border border-[#6285AD]/20 bg-[#F4F9FE] px-6 py-16 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-white blur-[80px]" />

          <div className="relative mx-auto max-w-[780px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6285AD]">
              Your Next Step
            </p>

            <h2
              className="mt-4 text-[2.6rem] leading-[1.02] tracking-[-0.04em] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
              style={{ fontFamily: '"", Georgia, serif' }}
            >
              Find the Opportunities You May Be Missing.
            </h2>

            <p className="mx-auto mt-5 max-w-[600px] text-[15px] leading-7 text-[#0B2A52]/60">
              A clearer view of what is working, what is getting in the way and
              what may deserve your attention next.
            </p>

            <a
              href="#audit-form"
              title="Request Your Free Audit"
              className="mt-8 inline-flex items-center gap-3 rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-7 py-4 text-[14px] font-semibold text-[#0B2A52] shadow-[0_14px_45px_rgba(11,42,82,0.10)] transition duration-300 hover:-translate-y-2"
            >
              Request My Free Audit
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B2A52]/55">
        {label}
      </span>

      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-[14px] border border-[#6285AD]/20 bg-[#FAFCFE] px-4 py-3.5 text-[14px] text-[#0B2A52] outline-none transition placeholder:text-[#0B2A52]/30 focus:border-[#6285AD]/60 focus:bg-white focus:ring-4 focus:ring-[#6285AD]/5";