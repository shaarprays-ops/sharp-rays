
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Monitor,
  Smartphone,
  Search,
  Gauge,
  ShieldCheck,
  LayoutTemplate,
  ShoppingCart,
  Building2,
  BriefcaseBusiness,
  Palette,
  Globe,
  MousePointerClick,
  FileSearch,
  Layers3,
  MapPin,
  Sparkles,
  Target,
  Rocket,
  Settings,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Business Website Development",
    description:
      "Professional business websites that communicate your services, build credibility and make it easier for customers to contact you.",
  },
  {
    icon: Palette,
    title: "Website Design & UI/UX",
    description:
      "Clean, modern website experiences with thoughtful layouts, intuitive navigation and clear calls to action.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Website Development",
    description:
      "Online stores designed to present products clearly and provide customers with a smooth shopping experience.",
  },
  {
    icon: Smartphone,
    title: "Responsive Website Development",
    description:
      "Mobile-friendly website layouts that adapt to smartphones, tablets, laptops and desktop screens.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Website Development",
    description:
      "Search-ready website foundations with logical page structures, clean URLs and essential on-page SEO elements.",
  },
  {
    icon: Settings,
    title: "Website Maintenance & Support",
    description:
      "Ongoing website updates, maintenance and improvements to help keep your digital presence reliable.",
  },
];

const websiteChallenges = [
  {
    title: "An outdated website",
    description:
      "An old-fashioned design can make it harder for visitors to understand your business and trust what you offer.",
  },
  {
    title: "Not mobile-friendly",
    description:
      "A website that is difficult to use on mobile devices can create friction for people browsing on their phones.",
  },
  {
    title: "Visitors are not enquiring",
    description:
      "Unclear service information, weak calls to action and confusing navigation can make it difficult to take the next step.",
  },
  {
    title: "Slow website performance",
    description:
      "Heavy pages and unnecessary scripts can affect loading experience and make visitors leave before exploring.",
  },
  {
    title: "Poor search foundations",
    description:
      "Missing page structure, unclear headings and weak technical foundations can limit your website's search readiness.",
  },
  {
    title: "No room to grow",
    description:
      "A poorly planned website can become difficult to update when your services, products or business requirements change.",
  },
];

const localAreas = [
  "Naigaon Station",
  "Naigaon West",
  "Juchandra",
  "Chandrapada",
];

const industries = [
  "Real Estate",
  "Manufacturing",
  "Education",
  "Healthcare",
  "Beauty & Wellness",
  "Ecommerce",
  "Professional Services",
  "Restaurants",
  "Startups",
  "Travel & Hospitality",
];

const process = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We discuss your business, target audience, website requirements, services and the purpose of your new website.",
  },
  {
    number: "02",
    title: "Plan the website",
    description:
      "We organise the pages, content structure, navigation and important actions visitors should be able to take.",
  },
  {
    number: "03",
    title: "Design the experience",
    description:
      "We develop the visual direction and page layouts around your brand, audience and website objectives.",
  },
  {
    number: "04",
    title: "Develop & optimise",
    description:
      "We build responsive pages and work on the agreed functionality, website structure and performance foundations.",
  },
  {
    number: "05",
    title: "Test & launch",
    description:
      "We review the website across devices, check important links and functionality, and prepare it for launch.",
  },
];

