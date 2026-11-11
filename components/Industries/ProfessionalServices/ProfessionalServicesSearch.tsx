
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Building2,
  Lightbulb,
  Search,
  Check,
  Target,
  Layers3,
} from "lucide-react";

type CategoryId =
  | "services"
  | "location"
  | "industry"
  | "problems";

const categories = [
  {
    id: "services",
    number: "01",
    label: "Services",
    icon: BriefcaseBusiness,
    eyebrow: "SERVICE DISCOVERY",
    heading: "Searching for the right expertise",
    description:
      "Prospective clients who already understand the professional service they need may be actively exploring suitable firms.",
    searches: [
      "business consulting services",
      "HR consulting services",
      "GST advisory services",
    ],
    intent: "Service-seeking intent",
    intentDescription:
      "These searches may indicate an interest in comparing professional services and finding a suitable provider.",
    strategy:
      "Create dedicated service pages that clearly communicate your firm's expertise, who you help, your working approach and how prospective clients can enquire.",
    solutions: [
      "Dedicated service pages",
      "Relevant service SEO",
      "Clear enquiry pathways",
    ],
  },
  {
    id: "location",
    number: "02",
    label: "Location",
    icon: MapPin,
    eyebrow: "LOCAL DISCOVERY",
    heading: "Searching for expertise in the right place",
    description:
      "Businesses may prefer consultants, advisors and professional firms that operate in or serve a particular location.",
    searches: [
      "business consultant in Mumbai",
      "HR consultancy in Pune",
      "tax advisory firm in [city]",
    ],
    intent: "Local service intent",
    intentDescription:
      "Location-related searches may indicate stronger interest in finding an accessible or regionally relevant provider.",
    strategy:
      "Develop useful location-specific content, accurate business listings, locally relevant service pages and Google Business Profile optimisation where eligible.",
    solutions: [
      "Local SEO",
      "Location-specific pages",
      "Business profile accuracy",
    ],
  },
  {
    id: "industry",
    number: "03",
    label: "Industry",
    icon: Building2,
    eyebrow: "INDUSTRY EXPERTISE",
    heading: "Searching for someone who understands their sector",
    description:
      "Some decision-makers specifically look for professional advisors with relevant industry understanding.",
    searches: [
      "HR consulting for startups",
      "business consulting for manufacturers",
      "operations consulting for healthcare businesses",
    ],
    intent: "Specialised service intent",
    intentDescription:
      "These searches can indicate demand for professional expertise relevant to a particular industry or business model.",
    strategy:
      "Build relevant industry landing pages, specialist content and credible expertise signals that reflect the industries your firm actually serves.",
    solutions: [
      "Industry landing pages",
      "Sector-focused content",
      "Credible expertise positioning",
    ],
  },
  {
    id: "problems",
    number: "04",
    label: "Problems",
    icon: Lightbulb,
    eyebrow: "PROBLEM DISCOVERY",
    heading: "Searching for an answer before choosing a firm",
    description:
      "Prospective clients sometimes research a business challenge before deciding whether they need professional support.",
    searches: [
      "how to improve business operations",
      "GST compliance support for companies",
      "how to reduce employee attrition",
    ],
    intent: "Research and mixed intent",
    intentDescription:
      "Many problem-based searches are informational, although some may indicate an immediate requirement for advisory services.",
    strategy:
      "Combine expert-led educational articles, practical resources and appropriately linked service pages to support both research and provider discovery.",
    solutions: [
      "Expert-led articles",
      "Educational SEO",
      "Relevant service-page links",
    ],
  },
] as const;

