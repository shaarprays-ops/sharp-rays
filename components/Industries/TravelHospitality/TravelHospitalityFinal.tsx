
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  MapPin,
  Check,
  MessageCircle,
  Search,
  CalendarCheck2,
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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      setReady(true);
      return;
    }

    const bounds = element.getBoundingClientRect();
    const inView =
      bounds.top < window.innerHeight - 35 && bounds.bottom > 0;

    if (!inView) setVisible(false);
    setReady(true);

    if (inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        ready ? "transition-[opacity,transform] duration-700 ease-out" : ""
      } ${
        !ready || visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!transition-none`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const faqItems = [
  {
    question:
      "How can hotels increase direct bookings without relying entirely on OTAs?",
    answer:
      "Hotels can improve direct booking opportunities through a clear official website, useful room information, easy booking navigation, relevant search visibility and appropriate booking campaigns. Compatible booking technology and returning-guest communication can also support direct reservations. OTAs can remain useful alongside official booking channels.",
  },
  {
    question:
      "How can a hotel or resort improve Google search visibility?",
    answer:
      "Hotels and resorts can improve their organic visibility through relevant destination and accommodation pages, technical SEO, useful property information, accurate business listings and Google Business Profile optimisation where eligible. Strong property content and appropriate internal linking can help travellers discover relevant accommodation options.",
  },
  {
    question:
      "What digital marketing services work best for hospitality businesses?",
    answer:
      "The right services depend on the business model. Hotels may benefit from hospitality SEO, booking-focused websites, Google Ads and guest communication, while travel agencies may prioritise destination content, tour package SEO, paid search and enquiry follow-ups.",
  },
  {
    question:
      "How can travel agencies generate qualified tour package enquiries?",
    answer:
      "Travel agencies can target relevant destination and package searches, create detailed itineraries, explain inclusions and important travel information, and offer clear enquiry options. Suitable campaigns and timely follow-ups can help attract travellers whose requirements match available packages.",
  },
  {
    question:
      "Are Google Ads or SEO better for hotel bookings?",
    answer:
      "SEO can build organic visibility over time, while Google Ads can reach travellers actively searching for suitable accommodation. The best approach depends on booking demand, competition, advertising budget, website quality and the hotel's ability to track confirmed reservations.",
  },
  {
    question:
      "How can hotels attract guests during off-peak seasons?",
    answer:
      "Hotels can promote relevant weekend stays, local experiences, seasonal packages and suitable events through destination content, social media and targeted campaigns. Returning-guest communication can also help maintain awareness, although results depend on actual travel demand, availability and pricing.",
  },
] as const;

export default function TravelHospitalityFinal() {
  return (
    <section
      id="hospitality-final"
      aria-labelledby="hospitality-final-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* 01 — PREMIUM FINAL CTA */}

        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[22px] border border-[#E8DFD2] bg-[#F9F5EF]">

            {/* Editorial decorative geometry */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -right-[190px] -top-[260px] h-[620px] w-[620px] rounded-full border border-[#D8C4A8]/50" />
              <div className="absolute -right-[105px] -top-[170px] h-[450px] w-[450px] rounded-full border border-[#D8C4A8]/40" />
              <div className="absolute -right-[20px] -top-[85px] h-[280px] w-[280px] rounded-full border border-[#D8C4A8]/30" />
              <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-white/60 blur-[75px]" />
            </div>

            <div className="relative grid gap-10 px-6 py-11 sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-14 lg:py-[76px]">

              {/* LEFT — MAIN MESSAGE */}

              <div className="max-w-[700px]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#B79A72]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#A1845F] sm:text-[11px]">
                    Let&apos;s Identify Your Next Growth Opportunity
                  </span>
                </div>

                <h2
                  id="hospitality-final-heading"
                  className="font-serif text-[32px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[40px] lg:text-[44px] xl:text-[47px]"
                >
                  Your Next Guest Is Planning a Trip.{" "}
                  <span className="text-[#B79A72]">
                    Make Your Business Easier to Choose.
                  </span>
                </h2>

                <p className="mt-6 max-w-[630px] text-[13px] leading-[1.95] text-[#536B80] sm:text-[14px]">
                  Tell us whether your priority is more direct bookings,
                  stronger Google visibility, qualified travel enquiries
                  or better seasonal demand.
                </p>

                <p className="mt-3 max-w-[600px] text-[13px] leading-[1.95] text-[#687A89] sm:text-[14px]">
                  We&apos;ll help identify the marketing services that
                  fit your business, audience and booking goals.
                </p>

                {/* Small credibility detail */}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="inline-flex items-center gap-2 text-[11px] text-[#8D7658]">
                    <Check size={15} strokeWidth={1.6} />
                    Business-specific priorities
                  </span>

                  <span className="inline-flex items-center gap-2 text-[11px] text-[#8D7658]">
                    <Check size={15} strokeWidth={1.6} />
                    Booking-focused marketing
                  </span>
                </div>
              </div>

              {/* RIGHT — ACTION AREA */}

              <div className="relative border-t border-[#DCD0BE] pt-8 lg:border-l lg:border-t-0 lg:py-2 lg:pl-12">
                <div className="flex items-center gap-3 text-[#B79A72]">
                  <Compass size={22} strokeWidth={1.4} />

                  <span className="text-[10px] uppercase tracking-[0.15em]">
                    Your Next Step
                  </span>
                </div>

                <h3 className="mt-5 max-w-[340px] font-serif text-[25px] font-normal leading-[1.3] sm:text-[29px]">
                  The right strategy starts with{" "}
                  <span className="text-[#B79A72]">
                    understanding your booking journey.
                  </span>
                </h3>

                <p className="mt-4 max-w-[350px] text-[12px] leading-[1.9] text-[#758493]">
                  Share your business type, destination, target
                  travellers and the booking challenge you want
                  to improve.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/contact?service=travel-hospitality-marketing#contact-form"
                    title="Build My Travel and Hospitality Growth Plan"
                    className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-[12px] bg-[#0B2A52] px-5 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.15)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B79A72]"
                  >
                    Build My Travel & Hospitality Growth Plan

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    title="Talk to Sharp Rays"
                    className="group inline-flex min-h-[49px] w-full items-center justify-center gap-2.5 rounded-[12px] border border-[#DCCDB8] bg-white/70 px-5 py-3.5 text-[12px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#B79A72] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B79A72]"
                  >
                    <MessageCircle
                      size={16}
                      strokeWidth={1.5}
                      className="text-[#B79A72]"
                    />

                    Talk to Sharp Rays

                    <ArrowRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA FOOTER */}

            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-[#E4D8C9] px-6 py-5 sm:px-10 lg:px-14">
              <span className="text-[10px] uppercase tracking-[0.16em] text-[#A1845F]">
                Sharp Rays / Travel & Hospitality
              </span>

              <span className="inline-flex items-center gap-2 text-[11px] text-[#8C816F]">
                <MapPin size={14} strokeWidth={1.5} className="text-[#B79A72]" />
                Discover. Compare. Book.
              </span>
            </div>
          </div>
        </Reveal>

        {/* 02 — FAQs */}

        <div
          id="hospitality-faqs"
          aria-labelledby="hospitality-faq-heading"
          className="scroll-mt-24 pt-20 sm:pt-24 lg:pt-28"
        >
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-14">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A72]" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                    Travel & Hospitality FAQs
                  </span>
                </div>

                <h2
                  id="hospitality-faq-heading"
                  className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
                >
                  Frequently Asked{" "}
                  <span className="text-[#B79A72]">
                    Questions.
                  </span>
                </h2>
              </div>

              <p className="max-w-[530px] text-[13px] leading-[1.95] text-[#708092] sm:text-[14px] lg:pb-2">
                From improving direct hotel bookings to generating
                qualified travel enquiries, explore practical answers
                to common digital marketing questions.
              </p>
            </div>
          </Reveal>

          {/* ALL FAQS VISIBLE — NO ACCORDION */}

          <div className="mt-12 grid gap-x-12 border-t border-[#E7DED3] lg:mt-14 lg:grid-cols-2 xl:gap-x-16">
            {faqItems.map((faq, index) => (
              <Reveal key={faq.question} className="h-full" delay={(index % 2) * 80}>
                <article className="group flex h-full flex-col border-b border-[#E7DED3] py-8 sm:py-9 lg:py-11">

                  <div className="flex items-start gap-5">
                    <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#E5D7C4] bg-[#FCFAF7] font-serif text-[16px] text-[#B79A72] transition-colors duration-300 group-hover:border-[#CDB18A] group-hover:bg-[#F5EBDD]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="max-w-[530px] font-serif text-[19px] font-normal leading-[1.38] tracking-[-0.02em] text-[#0B2A52] sm:text-[22px]">
                        {faq.question}
                      </h3>

                      <p className="mt-4 max-w-[560px] text-[12px] leading-[1.95] text-[#6B7D8D] sm:text-[13px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </article>
              </Reveal>
            ))}
          </div>

          {/* SMALL FAQ CLOSING */}

          <Reveal>
            <div className="mt-10 flex flex-col gap-5 border-t border-[#E7DED3] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Sparkles
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#B79A72]"
                />

                <p className="max-w-[700px] text-[12px] leading-[1.9] text-[#708092]">
                  Every hospitality business has different destinations,
                  booking channels and customer needs. Your marketing
                  plan should reflect those differences.
                </p>
              </div>

              <Link
                href="/contact?service=travel-hospitality-marketing"
                title="Discuss Your Hospitality Marketing Goals"
                className="group inline-flex w-fit shrink-0 items-center gap-2 text-[12px] font-medium text-[#8D714F] transition-colors hover:text-[#0B2A52]"
              >
                Discuss Your Marketing Goals

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
