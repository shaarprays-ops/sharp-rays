
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Rocket,
  UsersRound,
  TrendingUp,
  Expand,
} from "lucide-react";

const stages = [
  {
    number: "01",
    name: "Pre-Launch",
    icon: Rocket,
    audience: "For startups preparing to launch",
    summary: "Build your foundation",
    heading: "Build the Foundation Before You Launch.",
    goal: "Introduce your product and attract early interest.",
    description:
      "Before spending heavily on acquisition, your startup needs a clear value proposition, a credible digital presence and a simple way for interested people to take the next step.",
    priorities: [
      {
        title: "Startup Positioning",
        description:
          "Clarify your product, target audience and core messaging.",
      },
      {
        title: "Launch-Ready Website",
        description:
          "Build a focused website or landing page that explains your offering.",
      },
      {
        title: "Early Interest & Waitlist",
        description:
          "Create a relevant signup or enquiry pathway for potential customers.",
      },
      {
        title: "Foundational SEO",
        description:
          "Set up search-friendly pages, indexing basics and relevant initial content.",
      },
    ],
    outcome:
      "A clearer market presence and a practical foundation for launch.",
  },
  {
    number: "02",
    name: "Early Traction",
    icon: UsersRound,
    audience: "For startups looking for initial customers",
    summary: "Find your first customers",
    heading: "Discover What Attracts Your First Customers.",
    goal: "Find your first suitable customers.",
    description:
      "Once your offer is available, the priority is learning which audiences, messages and acquisition channels generate relevant interest—not simply bringing more visitors.",
    priorities: [
      {
        title: "Focused Landing Pages",
        description:
          "Build pages aligned with your target segments and offers.",
      },
      {
        title: "Targeted Campaigns",
        description:
          "Test suitable search or social advertising with controlled budgets.",
      },
      {
        title: "Audience & Message Testing",
        description:
          "Learn which customer groups and value propositions earn meaningful engagement.",
      },
      {
        title: "Basic Conversion Tracking",
        description:
          "Measure relevant actions such as enquiries, signups or initial purchases.",
      },
    ],
    outcome:
      "Better evidence about who responds to your offer and how they find you.",
  },
  {
    number: "03",
    name: "Growth",
    icon: TrendingUp,
    audience: "For startups already attracting customers",
    summary: "Improve conversion and efficiency",
    heading: "Improve What Is Already Generating Interest.",
    goal: "Improve conversion and customer acquisition efficiency.",
    description:
      "After finding initial traction, the focus shifts to strengthening relevant organic visibility, improving conversion paths and making existing acquisition efforts more efficient.",
    priorities: [
      {
        title: "SEO Expansion",
        description:
          "Develop useful service, product and category content based on validated search opportunities.",
      },
      {
        title: "Campaign Optimisation",
        description:
          "Improve targeting, messaging, landing pages and spend allocation using available performance data.",
      },
      {
        title: "Conversion Improvements",
        description:
          "Reduce friction across important pages, forms and customer journeys.",
      },
      {
        title: "Relevant Content Marketing",
        description:
          "Publish useful content that answers audience questions and supports purchase decisions.",
      },
    ],
    outcome:
      "A more informed approach to improving conversions and acquisition efficiency.",
  },
  {
    number: "04",
    name: "Scaling",
    icon: Expand,
    audience: "For startups ready to expand proven channels",
    summary: "Expand what is working",
    heading: "Grow Through Channels That Have Earned Their Place.",
    goal: "Expand proven acquisition channels.",
    description:
      "Scaling requires more than increasing advertising budgets. We help startups review what is working, expand suitable channels and strengthen the systems used to manage customer acquisition.",
    priorities: [
      {
        title: "Channel Expansion",
        description:
          "Explore additional audiences, locations and acquisition channels where performance evidence supports expansion.",
      },
      {
        title: "Automation & Follow-Ups",
        description:
          "Reduce repetitive administrative work with appropriate lead routing, communication and follow-up workflows.",
      },
      {
        title: "Performance Reporting",
        description:
          "Track suitable metrics across channels to support better investment decisions.",
      },
      {
        title: "Continuous Optimisation",
        description:
          "Refine existing campaigns, content and conversion journeys as the business evolves.",
      },
    ],
    outcome:
      "A more structured approach to expanding acquisition and managing growth.",
  },
] as const;