export default function ProfessionalServicesSearch() {
  const [activeId, setActiveId] =
    useState<CategoryId>("services");

  const active =
    categories.find((item) => item.id === activeId) ??
    categories[0];

  const ActiveIcon = active.icon;

  return (
    <section
      id="professional-services-opportunities"
      
      aria-labelledby="professional-opportunities-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* SECTION HEADING */}

        <div className="mx-auto max-w-[780px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72] sm:text-[11px]">
              How Prospective Clients Search
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="professional-opportunities-heading"
            className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[41px]"
          >
            Different Client Needs.
            <span className="block text-[#B79A72]">
              Different Search Opportunities.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
            Prospective clients discover professional services
            through specific expertise, locations, industries
            and business challenges. Each search deserves
            the right content and SEO approach.
          </p>
        </div>

        {/* MAIN EXPERIENCE */}

        <div className="mt-12 overflow-hidden rounded-[20px] border border-[#E1E7EC] bg-[#FBFCFD] lg:mt-14">

          {/* TOP CATEGORY NAVIGATION */}

          <div className="border-b border-[#E1E7EC] bg-white px-4 py-4 sm:px-7 sm:py-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="hidden text-[10px] uppercase tracking-[0.16em] text-[#8391A0] lg:block">
                Explore Search Intent
              </p>

              <div
                role="tablist"
                aria-label="Professional services search categories"
                className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap"
              >
                {categories.map((category) => {
                  const isActive = activeId === category.id;
                  const Icon = category.icon;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      id={`search-category-${category.id}`}
                      aria-selected={isActive}
                      aria-controls="professional-search-content"
                      onClick={() => setActiveId(category.id)}
                      className={`group inline-flex min-h-[43px] items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[12px] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72] sm:px-5 ${
                        isActive
                          ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-[0_7px_18px_rgba(11,42,82,0.12)]"
                          : "border-[#E0E6EC] bg-white text-[#506780] hover:border-[#B79A72] hover:text-[#0B2A52]"
                      }`}
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.6}
                        className={
                          isActive
                            ? "text-[#D4B88E]"
                            : "text-[#8B9AAB] group-hover:text-[#B79A72]"
                        }
                      />

                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div
            id="professional-search-content"
            role="tabpanel"
            aria-labelledby={`search-category-${activeId}`}
            className="grid lg:grid-cols-[1.05fr_0.95fr]"
          >

            {/* LEFT — SEARCH EXAMPLES */}

            <div className="relative min-w-0 border-b border-[#E1E7EC] bg-white px-6 py-9 sm:px-9 sm:py-11 lg:border-b-0 lg:border-r lg:px-11 lg:py-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-4 font-serif text-[105px] leading-none text-[#0B2A52]/[0.025] sm:text-[145px]"
              >
                {active.number}
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#F8F4EE] text-[#B79A72]">
                    <ActiveIcon
                      size={17}
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                    {active.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 max-w-[470px] font-serif text-[26px] font-normal leading-[1.24] tracking-[-0.025em] sm:text-[31px]">
                  {active.heading}
                </h3>

                <p className="mt-4 max-w-[490px] text-[13px] leading-[1.9] text-[#0B2A52]/65">
                  {active.description}
                </p>

                {/* EDITORIAL SEARCH LIST */}

                <div className="mt-9">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.15em] text-[#A58A67]">
                    Illustrative Client Searches
                  </p>

                  <div className="border-t border-[#E0E7EC]">
                    {active.searches.map((query, index) => (
                      <div
                        key={`${activeId}-${query}`}
                        className="group flex items-center gap-4 border-b border-[#E5EBF0] py-5 transition-colors duration-300 hover:bg-[#FAF8F4]"
                      >
                        <span className="shrink-0 font-serif text-[12px] text-[#B79A72]">
                          0{index + 1}
                        </span>

                        <Search
                          size={16}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#A3AFBA] transition-colors duration-300 group-hover:text-[#B79A72]"
                        />

                        <span className="min-w-0 flex-1 text-[13px] leading-[1.6] text-[#36516C] sm:text-[14px]">
                          {query}
                        </span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#BCC6D0] transition-all duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 group-hover:text-[#B79A72]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-[10px] leading-[1.8] text-[#97A4B1]">
                  Illustrative search examples. Actual keyword
                  targeting depends on your firm's services,
                  audience and competition.
                </p>
              </div>
            </div>

            {/* RIGHT — SEO SOLUTION */}

            <div className="relative flex min-w-0 flex-col bg-[#F7F9FB] px-6 py-9 sm:px-9 sm:py-11 lg:px-11 lg:py-12">
              {/* Intent indicator */}
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#E7DCCB] bg-[#FAF6F0] px-3 py-2 text-[10px] text-[#9A7F5D]">
                  <Target
                    size={13}
                    strokeWidth={1.6}
                  />
                  Search Intent
                </span>

                <span className="font-serif text-[14px] text-[#B79A72]">
                  {active.number} / 04
                </span>
              </div>

              {/* Intent */}
              <div className="mt-7">
                <h4 className="font-serif text-[24px] font-normal leading-[1.25] text-[#0B2A52] sm:text-[28px]">
                  {active.intent}
                </h4>

                <p className="mt-4 max-w-[440px] text-[13px] leading-[1.9] text-[#0B2A52]/65">
                  {active.intentDescription}
                </p>
              </div>

              {/* Separator */}
              <div className="my-8 h-px bg-[#DCE4EB]" />

              {/* Sharp Rays Solution */}
              <div>
                <div className="flex items-center gap-3">
                  <Layers3
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#B79A72]"
                  />

                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                    The Sharp Rays Approach
                  </span>
                </div>

                <p className="mt-5 max-w-[460px] font-serif text-[19px] font-normal leading-[1.55] text-[#284560] sm:text-[21px]">
                  {active.strategy}
                </p>

                {/* Simple deliverable list */}
                <div className="mt-7 space-y-3">
                  {active.solutions.map((solution) => (
                    <div
                      key={solution}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border border-[#DCC6A7] text-[#B79A72]">
                        <Check
                          size={11}
                          strokeWidth={1.8}
                        />
                      </span>

                      <span className="text-[12px] leading-[1.7] text-[#526A82]">
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom link */}
              <div className="mt-auto pt-10">
                <Link
                  href="/contact?service=professional-services-marketing"
                  className="group inline-flex items-center gap-3 border-b border-[#CDB48F] pb-2 text-[12px] font-medium text-[#0B2A52] transition-colors duration-300 hover:text-[#B79A72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                >
                  Discuss Your SEO Opportunities

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

        {/* IMPORTANT SEARCH DISTINCTION */}

        <div className="mt-8 flex flex-col gap-4 border-l-2 border-[#B79A72] bg-[#FAF8F4] px-5 py-5 sm:flex-row sm:items-start sm:gap-5 sm:px-7">
          <Lightbulb
            size={20}
            strokeWidth={1.5}
            className="shrink-0 text-[#B79A72]"
          />

          <div>
            <p className="text-[12px] font-medium text-[#0B2A52]">
              Different searches require different content.
            </p>

            <p className="mt-2 text-[12px] leading-[1.9] text-[#607488] sm:text-[13px]">
              Service and location searches may reflect stronger
              provider-seeking intent. Problem-based searches are
              often informational, so they benefit from a suitable
              combination of expert-led articles and relevant
              service pages.
            </p>
          </div>
        </div>

        {/* CLOSING COPY */}

        <div className="mt-12 flex flex-col gap-5 border-t border-[#E2E8ED] pt-8 sm:mt-14 lg:flex-row lg:gap-14">
          <div className="flex shrink-0 items-start gap-3 pt-2">
            <span className="mt-1.5 h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
              Beyond Keywords
            </span>
          </div>

          <p className="max-w-[880px] font-serif text-[20px] font-normal leading-[1.6] tracking-[-0.02em] text-[#28425F] sm:text-[24px]">
            We build professional services SEO and content
            strategies around{" "}
            <span className="text-[#B79A72]">
              what prospective clients need to understand
            </span>{" "}
            before choosing a service provider.
          </p>
        </div>
      </div>
    </section>
  );
}
