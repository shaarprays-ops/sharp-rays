"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Search, MonitorSmartphone, Megaphone,
  MapPin, Building2, Store, Check, Compass, Target, MessageCircle,
  Globe, BarChart3, WandSparkles, Workflow, Factory, GraduationCap,
  HeartPulse, ShoppingBag, UtensilsCrossed, BriefcaseBusiness, Rocket,
  Plane, Sparkles, type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function Rise({ children, className = "", delay = 0 }: {
  children: ReactNode; className?: string; delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, center = false }: {
  children: ReactNode; center?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-7 bg-[#B79A72]" />
      <span className="text-[10px] font-medium uppercase tracking-[0.19em] text-[#A38561] sm:text-[11px]">
        {children}
      </span>
      {center && <span className="h-px w-7 bg-[#B79A72]" />}
    </div>
  );
}

function Heading({ children, center = false, id }: {
  children: ReactNode; center?: boolean; id?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-5 font-[var(--font-new-york)] text-[29px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[36px] lg:text-[42px] ${center ? "text-center" : ""}`}
    >
      {children}
    </h2>
  );
}

type Service = {
  number: string;
  title: string;
  headline: string;
  description: string;
  points: string[];
  best: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  tint: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Social Media Marketing",
    headline: "Build a Social Presence That Attracts the Right Audience.",
    description:
      "Develop a consistent social media presence through platform-specific strategies, creative content and meaningful audience communication.",
    points: [
      "Instagram, Facebook and LinkedIn",
      "Content calendars and publishing",
      "Reels and creative direction",
      "Community engagement and reporting",
    ],
    best: "Brand awareness and audience engagement.",
    href: "/locations/bhayandar/social-media-marketing",
    icon: Megaphone,
    accent: "#AD728C",
    tint: "#F7EFF1",
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    headline: "Get Found When Potential Customers Are Searching.",
    description:
      "Improve organic search visibility through technical SEO, keyword research, on-page optimisation, local SEO and helpful website content.",
    points: [
      "Technical SEO and website audits",
      "Keyword and search intent research",
      "Local SEO and Google Business Profile",
      "Content optimisation and reporting",
    ],
    best: "Organic visibility and relevant search enquiries.",
    href: "/locations/bhayandar/seo",
    icon: Search,
    accent: "#668A72",
    tint: "#EDF4EE",
  },
  {
    number: "03",
    title: "Performance Marketing / Paid Media",
    headline: "Reach Relevant Audiences With Measurable Campaigns.",
    description:
      "Plan and optimise paid advertising campaigns around suitable audiences, creative testing, conversion tracking and business objectives.",
    points: [
      "Google Ads and Meta Ads",
      "Lead generation campaigns",
      "Audience and creative testing",
      "Conversion tracking and optimisation",
    ],
    best: "Targeted enquiries, bookings and online sales.",
    href: "/services/performance-marketing",
    icon: BarChart3,
    accent: "#AD895D",
    tint: "#F8F0E5",
  },
  {
    number: "04",
    title: "Website Development & Management",
    headline: "Build a Website That Supports Your Business Growth.",
    description:
      "Create responsive, accessible and SEO-conscious websites that communicate your services clearly and make customer enquiries easier.",
    points: [
      "Business websites and landing pages",
      "UI/UX and responsive development",
      "Technical SEO foundations",
      "Website maintenance and performance",
    ],
    best: "Professional websites and better enquiry experiences.",
    href: "/locations/bhayandar/website-development",
    icon: MonitorSmartphone,
    accent: "#688AA6",
    tint: "#EEF3F9",
  },
  {
    number: "05",
    title: "AI Video and Creative",
    headline: "Turn Creative Ideas Into Engaging Digital Content.",
    description:
      "Explore AI-assisted visual concepts, storyboarding and promotional creative assets for digital campaigns and social platforms.",
    points: [
      "AI-assisted video concepts",
      "Creative campaign variations",
      "Social media visual assets",
      "Storyboards and creative planning",
    ],
    best: "Visual storytelling and campaign creativity.",
    href: "/services/ai-video-and-creative",
    icon: WandSparkles,
    accent: "#8E79AE",
    tint: "#F1EEFA",
  },
  {
    number: "06",
    title: "AI Automation",
    headline: "Spend Less Time on Repetitive Business Tasks.",
    description:
      "Connect practical workflows for lead capture, enquiry handling, notifications and everyday business processes with appropriate human oversight.",
    points: [
      "Lead capture and routing",
      "CRM and workflow integrations",
      "Enquiry follow-up automation",
      "Notifications and administrative workflows",
    ],
    best: "Workflow efficiency and consistent communication.",
    href: "/services/ai-automation",
    icon: Workflow,
    accent: "#609286",
    tint: "#EDF6F3",
  },
];

const industries = [
  {
    number: "01",
    name: "Beauty & Wellness",
    icon: Sparkles,
    description:
      "Digital presence, creative content and online visibility for beauty and wellness businesses.",
  },
  {
    number: "02",
    name: "Ecommerce",
    icon: ShoppingBag,
    description:
      "Website experiences, product visibility and digital marketing for online stores.",
  },
  {
    number: "03",
    name: "Education",
    icon: GraduationCap,
    description:
      "Website development, search visibility and content strategies for educational businesses.",
  },
  {
    number: "04",
    name: "Healthcare",
    icon: HeartPulse,
    description:
      "Professional digital experiences and useful online information for healthcare providers.",
  },
  {
    number: "05",
    name: "Manufacturing",
    icon: Factory,
    description:
      "Business websites, search visibility and digital communication for manufacturing companies.",
  },
  {
    number: "06",
    name: "Professional Services",
    icon: BriefcaseBusiness,
    description:
      "Build credibility and communicate professional services through websites and digital channels.",
  },
  {
    number: "07",
    name: "Real Estate",
    icon: Building2,
    description:
      "Property-focused websites, relevant content and digital campaigns for real estate businesses.",
  },
  {
    number: "08",
    name: "Restaurants",
    icon: UtensilsCrossed,
    description:
      "Improve online discovery, brand communication and digital experiences for restaurants.",
  },
  {
    number: "09",
    name: "Startups",
    icon: Rocket,
    description:
      "Build a stronger digital foundation through websites, branding, SEO and marketing.",
  },
  {
    number: "10",
    name: "Travel & Hospitality",
    icon: Plane,
    description:
      "Digital experiences, content and marketing strategies for travel and hospitality brands.",
  },
];

const areas = [
  {
    title: "Bhayandar East",
    description:
      "Plan relevant digital content for businesses serving customers in Bhayandar East, based on their actual services and customer locations.",
    icon: Building2,
    tag: "Local business visibility",
  },
  {
    title: "Bhayandar West",
    description:
      "Consider the needs of shops, professional services and other businesses serving the Bhayandar West audience.",
    icon: Store,
    tag: "Local business discovery",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand your business, target audience, current online presence and marketing priorities.",
    output: "Business requirements",
  },
  {
    number: "02",
    title: "Identify Opportunities",
    description:
      "Review relevant search terms, website improvements and digital marketing opportunities.",
    output: "Opportunity assessment",
  },
  {
    number: "03",
    title: "Plan & Build",
    description:
      "Define the suitable services, deliverables, content direction and implementation plan.",
    output: "A clear action plan",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "Monitor relevant performance indicators and make informed improvements over time.",
    output: "Ongoing optimisation",
  },
];

const faqs = [
  {
    question:
      "Which digital marketing services does Sharp Rays offer in Bhayandar?",
    answer:
      "Sharp Rays offers SEO, website development, social media marketing, performance marketing, AI video and creative, and AI automation. The right combination depends on your business goals, audience and requirements.",
  },
  {
    question:
      "Does Sharp Rays provide services in Bhayandar East and West?",
    answer:
      "Sharp Rays can discuss digital projects for businesses targeting Bhayandar East and Bhayandar West. The strategy and content can be planned around the business's actual service area and audience.",
  },
  {
    question: "Can SEO help my business appear on Google in Bhayandar?",
    answer:
      "SEO can help your website become more relevant and discoverable for searches related to your services and target locations. Technical optimisation, useful content, local relevance and consistent improvements all contribute to an SEO strategy. Rankings are not guaranteed.",
  },
  {
    question: "Can I get website development and SEO together?",
    answer:
      "Yes. Website development and SEO can be planned together so that website structure, technical foundations, content and search visibility support your business objectives.",
  },
  {
    question: "Do you provide social media marketing for small businesses?",
    answer:
      "Yes. Social media marketing can support small businesses through content planning, platform-specific communication, creative direction and audience engagement.",
  },
  {
    question: "Can I choose only one digital marketing service?",
    answer:
      "Yes. You can start with an individual service such as SEO, website development or social media marketing. Other services can be considered when they become relevant to your business.",
  },
  {
    question: "Does Sharp Rays have a physical office in Bhayandar?",
    answer:
      "This page describes Bhayandar as a service area. It does not claim a physical Sharp Rays office in Bhayandar. Contact the team to discuss project requirements and service arrangements.",
  },
  {
    question: "How can I get started with Sharp Rays?",
    answer:
      "You can contact Sharp Rays through the website enquiry page or request a free audit. Share your website, business type and primary marketing objective to start the conversation.",
  },
];

const nearbyLocations = [
  {
    name: "Mira Road",
    href: "/locations/mira-road",
    description:
      "Explore digital marketing services for businesses targeting customers in Mira Road.",
  },
  {
    name: "Naigaon",
    href: "/locations/naigaon",
    description:
      "Explore digital marketing services for businesses targeting customers in Naigaon.",
  },
];

function BhayandarStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.sharprays.com/locations/bhayandar#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function BhayandarPageClient() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      <BhayandarStructuredData />

      {/* 01. HERO + DIRECT ANSWER */}
      <section
        className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:pb-28 lg:pt-40"
        aria-labelledby="bhayandar-main-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-32 h-[460px] w-[460px] rounded-full border border-[#E4D7C5]/70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#EAF0F6]/60 blur-[100px]"
        />

        <div className="relative mx-auto max-w-[1260px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <Rise>
              <div>
                <Eyebrow>Digital Marketing for Bhayandar Businesses</Eyebrow>

                <h1
                  id="bhayandar-main-heading"
                  className="mt-6 max-w-[720px] font-[var(--font-new-york)] text-[38px] font-normal leading-[1.12] tracking-[-0.04em] sm:text-[47px] lg:text-[53px]"
                >
                  Digital Marketing Agency in{" "}
                  <span className="text-[#B79A72]">Bhayandar.</span>
                </h1>

                <p className="mt-6 max-w-[620px] text-[14px] leading-[1.95] text-[#566C80]">
                  From local shops and professional services to growing
                  businesses, Sharp Rays connects SEO, website development
                  and social media marketing to help businesses build a
                  stronger online presence in Bhayandar.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/free-audit"
                    title="Get a free digital marketing audit from Sharp Rays"
                    className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#0B2A52] px-6 text-[12px] text-white transition hover:bg-[#163D69]"
                  >
                    Get a Free Audit
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href="#bhayandar-services"
                    title="Explore digital marketing services in Bhayandar"
                    className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DDCDB9] bg-white px-6 text-[12px] transition hover:border-[#B79A72]"
                  >
                    Explore Services
                    <ArrowRight size={15} className="text-[#B79A72]" />
                  </Link>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#E8DFD3] pt-6">
                  {[
                    "SEO & Search Visibility",
                    "Website Development",
                    "Social Media",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-[10px] text-[#927B60]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#B79A72]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Rise>

            <Rise delay={0.12}>
              <div className="relative mx-auto w-full max-w-[570px] pb-8">
                <div className="absolute -right-3 -top-3 h-1/2 w-1/2 border-r border-t border-[#C6AD8D] sm:-right-5 sm:-top-5" />

                <div className="relative flex aspect-[5/5] flex-col justify-between overflow-hidden rounded-[18px] bg-[#EAE7DF] p-6 sm:aspect-[6/5] sm:p-9">
                  <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full border border-[#B79A72]/40" />
                  <div className="absolute -right-6 -top-2 h-44 w-44 rounded-full border border-[#B79A72]/30" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#927B60]">
                      Sharp Rays / Bhayandar
                    </span>
                    <MapPin
                      size={22}
                      strokeWidth={1.3}
                      className="text-[#A38561]"
                    />
                  </div>

                  <div className="relative">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D5C6B1] bg-white/70 text-[#B79A72]">
                      <Compass size={32} strokeWidth={1.1} />
                    </div>

                    <p className="font-[var(--font-new-york)] text-[31px] leading-[1.2] sm:text-[40px]">
                      Local relevance.
                      <br />
                      <span className="text-[#A38561]">Digital growth.</span>
                    </p>

                    <p className="mt-4 max-w-[320px] text-[12px] leading-[1.9] text-[#62778A]">
                      Building useful digital experiences for businesses
                      serving Bhayandar and its surrounding areas.
                    </p>
                  </div>

                  <div className="relative flex flex-wrap gap-2">
                    {["Bhayandar East", "Bhayandar West"].map((place) => (
                      <span
                        key={place}
                        className="rounded-full border border-[#D9CBB9] bg-white/70 px-3 py-2 text-[10px] text-[#806B51]"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-x-4 -bottom-1 rounded-xl border border-[#E7DACA] bg-white/95 p-5 shadow-[0_20px_50px_-30px_rgba(11,42,82,0.28)] sm:inset-x-8">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#A38561]">
                    Our Focus
                  </span>
                  <p className="mt-2 font-[var(--font-new-york)] text-[19px] leading-[1.4]">
                    Search visibility{" "}
                    <span className="text-[#B79A72]">→</span> Better
                    experiences <span className="text-[#B79A72]">→</span>{" "}
                    Enquiries
                  </p>
                </div>
              </div>
            </Rise>
          </div>

          <Rise delay={0.15}>
            <div className="mt-20 border-y border-[#E6DDD1] py-7 lg:mt-24">
              <div className="grid gap-4 lg:grid-cols-[180px_1fr] lg:gap-10">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A38561]">
                  In a nutshell
                </span>
                <p className="max-w-[940px] text-[13px] leading-[2] text-[#62778A]">
                  Sharp Rays provides digital marketing services for
                  businesses targeting Bhayandar, Maharashtra, including
                  SEO, website development, social media marketing,
                  performance marketing, AI video and creative, and AI
                  automation. The approach considers the business, its
                  audience and its relevant service area across Bhayandar
                  East and West.
                </p>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      
      {/* 02. LOCAL INTRODUCTION — HORIZONTAL EDITORIAL LAYOUT */}
      <section
        className="relative overflow-hidden bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-intro-heading"
      >
        <div className="mx-auto max-w-[1220px]">

          {/* Section header */}
          <Rise>
            <div className="flex items-center justify-between border-b border-[#E6DDD1] pb-5">
              <Eyebrow>Understanding the Local Market</Eyebrow>
              <span className="hidden font-[var(--font-new-york)] text-[13px] tracking-[0.12em] text-[#A38561] sm:block">
                BHAYANDAR / 01
              </span>
            </div>
          </Rise>

          {/* Main content */}
          <div className="grid gap-12 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* LEFT — INTRODUCTION */}
            <Rise>
              <div className="flex h-full flex-col">
                <Heading id="bhayandar-intro-heading">
                  Digital Marketing for a Changing{" "}
                  <span className="text-[#B79A72]">
                    Bhayandar Business Landscape.
                  </span>
                </Heading>

                <div className="mt-7 space-y-4">
                  <p className="text-[13px] leading-[2] text-[#708092]">
                    Businesses in Bhayandar have different audiences, services and
                    customer requirements. A local retailer, a professional
                    service provider, a restaurant and a growing company may each
                    need a different digital approach.
                  </p>

                  <p className="text-[13px] leading-[2] text-[#708092]">
                    Some businesses may need better visibility when customers
                    search on Google. Others may first need a professional website
                    or a more consistent social media presence.
                  </p>

                  <p className="text-[13px] leading-[2] text-[#708092]">
                    Sharp Rays approaches these requirements through practical
                    digital solutions, with website development, SEO and social
                    media marketing forming the core service pillars.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="/locations"
                    title="Explore all Sharp Rays service locations"
                    className="group inline-flex items-center gap-3 text-[11px] font-semibold text-[#A18461] transition hover:text-[#0B2A52]"
                  >
                    Explore All Locations
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9C8B1] transition group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>
                </div>
              </div>
            </Rise>

            {/* RIGHT — FOUR EDITORIAL ROWS */}
            <Rise delay={0.12}>
              <div className="relative">

                {/* Vertical accent line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-8 left-[23px] top-8 w-px bg-[#E4D7C5]"
                />

                <div className="relative">

                  {/* ROW 01 */}
                  <article className="group relative grid grid-cols-[48px_1fr] gap-5 border-b border-[#E8DFD3] py-7 first:pt-2">
                    <div className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#E4D5C1] bg-[#FCFAF7] text-[#A78354] transition duration-300 group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white">
                      <Search size={19} strokeWidth={1.4} />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#A38561]">
                          01 / Discover
                        </span>
                        <h3 className="mt-2 font-[var(--font-new-york)] text-[23px] text-[#0B2A52]">
                          Search Discovery
                        </h3>
                        <p className="mt-2 max-w-[420px] text-[12px] leading-[1.9] text-[#718092]">
                          Help potential customers find relevant business information through organic search.
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="mt-2 shrink-0 text-[#B79A72] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </article>

                  {/* ROW 02 */}
                  <article className="group relative grid grid-cols-[48px_1fr] gap-5 border-b border-[#E8DFD3] py-7">
                    <div className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#D9E1E5] bg-[#FCFAF7] text-[#688AA6] transition duration-300 group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white">
                      <Globe size={19} strokeWidth={1.4} />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#A38561]">
                          02 / Present
                        </span>
                        <h3 className="mt-2 font-[var(--font-new-york)] text-[23px] text-[#0B2A52]">
                          Online Presence
                        </h3>
                        <p className="mt-2 max-w-[420px] text-[12px] leading-[1.9] text-[#718092]">
                          Present your business, services and information through a professional website.
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="mt-2 shrink-0 text-[#B79A72] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </article>

                  {/* ROW 03 */}
                  <article className="group relative grid grid-cols-[48px_1fr] gap-5 border-b border-[#E8DFD3] py-7">
                    <div className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#EAD9DF] bg-[#FCFAF7] text-[#AD728C] transition duration-300 group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white">
                      <Megaphone size={19} strokeWidth={1.4} />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#A38561]">
                          03 / Communicate
                        </span>
                        <h3 className="mt-2 font-[var(--font-new-york)] text-[23px] text-[#0B2A52]">
                          Brand Communication
                        </h3>
                        <p className="mt-2 max-w-[420px] text-[12px] leading-[1.9] text-[#718092]">
                          Build a more consistent presence across relevant social media platforms.
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="mt-2 shrink-0 text-[#B79A72] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </article>

                  {/* ROW 04 */}
                  <article className="group relative grid grid-cols-[48px_1fr] gap-5 py-7 last:pb-2">
                    <div className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#E4D8C6] bg-[#FCFAF7] text-[#A78354] transition duration-300 group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white">
                      <Target size={19} strokeWidth={1.4} />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#A38561]">
                          04 / Connect
                        </span>
                        <h3 className="mt-2 font-[var(--font-new-york)] text-[23px] text-[#0B2A52]">
                          Meaningful Enquiries
                        </h3>
                        <p className="mt-2 max-w-[420px] text-[12px] leading-[1.9] text-[#718092]">
                          Make it easier for interested visitors to understand your offering and contact your business.
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="mt-2 shrink-0 text-[#B79A72] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </article>

                </div>
              </div>
            </Rise>
          </div>
        </div>
      </section>


     
      {/* 03. SERVICES — COLOURFUL BENTO DESIGN */}
      <section
        id="bhayandar-services"
        className="relative overflow-hidden bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-services-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-[#F0EBE2]/60 blur-[110px]"
        />

        <div className="relative mx-auto max-w-[1220px]">

          {/* SECTION INTRO */}
          <Rise>
            <div className="flex flex-col gap-6 border-b border-[#E7DED2] pb-9 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[700px]">
                <Eyebrow>Our Services</Eyebrow>

                <Heading id="bhayandar-services-heading">
                  Digital Marketing Services in{" "}
                  <span className="text-[#B79A72]">Bhayandar.</span>
                </Heading>
              </div>

              <p className="max-w-[440px] text-[13px] leading-[1.95] text-[#708092] lg:pb-1">
                From social media marketing and SEO to website development,
                performance marketing, AI video and automation, explore the
                services Sharp Rays offers to support your business growth.
              </p>
            </div>
          </Rise>

          {/* BENTO SERVICE GRID */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const wide = index === 0 || index === 3 || index === 4;

              return (
                <Rise
                  key={service.number}
                  delay={(index % 3) * 0.06}
                  className={`h-full ${wide ? "lg:col-span-7" : "lg:col-span-5"}`}
                >
                  <article
                    className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[22px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_55px_-32px_rgba(11,42,82,.25)] sm:p-8 lg:min-h-[470px]"
                    style={{
                      backgroundColor: service.tint,
                      borderColor: `${service.accent}35`,
                    }}
                  >
                    {/* Decorative colour elements */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full border opacity-40 transition-transform duration-700 group-hover:scale-125"
                      style={{ borderColor: service.accent }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-4 -top-8 h-36 w-36 rounded-full border opacity-30"
                      style={{ borderColor: service.accent }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full opacity-[0.10] blur-[55px]"
                      style={{ backgroundColor: service.accent }}
                    />

                    {/* Card header */}
                    <div className="relative flex items-start justify-between">
                      <div
                        className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] border bg-white/75 shadow-sm transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105"
                        style={{
                          color: service.accent,
                          borderColor: `${service.accent}45`,
                        }}
                      >
                        <Icon size={26} strokeWidth={1.4} />
                      </div>

                      <div className="flex flex-col items-end">
                        <span
                          className="font-[var(--font-new-york)] text-[43px] leading-none tracking-[-0.05em] opacity-70"
                          style={{ color: service.accent }}
                        >
                          {service.number}
                        </span>
                        <span
                          className="mt-2 text-[8px] font-semibold uppercase tracking-[0.18em]"
                          style={{ color: service.accent }}
                        >
                          Sharp Rays
                        </span>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="relative mt-8">
                      <span
                        className="text-[9px] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: service.accent }}
                      >
                        Digital Services
                      </span>

                      <h3 className="mt-3 max-w-[520px] font-[var(--font-new-york)] text-[25px] leading-[1.2] tracking-[-0.025em] text-[#0B2A52] sm:text-[29px]">
                        {service.title}
                      </h3>

                      <p
                        className="mt-3 max-w-[530px] font-[var(--font-new-york)] text-[15px] leading-[1.55] sm:text-[16px]"
                        style={{ color: service.accent }}
                      >
                        {service.headline}
                      </p>

                      <p className="mt-3 max-w-[540px] text-[12px] leading-[1.9] text-[#65788A]">
                        {service.description}
                      </p>
                    </div>

                    {/* Feature list */}
                    <div className="relative mt-6 border-t pt-5" style={{ borderColor: `${service.accent}35` }}>
                      <span
                        className="text-[9px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: service.accent }}
                      >
                        What this service includes
                      </span>

                      <div className="mt-4 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-2 text-[10px] leading-[1.7] text-[#526A7D] sm:text-[11px]"
                          >
                            <span
                              className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/80"
                            >
                              <Check
                                size={10}
                                strokeWidth={2.5}
                                style={{ color: service.accent }}
                              />
                            </span>
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="relative mt-auto pt-7">
                      <div
                        className="mb-5 rounded-lg border bg-white/55 px-4 py-3"
                        style={{ borderColor: `${service.accent}30` }}
                      >
                        <p className="text-[10px] leading-[1.7] text-[#64778A]">
                          <span
                            className="font-semibold"
                            style={{ color: service.accent }}
                          >
                            Suitable for:
                          </span>{" "}
                          {service.best}
                        </p>
                      </div>

                      <Link
                        href={service.href}
                        title={`Explore ${service.title} for businesses in Bhayandar`}
                        className="group/link inline-flex min-h-[48px] w-full items-center justify-between rounded-xl bg-white px-5 text-[11px] font-semibold text-[#0B2A52] shadow-[0_5px_20px_-14px_rgba(11,42,82,.3)] transition duration-300 hover:bg-[#0B2A52] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72]"
                      >
                        Explore Service

                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-full transition group-hover/link:bg-white/15"
                          style={{ color: service.accent }}
                        >
                          <ArrowUpRight
                            size={16}
                            className="transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-white"
                          />
                        </span>
                      </Link>
                    </div>
                  </article>
                </Rise>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <Rise>
            <div className="mt-10 flex flex-col gap-5 rounded-[18px] border border-[#E6D9C7] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A38561]">
                  Explore More
                </span>
                <p className="mt-2 font-[var(--font-new-york)] text-[21px] text-[#0B2A52]">
                  Find the right digital services for your business.
                </p>
              </div>

              <Link
                href="/services"
                title="Explore all Sharp Rays digital marketing services"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#0B2A52] px-7 text-[11px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#163D69]"
              >
                Explore All Services
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Rise>
        </div>
      </section>


      {/* 04. LOCAL AREAS */}
      <section
        className="relative overflow-hidden bg-[#102B4B] px-5 py-20 text-white sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-areas-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full border border-white/10"
        />

        <div className="relative mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Rise>
            <Eyebrow>Local Relevance</Eyebrow>

            <Heading id="bhayandar-areas-heading">
              Digital Marketing Around{" "}
              <span className="text-[#D6BD98]">Bhayandar.</span>
            </Heading>

            <p className="mt-5 max-w-[650px] text-[13px] leading-[1.95] text-white/65">
              Bhayandar East and Bhayandar West can have different business
              contexts and customer requirements. Location-focused content
              should reflect the actual areas a business serves instead of
              repeating generic location keywords.
            </p>

            <p className="mt-4 max-w-[650px] text-[13px] leading-[1.95] text-white/65">
              We consider local relevance when planning website content,
              search topics and service information, while keeping each
              business's real operating area in view.
            </p>
          </Rise>

          <div className="grid gap-5 sm:grid-cols-2">
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <Rise key={area.title} delay={index * 0.08}>
                  <article className="group relative flex min-h-[300px] h-full flex-col overflow-hidden rounded-[22px] border border-white/15 bg-gradient-to-br from-white/[0.11] to-white/[0.035] p-8 backdrop-blur-sm transition duration-500 hover:border-[#D6BD98]/50 hover:from-white/[0.15]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#D6BD98]/40 bg-[#D6BD98]/[0.08] text-[#D6BD98] transition duration-500 group-hover:rotate-[-6deg]">
                      <Icon size={22} strokeWidth={1.4} />
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-[25px]">
                      {area.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[12px] leading-[1.9] text-white/65">
                      {area.description}
                    </p>

                    <div className="mt-6 border-t border-white/15 pt-4">
                      <span className="text-[10px] tracking-[0.08em] text-[#D6BD98]">
                        {area.tag}
                      </span>
                    </div>
                  </article>
                </Rise>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* 05. INDUSTRIES — PREMIUM INDUSTRY SHOWCASE */}
      <section
        className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-industries-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#F5F0E8]/70 blur-[100px]"
        />

        <div className="relative mx-auto max-w-[1220px]">

          {/* EDITORIAL HEADER */}
          <Rise>
            <div className="grid gap-8 border-b border-[#E9E0D5] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <Eyebrow>Industries We Can Support</Eyebrow>

                <Heading id="bhayandar-industries-heading">
                  Digital Solutions for{" "}
                  <span className="text-[#B79A72]">
                    Different Industries.
                  </span>
                </Heading>
              </div>

              <p className="max-w-[650px] text-[13px] leading-[1.95] text-[#708092]">
                Every business communicates differently. The website,
                content and marketing strategy should reflect its products,
                services and audience. These are some of the industries
                whose digital requirements Sharp Rays can discuss.
              </p>
            </div>
          </Rise>

          {/* INDUSTRY SHOWCASE */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">

            {/* LEFT — VISUAL INDEX */}
            <Rise>
              <div className="relative flex flex-col justify-between overflow-hidden rounded-[20px] bg-[#102B4B] p-7 text-white sm:p-9 lg:min-h-[590px]">
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-20 h-[300px] w-[300px] rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-8 h-[210px] w-[210px] rounded-full border border-[#C6A77A]/25"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-[#C6A77A]/10 blur-[60px]"
                />

                <div className="relative">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#D6BD98]">
                    Industry Index
                  </span>

                  <h3 className="mt-8 font-[var(--font-new-york)] text-[45px] leading-[1.05] tracking-[-0.04em] sm:text-[55px]">
                    Diverse
                    <br />
                    <span className="text-[#D6BD98]">Business.</span>
                    <br />
                    Digital
                    <br />
                    Solutions.
                  </h3>

                  <p className="mt-6 max-w-[200px] text-[11px] leading-[1.9] text-white/60">
                    Different industries. Different audiences. Digital
                    strategies shaped around business requirements.
                  </p>
                </div>

                <div className="relative mt-12 border-t border-white/15 pt-6">
                  <span className="font-[var(--font-new-york)] text-[58px] leading-none text-[#D6BD98]">
                    10
                  </span>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/55">
                    Industry categories
                  </p>
                </div>
              </div>
            </Rise>

            {/* RIGHT — INDUSTRY LIST */}
            <div className="grid content-start gap-x-8 sm:grid-cols-2">
              {industries.map((industry, index) => {
                const Icon = industry.icon;

                const accents = [
                  { color: "#AD728C", tint: "#F8EFF2" },
                  { color: "#688AA6", tint: "#EEF3F7" },
                  { color: "#AD895D", tint: "#F8F2E9" },
                  { color: "#609286", tint: "#EEF5F2" },
                  { color: "#8E79AE", tint: "#F2EFF8" },
                  { color: "#668A72", tint: "#EFF4EF" },
                  { color: "#AD728C", tint: "#F8EFF2" },
                  { color: "#AD895D", tint: "#F8F2E9" },
                  { color: "#688AA6", tint: "#EEF3F7" },
                  { color: "#609286", tint: "#EEF5F2" },
                ];

                const accent = accents[index];

                return (
                  <Rise key={industry.number} delay={(index % 2) * 0.06}>
                    <article className="group relative flex min-h-[190px] flex-col border-b border-[#EAE2D7] py-6 transition duration-300 hover:bg-[#FCFAF7] sm:px-4">

                      <div className="flex items-center justify-between">
                        <span className="font-[var(--font-new-york)] text-[30px] leading-none text-[#D8CBB9] transition group-hover:text-[#B79A72]">
                          {industry.number}
                        </span>

                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-[14px] border transition duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: accent.tint,
                            borderColor: `${accent.color}35`,
                            color: accent.color,
                          }}
                        >
                          <Icon size={20} strokeWidth={1.4} />
                        </div>
                      </div>

                      <h3 className="mt-6 font-[var(--font-new-york)] text-[21px] leading-[1.3] text-[#0B2A52] transition group-hover:text-[#A18461]">
                        {industry.name}
                      </h3>

                      <p className="mt-2 max-w-[310px] text-[11px] leading-[1.85] text-[#788796]">
                        {industry.description}
                      </p>

                      <div
                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                        style={{ backgroundColor: accent.color }}
                      />
                    </article>
                  </Rise>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 06. PROCESS */}
      <section
        className="bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-process-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise className="max-w-[800px]">
            <Eyebrow>How We Approach Your Project</Eyebrow>

            <Heading id="bhayandar-process-heading">
              From Business Requirements to{" "}
              <span className="text-[#A78361]">a Clear Digital Plan.</span>
            </Heading>

            <p className="mt-5 max-w-[680px] text-[13px] leading-[1.9] text-[#718092]">
              Every business has different priorities. We start by
              understanding your requirements before recommending a
              suitable combination of digital services.
            </p>
          </Rise>

          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-9 hidden h-px bg-[#D9CBB9] lg:block"
            />

            {process.map((item, index) => (
              <Rise key={item.number} delay={index * 0.06}>
                <article className="relative h-full rounded-[18px] border border-[#E4D9CA] bg-white p-7 shadow-[0_12px_35px_-30px_rgba(11,42,82,0.3)]">
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-new-york)] text-[38px] text-[#B79A72]">
                      {item.number}
                    </span>

                    {index < process.length - 1 && (
                      <ArrowRight
                        size={17}
                        className="hidden text-[#C8B69D] lg:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-6 font-[var(--font-new-york)] text-[23px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#708092]">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-[#E9E0D5] pt-4 text-[10px] text-[#9D805C]">
                    {item.output}
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* 07. PRICING / PROJECT SCOPE */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:py-24"
        aria-labelledby="bhayandar-pricing-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise>
            <div className="relative overflow-hidden rounded-[18px] border border-[#E6D9C7] bg-[#FCFAF7] p-7 sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#D8C2A4]/50"
              />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_270px] lg:items-stretch">
                <div>
                  <Eyebrow>Project Scope & Pricing</Eyebrow>

                  <h2
                    id="bhayandar-pricing-heading"
                    className="mt-5 max-w-[720px] font-[var(--font-new-york)] text-[29px] leading-[1.2] sm:text-[36px]"
                  >
                    A suitable digital plan starts with{" "}
                    <span className="text-[#B79A72]">your requirements.</span>
                  </h2>

                  <p className="mt-4 max-w-[700px] text-[13px] leading-[1.95] text-[#708092]">
                    The scope and pricing depend on the service, deliverables,
                    website requirements, content needs and ongoing support.
                    Explore the Sharp Rays pricing page or discuss your
                    project to identify a suitable option.
                  </p>
                </div>

                <Link
                  href="/pricing"
                  title="Explore Sharp Rays pricing and service packages"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0B2A52] px-7 text-[12px] font-medium text-white transition hover:bg-[#163D69]"
                >
                  Explore Pricing
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </Rise>
        </div>
      </section>

           {/* 08. EXPLORE MORE — Sharp Rays Network */}
      <section
        className="relative overflow-hidden bg-[#F7F5F0] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-related-heading"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-[440px] w-[440px] rounded-full border border-[#E8DFD2]" />
        <div className="pointer-events-none absolute -left-28 top-32 h-[320px] w-[320px] rounded-full border border-[#E8DFD2]/80" />

        <div className="relative mx-auto max-w-[1220px]">

          {/* Heading */}
          <Rise>
            <div className="grid gap-7 lg:grid-cols-[1fr_330px] lg:items-end">
              <div>
                <Eyebrow>Explore More From Sharp Rays</Eyebrow>

                <Heading id="bhayandar-related-heading">
                  One Digital Partner.{" "}
                  <span className="text-[#B79A72]">
                    More Ways to Grow.
                  </span>
                </Heading>
              </div>

              <p className="max-w-[330px] text-[12px] leading-[1.9] text-[#778594] lg:pb-2">
                Explore our digital services and discover nearby locations
                where businesses can find the right support.
              </p>
            </div>
          </Rise>

          {/* Main directory */}
          <div className="mt-14 grid gap-0 overflow-hidden rounded-[18px] border border-[#E5DDD1] bg-[#FFFEFC] lg:grid-cols-[1.35fr_.65fr]">

            {/* Services index */}
            <div className="p-6 sm:p-9 lg:p-11">
              <div className="mb-8 flex items-center justify-between border-b border-[#EAE3D9] pb-5">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                    What We Do
                  </span>
                  <h3 className="mt-2 font-[var(--font-new-york)] text-[25px] text-[#122847]">
                    Explore Our Services
                  </h3>
                </div>

                <span className="font-[var(--font-new-york)] text-[34px] text-[#D7C8B4]">
                  06
                </span>
              </div>

              <div>
                {[
                  {
                    number: "01",
                    name: "Search Engine Optimization",
                    detail: "Improve organic search visibility",
                    href: "/services/search-engine-optimization",
                  },
                  {
                    number: "02",
                    name: "Website Development",
                    detail: "Build a stronger digital experience",
                    href: "/services/website-development",
                  },
                  {
                    number: "03",
                    name: "Social Media Marketing",
                    detail: "Create a consistent brand presence",
                    href: "/services/social-media-marketing",
                  },
                  {
                    number: "04",
                    name: "Performance Marketing",
                    detail: "Reach relevant audiences through paid media",
                    href: "/services/performance-marketing",
                  },
                  {
                    number: "05",
                    name: "AI Video & Creative",
                    detail: "Explore new creative possibilities",
                    href: "/services/ai-video-and-creative",
                  },
                  {
                    number: "06",
                    name: "AI Automation",
                    detail: "Make everyday workflows more efficient",
                    href: "/services/ai-automation",
                  },
                ].map((item, index) => (
                  <Rise key={item.href} delay={index * 0.045}>
                    <Link
                      href={item.href}
                      title={`Explore ${item.name} from Sharp Rays`}
                      className="group grid grid-cols-[34px_1fr_32px] items-center gap-3 border-b border-[#EEE8DF] py-5 transition-all duration-300 last:border-b-0 sm:grid-cols-[42px_1fr_36px] sm:gap-5"
                    >
                      <span className="font-[var(--font-new-york)] text-[15px] text-[#B79A72] transition-colors group-hover:text-[#122847]">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <h4 className="font-[var(--font-new-york)] text-[16px] leading-snug text-[#122847] transition-colors group-hover:text-[#A38561] sm:text-[19px]">
                          {item.name}
                        </h4>
                        <p className="mt-1.5 text-[10px] leading-relaxed text-[#84909B] sm:text-[11px]">
                          {item.detail}
                        </p>
                      </div>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8DED1] text-[#A38561] transition-all duration-300 group-hover:border-[#122847] group-hover:bg-[#122847] group-hover:text-white">
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </Link>
                  </Rise>
                ))}
              </div>
            </div>

            {/* Locations side panel */}
            <div className="relative flex flex-col justify-between overflow-hidden border-t border-[#E5DDD1] bg-[#122847] p-7 text-white sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <div className="pointer-events-none absolute -right-24 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-12 -top-8 h-[210px] w-[210px] rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#C6A77A]" />
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#C6A77A]">
                    Where We Serve
                  </span>
                </div>

                <h3 className="mt-6 max-w-[280px] font-[var(--font-new-york)] text-[30px] leading-[1.25] tracking-[-0.03em] text-white sm:text-[35px]">
                  Growing Beyond{" "}
                  <span className="text-[#C6A77A]">One Location.</span>
                </h3>

                <p className="mt-4 max-w-[290px] text-[11px] leading-[1.9] text-white/60">
                  Explore our location pages to find digital marketing
                  services relevant to your business area.
                </p>
              </div>

              <div className="relative mt-12">
                <span className="mb-5 block text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
                  Nearby Locations
                </span>

                <div className="space-y-3">
                  {nearbyLocations.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      title={`Explore digital marketing services in ${item.name}`}
                      className="group flex items-center justify-between gap-4 border-b border-white/15 py-4 transition-colors hover:border-[#C6A77A]"
                    >
                      <div>
                        <span className="mb-1 block text-[9px] text-[#C6A77A]">
                          0{index + 1} / LOCATION
                        </span>
                        <h4 className="font-[var(--font-new-york)] text-[21px] text-white transition-colors group-hover:text-[#C6A77A]">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-[10px] leading-relaxed text-white/50">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-[#C6A77A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/locations"
                title="Explore all Sharp Rays service locations"
                className="relative mt-9 inline-flex w-fit items-center gap-3 border-b border-[#C6A77A]/60 pb-2 text-[11px] font-medium text-white transition-colors hover:text-[#C6A77A]"
              >
                Explore All Locations
                <ArrowUpRight size={15} className="text-[#C6A77A]" />
              </Link>
            </div>
          </div>

          {/* Closing line */}
          <Rise delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
              <p className="font-[var(--font-new-york)] text-[15px] italic text-[#8A8F91]">
                We Create the “Oh, Wow.”!
              </p>

              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#A38561]">
                Sharp Rays · Digital Growth
              </span>
            </div>
          </Rise>
        </div>
      </section>

      {/* 09. FAQ */}
      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise className="mx-auto max-w-[800px] text-center">
            <Eyebrow center>Questions Before You Start</Eyebrow>

            <Heading center id="bhayandar-faq-heading">
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </Heading>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Useful information about SEO, website development, social media
              marketing and digital marketing services for businesses in
              Bhayandar.
            </p>
          </Rise>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Rise key={faq.question}>
                <article className="flex h-full min-h-[220px] gap-4 rounded-[16px] border border-[#E8DED1] bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[#D3BEA1] hover:shadow-[0_14px_32px_-28px_rgba(11,42,82,0.3)] sm:p-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] sm:text-[21px]">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-final-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise>
            <div className="relative overflow-hidden rounded-[24px] border border-[#183A5E] bg-[#0B2A52] text-white shadow-[0_28px_70px_-45px_rgba(11,42,82,0.65)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-36 -top-48 h-[520px] w-[520px] rounded-full border border-[#D8C2A4]/25"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-28 h-[360px] w-[360px] rounded-full border border-[#D8C2A4]/20"
              />

              <div className="relative grid gap-9 p-7 sm:p-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14 lg:p-14">
                <div>
                  <Eyebrow>Let's Discuss Your Business Goals</Eyebrow>

                  <h2
                    id="bhayandar-final-heading"
                    className="mt-5 max-w-[750px] font-[var(--font-new-york)] text-[30px] leading-[1.17] tracking-[-0.035em] sm:text-[39px] lg:text-[44px]"
                  >
                    Looking for a Digital Marketing Agency in{" "}
                    <span className="text-[#B79A72]">Bhayandar?</span>
                  </h2>

                  <p className="mt-6 max-w-[680px] text-[13px] leading-[1.95] text-[#62778A]">
                    Whether you need better Google visibility, a professional
                    website or a more consistent social media presence, start
                    with a conversation about your business and the
                    improvements you want to explore.
                  </p>
                </div>

                <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-11">
                  <MessageCircle size={24} className="text-[#B79A72]" />

                  <h3 className="mt-4 font-[var(--font-new-york)] text-[24px] leading-[1.3]">
                    Let's find the right digital solution.
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">
                    Tell us about your business, website and primary
                    marketing requirements.
                  </p>

                  <div className="mt-7 flex flex-col gap-3">
                    <Link
                      href="/free-audit"
                      title="Request a free digital marketing audit from Sharp Rays"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D6BD98] px-5 text-center text-[12px] font-semibold text-[#0B2A52] transition hover:bg-white"
                    >
                      Request a Free Audit
                      <ArrowUpRight size={16} />
                    </Link>

                    <Link
                      href="/contact?source=bhayandar-location"
                      title="Contact Sharp Rays about digital marketing services in Bhayandar"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 text-[12px] text-white transition hover:border-[#D6BD98] hover:bg-white/10"
                    >
                      Contact Sharp Rays
                      <ArrowRight
                        size={16}
                        className="text-[#B79A72]"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative border-t border-white/15 px-7 py-4 text-[10px] tracking-[0.12em] text-[#D6BD98] sm:px-11 lg:px-14">
                SHARP RAYS — WE CREATE THE "OH, WOW."!
              </div>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  );
}