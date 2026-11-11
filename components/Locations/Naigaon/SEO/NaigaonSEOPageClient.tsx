
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  Globe,
  MapPin,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Building2,
  FileSearch,
  MapPinned,
  Gauge,
  Link2,
  MousePointerClick,
} from "lucide-react";

const services = [
  {
    icon: MapPinned,
    title: "Local SEO",
    description:
      "Improve your visibility in location-based searches and help nearby customers discover your business.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Identify relevant search terms based on your services, customer intent and local competition.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Improve website structure, crawlability, indexing, page speed and technical search performance.",
  },
  {
    icon: FileSearch,
    title: "On-Page SEO",
    description:
      "Optimise page titles, headings, content, internal links and search intent across important pages.",
  },
  {
    icon: Link2,
    title: "Content & Authority",
    description:
      "Build useful website content and a relevant authority strategy that supports long-term organic visibility.",
  },
  {
    icon: BarChart3,
    title: "SEO Reporting",
    description:
      "Monitor organic visibility, search queries, website performance and opportunities for improvement.",
  },
];

const challenges = [
  {
    title: "Not appearing in local searches",
    description:
      "Potential customers may search for a service near Naigaon but never discover your business.",
  },
  {
    title: "Website traffic without enquiries",
    description:
      "Visitors are only valuable when your pages answer their questions and make the next step clear.",
  },
  {
    title: "Weak Google Maps visibility",
    description:
      "Incomplete business information, inconsistent details and weak local relevance can affect local discovery.",
  },
  {
    title: "Pages targeting the wrong keywords",
    description:
      "Broad keywords may attract visitors who are not looking for the services your business actually provides.",
  },
  {
    title: "Slow or poorly structured websites",
    description:
      "Technical problems can make it harder for search engines and visitors to use your website.",
  },
  {
    title: "No clear SEO direction",
    description:
      "Without tracking and a defined strategy, businesses can spend time on changes that do not address their actual search opportunities.",
  },
];

const localAreas = [
  "Naigaon Station",
  "Naigaon West",
  "Juchandra",
  "Chandrapada",
];

const industries = [
  "Beauty & Wellness",
  "Ecommerce",
  "Education",
  "Healthcare",
  "Manufacturing",
  "Professional Services",
  "Real Estate",
  "Restaurants",
  "Startups",
  "Travel & Hospitality",
];

const process = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We learn about your services, target customers, website and business goals before recommending SEO activities.",
  },
  {
    number: "02",
    title: "SEO audit & research",
    description:
      "We review your website, technical health, search visibility, keywords and relevant local search opportunities.",
  },
  {
    number: "03",
    title: "Build the strategy",
    description:
      "We prioritise technical fixes, important landing pages, local SEO improvements and content opportunities.",
  },
  {
    number: "04",
    title: "Optimise & improve",
    description:
      "We implement agreed improvements across website content, technical SEO and local search presence.",
  },
  {
    number: "05",
    title: "Measure & refine",
    description:
      "We review available performance data and use the findings to guide the next round of improvements.",
  },
];

const faqs = [
  {
    question: "What are SEO services?",
    answer:
      "SEO services improve a website's visibility in unpaid search results. They can include keyword research, technical SEO, on-page optimisation, content improvements, local SEO and performance monitoring.",
  },
  {
    question: "Do you provide SEO services in Naigaon?",
    answer:
      "Yes. Sharp Rays offers SEO services for businesses targeting customers in Naigaon and nearby areas. The strategy can include local keyword research, website optimisation, Google Business Profile guidance and relevant content improvements.",
  },
  {
    question: "Can SEO help my business appear on Google Maps?",
    answer:
      "Local SEO can help improve the information and relevance signals associated with your Google Business Profile and website. Google Maps visibility depends on factors such as relevance, distance and prominence, so no agency can guarantee a particular position.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a gradual process. The timeline depends on your website's current condition, competition, industry, search demand and the work required. Meaningful progress is generally evaluated over several months rather than a few days.",
  },
  {
    question: "Is local SEO useful for businesses near Naigaon Station?",
    answer:
      "Local SEO can be useful for businesses that serve customers around Naigaon Station, Naigaon West, Juchandra and nearby areas. It helps align business information and website content with relevant local searches.",
  },
  {
    question: "What is included in your SEO service?",
    answer:
      "Depending on the agreed scope, SEO work may include keyword research, technical checks, on-page optimisation, local SEO, content recommendations, internal linking and performance reporting.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. SEO strategies can be planned for small businesses as well as growing companies. The priorities and scope should reflect the business goals, website condition and available budget.",
  },
  {
    question: "Do I need a website for local SEO?",
    answer:
      "A Google Business Profile can support local discovery, but a well-structured website gives your business more room to explain services, answer customer questions and build relevant search landing pages.",
  },
  {
    question: "Can you optimise an existing website?",
    answer:
      "Yes. An existing website can be audited for technical issues, content quality, page structure, keyword targeting, internal links and local search opportunities before improvements are prioritised.",
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "No responsible SEO provider can guarantee a specific Google ranking. Search results change and depend on multiple factors outside an agency's control. SEO should focus on improving relevance, website quality and measurable organic performance.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "The cost depends on the scope, competition, website condition and amount of ongoing work required. Sharp Rays has service packages starting at ₹14,999. Visit the pricing page for the available package details.",
  },
  {
    question: "Can SEO help real estate businesses in Naigaon?",
    answer:
      "SEO can help real estate businesses create useful pages for projects, property types, locations and buyer questions. The content should be accurate, specific and genuinely useful to people researching property in the area.",
  },
  {
    question: "How do we get started with Sharp Rays?",
    answer:
      "Start by contacting Sharp Rays with your website and business details. We can understand your goals and discuss an appropriate SEO audit and strategy.",
  },
];

