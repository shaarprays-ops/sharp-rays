"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, Compass, Search,
  MousePointerClick, ShieldCheck, Target, ChartNoAxesCombined,
  MapPin, Users, ShoppingBag, GraduationCap, HeartPulse, Factory,
  UtensilsCrossed, BriefcaseBusiness, Rocket, Plane, Building2,
  Sparkles, type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const industries: {
  name: string; label: string; slug: string; image: string; alt: string;
  headline: string; copy: string; focus: string; audience: string; points: string[];
  icon: LucideIcon;
}[] = [
  {
    name: "Beauty & Wellness", label: "SALONS · SPAS · WELLNESS", slug: "/industries/beauty-wellness",
    image: "/industries/industry-beauty-wellness.webp",
    alt: "Warm contemporary spa treatment room with wellness interior",
    headline: "Turn local searches into more appointment opportunities.",
    copy: "Be easier to discover when nearby customers compare treatments, explore reviews and choose where to book.",
    focus: "Local discovery & appointment enquiries", audience: "Salons, beauty studios, spas and wellness businesses",
    points: ["Local SEO & Google Maps", "Social media & Reels", "Appointment-focused websites", "Customer follow-up"], icon: Sparkles,
  },
  {
    name: "Ecommerce", label: "ONLINE STORES · D2C BRANDS", slug: "/industries/ecommerce",
    image: "/industries/industry-ecommerce.webp",
    alt: "Curated retail clothing and accessories in a contemporary boutique",
    headline: "Connect product discovery with profitable sales opportunities.",
    copy: "Help shoppers discover your products, evaluate your brand and move confidently from browsing to checkout.",
    focus: "Product discovery & online conversion", audience: "D2C brands, online stores and product startups",
    points: ["Ecommerce SEO", "Google Shopping & Meta Ads", "Product-page content", "Retention workflows"], icon: ShoppingBag,
  },
  {
    name: "Education", label: "SCHOOLS · COLLEGES · TRAINING", slug: "/industries/education",
    image: "/industries/industry-education.webp",
    alt: "University students in academic graduation gowns on campus",
    headline: "Help prospective students discover the right courses.",
    copy: "Make programmes and admission information clear, searchable and easier for prospective students to act on.",
    focus: "Student enquiries & admissions", audience: "Schools, colleges, coaching and training institutes",
    points: ["Course & programme SEO", "Admission campaigns", "Student-focused content", "Enquiry follow-up"], icon: GraduationCap,
  },
  {
    name: "Healthcare", label: "CLINICS · HEALTHCARE PROVIDERS", slug: "/industries/healthcare",
    image: "/industries/industry-healthcare.webp",
    alt: "Contemporary healthcare practitioner working in a bright medical setting",
    headline: "Make trusted healthcare information easier to find.",
    copy: "Support patients with accurate service information, local discovery and straightforward appointment journeys.",
    focus: "Patient discovery & appointment requests", audience: "Clinics, hospitals, dentists and diagnostic centres",
    points: ["Healthcare & local SEO", "Service information", "Accessible websites", "Responsible communication"], icon: HeartPulse,
  },
  {
    name: "Manufacturing", label: "INDUSTRIAL · B2B · EXPORTERS", slug: "/industries/manufacturing",
    image: "/industries/industry-manufacturing.webp",
    alt: "Industrial precision manufacturing machinery producing components",
    headline: "Get found by buyers searching for what you manufacture.",
    copy: "Bring technical capabilities, product information and supplier credentials to industrial buyers researching partners.",
    focus: "Qualified industrial enquiries & RFQs", audience: "OEMs, fabricators, machinery makers and exporters",
    points: ["Industrial SEO", "Technical product pages", "B2B search advertising", "RFQ pathways"], icon: Factory,
  },
  {
    name: "Restaurants", label: "RESTAURANTS · CAFÉS · CLOUD KITCHENS", slug: "/industries/restaurants",
    image: "/industries/industry-restaurants.webp",
    alt: "Inviting premium restaurant interior with dining tables and ambient lighting",
    headline: "Be discovered before diners decide where to go.",
    copy: "Connect nearby searches, menus, social discovery and reviews with reservations, visits and ordering journeys.",
    focus: "Local visibility, orders & reservations", audience: "Cafés, restaurants, cloud kitchens and dining brands",
    points: ["Google Maps & local SEO", "Food content & Reels", "Local ad campaigns", "Reservation journeys"], icon: UtensilsCrossed,
  },
  {
    name: "Professional Services", label: "CONSULTANTS · ADVISORS · B2B FIRMS", slug: "/industries/professional-services",
    image: "/industries/industry-professional-services.webp",
    alt: "Contemporary professional services office environment",
    headline: "Help the right clients find and understand your expertise.",
    copy: "Explain your experience, services and approach to potential clients researching who they should trust.",
    focus: "Qualified consultations & enquiries", audience: "Business consultants, HR, architecture and specialist B2B firms",
    points: ["Expertise-led SEO", "LinkedIn & thought leadership", "Service-focused websites", "Consultation enquiries"], icon: BriefcaseBusiness,
  },
  {
    name: "Startups", label: "FOUNDERS · SAAS · EMERGING BRANDS", slug: "/industries/startup",
    image: "/industries/industry-startups.webp",
    alt: "Startup team collaborating around a desk in a bright workspace",
    headline: "Launch your business, find customers and build traction.",
    copy: "Choose the right acquisition priorities as you move from early visibility to more structured growth.",
    focus: "Customer acquisition & qualified signups", audience: "SaaS, D2C, technology and emerging service startups",
    points: ["Launch websites", "SEO & paid acquisition", "Content & creative", "Growth automation"], icon: Rocket,
  },
  {
    name: "Travel & Hospitality", label: "HOTELS · RESORTS · TRAVEL", slug: "/industries/travel-hospitality",
    image: "/industries/industry-travel-hospitality.webp",
    alt: "Tropical luxury resort with an outdoor swimming pool and palm trees",
    headline: "Turn travel inspiration into more booking opportunities.",
    copy: "Help guests discover destinations, evaluate experiences and find clear pathways to contact or book.",
    focus: "Guest enquiries & bookings", audience: "Hotels, resorts, homestays, tour operators and travel brands",
    points: ["Hospitality SEO", "Destination content", "Travel search advertising", "Booking-focused websites"], icon: Plane,
  },
  {
    name: "Real Estate", label: "PROPERTY · DEVELOPERS · CONSULTANTS", slug: "/industries/real-estate",
    image: "/industries/industry-real-estate.webp",
    alt: "Modern residential property development with landscaped surroundings",
    headline: "Help serious buyers discover and evaluate your properties.",
    copy: "Connect project visibility and useful buyer information with qualified property enquiries and site visits.",
    focus: "Relevant property enquiries & project visibility", audience: "Builders, brokers, commercial and plotted-property developers",
    points: ["Location-based real estate SEO", "Project landing pages", "Property lead campaigns", "Enquiry automation"], icon: Building2,
  },
];

