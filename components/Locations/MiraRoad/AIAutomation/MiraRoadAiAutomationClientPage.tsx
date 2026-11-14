
"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Workflow,
  Bot,
  MessageSquare,
  Users,
  Database,
  Plug,
  Bell,
  FileText,
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Utensils,
  BriefcaseBusiness,
  Lightbulb,
  Settings2,
  ClipboardCheck,
  RefreshCw,
  Clock3,
  ShieldCheck,
  Zap,
  Network,
  Search,
  Send,
  Sparkles,
  CircleHelp,
  Layers3,
  Target,
} from "lucide-react";

const CONTACT_URL = "/contact?source=mira-road-ai-automation";

const CONTACT_TITLE =
  "Contact Sharp Rays About AI Automation Services in Mira Road";

const services = [
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    description:
      "Automate repetitive business activities, task assignments, notifications and information movement between compatible applications.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Create AI-powered assistants that answer defined questions, guide website visitors and collect relevant customer enquiry details.",
  },
  {
    icon: Users,
    title: "Lead Management Automation",
    description:
      "Organise incoming leads, capture customer information, notify the right team and support structured follow-up processes.",
  },
  {
    icon: Plug,
    title: "AI & Business Tool Integrations",
    description:
      "Connect supported website forms, CRM systems, spreadsheets, email platforms and other business applications.",
  },
  {
    icon: MessageSquare,
    title: "Customer Communication Automation",
    description:
      "Structure enquiry responses, customer notifications and communication workflows around your business requirements.",
  },
  {
    icon: Database,
    title: "Data & Administrative Automation",
    description:
      "Reduce repetitive data entry and organise business information across connected tools and everyday workflows.",
  },
];

const challenges = [
  {
    icon: MessageSquare,
    title: "Repeated customer questions",
    description:
      "Your team spends time answering the same basic questions about services, timings, products and business information.",
  },
  {
    icon: FileText,
    title: "Scattered enquiries",
    description:
      "Customer details arrive through different channels and are difficult to organise in one consistent process.",
  },
  {
    icon: Clock3,
    title: "Delayed follow-ups",
    description:
      "Potential customers may not receive timely responses when enquiries depend entirely on manual reminders.",
  },
  {
    icon: Database,
    title: "Manual data entry",
    description:
      "Information is repeatedly copied between forms, spreadsheets, email and other business applications.",
  },
  {
    icon: Bell,
    title: "Missed internal updates",
    description:
      "Important enquiry or task updates do not always reach the right person at the right time.",
  },
  {
    icon: RefreshCw,
    title: "Disconnected processes",
    description:
      "Different tools operate separately, making everyday business activities harder to coordinate.",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Real Estate & Property",
    description:
      "Capture property enquiries, organise buyer requirements, notify sales teams and structure follow-up workflows.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description:
      "Organise appointment enquiries, share approved practice information and send internal notifications with suitable privacy controls.",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Education",
    description:
      "Collect admission enquiries, organise course-interest details and support enquiry response workflows.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Ecommerce",
    description:
      "Structure product enquiries, order-related notifications and customer communication processes.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description:
      "Organise reservation enquiries, frequently asked questions and customer message handling.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Manage consultation requests, organise client details and connect enquiries with internal business workflows.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Understand your process",
    description:
      "We discuss your business activities, existing tools, repetitive tasks and the problems you want to solve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Identify opportunities",
    description:
      "We identify suitable automation opportunities and distinguish tasks that need AI from tasks that need simple workflow automation.",
  },
  {
    number: "03",
    icon: Network,
    title: "Map the workflow",
    description:
      "We plan the workflow, required integrations, information flow, permissions and expected behaviour.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Build & test",
    description:
      "We configure the automation, connect compatible tools and test important scenarios before implementation.",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Refine & hand over",
    description:
      "We review the workflow, explain how it operates and provide handover guidance based on the agreed scope.",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Reduce repetitive work",
    description:
      "Spend less time on suitable routine tasks that can be handled through automation.",
  },
  {
    icon: Layers3,
    title: "Organise business information",
    description:
      "Bring relevant enquiry details and workflow information into a more structured process.",
  },
  {
    icon: Bell,
    title: "Improve process consistency",
    description:
      "Use defined triggers, notifications and steps to make routine activities more consistent.",
  },
  {
    icon: Target,
    title: "Support better follow-ups",
    description:
      "Make it easier for teams to identify new enquiries and follow the next agreed action.",
  },
];

