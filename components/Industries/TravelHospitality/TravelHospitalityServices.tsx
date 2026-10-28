
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  Search,
  Megaphone,
  MonitorSmartphone,
  Clapperboard,
  MessagesSquare,
  ArrowUpRight,
  ArrowRight,
  Check,
  MapPinned,
  Sparkles,
} from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = node.getBoundingClientRect();
    if (bounds.top >= window.innerHeight - 30) setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    number: "01",
    icon: Search,
    title: "Hospitality & Travel SEO",
    intro:
      "Help your hotel, property or travel company appear for relevant destination, accommodation, experience and package-related searches.",
    detail:
      "We work on destination pages, accommodation SEO, tour package SEO, technical optimisation, internal linking, relevant content and local search visibility where applicable.",
    focus:
      "Reach travellers researching the stays, destinations and experiences you offer.",
    href: "/services/search-engine-optimization",
    color: "#F2F5EE",
    iconColor: "#6E8666",
    lineColor: "#A6B69D",
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Google Ads & Performance Marketing",
    intro:
      "Connect with travellers actively searching for relevant accommodation, destinations and travel packages.",
    detail:
      "We plan suitable Search and remarketing campaigns, improve audience and location targeting, align landing pages and monitor measurable booking or enquiry actions. Where supported, eligible accommodation businesses may also use compatible hotel booking advertising integrations.",
    focus:
      "Generate relevant booking opportunities and improve acquisition efficiency.",
    href: "/services/performance-marketing",
    color: "#F5F0E9",
    iconColor: "#A28158",
    lineColor: "#C9AF8A",
  },
  {
    number: "03",
    icon: MonitorSmartphone,
    title: "Website Development & Booking Experience",
    intro:
      "Create websites that make your accommodation or travel offering easy to explore, compare and enquire about.",
    detail:
      "We can build property websites, room pages, amenity pages, destination guides, itinerary pages and booking or enquiry experiences. Compatible booking engines and reservation tools can be integrated where appropriate.",
    focus:
      "Make it easier for interested travellers to take the next step.",
    href: "/services/website-development",
    color: "#EFF3F7",
    iconColor: "#6988A3",
    lineColor: "#ABC0D0",
  },
  {
    number: "04",
    icon: MapPinned,
    title: "Social Media & Content Marketing",
    intro:
      "Inspire travellers through authentic property experiences, destination content, itinerary ideas and relevant travel information.",
    detail:
      "We create content around rooms, amenities, destinations, local experiences, seasonal travel, guest questions and promotional campaigns.",
    focus:
      "Build travel interest, trust and relevant discovery.",
    href: "/services/social-media-marketing",
    secondaryHref: "/services/content-marketing",
    secondaryLabel: "Content Marketing",
    color: "#F6EFF0",
    iconColor: "#B08088",
    lineColor: "#D1A8AF",
  },
  {
    number: "05",
    icon: Clapperboard,
    title: "AI Video, Creative & Professional Editing",
    intro:
      "Communicate what makes your property or travel experience worth exploring through engaging visual content.",
    detail:
      "We can create destination videos, property explainers, short-form Reels, promotional campaign assets, AI-assisted creative and professionally edited travel videos.",
    focus:
      "Help travellers understand the experience before making a booking decision.",
    href: "/services/video-and-creative",
    secondaryHref: "/services/professional-video-editing",
    secondaryLabel: "Professional Video Editing",
    color: "#F2EFF7",
    iconColor: "#8B7BA8",
    lineColor: "#BDB0D1",
  },
  {
    number: "06",
    icon: MessagesSquare,
    title: "AI Automation & Guest Communication",
    intro:
      "Improve the way booking and travel enquiries are acknowledged, organised and followed up.",
    detail:
      "We can support routine enquiry responses, booking information delivery, follow-up reminders, lead routing, guest communication and suitable post-stay or post-trip workflows.",
    focus:
      "Reduce missed enquiries and improve communication throughout the booking journey.",
    href: "/services/ai-automation",
    color: "#EDF5F3",
    iconColor: "#6D9C93",
    lineColor: "#A1C4BB",
  },
] as const;

