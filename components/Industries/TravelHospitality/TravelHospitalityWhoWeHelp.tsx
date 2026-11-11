
"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Hotel,
  Palmtree,
  House,
  Plane,
  MapPin,
  Check,
  Compass,
} from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"initial" | "hidden" | "visible">("initial");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setStatus("visible");
      return;
    }

    const bounds = element.getBoundingClientRect();

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
      { threshold: 0.08, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        status === "initial"
          ? ""
          : "transition-[opacity,transform] duration-700 ease-out"
      } ${
        status === "hidden"
          ? "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          : "translate-y-0 opacity-100"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const businesses = [
  {
    number: "01",
    icon: Hotel,
    title: "Hotels & Boutique Stays",
    category: "HOTELS & ACCOMMODATION",
    image: "/industries/travel-hospitality/boutique-hotel.webp",
    alt: "Elegant boutique hotel exterior with welcoming architecture and natural daylight",
    imagePosition: "center",
    description:
      "Improve destination and local SEO, official website visibility, room and amenity information, and direct booking opportunities for relevant travellers.",
    outcome: "Relevant Guest Discovery & Direct Bookings",
    tags: ["Hotel SEO", "Direct Bookings", "Local Search"],
    span: "lg:col-span-7",
  },
  {
    number: "02",
    icon: Palmtree,
    title: "Resorts & Vacation Properties",
    category: "RESORTS & HOLIDAY STAYS",
    image: "/industries/travel-hospitality/resort-property.webp",
    alt: "Luxury vacation resort surrounded by greenery with a calm and inviting outdoor setting",
    imagePosition: "center",
    description:
      "Build visibility around relaxing stays, weekend getaways, family holidays, premium experiences and suitable seasonal campaigns.",
    outcome: "Relevant Holiday Enquiries & Seasonal Demand",
    tags: ["Resort Marketing", "Stay Experiences", "Seasonal Campaigns"],
    span: "lg:col-span-5",
  },
  {
    number: "03",
    icon: House,
    title: "Villas & Homestays",
    category: "PRIVATE STAYS & HOMESTAYS",
    image: "/industries/travel-hospitality/villa-homestay.webp",
    alt: "Architectural holiday villa or homestay surrounded by natural scenery",
    imagePosition: "center",
    description:
      "Highlight property features, amenities, nearby attractions, location advantages and relevant direct enquiry or booking opportunities.",
    outcome: "Property Discovery & Stay Enquiries",
    tags: ["Property SEO", "Local Attractions", "Booking Enquiries"],
    span: "lg:col-span-5",
  },
  {
    number: "04",
    icon: Plane,
    title: "Travel Agencies & Tour Operators",
    category: "DESTINATIONS & TRAVEL EXPERIENCES",
    image: "/industries/travel-hospitality/travel-agency.webp",
    alt: "Scenic mountain destination representing holiday packages and organised travel experiences",
    imagePosition: "center",
    description:
      "Generate relevant destination and tour package enquiries through itinerary pages, Google Search campaigns, useful travel content and timely follow-up workflows.",
    outcome: "Qualified Tour Package Enquiries",
    tags: ["Package SEO", "Travel Ads", "Enquiry Follow-Ups"],
    span: "lg:col-span-7",
  },
] as const;

