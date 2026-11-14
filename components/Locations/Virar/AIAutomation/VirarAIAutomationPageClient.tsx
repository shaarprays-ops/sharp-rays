
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Workflow,
  MessageSquare,
  Mail,
  CalendarCheck,
  Users,
  Database,
  FileText,
  ShoppingBag,
  Headphones,
  RefreshCw,
  CheckCircle2,
  Sparkles,
  Building2,
  GraduationCap,
  Stethoscope,
  Store,
  BriefcaseBusiness,
  Home,
  ChevronDown,
  Zap,
  ShieldCheck,
  Clock3,
  Target,
  Settings2,
  Phone,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description:
      "Respond to common enquiries, collect customer details and guide prospects through the next step with structured WhatsApp workflows.",
    examples: ["Enquiry responses", "Lead qualification", "Follow-up messages"],
  },
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    description:
      "Connect repetitive business activities into organised workflows so routine tasks require less manual coordination.",
    examples: ["Task assignment", "Internal notifications", "Workflow triggers"],
  },
  {
    icon: Users,
    title: "Lead Management Automation",
    description:
      "Capture incoming leads, organise prospect information and help your team follow up without losing track of enquiries.",
    examples: ["Lead capture", "CRM updates", "Lead routing"],
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Create useful email sequences for enquiries, onboarding, reminders and customer communication.",
    examples: ["Welcome emails", "Enquiry follow-ups", "Customer updates"],
  },
  {
    icon: CalendarCheck,
    title: "Appointment & Booking Automation",
    description:
      "Make appointment requests, confirmations and reminders easier to manage for service-based businesses.",
    examples: ["Booking requests", "Appointment reminders", "Confirmation workflows"],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Build AI-powered assistants that help answer common questions and direct visitors towards relevant information or support.",
    examples: ["Website chat assistants", "FAQs", "Enquiry assistance"],
  },
  {
    icon: Database,
    title: "Data & Reporting Automation",
    description:
      "Reduce repetitive data entry by connecting supported tools and organising information into structured workflows.",
    examples: ["Data collection", "Report generation", "System updates"],
  },
  {
    icon: FileText,
    title: "Document & Admin Automation",
    description:
      "Simplify recurring administrative work such as document preparation, information processing and routine updates.",
    examples: ["Document workflows", "Form processing", "Admin notifications"],
  },
];

const useCases = [
  {
    icon: Store,
    title: "Retail & Local Shops",
    description:
      "Organise product enquiries, customer follow-ups, order updates and recurring communication.",
  },
  {
    icon: Home,
    title: "Real Estate & Property",
    description:
      "Capture property enquiries, organise buyer details and streamline site-visit follow-ups.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Manage consultation requests, appointment reminders, client onboarding and routine updates.",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    description:
      "Organise admission enquiries, course information requests, counselling bookings and reminders.",
  },
  {
    icon: Building2,
    title: "Growing Businesses",
    description:
      "Connect everyday business processes and reduce manual coordination as operations expand.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Support customer communication, order-related workflows and post-purchase follow-ups.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    description:
      "Streamline appointment requests, reminders and administrative communication while keeping appropriate human oversight.",
  },
  {
    icon: Headphones,
    title: "Customer Support Teams",
    description:
      "Organise incoming support requests, route enquiries and assist teams with repetitive questions.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Workflow",
    description:
      "We understand how your business currently handles enquiries, customers, data and repetitive tasks.",
  },
  {
    number: "02",
    title: "Identify Automation Opportunities",
    description:
      "We identify suitable processes to automate and separate routine tasks from decisions that need human attention.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We design the workflow, connect supported tools and configure the automation around your requirements.",
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "We test real workflow scenarios, check exceptions and refine the setup before it becomes part of daily operations.",
  },
  {
    number: "05",
    title: "Monitor & Improve",
    description:
      "We help review the workflow and identify improvements as your business processes change.",
  },
];

