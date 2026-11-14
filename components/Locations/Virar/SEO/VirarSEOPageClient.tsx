
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  Compass,
  FileSearch,
  Gauge,
  Globe,
  Link2,
  MapPin,
  MapPinned,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Utensils,
  Hotel,
  Store,
  Waves,
} from "lucide-react";

/* =====================================================
   BRAND
===================================================== */

const C = {
  navy: "#0B2A52",
  gold: "#C6A77A",
  ivory: "#FCFAF7",
  muted: "#66758A",
  line: "#E8E4DD",
};

/* =====================================================
   SEO SERVICES
===================================================== */

const services = [
  {
    icon: MapPinned,
    title: "Local SEO",
    description:
      "Improve local search relevance for businesses serving Virar West, Global City and other genuine service areas.",
    points: [
      "Local keyword research",
      "Google Business Profile guidance",
      "Location page optimisation",
    ],
  },
  {
    icon: Search,
    title: "Keyword Research",
    description:
      "Identify the search terms potential customers use when looking for your products, services and local businesses.",
    points: [
      "Search intent analysis",
      "Competitor keyword research",
      "Keyword-to-page mapping",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Review your website's technical foundations to help search engines crawl, understand and index important pages.",
    points: [
      "Crawl and indexing checks",
      "Website structure review",
      "Technical issue identification",
    ],
  },
  {
    icon: FileSearch,
    title: "On-Page SEO",
    description:
      "Improve page titles, headings, content, internal links and page structure around relevant search intent.",
    points: [
      "Metadata optimisation",
      "Content and heading improvements",
      "Internal linking",
    ],
  },
  {
    icon: Globe,
    title: "Content SEO",
    description:
      "Create useful service and informational content that answers customer questions and supports organic discovery.",
    points: [
      "Content planning",
      "Service page optimisation",
      "Topic and search intent research",
    ],
  },
  {
    icon: BarChart3,
    title: "SEO Monitoring",
    description:
      "Review organic search performance and identify opportunities for continued website and search improvements.",
    points: [
      "Google Search Console review",
      "Search performance analysis",
      "Ongoing recommendations",
    ],
  },
];

/* =====================================================
   BUSINESS CHALLENGES
===================================================== */

const challenges = [
  {
    title: "Your business is difficult to find locally",
    description:
      "People searching for shops, services and businesses around Virar may not discover your website or business information.",
  },
  {
    title: "Your Google Maps presence needs attention",
    description:
      "Incomplete business information, inconsistent details and weak local relevance can affect how customers discover your business.",
  },
  {
    title: "Your website attracts visitors but few enquiries",
    description:
      "Traffic is more useful when your landing pages explain your services clearly and make it easy for visitors to contact you.",
  },
  {
    title: "Your pages target the wrong searches",
    description:
      "Broad keywords may bring visitors who are not looking for your actual products, services or business location.",
  },
  {
    title: "Your website has technical SEO issues",
    description:
      "Indexing, crawlability, page speed and website structure issues can make important pages harder to discover.",
  },
  {
    title: "You do not have a clear SEO strategy",
    description:
      "Without keyword priorities and performance reviews, SEO activities can become disconnected from your business goals.",
  },
];

/* =====================================================
   LOCAL SEARCH AREAS
===================================================== */

const localAreas = [
  {
    number: "01",
    name: "Virar West",
    category: "LOCAL BUSINESS & RETAIL",
    description:
      "Local SEO can help shops, retailers, restaurants and service providers improve their relevance for searches made by customers looking for businesses in Virar West.",
    focus: [
      "Local business searches",
      "Google Maps information",
      "Shop and service pages",
    ],
    icon: Store,
  },
  {
    number: "02",
    name: "Global City",
    category: "RESIDENTIAL & NEIGHBOURHOOD BUSINESSES",
    description:
      "Businesses serving the Global City area can benefit from useful location-specific pages, accurate business information and relevant local search optimisation.",
    focus: [
      "Neighbourhood service searches",
      "Local business visibility",
      "Relevant landing pages",
    ],
    icon: Building2,
  },
  {
    number: "03",
    name: "Agashi",
    category: "TOURISM & HOSPITALITY",
    description:
      "Tourism and hospitality businesses around Agashi can use search-focused content to explain their experiences, services, facilities and visitor information.",
    focus: [
      "Tourism-related keywords",
      "Hospitality content",
      "Useful visitor information",
    ],
    icon: Compass,
  },
  {
    number: "04",
    name: "Arnala",
    category: "TOURISM & LOCAL EXPERIENCES",
    description:
      "Businesses serving visitors around Arnala can develop relevant content around accommodation, local experiences, attractions and hospitality services.",
    focus: [
      "Travel and tourism searches",
      "Accommodation pages",
      "Local experience content",
    ],
    icon: Waves,
  },
];

/* =====================================================
   SEO PROCESS
===================================================== */

const process = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We learn about your services, target customers, website, service coverage and business objectives.",
  },
  {
    number: "02",
    title: "SEO audit and research",
    description:
      "We review your website health, search visibility, keywords, content and relevant local search opportunities.",
  },
  {
    number: "03",
    title: "Build the strategy",
    description:
      "We prioritise technical improvements, important landing pages, local SEO and content opportunities.",
  },
  {
    number: "04",
    title: "Optimise and implement",
    description:
      "We work on agreed improvements across website content, page structure, technical SEO and local search.",
  },
  {
    number: "05",
    title: "Measure and refine",
    description:
      "We review available performance data and use the findings to guide further SEO improvements.",
  },
];

