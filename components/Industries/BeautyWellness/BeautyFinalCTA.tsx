"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "How can I get more salon bookings?",
    answer:
      "More salon bookings usually come from improving local visibility, making your services easier to discover, building trust through reviews and social proof, and creating a clear path from search or social media to enquiry and appointment.",
  },
  {
    question: "How can my salon rank higher on Google?",
    answer:
      "A stronger local SEO strategy can include Google Business Profile optimisation, service pages, location pages, reviews, local content and consistent business information across the web.",
  },
  {
    question: "Does Google Ads work for salons and spas?",
    answer:
      "Yes, especially when campaigns target high-intent searches for specific treatments, services and locations. The landing page, offer and booking journey also need to be aligned with the ad.",
  },
  {
    question: "Can Instagram generate real salon customers?",
    answer:
      "Yes. Instagram works best when content builds desire and trust through transformations, real results, expertise, services, offers and clear booking calls to action.",
  },
  {
    question: "How can I improve repeat bookings?",
    answer:
      "Repeat bookings can improve through appointment reminders, follow-up messages, rebooking prompts, personalised offers, review requests and WhatsApp or CRM automation.",
  },
  {
    question: "What digital marketing services are best for salons?",
    answer:
      "For most salons and wellness businesses, a strong mix includes local SEO, Google Maps visibility, Google Ads, social media marketing, landing pages, WhatsApp automation and customer retention workflows.",
  },
];

export default function BeautyFinalCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        {/* CTA */}
        <div className="relative overflow-hidden rounded-[30px] bg-[#0B2A52] px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-white/[0.06]" />
          <div className="pointer-events-none absolute -bottom-28 left-[30%] h-[260px] w-[260px] rounded-full bg-white/[0.025]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
            <div className="max-w-[760px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D7BD98]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D7BD98] sm:text-[11px]">
                  Ready to Grow?
                </p>
              </div>

              <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
                More Visibility Is Good.{" "}
                <span className="text-[#D7BD98]">
                  More Bookings Are Better.
                </span>
              </h2>

              <p className="mt-5 max-w-[680px] text-[14px] leading-7 text-white/65 sm:text-[15px] lg:text-[16px]">
                We build beauty and wellness marketing around the services you
                offer, the locations you serve and the customers you want to
                attract.
              </p>
            </div>

            <div className="lg:flex lg:justify-end">
              <Link
                href="/contact?industry=beauty-wellness#contact-form"
                title="Build My Beauty and Wellness Marketing Plan"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[15px] bg-white px-6 text-[12px] font-medium text-[#0B2A52] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#F7F2EA] hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)]"
              >
                Build My Beauty & Wellness Marketing Plan

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto mt-16 max-w-[1050px] lg:mt-20">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
                Frequently Asked Questions
              </p>

              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              Questions Beauty & Wellness Businesses Ask Us.
            </h2>
          </div>

          <div className="mt-10 border-t border-[#0B2A52]/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#0B2A52]/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] font-medium leading-6 tracking-[-0.015em] text-[#0B2A52] sm:text-[18px]">
                      {faq.question}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0B2A52]/10 bg-[#FBFAF7] text-[#B79A72]">
                      <Plus
                        size={16}
                        strokeWidth={1.8}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-5 sm:pb-6"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[820px] pr-12 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}