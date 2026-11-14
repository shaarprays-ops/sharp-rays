
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
  Target as TargetIcon,
  ShieldCheck,
  Zap,
  Building2,
  Store,
  BriefcaseBusiness,
  Headset,
  ClipboardList,
  Network,
  Settings2,
  GitBranch,
  Clock3,
  RefreshCw,
} from "lucide-react";

/* =========================================================
   REVEAL ANIMATION
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
   SECTION HEADING
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
    <div className={center ? "mx-auto max-w-[780px] text-center" : "max-w-[780px]"}>
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A38561]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[var(--font-new-york)] text-[30px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[39px] lg:text-[46px]">
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
   AUTOMATION SERVICES
========================================================= */

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
    accent: "#668AA5",
    tint: "#EEF3F8",
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
    accent: "#8E79AE",
    tint: "#F2EFF8",
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
    accent: "#AD728C",
    tint: "#F7EFF1",
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
    accent: "#609286",
    tint: "#EDF5F1",
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
    accent: "#B18B5F",
    tint: "#F7F1E8",
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
    accent: "#7887A9",
    tint: "#F0F2F8",
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
    accent: "#AD895D",
    tint: "#F8F0E5",
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
    accent: "#609286",
    tint: "#EDF6F3",
  },
];

/* =========================================================
   BHAYANDAR BUSINESS USE CASES
========================================================= */

const useCases = [
  {
    icon: Store,
    number: "01",
    title: "Bhayandar West Shops & Retail",
    description:
      "Organise product enquiries, customer requests, order notifications and routine follow-ups. Suitable workflows can connect enquiry forms, spreadsheets and supported business tools.",
  },
  {
    icon: Building2,
    number: "02",
    title: "Navghar Business Operations",
    description:
      "Organise incoming business enquiries, internal task assignments, document collection and routine status updates for businesses with recurring administrative processes.",
  },
  {
    icon: BriefcaseBusiness,
    number: "03",
    title: "Professional Services",
    description:
      "Streamline consultation requests, appointment enquiries, client onboarding, document collection and internal notifications.",
  },
  {
    icon: Headset,
    number: "04",
    title: "Uttan Road Hospitality Businesses",
    description:
      "Structure booking enquiries, guest information, approved acknowledgements and follow-up reminders, subject to the booking tools and messaging access available.",
  },
  {
    icon: Network,
    number: "05",
    title: "Startups & Growing Teams",
    description:
      "Connect forms, spreadsheets, CRM platforms and internal communication workflows as operations and enquiry volumes grow.",
  },
  {
    icon: Database,
    number: "06",
    title: "Service & Administration Teams",
    description:
      "Organise routine requests, information updates, reminders, reports and administrative workflows with suitable access and privacy controls.",
  },
];

/* =========================================================
   WORKFLOW STEPS
========================================================= */

const workflowSteps = [
  {
    number: "01",
    title: "Trigger",
    description:
      "An event starts the workflow, such as a website form submission, incoming message or updated record.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Understand",
    description:
      "The workflow collects relevant information and applies defined rules or AI-assisted classification.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Decide",
    description:
      "Conditions determine the next action, destination or human review requirement.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Act",
    description:
      "The workflow updates a system, creates a task, sends an approved notification or routes information.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Review",
    description:
      "Exceptions and sensitive decisions can be sent to a person for confirmation.",
    icon: ShieldCheck,
  },
];

/* =========================================================
   OUR PROCESS
========================================================= */

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

/* =========================================================
   PRICING — EXISTING AI AUTOMATION PACKAGES
========================================================= */