const faqs = [
  {
    question: "What does website development include?",
    answer:
      "Website development can include website planning, UI/UX design, frontend development, responsive layouts, content integration, essential SEO foundations, testing and deployment. The exact scope depends on the website requirements and selected package.",
  },
  {
    question: "Do you provide website development in Naigaon?",
    answer:
      "Sharp Rays offers website design and development services for businesses targeting Naigaon and nearby areas. Website requirements can include business websites, service websites, ecommerce stores and other custom website experiences.",
  },
  {
    question: "How much does website development cost?",
    answer:
      "Sharp Rays offers three website development packages: Launch from ₹9,999/month, Growth from ₹14,999/month and Scale from ₹24,999/month. Each package includes a different website scope and set of features. Visit the pricing page for complete details.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Responsive website development ensures that layouts adapt to different screen sizes, including smartphones, tablets and desktop screens. Mobile usability should be checked throughout development.",
  },
  {
    question: "Can you build websites for real estate projects in Naigaon?",
    answer:
      "Yes. Website development can support real estate businesses and housing-project launches with project information, location details, property listings, enquiry forms and clear calls to action, depending on the agreed requirements.",
  },
  {
    question: "Can you build a website for businesses in Juchandra?",
    answer:
      "Yes. Website requirements for businesses in Juchandra can include company websites, service pages, product information, contact details and enquiry-focused website experiences.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Websites can be developed with SEO foundations such as logical page structure, descriptive URLs, headings, metadata, responsive layouts and appropriate technical setup. Ongoing SEO work may be needed to improve organic search visibility.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. An existing website can be reviewed and redesigned to improve its appearance, navigation, mobile experience, content structure and functionality. The scope depends on the current website and your requirements.",
  },
  {
    question: "Can you develop an ecommerce website?",
    answer:
      "Yes. Ecommerce website requirements can include product pages, categories, shopping cart functionality and checkout integration. Specific features and integrations should be confirmed before the project begins.",
  },
  {
    question: "How long does website development take?",
    answer:
      "The timeline depends on the number of pages, design requirements, functionality, content readiness and feedback process. A timeline can be confirmed after understanding the project scope.",
  },
  {
    question: "Will I be able to update my website later?",
    answer:
      "Website update options depend on the technology and content management setup used for your project. The suitable approach can be discussed during the planning stage.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Website maintenance and support can include agreed updates, technical checks, content changes and ongoing improvements. The available support scope should be confirmed separately.",
  },
  {
    question: "How can I start a website development project with Sharp Rays?",
    answer:
      "Contact Sharp Rays with a brief description of your business, website requirements and preferred budget. We can discuss the project scope and the most suitable next steps.",
  },
];

