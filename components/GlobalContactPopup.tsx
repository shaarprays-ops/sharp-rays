"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";

const SESSION_KEY = "sharp-rays-contact-popup-shown";

const services = [
  "Social Media Marketing",
  "SEO",
  "Performance Marketing",
  "Website Development",
  "Content Marketing",
  "AI Automation",
  "AI Video & Video Editing",
  "Not Sure Yet",
];

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function GlobalContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);

    if (alreadyShown) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, 4000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (!selectedService) {
      setStatus("error");
      setMessage("Please select a service.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      website: "",
      services: [selectedService],
      selectedPlan: "",
      enquiryNeed: "",
      message: String(formData.get("message") || "").trim(),
      budget: "",
      timeline: "",
      source: "Website Contact Popup",
      websiteConfirm: String(formData.get("websiteConfirm") || "").trim(),
    };

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof result?.message === "string"
            ? result.message
            : "Something went wrong while sending your enquiry.",
        );
      }

      setStatus("success");
      setMessage(
        "Thanks — your enquiry has been sent. We’ll review it and get back to you.",
      );

      form.reset();
      setSelectedService("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn’t send your enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-y-auto bg-[#07192B]/30 px-4 py-4 backdrop-blur-[10px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] top-[8%] h-[240px] w-[240px] rounded-full bg-[#BFDDF4]/25 blur-[95px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[4%] right-[8%] h-[260px] w-[260px] rounded-full bg-[#DCEBFA]/20 blur-[100px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.4, ease }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            className="relative my-auto w-full max-w-[860px] overflow-hidden rounded-[24px] border border-white/65 bg-white/55 shadow-[0_26px_70px_rgba(7,32,58,0.15)] backdrop-blur-[28px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[1px] rounded-[23px] border border-white/60"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            />

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact form"
              title="Close Contact Form"
              className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 bg-white/55 text-[#0B2A52] shadow-[0_6px_18px_rgba(11,42,82,0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:right-3.5 sm:top-3.5"
            >
              <X size={14} strokeWidth={1.7} />
            </button>

            <div className="relative grid lg:grid-cols-[0.78fr_1.22fr]">
              {/* LEFT */}
              <div className="relative overflow-hidden border-b border-white/55 px-5 py-5 sm:px-6 sm:py-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-28 -top-28 h-[260px] w-[260px] rounded-full bg-[#D9ECF8]/65 blur-[85px]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-28 -right-20 h-[230px] w-[230px] rounded-full bg-[#EEF5FB]/70 blur-[85px]"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#B79A72]" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.24em] text-[#92745C]">
                      Start a Conversation
                    </span>
                  </div>

                  <h2
                    id="contact-popup-title"
                    style={newYorkFont}
                    className="mt-3 max-w-[330px] text-[1.65rem] font-medium leading-[1.02] tracking-[-0.045em] text-[#0B2A52] sm:text-[1.85rem] lg:text-[2rem]"
                  >
                    Let&apos;s Find the{" "}
                    <span className="italic text-[#A97C52]">
                      Right Way Forward.
                    </span>
                  </h2>

                  <p className="mt-3 max-w-[340px] text-[11px] leading-[1.6] text-[#5F7588] sm:text-[12px]">
                    Tell us what you&apos;re trying to improve, where things feel
                    stuck, or what opportunity you want to explore.
                  </p>

                  <div className="mt-4 space-y-2">
                    {[
                      "No perfect brief required",
                      "Choose the closest service",
                      "We’ll review your context first",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/55 text-[#3976B6] backdrop-blur-lg">
                          <Check size={10} strokeWidth={2} />
                        </span>

                        <span className="text-[11px] leading-4 text-[#4F687E]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 border-l border-[#B79A72]/55 pl-3.5">
                    <p
                      style={newYorkFont}
                      className="text-[11px] leading-5 text-[#0B2A52]"
                    >
                      Digital growth, without the guesswork.
                    </p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="relative px-5 pb-5 pt-10 sm:px-6 sm:pb-6 sm:pt-10 lg:px-7 lg:pb-6"
              >
                {/* HONEYPOT */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
                >
                  <label htmlFor="popupWebsiteConfirm">
                    Leave this field empty
                  </label>

                  <input
                    id="popupWebsiteConfirm"
                    name="websiteConfirm"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* INTRO */}
                <div className="mb-3">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8B9BA8]">
                    Tell Us a Little
                  </span>

                  <p
                    style={newYorkFont}
                    className="mt-1 text-[17px] font-medium tracking-[-0.025em] text-[#0B2A52]"
                  >
                    What are you working on?
                  </p>
                </div>

                {/* NAME + EMAIL */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                      Your Name *
                    </span>

                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-1.5 w-full rounded-[12px] border border-white/75 bg-white/48 px-3.5 py-2.5 text-[12px] text-[#0B2A52] outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-[#9EADB8] hover:bg-white/60 focus:border-[#8CAAC1] focus:bg-white/75"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                      Work Email *
                    </span>

                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-[12px] border border-white/75 bg-white/48 px-3.5 py-2.5 text-[12px] text-[#0B2A52] outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-[#9EADB8] hover:bg-white/60 focus:border-[#8CAAC1] focus:bg-white/75"
                    />
                  </label>
                </div>

                {/* COMPANY */}
                <label className="mt-3 block">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                    Company / Brand
                  </span>

                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Company name"
                    className="mt-1.5 w-full rounded-[12px] border border-white/75 bg-white/48 px-3.5 py-2.5 text-[12px] text-[#0B2A52] outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-[#9EADB8] hover:bg-white/60 focus:border-[#8CAAC1] focus:bg-white/75"
                  />
                </label>

                {/* SERVICE */}
                <label className="mt-3 block">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                    What Can We Help With? *
                  </span>

                  <select
                    required
                    value={selectedService}
                    onChange={(event) => setSelectedService(event.target.value)}
                    className="mt-1.5 w-full rounded-[12px] border border-white/75 bg-white/48 px-3.5 py-2.5 text-[12px] text-[#536D83] outline-none backdrop-blur-xl transition-all duration-300 hover:bg-white/60 focus:border-[#8CAAC1] focus:bg-white/75"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                {/* MESSAGE */}
                <label className="mt-3 block">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#60758A]">
                    What Are You Trying to Achieve? *
                  </span>

                  <textarea
                    required
                    name="message"
                    rows={2}
                    placeholder="Tell us about the challenge, goal or opportunity..."
                    className="mt-1.5 w-full resize-none rounded-[12px] border border-white/75 bg-white/48 px-3.5 py-2.5 text-[12px] leading-5 text-[#0B2A52] outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-[#9EADB8] hover:bg-white/60 focus:border-[#8CAAC1] focus:bg-white/75"
                  />
                </label>

                {/* STATUS */}
                {status !== "idle" && message && (
                  <div
                    role={status === "error" ? "alert" : "status"}
                    aria-live="polite"
                    className={`mt-3 rounded-[12px] border px-3.5 py-2.5 text-[11px] leading-4 backdrop-blur-xl ${
                      status === "success"
                        ? "border-[#BFD9CE]/80 bg-[#F3FAF6]/80 text-[#2F6D55]"
                        : "border-[#E5C7C7]/80 bg-[#FFF7F7]/80 text-[#9B4A4A]"
                    }`}
                  >
                    {message}
                  </div>
                )}

                {/* SUBMIT */}
                <div className="mt-4 flex flex-col gap-2.5 border-t border-white/70 pt-3.5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[230px] text-[9px] leading-4 text-[#7D909F]">
                    No pressure. We&apos;ll only use this information to
                    understand how we may be able to help.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={newYorkFont}
                    className="group relative inline-flex min-h-[40px] items-center justify-center gap-2 overflow-hidden rounded-[13px] border border-[#0B2A52]/85 bg-[#0B2A52] px-4 py-2 text-[11px] font-medium text-white shadow-[0_9px_22px_rgba(11,42,82,0.14)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_26px_rgba(11,42,82,0.18)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
                    />

                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send My Enquiry"}
                    </span>

                    {!isSubmitting && (
                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.7}
                        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}