const reasons = [
  { icon: Search, title: "Search behaviour changes", copy: "Customers search by location, service, product, problem or technical requirement. The right terms depend on the industry." },
  { icon: MousePointerClick, title: "Decision journeys change", copy: "A table booking can happen quickly; choosing a supplier or property often needs much more research." },
  { icon: ShieldCheck, title: "Trust requirements change", copy: "Some sectors need credentials, clear disclosures, accurate claims and careful communication before someone enquires." },
  { icon: Target, title: "Growth outcomes change", copy: "Measure appointments, admissions, purchases, RFQs or qualified leads—not simply impressions and traffic." },
];

const goals = [
  { icon: MapPin, title: "More local customers", copy: "Be discovered when customers nearby are ready to visit, enquire or book.", industries: "Beauty, Healthcare, Restaurants", focus: "Local SEO · Google Business Profile · Location pages", query: "local-customer-enquiries" },
  { icon: Users, title: "Better-quality leads", copy: "Connect relevant search intent with the information serious buyers need.", industries: "Manufacturing, Real Estate, Professional Services", focus: "Intent mapping · Lead qualification · Conversion", query: "qualified-leads" },
  { icon: ShoppingBag, title: "More sales or bookings", copy: "Reduce the gap between product or experience discovery and action.", industries: "Ecommerce, Hospitality, Restaurants", focus: "Paid acquisition · User journeys · Remarketing", query: "sales-and-bookings" },
  { icon: GraduationCap, title: "More admissions or signups", copy: "Support decisions with useful information and clear registration paths.", industries: "Education, Startups", focus: "Landing pages · Targeted campaigns · Follow-up", query: "admissions-and-signups" },
  { icon: ChartNoAxesCombined, title: "Stronger brand visibility", copy: "Make your expertise, identity and value easier for the right audience to understand.", industries: "Startups, Ecommerce, Consulting, Travel", focus: "SEO · Content · Social · Video", query: "brand-visibility" },
];

