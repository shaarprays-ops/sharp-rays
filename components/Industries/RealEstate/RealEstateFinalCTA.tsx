
"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  MapPinned,
  Target,
  CalendarCheck2,
  MessageCircle,
  Check,
  ShieldCheck,
  CircleHelp,
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

    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = element.getBoundingClientRect();

    if (bounds.top >= window.innerHeight - 35) {
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

    observer.observe(element);

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

const priorities = [
  {
    icon: MapPinned,
    label: "Project Visibility",
  },
  {
    icon: Target,
    label: "Qualified Enquiries",
  },
  {
    icon: CalendarCheck2,
    label: "Site Visit Opportunities",
  },
] as const;

const faqs = [
  {
    question:
      "How can real estate companies generate qualified property leads online?",
    answer:
      "Real estate companies can use property-focused SEO, Google Search campaigns, Meta advertising, project landing pages and enquiry workflows. Matching campaigns to available properties, buyer budgets, locations and configurations helps improve lead relevance.",
  },
  {
    question: "What is real estate SEO?",
    answer:
      "Real estate SEO is the process of improving organic search visibility for property projects, localities, listings and relevant real estate services. It includes technical optimisation, location pages, project content, internal linking and useful property information.",
  },
  {
    question: "How can property developers improve Google rankings?",
    answer:
      "Developers can improve their search visibility by creating informative project and location pages, publishing accurate specifications, strengthening technical SEO and matching content to relevant buyer searches. Rankings depend on competition and other search factors.",
  },
  {
    question: "Are Google Ads effective for real estate lead generation?",
    answer:
      "Google Ads can help reach people actively searching for properties, locations and projects. Campaigns should use relevant keywords, accurate landing pages and conversion tracking that considers lead quality.",
  },
  {
    question:
      "Which is better for real estate marketing: Google Ads or Meta Ads?",
    answer:
      "Google Ads can capture existing search demand, while Meta Ads can build awareness and encourage exploration of suitable properties. Their relative effectiveness depends on the project, target audience, available budget and campaign execution.",
  },
  {
    question: "How can real estate companies increase site visits?",
    answer:
      "Clear project information, relevant audience targeting, easy visit scheduling and timely sales follow-up can help interested buyers progress towards site visits. Monitoring enquiry-to-visit rates helps identify where the process needs improvement.",
  },
  {
    question: "What should a real estate landing page include?",
    answer:
      "A useful project page should include location, available configurations, accurate pricing information, floor plans, amenities, project status, applicable regulatory details and clear enquiry or site-visit options.",
  },
  {
    question: "Can WhatsApp automation improve real estate lead management?",
    answer:
      "Consent-based WhatsApp and CRM workflows can support enquiry acknowledgements, relevant project information, lead assignment and site-visit reminders. Personalised advice, price commitments and negotiations should involve authorised team members.",
  },
  {
    question: "How much does digital marketing for real estate cost?",
    answer:
      "Costs depend on the number of projects, target locations, competition, services required, advertising budget and reporting needs. A suitable plan should consider qualified enquiries and site visits, not just raw lead volume.",
  },
  {
    question: "How long does real estate SEO take to show results?",
    answer:
      "Timelines vary by website condition, market competition, location and available content. SEO is a longer-term activity, and rankings or enquiry volumes cannot be guaranteed within a fixed timeframe.",
  },
] as const;

export default function RealEstateFinalCTA() {
  return (
    <section
      id="real-estate-final-cta"
      aria-labelledby="real-estate-final-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* 01 — FINAL CTA */}

        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[20px] border border-[#E7DDCE] bg-[#FAF6F0]">

            {/* ARCHITECTURAL BACKGROUND DETAILS */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <div className="absolute -right-[230px] -top-[270px] h-[650px] w-[650px] rounded-full border border-[#D9C6AA]/50" />

              <div className="absolute -right-[140px] -top-[180px] h-[470px] w-[470px] rounded-full border border-[#D9C6AA]/45" />

              <div className="absolute -right-[55px] -top-[95px] h-[295px] w-[295px] rounded-full border border-[#D9C6AA]/40" />

              <div className="absolute -bottom-32 -left-32 h-[330px] w-[330px] rounded-full bg-white/75 blur-[80px]" />

              <div className="absolute bottom-0 left-0 h-[90px] w-[90px] border-b border-l border-[#CBB393]/60 sm:h-[140px] sm:w-[140px]" />
            </div>

            <div className="relative grid gap-10 px-6 py-11 sm:px-10 sm:py-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:px-12 lg:py-[70px] xl:gap-20 xl:px-14">

              {/* LEFT — CTA CONTENT */}

              <div className="max-w-[690px]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A72]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F] sm:text-[11px]">
                    Let&apos;s Identify Your Next Property Growth Opportunity
                  </span>
                </div>

                <h2
                  id="real-estate-final-heading"
                  className="font-serif text-[32px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[39px] lg:text-[43px] xl:text-[47px]"
                >
                  Your Next Property Buyer Could Already Be Searching.{" "}
                  <span className="text-[#B79A72]">
                    Make Your Project Easier to Find.
                  </span>
                </h2>

                <p className="mt-6 max-w-[630px] text-[13px] leading-[1.95] text-[#627587] sm:text-[14px]">
                  Whether you want better project visibility,
                  relevant property enquiries, stronger campaign
                  performance or more site-visit opportunities,
                  Sharp Rays can help develop a digital marketing
                  strategy around your available properties and
                  target buyers.
                </p>

                {/* BUSINESS PRIORITIES */}

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                  {priorities.map((item) => {
                    const Icon = item.icon;

                    return (
                      <span
                        key={item.label}
                        className="inline-flex items-center gap-2 text-[11px] text-[#866F52]"
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#B79A72]"
                        />

                        {item.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT — ACTION AREA */}

              <div className="relative border-t border-[#DFD0BB] pt-8 lg:border-l lg:border-t-0 lg:py-3 lg:pl-11">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#DECCB4] bg-white/75 text-[#B79A72]">
                  <Building2 size={24} strokeWidth={1.4} />
                </span>

                <h3 className="mt-6 max-w-[350px] font-serif text-[25px] font-normal leading-[1.3] sm:text-[29px]">
                  A better property marketing plan starts with{" "}
                  <span className="text-[#B79A72]">
                    understanding your buyers.
                  </span>
                </h3>

                <p className="mt-4 max-w-[350px] text-[12px] leading-[1.95] text-[#778595]">
                  Share your property types, project locations,
                  available inventory and your most important
                  marketing challenge.
                </p>

                {/* PRIMARY / SECONDARY CTA */}

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/contact?service=real-estate-marketing"
                    title="Get My Real Estate Growth Plan"
                    className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-[12px] bg-[#0B2A52] px-5 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B79A72]"
                  >
                    Get My Real Estate Growth Plan

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    title="Talk to Sharp Rays About Real Estate Marketing"
                    className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-[12px] border border-[#DAC9B4] bg-white/75 px-5 py-3.5 text-center text-[12px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#B79A72] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B79A72]"
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

            <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-[#E4D8C8] px-6 py-5 sm:px-10 lg:px-12 xl:px-14">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#A1845F]">
                Sharp Rays / Real Estate Marketing
              </span>

              <span className="inline-flex items-center gap-2 text-[11px] text-[#8A7963]">
                <Check
                  size={15}
                  strokeWidth={1.6}
                  className="text-[#B79A72]"
                />
                Built Around Your Actual Property Inventory
              </span>
            </div>
          </div>
        </Reveal>

        {/* 02 — FREQUENTLY ASKED QUESTIONS */}

        <div
          id="real-estate-faqs"
          aria-labelledby="real-estate-faq-heading"
          className="scroll-mt-24 pt-20 sm:pt-24 lg:pt-28"
        >
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A72]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
                    Real Estate Marketing FAQs
                  </span>
                </div>

                <h2
                  id="real-estate-faq-heading"
                  className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
                >
                  Frequently Asked{" "}
                  <span className="text-[#B79A72]">
                    Questions.
                  </span>
                </h2>
              </div>

              <p className="max-w-[550px] text-[13px] leading-[1.95] text-[#708092] sm:text-[14px] lg:pb-2">
                Practical answers about property lead generation,
                real estate SEO, advertising, site visits,
                marketing costs and lead automation.
              </p>
            </div>
          </Reveal>

          {/* FAQ EDITORIAL GRID — ALL ANSWERS VISIBLE */}

          <div className="mt-12 grid gap-x-12 border-t border-[#E7DED3] lg:mt-14 lg:grid-cols-2 xl:gap-x-16">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} className="h-full">
                <article className="group flex h-full flex-col border-b border-[#E7DED3] py-8 sm:py-9 lg:py-10">
                  <div className="flex items-start gap-4 sm:gap-5">

                    {/* FAQ NUMBER */}

                    <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#E5D7C4] bg-[#FCFAF7] font-serif text-[16px] text-[#B79A72] transition-colors duration-300 group-hover:border-[#CDB18A] group-hover:bg-[#F5EBDD]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* QUESTION / ANSWER */}

                    <div className="min-w-0 flex-1">
                      <h3 className="max-w-[535px] font-serif text-[19px] font-normal leading-[1.38] tracking-[-0.02em] sm:text-[22px]">
                        {faq.question}
                      </h3>

                      <p className="mt-4 max-w-[560px] text-[12px] leading-[1.95] text-[#6D7F8F] sm:text-[13px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* FAQ CLOSING */}

          <Reveal>
            <div className="mt-10 flex flex-col gap-6 border-t border-[#E7DED3] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <CircleHelp
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#B79A72]"
                />

                <p className="max-w-[700px] text-[12px] leading-[1.9] text-[#718293]">
                  Every real estate business operates with
                  different properties, target locations, buyer
                  requirements and sales processes. Your
                  marketing strategy should reflect those
                  differences.
                </p>
              </div>

              <Link
                href="/contact?service=real-estate-marketing"
                title="Discuss Your Real Estate Marketing Requirements"
                className="group inline-flex w-fit shrink-0 items-center gap-2 text-[12px] font-medium text-[#927451] transition-colors hover:text-[#0B2A52]"
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

        {/* 03 — COMPLIANCE NOTE */}

        <Reveal>
          <div className="mt-12 flex items-start gap-3 rounded-[12px] border border-[#E9E2D8] bg-[#FCFAF7] px-5 py-5 sm:px-6">
            <ShieldCheck
              size={18}
              strokeWidth={1.5}
              className="mt-0.5 shrink-0 text-[#B79A72]"
            />

            <p className="text-[11px] leading-[1.9] text-[#788696] sm:text-[12px]">
              Real estate marketing should reflect accurate
              property availability, approved project information,
              applicable RERA requirements and relevant
              advertising platform policies. Search rankings,
              lead volumes and property bookings cannot be guaranteed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
