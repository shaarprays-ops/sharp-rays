
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Search,
  Hotel,
  CalendarCheck2,
  SunMedium,
  ArrowUpRight,
  Check,
  MoveDown,
  Compass,
} from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"initial" | "hidden" | "visible">("initial");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setState("visible");
      return;
    }

    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight - 40 && bounds.bottom > 0) {
      setState("visible");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        state !== "initial"
          ? "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none"
          : ""
      } ${
        state === "hidden"
          ? "translate-y-9 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          : "translate-y-0 opacity-100"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const challenges = [
  {
    number: "01",
    icon: Search,
    category: "Visibility",
    short: "Not Getting Found",
    heading: "Make Your Business Easier to Discover.",
    description:
      "If your property, destination pages or travel packages aren't appearing for relevant searches, the priority is to improve visibility where travellers are already researching.",
    outcome: "Relevant traveller discovery",
    steps: [
      {
        name: "Search Visibility",
        detail:
          "Identify relevant destination, accommodation, experience or package searches.",
      },
      {
        name: "Relevant Pages",
        detail:
          "Build useful property, destination and service pages around those searches.",
      },
      {
        name: "Search Campaigns",
        detail:
          "Use appropriate SEO and paid campaigns to reach interested travellers.",
      },
    ],
    services: ["Travel SEO", "Local Search", "Google Ads"],
  },
  {
    number: "02",
    icon: Hotel,
    category: "Direct Bookings",
    short: "Too Dependent on OTAs",
    heading: "Build a Stronger Path to Direct Bookings.",
    description:
      "Online travel agencies can be useful partners, but your business should also be easy to discover and book directly. A clearer official website can give travellers another convenient way to reach you.",
    outcome: "More direct-booking opportunities",
    steps: [
      {
        name: "Official Website Visibility",
        detail:
          "Help travellers find your official property website and relevant accommodation pages.",
      },
      {
        name: "Clear Booking Experience",
        detail:
          "Present rooms, amenities, policies and available booking options clearly.",
      },
      {
        name: "Guest Communication",
        detail:
          "Support timely enquiries and appropriate consent-based guest follow-ups.",
      },
    ],
    services: ["Hospitality SEO", "Website Development", "AI Automation"],
  },
  {
    number: "03",
    icon: CalendarCheck2,
    category: "Conversions",
    short: "Enquiries But Few Bookings",
    heading: "Make the Journey From Enquiry to Booking Easier.",
    description:
      "Getting messages, calls or enquiries is encouraging. But if the booking process is confusing, important information is missing or responses arrive too late, travellers may choose another option.",
    outcome: "Better enquiry-to-booking experience",
    steps: [
      {
        name: "Find the Friction",
        detail:
          "Review common booking questions, enquiry sources and possible drop-off points.",
      },
      {
        name: "Simplify the Next Step",
        detail:
          "Improve package information, enquiry forms and clear booking calls to action.",
      },
      {
        name: "Improve Follow-Ups",
        detail:
          "Support timely, relevant responses and appropriate enquiry reminders.",
      },
    ],
    services: ["Website Development", "Conversion Optimisation", "AI Automation"],
  },
  {
    number: "04",
    icon: SunMedium,
    category: "Seasonality",
    short: "Low Off-Season Demand",
    heading: "Create Better Reasons to Travel in Quieter Months.",
    description:
      "Travel demand changes with seasons, occasions and customer preferences. The opportunity is to identify relevant audiences and experiences instead of repeating the same promotion throughout the year.",
    outcome: "Relevant off-season booking demand",
    steps: [
      {
        name: "Identify Travel Occasions",
        detail:
          "Explore relevant traveller groups, local events and suitable seasonal experiences.",
      },
      {
        name: "Promote Relevant Offers",
        detail:
          "Build campaigns around genuine packages, experiences and available stay options.",
      },
      {
        name: "Reconnect With Guests",
        detail:
          "Use consent-based communication to share relevant return-stay opportunities.",
      },
    ],
    services: ["Performance Marketing", "Content Marketing", "AI Automation"],
  },
] as const;

