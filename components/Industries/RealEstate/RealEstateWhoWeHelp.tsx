
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  Gem,
  HousePlus,
  MapPinned,
  Target,
  Check,
  Compass,
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (node.getBoundingClientRect().top >= window.innerHeight - 40) {
      setVisible(false);
    }

    observer.observe(node);
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

const businessTypes = [
  {
    number: "01",
    icon: Building2,
    title: "Residential Developers & Builders",
    category: "RESIDENTIAL REAL ESTATE",
    description:
      "Build visibility for residential projects, property configurations, localities, launch campaigns and relevant site-visit enquiries.",
    priority: "Project Discovery & Qualified Site Visits",
    image: "/industries/real-estate/residential-developers.webp",
    alt: "Modern residential apartment development with landscaped surroundings",
    position: "center",
    className: "lg:col-span-7 lg:row-span-2",
    featured: true,
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Commercial Real Estate Businesses",
    category: "COMMERCIAL PROPERTIES",
    description:
      "Reach businesses searching for office spaces, commercial units, suitable locations and relevant property requirements.",
    priority: "Requirement-Based Commercial Enquiries",
    image: "/industries/real-estate/commercial-properties.webp",
    alt: "Modern commercial office complex with contemporary glass architecture",
    position: "center",
    className: "lg:col-span-5",
    featured: false,
  },
  {
    number: "03",
    icon: Gem,
    title: "Luxury Real Estate Projects",
    category: "PREMIUM PROPERTIES",
    description:
      "Develop a premium project presentation with detailed property information, professional visuals and relevant high-value buyer enquiries.",
    priority: "Premium Presentation & Relevant Buyer Interest",
    image: "/industries/real-estate/luxury-properties.webp",
    alt: "Luxury residential property with refined modern architecture and premium features",
    position: "center",
    className: "lg:col-span-5",
    featured: false,
  },
  {
    number: "04",
    icon: HousePlus,
    title: "Property Brokers & Consultants",
    category: "BROKERAGE & CONSULTING",
    description:
      "Improve visibility for suitable property listings, location-specific services and client enquiries across the areas you serve.",
    priority: "Relevant Listings & Client Enquiries",
    image: "/industries/real-estate/property-consultants.webp",
    alt: "Professional property consultant reviewing residential floor plans and property details",
    position: "center",
    className: "lg:col-span-6",
    featured: false,
  },
  {
    number: "05",
    icon: MapPinned,
    title: "Plot & Land Developers",
    category: "LAND & PLOTTED DEVELOPMENTS",
    description:
      "Create clearer information about plot locations, layouts, project facilities, verified approvals and enquiry options.",
    priority: "Plot Discovery & Informed Enquiries",
    image: "/industries/real-estate/plot-developers.webp",
    alt: "Plotted residential land development with marked roads and planned infrastructure",
    position: "center",
    className: "lg:col-span-6",
    featured: false,
  },
] as const;

const strategies = [
  {
    number: "01",
    title: "New Residential Project",
    description:
      "Prioritise project launch awareness, relevant property searches and qualified enquiries.",
  },
  {
    number: "02",
    title: "Established Developer",
    description:
      "Strengthen project-level SEO, brand discovery and relevant direct website visibility.",
  },
  {
    number: "03",
    title: "Commercial Property Consultant",
    description:
      "Focus on suitable locations, property requirements and business-led search intent.",
  },
  {
    number: "04",
    title: "Luxury Property Business",
    description:
      "Build a considered presentation with detailed information and a consultation-focused buyer journey.",
  },
] as const;

