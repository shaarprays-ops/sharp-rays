
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Hotel,
  PlaneTakeoff,
  ChartNoAxesCombined,
  MousePointerClick,
  Wallet,
  CalendarDays,
  GitCompareArrows,
  BadgeCheck,
  Target,
  CircleCheck,
  Route,
  BarChart3,
  MessageSquareText,
  ShieldCheck,
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

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setStatus("visible");
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight - 35 && rect.bottom > 0) {
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
        status === "initial" ? "" : "transition-[opacity,transform] duration-700 ease-out"
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

const models = [
  {
    number: "01",
    eyebrow: "HOTELS, RESORTS & ACCOMMODATION",
    title: "Hotels, Resorts & Accommodation",
    description:
      "Focus on room enquiries, direct booking opportunities and the efficiency of guest acquisition.",
    icon: Hotel,
    image: "/industries/travel-hospitality/hotel-performance.webp",
    imageAlt:
      "Premium resort property overlooking a swimming pool and natural surroundings",
    imageTitle: "Hotel and Resort Booking Performance",
    imageLabel: "ACCOMMODATION",
    imageCaption: "From property discovery to direct booking.",
    metrics: [
      {
        number: "01",
        icon: MessageSquareText,
        title: "Direct Booking Enquiries",
        description: "How many travellers enquire or book through official channels.",
      },
      {
        number: "02",
        icon: MousePointerClick,
        title: "Website Booking Conversion",
        description:
          "How effectively eligible website visits turn into reservations.",
      },
      {
        number: "03",
        icon: Wallet,
        title: "Cost per Booking",
        description:
          "How much attributable marketing spend contributes to a confirmed booking.",
      },
      {
        number: "04",
        icon: GitCompareArrows,
        title: "Direct vs OTA Booking Mix",
        description:
          "How direct reservations compare with third-party distribution.",
      },
      {
        number: "05",
        icon: CalendarDays,
        title: "Seasonal Booking Demand",
        description:
          "How relevant booking demand changes across travel periods.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "TRAVEL AGENCIES & TOUR OPERATORS",
    title: "Travel Agencies & Tour Operators",
    description:
      "Focus on qualified package enquiries, traveller intent and confirmed trip opportunities.",
    icon: PlaneTakeoff,
    image: "/industries/travel-hospitality/travel-performance.webp",
    imageAlt:
      "Scenic tropical beach and holiday destination representing travel package marketing",
    imageTitle: "Tour Operator and Travel Agency Marketing Performance",
    imageLabel: "TRAVEL EXPERIENCES",
    imageCaption: "From destination interest to confirmed trips.",
    metrics: [
      {
        number: "01",
        icon: BadgeCheck,
        title: "Qualified Travel Enquiries",
        description:
          "How many enquiries match the relevant destination, budget and travel requirements.",
      },
      {
        number: "02",
        icon: MousePointerClick,
        title: "Enquiry-to-Booking Rate",
        description:
          "How many prospective travellers progress to confirmed bookings.",
      },
      {
        number: "03",
        icon: Target,
        title: "Cost per Qualified Enquiry",
        description:
          "How efficiently campaigns attract suitable travel leads.",
      },
      {
        number: "04",
        icon: Wallet,
        title: "Cost per Confirmed Booking",
        description:
          "Marketing expenditure relative to confirmed package bookings.",
      },
      {
        number: "05",
        icon: Route,
        title: "Package-Level Performance",
        description:
          "Which destinations, itineraries and campaigns attract useful interest.",
      },
    ],
  },
] as const;

const supportAreas = [
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Understand relevant marketing channels and measurable booking or enquiry actions.",
  },
  {
    icon: Target,
    title: "Acquisition Efficiency",
    description:
      "Review campaign performance and the cost of suitable enquiries or bookings.",
  },
  {
    icon: Route,
    title: "Booking Journey",
    description:
      "Identify avoidable friction between traveller interest and the next booking step.",
  },
  {
    icon: MessageSquareText,
    title: "Enquiry Follow-Ups",
    description:
      "Support timely communication and suitable enquiry tracking workflows.",
  },
] as const;

export default function TravelHospitalityPerformance() {
  return (
    <section
      id="hospitality-booking-performance"
      aria-labelledby="hospitality-performance-heading"
      className="relative overflow-hidden bg-[#FCFAF7] py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* 01 — SECTION INTRO */}

        <Reveal>
          <div className="mx-auto max-w-[830px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                Make Every Booking Opportunity Count
              </span>
              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="hospitality-performance-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              More Bookings Matter.{" "}
              <span className="text-[#B79A72]">
                So Does What Each Booking Costs You.
              </span>
            </h2>

            <div className="mx-auto mt-5 max-w-[740px] space-y-3">
              <p className="text-[13px] leading-[1.95] text-[#0B2A52]/75 sm:text-[14px]">
                Website traffic, social media engagement and enquiry
                volume are useful indicators, but they don&apos;t tell
                the complete story.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
                A hotel may want more direct reservations and a healthier
                booking-channel mix. A travel agency may need more
                qualified package enquiries that turn into confirmed trips.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
                We help businesses understand how their digital marketing
                contributes to those outcomes.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 02 — TWO BUSINESS MODELS */}

        <Reveal>
          <div className="mt-14 flex flex-wrap items-end justify-between gap-4 border-b border-[#E5DBCF] pb-5 lg:mt-16">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">
                Performance Measurement
              </span>
              <h3 className="mt-2 font-serif text-[22px] font-normal leading-[1.3] sm:text-[27px]">
                Two Business Models.{" "}
                <span className="text-[#B79A72]">
                  Two Different Ways to Measure Growth.
                </span>
              </h3>
            </div>

            <span className="font-serif text-[13px] text-[#B79A72]">
              01 — 02
            </span>
          </div>
        </Reveal>

        {/* 03 — PHOTOGRAPHIC MODEL SHOWCASES */}

        <div className="mt-10 space-y-16 sm:mt-12 lg:space-y-24">
          {models.map((model, index) => {
            const Icon = model.icon;
            const reversed = index % 2 !== 0;

            return (
              <Reveal key={model.number}>
                <article>
                  <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">

                    {/* EDITORIAL IMAGE */}

                    <div
                      className={`min-w-0 ${
                        reversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative">
                        <div className="relative aspect-[5/4] overflow-hidden rounded-[17px] bg-[#EDE6DC] sm:aspect-[6/5] lg:aspect-[4/5] xl:aspect-[5/5]">
                          <Image
                            src={model.image}
                            alt={model.imageAlt}
                            title={model.imageTitle}
                            fill
                            sizes="(max-width: 1023px) 100vw, 45vw"
                            className="object-cover transition-transform duration-700 motion-safe:hover:scale-[1.035]"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#172F3E]/55 via-transparent to-transparent" />

                          {/* IMAGE INDEX */}
                          <span className="absolute left-5 top-5 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                            {model.imageLabel}
                          </span>

                          {/* IMAGE CAPTION */}
                          <div className="absolute bottom-6 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9">
                            <span className="text-[9px] uppercase tracking-[0.17em] text-white/75">
                              Performance Perspective
                            </span>

                            <p className="mt-2 max-w-[350px] font-serif text-[25px] leading-[1.25] text-white sm:text-[31px]">
                              {model.imageCaption}
                            </p>
                          </div>
                        </div>

                        {/* IMAGE BOTTOM DETAIL */}
                        <div className="mt-4 flex items-center justify-between gap-4">
                          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.13em] text-[#A1845F]">
                            <Icon size={15} strokeWidth={1.5} />
                            {model.eyebrow}
                          </span>
                          <span className="font-serif text-[14px] text-[#B79A72]">
                            {model.number} / 02
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* METRIC EDITORIAL CONTENT */}

                    <div
                      className={`min-w-0 ${
                        reversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#B79A72]" />
                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#A1845F]">
                          Business Model {model.number}
                        </span>
                      </div>

                      <h3 className="mt-5 max-w-[520px] font-serif text-[27px] font-normal leading-[1.22] tracking-[-0.03em] sm:text-[33px] lg:text-[35px]">
                        {model.title}
                      </h3>

                      <p className="mt-4 max-w-[510px] text-[13px] leading-[1.95] text-[#66798B]">
                        {model.description}
                      </p>

                      {/* METRICS AS A CONTINUOUS LIST */}
                      <div className="mt-8 border-t border-[#DED4C7]">
                        {model.metrics.map((metric) => {
                          const MetricIcon = metric.icon;

                          return (
                            <div
                              key={metric.number}
                              className="group/metric grid grid-cols-[38px_minmax(0,1fr)] gap-3 border-b border-[#E6DDD2] py-4 transition-colors duration-300 hover:bg-white/70 sm:grid-cols-[46px_minmax(0,1fr)] sm:gap-4 sm:py-5"
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E3D6C6] bg-white text-[#B79A72] transition-colors duration-300 group-hover/metric:bg-[#F2E7D8]">
                                <MetricIcon size={17} strokeWidth={1.5} />
                              </span>

                              <div className="min-w-0">
                                <div className="flex items-center justify-between gap-3">
                                  <h4 className="font-serif text-[18px] font-normal leading-[1.3] sm:text-[20px]">
                                    {metric.title}
                                  </h4>

                                  <span className="font-serif text-[12px] text-[#B79A72]">
                                    {metric.number}
                                  </span>
                                </div>

                                <p className="mt-1.5 max-w-[485px] text-[12px] leading-[1.85] text-[#798796]">
                                  {metric.description}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* 04 — HOW SHARP RAYS HELPS */}

        <Reveal>
          <div className="mt-20 border-t border-[#E5DBCF] pt-12 sm:mt-24 lg:pt-16">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A72]" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#A1845F]">
                    How Sharp Rays Helps
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-[28px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[34px]">
                  Better Visibility.{" "}
                  <span className="text-[#B79A72]">
                    More Informed Marketing Decisions.
                  </span>
                </h3>
              </div>

              <p className="max-w-[620px] text-[13px] leading-[1.95] text-[#657789] sm:text-[14px]">
                We can support suitable analytics, enquiry tracking,
                campaign reporting, booking-path improvements and
                follow-up systems based on the information your
                business can reliably provide.
              </p>
            </div>

            {/* FOUR SUPPORT AREAS */}
            <div className="mt-10 grid gap-px overflow-hidden rounded-[16px] border border-[#E6DBCD] bg-[#E6DBCD] sm:grid-cols-2 lg:grid-cols-4">
              {supportAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="group flex min-h-[210px] flex-col bg-white px-6 py-7 transition-colors duration-300 hover:bg-[#F9F4ED] sm:px-7"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        className="text-[#B79A72]"
                      />
                      <span className="font-serif text-[14px] text-[#C2A786]">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="mt-7 font-serif text-[20px] font-normal leading-[1.3]">
                      {area.title}
                    </h4>

                    <p className="mt-3 text-[12px] leading-[1.85] text-[#718091]">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* SCOPE CLARITY */}
            <div className="mt-7 flex items-start gap-3 border-l-2 border-[#B79A72] pl-5">
              <ShieldCheck
                size={18}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#B79A72]"
              />
              <p className="max-w-[980px] text-[12px] leading-[1.9] text-[#738091]">
                Our objective is to improve marketing visibility and
                acquisition decisions — without claiming to control
                hotel revenue management, property pricing or confirmed
                guest demand.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 05 — CLOSING STATEMENT */}

        <Reveal>
          <div className="mt-12 grid gap-5 border-t border-[#E5DBCF] pt-9 lg:mt-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-14">
            <div className="flex items-center gap-3 lg:items-start lg:pt-2">
              <ChartNoAxesCombined
                size={19}
                strokeWidth={1.5}
                className="shrink-0 text-[#B79A72]"
              />
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#A1845F]">
                Measure What Matters
              </span>
            </div>

            <p className="max-w-[880px] font-serif text-[21px] font-normal leading-[1.55] tracking-[-0.02em] text-[#284762] sm:text-[25px]">
              More traffic is useful. Understanding which channels generate{" "}
              <span className="text-[#B79A72]">
                meaningful booking opportunities
              </span>{" "}
              is what helps you make better marketing decisions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
