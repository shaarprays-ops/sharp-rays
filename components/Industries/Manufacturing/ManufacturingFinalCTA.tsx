
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Factory,
  HelpCircle,
  MessageCircle,
  Search,
} from "lucide-react";

const manufacturingFaqs = [
  {
    question: "How can manufacturing companies generate B2B leads online?",
    answer:
      "Manufacturing companies can attract relevant B2B enquiries through industrial SEO, Google Search Ads, detailed product pages, professional websites, technical content and quotation request forms. A good strategy focuses on buyer requirements, product relevance and enquiry quality.",
  },
  {
    question: "What is manufacturing SEO?",
    answer:
      "Manufacturing SEO is the process of improving a manufacturer's organic search visibility for relevant products, materials, manufacturing processes and supplier searches. It includes technical SEO, product-page optimisation, capability pages, content development and internal linking.",
  },
  {
    question: "How can manufacturers improve their Google rankings?",
    answer:
      "Manufacturers can improve search visibility by building accurate product and capability pages, targeting relevant industrial searches, improving technical SEO, strengthening internal links and providing useful product specifications. Rankings depend on competition, website quality and other factors.",
  },
  {
    question: "Are Google Ads effective for manufacturing companies?",
    answer:
      "Google Ads can help manufacturers reach businesses actively searching for industrial products and manufacturing services. Product-focused campaigns, relevant landing pages and quotation tracking can make advertising more useful.",
  },
  {
    question: "What should a manufacturing company website include?",
    answer:
      "A manufacturing website should clearly explain products, capabilities, materials, technical specifications, production processes, documented certifications and company information. It should also make it easy for relevant buyers to request quotations.",
  },
  {
    question: "How can manufacturers get more qualified quotation enquiries?",
    answer:
      "Manufacturers can improve RFQ quality by targeting relevant buyer searches, clearly presenting their capabilities and using enquiry forms that capture important requirements such as product details, quantity, specifications and delivery timelines.",
  },
  {
    question: "Can digital marketing help Indian manufacturers find international buyers?",
    answer:
      "Yes. International SEO, market-specific product pages and targeted Google Ads can improve visibility among overseas buyers. The approach should reflect the manufacturer's export capabilities, target markets and applicable requirements.",
  },
  {
    question: "Is LinkedIn marketing useful for B2B manufacturers?",
    answer:
      "LinkedIn can support professional visibility, industry content distribution and awareness among relevant business audiences. Its effectiveness for direct lead generation varies by industry, audience and sales cycle.",
  },
  {
    question: "How can AI automation help manufacturing businesses?",
    answer:
      "AI automation can help organise enquiries, route RFQs, acknowledge requests, update CRM systems and schedule administrative follow-ups. Technical feasibility, pricing and quotations should still receive appropriate human review.",
  },
  {
    question: "How long does manufacturing SEO take to show results?",
    answer:
      "Manufacturing SEO is a longer-term strategy. Results depend on your website's current condition, competition, product categories and target markets. Rankings and enquiries cannot be guaranteed within a fixed timeline.",
  },
];

const growthSteps = [
  { number: "01", label: "Get Discovered", icon: Search },
  { number: "02", label: "Build Buyer Confidence", icon: Factory },
  { number: "03", label: "Receive Relevant RFQs", icon: Check },
];