const faqs = [
  {
    question: "What is AI automation for businesses?",
    answer:
      "AI automation combines artificial intelligence with automated workflows to help businesses handle selected repetitive tasks. Examples include enquiry assistance, information processing, lead organisation and customer communication.",
  },
  {
    question: "Can small businesses in Virar use AI automation?",
    answer:
      "Yes. Small businesses can start with focused workflows such as enquiry capture, appointment reminders, lead follow-ups or routine notifications. The right starting point depends on the existing process and business requirements.",
  },
  {
    question: "Can you automate WhatsApp enquiries?",
    answer:
      "WhatsApp workflows can be designed for supported business messaging setups. The available features depend on the account, platform permissions, integrations and approved messaging requirements.",
  },
  {
    question: "Will AI automation replace my employees?",
    answer:
      "The goal is to reduce repetitive manual work, not automatically replace people. Your team can continue handling customer relationships, judgement-based decisions and situations that require personal attention.",
  },
  {
    question: "Can AI automation connect with my existing CRM?",
    answer:
      "Integration may be possible when your CRM provides supported APIs, connectors or other integration options. We first review the tools you currently use and confirm what can be connected.",
  },
  {
    question: "How much does AI automation cost?",
    answer:
      "The cost depends on workflow complexity, integrations, platforms, usage requirements and ongoing maintenance. We recommend defining the workflow before estimating the project.",
  },
  {
    question: "Do I need to automate my entire business at once?",
    answer:
      "No. A practical approach is to begin with one repetitive process, test its usefulness and expand only when the workflow is reliable and provides clear operational value.",
  },
  {
    question: "Does Sharp Rays provide ongoing automation support?",
    answer:
      "Support and improvement arrangements can be discussed according to the tools used, workflow complexity and project requirements.",
  },
];

const automationBenefits = [
  "Reduce repetitive manual tasks",
  "Organise incoming business enquiries",
  "Improve follow-up consistency",
  "Connect supported business tools",
  "Create more structured workflows",
  "Keep people involved in important decisions",
];

export default function VirarAIAutomationPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#122847]">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 lg:px-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[440px] w-[440px] rounded-full bg-[#C6A77A]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-[#DCE7F1]/70 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C6A77A]/40 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#806746]">
              <Sparkles size={14} />
              AI Automation · Virar
            </div>

            <h1 className="max-w-3xl font-[var(--font-new-york)] text-4xl leading-[1.13] tracking-[-0.04em] sm:text-5xl lg:text-[64px]">
              Make Your Business Work{" "}
              <span className="italic text-[#A9875D]">Smarter</span> With AI
              Automation
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#657386] sm:text-lg">
              Simplify repetitive work, organise customer enquiries and
              connect everyday business processes with practical AI
              automation solutions for businesses in Virar.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
             <Link
  href="/contact?service=ai-automation"
  title="Discuss AI automation services with Sharp Rays"
  className="group inline-flex items-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24466E]"
>
  Discuss Your Workflow
  <ArrowUpRight
    size={17}
    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  />
</Link>

<Link
  href="#automation-services"
  title="Explore AI automation solutions and services"
  className="inline-flex items-center gap-2 rounded-full border border-[#D9D5CE] bg-white/80 px-7 py-4 text-sm font-semibold text-[#122847] transition hover:border-[#C6A77A]"
>
  Explore Solutions
  <ArrowRight size={16} />
