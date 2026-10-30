
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  MapPin,
  Building2,
  LayoutGrid,
  ClipboardCheck,
  CalendarDays,
  UserRoundCheck,
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  MousePointerClick,
  MessagesSquare,
  Route,
  House,
} from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;

    if (
      !node ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = node.getBoundingClientRect();

    if (rect.top >= window.innerHeight - 35) {
      setVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const projectEssentials = [
  {
    number: "01",
    icon: MapPin,
    title: "Project & Location",
    description:
      "Where the property is situated and relevant connectivity information.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Configurations & Pricing",
    description:
      "Available unit types, sizes and accurate price guidance.",
  },
  {
    number: "03",
    icon: LayoutGrid,
    title: "Floor Plans & Amenities",
    description:
      "Verified layouts, facilities and actual project features.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Project Status & Approvals",
    description:
      "Accurate status, timelines and applicable regulatory information.",
  },
  {
    number: "05",
    icon: CalendarDays,
    title: "Site Visit Options",
    description:
      "A simple way to request a property visit or speak with a representative.",
  },
  {
    number: "06",
    icon: UserRoundCheck,
    title: "Buyer Requirements",
    description:
      "Relevant budget, configuration and purchase timeline details.",
  },
] as const;

const conversionSteps = [
  {
    number: "01",
    icon: House,
    title: "Explore the Project",
    description: "Understand the location, property and available details.",
  },
  {
    number: "02",
    icon: MessagesSquare,
    title: "Share Requirements",
    description: "Submit a relevant enquiry and property preferences.",
  },
  {
    number: "03",
    icon: Route,
    title: "Plan the Next Step",
    description: "Connect with the sales team or request a site visit.",
  },
] as const;

export default function RealEstateProjectExperience() {
  return (
    <section
      id="real-estate-project-experience"
      aria-labelledby="real-estate-project-heading"
      className="relative overflow-hidden bg-[#FAF8F4] py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* SECTION INTRO */}

        <Reveal>
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                From Project Interest to Site Visit
              </span>

              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="real-estate-project-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              Give Serious Buyers the Information{" "}
              <span className="text-[#B79A72]">
                They Need Before They Enquire.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[13px] leading-[1.95] text-[#526B80] sm:text-[14px]">
              People making property decisions want clarity.
              A generic advertisement followed by a form
              asking only for a name and number may not
              give them enough information to evaluate the project.
            </p>

            <p className="mx-auto mt-3 max-w-[690px] text-[13px] leading-[1.95] text-[#718191] sm:text-[14px]">
              A useful real estate landing page should help
              prospective buyers understand whether the
              property fits their needs.
            </p>
          </div>
        </Reveal>

        {/* PROJECT PAGE EXPERIENCE */}

        <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">

          {/* LEFT — PROPERTY LANDING PAGE PREVIEW */}

          <Reveal>
            <div className="relative mx-auto w-full max-w-[530px] lg:sticky lg:top-28">

              {/* EDITORIAL LABEL */}
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">
                  A Better Project Page
                </span>

                <span className="font-serif text-[13px] text-[#B79A72]">
                  Property Experience / 01
                </span>
              </div>

              {/* WEBSITE PREVIEW SHELL */}
              <div className="overflow-hidden rounded-[17px] border border-[#E3D9CB] bg-white shadow-[0_25px_65px_-45px_rgba(11,42,82,0.25)]">

                {/* BROWSER HEADER */}
                <div className="flex items-center justify-between gap-3 border-b border-[#EDE5DA] px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#E7CEB7]" />
                    <span className="h-2 w-2 rounded-full bg-[#E7DCCB]" />
                    <span className="h-2 w-2 rounded-full bg-[#D7E0D3]" />
                  </div>

                  <div className="flex min-w-0 max-w-[230px] flex-1 items-center justify-center rounded-full bg-[#F7F4EF] px-3 py-2">
                    <span className="truncate text-[9px] text-[#8A8278]">
                      Example project page
                    </span>
                  </div>

                  <span className="text-[9px] text-[#A1845F]">
                    PREVIEW
                  </span>
                </div>

                {/* MOCK PROJECT HEADER */}
                <div className="px-5 pb-5 pt-6 sm:px-7 sm:pb-7 sm:pt-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#A1845F]">
                      <Building2 size={14} strokeWidth={1.5} />
                      Residential Project
                    </span>

                    <span className="text-[9px] text-[#9A948C]">
                      Illustrative Layout
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-[27px] font-normal leading-[1.2] sm:text-[33px]">
                    A Property Worth{" "}
                    <span className="text-[#B79A72]">
                      Exploring.
                    </span>
                  </h3>

                  <p className="mt-3 max-w-[370px] text-[11px] leading-[1.85] text-[#778796]">
                    Clear project information helps buyers
                    evaluate suitability before making an enquiry.
                  </p>

                  {/* ARCHITECTURAL MOCK VISUAL — NO IMAGE FILE */}
                  <div className="relative mt-6 h-[190px] overflow-hidden rounded-[11px] bg-[#EBE4D9] sm:h-[235px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F6F1E9] via-[#E8DFD1] to-[#C7B69F]" />

                    {/* Simple abstract apartment composition */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 overflow-hidden"
                    >
                      <div className="absolute bottom-0 left-[15%] h-[57%] w-[25%] border border-white/60 bg-[#C7B8A5] shadow-[10px_0_22px_rgba(85,69,51,0.12)]">
                        <div className="grid h-full grid-cols-3 gap-2 p-3">
                          {Array.from({ length: 12 }).map((_, index) => (
                            <span key={index} className="bg-[#EEE9DF]/75" />
                          ))}
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-[38%] h-[82%] w-[33%] border border-white/65 bg-[#B6A48F] shadow-[12px_0_28px_rgba(85,69,51,0.15)]">
                        <div className="grid h-full grid-cols-4 gap-2 p-3 sm:gap-3 sm:p-4">
                          {Array.from({ length: 20 }).map((_, index) => (
                            <span key={index} className="bg-[#E9E1D5]/80" />
                          ))}
                        </div>
                      </div>

                      <div className="absolute bottom-0 right-[12%] h-[65%] w-[24%] border border-white/65 bg-[#D0C1AE]">
                        <div className="grid h-full grid-cols-3 gap-2 p-3">
                          {Array.from({ length: 12 }).map((_, index) => (
                            <span key={index} className="bg-[#F2EDE4]/75" />
                          ))}
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 h-5 w-full bg-[#BAAC96]/60" />
                    </div>

                    <div className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/90 px-3 py-2 text-[9px] text-[#6C6153]">
                      Verified Property Information
                    </div>
                  </div>

                  {/* MOCK PROJECT DETAILS */}
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {[
                      { icon: MapPin, label: "Location" },
                      { icon: LayoutGrid, label: "Floor Plans" },
                      { icon: ClipboardCheck, label: "Approvals" },
                    ].map((detail) => {
                      const Icon = detail.icon;

                      return (
                        <div
                          key={detail.label}
                          className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-[9px] bg-[#F9F6F1] px-2 py-3"
                        >
                          <Icon
                            size={17}
                            strokeWidth={1.45}
                            className="text-[#B79A72]"
                          />

                          <span className="text-center text-[9px] text-[#576F82]">
                            {detail.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* MOCK NEXT STEP */}
                  <div className="mt-5 flex items-center justify-between gap-3 rounded-[10px] bg-[#0B2A52] px-4 py-4 text-white">
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium">
                        Request a Site Visit
                      </p>

                      <p className="mt-1 text-[9px] text-white/70">
                        An example of a clear booking action
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-white"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[10px] leading-[1.8] text-[#9A9389]">
                Conceptual landing page illustration. This is not
                an actual property listing, available inventory
                or a completed client project.
              </p>
            </div>
          </Reveal>

          {/* RIGHT — PROJECT PAGE REQUIREMENTS */}

          <div className="min-w-0">
            <Reveal>
              <div className="mb-7">
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">
                  Project Page Essentials
                </span>

                <h3 className="mt-3 max-w-[540px] font-serif text-[26px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[32px]">
                  What Should a High-Quality{" "}
                  <span className="text-[#B79A72]">
                    Project Page Include?
                  </span>
                </h3>

                <p className="mt-4 max-w-[520px] text-[12px] leading-[1.9] text-[#718191] sm:text-[13px]">
                  Six important information areas that help
                  buyers make more informed property decisions.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-[#E4DACD]">
              {projectEssentials.map((item) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number}>
                    <article className="group grid grid-cols-[40px_minmax(0,1fr)] gap-4 border-b border-[#E4DACD] py-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-5 sm:py-6">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1D3BF] bg-white text-[#B79A72] transition-colors duration-300 group-hover:border-[#CDB18A] group-hover:bg-[#F3E9DB] sm:h-12 sm:w-12">
                        <Icon size={19} strokeWidth={1.5} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-serif text-[19px] font-normal leading-[1.3] sm:text-[22px]">
                            {item.title}
                          </h4>

                          <span className="shrink-0 font-serif text-[13px] text-[#B79A72]">
                            {item.number}
                          </span>
                        </div>

                        <p className="mt-2 max-w-[500px] text-[12px] leading-[1.85] text-[#748494] sm:text-[13px]">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* HOW SHARP RAYS HELPS */}

        <Reveal>
          <div className="mt-20 border-t border-[#E4DACD] pt-11 sm:mt-24 lg:pt-14">
            <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A72]" />

                  <span className="text-[10px] uppercase tracking-[0.17em] text-[#A1845F]">
                    How Sharp Rays Helps
                  </span>
                </div>

                <h3 className="mt-5 max-w-[500px] font-serif text-[27px] font-normal leading-[1.23] tracking-[-0.03em] sm:text-[34px]">
                  From Property Information to{" "}
                  <span className="text-[#B79A72]">
                    Meaningful Buyer Enquiries.
                  </span>
                </h3>
              </div>

              <div>
                <p className="text-[13px] leading-[1.95] text-[#657789] sm:text-[14px]">
                  We build project-focused landing pages that
                  combine useful property information,
                  clear enquiry actions and suitable lead tracking.
                </p>

                <p className="mt-4 text-[13px] leading-[1.95] text-[#718191]">
                  Where the systems support it, enquiries can
                  be organised by property interest, configuration,
                  budget and preferred visit timing before reaching
                  the sales team.
                </p>
              </div>
            </div>

            {/* BUYER CONVERSION JOURNEY */}
            <div className="relative mt-9 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {conversionSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative flex flex-col border-t-2 border-[#B79A72] bg-white px-6 py-7 sm:px-7"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#B79A72]"
                      />

                      <span className="font-serif text-[15px] text-[#B79A72]">
                        {step.number}
                      </span>
                    </div>

                    <h4 className="mt-6 font-serif text-[21px] font-normal leading-[1.3] sm:text-[23px]">
                      {step.title}
                    </h4>

                    <p className="mt-3 text-[12px] leading-[1.85] text-[#748494]">
                      {step.description}
                    </p>

                    {index < conversionSteps.length - 1 && (
                      <ArrowRight
                        size={17}
                        strokeWidth={1.5}
                        className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#B79A72] sm:block"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* COMPLIANCE + CLOSING */}

        <Reveal>
          <div className="mt-12 border-t border-[#E4DACD] pt-8 lg:mt-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex shrink-0 items-center gap-3">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#B79A72]"
                />

                <span className="text-[10px] uppercase tracking-[0.15em] text-[#A1845F]">
                  Accuracy & Compliance
                </span>
              </div>

              <div className="max-w-[860px]">
                <p className="font-serif text-[12px] font-normal leading-[1.55] text-[#284762] sm:text-[12px]">
                  The goal is to help interested buyers move
                  from browsing property information to{" "}
                  <span className="text-[#B79A72]">
                    meaningful conversations and suitable site visits.
                  </span>
                </p>

                <p className="mt-5 flex items-start gap-2.5 text-[12px] leading-[1.9] text-[#718191]">
                  <ShieldCheck
                    size={16}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#B79A72]"
                  />

                  All project advertising should use verified,
                  current information and comply with applicable
                  RERA requirements and other relevant advertising rules.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