const faqs = [
  {
    question: "What is AI automation for a business?",
    answer:
      "AI automation combines artificial intelligence with workflows and connected applications to handle suitable business tasks. Examples include answering defined customer questions, organising enquiry information and assisting with repetitive processes.",
  },
  {
    question: "Does Sharp Rays provide AI automation services in Mira Road?",
    answer:
      "Sharp Rays offers AI automation solutions for businesses targeting customers in Mira Road. Depending on the requirements, the scope can include workflow automation, AI chatbots, lead management processes and business tool integrations.",
  },
  {
    question: "Can you build an AI chatbot for my website?",
    answer:
      "Yes. A website chatbot can be designed to answer defined questions, share approved business information and collect relevant enquiry details. Its capabilities depend on the information, integrations and boundaries configured for it.",
  },
  {
    question: "Can AI automation help manage customer enquiries?",
    answer:
      "Yes. Suitable workflows can capture enquiry details, organise information, send internal notifications and support follow-up processes. The exact workflow depends on your existing tools and requirements.",
  },
  {
    question: "Can you automate lead follow-ups?",
    answer:
      "Lead follow-up workflows can use defined triggers and approved communication channels to support reminders, notifications and other agreed actions. Human review can remain part of the process where needed.",
  },
  {
    question: "Can you connect website forms with a CRM?",
    answer:
      "This may be possible when the website form and CRM provide compatible integration options. We first review the tools, available APIs or connectors and the information that needs to move between them.",
  },
  {
    question: "Do I need technical knowledge to use automation?",
    answer:
      "Not necessarily. The workflow can be designed around the way your team already works. We explain the agreed process and provide suitable handover guidance.",
  },
  {
    question: "Can automation work with my existing business tools?",
    answer:
      "In many cases, yes. Compatibility depends on the applications, their available integrations, API access, account permissions and any usage restrictions.",
  },
  {
    question: "How much do AI automation services cost?",
    answer:
      "Pricing depends on workflow complexity, the number of integrations, AI usage, implementation requirements and ongoing support. Sharp Rays discusses the scope before preparing a project estimate.",
  },
  {
    question: "How long does it take to implement an automation workflow?",
    answer:
      "The timeline depends on the number of workflow steps, integrations, testing requirements and access to the necessary tools. A clear estimate can be provided after understanding the project.",
  },
  {
    question: "Can an AI chatbot answer every customer question?",
    answer:
      "An AI chatbot should operate within defined information and response boundaries. Questions outside its configured knowledge or capabilities should be directed to a human team member where appropriate.",
  },
  {
    question: "How do I get started with Sharp Rays?",
    answer:
      "Share your business details, the tasks you want to automate and the tools you currently use. Sharp Rays can review the requirements and discuss a suitable automation approach.",
  },
];

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

