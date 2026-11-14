
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Smartphone,
  Code2,
  Search,
  ShoppingBag,
  Building2,
  Hotel,
  Factory,
  Layers3,
  Gauge,
  ShieldCheck,
  Check,
  Globe,
  LayoutTemplate,
  Workflow,
  Target,
  ClipboardCheck,
  MessageCircle,
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
    <div
      className={
        center ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"
      }
    >
      <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
        {eyebrow}
      </p>

      <h2 className="font-[var(--font-new-york)] text-[30px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[39px] lg:text-[46px]">
        {title}{" "}
        {highlight && (
          <span className="text-[#B79A72]">{highlight}</span>
        )}
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
    title: "An outdated online presence",
    description:
      "An old or poorly structured website may not communicate your current services, business capabilities or brand positioning clearly.",
    icon: Monitor,
  },
  {
    number: "02",
    title: "Not designed for mobile visitors",
    description:
      "Customers may visit your website using smartphones. Navigation, content and enquiry options should work comfortably on smaller screens.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Difficult to generate enquiries",
    description:
      "Unclear service information, confusing navigation and weak calls to action can make it harder for visitors to contact your business.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Limited search foundations",
    description:
      "A website needs a sensible page structure, metadata, technical foundations and useful content to support future SEO work.",
    icon: Search,
  },
];

const websiteServices: {
  number: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Business Website Development",
    description:
      "Professional business websites that explain your company, services, strengths and contact information in a clear and organised way.",
    points: [
      "Custom page layouts",
      "Business and service pages",
      "Clear enquiry pathways",
    ],
    icon: Building2,
  },
  {
    number: "02",
    title: "Website Design & UI/UX",
    description:
      "Thoughtful website design that combines visual identity, readable content, intuitive navigation and a consistent user experience.",
    points: [
      "Custom visual direction",
      "Responsive layouts",
      "User-focused navigation",
    ],
    icon: LayoutTemplate,
  },
  {
    number: "03",
    title: "Industrial & B2B Websites",
    description:
      "Structured websites for manufacturers, suppliers and industrial businesses that need to present their capabilities and offerings.",
    points: [
      "Product and service information",
      "Company capability sections",
      "Business enquiry forms",
    ],
    icon: Factory,
  },
  {
    number: "04",
    title: "Hospitality & Resort Websites",
    description:
      "Website experiences for resorts and hospitality businesses that need to communicate their property, facilities and guest experience.",
    points: [
      "Property and room information",
      "Gallery and facility sections",
      "Enquiry and booking pathways",
    ],
    icon: Hotel,
  },
  {
    number: "05",
    title: "Ecommerce Website Development",
    description:
      "Online stores structured around product discovery, category navigation, product information and the purchasing journey.",
    points: [
      "Product and category pages",
      "Shopping experience",
      "Ecommerce functionality planning",
    ],
    icon: ShoppingBag,
  },
  {
    number: "06",
    title: "Website Redesign & Improvement",
    description:
      "Improve an existing website's appearance, content structure, usability and technical foundations without treating redesign as a cosmetic change alone.",
    points: [
      "Existing website review",
      "Layout and content improvements",
      "Responsive experience updates",
    ],
    icon: Layers3,
  },
];

const localBusinessTypes = [
  {
    number: "01",
    title: "Navghar Industrial Units",
    category: "Industrial & B2B",
    description:
      "Websites for industrial businesses that need to present their products, capabilities, services and business information clearly to potential buyers and partners.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Uttan Road Resorts",
    category: "Hospitality & Tourism",
    description:
      "Website experiences for resorts and hospitality businesses to showcase their property, facilities, photographs and enquiry or booking options.",
    icon: Hotel,
  },
  {
    number: "03",
    title: "Bhayandar Local Businesses",
    category: "Retail & Professional Services",
    description:
      "Business websites that help local shops and service providers communicate what they offer, where they operate and how customers can get in touch.",
    icon: Building2,
  },
];

