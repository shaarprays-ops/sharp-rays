"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Loader2,
  MessageCircle,
  Phone,
} from "lucide-react";

const newYork = {
  fontFamily: '"New York", Georgia, serif',
};

const services = [
  "Website",
  "SEO",
  "Social Media",
  "Google/Meta Ads",
  "AI Automation",
  "Video Editing",
  "Content Marketing",
  "Not sure",
];

export default function PricingQuoteForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const selectedServices = formData
      .getAll("services")
      .map((service) => String(service).trim())
      .filter(Boolean);

    if (!selectedServices.length) {
      setStatus("error");
      setErrorMessage("Please select at least one service.");
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const business = String(formData.get("business") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const userMessage = String(formData.get("message") || "").trim();
    const websiteConfirm = String(
      formData.get("websiteConfirm") || "",
    ).trim();

    if (!name || !email || !phone) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    const message = [
      `Phone / WhatsApp: ${phone}`,
      `Services needed: ${selectedServices.join(", ")}`,
      budget ? `Monthly budget: ${budget}` : "",
      "",
      userMessage || "No additional message provided.",
    ]
      .filter((item, index, array) => {
        if (item !== "") return true;

        return (
          index > 0 &&
          index < array.length - 1 &&
          array[index - 1] !== "" &&
          array[index + 1] !== ""
        );
      })
      .join("\n");

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,

          company: business,

          website,

          services: selectedServices,

          selectedPlan: "",

          enquiryNeed: "Custom Pricing Quote",

          message,

          budget,

          timeline: "",

          source: "Pricing Page — Custom Quote Form",

          websiteConfirm,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof result?.message === "string"
            ? result.message
            : "We couldn’t send your quote request.",
        );
      }

      form.reset();

      setStatus("success");
      setErrorMessage("");
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact us directly.",
      );
    }
  }

  const inputClass =
    "min-h-[52px] w-full rounded-[15px] border border-[#0B2A52]/10 bg-white px-4 text-[12px] text-[#0B2A52] outline-none transition placeholder:text-[#A0ADBA] focus:border-[#6285AD]/55 focus:ring-4 focus:ring-[#6285AD]/[0.07]";

  return (
    <section
      id="quote"
      style={newYork}
      className="bg-[#F5F9FC] px-5 py-20 text-[#0B2A52] sm:px-8 md:px-10 lg:px-14 lg:py-28 xl:px-20"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="overflow-hidden rounded-[34px] border border-[#9CB7CF]/25 bg-white shadow-[0_25px_90px_rgba(11,42,82,.06)]">
          <div className="grid lg:grid-cols-[.72fr_1.28fr]">
            {/* LEFT */}
            <div className="relative overflow-hidden bg-[#0B2A52] p-7 text-white sm:p-9 lg:p-11">
              <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full border-[55px] border-white/[0.035]" />

              <div className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full border-[30px] border-white/[0.025]" />

              <p className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9EBAD3]">
                Custom Pricing
              </p>

              <h2 className="relative mt-5 max-w-[480px] text-[2.6rem] font-medium leading-[1] tracking-[-0.045em] sm:text-[3.1rem]">
                Get Your Custom Quote
              </h2>

              <p className="relative mt-6 max-w-[490px] text-[13px] leading-7 text-[#BED0E0]">
                Tell us what you need and your budget. We&apos;ll reply within 1
                working day with a clear plan and price.
              </p>

              <div className="relative mt-9 space-y-3">
                <a
                  href="tel:+919415951060"
                  title="Call Sharp Rays"
                  className="flex items-center gap-3 rounded-[15px] border border-white/10 bg-white/[0.05] px-4 py-4 text-[11px] transition hover:bg-white/[0.08]"
                >
                  <Phone size={14} />
                  Call +91 94159 51060
                </a>

                <a
                  href="https://wa.me/919415951060"
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp Sharp Rays"
                  className="flex items-center gap-3 rounded-[15px] border border-white/10 bg-white/[0.05] px-4 py-4 text-[11px] transition hover:bg-white/[0.08]"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>

                <Link
                  href="/free-audit"
                  title="Get a Free Audit"
                  className="group flex items-center justify-between rounded-[15px] border border-white/10 bg-white px-4 py-4 text-[11px] font-medium text-[#0B2A52]"
                >
                  Get a Free Audit

                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              <p className="relative mt-10 border-t border-white/10 pt-6 text-[10px] leading-6 text-[#9FB5C8]">
                Naigaon East, Vasai-Virar, Palghar, Maharashtra 401208 —
                serving businesses across India. Mon–Sat, 10:00–19:00 IST.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-9 lg:p-11">
              {/* HONEYPOT */}
              <input
                type="text"
                name="websiteConfirm"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* BASIC DETAILS */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  <span className="mb-2 block text-[10px] font-medium">
                    Name *
                  </span>

                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className="mb-2 block text-[10px] font-medium">
                    Phone / WhatsApp *
                  </span>

                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+91"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className="mb-2 block text-[10px] font-medium">
                    Email *
                  </span>

                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </label>

                <label>
                  <span className="mb-2 block text-[10px] font-medium">
                    Business name or website
                  </span>

                  <input
                    type="text"
                    name="business"
                    autoComplete="organization"
                    placeholder="Business name"
                    className={inputClass}
                  />
                </label>
              </div>

              {/* WEBSITE */}
              <label className="mt-4 block">
                <span className="mb-2 block text-[10px] font-medium">
                  Website
                </span>

                <input
  type="text"
  name="website"
  placeholder="yourwebsite.com"
  inputMode="url"
  autoComplete="url"
  className={inputClass}
