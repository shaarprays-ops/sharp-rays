"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Monitor,
  Smartphone,
  ShoppingBag,
  CalendarCheck,
  MessageCircle,
  Search,
  Gauge,
  ShieldCheck,
  LayoutDashboard,
  MousePointerClick,
  Store,
    Target,
  Utensils,
  Stethoscope,
  Building2,
  BriefcaseBusiness,
  Sparkles,
  Layers3,
  Globe,
  PenTool,
  Laptop,
} from "lucide-react";

const CONTACT_URL = "/contact?source=mira-road-website-development";

const services = [
  {
    icon: LayoutDashboard,
    title: "Business Website Design",
    description:
      "Professional business websites that explain your services, communicate your value and make it easier for customers to contact you.",
  },
  {
    icon: Code2,
    title: "Custom Website Development",
    description:
      "Responsive, purpose-built websites developed around your business requirements, content and customer journey.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Websites",
    description:
      "Online stores with organised product pages, clear shopping journeys and convenient ways for customers to enquire or order.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Websites",
    description:
      "Appointment-focused websites for clinics, consultants and service businesses that need a clearer booking journey.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description:
      "Make it easier for visitors to ask questions, enquire about products and place orders through WhatsApp.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Development",
    description:
      "Build with logical page structures, metadata, responsive layouts and technical foundations that support search visibility.",
  },
];

