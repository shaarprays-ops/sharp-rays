
"use client";

import { useState } from "react";
import {
  ArrowRight,
  Search,
  BookOpenText,
  Layers3,
  GitCompareArrows,
  BriefcaseBusiness,
  Lightbulb,
  Target,
  Check,
} from "lucide-react";

type SearchCategory = "problems" | "solutions" | "comparisons" | "use-cases";

const categories = [
  {
    id: "problems",
    number: "01",
    label: "Problems",
    icon: Lightbulb,
    kicker: "THE PROBLEM STAGE",
    headline: "It starts with a question.",
    description:
      "Before choosing a product or service, potential customers often search for answers to a challenge they're trying to solve.",
    examples: [
      "how to manage employee attendance",
      "how to reduce packaging waste",
      "how to improve online store conversions",
      "how to simplify appointment scheduling",
    ],
    intent: "Primarily informational",
    recommendation: "Educational Articles",
    strategy:
      "Create useful articles, explainers and resources that help your audience understand real problems and possible approaches.",
  },
  {
    id: "solutions",
    number: "02",
    label: "Solutions",
    icon: Layers3,
    kicker: "THE SOLUTION STAGE",
    headline: "Then comes the search for a solution.",
    description:
      "Once customers recognise a need, they start looking for product categories, services and practical solutions.",
    examples: [
      "attendance management software",
      "sustainable packaging suppliers",
      "online fitness coaching",
      "appointment booking platform",
    ],
    intent: "Solution-seeking",
    recommendation: "Product & Service Landing Pages",
    strategy:
      "Build focused landing pages explaining your offer, its features, suitability and the next step for interested customers.",
  },
  {
    id: "comparisons",
    number: "03",
    label: "Comparisons",
    icon: GitCompareArrows,
    kicker: "THE EVALUATION STAGE",
    headline: "Before choosing, customers compare.",
    description:
      "Potential buyers research alternatives, evaluate differences and decide which option best fits their requirements.",
    examples: [
      "best attendance tracking software",
      "reusable vs biodegradable packaging",
      "best online fitness programs",
      "appointment scheduling tools comparison",
    ],
    intent: "Commercial investigation",
    recommendation: "Comparison & Buying Guides",
    strategy:
      "Develop accurate comparison content, buying guides and FAQs that help customers evaluate suitable solutions.",
  },
  {
    id: "use-cases",
    number: "04",
    label: "Use Cases",
    icon: BriefcaseBusiness,
    kicker: "THE RELEVANCE STAGE",
    headline: "Customers want something that fits.",
    description:
      "Some buyers search for products and services designed for their business type, industry or particular situation.",
    examples: [
      "attendance software for small businesses",
      "eco friendly packaging for skincare brands",
      "fitness coaching for working professionals",
      "booking system for beauty salons",
    ],
    intent: "Context-specific solution intent",
    recommendation: "Industry & Use-Case Pages",
    strategy:
      "Build focused pages demonstrating how your product or service addresses relevant needs for specific customer groups.",
  },
] as const;