export default function StartupGrowthStages() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section
      id="startup-growth-opportunities"
      aria-labelledby="startup-stages-heading"
      className="overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* SECTION INTRO */}
        <div className="mx-auto max-w-[930px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              Marketing for Every Startup Stage
            </p>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="startup-stages-heading"
            className="mx-auto max-w-[850px] text-[32px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            Different Startup Stages Need{" "}
            <span className="text-[#B79A72]">
              Different Growth Priorities.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[740px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            Whether you are preparing to launch, finding your
            first customers or expanding proven channels,
            we help you focus on the marketing activities
            relevant to your current stage.
          </p>
        </div>

        {/* GROWTH JOURNEY */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-[20px] font-normal tracking-[-0.025em] sm:text-[23px]">
              Where Is Your Startup Right Now?
            </h3>

            <span className="text-[12px] text-[#0B2A52]/50">
              Select the stage that matches your business
            </span>
          </div>

          {/* STAGE SELECTOR */}
          <div
            role="tablist"
            aria-label="Select your startup growth stage"
            className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
          >
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;

              return (
                <button
                  key={stage.number}
                  id={`startup-stage-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="startup-stage-panel"
                  onClick={() => setActiveStage(index)}
                  className={`group relative flex min-h-[155px] flex-col items-start rounded-[16px] border p-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B79A72] sm:p-5 ${
                    isActive
                      ? "border-[#B79A72] bg-[#FBF8F3] shadow-[0_8px_25px_rgba(11,42,82,0.045)]"
                      : "border-[#E2E8EF] bg-white hover:border-[#CDB695] hover:bg-[#FCFBF9]"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-[11px] ${
                        isActive
                          ? "bg-[#F1E7D8] text-[#A68961]"
                          : "bg-[#F5F7F9] text-[#0B2A52]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </span>

                    <span className="text-[10px] text-[#B79A72]">
                      {stage.number}
                    </span>
                  </div>

                  <p className="mt-5 text-[19px] font-normal leading-[1.2] sm:text-[20px]">
                    {stage.name}
                  </p>

                  <p className="mt-2 text-[11px] leading-5 text-[#0B2A52]/55 sm:text-[12px]">
                    {stage.summary}
                  </p>

                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] transition-colors ${
                      isActive ? "bg-[#B79A72]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* SELECTED STAGE DETAILS */}
        <div
          id="startup-stage-panel"
          role="tabpanel"
          aria-labelledby={`startup-stage-tab-${activeStage}`}
          tabIndex={0}
          className="mt-6 overflow-hidden rounded-[20px] border border-[#E1E8EF] bg-white outline-none focus-visible:ring-2 focus-visible:ring-[#B79A72] sm:mt-7"
        >
          {/* STAGE HEADER */}
          <div className="border-b border-[#E4EAF0] bg-[#FAFBFC] px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-[780px]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#F4EBDF] text-[#B79A72]">
                    <CurrentIcon size={22} strokeWidth={1.6} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#B79A72]">
                      Stage {current.number} — {current.name}
                    </p>

                    <p className="mt-1 text-[12px] text-[#0B2A52]/55">
                      {current.audience}
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-[27px] font-normal leading-[1.2] tracking-[-0.03em] sm:text-[31px] lg:text-[35px]">
                  {current.heading}
                </h3>

                <p className="mt-4 max-w-[740px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                  {current.description}
                </p>
              </div>

              <span className="hidden text-[12px] text-[#0B2A52]/40 sm:block">
                {current.number} / 04
              </span>
            </div>
          </div>

          {/* DETAILS */}
          <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
            {/* FOUNDER GOAL */}
            <div className="border-b border-[#E5EBF0] px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:px-9 lg:py-10">
              <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                What Your Startup Needs
              </p>

              <h4 className="mt-4 max-w-[340px] text-[23px] font-normal leading-[1.3] tracking-[-0.025em] sm:text-[26px]">
                {current.goal}
              </h4>

              <div className="mt-8 border-t border-[#E4EAF0] pt-6">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                  What You Can Work Towards
                </p>

                <p className="mt-3 text-[13px] leading-7 text-[#0B2A52]/65">
                  {current.outcome}
                </p>
              </div>
            </div>

            {/* SHARP RAYS SERVICES */}
            <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                How Sharp Rays Helps
              </p>

              <h4 className="mt-3 text-[23px] font-normal tracking-[-0.025em] sm:text-[26px]">
                What We Focus On at This Stage
              </h4>

              <div className="mt-7 grid gap-x-8 sm:grid-cols-2">
                {current.priorities.map((priority) => (
                  <div
                    key={priority.title}
                    className="flex items-start gap-3 border-t border-[#E5EBF0] py-5"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F7F1E8] text-[#B79A72]">
                      <Check size={14} strokeWidth={1.8} />
                    </span>

                    <div>
                      <h5 className="text-[17px] font-normal leading-[1.3] tracking-[-0.02em]">
                        {priority.title}
                      </h5>

                      <p className="mt-2 text-[12px] leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                        {priority.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SIMPLE STAGE NAVIGATION */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[12px] leading-6 text-[#0B2A52]/50">
            Showing: {current.name} — {current.summary}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setActiveStage((prev) =>
                  (prev - 1 + stages.length) % stages.length
                )
              }
              className="inline-flex min-h-[42px] items-center gap-2 rounded-[9px] border border-[#E0E7ED] px-4 text-[12px] text-[#0B2A52] transition-colors hover:border-[#B79A72] focus-visible:outline-2 focus-visible:outline-[#B79A72]"
            >
              <ArrowLeft size={15} />
              Previous
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveStage((prev) => (prev + 1) % stages.length)
              }
              className="inline-flex min-h-[42px] items-center gap-2 rounded-[9px] border border-[#E0E7ED] px-4 text-[12px] text-[#0B2A52] transition-colors hover:border-[#B79A72] focus-visible:outline-2 focus-visible:outline-[#B79A72]"
            >
              Next Stage
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* CONVERSION CTA */}
        <div className="mt-14 grid gap-7 border-t border-[#E2E8EF] pt-9 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14 lg:pt-11">
          <div>
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
              Marketing That Fits Your Current Stage
            </p>

            <h3 className="mt-3 max-w-[840px] text-[25px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[29px] lg:text-[32px]">
              You Don&apos;t Need Every Marketing Service.{" "}
              <span className="text-[#B79A72]">
                You Need the Right Ones for Right Now.
              </span>
            </h3>

            <p className="mt-4 max-w-[730px] text-[13px] leading-7 text-[#0B2A52]/60 sm:text-[14px]">
              Tell us where your startup stands. We&apos;ll help you
              identify practical marketing priorities based on your
              audience, available resources and business goals.
            </p>
          </div>

          <Link
            href="/contact?service=startup-marketing"
            title="Build My Startup Growth Plan"
            className="group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-normal text-white transition-colors duration-300 hover:bg-[#123B69] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:w-auto sm:text-[13px]"
          >
            Build My Startup Growth Plan
            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