export default function TravelHospitalityWhoWeHelp() {
  return (
    <section
      id="hospitality-who-we-help"
      aria-labelledby="hospitality-who-we-help-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* INTRODUCTION */}

        <Reveal>
          <div className="mx-auto max-w-[790px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                Built Around Your Hospitality Business
              </span>

              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="hospitality-who-we-help-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              Different Travel Businesses Need{" "}
              <span className="text-[#B79A72]">
                Different Ways to Grow.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[690px] text-[13px] leading-[1.95] text-[#0B2A52]/70 sm:text-[14px]">
              A boutique hotel, holiday resort and travel agency
              serve different audiences and depend on different
              booking journeys.
            </p>

            <p className="mx-auto mt-3 max-w-[690px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
              We adapt your digital marketing strategy to what
              you offer, where your customers search and how
              they make travel decisions.
            </p>
          </div>
        </Reveal>

        {/* PHOTOGRAPHIC BUSINESS GALLERY */}

        <div className="mt-12 grid items-start gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {businesses.map((business, index) => {
            const Icon = business.icon;

            return (
              <Reveal
                key={business.number}
                className={`min-w-0 h-full md:col-span-1 ${business.span}`}
                delay={(index % 2) * 90}
              >
                <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[17px] border border-[#E9E1D7] bg-[#FCFAF7] transition-all duration-500 hover:border-[#DCC7AA] hover:shadow-[0_22px_46px_-35px_rgba(11,42,82,0.19)]">

                  {/* LARGE PHOTOGRAPH */}
                  <div className="relative h-[250px] overflow-hidden bg-[#EEE8DE] sm:h-[290px] lg:h-[330px] xl:h-[365px]">
                    <Image
                      src={business.image}
                      alt={business.alt}
                      title={business.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]"
                      style={{ objectPosition: business.imagePosition }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#152D3A]/30 via-transparent to-transparent" />

                    {/* IMAGE TOP DETAILS */}
                    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4 sm:left-6 sm:right-6 sm:top-6">
                      <span className="rounded-full border border-white/50 bg-white/90 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#0B2A52] backdrop-blur-sm">
                        {business.category}
                      </span>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/85 font-serif text-[16px] text-[#9B7D57] backdrop-blur-sm">
                        {business.number}
                      </span>
                    </div>

                    {/* IMAGE BOTTOM ICON */}
                    <div className="absolute bottom-5 left-5 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#B79A72] shadow-sm backdrop-blur-sm sm:bottom-6 sm:left-6">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* EDITORIAL INFORMATION */}
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-6 sm:px-7 sm:pb-8 sm:pt-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="max-w-[480px] font-serif text-[23px] font-normal leading-[1.28] tracking-[-0.025em] sm:text-[26px]">
                        {business.title}
                      </h3>

                      <span className="mt-1 shrink-0 text-[#B79A72] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight size={19} strokeWidth={1.5} />
                      </span>
                    </div>

                    <p className="mt-4 max-w-[600px] text-[12px] leading-[1.95] text-[#66788A] sm:text-[13px]">
                      {business.description}
                    </p>

                    {/* BUSINESS OUTCOME */}
                    <div className="mt-6 flex items-start gap-3 border-t border-[#E7DED2] pt-5">
                      <Check
                        size={16}
                        strokeWidth={1.6}
                        className="mt-0.5 shrink-0 text-[#B79A72]"
                      />

                      <div>
                        <span className="block text-[9px] font-medium uppercase tracking-[0.15em] text-[#A38661]">
                          Marketing Priority
                        </span>

                        <p className="mt-2 font-serif text-[17px] font-normal leading-[1.4] text-[#284762] sm:text-[18px]">
                          {business.outcome}
                        </p>
                      </div>
                    </div>

                    {/* RELEVANT AREAS */}
                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {business.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#E8DFD2] bg-white/80 px-3 py-2 text-[10px] text-[#927B5C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* CLOSING EDITORIAL STATEMENT */}

        <Reveal>
          <div className="mt-12 grid gap-6 border-t border-[#E5DBCE] pt-9 lg:mt-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-14">
            <div className="flex items-center gap-3 lg:items-start lg:pt-2">
              <Compass
                size={19}
                strokeWidth={1.5}
                className="shrink-0 text-[#B79A72]"
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#A1845F]">
                Built for Your Booking Goals
              </span>
            </div>

            <p className="max-w-[850px] font-serif text-[20px] font-normal leading-[1.6] tracking-[-0.02em] text-[#284762] sm:text-[24px]">
              Whether your priority is hotel reservations,
              holiday stay enquiries or qualified tour package
              leads, we build your strategy around{" "}
              <span className="text-[#B79A72]">
                the travellers you want to reach
              </span>{" "}
              and the actions you want them to take.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
