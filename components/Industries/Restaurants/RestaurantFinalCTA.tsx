
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
  Check,
} from "lucide-react";

const restaurantFAQs = [
  {
    question: "How can restaurants attract more customers online?",
    answer:
      "Restaurants can improve their online visibility through Google Business Profile optimisation, local SEO, engaging food content, social media marketing and relevant advertising. Clear menus, accurate locations, opening hours and easy booking or ordering options also help customers take action.",
  },
  {
    question: "What is restaurant SEO?",
    answer:
      "Restaurant SEO is the process of improving a restaurant's visibility for relevant searches on Google and other search platforms. It can include local SEO, Google Maps optimisation, restaurant website improvements, menu information, location pages and content related to cuisine and dining experiences.",
  },
  {
    question: "How can my restaurant rank higher on Google Maps?",
    answer:
      "Keep your Google Business Profile accurate and complete, choose relevant business categories, update opening hours, provide useful menu information, add authentic restaurant photos and encourage genuine customer reviews. Local rankings depend on relevance, distance and prominence, so exact positions cannot be guaranteed.",
  },
  {
    question: "Is Instagram marketing useful for restaurants?",
    answer:
      "Yes. Instagram can help potential customers discover dishes, dining experiences, menus and restaurant offers through photos, Reels and other content. Connecting that interest to directions, reservations, menus or ordering makes social media more useful for the business.",
  },
  {
    question: "Are Google Ads effective for restaurants?",
    answer:
      "Google Ads can be effective for reaching people searching for restaurants, cuisines, nearby dining options or food services. Results depend on location targeting, competition, campaign relevance, budget and the ease of taking the intended next step.",
  },
  {
    question: "How can a restaurant get more table reservations?",
    answer:
      "Restaurants can support reservations by providing clear booking options, accurate business information, useful dining and menu details, relevant local search visibility and campaigns aimed at customers planning a dining experience.",
  },
  {
    question: "How can cloud kitchens increase online food orders?",
    answer:
      "Cloud kitchens can improve order opportunities through menu visibility, delivery-area targeting, relevant food searches, social media advertising, smooth ordering experiences and retention strategies that encourage customers to reorder.",
  },
  {
    question: "How can restaurants increase repeat customers?",
    answer:
      "Repeat business can be supported through good customer experiences, genuine feedback, loyalty programmes, relevant menu updates, suitable offers and consent-based WhatsApp or email communication. A convenient ordering or reservation process can also encourage customers to return.",
  },
  {
    question: "What digital marketing services does a restaurant need?",
    answer:
      "The right services depend on its business model and growth goals. A neighbourhood restaurant may prioritise Google Maps and local SEO, while a cloud kitchen may focus on ordering visibility and retention. Fine-dining restaurants may benefit from reservation-focused campaigns and premium content.",
  },
  {
    question: "How much does restaurant digital marketing cost in India?",
    answer:
      "Restaurant digital marketing costs depend on the number of outlets, target locations, competition, required services, content production and advertising budget. A local café may need Google Maps optimisation and social media marketing, while a restaurant chain may require multi-location SEO, advertising and customer retention systems.",
  },
];