function Eyebrow({ children }: { children: ReactNode }) {
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
  title: ReactNode;
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

export default function MiraRoadAiAutomationClientPage() {
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation Services in Mira Road",
    serviceType: "AI Automation",
    description:
      "AI automation services including workflow automation, AI chatbots, lead management workflows and business tool integrations for businesses in Mira Road.",
    areaServed: {
      "@type": "Place",
      name: "Mira Road, Maharashtra, India",
    },
    provider: {
      "@type": "Organization",
      name: "Sharp Rays",
      url: "https://www.sharprays.com",
    },
    url: "https://www.sharprays.com/locations/mira-road/ai-automation",
  };

  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#122847]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema]).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[440px] w-[440px] rounded-full bg-[#C6A77A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#0B2A52]/[0.04] blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>AI AUTOMATION · MIRA ROAD</Eyebrow>

            <h1 className="max-w-[720px] font-[var(--font-new-york)] text-[clamp(2.7rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.045em] text-[#122847]">
              AI Automation Services
              <span className="block italic text-[#A78354]">
                for Mira Road Businesses
              </span>
            </h1>

            <p className="mt-7 max-w-[580px] text-[15px] leading-8 text-[#718096] sm:text-base">
              Make everyday business processes simpler with intelligent
              automation. Sharp Rays helps businesses organise enquiries,
              streamline repetitive tasks, build AI-powered assistants and
              connect compatible business tools.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
             <Link
  href={CONTACT_URL}
  title={CONTACT_TITLE}
  aria-label="Discuss AI automation requirements with Sharp Rays"
  className="group inline-flex items-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#0B2A52]"
>
  Discuss Your Automation Needs
  <ArrowUpRight
    size={16}
    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  />
</Link>

              <Link
                href="/services/ai-automation"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D7] px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#C6A77A]"
              >
                Explore AI Automation <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#718096]">
              {[
                "Workflow Automation",
                "AI Chatbots",
                "Lead Management",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#A78354]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Hero workflow visual */}
          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[510px]">
              <div className="rounded-[2rem] border border-[#E8E1D7] bg-white p-5 shadow-[0_24px_70px_rgba(18,40,71,0.08)] sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B765A]">
                      Connected business workflows
                    </p>
                    <h2 className="mt-1 text-lg font-medium text-[#122847]">
                      From enquiry to action.
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2F0EA] text-[#A88659]">
                    <Workflow size={22} />
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="flex items-center gap-4 rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDE6DC] text-[#8B765A]">
                      <FileText size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-[#122847]">
                        New customer enquiry
                      </p>
                      <p className="mt-1 text-xs text-[#8792A1]">
                        Website form submission
                      </p>
                    </div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[#A88659]">
                      Input
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-7 w-px bg-[#D9C9B5]" />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Bot size={21} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-[#122847]">
                        Automation workflow
                      </p>
                      <p className="mt-1 text-xs text-[#8792A1]">
                        Organise details and apply defined steps
                      </p>
                    </div>
                    <Sparkles size={17} className="text-[#A88659]" />
                  </div>

                  <div className="flex justify-center">
                    <div className="h-7 w-px bg-[#D9C9B5]" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-[#F2F0EA] p-4">
                      <Bell size={19} className="text-[#A88659]" />
                      <p className="mt-3 text-sm font-semibold text-[#122847]">
                        Team alert
                      </p>
                      <p className="mt-1 text-[10px] leading-5 text-[#718096]">
                        Notify the right person
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#E9EDE7] p-4">
                      <Database size={19} className="text-[#617B64]" />
                      <p className="mt-3 text-sm font-semibold text-[#122847]">
                        Organised data
                      </p>
                      <p className="mt-1 text-[10px] leading-5 text-[#718096]">
                        Keep information structured
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-[#122847] p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#C6A77A]">
                      <Network size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Connected processes
                      </p>
                      <p className="mt-1 text-xs text-white/55">
                        Designed around your business requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#E8E1D7] bg-white px-5 py-4 shadow-lg sm:block">
                <p className="text-[10px] uppercase tracking-widest text-[#9AA3AF]">
                  The intention
                </p>
                <p className="mt-1 text-sm font-semibold text-[#122847]">
                  Make work flow better.
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
                <Sparkles size={15} />
                AI automation in Mira Road
              </div>

              <p className="text-lg leading-8 text-[#344054] sm:text-xl sm:leading-9">
                Sharp Rays provides AI automation services for businesses in
                Mira Road, helping them simplify repetitive work and organise
                everyday processes. Solutions can include AI chatbots, enquiry
                capture, lead management workflows, business notifications,
                data organisation and integrations between compatible tools.
                Each automation is planned around the business process, tools
                and requirements involved.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — BUSINESS CHALLENGES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 / Everyday business challenges"
            title={
              <>
                Too much time spent on
                <span className="block font-serif italic text-[#A88659]">
                  work that follows the same steps.
                </span>
              </>
            }
            description="Many businesses still manage enquiries, customer updates and internal tasks manually. Identifying these repetitive activities is the first step towards useful automation."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 / What we automate"
            title={
              <>
                Practical AI solutions.
                <span className="block font-serif italic text-[#A88659]">
                  Connected to real business needs.
                </span>
              </>
            }
            description="From customer-facing assistants to internal workflows, choose automation that solves a defined business problem instead of adding technology without a purpose."
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
        </div>
      </section>

      {/* 05 — LEAD CAPTURE */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>03 / Lead capture & follow-up</Eyebrow>

            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
              Turn incoming enquiries into
              <span className="block font-serif italic text-[#A88659]">
                an organised process.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              When enquiries arrive through website forms and other connected
              channels, manual handling can make it difficult to keep track of
              customer information. A suitable automation workflow can capture
              details, organise them and notify the relevant team.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Capture customer details through connected forms",
                "Organise enquiry information in a supported system",
                "Send notifications to the relevant team",
                "Create reminders or follow-up tasks",
                "Keep a clearer record of enquiry activity",
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
            <div className="rounded-[2rem] border border-[#E8E2D8] bg-white p-6 shadow-[0_24px_60px_rgba(18,40,71,0.06)] sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                    Example workflow
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-[#122847]">
                    Enquiry handling journey
                  </h3>
                </div>
                <Workflow size={23} className="text-[#A88659]" />
              </div>

              <div className="mt-7 space-y-3">
                {[
                  {
                    icon: FileText,
                    title: "Customer submits an enquiry",
                    text: "A website form or connected channel",
                  },
                  {
                    icon: Database,
                    title: "Information is organised",
                    text: "Relevant details are captured",
                  },
                  {
                    icon: Bell,
                    title: "Team receives a notification",
                    text: "The right person is informed",
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Next action is followed",
                    text: "The team reviews and manages the lead",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title}>
                      <div className="flex items-center gap-4 rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F0E9DF] text-[#A88659]">
                          <Icon size={19} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#122847]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-[#8792A1]">
                            {item.text}
                          </p>
                        </div>
                      </div>

                      {index !== 3 && (
                        <div className="flex justify-center py-1.5">
                          <div className="h-4 w-px bg-[#C6A77A]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-[10px] leading-5 text-[#8792A1]">
                Illustrative workflow. Actual steps and integrations depend on
                the selected tools and project scope.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — CHATBOTS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-[#FCFAF7] p-6 sm:p-8">
              <div className="rounded-2xl bg-[#122847] p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#C6A77A]">
                    <Bot size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Website AI assistant</p>
                    <p className="mt-1 text-[10px] text-white/50">
                      Example conversation
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm">
                  <p className="text-xs leading-6 text-[#475467]">
                    Hello! How can I help you today?
                  </p>
                </div>

                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-[#E9E2D8] p-4">
                  <p className="text-xs leading-6 text-[#475467]">
                    I would like to know more about your services.
                  </p>
                </div>

                <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white p-4 shadow-sm">
                  <p className="text-xs leading-6 text-[#475467]">
                    I can help you explore the available services. Would you
                    like to share your requirements?
                  </p>
                </div>

                <div className="rounded-xl border border-[#E8E2D8] bg-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#98A2B3]">
                      Type your message...
                    </span>
                    <Send size={16} className="text-[#A88659]" />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-[#8792A1]">
                Illustrative chatbot conversation, not a live or deployed
                customer assistant.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Eyebrow>04 / AI chatbots & assistants</Eyebrow>

            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
              Give website visitors
              <span className="block font-serif italic text-[#A88659]">
                a more helpful first interaction.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              An AI assistant can help visitors find approved business
              information, understand your services and share their
              requirements. Its responses should be based on the information
              and boundaries configured for your business.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Answer defined frequently asked questions",
                "Explain approved products and services",
                "Collect customer details and enquiry requirements",
                "Guide visitors towards the appropriate next step",
                "Escalate uncertain or complex questions to your team",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#A88659]" />
                  <p className="text-sm leading-6 text-[#475467]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — INTEGRATIONS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="05 / Connected business tools"
            title={
              <>
                Bring your tools together.
                <span className="block font-serif italic text-[#A88659]">
                  Make information flow more clearly.
                </span>
              </>
            }
            description="Useful automation often connects tools that already support your business. We review available integrations and design the information flow around your requirements."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FileText,
                title: "Website Forms",
                text: "Send submitted enquiry details into a connected workflow.",
              },
              {
                icon: Database,
                title: "Spreadsheets & CRM",
                text: "Organise customer information and update supported records.",
              },
              {
                icon: MessageSquare,
                title: "Email & Messaging",
                text: "Support agreed notifications and customer communication.",
              },
              {
                icon: Bot,
                title: "AI Services",
                text: "Connect suitable AI capabilities to defined business tasks.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-[#122847]">
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

          <p className="mt-8 text-center text-xs leading-6 text-[#718096]">
            Integration availability depends on platform support, API access,
            account permissions and the selected implementation.
          </p>
        </div>
      </section>

      {/* 08 — INDUSTRIES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="06 / Industries around Mira Road"
            title={
              <>
                Automation shaped around
                <span className="block font-serif italic text-[#A88659]">
                  the way your business works.
                </span>
              </>
            }
            description="Different businesses have different workflows. Here are examples of where AI automation can support local businesses serving customers in Mira Road East, Mira Road West and nearby areas."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 transition hover:border-[#C6A77A]">
                    <Icon size={23} className="text-[#A88659]" />
                    <h3 className="mt-5 text-lg font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — PROCESS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="07 / Our implementation process"
            title={
              <>
                From a business problem
                <span className="block font-serif italic text-[#A88659]">
                  to a considered automation workflow.
                </span>
              </>
            }
            description="We start by understanding how your business operates, then plan and implement an automation around the process that needs improvement."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-4xl italic text-[#B79A72]">
                        {step.number}
                      </span>
                      <Icon size={20} className="text-[#A88659]" />
                    </div>
                    <h3 className="mt-6 text-lg font-medium text-[#122847]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 — BENEFITS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="08 / The practical value"
            title={
              <>
                Better processes.
                <span className="block font-serif italic text-[#A88659]">
                  More room for meaningful work.
                </span>
              </>
            }
            description="The purpose of automation is not to add complexity. It is to make suitable business activities easier to manage, review and repeat."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7">
                    <Icon size={23} className="text-[#A88659]" />
                    <h3 className="mt-5 text-lg font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 — WHY SHARP RAYS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="09 / Why Sharp Rays"
            title={
              <>
                Technology with a purpose.
                <span className="block font-serif italic text-[#A88659]">
                  Automation with business context.
                </span>
              </>
            }
            description="A useful automation begins with understanding the task, the people involved and the tools already in use. Our approach focuses on solving the right problem before choosing the technology."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Business-first thinking",
                text: "We begin with your business process and identify where automation can genuinely help.",
              },
              {
                icon: Network,
                title: "Connected implementation",
                text: "We consider the tools, information flow and integrations needed to make the workflow useful.",
              },
              {
                icon: ShieldCheck,
                title: "Thoughtful execution",
                text: "We consider testing, access permissions, response boundaries and human review where needed.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-8">
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

      {/* 12 — PRICING */}
      <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#C6A77A]/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <Reveal className="mb-14 overflow-hidden rounded-[2rem] border border-[#E8E2D8] bg-[#FCFAF7] px-7 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A88659]">
              AI AUTOMATION · PROJECT INVESTMENT
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
              Every workflow is different.
              <span className="block italic text-[#A88659]">
                Your solution should be too.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#718096] sm:text-base">
              AI automation projects are scoped around your business
              requirements, workflow complexity, integrations and ongoing
              support needs.
            </p>
          </Reveal>

          <Reveal>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-[#122847] p-8 text-white shadow-[0_24px_60px_rgba(18,40,71,0.15)] sm:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A77A]">
                    Custom automation solution
                  </p>

                  <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                    Let's scope your workflow.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Tell us what you want to automate. We will discuss the
                    process, required tools and implementation scope before
                    preparing a project estimate.
                  </p>
                </div>

               <Link
  href={CONTACT_URL}
  title={CONTACT_TITLE}
  aria-label="Request an AI automation consultation from Sharp Rays"
  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#C6A77A] px-7 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
  Request a Consultation
  <ArrowUpRight size={16} />
</Link>
              </div>

              <div className="mt-9 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
                {[
                  "Workflow requirements",
                  "Integration complexity",
                  "Support requirements",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={15} className="shrink-0 text-[#C6A77A]" />
                    <span className="text-xs text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-7 text-[#718092]">
              Third-party software subscriptions, API usage and external
              platform charges may be separate from implementation fees.
              Explore our other service pricing on the{" "}
             <Link
  href="/pricing"
  title="View Sharp Rays Service Pricing and Packages"
  className="font-semibold text-[#122847] underline decoration-[#C6A77A] underline-offset-4 transition hover:text-[#A88659]"
>
  pricing page
</Link>
            </p>
          </Reveal>
        </div>
      </section>


{/* 12 — AI AUTOMATION PRICING */}

<section
  className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
  aria-labelledby="mira-ai-pricing-heading"
>
  <div className="mx-auto max-w-[1220px]">
    <Reveal>
      <SectionHeading
  eyebrow="AI AUTOMATION PRICING"
  title={
    <>
      Choose the right level of{" "}
      <span className="font-serif italic text-[#A88659]">
        automation.
      </span>
    </>
  }
  description="From automating one repetitive task to connecting multiple business systems, explore AI automation packages designed around different operational requirements."
  centered
/>
    </Reveal>

    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {[
        {
          name: "Starter",
          label: "Focused Automation",
          description: "For businesses automating one repetitive process.",
          price: "₹14,999",
          scope: "1 focused workflow",
          features: [
            "Up to 2 connected tools",
            "Basic triggers and conditions",
            "CRM or spreadsheet automation",
            "Testing, launch and documentation",
            "14 days post-launch support",
          ],
        },
        {
          name: "Growth",
          label: "Connected Automation",
          description: "For businesses connecting multiple workflows.",
          price: "₹29,999",
          scope: "Up to 3 connected workflows",
          featured: true,
          features: [
            "Up to 4 standard integrations",
            "Lead qualification and routing",
            "Automated follow-up sequences",
            "AI classification and summaries",
            "Error alerts and fallback paths",
            "30 days post-launch support",
          ],
        },
        {
          name: "Scale",
          label: "Advanced Automation",
          description: "For businesses building a broader automation system.",
          price: "₹49,999",
          scope: "Up to 5 connected workflows",
          features: [
            "Multi-system automation",
            "Advanced API and webhook connections",
            "Document and reporting automation",
            "Human-in-the-loop controls",
            "Workflow monitoring setup",
            "60 days post-launch support",
          ],
        },
      ].map((plan, index) => (
        <Reveal key={plan.name} delay={index * 0.08}>
          <article
            className={`relative flex h-full flex-col rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
              plan.featured
                ? "border-[#122847] bg-[#122847] text-white shadow-[0_20px_55px_rgba(18,40,71,0.15)]"
                : "border-[#E5DDD3] bg-white text-[#122847] hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]"
            }`}
          >
            {plan.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-[#C6A77A] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#122847]">
                Most Popular
              </span>
            )}

            <p
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                plan.featured ? "text-[#C6A77A]" : "text-[#A88659]"
              }`}
            >
              {plan.label}
            </p>

            <h3 className="mt-5 font-[var(--font-new-york)] text-2xl">
              {plan.name}
            </h3>

            <p
              className={`mt-3 min-h-[42px] text-xs leading-[1.8] ${
                plan.featured ? "text-white/60" : "text-[#718092]"
              }`}
            >
              {plan.description}
            </p>

            <div className="mt-7 border-y border-current/15 py-6">
              <p className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                Starting from
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-[var(--font-new-york)] text-4xl">
                  {plan.price}
                </span>
                <span className="text-[10px] opacity-60">one-time</span>
              </div>

              <p className="mt-3 text-xs opacity-75">{plan.scope}</p>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start gap-3 text-xs leading-[1.7] ${
                    plan.featured ? "text-white/75" : "text-[#52647A]"
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
  href="/pricing"
  title="Explore Sharp Rays Automation Care Pricing"
  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#8D704C] transition hover:text-[#122847]"
>
  Explore Pricing
  <ArrowUpRight size={14} />
</Link>
          </article>
        </Reveal>
      ))}
    </div>

    {/* Additional pricing information */}

    <div className="mt-8 grid gap-5 md:grid-cols-2">
      <Reveal>
        <div className="rounded-2xl border border-[#E5DDD3] bg-white p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E9]">
            <Workflow size={21} className="text-[#A88659]" />
          </div>

          <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
            Automation Care
          </h3>

          <p className="mt-2 text-xs leading-[1.9] text-[#718092]">
            Optional ongoing monitoring, error checks, minor workflow
            changes and optimisation after the included support period.
          </p>

          <p className="mt-3 text-sm font-semibold text-[#122847]">
            From ₹4,999/month
          </p>

        <Link
  href="/pricing"
  title="View Sharp Rays Third-Party and Service Pricing Details"
  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#8D704C] transition hover:text-[#122847]"
>
  View Pricing Details
  <ArrowUpRight size={14} />
</Link>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-2xl border border-[#E5DDD3] bg-white p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E9]">
            <Database size={21} className="text-[#A88659]" />
          </div>

          <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
            Third-Party Costs
          </h3>

          <p className="mt-2 text-xs leading-[1.9] text-[#718092]">
            Automation platforms, AI usage, APIs, WhatsApp message charges
            and other external software costs are separate unless
            specifically included in your proposal.
          </p>

          <Link
            href="/pricing"
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#8D704C] transition hover:text-[#122847]"
          >
            View Pricing Details
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Reveal>
    </div>

    <Reveal>
      <p className="mt-8 text-center text-[11px] leading-[1.9] text-[#87929D]">
        Package scope and suitability depend on workflow complexity,
        integration availability and business requirements. Third-party
        platform and usage charges are separate unless stated in your
        proposal.
      </p>
    </Reveal>
  </div>
</section>



      {/* 13 — FAQ */}
      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="mira-road-ai-automation-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              Questions Before You Start
            </p>

            <h2
              id="mira-road-ai-automation-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
              Answers about AI automation, chatbots, workflow integrations and
              business process automation in Mira Road.
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

      {/* 14 — FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Make everyday work flow better
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Your next smarter workflow
            <span className="block font-serif italic text-[#C6A77A]">
              starts with a conversation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Tell us about the repetitive tasks, customer enquiries or
            disconnected tools slowing down your business. Let's explore where
            AI automation can make your processes simpler.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
           <Link
  href={CONTACT_URL}
  title={CONTACT_TITLE}
  aria-label="Contact Sharp Rays for AI automation"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
  Talk to Sharp Rays
  <ArrowUpRight size={17} />
</Link>

            <Link
  href="/locations/mira-road"
  title="Explore Digital Marketing Services in Mira Road"
  aria-label="Explore all Sharp Rays services in Mira Road"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
>
  Explore Mira Road Services
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