export default function StartupCustomerSearch() {
  const [activeId, setActiveId] = useState<SearchCategory>("problems");
  const active = categories.find((item) => item.id === activeId) ?? categories[0];

  return (
    <section
      id="startup-customer-search"
      aria-labelledby="startup-customer-search-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-[790px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <span className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
              How Your Potential Customers Search
            </span>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="startup-customer-search-heading"
            className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
          >
            Your Customers Search Differently{" "}
            <span className="text-[#B79A72]">
              at Every Decision Stage.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[670px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            From identifying a problem to exploring products and comparing
            alternatives, customer searches reveal what people are looking
            for and the information they need.
          </p>
        </div>

        {/* CATEGORY SWITCHER */}
        <div
          role="tablist"
          aria-label="Startup customer search types"
          className="mx-auto mt-12 grid max-w-[780px] grid-cols-2 gap-2 rounded-[16px] border border-[#ECE4D9] bg-[#FAF8F5] p-2 sm:grid-cols-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const selected = category.id === activeId;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`customer-search-tab-${category.id}`}
                aria-selected={selected}
                aria-controls="customer-search-panel"
                onClick={() => setActiveId(category.id)}
                className={`group flex min-h-[52px] items-center justify-center gap-2 rounded-[11px] px-3 py-3 text-[12px] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72] ${
                  selected
                    ? "bg-white text-[#0B2A52] shadow-[0_5px_20px_rgba(102,76,43,0.09)]"
                    : "text-[#8E8A83] hover:bg-white/65 hover:text-[#0B2A52]"
                }`}
              >
                <Icon size={16} strokeWidth={1.5} className={selected ? "text-[#B79A72]" : "text-[#A9A39A]"} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* CUSTOMER SEARCH CANVAS */}
        <div
          id="customer-search-panel"
          role="tabpanel"
          aria-labelledby={`customer-search-tab-${activeId}`}
          className="relative mt-9 overflow-hidden rounded-[22px] border border-[#EAE2D8] bg-[#FBF9F5]"
        >
          {/* Fine grid background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(150,124,87,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(150,124,87,0.055)_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]"
          />

          <div className="relative px-5 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
            {/* Top labels */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5D5C0] bg-white text-[#B79A72]">
                  <Search size={16} strokeWidth={1.5} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#A58A67]">
                  Illustrative Customer Searches
                </span>
              </div>

              <span className="font-serif text-[13px] text-[#B79A72]">
                {active.number} / 04
              </span>
            </div>

            {/* Editorial category statement */}
            <div className="mx-auto mt-10 max-w-[740px] text-center sm:mt-12">
              <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                {active.kicker}
              </p>

              <h3 className="mt-4 font-serif text-[26px] font-normal leading-[1.2] tracking-[-0.03em] sm:text-[34px]">
                {active.headline}
              </h3>

              <p className="mx-auto mt-4 max-w-[580px] text-[13px] leading-[1.9] text-[#64778A]">
                {active.description}
              </p>
            </div>

            {/* Search phrases — editorial staggered composition */}
            <div className="mx-auto mt-10 grid max-w-[970px] gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
              {active.examples.map((example, index) => (
                <div
                  key={`${activeId}-${example}`}
                  className={`group relative flex min-h-[82px] items-center gap-4 rounded-[14px] border border-[#E7DED2] bg-white/95 px-5 py-4 shadow-[0_12px_30px_-26px_rgba(89,67,42,0.25)] transition-all duration-500 hover:border-[#D4B892] hover:bg-white hover:shadow-[0_14px_32px_-22px_rgba(89,67,42,0.14)] motion-safe:hover:-translate-y-1 sm:px-6 ${
                    index === 1 ? "sm:translate-y-5" : ""
                  } ${index === 3 ? "sm:translate-y-5" : ""}`}
                >
                  <span className="font-serif text-[12px] text-[#B79A72]">
                    0{index + 1}
                  </span>

                  <Search size={17} strokeWidth={1.5} className="shrink-0 text-[#B79A72]/65" />

                  <span className="min-w-0 flex-1 text-[13px] leading-[1.65] text-[#37516A] sm:text-[14px]">
                    {example}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E9E0D4] text-[#B79A72] transition-all duration-300 group-hover:border-[#D4B892] group-hover:bg-[#FAF4EC]">
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#E8DFD3] pt-6 sm:mt-16">
              <span className="inline-flex items-center gap-2 text-[11px] text-[#806D55]">
                <Target size={16} strokeWidth={1.5} className="text-[#B79A72]" />
                {active.intent}
              </span>

              <span className="text-[10px] leading-[1.7] text-[#988C7E]">
                Illustrative examples only — not verified keyword volumes.
              </span>
            </div>
          </div>
        </div>

        {/* CONTENT RECOMMENDATION */}
        <div className="mt-6 flex flex-col gap-5 rounded-[16px] border border-[#E9E1D7] bg-white px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="min-w-[220px] lg:w-[32%]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
              Recommended Content
            </p>

            <h4 className="mt-2 font-serif text-[22px] font-normal leading-[1.3] text-[#0B2A52]">
              {active.recommendation}
            </h4>
          </div>

          <span className="hidden h-14 w-px shrink-0 bg-[#E7DED2] lg:block" />

          <div className="flex flex-1 items-start gap-3">
            <BookOpenText size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#B79A72]" />
            <p className="text-[13px] leading-[1.9] text-[#63778A]">
              {active.strategy}
            </p>
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mt-11 flex flex-col gap-5 border-t border-[#E8E2DB] pt-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex shrink-0 items-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
              Strategy Before Keywords
            </span>
          </div>

          <p className="max-w-[875px] font-serif text-[10px]  leading-[1.6] text-[#284762] sm:text-[15px]">
            We help startups understand how potential customers describe
            their problems, evaluate available solutions and search for
            products. This allows us to build relevant SEO, content and
            advertising strategies around{" "}
            <span className="text-[#B79A72]">
              real customer demand.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
