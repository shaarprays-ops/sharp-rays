"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How can an ecommerce website get more sales?",
    answer:
      "Increasing ecommerce sales usually requires improving the complete journey: attracting higher-intent traffic, strengthening product and category pages, improving conversion, running efficient paid campaigns and creating systems that encourage repeat purchases.",
  },
  {
    question: "How can ecommerce product pages rank higher on Google?",
    answer:
      "Product pages can improve their search visibility through useful and unique product content, strong internal linking, clear page structure, relevant structured data, optimised images and technically accessible pages.",
  },
  {
    question: "Are Google Shopping Ads effective for ecommerce?",
    answer:
      "They can be highly effective when product feeds, campaign structure, pricing, landing pages and margins are aligned. The objective should be profitable sales rather than simply generating more clicks.",
  },
  {
    question: "Are Meta Ads better than Google Ads for ecommerce?",
    answer:
      "They serve different purposes. Google is especially useful for capturing existing search demand, while Meta can help create product discovery and demand. Many ecommerce brands benefit from using both strategically.",
  },
  {
    question: "How can I reduce ecommerce customer acquisition cost?",
    answer:
      "Reducing CAC can involve improving targeting, creatives, product offers, landing pages, conversion rates, remarketing and retention. Better organic visibility can also reduce dependence on paid acquisition over time.",
  },
  {
    question: "How can SEO help an ecommerce store?",
    answer:
      "Ecommerce SEO helps product, category and informational pages appear when customers search for products, comparisons and buying information. This can create a more sustainable source of qualified traffic over time.",
  },
  {
    question: "How can I improve repeat purchases?",
    answer:
      "Repeat purchases can be improved through better post-purchase communication, remarketing, email and WhatsApp campaigns, replenishment reminders, loyalty offers and relevant follow-up based on previous purchases.",
  },
  {
    question: "What should ecommerce product pages include?",
    answer:
      "Strong product pages typically include clear product information, benefits, pricing, images, specifications, delivery information, reviews, trust signals and a simple purchase path.",
  },
  {
    question: "How can I improve ecommerce conversion rate?",
    answer:
      "Focus on page speed, mobile usability, product clarity, pricing and offers, trust signals, reviews, navigation and checkout friction. Conversion improvements usually come from fixing several smaller issues rather than one major change.",
  },
  {
    question: "Should an ecommerce brand focus on SEO or paid ads first?",
    answer:
      "It depends on the brand's current visibility, margins, demand and growth stage. Paid advertising can create faster traffic and testing opportunities, while SEO builds longer-term organic visibility. In many cases, the strongest strategy uses both.",
  },
];

export default function EcommerceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      <div className="pointer-events-none absolute -left-28 top-10 h-64 w-64 rounded-full bg-[#E8F2FC]/65 blur-[50px]" />
      <div className="pointer-events-none absolute -right-28 bottom-[-60px] h-72 w-72 rounded-full bg-[#F2E9DC]/40 blur-[55px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Frequently Asked Questions
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Questions Ecommerce Brands{" "}
            <span className="text-[#B79A72]">Ask Us.</span>
          </h2>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-12 max-w-[1050px] border-t border-[#0B2A52]/10">
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
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                >
                  <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                    <span className="mt-[3px] hidden text-[9px] font-semibold tracking-[0.15em] text-[#B79A72]/75 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[16px] font-medium leading-6 tracking-[-0.015em] text-[#0B2A52] sm:text-[18px]">
                      {faq.question}
                    </span>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0B2A52]/10 bg-white text-[#B79A72] shadow-[0_6px_18px_rgba(11,42,82,0.04)]">
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
                    <p className="max-w-[860px] pr-10 text-[13px] leading-6 text-[#0B2A52]/65 sm:pl-9 sm:text-[14px] sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}