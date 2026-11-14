"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  ClipboardList,
  Crosshair,
  Gauge,
  Globe,
  LineChart,
  MapPin,
  Megaphone,
  MousePointerClick,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

const NAVY = "#122847";
const GOLD = "#C6A77A";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    number: "01",
    icon: Search,
    title: "Google Ads Management",
    description:
      "Reach people actively searching for products and services related to your business.",
    points: [
      "Search campaign planning",
      "Keyword and search-intent research",
      "Ad copy development",
      "Location and audience targeting",
      "Campaign structure and optimisation",
      "Conversion tracking where supported",
    ],
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Meta Ads Management",
    description:
      "Promote your business through paid advertising opportunities across Facebook and Instagram.",
    points: [
      "Campaign objective selection",
      "Audience research and targeting",
      "Facebook and Instagram campaigns",
      "Creative and copy direction",
      "Retargeting where suitable",
      "Performance analysis",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Lead Generation Campaigns",
    description:
      "Build campaigns that encourage relevant prospects to enquire about your products or services.",
    points: [
      "Lead campaign planning",
      "Audience segmentation",
      "Lead form strategy",
      "Landing page recommendations",
      "Enquiry journey improvements",
      "Lead tracking where configured",
    ],
  },
  {
    number: "04",
    icon: Crosshair,
    title: "Search Advertising",
    description:
      "Connect your business with people searching for relevant products, services and solutions.",
    points: [
      "Search keyword research",
      "Search-intent analysis",
      "Campaign and ad group structure",
      "Search ad copy",
      "Negative keyword planning",
      "Search-term reviews",
    ],
  },
  {
    number: "05",
    icon: Target,
    title: "Social Media Advertising",
    description:
      "Use paid social campaigns to introduce your brand, promote offers and reach relevant audiences.",
    points: [
      "Facebook advertising",
      "Instagram advertising",
      "Creative direction",
      "Audience selection",
      "Campaign testing",
      "Retargeting where appropriate",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Remarketing & Retargeting",
    description:
      "Reconnect with eligible audiences who have previously interacted with your website or advertising.",
    points: [
      "Audience planning",
      "Website visitor audiences where permitted",
      "Campaign creative direction",
      "Audience exclusions",
      "Frequency monitoring",
      "Performance reviews",
    ],
  },
  {
    number: "07",
    icon: MousePointerClick,
    title: "Landing Page Optimisation",
    description:
      "Make the journey from advertisement to enquiry clearer, more relevant and easier to follow.",
    points: [
      "Landing page structure recommendations",
      "Headline and message alignment",
      "CTA placement",
      "Form improvement suggestions",
      "Mobile experience review",
      "Conversion journey analysis",
    ],
  },
  {
    number: "08",
    icon: BarChart3,
    title: "Campaign Analytics & Reporting",
    description:
      "Understand how campaigns perform and identify opportunities for informed improvements.",
    points: [
      "Clicks and impressions",
      "Click-through rate",
      "Cost per click",
      "Leads and conversions",
      "Cost per acquisition where measurable",
      "Campaign and audience analysis",
    ],
  },
];

const industries = [
  {
    title: "Real Estate",
    description:
      "Property enquiries, project promotion, location-focused campaigns and lead generation.",
    icon: MapPin,
  },
  {
    title: "Healthcare",
    description:
      "Service awareness and appointment enquiries, subject to applicable advertising and privacy policies.",
    icon: ShieldCheck,
  },
  {
    title: "Education",
    description:
      "Admission enquiries, course promotion, location targeting and enquiry tracking.",
    icon: ClipboardList,
  },
  {
    title: "Retail & Ecommerce",
    description:
      "Product promotion, sales-focused campaigns, catalogue opportunities and remarketing.",
    icon: Wallet,
  },
  {
    title: "Manufacturing & B2B",
    description:
      "Industrial product campaigns, relevant buyer targeting, RFQ pages and business enquiries.",
    icon: Settings2,
  },
  {
    title: "Beauty & Wellness",
    description:
      "Service promotions, appointment enquiries, local audience targeting and seasonal offers.",
    icon: Zap,
  },
  {
    title: "Restaurants & Hospitality",
    description:
      "Local awareness, menu promotion, experience-led campaigns and reservation enquiries.",
    icon: Globe,
  },
  {
    title: "Professional Services",
    description:
      "Consultation enquiries, service-specific campaigns and relevant search advertising.",
    icon: TrendingUp,
  },
];

