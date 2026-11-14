
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  MonitorSmartphone,
  Palette,
  Search,
  ShoppingCart,
  Building2,
  Hotel,
  BriefcaseBusiness,
  GraduationCap,
  Stethoscope,
  Store,
  Layers3,
  Gauge,
  ShieldCheck,
  Smartphone,
  Globe2,
  LayoutDashboard,
  FileCode2,
  Workflow,
  MousePointerClick,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Target,
  Zap,
  Eye,
  Settings2,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Create a professional digital identity with thoughtful layouts, clear messaging, and visual consistency that reflects your business.",
    features: ["UI/UX design", "Brand consistency", "Responsive layouts"],
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Build modern, functional websites with structured code, reliable performance, and features aligned with your business requirements.",
    features: ["Custom development", "Modern frameworks", "Scalable structure"],
  },
  {
    icon: Search,
    title: "SEO-Friendly Websites",
    description:
      "Build your website with search visibility in mind through organised page structures, metadata, and technical SEO foundations.",
    features: ["SEO structure", "Metadata setup", "Indexing foundations"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description:
      "Create online stores that help customers explore products, understand offerings, and complete their shopping journey.",
    features: ["Product catalogues", "Shopping experience", "Store structure"],
  },
  {
    icon: Building2,
    title: "Real Estate Websites",
    description:
      "Present property projects with dedicated project pages, location information, enquiry forms, and organised property details.",
    features: ["Project pages", "Property showcases", "Lead enquiries"],
  },
  {
    icon: Hotel,
    title: "Booking Websites",
    description:
      "Give accommodation and hospitality businesses a useful online presence with service information and booking enquiry journeys.",
    features: ["Room showcases", "Booking enquiries", "Guest information"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Websites",
    description:
      "Explain your services, establish credibility, and make it easier for potential customers to contact your business.",
    features: ["Service pages", "About sections", "Contact journeys"],
  },
  {
    icon: Settings2,
    title: "Website Maintenance",
    description:
      "Keep your website organised with updates, content changes, technical checks, and improvements based on your requirements.",
    features: ["Content updates", "Technical checks", "Ongoing improvements"],
  },
];

const websiteTypes = [
  {
    icon: Building2,
    title: "Real Estate & Developer Websites",
    description:
      "Dedicated project websites for developers around Global City and Virar, with project details, amenities, location context, galleries, and enquiry options.",
    points: [
      "Individual project landing pages",
      "Property and amenity sections",
      "Location and connectivity information",
      "Enquiry and site-visit forms",
    ],
  },
  {
    icon: Hotel,
    title: "Hotel & Stay Booking Websites",
    description:
      "Online experiences for stays around Arnala and nearby tourism areas, helping visitors explore accommodation, facilities, and booking information.",
    points: [
      "Room and property showcases",
      "Amenities and gallery sections",
      "Booking enquiry forms",
      "Visitor information",
    ],
  },
  {
    icon: Store,
    title: "Local Business Websites",
    description:
      "Professional websites for shops, service providers, and growing businesses that need a clear way to present their offerings online.",
    points: [
      "Business and service information",
      "Product or service highlights",
      "WhatsApp and contact options",
      "Location and enquiry details",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Service Websites",
    description:
      "Structured websites for consultants, agencies, and professionals who want to explain their expertise and generate relevant enquiries.",
    points: [
      "Professional service pages",
      "Expertise and experience sections",
      "Lead generation forms",
      "Clear calls to action",
    ],
  },
];

const industries = [
  {
    icon: Building2,
    title: "Real Estate & Construction",
    text: "Project websites, property showcases, developer websites, and site-visit enquiry journeys.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    text: "Accommodation websites, stay information, room galleries, and booking enquiries.",
  },
  {
    icon: Store,
    title: "Retail & Local Shops",
    text: "Business websites, product showcases, store information, and customer enquiries.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    text: "Consultant, agency, and service-provider websites with clear service positioning.",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    text: "Course pages, institute websites, programme details, and admission enquiries.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    text: "Clinic and wellness websites with service details, contact information, and appointment enquiries.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We understand your business, audience, objectives, services, and the role your website needs to play.",
  },
  {
    number: "02",
    title: "Plan the Website Structure",
    description:
      "We organise pages, content sections, navigation, and enquiry journeys around your requirements.",
  },
  {
    number: "03",
    title: "Design the Experience",
    description:
      "We create the visual direction, page layouts, responsive elements, and user experience.",
  },
  {
    number: "04",
    title: "Develop & Optimise",
    description:
      "We build the website and work on responsiveness, technical foundations, page structure, and performance.",
  },
  {
    number: "05",
    title: "Test & Launch",
    description:
      "We review important pages, links, forms, mobile layouts, and functionality before launch.",
  },
];

const benefits = [
  {
    icon: Eye,
    title: "A Professional First Impression",
    text: "Present your business clearly with a consistent visual identity and organised website experience.",
  },
  {
    icon: Target,
    title: "Clear Customer Journeys",
    text: "Help visitors understand your offerings and find the right next step without unnecessary confusion.",
  },
  {
    icon: Search,
    title: "Search-Friendly Foundations",
    text: "Build organised page structures and technical foundations that support your wider SEO efforts.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Experience",
    text: "Make important information and website interactions accessible across mobile, tablet, and desktop screens.",
  },
];

const faqs = [
  {
    question: "Do you provide website development services in Virar?",
    answer:
      "Yes. Sharp Rays provides website design and development services for businesses targeting customers in Virar and nearby areas. Projects can include business websites, real estate project websites, booking websites, and e-commerce websites.",
  },
  {
    question: "Do you build websites for Global City real estate projects?",
    answer:
      "Yes. We can plan project-focused websites for real estate developers, including project information, amenities, galleries, location details, and enquiry or site-visit forms.",
  },
  {
    question: "Can you create booking websites for stays near Arnala?",
    answer:
      "We can develop websites for hotels, resorts, and accommodation businesses that showcase rooms, facilities, galleries, visitor information, and booking enquiries. More advanced booking functionality depends on the project requirements.",
  },
  {
    question: "Do you provide website design in Virar West?",
    answer:
      "Yes. We can work with businesses in Virar West and other parts of Virar that need a professional website, whether it is a new business website or a redesign of an existing one.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Responsive design is an important part of our website development approach. We plan layouts and interactions for mobile, tablet, and desktop screens.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "We consider SEO foundations during development, including page structure, metadata, heading hierarchy, internal linking opportunities, and technical considerations. Ongoing SEO work is a separate service.",
  },
  {
    question: "Can you redesign my existing business website?",
    answer:
      "Yes. An existing website can be reviewed for design, usability, content structure, responsiveness, and technical requirements before planning a redesign.",
  },
  {
    question: "How much does website development cost in Virar?",
    answer:
      "Website development cost depends on the number of pages, design requirements, functionality, integrations, content needs, and project complexity. We recommend discussing your requirements before preparing a suitable quotation.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the website size, content readiness, design requirements, feedback, and functionality. A clear scope helps establish a realistic project schedule.",
  },
  {
    question: "Can I update my website after it is launched?",
    answer:
      "The available editing options depend on the website setup. We can discuss suitable content management and update requirements during project planning.",
  },
];

const relatedLinks = [
  {
    label: "Website Development",
    sub: "WEBSITE DEVELOPMENT PILLAR",
    href: "/services/website-development",
  },
  {
    label: "Virar",
    sub: "PARENT LOCATION",
    href: "/locations/virar",
  },
  {
    label: "Nalasopara Website Development",
    sub: "NEARBY LOCATION",
    href: "/locations/nalasopara/website-development",
  },
  {
    label: "Vasai Road Website Development",
    sub: "NEARBY LOCATION",
    href: "/locations/vasai-road/website-development",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
      {children}
    </p>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function VirarWebsiteDevelopmentPageClient() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#0B2A52]">
      {/* 01 — HERO */}
      <section className="relative px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute -right-24 -top-20 h-[440px] w-[440px] rounded-full bg-[#C6A77A]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-[320px] w-[320px] rounded-full bg-[#DCE6EF]/60 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>Website Design & Development · Virar</Eyebrow>

            <h1 className="max-w-3xl font-[var(--font-new-york)] text-4xl leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-[64px]">
              Website Design
              <span className="block italic text-[#A78354]">
                & Development
              </span>
              <span className="block">in Virar.</span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#66758A] sm:text-base">
              Thoughtfully designed and developed websites for Virar
              businesses. From project websites for Global City developers to
              booking websites for Arnala stays, create a digital experience
              built around your business goals.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
             <Link
  href="/contact"
  title="Request a website development quote from Sharp Rays"
  className="group inline-flex items-center gap-3 rounded-full bg-[#0B2A52] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24466E]"
>
  Get a Free Website Quote
  <ArrowUpRight
    size={17}
    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
  />
</Link>

             <Link
  href="#website-services"
  title="Explore website design and development services"
  className="inline-flex items-center gap-2 rounded-full border border-[#DED8CE] bg-white/80 px-7 py-4 text-sm font-semibold text-[#0B2A52] transition hover:border-[#C6A77A]"
>
  Explore Services
  <ArrowRight size={16} />
</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#788393]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A78354]" />
                Responsive design
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A78354]" />
                SEO-friendly foundations
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A78354]" />
                Business-focused structure
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[550px]">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-[#C6A77A]/25 via-white to-[#DCE6EF]/80 blur-xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-5 shadow-[0_30px_90px_rgba(11,42,82,0.10)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#EAE6DE] pb-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
                    Website experience
                  </p>
                  <h2 className="mt-2 font-[var(--font-new-york)] text-2xl">
                    A better digital presence
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2A52] text-[#E5C99F]">
                  <MonitorSmartphone size={24} />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F5F2EC] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#C6A77A]" />
                    <div className="h-2 w-2 rounded-full bg-[#D7D1C7]" />
                    <div className="h-2 w-2 rounded-full bg-[#D7D1C7]" />
                  </div>
                  <span className="text-[9px] tracking-wider text-[#8A929C]">
                    YOUR BUSINESS WEBSITE
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-[1fr_0.8fr] gap-3">
                  <div className="flex min-h-[165px] flex-col justify-between rounded-xl bg-[#0B2A52] p-4 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-[#D9BD95]">
                      Your digital identity
                    </span>
                    <div>
                      <div className="h-2 w-4/5 rounded-full bg-white/90" />
                      <div className="mt-2 h-2 w-3/5 rounded-full bg-white/50" />
                      <div className="mt-5 inline-flex rounded-full bg-[#D9BD95] px-3 py-2 text-[8px] font-semibold text-[#0B2A52]">
                        Explore More
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex h-[76px] items-center justify-center rounded-xl bg-[#E8E1D6] text-[#A78354]">
                      <Building2 size={29} />
                    </div>
                    <div className="flex h-[76px] items-center justify-center rounded-xl bg-[#E8EDF2] text-[#24466E]">
                      <LayoutDashboard size={29} />
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="h-9 rounded-lg bg-white" />
                  <div className="h-9 rounded-lg bg-white" />
                  <div className="h-9 rounded-lg bg-white" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { icon: Smartphone, label: "Responsive" },
                  { icon: Search, label: "SEO-ready" },
                  { icon: Gauge, label: "Performance" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-[#EEEAE3] bg-[#FFFEFC] px-2 py-3 text-center"
                    >
                      <Icon size={17} className="mx-auto text-[#A78354]" />
                      <p className="mt-2 text-[9px] font-medium text-[#66758A]">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER */}
      <section className="border-y border-[#E4DED4] bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <Eyebrow>Website development in Virar</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl">
              What makes a business website useful?
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#66758A]">
            A useful business website does more than display information. It
            explains what your business offers, helps visitors understand
            your services, builds confidence, and provides a clear way to
            enquire. Sharp Rays approaches website design and development in
            Virar with attention to user experience, responsive layouts,
            content structure, functionality, and search-friendly technical
            foundations.
          </p>
        </div>
      </section>

      {/* 03 — BUSINESS CHALLENGES */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <Eyebrow>Why your website matters</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] sm:text-5xl">
              Your website should do more than
              <span className="block italic text-[#A78354]">
                simply exist online.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#66758A]">
              An unclear or outdated website can make it difficult for
              visitors to understand your business. A thoughtful digital
              experience helps organise information and makes the next step
              easier.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Unclear Business Information",
                text: "Visitors struggle to understand your services, products, or what makes your business relevant.",
              },
              {
                icon: Smartphone,
                title: "Poor Mobile Experience",
                text: "Layouts, navigation, and content become difficult to use on smaller screens.",
              },
              {
                icon: MousePointerClick,
                title: "Missing Enquiry Journey",
                text: "Visitors cannot easily find contact information or understand how to take the next step.",
              },
              {
                icon: Search,
                title: "Weak Page Structure",
                text: "Unorganised headings, content, and metadata can make pages harder to understand and maintain.",
              },
              {
                icon: Gauge,
                title: "Performance Problems",
                text: "Unoptimised assets and unnecessary scripts can affect how quickly pages load.",
              },
              {
                icon: Layers3,
                title: "Limited Room to Grow",
                text: "A website without a clear structure can become difficult to expand as services and offerings change.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const backgrounds = [
                "from-[#F5EDE1] to-white",
                "from-[#EAF0F6] to-white",
                "from-[#EEF2EC] to-white",
              ];

              return (
                <Reveal key={item.title} delay={(index % 3) * 0.06}>
                  <article
                    className={`h-full rounded-[24px] border border-[#EAE5DC] bg-gradient-to-br ${backgrounds[index % 3]} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,42,82,0.07)]`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#A78354] shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — SERVICES */}
      <section
        id="website-services"
        className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-[#DED8CE] pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>What we do</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] sm:text-5xl">
                  Website solutions
                  <span className="block italic text-[#A78354]">
                    for growing businesses.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
                From business websites to specialised project and booking
                websites, we plan digital experiences around what your
                business needs to communicate and achieve.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const gradients = [
                "from-[#F8EDE0] to-white",
                "from-[#E8EEF6] to-white",
                "from-[#EAF1EB] to-white",
                "from-[#F0EAF4] to-white",
              ];

              return (
                <Reveal key={service.title} delay={(index % 4) * 0.05}>
                  <article
                    className={`group h-full rounded-[24px] border border-white bg-gradient-to-br ${gradients[index % 4]} p-6 shadow-[0_12px_35px_rgba(11,42,82,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,42,82,0.09)]`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A52] text-[#D9BD95] transition duration-300 group-hover:rotate-[-6deg] group-hover:bg-[#C6A77A] group-hover:text-[#0B2A52]">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[120px] text-[12px] leading-7 text-[#66758A]">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-[#DED8CE] pt-4">
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A78354]">
                        Included focus
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-[10px] text-[#66758A]"
                          >
                            <Check size={13} className="text-[#A78354]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — LOCAL BUSINESS CONTEXT */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>Website development for Virar businesses</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.12] sm:text-5xl">
              Different businesses need
              <span className="block italic text-[#A78354]">
                different website experiences.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#66758A]">
              A property developer needs to present projects and generate
              site-visit enquiries. A hospitality business needs to showcase
              stays and help visitors understand booking options. A local
              business needs clear services and contact information. Website
              structure should reflect these real differences.
            </p>

           <Link
  href="/locations/virar"
  title="Explore digital marketing services for businesses in Virar"
  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#A78354] hover:gap-3"
>
  Explore Virar business services
  <ArrowRight size={16} />
</Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Global City",
                tag: "REAL ESTATE PROJECTS",
                text: "Project-focused websites with property details, amenities, galleries, location information, and site-visit enquiries.",
                icon: Building2,
              },
              {
                title: "Arnala",
                tag: "STAYS & HOSPITALITY",
                text: "Accommodation websites with room showcases, facilities, visitor information, and booking enquiry options.",
                icon: Hotel,
              },
              {
                title: "Virar West",
                tag: "LOCAL BUSINESSES",
                text: "Business websites that explain services, build a professional presence, and make customer enquiries easier.",
                icon: Store,
              },
              {
                title: "Virar East",
                tag: "GROWING BUSINESSES",
                text: "Structured websites for professionals and businesses expanding their digital presence.",
                icon: BriefcaseBusiness,
              },
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={(index % 2) * 0.08}>
                  <article
                    className={`h-full rounded-[24px] border p-6 ${
                      index % 2 === 0
                        ? "border-[#E9E1D5] bg-[#F8F4ED]"
                        : "border-[#E1E7EE] bg-[#F3F6F9]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-[#A78354]">
                        {area.tag}
                      </span>
                      <Icon size={21} className="text-[#A78354]" />
                    </div>
                    <h3 className="mt-5 font-[var(--font-new-york)] text-2xl">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {area.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — SPECIALISED WEBSITE TYPES */}
      <section className="bg-[#0B2A52] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>Website types</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                  Built around the
                  <span className="block italic text-[#D9BD95]">
                    purpose of your website.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-white/65 lg:justify-self-end">
                Your website structure should match the way customers explore
                your business. We plan the experience according to your
                offerings, audience, and required functionality.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {websiteTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Reveal key={type.title} delay={index * 0.06}>
                  <article className="h-full rounded-[25px] border border-white/15 bg-white/[0.06] p-7 transition hover:border-[#D9BD95]/60 hover:bg-white/[0.09] sm:p-9">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9BD95] text-[#0B2A52]">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                      {type.title}
                    </h3>

                    <p className="mt-4 text-[12px] leading-7 text-white/65">
                      {type.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {type.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-2 text-[11px] leading-6 text-white/80"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-1 shrink-0 text-[#D9BD95]"
                          />
                          {point}
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 — DESIGN APPROACH */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <Eyebrow>Our website approach</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                  Design with purpose.
                  <span className="block italic text-[#A78354]">
                    Develop with clarity.
                  </span>
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-8 text-[#66758A] lg:justify-self-end">
                We consider the complete visitor experience, from the first
                impression to the moment someone contacts your business.
                Design, content, navigation, and technical implementation
                should work together.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const backgrounds = [
                "bg-[#F7F0E7]",
                "bg-[#EDF1F6]",
                "bg-[#EDF2ED]",
                "bg-[#F1EDF4]",
              ];

              return (
                <Reveal key={benefit.title} delay={index * 0.06}>
                  <article className="h-full rounded-[23px] border border-[#EAE5DC] bg-white p-7">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${backgrounds[index]} text-[#A78354]`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {benefit.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08 — INDUSTRIES */}
      <section className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>Industries we work with</Eyebrow>
              <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                Website development for
                <span className="block italic text-[#A78354]">
                  different industries.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#66758A]">
                Every industry communicates differently. We organise website
                content and functionality around the information customers
                need to make informed enquiries.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.title} delay={(index % 3) * 0.06}>
                  <article className="group h-full rounded-[23px] border border-white bg-white/75 p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,42,82,0.07)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2ECE2] text-[#A78354] transition group-hover:bg-[#0B2A52] group-hover:text-[#D9BD95]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {industry.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — SEO & TECHNICAL FOUNDATIONS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <Eyebrow>Website SEO foundations</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
              A website built with
              <span className="block italic text-[#A78354]">
                search visibility in mind.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#66758A]">
              Search engine optimisation should be considered while planning
              a website, not only after development. We pay attention to
              technical and structural foundations that help search engines
              understand your pages and visitors navigate your content.
            </p>

          <Link
  href="/services/search-engine-optimization"
  title="Explore Sharp Rays search engine optimization services"
  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#A78354] hover:gap-3"
>
  Explore our SEO services
  <ArrowRight size={16} />
</Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[28px] border border-[#EAE5DC] bg-white p-7 shadow-[0_20px_60px_rgba(11,42,82,0.05)] sm:p-9">
              <div className="flex items-center gap-4 border-b border-[#EAE5DC] pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2A52] text-[#D9BD95]">
                  <FileCode2 size={23} />
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#A78354]">
                    Technical foundations
                  </p>
                  <h3 className="mt-1 font-[var(--font-new-york)] text-2xl">
                    Website structure
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Organised URL structure",
                    text: "Clear page paths and logical website hierarchy.",
                  },
                  {
                    title: "Metadata & headings",
                    text: "Relevant page titles, descriptions, and heading structure.",
                  },
                  {
                    title: "Responsive implementation",
                    text: "Layouts designed for mobile, tablet, and desktop.",
                  },
                  {
                    title: "Internal linking",
                    text: "Useful connections between related pages and services.",
                  },
                  {
                    title: "Performance considerations",
                    text: "Attention to image optimisation and efficient page loading.",
                  },
                  {
                    title: "Indexing foundations",
                    text: "Technical considerations for crawlability and indexability.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#A78354]"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-[#0B2A52]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[11px] leading-6 text-[#66758A]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 — DEVELOPMENT PROCESS */}
      <section className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Our process</Eyebrow>
              <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                From the first idea
                <span className="block italic text-[#A78354]">
                  to a live website.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#66758A]">
                A structured process keeps the website aligned with your
                business goals, content requirements, and functionality.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {process.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <article className="h-full rounded-[22px] border border-white bg-white/80 p-6">
                  <span className="font-[var(--font-new-york)] text-3xl italic text-[#B89569]">
                    {item.number}
                  </span>
                  <div className="my-5 h-px w-full bg-[#E9E2D8]" />
                  <h3 className="font-[var(--font-new-york)] text-xl leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-7 text-[#66758A]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — WHY SHARP RAYS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Why Sharp Rays</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
              More than just
              <span className="block italic text-[#A78354]">
                a website design.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#66758A]">
              We look at the website as part of your wider digital presence.
              The goal is to create a useful experience that communicates your
              business clearly and provides a foundation for future digital
              growth.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Business-focused planning",
                text: "Website decisions guided by your actual objectives.",
              },
              {
                icon: Palette,
                title: "Thoughtful visual design",
                text: "A consistent experience aligned with your brand.",
              },
              {
                icon: Code2,
                title: "Structured development",
                text: "Functionality and implementation planned around scope.",
              },
              {
                icon: Search,
                title: "SEO-aware approach",
                text: "Search-friendly foundations considered during development.",
              },
              {
                icon: Smartphone,
                title: "Responsive experience",
                text: "Layouts that adapt to different screen sizes.",
              },
              {
                icon: MessageCircle,
                title: "Clear communication",
                text: "A defined process for requirements, reviews, and feedback.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[21px] border border-[#EAE5DC] bg-white p-6"
                >
                  <Icon size={22} className="text-[#A78354]" />
                  <h3 className="mt-4 font-[var(--font-new-york)] text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-6 text-[#66758A]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12 — RELATED SERVICES */}
      <section className="bg-[#F0EDE6] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>Connected digital services</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl">
              Your website is one part of your digital growth.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#66758A]">
              Combine website development with other digital services to
              strengthen your online presence and customer journey.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SEO Services",
                text: "Improve your website's search visibility and organic reach.",
                href: "/locations/virar/seo",
              },
              {
                title: "Social Media Marketing",
                text: "Build a consistent brand presence across social platforms.",
                href: "/locations/virar/social-media-marketing",
              },
              {
                title: "Performance Marketing",
                text: "Plan paid campaigns around defined business objectives.",
                href: "/locations/virar/performance-marketing",
              },
              {
                title: "AI Automation",
                text: "Explore workflows that simplify repetitive business tasks.",
                href: "/locations/virar/ai-automation",
              },
              {
                title: "AI Video & Creative",
                text: "Create visual content for your digital communication.",
                href: "/locations/virar/ai-video-and-creative",
              },
              {
                title: "Virar Location Page",
                text: "Explore digital marketing services available for Virar businesses.",
                href: "/locations/virar",
              },
            ].map((item) => (
              <Link
  key={item.title}
  href={item.href}
  title={`Explore ${item.title} for businesses in Virar`}
  className="group flex items-center justify-between gap-4 rounded-2xl border border-[#DED8CE] bg-[#FCFAF7] p-6 transition hover:border-[#C6A77A] hover:bg-white"
>
  <div>
    <h3 className="font-[var(--font-new-york)] text-xl">
      {item.title}
    </h3>

    <p className="mt-2 text-[11px] leading-6 text-[#66758A]">
      {item.text}
    </p>
  </div>

  <ArrowUpRight
    size={18}
    className="shrink-0 text-[#A78354] transition group-hover:-translate-y-1 group-hover:translate-x-1"
  />
</Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — FAQ */}
      <section
        id="virar-website-development-faq"
        className="bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-[#E4DED4] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Eyebrow>Frequently asked questions</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] text-[#0B2A52] sm:text-5xl">
                  A little more
                  <span className="block italic text-[#A78354]">
                    clarity before you begin.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
                Useful answers about website design, website development,
                project websites, and booking websites for businesses in
                Virar.
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
              Explore our website development service pillar, the Virar
              location page, and website development services for nearby
              areas.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedLinks.map((item) => (
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
                  <ArrowUpRight
                    size={17}
                    className="text-[#A78354] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
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
      <section className="bg-[#FCFAF7] px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#0B2A52] px-7 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-28 h-72 w-72 rounded-full bg-[#C6A77A]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-[#53769B]/30 blur-[90px]" />

          <Reveal className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#D9BD95]">
              <Sparkles size={25} />
            </div>

            <Eyebrow>Let's build something meaningful</Eyebrow>

            <h2 className="font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Your next website should move your business forward.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/65">
              Tell us what you want to build. Whether it is a business
              website, a real estate project website, or a booking website,
              let's discuss the right approach for your requirements.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
  href="/contact"
  title="Contact Sharp Rays to discuss your website project"
  className="inline-flex items-center gap-3 rounded-full bg-[#D9BD95] px-7 py-4 text-sm font-semibold text-[#0B2A52] transition hover:bg-white"
>
  Get a Free Website Quote
  <ArrowUpRight size={17} />
</Link>
              <Link
  href="/locations/virar"
  title="Explore digital marketing services in Virar"
  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
>
  Explore Virar Services
  <ArrowRight size={16} />
</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
