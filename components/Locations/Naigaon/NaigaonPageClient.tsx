"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MonitorSmartphone,
  Megaphone,
  MapPin,
  Building2,
  Store,
  House,
  Check,
  Compass,
  Target,
  MessageCircle,
  Globe,
  Navigation,
  BarChart3,
  Newspaper,
  Film,
  BookOpen,
  WandSparkles,
  Workflow,
  Factory,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  UtensilsCrossed,
  BriefcaseBusiness,
  Rocket,
  Plane,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

function Rise({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
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

function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-7 bg-[#B79A72]" />
      <span className="text-[10px] font-medium uppercase tracking-[0.19em] text-[#A38561] sm:text-[11px]">
        {children}
      </span>
      {center && <span className="h-px w-7 bg-[#B79A72]" />}
    </div>
  );
}

function Heading({
  children,
  center = false,
  id,
}: {
  children: ReactNode;
  center?: boolean;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-5 font-[var(--font-new-york)] text-[29px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[36px] lg:text-[42px] ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

/* =====================================================
   ALL 6 SERVICES
===================================================== */

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
    href: "/services/social-media-marketing",
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
    href: "/services/search-engine-optimization",
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
    href: "/services/website-development",
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

/* =====================================================
   ALL 10 INDUSTRIES
===================================================== */

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

/* =====================================================
   LOCAL AREAS
===================================================== */

const areas = [
  {
    title: "Naigaon East",
    description:
      "Consider the needs of local shops, residential communities and service providers looking to improve their online discovery.",
    icon: Building2,
    tag: "Local business visibility",
  },
  {
    title: "Juchandra",
    description:
      "A relevant area to consider when planning digital visibility for local businesses and units serving nearby customers.",
    icon: Store,
    tag: "Local business discovery",
  },
  {
    title: "Chandrapada",
    description:
      "Include relevant location context when developing search-focused content for businesses and services in this area.",
    icon: Navigation,
    tag: "Location-focused search",
  },
  {
    title: "Naigaon West",
    description:
      "New housing developments and residential growth create opportunities for relevant digital communication and online discovery.",
    icon: House,
    tag: "Housing and local services",
  },
];

/* =====================================================
   PROCESS
===================================================== */

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

/* =====================================================
   FAQ DATA
===================================================== */

const faqs = [
  {
    question:
      "Which digital marketing services does Sharp Rays offer in Naigaon?",
    answer:
      "Sharp Rays offers SEO, website development, social media marketing, performance marketing, digital PR, AI video and creative, professional video editing, content marketing and AI automation. The right combination depends on your business goals, audience and requirements.",
  },
  {
    question:
      "Does Sharp Rays provide digital marketing services near Naigaon Station?",
    answer:
      "Sharp Rays targets Naigaon and surrounding service areas, including relevant business requirements around Naigaon Station, Juchandra, Chandrapada and Naigaon West. Services are discussed according to project scope.",
  },
  {
    question:
      "Can SEO help my business appear on Google in Naigaon?",
    answer:
      "SEO can help your website become more relevant and discoverable for searches related to your services and target locations. Technical optimisation, useful content, local relevance and consistent improvements all contribute to an SEO strategy. Rankings are not guaranteed.",
  },
  {
    question:
      "How much does website development cost at Sharp Rays?",
    answer:
      "Sharp Rays lists website pricing options at ₹14,999, ₹24,999 and ₹39,999. The suitable option depends on your website requirements and the inclusions of each package. Visit our pricing page for the latest package details.",
  },
  {
    question:
      "Can I get website development and SEO together?",
    answer:
      "Yes. Website development and SEO can be planned together so that website structure, technical foundations, content and search visibility support your business objectives.",
  },
  {
    question:
      "Do you provide social media marketing for small businesses?",
    answer:
      "Yes. Social media marketing can support small businesses through content planning, platform-specific communication, creative direction and audience engagement.",
  },
  {
    question:
      "Does Sharp Rays have a physical office in Naigaon?",
    answer:
      "This page describes Naigaon as a service area. It does not claim a physical Sharp Rays office in Naigaon. Contact the team to discuss project requirements and service arrangements.",
  },
  {
    question:
      "How can I get a digital marketing consultation?",
    answer:
      "You can contact Sharp Rays through the website enquiry page or request a free audit. Share your website, business type and primary marketing objective to start the conversation.",
  },
];

/* =====================================================
   FAQ STRUCTURED DATA
===================================================== */

function NaigaonStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.sharprays.com/locations/naigaon#faq",
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

/* =====================================================
   MAIN PAGE
===================================================== */

export default function NaigaonPageClient() {
  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      <NaigaonStructuredData />

      {/* =================================================
          01. HERO + DIRECT ANSWER
      ================================================= */}

      <section
        className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:pb-28 lg:pt-40"
        aria-labelledby="naigaon-main-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-32 h-[460px] w-[460px] rounded-full border border-[#E4D7C5]/70"
        />

        <div className="relative mx-auto max-w-[1260px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <Rise>
              <div>
                <Eyebrow>
                  Digital Marketing Near Naigaon Station
                </Eyebrow>

                <h1
                  id="naigaon-main-heading"
                  className="mt-6 max-w-[720px] font-[var(--font-new-york)] text-[38px] font-normal leading-[1.12] tracking-[-0.04em] sm:text-[47px] lg:text-[53px]"
                >
                  Digital Marketing for Businesses{" "}
                  <span className="text-[#B79A72]">
                    Near Naigaon Station.
                  </span>
                </h1>

                <p className="mt-6 max-w-[620px] text-[14px] leading-[1.95] text-[#566C80]">
                  From local shops and service providers to businesses
                  around growing residential developments, Sharp Rays
                  connects SEO, website development and social media
                  marketing to help businesses build a stronger online
                  presence in Naigaon.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/free-audit"
                    title="Get a Free Digital Marketing Audit"
                    className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#0B2A52] px-6 text-[12px] text-white transition hover:bg-[#163D69]"
                  >
                    Get a Free Audit
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href="#naigaon-services"
                    title="Explore Digital Marketing Services in Naigaon"
                    className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DDCDB9] bg-white px-6 text-[12px] transition hover:border-[#B79A72]"
                  >
                    Explore Services
                    <ArrowRight size={15} className="text-[#B79A72}" />
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
                      Sharp Rays / Naigaon
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
                      <span className="text-[#A38561]">
                        Digital growth.
                      </span>
                    </p>

                    <p className="mt-4 max-w-[320px] text-[12px] leading-[1.9] text-[#62778A]">
                      Building useful digital experiences for businesses
                      around Naigaon and its surrounding localities.
                    </p>
                  </div>

                  <div className="relative flex flex-wrap gap-2">
                    {["Naigaon", "Juchandra", "Chandrapada"].map((place) => (
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
                    experiences{" "}
                    <span className="text-[#B79A72]">→</span> Enquiries
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
                  Sharp Rays provides digital marketing services
                  targeting Naigaon, Maharashtra, including SEO,
                  website development and social media marketing.
                  The service area includes Naigaon East, Juchandra,
                  Chandrapada and Naigaon West, with solutions planned
                  around local business needs and online visibility.
                </p>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      {/* =================================================
          02. LOCAL INTRODUCTION
      ================================================= */}

      <section
        className="bg-white px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-intro-heading"
      >
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Rise>
            <Eyebrow>Understanding the Local Market</Eyebrow>

            <Heading id="naigaon-intro-heading">
              Digital Marketing for a Changing{" "}
              <span className="text-[#B79A72]">
                Naigaon Business Landscape.
              </span>
            </Heading>

            <p className="mt-6 text-[13px] leading-[2] text-[#708092]">
              Naigaon has different types of local business and
              residential contexts. Local shops, independent service
              providers, businesses around Juchandra and Chandrapada,
              and new housing developments near Naigaon Station can
              have different digital marketing requirements.
            </p>

            <p className="mt-4 text-[13px] leading-[2] text-[#708092]">
              A local business may need better visibility when
              customers search on Google. A new business may first
              need a professional website. Another may need a more
              consistent social media presence.
            </p>

            <p className="mt-4 text-[13px] leading-[2] text-[#708092]">
              Sharp Rays approaches these requirements through
              practical digital solutions, with website development,
              SEO and social media marketing forming the core
              service pillars.
            </p>

            <div className="mt-8">
              <Link
                href="/locations"
                title="Explore All Sharp Rays Service Locations"
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[#A18461] hover:text-[#0B2A52]"
              >
                Explore All Locations
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Rise>

          <Rise delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Search,
                  title: "Search Discovery",
                  text: "Help potential customers find relevant business information through organic search.",
                },
                {
                  icon: Globe,
                  title: "Online Presence",
                  text: "Present your business, services and information through a professional website.",
                },
                {
                  icon: Megaphone,
                  title: "Brand Communication",
                  text: "Build a more consistent presence across relevant social media platforms.",
                },
                {
                  icon: Target,
                  title: "Meaningful Enquiries",
                  text: "Make it easier for interested visitors to understand your offering and contact your business.",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`rounded-[16px] border border-[#E8DED0] p-7 ${
                      i === 0 || i === 3 ? "bg-[#FCFAF7]" : "bg-[#F6F3ED]"
                    }`}
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.4}
                      className="text-[#B79A72]"
                    />
                    <h3 className="mt-7 font-[var(--font-new-york)] text-[22px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Rise>
        </div>
      </section>

      {/* =================================================
          03. OUR 6 SERVICES
      ================================================= */}

      <section
        id="naigaon-services"
        className="scroll-mt-24 bg-[#F9F7F3] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-services-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise className="mx-auto max-w-[820px] text-center">
            <Eyebrow center>Our Services</Eyebrow>

            <Heading center id="naigaon-services-heading">
              Digital Marketing Services in{" "}
              <span className="text-[#B79A72]">Naigaon.</span>
            </Heading>

            <p className="mx-auto mt-5 max-w-[720px] text-[13px] leading-[1.95] text-[#708092]">
              From social media marketing and SEO to website development,
              performance marketing, AI video and automation, explore the
              services Sharp Rays offers to support your business growth.
            </p>
          </Rise>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Rise key={service.number} delay={(index % 3) * 0.06}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E9E0D5] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#D7C3A9] hover:shadow-[0_18px_45px_-30px_rgba(11,42,82,0.25)]">
                    <div
                      className="relative flex min-h-[155px] items-center justify-center overflow-hidden"
                      style={{ backgroundColor: service.tint }}
                    >
                      <div className="absolute inset-5 rounded-[14px] border border-current opacity-10" />

                      <div
                        className="relative flex h-[76px] w-[76px] items-center justify-center rounded-[22px] border bg-white/85 shadow-sm transition duration-300 group-hover:scale-105"
                        style={{
                          color: service.accent,
                          borderColor: `${service.accent}40`,
                        }}
                      >
                        <Icon size={34} strokeWidth={1.2} />
                      </div>

                      <span className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.17em] text-[#927B60]">
                        {service.number} / 06
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <span
                        className="text-[9px] font-medium uppercase tracking-[0.16em]"
                        style={{ color: service.accent }}
                      >
                        Sharp Rays / Digital Services
                      </span>

                      <h3 className="mt-3 font-[var(--font-new-york)] text-[22px] leading-[1.3] text-[#0B2A52]">
                        {service.title}
                      </h3>

                      <p className="mt-3 font-[var(--font-new-york)] text-[16px] leading-[1.5] text-[#A18461]">
                        {service.headline}
                      </p>

                      <p className="mt-4 text-[12px] leading-[1.9] text-[#718092]">
                        {service.description}
                      </p>

                      <div className="mt-5 grid gap-3 border-t border-[#EEE6DC] pt-5">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-2 text-[11px] leading-[1.8] text-[#536A7D]"
                          >
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0"
                              style={{ color: service.accent }}
                            />
                            {point}
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto mt-6 border-t border-[#EEE6DC] pt-5">
                        <p className="text-[11px] leading-[1.8] text-[#7E8C98]">
                          <span className="font-medium text-[#0B2A52]">
                            Suitable for:
                          </span>{" "}
                          {service.best}
                        </p>
                      </div>
                    </div>
                  </article>
                </Rise>
              );
            })}
          </div>

          <Rise>
            <div className="mt-12 flex justify-center">
              <Link
                href="/services"
                title="Explore All Sharp Rays Services"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0B2A52] px-8 text-[12px] font-medium text-white transition duration-300 hover:bg-[#163D69]"
              >
                Explore All Services
                <ArrowUpRight
                  size={16}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Rise>
        </div>
      </section>

      {/* =================================================
          05. LOCAL AREAS
      ================================================= */}

      <section
        className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-areas-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise className="max-w-[810px]">
            <Eyebrow>Local Relevance</Eyebrow>

            <Heading id="naigaon-areas-heading">
              Digital Marketing Around{" "}
              <span className="text-[#B79A72]">
                Naigaon and Nearby Areas.
              </span>
            </Heading>

            <p className="mt-5 max-w-[730px] text-[13px] leading-[1.95] text-[#708092]">
              Naigaon is not one uniform business market. The
              requirements of a local shop, a service provider and
              a business connected to a new residential development
              can differ. Our location-focused approach considers
              these differences when planning digital solutions.
            </p>
          </Rise>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <Rise key={area.title} delay={index * 0.06}>
                  <article className="flex h-full flex-col rounded-[16px] border border-[#E8DED0] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CBB292] hover:shadow-[0_15px_38px_-30px_rgba(11,42,82,.26)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4D6C5] bg-white text-[#B79A72]">
                      <Icon size={21} strokeWidth={1.4} />
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-[23px]">
                      {area.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[12px] leading-[1.9] text-[#718092]">
                      {area.description}
                    </p>

                    <div className="mt-6 border-t border-[#E6DACD] pt-4">
                      <span className="text-[10px] text-[#9B7C57]">
                        {area.tag}
                      </span>
                    </div>
                  </article>
                </Rise>
              );
            })}
          </div>

          <Rise>
            <div className="mt-10 rounded-[16px] border border-[#E8DED0] bg-[#F8F5EF] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Eyebrow>Our Location Strategy</Eyebrow>

                  <h3 className="mt-4 font-[var(--font-new-york)] text-[22px] sm:text-[26px]">
                    One local area. Different business needs.
                  </h3>

                  <p className="mt-2 max-w-[650px] text-[12px] leading-[1.9] text-[#718092]">
                    We use relevant location context to plan website
                    content, service information and search visibility
                    without treating every locality as identical.
                  </p>
                </div>

                <MapPin
                  size={36}
                  strokeWidth={1}
                  className="shrink-0 text-[#B79A72]"
                />
              </div>
            </div>
          </Rise>
        </div>
      </section>

      {/* =================================================
          06. WEBSITE PRICING
      ================================================= */}

      <section
        className="bg-[#F9F7F3] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-pricing-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise className="mx-auto max-w-[800px] text-center">
            <Eyebrow center>Transparent Website Pricing</Eyebrow>

            <Heading center id="naigaon-pricing-heading">
              Website Packages With{" "}
              <span className="text-[#B79A72]">
                Clear Starting Options.
              </span>
            </Heading>

            <p className="mt-5 text-[13px] leading-[1.95] text-[#708092]">
              Planning a website for your Naigaon business? Explore
              the published website pricing options from Sharp Rays
              and choose according to your project requirements.
            </p>
          </Rise>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {["₹14,999", "₹24,999", "₹39,999"].map((price, index) => (
              <Rise key={price} delay={index * 0.08}>
                <article
                  className={`flex h-full flex-col rounded-[17px] border p-7 sm:p-8 ${
                    index === 1
                      ? "border-[#B79A72] bg-white shadow-[0_18px_45px_-35px_rgba(11,42,82,.35)]"
                      : "border-[#E8DED0] bg-[#FCFAF7]"
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#A38561]">
                    Website Option 0{index + 1}
                  </span>

                  <p className="mt-7 font-[var(--font-new-york)] text-[37px] leading-none tracking-[-0.04em] sm:text-[42px]">
                    {price}
                  </p>

                  <p className="mt-4 text-[12px] leading-[1.9] text-[#718092]">
                    Explore the website package inclusions and
                    determine which option matches your website
                    requirements.
                  </p>

                  <div className="mt-auto pt-8">
                    <Link
                      href="/pricing"
                      title={`View website pricing for ${price}`}
                      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-[12px] transition ${
                        index === 1
                          ? "bg-[#0B2A52] text-white hover:bg-[#163D69]"
                          : "border border-[#DDCDB9] bg-white text-[#0B2A52] hover:border-[#B79A72]"
                      }`}
                    >
                      View Package Details
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              </Rise>
            ))}
          </div>

          <Rise>
            <p className="mt-7 text-center text-[11px] leading-[1.8] text-[#87929D]">
              These are the published website pricing options. Please
              review the pricing page for package scope, deliverables
              and applicable terms.
            </p>
          </Rise>
        </div>
      </section>

      {/* =================================================
          07. WORKING PROCESS
      ================================================= */}

      <section
        className="bg-white px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-process-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise>
            <Eyebrow>How We Approach Your Project</Eyebrow>

            <Heading id="naigaon-process-heading">
              From Business Requirements to{" "}
              <span className="text-[#B79A72]">
                a Clear Digital Plan.
              </span>
            </Heading>

            <p className="mt-5 max-w-[680px] text-[13px] leading-[1.9] text-[#718092]">
              Every business has different priorities. We start by
              understanding your requirements before recommending
              a suitable combination of digital services.
            </p>
          </Rise>

          <div className="mt-12 grid gap-8 border-t border-[#E1D6C7] md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {process.map((item, index) => (
              <Rise key={item.number} delay={index * 0.06}>
                <article className="py-7">
                  <span className="font-[var(--font-new-york)] text-[34px] text-[#B79A72]">
                    {item.number}
                  </span>

                  <h3 className="mt-6 font-[var(--font-new-york)] text-[23px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-[1.9] text-[#708092]">
                    {item.description}
                  </p>

                  <div className="mt-7 border-t border-[#E2D8CA] pt-4 text-[10px] text-[#9D805C]">
                    {item.output}
                  </div>
                </article>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          08. INTERNAL LINKS
      ================================================= */}

      <section
        className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-24"
        aria-labelledby="naigaon-related-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise>
            <Eyebrow>Explore More From Sharp Rays</Eyebrow>

            <Heading id="naigaon-related-heading">
              Continue Exploring Our{" "}
              <span className="text-[#B79A72]">
                Digital Marketing Services.
              </span>
            </Heading>
          </Rise>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Rise>
              <div className="rounded-[16px] border border-[#E8DED0] bg-white p-6 sm:p-8">
                <span className="text-[10px] uppercase tracking-[0.17em] text-[#A38561]">
                  Explore Services
                </span>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      name: "Search Engine Optimization",
                      href: "/services/search-engine-optimization",
                    },
                    {
                      name: "Website Development",
                      href: "/services/website-development",
                    },
                    {
                      name: "Social Media Marketing",
                      href: "/services/social-media-marketing",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      title={`Explore ${item.name} services from Sharp Rays`}
                      className="group flex items-center justify-between gap-3 border-b border-[#EEE6DC] pb-4 text-[12px] text-[#536A7D] transition hover:text-[#A18461]"
                    >
                      {item.name}
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-[#B79A72]"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </Rise>

            <Rise delay={0.1}>
              <div className="rounded-[16px] border border-[#E8DED0] bg-white p-6 sm:p-8">
                <span className="text-[10px] uppercase tracking-[0.17em] text-[#A38561]">
                  Nearby Location Pages
                </span>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      name: "Digital Marketing in Bhayandar",
                      href: "/locations/bhayandar",
                    },
                    {
                      name: "Digital Marketing in Vasai Road",
                      href: "/locations/vasai-road",
                    },
                    {
                      name: "Explore All Locations",
                      href: "/locations",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      title={`Explore ${item.name} with Sharp Rays`}
                      className="group flex items-center justify-between gap-3 border-b border-[#EEE6DC] pb-4 text-[12px] text-[#536A7D] transition hover:text-[#A18461]"
                    >
                      {item.name}
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-[#B79A72]"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </Rise>
          </div>
        </div>
      </section>

   
      {/* =================================================
          09. FAQ
      ================================================= */}

      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise className="mx-auto max-w-[800px] text-center">
            <Eyebrow center>Questions Before You Start</Eyebrow>

            <Heading center id="naigaon-faq-heading">
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </Heading>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Useful information about SEO, website development,
              social media marketing and digital marketing services
              around Naigaon.
            </p>
          </Rise>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Rise key={faq.question}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] text-[#122847] sm:text-[21px]">
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


      {/* =================================================
          10. FINAL CTA
      ================================================= */}

      <section
        className="bg-white px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-final-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Rise>
            <div className="relative overflow-hidden rounded-[20px] border border-[#E4D5C1] bg-[#F7F1E9]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-36 -top-48 h-[520px] w-[520px] rounded-full border border-[#D8C2A4]/60"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-28 h-[360px] w-[360px] rounded-full border border-[#D8C2A4]/40"
              />

              <div className="relative grid gap-9 p-7 sm:p-11 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14 lg:p-14">
                <div>
                  <Eyebrow>
                    Let's Discuss Your Business Goals
                  </Eyebrow>

                  <h2
                    id="naigaon-final-heading"
                    className="mt-5 max-w-[750px] font-[var(--font-new-york)] text-[30px] leading-[1.17] tracking-[-0.035em] sm:text-[39px] lg:text-[44px]"
                  >
                    Looking for a Digital Marketing Agency in{" "}
                    <span className="text-[#B79A72]">Naigaon?</span>
                  </h2>

                  <p className="mt-6 max-w-[680px] text-[13px] leading-[1.95] text-[#62778A]">
                    Whether you need better Google visibility, a
                    professional website or a more consistent social
                    media presence, start with a conversation about
                    your business and the improvements you want to
                    explore.
                  </p>
                </div>

                <div className="border-t border-[#DCCBB5] pt-7 lg:border-l lg:border-t-0 lg:pl-11">
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
                      title="Request a Free Digital Marketing Audit"
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0B2A52] px-5 text-center text-[12px] text-white transition hover:bg-[#173E6D]"
                    >
                      Request a Free Audit
                      <ArrowUpRight size={16} />
                    </Link>

                    <Link
                      href="/contact?source=naigaon-location"
                      title="Contact Sharp Rays About Naigaon Services"
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#D9C6AE] bg-white px-5 text-[12px] transition hover:border-[#B79A72]"
                    >
                      Contact Sharp Rays
                      <ArrowRight size={16} className="text-[#B79A72}" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative border-t border-[#E1D4C3] px-7 py-4 text-[10px] tracking-[0.12em] text-[#9A815F] sm:px-11 lg:px-14">
                SHARP RAYS — WE CREATE THE "OH, WOW."!
              </div>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  );
}