
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck2,
  Check,
  Clock3,
  IndianRupee,
  SearchCheck,
  Target,
  TrendingUp,
  UserRoundCheck,
  Users,
} from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = element.getBoundingClientRect();
    if (rect.top > window.innerHeight - 30) setVisible(false);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const problems = [
  {
    number: "01",
    icon: Users,
    title: "Irrelevant Leads",
    description:
      "Enquiries may come from buyers whose budgets, preferred locations or property requirements don't match your available inventory.",
    priority: "Improve audience and property relevance",
  },
  {
    number: "02",
    icon: IndianRupee,
    title: "High Cost per Lead",
    description:
      "Campaign spending may increase without attracting enough suitable property enquiries or meaningful sales opportunities.",
    priority: "Improve acquisition efficiency",
  },
  {
    number: "03",
    icon: CalendarCheck2,
    title: "Few Site Visits",
    description:
      "Interested buyers may not progress because project information, visit options or the next steps are unclear.",
    priority: "Reduce enquiry-to-visit friction",
  },
  {
    number: "04",
    icon: Clock3,
    title: "Slow Follow-Ups",
    description:
      "Delayed responses and disconnected lead-handling processes can cause genuine enquiries to lose momentum.",
    priority: "Support timely sales follow-ups",
  },
] as const;

const buyerJourney = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Property Interest",
    description: "Relevant project and location information",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Qualified Enquiry",
    description: "Useful buyer requirements and contact details",
  },
  {
    number: "03",
    icon: CalendarCheck2,
    title: "Site Visit Opportunity",
    description: "Clear scheduling and sales team handoff",
  },
] as const;

const metrics = [
  {
    label: "Qualified Lead Rate",
    description: "Share of enquiries meeting relevant buyer criteria",
  },
  {
    label: "Site Visits",
    description: "Recorded property visits from interested buyers",
  },
  {
    label: "Cost per Site Visit",
    description: "Attributable marketing spend per recorded visit",
  },
  {
    label: "Booking Outcomes",
    description: "Enquiries or visits progressing to bookings, where tracked",
  },
] as const;

