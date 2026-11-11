"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Camera as Facebook,
  Camera as Instagram,
  LineChart,
  MapPin,
  MousePointerClick,
  Search,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Google Search Ads",
    description:
      "Reach people actively searching for products or services like yours with relevant search campaigns, keyword themes and clear ad messaging.",
    points: [
      "Search intent and keyword research",
      "Campaign and ad group structure",
      "Ad copy and search-term reviews",
    ],
  },
  {
    icon: Instagram,
    title: "Meta Ads: Facebook & Instagram",
    description:
      "Build awareness, generate enquiries and promote offers through audience-led campaigns across Facebook and Instagram.",
    points: [
      "Campaign objective selection",
      "Audience and creative testing",
      "Lead form and website campaigns",
    ],
  },
  {
    icon: Target,
    title: "Campaign Strategy & Targeting",
    description:
      "Plan campaigns around your audience, offer, location, budget and the action you want potential customers to take.",
    points: [
      "Audience and location planning",
      "Campaign funnel structure",
      "Budget allocation recommendations",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Landing Page Optimisation",
    description:
      "Make the journey after an ad click clearer with relevant landing-page content, focused calls to action and easy enquiry options.",
    points: [
      "Ad-to-page message alignment",
      "Mobile user experience review",
      "Enquiry journey improvements",
    ],
  },
  {
    icon: BarChart3,
    title: "Conversion Tracking",
    description:
      "Measure meaningful actions so campaign decisions can be based on more than impressions, reach or clicks.",
    points: [
      "Conversion action planning",
      "Form and website event tracking",
      "Tracking setup review",
    ],
  },
  {
    icon: LineChart,
    title: "Campaign Monitoring & Reporting",
    description:
      "Review campaign data, identify areas for improvement and communicate what the available performance data actually shows.",
    points: [
      "Campaign performance reviews",
      "Search term and audience insights",
      "Action-focused reporting",
    ],
  },
];

const platforms = [
  {
    icon: Search,
    name: "Google Ads",
    label: "Capture existing demand",
    description:
      "Useful when people are already searching for a product, service, solution or local provider.",
    examples: [
      "Search campaigns",
      "Relevant display or remarketing campaigns",
      "YouTube campaigns where appropriate",
    ],
  },
  {
    icon: Facebook,
    name: "Meta Ads",
    label: "Create and develop demand",
    description:
      "Useful for introducing offers, reaching relevant audiences and generating enquiries through Facebook and Instagram.",
    examples: [
      "Facebook and Instagram campaigns",
      "Lead generation campaigns",
      "Creative and audience testing",
    ],
  },
];