</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#788393]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A9875D]" />
                Workflow-focused solutions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A9875D]" />
                Practical integrations
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A9875D]" />
                Human-guided processes
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-[#C6A77A]/25 via-white to-[#DCE7F1]/70 blur-xl" />
            <div className="relative rounded-[30px] border border-white bg-white/90 p-5 shadow-[0_30px_90px_rgba(18,40,71,0.10)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#ECE9E3] pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A9875D]">
                    Workflow overview
                  </p>
                  <h2 className="mt-2 font-[var(--font-new-york)] text-2xl">
                    Connected Business Flow
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#122847] text-[#D9BD95]">
                  <Bot size={25} />
                </div>
              </div>

              <div className="space-y-3 py-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Customer enquiry",
                    detail: "A new enquiry arrives",
                    color: "bg-[#EAF0F7] text-[#24466E]",
                  },
                  {
                    icon: Bot,
                    title: "AI-assisted processing",
                    detail: "Information is organised",
                    color: "bg-[#F5EFE5] text-[#98754B]",
                  },
                  {
                    icon: Database,
                    title: "Connected business tools",
                    detail: "Relevant records are updated",
                    color: "bg-[#EDF2EF] text-[#557B68]",
                  },
                  {
                    icon: Users,
                    title: "Team follow-up",
                    detail: "The right person takes action",
                    color: "bg-[#F1EDF6] text-[#79638F]",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title}>
                      <div className="flex items-center gap-4 rounded-2xl border border-[#EEECE7] bg-[#FFFEFC] p-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                        >
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-[#122847]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-[#87909C]">
                            {item.detail}
                          </p>
                        </div>
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-[#A9875D]"
                        />
                      </div>
                      {index !== 3 && (
                        <div className="flex h-5 items-center pl-9">
                          <div className="h-full border-l border-dashed border-[#C6A77A]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl bg-[#F7F4EE] p-4">
                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-[#A9875D]" />
                  <p className="text-xs font-semibold text-[#526174]">
                    Designed around your actual business process
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="border-y border-[#EAE5DC] bg-white px-5 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
              AI automation in Virar
            </p>
            <h2 className="mt-3 font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl">
              What can business automation actually do?
            </h2>
          </div>
          <p className="text-[15px] leading-8 text-[#687587]">
            AI automation helps businesses organise repetitive tasks using
            connected software, automated workflows and AI-powered tools.
            For businesses in Virar, this can include managing enquiries,
            organising leads, sending reminders, processing information and
            connecting existing business systems. The right solution starts
            with understanding the work your team repeats every day.
          </p>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
              The everyday problem
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Your team should not spend the whole day repeating the same
              tasks.
            </h2>
            <p className="mt-5 leading-8 text-[#738092]">
              As enquiries and daily operations grow, small manual tasks can
              become difficult to manage. Automation can help bring structure
              to the processes that slow your team down.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock3,
                title: "Repeated manual work",
                text: "The same information is entered, copied or shared across multiple places.",
              },
              {
                icon: MessageSquare,
                title: "Delayed responses",
                text: "Incoming enquiries can get missed when your team is busy with daily work.",
              },
              {
                icon: Users,
                title: "Unorganised leads",
                text: "Customer details and follow-up status may be spread across chats and spreadsheets.",
              },
              {
                icon: RefreshCw,
                title: "Inconsistent follow-ups",
                text: "Reminders and customer updates depend heavily on someone remembering each task.",
              },
              {
                icon: FileText,
                title: "Administrative workload",
                text: "Routine documentation and information processing take time away from core work.",
              },
              {
                icon: Settings2,
                title: "Disconnected tools",
                text: "Your team may need to switch between different systems to complete one process.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-[24px] border border-[#EAE6DE] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C6A77A]/60 hover:shadow-[0_18px_45px_rgba(18,40,71,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F0E8] text-[#9A7A53] transition group-hover:bg-[#122847] group-hover:text-[#E5C99F]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-6 font-[var(--font-new-york)] text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#7B8796]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="automation-services"
        className="relative bg-[#F3F0E9] px-5 py-20 sm:px-8 lg:px-16 lg:py-24"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-white/70 blur-[90px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
              What we do
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl sm:text-4xl lg:text-5xl">
              AI automation solutions built around your workflow
            </h2>
            <p className="mt-5 leading-8 text-[#748092]">
              From customer communication to internal operations, we help
              identify and build practical automation opportunities for your
              business.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const gradients = [
                "from-[#F7EDE0] to-white",
                "from-[#E8EEF6] to-white",
                "from-[#EAF1EC] to-white",
                "from-[#F0EAF4] to-white",
              ];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
                  className={`group rounded-[24px] border border-white bg-gradient-to-br ${gradients[index % gradients.length]} p-6 shadow-[0_12px_35px_rgba(18,40,71,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(18,40,71,0.09)]`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#122847] text-[#D9BD95] transition duration-300 group-hover:rotate-[-6deg] group-hover:bg-[#C6A77A] group-hover:text-[#122847]">
                    <Icon size={23} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-[var(--font-new-york)] text-xl leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-[112px] text-sm leading-7 text-[#778394]">
                    {service.description}
                  </p>
                  <div className="mt-5 border-t border-[#122847]/10 pt-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#A9875D]">
                      Possible workflows
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full border border-[#DCD8D0] bg-white/80 px-3 py-1.5 text-[10px] font-medium text-[#687587]"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
              Built for local business needs
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Automation that fits the way Virar businesses operate.
            </h2>
            <p className="mt-6 leading-8 text-[#748092]">
              Businesses around Virar West, Virar East, Global City and nearby
              areas work with different customers, services and operational
              requirements. A useful automation setup should reflect those
              differences rather than force every business into the same
              workflow.
            </p>
           <Link
  href="/locations/virar"
  title="Explore digital marketing services in Virar"
  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#9A784F] transition hover:gap-3"
>
  Explore our Virar location page
  <ArrowRight size={16} />
</Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Virar West",
                text: "Support enquiry handling and customer communication for local shops and service businesses.",
              },
              {
                title: "Virar East",
                text: "Organise customer records, follow-ups and recurring operational tasks.",
              },
              {
                title: "Global City",
                text: "Structure property-related enquiries, appointment requests and prospect communication.",
              },
              {
                title: "Agashi & Arnala",
                text: "Explore suitable enquiry and booking workflows for tourism and hospitality businesses.",
              },
            ].map((area, index) => (
              <div
                key={area.title}
                className={`rounded-[22px] border p-6 ${
                  index % 2 === 0
                    ? "border-[#E9E1D5] bg-[#F8F4ED]"
                    : "border-[#E1E7EE] bg-[#F3F6F9]"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A9875D]">
                  Local business context
                </p>
                <h3 className="mt-3 font-[var(--font-new-york)] text-2xl">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#758193]">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#122847] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9BD95]">
              The practical difference
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Less repetitive work. More organised operations.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-white/65">
              Automation is most useful when it solves a real operational
              problem. We focus on workflows that make everyday tasks easier
              to manage without removing the human touch from your business.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {automationBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-[#D9BD95]"
                />
                <p className="text-sm leading-6 text-white/85">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
              Industries we can support
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl sm:text-4xl lg:text-5xl">
              Different industries. Different automation needs.
            </h2>
            <p className="mt-5 leading-8 text-[#748092]">
              We first understand how your industry works, then identify
              suitable processes where automation can provide practical
              value.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.title}
                  className="group rounded-[22px] border border-[#EAE6DE] bg-white p-6 transition hover:border-[#C6A77A]/70 hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EFE7] text-[#9A784F] transition group-hover:bg-[#122847] group-hover:text-[#E5C99F]">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 font-[var(--font-new-york)] text-xl">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#7B8796]">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F3F0E9] px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
              How we work
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl sm:text-4xl lg:text-5xl">
              From manual process to connected workflow.
            </h2>
            <p className="mt-5 leading-8 text-[#748092]">
              A structured approach helps make sure the automation is useful,
              reliable and aligned with your business requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-[22px] border border-white bg-white/80 p-6 shadow-sm"
              >
                <span className="font-[var(--font-new-york)] text-3xl italic text-[#B89569]">
                  {item.number}
                </span>
                <div className="my-5 h-px w-full bg-[#E9E2D8]" />
                <h3 className="font-[var(--font-new-york)] text-xl leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#7B8796]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE AUTOMATION */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[30px] border border-[#E9E2D8] bg-white p-7 shadow-[0_20px_60px_rgba(18,40,71,0.045)] sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-14">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EFE7] text-[#9A784F]">
              <ShieldCheck size={27} />
            </div>
            <h2 className="mt-6 font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl">
              Automation with the right checks in place.
            </h2>
          </div>
          <div>
            <p className="leading-8 text-[#748092]">
              Not every task should be fully automated. Customer-sensitive
              communication, financial decisions and important business
              approvals may need human review. We consider access permissions,
              data handling, error scenarios and escalation paths when
              planning workflows.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Human approval where needed",
                "Clear workflow permissions",
                "Testing for common exceptions",
                "Appropriate data access controls",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[#526174]"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#A9875D]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SHARP RAYS SERVICES */}
      <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
              Beyond automation
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl sm:text-4xl">
              Build a stronger digital presence with Sharp Rays.
            </h2>
            <p className="mt-5 leading-8 text-[#748092]">
              Automation can work alongside your website, search visibility
              and marketing activities as part of a connected digital
              strategy.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SEO Services",
                text: "Improve search visibility and help relevant customers discover your business.",
                href: "/locations/virar/seo",
              },
              {
                title: "Website Development",
                text: "Create a professional website that communicates your services and supports enquiries.",
                href: "/locations/virar/website-development",
              },
              {
                title: "Social Media Marketing",
                text: "Build a consistent social presence with useful content and audience-focused communication.",
                href: "/locations/virar/social-media-marketing",
              },
              {
                title: "Performance Marketing",
                text: "Plan and manage paid campaigns around defined business objectives.",
                href: "/locations/virar/performance-marketing",
              },
              {
                title: "AI Video & Creative",
                text: "Explore AI-assisted video production and creative content workflows.",
                href: "/locations/virar/ai-video-and-creative",
              },
              {
                title: "Digital Marketing",
                text: "Explore digital growth services designed around your business requirements.",
                href: "/locations/virar",
              },
            ].map((item) => (
             <Link
  key={item.title}
  href={item.href}
  title={`Explore ${item.title} services in Virar`}
  className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E9E4DB] bg-white p-6 transition hover:-translate-y-1 hover:border-[#C6A77A]/70 hover:shadow-lg"
>
                <div>
                  <h3 className="font-[var(--font-new-york)] text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#7B8796]">
                    {item.text}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-[#A9875D] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
  href="/services"
  title="Explore all digital marketing and creative services by Sharp Rays"
  className="inline-flex items-center gap-2 text-sm font-semibold text-[#98754B] hover:gap-3"
>
              Explore all Sharp Rays services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

{/* AUTOMATION READINESS */}
<section className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

      {/* LEFT CONTENT */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A9875D]">
          Start with the right process
        </p>

        <h2 className="mt-5 font-[var(--font-new-york)] text-3xl leading-tight text-[#122847] sm:text-4xl lg:text-5xl">
          Not everything needs automation.
          <span className="block italic text-[#A9875D]">
            Start where it matters.
          </span>
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-8 text-[#748092]">
          The best automation opportunity is often a small,
          repetitive task that takes time away from important
          business activities. Identify the process first,
          then decide whether automation makes sense.
        </p>

        <Link
  href="/contact?service=ai-automation"
  title="Discuss your business automation requirements with Sharp Rays"
  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24466E]"
>
          Discuss Your Workflow
          <ArrowUpRight size={17} />
        </Link>
      </div>

      {/* RIGHT CONTENT */}
      <div className="grid gap-4 sm:grid-cols-2">

        {[
          {
            number: "01",
            icon: Clock3,
            title: "Repeated tasks",
            description:
              "Does your team perform the same manual activity every day?",
            color: "bg-[#F5EFE5]",
          },
          {
            number: "02",
            icon: MessageSquare,
            title: "Incoming enquiries",
            description:
              "Are customer messages and enquiries difficult to organise?",
            color: "bg-[#EAF0F7]",
          },
          {
            number: "03",
            icon: Database,
            title: "Scattered information",
            description:
              "Do you enter or update the same information across different tools?",
            color: "bg-[#EAF1EC]",
          },
          {
            number: "04",
            icon: Users,
            title: "Follow-up coordination",
            description:
              "Do reminders and customer follow-ups depend on manual tracking?",
            color: "bg-[#F0EAF4]",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.number}
              className="group rounded-[24px] border border-[#EAE6DE] bg-[#FCFAF7] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C6A77A]/60 hover:shadow-[0_18px_45px_rgba(18,40,71,0.07)] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} text-[#98754B]`}>
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <span className="font-[var(--font-new-york)] text-xl italic text-[#C6A77A]">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-7 font-[var(--font-new-york)] text-xl text-[#122847]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#788494]">
                {item.description}
              </p>
            </div>
          );
        })}

      </div>
    </div>

    {/* BOTTOM NOTE */}
    <div className="mt-12 flex flex-col gap-4 rounded-[22px] border border-[#E8E0D4] bg-[#F7F3EC] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#A9875D]">
          <Sparkles size={21} />
        </div>

        <div>
          <h3 className="font-[var(--font-new-york)] text-xl text-[#122847]">
            Find your first automation opportunity.
          </h3>
          <p className="mt-2 text-xs leading-6 text-[#788494]">
            Start with one clear business problem instead of automating everything at once.
          </p>
        </div>
      </div>

      <Link
  href="/contact?service=ai-automation"
  title="Contact Sharp Rays about AI automation solutions"
  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#98754B] transition hover:gap-3"
>Talk to Sharp Rays
        <ArrowUpRight size={16} />
      </Link>
    </div>

  </div>
</section>

{/* FAQ — STATIC TWO-COLUMN DESIGN */}
<section
  id="virar-ai-automation-faq"
  className="bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-8 border-b border-[#E4DED4] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
          Frequently asked questions
        </p>

        <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] text-[#0B2A52] sm:text-5xl">
          Questions about
          <span className="block italic text-[#A78354]">
            AI automation.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
        Useful answers about AI automation, business workflows and practical
        automation solutions for businesses in Virar.
      </p>
    </div>

    <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
      {faqs.map((faq, i) => (
        <article
          key={faq.question}
          className="h-full border-b border-[#E4DED4] py-7"
        >
          <div className="flex items-start gap-4">
            <span className="shrink-0 font-[var(--font-new-york)] text-2xl italic text-[#C6A77A]">
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
      ))}
    </div>
  </div>
</section>


      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#122847] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-28 h-72 w-72 rounded-full bg-[#C6A77A]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-[#53769B]/30 blur-[90px]" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#E5C99F]">
              <Sparkles size={26} />
            </div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#D9BD95]">
              Start with one smarter workflow
            </p>
            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Ready to simplify the way your business works?
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/65">
              Tell us about the repetitive tasks, customer enquiries or
              processes you want to improve. We will help you explore a
              practical automation approach.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
  href="/contact?service=ai-automation"
  title="Discuss your AI automation project with Sharp Rays"
  className="inline-flex items-center gap-3 rounded-full bg-[#D9BD95] px-7 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>
              <Link
  href="/locations/virar"
  title="Explore all Sharp Rays digital marketing services in Virar"
  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
>
                Explore Virar Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