export default function RealEstateLeadQuality() {
  return (
    <section
      id="real-estate-lead-quality"
      aria-labelledby="real-estate-lead-quality-heading"
      className="relative overflow-hidden bg-[#FCFAF7] py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* INTRODUCTION */}
        <Reveal>
          <div className="mx-auto max-w-[840px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                Qualified Leads Matter More Than Lead Volume
              </span>
              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="real-estate-lead-quality-heading"
              className="font-serif text-[29px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              100 Property Enquiries Don&apos;t Matter{" "}
              <span className="text-[#B79A72]">
                If None Turn Into Site Visits.
              </span>
            </h2>

            <div className="mx-auto mt-5 max-w-[720px] space-y-3">
              <p className="text-[13px] leading-[1.95] text-[#526B80] sm:text-[14px]">
                A campaign can generate form submissions without
                attracting people who are ready, eligible or
                genuinely interested in your properties.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#6D7F8F] sm:text-[14px]">
                Some buyers may have a different budget. Others
                may be looking in another location or have no
                immediate purchase plans.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#6D7F8F] sm:text-[14px]">
                We focus on creating better enquiry journeys so
                your sales team can identify relevant
                opportunities earlier.
              </p>
            </div>
          </div>
        </Reveal>

        {/* FOUR LEAD PROBLEMS */}
        <div className="mt-14 lg:mt-16">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">
                  The Lead Quality Check
                </p>
                <h3 className="mt-3 font-serif text-[25px] font-normal leading-[1.25] sm:text-[30px]">
                  What Is Holding Back{" "}
                  <span className="text-[#B79A72]">
                    Your Real Estate Leads?
                  </span>
                </h3>
              </div>

              <span className="text-[11px] text-[#948675]">
                Four common conversion challenges
              </span>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => {
              const Icon = problem.icon;

              return (
                <Reveal key={problem.number} className="h-full">
                  <article className="group flex h-full flex-col border border-[#E7DED2] bg-white px-5 py-6 transition-all duration-300 hover:border-[#D0B594] hover:shadow-[0_16px_36px_-30px_rgba(11,42,82,0.3)] sm:px-6 sm:py-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F3EC] text-[#B79A72]">
                        <Icon size={19} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-[14px] text-[#B79A72]">
                        {problem.number}
                      </span>
                    </div>

                    <h4 className="mt-6 font-serif text-[21px] font-normal leading-[1.3]">
                      {problem.title}
                    </h4>

                    <p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#748494]">
                      {problem.description}
                    </p>

                    <div className="mt-6 border-t border-[#ECE4D9] pt-4">
                      <span className="text-[9px] uppercase tracking-[0.14em] text-[#A1845F]">
                        What to Improve
                      </span>
                      <p className="mt-2 text-[11px] font-medium leading-[1.65] text-[#405A70]">
                        {problem.priority}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* FEATURED SOLUTION — BUYER JOURNEY */}
        <Reveal>
          <div className="mt-14 overflow-hidden rounded-[18px] border border-[#E3D7C7] bg-white lg:mt-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col bg-[#F5EEE4] px-6 py-9 sm:px-9 sm:py-11 lg:px-11 lg:py-12">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A72]" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#A1845F]">
                    From Enquiry to Visit
                  </span>
                </div>

                <h3 className="mt-6 max-w-[440px] font-serif text-[27px] font-normal leading-[1.22] tracking-[-0.03em] sm:text-[33px]">
                  Make It Easier for Interested Buyers{" "}
                  <span className="text-[#B79A72]">
                    to Schedule a Visit.
                  </span>
                </h3>

                <p className="mt-5 max-w-[440px] text-[13px] leading-[1.95] text-[#657789]">
                  We improve project information, enquiry
                  forms, scheduling pathways and sales handoff
                  processes to reduce unnecessary friction
                  between enquiry and site visit.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 lg:mt-auto lg:pt-8">
                  {["Project information", "Visit requests", "CRM workflows"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 text-[11px] text-[#8B775E]">
                      <Check size={14} strokeWidth={1.6} className="text-[#B79A72]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* VISUAL BUYER PATH */}
              <div className="relative px-6 py-9 sm:px-9 sm:py-11 lg:px-12 lg:py-12">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#A1845F]">
                    A More Useful Lead Journey
                  </span>
                  <Target size={19} strokeWidth={1.5} className="text-[#B79A72]" />
                </div>

                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute bottom-9 left-[19px] top-9 w-px bg-[#E2D2BE] sm:left-[23px]"
                  />

                  <div className="space-y-7 sm:space-y-8">
                    {buyerJourney.map((step) => {
                      const Icon = step.icon;

                      return (
                        <div key={step.number} className="relative flex items-start gap-5 sm:gap-6">
                          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DFCDB6] bg-[#FCFAF7] text-[#B79A72] sm:h-12 sm:w-12">
                            <Icon size={20} strokeWidth={1.5} />
                          </span>

                          <div className="min-w-0 flex-1 border-b border-[#EFE7DD] pb-5 last:border-0">
                            <span className="text-[9px] uppercase tracking-[0.14em] text-[#A1845F]">
                              Step {step.number}
                            </span>
                            <h4 className="mt-2 font-serif text-[21px] font-normal leading-[1.3] sm:text-[24px]">
                              {step.title}
                            </h4>
                            <p className="mt-2 max-w-[370px] text-[12px] leading-[1.85] text-[#718294]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className="mt-8 border-t border-[#EAE1D6] pt-5 text-[11px] leading-[1.8] text-[#88939E]">
                  Better lead handling can support site-visit
                  opportunities, but buyers&apos; decisions also
                  depend on pricing, availability and project suitability.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* THE METRIC THAT MATTERS */}
        <Reveal>
          <div className="mt-16 lg:mt-20">
            <div className="grid gap-5 lg:grid-cols-[0.76fr_1.24fr] lg:items-end lg:gap-14">
              <div>
                <div className="flex items-center gap-3">
                  <TrendingUp size={17} strokeWidth={1.5} className="text-[#B79A72]" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#A1845F]">
                    The Metric That Matters
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-[27px] font-normal leading-[1.25] sm:text-[32px]">
                  Lower Lead Costs Don&apos;t Always Mean{" "}
                  <span className="text-[#B79A72]">
                    Better Results.
                  </span>
                </h3>
              </div>

              <p className="text-[13px] leading-[1.95] text-[#667A8C] sm:text-[14px]">
                A low cost per lead is not necessarily good
                performance. For real-estate campaigns, we
                should also review qualified lead rates,
                site visits, cost per site visit and booking
                outcomes where reliable sales data is available.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-[#E6DDD1] bg-[#E6DDD1] sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <div key={metric.label} className="group bg-white px-6 py-7 transition-colors duration-300 hover:bg-[#F8F3EC]">
                  <span className="font-serif text-[14px] text-[#B79A72]">
                    0{index + 1}
                  </span>
                  <h4 className="mt-5 font-serif text-[19px] font-normal leading-[1.35]">
                    {metric.label}
                  </h4>
                  <p className="mt-3 text-[12px] leading-[1.85] text-[#788898]">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CLOSING STATEMENT */}
        <Reveal>
          <div className="mt-12 flex flex-col gap-5 border-t border-[#E5DBCE] pt-8 lg:mt-14 lg:flex-row lg:items-start lg:gap-14">
            <div className="flex shrink-0 items-center gap-3 lg:pt-2">
              <BadgeCheck size={18} strokeWidth={1.5} className="text-[#B79A72]" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#A1845F]">
                Better Leads. Better Decisions.
              </span>
            </div>

            <p className="max-w-[810px] font-serif text-[15px] font-normal leading-[1.55] text-[#284762] sm:text-[15px]">
              We don&apos;t build real estate campaigns just to
              collect more contact details. We help create a
              more useful path from property interest to{" "}
              <span className="text-[#B79A72]">
                qualified enquiry and site-visit opportunity.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