const industries = [
  {
    title: "Real Estate & Property",
    description:
      "Promote genuine project information, property enquiries, site visits and relevant location-based offers.",
  },
  {
    title: "Retail & Local Shops",
    description:
      "Promote products, seasonal offers, store enquiries and campaigns aimed at relevant nearby audiences.",
  },
  {
    title: "Education & Coaching",
    description:
      "Reach prospective students and parents with course information, admission enquiries and lead campaigns.",
  },
  {
    title: "Healthcare & Wellness",
    description:
      "Communicate eligible services and appointment information through careful, policy-aware campaign planning.",
  },
  {
    title: "Professional Services",
    description:
      "Generate relevant enquiries for consultants, service providers and businesses with a defined target audience.",
  },
  {
    title: "Ecommerce & Consumer Brands",
    description:
      "Promote products, support online sales and assess campaign performance against meaningful purchase actions.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "We review your offer, audience, service area, website and business objective before recommending an advertising approach.",
  },
  {
    number: "02",
    title: "Plan the campaign",
    description:
      "We define campaign objectives, platform selection, audience or keyword themes, messaging and budget considerations.",
  },
  {
    number: "03",
    title: "Prepare ads and tracking",
    description:
      "We organise campaign structure, ad creatives or copy, landing-page destinations and the conversion actions to measure.",
  },
  {
    number: "04",
    title: "Launch and monitor",
    description:
      "Campaigns are launched after the required setup and account approvals. Performance is reviewed against the agreed objectives.",
  },
  {
    number: "05",
    title: "Learn and optimise",
    description:
      "We use available campaign data to identify useful adjustments to targeting, search terms, creatives, landing pages and budget allocation.",
  },
];
const performancePlans = [
  {
    name: "Starter",
    price: "₹9,999",
    description:
      "For businesses starting with one focused advertising platform.",
    platform: "1 advertising platform",
    features: [
      "Campaign strategy, setup & management",
      "Audience and keyword research",
      "Ad copy support and conversion tracking",
      "Ongoing optimisation and monthly reporting",
    ],
  },
  {
    name: "Growth",
    price: "₹16,999",
    description:
      "For growing businesses that want Google Ads and Meta Ads working together.",
    platform: "Up to 2 advertising platforms",
    features: [
      "Everything in Starter",
      "Cross-platform campaign strategy",
      "Retargeting and advanced conversion tracking",
      "Audience and creative testing",
      "Landing page recommendations",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "₹23,999",
    description:
      "For businesses expanding paid campaigns across multiple channels.",
    platform: "Up to 3 advertising platforms",
    features: [
      "Everything in Growth",
      "Advanced retargeting and audience segmentation",
      "Attribution tracking and funnel review",
      "Landing page conversion recommendations",
      "ROAS analysis and priority support",
    ],
  },
];

const faqs = [
  {
    question:
      "What does a performance marketing agency in Naigaon do?",
    answer:
      "A performance marketing agency plans and manages paid advertising campaigns with measurable business objectives. This can include Google Ads, Facebook and Instagram advertising, audience targeting, landing-page improvements, conversion tracking and campaign reporting.",
  },
  {
    question:
      "Does Sharp Rays manage Google Ads campaigns in Naigaon?",
    answer:
      "Sharp Rays offers Google Ads campaign planning and management for businesses targeting Naigaon and relevant surrounding audiences. The campaign structure depends on your services, audience, location, budget and website readiness.",
  },
  {
    question:
      "Do you provide Facebook and Instagram Ads management?",
    answer:
      "Yes. Meta Ads services can include Facebook and Instagram campaign planning, audience selection, creative direction, lead-generation campaigns, website traffic campaigns and performance reviews.",
  },
  {
    question:
      "What is the difference between Google Ads and Meta Ads?",
    answer:
      "Google Search Ads can reach people actively searching for a product or service. Meta Ads on Facebook and Instagram can introduce an offer to relevant audiences, build interest and generate enquiries. The right platform depends on customer intent, the offer and the campaign objective.",
  },
  {
    question:
      "How much budget is required for paid advertising?",
    answer:
      "The required advertising budget depends on the industry, competition, target locations, campaign objective and expected cost per click or lead. Media spend and campaign management fees should be considered separately. A suitable budget should be discussed after reviewing the business and campaign requirements.",
  },
  {
    question:
      "How soon can paid advertising generate leads?",
    answer:
      "Campaigns can start receiving traffic after approval and launch, but lead volume and quality are not guaranteed. Results depend on demand, competition, budget, targeting, creative quality, landing-page experience and conversion tracking.",
  },
  {
    question:
      "Can you run ads for a business targeting Naigaon West and nearby areas?",
    answer:
      "Campaigns can be planned around relevant service locations and audience areas, subject to the advertising platform's available location-targeting options. The target geography should reflect where the business can genuinely serve customers.",
  },
  {
    question:
      "Why is conversion tracking important for paid campaigns?",
    answer:
      "Conversion tracking helps identify valuable actions after someone interacts with an ad, such as submitting an enquiry form, making a purchase or calling a business. It helps assess campaign performance beyond clicks and impressions.",
  },
  {
    question:
      "Do I need a website to run Google or Meta Ads?",
    answer:
      "Not every campaign requires a full website, because some platforms support lead forms and messaging destinations. However, a relevant, mobile-friendly landing page can help explain the offer and make it easier for potential customers to enquire.",
  },
  {
    question:
      "Does Sharp Rays guarantee leads or sales from advertising?",
    answer:
      "No. Advertising outcomes depend on factors such as market demand, competition, budget, offer, audience, creative and website experience. Sharp Rays focuses on structured campaign planning, measurement and ongoing optimisation rather than guaranteed results.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto mb-14 max-w-3xl text-center"
          : "mb-14 max-w-3xl"
      }
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
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
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function NaigaonPerformanceMarketingClient() {
  const faqSchema = {
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
    <main className="overflow-hidden bg-[#FCFAF7] text-[#122847]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden bg-[#FCFAF7] px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#122847]/10 bg-white px-4 py-2 text-xs tracking-wide text-[#667085]">
              <MapPin size={13} className="text-[#A88659]" />
              Performance Marketing · Naigaon, Maharashtra
            </div>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Performance Marketing for{" "}
              <span className="font-serif italic text-[#A88659]">
                Naigaon
              </span>{" "}
              Businesses
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Turn advertising budgets into better-informed business
              decisions. Plan Google Ads and Meta Ads campaigns with
              relevant targeting, clear messaging, conversion tracking
              and ongoing optimisation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?service=performance-marketing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1D3B61]"
              >
                Discuss Your Ad Campaign
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#122847]/15 bg-white px-7 py-4 text-sm font-semibold text-[#122847] transition hover:border-[#B79A72]"
              >
                Explore Pricing
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#667085]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Google Ads
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Facebook & Instagram Ads
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Conversion Tracking
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -inset-5 rounded-[36px] bg-[#B79A72]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-[#E8E2D8] bg-white p-6 shadow-[0_30px_90px_-55px_rgba(18,40,71,0.35)] sm:p-8">
                <div className="flex items-center justify-between border-b border-[#E8E2D8] pb-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                      Campaign planning
                    </p>
                    <h2 className="mt-2 text-xl font-medium">
                      What are we measuring?
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2F0EA] text-[#A88659]">
                    <BarChart3 size={22} />
                  </div>
                </div>

                <div className="space-y-3 py-6">
                  {[
                    {
                      icon: Target,
                      title: "Campaign objective",
                      copy: "Leads, sales or relevant traffic",
                    },
                    {
                      icon: Users,
                      title: "Audience relevance",
                      copy: "People, locations and intent",
                    },
                    {
                      icon: MousePointerClick,
                      title: "Conversion actions",
                      copy: "Forms, calls and purchases",
                    },
                    {
                      icon: TrendingUp,
                      title: "Optimisation",
                      copy: "Review, learn and improve",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 rounded-2xl bg-[#F8F7F4] p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#A88659]">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-[#667085]">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl bg-[#122847] p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C6A77A]">
                    The focus
                  </p>
                  <p className="mt-2 text-lg leading-7">
                    Measure meaningful actions, not just clicks.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="rounded-[24px] border border-[#E8E2D8] bg-[#FCFAF7] p-7 sm:p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                Performance Marketing in Naigaon
              </p>
              <h2 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                What does performance marketing include?
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#667085] sm:text-base">
                Performance marketing uses paid digital campaigns to
                encourage measurable actions such as enquiries, calls
                and purchases. For businesses targeting Naigaon, this
                can include Google Search Ads, Facebook and Instagram
                Ads, audience targeting, landing-page improvements,
                conversion tracking and regular campaign optimisation.
                The right approach depends on your business goals,
                audience and advertising budget.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — BUSINESS CHALLENGE */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Before You Spend on Ads"
              title={
                <>
                  Advertising needs more than{" "}
                  <span className="font-serif italic text-[#A88659]">
                    a daily budget.
                  </span>
                </>
              }
              description="Paid campaigns need a clear objective, a relevant audience, a convincing offer and a useful destination after the click."
            />
            <p className="max-w-xl text-sm leading-8 text-[#667085]">
              Whether you are promoting a shop, a professional service
              or a property project around Naigaon, campaign decisions
              should begin with what a potential customer needs to
              understand and do next.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Unclear campaign goals",
                copy: "Running ads without deciding whether the priority is calls, enquiries, sales or awareness.",
              },
              {
                title: "Broad audience targeting",
                copy: "Reaching people who may not be relevant to the service, offer or actual business location.",
              },
              {
                title: "Weak landing-page journey",
                copy: "Sending paid visitors to a page that does not explain the advertised offer or next step.",
              },
              {
                title: "Missing conversion data",
                copy: "Counting clicks without understanding which interactions become useful business enquiries.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-[#E4DED4] bg-white p-6">
                  <span className="text-xs font-semibold tracking-widest text-[#A88659]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="What We Can Help With"
            title={
              <>
                Paid media services built around{" "}
                <span className="font-serif italic text-[#A88659]">
                  your campaign goals.
                </span>
              </>
            }
            description="From campaign planning to measurement, each part of the advertising journey should support a clear business objective."
            centered
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <article className="flex h-full flex-col rounded-[22px] border border-[#E8E2D8] bg-[#FCFAF7] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C6A77A]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#A88659]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-6 text-xl font-medium">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-[#E8E2D8] pt-5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-xs leading-6 text-[#667085]"
                        >
                          <Check
                            size={14}
                            className="mt-1 shrink-0 text-[#A88659]"
                          />
                          {point}
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

      {/* 05 — PLATFORMS */}
      <section className="bg-[#122847] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Choosing the Right Advertising Platform"
            title={
              <>
                Google Ads or Meta Ads?{" "}
                <span className="font-serif italic text-[#C6A77A]">
                  Start with intent.
                </span>
              </>
            }
            description="Different platforms support different parts of the customer journey. The best choice depends on how people discover and decide to buy from your business."
            centered
          />

          <div className="grid gap-5 md:grid-cols-2">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;

              return (
                <Reveal key={platform.name} delay={index * 0.08}>
                  <article className="h-full rounded-[24px] border border-white/15 bg-white/[0.06] p-7 sm:p-9">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6A77A]/15 text-[#C6A77A]">
                        <Icon size={25} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium">
                          {platform.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C6A77A]">
                          {platform.label}
                        </p>
                      </div>
                    </div>

                    <p className="mt-7 text-sm leading-8 text-white/65">
                      {platform.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                      {platform.examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-3 text-sm text-white/80"
                        >
                          <Check
                            size={15}
                            className="mt-1 shrink-0 text-[#C6A77A]"
                          />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-7 text-white/45">
            Platform selection is based on your offer, customer
            behaviour, campaign objective and available budget. Not
            every business needs to advertise on every platform.
          </p>
        </div>
      </section>

      {/* 06 — LOCAL STRATEGY */}
      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="A Local Campaign Perspective"
              title={
                <>
                  Relevant targeting for{" "}
                  <span className="font-serif italic text-[#A88659]">
                    Naigaon audiences.
                  </span>
                </>
              }
              description="A local campaign should reflect where your customers are, what you offer and whether you can genuinely serve the locations you choose to target."
            />

            <p className="text-sm leading-8 text-[#667085]">
              A business promoting a shop, a service or a new housing
              project may need a different audience and message. We
              consider the relevance of areas such as Naigaon East,
              Naigaon West, the station vicinity and Juchandra where
              these locations match the business's actual service
              coverage.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#667085]">
              Location targeting should be selected inside the ad
              platform according to its available settings. Mentioning
              a locality in ad copy does not replace accurate campaign
              targeting.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[26px] border border-[#E8E2D8] bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#A88659]" size={23} />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A88659]">
                  Campaign planning considerations
                </p>
              </div>

              <div className="mt-7 space-y-5">
                {[
                  [
                    "Business coverage",
                    "Where can your business realistically deliver its product or service?",
                  ],
                  [
                    "Audience relevance",
                    "Who is most likely to need your offer and take the next step?",
                  ],
                  [
                    "Local message",
                    "Does the ad communicate a clear, relevant reason to enquire?",
                  ],
                  [
                    "Conversion destination",
                    "Can visitors easily call, message, submit a form or purchase?",
                  ],
                ].map(([title, copy], index) => (
                  <div
                    key={title}
                    className="flex gap-4 border-b border-[#E8E2D8] pb-5 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-semibold text-[#B79A72]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{title}</h3>
                      <p className="mt-2 text-xs leading-6 text-[#667085]">
                        {copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — INDUSTRIES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Industries & Business Types"
            title={
              <>
                Campaigns shaped around{" "}
                <span className="font-serif italic text-[#A88659]">
                  different business needs.
                </span>
              </>
            }
            description="The offer, audience and conversion journey change from one industry to another. Campaign planning should reflect those differences."
            centered
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-[#E5DED3] bg-white p-7">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#A88659]">
                    BUSINESS TYPE 0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-medium">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {industry.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — MEASUREMENT */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Measure What Matters"
              title={
                <>
                  Beyond clicks.{" "}
                  <span className="font-serif italic text-[#A88659]">
                    Understand actions.
                  </span>
                </>
              }
              description="Campaign reporting should connect advertising activity with the actions that matter to your business."
            />

            <p className="text-sm leading-8 text-[#667085]">
              Depending on your website, campaign setup and available
              platform integrations, meaningful actions may include
              enquiry form submissions, phone calls, purchases,
              appointment requests or other defined conversions.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Wallet,
                  title: "Spend",
                  copy: "How much advertising budget has been used?",
                },
                {
                  icon: MousePointerClick,
                  title: "Clicks",
                  copy: "Are people responding to the ad and visiting the destination?",
                },
                {
                  icon: Target,
                  title: "Conversions",
                  copy: "Are visitors completing the action being measured?",
                },
                {
                  icon: TrendingUp,
                  title: "Lead quality",
                  copy: "Are enquiries relevant to the actual business offering?",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-6"
                  >
                    <Icon size={22} className="text-[#A88659]" />
                    <h3 className="mt-5 text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-[#667085]">
                      {item.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — PROCESS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="How We Work"
            title={
              <>
                A considered process from{" "}
                <span className="font-serif italic text-[#A88659]">
                  planning to optimisation.
                </span>
              </>
            }
            description="A structured approach helps keep campaign decisions connected to your business goals and available performance data."
            centered
          />

          <div className="grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-[#E5DED3] bg-white p-6">
                  <p className="text-3xl font-light tracking-tight text-[#B79A72]">
                    {step.number}
                  </p>
                  <h3 className="mt-6 text-lg font-medium">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-7 text-[#667085]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — WHY SHARP RAYS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Sharp Rays"
              title={
                <>
                  Clear thinking behind{" "}
                  <span className="font-serif italic text-[#A88659]">
                    every campaign.
                  </span>
                </>
              }
              description="Paid media should be planned around your business, not a one-size-fits-all campaign template."
            />

            <Link
              href="/services/performance-marketing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] underline decoration-[#C6A77A] underline-offset-8 transition hover:text-[#A88659]"
            >
              Explore performance marketing services
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Business-first planning",
                copy: "Campaign recommendations begin with your offer, audience and commercial objective.",
              },
              {
                title: "Platform-aware strategy",
                copy: "Google and Meta campaigns are selected according to customer intent and campaign goals.",
              },
              {
                title: "Measurement-led decisions",
                copy: "We prioritise meaningful actions and transparent reporting over vanity metrics.",
              },
              {
                title: "Connected digital support",
                copy: "Paid media can work alongside website development, SEO and social media strategy.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#A88659]">
                    <Check size={19} />
                  </div>
                  <h3 className="mt-5 text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* 11 — PERFORMANCE MARKETING PRICING */}
<section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
  <div className="mx-auto max-w-[1200px]">
    <SectionHeading
      eyebrow="Performance Marketing Investment"
      title={
        <>
          Choose the right plan for{" "}
          <span className="font-serif italic text-[#A88659]">
            your advertising goals.
          </span>
        </>
      }
      description="Start with one advertising platform or build a connected paid media strategy across multiple channels. Choose a management plan based on your campaign requirements."
      centered
    />

    <div className="grid gap-5 md:grid-cols-3">
      {performancePlans.map((plan, index) => (
        <Reveal key={plan.name} delay={index * 0.06}>
          <div
            className={`relative flex h-full flex-col rounded-3xl border p-8 ${
              plan.featured
                ? "border-[#122847] bg-[#122847] text-white shadow-2xl shadow-[#122847]/15"
                : "border-[#E8E2D8] bg-white text-[#122847]"
            }`}
          >
            {plan.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-[#C6A77A] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#122847]">
                Most Popular
              </span>
            )}

            <p
              className={`text-sm ${
                plan.featured ? "text-white/55" : "text-[#667085]"
              }`}
            >
              {plan.name}
            </p>

            <p className="mt-5 text-4xl font-medium tracking-tight">
              {plan.price}
              <span
                className={`ml-1 text-xs font-normal ${
                  plan.featured ? "text-white/50" : "text-[#667085]"
                }`}
              >
                /month
              </span>
            </p>

            <p
              className={`mt-3 min-h-12 text-sm leading-6 ${
                plan.featured ? "text-white/60" : "text-[#667085]"
              }`}
            >
              {plan.description}
            </p>

            <div
              className={`mt-6 rounded-xl px-4 py-3 text-xs font-semibold ${
                plan.featured
                  ? "bg-white/10 text-[#C6A77A]"
                  : "bg-[#F2F0EA] text-[#122847]"
              }`}
            >
              {plan.platform}
            </div>

            <div
              className={`my-7 border-t ${
                plan.featured
                  ? "border-white/15"
                  : "border-[#E8E2D8]"
              }`}
            />

            <ul className="mb-8 space-y-3 text-sm">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[#B79A72]"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/pricing"
              className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                plan.featured
                  ? "bg-[#C6A77A] text-[#122847] hover:bg-white"
                  : "bg-[#122847] text-white hover:bg-[#1D3B61]"
              }`}
            >
              View Package Details
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>

    <p className="mt-7 text-center text-xs leading-7 text-[#667085]">
      Advertising spend is not included in the management fee and is paid
      separately to the advertising platforms. Prices are exclusive of
      applicable taxes. Professional shoots, UGC creators, advanced
      video production and additional scope are quoted separately.
      <Link
        href="/pricing"
        className="ml-1 font-semibold text-[#122847] underline underline-offset-4"
      >
        View complete pricing details
      </Link>
      .
    </p>
  </div>
</section>

      {/* 11 — RELATED SERVICES */}
      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="Build a Connected Digital Strategy"
            title={
              <>
                Paid campaigns work better with{" "}
                <span className="font-serif italic text-[#A88659]">
                  the right foundations.
                </span>
              </>
            }
            description="Explore related Sharp Rays services that can support your website, organic visibility and social media presence."
            centered
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Website Development",
                copy: "Build a clear, mobile-friendly destination for visitors coming from paid campaigns.",
                href: "/locations/naigaon/website-development",
              },
              {
                title: "SEO Services",
                copy: "Improve your organic search presence alongside your paid advertising activity.",
                href: "/locations/naigaon/seo",
              },
              {
                title: "Social Media Marketing",
                copy: "Build a consistent social presence and develop content for your target audience.",
                href: "/locations/naigaon/social-media-marketing",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-[#E8E2D8] bg-white p-7 transition hover:-translate-y-1 hover:border-[#C6A77A]"
                >
                  <h3 className="text-xl font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#667085]">
                    {item.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#A88659]">
                    Explore service
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

     {/* 13 — FAQ */}
<section
  className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
  aria-labelledby="naigaon-performance-faq-heading"
>
  <div className="mx-auto max-w-[1220px]">
    <Reveal className="mx-auto max-w-[800px] text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
        Questions Before You Start
      </p>

      <h2
        id="naigaon-performance-faq-heading"
        className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
      >
        Frequently Asked{" "}
        <span className="text-[#B79A72]">Questions.</span>
      </h2>

      <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
        Clear answers about Google Ads, Meta Ads, campaign budgets,
        conversion tracking and performance marketing in Naigaon.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
      {faqs.map((faq, index) => (
        <Reveal key={faq.question}>
          <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
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

      {/* 13 — FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute -right-24 -top-36 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-[850px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Plan Your Next Campaign
          </p>

          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-6xl">
            Ready to make your ad budget work{" "}
            <span className="font-serif italic text-[#C6A77A]">
              more purposefully?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
            Tell us what you offer, who you want to reach and what
            action matters to your business. We can discuss a suitable
            Google Ads or Meta Ads approach for your Naigaon audience.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?service=performance-marketing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C6A77A] px-7 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
            >
              Discuss Your Campaign
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/locations/naigaon"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#C6A77A] hover:text-[#C6A77A]"
            >
              Explore Naigaon Services
              <ArrowDown size={16} />
            </Link>
          </div>

          <p className="mt-7 text-xs text-white/40">
            No guaranteed leads or sales. Campaign recommendations
            depend on your business, audience and budget.
          </p>
        </Reveal>
      </section>
    </main>
  );
}