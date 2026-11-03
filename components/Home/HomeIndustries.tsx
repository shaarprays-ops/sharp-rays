"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Sparkles, ShoppingBag, GraduationCap,
  HeartPulse, Factory, BriefcaseBusiness, Building2,
  UtensilsCrossed, Rocket, PlaneTakeoff,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  imageTitle: string;
  icon: LucideIcon;
  span: string;
  position?: string;
  fallback: string;
};

// Curated topic-specific editorial photographs from Unsplash. For production,
// download the photographs you choose, check usage rights, convert to WebP,
// and replace remote URLs with /public/industries/home/*.webp paths.
const industries: Industry[] = [
  {
    number: "01", title: "Beauty & Wellness", eyebrow: "SALONS · SPAS · WELLNESS",
    description: "Make your salon, spa or wellness brand easier to discover and book.",
    href: "/industries/beauty-wellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=82",
    alt: "Tranquil spa and wellness interior with a relaxing premium atmosphere",
    imageTitle: "Beauty and Wellness Digital Marketing — Sharp Rays",
    icon: Sparkles, span: "lg:col-span-7", position: "center 52%",
    fallback: "from-[#CAB9AB] to-[#887569]",
  },
  {
    number: "02", title: "Ecommerce", eyebrow: "ECOMMERCE · D2C BRANDS",
    description: "Connect product discovery, customer experience and profitable sales.",
    href: "/industries/ecommerce",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=82",
    alt: "Premium ecommerce product photography featuring a retail sneaker",
    imageTitle: "Ecommerce and D2C Digital Marketing — Sharp Rays",
    icon: ShoppingBag, span: "lg:col-span-5", position: "center",
    fallback: "from-[#CBA5A2] to-[#866E6D]",
  },
  {
    number: "03", title: "Education", eyebrow: "SCHOOLS · COLLEGES · INSTITUTES",
    description: "Turn programme searches into student enquiries and admissions.",
    href: "/industries/education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=82",
    alt: "University graduates on a bright campus representing student admissions",
    imageTitle: "Education Marketing and Student Admissions — Sharp Rays",
    icon: GraduationCap, span: "lg:col-span-4", position: "center",
    fallback: "from-[#B7C4BC] to-[#758C7D]",
  },
  {
    number: "04", title: "Healthcare", eyebrow: "CLINICS · PRACTICES · HEALTHCARE",
    description: "Help patients find reliable service information and relevant care.",
    href: "/industries/healthcare",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1100&q=82",
    alt: "Modern healthcare setting with medical professionals and clinical care",
    imageTitle: "Healthcare and Clinic Digital Marketing — Sharp Rays",
    icon: HeartPulse, span: "lg:col-span-4", position: "center",
    fallback: "from-[#B6C9C8] to-[#6F9091]",
  },
  {
    number: "05", title: "Manufacturing", eyebrow: "INDUSTRIAL · B2B · EXPORTS",
    description: "Get found by industrial buyers searching for products and capabilities.",
    href: "/industries/manufacturing",
    image: "/industries/manufacturing/oem-manufacturing.webp",
    alt: "Industrial precision machinery manufacturing engineering components",
    imageTitle: "Industrial and Manufacturing Digital Marketing — Sharp Rays",
    icon: Factory, span: "lg:col-span-4", position: "center",
    fallback: "from-[#A7B4BF] to-[#657785]",
  },
  {
    number: "06", title: "Professional Services", eyebrow: "CONSULTANTS · ADVISORS · B2B",
    description: "Build expertise-led visibility and more qualified client enquiries.",
    href: "/industries/professional-services",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=82",
    alt: "Elegant professional office and consulting workspace with natural light",
    imageTitle: "Professional Services Marketing for Consultants — Sharp Rays",
    icon: BriefcaseBusiness, span: "lg:col-span-5", position: "center",
    fallback: "from-[#C5BBAE] to-[#8A8176]",
  },
  {
    number: "07", title: "Real Estate", eyebrow: "DEVELOPERS · BROKERS · PROJECTS",
    description: "Move property searches towards qualified enquiries and site visits.",
    href: "/industries/real-estate",
    image: "/industries/real-estate/real-estate-hero.webp",
    alt: "Modern residential apartment development with premium architecture",
    imageTitle: "Real Estate Digital Marketing and Property Leads — Sharp Rays",
    icon: Building2, span: "lg:col-span-7", position: "center",
    fallback: "from-[#BCBDB9] to-[#737C7F]",
  },
  {
    number: "08", title: "Restaurants", eyebrow: "CAFÉS · RESTAURANTS · FOOD BRANDS",
    description: "Turn local food discovery into visits, reservations and orders.",
    href: "/industries/restaurants",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=82",
    alt: "Inviting modern restaurant interior with tables and warm ambient light",
    imageTitle: "Restaurant and Café Digital Marketing — Sharp Rays",
    icon: UtensilsCrossed, span: "lg:col-span-4", position: "center",
    fallback: "from-[#C5A38C] to-[#82634E]",
  },
  {
    number: "09", title: "Startups", eyebrow: "SAAS · D2C · NEW BUSINESSES",
    description: "Support launch visibility, customer acquisition and early traction.",
    href: "/industries/startup",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=82",
    alt: "Startup founders and colleagues collaborating around a shared work table",
    imageTitle: "Startup Digital Marketing and Customer Acquisition — Sharp Rays",
    icon: Rocket, span: "lg:col-span-4", position: "center",
    fallback: "from-[#ADB6C8] to-[#63718C]",
  },
  {
    number: "10", title: "Travel & Hospitality", eyebrow: "HOTELS · RESORTS · TRAVEL",
    description: "Make destinations, stays and experiences easier to find and book.",
    href: "/industries/travel-hospitality",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1100&q=82",
    alt: "Luxury tropical resort pool surrounded by palms and holiday architecture",
    imageTitle: "Travel and Hospitality Digital Marketing — Sharp Rays",
    icon: PlaneTakeoff, span: "lg:col-span-4", position: "center",
    fallback: "from-[#A3C0BD] to-[#547F80]",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function IndustryCard({ industry, index, reduced }: {
  industry: Industry; index: number; reduced: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const Icon = industry.icon;
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay: reduced ? 0 : (index % 3) * 0.06, ease }}
      className={`min-w-0 ${industry.span}`}
    >
      <Link
        href={industry.href}
        title={`Explore Digital Marketing for ${industry.title} by Sharp Rays`}
        className={`group relative isolate flex h-full min-h-[350px] flex-col overflow-hidden rounded-[18px] bg-gradient-to-br sm:min-h-[390px] lg:min-h-[405px] ${industry.fallback} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]`}
      >
        {!failed && (
          // The direct image element avoids adding remote domains to next.config.
          // For best production performance, move the images to local WebP files.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={industry.image}
            alt={industry.alt}
            title={industry.imageTitle}
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
            style={{ objectPosition: industry.position ?? "center" }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.055]"
          />
        )}
        {failed && <Icon size={96} strokeWidth={0.8} aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/30" />}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091B2B]/90 via-[#091B2B]/35 to-[#091B2B]/10" />
        <div className="pointer-events-none absolute inset-[10px] rounded-[12px] border border-white/20 transition-colors duration-300 group-hover:border-[#E8CCA3]/65" />
        <div className="relative z-10 flex items-start justify-between gap-3 p-6 sm:p-7">
          <div className="flex min-w-0 items-center gap-3">
          

            
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#E9D0AA] group-hover:bg-[#E9D0AA] group-hover:text-[#0B2A52]">
            <Icon size={19} strokeWidth={1.5} />
          </span>
        </div>
        <div className="relative z-10 mt-auto px-6 pb-7 pt-20 sm:px-8 sm:pb-9">
        
          <h3 className="max-w-[530px] font-serif text-[27px] font-normal leading-[1.18] tracking-[-0.025em] text-white sm:text-[32px]">{industry.title}</h3>
          <p className="mt-3 max-w-[475px] text-[12px] leading-[1.85] text-white/85 sm:text-[13px]">{industry.description}</p>
          <div className="mt-6 flex items-center gap-2.5 text-[#E8CCA3]">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em]">Explore Industry</span>
            <ArrowUpRight size={17} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
        <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#B79A72] transition-all duration-500 group-hover:w-full" />
      </Link>
    </motion.article>
  );
}