const platforms = [
  {
    name: "Google Ads",
    tag: "Search intent",
    description:
      "Reach people actively looking for a product, service or solution.",
    examples: ["Service enquiries", "Product searches", "Local discovery"],
    icon: Search,
  },
  {
    name: "Facebook Ads",
    tag: "Audience reach",
    description:
      "Introduce your business to relevant audiences through visual and lead-focused campaigns.",
    examples: ["Local promotion", "Lead generation", "Remarketing"],
    icon: Users,
  },
  {
    name: "Instagram Ads",
    tag: "Visual discovery",
    description:
      "Use creative-led advertising to communicate products, services and brand experiences.",
    examples: ["Product promotion", "Reels advertising", "Brand discovery"],
    icon: Megaphone,
  },
  {
    name: "YouTube Ads",
    tag: "Video reach",
    description:
      "Use video advertising to introduce your brand, demonstrate products or explain services.",
    examples: ["Brand awareness", "Product demonstrations", "Service introductions"],
    icon: Globe,
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We learn about your products or services, target customers, market and business objectives.",
  },
  {
    number: "02",
    title: "Define Campaign Goals",
    description:
      "We identify the intended outcomes, such as enquiries, calls, purchases, website visits or awareness.",
  },
  {
    number: "03",
    title: "Research Your Audience",
    description:
      "We assess audience intent, relevant keywords, locations, competitors and campaign opportunities.",
  },
  {
    number: "04",
    title: "Plan the Campaign",
    description:
      "We develop the advertising structure, targeting approach, budget allocation and creative direction.",
  },
  {
    number: "05",
    title: "Prepare Ads & Landing Pages",
    description:
      "We align ad messaging, creative assets and landing page content with the campaign objective.",
  },
  {
    number: "06",
    title: "Launch & Monitor",
    description:
      "We review campaign delivery, clicks, audience response, conversions and available tracking data.",
  },
  {
    number: "07",
    title: "Optimise & Improve",
    description:
      "We use campaign observations to refine targeting, creatives, search terms, landing pages and budget allocation.",
  },
];

const campaignFactors = [
  {
    title: "Clear campaign objectives",
    description:
      "Define whether the campaign is intended to generate leads, sales, calls, bookings or website visits.",
    icon: Target,
  },
  {
    title: "Relevant audience targeting",
    description:
      "Focus on people whose needs and interests align with your products or services.",
    icon: Users,
  },
  {
    title: "Strong advertising creatives",
    description:
      "Use relevant messaging and visuals that explain the value of your offering.",
    icon: Megaphone,
  },
  {
    title: "Relevant landing pages",
    description:
      "Ensure the page matches the advertisement and makes the next step easy to understand.",
    icon: MousePointerClick,
  },
  {
    title: "Accurate conversion tracking",
    description:
      "Configure suitable tracking so important actions can be measured where supported.",
    icon: Gauge,
  },
  {
    title: "Continuous optimisation",
    description:
      "Review available data and make informed adjustments instead of leaving campaigns unattended.",
    icon: LineChart,
  },
];