const websiteNeeds = [
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description:
      "Show menus, popular dishes, location details and opening information, with a convenient WhatsApp ordering journey.",
    points: [
      "Digital menu presentation",
      "WhatsApp order enquiries",
      "Location and contact details",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description:
      "Help patients understand available treatments, meet practitioners and find a straightforward way to request appointments.",
    points: [
      "Treatment and service pages",
      "Doctor and clinic information",
      "Appointment enquiry options",
    ],
  },
  {
    icon: Store,
    title: "Retail & Local Businesses",
    description:
      "Present products, services and business information in a professional website that customers can access on any device.",
    points: [
      "Product and service displays",
      "Enquiry and WhatsApp links",
      "Store information and directions",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Build credibility with clear service descriptions, business information and enquiry-focused website pages.",
    points: [
      "Dedicated service pages",
      "About and business information",
      "Contact and enquiry forms",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We discuss your services, customers, goals, website requirements and the actions you want visitors to take.",
  },
  {
    number: "02",
    title: "Plan the website",
    description:
      "We organise the page structure, navigation, content sections and customer journey before development.",
  },
  {
    number: "03",
    title: "Design the experience",
    description:
      "We shape the visual direction and responsive layouts around your brand and the needs of your audience.",
  },
  {
    number: "04",
    title: "Develop & integrate",
    description:
      "We build the website and implement agreed features such as enquiry forms, WhatsApp links and booking journeys.",
  },
  {
    number: "05",
    title: "Review & launch",
    description:
      "We review the website across devices, check important functionality and prepare it for launch.",
  },
];

const faqs = [
  {
    question: "Do you provide website development in Mira Road?",
    answer:
      "Yes. Sharp Rays provides website design and development for businesses targeting customers in Mira Road. The project scope can include business websites, ecommerce websites, service pages, WhatsApp integration and booking-focused websites.",
  },
  {
    question: "How much does website development cost in Mira Road?",
    answer:
      "Website cost depends on the number of pages, design requirements, functionality, integrations and content requirements. You can explore Sharp Rays pricing packages or request a quote for your project.",
  },
  {
    question: "Can you build a website for a Mira Road restaurant?",
    answer:
      "Yes. A restaurant website can include a menu, food and venue images, location information, opening details and WhatsApp ordering links so customers can enquire or place orders conveniently.",
  },
  {
    question: "Can you build an appointment website for clinics?",
    answer:
      "Yes. A clinic website can present doctors, treatments, timings, location details and appointment enquiry options. The exact booking functionality depends on the agreed project scope.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Websites are designed with responsive layouts so visitors can access and navigate the pages on mobile phones, tablets and desktop screens.",
  },
  {
    question: "Can you add WhatsApp to my website?",
    answer:
      "Yes. WhatsApp links and enquiry journeys can be added to relevant pages so visitors can contact your business or enquire about products and services.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "We can build SEO foundations into the website, including logical page structure, headings, metadata, responsive layouts and internal linking. Ongoing SEO work can be planned separately.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review your current website and discuss improvements to its design, content structure, mobile experience, functionality and overall customer journey.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the size of the website, content readiness, design complexity, functionality and feedback process. A project timeline can be discussed after understanding your requirements.",
  },
  {
    question: "Will I be able to update my website later?",
    answer:
      "Future updates depend on the technology and content management setup selected for the project. We can discuss the appropriate setup based on how frequently you need to make changes.",
  },
  {
    question: "Do you develop ecommerce websites?",
    answer:
      "Yes. Ecommerce projects can include product pages, category organisation, shopping functionality and suitable enquiry or checkout options depending on the requirements.",
  },
  {
    question: "How can I get a website development quote?",
    answer:
      "Contact Sharp Rays with your business details, website requirements and any reference websites you like. We can discuss the scope and provide a suitable project quotation.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    description: "For businesses that need a professional website foundation.",
  },
  {
    name: "Growth",
    price: "₹24,999",
    description: "For growing businesses that need a more developed website.",
    featured: true,
  },
  {
    name: "Advanced",
    price: "Custom",
    description: "For projects with broader functionality and specific requirements.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-9 bg-[#C6A77A]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B765A]">
        {children}
      </span>
    </div>
  );
}

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

export default function MiraRoadWebsiteDevelopmentPageClient() {
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
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[440px] w-[440px] rounded-full bg-[#C6A77A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#0B2A52]/[0.04] blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>WEBSITE DESIGN · MIRA ROAD</Eyebrow>

            <h1 className="max-w-[700px] font-[var(--font-new-york)] text-[clamp(2.7rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.045em] text-[#122847]">
              Website Design &
              <span className="block italic text-[#A78354]">
                Development in Mira Road
              </span>
            </h1>

            <p className="mt-7 max-w-[570px] text-[15px] leading-8 text-[#718096] sm:text-base">
              Give your business a website that makes a thoughtful first
              impression and makes the next step easy. Sharp Rays creates
              responsive websites for Mira Road businesses, from WhatsApp-order
              websites for restaurants to appointment-focused websites for
              clinics.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
             <Link
  href={CONTACT_URL}
  title="Request a Website Development Quote from Sharp Rays in Mira Road"
  aria-label="Request a website development quote in Mira Road"
  className="group inline-flex items-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#0B2A52]"
>
                Get a Free Quote
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/services/website-development"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D7] px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#C6A77A]"
              >
                Explore Website Services <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#718096]">
              {["Responsive Design", "Business Websites", "WhatsApp Integration"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-[#A78354]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[510px]">
              <div className="overflow-hidden rounded-[2rem] border border-[#E8E1D7] bg-[#F5F1E9] p-5 shadow-[0_24px_70px_rgba(18,40,71,0.08)] sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B765A]">
                      Your digital storefront
                    </p>
                    <p className="mt-1 text-lg font-medium text-[#122847]">
                      A website built around your business
                    </p>
                  </div>
                  <Monitor size={21} className="text-[#A78354]" />
                </div>

                <div className="mt-7 overflow-hidden rounded-2xl border border-[#E8E1D7] bg-white shadow-sm">
                  <div className="flex items-center gap-2 border-b border-[#E8E1D7] px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-[#D8B9A4]" />
                    <span className="h-2 w-2 rounded-full bg-[#D9C99B]" />
                    <span className="h-2 w-2 rounded-full bg-[#A9C6AE]" />
                    <div className="ml-3 h-5 flex-1 rounded-full bg-[#F3F1ED]" />
                  </div>

                  <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_.9fr] sm:p-6">
                    <div className="flex flex-col justify-center">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
                        Made for your customers
                      </span>
                      <h3 className="mt-3 font-[var(--font-new-york)] text-2xl leading-tight text-[#122847]">
                        Your business,
                        <span className="block italic text-[#A78354]">
                          beautifully online.
                        </span>
                      </h3>
                      <p className="mt-3 text-[10px] leading-5 text-[#8792A1]">
                        Clear information. Thoughtful design. Easy enquiries.
                      </p>
                      <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#122847] px-4 py-2 text-[10px] text-white">
                        Explore services <ArrowUpRight size={12} />
                      </div>
                    </div>

                    <div className="flex min-h-[170px] flex-col justify-between rounded-xl bg-[#EDE9DF] p-4">
                      <div className="flex h-20 items-center justify-center rounded-lg bg-gradient-to-br from-[#D8C7AC] to-[#F5F1E9]">
                        <Laptop size={34} className="text-[#122847]/70" />
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-4/5 rounded-full bg-[#122847]/15" />
                        <div className="h-2 w-full rounded-full bg-[#122847]/10" />
                        <div className="h-2 w-2/3 rounded-full bg-[#122847]/10" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 border-t border-[#E8E1D7]">
                    {[
                      ["01", "Discover"],
                      ["02", "Explore"],
                      ["03", "Enquire"],
                    ].map(([number, label]) => (
                      <div key={number} className="px-3 py-3 text-center">
                        <p className="text-[9px] text-[#A78354]">{number}</p>
                        <p className="mt-1 text-[10px] font-medium text-[#34445A]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white bg-white/70 p-4">
                    <Smartphone size={18} className="text-[#A78354]" />
                    <p className="mt-3 text-xs font-medium text-[#122847]">
                      Mobile-friendly
                    </p>
                    <p className="mt-1 text-[10px] text-[#8792A1]">
                      Across screen sizes
                    </p>
                  </div>
                  <div className="rounded-xl border border-white bg-white/70 p-4">
                    <MousePointerClick size={18} className="text-[#A78354]" />
                    <p className="mt-3 text-xs font-medium text-[#122847]">
                      Easy enquiries
                    </p>
                    <p className="mt-1 text-[10px] text-[#8792A1]">
                      Clear next steps
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#E8E1D7] bg-white px-5 py-4 shadow-lg sm:block">
                <p className="text-[10px] uppercase tracking-widest text-[#9AA3AF]">
                  The goal
                </p>
                <p className="mt-1 text-sm font-semibold text-[#122847]">
                  Turn visits into enquiries.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="rounded-3xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 sm:p-10">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A88659]">
                <Sparkles size={15} /> Website development in Mira Road
              </div>

              <p className="text-lg leading-8 text-[#344054] sm:text-xl sm:leading-9">
                Sharp Rays designs and develops websites for businesses in
                Mira Road. Our website projects can include business websites,
                ecommerce stores, restaurant websites with WhatsApp ordering,
                clinic websites with appointment enquiries and responsive
                service websites built around your business requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — BUSINESS NEEDS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 / Websites for real businesses"
            title={
              <>
                Different businesses.
                <span className="block font-serif italic text-[#A88659]">
                  Different website needs.
                </span>
              </>
            }
            description="A useful website should reflect how your customers discover, evaluate and contact your business. Start with the experience your visitors actually need."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {websiteNeeds.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                        <Icon size={21} />
                      </div>
                      <h3 className="text-xl font-medium text-[#122847]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[#667085]">
                      {item.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-center gap-3">
                          <Check size={14} className="shrink-0 text-[#A78354]" />
                          <span className="text-sm text-[#475467]">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — DEVELOPMENT SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 / What we build"
            title={
              <>
                More than a visual design.
                <span className="block font-serif italic text-[#A88659]">
                  A complete website experience.
                </span>
              </>
            }
            description="From the first page layout to the final enquiry journey, each part of your website should have a clear purpose."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <div className="group h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A] transition group-hover:bg-[#C6A77A] group-hover:text-[#122847]">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-xl font-medium text-[#122847]">
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
              href="/services/website-development"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
            >
              Explore our website development service
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — RESTAURANT WEBSITES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>03 / For restaurants & cafes</Eyebrow>

            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
              Let customers explore your menu
              <span className="block font-serif italic text-[#A88659]">
                and order with ease.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              A restaurant website can do more than display your address. Give
              visitors a place to explore your menu, view food images, discover
              your location and contact your team to place an order.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Digital menu and food categories",
                "Food photography and featured dishes",
                "WhatsApp order and enquiry links",
                "Restaurant timings and location",
                "Mobile-friendly browsing experience",
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
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-white p-5 shadow-[0_24px_60px_rgba(18,40,71,0.06)] sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                    Restaurant website concept
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-[#122847]">
                    Your menu, online.
                  </h3>
                </div>
                <Utensils size={22} className="text-[#A88659]" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex min-h-32 flex-col justify-end rounded-2xl bg-gradient-to-br from-[#E9D9C5] to-[#F5EEE5] p-4">
                  <span className="text-xs font-medium text-[#122847]">
                    Explore the menu
                  </span>
                </div>
                <div className="flex min-h-32 flex-col justify-end rounded-2xl bg-gradient-to-br from-[#D5DDD1] to-[#EDF0E8] p-4">
                  <span className="text-xs font-medium text-[#122847]">
                    Discover favourites
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-[#FCFAF7] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7F1E8] text-[#39764B]">
                    <MessageCircle size={19} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#122847]">
                      WhatsApp ordering
                    </p>
                    <p className="mt-1 text-xs text-[#8792A1]">
                      A convenient way to enquire and order
                    </p>
                  </div>
                  <ArrowUpRight size={17} className="text-[#A88659]" />
                </div>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-[#8792A1]">
                Illustrative website layout. Final features depend on the
                agreed restaurant project scope.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — CLINIC WEBSITES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-[#F5F1E9] p-6 sm:p-8">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F5] text-[#122847]">
                    <Stethoscope size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#122847]">
                      Clinic information
                    </p>
                    <p className="text-xs text-[#8792A1]">
                      Services, practitioners and timings
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Treatments & specialities",
                    "Doctor profiles",
                    "Clinic location",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#E8E2D8] px-4 py-3 text-xs text-[#475467]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-[#122847] p-4 text-white">
                  <div>
                    <p className="text-xs font-medium">Request an appointment</p>
                    <p className="mt-1 text-[10px] text-white/55">
                      Contact the clinic
                    </p>
                  </div>
                  <CalendarCheck size={21} className="text-[#C6A77A]" />
                </div>
              </div>
              <p className="mt-4 text-[10px] leading-5 text-[#8792A1]">
                Illustrative clinic website layout, not a live booking system.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Eyebrow>04 / For clinics & healthcare</Eyebrow>

            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
              Make it easier for patients
              <span className="block font-serif italic text-[#A88659]">
                to take the next step.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              A well-organised clinic website helps visitors understand
              available treatments, learn about practitioners and find the
              information they need before contacting your clinic.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Treatment and speciality pages",
                "Doctor and practitioner profiles",
                "Clinic timings and contact information",
                "Appointment enquiry forms",
                "WhatsApp contact options",
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
        </div>
      </section>

      {/* 07 — RESPONSIVE EXPERIENCE */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="05 / Responsive by design"
            title={
              <>
                Your website should feel right
                <span className="block font-serif italic text-[#A88659]">
                  on every screen.
                </span>
              </>
            }
            description="Customers may discover your business on a phone, tablet or desktop. Your website experience should remain clear and easy to navigate across devices."
            centered
          />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-[#E8E2D8] bg-white p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <Smartphone size={28} className="text-[#A88659]" />
                  <div>
                    <h3 className="font-medium text-[#122847]">
                      Mobile-first experience
                    </h3>
                    <p className="mt-1 text-xs text-[#8792A1]">
                      Designed for smaller screens
                    </p>
                  </div>
                </div>

                <div className="mx-auto mt-8 max-w-[250px] rounded-[2rem] border-[5px] border-[#122847] bg-[#FCFAF7] p-3 shadow-lg">
                  <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#122847]/20" />
                  <div className="rounded-xl bg-[#EDE9DF] p-4">
                    <div className="h-2 w-1/2 rounded-full bg-[#122847]/20" />
                    <div className="mt-4 h-20 rounded-lg bg-gradient-to-br from-[#D8C7AC] to-[#F5F1E9]" />
                    <div className="mt-4 h-2 w-4/5 rounded-full bg-[#122847]/15" />
                    <div className="mt-2 h-2 w-full rounded-full bg-[#122847]/10" />
                    <div className="mt-4 h-8 rounded-full bg-[#122847]" />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5">
                {[
                  {
                    icon: Smartphone,
                    title: "Mobile usability",
                    text: "Readable content, comfortable spacing and touch-friendly navigation.",
                  },
                  {
                    icon: Monitor,
                    title: "Consistent layouts",
                    text: "A considered visual experience across desktop and tablet screens.",
                  },
                  {
                    icon: Gauge,
                    title: "Performance foundations",
                    text: "Attention to page weight, loading behaviour and efficient implementation.",
                  },
                  {
                    icon: MousePointerClick,
                    title: "Clear actions",
                    text: "Visible contact, enquiry and navigation options for visitors.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-[#E8E2D8] bg-white p-5"
                    >
                      <Icon className="mt-1 shrink-0 text-[#A88659]" size={21} />
                      <div>
                        <h3 className="text-sm font-semibold text-[#122847]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#667085]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 08 — WEBSITE FOUNDATIONS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="06 / Website foundations"
            title={
              <>
                Thoughtful design.
                <span className="block font-serif italic text-[#A88659]">
                  Solid development.
                </span>
              </>
            }
            description="A website needs to look considered and work reliably. We pay attention to the structure and functionality behind the visual experience."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Clean development",
                text: "A structured implementation aligned with the project's technical requirements.",
              },
              {
                icon: Search,
                title: "SEO foundations",
                text: "Logical headings, page metadata and internal page organisation.",
              },
              {
                icon: ShieldCheck,
                title: "Security considerations",
                text: "Appropriate security practices and reliable configuration for the selected setup.",
              },
              {
                icon: Gauge,
                title: "Performance",
                text: "Attention to image optimisation, page weight and loading experience.",
              },
              {
                icon: Layers3,
                title: "Scalable structure",
                text: "Organised pages and components that can support future website improvements.",
              },
              {
                icon: Globe,
                title: "Domain & launch",
                text: "Support with the agreed deployment, domain and launch requirements.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7">
                    <Icon size={22} className="text-[#A88659]" />
                    <h3 className="mt-5 text-lg font-medium text-[#122847]">
                      {item.title}
                    </h3>
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

      {/* 09 — OUR PROCESS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="07 / How we work"
            title={
              <>
                From first conversation
                <span className="block font-serif italic text-[#A88659]">
                  to website launch.
                </span>
              </>
            }
            description="A clear development process helps keep the project organised, from understanding your requirements to reviewing the finished website."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-6">
                  <p className="font-serif text-4xl italic text-[#B79A72]">
                    {step.number}
                  </p>
                  <h3 className="mt-6 text-lg font-medium text-[#122847]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — WHY SHARP RAYS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="08 / Why Sharp Rays"
            title={
              <>
                Websites with a purpose.
                <span className="block font-serif italic text-[#A88659]">
                  Built around your business.
                </span>
              </>
            }
            description="Your website should connect design, information and functionality. Our approach starts with what your business needs the website to achieve."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: PenTool,
                title: "Design with intention",
                text: "Visual decisions should support your brand, communicate clearly and make the website comfortable to use.",
              },
              {
                icon: Target,
                title: "Business-focused structure",
                text: "Pages and calls to action are planned around the information your customers need.",
              },
              {
                icon: Layers3,
                title: "Connected digital thinking",
                text: "Website development can be planned alongside SEO, branding and marketing requirements.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-[#122847]">
                      {item.title}
                    </h3>
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

      {/* 11 — PROJECT DISCUSSION */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="09 / Your website project"
              title={
                <>
                  Start with the right
                  <span className="block font-serif italic text-[#A88659]">
                    questions.
                  </span>
                </>
              }
              description="Before development begins, it helps to understand the purpose of your website, the features you need and the information your customers are looking for."
            />

            <Link
  href={CONTACT_URL}
  title="Discuss Your Website Development Project with Sharp Rays"
  aria-label="Discuss your website development requirements with Sharp Rays"
  className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A88659]"
>
              Discuss Your Project <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-[#E8E2D8] bg-white p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                Project planning
              </p>

              <div className="mt-7 space-y-5">
                {[
                  [
                    "What should the website do?",
                    "Present services, generate enquiries, sell products or support bookings.",
                  ],
                  [
                    "Who will use it?",
                    "Understand your customers and the information they need.",
                  ],
                  [
                    "Which features are necessary?",
                    "Plan forms, WhatsApp links, menus, product pages or booking options.",
                  ],
                  [
                    "What happens after launch?",
                    "Consider updates, maintenance and future improvements.",
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
                      <h3 className="font-medium text-[#122847]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#667085]">
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

      {/* 12 — PRICING */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="10 / Website investment"
            title={
              <>
                Find a suitable starting point
                <span className="block font-serif italic text-[#A88659]">
                  for your website.
                </span>
              </>
            }
            description="The right package depends on your website size, design requirements and functionality. Explore the available pricing details before deciding."
            centered
          />

          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.06}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                    plan.featured
                      ? "border-[#122847] bg-[#122847] text-white shadow-2xl shadow-[#122847]/15"
                      : "border-[#E8E2D8] bg-[#FCFAF7] text-[#122847]"
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
                      "Website requirements discussion",
                      "Scope based on project needs",
                      "Design and development planning",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-[#B79A72]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
  href="/pricing"
  title={`View ${plan.name} Website Development Package on Sharp Rays Pricing Page`}
  aria-label={`View ${plan.name} website development package pricing`}
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
            Final pricing depends on the confirmed project scope. Visit our{" "}
           <Link
  href="/pricing"
  title="View Sharp Rays Website Development Pricing"
  aria-label="View website development packages and pricing"
  className="font-semibold underline underline-offset-4"
>
              pricing page
            </Link>{" "}
            for package information.
          </p>
        </div>
      </section>

      {/* 13 — FAQs */}
      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="mira-road-website-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              Questions Before You Start
            </p>

            <h2
              id="mira-road-website-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
              Answers about website design, development, WhatsApp ordering and
              booking websites for businesses in Mira Road.
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
      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Your website starts with an idea
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Let&apos;s build something
            <span className="block font-serif italic text-[#C6A77A]">
              worth visiting.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Tell us about your business, your website requirements and the
            experience you want to create. Let&apos;s plan your next digital
            step together.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
  href={CONTACT_URL}
  title="Get a Website Development Quote in Mira Road"
  aria-label="Get a free website development quote from Sharp Rays"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
              Get a Free Website Quote <ArrowUpRight size={17} />
            </Link>

          <Link
  href="/locations/mira-road"
  title="Explore Digital Marketing Services in Mira Road"
  aria-label="Explore all digital marketing services available in Mira Road"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
>
              Explore Mira Road Services <ArrowRight size={16} />
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