const plans = [
  {
    name: "Starter",
    price: "₹14,999",
    label: "Focused Automation",
    description:
      "For businesses automating one repetitive process.",
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
    description:
      "For businesses connecting multiple workflows.",
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
    description:
      "For businesses building a broader automation system.",
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

/* =========================================================
   FAQS
========================================================= */

const faqs = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation combines artificial intelligence with workflow technology to help interpret information, classify requests, summarise data and coordinate repetitive business processes with less manual effort.",
  },
  {
    question:
      "What AI automation services does Sharp Rays offer in Bhayandar?",
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
    question: "How much do AI automation services in Bhayandar cost?",
    answer:
      "The AI automation packages are Starter at ₹14,999, Growth at ₹29,999 and Scale at ₹49,999. Optional Automation Care starts from ₹4,999 per month. Final pricing depends on workflow complexity and integrations.",
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

/* =========================================================
   STRUCTURED DATA
========================================================= */

function BhayandarAIAutomationStructuredData() {
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

export default function BhayandarAIAutomationPageClient() {
  return (
    <>
      <BhayandarAIAutomationStructuredData />

      {/* =================================================
          01. HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-[#FAF8F5] px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[480px] w-[480px] rounded-full border border-[#B79A72]/15" />
        <div className="pointer-events-none absolute -right-16 top-10 h-[340px] w-[340px] rounded-full border border-[#B79A72]/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-[#EDE5D9]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1220px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B79A72]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A38561]">
                AI AUTOMATION · BHAYANDAR
              </p>
            </div>

            <h1 className="max-w-[720px] font-[var(--font-new-york)] text-[40px] font-medium leading-[1.1] tracking-[-0.045em] text-[#122847] sm:text-[52px] lg:text-[62px]">
              AI Automation Services for{" "}
              <span className="text-[#B79A72]">
                Bhayandar Businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] text-[13px] leading-[2] text-[#68788A] sm:text-[14px]">
              Spend less time on repetitive tasks. Connect lead capture,
              customer communication, CRM updates and everyday business
              workflows with practical automation designed around how
              your team works.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact?service=ai-automation"
                title="Discuss AI automation for your Bhayandar business"
                className="inline-flex items-center gap-3 rounded-full bg-[#122847] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#203B5D]"
              >
                Discuss Your Workflow
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/services/ai-automation"
                title="Explore Sharp Rays AI automation services"
                className="inline-flex items-center gap-3 rounded-full border border-[#D8CBB9] bg-white px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#122847] transition hover:border-[#B79A72]"
              >
                Explore AI Automation
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[10px] text-[#718092]">
              {[
                "Practical workflows",
                "Connected systems",
                "Human oversight",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={13} className="text-[#B79A72]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-5 rounded-full bg-[#E8DED0]/40 blur-3xl" />

              <div className="relative rounded-[18px] border border-[#E5DDD3] bg-white p-5 shadow-[0_25px_80px_rgba(18,40,71,0.08)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#EEE8E0] pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                      AUTOMATION WORKFLOW
                    </p>
                    <h2 className="mt-2 font-[var(--font-new-york)] text-[22px] text-[#122847]">
                      From enquiry to action.
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F0E9]">
                    <Bot size={22} className="text-[#A38561]" />
                  </div>
                </div>

                <div className="relative mt-6 space-y-3">
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
                        className="relative flex items-center gap-4 rounded-xl border border-[#EEE8E0] bg-white p-4 transition hover:border-[#D4C1A6]"
                      >
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5DDD3] bg-[#FAF8F5]">
                          <Icon size={16} className="text-[#A38561]" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] tracking-[0.12em] text-[#B79A72]">
                              {step.number}
                            </span>
                            <h3 className="text-[11px] font-semibold text-[#122847]">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-1 text-[9px] leading-relaxed text-[#8995A3]">
                            {step.detail}
                          </p>
                        </div>

                        <Check
                          size={14}
                          className="shrink-0 text-[#B79A72]"
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#EEE8E0] pt-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
                    <span className="text-[9px] text-[#718092]">
                      Illustrative workflow
                    </span>
                  </div>
                  <Workflow size={17} className="text-[#B79A72]" />
                </div>

                <p className="mt-3 text-[9px] leading-[1.8] text-[#9AA3AD]">
                  Actual workflow steps depend on your tools,
                  integrations and project requirements.
                </p>
              </div>

              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-[#E5DDD3] bg-white px-4 py-3 shadow-lg sm:-left-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F0E9]">
                  <Zap size={16} className="text-[#A38561]" />
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

      {/* =================================================
          02. DIRECT ANSWER
      ================================================= */}

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <Reveal className="mx-auto max-w-[1050px]">
          <div className="grid gap-6 border-y border-[#E8DED1] py-8 md:grid-cols-[230px_1fr] md:gap-12">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                A Clear Answer
              </p>

              <h2 className="mt-3 font-[var(--font-new-york)] text-[22px] leading-tight text-[#122847]">
                What does AI automation include?
              </h2>
            </div>

            <p className="text-[12px] leading-[2] text-[#718092] sm:text-[13px]">
              AI automation combines artificial intelligence with
              workflow technology to help businesses organise information
              and coordinate repetitive processes. Sharp Rays provides
              AI automation services for Bhayandar businesses, including
              lead capture, enquiry routing, CRM updates, WhatsApp and
              email workflows, document processing, reporting and
              internal task automation. We first review the existing
              process and tools, then plan suitable integrations,
              testing and human review requirements.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =================================================
          03. BUSINESS CHALLENGES
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="THE EVERYDAY BOTTLENECK"
              title="Your team has work to do."
              highlight="Not the same task to repeat."
              description="When information moves manually between messages, spreadsheets, forms and business tools, small tasks can consume a surprising amount of attention."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "New enquiries",
                description:
                  "Reading every enquiry and deciding who should respond.",
                icon: MessageSquare,
              },
              {
                title: "Manual data entry",
                description:
                  "Copying customer information between forms and spreadsheets.",
                icon: Database,
              },
              {
                title: "Missed follow-ups",
                description:
                  "Remembering which lead needs a reminder or next action.",
                icon: Clock3,
              },
              {
                title: "Disconnected tools",
                description:
                  "Switching between platforms to update the same information.",
                icon: Network,
              },
              {
                title: "Routine reporting",
                description:
                  "Collecting information and preparing recurring summaries.",
                icon: ClipboardList,
              },
              {
                title: "Internal coordination",
                description:
                  "Sending updates, assigning tasks and tracking routine work manually.",
                icon: Users,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="h-full rounded-[15px] border border-[#E8E1D8] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D7C4AA]">
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-new-york)] text-[25px] text-[#D2C1AA]">
                        0{index + 1}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                        <Icon size={18} />
                      </span>
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-[20px] text-[#122847]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-[#718092]">
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
          04. AUTOMATION SERVICES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="WHAT WE CAN AUTOMATE"
              title="Connect the work that happens"
              highlight="between your systems."
              description="Automation should solve a real process problem. Explore the types of workflows that can be designed around your business requirements."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} delay={index * 0.04}>
                  <article
                    className="flex h-full flex-col rounded-[15px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-32px_rgba(18,40,71,.24)]"
                    style={{
                      borderColor: `${service.accent}35`,
                      backgroundColor: service.tint,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        style={{ color: service.accent }}
                      />
                      <span
                        className="font-[var(--font-new-york)] text-[22px]"
                        style={{ color: `${service.accent}B0` }}
                      >
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-[19px] leading-snug text-[#122847]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-[#718092]">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-white/80 pt-5">
                      {service.examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-2 text-[10px] leading-relaxed text-[#52647A]"
                        >
                          <Check
                            size={13}
                            className="mt-0.5 shrink-0"
                            style={{ color: service.accent }}
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

      {/* =================================================
          05. LOCAL BUSINESS USE CASES
      ================================================= */}

      <section className="bg-[#F5F1EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
            <Reveal>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                Automation Around Bhayandar
              </p>

              <h2 className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[42px]">
                Different businesses.
                <span className="block text-[#B79A72]">
                  Different bottlenecks.
                </span>
              </h2>

              <p className="mt-5 text-[12px] leading-[2] text-[#718092]">
                A shop, hospitality business, professional service
                provider and growing company do not follow the same
                processes. We consider the actual work, existing tools
                and handover points before recommending automation.
              </p>
            </Reveal>

            <div className="space-y-4">
              {useCases.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} delay={index * 0.06}>
                    <article className="flex gap-4 rounded-[15px] border border-[#E5DACA] bg-white p-5 sm:gap-6 sm:p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                        <Icon size={20} />
                      </div>

                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#B79A72]">
                          {item.number}
                        </span>

                        <h3 className="mt-1 font-[var(--font-new-york)] text-[20px] text-[#122847]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-[1.9] text-[#718092]">
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
          06. HOW AUTOMATION WORKS
      ================================================= */}

      <section className="bg-[#122847] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <div className="max-w-[780px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
                HOW A SMART WORKFLOW WORKS
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-[30px] leading-[1.2] tracking-[-0.035em] text-white sm:text-[40px] lg:text-[46px]">
                From trigger to{" "}
                <span className="text-[#C6A77A]">
                  completed action.
                </span>
              </h2>

              <p className="mt-5 text-[12px] leading-[1.95] text-white/65 sm:text-[13px]">
                A useful automation should make a process easier to
                follow, test and manage—not introduce unnecessary
                complexity.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={index * 0.05}>
                  <article className="h-full border-t border-white/20 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-new-york)] text-[30px] text-[#C6A77A]">
                        {step.number}
                      </span>
                      <Icon size={20} className="text-[#C6A77A]" />
                    </div>

                    <h3 className="mt-5 font-[var(--font-new-york)] text-[22px]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-white/60">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-14 rounded-[15px] border border-white/15 bg-white/[0.04] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <ShieldCheck
                  size={30}
                  className="shrink-0 text-[#C6A77A]"
                />

                <div>
                  <h3 className="font-[var(--font-new-york)] text-[21px]">
                    Human judgement stays in the workflow.
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.9] text-white/60">
                    Sensitive communication, uncertain requests,
                    approvals and high-impact actions can be routed
                    for human review instead of being executed
                    automatically.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          07. OUR PROCESS
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="THE SHARP RAYS APPROACH"
              title="Map. Simplify. Connect."
              highlight="Automate."
              description="We begin by understanding how your business currently works. Then we identify what should change before building an automation around it."
            />
          </Reveal>

          <div className="mt-12 grid gap-0 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <article className="h-full border-l border-[#E5DDD3] px-5 py-6 first:border-l-0">
                  <span className="font-[var(--font-new-york)] text-[30px] text-[#B79A72]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 font-[var(--font-new-york)] text-[19px] leading-snug text-[#122847]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-[1.9] text-[#718092]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          08. WHY SHARP RAYS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="A PROCESS-FIRST APPROACH"
              title="Good automation starts"
              highlight="before the tools."
              description="Choosing an automation platform is not the first step. Understanding the task, information, people and exceptions is what makes the workflow useful."
            />
          </Reveal>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {[
              {
                title: "Start with the actual problem",
                description:
                  "We review the repetitive task and identify where a workflow can genuinely help.",
                icon: TargetIcon,
              },
              {
                title: "Work with suitable tools",
                description:
                  "We assess existing platforms and available integrations before proposing a connection.",
                icon: Settings2,
              },
              {
                title: "Test before launch",
                description:
                  "We review normal inputs, exceptions, failure paths and required human approvals.",
                icon: ShieldCheck,
              },
              {
                title: "Plan for ongoing operation",
                description:
                  "Documentation and optional support help keep workflows understandable and manageable.",
                icon: RefreshCw,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-b border-[#E7DED2] py-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-4 font-[var(--font-new-york)] text-[19px] text-[#122847]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.9] text-[#718092]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          09. PRICING
      ================================================= */}

      <section
        className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-ai-pricing-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                AI AUTOMATION PRICING
              </p>

              <h2
                id="bhayandar-ai-pricing-heading"
                className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]"
              >
                Choose the Right{" "}
                <span className="text-[#B79A72]">
                  Automation Scope.
                </span>
              </h2>

              <p className="mt-5 text-[12px] leading-[1.95] text-[#718092] sm:text-[13px]">
                Start with one focused workflow or connect multiple
                business processes. The right package depends on
                your tools, integrations and operational requirements.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.07}>
                <article
                  className={`relative flex h-full flex-col rounded-[17px] border p-7 sm:p-8 ${
                    plan.featured
                      ? "border-[#B79A72] bg-white shadow-[0_18px_45px_-35px_rgba(11,42,82,.35)]"
                      : "border-[#E8DED0] bg-white"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#F3EBDD] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#A38561]">
                      Popular Choice
                    </span>
                  )}

                  <span className="font-[var(--font-new-york)] text-[25px] text-[#D5C5AE]">
                    0{index + 1}
                  </span>

                  <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A38561]">
                    {plan.label}
                  </p>

                  <h3 className="mt-4 font-[var(--font-new-york)] text-[25px] text-[#122847]">
                    {plan.name}
                  </h3>

                  <p className="mt-4 font-[var(--font-new-york)] text-[37px] leading-none tracking-[-0.04em] text-[#122847] sm:text-[40px]">
                    {plan.price}
                    <span className="ml-1 text-[11px] font-normal tracking-normal text-[#718092]">
                      /project
                    </span>
                  </p>

                  <p className="mt-5 text-[11px] leading-[1.9] text-[#718092]">
                    {plan.description}
                  </p>

                  <div className="mt-5 rounded-lg bg-[#F8F4EE] px-4 py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#A38561]">
                      Included scope
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-[#122847]">
                      {plan.scope}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3 border-t border-[#EEE7DE] pt-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[10px] leading-[1.8] text-[#647487]"
                      >
                        <Check
                          size={13}
                          className="mt-0.5 shrink-0 text-[#A38561]"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      href="/pricing"
                      title={`View ${plan.name} AI automation package details`}
                      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-[10px] font-medium transition ${
                        plan.featured
                          ? "bg-[#0B2A52] text-white hover:bg-[#163D69]"
                          : "border border-[#DDCDB9] bg-[#FCFAF7] text-[#0B2A52] hover:border-[#B79A72]"
                      }`}
                    >
                      View Package Details
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mx-auto mt-8 max-w-[800px] rounded-[14px] border border-[#E8DED0] bg-white p-5 text-center sm:p-6">
              <div className="flex items-center justify-center gap-2">
                <RefreshCw size={15} className="text-[#A38561]" />
                <h3 className="font-[var(--font-new-york)] text-[18px] text-[#122847]">
                  Optional Automation Care
                </h3>
              </div>

              <p className="mt-2 text-[12px] text-[#718092]">
                Ongoing monitoring, error checks, minor workflow changes
                and optimisation.
              </p>

              <p className="mt-3 font-[var(--font-new-york)] text-[25px] text-[#122847]">
                From ₹4,999
                <span className="ml-1 text-[11px] text-[#718092]">
                  /month
                </span>
              </p>
            </div>

            <p className="mt-6 text-center text-[10px] leading-[1.9] text-[#87929D]">
              Third-party software, AI usage, API, WhatsApp and other
              platform charges are separate unless included in your
              written proposal.
            </p>

            <div className="mt-5 flex justify-center">
              <Link
                href="/pricing"
                title="Explore all Sharp Rays pricing packages"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#A38561] transition-colors hover:text-[#122847]"
              >
                Explore Complete Pricing
                <ArrowUpRight size={14} />
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
        aria-labelledby="bhayandar-ai-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
              Questions Before You Start
            </p>

            <h2
              id="bhayandar-ai-faq-heading"
              className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Useful information about AI automation, workflow
              integrations, WhatsApp automation and business process
              automation around Bhayandar.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={(index % 2) * 0.04}>
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
                Make Your Workflows Work Smarter
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-white sm:text-[45px]">
                Ready to Reduce{" "}
                <span className="text-[#C6A77A]">
                  Repetitive Work?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[580px] text-[12px] leading-[2] text-white/65">
                Tell us about the tasks your team handles repeatedly,
                the tools you already use and the process you want to
                improve. Let's explore a practical automation approach.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact?service=ai-automation"
                  title="Contact Sharp Rays about AI automation"
                  className="inline-flex items-center gap-3 rounded-full bg-[#C6A77A] px-6 py-3.5 text-[10px] font-semibold text-[#122847] transition-colors hover:bg-[#D7BC96]"
                >
                  Discuss Your Workflow
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/locations/bhayandar"
                  title="Explore digital marketing services in Bhayandar"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[10px] font-medium text-white transition-colors hover:border-[#C6A77A] hover:text-[#C6A77A]"
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
            href="/services/ai-automation"
            title="Explore Sharp Rays AI automation services"
            className="transition-colors hover:text-[#A38561]"
          >
            AI Automation Services
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
            href="/locations/mira-road/ai-automation"
            title="AI automation services in Mira Road"
            className="transition-colors hover:text-[#A38561]"
          >
            AI Automation in Mira Road
          </Link>

          <Link
            href="/locations/naigaon/ai-automation"
            title="AI automation services in Naigaon"
            className="transition-colors hover:text-[#A38561]"
          >
            AI Automation in Naigaon
          </Link>
        </div>
      </section>
    </>
  );
}
