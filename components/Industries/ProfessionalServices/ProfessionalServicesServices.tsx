
import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  MonitorSmartphone,
  BookOpenText,
  Share2,
  Megaphone,
  Workflow,
  Clapperboard,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const professionalServices = [
  {
    number: "01",
    icon: Search,
    category: "SEARCH VISIBILITY",
    title: "Professional Services SEO",
    description:
      "Help prospective clients discover your firm when they search for relevant consulting, advisory and specialist professional services.",
    details:
      "We work on service-page SEO, relevant local searches, industry-specific content, technical optimisation and clear website structure.",
    focus: "Attract relevant organic search visibility and client enquiries.",
    href: "/services/seo",
    featured: true,
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    category: "DIGITAL EXPERIENCE",
    title: "Professional Website Development",
    description:
      "Build a credible, professional website that communicates your expertise and makes it easy for prospective clients to understand your services.",
    details:
      "We create responsive service pages, clear navigation, professional profiles, relevant proof sections and consultation enquiry pathways.",
    focus: "Build credibility and make client enquiries easier.",
    href: "/services/website-development",
    featured: true,
  },
  {
    number: "03",
    icon: BookOpenText,
    category: "AUTHORITY & CONTENT",
    title: "Expert-Led Content Marketing",
    description:
      "Communicate your firm's knowledge through accurate, useful content that helps potential clients understand professional topics and services.",
    details:
      "We support expert-led articles, service explanations, educational resources, industry content and appropriate thought leadership.",
    focus: "Demonstrate relevant expertise and support client research.",
    href: "/services/content-marketing",
    featured: true,
  },
  {
    number: "04",
    icon: Share2,
    category: "PROFESSIONAL PRESENCE",
    title: "LinkedIn & Social Media Marketing",
    description:
      "Develop a more consistent professional presence through relevant insights, firm updates, educational posts and appropriate thought leadership.",
    details:
      "We plan content around your expertise, target audience, industries served and professional communication goals.",
    focus: "Build awareness and professional credibility.",
    href: "/services/social-media-marketing",
    featured: false,
  },
  {
    number: "05",
    icon: Megaphone,
    category: "RELEVANT ADVERTISING",
    title: "Google Ads & Performance Marketing",
    description:
      "Reach suitable audiences through relevant search advertising and carefully planned campaigns where paid acquisition is appropriate.",
    details:
      "We align targeting, landing pages, enquiry actions and campaign measurement with your professional services and commercial goals.",
    focus: "Support measurable, relevant client enquiry opportunities.",
    href: "/services/performance-marketing",
    featured: false,
  },
  {
    number: "06",
    icon: Workflow,
    category: "WORKFLOW EFFICIENCY",
    title: "AI Automation & Enquiry Management",
    description:
      "Improve how your firm manages routine client enquiries, consultation coordination and administrative communication.",
    details:
      "We help automate routine enquiries, consultation scheduling and administrative follow-ups while keeping confidential information protected and professional decisions under human control.",
    focus:
      "Support operational efficiency without replacing professional advice or human judgment.",
    href: "/services/ai-automation",
    featured: false,
  },
  {
    number: "07",
    icon: Clapperboard,
    category: "PROFESSIONAL STORYTELLING",
    title: "Professional Video Editing",
    description:
      "Present your firm's knowledge, people and professional services through clear, polished video content.",
    details:
      "We support expert interviews, educational videos, professional introductions, social media clips and presentation-focused video editing.",
    focus: "Communicate expertise through professional video content.",
    href: "/services/professional-video-editing",
    featured: false,
  },
];

const featuredServices = professionalServices.filter(
  (service) => service.featured
);

const supportingServices = professionalServices.filter(
  (service) => !service.featured
);

