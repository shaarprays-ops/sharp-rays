"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  MapPin,
  Settings2,
  FileText,
  ShoppingBag,
  BarChart3,
  Check,
  ChevronDown,
  Globe2,
  Gauge,
  Smartphone,
  Network,
  Code2,
  ShieldCheck,
  Store,
  Factory,
  HeartPulse,
  GraduationCap,
  Building2,
  Utensils,
  BriefcaseBusiness,
  ShoppingCart,
  Sparkles,
  ClipboardCheck,
  Target,
  Lightbulb,
  Eye,
  MessageCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A88659] sm:text-[11px]">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-[clamp(29px,3.7vw,43px)] leading-[1.14] tracking-[-0.045em] text-[#26364A]">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-[650px] text-[13px] leading-[1.95] text-[#718092] sm:text-[14px]">
          {copy}
        </p>
      )}
    </div>
  );
}

function SoftLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
        light
          ? "border border-white/35 text-white hover:bg-white hover:text-[#26364A]"
          : "bg-[#26364A] text-white hover:bg-[#A88659]"
      }`}
    >
      {children}
      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

const serviceAccents = [
  { card: "bg-[#F0F5F8] border-[#D7E5ED]", icon: "bg-[#DDEBF2] text-[#47758E]", tag: "bg-[#DDEBF2] text-[#426D83]" },
  { card: "bg-[#F8F1E9] border-[#EADCCB]", icon: "bg-[#F0E2D1] text-[#A47745]", tag: "bg-[#F0E2D1] text-[#936B3F]" },
  { card: "bg-[#F0F3EF] border-[#DCE6D9]", icon: "bg-[#E0EBDD] text-[#63805D]", tag: "bg-[#E0EBDD] text-[#587552]" },
  { card: "bg-[#F7F0F3] border-[#EADCE4]", icon: "bg-[#EEDFE7] text-[#98677F]", tag: "bg-[#EEDFE7] text-[#895A72]" },
  { card: "bg-[#F2F1F8] border-[#E0DFF0]", icon: "bg-[#E5E3F2] text-[#7770A2]", tag: "bg-[#E5E3F2] text-[#6B6595]" },
  { card: "bg-[#F8F3E9] border-[#EAE2CC]", icon: "bg-[#F0E9D5] text-[#927D42]", tag: "bg-[#F0E9D5] text-[#806D38]" },
  { card: "bg-[#EEF4F2] border-[#D9E7E2]", icon: "bg-[#DDECE6] text-[#568071]", tag: "bg-[#DDECE6] text-[#4D7568]" },
];

const services = [
  {
    title: "Keyword Research & Search Intent Analysis",
    short: "Keyword Research",
    line: "Understand what your customers search for",
    copy: "Effective SEO begins with understanding how potential customers search for your products and services. We research relevant keywords, search intent and content opportunities to identify terms that align with your business offerings.",
    icon: Search,
    points: [
      "Primary and secondary keywords",
      "Commercial and informational search intent",
      "Relevant service and product searches",
      "Location-based search opportunities",
      "Competitor keyword opportunities",
      "Keyword mapping across website pages",
    ],
    href: "/services/seo",
  },
  {
    title: "On-Page SEO",
    short: "On-Page SEO",
    line: "Make every important page more search-friendly",
    copy: "On-page SEO improves the content and structure of individual website pages so search engines and visitors can understand them more effectively.",
    icon: FileText,
    points: [
      "Title tag optimization",
      "Meta description optimization",
      "Heading structure improvements",
      "Content optimization",
      "Internal linking",
      "Image alt text optimization",
      "URL structure and search intent alignment",
      "Relevant keyword placement",
    ],
    href: "/services/seo",
  },
  {
    title: "Technical SEO",
    short: "Technical SEO",
    line: "Build a healthier website for search engines",
    copy: "Technical SEO focuses on the foundations that help search engines access, crawl, render and index your website.",
    icon: Settings2,
    points: [
      "Website crawling and indexing checks",
      "XML sitemap and robots.txt review",
      "Canonical tag checks",
      "Broken link identification",
      "Redirect analysis",
      "Mobile usability improvements",
      "Core Web Vitals assessment",
      "Structured data where appropriate",
    ],
    href: "/services/seo",
  },
  {
    title: "Local SEO",
    short: "Local SEO",
    line: "Improve your business's local search presence",
    copy: "Local SEO helps businesses improve their relevance for location-based searches and makes accurate business information easier for nearby customers to discover.",
    icon: MapPin,
    points: [
      "Google Business Profile optimization",
      "Business category and service information",
      "Local keyword research",
      "Location page optimization",
      "Local content development",
      "Business information consistency",
      "Genuine customer review management",
      "Local search performance monitoring",
    ],
    href: "/services/local-seo",
  },
  {
    title: "Content SEO",
    short: "Content SEO",
    line: "Create content that answers real customer questions",
    copy: "Useful content can help your website reach people at different stages of their buying journey with information that matches their needs and search intent.",
    icon: FileText,
    points: [
      "Topic research",
      "Blog content planning",
      "Search-focused content optimization",
      "Service page content improvements",
      "FAQ content development",
      "Internal content linking",
      "Content gap analysis",
      "Search intent-based content planning",
    ],
    href: "/services/seo",
  },
  {
    title: "Product SEO",
    short: "Product SEO",
    line: "Help customers discover your products through search",
    copy: "For product-based and industrial businesses, product pages should communicate more than just a product name. We focus on useful descriptions, specifications and clear product structures.",
    icon: ShoppingBag,
    points: [
      "Product keyword research",
      "Unique product descriptions",
      "Product page title optimization",
      "Relevant specifications and features",
      "Image optimization",
      "Product category structure",
      "Relevant internal links",
      "Product structured data where applicable",
    ],
    href: "/services/seo",
  },
  {
    title: "SEO Performance Monitoring",
    short: "SEO Monitoring",
    line: "Understand what's improving and what needs attention",
    copy: "SEO requires regular evaluation to understand how your website performs in organic search and where further improvements may be useful.",
    icon: BarChart3,
    points: [
      "Google Search Console performance",
      "Organic clicks and impressions",
      "Search query performance",
      "Indexed pages",
      "Keyword visibility",
      "Organic landing page performance",
      "Website enquiry trends where tracking is available",
    ],
    href: "/services/seo",
  },
];

const challenges = [
  {
    title: "Your website doesn't appear for relevant searches",
    copy: "Your website may not target the search terms your potential customers actually use. Without relevant keywords and well-structured pages, search engines may struggle to understand what your business offers.",
    icon: Search,
  },
  {
    title: "Your competitors have better search visibility",
    copy: "Other websites may have more relevant content, stronger website structures or better search optimization. Understanding these differences helps identify opportunities to improve your own website.",
    icon: Eye,
  },
  {
    title: "Your business is difficult to find on Google Maps",
    copy: "Customers searching for nearby shops, services and businesses often use Google Maps. Incomplete business information, inaccurate categories or an inadequately maintained Google Business Profile can limit your local search opportunities.",
    icon: MapPin,
  },
  {
    title: "Your website has technical SEO problems",
    copy: "Slow-loading pages, broken links, indexing problems, duplicate content and website usability issues can affect how search engines access and understand your website.",
    icon: Gauge,
  },
  {
    title: "Your product and service pages are not optimized",
    copy: "Simply listing products and services isn't enough. Pages need useful descriptions, relevant search terms, clear headings and information that answers customer questions.",
    icon: FileText,
  },
  {
    title: "Your website gets visitors but few enquiries",
    copy: "Search visibility is only one part of SEO. Your website also needs clear service information, useful content, strong calls to action and an easy enquiry process.",
    icon: MessageCircle,
  },
];

const process = [
  {
    title: "SEO Audit & Website Analysis",
    copy: "We begin by reviewing your website's existing search visibility, technical structure, content and optimization opportunities.",
    points: [
      "Indexing and crawling issues",
      "On-page SEO gaps",
      "Technical problems",
      "Content opportunities",
      "Internal linking issues",
      "Local search optimization gaps",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "Keyword Research & Competitor Analysis",
    copy: "We identify relevant keywords and study the search results to understand the competition and content opportunities within your industry. This helps establish which website pages and search topics deserve attention.",
    icon: Search,
  },
  {
    title: "SEO Strategy & Planning",
    copy: "Based on the findings, we create a practical SEO roadmap. The strategy may include technical improvements, service page optimization, local SEO, content development and product page improvements.",
    icon: Target,
  },
  {
    title: "SEO Implementation",
    copy: "We work on the identified improvements across your website. Depending on the project scope, this can include page optimization, technical recommendations, content improvements, internal linking and local SEO activities.",
    icon: Settings2,
  },
  {
    title: "Performance Monitoring & Improvement",
    copy: "We review relevant SEO performance data and identify opportunities for further improvement. SEO is an ongoing process, so the strategy evolves as your website, search landscape and business requirements change.",
    icon: BarChart3,
  },
];

const industries = [
  {
    title: "Retail & Local Businesses",
    copy: "Improve local search relevance and help potential customers discover business information, products and services.",
    focus: "Local SEO, Google Business Profile and location-based keywords.",
    icon: Store,
  },
  {
    title: "Manufacturing & Industrial Businesses",
    copy: "Help manufacturers and suppliers improve the search visibility of company information, product categories and technical offerings.",
    focus: "Product SEO, technical content, B2B keyword research and website optimization.",
    icon: Factory,
  },
  {
    title: "Healthcare & Clinics",
    copy: "Improve the organization and relevance of healthcare service information while maintaining accurate, responsible content.",
    focus: "Local SEO, service page optimization and relevant informational content.",
    icon: HeartPulse,
  },
  {
    title: "Education & Coaching Institutes",
    copy: "Make courses, programmes and educational information easier to discover through relevant search queries.",
    focus: "Course page optimization, keyword research and content SEO.",
    icon: GraduationCap,
  },
  {
    title: "Real Estate & Property",
    copy: "Help property businesses organize service information and relevant property-related content for search discovery.",
    focus: "Local SEO, service pages and relevant content optimization.",
    icon: Building2,
  },
  {
    title: "Restaurants & Hospitality",
    copy: "Improve the discoverability of restaurant information, menus, services and relevant local searches.",
    focus: "Local SEO, Google Business Profile and website optimization.",
    icon: Utensils,
  },
  {
    title: "Professional Services",
    copy: "Strengthen the search visibility of consultants, agencies and service-based businesses through clear and relevant website content.",
    focus: "Service page SEO, keyword research and technical SEO.",
    icon: BriefcaseBusiness,
  },
  {
    title: "E-commerce & D2C Brands",
    copy: "Improve product discovery through optimized product pages, category structures and search-friendly descriptions.",
    focus: "Product SEO, category SEO and technical SEO.",
    icon: ShoppingCart,
  },
  {
    title: "Beauty & Wellness",
    copy: "Help salons, spas, fitness studios and wellness businesses improve the visibility of relevant services and location information.",
    focus: "Local SEO, service page optimization and content SEO.",
    icon: Sparkles,
  },
  {
    title: "Startups & Emerging Businesses",
    copy: "Build a search-friendly website foundation that can support future content development and organic visibility.",
    focus: "Technical SEO, keyword research, website structure and content planning.",
    icon: Lightbulb,
  },
];

const technicalItems = [
  {
    title: "Website Crawling & Indexing",
    copy: "Review whether important website pages can be accessed, crawled and indexed by search engines.",
    icon: Globe2,
  },
  {
    title: "XML Sitemap Optimization",
    copy: "Ensure your XML sitemap accurately identifies important, indexable website pages.",
    icon: FileText,
  },
  {
    title: "Robots.txt & Canonical Checks",
    copy: "Review crawling instructions and canonical signals to help search engines understand which URLs should be crawled and treated as preferred versions.",
    icon: Code2,
  },
  {
    title: "Website Speed & Core Web Vitals",
    copy: "Identify opportunities to improve loading performance, responsiveness and visual stability.",
    icon: Gauge,
  },
  {
    title: "Mobile SEO",
    copy: "Review how website pages function across smartphones and other screen sizes.",
    icon: Smartphone,
  },
  {
    title: "Internal Linking & Website Architecture",
    copy: "Create logical connections between service pages, location pages and informative content so visitors and search engines can discover related information.",
    icon: Network,
  },
  {
    title: "Structured Data",
    copy: "Implement relevant structured data to help search engines understand eligible website content.",
    icon: Settings2,
  },
  {
    title: "Website Security & Accessibility",
    copy: "Review HTTPS implementation, important accessibility considerations and website usability.",
    icon: ShieldCheck,
  },
];

const reasons = [
  {
    title: "Strategy Before Keywords",
    copy: "We consider your business objectives, target audience and search intent before developing an SEO strategy.",
  },
  {
    title: "A Complete SEO Perspective",
    copy: "We consider technical SEO, content, on-page optimization and local search as connected parts of website visibility.",
  },
  {
    title: "Industry-Relevant Thinking",
    copy: "Different businesses need different SEO priorities. We consider your products, services and audience when planning optimization activities.",
  },
  {
    title: "Website & SEO Working Together",
    copy: "We combine our website development understanding with SEO considerations to support better website structure, usability and search visibility.",
  },
  {
    title: "Transparent and Practical Approach",
    copy: "We focus on clear deliverables, relevant performance indicators and realistic expectations rather than guaranteed rankings.",
  },
  {
    title: "Useful Content Over Keyword Stuffing",
    copy: "We believe website content should answer real customer questions, communicate useful information and provide value beyond simply repeating search terms.",
  },
];

const portfolioItems = [
  {
    title: "SEO Audit Demonstrations",
    copy: "Explore examples of website audit processes, including technical checks, indexing reviews and on-page optimization opportunities.",
    icon: ClipboardCheck,
  },
  {
    title: "Website SEO Improvements",
    copy: "See genuine examples of page structure, metadata, internal linking and website content improvements.",
    icon: Code2,
  },
  {
    title: "Keyword Research & Content Planning",
    copy: "Understand how search intent, keyword relevance and content structure contribute to an organized SEO strategy.",
    icon: Search,
  },
  {
    title: "Local SEO Optimization",
    copy: "Explore practical examples of Google Business Profile optimization, location information and local search improvements.",
    icon: MapPin,
  },
  {
    title: "Product SEO Demonstrations",
    copy: "See how product information, descriptions, specifications and category structures can be organized for better search understanding.",
    icon: ShoppingBag,
  },
];

const faqs = [
  {
    q: "What are SEO services and how do they help businesses?",
    a: "SEO services improve a website's visibility in organic search results through keyword research, technical optimization, content improvements, internal linking and other search-focused activities. They help potential customers discover relevant business information through search engines.",
  },
  {
    q: "How much do SEO services cost in Vasai?",
    a: "SEO pricing depends on website requirements, competition, project scope and the amount of ongoing optimization involved. Sharp Rays has starting packages at ₹14,999, ₹24,999 and ₹39,999. Visit our pricing page for actual package details and inclusions.",
  },
  {
    q: "What SEO services does Sharp Rays provide?",
    a: "Sharp Rays offers keyword research, on-page SEO, technical SEO, local SEO, Google Business Profile optimization, content SEO, product SEO and SEO performance monitoring.",
  },
  {
    q: "What is the difference between SEO and local SEO?",
    a: "SEO focuses on improving a website's visibility in organic search results. Local SEO focuses on improving relevance and visibility for location-based searches, including Google Maps and local search results.",
  },
  {
    q: "Can SEO help my business appear on Google Maps in Vasai?",
    a: "Local SEO and Google Business Profile optimization can help improve your business's relevance for local searches. Actual visibility depends on factors including relevance, distance, prominence, competition and profile accuracy. No ranking position can be guaranteed.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO timelines vary depending on your website's condition, competition, industry, content quality and optimization work. Some improvements may be noticed earlier, while meaningful organic growth generally requires consistent effort over time.",
  },
  {
    q: "Is SEO useful for small businesses in Vasai?",
    a: "Yes. SEO can help small businesses improve their visibility for relevant searches, communicate their services and reach potential customers who are actively looking for what they offer.",
  },
  {
    q: "Do manufacturers need SEO?",
    a: "SEO can help manufacturers improve the discoverability of company websites, product categories, specifications and service information. Product SEO and B2B-focused content can support relevant search visibility.",
  },
  {
    q: "What is included in a free SEO audit?",
    a: "An SEO audit can review key areas such as website indexing, technical health, on-page optimization, website structure and potential content opportunities. The exact audit scope should be confirmed before the consultation.",
  },
  {
    q: "Do I need a website for local SEO?",
    a: "A website is not an absolute requirement for a Google Business Profile, but a relevant, well-structured website can provide additional information about your business, services and location.",
  },
  {
    q: "Does Sharp Rays guarantee Google rankings?",
    a: "No. Search engine rankings depend on multiple factors outside any agency's direct control. Our approach focuses on implementing relevant SEO improvements and monitoring performance without making unrealistic ranking guarantees.",
  },
  {
    q: "Can I choose only local SEO or technical SEO?",
    a: "SEO requirements differ between businesses. You can discuss individual requirements with Sharp Rays to understand the appropriate scope of work and available service options.",
  },
  {
    q: "How can I get started with Sharp Rays SEO services?",
    a: "You can contact Sharp Rays through the website enquiry form. Share your website URL, business type and SEO objectives to discuss your requirements and request a free SEO audit.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "₹14,999",
    copy: "A starting option for businesses exploring SEO improvements.",
    href: "/pricing",
  },
  {
    name: "Growth",
    price: "₹24,999",
    copy: "An option for businesses looking to strengthen their ongoing SEO activities.",
    href: "/pricing",
    featured: true,
  },
  {
    name: "Advanced",
    price: "₹39,999",
    copy: "An option for businesses with broader SEO requirements.",
    href: "/pricing",
  },
];

export default function VasaiSEOPageClient() {
  return (
    <main className="overflow-hidden bg-[#FAF8F5] text-[#26364A]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#F5F1EA] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32 lg:pt-32">
        <div className="pointer-events-none absolute -right-28 top-10 h-[440px] w-[440px] rounded-full border border-[#C6A77A]/25" />
        <div className="pointer-events-none absolute -right-12 top-24 h-[310px] w-[310px] rounded-full border border-[#C6A77A]/20" />
        <div className="pointer-events-none absolute right-16 top-40 h-36 w-36 rounded-full bg-[#E9DFD0]/55 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            <Eyebrow>Search Engine Optimization · Vasai</Eyebrow>
            <h1 className="max-w-[660px] font-serif text-[clamp(30px,3vw,45px)] leading-[1.08] tracking-[-0.055em] text-[#26364A]">
              SEO Services in Vasai That Help Your Business{" "}
              <span className="italic text-[#A88659]">Get Found on Google.</span>
            </h1>
            <p className="mt-7 max-w-[650px] text-[14px] leading-[2] text-[#68798A] sm:text-[15px]">
              Your potential customers are already searching for products,
              services and solutions online. Is your business appearing when
              they search?
            </p>
            <p className="mt-4 max-w-[650px] text-[13px] leading-[2] text-[#718092]">
              Sharp Rays provides SEO services focused on improving website
              visibility, strengthening local search presence and helping
              businesses connect with relevant audiences through organic
              search.
            </p>
            <p className="mt-4 max-w-[650px] text-[13px] leading-[2] text-[#718092]">
              From Google Maps optimization for local shops around Ambadi Road
              and Manikpur to product SEO opportunities for industrial
              businesses around Waliv and Gauraipada, we develop search
              strategies around your business and its audience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <SoftLink href="/contact">Get Your Free SEO Audit</SoftLink>
              <Link
                href="#vasai-seo-services"
                className="inline-flex items-center gap-2 rounded-full border border-[#DCCFBD] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#526477] transition hover:border-[#A88659] hover:text-[#A88659]"
              >
                Explore Our SEO Services
                <ArrowRight size={14} />
              </Link>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-[0.13em] text-[#8B938F]">
              For local businesses, manufacturers, service providers and
              growing brands
            </p>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="relative mx-auto max-w-[490px] rounded-[8px] border border-white/80 bg-[#FFFDFA] p-5 shadow-[0_30px_90px_rgba(49,56,62,0.09)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#EEE7DD] pb-4">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A88659]">
                    Organic search overview
                  </p>
                  <p className="mt-1 font-serif text-[19px] text-[#26364A]">
                    Your visibility, in focus
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4EFE7] text-[#A88659]">
                  <Search size={18} strokeWidth={1.4} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 py-5">
                {[
                  ["Search intent", "Understand demand"],
                  ["Website health", "Find opportunities"],
                  ["Local visibility", "Improve relevance"],
                  ["Useful content", "Answer questions"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[5px] bg-[#F8F5EF] p-4"
                  >
                    <p className="text-[9px] uppercase tracking-[0.12em] text-[#A18B6D]">
                      {label}
                    </p>
                    <p className="mt-2 font-serif text-[15px] text-[#35485C]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-[5px] border border-[#EAE2D7] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#647487]">
                    A considered SEO approach
                  </span>
                  <Sparkles size={16} className="text-[#B79A72]" />
                </div>
                <div className="mt-4 space-y-3">
                  {["Research", "Improve", "Monitor"].map((item, i) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-1.5 flex-1 rounded-full bg-[#E9E2D8]">
                        <span
                          className="block h-1.5 rounded-full bg-[#C6A77A]"
                          style={{ width: `${[88, 68, 48][i]}%` }}
                        />
                      </span>
                      <span className="w-20 text-right text-[10px] text-[#718092]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-[9px] leading-relaxed text-[#929A9E]">
                Illustrative visual · Not client performance data
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="bg-[#FFFDF9] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Your SEO Growth Partner</Eyebrow>
            <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] leading-[1.16] tracking-[-0.04em]">
              Looking for SEO Services in{" "}
              <span className="italic text-[#A88659]">Vasai?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[14px] leading-[2] text-[#68798A]">
              Sharp Rays provides SEO services in Vasai, including local SEO,
              Google Business Profile optimization, technical SEO, on-page SEO,
              keyword research and content optimization. We help businesses
              improve their organic search visibility through relevant website
              improvements, location-focused strategies and useful content
              designed around customer search intent. Our approach focuses on
              sustainable search visibility, website quality and meaningful
              business enquiries rather than guaranteed rankings.
            </p>
            <div className="mt-8 border-l-2 border-[#C6A77A] pl-5">
              <h3 className="font-serif text-[22px] text-[#35485C]">
                What Does an SEO Agency Actually Do?
              </h3>
              <p className="mt-3 text-[13px] leading-[1.95] text-[#718092]">
                An SEO agency helps businesses improve their visibility in
                organic search results by optimizing website content, technical
                structure, keyword targeting and local search information. The
                objective is to make relevant business pages easier for search
                engines to understand and potential customers to discover.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO CHALLENGES */}
      <section className="bg-[#F5F2EC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Understanding Your Search Visibility"
              title={
                <>
                  Is Your Business Missing Out on Potential Customers on{" "}
                  <span className="italic text-[#A88659]">Google?</span>
                </>
              }
              copy="Having a website doesn't automatically mean customers will find it. Your business may offer excellent products or services, but if your website isn't properly optimized, potential customers may discover other businesses before finding yours."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.035}>
                  <article className="h-full rounded-[10px] border border-[#E6DED2] bg-gradient-to-br from-[#FFFDF9] to-[#F4F0E8] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(50,40,25,0.06)] sm:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F1EADF] text-[#A88659]">
                      <Icon size={19} strokeWidth={1.4} />
                    </div>
                    <h3 className="mt-6 font-serif text-[21px] leading-[1.3] text-[#35485C]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-[1.95] text-[#718092]">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-10">
            <div className="flex flex-col items-start justify-between gap-5 rounded-[5px] border border-[#E4D9CC] bg-[#FFFDF9] p-6 sm:flex-row sm:items-center sm:p-8">
              <div>
                <h3 className="font-serif text-[22px] text-[#35485C]">
                  How Can SEO Help?
                </h3>
                <p className="mt-2 max-w-[760px] text-[12px] leading-[1.9] text-[#718092]">
                  A well-planned SEO strategy identifies these issues and
                  prioritizes improvements based on your business objectives,
                  website condition and search opportunities.
                </p>
              </div>
              <SoftLink href="/contact">Request a Free SEO Audit</SoftLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES - no visible numbering */}
      <section
        id="vasai-seo-services"
        className="scroll-mt-20 bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="What Our SEO Services Include"
              title={
                <>
                  Complete SEO Services in Vasai for{" "}
                  <span className="italic text-[#A88659]">
                    Better Search Visibility.
                  </span>
                </>
              }
              copy="SEO involves several connected activities. From understanding what customers search for to improving website structure and developing relevant content, each activity contributes to a stronger organic search foundation. Sharp Rays offers SEO solutions designed around your website's current condition, industry and business objectives."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              const accent = serviceAccents[i];
              const isPriority = i === 0 || i === 2 || i === 3;
              return (
                <Reveal key={service.title} delay={i * 0.035}>
                  <article className={`group relative flex h-full flex-col overflow-hidden rounded-[12px] border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(50,40,25,0.09)] sm:p-8 ${accent.card}`}>
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-current/10 opacity-40 transition-transform duration-700 group-hover:scale-125" />
                    <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#A88659] transition-all duration-500 group-hover:w-full" />
                    <div className="flex items-center justify-between gap-3">
                      {isPriority ? (
                        <span className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.13em] ${accent.tag}`}>
                          Key focus area
                        </span>
                      ) : (
                        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#87929A]">
                          SEO service
                        </span>
                      )}
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-105 ${accent.icon}`}>
                        <Icon size={21} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="font-serif text-[16px] italic leading-snug text-[#A88659]">
                        {service.line}
                      </p>
                      <h3 className="mt-2 font-serif text-[24px] leading-[1.18] tracking-[-0.03em] text-[#26364A] sm:text-[27px]">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-[480px] text-[12px] leading-[2] text-[#718092] sm:text-[13px]">
                        {service.copy}
                      </p>
                    </div>
                    <div className="mt-7 grid gap-x-4 gap-y-3 border-t border-[#EEE7DD] pt-6 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2 text-[11px] leading-[1.7] text-[#526477]"
                        >
                          <Check
                            size={14}
                            strokeWidth={1.7}
                            className="mt-0.5 shrink-0 text-[#B08D5C]"
                          />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <div className="border-t border-[#EEE7DD] pt-5">
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#26364A] transition-colors duration-300 hover:text-[#A88659]"
                        >
                          Explore {service.short}
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-[#F2F0EB] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Local Search Optimization"
              title={
                <>
                  Local SEO in Vasai to Help Customers{" "}
                  <span className="italic text-[#A88659]">
                    Discover Your Business.
                  </span>
                </>
              }
              copy="When someone searches for a nearby shop, service provider or business, Google may display local search results and Google Maps listings. Local SEO helps businesses improve their relevance and visibility for these searches through accurate business information, relevant website content and local search optimization. For businesses targeting Vasai, search opportunities can differ depending on their industry, audience and location."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[5px] border border-[#E5DDD1] bg-[#FBFAF7] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0E8DC] text-[#A88659]">
                  <MapPin size={21} strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-serif text-[22px] leading-[1.2]">
                  Google Maps SEO for Shops Around Ambadi Road and Manikpur
                </h3>
                <p className="mt-4 text-[12px] leading-[1.95] text-[#718092]">
                  For retailers, service providers and neighbourhood businesses
                  around Ambadi Road and Manikpur, local search visibility can
                  play an important role in customer discovery.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Relevant Google Business Profile categories",
                    "Accurate business information",
                    "Service and product descriptions",
                    "Business profile completeness",
                    "Genuine customer review management",
                    "Relevant website links",
                    "Local search relevance",
                    "Accurate opening hours and contact details",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-[11px] leading-[1.7] text-[#526477]"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#A88659]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-[#EEE7DD] pt-5 text-[12px] leading-[1.9] text-[#718092]">
                  The objective is to help Google understand the business, its
                  offerings and its relevance to local searches.
                </p>
              </article>
            </Reveal>
            <div className="grid gap-5">
              <Reveal delay={0.06}>
                <article className="rounded-[5px] border border-[#E5DDD1] bg-[#FBFAF7] p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E8DC] text-[#A88659]">
                      <Store size={18} />
                    </div>
                    <h3 className="font-serif text-[22px]">
                      Local SEO for Businesses Across Vasai West
                    </h3>
                  </div>
                  <p className="mt-4 text-[12px] leading-[1.95] text-[#718092]">
                    Businesses targeting customers across Vasai West can
                    benefit from relevant location-based website content,
                    accurate business information and service pages that
                    clearly explain their offerings. A useful local SEO
                    strategy should focus on genuine customer requirements
                    rather than simply repeating neighbourhood names
                    throughout website content.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={0.1}>
                <article className="rounded-[5px] border border-[#E5DDD1] bg-[#FBFAF7] p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E8DC] text-[#A88659]">
                      <Factory size={18} />
                    </div>
                    <h3 className="font-serif text-[22px]">
                      Product SEO for Industrial Businesses Around Waliv and
                      Gauraipada
                    </h3>
                  </div>
                  <p className="mt-4 text-[12px] leading-[1.95] text-[#718092]">
                    Manufacturers, suppliers and industrial businesses have
                    different search requirements from neighbourhood
                    retailers. Potential B2B customers may search for specific
                    products, technical specifications, materials,
                    manufacturing capabilities and suppliers.
                  </p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A88659]">
                    Product SEO can help businesses
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {[
                      "Organize products into relevant categories",
                      "Create unique product descriptions",
                      "Present specifications and technical information",
                      "Optimize product page titles and headings",
                      "Improve internal links between categories",
                      "Develop useful industry-specific content",
                    ].map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[11px] leading-[1.7] text-[#526477]"
                      >
                        <Check
                          size={13}
                          className="mt-0.5 shrink-0 text-[#A88659]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </div>
          <Reveal className="mt-5">
            <div className="rounded-[5px] border border-[#E3D9CA] bg-[#FFFDF9] p-7 sm:p-9">
              <h3 className="font-serif text-[25px]">
                Local SEO Is More Than Adding a Location Name
              </h3>
              <p className="mt-3 max-w-[850px] text-[12px] leading-[1.95] text-[#718092]">
                Simply adding Vasai to your website title or content does not
                guarantee better local visibility. An effective approach
                considers search relevance, website quality, Google Business
                Profile information, business prominence, local competition,
                accurate business details and useful location-specific content.
              </p>
              <div className="mt-6">
                <SoftLink href="/contact">Get a Free Local SEO Audit</SoftLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#FFFDF9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="How We Approach SEO"
              title={
                <>
                  A Structured SEO Process Built Around{" "}
                  <span className="italic text-[#A88659]">Your Business.</span>
                </>
              }
              copy="Every SEO project starts from a different position. Some websites need technical improvements, while others need better content, stronger local search optimization or a clearer keyword strategy. Our process focuses on understanding your website before deciding what needs to be done."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.04}>
                  <article className="flex h-full flex-col rounded-[10px] border border-[#EAE3D9] bg-gradient-to-br from-[#FFFFFF] to-[#F3F0E9] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(50,40,25,0.06)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0E8DC] text-[#A88659]">
                      <Icon size={19} strokeWidth={1.4} />
                    </div>
                    <h3 className="mt-6 font-serif text-[22px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-[1.95] text-[#718092]">
                      {item.copy}
                    </p>
                    {item.points && (
                      <ul className="mt-5 space-y-2 border-t border-[#EAE3D9] pt-5">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2 text-[11px] text-[#526477]"
                          >
                            <Check
                              size={13}
                              className="mt-0.5 shrink-0 text-[#A88659]"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F5F2EC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Industry-Focused SEO"
              title={
                <>
                  SEO Strategies for Different{" "}
                  <span className="italic text-[#A88659]">
                    Business Types in Vasai.
                  </span>
                </>
              }
              copy="Different industries attract customers through different search behaviours. A retail business may depend on local discovery, while a manufacturer may need product visibility and relevant B2B enquiries. We consider these differences when developing SEO strategies."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.025}>
                  <article className="h-full rounded-[5px] border border-[#E6DED2] bg-[#FBFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(50,40,25,0.05)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E8DC] text-[#A88659]">
                      <Icon size={18} strokeWidth={1.4} />
                    </div>
                    <h3 className="mt-5 font-serif text-[21px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-[1.9] text-[#718092]">
                      {item.copy}
                    </p>
                    <p className="mt-5 border-t border-[#EAE3D9] pt-4 text-[11px] leading-[1.8] text-[#526477]">
                      <span className="font-semibold text-[#A88659]">
                        SEO focus:{" "}
                      </span>
                      {item.focus}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNICAL SEO */}
      <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Technical SEO Foundations</Eyebrow>
            <h2 className="font-serif text-[clamp(29px,3.6vw,43px)] leading-[1.14] tracking-[-0.04em]">
              Is Your Website Technically Ready for{" "}
              <span className="italic text-[#A88659]">Search Engines?</span>
            </h2>
            <p className="mt-6 text-[13px] leading-[2] text-[#718092]">
              Good content and relevant keywords are important, but your
              website also needs a healthy technical foundation. Technical SEO
              helps search engines access, understand and index your website
              while supporting a better experience for visitors.
            </p>
            <p className="mt-5 text-[13px] leading-[2] text-[#718092]">
              A technically healthy website provides a stronger foundation for
              ongoing SEO improvements.
            </p>
            <div className="mt-8">
              <SoftLink href="/contact">Request a Website SEO Audit</SoftLink>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {technicalItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.03}>
                  <article className="h-full rounded-[5px] border border-[#E9E2D8] bg-[#FFFDF9] p-5 sm:p-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2ECE2] text-[#A88659]">
                      <Icon size={17} strokeWidth={1.4} />
                    </div>
                    <h3 className="mt-4 font-serif text-[18px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-[1.9] text-[#718092]">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-[#F1EEE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Sharp Rays"
              title={
                <>
                  SEO That Starts With{" "}
                  <span className="italic text-[#A88659]">
                    Understanding Your Business.
                  </span>
                </>
              }
              copy="SEO should not be a collection of disconnected activities or keyword placements. At Sharp Rays, we approach search engine optimization by understanding your business, identifying search opportunities and improving the website elements that matter."
            />
          </Reveal>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2">
            {reasons.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.035}>
                <article className="flex gap-5 border-b border-[#DED6CA] py-7">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8C7AF] bg-[#FBF9F5] text-[#A88659]">
                    <Check size={15} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[22px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-[1.95] text-[#718092]">
                      {item.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / EXPERTISE */}
      <section className="bg-[#FFFDF9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="Our SEO Approach in Practice"
              title={
                <>
                  Explore How We Approach{" "}
                  <span className="italic text-[#A88659]">
                    Search Optimization.
                  </span>
                </>
              }
              copy="SEO involves research, technical improvements, content planning and continuous refinement. We believe the best way to understand an SEO approach is to see the actual thinking, analysis and work behind it."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.035}>
                  <article className="h-full rounded-[5px] border border-[#E9E2D8] bg-[#FAF8F4] p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0E8DC] text-[#A88659]">
                      <Icon size={19} />
                    </div>
                    <h3 className="mt-6 font-serif text-[22px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-[1.95] text-[#718092]">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8">
            <div className="flex flex-col items-start justify-between gap-5 rounded-[5px] bg-[#F3EEE6] p-7 sm:flex-row sm:items-center sm:p-9">
              <div className="max-w-[760px]">
                <h3 className="font-serif text-[25px]">About Sharp Rays</h3>
                <p className="mt-3 text-[12px] leading-[1.95] text-[#718092]">
                  Sharp Rays combines website development, search engine
                  optimization, social media marketing and creative digital
                  capabilities to help businesses build stronger digital
                  experiences. Learn more about our approach and services.
                </p>
                <p className="mt-3 text-[10px] text-[#A88659]">
                  Only genuine project evidence should be published. Clearly
                  identify educational demonstrations and concept examples.
                  Do not present demonstrations as completed client projects
                  or imply results that have not been verified.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#26364A] hover:text-[#A88659]"
              >
                About Sharp Rays <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#26364A] hover:text-[#A88659]"
            >
              Explore Our Work <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#F5F2EC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <SectionHeading
              eyebrow="SEO Service Pricing"
              title={
                <>
                  SEO Packages to Match Your{" "}
                  <span className="italic text-[#A88659]">
                    Business Requirements.
                  </span>
                </>
              }
              copy="Every website has different SEO requirements. The work involved depends on your website size, industry, competition, technical condition and target search opportunities. Explore our starting packages to understand the available pricing options."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pricing.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.05}>
                <article
                  className={`relative flex h-full flex-col rounded-[5px] border p-7 sm:p-9 ${
                    plan.featured
                      ? "border-[#CDBB9F] bg-[#FFFDF9] shadow-[0_18px_50px_rgba(50,40,25,0.07)]"
                      : "border-[#E5DDD1] bg-[#FAF8F4]"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-5 inline-flex w-fit rounded-full bg-[#F0E8DC] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#98794F]">
                      Popular choice
                    </span>
                  )}
                  <p className="font-serif text-[24px]">{plan.name}</p>
                  <p className="mt-5 font-serif text-[42px] leading-none tracking-[-0.04em] text-[#26364A]">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#A88659]">
                    Starting package
                  </p>
                  <p className="mt-6 min-h-[55px] text-[12px] leading-[1.9] text-[#718092]">
                    {plan.copy}
                  </p>
                  <Link
                    href={plan.href}
                    className="mt-auto inline-flex items-center gap-2 border-t border-[#EAE3D9] pt-6 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#26364A] transition hover:text-[#A88659]"
                  >
                    Explore {plan.name} Package <ArrowUpRight size={15} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <div className="rounded-[5px] border border-[#E3D9CA] bg-[#FFFDF9] p-7 sm:p-9">
              <h3 className="font-serif text-[24px]">
                Not sure which package suits your business?
              </h3>
              <p className="mt-3 max-w-[760px] text-[12px] leading-[1.9] text-[#718092]">
                Let's understand your website, requirements and SEO objectives
                before recommending a suitable option.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <SoftLink href="/contact">Discuss Your SEO Requirements</SoftLink>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DCCFBD] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#526477] hover:border-[#A88659] hover:text-[#A88659]"
                >
                  View All Pricing <ArrowUpRight size={14} />
                </Link>
              </div>
              <p className="mt-5 text-[10px] leading-[1.8] text-[#929A9E]">
                Pricing and package descriptions should match approved
                deliverables. Confirm whether prices are monthly,
                project-based or otherwise before publishing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        aria-labelledby="vasai-seo-faq-heading"
      >
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <Eyebrow>SEO Questions Answered</Eyebrow>
            <h2
              id="vasai-seo-faq-heading"
              className="font-serif text-[clamp(29px,3.7vw,43px)] leading-[1.14] tracking-[-0.04em]"
            >
              Frequently Asked Questions About{" "}
              <span className="italic text-[#A88659]">
                SEO Services in Vasai.
              </span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.015}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white text-[#B79A72]">
                    <MessageCircle size={15} strokeWidth={1.4} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[19px] leading-[1.4] text-[#26364A] sm:text-[21px]">
                      {faq.q}
                    </h3>
                    <p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">
                      {faq.a}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F0EBE3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-[6px] bg-[#26364A] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-white/10" />
          <Reveal className="relative mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B991]">
              Let's Improve Your Search Visibility
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,46px)] leading-[1.12] tracking-[-0.04em] text-white">
              Ready to Help Your Business Get Found on{" "}
              <span className="italic text-[#D2B991]">Google?</span>
            </h2>
            <p className="mt-6 text-[13px] leading-[2] text-white/70 sm:text-[14px]">
              Your next customer could already be searching for the products
              or services you offer. Build a stronger search presence with an
              SEO strategy focused on relevant keywords, website improvements,
              local visibility and useful content.
            </p>
            <p className="mt-3 text-[13px] leading-[2] text-white/70">
              Let's review your website, identify opportunities and discuss
              the right SEO approach for your business.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <SoftLink href="/contact" light>
                Get Your Free SEO Audit
              </SoftLink>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#26364A]"
              >
                Explore SEO Pricing <ArrowUpRight size={14} />
              </Link>
            </div>
            <p className="mt-6 text-[10px] tracking-[0.04em] text-white/50">
              No guaranteed rankings. Just a practical approach to improving
              your organic search presence.
            </p>
            <p className="mt-10 font-serif text-[17px] italic text-[#D2B991]">
              Sharp Rays — We Create the ‘Oh, Wow.’!
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
