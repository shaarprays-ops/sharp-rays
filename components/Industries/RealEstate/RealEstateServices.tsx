
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Search,
  ChartNoAxesCombined,
  Megaphone,
  MonitorSmartphone,
  FileText,
  MessagesSquare,
  Clapperboard,
  ArrowUpRight,
  ArrowRight,
  Check,
  Layers3,
} from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"initial" | "hidden" | "visible">("initial");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStatus("visible");
      return;
    }

    const bounds = node.getBoundingClientRect();
    if (bounds.top < window.innerHeight - 35 && bounds.bottom > 0) {
      setStatus("visible");
      return;
    }

    setStatus("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatus("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        status !== "initial" ? "transition-[opacity,transform] duration-700 ease-out" : ""
      } ${
        status === "hidden"
          ? "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    number: "01",
    icon: Search,
    title: "Real Estate SEO & Local Search",
    description:
      "Help potential buyers discover your projects and property services through relevant organic searches.",
    details:
      "We work on location-based SEO, project and property pages, technical optimisation, internal linking, local search visibility and informative property content.",
    goal: "Build relevant visibility for the properties and locations you serve.",
    href: "/services/search-engine-optimization",
    linkText: "Explore SEO Services",
    background: "#EEF4ED",
    accent: "#69876C",
    accentSoft: "#DAE8D8",
    label: "Organic Discovery",
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Google Ads & Real Estate Performance Marketing",
    description:
      "Reach buyers searching for projects, apartments, commercial properties and specific locations.",
    details:
      "We develop relevant Search campaigns, landing pages, keyword exclusions, conversion tracking and suitable location-based targeting.",
    goal: "Capture existing property demand and generate relevant enquiries.",
    href: "/services/performance-marketing",
    linkText: "Explore Performance Marketing",
    background: "#F8F0E4",
    accent: "#AD8558",
    accentSoft: "#EAD9BF",
    label: "Buyer Acquisition",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Meta Ads & Real Estate Social Media",
    description:
      "Introduce your property projects through location highlights, approved walkthroughs, amenities, project information and relevant campaign creatives.",
    details:
      "We help plan Facebook and Instagram campaigns, creative testing and retargeting where permitted by platform policies.",
    goal: "Build project awareness and encourage prospective buyers to explore further.",
    href: "/services/social-media-marketing",
    linkText: "Explore Social Media Marketing",
    background: "#F5EDF3",
    accent: "#A97892",
    accentSoft: "#EAD6E2",
    label: "Project Awareness",
  },
  {
    number: "04",
    icon: MonitorSmartphone,
    title: "Real Estate Websites & Project Landing Pages",
    description:
      "Create project websites and landing pages that communicate the information buyers need before contacting your team.",
    details:
      "We can build pages for project overviews, floor plans, configurations, amenities, location details, verified approvals and site-visit requests.",
    goal: "Make project evaluation and enquiries easier.",
    href: "/services/website-development",
    linkText: "Explore Website Development",
    background: "#EDF3FA",
    accent: "#6686AA",
    accentSoft: "#D8E4F2",
    label: "Property Experience",
  },
  {
    number: "05",
    icon: FileText,
    title: "Property Content Marketing",
    description:
      "Help buyers understand your properties through useful locality guides, project information, buying-process explainers, amenity details and accurate comparison content.",
    details:
      "Content should reflect available properties and verified project information.",
    goal: "Support organic visibility and informed property decisions.",
    href: "/services/content-marketing",
    linkText: "Explore Content Marketing",
    background: "#F7F1E9",
    accent: "#A58A68",
    accentSoft: "#E8DAC7",
    label: "Buyer Education",
  },
  {
    number: "06",
    icon: MessagesSquare,
    title: "WhatsApp, CRM & AI Lead Automation",
    description:
      "Improve how property enquiries are received, organised and followed up.",
    details:
      "We can create workflows for lead acknowledgements, project information requests, sales assignments, site-visit reminders and CRM updates.",
    goal: "Reduce missed enquiries and support timely sales follow-up.",
    href: "/services/ai-automation",
    linkText: "Explore AI Automation",
    background: "#EAF5F2",
    accent: "#62958C",
    accentSoft: "#D5E8E1",
    label: "Lead Management",
  },
  {
    number: "07",
    icon: Clapperboard,
    title: "AI Video, Property Walkthroughs & Creative",
    description:
      "Present property layouts, amenities, development features and location advantages through professional video editing, approved visualisations and promotional creatives.",
    details:
      "Any AI-generated representation should be clearly identified where necessary and must not misrepresent completed facilities or project specifications.",
    goal: "Help interested buyers better understand the property.",
    href: "/services/video-and-creative",
    linkText: "Explore AI Video & Creative",
    background: "#F1EDFA",
    accent: "#8975AF",
    accentSoft: "#DED4F0",
    label: "Property Storytelling",
    additionalHref: "/services/professional-video-editing",
  },
] as const;