/* =====================================================
   INDUSTRIES
===================================================== */

const industries = [
  {
    icon: Store,
    title: "Retail and local shops",
    description:
      "Improve local discovery through relevant business information, product categories and location-focused pages.",
    focus: "Local SEO · Google Maps · Product content",
  },
  {
    icon: Building2,
    title: "Real estate and property",
    description:
      "Organise project pages, property information and location content around genuine buyer and renter searches.",
    focus: "Project SEO · Location pages · Search content",
  },
  {
    icon: Utensils,
    title: "Restaurants and food businesses",
    description:
      "Help customers discover relevant menus, services, location information and hospitality offerings.",
    focus: "Local SEO · Business information · Content",
  },
  {
    icon: Hotel,
    title: "Tourism and hospitality",
    description:
      "Build useful search content around accommodation, visitor experiences, facilities and tourism-related services.",
    focus: "Tourism SEO · Service pages · Informational content",
  },
  {
    icon: Users,
    title: "Professional services",
    description:
      "Make service offerings easier to understand through focused landing pages and relevant search targeting.",
    focus: "Service page SEO · Keyword research · Content",
  },
  {
    icon: Globe,
    title: "Startups and growing businesses",
    description:
      "Establish stronger organic search foundations through technical improvements and a structured content strategy.",
    focus: "Technical SEO · Content strategy · Organic visibility",
  },
];

/* =====================================================
   TECHNICAL SEO
===================================================== */

const technicalSEO = [
  {
    icon: Gauge,
    title: "Website performance",
    description:
      "Review loading performance, mobile experience and Core Web Vitals.",
  },
  {
    icon: Search,
    title: "Crawlability",
    description:
      "Check whether search engines can access important website pages.",
  },
  {
    icon: ShieldCheck,
    title: "Indexing",
    description:
      "Review indexing signals, canonical URLs, robots directives and sitemap issues.",
  },
  {
    icon: Globe,
    title: "Website structure",
    description:
      "Organise URLs, headings and page hierarchy for clarity.",
  },
  {
    icon: Link2,
    title: "Internal linking",
    description:
      "Connect relevant service pages, location pages and useful content.",
  },
  {
    icon: FileSearch,
    title: "On-page quality",
    description:
      "Review page titles, descriptions, content relevance and search intent.",
  },
];

/* =====================================================
   WHY SHARP RAYS
===================================================== */

const reasons = [
  {
    icon: Target,
    title: "Business-first SEO",
    description:
      "SEO priorities should support your actual services, target audience and business objectives.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable optimisation",
    description:
      "We focus on useful content, sound technical foundations and relevant optimisation rather than ranking promises.",
  },
  {
    icon: Users,
    title: "Connected digital services",
    description:
      "SEO works alongside website development, content and social media to create a more consistent online presence.",
  },
];

/* =====================================================
   SEO FAQ
===================================================== */