const process = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We understand your business, audience, website goals, required pages and functionality before deciding the project structure.",
  },
  {
    number: "02",
    title: "Structure & Design",
    description:
      "We plan the page hierarchy, content flow, visual direction and user experience around your brand and customer requirements.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We develop the website, implement agreed functionality and prepare the responsive layouts and technical foundations.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We review the website across devices, check important links and forms, address agreed issues and prepare for launch.",
  },
];

const features = [
  "Responsive layouts for mobile, tablet and desktop",
  "Clear navigation and page hierarchy",
  "SEO-friendly URL and heading structure",
  "Page titles and meta description setup",
  "Image optimisation and suitable media formats",
  "Contact forms and enquiry pathways",
  "Performance and loading checks",
  "SSL and essential security considerations",
  "Sitemap and indexing readiness checks",
  "Analytics and Search Console setup support",
];

const reasons = [
  {
    title: "Designed around your business",
    description:
      "We plan the website around your actual services, audience and business objectives rather than forcing every business into the same layout.",
    icon: Target,
  },
  {
    title: "Design and development together",
    description:
      "Visual presentation, content structure, responsive behaviour and functionality are considered as connected parts of the website.",
    icon: Code2,
  },
  {
    title: "SEO-aware foundations",
    description:
      "We consider page hierarchy, metadata, URLs, content structure and technical basics during development.",
    icon: Search,
  },
  {
    title: "Built for the next step",
    description:
      "Your website should make it easier for visitors to understand your offering and take a relevant action.",
    icon: Workflow,
  },
];

const faqs = [
  {
    question:
      "What website development services does Sharp Rays provide in Bhayandar?",
    answer:
      "Sharp Rays provides business website development, website design and UI/UX, industrial and B2B websites, hospitality websites, ecommerce development and website redesign services. The final scope depends on your business requirements and functionality.",
  },
  {
    question:
      "How much does website development cost in Bhayandar?",
    answer:
  "Sharp Rays offers three website development packages: Launch from ₹9,999/month, Growth from ₹14,999/month and Scale from ₹24,999/month. Each package has its own inclusions and website scope. Visit our pricing page for complete package details.",
  },
  {
    question:
      "Can you build a website for an industrial business in Navghar?",
    answer:
      "Yes. An industrial website can include company information, product or service details, capabilities, industry applications and enquiry forms. We plan the page structure around the information your business needs to communicate.",
  },
  {
    question:
      "Can you develop a website for resorts around Uttan Road?",
    answer:
      "Yes. A resort website can showcase property details, rooms, facilities, photographs, location information and enquiry or booking pathways. The exact functionality depends on the project's requirements.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Responsive development is part of our website planning. We design page layouts and navigation to adapt to mobile, tablet and desktop screen sizes, then review the experience across devices.",
  },
  {
    question: "Will the website be SEO-friendly?",
    answer:
      "We consider SEO foundations such as page structure, metadata, headings, URLs, responsive layouts and technical setup during development. Ongoing SEO strategy, content creation and ranking improvements can be scoped separately.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the number of pages, design complexity, functionality, content readiness and feedback cycles. We establish the expected schedule after understanding the project scope.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review your existing website and plan improvements to its design, page structure, content presentation, mobile experience and functionality. The approach depends on the current website and what needs to change.",
  },
];

/* =========================================================
   STRUCTURED DATA
========================================================= */