export default function RestaurantFinalCTA() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ((current) => (current === index ? null : index));
  };

  return (
    <section
      id="restaurant-final-cta"
      aria-labelledby="restaurant-final-cta-heading"
      className="relative overflow-hidden bg-[#F8FBFD] text-[#0B2A52]"
    >
      {/* ===================================== */}
      {/* 01 — PREMIUM RESTAURANT FINAL CTA     */}
      {/* ===================================== */}

      <div className="bg-white px-5 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="mx-auto max-w-[1320px]">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0B2A52] px-7 py-14 text-white sm:rounded-[36px] sm:px-12 sm:py-16 lg:min-h-[460px] lg:px-16 lg:py-20 xl:px-20">
            {/* Subtle architectural background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -right-[100px] -top-[260px] h-[600px] w-[600px] rounded-full border border-white/[0.06]" />

              <div className="absolute -right-[10px] -top-[180px] h-[460px] w-[460px] rounded-full border border-white/[0.05]" />

              <div className="absolute -bottom-[250px] left-[16%] h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[90px]" />
            </div>

            {/* Main CTA layout */}
            <div className="relative grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
              {/* LEFT — Heading and description */}
              <div>
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#D9B88B]" />

                  <span className="font-serif text-[11px] uppercase tracking-[0.17em] text-[#D9B88B] sm:text-[12px]">
                    Ready to Grow Your Restaurant?
                  </span>
                </div>

                <h2
                  id="restaurant-final-cta-heading"
                  className="max-w-[760px] font-serif text-[34px] font-normal leading-[1.13] tracking-[-0.035em] sm:text-[43px] lg:text-[48px] xl:text-[54px]"
                >
                  Your Next Customer Could Be Searching for a Place to Eat{" "}
                  <span className="block text-[#D9B88B]">
                    Right Now.
                  </span>
                </h2>

                <p className="mt-7 max-w-[690px] font-serif text-[16px] font-normal leading-[1.85] text-white/75 sm:text-[18px] lg:text-[19px]">
                  Let&apos;s help more local customers discover your
                  restaurant, explore your food and take the next step —
                  whether that&apos;s visiting, booking a table or placing
                  an order.
                </p>
              </div>

              {/* RIGHT — Main action */}
              <div className="flex flex-col items-start lg:items-stretch lg:text-right">
                <Link
                  href="/contact?service=restaurant-marketing"
                  title="Get My Restaurant Growth Plan"
                  className="group inline-flex min-h-[72px] w-full items-center justify-between gap-5 rounded-[20px] bg-white px-6 py-5 font-serif text-[15px] leading-[1.5] text-[#0B2A52] shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:bg-[#F8F3EC] hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B88B] motion-safe:hover:-translate-y-1 sm:min-h-[80px] sm:px-8 sm:text-[15px]"
                >
                  <span>Get My Restaurant Growth Plan</span>

                 
                </Link>

                {/* Supporting message */}
                <p className="mt-6 max-w-[390px] font-serif text-[14px] leading-[1.75] text-[#B7C4D3] sm:text-[16px] lg:ml-auto">
                  A restaurant marketing strategy shaped around your
                  location, customers and business goals.
                </p>

                {/* Secondary CTA */}
                <Link
                  href="/contact"
                  title="Talk to Sharp Rays"
                  className="group mt-6 inline-flex w-fit items-center gap-2 border-b border-[#D9B88B]/60 pb-1.5 font-serif text-[14px] text-[#D9B88B] transition-colors duration-300 hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:ml-auto"
                >
                  Talk to Sharp Rays

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* 02 — FAQ SECTION                     */}
      {/* ===================================== */}

      <div
        id="restaurant-faqs"
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        {/* Subtle background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#B79A72]/[0.045] blur-[100px]"
        />

        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-20">
            {/* LEFT — STICKY FAQ INTRO */}
            <div className="lg:sticky lg:top-28">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <span className="font-serif text-[11px] uppercase tracking-[0.16em] text-[#B79A72] sm:text-[12px]">
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="max-w-[420px] font-serif text-[30px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[38px] lg:text-[42px]">
                Questions About{" "}
                <span className="text-[#B79A72]">
                  Restaurant Marketing?
                </span>
              </h2>

              <p className="mt-5 max-w-[365px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
                Explore common questions about restaurant SEO,
                Google Maps, social media, reservations,
                advertising and customer retention.
              </p>

              {/* FAQ supporting panel */}
              <div className="mt-9 hidden max-w-[350px] overflow-hidden rounded-[18px] border border-[#E1E8EE] bg-white p-6 lg:block">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#F7F2EB] text-[#B79A72]">
                    <HelpCircle size={22} strokeWidth={1.5} />
                  </div>

                  <span className="font-serif text-[30px] text-[#B79A72]/55">
                    10
                  </span>
                </div>

                <p className="mt-6 font-serif text-[21px] leading-[1.35] text-[#0B2A52]">
                  Clear answers.
                  <span className="block text-[#B79A72]">
                    Better decisions.
                  </span>
                </p>

                <p className="mt-3 text-[12px] leading-[1.85] text-[#0B2A52]/60">
                  Understand the practical digital marketing
                  opportunities available to your restaurant.
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-[#E8EDF1] pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B79A72]" />

                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#8A99A8]">
                    Restaurant Growth Insights
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — FAQ ACCORDION */}
            <div>
              <div className="overflow-hidden rounded-[20px] border border-[#E0E7ED] bg-white shadow-[0_20px_60px_-45px_rgba(11,42,82,0.13)]">
                {restaurantFAQs.map((faq, index) => {
                  const isOpen = openFAQ === index;

                  return (
                    <div
                      key={faq.question}
                      className={`group border-b border-[#E7ECF1] transition-colors duration-300 last:border-b-0 ${
                        isOpen
                          ? "bg-[#FCFDFE]"
                          : "bg-white hover:bg-[#FAFBFC]"
                      }`}
                    >
                      <h3>
                        <button
                          id={`restaurant-faq-trigger-${index}`}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`restaurant-faq-panel-${index}`}
                          onClick={() => toggleFAQ(index)}
                          className="flex w-full items-start gap-4 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#B79A72] sm:gap-5 sm:px-7 sm:py-6"
                        >
                          {/* Question number */}
                          <span
                            className={`mt-1 shrink-0 font-serif text-[13px] transition-colors duration-300 ${
                              isOpen
                                ? "text-[#B79A72]"
                                : "text-[#A5B0BC]"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Question text */}
                          <span
                            className={`min-w-0 flex-1 font-serif text-[17px] font-normal leading-[1.4] tracking-[-0.01em] transition-colors duration-300 sm:text-[20px] ${
                              isOpen
                                ? "text-[#0B2A52]"
                                : "text-[#2B4561]"
                            }`}
                          >
                            {faq.question}
                          </span>

                          {/* Expand / collapse icon */}
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? "rotate-180 border-[#0B2A52] bg-[#0B2A52] text-white"
                                : "border-[#E1E7ED] bg-[#F8FAFC] text-[#0B2A52] group-hover:border-[#D4B88E] group-hover:text-[#B79A72]"
                            }`}
                          >
                            {isOpen ? (
                              <Minus size={15} strokeWidth={1.6} />
                            ) : (
                              <Plus size={15} strokeWidth={1.6} />
                            )}
                          </span>
                        </button>
                      </h3>

                      {/* Animated answer */}
                      <div
                        id={`restaurant-faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`restaurant-faq-trigger-${index}`}
                        aria-hidden={!isOpen}
                        inert={!isOpen}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="pb-6 pl-12 pr-6 sm:pb-7 sm:pl-[72px] sm:pr-10">
                            <div className="mb-4 h-px w-8 bg-[#B79A72]/60" />

                            <p className="max-w-[680px] text-[12px] leading-[1.95] text-[#0B2A52]/65 sm:text-[13px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* FAQ footer */}
              <div className="mt-7 flex flex-col gap-4 rounded-[15px] border border-[#E8E1D7] bg-[#FAF7F2] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
                <div>
                  <p className="font-serif text-[18px] text-[#0B2A52]">
                    Still have a question?
                  </p>

                  <p className="mt-1 text-[12px] leading-[1.8] text-[#0B2A52]/60">
                    Let&apos;s discuss what makes sense for your
                    restaurant.
                  </p>
                </div>

                <Link
                  href="/contact"
                  title="Ask Sharp Rays a Question"
                  className="group inline-flex shrink-0 items-center gap-2 text-[12px] font-medium text-[#0B2A52] transition-colors duration-300 hover:text-[#B79A72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                >
                  Ask Sharp Rays

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#B79A72] transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