const seoPlans = [
  {
    name: "Starter",
    price: "₹14,999",
    description: "For businesses beginning their SEO journey.",
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "For businesses looking to build stronger organic visibility.",
    featured: true,
  },
  {
    name: "Advanced",
    price: "₹39,999",
    description: "For businesses requiring a broader SEO strategy.",
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

export default function NaigaonSEOPageClient() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 01 — HERO | LIGHT IVORY */}
      <section className="relative isolate overflow-hidden bg-[#FCFAF7] px-5 pb-24 pt-28 text-[#122847] sm:px-8 sm:pb-32 sm:pt-36 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#122847]/10 bg-white px-4 py-2 text-xs tracking-wide text-[#667085]">
              <MapPin size={13} className="text-[#A88659]" />
              SEO Services · Naigaon, Maharashtra
            </div>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              SEO Services for{" "}
              <span className="font-serif italic text-[#A88659]">
                Naigaon
              </span>{" "}
              Businesses
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Get discovered by the right people. Build a stronger search
              presence with practical SEO, local search optimisation and
              website improvements designed around your business goals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?source=naigaon-seo"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A88659]"
              >
                Discuss Your SEO <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/services/search-engine-optimization"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#122847]/15 bg-white px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#A88659] hover:bg-[#F2F0EA]"
              >
                Explore SEO Services <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#667085]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" /> Local SEO
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" /> Technical SEO
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" /> Organic Growth
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-white p-5 shadow-xl shadow-[#122847]/[0.06] sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-wider text-[#98A2B3]">
                    SEARCH VISIBILITY
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#122847]">
                    Your organic presence
                  </p>
                </div>
                <div className="rounded-full bg-[#F2F0EA] p-3 text-[#A88659]">
                  <TrendingUp size={21} />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  ["Local search", "Location relevance"],
                  ["Website health", "Technical foundations"],
                  ["Search content", "Useful landing pages"],
                ].map(([title, subtitle], index) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      {index === 0 ? (
                        <MapPin size={19} />
                      ) : index === 1 ? (
                        <Gauge size={19} />
                      ) : (
                        <FileSearch size={19} />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#122847]">
                        {title}
                      </p>
                      <p className="mt-1 text-xs text-[#98A2B3]">
                        {subtitle}
                      </p>
                    </div>
                    <Check className="ml-auto text-[#A88659]" size={17} />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#122847] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C6A77A]">
                  The objective
                </p>
                <p className="mt-2 text-xl font-medium leading-snug">
                  Better visibility. More relevant visitors. Clearer enquiries.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-[#B79A72]/20 blur-3xl" />
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER | WHITE */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="rounded-3xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 sm:p-10">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A88659]">
                <Sparkles size={15} /> A quick answer
              </div>
              <p className="text-lg leading-8 text-[#344054] sm:text-xl sm:leading-9">
                Sharp Rays provides SEO services in Naigaon, including local
                SEO, keyword research, technical SEO, on-page optimisation and
                content strategy. We help businesses improve their website's
                search foundations and target relevant searches around Naigaon
                Station, Naigaon West, Juchandra and Chandrapada.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — SEO CHALLENGES | SOFT IVORY */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 / The search challenge"
            title={
              <>
                Being online is not the same as{" "}
                <span className="font-serif italic text-[#A88659]">
                  being discovered.
                </span>
              </>
            }
            description="A website needs more than attractive design. It needs the right structure, useful information and a clear connection to what people are searching for."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                  <span className="text-xs font-semibold tracking-widest text-[#B79A72]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — SEO SERVICES | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 / What we do"
            title={
              <>
                SEO built around your{" "}
                <span className="font-serif italic text-[#A88659]">
                  business goals.
                </span>
              </>
            }
            description="A practical SEO approach brings together your website, content and local search presence. The work starts with understanding what needs improvement."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <div className="group h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A] transition group-hover:bg-[#C6A77A] group-hover:text-[#122847]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services/search-engine-optimization"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
            >
              Explore our complete SEO service <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — LOCAL SEO | SOFT IVORY */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="03 / Local SEO in Naigaon"
              title={
                <>
                  Help nearby customers{" "}
                  <span className="font-serif italic text-[#A88659]">
                    find your business.
                  </span>
                </>
              }
              description="Local SEO helps connect your business with people searching for relevant products and services in a particular area. It combines accurate business information, useful local pages and a strong website foundation."
            />

            <div className="space-y-4">
              {[
                "Google Business Profile optimisation guidance",
                "Local keyword and search-intent research",
                "Location-focused website content",
                "Consistent business information",
                "Local landing page optimisation",
                "Relevant internal linking",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#122847] text-white">
                    <Check size={12} />
                  </span>
                  <p className="text-sm leading-6 text-[#475467]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[2rem] bg-[#122847] p-8 text-white sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <MapPin className="text-[#C6A77A]" size={22} />
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                    Local relevance
                  </p>
                </div>
                <h3 className="max-w-md text-3xl font-medium leading-tight tracking-tight">
                  Build a search presence around the places you serve.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Your local SEO strategy should reflect genuine service areas
                  and the searches that matter to your customers.
                </p>

                <div className="mt-9 grid grid-cols-2 gap-3">
                  {localAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] p-4 text-sm"
                    >
                      <MapPin size={14} className="shrink-0 text-[#C6A77A]" />
                      {area}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-6 text-white/40">
                  These are geographic areas to consider when they genuinely
                  match your business's service coverage.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — SEO PROCESS | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="04 / Our approach"
            title={
              <>
                A clear process.{" "}
                <span className="font-serif italic text-[#A88659]">
                  Meaningful improvements.
                </span>
              </>
            }
            description="SEO is not a one-time switch. It is a process of understanding, prioritising, implementing and refining."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <div className="relative h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-6">
                  <p className="font-serif text-4xl italic text-[#B79A72]">
                    {step.number}
                  </p>
                  <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — INDUSTRIES | SOFT IVORY */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="05 / Industries"
            title={
              <>
                SEO shaped by your{" "}
                <span className="font-serif italic text-[#A88659]">
                  industry.
                </span>
              </>
            }
            description="Different businesses attract customers in different ways. Keyword selection, website content and conversion paths should reflect how people research and choose services in your industry."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry, index) => (
              <Reveal key={industry} delay={index * 0.035}>
                <div className="flex min-h-28 flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white p-5 transition hover:border-[#B79A72]">
                  <Building2 className="text-[#B79A72]" size={20} />
                  <p className="mt-5 text-sm font-medium">{industry}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — TECHNICAL SEO | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="06 / Technical SEO"
              title={
                <>
                  Strong search visibility starts with a{" "}
                  <span className="font-serif italic text-[#A88659]">
                    healthy website.
                  </span>
                </>
              }
              description="Your website should be easy to crawl, understand and navigate. Technical SEO helps identify issues that may affect search engines and the experience of your visitors."
            />
            <Link
              href="/services/search-engine-optimization"
              className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A88659]"
            >
              Explore technical SEO <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Gauge,
                  title: "Page speed",
                  text: "Loading performance and Core Web Vitals.",
                },
                {
                  icon: Code2,
                  title: "Crawlability",
                  text: "Help search engines access important pages.",
                },
                {
                  icon: ShieldCheck,
                  title: "Indexing",
                  text: "Review indexing signals and technical errors.",
                },
                {
                  icon: MousePointerClick,
                  title: "User experience",
                  text: "Clear navigation and mobile usability.",
                },
                {
                  icon: Globe,
                  title: "Site structure",
                  text: "Logical URLs, headings and page hierarchy.",
                },
                {
                  icon: Link2,
                  title: "Internal links",
                  text: "Connect related pages and important content.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-6"
                  >
                    <Icon size={21} className="text-[#A88659]" />
                    <h3 className="mt-5 font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — WHY SHARP RAYS | SOFT IVORY */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="07 / Why Sharp Rays"
            title={
              <>
                Strategy before shortcuts.{" "}
                <span className="font-serif italic text-[#A88659]">
                  Clarity before activity.
                </span>
              </>
            }
            description="We approach SEO as part of your wider digital presence, connecting search visibility with website quality, content and the actions you want visitors to take."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Business-first thinking",
                text: "SEO priorities should support your actual services, audience and business objectives.",
              },
              {
                icon: ShieldCheck,
                title: "Sustainable practices",
                text: "We focus on useful content, sound technical foundations and relevant optimisation rather than ranking promises.",
              },
              {
                icon: Users,
                title: "Connected digital services",
                text: "SEO works alongside website development, content and social media to create a more consistent online presence.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 — PORTFOLIO | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="08 / Our work"
              title={
                <>
                  Good SEO is built on{" "}
                  <span className="font-serif italic text-[#A88659]">
                    thoughtful execution.
                  </span>
                </>
              }
              description="Every website has a different starting point. Our approach begins with understanding the existing structure and identifying what deserves attention first."
            />
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] hover:text-[#A88659]"
            >
              Explore our work <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-[#E8E2D8] bg-[#FCFAF7] p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A88659]">
                What we evaluate
              </p>
              <div className="mt-7 space-y-5">
                {[
                  [
                    "Website structure",
                    "How clearly important pages are organised.",
                  ],
                  [
                    "Search intent",
                    "Whether your pages answer the right questions.",
                  ],
                  [
                    "Technical foundations",
                    "Whether search engines can access and understand your content.",
                  ],
                  [
                    "Conversion experience",
                    "Whether visitors can easily enquire or take the next step.",
                  ],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className="flex gap-4 border-b border-[#E8E2D8] pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-serif text-2xl italic text-[#B79A72]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-medium">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#667085]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11 — PRICING | SOFT IVORY */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="09 / SEO investment"
            title={
              <>
                Choose a starting point for{" "}
                <span className="font-serif italic text-[#A88659]">
                  organic growth.
                </span>
              </>
            }
            description="The right SEO scope depends on your website, competition and business objectives. Explore the available packages before deciding what fits."
            centered
          />

          <div className="grid gap-5 md:grid-cols-3">
            {seoPlans.map((plan, index) => (
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
                      Popular
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
                  </p>
                  <p
                    className={`mt-3 min-h-12 text-sm leading-6 ${
                      plan.featured ? "text-white/55" : "text-[#667085]"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <div
                    className={`my-7 border-t ${
                      plan.featured
                        ? "border-white/15"
                        : "border-[#E8E2D8]"
                    }`}
                  />
                  <ul className="mb-8 space-y-3 text-sm">
                    {[
                      "SEO strategy discussion",
                      "Scope based on business needs",
                      "Website and search priorities",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check
                          size={16}
                          className="shrink-0 text-[#B79A72]"
                        />
                        {item}
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
                    View Package Details <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-7 text-center text-xs leading-6 text-[#667085]">
            Package suitability and final scope should be confirmed before
            starting. See the full details on our{" "}
            <Link
              href="/pricing"
              className="font-semibold underline underline-offset-4"
            >
              pricing page
            </Link>.
          </p>
        </div>
      </section>

    
{/* 12 — FAQs */}
<section
  className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
  aria-labelledby="naigaon-seo-faq-heading"
>
  <div className="mx-auto max-w-[1220px]">
    <Reveal className="mx-auto max-w-[800px] text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
        Questions Before You Start
      </p>

      <h2
        id="naigaon-seo-faq-heading"
        className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
      >
        Frequently Asked{" "}
        <span className="text-[#B79A72]">Questions.</span>
      </h2>

      <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
        Clear answers about SEO services, local search visibility and growing
        your business online in Naigaon.
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


      {/* 13 — FINAL CTA | NAVY */}
      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Your next step starts here
          </p>
          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Make your business easier to{" "}
            <span className="font-serif italic text-[#C6A77A]">
              discover.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Let's understand your website, your search opportunities and the
            SEO improvements that make sense for your business in Naigaon.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?source=naigaon-seo-final"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
            >
              Start a Conversation <ArrowUpRight size={17} />
            </Link>
            <Link
              href="/locations/naigaon"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Naigaon Services <ArrowRight size={16} />
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/35">
            Sharp Rays · We Create the “Oh, Wow.”!
          </p>
        </Reveal>
      </section>
    </main>
  );
}