const websitePlans = [
  {
    name: "Launch",
    price: "₹9,999",
    period: "/month",
    description:
      "For startups and growing businesses that need a professional website.",
    button: "Start With Launch",
    href: "/contact?service=website&plan=launch",
    features: [
      "Up to 5 pages, brand-aligned design",
      "Mobile-responsive build",
      "Enquiry form, WhatsApp and call buttons",
      "Basic on-page SEO",
      "Google Analytics and Search Console setup",
      "Hosting and SSL support",
      "Technical maintenance",
      "Up to 2 content updates per month",
    ],
  },
  {
    name: "Growth",
    price: "₹14,999",
    period: "/month",
    description:
      "For growing businesses that need a more complete website experience.",
    button: "Choose Growth",
    href: "/contact?service=website&plan=growth",
    featured: true,
    features: [
      "Up to 10 pages, custom UI/UX design",
      "Everything included in Launch",
      "CMS so you can edit content yourself",
      "Blog setup and advanced lead forms",
      "Technical SEO foundations",
      "Conversion tracking",
      "Monthly website health review",
      "Up to 4 updates per month",
    ],
  },
  {
    name: "Scale",
    price: "₹24,999",
    period: "/month",
    description:
      "For businesses requiring advanced design, functionality and integrations.",
    button: "Choose Scale",
    href: "/contact?service=website&plan=scale",
    features: [
      "Up to 15 pages, advanced custom design with interactions",
      "Everything included in Growth",
      "Up to 2 standard integrations",
      "Starter ecommerce: catalogue, cart, checkout and payment gateway",
      "Advanced technical SEO",
      "Speed optimisation",
      "Monthly performance review",
      "Up to 6 updates per month",
    ],
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

export default function NaigaonWebDevClient() {
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
              Website Design & Development · Naigaon
            </div>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Website Design & Development in{" "}
              <span className="font-serif italic text-[#A88659]">
                Naigaon.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Build a professional digital presence with modern website design,
              responsive development and thoughtful user experiences created
              around your business goals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?source=naigaon-website-development"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A88659]"
              >
                Discuss Your Website <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/services/website-development"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#122847]/15 bg-white px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#A88659] hover:bg-[#F2F0EA]"
              >
                Explore Website Services <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#667085]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Modern Design
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Responsive Layouts
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                SEO Foundations
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-white p-5 shadow-xl shadow-[#122847]/[0.06] sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-wider text-[#98A2B3]">
                    YOUR DIGITAL PRESENCE
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#122847]">
                    A better website experience
                  </p>
                </div>

                <div className="rounded-full bg-[#F2F0EA] p-3 text-[#A88659]">
                  <Monitor size={21} />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#E8E2D8]">
                <div className="flex items-center gap-1.5 border-b border-[#E8E2D8] bg-[#FCFAF7] px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-[#D9B6A3]" />
                  <span className="h-2 w-2 rounded-full bg-[#D9C89D]" />
                  <span className="h-2 w-2 rounded-full bg-[#A8B9A4]" />
                  <div className="ml-3 h-2 w-24 rounded-full bg-[#E8E2D8]" />
                </div>

                <div className="bg-[#F7F5F0] p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-20 rounded-full bg-[#122847]" />
                    <div className="h-2 w-14 rounded-full bg-[#D8D2C8]" />
                  </div>

                  <div className="mt-8 max-w-[230px]">
                    <div className="h-4 w-full rounded-full bg-[#122847]" />
                    <div className="mt-3 h-4 w-4/5 rounded-full bg-[#122847]" />
                    <div className="mt-4 h-2 w-full rounded-full bg-[#D8D2C8]" />
                    <div className="mt-2 h-2 w-3/4 rounded-full bg-[#D8D2C8]" />
                    <div className="mt-5 h-9 w-28 rounded-full bg-[#B79A72]" />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-xl bg-[#E6E1D7]" />
                    <div className="h-16 rounded-xl bg-[#E6E1D7]" />
                    <div className="h-16 rounded-xl bg-[#E6E1D7]" />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#FCFAF7] p-4">
                  <Smartphone size={19} className="text-[#A88659]" />
                  <p className="mt-3 text-sm font-medium">Mobile ready</p>
                  <p className="mt-1 text-xs text-[#98A2B3]">
                    Responsive experience
                  </p>
                </div>

                <div className="rounded-xl bg-[#FCFAF7] p-4">
                  <Search size={19} className="text-[#A88659]" />
                  <p className="mt-3 text-sm font-medium">Search ready</p>
                  <p className="mt-1 text-xs text-[#98A2B3]">
                    SEO-friendly structure
                  </p>
                </div>
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
                <Sparkles size={15} />
                A quick answer
              </div>

              <p className="text-lg leading-8 text-[#344054] sm:text-xl sm:leading-9">
                Sharp Rays provides website design and development services
                for businesses targeting Naigaon. Services include business
                websites, responsive design, ecommerce development and
                SEO-friendly website structures. We create digital experiences
                for business requirements such as Juchandra units and new
                housing-project launches in Naigaon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — WEBSITE CHALLENGES | SOFT IVORY */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 / The website challenge"
            title={
              <>
                Your website should do more than{" "}
                <span className="font-serif italic text-[#A88659]">
                  look good.
                </span>
              </>
            }
            description="A business website is often where potential customers learn about your services, evaluate your brand and decide whether to contact you. The experience needs to make that journey clear."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {websiteChallenges.map((item, index) => (
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

      {/* 04 — WEBSITE SERVICES | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 / What we build"
            title={
              <>
                Website solutions for{" "}
                <span className="font-serif italic text-[#A88659]">
                  growing businesses.
                </span>
              </>
            }
            description="From a professional business website to an online store, each project starts with understanding what your business needs its website to achieve."
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
              href="/services/website-development"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
            >
              Explore our website development service
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — LOCAL WEBSITE NEEDS | SOFT IVORY */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="03 / Website development in Naigaon"
              title={
                <>
                  Websites for the way local businesses{" "}
                  <span className="font-serif italic text-[#A88659]">
                    grow.
                  </span>
                </>
              }
              description="Different businesses need different website experiences. A company website, a property launch page and an ecommerce store should not all follow the same structure."
            />

            <div className="space-y-4">
              {[
                "Business websites that explain services clearly",
                "Project websites for new housing launches",
                "Product and catalogue presentation",
                "Mobile-friendly layouts for local audiences",
                "Enquiry forms and clear contact options",
                "Search-friendly website page structures",
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
                    Local business context
                  </p>
                </div>

                <h3 className="max-w-md text-3xl font-medium leading-tight tracking-tight">
                  A website shaped around what you actually offer.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Consider the locations, customers and business requirements
                  that genuinely matter to your website.
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
                  Location references should reflect the actual audience and
                  service coverage of each project.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — DEVELOPMENT PROCESS | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="04 / Our process"
            title={
              <>
                From first idea to{" "}
                <span className="font-serif italic text-[#A88659]">
                  website launch.
                </span>
              </>
            }
            description="A clear development process helps keep the project organised, from initial planning to the final website checks."
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
                Website experiences for{" "}
                <span className="font-serif italic text-[#A88659]">
                  different industries.
                </span>
              </>
            }
            description="Your website should reflect your industry, audience and business model. The right structure depends on what visitors need to understand before contacting you."
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

      {/* 08 — WEBSITE PERFORMANCE | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="06 / Website foundations"
              title={
                <>
                  Good design needs{" "}
                  <span className="font-serif italic text-[#A88659]">
                    strong foundations.
                  </span>
                </>
              }
              description="A website should look good, work across devices and provide a clear experience. Development decisions affect how visitors interact with your business online."
            />

            <Link
              href="/services/website-development"
              className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A88659]"
            >
              Explore website development
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Smartphone,
                  title: "Responsive design",
                  text: "Layouts that adapt to different screen sizes.",
                },
                {
                  icon: Gauge,
                  title: "Performance",
                  text: "Considerate page weight and loading experience.",
                },
                {
                  icon: Search,
                  title: "SEO foundations",
                  text: "Logical page structure and essential metadata.",
                },
                {
                  icon: ShieldCheck,
                  title: "Website security",
                  text: "Appropriate security and deployment practices.",
                },
                {
                  icon: Layers3,
                  title: "Scalable structure",
                  text: "Organised pages that can support future growth.",
                },
                {
                  icon: MousePointerClick,
                  title: "User experience",
                  text: "Clear navigation and useful calls to action.",
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
                Design with purpose.{" "}
                <span className="font-serif italic text-[#A88659]">
                  Development with direction.
                </span>
              </>
            }
            description="A website should connect brand presentation, visitor experience and business objectives. We consider how each part of the website contributes to that bigger picture."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Palette,
                title: "Thoughtful design",
                text: "Visual layouts and page experiences shaped around your brand and audience.",
              },
              {
                icon: Code2,
                title: "Development foundations",
                text: "Structured development with attention to responsiveness, usability and technical quality.",
              },
              {
                icon: Target,
                title: "Business-focused approach",
                text: "Website decisions guided by your services, customers and the actions you want visitors to take.",
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

      {/* 10 — WEBSITE REQUIREMENTS | WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="08 / Website planning"
              title={
                <>
                  Every website starts with{" "}
                  <span className="font-serif italic text-[#A88659]">
                    the right questions.
                  </span>
                </>
              }
              description="Before choosing layouts or functionality, it is important to understand what your visitors need and what the website should help your business achieve."
            />

            <Link
              href="/contact?source=naigaon-website-planning"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
            >
              Discuss your requirements
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-[#E8E2D8] bg-[#FCFAF7] p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A88659]">
                Project considerations
              </p>

              <div className="mt-7 space-y-5">
                {[
                  [
                    "Business objectives",
                    "What should the website help your business achieve?",
                  ],
                  [
                    "Target audience",
                    "Who will visit the website and what are they looking for?",
                  ],
                  [
                    "Website content",
                    "What services, products and information should be presented?",
                  ],
                  [
                    "Required functionality",
                    "Do you need forms, ecommerce, listings or other integrations?",
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

      
{/* WEBSITE DEVELOPMENT PRICING */}
<section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
  <div className="mx-auto max-w-[1200px]">

    <SectionHeading
      eyebrow="09 / Website investment"
      title={
        <>
          Website packages for your{" "}
          <span className="font-serif italic text-[#A88659]">
            next stage.
          </span>
        </>
      }
      description="Explore our website development packages and choose what works for your business."
      centered
    />

    <div className="grid items-stretch gap-5 md:grid-cols-3">

      {/* LAUNCH */}
      <Reveal>
        <div className="flex h-full flex-col rounded-3xl border border-[#E8E2D8] bg-white p-8 text-[#122847]">
          <p className="font-serif text-base text-[#667085]">Launch</p>

          <h3 className="mt-5 font-serif text-[38px] tracking-tight">
            ₹9,999
            <span className="text-sm">/month</span>
          </h3>

          <div className="mt-8 border-t border-[#E8E2D8]" />

          <ul className="mt-7 flex-1 space-y-4 text-sm">
            {[
              "Up to 5 website pages",
              "Mobile-responsive design",
              "Enquiry form, WhatsApp & call buttons",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B79A72]" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/pricing"
            className="mt-9 flex items-center justify-center gap-2 rounded-full bg-[#122847] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1C3B63]"
          >
View Package Details <ArrowUpRight size={17} />
          </Link>
        </div>
      </Reveal>

      {/* GROWTH */}
      <Reveal delay={0.06}>
        <div className="relative flex h-full flex-col rounded-3xl border border-[#122847] bg-[#122847] p-8 text-white shadow-2xl shadow-[#122847]/15">

          <span className="absolute right-7 top-7 rounded-full bg-[#C6A77A] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#122847]">
            Popular
          </span>

          <p className="font-serif text-base text-[#C6A77A]">Growth</p>

          <h3 className="mt-5 font-serif text-[38px] tracking-tight">
            ₹14,999
            <span className="text-sm">/month</span>
          </h3>

          <div className="mt-8 border-t border-white/15" />

          <ul className="mt-7 flex-1 space-y-4 text-sm">
            {[
              "Up to 10 website pages",
              "Custom UI/UX design",
              "CMS, blog & advanced lead forms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A77A]" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/pricing"
            className="mt-9 flex items-center justify-center gap-2 rounded-full bg-[#C6A77A] px-5 py-4 text-sm font-semibold text-[#122847] transition hover:bg-[#D5B98F]"
          >
            View Package Details <ArrowUpRight size={17} />
          </Link>
        </div>
      </Reveal>

      {/* SCALE */}
      <Reveal delay={0.12}>
        <div className="flex h-full flex-col rounded-3xl border border-[#E8E2D8] bg-white p-8 text-[#122847]">
          <p className="font-serif text-base text-[#667085]">Scale</p>

          <h3 className="mt-5 font-serif text-[38px] tracking-tight">
            ₹24,999
            <span className="text-sm">/month</span>
          </h3>

          <div className="mt-8 border-t border-[#E8E2D8]" />

          <ul className="mt-7 flex-1 space-y-4 text-sm">
            {[
              "Up to 15 website pages",
              "Advanced custom design & interactions",
              "E-commerce & standard integrations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B79A72]" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/pricing"
            className="mt-9 flex items-center justify-center gap-2 rounded-full bg-[#122847] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1C3B63]"
          >
            View Package Details <ArrowUpRight size={16} />
          </Link>
        </div>
      </Reveal>

    </div>

    <p className="mt-8 text-center font-[var(--font-new-york)] text-xs leading-6 text-[#667085]">
      Final scope and package suitability will be confirmed based on your
      website requirements. See our{" "}
      <Link
        href="/pricing"
        className="font-semibold text-[#122847] underline underline-offset-4"
      >
        pricing page
      </Link>{" "}
      for more details.
    </p>

  </div>
</section>


      {/* 12 — FAQs | WHITE */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-website-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              Questions Before You Start
            </p>

            <h2
              id="naigaon-website-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
              Clear answers about website design, development, pricing and
              building your online presence in Naigaon.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-[#FCFAF7] font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
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
            Your next website starts here
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Give your business a digital presence that{" "}
            <span className="font-serif italic text-[#C6A77A]">
              stands out.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Tell us about your business, your website requirements and what
            you want your digital presence to achieve. Let's plan the next
            step together.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?source=naigaon-website-final"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
            >
              Discuss Your Project
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/locations/naigaon"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Naigaon Services
              <ArrowRight size={16} />
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