const journeys = [
  { title: "Local customer", industries: "Beauty · Healthcare · Restaurants", steps: ["Search nearby", "Compare options", "Check reviews", "Book or visit"], focus: "Local discovery and fast action" },
  { title: "High-consideration buyer", industries: "Real Estate · Education · Professional Services", steps: ["Research needs", "Compare", "Evaluate trust", "Request details", "Decide"], focus: "Clear information and qualified enquiries" },
  { title: "Ecommerce shopper", industries: "Ecommerce & D2C", steps: ["Find product", "Compare price", "Assess trust", "Purchase", "Buy again"], focus: "Conversion, retention and acquisition efficiency" },
  { title: "Industrial procurement", industries: "Manufacturing", steps: ["Identify need", "Find suppliers", "Review specs", "Request RFQ", "Evaluate"], focus: "Technical content and RFQ journeys" },
  { title: "Emerging startup", industries: "Startups", steps: ["Find audience", "Test message", "Attract users", "Convert", "Improve"], focus: "Learning, activation and acquisition" },
];

const process = [
  ["01", "Understand the industry", "Business model, audiences, constraints and current goals."],
  ["02", "Map customer discovery", "How relevant customers search, compare and decide."],
  ["03", "Review your presence", "Website, organic search, content, ads and enquiry pathways."],
  ["04", "Select the right mix", "Prioritised services, agreed scope and meaningful objectives."],
  ["05", "Execute and improve", "Measure relevant activity, learn and refine the approach."],
];

const measures = [
  ["Beauty & Wellness", "Bookings and local discovery"], ["Ecommerce", "Purchases and customer acquisition cost"],
  ["Education", "Admission enquiries and applications"], ["Healthcare", "Relevant appointment requests"],
  ["Manufacturing", "Qualified RFQs and buyer enquiries"], ["Restaurants", "Orders, reservations and discovery"],
  ["Professional Services", "Consultation enquiries and quality"], ["Startups", "Qualified signups and activation"],
  ["Travel & Hospitality", "Booking enquiries and conversion"], ["Real Estate", "Property enquiries and cost per lead"],
];

const faqs = [
  ["What is industry-specific digital marketing?", "It means planning SEO, advertising, content, websites and customer journeys around the search behaviour, competition, requirements and commercial goals of a particular industry."],
  ["Why does industry-specific digital marketing matter?", "Different industries have different customers and decisions. Restaurant visitors, property buyers and industrial procurement teams need distinct messages, information and conversion paths."],
  ["Which industries does Sharp Rays serve?", "Sharp Rays supports Beauty & Wellness, Ecommerce, Education, Healthcare, Manufacturing, Restaurants, Professional Services, Startups, Travel & Hospitality and Real Estate businesses."],
  ["Does Sharp Rays work with small businesses?", "Yes. The right scope depends on your audience, goals, location, budget and current marketing performance."],
  ["Which marketing services help local businesses?", "Local SEO, Google Business Profile optimisation, service and location pages, appropriate local advertising, helpful reviews and simple booking or enquiry pathways may help."],
  ["Which marketing services help B2B companies generate leads?", "B2B businesses may benefit from search-focused product or capability pages, LinkedIn content, relevant Google Ads, technical information and structured quotation or consultation enquiries."],
  ["Can digital marketing help ecommerce businesses sell more?", "It can support product discovery, qualified traffic, shopping conversion and repeat purchases. Actual outcomes depend on demand, price, competition and execution."],
  ["How can digital marketing help real estate businesses?", "Accurate project pages, location-focused SEO, relevant advertising and clear enquiry processes can support property discovery and informed buyer enquiries, subject to applicable rules."],
  ["Can one agency manage marketing across different industries?", "Yes, when its approach is built on industry-specific research rather than copying the same campaign, message or performance metric across clients."],
  ["How do I choose the right strategy for my industry?", "Start with your ideal customer, buying journey, growth objective, available budget and present performance, then select the marketing channels that best support the desired action."],
  ["Can industry content improve Google and AI search visibility?", "Useful, accessible and accurate information can help search systems and people understand a business. Appearance in AI-generated answers is never guaranteed."],
  ["Can Sharp Rays create a customised industry growth strategy?", "Sharp Rays can review your business goals, existing digital presence and target audience to recommend a relevant proposed scope of work."],
];