function BhayandarWebsiteStructuredData() {
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

export default function BhayandarWebDevPageClient() {
  return (
    <>
      <BhayandarWebsiteStructuredData />

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
                  Website Design & Development · Bhayandar
                </span>
              </div>

              <h1 className="font-[var(--font-new-york)] text-[40px] leading-[1.12] tracking-[-0.045em] text-[#122847] sm:text-[54px] lg:text-[64px]">
                Website Design &{" "}
                <span className="text-[#B79A72]">Development</span>{" "}
                in Bhayandar.
              </h1>

              <p className="mt-6 max-w-[590px] text-[13px] leading-[2] text-[#718092] sm:text-[14px]">
                Build a professional website that presents your business,
                services and capabilities clearly. Sharp Rays develops
                websites for Bhayandar businesses, including industrial
                units around Navghar and hospitality businesses around
                Uttan Road.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  title="Get a website development quote from Sharp Rays"
                  className="inline-flex items-center gap-3 rounded-full bg-[#122847] px-6 py-3.5 text-[11px] font-medium text-white transition-all hover:bg-[#23446D]"
                >
                  Get a Website Quote
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/services/website-development"
                  title="Explore Sharp Rays website development services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DED4C7] bg-white px-6 py-3.5 text-[11px] font-medium text-[#122847] transition-colors hover:border-[#B79A72]"
                >
                  Explore Our Services
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] text-[#718092]">
                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#A38561]" />
                  Custom Design
                </span>
                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#A38561]" />
                  Responsive Development
                </span>
                <span className="flex items-center gap-2">
                  <Check size={13} className="text-[#A38561]" />
                  SEO-aware Structure
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
                      Your Digital Presence
                    </p>
                    <h2 className="mt-2 font-[var(--font-new-york)] text-[23px] text-[#122847]">
                      A website built with purpose.
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                    <Monitor size={20} />
                  </div>
                </div>

                {/* Website preview composition */}
                <div className="mt-6 rounded-xl border border-[#EAE3D9] bg-[#FCFAF7] p-3">
                  <div className="flex items-center gap-1.5 border-b border-[#EAE3D9] pb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D8C6AF]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D8C6AF]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D8C6AF]" />
                    <div className="ml-3 h-2 w-24 rounded-full bg-[#E9E2D8]" />
                  </div>

                  <div className="grid grid-cols-[1fr_.7fr] gap-3 py-5">
                    <div>
                      <div className="h-2 w-16 rounded-full bg-[#C6A77A]/70" />
                      <div className="mt-3 h-3 w-full rounded-full bg-[#122847]" />
                      <div className="mt-2 h-3 w-[75%] rounded-full bg-[#122847]" />
                      <div className="mt-4 h-2 w-full rounded-full bg-[#DCE0E3]" />
                      <div className="mt-2 h-2 w-[85%] rounded-full bg-[#DCE0E3]" />
                      <div className="mt-5 h-7 w-20 rounded-full bg-[#122847]" />
                    </div>
                    <div className="flex min-h-[115px] items-center justify-center rounded-lg bg-[#EDE5D9]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A77A] text-[#A38561]">
                        <Building2 size={25} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-md bg-[#F0EAE1]" />
                    <div className="h-12 rounded-md bg-[#F0EAE1]" />
                    <div className="h-12 rounded-md bg-[#F0EAE1]" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { icon: Smartphone, label: "Responsive" },
                    { icon: Search, label: "SEO-aware" },
                    { icon: Gauge, label: "Performance" },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-lg bg-[#F7F3ED] px-2 py-3 text-center"
                      >
                        <Icon
                          size={16}
                          className="mx-auto text-[#A38561]"
                        />
                        <p className="mt-2 text-[9px] text-[#718092]">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
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
          <div className="grid gap-6 border-y border-[#E8DED1] py-8 md:grid-cols-[220px_1fr] md:gap-12">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                A Clear Answer
              </p>

              <h2 className="mt-3 font-[var(--font-new-york)] text-[22px] leading-tight text-[#122847]">
                What does website development include?
              </h2>
            </div>

            <p className="text-[13px] leading-[2] text-[#718092]">
              Website development in Bhayandar includes planning, designing
              and building websites that help businesses present their
              services, products and business information online. Depending
              on the project, this can include custom UI/UX design,
              responsive development, business pages, ecommerce
              functionality, enquiry forms and SEO-aware technical
              foundations. Sharp Rays plans each website around the
              business requirements and intended customer experience.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =================================================
          03. WEBSITE CHALLENGES
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Understanding Your Website Needs"
              title="What Can a Better Website"
              highlight="Help Your Business Improve?"
              description="Your website should do more than display a business name and contact number. It should communicate your offering, guide visitors and support the next step in their customer journey."
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
          04. WEBSITE DEVELOPMENT SERVICES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Our Website Services"
              title="Website Solutions for"
              highlight="Different Business Needs."
              description="From a professional company website to a specialised industrial or hospitality website, we plan the design, content structure and functionality around the project."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {websiteServices.map((service, index) => {
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
          05. LOCAL BUSINESS REQUIREMENTS
      ================================================= */}

      <section className="bg-[#F5F1EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                Website Development Around Bhayandar
              </p>

              <h2 className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]">
                Websites That Reflect{" "}
                <span className="text-[#B79A72]">
                  What Your Business Does.
                </span>
              </h2>

              <p className="mt-5 text-[12px] leading-[2] text-[#718092]">
                A website for an industrial supplier has different
                requirements from a resort website. We consider the
                business model, information visitors need and actions
                they may want to take before planning the design.
              </p>
            </Reveal>

            <div className="space-y-4">
              {localBusinessTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} delay={index * 0.08}>
                    <article className="flex gap-4 rounded-[15px] border border-[#E5DACA] bg-white p-5 sm:gap-6 sm:p-7">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#A38561]">
                          {item.category}
                        </p>

                        <h3 className="mt-1 font-[var(--font-new-york)] text-[21px] text-[#122847]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-[1.9] text-[#788594]">
                          {item.description}
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
          06. DEVELOPMENT PROCESS
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="How We Build"
              title="From First Discussion"
              highlight="to Website Launch."
              description="A well-planned development process helps keep the website aligned with your requirements, design direction and intended functionality."
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
          07. WEBSITE FEATURES
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
              Built for Everyday Use
            </p>

            <h2 className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[42px]">
              Essential Website{" "}
              <span className="text-[#B79A72]">
                Features & Foundations.
              </span>
            </h2>

            <p className="mt-5 text-[12px] leading-[2] text-[#718092]">
              The right website features depend on the project. We plan
              essential design, usability and technical requirements
              before development so the finished website supports the
              way your business needs to communicate.
            </p>

            <div className="mt-7 flex items-center gap-3 rounded-xl border border-[#E9E0D5] bg-white p-4">
              <ShieldCheck size={21} className="text-[#A38561]" />
              <p className="text-[11px] leading-relaxed text-[#647487]">
                Features and integrations are finalised according to the
                agreed project scope.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 border-b border-[#E7DED2] py-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0E9DE] text-[#A38561]">
                    <Check size={13} />
                  </span>

                  <p className="text-[11px] leading-[1.8] text-[#647487]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          08. WHY SHARP RAYS
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Sharp Rays"
              title="More Than a Website."
              highlight="A Better Business Experience."
              description="We look at how your website represents your brand, communicates your services and guides visitors. Design, development and website foundations are planned together."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal key={reason.title} delay={index * 0.07}>
                  <article className="flex gap-5 rounded-[15px] border border-[#E9E0D5] bg-[#FCFAF7] p-6 sm:p-8">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0E9DE] text-[#A38561]">
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
          09. WEBSITE DEVELOPMENT PRICING
      ================================================= */}

      <section
        className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-webdev-pricing-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                Website Development Pricing
              </p>

              <h2
                id="bhayandar-webdev-pricing-heading"
                className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]"
              >
                Find the Right Website{" "}
                <span className="text-[#B79A72]">Package.</span>
              </h2>

              <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
                Choose from three website development packages designed
                for different business and project requirements.
                Explore the complete inclusions before selecting your plan.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Launch",
                price: "₹9,999",
                description:
                  "Explore the Launch package for your website requirements.",
                number: "01",
              },
              {
                name: "Growth",
                price: "₹14,999",
                description:
                  "Explore the Growth package for your website requirements.",
                number: "02",
                popular: true,
              },
              {
                name: "Scale",
                price: "₹24,999",
                description:
                  "Explore the Scale package for your website requirements.",
                number: "03",
              },
            ].map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <article
                  className={`relative flex h-full flex-col rounded-[17px] border p-7 sm:p-8 ${
                    plan.popular
                      ? "border-[#B79A72] bg-white shadow-[0_18px_45px_-35px_rgba(11,42,82,.35)]"
                      : "border-[#E8DED0] bg-white"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#F3EBDD] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#A38561]">
                      Popular Choice
                    </span>
                  )}

                  <span className="font-[var(--font-new-york)] text-[25px] text-[#D5C5AE]">
                    {plan.number}
                  </span>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A38561]">
                    {plan.name} Website Package
                  </p>

                  <h3 className="mt-5 font-[var(--font-new-york)] text-[37px] leading-none tracking-[-0.04em] text-[#122847] sm:text-[42px]">
                    {plan.price}
                    <span className="ml-1 text-[12px] font-normal tracking-normal text-[#718092]">
                      /month
                    </span>
                  </h3>

                  <p className="mt-5 text-[12px] leading-[1.9] text-[#718092]">
                    {plan.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <Link
                      href="/pricing"
                      title={`View ${plan.name} website development package details`}
                      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-[11px] font-medium transition ${
                        plan.popular
                          ? "bg-[#0B2A52] text-white hover:bg-[#163D69]"
                          : "border border-[#DDCDB9] bg-[#FCFAF7] text-[#0B2A52] hover:border-[#B79A72]"
                      }`}
                    >
                      View Package Details
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-7 text-center text-[11px] leading-[1.8] text-[#87929D]">
              Review the pricing page for complete package inclusions,
              deliverables and applicable terms.
            </p>

            <div className="mt-5 flex justify-center">
              <Link
                href="/pricing"
                title="Explore all Sharp Rays pricing packages"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#A38561] transition-colors hover:text-[#122847]"
              >
                Explore Complete Pricing
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>


      {/* =================================================
          10. FAQ
      ================================================= */}

      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-webdev-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
              Questions Before You Start
            </p>

            <h2
              id="bhayandar-webdev-faq-heading"
              className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Useful information about website design, website development,
              pricing and website requirements for businesses around
              Bhayandar.
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
          11. FINAL CTA
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <Reveal className="mx-auto max-w-[1220px]">
          <div className="relative overflow-hidden rounded-[20px] bg-[#122847] px-7 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-[340px] w-[340px] rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -left-20 -bottom-40 h-[340px] w-[340px] rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-[720px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C6A77A]">
                Let's Build Your Website
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-white sm:text-[45px]">
                Have a Website Project{" "}
                <span className="text-[#C6A77A]">
                  in Mind?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[580px] text-[12px] leading-[2] text-white/65">
                Tell us about your business and the website you want
                to build. Let's discuss the design, pages, functionality
                and project scope.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  title="Get a website development quote from Sharp Rays"
                  className="inline-flex items-center gap-3 rounded-full bg-[#C6A77A] px-6 py-3.5 text-[11px] font-semibold text-[#122847] transition-colors hover:bg-[#D7BC96]"
                >
                  Get Your Website Quote
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
          12. INTERNAL LINKS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#E8DED1] pt-7 text-[10px] text-[#788594]">
          <Link
            href="/services/website-development"
            title="Explore Sharp Rays website development services"
            className="transition-colors hover:text-[#A38561]"
          >
            Website Development Services
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
            href="/locations/mira-road/website-development"
            title="Website development in Mira Road"
            className="transition-colors hover:text-[#A38561]"
          >
            Website Development in Mira Road
          </Link>

          <Link
            href="/locations/naigaon/website-development"
            title="Website development in Naigaon"
            className="transition-colors hover:text-[#A38561]"
          >
            Website Development in Naigaon
          </Link>
        </div>
      </section>
    </>
  );
}
