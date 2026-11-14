
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MapPin,
  Globe,
  BarChart3,
  Settings2,
  FileSearch,
  Store,
  UtensilsCrossed,
  Factory,
  Check,
  Target,
  TrendingUp,
  ShieldCheck,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

import type { ReactNode } from "react";

/* =========================================================
   ANIMATION
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
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   REUSABLE SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"}>
      <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
        {eyebrow}
      </p>

      <h2 className="font-[var(--font-new-york)] text-[30px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[39px] lg:text-[46px]">
        {title}{" "}
        {highlight && <span className="text-[#B79A72]">{highlight}</span>}
      </h2>

      {description && (
        <p className="mt-5 text-[12px] leading-[1.95] text-[#718092] sm:text-[13px]">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   PAGE DATA
========================================================= */

const challenges = [
  {
    number: "01",
    title: "Low local search visibility",
    description:
      "Potential customers may search for nearby products and services without finding the right business website or business information.",
    icon: Search,
  },
  {
    number: "02",
    title: "Incomplete Google Business Profile",
    description:
      "Missing information, inconsistent business details and limited profile activity can make local discovery more difficult.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Websites that are difficult to discover",
    description:
      "A website needs useful service pages, clear location relevance, crawlable content and a sound technical foundation.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Unfocused SEO activity",
    description:
      "Publishing content without a keyword plan, relevant internal links or a measurable objective can make SEO efforts difficult to evaluate.",
    icon: Target,
  },
];

const seoServices: {
  number: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Local SEO",
    description:
      "Improve how your business is represented across local search results through relevant location signals, business information and useful local content.",
    points: [
      "Local keyword research",
      "Location-focused website content",
      "Local business information consistency",
    ],
    icon: MapPin,
  },
  {
    number: "02",
    title: "Google Business Profile SEO",
    description:
      "Improve the completeness and relevance of your Google Business Profile to support discovery on Google Search and Maps.",
    points: [
      "Profile audit and optimisation",
      "Business categories and service details",
      "Photos, updates and review guidance",
    ],
    icon: Store,
  },
  {
    number: "03",
    title: "On-Page SEO",
    description:
      "Make your website pages more relevant to the searches your potential customers use when looking for your services.",
    points: [
      "Title tags and meta descriptions",
      "Headings and content optimisation",
      "Internal linking and page structure",
    ],
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Technical SEO",
    description:
      "Improve the technical foundations that help search engines crawl, understand and index your website.",
    points: [
      "Crawlability and indexability checks",
      "Canonical and sitemap review",
      "Mobile experience and performance checks",
    ],
    icon: Settings2,
  },
  {
    number: "05",
    title: "Content SEO",
    description:
      "Build useful content around your services, customer questions and relevant search topics instead of relying on repetitive keyword placement.",
    points: [
      "Search intent research",
      "Service and supporting content",
      "Content gap identification",
    ],
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "SEO Monitoring",
    description:
      "Track organic search performance and use the findings to prioritise the next improvements.",
    points: [
      "Google Search Console monitoring",
      "Keyword and landing-page analysis",
      "Performance reviews and recommendations",
    ],
    icon: BarChart3,
  },
];

const localAreas = [
  {
    title: "Bhayandar West",
    subtitle: "Retail and local businesses",
    description:
      "Local search and Google Maps optimisation for retail businesses and customer-facing services in Bhayandar West.",
    icon: Store,
  },
  {
    title: "Uttan Road",
    subtitle: "Restaurants and eateries",
    description:
      "Local discovery strategies for eateries, restaurants and hospitality businesses serving customers around Uttan Road.",
    icon: UtensilsCrossed,
  },
  {
    title: "Navghar",
    subtitle: "Industrial and business units",
    description:
      "Search-focused website content and service visibility for businesses and industrial units around Navghar.",
    icon: Factory,
  },
];