export default function ProfessionalServicesServices() {
  return (
    <section
      id="professional-services-services"
      aria-labelledby="professional-services-services-heading"
      className="relative isolate overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      {/* SUBTLE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#B79A72]/[0.035] blur-[100px]" />
        <div className="absolute -left-40 bottom-24 h-[380px] w-[380px] rounded-full bg-[#0B2A52]/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* ===================================== */}
        {/* 01 — CENTERED SECTION INTRO          */}
        {/* ===================================== */}

        <div className="mx-auto max-w-[800px] text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72] sm:text-[11px]">
              Digital Marketing for Professional Firms
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          {/* Heading */}
          <h2
            id="professional-services-services-heading"
            className="mx-auto max-w-[750px] font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
          >
            The Right Digital Services for{" "}
            <span className="text-[#B79A72]">
              Your Firm&apos;s Growth.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[670px] text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
            We bring together SEO, professional websites,
            expert-led content, social media, suitable advertising,
            AI automation and video editing to help your firm
            improve visibility, demonstrate credibility and support
            relevant client enquiries.
          </p>
        </div>

        {/* ===================================== */}
        {/* 02 — SERVICE COLLECTION INTRO        */}
        {/* ===================================== */}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#DFE6ED] pb-5 lg:mt-16">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8DFD2] bg-[#FAF7F2] text-[#B79A72]">
              <Sparkles size={17} strokeWidth={1.5} />
            </span>

            <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-[#526780]">
              Explore Our Professional Services
            </span>
          </div>

          <span className="font-serif text-[13px] text-[#B79A72]">
            07 Specialised Services
          </span>
        </div>

        {/* ===================================== */}
        {/* 03 — FEATURED SERVICE GRID            */}
        {/* ===================================== */}

        <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className={`group relative flex min-h-[340px] flex-col overflow-hidden rounded-[18px] border p-6 transition-all duration-500 ease-out motion-safe:hover:-translate-y-1 sm:p-8 ${
                  index === 0
                    ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                    : "border-[#E0E7ED] bg-[#F9FBFC] text-[#0B2A52] hover:border-[#D9C4A8] hover:bg-white hover:shadow-[0_20px_50px_-30px_rgba(11,42,82,0.18)]"
                }`}
              >
                {/* Visual accent */}
                {index === 0 && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                  >
                    <div className="absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-white/10" />

                    <div className="absolute -right-12 -top-12 h-[200px] w-[200px] rounded-full border border-[#B79A72]/25" />
                  </div>
                )}

                <div className="relative flex h-full flex-col">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex h-[51px] w-[51px] items-center justify-center rounded-[13px] border transition-all duration-300 motion-safe:group-hover:-translate-y-1 ${
                        index === 0
                          ? "border-white/20 bg-white/10 text-[#D4B88E]"
                          : "border-[#E3E9EE] bg-white text-[#0B2A52] group-hover:border-[#D8C4A7] group-hover:bg-[#FAF6F0] group-hover:text-[#B79A72]"
                      }`}
                    >
                      <Icon size={23} strokeWidth={1.45} />
                    </span>

                    <span
                      className={`font-serif text-[20px] ${
                        index === 0
                          ? "text-[#D4B88E]"
                          : "text-[#B79A72]"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <p
                      className={`text-[9px] font-medium uppercase tracking-[0.16em] ${
                        index === 0
                          ? "text-[#D4B88E]"
                          : "text-[#B79A72]"
                      }`}
                    >
                      {service.category}
                    </p>

                    <h3 className="mt-3 font-serif text-[23px] font-normal leading-[1.25] tracking-[-0.025em] sm:text-[26px]">
                      <Link
                        href={service.href}
                        title={`Explore ${service.title}`}
                        className="transition-colors duration-300 hover:text-[#B79A72] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <p
                      className={`mt-4 text-[12px] leading-[1.9] sm:text-[13px] ${
                        index === 0
                          ? "text-white/75"
                          : "text-[#0B2A52]/70"
                      }`}
                    >
                      {service.description}
                    </p>

                    <p
                      className={`mt-3 text-[12px] leading-[1.9] ${
                        index === 0
                          ? "text-white/55"
                          : "text-[#0B2A52]/55"
                      }`}
                    >
                      {service.details}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto pt-7">
                    <div
                      className={`border-t pt-5 ${
                        index === 0
                          ? "border-white/15"
                          : "border-[#E2E8ED]"
                      }`}
                    >
                      <p
                        className={`text-[9px] uppercase tracking-[0.15em] ${
                          index === 0
                            ? "text-[#D4B88E]"
                            : "text-[#B79A72]"
                        }`}
                      >
                        Our Focus
                      </p>

                      <p
                        className={`mt-2 text-[12px] leading-[1.75] ${
                          index === 0
                            ? "text-white/70"
                            : "text-[#0B2A52]/65"
                        }`}
                      >
                        {service.focus}
                      </p>
                    </div>

                    <Link
                      href={service.href}
                      title={`Explore ${service.title}`}
                      className={`mt-5 inline-flex items-center gap-2 text-[12px] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] ${
                        index === 0
                          ? "text-white hover:text-[#D4B88E]"
                          : "text-[#0B2A52] hover:text-[#B79A72]"
                      }`}
                    >
                      Explore Service

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 ${
                          index === 0
                            ? "text-[#D4B88E]"
                            : "text-[#B79A72]"
                        }`}
                      />
                    </Link>
                  </div>
                </div>

                {/* Animated bottom accent */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* ===================================== */}
        {/* 04 — SUPPORTING SERVICE GALLERY      */}
        {/* ===================================== */}

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {supportingServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex flex-col overflow-hidden rounded-[17px] border border-[#E0E7ED] bg-white p-6 transition-all duration-500 hover:border-[#D9C4A8] hover:bg-[#FCFDFE] hover:shadow-[0_18px_45px_-30px_rgba(11,42,82,0.16)] sm:p-7"
              >
                {/* Animated side indicator */}
                <span className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#B79A72] transition-transform duration-500 motion-safe:group-hover:scale-y-100" />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#E3E8ED] bg-[#F8FAFC] text-[#0B2A52] transition-all duration-300 group-hover:border-[#D9C4A8] group-hover:bg-[#FAF6F0] group-hover:text-[#B79A72]">
                    <Icon size={21} strokeWidth={1.45} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#B79A72]">
                        {service.category}
                      </p>

                      <span className="font-serif text-[15px] text-[#B79A72]/75">
                        {service.number}
                      </span>
                    </div>

                    {/* Clickable service title */}
                    <h3 className="mt-3 font-serif text-[21px] font-normal leading-[1.3] tracking-[-0.025em] sm:text-[24px]">
                      <Link
                        href={service.href}
                        title={`Explore ${service.title}`}
                        className="transition-colors duration-300 hover:text-[#B79A72] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                      >
                        {service.title}
                      </Link>
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.9] text-[#0B2A52]/70 sm:text-[13px]">
                      {service.description}
                    </p>

                    <p className="mt-3 text-[12px] leading-[1.9] text-[#0B2A52]/55">
                      {service.details}
                    </p>
                  </div>
                </div>

                {/* Bottom focus and link */}
                <div className="mt-auto pt-6 sm:pl-[60px]">
                  <div className="border-t border-[#E7ECF0] pt-4">
                    <p className="text-[9px] uppercase tracking-[0.14em] text-[#B79A72]">
                      Our Focus
                    </p>

                    <p className="mt-2 text-[12px] leading-[1.8] text-[#526780]">
                      {service.focus}
                    </p>
                  </div>

                  <Link
                    href={service.href}
                    title={`Explore ${service.title}`}
                    className="mt-5 inline-flex items-center gap-2 text-[12px] text-[#0B2A52] transition-colors duration-300 hover:text-[#B79A72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                  >
                    Explore Service

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#B79A72] transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* ===================================== */}
        {/* 05 — RESPONSIBLE AUTOMATION NOTE     */}
        {/* ===================================== */}

        <div className="mt-8 flex flex-col gap-4 rounded-[14px] border border-[#E8E1D7] bg-[#FAF8F4] px-5 py-5 sm:flex-row sm:items-start sm:gap-5 sm:px-7">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-[#E5D8C7] bg-white text-[#B79A72]">
            <ShieldCheck size={20} strokeWidth={1.5} />
          </span>

          <div>
            <p className="text-[12px] font-medium text-[#0B2A52]">
              Responsible Automation for Professional Firms
            </p>

            <p className="mt-2 max-w-[950px] text-[12px] leading-[1.9] text-[#607589] sm:text-[13px]">
              AI automation can support administrative processes,
              but it should not replace qualified professional
              advice or independent professional judgment.
              Workflows should use appropriate security,
              privacy safeguards, permissions and human oversight
              for confidential client information.
            </p>
          </div>
        </div>

        {/* ===================================== */}
        {/* 06 — FINAL SERVICE CTA              */}
        {/* ===================================== */}

        <div className="mt-14 flex flex-col gap-8 border-t border-[#DEE6EC] pt-9 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-[750px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#B79A72]">
                A Strategy Built Around Your Firm
              </span>
            </div>

            <h3 className="font-serif text-[26px] font-normal leading-[1.25] tracking-[-0.03em] sm:text-[32px] lg:text-[35px]">
              The Right Services for{" "}
              <span className="text-[#B79A72]">
                Your Professional Growth Goals.
              </span>
            </h3>

            <p className="mt-4 max-w-[680px] text-[13px] leading-[1.9] text-[#0B2A52]/65 sm:text-[14px]">
              We recommend marketing services based on your
              expertise, target clients, competitive environment
              and enquiry objectives — not a fixed
              one-size-fits-all package.
            </p>
          </div>

          <Link
            href="/contact?service=professional-services-marketing"
            title="Get My Professional Services Growth Plan"
            className="group inline-flex min-h-[51px] w-fit shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-[12px] text-white transition-all duration-300 hover:bg-[#173E6C] hover:shadow-[0_12px_30px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
          >
            Get My Professional Services Growth Plan

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