/>
              </label>

              {/* SERVICES */}
              <fieldset className="mt-7">
                <legend className="text-[10px] font-medium">
                  Services needed *
                </legend>

                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {services.map((service) => (
                    <label key={service} className="cursor-pointer">
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        className="peer sr-only"
                      />

                      <span className="flex min-h-[46px] items-center justify-center rounded-[13px] border border-[#0B2A52]/10 bg-white px-3 text-center text-[10px] leading-4 text-[#60768B] transition peer-checked:border-[#315F88] peer-checked:bg-[#EEF5FA] peer-checked:text-[#0B2A52]">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* BUDGET */}
              <label className="mt-5 block">
                <span className="mb-2 block text-[10px] font-medium">
                  Monthly budget
                </span>

                <select
                  name="budget"
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select monthly budget
                  </option>

                  <option value="Under ₹50,000">
                    Under ₹50,000
                  </option>

                  <option value="₹50,000–₹1,00,000">
                    ₹50,000–₹1,00,000
                  </option>

                  <option value="₹1,00,000–₹2,50,000">
                    ₹1,00,000–₹2,50,000
                  </option>

                  <option value="₹2,50,000+">
                    ₹2,50,000+
                  </option>
                </select>
              </label>

              {/* MESSAGE */}
              <label className="mt-4 block">
                <span className="mb-2 block text-[10px] font-medium">
                  Message
                </span>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals, current situation or anything we should know."
                  className="w-full resize-none rounded-[15px] border border-[#0B2A52]/10 bg-white px-4 py-4 text-[12px] text-[#0B2A52] outline-none transition placeholder:text-[#A0ADBA] focus:border-[#6285AD]/55 focus:ring-4 focus:ring-[#6285AD]/[0.07]"
                />
              </label>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group mt-6 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#0B2A52] px-6 text-[11px] font-medium text-white transition hover:bg-[#123B69] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send My Quote Request

                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>

              {/* SUCCESS */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-4 flex items-center gap-2 rounded-[13px] bg-[#EFF7F3] px-4 py-3 text-[11px] text-[#315F4A]"
                >
                  <Check size={13} />

                  Your quote request has been sent.
                </div>
              )}

              {/* ERROR */}
              {status === "error" && errorMessage && (
                <p
                  role="alert"
                  aria-live="polite"
                  className="mt-4 rounded-[13px] bg-red-50 px-4 py-3 text-[11px] text-red-700"
                >
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}