const process = [
  {
    number: "01",
    title: "SEO Audit & Discovery",
    description:
      "We review your website, current search visibility, business profile and competitors to understand where improvements are needed.",
  },
  {
    number: "02",
    title: "Keyword & Strategy Planning",
    description:
      "We identify relevant service, local and informational search terms based on your business offerings and customer intent.",
  },
  {
    number: "03",
    title: "Optimisation & Implementation",
    description:
      "We work on website content, technical SEO, local signals and Google Business Profile improvements according to the agreed scope.",
  },
  {
    number: "04",
    title: "Monitoring & Refinement",
    description:
      "We review search performance, identify opportunities and refine the SEO strategy using available performance data.",
  },
];

const industries = [
  "Retail and local shops",
  "Restaurants and eateries",
  "Manufacturing and industrial businesses",
  "Healthcare and wellness",
  "Real estate",
  "Education and coaching",
  "Professional services",
  "Beauty and wellness",
];

const technicalItems = [
  "Website crawlability and indexability",
  "XML sitemap and robots.txt review",
  "Canonical URL implementation checks",
  "Mobile usability and responsive experience",
  "Page speed and Core Web Vitals review",
  "Structured data and relevant schema checks",
  "Internal linking and URL structure",
  "Broken links and redirect review",
];

const reasons = [
  {
    title: "Strategy before keywords",
    description:
      "We begin with your business objectives, customer searches and website condition instead of selecting keywords without context.",
    icon: Target,
  },
  {
    title: "Local relevance",
    description:
      "We consider the differences between Bhayandar West retail, Uttan Road eateries and Navghar business requirements.",
    icon: MapPin,
  },
  {
    title: "Technical and content together",
    description:
      "We consider website structure, technical SEO, useful content and local visibility as connected parts of the strategy.",
    icon: Settings2,
  },
  {
    title: "Transparent measurement",
    description:
      "We use available search performance data to review progress and identify practical next steps.",
    icon: TrendingUp,
  },
];

