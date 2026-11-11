
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How can hospitals and clinics improve their Google rankings?",
    answer:
      "Hospitals and clinics can strengthen search visibility through useful specialty and service pages, accurate Google Business Profiles, clear doctor information, technical SEO, relevant internal linking and trustworthy medical content. Improvements depend on competition, location and website quality, so rankings cannot be guaranteed.",
  },
  {
    question: "What is healthcare SEO, and how does it help medical practices?",
    answer:
      "Healthcare SEO is the process of improving a medical website's visibility for relevant search queries. It includes technical SEO, local search optimisation, specialty pages, doctor profiles and accurate, medically reviewed content that helps people find appropriate healthcare information.",
  },
  {
    question: "How can doctors and clinics appear on Google Maps?",
    answer:
      "Eligible practices can improve their Google Maps presence by verifying their Google Business Profile, choosing appropriate categories, maintaining accurate hours and contact information, and keeping location details up to date. Strong local relevance and a properly maintained website can also support discoverability.",
  },
  {
    question: "Are Google Ads effective for hospitals and clinics?",
    answer:
      "Google Ads can help eligible healthcare providers reach people searching for relevant services and locations. However, healthcare advertising is subject to platform policies and applicable medical advertising regulations. Campaigns should be reviewed for eligibility, accuracy and appropriate targeting before launch.",
  },
  {
    question: "How can a healthcare website generate more appointment enquiries?",
    answer:
      "A helpful healthcare website should make it easy to find doctor qualifications, available services, consultation hours, locations, contact details and appointment request options. Mobile-friendly navigation and straightforward forms can reduce unnecessary barriers to communication.",
  },
  {
    question:
      "Is social media marketing useful for doctors and healthcare organisations?",
    answer:
      "Social media can help healthcare organisations communicate factual health information, facility updates and educational resources. Content should follow applicable professional standards, avoid misleading promotional claims and receive appropriate medical review.",
  },
  {
    question:
      "How can WhatsApp and AI automation help clinics manage appointments?",
    answer:
      "Consent-based automation can help acknowledge routine enquiries, share approved administrative information, send appointment confirmations and provide reminders. Patient medical information must be handled with suitable privacy and security protections.",
  },
  {
    question:
      "What digital marketing services are most useful for healthcare providers?",
    answer:
      "The right combination depends on the organisation's specialties, locations and goals. Healthcare SEO, local search, professional websites, trustworthy content, eligible search advertising and efficient administrative communication are common priorities.",
  },
  {
    question: "How long does healthcare SEO take to show results?",
    answer:
      "Healthcare SEO is an ongoing process. Timelines depend on existing website performance, competition, technical issues, content quality and local search conditions. Progress should be assessed through visibility, relevant traffic and appropriate enquiry metrics rather than fixed ranking promises.",
  },
  {
    question: "How much does healthcare digital marketing cost?",
    answer:
      "Costs vary based on practice size, number of locations, medical specialties, website requirements, content review needs, advertising eligibility and marketing scope. A suitable plan should match the provider's priorities, resources and compliance requirements.",
  },
];

export default function HealthcareFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="healthcare-faq"
      className="relative isolate overflow-hidden bg-[#F8FBFD] text-[#0B2A52]"
    >
      <div className="pointer-events-none absolute -left-48 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[#E9F3FC]/60 blur-[65px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 xl:gap-20">
          {/* LEFT — INTRODUCTION */}
          <div className="lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 shrink-0 bg-[#B79A72]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
                Frequently Asked Questions
              </p>
            </div>

            <h2 className="max-w-[560px] text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              Questions Healthcare{" "}
              <span className="text-[#B79A72]">
                Businesses Ask Us.
              </span>
            </h2>

            <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Explore common questions about healthcare SEO, Google Ads,
              medical websites, patient enquiries and responsible digital
              communication.
            </p>

            <div className="mt-8 border-t border-[#DCE7F1] pt-6">
              <p className="text-[13px] text-[#0B2A52]/60">
                Have a question about your healthcare organisation?
              </p>

              <Link
                href="/contact?service=healthcare-marketing#contact-form"
                title="Discuss Healthcare Digital Marketing with Sharp Rays"
                className="group mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-[#0B2A52] transition-colors hover:text-[#B79A72]"
              >
                Talk to Sharp Rays
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT — FAQ ACCORDION */}
          <div className="overflow-hidden rounded-[20px] border border-[#DDE8F2] bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `healthcare-faq-panel-${index}`;
              const questionId = `healthcare-faq-question-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`relative ${
                    index !== faqs.length - 1
                      ? "border-b border-[#E5EDF4]"
                      : ""
                  }`}
                >
                  <h3>
                    <button
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="group flex w-full items-start gap-3 px-5 py-5 text-left transition-colors duration-200 hover:bg-[#FAFCFE] sm:gap-4 sm:px-7 sm:py-6"
                    >
                      {/* Number */}
                      <span className="mt-[3px] w-6 shrink-0 text-[11px] font-medium tracking-[0.08em] text-[#B79A72]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span className="min-w-0 flex-1 text-[15px] font-medium leading-[1.45] tracking-[-0.015em] text-[#0B2A52] sm:text-[16px] lg:text-[17px]">
                        {faq.question}
                      </span>

                      {/* Toggle icon */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                            : "border-[#DCE7F1] bg-[#F7FAFD] text-[#0B2A52] group-hover:border-[#B79A72]/50"
                        }`}
                      >
                        {isOpen ? (
                          <Minus size={16} strokeWidth={1.7} />
                        ) : (
                          <Plus size={16} strokeWidth={1.7} />
                        )}
                      </span>
                    </button>
                  </h3>

                  {/* Answer */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                  >
                    <div className="px-5 pb-6 pl-[56px] sm:px-7 sm:pb-7 sm:pl-[76px]">
                      <p className="max-w-[720px] text-[13px] leading-[1.85] text-[#0B2A52]/68 sm:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Active gold indicator */}
                  {isOpen && (
                    <span className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#B79A72]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
