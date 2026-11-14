"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Target,
  MousePointerClick,
  BarChart3,
  Search,
  Users,
  RefreshCw,
  ChartNoAxesCombined,
  Megaphone,
  Smartphone,
  Building2,
  ShoppingBag,
  Utensils,
  BriefcaseBusiness,
  GraduationCap,
  Stethoscope,
  Factory,
  Hotel,
  Home,
  Lightbulb,
  Settings2,
  LineChart,
  ClipboardList,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   SHARP RAYS — BHAYANDAR PERFORMANCE MARKETING

   Route:
   /locations/bhayandar/performance-marketing
========================================================= */

const CONTACT_URL = "/contact?service=performance-marketing";
const PRICING_URL = "/pricing";
const SERVICE_URL = "/services/performance-marketing";

const COLORS = {
  navy: "#122847",
  deepNavy: "#0B2A52",
  gold: "#C6A77A",
  ivory: "#FCFAF7",
  cream: "#F6F1E9",
  text: "#26364A",
  muted: "#718096",
  border: "#E9E2D8",
};

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-[#C6A77A]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9B805B]">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-[#C6A77A]" />
      </div>

      <h2 className="font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#718096] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   BUTTONS
========================================================= */

function PrimaryButton({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      title={title}
      className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(18,40,71,0.13)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B2A52]"
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

function SecondaryButton({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      title={title}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCD3C6] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#122847] transition-all hover:border-[#C6A77A] hover:bg-white"
    >
      {children}
      <ArrowRight size={15} />
    </Link>
  );
}

/* =========================================================
   PERFORMANCE MARKETING SERVICES
========================================================= */

const marketingServices: {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  accent: string;
  tint: string;
  features: string[];
}[] = [
  {
    icon: Search,
    title: "Google Ads",
    description:
      "Reach people actively searching for products and services through relevant Google advertising campaigns.",
    tag: "SEARCH ADVERTISING",
    accent: "#668AA5",
    tint: "#EEF3F8",
    features: [
      "Search campaign planning",
      "Keyword and audience research",
      "Ad copy development",
    ],
  },
  {
    icon: Smartphone,
    title: "Meta Ads",
    description:
      "Build advertising campaigns across Facebook and Instagram to introduce your business to relevant audiences.",
    tag: "SOCIAL ADVERTISING",
    accent: "#8E79AE",
    tint: "#F2EFF8",
    features: [
      "Facebook and Instagram campaigns",
      "Audience targeting",
      "Creative and ad messaging",
    ],
  },
  {
    icon: Target,
    title: "Lead Generation Campaigns",
    description:
      "Plan campaigns around relevant enquiries and make it easier for interested customers to connect with your business.",
    tag: "ENQUIRY GENERATION",
    accent: "#AD728C",
    tint: "#F7EFF1",
    features: [
      "Lead campaign planning",
      "Enquiry-focused messaging",
      "Lead journey considerations",
    ],
  },
  {
    icon: RefreshCw,
    title: "Remarketing Campaigns",
    description:
      "Reconnect with eligible audiences who have previously interacted with your website, content or advertising.",
    tag: "AUDIENCE RETARGETING",
    accent: "#609286",
    tint: "#EDF5F1",
    features: [
      "Audience segmentation",
      "Remarketing strategy",
      "Follow-up campaign planning",
    ],
  },
  {
    icon: BarChart3,
    title: "Campaign Optimisation",
    description:
      "Review campaign performance and make informed adjustments to targeting, creative, budgets and campaign structure.",
    tag: "ONGOING IMPROVEMENT",
    accent: "#AD895D",
    tint: "#F8F1E8",
    features: [
      "Campaign performance reviews",
      "Ad and audience adjustments",
      "Budget allocation considerations",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Tracking & Reporting",
    description:
      "Understand campaign activity through relevant tracking, conversion measurement and performance reporting.",
    tag: "MEASUREMENT",
    accent: "#668A72",
    tint: "#EDF4EE",
    features: [
      "Conversion tracking planning",
      "Campaign reporting",
      "Performance observations",
    ],
  },
];

/* =========================================================
   CAMPAIGN PLATFORMS
========================================================= */

const platforms = [
  {
    name: "Google Search Ads",
    description:
      "Connect with people searching for relevant products, services and solutions.",
    label: "SEARCH INTENT",
    accent: "#668AA5",
  },
  {
    name: "Google Display Ads",
    description:
      "Use visual advertising placements to support awareness and remarketing objectives.",
    label: "VISUAL REACH",
    accent: "#AD895D",
  },
  {
    name: "Facebook Ads",
    description:
      "Introduce products, services and offers to relevant Facebook audiences.",
    label: "AUDIENCE DISCOVERY",
    accent: "#668A72",
  },
  {
    name: "Instagram Ads",
    description:
      "Use image, video and story-based advertising to communicate with Instagram audiences.",
    label: "SOCIAL DISCOVERY",
    accent: "#AD728C",
  },
];

/* =========================================================
   LOCAL BUSINESS USE CASES
========================================================= */

const localUseCases: {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
}[] = [
  {
    icon: ShoppingBag,
    title: "Retail & Local Shops",
    description:
      "Promote selected products, seasonal offers, new collections and store enquiries through relevant paid campaigns.",
    accent: "#AD895D",
  },
  {
    icon: Home,
    title: "Real Estate Businesses",
    description:
      "Promote property projects, site visits, property information and relevant buyer or investor enquiries.",
    accent: "#668AA5",
  },
  {
    icon: Hotel,
    title: "Hospitality & Resorts",
    description:
      "Advertise accommodation, dining experiences, events and hospitality offerings to suitable audiences.",
    accent: "#609286",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    description:
      "Communicate product capabilities, business offerings and enquiry opportunities to relevant professional audiences.",
    accent: "#8E79AE",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Property campaigns, project promotion and site-visit enquiries.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "Product promotion, seasonal campaigns and online shopping journeys.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Food",
    description:
      "Restaurant discovery, menu promotions and local customer campaigns.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    description:
      "Relevant service awareness and appointment enquiry campaigns.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Course promotion, admissions communication and student enquiries.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Service promotion and enquiries from relevant business audiences.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Product visibility and business-to-business enquiry campaigns.",
  },
  {
    icon: Building2,
    title: "Startups & Businesses",
    description:
      "Product launches, audience discovery and customer acquisition campaigns.",
  },
];

/* =========================================================
   CAMPAIGN PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We understand your services, target audience, business goals, existing marketing activity and campaign requirements.",
  },
  {
    number: "02",
    title: "Research & strategy",
    description:
      "We review relevant platforms, audience intent, campaign opportunities, messaging and the proposed advertising approach.",
  },
  {
    number: "03",
    title: "Campaign setup",
    description:
      "We plan campaign structure, targeting, ad messaging, creative requirements and relevant tracking considerations.",
  },
  {
    number: "04",
    title: "Launch & optimisation",
    description:
      "Campaigns are monitored and reviewed so that suitable adjustments can be made based on available performance data.",
  },
  {
    number: "05",
    title: "Reporting & review",
    description:
      "We review campaign activity, discuss observations and identify practical next steps for ongoing improvement.",
  },
];

/* =========================================================
   CAMPAIGN MEASUREMENT
========================================================= */

const measurementItems = [
  {
    icon: MousePointerClick,
    title: "Clicks & Engagement",
    description:
      "Understand how people interact with your advertisements and campaign messages.",
  },
  {
    icon: Users,
    title: "Audience Response",
    description:
      "Review audience reach, targeting and engagement across campaign platforms.",
  },
  {
    icon: MessageCircle,
    title: "Enquiries & Leads",
    description:
      "Monitor relevant enquiries and lead actions where suitable tracking is available.",
  },
  {
    icon: LineChart,
    title: "Campaign Trends",
    description:
      "Review campaign performance over time to identify areas for improvement.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a digital advertising approach focused on measurable campaign actions. These can include clicks, leads, enquiries, registrations, purchases and other defined conversion events.",
  },
  {
    question: "Does Sharp Rays provide performance marketing in Bhayandar?",
    answer:
      "Sharp Rays offers performance marketing services for businesses targeting Bhayandar and nearby areas. Campaign requirements can include Google Ads, Meta Ads, lead generation, remarketing, optimisation and performance reporting.",
  },
  {
    question: "Which advertising platforms do you work with?",
    answer:
      "Campaigns can be planned for platforms such as Google Ads, Facebook and Instagram Ads. The suitable platform depends on your audience, business offering, campaign objective and available budget.",
  },
  {
    question: "Do you provide Google Ads management?",
    answer:
      "Yes. Google Ads campaign services can include search campaign planning, keyword research, ad messaging, campaign setup, optimisation and performance reviews.",
  },
  {
    question: "Do you manage Facebook and Instagram Ads?",
    answer:
      "Yes. Meta advertising campaigns can be planned for Facebook and Instagram, including audience targeting, campaign structure, creative requirements and performance reviews.",
  },
  {
    question: "Can performance marketing generate leads for local businesses?",
    answer:
      "Paid campaigns can help local businesses reach relevant audiences and generate enquiries. Actual results depend on the offer, audience, competition, advertising budget, landing page experience and campaign execution.",
  },
  {
    question: "Do I need a website to run advertising campaigns?",
    answer:
      "Not every campaign requires a traditional website, but a suitable landing page or destination can help explain your offering and support enquiry generation. The recommended setup depends on the campaign objective.",
  },
  {
    question: "Is the advertising budget included in your service fee?",
    answer:
      "Advertising platform spend and agency service fees are separate considerations. The campaign budget and management scope should be discussed and agreed before a campaign begins.",
  },
  {
    question: "How do you measure campaign performance?",
    answer:
      "Performance can be reviewed through relevant metrics such as impressions, clicks, cost, enquiries, conversions and other campaign actions. Measurement depends on the tracking setup and campaign objective.",
  },
  {
    question: "How long does it take to see campaign results?",
    answer:
      "Campaign performance varies by industry, competition, audience, budget, offer and platform. Initial data can help guide optimisation, but no fixed result or timeline can be guaranteed.",
  },
  {
    question: "Can you manage campaigns for real estate businesses in Bhayandar?",
    answer:
      "Campaigns can be planned for real estate businesses promoting property projects, site visits and relevant enquiries. The strategy depends on the project, target audience and advertising requirements.",
  },
  {
    question: "How can I get started with Sharp Rays?",
    answer:
      "You can contact Sharp Rays with details about your business, target audience and campaign goals. We can discuss the requirements and the appropriate advertising approach.",
  },
];

/* =========================================================
   FAQ STRUCTURED DATA
========================================================= */

function BhayandarPerformanceMarketingStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function BhayandarPerformanceMarketingPageClient() {
  return (
    <>
      <BhayandarPerformanceMarketingStructuredData />

      {/* =================================================
          01. HERO
      ================================================= */}

      <section className="relative isolate overflow-hidden bg-[#F7F3EC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-52 -left-32 h-[420px] w-[420px] rounded-full bg-[#B9C8D9]/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DCCDB8] bg-white/70 px-4 py-2">
              <ChartNoAxesCombined size={14} className="text-[#A7834E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#826C4D]">
                Performance Marketing · Bhayandar
              </span>
            </div>

            <h1 className="max-w-2xl font-[var(--font-new-york)] text-[40px] leading-[1.1] tracking-[-0.045em] text-[#122847] sm:text-5xl lg:text-[60px]">
              Turn Advertising Into{" "}
              <span className="text-[#A7834E]">Measurable Growth.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#68778A] sm:text-base">
              Performance marketing services for businesses in Bhayandar.
              Plan Google Ads, Meta Ads and lead generation campaigns around
              your audience, business objectives and measurable actions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton
                href={CONTACT_URL}
                title="Contact Sharp Rays for performance marketing services in Bhayandar"
              >
                Discuss Your Campaign
              </PrimaryButton>

              <SecondaryButton
                href={PRICING_URL}
                title="Explore Sharp Rays service pricing and packages"
              >
                Explore Pricing
              </SecondaryButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-[#788596]">
              {[
                "Google & Meta Ads",
                "Lead generation strategy",
                "Campaign optimisation",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#A7834E]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-5 rounded-[38px] bg-gradient-to-br from-[#C6A77A]/25 via-white/30 to-[#AFC2D5]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[22px] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(18,40,71,0.12)]">
                <div className="relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[17px] bg-gradient-to-br from-[#102847] via-[#183B62] to-[#42617D] p-7 text-white sm:min-h-[440px] sm:p-9">
                  <div className="absolute -right-16 top-12 h-64 w-64 rounded-full border border-white/10" />
                  <div className="absolute -right-4 top-24 h-44 w-44 rounded-full border border-white/10" />
                  <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[#C6A77A]/20 blur-3xl" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      Campaign Studio
                    </span>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70">
                      Strategy + Data
                    </span>
                  </div>

                  <div className="relative">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md">
                      <Target size={36} strokeWidth={1.2} />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#DCC39F]">
                      Every click has a purpose
                    </p>

                    <h2 className="mt-4 max-w-sm font-[var(--font-new-york)] text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                      Plan Better.
                      <span className="block text-[#D8BD94]">
                        Measure Smarter.
                      </span>
                    </h2>

                    <div className="mt-8 grid grid-cols-3 gap-2">
                      {[
                        { label: "Strategy", icon: Lightbulb },
                        { label: "Campaigns", icon: Megaphone },
                        { label: "Insights", icon: BarChart3 },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.label}
                            className="rounded-xl border border-white/15 bg-white/[0.07] p-3 text-center"
                          >
                            <Icon
                              size={19}
                              className="mx-auto text-[#D8BD94]"
                            />
                            <p className="mt-2 text-[9px] text-white/65">
                              {item.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between border-t border-white/15 pt-5">
                    <span className="text-[10px] tracking-[0.18em] text-white/55">
                      SHARP RAYS
                    </span>
                    <span className="text-[10px] text-white/55">
                      We Create the “Oh, Wow.”!
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-[#E9E0D4] bg-white px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EFE5] text-[#A7834E]">
                    <LineChart size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#122847]">
                      Data-informed decisions
                    </p>
                    <p className="mt-1 text-[10px] text-[#8A96A5]">
                      Review · Learn · Optimise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          02. DIRECT ANSWER
      ================================================= */}

      <section className="relative bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A7834E]">
              A Measurable Advertising Approach
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight text-[#122847] sm:text-4xl">
              What is performance marketing?
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm leading-8 text-[#68778A] sm:text-base">
              Performance marketing is a digital advertising approach where
              campaigns are planned around measurable actions such as clicks,
              enquiries, leads, registrations or purchases. It uses campaign
              data to understand how advertising activity is performing
              against a defined objective.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#68778A] sm:text-base">
              Sharp Rays helps businesses targeting Bhayandar plan and manage
              paid advertising across relevant platforms. Campaign strategy
              considers your audience, offer, advertising budget, landing
              page experience and the actions you want potential customers to
              take.
            </p>

            <Link
              href={SERVICE_URL}
              title="Explore Sharp Rays performance marketing and paid media services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition-colors hover:text-[#A7834E]"
            >
              Explore our Performance Marketing service
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          03. ADVERTISING CHALLENGES
      ================================================= */}

      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="The Advertising Challenge"
              title={
                <>
                  Running ads is easy.
                  <br />
                  <span className="font-serif italic text-[#A88659]">
                    Making them meaningful takes strategy.
                  </span>
                </>
              }
              description="Paid advertising requires more than launching a campaign. Audience relevance, messaging, campaign structure and measurement all influence how effectively advertising supports a business objective."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Unclear campaign objectives",
                description:
                  "Without a defined goal, it becomes difficult to understand whether a campaign is supporting the business.",
              },
              {
                title: "Irrelevant audience targeting",
                description:
                  "Campaigns may reach people who are unlikely to need the product or service being advertised.",
              },
              {
                title: "Poor landing page experience",
                description:
                  "An unclear or difficult landing page can interrupt the journey from advertisement to enquiry.",
              },
              {
                title: "Creative fatigue",
                description:
                  "Repeated advertising messages may lose relevance when creative content is not reviewed and refreshed.",
              },
              {
                title: "Limited conversion visibility",
                description:
                  "Without suitable tracking, businesses may struggle to understand which campaign actions matter.",
              },
              {
                title: "Budget without direction",
                description:
                  "Advertising spend needs a considered allocation based on objectives, audience and available data.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                  <span className="text-xs font-semibold tracking-widest text-[#B79A72]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          04. OUR SERVICES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="What We Manage"
              title={
                <>
                  Paid campaigns built around{" "}
                  <span className="font-serif italic text-[#A88659]">
                    your objectives.
                  </span>
                </>
              }
              description="Explore performance marketing services designed to support audience discovery, lead generation, campaign management and ongoing measurement."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketingServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article
                    className="group h-full rounded-[20px] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,40,71,0.07)]"
                    style={{
                      borderColor: `${item.accent}45`,
                      backgroundColor: item.tint,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white"
                        style={{ color: item.accent }}
                      >
                        <Icon size={22} strokeWidth={1.6} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-[#A99A83] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p
                      className="mt-7 text-[9px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: item.accent }}
                    >
                      {item.tag}
                    </p>

                    <h3 className="mt-3 font-[var(--font-new-york)] text-2xl text-[#122847]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#718096]">
                      {item.description}
                    </p>

                    <ul className="mt-5 space-y-2.5 border-t border-[#122847]/10 pt-5">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-xs leading-6 text-[#536477]"
                        >
                          <Check
                            size={14}
                            className="mt-1 shrink-0"
                            style={{ color: item.accent }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          05. ADVERTISING PLATFORMS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Advertising Platforms"
              title={
                <>
                  Reach audiences where{" "}
                  <span className="font-serif italic text-[#A88659]">
                    decisions begin.
                  </span>
                </>
              }
              description="Different platforms serve different advertising objectives. We consider audience behaviour, search intent, creative requirements and campaign goals before recommending a suitable platform."
            />

            <div className="mt-8">
              <PrimaryButton
                href={CONTACT_URL}
                title="Discuss Google Ads and Meta Ads campaign options with Sharp Rays"
              >
                Discuss Advertising Platforms
              </PrimaryButton>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {platforms.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-[#EAE3D9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A77A]">
                  <div className="flex items-center justify-between">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                    <ArrowUpRight size={17} className="text-[#A99A83]" />
                  </div>

                  <p
                    className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: item.accent }}
                  >
                    {item.label}
                  </p>

                  <h3 className="mt-3 font-[var(--font-new-york)] text-xl text-[#122847]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-xs leading-7 text-[#788596]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          06. BHAYANDAR BUSINESS USE CASES
      ================================================= */}

      <section className="bg-[#F7F3EC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Local Business Relevance"
              title={
                <>
                  Advertising for{" "}
                  <span className="font-serif italic text-[#A88659]">
                    Bhayandar businesses.
                  </span>
                </>
              }
              description="Businesses around Bhayandar have different audiences, buying journeys and advertising requirements. Campaign planning should reflect what each business wants to promote and who it wants to reach."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {localUseCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="flex h-full gap-5 rounded-[20px] border border-[#E7DED1] bg-white p-6 sm:p-7">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        color: item.accent,
                      }}
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-xl text-[#122847]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-7 text-[#718096]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          07. INDUSTRIES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Work With"
              title={
                <>
                  Campaign strategies across{" "}
                  <span className="font-serif italic text-[#A88659]">
                    industries.
                  </span>
                </>
              }
              description="Performance marketing can support different business models. Campaign objectives, audience selection and messaging should be adapted to each industry's requirements."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="group h-full rounded-[18px] border border-[#EAE3D9] bg-[#FCFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6C2A5] hover:bg-white hover:shadow-lg hover:shadow-[#122847]/5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#A7834E]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#788596]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          08. CAMPAIGN MEASUREMENT
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Performance Measurement"
              title={
                <>
                  Understand what your{" "}
                  <span className="font-serif italic text-[#A88659]">
                    campaigns are doing.
                  </span>
                </>
              }
              description="Campaign reporting should connect advertising activity with the actions that matter to your business. The metrics we review depend on the campaign objective and tracking availability."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {measurementItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="h-full border-t-2 border-[#C6A77A] bg-white p-6 shadow-[0_12px_35px_-30px_rgba(18,40,71,.25)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EFE5] text-[#A7834E]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-7 text-[#788596]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          09. OUR APPROACH
      ================================================= */}

      <section className="relative overflow-hidden bg-[#122847] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6A77A]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B98E]">
                Our Approach
              </span>
            </div>

            <h2 className="max-w-xl font-[var(--font-new-york)] text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
              Advertising needs more than a budget.
              <span className="block text-[#D6B98E]">
                It needs direction.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/65">
              Effective campaign management begins with understanding the
              business objective. The audience, offer, platform, creative
              message and destination all influence how an advertising
              campaign should be planned.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-8 text-white/65">
              Sharp Rays approaches performance marketing through strategy,
              campaign execution, measurement and ongoing review. We focus on
              understanding campaign data rather than promising a particular
              advertising outcome.
            </p>

            <div className="mt-9">
              <PrimaryButton
                href={CONTACT_URL}
                title="Discuss a performance marketing strategy with Sharp Rays"
              >
                Discuss Your Marketing Goals
              </PrimaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: "Objective-led planning",
                  description:
                    "Define what the campaign should achieve before choosing its structure.",
                },
                {
                  icon: Users,
                  title: "Relevant audiences",
                  description:
                    "Consider audience needs, intent and platform behaviour.",
                },
                {
                  icon: Settings2,
                  title: "Structured execution",
                  description:
                    "Build campaigns around suitable targeting, messaging and tracking.",
                },
                {
                  icon: BarChart3,
                  title: "Continuous review",
                  description:
                    "Use available campaign data to identify practical improvements.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
                  >
                    <Icon size={23} className="text-[#D6B98E]" />

                    <h3 className="mt-5 text-base font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-white/55">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          10. CAMPAIGN PROCESS
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Our Campaign Workflow"
              title={
                <>
                  From campaign planning{" "}
                  <span className="font-serif italic text-[#A88659]">
                    to optimisation.
                  </span>
                </>
              }
              description="A structured workflow helps connect campaign objectives, execution and performance reviews."
              centered
            />
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-[#DED3C3] md:block" />

            <div className="space-y-4">
              {process.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.05}>
                  <article className="relative grid gap-5 rounded-[18px] border border-[#EAE3D9] bg-[#FCFAF7] p-6 sm:grid-cols-[75px_1fr] sm:items-center sm:p-7">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5EFE5] font-[var(--font-new-york)] text-lg text-[#A7834E]">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-2xl text-[#122847]">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-3xl text-sm leading-7 text-[#788596]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          11. PRICING
      ================================================= */}

      <section
        className="bg-[#F7F3EC] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-performance-pricing-heading"
      >
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[24px] border border-[#E7DCCB] bg-white p-8 shadow-[0_25px_70px_-55px_rgba(18,40,71,.25)] sm:p-12 lg:p-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C6A77A]/10 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-2xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A7834E]">
                    PERFORMANCE MARKETING PRICING
                  </p>

                  <h2
                    id="bhayandar-performance-pricing-heading"
                    className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl"
                  >
                    The right campaign scope starts with{" "}
                    <span className="text-[#A88659]">the right plan.</span>
                  </h2>

                  <p className="mt-5 text-sm leading-8 text-[#718096]">
                    Performance marketing requirements vary according to
                    advertising platforms, campaign objectives, management
                    scope and business requirements. Explore Sharp Rays'
                    pricing page for available packages and discuss the
                    suitable campaign scope with our team.
                  </p>

                  <p className="mt-4 text-xs leading-7 text-[#87929D]">
                    Advertising platform spend is separate from service
                    charges unless explicitly included in an agreed proposal.
                  </p>
                </div>

                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#E5D6C0] bg-[#FCFAF7] text-[#A7834E]">
                    <ClipboardList size={35} strokeWidth={1.3} />
                  </div>
                </div>
              </div>

              <div className="relative mt-9 flex flex-wrap gap-3 border-t border-[#EEE7DE] pt-8">
                <PrimaryButton
                  href={PRICING_URL}
                  title="Explore Sharp Rays pricing and service packages"
                >
                  Explore Pricing & Packages
                </PrimaryButton>

                <SecondaryButton
                  href={CONTACT_URL}
                  title="Contact Sharp Rays to discuss a performance marketing proposal"
                >
                  Request a Discussion
                </SecondaryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          12. FAQ
      ================================================= */}

      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-performance-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A7834E]">
              Questions Before You Start
            </p>

            <h2
              id="bhayandar-performance-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[44px]"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Learn more about performance marketing, Google Ads, Meta Ads,
              campaign management and paid advertising services in Bhayandar.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={(index % 2) * 0.04}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          13. FINAL CTA
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[1220px]">
          <div className="relative overflow-hidden rounded-[22px] bg-[#122847] px-7 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-[340px] w-[340px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -left-20 -bottom-40 h-[340px] w-[340px] rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-[720px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C6A77A]">
                Plan Your Next Campaign
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-3xl leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-[45px]">
                Ready to Give Your{" "}
                <span className="text-[#C6A77A]">
                  Advertising More Direction?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[580px] text-sm leading-8 text-white/65">
                Tell us about your business, your audience and what you want
                your advertising campaigns to achieve. Let's discuss a
                performance marketing approach that fits your requirements.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryButton
                  href={CONTACT_URL}
                  title="Contact Sharp Rays to discuss performance marketing in Bhayandar"
                >
                  Discuss Your Campaign
                </PrimaryButton>

                <Link
                  href="/locations/bhayandar"
                  title="Explore digital marketing services in Bhayandar"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-[#C6A77A] hover:text-[#C6A77A]"
                >
                  Explore Bhayandar
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =================================================
          14. INTERNAL LINKS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#E8DED1] pt-7 text-[10px] text-[#788594]">
          <Link
            href={SERVICE_URL}
            title="Explore Sharp Rays performance marketing and paid media services"
            className="transition-colors hover:text-[#A38561]"
          >
            Performance Marketing Services
          </Link>

          <Link
            href="/locations/bhayandar"
            title="Explore digital marketing services in Bhayandar"
            className="transition-colors hover:text-[#A38561]"
          >
            Bhayandar
          </Link>

          <Link
            href="/locations"
            title="Explore all Sharp Rays locations"
            className="transition-colors hover:text-[#A38561]"
          >
            All Locations
          </Link>

          <Link
            href="/services"
            title="Explore all Sharp Rays digital marketing services"
            className="transition-colors hover:text-[#A38561]"
          >
            All Services
          </Link>

          <Link
            href={PRICING_URL}
            title="Explore Sharp Rays pricing and packages"
            className="transition-colors hover:text-[#A38561]"
          >
            Pricing
          </Link>
        </div>
      </section>
    </>
  );
}