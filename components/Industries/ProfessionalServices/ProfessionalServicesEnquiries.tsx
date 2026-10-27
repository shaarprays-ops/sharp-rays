
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  BriefcaseBusiness,
  MessageSquareText,
  MapPin,
  CalendarCheck2,
  Search,
  Target,
  UserRoundCheck,
  ShieldCheck,
  Check,
  ChartNoAxesCombined,
} from "lucide-react";

const steps = [
  {
    number: "01",
    short: "Service",
    title: "Service Required",
    icon: BriefcaseBusiness,
    question: "What professional service is needed?",
    description:
      "Understand the consulting, advisory or specialist service the prospective client is looking for.",
  },
  {
    number: "02",
    short: "Requirement",
    title: "Business Requirement",
    icon: MessageSquareText,
    question: "What does the business need help with?",
    description:
      "Learn about the general challenge or objective behind the enquiry without requesting sensitive information.",
  },
  {
    number: "03",
    short: "Location",
    title: "Location or Service Area",
    icon: MapPin,
    question: "Where is support required?",
    description:
      "Check whether the enquiry aligns with the firm's geographic coverage and the locations it serves.",
  },
  {
    number: "04",
    short: "Consultation",
    title: "Consultation Interest",
    icon: CalendarCheck2,
    question: "Is the client interested in a discussion?",
    description:
      "Give the prospective client a clear next step, from requesting more details to arranging an initial conversation.",
  },
] as const;

const metrics = [
  {
    number: "01",
    icon: UserRoundCheck,
    title: "Relevant Client Enquiries",
    purpose: "How many enquiries match the firm's services",
    category: "ENQUIRY QUALITY",
  },
  {
    number: "02",
    icon: CalendarCheck2,
    title: "Enquiry-to-Consultation Rate",
    purpose: "How many enquiries progress to discussions",
    category: "CONVERSION",
  },
  {
    number: "03",
    icon: Target,
    title: "Cost per Qualified Enquiry",
    purpose: "Acquisition efficiency for measurable campaigns",
    category: "EFFICIENCY",
  },
  {
    number: "04",
    icon: Search,
    title: "Organic Search Visibility",
    purpose: "Relevant service and industry searches",
    category: "DISCOVERABILITY",
  },
  {
    number: "05",
    icon: MessageSquareText,
    title: "Consultation Requests",
    purpose: "Demand for initial professional conversations",
    category: "CLIENT INTEREST",
  },
] as const;

