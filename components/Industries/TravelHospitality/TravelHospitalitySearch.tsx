
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  MapPin,
  Compass,
  CalendarCheck2,
  Luggage,
  Search,
  ArrowUpRight,
  Check,
} from "lucide-react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      setReady(true);
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
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const bounds = element.getBoundingClientRect();
    const alreadyVisible =
      bounds.top < window.innerHeight - 30 && bounds.bottom > 0;

    if (alreadyVisible) setVisible(true);

    setReady(true);

    if (!alreadyVisible) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        ready
          ? "transition-[opacity,transform] duration-700 ease-out"
          : ""
      } ${
        !ready || visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const opportunities = [
  {
    number: "01",
    title: "Destination",
    label: "DESTINATION-BASED SEARCHES",
    icon: MapPin,
    question: "Where should I stay?",
    description:
      "Travellers often begin with a city, region or attraction and look for accommodation options in that location.",
    searches: [
      "resorts in Lonavala",
      "hotels in Goa near beach",
      "homestays in Manali",
      "hotels near Jaipur airport",
      "boutique hotels in Udaipur",
    ],
    focus: "Destination & Local SEO",
    strategy:
      "We improve destination and location SEO, property pages, relevant local visibility and search campaigns around the places your customers want to visit.",
    actions: [
      "Destination landing pages",
      "Local SEO",
      "Property information",
    ],
  },
  {
    number: "02",
    title: "Experience",
    label: "EXPERIENCE-BASED SEARCHES",
    icon: Compass,
    question: "What experience am I looking for?",
    description:
      "Some travellers search by the holiday experience, property feature or travel preference they have in mind.",
    searches: [
      "romantic resorts near Mumbai",
      "family friendly hotels in Goa",
      "wellness retreats in India",
      "pet friendly homestays in Manali",
      "adventure stays near Rishikesh",
    ],
    focus: "Experience-Led Discovery",
    strategy:
      "We help present genuine accommodation features, experiences and destination content that match what your ideal guests want to explore.",
    actions: [
      "Experience pages",
      "Hospitality content",
      "Social media discovery",
    ],
  },
  {
    number: "03",
    title: "Booking",
    label: "BOOKING-INTENT SEARCHES",
    icon: CalendarCheck2,
    question: "Which stay should I book?",
    description:
      "Travellers closer to booking may search for accommodation with specific amenities, prices and room options.",
    searches: [
      "beach resorts in Goa with prices",
      "hotels in Jaipur with breakfast",
      "Lonavala resorts with private pool",
      "family rooms in Udaipur hotels",
      "weekend stay packages near Pune",
    ],
    focus: "Booking-Focused Marketing",
    strategy:
      "We improve property and room pages, booking information, relevant search campaigns and enquiry pathways to help travellers evaluate available options.",
    actions: [
      "Booking landing pages",
      "Google Search Ads",
      "Enquiry optimisation",
    ],
  },
  {
    number: "04",
    title: "Tour Packages",
    label: "TOUR PACKAGE SEARCHES",
    icon: Luggage,
    question: "Which trip fits my travel plans?",
    description:
      "Holiday planners often compare trip durations, destinations, itineraries and package inclusions before making an enquiry.",
    searches: [
      "Goa tour packages for couples",
      "Manali 4 days 3 nights package",
      "Rajasthan family holiday packages",
      "Kerala honeymoon tour packages",
      "customised Himachal tour packages",
    ],
    focus: "Tour Package Visibility",
    strategy:
      "We build destination and itinerary-led content, package landing pages and relevant enquiry journeys around the travel experiences your business actually offers.",
    actions: [
      "Tour package SEO",
      "Itinerary content",
      "Package enquiries",
    ],
  },
] as const;

export default function TravelHospitalitySearch() {
  return (
    <section
      id="hospitality-opportunities"
      aria-labelledby="hospitality-search-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* 01 — SECTION INTRODUCTION */}

        <ScrollReveal>
          <div className="mx-auto max-w-[830px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                How Travellers Discover Their Next Stay or Trip
              </span>
              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="hospitality-search-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              Travellers Are Searching for Experiences.{" "}
              <span className="text-[#B79A72]">
                Is Your Business Part of Their Options?
              </span>
            </h2>

            <div className="mx-auto mt-5 max-w-[710px] space-y-3">
              <p className="text-[13px] leading-[1.9] text-[#0B2A52]/75 sm:text-[14px]">
                Before making a booking, travellers often search for
                destinations, accommodation types, experiences, prices
                and holiday packages.
              </p>

              <p className="text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
                Some already know where they want to go. Others are
                comparing hotels, resorts, homestays or travel itineraries
                to find an option that suits their plans.
              </p>

              <p className="text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
                We help your business become easier to discover through
                relevant search visibility, destination content and
                booking-focused campaigns.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 02 — SCROLL-FIRST SEARCH JOURNEY */}

        <div className="mt-14 lg:mt-16">

          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6DFD6] pb-5">
              <div className="flex items-center gap-3">
                <Search
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#B79A72]"
                />

                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A08461] sm:text-[11px]">
                  Explore Traveller Search Opportunities
                </span>
              </div>

              <span className="font-serif text-[13px] text-[#B79A72]">
                Four Ways Travellers Search
              </span>
            </div>
          </ScrollReveal>

          {/* ALL FOUR CATEGORIES — AUTO REVEAL ON SCROLL */}

          <div>
            {opportunities.map((item) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.number}>
                  <article className="group relative grid gap-7 border-b border-[#E6DFD6] py-9 sm:py-11 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:py-12">

                    {/* Subtle hover indicator */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 h-[2px] w-0 bg-[#B79A72] transition-[width] duration-700 group-hover:w-full"
                    />

                    {/* LEFT — EDITORIAL CATEGORY */}

                    <div className="flex flex-col">
                      <div className="flex items-center gap-4">
                        <span className="font-serif text-[14px] text-[#B79A72]">
                          {item.number}
                        </span>

                        <span className="h-px w-8 bg-[#D7C2A6]" />

                        <span className="text-[10px] uppercase tracking-[0.14em] text-[#A28A6B]">
                          {item.title}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E8DDCE] bg-[#FAF7F2] text-[#B79A72] transition-all duration-300 group-hover:border-[#D2B58D] group-hover:bg-[#F4EBDD] motion-safe:group-hover:-translate-y-0.5">
                          <Icon size={21} strokeWidth={1.45} />
                        </span>

                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#A08461]">
                          {item.label}
                        </span>
                      </div>

                      <h3 className="mt-5 max-w-[410px] font-serif text-[26px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[30px]">
                        {item.question}
                      </h3>

                      <p className="mt-4 max-w-[410px] text-[13px] leading-[1.9] text-[#6C7B89]">
                        {item.description}
                      </p>

                      {/* MARKETING SOLUTION */}

                      <div className="mt-7 border-l-2 border-[#B79A72] pl-5 lg:mt-auto lg:pt-3">
                        <span className="text-[10px] uppercase tracking-[0.13em] text-[#A08461]">
                          How Sharp Rays Helps
                        </span>

                        <h4 className="mt-2 font-serif text-[20px] font-normal leading-[1.35] text-[#0B2A52]">
                          {item.focus}
                        </h4>

                        <p className="mt-3 max-w-[410px] text-[12px] leading-[1.9] text-[#66788A] sm:text-[13px]">
                          {item.strategy}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT — SEARCH EXAMPLES */}

                    <div className="min-w-0">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#A08461]">
                          Illustrative Customer Searches
                        </span>

                        <span className="text-[11px] text-[#A8A095]">
                          05 examples
                        </span>
                      </div>

                      <div className="border-t border-[#EAE3DB]">
                        {item.searches.map((query, queryIndex) => (
                          <div
                            key={query}
                            className="group/search flex items-center gap-4 border-b border-[#EAE3DB] px-2 py-[15px] transition-colors duration-300 hover:bg-[#FCFAF7] sm:gap-5 sm:px-4 sm:py-[18px]"
                          >
                            <span className="font-serif text-[12px] text-[#B79A72]">
                              0{queryIndex + 1}
                            </span>

                            <Search
                              size={16}
                              strokeWidth={1.45}
                              className="shrink-0 text-[#C0A783]"
                            />

                            <p className="min-w-0 flex-1 font-serif text-[17px] font-normal leading-[1.4] text-[#304B64] transition-colors duration-300 group-hover/search:text-[#A28560] sm:text-[19px]">
                              {query}
                            </p>

                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.5}
                              className="shrink-0 text-[#C5B5A0] transition-all duration-300 motion-safe:group-hover/search:translate-x-0.5 motion-safe:group-hover/search:-translate-y-0.5 group-hover/search:text-[#B79A72]"
                            />
                          </div>
                        ))}
                      </div>

                      {/* ACTION TOPICS */}

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                        {item.actions.map((action) => (
                          <span
                            key={action}
                            className="inline-flex items-center gap-2 text-[11px] text-[#907A60]"
                          >
                            <Check
                              size={13}
                              strokeWidth={1.7}
                              className="text-[#B79A72]"
                            />

                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          {/* SEARCH DISCLAIMER */}

          <ScrollReveal>
            <div className="mt-6 flex items-start gap-3">
              <MapPin
                size={16}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#B79A72]"
              />

              <p className="max-w-[1040px] text-[11px] leading-[1.9] text-[#8995A0]">
                These are illustrative search patterns, not verified
                search-volume estimates. Actual keyword targeting
                depends on your properties, destinations, packages,
                audiences and competition.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 03 — CLOSING STATEMENT */}

        <ScrollReveal>
          <div className="mt-12 flex flex-col gap-5 border-t border-[#E6DFD6] pt-9 lg:mt-14 lg:flex-row lg:items-start lg:gap-14">
            <div className="flex shrink-0 items-center gap-3 lg:pt-2">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                From Search to Booking
              </span>
            </div>

            <p className="max-w-[850px] font-serif text-[20px] font-normal leading-[1.6] text-[#284762] sm:text-[24px]">
              From Google Search and Maps to destination guides
              and social media discovery, we build travel marketing
              around what travellers look for before choosing{" "}
              <span className="text-[#B79A72]">
                a place to stay or a trip to book.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