const faqs = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing is a form of digital advertising where campaigns are planned around measurable actions such as leads, enquiries, purchases, calls or website visits. It can include Google Ads, Meta Ads, paid social campaigns, remarketing and conversion tracking.",
  },
  {
    question: "Do you provide performance marketing services in Mira Road?",
    answer:
      "Yes. Sharp Rays offers performance marketing services for businesses targeting customers in Mira Road and nearby areas. Campaigns can include Google Ads, Facebook Ads, Instagram Ads, lead generation and paid advertising strategy.",
  },
  {
    question: "What platforms do you use for performance marketing?",
    answer:
      "Depending on your audience and business objectives, campaigns can be planned across Google Ads, Facebook Ads, Instagram Ads and YouTube Ads. The right platform mix depends on where your potential customers spend time and how they search for your products or services.",
  },
  {
    question: "Do you provide Google Ads management in Mira Road?",
    answer:
      "Yes. Google Ads management can include keyword research, search campaign planning, ad copy, audience and location targeting, conversion tracking and campaign optimisation.",
  },
  {
    question: "Can you run Facebook and Instagram Ads?",
    answer:
      "Yes. Facebook and Instagram advertising can help businesses promote their services, products, offers and brand through audience-focused campaigns, lead generation ads, creative campaigns and remarketing.",
  },
  {
    question: "Can performance marketing help generate business enquiries?",
    answer:
      "Performance marketing campaigns can be designed to encourage enquiries, calls, form submissions and other relevant actions. Actual lead volume and quality depend on factors such as the offer, audience, advertising budget, competition and landing page experience.",
  },
  {
    question: "Is performance marketing suitable for small businesses?",
    answer:
      "Yes. Small businesses can use paid advertising when campaigns are planned around realistic objectives, suitable audiences and an appropriate budget. Starting with a focused campaign can help businesses understand their advertising opportunities.",
  },
  {
    question: "Can real estate businesses in Mira Road use performance marketing?",
    answer:
      "Yes. Real estate businesses can use paid campaigns to promote projects, properties and relevant offers to potential buyers. Campaigns should use accurate property information, appropriate targeting and a clear enquiry journey.",
  },
  {
    question: "Can manufacturers and B2B companies use paid advertising?",
    answer:
      "Yes. Search advertising and suitable lead-generation campaigns can help manufacturers and B2B companies reach potential buyers searching for specific products, industrial services or suppliers.",
  },
  {
    question: "Do I need a website to run performance marketing campaigns?",
    answer:
      "A website or dedicated landing page is often useful because it gives visitors more information about your offer and provides a clear way to enquire. The best destination depends on the campaign objective and advertising platform.",
  },
  {
    question: "Is advertising spend included in your management charges?",
    answer:
      "Advertising platform spend and campaign management charges are separate cost components unless a particular package explicitly states otherwise. The advertising budget and management scope should be confirmed before the campaign begins.",
  },
  {
    question: "How long does it take to see performance marketing results?",
    answer:
      "Campaigns can begin collecting data after launch, but meaningful evaluation requires sufficient information about audience response and conversions. The timeline depends on campaign budget, competition, targeting, offer and conversion volume.",
  },
  {
    question: "Do you guarantee leads or sales?",
    answer:
      "No responsible advertising agency can guarantee a fixed number of leads or sales. Campaign outcomes depend on several factors, including market demand, competition, budget, creative quality, audience targeting and the business offering.",
  },
  {
    question: "How much does performance marketing cost in Mira Road?",
    answer:
      "Sharp Rays has published performance marketing pricing options of ₹14,999, ₹24,999 and ₹39,999. Visit the pricing page to review the current package details. Advertising platform spend should be clarified separately.",
  },
  {
    question: "How can I get started with Sharp Rays?",
    answer:
      "You can contact Sharp Rays with your business details, website and advertising objectives. We can understand your requirements and discuss a suitable performance marketing approach for your business.",
  },
];

const pricingPlans = [
  {
    name: "Plan 1",
    price: "₹14,999",
    description: "Explore the entry-level option for your campaign requirements.",
  },
  {
    name: "Plan 2",
    price: "₹24,999",
    description: "Explore the next option for a broader campaign scope.",
    featured: true,
  },
  {
    name: "Plan 3",
    price: "₹39,999",
    description: "Explore the higher-tier option for your advertising requirements.",
  },
];