export default function TravelHospitalityServices() {
  return (
    <section
      id="hospitality-services"
      aria-labelledby="hospitality-services-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* SECTION INTRO */}

        <Reveal>
          <div className="mx-auto max-w-[800px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] uppercase tracking-[0.19em] text-[#B79A72] sm:text-[11px]">
                Our Travel & Hospitality Marketing Services
              </span>
              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="hospitality-services-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              The Right Services for the Way Your Customers{" "}
              <span className="text-[#B79A72]">Search and Book.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[13px] leading-[1.95] text-[#0B2A52]/70 sm:text-[14px]">
              A hotel needs strong property visibility and a convenient
              booking experience. A travel company needs relevant
              destination enquiries and clear package information.
            </p>

            <p className="mx-auto mt-3 max-w-[670px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
              We combine digital marketing services around your
              business model, audience, locations and commercial goals.
            </p>
          </div>
        </Reveal>

        {/* SIX SOFT-COLOUR SERVICE CARDS */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.number} className="h-full" delay={(index % 2) * 100}>
                <article
                  className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[19px] border border-[#E9E2D9]/70 px-6 py-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-35px_rgba(11,42,82,0.22)] sm:px-8 sm:py-9"
                  style={{ backgroundColor: service.color }}
                >
                  {/* Minimal decorative circle */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-16 h-[185px] w-[185px] rounded-full border opacity-40"
                    style={{ borderColor: service.lineColor }}
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -top-7 h-[115px] w-[115px] rounded-full border opacity-30"
                    style={{ borderColor: service.lineColor }}
                  />

                  {/* ICON + NUMBER */}
                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-[13px] border border-white/80 bg-white/75 shadow-sm"
                      style={{ color: service.iconColor }}
                    >
                      <Icon size={23} strokeWidth={1.45} />
                    </span>

                    <span className="font-serif text-[28px] leading-none text-[#B79A72]/75">
                      {service.number}
                    </span>
                  </div>

                  {/* SERVICE CONTENT */}

                  <h3 className="relative mt-7 max-w-[500px] font-serif text-[25px] font-normal leading-[1.26] tracking-[-0.025em] sm:text-[28px]">
                    {service.title}
                  </h3>

                  <p className="relative mt-4 text-[13px] leading-[1.85] text-[#40576B]">
                    {service.intro}
                  </p>

                  <p className="relative mt-3 text-[12px] leading-[1.9] text-[#627589] sm:text-[13px]">
                    {service.detail}
                  </p>

                  {/* MAIN FOCUS */}

                  <div className="relative mt-7 border-t border-[#0B2A52]/10 pt-5">
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/80"
                        style={{ color: service.iconColor }}
                      >
                        <Check size={14} strokeWidth={1.8} />
                      </span>

                      <div>
                        <span
                          className="block text-[10px] font-medium uppercase tracking-[0.15em]"
                          style={{ color: service.iconColor }}
                        >
                          Primary Focus
                        </span>

                        <p className="mt-1.5 text-[12px] leading-[1.85] text-[#354E62] sm:text-[13px]">
                          {service.focus}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SERVICE LINKS */}

                  <div className="relative mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
                    <Link
                      href={service.href}
                      title={`Explore ${service.title}`}
                      className="group/link inline-flex items-center gap-2 text-[12px] font-medium text-[#0B2A52] transition-colors hover:text-[#A1845F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B79A72]"
                    >
                      Explore Service
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>

                    {"secondaryHref" in service && (
                      <Link
                        href={service.secondaryHref}
                        title={`Explore ${service.secondaryLabel}`}
                        className="inline-flex items-center gap-1.5 border-b border-[#B79A72]/50 pb-0.5 text-[11px] text-[#8E7758] transition-colors hover:text-[#0B2A52]"
                      >
                        {service.secondaryLabel}
                        <ArrowUpRight size={13} strokeWidth={1.5} />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* SECTION FOOTER + CTA */}

        <Reveal>
          <div className="mt-12 flex flex-col gap-7 border-t border-[#E8E0D5] pt-8 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">
                Built Around Your Business
              </p>

              <p className="mt-3 max-w-[740px] font-serif text-[21px] font-normal leading-[1.45] text-[#284762] sm:text-[25px]">
                The right combination of services depends on{" "}
                <span className="text-[#B79A72]">
                  where your travellers discover, compare and book.
                </span>
              </p>
            </div>

            <Link
              href="/contact?service=travel-hospitality-marketing"
              title="Build My Travel and Hospitality Marketing Plan"
              className="group inline-flex min-h-[49px] w-fit shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.15)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
            >
              Build My Travel & Hospitality Marketing Plan
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
