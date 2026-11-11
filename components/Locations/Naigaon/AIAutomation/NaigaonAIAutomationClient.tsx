
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Workflow,
  MessageSquare,
  Users,
  Database,
  FileText,
  Bell,
  Check,
  ShieldCheck,
  Zap,
  Building2,
  Store,
  BriefcaseBusiness,
  Headset,
  ClipboardList,
  Network,
} from "lucide-react";

/* ---------------------------------
   REVEAL ANIMATION
---------------------------------- */

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
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
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------
   SECTION HEADING
---------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[780px]`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A88659]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-[1.15] tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-[48px]">
        {title}
      </h2>

      {copy && (
        <p className="mt-5 text-[13px] leading-[1.95] text-[#718092] sm:text-sm">
          {copy}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------
   AUTOMATION SERVICES
---------------------------------- */

const services = [
  {
    icon: Workflow,
    number: "01",
    title: "Workflow Automation",
    description:
      "Connect repetitive business activities into structured workflows that move information and tasks between systems.",
    examples: [
      "Form-to-sheet workflows",
      "Task creation",
      "Automated notifications",
    ],
  },
  {
    icon: Users,
    number: "02",
    title: "Lead Capture & Qualification",
    description:
      "Capture incoming enquiries, organise lead information and route potential customers to the appropriate person.",
    examples: [
      "Lead classification",
      "Enquiry routing",
      "Lead notifications",
    ],
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "WhatsApp & Email Automation",
    description:
      "Support routine customer communication with structured replies, notifications and follow-up workflows.",
    examples: [
      "Enquiry acknowledgements",
      "Follow-up sequences",
      "Email notifications",
    ],
  },
  {
    icon: Database,
    number: "04",
    title: "CRM Automation",
    description:
      "Reduce manual data entry by connecting enquiry forms, customer records and sales processes.",
    examples: [
      "Contact creation",
      "CRM updates",
      "Pipeline notifications",
    ],
  },
  {
    icon: Bot,
    number: "05",
    title: "AI-Powered Workflows",
    description:
      "Use AI where information needs to be interpreted, classified, summarised or organised before the next action.",
    examples: [
      "AI classification",
      "Text summarisation",
      "Information extraction",
    ],
  },
  {
    icon: FileText,
    number: "06",
    title: "Document Processing",
    description:
      "Structure information from incoming documents and move it into the systems your team already uses.",
    examples: [
      "Form processing",
      "Document extraction",
      "Information organisation",
    ],
  },
  {
    icon: ClipboardList,
    number: "07",
    title: "Reporting & Data Automation",
    description:
      "Reduce repetitive reporting work by collecting information and preparing structured summaries.",
    examples: [
      "Scheduled reports",
      "Data consolidation",
      "Performance summaries",
    ],
  },
  {
    icon: Bell,
    number: "08",
    title: "Internal Task Automation",
    description:
      "Create clearer internal processes for assigning tasks, sending alerts and managing recurring activities.",
    examples: [
      "Task assignment",
      "Deadline alerts",
      "Approval notifications",
    ],
  },
];

/* ---------------------------------
   INDUSTRIES AND USE CASES
---------------------------------- */

const useCases = [
  {
    icon: Store,
    title: "Local Shops & Retail",
    description:
      "Organise product enquiries, customer requests, order notifications and routine follow-ups.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property",
    description:
      "Capture property enquiries, categorise requirements, notify sales teams and organise follow-ups.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Streamline consultation requests, appointment enquiries, client onboarding and document collection.",
  },
  {
    icon: Headset,
    title: "Customer Support Teams",
    description:
      "Classify incoming requests, suggest responses and route issues that require human attention.",
  },
  {
    icon: Network,
    title: "Startups & Growing Teams",
    description:
      "Connect forms, spreadsheets, CRM platforms and internal communication workflows as operations grow.",
  },
  {
    icon: Database,
    title: "Education & Healthcare Administration",
    description:
      "Organise routine enquiries, information requests, reminders and administrative workflows with suitable privacy controls.",
  },
];

/* ---------------------------------
   WORKFLOW STEPS
---------------------------------- */

const workflowSteps = [
  {
    number: "01",
    title: "Trigger",
    description:
      "An event starts the workflow, such as a website form submission, incoming message or updated record.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "The workflow collects relevant information and applies defined rules or AI-assisted classification.",
  },
  {
    number: "03",
    title: "Decide",
    description:
      "Conditions determine the next action, destination or human review requirement.",
  },
  {
    number: "04",
    title: "Act",
    description:
      "The workflow updates a system, creates a task, sends an approved notification or routes information.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Exceptions and sensitive decisions can be sent to a person for confirmation.",
  },
];

/* ---------------------------------
   OUR PROCESS
---------------------------------- */

const process = [
  {
    number: "01",
    title: "Understand the Process",
    description:
      "We discuss how the task currently works, who handles it and where delays or repetitive work occur.",
  },
  {
    number: "02",
    title: "Map the Workflow",
    description:
      "We identify triggers, information, connected tools, decisions, exceptions and required approvals.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We configure the agreed workflow, integrations, automation rules and AI-assisted steps where useful.",
  },
  {
    number: "04",
    title: "Test & Validate",
    description:
      "We test normal inputs, edge cases, failure paths and human review points before launch.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We launch the agreed workflow, provide documentation and support it for the included period.",
  },
];

/* ---------------------------------
   PRICING
---------------------------------- */

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    label: "Focused Automation",
    description: "For businesses automating one repetitive process.",
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
    price: "₹29,999",
    label: "Connected Automation",
    description: "For businesses connecting multiple workflows.",
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
    price: "₹49,999",
    label: "Advanced Automation",
    description: "For businesses building a broader automation system.",
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
];

/* ---------------------------------
   FAQS
---------------------------------- */

const faqs = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation combines artificial intelligence with workflow technology to help interpret information, classify requests, summarise data and coordinate repetitive business processes with less manual effort.",
  },
  {
    question: "What AI automation services does Sharp Rays offer in Naigaon?",
    answer:
      "Sharp Rays offers workflow automation, lead capture and qualification, CRM automation, WhatsApp and email workflows, AI-assisted information processing, document processing, reporting and internal task automation. The right scope depends on your process and existing tools.",
  },
  {
    question: "Can you automate WhatsApp enquiries?",
    answer:
      "WhatsApp workflows can support enquiry acknowledgements, approved responses, lead routing and follow-up processes. Implementation depends on the WhatsApp platform, API access, business requirements and applicable messaging rules. WhatsApp charges may apply separately.",
  },
  {
    question: "Can AI automation help small businesses?",
    answer:
      "Yes. A small business can start with one clearly defined repetitive task, such as capturing enquiries, updating a spreadsheet, assigning a lead or sending an internal notification. The workflow should be tested before expanding it.",
  },
  {
    question: "Can you connect automation with our existing CRM?",
    answer:
      "Where supported, workflows can connect with existing CRM platforms through native integrations, APIs or webhooks. We first review the platform, available access and the information that needs to move between systems.",
  },
  {
    question: "Will AI automation replace employees?",
    answer:
      "Our approach is to reduce unnecessary repetitive work, not remove human judgement. Sensitive communication, uncertain requests, approvals and important business decisions can remain under human control.",
  },
  {
    question: "Is AI automation secure?",
    answer:
      "Security depends on the systems, permissions, data types and integrations involved. We consider access controls, data handling, platform policies and human review requirements during workflow planning.",
  },
  {
    question: "How much do AI automation services in Naigaon cost?",
    answer:
      "The packages shown on this page start at ₹14,999 for Starter, ₹29,999 for Growth and ₹49,999 for Scale. Optional Automation Care starts from ₹4,999 per month. Final pricing depends on workflow complexity and integrations.",
  },
  {
    question: "Are software and WhatsApp charges included?",
    answer:
      "Automation platforms, AI usage, APIs, WhatsApp message charges and other third-party software costs are paid separately unless specifically included in your written proposal.",
  },
  {
    question: "How long does an automation project take?",
    answer:
      "Timelines depend on the number of workflows, integration availability, access permissions, testing requirements and process complexity. We confirm the timeline after reviewing the requirements.",
  },
  {
    question: "Can automation work with spreadsheets?",
    answer:
      "Yes. Supported spreadsheet workflows can capture information, update rows, organise records, create notifications and connect spreadsheet data with other business tools.",
  },
  {
    question: "Do we need to change our existing software?",
    answer:
      "Not necessarily. We first review the tools you already use and check whether they support suitable integrations, APIs or webhooks. A software change is only considered if a required workflow cannot be implemented reliably with the existing setup.",
  },
  {
    question: "What is Automation Care?",
    answer:
      "Automation Care is optional ongoing support starting from ₹4,999 per month. It can include monitoring, error checks, minor workflow changes and optimisation after the included post-launch support period.",
  },
];

/* =================================
   MAIN PAGE
================================== */

export default function NaigaonAIAutomationClient() {
  const structuredFaqs = {
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
          __html: JSON.stringify(structuredFaqs),
        }}
      />

      {/* 01 — HERO */}

      <section className="relative isolate overflow-hidden bg-[#FCFAF7] px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#122847]/10 bg-white px-4 py-2 text-xs tracking-wide text-[#667085]">
              <Bot size={14} className="text-[#A88659]" />
              AI Automation Services · Naigaon
            </div>

            <h1 className="max-w-3xl font-[var(--font-new-york)] text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              AI Automation for{" "}
              <span className="font-serif italic text-[#A88659]">
                Naigaon
              </span>{" "}
              Businesses
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Spend less time on repetitive tasks. Connect lead capture,
              customer communication, CRM updates and everyday business
              workflows with practical automation designed around how your
              team works.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?service=ai-automation"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#203B5D]"
              >
                Discuss Your Workflow
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/services/ai-automation"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D8CBB9] bg-white px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#B79A72]"
              >
                Explore AI Automation
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#718092]">
              {[
                "Practical workflows",
                "Connected systems",
                "Human oversight",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#B79A72]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative mx-auto max-w-[490px]">
              <div className="absolute -inset-5 rounded-full bg-[#B79A72]/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-[#E5DDD3] bg-white p-6 shadow-[0_25px_80px_rgba(18,40,71,0.08)] sm:p-8">
                <div className="flex items-center justify-between border-b border-[#EEE8E0] pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                      AUTOMATION WORKFLOW
                    </p>
                    <h2 className="mt-2 font-[var(--font-new-york)] text-xl text-[#122847]">
                      From enquiry to action
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F0E9]">
                    <Bot size={23} className="text-[#A88659]" />
                  </div>
                </div>

                <div className="relative mt-7 space-y-3">
                  <div className="absolute bottom-8 left-[25px] top-8 w-px bg-[#E5DDD3]" />

                  {[
                    {
                      number: "01",
                      title: "New enquiry received",
                      detail: "Website form or customer message",
                      Icon: MessageSquare,
                    },
                    {
                      number: "02",
                      title: "Information organised",
                      detail: "Details collected and categorised",
                      Icon: Database,
                    },
                    {
                      number: "03",
                      title: "Lead routed to the team",
                      detail: "Relevant person gets notified",
                      Icon: Users,
                    },
                    {
                      number: "04",
                      title: "Follow-up task created",
                      detail: "Next action is ready to review",
                      Icon: Bell,
                    },
                  ].map((step) => {
                    const Icon = step.Icon;

                    return (
                      <div
                        key={step.number}
                        className="relative flex items-center gap-4 rounded-2xl border border-[#EEE8E0] bg-white p-4 transition hover:border-[#D4C1A6]"
                      >
                        <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E5DDD3] bg-[#FAF8F5]">
                          <Icon size={17} className="text-[#A88659]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[9px] tracking-[0.12em] text-[#B79A72]">
                              {step.number}
                            </span>
                            <h3 className="text-xs font-semibold text-[#122847]">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-1 text-[10px] leading-relaxed text-[#8995A3]">
                            {step.detail}
                          </p>
                        </div>

                        <Check
                          size={15}
                          className="shrink-0 text-[#B79A72]"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#EEE8E0] pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
                    <span className="text-[10px] text-[#718092]">
                      Structured workflow concept
                    </span>
                  </div>
                  <Workflow size={17} className="text-[#B79A72]" />
                </div>

                <p className="mt-4 text-[9px] leading-[1.8] text-[#9AA3AD]">
                  Illustrative workflow. Actual automation steps depend on
                  your tools, integrations and project requirements.
                </p>
              </div>

              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-[#E5DDD3] bg-white px-4 py-3 shadow-lg sm:-left-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5F0E9]">
                  <Zap size={17} className="text-[#A88659]" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#122847]">
                    Smarter workflows
                  </p>
                  <p className="mt-1 text-[9px] text-[#8995A3]">
                    Less repetitive work
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="rounded-[2rem] border border-[#E9E1D7] bg-[#FCFAF7] p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A88659]">
                AI AUTOMATION SERVICES IN NAIGAON
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-2xl leading-snug text-[#122847] sm:text-3xl">
                Make everyday business processes easier to manage.
              </h2>

              <p className="mt-5 text-[13px] leading-[2] text-[#64758A] sm:text-sm">
                Sharp Rays provides AI automation services for businesses in
                Naigaon, helping organise repetitive activities such as lead
                capture, enquiry routing, CRM updates, customer follow-ups,
                document handling and reporting. We map the existing process,
                identify suitable tools and build workflows with testing and
                human review where required. The objective is to reduce
                unnecessary manual work while keeping people in control of
                important decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — BUSINESS PROBLEMS */}

      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="THE EVERYDAY BOTTLENECK"
              title={
                <>
                  Your team has work to do.
                  <br />
                  <span className="font-serif italic text-[#A88659]">
                    Not the same task to repeat.
                  </span>
                </>
              }
              copy="When information moves manually between messages, spreadsheets, forms and business tools, small tasks can consume a surprising amount of attention."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "New enquiries",
                "Reading every enquiry and deciding who should respond.",
              ],
              [
                "Manual data entry",
                "Copying customer information between forms and spreadsheets.",
              ],
              [
                "Missed follow-ups",
                "Remembering which lead needs a reminder or next action.",
              ],
              [
                "Disconnected tools",
                "Switching between platforms to update the same information.",
              ],
              [
                "Routine reporting",
                "Collecting information and preparing recurring summaries.",
              ],
              [
                "Internal coordination",
                "Sending updates and assigning tasks manually.",
              ],
            ].map(([title, description], index) => (
              <Reveal key={title}>
                <article className="group h-full rounded-2xl border border-[#E8E1D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E9] font-[var(--font-new-york)] text-sm text-[#B79A72]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 font-[var(--font-new-york)] text-xl text-[#122847]">
                    {title}
                  </h3>

                  <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — AUTOMATION SERVICES */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="WHAT WE CAN AUTOMATE"
              title={
                <>
                  Connect the work that happens{" "}
                  <span className="font-serif italic text-[#A88659]">
                    between your systems.
                  </span>
                </>
              }
              copy="Automation should solve a real process problem. Explore the types of workflows that can be designed around your business requirements."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number}>
                  <article className="group flex h-full flex-col rounded-2xl border border-[#E7DED2] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5F0E9] transition group-hover:bg-[#122847]">
                        <Icon
                          size={22}
                          strokeWidth={1.5}
                          className="text-[#A88659] transition group-hover:text-[#C6A77A]"
                        />
                      </div>

                      <span className="text-[10px] tracking-[0.15em] text-[#B79A72]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-xl text-[#122847]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2 rounded-xl bg-[#FCFAF7] p-4">
                      {service.examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-2 text-[11px] text-[#52647A]"
                        >
                          <Check
                            size={13}
                            className="mt-0.5 shrink-0 text-[#B79A72]"
                          />
                          {example}
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

      {/* 05 — LOCAL BUSINESS USE CASES */}

      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="AUTOMATION BY BUSINESS TYPE"
              title={
                <>
                  Different businesses.
                  <br />
                  <span className="font-serif italic text-[#A88659]">
                    Different bottlenecks.
                  </span>
                </>
              }
              copy="For businesses around Naigaon East, Naigaon West, the station area and nearby localities, the right automation depends on the work that currently takes the most manual effort."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <article className="flex h-full gap-5 rounded-2xl border border-[#E5DDD3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)] sm:p-7">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E9]">
                      <Icon size={21} className="text-[#A88659]" />
                    </div>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-xl text-[#122847]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
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

      {/* 06 — HOW AUTOMATION WORKS */}

      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="HOW A SMART WORKFLOW WORKS"
              title={
                <>
                  From trigger to{" "}
                  <span className="font-serif italic text-[#C6A77A]">
                    completed action.
                  </span>
                </>
              }
              copy="A useful automation should make a process easier to follow, test and manage—not introduce unnecessary complexity."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <Reveal key={step.number}>
                <article className="h-full rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition hover:border-[#C6A77A]/50 hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-[var(--font-new-york)] text-lg text-[#C6A77A]">
                    {step.number}
                  </span>

                  <h3 className="mt-6 font-[var(--font-new-york)] text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-[1.9] text-white/60">
                    {step.description}
                  </p>

                  {index !== workflowSteps.length - 1 && (
                    <ArrowRight
                      size={17}
                      className="mt-6 hidden text-[#C6A77A] lg:block"
                    />
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-[2rem] border border-white/15 bg-white/[0.05] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B79A72]/15">
                  <ShieldCheck
                    size={29}
                    className="text-[#C6A77A]"
                  />
                </div>

                <div>
                  <h3 className="font-[var(--font-new-york)] text-xl">
                    Human judgement stays in the workflow.
                  </h3>

                  <p className="mt-2 text-xs leading-[1.9] text-white/60">
                    Sensitive communication, uncertain requests, approvals and
                    high-impact actions can be routed for human review instead
                    of being executed automatically.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — OUR PROCESS */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="THE SHARP RAYS APPROACH"
              title={
                <>
                  Map. Simplify. Connect.{" "}
                  <span className="font-serif italic text-[#A88659]">
                    Automate.
                  </span>
                </>
              }
              copy="We begin by understanding how your business currently works. Then we identify what should change before building an automation around it."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <Reveal key={step.number}>
                <article className="h-full rounded-2xl border border-[#E5DDD3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,40,71,0.06)]">
                  <span className="font-[var(--font-new-york)] text-3xl text-[#B79A72]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-[1.9] text-[#718092]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — WHY SHARP RAYS */}

      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="A PROCESS-FIRST APPROACH"
              title={
                <>
                  Good automation starts{" "}
                  <span className="font-serif italic text-[#A88659]">
                    before the tools.
                  </span>
                </>
              }
              copy="Choosing an automation platform is not the first step. Understanding the task, information, people and exceptions is what makes the workflow useful."
            />
          </Reveal>

          <Reveal>
            <div className="rounded-[2rem] border border-[#E5DDD3] bg-white p-7 sm:p-9">
              <div className="space-y-6">
                {[
                  [
                    "Start with the actual problem",
                    "Identify repetitive work and the reason it needs attention.",
                  ],
                  [
                    "Work with suitable existing tools",
                    "Review available integrations before recommending a new platform.",
                  ],
                  [
                    "Test before relying on it",
                    "Check normal inputs, unusual cases and failure paths.",
                  ],
                  [
                    "Keep people in control",
                    "Include approval and escalation points where judgement matters.",
                  ],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className="flex gap-4 border-b border-[#E3D9CC] pb-5 last:border-0 last:pb-0"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F0E9] font-[var(--font-new-york)] text-sm text-[#B79A72]">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-[var(--font-new-york)] text-lg text-[#122847]">
                        {title}
                      </h3>

                      <p className="mt-2 text-xs leading-[1.9] text-[#718092]">
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

      {/* 09 — PRICING */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="AI AUTOMATION PRICING"
              title={
                <>
                  Start with one workflow.
                  <br />
                  <span className="font-serif italic text-[#A88659]">
                    Build from there.
                  </span>
                </>
              }
              copy="Project-based automation packages for businesses that want to reduce repetitive work, connect systems and improve everyday operations."
              center
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <Reveal key={plan.name}>
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
                      plan.featured
                        ? "text-[#C6A77A]"
                        : "text-[#A88659]"
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

                      <span className="text-[10px] opacity-60">
                        one-time
                      </span>
                    </div>

                    <p className="mt-3 text-xs opacity-75">
                      {plan.scope}
                    </p>
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
                    className={`mt-8 flex items-center justify-center gap-3 rounded-full px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
                      plan.featured
                        ? "bg-[#C6A77A] text-[#122847] hover:bg-white"
                        : "bg-[#122847] text-white hover:bg-[#203B5D]"
                    }`}
                  >
                    View Package Details
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E5DDD3] bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E9]">
                <Workflow size={21} className="text-[#A88659]" />
              </div>

              <p className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                Automation Care
              </p>

              <p className="mt-2 text-xs leading-[1.9] text-[#718092]">
                Optional ongoing monitoring, error checks, minor workflow
                changes and optimisation after the included support period.
              </p>

              <p className="mt-3 text-sm font-semibold text-[#122847]">
                From ₹4,999/month
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5DDD3] bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F0E9]">
                <Database size={21} className="text-[#A88659]" />
              </div>

              <p className="mt-5 font-[var(--font-new-york)] text-xl text-[#122847]">
                Third-party costs
              </p>

              <p className="mt-2 text-xs leading-[1.9] text-[#718092]">
                Automation platforms, AI usage, APIs, WhatsApp message charges
                and other external software costs are separate unless
                specifically included in your proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — RELATED SERVICES */}

      <section className="bg-[#F2F0EA] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="CONNECTED DIGITAL SERVICES"
              title={
                <>
                  Automation works better{" "}
                  <span className="font-serif italic text-[#A88659]">
                    with the right foundation.
                  </span>
                </>
              }
              copy="Explore other Sharp Rays services that can support your website, lead generation and customer communication."
            />
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Website Development",
                "/services/website-development",
              ],
              [
                "Performance Marketing",
                "/services/performance-marketing",
              ],
              [
                "Social Media Marketing",
                "/services/social-media-marketing",
              ],
              [
                "Search Engine Optimization",
                "/services/search-engine-optimization",
              ],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="group flex items-center justify-between rounded-2xl border border-[#E5DDD3] bg-white p-5 text-sm text-[#122847] transition hover:-translate-y-1 hover:border-[#B79A72] hover:shadow-md"
              >
                <span>{label}</span>

                <ArrowUpRight
                  size={16}
                  className="text-[#B79A72] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <Link
              href="/locations/naigaon"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#8D704C] hover:text-[#122847]"
            >
              Explore all services for Naigaon
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 11 — FAQ */}

      <section
        className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-ai-automation-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              Questions Before You Automate
            </p>

            <h2
              id="naigaon-ai-automation-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
            >
              Frequently Asked{" "}
              <span className="font-serif italic text-[#A88659]">
                Questions.
              </span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Clear answers about AI automation, business workflows,
              integrations, pricing and human oversight.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question}>
                <article className="flex h-full gap-4 rounded-2xl border border-[#E5DDD3] bg-white p-6 sm:p-7">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-[#FCFAF7] font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
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

      {/* 12 — FINAL CTA */}

      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            YOUR NEXT STEP
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Stop spending human time{" "}
            <span className="font-serif italic text-[#C6A77A]">
              on repetitive work.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Tell us which task your team repeats every day. We’ll help you
            explore whether a practical automation workflow can make that
            process easier to manage.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?service=ai-automation"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
            >
              Discuss Your Automation Project
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
            Sharp Rays · AI Automation Services · Naigaon, Maharashtra
          </p>
        </Reveal>
      </section>
    </main>
  );
}