const faqs = [
  {
    question: "Do you provide SEO services near Virar Station?",
    answer:
      "Yes. Sharp Rays provides SEO services for businesses targeting customers around Virar and nearby service areas. The strategy can include local SEO, keyword research, technical SEO, on-page optimisation and content improvements.",
  },
  {
    question: "Can SEO help shops in Virar West appear on Google Maps?",
    answer:
      "Local SEO can help improve your business information, website relevance and Google Business Profile. Google Maps visibility also depends on relevance, distance and prominence, so no particular position can be guaranteed.",
  },
  {
    question: "Do you provide local SEO for Global City businesses?",
    answer:
      "Local SEO can be planned for businesses serving Global City where the location is relevant to their actual service coverage. This may include location-focused website content and accurate business information.",
  },
  {
    question: "Can SEO help tourism businesses in Agashi and Arnala?",
    answer:
      "Tourism and hospitality businesses can use SEO to organise useful content around accommodation, visitor experiences, facilities, local attractions and relevant travel-related searches.",
  },
  {
    question: "What is included in your SEO services?",
    answer:
      "Depending on the agreed scope, SEO work may include keyword research, technical checks, on-page optimisation, local SEO, content recommendations, internal linking and performance monitoring.",
  },
  {
    question: "Can you improve my Google Business Profile?",
    answer:
      "We can help review your business information and provide optimisation guidance for your Google Business Profile as part of a local SEO strategy.",
  },
  {
    question: "Can you optimise an existing website?",
    answer:
      "Yes. An existing website can be reviewed for technical issues, indexing, content quality, keyword targeting, page structure, internal linking and local search opportunities.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a gradual process. The timeline depends on your website's current condition, competition, industry, search demand and the improvements required. Progress should be evaluated over time rather than a few days.",
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "No responsible SEO provider can guarantee a specific Google ranking or Maps position. Search results depend on several factors outside an agency's control. SEO should focus on website quality, relevance and measurable organic performance.",
  },
  {
    question: "Do you work with small businesses in Virar?",
    answer:
      "Yes. SEO strategies can be planned for local shops, service providers, hospitality businesses and growing companies. The scope should reflect the business goals, website condition and available budget.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "The cost depends on your website, competition, requirements and ongoing work. Sharp Rays has SEO packages starting at ₹14,999. Visit the pricing page for package details.",
  },
  {
    question: "How do I get started with Sharp Rays?",
    answer:
      "Contact Sharp Rays with your website, business type and primary SEO objective. We can understand your requirements and discuss an appropriate audit and strategy.",
  },
];

/* =====================================================
   PRICING
===================================================== */

const seoPlans = [
  {
    name: "Starter",
    price: "₹14,999",
    description: "For businesses beginning their SEO journey.",
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "For businesses building a stronger organic presence.",
    featured: true,
  },
  {
    name: "Advanced",
    price: "₹39,999",
    description: "For businesses requiring a broader SEO strategy.",
  },
];

/* =====================================================
   ANIMATION
===================================================== */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* =====================================================
   EYEBROW
===================================================== */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#C6A77A]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#66758A]">
        {children}
      </span>
    </div>
  );
}