export default function RealEstateServices() {
  const featuredService = services[6];
  const FeaturedIcon = featuredService.icon;

  return (
    <section
      id="real-estate-services"
      aria-labelledby="real-estate-services-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* 01 — INTRODUCTION */}

        <Reveal>
          <div className="mx-auto max-w-[840px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                Real Estate Digital Marketing Services
              </span>
              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="real-estate-services-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              The Right Marketing Strategy for Your{" "}
              <span className="text-[#B79A72]">
                Projects, Locations and Buyers.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[715px] text-[13px] leading-[1.95] text-[#586D80] sm:text-[14px]">
              A property launch, a ready-to-move apartment project and a
              commercial development require different marketing approaches.
            </p>

            <p className="mx-auto mt-3 max-w-[715px] text-[13px] leading-[1.95] text-[#718091] sm:text-[14px]">
              We combine real estate SEO, paid advertising, websites,
              content and automation based on your available inventory,
              target audience and business goals.
            </p>
          </div>
        </Reveal>

        {/* 02 — SERVICES GRID */}

        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.number} className="h-full">
                <article
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[19px] border border-[#0B2A52]/[0.055] p-6 transition-[transform,box-shadow] duration-500 hover:shadow-[0_22px_48px_-35px_rgba(11,42,82,0.24)] motion-safe:hover:-translate-y-1 sm:p-7"
                  style={{ backgroundColor: service.background }}
                >
                  {/* BACKGROUND ART */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-16 h-48 w-48 rounded-full border opacity-50 transition-transform duration-700 motion-safe:group-hover:scale-110"
                    style={{ borderColor: service.accentSoft }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-5 h-28 w-28 rounded-full border opacity-50"
                    style={{ borderColor: service.accentSoft }}
                  />

                  {/* ICON + NUMBER */}
                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[13px] border border-white/80 bg-white/80 shadow-sm"
                      style={{ color: service.accent }}
                    >
                      <Icon size={22} strokeWidth={1.5} />
                    </span>

                    <span
                      className="font-serif text-[28px] leading-none opacity-80"
                      style={{ color: service.accent }}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* SERVICE CATEGORY */}
                  <div className="relative mt-7">
                    <span
                      className="text-[9px] font-medium uppercase tracking-[0.16em]"
                      style={{ color: service.accent }}
                    >
                      {service.label}
                    </span>

                    <h3 className="mt-3 min-h-0 font-serif text-[23px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[25px]">
                      {service.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="relative mt-5 space-y-3">
                    <p className="text-[12px] leading-[1.9] text-[#354D61] sm:text-[13px]">
                      {service.description}
                    </p>

                    <p className="text-[12px] leading-[1.9] text-[#627588]">
                      {service.details}
                    </p>
                  </div>

                  {/* GOAL */}
                  <div className="relative mt-7 border-t border-[#0B2A52]/10 pt-5">
                    <div className="flex items-start gap-3">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/85"
                        style={{ color: service.accent }}
                      >
                        <Check size={14} strokeWidth={1.7} />
                      </span>

                      <div>
                        <span
                          className="text-[9px] font-medium uppercase tracking-[0.15em]"
                          style={{ color: service.accent }}
                        >
                          Primary Goal
                        </span>

                        <p className="mt-2 text-[12px] leading-[1.8] text-[#3F5669]">
                          {service.goal}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SERVICE LINK */}
                  <div className="relative mt-auto pt-7">
                    <Link
                      href={service.href}
                      title={service.linkText}
                      className="group/link inline-flex items-center gap-2 text-[12px] font-medium text-[#0B2A52] transition-colors duration-300 hover:text-[#A1845F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                    >
                      {service.linkText}
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  {/* HOVER ACCENT */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-500 group-hover:w-full"
                    style={{ backgroundColor: service.accent }}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* 03 — FEATURED SERVICE / FULL WIDTH */}

        <Reveal>
          <article
            className="group relative mt-5 overflow-hidden rounded-[19px] border border-[#0B2A52]/[0.055] transition-[transform,box-shadow] duration-500 hover:shadow-[0_22px_48px_-35px_rgba(11,42,82,0.22)] lg:mt-6"
            style={{ backgroundColor: featuredService.background }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-44 h-[430px] w-[430px] rounded-full border opacity-50"
              style={{ borderColor: featuredService.accentSoft }}
            />

            <div className="relative grid gap-7 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-10">
              {/* LEFT */}
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-[13px] border border-white/80 bg-white/85"
                    style={{ color: featuredService.accent }}
                  >
                    <FeaturedIcon size={23} strokeWidth={1.5} />
                  </span>

                  <span className="font-serif text-[29px] text-[#8975AF]">
                    07
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8975AF]">
                  {featuredService.label}
                </p>

                <h3 className="mt-3 max-w-[470px] font-serif text-[25px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[30px]">
                  {featuredService.title}
                </h3>

                <p className="mt-4 max-w-[470px] text-[13px] leading-[1.9] text-[#455A6E]">
                  {featuredService.description}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex min-w-0 flex-col lg:border-l lg:border-[#8975AF]/20 lg:pl-12">
                <p className="text-[12px] leading-[1.9] text-[#627588] sm:text-[13px]">
                  {featuredService.details}
                </p>

                <div className="mt-7 flex items-start gap-3 border-t border-[#8975AF]/20 pt-6">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/85 text-[#8975AF]">
                    <Check size={15} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#8975AF]">
                      Primary Goal
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.85] text-[#40566B]">
                      {featuredService.goal}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-8">
                  <Link
                    href={featuredService.href}
                    title={featuredService.linkText}
                    className="group/link inline-flex items-center gap-2 text-[12px] font-medium text-[#0B2A52] transition-colors hover:text-[#8975AF]"
                  >
                    {featuredService.linkText}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href={featuredService.additionalHref}
                    title="Explore Professional Video Editing"
                    className="group/link inline-flex items-center gap-2 text-[11px] text-[#8975AF] transition-colors hover:text-[#0B2A52]"
                  >
                    Professional Video Editing
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* 04 — SECTION CTA */}

        <Reveal>
          <div className="mt-12 flex flex-col gap-7 border-t border-[#E9E2D9] pt-9 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-3">
                <Layers3 size={17} strokeWidth={1.5} className="text-[#B79A72]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">
                  Built Around Your Real Estate Business
                </span>
              </div>

              <p className="mt-4 font-serif text-[22px] font-normal leading-[1.45] text-[#284762] sm:text-[26px]">
                You don&apos;t need every service.{" "}
                <span className="text-[#B79A72]">
                  You need the right combination for your projects and buyers.
                </span>
              </p>
            </div>

            <Link
              href="/contact?service=real-estate-marketing"
              title="Build My Real Estate Marketing Plan"
              className="group inline-flex min-h-[50px] w-full shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 sm:w-fit"
            >
              Build My Real Estate Marketing Plan
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