export default function HomeIndustries() {
  const reduced = Boolean(useReducedMotion());
  return (
    <section id="industries" aria-labelledby="home-industries-heading" className="relative overflow-hidden bg-[#FCFAF7] py-20 text-[#0B2A52] sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-[440px] w-[440px] rounded-full bg-[#E9DFD1]/30 blur-[100px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.div initial={reduced ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease }} className="mx-auto max-w-[850px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A1845F] sm:text-[11px]">Industries We Help</span>
            <span className="h-px w-8 bg-[#B79A72]" />
          </div>
          <h2 id="home-industries-heading" className="font-serif text-[30px] font-normal leading-[1.18] tracking-[-0.035em] sm:text-[38px] lg:text-[43px]">
            Different Industries. Different Challenges. <span className="text-[#B79A72]">Strategies Built Around Your Business.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[710px] text-[13px] leading-[1.95] text-[#637789] sm:text-[14px]">
            From local businesses and professional firms to ecommerce brands and growing startups, Sharp Rays creates digital marketing strategies around how your customers search, compare and make decisions.
          </p>
        </motion.div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-[#E4DACE] pb-5 lg:mt-16">
          <div className="flex items-center gap-3"><Building2 size={17} strokeWidth={1.5} className="text-[#B79A72]" /><span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#6A7D8D]">Explore Our Industry Expertise</span></div>
          <span className="font-serif text-[14px] text-[#A1845F]">01 — 10</span>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {industries.map((industry, index) => <IndustryCard key={industry.href} industry={industry} index={index} reduced={reduced} />)}
        </div>
        <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease }} className="mt-12 flex flex-col gap-7 border-t border-[#E4DACE] pt-9 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-[750px]">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A1845F]">A Strategy That Fits</span>
            <p className="mt-4 font-serif text-[22px] font-normal leading-[1.5] text-[#284762] sm:text-[27px]">Your industry shapes your customers&apos; decisions. <span className="text-[#B79A72]">Your marketing strategy should reflect that.</span></p>
          </div>
          <Link href="/contact?source=industries" title="Discuss Your Industry Marketing Goals with Sharp Rays" className="group inline-flex min-h-[51px] w-full shrink-0 items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#173D69] sm:w-fit">
            Discuss My Growth Strategy <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