export default function TravelHospitalityChallenges() {
  return (
    <section
      id="hospitality-booking-opportunities"
      aria-labelledby="hospitality-challenges-heading"
      className="relative overflow-hidden bg-[#FCFAF7] py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* SECTION INTRO */}

        <Reveal>
          <div className="mx-auto max-w-[840px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                Find Your Biggest Booking Opportunity
              </span>
              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="hospitality-challenges-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              Getting Travel Interest Is One Thing.{" "}
              <span className="text-[#B79A72]">
                Turning It Into Bookings Is Another.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[710px] text-[13px] leading-[1.95] text-[#65778A] sm:text-[14px]">
              Not every hospitality business needs more advertising.
              Some need stronger search visibility. Others already attract
              travellers but lose opportunities because their website is
              difficult to use, booking information is unclear or
              follow-ups are delayed.
            </p>

            <p className="mx-auto mt-3 text-[13px] font-medium leading-[1.9] text-[#0B2A52]/80 sm:text-[14px]">
              Your strategy should start with the challenge affecting your business most.
            </p>
          </div>
        </Reveal>

        {/* A SIMPLE VISUAL OVERVIEW — NO TABS */}

        <Reveal>
          <div className="mt-12 border-y border-[#E5DBCF] py-6 lg:mt-16">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
              {challenges.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.number} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E1D2BE] bg-white text-[#B79A72]">
                      <Icon size={17} strokeWidth={1.5} />
                    </span>

                    <div className="min-w-0">
                      <span className="block text-[9px] uppercase tracking-[0.13em] text-[#A28B6D]">
                        Opportunity {item.number}
                      </span>
                      <p className="mt-1 font-serif text-[15px] leading-[1.35] sm:text-[17px]">
                        {item.short}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* THE BOOKING JOURNEY */}

        <div className="relative mt-14 lg:mt-20">
          {/* Centre journey line on desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-16 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#DFD1BF] lg:block"
          />

          {challenges.map((item, index) => {
            const Icon = item.icon;
            const reversed = index % 2 !== 0;

            return (
              <Reveal key={item.number} className="relative">
                <article className="relative pb-16 last:pb-0 sm:pb-20 lg:pb-24">

                  {/* CENTRAL JOURNEY MARKER */}
                  <div className="relative mb-7 flex items-center gap-4 lg:mb-0 lg:justify-center">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#D5BB96] bg-white text-[#B79A72] shadow-[0_6px_20px_-12px_rgba(91,65,32,0.25)] lg:h-14 lg:w-14">
                      <Icon size={21} strokeWidth={1.45} />
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.17em] text-[#A48B69] lg:hidden">
                      Opportunity {item.number} / 04
                    </span>
                  </div>

                  {/* ASYMMETRIC EDITORIAL LAYOUT */}
                  <div
                    className={`grid gap-7 lg:grid-cols-[minmax(0,1fr)_110px_minmax(0,1fr)] lg:items-start lg:gap-6 ${
                      index === 0 ? "lg:-mt-8" : "lg:-mt-9"
                    }`}
                  >
                    {/* LARGE EDITORIAL STATEMENT */}
                    <div
                      className={`relative min-w-0 ${
                        reversed ? "lg:col-start-3 lg:row-start-1" : "lg:col-start-1 lg:row-start-1"
                      }`}
                    >
                      <div className={`relative ${reversed ? "lg:pl-2" : "lg:pr-2"}`}>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -top-9 right-0 select-none font-serif text-[105px] leading-none tracking-[-0.07em] text-[#B79A72]/[0.11] sm:text-[135px] lg:-top-12 lg:text-[155px]"
                        >
                          {item.number}
                        </span>

                        <div className="relative">
                          <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#B79A72]" />
                            <span className="text-[10px] uppercase tracking-[0.16em] text-[#A1845F]">
                              {item.short}
                            </span>
                          </div>

                          <h3 className="mt-6 max-w-[470px] font-serif text-[27px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[32px] lg:text-[34px]">
                            {item.heading}
                          </h3>

                          <p className="mt-5 max-w-[460px] text-[13px] leading-[1.95] text-[#66788A]">
                            {item.description}
                          </p>

                          {/* KEY OUTCOME */}
                          <div className="mt-7 flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0E6D8] text-[#A98C64]">
                              <Check size={16} strokeWidth={1.7} />
                            </span>

                            <div>
                              <span className="block text-[9px] uppercase tracking-[0.15em] text-[#A58F70]">
                                Primary Focus
                              </span>
                              <p className="mt-1 font-serif text-[17px] leading-[1.4] text-[#274660]">
                                {item.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* THE ACTION PLAN — NOT CARDS */}
                    <div
                      className={`min-w-0 lg:row-start-1 ${
                        reversed ? "lg:col-start-1" : "lg:col-start-3"
                      }`}
                    >
                      <div className="border-t-2 border-[#B79A72] bg-white px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6 lg:mt-12">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[10px] uppercase tracking-[0.15em] text-[#A1845F]">
                            What We Would Prioritise
                          </span>
                          <span className="font-serif text-[15px] text-[#B79A72]">
                            03
                          </span>
                        </div>

                        <div className="mt-5">
                          {item.steps.map((step, stepIndex) => (
                            <div
                              key={step.name}
                              className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 border-t border-[#EBE3D8] py-4 first:border-t-0 first:pt-0 sm:gap-4"
                            >
                              <span className="font-serif text-[15px] text-[#B79A72]">
                                0{stepIndex + 1}
                              </span>

                              <div className="min-w-0">
                                <h4 className="font-serif text-[19px] font-normal leading-[1.3] sm:text-[20px]">
                                  {step.name}
                                </h4>
                                <p className="mt-1.5 text-[12px] leading-[1.85] text-[#72808D]">
                                  {step.detail}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-2 border-t border-[#EAE1D5] pt-5">
                          <p className="text-[9px] uppercase tracking-[0.15em] text-[#A1845F]">
                            Relevant Sharp Rays Services
                          </p>

                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2.5">
                            {item.services.map((service) => (
                              <span
                                key={service}
                                className="inline-flex items-center gap-2 text-[11px] text-[#67798B]"
                              >
                                <span className="h-1 w-1 rounded-full bg-[#B79A72]" />
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SUBTLE JOURNEY CONNECTOR */}
                  {index !== challenges.length - 1 && (
                    <div className="mt-7 flex items-center gap-3 text-[#B79A72] lg:mt-12 lg:justify-center">
                      <span className="h-px w-7 bg-[#D6C3A9] lg:hidden" />
                      <MoveDown size={17} strokeWidth={1.4} />
                      <span className="text-[10px] uppercase tracking-[0.13em] lg:hidden">
                        Next Opportunity
                      </span>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* FINAL MESSAGE */}

        <Reveal>
          <div className="relative mt-4 border-t border-[#E4D9C9] pt-10 sm:pt-12">
            <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-start lg:gap-16">
              <div className="flex items-center gap-3">
                <Compass size={19} strokeWidth={1.5} className="text-[#B79A72]" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#A1845F]">
                  The Sharp Rays Approach
                </span>
              </div>

              <div>
                <p className="max-w-[840px] font-serif text-[12px] font-normal leading-[1.55] tracking-[-0.02em] text-[#284762] sm:text-[14px]">
                  The goal is not to recommend every marketing service.
                  It&apos;s to understand where your business is losing{" "}
                  <span className="text-[#B79A72]">
                    visibility, enquiries or bookings
                  </span>{" "}
                  and prioritise the improvements most relevant to
                  your situation.
                </p>

                <p className="mt-5 max-w-[660px] text-[12px] leading-[1.9] text-[#778594]">
                  The right priorities depend on your destination,
                  business model, existing marketing performance
                  and booking journey.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
