
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileSearch,
  MapPin,
  Search,
  Stethoscope,
} from "lucide-react";

const searchGroups = [
  {
    id: "specialists",
    label: "Specialists",
    title: "Doctor & Specialist Searches",
    description:
      "Doctor profiles, verified qualifications, specialty pages and location-focused SEO help people find relevant medical professionals.",
    icon: Stethoscope,
    searches: [
      "cardiologist near me",
      "dermatologist in [city]",
      "orthopaedic doctor in [location]",
      "paediatrician near me",
      "ENT specialist in [city]",
    ],
  },
  {
    id: "clinics",
    label: "Clinics",
    title: "Hospital & Clinic Searches",
    description:
      "Accurate clinic information, eligible Google Business Profiles and dedicated location pages help people find relevant healthcare facilities.",
    icon: Building2,
    searches: [
      "hospital near me",
      "multispeciality clinic in [city]",
      "dental clinic near me",
      "eye clinic in [location]",
      "physiotherapy clinic near me",
    ],
  },
  {
    id: "services",
    label: "Services",
    title: "Medical Service Searches",
    description:
      "Clear service pages, availability information and appropriate location details help people understand the healthcare services you provide.",
    icon: MapPin,
    searches: [
      "blood test centre near me",
      "ultrasound centre in [city]",
      "ECG test near me",
      "physiotherapy consultation in [city]",
      "health checkup packages in [location]",
    ],
  },
  {
    id: "research",
    label: "Research",
    title: "Healthcare Information Searches",
    description:
      "Accurate, professionally reviewed educational content can help visitors understand services, consultation options and questions to discuss with a qualified clinician.",
    icon: FileSearch,
    searches: [
      "what happens during a cardiology consultation",
      "how to prepare for an ultrasound",
      "what to expect at a dermatology appointment",
      "questions to ask an orthopaedic doctor",
      "how to book a specialist consultation",
    ],
  },
] as const;

type SearchGroupId = (typeof searchGroups)[number]["id"];

export default function HealthcareSearchOpportunities() {
  const [activeGroup, setActiveGroup] =
    useState<SearchGroupId>("specialists");

  const active =
    searchGroups.find((group) => group.id === activeGroup) ??
    searchGroups[0];

  const ActiveIcon = active.icon;

  return (
    <section
      id="healthcare-search-opportunities"
      className="relative isolate w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]"
    >
      {/* Subtle Background */}
      <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full bg-[#E8F2FC]/70 blur-[60px]" />
      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#EFF6FC]/80 blur-[55px]" />

      <div className="relative mx-auto grid w-full max-w-[1500px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-14 lg:py-24 xl:gap-20 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">

        {/* LEFT — EDITORIAL CONTENT */}
        <div className="max-w-[640px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 shrink-0 bg-[#B79A72]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              How Patients Search Online
            </p>
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Help Patients Find the Right Care{" "}
            <span className="text-[#B79A72]">
              When They&apos;re Looking for It.
            </span>
          </h2>

          <p className="mt-6 text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:text-[16px]">
            Patients search for healthcare in different ways. Some look for a
            nearby doctor or hospital, while others research a medical
            specialty, diagnostic service or consultation option.
          </p>

          <p className="mt-4 text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px]">
            We help healthcare providers improve search visibility by matching
            relevant searches with accurate, useful service, specialist and
            location pages.
          </p>

          {/* Search Category Selector */}
          <div
            role="group"
            aria-label="Healthcare search categories"
            className="mt-8 flex flex-wrap gap-2"
          >
            {searchGroups.map((group) => {
              const Icon = group.icon;
              const selected = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroup(group.id)}
                  aria-pressed={selected}
                  className={`inline-flex min-h-[42px] items-center gap-2 rounded-full border px-4 text-[12px] font-medium transition-all duration-200 ${
                    selected
                      ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-[0_8px_20px_rgba(11,42,82,0.1)]"
                      : "border-[#0B2A52]/10 bg-white text-[#0B2A52]/75 hover:border-[#B79A72]/50"
                  }`}
                >
                  <Icon size={15} strokeWidth={1.7} />
                  {group.label}
                </button>
              );
            })}
          </div>

          {/* SEO Explanation */}
          <div className="mt-9 border-l-2 border-[#B79A72] pl-5">
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                strokeWidth={1.7}
                className="mt-1 shrink-0 text-[#B79A72]"
              />

              <div>
                <h3 className="text-[16px] font-medium sm:text-[17px]">
                  Search Intent Matters
                </h3>

                <p className="mt-2 max-w-[500px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                  The right page should answer the right search. We focus on
                  accurate provider information, useful content and clear
                  ways to contact your healthcare organisation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — SEARCH EXPLORER */}
        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-[25px] border border-[#DCE8F3] bg-white shadow-[0_20px_55px_rgba(11,42,82,0.06)]">

            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-[#E7EEF5] bg-[#F9FBFD] px-5 py-4">
              <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
              <span className="h-2 w-2 rounded-full bg-[#D8E5F1]" />
              <span className="h-2 w-2 rounded-full bg-[#D8E5F1]" />

              <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.14em] text-[#0B2A52]/40">
                Search Intent Explorer
              </span>
            </div>

            <div className="p-5 sm:p-7">
              {/* Search Input Mockup */}
              <div className="flex min-h-[52px] items-center gap-3 rounded-[15px] border border-[#DCE7F0] bg-[#F8FBFD] px-4">
                <Search
                  size={18}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#B79A72]"
                />

                <span className="min-w-0 flex-1 truncate text-[12px] text-[#0B2A52]/55 sm:text-[13px]">
                  {active.searches[0]}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-white text-[#0B2A52]">
                  <ActiveIcon size={17} strokeWidth={1.6} />
                </span>
              </div>

              {/* Category Header */}
              <div className="mt-7 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#B79A72]">
                    {active.label} Search Intent
                  </p>

                  <h3 className="mt-2 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[22px]">
                    {active.title}
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDF5FC] text-[#0B2A52]">
                  <ActiveIcon size={21} strokeWidth={1.6} />
                </span>
              </div>

              {/* Search Results */}
              <div className="mt-5 space-y-2.5">
                {active.searches.map((term, index) => (
                  <div
                    key={term}
                    className="group flex items-center gap-3 rounded-[13px] border border-[#E6EDF4] bg-white px-4 py-3.5 transition-colors duration-200 hover:border-[#C8DCEC] hover:bg-[#F8FBFD]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EDF5FC] text-[#B79A72]">
                      <Search size={14} strokeWidth={1.7} />
                    </span>

                    <span className="min-w-0 flex-1 text-[12px] font-medium leading-5 text-[#0B2A52]/80 sm:text-[13px]">
                      {term}
                    </span>

                    <span className="shrink-0 text-[10px] tracking-[0.1em] text-[#0B2A52]/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Supporting Context */}
              <div className="mt-6 rounded-[16px] bg-[#F2F7FB] px-4 py-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#B79A72]">
                    <ArrowUpRight size={17} strokeWidth={1.7} />
                  </span>

                  <p className="text-[12px] leading-6 text-[#0B2A52]/70 sm:text-[13px]">
                    {active.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fine Print */}
          <p className="mt-5 px-1 text-[11px] leading-6 text-[#0B2A52]/50 sm:text-[12px]">
            Illustrative search phrases only — not verified search-volume,
            ranking or performance data. Keyword targeting depends on actual
            services, locations and relevant search competition.
          </p>
        </div>
      </div>
    </section>
  );
}