const seoPlans = [
  {
    name: "Starter",
    price: "₹14,999",
    description: "For businesses beginning structured SEO.",
    features: [
      "Initial SEO review",
      "Keyword research",
      "On-page optimisation",
      "Technical SEO checks",
      "Performance monitoring",
    ],
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "For businesses building broader search visibility.",
    features: [
      "Everything in Starter",
      "Expanded keyword targeting",
      "Content optimisation",
      "Local SEO improvements",
      "Google Business Profile guidance",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "₹39,999",
    description: "For businesses with wider SEO requirements.",
    features: [
      "Everything in Growth",
      "Broader content planning",
      "Advanced technical review",
      "Expanded landing-page strategy",
      "Ongoing SEO recommendations",
    ],
  },
];

const faqs = [
  {
    question: "What SEO services does Sharp Rays provide in Bhayandar?",
    answer:
      "Sharp Rays provides local SEO, Google Business Profile optimisation, on-page SEO, technical SEO, content SEO and SEO monitoring for businesses in and around Bhayandar. The recommended scope depends on your website, competition and business goals.",
  },
  {
    question: "Can SEO help my business appear on Google Maps in Bhayandar?",
    answer:
      "Local SEO and Google Business Profile optimisation can improve your business's eligibility and relevance for local discovery. Results depend on factors such as relevance, distance, prominence, competition and profile quality. No specific ranking position can be guaranteed.",
  },
  {
    question: "Do you provide SEO for Bhayandar West businesses?",
    answer:
      "Yes. SEO planning can cover relevant Bhayandar West searches, including retail and customer-facing businesses. The strategy may include local keyword research, website optimisation and Google Business Profile improvements.",
  },
  {
    question: "Can restaurants around Uttan Road benefit from local SEO?",
    answer:
      "Restaurants and eateries can use local SEO to improve their online business information, service pages and Google Business Profile. Useful photos, accurate details, customer reviews and relevant local content can support customer discovery.",
  },
  {
    question: "Do you provide SEO for Navghar industrial businesses?",
    answer:
      "Yes. Industrial and B2B businesses around Navghar can benefit from service-focused website content, technical SEO and relevant search targeting that helps potential buyers understand their products and capabilities.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a gradual process. The time required depends on your website's current condition, competition, content quality, technical issues and the work involved. Search performance should be reviewed over time rather than judged by a guaranteed deadline.",
  },
  {
    question: "How much do SEO services cost at Sharp Rays?",
    answer:
      "Our listed SEO package options start at ₹14,999, with other options at ₹24,999 and ₹39,999. The suitable scope depends on your website, target keywords, competition and required deliverables. Visit our pricing page for package details.",
  },
  {
    question: "Can I combine SEO with website development?",
    answer:
      "Yes. Website development and SEO can be planned together so that website structure, technical foundations, content and search visibility support your business objectives from the beginning.",
  },
];

/* =========================================================
   STRUCTURED DATA
========================================================= */

function BhayandarSEOStructuredData() {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function BhayandarSEOPageClient() {
  return (
    <>
      <BhayandarSEOStructuredData />

      {/* =================================================
          01. HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-16 pt-20 sm:px-8 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute -right-32 top-12 h-[430px] w-[430px] rounded-full border border-[#E8DED1]/70" />
        <div className="pointer-events-none absolute -right-20 top-24 h-[300px] w-[300px] rounded-full border border-[#E8DED1]/60" />

        <div className="relative mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <Reveal>
            <div className="max-w-[680px]">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                  SEO Services · Bhayandar
                </span>
              </div>

              <h1 className="font-[var(--font-new-york)] text-[40px] leading-[1.12] tracking-[-0.045em] text-[#122847] sm:text-[54px] lg:text-[64px]">
                SEO Services for{" "}
                <span className="text-[#B79A72]">Bhayandar</span>{" "}
                Businesses.
              </h1>

              <p className="mt-6 max-w-[590px] text-[13px] leading-[2] text-[#718092] sm:text-[14px]">
                Build stronger search visibility with practical SEO for
                Bhayandar businesses. From Google Maps visibility for
                Bhayandar West retail and Uttan Road eateries to search
                optimisation for Navghar business units, Sharp Rays helps
                make your digital presence more discoverable.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  title="Book a free SEO audit with Sharp Rays"
                  className="inline-flex items-center gap-3 rounded-full bg-[#122847] px-6 py-3.5 text-[11px] font-medium text-white transition-all hover:bg-[#23446D]"
                >
                  Book a Free SEO Audit
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/services/search-engine-optimization"
                  title="Explore Sharp Rays SEO services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DED4C7] bg-white px-6 py-3.5 text-[11px] font-medium text-[#122847] transition-colors hover:border-[#B79A72]"
                >
                  Explore SEO Services
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] text-[#718092]">
                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#A38561]" />
                  Local SEO Strategy
                </span>
                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#A38561]" />
                  Google Maps Optimisation
                </span>
                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#A38561]" />
                  Technical SEO
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[490px]">
              <div className="rounded-[20px] border border-[#E7DDD0] bg-white p-5 shadow-[0_25px_70px_-45px_rgba(18,40,71,.28)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#EEE8DF] pb-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.17em] text-[#A38561]">
                      Local Search Strategy
                    </p>
                    <h2 className="mt-2 font-[var(--font-new-york)] text-[23px] text-[#122847]">
                      Be easier to discover.
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                    <Search size={20} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      label: "Bhayandar West",
                      detail: "Retail and local business searches",
                      icon: Store,
                    },
                    {
                      label: "Uttan Road",
                      detail: "Restaurant and eatery discovery",
                      icon: UtensilsCrossed,
                    },
                    {
                      label: "Navghar",
                      detail: "Industrial and B2B search visibility",
                      icon: Factory,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-xl border border-[#EEE8DF] bg-[#FCFAF7] p-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0E9DE] text-[#A38561]">
                          <Icon size={17} />
                        </span>
                        <div>
                          <p className="text-[12px] font-medium text-[#122847]">
                            {item.label}
                          </p>
                          <p className="mt-1 text-[10px] text-[#83909C]">
                            {item.detail}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={15}
                          className="ml-auto text-[#B79A72]"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-xl bg-[#122847] p-5 text-white">
                  <p className="text-[9px] uppercase tracking-[0.17em] text-[#C6A77A]">
                    The objective
                  </p>
                  <p className="mt-2 font-[var(--font-new-york)] text-[20px] leading-snug">
                    Relevant searches. Better visibility. Meaningful enquiries.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 -z-10 h-32 w-32 rounded-full bg-[#EDE3D5]/70 blur-2xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          02. DIRECT ANSWER
      ================================================= */}

      <section className="bg-white px-5 py-14 sm:px-8 lg:py-16">
        <Reveal className="mx-auto max-w-[1050px]">
          <div className="grid gap-6 border-y border-[#E8DED1] py-8 md:grid-cols-[190px_1fr] md:gap-12">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                A Clear Answer
              </p>
              <h2 className="mt-3 font-[var(--font-new-york)] text-[22px] leading-tight text-[#122847]">
                What is SEO in Bhayandar?
              </h2>
            </div>

            <p className="text-[13px] leading-[2] text-[#718092]">
              SEO services in Bhayandar help local businesses improve their
              visibility in relevant Google searches and local results.
              This includes website optimisation, local keyword targeting,
              Google Business Profile improvements, technical SEO and useful
              content. The strategy can be tailored to Bhayandar West retail,
              Uttan Road eateries and Navghar industrial businesses according
              to their customers and services.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =================================================
          03. SEO CHALLENGES
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Understanding Local Search"
              title="Why Businesses in Bhayandar"
              highlight="Need a Clear SEO Strategy."
              description="Your website and business profile need to communicate the right information to both search engines and potential customers. These are some common areas an SEO strategy should address."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.06}>
                  <article className="h-full rounded-[15px] border border-[#E9E0D5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-32px_rgba(18,40,71,.3)]">
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-new-york)] text-[26px] text-[#D2C1AA]">
                        {item.number}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                        <Icon size={18} />
                      </span>
                    </div>

                    <h3 className="mt-8 font-[var(--font-new-york)] text-[19px] leading-snug text-[#122847]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
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
          04. SEO SERVICES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title="SEO Services for"
              highlight="Your Business Goals."
              description="From improving individual website pages to strengthening local search presence, our SEO services cover the key areas that contribute to a more useful and discoverable website."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {seoServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} delay={index * 0.05}>
                  <article className="group flex h-full flex-col rounded-[16px] border border-[#EAE2D8] bg-[#FCFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D3C1A7] hover:shadow-[0_18px_45px_-32px_rgba(18,40,71,.25)] sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-new-york)] text-[27px] text-[#D5C5AE]">
                        {service.number}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#A38561]">
                        <Icon size={19} />
                      </span>
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-[21px] text-[#122847]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3 border-t border-[#E9E0D5] pt-5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-[10px] leading-relaxed text-[#647487]"
                        >
                          <Check
                            size={13}
                            className="mt-0.5 shrink-0 text-[#B79A72]"
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

      {/* =================================================
          05. LOCAL SEO & GOOGLE MAPS
      ================================================= */}

      <section className="bg-[#F5F1EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                Local Search & Maps
              </p>

              <h2 className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]">
                Local SEO That Reflects{" "}
                <span className="text-[#B79A72]">Your Business Area.</span>
              </h2>

              <p className="mt-5 text-[12px] leading-[2] text-[#718092]">
                Local SEO is not just about adding a location name to a
                webpage. Your business information, website content,
                Google Business Profile and service relevance should work
                together to support local discovery.
              </p>

              <Link
                href="/services/search-engine-optimization"
                title="Learn more about SEO services at Sharp Rays"
                className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold text-[#122847] transition-colors hover:text-[#A38561]"
              >
                Explore Our SEO Approach
                <ArrowUpRight size={15} />
              </Link>
            </Reveal>

            <div className="space-y-4">
              {localAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <Reveal key={area.title} delay={index * 0.08}>
                    <article className="flex gap-4 rounded-[15px] border border-[#E5DACA] bg-white p-5 sm:gap-6 sm:p-7">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#A38561]">
                          {area.subtitle}
                        </p>
                        <h3 className="mt-1 font-[var(--font-new-york)] text-[21px] text-[#122847]">
                          {area.title}
                        </h3>
                        <p className="mt-2 text-[11px] leading-[1.9] text-[#788594]">
                          {area.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          06. SEO PROCESS
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A Practical SEO Process,"
              highlight="Built Around Your Business."
              description="SEO needs a clear sequence of research, implementation and review. Our process helps organise the work around your website condition and business priorities."
              center
            />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <article className="relative h-full border-t border-[#DCCBB5] bg-[#FCFAF7] p-6 pt-7">
                  <span className="font-[var(--font-new-york)] text-[32px] text-[#B79A72]">
                    {step.number}
                  </span>

                  <h3 className="mt-6 font-[var(--font-new-york)] text-[20px] leading-snug text-[#122847]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          07. INDUSTRIES
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Support"
              title="SEO for Different"
              highlight="Business Requirements."
              description="Different industries attract customers in different ways. We plan SEO around the services you offer, the questions your audience asks and the searches that matter to your business."
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <Reveal key={industry} delay={index * 0.035}>
                <div className="flex items-center gap-4 border-b border-[#E7DED2] py-5">
                  <span className="font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[12px] font-medium text-[#122847]">
                    {industry}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          08. TECHNICAL SEO
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <Reveal>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                Website Foundations
              </p>

              <h2 className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[42px]">
                Technical SEO for a{" "}
                <span className="text-[#B79A72]">Healthier Website.</span>
              </h2>

              <p className="mt-5 text-[12px] leading-[2] text-[#718092]">
                Search visibility also depends on how your website is
                structured and accessed by search engines. We review
                technical issues that may affect crawling, indexing,
                usability and page understanding.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-xl border border-[#E9E0D5] bg-[#FCFAF7] p-4">
                <ShieldCheck size={21} className="text-[#A38561]" />
                <p className="text-[11px] leading-relaxed text-[#647487]">
                  Technical recommendations based on your website's actual
                  condition and SEO priorities.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {technicalItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-[#EAE3D9] py-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4EFE7] text-[#A38561]">
                      <Check size={13} />
                    </span>
                    <p className="text-[11px] leading-[1.8] text-[#647487]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =================================================
          09. WHY SHARP RAYS
      ================================================= */}

      <section className="bg-[#F5F1EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Sharp Rays"
              title="SEO With a Clearer"
              highlight="Business Perspective."
              description="We connect search optimisation with the bigger picture: your website, your audience, your local relevance and the enquiries you want to generate."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal key={reason.title} delay={index * 0.07}>
                  <article className="flex gap-5 rounded-[15px] border border-[#E5DACA] bg-white p-6 sm:p-8">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-[20px] text-[#122847]">
                        {reason.title}
                      </h3>
                      <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
                        {reason.description}
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
          10. OUR SEO APPROACH
      ================================================= */}

      <section className="bg-[#122847] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <Reveal>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C6A77A]">
              Beyond Rankings
            </p>

            <h2 className="max-w-[700px] font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] sm:text-[43px]">
              SEO Should Help People Understand{" "}
              <span className="text-[#C6A77A]">
                Why Your Business Matters.
              </span>
            </h2>

            <p className="mt-5 max-w-[720px] text-[12px] leading-[2] text-white/65">
              Search visibility is only one part of the customer journey.
              Your landing pages should explain your services, answer
              relevant questions and make the next step clear. We consider
              content usefulness, website experience and enquiry paths
              alongside technical and local SEO.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <Link
              href="/contact"
              title="Discuss your Bhayandar SEO requirements with Sharp Rays"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#C6A77A] px-6 py-4 text-[11px] font-semibold text-[#122847] transition-all hover:bg-[#D7BC96]"
            >
              Discuss Your SEO Goals
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          11. SEO PRICING
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="SEO Investment"
              title="Choose an SEO Plan"
              highlight="That Fits Your Scope."
              description="The right SEO plan depends on your website, target search terms, competition and the amount of work required. These are starting package options; final scope should be confirmed before engagement."
              center
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {seoPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.07}>
                <article
                  className={`relative flex h-full flex-col rounded-[17px] border p-7 sm:p-8 ${
                    plan.featured
                      ? "border-[#B79A72] bg-[#122847] text-white shadow-[0_25px_60px_-35px_rgba(18,40,71,.45)]"
                      : "border-[#E8DED1] bg-white text-[#122847]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#C6A77A] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#122847]">
                      Popular Choice
                    </span>
                  )}

                  <p
                    className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${
                      plan.featured ? "text-[#C6A77A]" : "text-[#A38561]"
                    }`}
                  >
                    {plan.name} SEO
                  </p>

                  <h3 className="mt-5 font-[var(--font-new-york)] text-[35px]">
                    {plan.price}
                  </h3>

                  <p
                    className={`mt-2 text-[11px] leading-[1.8] ${
                      plan.featured ? "text-white/60" : "text-[#788594]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`my-7 h-px ${
                      plan.featured ? "bg-white/15" : "bg-[#EAE3D9]"
                    }`}
                  />

                  <ul className="flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-[11px] ${
                          plan.featured ? "text-white/80" : "text-[#647487]"
                        }`}
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-[#B79A72]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    title={`Enquire about the ${plan.name} SEO plan`}
                    className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[10px] font-semibold transition-all ${
                      plan.featured
                        ? "bg-[#C6A77A] text-[#122847] hover:bg-[#D7BC96]"
                        : "border border-[#DCCFBD] text-[#122847] hover:border-[#B79A72] hover:bg-[#FCFAF7]"
                    }`}
                  >
                    Discuss This Plan
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-7 text-center text-[10px] leading-relaxed text-[#87919A]">
            Package inclusions and final pricing are subject to project
            requirements.{" "}
            <Link
              href="/pricing"
              title="View Sharp Rays pricing"
              className="font-semibold text-[#A38561] underline underline-offset-4"
            >
              View complete pricing details
            </Link>
          </p>
        </div>
      </section>

      {/* =================================================
          12. FAQ
      ================================================= */}

      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-seo-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
              Questions Before You Start
            </p>

            <h2
              id="bhayandar-seo-faq-heading"
              className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Useful information about SEO services, Google Maps
              optimisation and local search visibility for businesses
              around Bhayandar.
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
          <div className="relative overflow-hidden rounded-[20px] bg-[#122847] px-7 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-[340px] w-[340px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -left-20 -bottom-40 h-[340px] w-[340px] rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-[720px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C6A77A]">
                Start With an SEO Audit
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-white sm:text-[45px]">
                Ready to Improve Your{" "}
                <span className="text-[#C6A77A]">
                  Search Visibility?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[580px] text-[12px] leading-[2] text-white/65">
                Tell us about your business, website and SEO goals.
                We can start by understanding your current search
                presence and identifying practical opportunities.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  title="Request a free SEO audit from Sharp Rays"
                  className="inline-flex items-center gap-3 rounded-full bg-[#C6A77A] px-6 py-3.5 text-[11px] font-semibold text-[#122847] transition-colors hover:bg-[#D7BC96]"
                >
                  Request a Free SEO Audit
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/locations/bhayandar"
                  title="Explore digital marketing services in Bhayandar"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[11px] font-medium text-white transition-colors hover:border-[#C6A77A] hover:text-[#C6A77A]"
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
          INTERNAL LINKS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#E8DED1] pt-7 text-[10px] text-[#788594]">
          <Link
            href="/services/search-engine-optimization"
            title="Explore Sharp Rays SEO services"
            className="transition-colors hover:text-[#A38561]"
          >
            SEO Services
          </Link>

          <Link
            href="/locations/bhayandar"
            title="Digital marketing services in Bhayandar"
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
            href="/locations/mira-road/seo"
            title="SEO services in Mira Road"
            className="transition-colors hover:text-[#A38561]"
          >
            SEO in Mira Road
          </Link>

          <Link
            href="/locations/naigaon/seo"
            title="SEO services in Naigaon"
            className="transition-colors hover:text-[#A38561]"
          >
            SEO in Naigaon
          </Link>
        </div>
      </section>
    </>
  );
}