const relatedServices = [
  {
    title: "Search Engine Optimization",
    description: "Build organic visibility through search-focused improvements.",
    href: "/services/search-engine-optimization",
  },
  {
    title: "Website Development",
    description: "Create a clear website experience for visitors and enquiries.",
    href: "/services/website-development",
  },
  {
    title: "Social Media Marketing",
    description: "Build a consistent presence through strategic social content.",
    href: "/services/social-media-marketing",
  },
  {
    title: "AI Video & Creative",
    description: "Develop creative assets and video content for digital campaigns.",
    href: "/locations/mira-road/ai-video-and-creative",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-[46px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-[#667085] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function MiraRoadPerformanceMarketingClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#122847]">
      {/* HERO */}
      <section className="relative isolate px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-[#E8DCCB]/35 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[360px] w-[360px] rounded-full bg-[#DDE6EF]/60 blur-3xl" />

        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C704C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C6A77A]" />
              Performance Marketing / Paid Media
            </div>

            <h1 className="mt-7 max-w-[720px] text-[42px] font-medium leading-[1.08] tracking-[-0.055em] text-[#122847] sm:text-5xl lg:text-[64px]">
              Performance Marketing in{" "}
              <span className="font-serif italic font-normal text-[#A88659]">
                Mira Road
              </span>{" "}
              That Focuses on Business Growth
            </h1>

            <p className="mt-7 max-w-[610px] text-base leading-8 text-[#667085] sm:text-lg">
              Reach the right audience with targeted digital advertising
              campaigns designed around your business objectives.
            </p>

            <p className="mt-4 max-w-[610px] text-sm leading-7 text-[#718092]">
              Sharp Rays helps businesses plan, launch and optimise paid
              campaigns across Google and social media platforms. We focus on
              campaign strategy, audience targeting, creative communication
              and measurable performance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#203B5D]"
              >
                Discuss Your Advertising Goals
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <a
  href="#performance-services"
  title="Jump to Performance Marketing Services"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D9D5CE] bg-white/70 px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#C6A77A]"
>
  Explore Our Services
  <ArrowDown size={16} />
</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#718092]">
              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Goal-led campaign planning
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Audience-focused advertising
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Performance measurement
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-5 rounded-[38px] bg-gradient-to-br from-[#E9DFD1] via-[#F7F3EC] to-[#DCE5EF] opacity-80 blur-xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-5 shadow-[0_24px_80px_rgba(18,40,71,0.10)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#ECE9E3] pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A88659]">
                      Campaign overview
                    </p>
                    <p className="mt-1 text-lg font-medium text-[#122847]">
                      A clearer path to action
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#F5F1EA] p-3 text-[#A88659]">
                    <BarChart3 size={23} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: "Campaign goal", value: "Enquiries", icon: Target },
                    { label: "Audience", value: "Relevant users", icon: Users },
                    { label: "Ad destination", value: "Landing page", icon: Globe },
                    { label: "Measurement", value: "Conversions", icon: Gauge },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-[#ECE9E3] bg-[#FCFBF9] p-4"
                      >
                        <Icon size={18} className="text-[#A88659]" />
                        <p className="mt-4 text-[11px] text-[#87909D]">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-[#122847]">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl bg-[#F4F6F8] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#122847]">
                      Campaign optimisation
                    </p>
                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-[#8A704F]">
                      Ongoing process
                    </span>
                  </div>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Audience relevance", "Targeting review"],
                      ["Creative direction", "Message alignment"],
                      ["Conversion journey", "Landing page review"],
                    ].map(([label, detail], index) => (
                      <div key={label}>
                        <div className="flex items-center justify-between gap-3 text-xs">
                          <span className="font-medium text-[#34445B]">
                            {label}
                          </span>
                          <span className="text-[#87909D]">{detail}</span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E4E8EC]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#C6A77A] to-[#D9C6A9]"
                            style={{ width: `${88 - index * 13}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-[10px] leading-5 text-[#9299A3]">
                  Illustrative campaign-planning visual. Not actual campaign
                  performance data or client results.
                </p>
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white bg-white px-5 py-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#F4F0E9] p-2.5 text-[#A88659]">
                    <Crosshair size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#122847]">
                      Strategy before spending
                    </p>
                    <p className="mt-1 text-[10px] text-[#89919D]">
                      Start with the objective
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="border-y border-[#EEE9E1] bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88659]">
              A simple explanation
            </p>
            <h2 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-3xl">
              What does a performance marketing agency in Mira Road do?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-8 text-[#667085]">
              A performance marketing agency in Mira Road plans and manages
              paid digital advertising campaigns to help businesses reach
              relevant audiences and generate measurable actions such as
              enquiries, leads, website visits or sales. Sharp Rays focuses on
              campaign planning, audience targeting, ad creatives, conversion
              tracking and ongoing optimisation across suitable advertising
              platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Before you spend"
              title="Running advertisements is easy. Making them meaningful takes a plan."
              description="Campaign success depends on more than switching on an advertisement. It requires the right audience, a relevant offer, a clear destination and a way to understand what happens next."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wrong audience",
                text: "Advertisements may reach people who are unlikely to need your product or service.",
                icon: Users,
              },
              {
                title: "Unclear objectives",
                text: "Without a defined goal, it becomes difficult to evaluate whether a campaign is useful.",
                icon: Target,
              },
              {
                title: "Weak ad communication",
                text: "Generic visuals and unclear messages may not give people a reason to take action.",
                icon: Megaphone,
              },
              {
                title: "Poor landing experience",
                text: "Relevant visitors may leave if the page is confusing, slow or lacks useful information.",
                icon: MousePointerClick,
              },
              {
                title: "Missing conversion data",
                text: "Without suitable tracking, businesses may struggle to identify meaningful actions.",
                icon: BarChart3,
              },
              {
                title: "No ongoing optimisation",
                text: "Campaigns need reviews of audience response, creative performance and available data.",
                icon: Settings2,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-[24px] border border-[#EAE5DD] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(18,40,71,0.07)] sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F0E8] text-[#A88659]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#718092]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="performance-services"
        className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Performance marketing services built around your business objectives."
              description="Sharp Rays helps businesses approach digital advertising through structured campaign planning, creative communication and performance monitoring."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.number} delay={(index % 2) * 0.06}>
                  <article className="group h-full rounded-[26px] border border-[#EAE5DD] bg-[#FCFAF7] p-6 transition duration-300 hover:border-[#D8C4A8] hover:bg-white hover:shadow-[0_18px_50px_rgba(18,40,71,0.06)] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1E9DE] text-[#A88659] transition group-hover:bg-[#122847] group-hover:text-white">
                        <Icon size={21} />
                      </div>
                      <span className="font-serif text-2xl italic text-[#C7B69E]">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#122847]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#718092]">
                      {service.description}
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2.5 text-xs leading-5 text-[#5F6F82]"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0 text-[#A88659]"
                          />
                          {point}
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Industries we help"
              title="Different businesses. Different campaign requirements."
              description="A retail business may need product-focused campaigns, while a manufacturer may need specific B2B enquiries. Campaign planning should reflect the offering, audience and intended action."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.title} delay={index * 0.035}>
                  <div className="h-full rounded-[22px] border border-[#EAE5DD] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg sm:p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4EFE7] text-[#A88659]">
                      <Icon size={19} />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-[#122847]">
                      {industry.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#718092]">
                      {industry.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL AREA */}
      <section className="relative overflow-hidden bg-[#122847] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-24 h-[350px] w-[350px] rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4B98F]">
              Local campaign thinking
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              Advertising that considers where your customers are.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              A campaign should reflect where potential customers are, what
              they are searching for and what action your business wants them
              to take. Local targeting should be based on actual service areas
              and platform targeting availability.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/75">
              <MapPin size={14} className="text-[#D4B98F]" />
              Mira Road, Maharashtra
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Mira Road East",
                text: "Campaigns for local services, retail businesses, professional services and businesses serving nearby residential communities.",
                label: "Local service audiences",
              },
              {
                title: "Mira Road West",
                text: "Advertising opportunities for consumer-facing businesses, shops, restaurants, salons and local service providers.",
                label: "Consumer-focused campaigns",
              },
              {
                title: "Nearby business audiences",
                text: "Campaigns can consider relevant nearby service areas when they align with your business coverage and customer demand.",
                label: "Relevant service areas",
              },
              {
                title: "B2B and specialist offers",
                text: "More specific targeting and enquiry journeys can be planned for businesses with defined products, services or buyer profiles.",
                label: "Focused buyer intent",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-[22px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4B98F]">
                    {item.label}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-white/60">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Choose the right platform"
              title="Reach your audience where they are most likely to take action."
              description="Not every business needs to advertise on every platform. The right choice depends on audience behaviour, campaign objectives and available budget."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Reveal key={platform.name} delay={index * 0.06}>
                  <div className="h-full rounded-[24px] border border-[#EAE5DD] bg-[#FCFAF7] p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8DC] text-[#A88659]">
                        <Icon size={21} />
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-[#8D7555]">
                        {platform.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-[#122847]">
                      {platform.name}
                    </h3>
                    <p className="mt-3 min-h-[72px] text-xs leading-6 text-[#718092]">
                      {platform.description}
                    </p>
                    <div className="mt-5 border-t border-[#EAE5DD] pt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A88659]">
                        Common uses
                      </p>
                      <ul className="mt-3 space-y-2">
                        {platform.examples.map((example) => (
                          <li
                            key={example}
                            className="flex items-center gap-2 text-xs text-[#657387]"
                          >
                            <Check size={13} className="text-[#A88659]" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-[#718092]">
            Our recommendation: select platforms based on your customer
            journey rather than trying to advertise everywhere.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="From campaign planning to continuous optimisation."
              description="A structured process helps connect your business objectives with campaign decisions, creative direction and performance reviews."
              centered
            />
          </Reveal>

          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.045}>
                <div className="relative h-full rounded-[22px] border border-[#EAE5DD] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl italic text-[#C6A77A]">
                      {step.number}
                    </span>
                    {index === process.length - 1 && (
                      <span className="rounded-full bg-[#F3EEE6] px-3 py-1 text-[10px] font-medium text-[#94754E]">
                        Continuous
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-[#122847]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-[#718092]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EFFECTIVE CAMPAIGN */}
      <section className="bg-[#F3F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88659]">
              Beyond clicks
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl">
              Connect advertising spend with meaningful business actions.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#718092]">
              A campaign should not be judged by impressions and clicks alone.
              Its value depends on whether it helps your business reach the
              right people and encourages useful actions.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {campaignFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <Reveal key={factor.title} delay={index * 0.05}>
                  <div className="rounded-[20px] border border-[#E4DED4] bg-white p-5 sm:p-6">
                    <Icon size={20} className="text-[#A88659]" />
                    <h3 className="mt-4 text-sm font-semibold text-[#122847]">
                      {factor.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#718092]">
                      {factor.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1150px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The Sharp Rays approach"
              title="A business-focused approach to paid digital advertising."
              description="Performance marketing requires more than launching advertisements. It involves understanding the audience, communicating the offer and measuring what happens after someone clicks."
            />
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
            >
              Discuss your campaign
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="space-y-0">
            {[
              [
                "Strategy before spending",
                "Understand your business goals and campaign requirements before recommending an advertising approach.",
              ],
              [
                "Audience-focused planning",
                "Build campaigns around relevant audiences instead of relying on broad targeting without a clear purpose.",
              ],
              [
                "Creative and advertising alignment",
                "Make sure ad messaging and creative direction communicate your offering clearly and consistently.",
              ],
              [
                "Landing page awareness",
                "Connect the advertising experience with a relevant website or enquiry destination.",
              ],
              [
                "Performance measurement",
                "Consider meaningful indicators such as enquiries, conversions and cost efficiency where tracking is available.",
              ],
              [
                "Connected digital services",
                "Bring advertising together with SEO, website development, social media marketing and content marketing where useful.",
              ],
            ].map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <div className="flex gap-5 border-b border-[#EAE5DD] py-6 first:pt-0 last:border-0">
                  <span className="pt-0.5 font-serif text-xl italic text-[#C6A77A]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#122847]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#718092]">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTED DIGITAL PRESENCE */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1150px] overflow-hidden rounded-[30px] bg-[#F1EDE6] p-7 sm:p-10 lg:p-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88659]">
              A connected digital presence
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl">
              Make your website and advertising work together.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#718092]">
              Paid advertising can bring visitors to your website, but the
              website experience plays an important role in what happens next.
              A connected digital strategy brings each part together.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Google Ads", "Connect with people searching for relevant services."],
              ["Meta Ads", "Introduce your offering to suitable audiences."],
              ["Landing pages", "Explain your offer and encourage the next action."],
              ["SEO", "Support long-term organic discovery."],
              ["Social media", "Build familiarity and communicate your brand."],
              ["Conversion tracking", "Measure meaningful actions where configured."],
            ].map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <div className="rounded-2xl border border-white/80 bg-white/75 p-5">
                  <h3 className="text-sm font-semibold text-[#122847]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[#718092]">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-[#7D8793]">
            Paid advertising does not guarantee sales or leads. Outcomes depend
            on the offer, audience, competition, landing page, budget and
            campaign execution.
          </p>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1150px]">
          <Reveal>
            <SectionHeading
              eyebrow="Explore more from Sharp Rays"
              title="Build a more connected digital presence."
              description="Paid advertising is one part of your digital growth strategy. Explore other services that can support your website, visibility, content and brand communication."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
               <Link
  href={service.href}
  title={`Explore ${service.title} Services by Sharp Rays`}
  className="group flex h-full flex-col rounded-[22px] border border-[#EAE5DD] bg-[#FCFAF7] p-6 transition hover:-translate-y-1 hover:border-[#D5C2A7] hover:bg-white hover:shadow-lg"
>
                  <h3 className="text-base font-semibold text-[#122847]">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-6 text-[#718092]">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#A88659]">
                    Explore service
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1150px]">
          <Reveal>
            <SectionHeading
              eyebrow="Performance marketing pricing"
              title="Explore the right plan for your advertising requirements."
              description="Campaign management requirements depend on your objectives, platforms, campaign complexity, creative needs and reporting scope. Explore the published pricing options before selecting a plan."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.07}>
                <div
                  className={`relative flex h-full flex-col rounded-[26px] border p-7 sm:p-8 ${
                    plan.featured
                      ? "border-[#C6A77A] bg-[#122847] text-white shadow-[0_22px_65px_rgba(18,40,71,0.16)]"
                      : "border-[#EAE5DD] bg-white text-[#122847]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#C6A77A] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#122847]">
                      Popular option
                    </span>
                  )}

                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      plan.featured ? "text-[#D8C29F]" : "text-[#A88659]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-7 text-4xl font-medium tracking-[-0.05em]">
                    {plan.price}
                  </p>
                  <p
                    className={`mt-4 min-h-[52px] text-sm leading-6 ${
                      plan.featured ? "text-white/65" : "text-[#718092]"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div
                    className={`my-7 h-px ${
                      plan.featured ? "bg-white/15" : "bg-[#EAE5DD]"
                    }`}
                  />
                  <p
                    className={`text-xs leading-6 ${
                      plan.featured ? "text-white/65" : "text-[#718092]"
                    }`}
                  >
                    Review the complete package inclusions, deliverables and
                    applicable terms on our pricing page.
                  </p>
                <Link
  href="/pricing"
  title="View Sharp Rays Pricing and Service Packages"
  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-semibold transition ${
    plan.featured
      ? "mt-8 bg-white text-[#122847] hover:bg-[#F2EDE5]"
      : "mt-8 bg-[#122847] text-white hover:bg-[#203B5D]"
  }`}
>
  View Package Details
  <ArrowUpRight size={15} />
</Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#E9E2D7] bg-white p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Wallet size={19} className="mt-0.5 shrink-0 text-[#A88659]" />
              <div>
                <h3 className="text-sm font-semibold text-[#122847]">
                  A note about advertising spend
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#718092]">
                  Advertising platform spend and campaign management fees are
                  separate cost components unless a particular plan explicitly
                  states otherwise. Confirm the advertising budget, management
                  scope, creative deliverables, campaign count and tracking
                  requirements before starting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* 12 — FAQs | EDITORIAL TWO-COLUMN DESIGN */}
<section
  className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
  aria-labelledby="mira-road-performance-faq-heading"
>
  <div className="mx-auto max-w-[1220px]">
    <Reveal className="mx-auto max-w-[800px] text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
        Questions Before You Start
      </p>

      <h2
        id="mira-road-performance-faq-heading"
        className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
      >
        Frequently Asked{" "}
        <span className="text-[#B79A72]">Questions.</span>
      </h2>

      <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
        Clear answers about performance marketing, paid advertising,
        campaign management and growing your business in Mira Road.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
      {faqs.map((faq, index) => (
        <Reveal key={faq.question}>
          <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] text-[#122847] sm:text-[21px]">
                {faq.question}
              </h3>

              <p className="mt-3 text-[12px] leading-[1.95] text-[#708092] sm:text-[13px]">
                {faq.answer}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[30px] bg-[#122847] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-24 -top-32 h-[360px] w-[360px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-48 -left-20 h-[380px] w-[380px] rounded-full bg-[#C6A77A]/10 blur-3xl" />

          <Reveal className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4B98F]">
              Let's plan your next campaign
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Ready to make your advertising more effective?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Tell us about your business, target audience and advertising
              goals. Let's discuss a campaign approach that makes sense for
              your requirements.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#122847] transition hover:bg-[#F0E9DF]"
              >
                Talk to Sharp Rays
                <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Explore All Services
                <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-8 font-serif text-lg italic text-[#D4B98F]">
              Sharp Rays — We Create the “Oh, Wow.”!
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}