export default function ManufacturingFinalCTA() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      id="manufacturing-final-cta"
      aria-labelledby="manufacturing-final-heading"
      className="sr-manufacturing-final relative isolate overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* SEPARATE STYLES */}
      <style>{`
        .sr-manufacturing-final .sr-final-arrow {
          transition: transform .3s ease;
        }

        .sr-manufacturing-final .sr-final-link:hover .sr-final-arrow {
          transform: translate(3px, -3px);
        }

        .sr-manufacturing-final .sr-faq-item {
          transition: border-color .3s ease, background-color .3s ease;
        }

        .sr-manufacturing-final .sr-faq-item:hover {
          border-color: rgba(183,154,114,.48);
        }

        .sr-manufacturing-final .sr-faq-icon {
          transition: transform .3s ease, background-color .3s ease;
        }

        .sr-manufacturing-final .sr-faq-icon-open {
          transform: rotate(180deg);
          background-color: #F6EFE5;
        }

        .sr-manufacturing-final .sr-growth-step {
          transition: transform .3s ease, border-color .3s ease;
        }

        .sr-manufacturing-final .sr-growth-step:hover {
          transform: translateY(-3px);
          border-color: rgba(183,154,114,.5);
        }

        @keyframes srFinalReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .sr-manufacturing-final .sr-final-reveal {
          animation: srFinalReveal .75s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .sr-manufacturing-final .sr-final-reveal {
            animation: none !important;
          }

          .sr-manufacturing-final .sr-final-arrow,
          .sr-manufacturing-final .sr-faq-item,
          .sr-manufacturing-final .sr-faq-icon,
          .sr-manufacturing-final .sr-growth-step {
            transition: none !important;
          }

          .sr-manufacturing-final .sr-growth-step:hover,
          .sr-manufacturing-final .sr-final-link:hover .sr-final-arrow,
          .sr-manufacturing-final .sr-faq-icon-open {
            transform: none !important;
          }
        }
      `}</style>

      {/* FINAL CALL TO ACTION */}
      <div className="relative overflow-hidden bg-[#F8FBFD] py-20 sm:py-24 lg:py-28 xl:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#E6F0F7]/70 blur-[110px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-36 h-[430px] w-[430px] rounded-full bg-[#F5EDE1]/50 blur-[100px]" />

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            {/* CTA CONTENT */}
            <div className="sr-final-reveal">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[42px] shrink-0 bg-[#B79A72]" />
                <span className="font-serif text-[12px] font-normal uppercase leading-relaxed tracking-[0.17em] text-[#B79A72] sm:text-[14px] lg:text-[15px]">
                  Ready to Reach More Relevant B2B Buyers?
                </span>
              </div>

              <h2
                id="manufacturing-final-heading"
                className="mt-7 max-w-[750px] text-[clamp(2.3rem,4vw,4.25rem)] font-normal leading-[1.12] tracking-[-0.045em] text-[#0B2A52]"
              >
                Your Next B2B Opportunity Could Start With{" "}
                <span className="text-[#B79A72]">a Google Search.</span>
              </h2>

              <p className="mt-7 max-w-[610px] text-[14px] font-normal leading-[1.95] text-[#0B2A52]/70 sm:text-[15px]">
                Your manufacturing capabilities deserve to be discovered
                by businesses that need what you produce.
              </p>

              <p className="mt-4 max-w-[610px] text-[14px] font-normal leading-[1.95] text-[#0B2A52]/70 sm:text-[15px]">
                Let&apos;s build a digital marketing strategy that helps
                industrial buyers find your products, understand your
                capabilities and contact you for relevant quotation enquiries.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  title="Get My Manufacturing Growth Plan"
                  className="sr-final-link group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[13px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-normal text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#153B69] hover:shadow-[0_15px_35px_rgba(11,42,82,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2A52]"
                >
                  Get My Manufacturing Growth Plan
                  <ArrowUpRight size={16} className="sr-final-arrow shrink-0" />
                </Link>

                <Link
                  href="/contact"
                  title="Talk to Sharp Rays"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[13px] border border-[#DCE6EE] bg-white px-6 py-3.5 text-[12px] font-normal text-[#0B2A52] transition-all duration-300 hover:-translate-y-1 hover:border-[#B79A72]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2A52]"
                >
                  <MessageCircle size={16} strokeWidth={1.6} />
                  Talk to Sharp Rays
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-9 flex items-start gap-3 border-t border-[#E1E9F0] pt-6">
                <Check size={17} className="mt-0.5 shrink-0 text-[#B79A72]" />
                <p className="text-[12px] font-normal leading-[1.8] text-[#0B2A52]/60">
                  A marketing approach based on your products, production
                  capabilities and target industrial buyers.
                </p>
              </div>
            </div>

            {/* RIGHT — GROWTH JOURNEY VISUAL */}
            <div className="sr-final-reveal relative mx-auto w-full max-w-[490px]" style={{ animationDelay: "130ms" }}>
              <div className="relative overflow-hidden rounded-[24px] border border-[#E0E9F0] bg-white p-6 shadow-[0_24px_65px_rgba(11,42,82,0.075)] sm:p-8 lg:p-9">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-normal uppercase tracking-[0.16em] text-[#B79A72]">
                      Manufacturing Growth Journey
                    </p>
                    <h3 className="mt-3 text-[23px] font-normal tracking-[-0.03em] text-[#0B2A52] sm:text-[26px]">
                      From Online Visibility to Buyer Enquiries.
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#F5EFE6] text-[#B79A72]">
                    <Factory size={21} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="relative space-y-3">
                  <div aria-hidden="true" className="absolute bottom-10 left-[23px] top-10 w-px bg-[#E1E9F0]" />

                  {growthSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="sr-growth-step relative flex items-center gap-4 rounded-[14px] border border-[#E3EAF0] bg-[#FAFCFD] p-4 sm:p-5"
                      >
                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#B79A72]">
                          <Icon size={21} strokeWidth={1.6} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-normal tracking-[0.12em] text-[#B79A72]">
                            STEP {step.number}
                          </p>
                          <h4 className="mt-1.5 text-[15px] font-normal text-[#0B2A52] sm:text-[16px]">
                            {step.label}
                          </h4>
                        </div>

                        <ArrowUpRight size={16} className="shrink-0 text-[#B79A72]/70" />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7 border-t border-[#E5EBF0] pt-5">
                  <p className="text-[12px] font-normal leading-[1.8] text-[#0B2A52]/60">
                    A connected approach to industrial search visibility,
                    buyer evaluation and quotation enquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div
        id="manufacturing-faq"
        className="relative py-20 sm:py-24 lg:py-28 xl:py-32"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16 xl:gap-20">
            {/* FAQ LEFT INTRO */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-[42px] shrink-0 bg-[#B79A72]" />
                <span className="font-serif text-[12px] font-normal uppercase tracking-[0.17em] text-[#B79A72] sm:text-[14px]">
                  Manufacturing Marketing FAQs
                </span>
              </div>

              <h2 className="mt-6 text-[clamp(2rem,3.3vw,3.5rem)] font-normal leading-[1.15] tracking-[-0.04em] text-[#0B2A52]">
                Frequently Asked{" "}
                <span className="text-[#B79A72]">Questions.</span>
              </h2>

              <p className="mt-6 max-w-[390px] text-[13px] font-normal leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
                Answers to common questions about manufacturing SEO,
                industrial lead generation, Google Ads and digital
                marketing for B2B manufacturers.
              </p>

              <div className="mt-9 flex items-start gap-3 rounded-[15px] border border-[#E3EAF0] bg-[#F8FBFD] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-white text-[#B79A72]">
                  <HelpCircle size={20} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-[14px] font-normal text-[#0B2A52]">
                    Have a Specific Requirement?
                  </p>
                  <p className="mt-2 text-[12px] font-normal leading-[1.8] text-[#0B2A52]/60">
                    Discuss your products, buyers and manufacturing
                    marketing requirements with our team.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-[12px] font-normal text-[#B79A72] transition-colors hover:text-[#0B2A52]"
                  >
                    Contact Sharp Rays
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ ACCORDION */}
            <div className="space-y-3">
              {manufacturingFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const questionId = `manufacturing-faq-question-${index}`;
                const answerId = `manufacturing-faq-answer-${index}`;

                return (
                  <div
                    key={faq.question}
                    className={`sr-faq-item overflow-hidden rounded-[16px] border ${
                      isOpen
                        ? "border-[#D7E2EB] bg-[#F8FBFD]"
                        : "border-[#E4EBF1] bg-white"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        id={questionId}
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center gap-4 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#B79A72] sm:px-7 sm:py-6"
                      >
                        <span className="shrink-0 self-start pt-0.5 font-serif text-[14px] font-normal text-[#B79A72]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="min-w-0 flex-1 text-[14px] font-normal leading-[1.6] text-[#0B2A52] sm:text-[16px]">
                          {faq.question}
                        </span>

                        <span
                          className={`sr-faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E1E8EE] text-[#0B2A52] ${
                            isOpen ? "sr-faq-icon-open" : "bg-white"
                          }`}
                        >
                          <ChevronDown size={16} strokeWidth={1.7} />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                      className="px-5 pb-6 pl-12 pr-6 sm:pb-7 sm:pl-[67px] sm:pr-10"
                    >
                      <div className="mb-4 h-px w-full bg-[#E1E8EF]" />
                      <p className="text-[12px] font-normal leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}

              <p className="pt-4 text-[11px] font-normal leading-[1.8] text-[#0B2A52]/45">
                Digital marketing results vary according to competition,
                website quality, products, target markets and implementation.
                No specific rankings, enquiry volumes or timelines are guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