export default function RealEstateWhoWeHelp() {
  return (
    <section
      id="real-estate-who-we-help"
      aria-labelledby="real-estate-who-we-help-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* 01 — INTRODUCTION */}

        <Reveal>
          <div className="mx-auto max-w-[850px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                Different Properties. Different Buyers.
              </span>

              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="real-estate-who-we-help-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              A Residential Developer and a Property Consultant{" "}
              <span className="text-[#B79A72]">
                Shouldn&apos;t Have the Same Marketing Strategy.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[720px] text-[13px] leading-[1.95] text-[#66798A] sm:text-[14px]">
              The right approach depends on what you&apos;re selling,
              where you operate, who you&apos;re targeting and
              how buyers make decisions.
            </p>
          </div>
        </Reveal>

        {/* 02 — ARCHITECTURAL PORTFOLIO GALLERY */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {businessTypes.map((business) => {
            const Icon = business.icon;

            return (
              <Reveal
                key={business.number}
                className={`min-w-0 ${business.className}`}
              >
                <article
                  className={`group relative isolate flex h-full min-h-[390px] flex-col overflow-hidden rounded-[17px] bg-[#E7E0D5] ${
                    business.featured
                      ? "lg:min-h-[780px]"
                      : "lg:min-h-[375px]"
                  }`}
                >
                  <Image
                    src={business.image}
                    alt={business.alt}
                    title={business.title}
                    fill
                    unoptimized
                    sizes={
                      business.featured
                        ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                        : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 48vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
                    style={{ objectPosition: business.position }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102537]/90 via-[#102537]/30 to-[#102537]/5" />

                  {/* TOP LABEL */}

                  <div className="relative z-10 flex items-start justify-between gap-4 p-5 sm:p-7">
                    <span className="max-w-[230px] rounded-full border border-white/40 bg-white/90 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#0B2A52] backdrop-blur-sm">
                      {business.category}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/15 font-serif text-[16px] text-white backdrop-blur-sm">
                      {business.number}
                    </span>
                  </div>

                  {/* CONTENT OVER IMAGE */}

                  <div className="relative z-10 mt-auto px-6 pb-7 pt-16 sm:px-8 sm:pb-9">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    <h3
                      className={`mt-5 max-w-[560px] font-serif font-normal leading-[1.2] tracking-[-0.025em] text-white ${
                        business.featured
                          ? "text-[28px] sm:text-[35px] lg:text-[39px]"
                          : "text-[25px] sm:text-[29px]"
                      }`}
                    >
                      {business.title}
                    </h3>

                    <p className="mt-4 max-w-[550px] text-[12px] leading-[1.9] text-white/85 sm:text-[13px]">
                      {business.description}
                    </p>

                    <div className="mt-6 flex items-start gap-3 border-t border-white/25 pt-5">
                      <Target
                        size={17}
                        strokeWidth={1.5}
                        className="mt-0.5 shrink-0 text-[#E7CCAB]"
                      />

                      <div>
                        <span className="block text-[9px] font-medium uppercase tracking-[0.16em] text-[#E7CCAB]">
                          Marketing Priority
                        </span>

                        <p className="mt-2 font-serif text-[17px] leading-[1.4] text-white sm:text-[19px]">
                          {business.priority}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* 03 — STRATEGY BY INVENTORY */}

        <Reveal>
          <div className="mt-20 border-t border-[#E6DDD1] pt-11 sm:mt-24 lg:pt-14">

            <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A72]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">
                    A Strategy Built for Your Inventory
                  </span>
                </div>

                <h3 className="mt-5 max-w-[550px] font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[35px]">
                  Your Property Inventory{" "}
                  <span className="text-[#B79A72]">
                    Should Shape Your Campaigns.
                  </span>
                </h3>
              </div>

              <p className="max-w-[570px] text-[13px] leading-[1.95] text-[#6A7C8D] sm:text-[14px]">
                Property type, availability, location, price range
                and buying intent all influence the right
                marketing approach. We focus on connecting your
                actual inventory with the audiences most likely
                to find it relevant.
              </p>
            </div>
          </div>
        </Reveal>

        {/* EDITORIAL STRATEGY LIST */}

        <div className="mt-10 grid gap-x-12 border-t border-[#E6DDD1] md:grid-cols-2 lg:mt-12 lg:gap-x-16">
          {strategies.map((strategy) => (
            <Reveal key={strategy.number}>
              <div className="group flex h-full gap-5 border-b border-[#E6DDD1] py-7 sm:py-9">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E4D6C4] bg-[#FAF7F2] font-serif text-[15px] text-[#B79A72] transition-colors duration-300 group-hover:bg-[#F0E4D3]">
                  {strategy.number}
                </span>

                <div>
                  <h4 className="font-serif text-[21px] font-normal leading-[1.35] sm:text-[24px]">
                    {strategy.title}
                  </h4>

                  <p className="mt-3 max-w-[470px] text-[12px] leading-[1.95] text-[#728293] sm:text-[13px]">
                    {strategy.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 04 — FINAL SECTION CTA */}

        <Reveal>
          <div className="mt-12 flex flex-col gap-7 rounded-[17px] border border-[#E8DED1] bg-[#FAF7F2] px-6 py-8 sm:px-9 sm:py-10 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-11">
            <div className="max-w-[720px]">
              <div className="flex items-center gap-3">
                <Compass
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#B79A72]"
                />

                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#A1845F]">
                  Let&apos;s Discuss Your Growth Priorities
                </span>
              </div>

              <p className="mt-4 font-serif text-[23px] font-normal leading-[1.42] text-[#284762] sm:text-[28px]">
                Different property businesses need{" "}
                <span className="text-[#B79A72]">
                  different ways to attract the right buyers.
                </span>
              </p>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Your properties",
                  "Your target locations",
                  "Your buyer audience",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 text-[11px] text-[#7C7D79]"
                  >
                    <Check
                      size={14}
                      strokeWidth={1.6}
                      className="text-[#B79A72]"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact?service=real-estate-marketing"
              title="Discuss My Property Marketing Goals"
              className="group inline-flex min-h-[51px] w-full shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B79A72] sm:w-fit"
            >
              Discuss My Property Marketing Goals

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