/* =====================================================
   SECTION HEADING
===================================================== */

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
      <div className={centered ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>

      <h2 className="font-[var(--font-new-york)] text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[#0B2A52] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-8 text-[#66758A] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* =====================================================
   FAQ STRUCTURED DATA
===================================================== */

function VirarSEOStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.sharprays.com/locations/virar/seo#faq",
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

export default function VirarSEOPageClient() {
 
return (
  <main className="overflow-hidden bg-[#FCFAF7] text-[#0B2A52]">
    <VirarSEOStructuredData />

    {/* 01 — HERO */}
    <section className="relative isolate overflow-hidden bg-[#F7F4EE] px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[650px] w-[650px] rounded-full border border-[#C6A77A]/25" />
      <div className="pointer-events-none absolute -right-10 -top-20 h-[420px] w-[420px] rounded-full border border-[#C6A77A]/20" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#C6A77A]/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#C6A77A]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#8B765B]">
              SEO Services · Virar, Maharashtra
            </span>
          </div>

          <h1 className="mt-8 max-w-3xl font-[var(--font-new-york)] text-[43px] leading-[1.04] tracking-[-0.055em] text-[#0B2A52] sm:text-6xl lg:text-[76px]">
            SEO Services
            <span className="block italic text-[#AE895C]">for Virar</span>
            Businesses
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-8 text-[#66758A] sm:text-base">
            Improve your organic search presence with practical SEO and
            Google Maps optimisation strategies. From shops in Virar West
            and Global City to tourism and hospitality businesses serving
            Agashi and Arnala, build a search strategy around the customers
            you want to reach.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact?source=virar-seo"
              title="Book a free SEO audit for your Virar business"
              className="group inline-flex items-center gap-4 rounded-full bg-[#0B2A52] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#173D68]"
            >
              Book a Free SEO Audit
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services/search-engine-optimization"
              title="Explore Sharp Rays SEO services"
              className="inline-flex items-center gap-3 rounded-full border border-[#D8D0C4] bg-white/70 px-6 py-4 text-xs font-semibold text-[#0B2A52] transition hover:border-[#C6A77A]"
            >
              Explore SEO Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DED8CE] pt-6">
            {["Local SEO", "Google Maps", "Technical SEO"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[11px] text-[#66758A]">
                <Check size={13} className="text-[#AE895C]" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#C6A77A]/15 blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#E5DED2] bg-white p-5 shadow-[0_30px_90px_rgba(11,42,82,0.10)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#EAE5DD] pb-5">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
                    Local search strategy
                  </span>
                  <h3 className="mt-2 font-[var(--font-new-york)] text-2xl text-[#0B2A52]">
                    Your visibility map
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2EADF] text-[#A78354]">
                  <MapPinned size={22} />
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[1.4rem] bg-[#F4F1EA] p-5">
                <div className="absolute -right-8 -top-10 h-48 w-48 rounded-full border border-[#C6A77A]/30" />
                <div className="absolute -right-2 top-0 h-32 w-32 rounded-full border border-[#C6A77A]/25" />

                <div className="relative space-y-3">
                  {[
                    { name: "Virar West", type: "Local shops & businesses", icon: Store },
                    { name: "Global City", type: "Neighbourhood services", icon: Building2 },
                    { name: "Agashi", type: "Tourism & hospitality", icon: Compass },
                    { name: "Arnala", type: "Travel & local experiences", icon: Waves },
                  ].map((area, i) => {
                    const Icon = area.icon;
                    return (
                      <div key={area.name} className="flex items-center gap-3 rounded-xl border border-white bg-white/90 p-3.5 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2A52] text-[#D9BD95]">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#0B2A52]">{area.name}</p>
                          <p className="mt-1 text-[10px] text-[#8390A0]">{area.type}</p>
                        </div>
                        <span className="ml-auto text-[9px] font-semibold text-[#A78354]">
                          0{i + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#0B2A52] p-4 text-white">
                  <Search size={18} className="text-[#D9BD95]" />
                  <p className="mt-3 text-xs font-semibold">Organic SEO</p>
                  <p className="mt-1 text-[10px] text-white/50">Search relevance</p>
                </div>
                <div className="rounded-xl bg-[#F1E8DB] p-4 text-[#0B2A52]">
                  <MapPin size={18} className="text-[#A78354]" />
                  <p className="mt-3 text-xs font-semibold">Local SEO</p>
                  <p className="mt-1 text-[10px] text-[#66758A]">Local discovery</p>
                </div>
              </div>

              <p className="mt-5 text-center text-[9px] tracking-wide text-[#8994A1]">
                A location-focused approach based on genuine service coverage
              </p>
            </div>

            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-[#E8E4DD] bg-white px-5 py-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2EADF] text-[#A78354]">
                  <TrendingUp size={17} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#0B2A52]">SEO foundations</p>
                  <p className="mt-1 text-[9px] text-[#8A96A5]">Research · Optimisation · Review</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 02 — DIRECT ANSWER */}
    <section className="bg-[#0B2A52] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
      <Reveal className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[190px_1fr] lg:items-start">
        <div>
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D9BD95]">
            A quick answer
          </span>
          <div className="mt-4 h-px w-12 bg-[#C6A77A]" />
        </div>
        <p className="max-w-5xl font-[var(--font-new-york)] text-xl leading-[1.65] text-white/90 sm:text-2xl">
          Sharp Rays provides SEO services for businesses in Virar,
          including local SEO, Google Maps optimisation guidance, keyword
          research, technical SEO, on-page optimisation and content
          improvements. Our approach considers the different search
          requirements of local shops in Virar West and Global City, as
          well as tourism and hospitality businesses serving Agashi and
          Arnala.
        </p>
      </Reveal>
    </section>

    {/* 03 — CHALLENGES */}
    <section className="bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>01 / The search challenge</Eyebrow>
              <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] tracking-tight text-[#0B2A52] sm:text-5xl">
                Being online is not the same as
                <span className="block italic text-[#A78354]">being discovered.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-[#66758A] lg:justify-self-end">
              A website needs more than attractive design. It needs the right
              structure, useful information and a clear connection to what
              people are searching for.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-[#E8E4DD] bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(11,42,82,0.07)]">
                <span className="absolute right-6 top-4 font-[var(--font-new-york)] text-6xl text-[#F0EAE0] transition group-hover:text-[#E9DDCB]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <div className="h-1 w-10 bg-[#C6A77A] transition-all duration-500 group-hover:w-20" />
                  <h3 className="mt-9 max-w-[250px] font-[var(--font-new-york)] text-xl leading-snug text-[#0B2A52]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-7 text-[#66758A]">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 04 — SERVICES */}
    <section className="relative overflow-hidden bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C6A77A]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>02 / What we do</Eyebrow>
              <h2 className="max-w-2xl font-[var(--font-new-york)] text-4xl leading-[1.1] tracking-tight text-[#0B2A52] sm:text-5xl">
                SEO built around your
                <span className="block italic text-[#A78354]">business goals.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-8 text-[#66758A]">
              A practical SEO approach brings together your website, content
              and local search presence. The work starts with understanding
              what needs improvement.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.04}>
                <article className="group relative grid h-full gap-6 overflow-hidden rounded-[1.6rem] border border-[#E1DCD2] bg-[#FCFAF7] p-7 transition-all duration-500 hover:border-[#C6A77A]/70 hover:bg-white sm:grid-cols-[85px_1fr] sm:p-9">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A52] text-[#D9BD95] transition-all duration-300 group-hover:rotate-[-6deg] group-hover:bg-[#C6A77A] group-hover:text-[#0B2A52]">
  <Icon size={23} strokeWidth={1.6} />
</div>

                  <div>
                    <h3 className="font-[var(--font-new-york)] text-2xl text-[#0B2A52]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#66758A]">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span key={point} className="rounded-full border border-[#E7E0D5] bg-white px-3 py-2 text-[10px] text-[#66758A]">
                          <Check size={11} className="mr-1 inline text-[#A78354]" />
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C6A77A] transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services/search-engine-optimization"
            title="Explore complete Sharp Rays SEO services"
            className="inline-flex items-center gap-3 rounded-full bg-[#0B2A52] px-7 py-4 text-xs font-semibold text-white transition hover:bg-[#173D68]"
          >
            Explore Complete SEO Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* 05 — LOCAL AREAS */}
    <section className="bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Local SEO around Virar"
            title={
              <>
                Different areas.
                <span className="block italic text-[#A78354]">Different search intent.</span>
              </>
            }
            description="A useful local SEO strategy should reflect the businesses in an area and what their potential customers are actually searching for. We avoid treating every locality as if it has the same search requirements."
          />
        </Reveal>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          {localAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.name} delay={i * 0.06}>
                <article className={`group relative h-full overflow-hidden rounded-[1.5rem] border border-[#E8E4DD] p-6 transition duration-500 hover:-translate-y-2 ${
                  i % 2 === 0 ? "bg-[#F2EDE4]" : "bg-[#EDF1F3]"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-[var(--font-new-york)] text-4xl text-[#C6A77A]">
                      {area.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0B2A52] shadow-sm">
                      <Icon size={19} />
                    </div>
                  </div>

                  <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#A78354]">
                    {area.category}
                  </p>

                  <h3 className="mt-3 font-[var(--font-new-york)] text-2xl text-[#0B2A52]">
                    {area.name}
                  </h3>

                  <p className="mt-4 text-xs leading-7 text-[#66758A]">
                    {area.description}
                  </p>

                  <div className="mt-6 border-t border-[#DCD5C9] pt-5">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-[#A78354]">
                      SEO opportunities
                    </p>
                    <div className="mt-3 space-y-2">
                      {area.focus.map((point) => (
                        <p key={point} className="flex items-start gap-2 text-[10px] leading-5 text-[#66758A]">
                          <Check size={12} className="mt-0.5 shrink-0 text-[#A78354]" />
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-7 text-center text-[10px] leading-6 text-[#7B8795]">
          Location targeting should reflect genuine business coverage,
          accurate information and useful content—not repeated location keywords.
        </p>
      </div>
    </section>

    {/* 06 — GOOGLE MAPS */}
    <section className="relative overflow-hidden bg-[#0B2A52] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute -right-36 -top-36 h-[550px] w-[550px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-48 -left-24 h-[500px] w-[500px] rounded-full border border-[#C6A77A]/15" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <Eyebrow>04 / Google Maps and local visibility</Eyebrow>
          <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl">
            Help local customers
            <span className="block italic text-[#D9BD95]">discover your business.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-white/60">
            For businesses that depend on nearby customers, local search
            visibility can be an important part of their digital presence.
            Google Business Profile information and website relevance should
            work together.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Google Business Profile information review",
              "Business category and service relevance",
              "Local keyword and search-intent research",
              "Accurate business contact information",
              "Relevant location landing pages",
              "Website and profile consistency",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={15} className="mt-0.5 shrink-0 text-[#D9BD95]" />
                <p className="text-xs leading-6 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[1.8rem] border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-9">
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D9BD95]">
                  Local SEO framework
                </span>
                <h3 className="mt-3 font-[var(--font-new-york)] text-2xl text-white">
                  Four important foundations
                </h3>
              </div>
              <MapPinned size={26} className="text-[#D9BD95]" />
            </div>

            <div className="mt-5 space-y-0">
              {[
                ["01", "Business information", "Accurate and consistent details."],
                ["02", "Website relevance", "Pages that explain your services."],
                ["03", "Local content", "Useful information for your audience."],
                ["04", "Search experience", "Clear ways for visitors to contact you."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-5 border-b border-white/10 py-5 last:border-0">
                  <span className="font-[var(--font-new-york)] text-3xl italic text-[#D9BD95]">
                    {number}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{title}</h4>
                    <p className="mt-1 text-xs leading-6 text-white/50">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[10px] leading-6 text-white/40">
              Google Maps rankings are not guaranteed. Local results depend on
              factors including relevance, distance and prominence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 07 — PROCESS */}
    <section className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="05 / Our approach"
            title={
              <>
                From research to refinement.
                <span className="block italic text-[#A78354]">A considered SEO process.</span>
              </>
            }
            description="SEO is not a one-time switch. It is a process of understanding, prioritising, implementing and refining."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#D8CDBD] lg:block" />
          {process.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.07}>
              <article className="relative h-full rounded-[1.4rem] border border-[#DED8CE] bg-[#FCFAF7] p-6">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A77A] bg-[#FCFAF7] font-[var(--font-new-york)] text-xl text-[#A78354]">
                  {step.number}
                </div>
                <h3 className="mt-7 font-[var(--font-new-york)] text-xl text-[#0B2A52]">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-7 text-[#66758A]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 08 — INDUSTRIES */}
    <section className="bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <Eyebrow>06 / Industry-focused SEO</Eyebrow>
              <h2 className="max-w-2xl font-[var(--font-new-york)] text-4xl leading-[1.1] text-[#0B2A52] sm:text-5xl">
                Your industry has its own
                <span className="block italic text-[#A78354]">search language.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-8 text-[#66758A]">
              A retail shop, property business and tourism operator do not
              have identical search requirements. Their keyword strategy
              and landing pages should reflect their audience.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-[#E4DED4] border-y border-[#E4DED4]">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.title} delay={i * 0.035}>
                <article className="group grid gap-5 py-7 transition-colors hover:bg-white/70 sm:grid-cols-[70px_1fr_1fr] sm:items-center sm:px-5">
                  <span className="font-[var(--font-new-york)] text-3xl italic text-[#C6A77A]">
                    0{i + 1}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0E9DE] text-[#A78354]">
                      <Icon size={19} />
                    </div>
                    <h3 className="font-[var(--font-new-york)] text-xl text-[#0B2A52]">
                      {industry.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs leading-7 text-[#66758A]">
                      {industry.description}
                    </p>
                    <p className="mt-2 text-[9px] font-medium tracking-wide text-[#A78354]">
                      {industry.focus}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 09 — TECHNICAL SEO */}
    <section className="bg-[#EDEFEF] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>07 / Technical SEO</Eyebrow>
          <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] text-[#0B2A52] sm:text-5xl">
            Make your website
            <span className="block italic text-[#A78354]">work better.</span>
          </h2>
          <p className="mt-6 text-sm leading-8 text-[#66758A]">
            Your website should be easy to crawl, understand and navigate.
            Technical SEO helps identify issues that may affect search
            engines and the experience of your visitors.
          </p>
          <Link
            href="/services/search-engine-optimization"
            title="Explore technical SEO services"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B2A52] px-6 py-4 text-xs font-semibold text-white transition hover:bg-[#173D68]"
          >
            Explore Technical SEO <ArrowUpRight size={15} />
          </Link>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {technicalSEO.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="h-full rounded-[1.3rem] border border-[#DDE1E0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0B2A52]/[0.05]">
                  <div className="flex items-center justify-between">
                    <Icon size={22} className="text-[#A78354]" />
                    <span className="text-[10px] text-[#C6A77A]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-[var(--font-new-york)] text-xl text-[#0B2A52]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-7 text-[#66758A]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 10 — WHY SHARP RAYS */}
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="08 / Why Sharp Rays"
            title={
              <>
                Strategy before shortcuts.
                <span className="block italic text-[#A78354]">Clarity before activity.</span>
              </>
            }
            description="We approach SEO as part of your wider digital presence, connecting search visibility with website quality, content and the actions you want visitors to take."
            centered
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="relative h-full overflow-hidden rounded-[1.6rem] bg-[#F5F2EC] p-8">
                  <div className="absolute -right-7 -top-7 h-32 w-32 rounded-full border border-[#C6A77A]/25" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2A52] text-[#D9BD95]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-7 font-[var(--font-new-york)] text-2xl text-[#0B2A52]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#66758A]">
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

    {/* 11 — METHODOLOGY */}
    <section className="bg-[#0B2A52] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>09 / Our SEO work</Eyebrow>
          <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] text-white sm:text-5xl">
            Thoughtful analysis.
            <span className="block italic text-[#D9BD95]">Purposeful execution.</span>
          </h2>
          <p className="mt-6 text-sm leading-8 text-white/55">
            Every website has a different starting point. Our approach begins
            with understanding the existing structure and identifying what
            deserves attention first.
          </p>
          <Link
            href="/work"
            title="Explore Sharp Rays work"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#C6A77A] pb-2 text-xs font-semibold text-[#E5CDAA] transition hover:gap-5"
          >
            Explore our work <ArrowUpRight size={15} />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[1.7rem] border border-white/15 bg-white/[0.05] p-7 sm:p-9">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D9BD95]">
              What we evaluate
            </p>
            <div className="mt-6 space-y-0">
              {[
                ["Website structure", "How clearly important pages are organised."],
                ["Search intent", "Whether your pages answer the right questions."],
                ["Technical foundations", "Whether search engines can access and understand your content."],
                ["Enquiry experience", "Whether visitors can easily take the next step."],
              ].map(([title, description], i) => (
                <div key={title} className="flex gap-5 border-b border-white/10 py-5 last:border-0">
                  <span className="font-[var(--font-new-york)] text-3xl italic text-[#D9BD95]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-6 text-white/50">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 12 — PRICING */}
    <section className="bg-[#F5F2EC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="10 / SEO investment"
            title={
              <>
                Choose your next
                <span className="block italic text-[#A78354]">step in organic growth.</span>
              </>
            }
            description="The right SEO scope depends on your website, competition and business objectives. Explore the available packages before deciding what fits."
            centered
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {seoPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <article className={`relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border p-8 ${
                plan.featured
                  ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-2xl shadow-[#0B2A52]/15"
                  : "border-[#E5DED3] bg-[#FCFAF7] text-[#0B2A52]"
              }`}>
                {plan.featured && (
                  <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#C6A77A] px-5 py-2 text-[9px] font-semibold uppercase tracking-wider text-[#0B2A52]">
                    Popular
                  </div>
                )}

                <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                  plan.featured ? "text-[#D9BD95]" : "text-[#A78354]"
                }`}>
                  {plan.name}
                </p>

                <p className="mt-7 font-[var(--font-new-york)] text-4xl tracking-tight">
                  {plan.price}
                </p>

                <p className={`mt-4 min-h-12 text-sm leading-7 ${
                  plan.featured ? "text-white/55" : "text-[#66758A]"
                }`}>
                  {plan.description}
                </p>

                <div className={`my-7 border-t ${
                  plan.featured ? "border-white/15" : "border-[#E8E4DD]"
                }`} />

                <ul className="mb-8 space-y-4 text-xs">
                  {[
                    "SEO strategy discussion",
                    "Scope based on business needs",
                    "Website and search priorities",
                  ].map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check size={15} className="shrink-0 text-[#C6A77A]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/pricing"
                  title={`View Sharp Rays ${plan.name} SEO package details`}
                  className={`mt-auto inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-xs font-semibold transition ${
                    plan.featured
                      ? "bg-[#D9BD95] text-[#0B2A52] hover:bg-white"
                      : "bg-[#0B2A52] text-white hover:bg-[#173D68]"
                  }`}
                >
                  View Package Details <ArrowUpRight size={15} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-center text-[10px] leading-6 text-[#66758A]">
          Final scope and package suitability should be confirmed before work begins.
          Visit our <Link href="/pricing" className="font-semibold underline underline-offset-4">pricing page</Link> for details.
        </p>
      </div>
    </section>

    {/* 13 — FAQ */}
    <section id="virar-seo-faq" className="bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 border-b border-[#E4DED4] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow>11 / Frequently asked questions</Eyebrow>
              <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] text-[#0B2A52] sm:text-5xl">
                A little more
                <span className="block italic text-[#A78354]">clarity before you begin.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
              Useful answers about SEO services, Google Maps visibility and
              local search for businesses in Virar.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.025}>
              <article className="h-full border-b border-[#E4DED4] py-7">
                <div className="flex items-start gap-4">
                  <span className="font-[var(--font-new-york)] text-2xl italic text-[#C6A77A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-new-york)] text-lg leading-snug text-[#0B2A52]">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 14 — INTERNAL LINKS */}
    <section className="bg-[#F0EDE6] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Explore related pages</Eyebrow>
          <h2 className="font-[var(--font-new-york)] text-3xl text-[#0B2A52] sm:text-4xl">
            Continue exploring Sharp Rays.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#66758A]">
            Explore our SEO service pillar, the Virar location page and SEO
            services for nearby areas.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "SEO Services",
                sub: "SEO PILLAR",
                href: "/services/search-engine-optimization",
              },
              {
                label: "Virar",
                sub: "PARENT LOCATION",
                href: "/locations/virar",
              },
              {
                label: "Nalasopara SEO",
                sub: "NEARBY LOCATION",
                href: "/locations/nalasopara/seo",
              },
              {
                label: "Vasai Road SEO",
                sub: "NEARBY LOCATION",
                href: "/locations/vasai-road/seo",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={`Explore ${item.label}`}
                className="group flex items-center justify-between rounded-2xl border border-[#DED8CE] bg-[#FCFAF7] p-5 transition hover:border-[#C6A77A] hover:bg-white"
              >
                <span>
                  <span className="block text-[8px] font-semibold tracking-[0.17em] text-[#A78354]">
                    {item.sub}
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-[#0B2A52]">
                    {item.label}
                  </span>
                </span>
                <ArrowUpRight size={17} className="text-[#A78354] transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <Link
            href="/locations"
            title="Explore all Sharp Rays locations"
            className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[#0B2A52] hover:text-[#A78354]"
          >
            Explore all locations <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* 15 — FINAL CTA */}
    <section className="bg-[#FCFAF7] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0B2A52] px-7 py-16 sm:px-14 sm:py-24">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-[#C6A77A]/20" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Start your SEO journey</Eyebrow>
            </div>

            <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.12] text-white sm:text-6xl">
              Make your next
              <span className="block italic text-[#D9BD95]">search opportunity count.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/55">
              Tell us about your business, website and SEO goals. Let's discuss
              a practical approach to improving your organic search presence
              in Virar.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact?source=virar-seo-final"
                title="Book a free SEO audit with Sharp Rays"
                className="inline-flex items-center gap-3 rounded-full bg-[#D9BD95] px-7 py-4 text-xs font-semibold text-[#0B2A52] transition hover:bg-white"
              >
                Book a Free SEO Audit <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/pricing"
                title="Explore Sharp Rays pricing"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Explore Pricing <ArrowRight size={15} />
              </Link>
            </div>

            <p className="mt-9 text-[9px] uppercase tracking-[0.2em] text-white/35">
              Sharp Rays · We Create the “Oh, Wow.”!
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  </main>
);

}