export default function ProfessionalServicesEnquiries() {
  const [activeStep, setActiveStep] = useState(0);

  const current = steps[activeStep];

  return (
    <section
      id="professional-services-enquiries"
      aria-labelledby="professional-enquiries-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* ================================= */}
        {/* 01 — MAIN SECTION HEADING         */}
        {/* ================================= */}

        <div className="mx-auto max-w-[790px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
              Qualified Client Enquiries
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="professional-enquiries-heading"
            className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
          >
            Turn Client Interest Into{" "}
            <span className="text-[#B79A72]">
              Meaningful Conversations.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            A useful enquiry is more than a contact detail.
            We help professional firms build clear enquiry
            experiences that capture relevant context
            and support better initial client conversations.
          </p>
        </div>

        {/* ================================= */}
        {/* 02 — INTERACTIVE ENQUIRY JOURNEY */}
        {/* ================================= */}

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">

          {/* Left editorial introduction */}

          <div className="lg:pt-6">
            <span className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
              Understanding a Client&apos;s Needs
            </span>

            <h3 className="mt-5 max-w-[390px] font-serif text-[27px] font-normal leading-[1.3] tracking-[-0.025em] sm:text-[32px]">
              A Better First Conversation{" "}
              <span className="text-[#B79A72]">
                Starts With the Right Context.
              </span>
            </h3>

            <p className="mt-5 max-w-[420px] text-[13px] leading-[1.95] text-[#65798C]">
              Every professional firm has its own enquiry
              requirements. A well-structured process
              makes it easier for prospective clients
              to explain their needs without unnecessary
              complexity.
            </p>

            <div className="mt-8 flex items-start gap-3 border-t border-[#EAE4DC] pt-6">
              <ShieldCheck
                size={19}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#B79A72]"
              />

              <p className="text-[11px] leading-[1.9] text-[#8A94A0]">
                Request only necessary information. Use suitable
                privacy safeguards and secure channels for
                confidential professional matters.
              </p>
            </div>
          </div>

          {/* Right interactive journey */}

          <div className="relative min-w-0">

            {/* Tabs */}

            <div
              role="tablist"
              aria-label="Enquiry information"
              className="grid grid-cols-4 gap-2"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;

                return (
                  <button
                    key={step.number}
                    type="button"
                    role="tab"
                    id={`enquiry-step-${index}`}
                    aria-selected={isActive}
                    aria-controls="enquiry-active-detail"
                    onClick={() => setActiveStep(index)}
                    className="group flex min-w-0 flex-col items-center gap-3 rounded-[10px] py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72]"
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 sm:h-14 sm:w-14 ${
                        isActive
                          ? "border-[#B79A72] bg-[#F6F0E8] text-[#9C805D] shadow-[0_8px_22px_-13px_rgba(183,154,114,0.5)]"
                          : "border-[#E9E3DA] bg-white text-[#9BA5AE] group-hover:border-[#D2B995] group-hover:text-[#B79A72]"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.45} />
                    </span>

                    <span
                      className={`text-[10px] leading-[1.4] sm:text-[11px] ${
                        isActive
                          ? "font-medium text-[#8D7353]"
                          : "text-[#8B97A3]"
                      }`}
                    >
                      {step.short}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Progress line */}

            <div className="mt-5 h-px bg-[#E5E3DE]">
              <div
                className="h-px bg-[#B79A72] transition-[width] duration-500"
                style={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>

            {/* Active detail */}

            <div
              id="enquiry-active-detail"
              role="tabpanel"
              aria-labelledby={`enquiry-step-${activeStep}`}
              className="mt-8 flex min-h-[250px] flex-col justify-center border-l-2 border-[#B79A72] bg-[#FCFAF7] px-6 py-8 sm:px-9 sm:py-9"
            >
              <div key={activeStep}>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[15px] text-[#B79A72]">
                    {current.number}
                  </span>

                  <span className="h-px w-7 bg-[#DDC9AE]" />

                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#AD9372]">
                    {current.title}
                  </span>
                </div>

                <h4 className="mt-5 max-w-[450px] font-serif text-[24px] font-normal leading-[1.3] sm:text-[29px]">
                  {current.question}
                </h4>

                <p className="mt-4 max-w-[480px] text-[13px] leading-[1.95] text-[#66788B]">
                  {current.description}
                </p>
              </div>
            </div>

            {/* Next button */}

            <div className="mt-5 flex items-center justify-between">
             

              <button
                type="button"
                onClick={() =>
                  setActiveStep(
                    (index) => (index + 1) % steps.length
                  )
                }
                className="group inline-flex items-center gap-2 text-[12px] text-[#826746] transition-colors hover:text-[#B79A72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72]"
              >
                {activeStep === steps.length - 1
                  ? "Start Again"
                  : "Explore Next"}

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* ================================= */}
        {/* 03 — MEASUREMENT SUBSECTION       */}
        {/* ================================= */}

        <div className="mt-20 border-t border-[#E8E2D9] pt-16 lg:mt-24">

          {/* Heading */}

          <div className="mx-auto max-w-[790px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                What We Focus On
              </span>

              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h3 className="font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[35px] lg:text-[39px]">
              Better Client Enquiries,{" "}
              <span className="text-[#B79A72]">
                Not Just More Form Submissions.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-[1.95] text-[#0B2A52]/65">
              We evaluate the signals that help professional
              firms understand enquiry relevance,
              consultation opportunities and marketing
              efficiency.
            </p>
          </div>

          {/* ================================= */}
          {/* ALL FIVE METRIC CARDS — ONE ROW  */}
          {/* ================================= */}

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <article
                  key={metric.number}
                  className={`group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[17px] border p-5 transition-all duration-500 ease-out hover:border-[#CFB18B] hover:shadow-[0_18px_35px_-25px_rgba(183,154,114,0.25)] motion-safe:hover:-translate-y-1 xl:p-6 ${
                    index === 0
                      ? "border-[#E2D2BC] bg-[#F8F2E9]"
                      : "border-[#EAE4DC] bg-[#FFFDFB] hover:bg-[#FAF7F2]"
                  }`}
                >
                  {/* Gold top accent */}

                  <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />

                  {/* Top icons and number */}

                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-[12px] border transition-all duration-300 group-hover:border-[#D2B994] group-hover:bg-[#F6EDDF] ${
                        index === 0
                          ? "border-[#E2D0B6] bg-white/80"
                          : "border-[#EBE3D8] bg-white"
                      }`}
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.45}
                        className="text-[#B79A72]"
                      />
                    </span>

                   
                  </div>

                  {/* Metric title and description */}

                  <div className="mt-10 flex-1">
                    <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#A58B69]">
                      {metric.category}
                    </p>

                    <h4 className="mt-3 font-serif text-[20px] font-normal leading-[1.25] tracking-[-0.025em] text-[#0B2A52] sm:text-[21px] xl:text-[22px]">
                      {metric.title}
                    </h4>

                    <p className="mt-4 text-[12px] leading-[1.85] text-[#66788A]">
                      {metric.purpose}
                    </p>
                  </div>

                  {/* Bottom separator */}

                  <div className="mt-7 flex items-center justify-between border-t border-[#E8DFD4] pt-4">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-[#A58B69]">
                      Measurement Focus
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#B79A72] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </article>
              );
            })}
          </div>

          {/* ================================= */}
          {/* REPORTING NOTE                  */}
          {/* ================================= */}

          <div className="mt-9 flex items-start gap-4 rounded-[13px] border border-[#ECE2D7] bg-[#FCFAF7] px-5 py-5 sm:px-7">
            <ChartNoAxesCombined
              size={20}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-[#B79A72]"
            />

            <p className="max-w-[1050px] text-[12px] leading-[1.95] text-[#64778A] sm:text-[13px]">
              We focus on measurable improvements in
              discoverability, enquiry relevance and
              consultation opportunities. Reporting
              depends on available data, tracking
              systems and applicable professional
              requirements.
            </p>
          </div>
        </div>

        {/* ================================= */}
        {/* 04 — BOTTOM CTA                   */}
        {/* ================================= */}

        <div className="mt-14 flex flex-col gap-6 border-t border-[#E8E2D9] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[680px] font-serif text-[21px] font-normal leading-[1.5] sm:text-[25px]">
            Create the right conditions for{" "}
            <span className="text-[#B79A72]">
              better professional conversations.
            </span>
          </p>

          <Link
            href="/contact?service=professional-services-marketing"
            className="group inline-flex min-h-[47px] w-fit items-center gap-3 rounded-[12px] border border-[#D8C5AA] bg-[#FAF5EE] px-5 py-3 text-[12px] font-medium text-[#846A4A] transition-all duration-300 hover:border-[#B79A72] hover:bg-[#F3E8D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
          >
            Discuss Your Enquiry Strategy

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