type ImagePanelProps = {
  src: string;
  alt: string;
  title: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

function EditorialPhoto({ src, alt, title, className = "", priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: ImagePanelProps) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`group isolate overflow-hidden bg-[#D4D8D6] ${className}`}>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          priority={priority}
          unoptimized
          sizes={sizes}
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-[1300ms] ease-out motion-safe:group-hover:scale-[1.045]"
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#E3D8C8] to-[#8697A1]">
          <Compass aria-hidden="true" size={65} strokeWidth={0.7} className="text-white/75" />
        </div>
      )}
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, delay: reduceMotion ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Heading({ eyebrow, children, copy, centered = false }: { eyebrow: string; children: ReactNode; copy?: string; centered?: boolean }) {
  return (
    <Reveal className={centered ? "mx-auto max-w-[900px] text-center" : "max-w-[830px]"}>
      <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-9 bg-[#B79A72]" />
        <span className="text-[10px] font-semibold uppercase tracking-[.19em] text-[#A1845F] sm:text-[11px]">{eyebrow}</span>
        {centered && <span className="h-px w-9 bg-[#B79A72]" />}
      </div>
      <h2 className="font-[var(--font-new-york),Georgia,serif] text-[31px] font-normal leading-[1.14] tracking-[-.035em] text-[#0B2A52] sm:text-[38px] lg:text-[44px]">{children}</h2>
      {copy && <p className={`mt-5 text-[14px] leading-[1.9] text-[#5D7080] sm:text-[15px] ${centered ? "mx-auto max-w-[690px]" : "max-w-[660px]"}`}>{copy}</p>}
    </Reveal>
  );
}

export default function IndustriesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeJourney, setActiveJourney] = useState(0);

  return (
    <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
      {/* 01 — FEATURED EDITORIAL COVER */}
     
{/* SECTION 01 — INDUSTRIES HERO */}
<section className="relative overflow-hidden bg-white pt-32 sm:pt-36 lg:pt-40">
  <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#EDE2D4]/60 blur-[110px]" />

  <div className="relative mx-auto max-w-[1480px] px-5 pb-16 sm:px-8 lg:px-14 lg:pb-24">
    <div className="grid gap-12 lg:grid-cols-[.93fr_1.07fr] lg:items-center lg:gap-14">

      {/* LEFT — HERO CONTENT */}
      <Reveal className="relative z-10 max-w-[660px]">
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-9 bg-[#B79A72]" />
          <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#9F805E] sm:text-[11px]">
            Sharp Rays / Industries We Serve
          </span>
        </div>

        <h1 className="font-[var(--font-new-york),Georgia,serif] text-[20px] font-normal leading-[1.07] tracking-[-.045em] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
          Different industries.
          <br />
          Different challenges.
          <br />
          <span className="italic text-[#B79A72]">
            Smarter digital growth.
          </span>
        </h1>

        <p className="mt-7 max-w-[560px] text-[14px] leading-[1.9] text-[#526578] sm:text-[15px]">
          Your customers don&apos;t all search, compare or decide in
          the same way. We connect SEO, paid media, content,
          websites and automation to the way people choose
          businesses in your industry.
        </p>

        <p className="mt-3 max-w-[560px] text-[13px] leading-[1.85] text-[#667888]">
          From local appointments and student admissions to
          industrial RFQs and property enquiries, every strategy
          begins with a different customer journey.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact?need=industry-growth-strategy"
            title="Build an industry-specific marketing growth strategy"
            className="group inline-flex min-h-[51px] items-center justify-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition hover:bg-[#173F6F]"
          >
            Build My Growth Strategy
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="#industries-directory"
            title="Discover all ten industries served by Sharp Rays"
            className="inline-flex min-h-[51px] items-center justify-center gap-2 rounded-[9px] border border-[#D5C7B4] bg-white/75 px-6 text-[12px] font-medium transition hover:border-[#B79A72]"
          >
            Explore Industries
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* HERO STATS */}
        <div className="mt-11 grid max-w-[550px] grid-cols-3 divide-x divide-[#DFD6C9] border-t border-[#DFD6C9] pt-5">
          {[
            ["10", "Industry sectors"],
            ["01", "Tailored strategy"],
            ["∞", "Growth opportunities"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="pr-3 not-first:pl-4"
            >
              <p className="font-[var(--font-new-york),Georgia,serif] text-[31px] leading-none text-[#0B2A52]">
                {number}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[.1em] text-[#75818A]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* RIGHT — THREE HERO IMAGES */}
      
{/* RIGHT — THREE HERO IMAGES */}
<Reveal delay={0.12} className="relative pb-10 lg:pl-10">
  <div className="relative ml-4 aspect-[.91] max-h-[660px] sm:ml-10 lg:ml-0">

    {/* 01 — MAIN TRAVEL IMAGE */}
    <div className="absolute inset-x-[9%] bottom-[10%] top-0 overflow-hidden rounded-t-[170px] rounded-b-[14px] bg-[#E3DDD4]">
      <Image
        src="/industries/travel-hospitality.webp"
        alt="Luxury resort surrounded by natural scenery"
        title="Travel and Hospitality Digital Marketing by Sharp Rays"
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 46vw"
        className="object-cover object-center"
      />
    </div>

    <div className="pointer-events-none absolute inset-x-[9%] bottom-[10%] top-0 rounded-t-[170px] rounded-b-[14px] border-[7px] border-white/60" />

    {/* 02 — MANUFACTURING IMAGE */}
    <div className="absolute -bottom-2 -left-3 h-[42%] w-[43%] overflow-hidden rounded-[12px] border-[7px] border-[#F7F5F0] bg-[#D9E0E2] shadow-[0_20px_55px_rgba(11,42,82,.13)] sm:-left-7">
      <Image
        src="/industries/manufacturing.webp"
        alt="Precision industrial manufacturing machinery"
        title="Manufacturing Digital Marketing by Sharp Rays"
        fill
        sizes="(max-width: 1024px) 40vw, 23vw"
        className="object-cover object-center"
      />
    </div>

    {/* 03 — BEAUTY & WELLNESS IMAGE */}
    <div className="absolute -right-2 top-[13%] w-[37%] overflow-hidden rounded-[11px] border-[7px] border-[#F7F5F0] bg-white shadow-[0_20px_50px_rgba(11,42,82,.12)] sm:-right-5">
      <div className="relative aspect-[.9]">
        <Image
          src="/industries/beauty-wellness.webp"
          alt="Premium beauty salon and wellness spa interior"
          title="Beauty and Wellness Digital Marketing by Sharp Rays"
          fill
          sizes="(max-width: 1024px) 35vw, 22vw"
          className="object-cover object-center"
        />
      </div>
    </div>

    {/* FLOATING LABEL */}
    <div className="absolute bottom-[11%] right-[1%] rounded-[9px] border border-[#E8DFD2] bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm">
      <p className="text-[9px] font-semibold uppercase tracking-[.15em] text-[#A58A68]">
        Industry First
      </p>
      <p className="mt-1 font-[var(--font-new-york),Georgia,serif] text-[16px] text-[#0B2A52]">
        Strategy with context.
      </p>
    </div>

  </div>
</Reveal>

    </div>
  </div>

  {/* HERO BOTTOM STRIP */}
  <div className="border-t border-[#E5DCCF] bg-[#F9F7F3]">
    <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-14">
      <p className="text-[10px] font-medium uppercase tracking-[.18em] text-[#957852]">
        Built Around Real Buying Decisions
      </p>

      <p className="text-[11px] tracking-[.05em] text-[#6F7A83]">
        Search Visibility
        <span className="px-2 text-[#B79A72]">✦</span>
        Qualified Enquiries
        <span className="px-2 text-[#B79A72]">✦</span>
        Measurable Outcomes
      </p>
    </div>
  </div>
</section>


      {/* 02 — OPEN EDITORIAL INSIGHTS */}
      <section className="bg-white py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12"><div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-20"><Heading eyebrow="One strategy does not fit every industry">The way customers choose should <span className="italic text-[#B79A72]">shape how you market.</span></Heading><Reveal><p className="max-w-[630px] text-[15px] leading-[1.95] text-[#526779]">A patient searching for a nearby clinic behaves differently from an industrial buyer comparing specifications. A student exploring courses needs different information than someone deciding where to eat tonight.</p><p className="mt-5 max-w-[630px] text-[14px] leading-[1.9] text-[#70808C]">The channels may overlap, but the search, evidence, timing and action paths are different. We start by understanding those differences.</p></Reveal></div><div className="mt-14 grid gap-x-10 gap-y-10 border-t border-[#E8E5E0] pt-9 md:grid-cols-2 lg:grid-cols-4">{reasons.map((r,i)=>{const Icon=r.icon;return <Reveal key={r.title} delay={i*.06} className="relative border-l border-[#DDD1BF] pl-5"><span className="mb-5 flex items-center gap-3 text-[#B79A72]"><Icon size={21} strokeWidth={1.5}/></span><h3 className="font-[var(--font-new-york),Georgia,serif] text-[23px] leading-[1.2]">{r.title}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#6C7D89]">{r.copy}</p></Reveal>})}</div></div></section>

      {/* 03 — THE INDUSTRY EDITORIAL DIRECTORY */}
      <section id="industries-directory" className="bg-[#FAF8F4] py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><Heading eyebrow="Explore all 10 industries" copy="Not a one-size-fits-all campaign. Explore a tailored marketing direction for each kind of business.">Industries we understand. <span className="italic text-[#B79A72]">Growth we can help plan.</span></Heading><p className="mb-2 text-[11px] uppercase tracking-[.15em] text-[#947D60]">The Sharp Rays Industry Directory / 01—10</p></div>
        <div className="mt-12 space-y-16 sm:mt-16 lg:space-y-24">{industries.map((industry,index)=>{const Icon=industry.icon;const flipped=index%2===1;return <Reveal key={industry.slug} className="group"><article className={`grid items-center gap-7 lg:grid-cols-12 lg:gap-14 ${flipped?'lg:[direction:rtl]':''}`}>
          <div className="lg:col-span-7 lg:[direction:ltr]"><Link href={industry.slug} title={`Explore ${industry.name} digital marketing`} className="group/image relative block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"><div className={`relative overflow-hidden rounded-[12px] bg-[#D9D5CC] ${index%3===1?'aspect-[1.42]':'aspect-[1.55]'} sm:aspect-[1.75] lg:aspect-[1.54]`}><EditorialPhoto src={industry.image} alt={industry.alt} title={`${industry.name} — industry-focused digital marketing by Sharp Rays`} className="absolute inset-0" sizes="(max-width:1023px) 100vw, 58vw"/><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081C30]/55 via-transparent to-transparent"/><span className="absolute bottom-5 left-6 text-[10px] font-medium uppercase tracking-[.17em] text-white/95 sm:bottom-7 sm:left-8">{industry.label}</span><span className="absolute right-6 top-5 font-[var(--font-new-york),Georgia,serif] text-[49px] leading-none text-white/85 sm:right-8 sm:top-7 sm:text-[60px]">{String(index+1).padStart(2,'0')}</span></div><span className="absolute -bottom-3 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-[#FAF8F4] bg-[#0B2A52] text-white transition-transform duration-300 group-hover/image:-translate-y-1 group-hover/image:translate-x-1"><ArrowUpRight size={18}/></span></Link></div>
          <div className="lg:col-span-5 lg:[direction:ltr]"><div className="flex items-center gap-3"><span className="h-px w-8 bg-[#B79A72]"/><span className="text-[10px] font-semibold uppercase tracking-[.15em] text-[#A58864]">Industry {String(index+1).padStart(2,'0')}</span></div><div className="mt-5 flex items-center gap-3"><Icon size={23} strokeWidth={1.35} className="text-[#B79A72]"/><h3 className="font-[var(--font-new-york),Georgia,serif] text-[31px] font-normal leading-[1.13] tracking-[-.025em] sm:text-[38px]">{industry.name}</h3></div><p className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.36] text-[#A48660] sm:text-[23px]">{industry.headline}</p><p className="mt-5 max-w-[510px] text-[13px] leading-[1.95] text-[#637585]">{industry.copy}</p><div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-y border-[#E4DFD6] py-5">{industry.points.map(point=><span key={point} className="flex items-start gap-2 text-[11px] leading-[1.65] text-[#516678]"><Check size={14} className="mt-[2px] shrink-0 text-[#B79A72]"/>{point}</span>)}</div><p className="mt-5 text-[11px] leading-[1.8] text-[#70808C]"><span className="font-semibold text-[#0B2A52]">Growth focus: </span>{industry.focus}</p><Link href={industry.slug} title={`Explore Sharp Rays ${industry.name} marketing services`} className="mt-6 inline-flex items-center gap-2 border-b border-[#B79A72] pb-1.5 text-[12px] font-semibold transition-all hover:gap-4">Explore {industry.name} <ArrowUpRight size={17} className="text-[#B79A72]"/></Link></div>
        </article></Reveal>})}</div>
      </div></section>

      {/* 04 — GOALS, FIVE OPEN COMPOSITIONS */}
      <section className="bg-white py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12"><Heading eyebrow="Start with your business goal" copy="You don't need to know which marketing service to buy. Start with the business outcome you want to improve.">What is holding your <span className="italic text-[#B79A72]">growth back?</span></Heading><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">{goals.map((g,i)=>{const Icon=g.icon;return <Reveal key={g.title} delay={(i%3)*.06} className={`relative flex flex-col overflow-hidden rounded-[14px] border border-[#E8E4DB] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7AD88] hover:shadow-[0_15px_35px_rgba(11,42,82,.05)] ${i<3?'lg:col-span-2':'lg:col-span-3'} ${i%2?'bg-[#F7F7F4]':'bg-[#FCFAF7]'}`}><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFE7DC] text-[#A18360]"><Icon size={21} strokeWidth={1.5}/></span><span className="font-[var(--font-new-york),Georgia,serif] text-[27px] text-[#CDB99F]">0{i+1}</span></div><h3 className="mt-6 max-w-[360px] font-[var(--font-new-york),Georgia,serif] text-[26px] leading-[1.2]">{g.title}</h3><p className="mt-3 text-[13px] leading-[1.85] text-[#627587]">{g.copy}</p><p className="mt-5 text-[11px] leading-[1.7] text-[#6A7B87]"><strong className="text-[#0B2A52]">Relevant industries:</strong> {g.industries}</p><div className="mt-auto pt-5"><p className="border-t border-[#E0DBD2] pt-4 text-[11px] leading-[1.75] text-[#9D805C]">{g.focus}</p><Link href={`/contact?goal=${g.query}`} title={`Discuss ${g.title} with Sharp Rays`} className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold">Discuss my goal <ArrowUpRight size={15}/></Link></div></Reveal>})}</div></div></section>

      {/* 05 — DECISION JOURNEYS AS INTERACTIVE EDITORIAL INDEX */}
      <section className="bg-[#F3F6F6] py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12"><Heading eyebrow="Customer behaviour matters" copy="People buy differently across industries. The useful channel and message depend on where they are in the decision process.">One decision journey <span className="italic text-[#B79A72]">does not fit all.</span></Heading><div className="mt-12 grid overflow-hidden rounded-[16px] border border-[#E2E7E6] bg-white lg:grid-cols-[.38fr_.62fr]"><div className="border-b border-[#E5E9E9] lg:border-b-0 lg:border-r">{journeys.map((j,i)=><button type="button" key={j.title} onClick={()=>setActiveJourney(i)} aria-pressed={activeJourney===i} className={`flex w-full items-center gap-4 border-b border-[#EBEEED] px-6 py-5 text-left transition-colors last:border-b-0 sm:px-8 ${activeJourney===i?'bg-[#F5F0E8]':'hover:bg-[#F8FAF9]'}`}><span className={`font-[var(--font-new-york),Georgia,serif] text-[23px] ${activeJourney===i?'text-[#A48459]':'text-[#A7B2B6]'}`}>0{i+1}</span><span className="flex-1"><span className="block font-[var(--font-new-york),Georgia,serif] text-[19px]">{j.title}</span><span className="mt-1 block text-[10px] leading-5 text-[#7D8A93]">{j.industries}</span></span><ArrowUpRight size={17} className={activeJourney===i?'text-[#A48459]':'text-[#B1B8BE]'}/></button>)}</div><div className="flex min-h-[410px] flex-col justify-center p-7 sm:p-10 lg:p-14"><p className="text-[10px] font-semibold uppercase tracking-[.19em] text-[#A1845F]">Customer journey / 0{activeJourney+1}</p><h3 className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[30px] sm:text-[37px]">{journeys[activeJourney].title}</h3><div className="mt-7 flex flex-wrap items-center gap-2">{journeys[activeJourney].steps.map((step,i)=><div key={step} className="flex items-center gap-2"><span className="rounded-[8px] border border-[#E2E7E5] bg-[#F8FAF9] px-3 py-3 text-[11px] text-[#4B6476]">{step}</span>{i<journeys[activeJourney].steps.length-1&&<ArrowRight size={15} className="text-[#B79A72]"/>}</div>)}</div><div className="mt-9 border-l-[3px] border-[#B79A72] pl-5"><p className="text-[10px] font-semibold uppercase tracking-[.13em] text-[#A1845F]">Marketing priority</p><p className="mt-2 text-[14px] leading-[1.8] text-[#526A7B]">{journeys[activeJourney].focus}</p></div></div></div></div></section>

      {/* 06 — PROCESS / OPEN TIMELINE */}
      <section className="bg-white py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12"><div className="grid gap-10 lg:grid-cols-[.44fr_.56fr] lg:gap-16"><Heading eyebrow="Our industry-focused method">Research first. <span className="italic text-[#B79A72]">Strategy next.</span></Heading><Reveal><p className="max-w-[640px] text-[15px] leading-[1.95] text-[#65798A]">We don't begin with a preselected channel or a generic package. We learn how your customers discover, evaluate and choose businesses like yours—then identify the work most likely to help.</p><Link href="/contact?need=industry-marketing-review" title="Discuss a Sharp Rays industry marketing review" className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold">Discuss Your Marketing Needs <ArrowUpRight size={17} className="text-[#B79A72]"/></Link></Reveal></div><div className="relative mt-14 grid gap-6 border-t border-[#DDE2E2] pt-8 md:grid-cols-2 xl:grid-cols-5">{process.map(([number,title,copy],i)=><Reveal key={number} delay={i*.045} className="relative border-l border-[#DCD8D0] pl-5"><span className="font-[var(--font-new-york),Georgia,serif] text-[40px] text-[#C5A47A]">{number}</span><h3 className="mt-6 font-[var(--font-new-york),Georgia,serif] text-[22px] leading-[1.23]">{title}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#687D8D]">{copy}</p></Reveal>)}</div></div></section>

      {/* 07 — PERFORMANCE EDITORIAL SCORECARD */}
      <section className="bg-[#FAF8F4] py-20 sm:py-24 lg:py-28"><div className="mx-auto grid max-w-[1380px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12"><div><Heading eyebrow="Meaningful results, not vanity metrics">Growth looks <span className="italic text-[#B79A72]">different everywhere.</span></Heading><p className="mt-6 max-w-[410px] text-[13px] leading-[1.95] text-[#697A87]">A restaurant may measure reservations. A manufacturer may measure qualified RFQs. A startup may measure activation. The scorecard should reflect the business.</p></div><div className="divide-y divide-[#E0DCD4] border-y border-[#E0DCD4]">{measures.map(([name,metric],i)=><Reveal key={name} className="grid gap-2 py-4 sm:grid-cols-[28px_.8fr_1.2fr] sm:items-center sm:gap-5"><span className="text-[11px] font-semibold text-[#B79A72]">{String(i+1).padStart(2,'0')}</span><h3 className="font-[var(--font-new-york),Georgia,serif] text-[17px] leading-6">{name}</h3><p className="text-[12px] leading-6 text-[#657A8A]">{metric}</p></Reveal>)}</div></div></section>

      {/* 08 — FAQ */}
      <section className="bg-white py-20 sm:py-24 lg:py-28"><div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12"><Heading centered eyebrow="Frequently asked questions" copy="Common questions about industry-focused marketing, choosing services and planning practical growth.">Good questions. <span className="italic text-[#B79A72]">Clear answers.</span></Heading><div className="mt-12 divide-y divide-[#E6E5E1] border-y border-[#E6E5E1]">{faqs.map(([q,a],i)=><div key={q}><button type="button" aria-expanded={openFaq===i} aria-controls={`industries-faq-${i}`} onClick={()=>setOpenFaq(openFaq===i?null:i)} className="flex w-full items-start justify-between gap-4 py-5 text-left"><span className="font-[var(--font-new-york),Georgia,serif] text-[18px] leading-[1.45] sm:text-[21px]">{q}</span><span className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${openFaq===i?'border-[#C5AC8B] bg-[#F8F2E9]':'border-[#E6E3DC]'}`}><ChevronDown size={16} className={`text-[#A1845F] transition-transform ${openFaq===i?'rotate-180':''}`}/></span></button><div id={`industries-faq-${i}`} hidden={openFaq!==i} className="max-w-[880px] pb-6 pr-12 text-[13px] leading-[1.95] text-[#647A8B]">{a}</div></div>)}</div></div></section>

      {/* 09 — CONVERSION */}
      <section className="relative overflow-hidden bg-[#EEE8DD] py-20 sm:py-24 lg:py-28"><div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-44 h-[550px] w-[550px] rounded-full border border-[#D9CCB8]"/><div aria-hidden="true" className="pointer-events-none absolute -bottom-56 -left-40 h-[550px] w-[550px] rounded-full border border-[#D9CCB8]"/><Reveal className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8"><div className="mb-6 flex items-center justify-center gap-3"><span className="h-px w-9 bg-[#B79A72]"/><span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#997C58]">Your business. Your audience. Your opportunity.</span><span className="h-px w-9 bg-[#B79A72]"/></div><h2 className="font-[var(--font-new-york),Georgia,serif] text-[36px] font-normal leading-[1.12] tracking-[-.04em] sm:text-[48px] lg:text-[56px]">Let&apos;s build around <span className="italic text-[#A68862]">how your customers actually choose.</span></h2><p className="mx-auto mt-6 max-w-[650px] text-[14px] leading-[1.9] text-[#637587]">Whether you need bookings, admissions, sales, relevant enquiries or better digital discovery, we can discuss a strategy grounded in your industry's buying journey.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/contact?need=industry-growth-plan" title="Build My Industry Growth Plan with Sharp Rays" className="group inline-flex min-h-[52px] items-center gap-3 rounded-[10px] bg-[#0B2A52] px-7 text-[12px] font-medium text-white transition hover:bg-[#173F6F]">Build My Industry Growth Plan <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link><Link href="/services" title="Explore all Sharp Rays digital marketing services" className="inline-flex min-h-[52px] items-center gap-2 rounded-[10px] border border-[#CCB99E] bg-white/80 px-7 text-[12px] font-medium">Explore Our Services <ArrowRight size={16}/></Link></div><p className="mt-8 text-[11px] text-[#8A8B87]">Marketing recommendations depend on your business goals, audience, budget and available information.</p></Reveal></section>
    </main>
  );
}
