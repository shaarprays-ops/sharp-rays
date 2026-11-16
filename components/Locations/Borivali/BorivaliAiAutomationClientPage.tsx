"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Workflow, MessageCircle, ClipboardList, RefreshCw,
  Bell, Database, Plug, ShieldCheck, Check, Building2, Store, GraduationCap,
  HeartPulse, ShoppingBag, BriefcaseBusiness, Home, Utensils, Factory, Plane,
  Lightbulb, Sparkles, FileText, Target, Users, Clock3, Search, Layers3, Zap,
  LockKeyhole, Settings2, Mail, FormInput, GitBranch, CircleCheck, Stethoscope
} from "lucide-react";

type IconType = React.ElementType;

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.22em] text-[#A1845F] sm:text-[10px]">
    <span className="h-px w-5 bg-[#C6A77A]" />
    {children}
  </span>
);

const Heading = ({
  eyebrow, title, copy, center = false,
}: {
  eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean;
}) => (
  <Reveal>
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[850px]`}>
      <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4.2vw,52px)] leading-[1.12] tracking-[-.045em] text-[#0B2A52]">
        {title}
      </h2>
      {copy && <p className={`mt-5 text-[13px] leading-[2] text-[#657889] sm:text-[14px] ${center ? "mx-auto max-w-[730px]" : ""}`}>{copy}</p>}
    </div>
  </Reveal>
);

const services: { title: string; copy: string; icon: IconType; tint: string }[] = [
  { title: "Workflow Automation", copy: "Identify repetitive steps in existing business processes and explore ways to connect them through suitable automation tools.", icon: Workflow, tint: "from-[#EAF0F2] to-[#FAFBFA]" },
  { title: "Enquiry and Lead Organisation", copy: "Structure incoming enquiry information so relevant details can be organised and routed more consistently.", icon: Target, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
  { title: "Form and Data Automation", copy: "Explore workflows that move information from compatible forms into spreadsheets, databases or other supported systems.", icon: FormInput, tint: "from-[#EEEAF2] to-[#FAF8FB]" },
  { title: "AI-Assisted Information Processing", copy: "Use suitable AI workflows to help categorise, summarise or organise information, with appropriate human review.", icon: Sparkles, tint: "from-[#F3EAE9] to-[#FCF8F6]" },
  { title: "Automated Notifications and Follow-Ups", copy: "Explore reminders, notifications and follow-up workflows based on defined business rules and available integrations.", icon: Bell, tint: "from-[#EAF0EB] to-[#F8FAF7]" },
  { title: "Customer Communication Workflows", copy: "Assess opportunities to organise routine customer communication while retaining human involvement for sensitive or complex conversations.", icon: MessageCircle, tint: "from-[#F1EDE2] to-[#FBF9F3]" },
  { title: "Tool and Platform Integrations", copy: "Connect compatible tools where supported integrations, permissions and technical requirements allow.", icon: Plug, tint: "from-[#EAF0F3] to-[#FAFBFA]" },
  { title: "Workflow Review and Improvement", copy: "Review existing automation workflows and identify opportunities to improve reliability, clarity and maintainability.", icon: RefreshCw, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
];

const useCases: { title: string; points: string[]; icon: IconType; tint: string }[] = [
  { title: "Jewellers and Retail Businesses", points: ["Organise product and customer enquiries", "Structure incoming requests from website forms", "Route enquiries to the appropriate team member", "Create internal reminders for follow-ups"], icon: Store, tint: "bg-[#F5EBDD]" },
  { title: "Clinics and Healthcare Businesses", points: ["Organise general appointment enquiry information", "Route non-clinical enquiries to the appropriate team", "Create administrative reminders", "Support routine administrative workflows"], icon: HeartPulse, tint: "bg-[#EAF0F2]" },
  { title: "Coaching Classes and Education", points: ["Organise course enquiries", "Route admission-related forms", "Create reminders for enquiry follow-ups", "Structure frequently requested course information"], icon: GraduationCap, tint: "bg-[#F0EAF1]" },
  { title: "Restaurants and Cafes", points: ["Organise website and booking enquiries", "Route customer requests", "Create internal notifications for new enquiries", "Structure feedback information"], icon: Utensils, tint: "bg-[#F4E9E3]" },
  { title: "Real Estate Businesses", points: ["Organise property enquiries", "Structure lead information based on selected fields", "Route requests to relevant team members", "Create reminders for pending follow-ups"], icon: Home, tint: "bg-[#E9EFE9]" },
  { title: "Professional Services", points: ["Organise consultation enquiries", "Structure client intake information", "Create internal task notifications", "Simplify selected document and information workflows"], icon: BriefcaseBusiness, tint: "bg-[#ECECF3]" },
];

const workflow = [
  ["Enquiry Collection", "Information enters through an approved website form, email or supported platform.", Mail],
  ["Information Organisation", "Relevant details are structured into an agreed format.", Database],
  ["Workflow Routing", "The information is directed to the right person, team or system.", GitBranch],
  ["AI-Assisted Processing", "Where appropriate, AI can assist with summarisation, classification or information extraction.", Sparkles],
  ["Human Review", "People review important information and handle decisions that require judgement.", Users],
  ["Follow-Up and Tracking", "Suitable notifications, reminders and workflow updates can help keep tasks organised.", Bell],
] as const;

const process = [
  ["Workflow Discovery", "Understand the current process, the people involved, the tools used and the repetitive tasks.", Search],
  ["Automation Opportunity Review", "Identify which steps are suitable for automation and which require human judgement.", Target],
  ["Solution and Integration Planning", "Review available tools, supported integrations, permissions, data requirements and technical constraints.", Plug],
  ["Workflow Design", "Map the steps, inputs, outputs, conditions and exception handling.", Workflow],
  ["Implementation and Testing", "Build the agreed workflow and test expected scenarios, including errors and unusual inputs.", Settings2],
  ["Documentation and Handover", "Document the workflow, its requirements and how it should be monitored.", FileText],
  ["Review and Improvement", "Review workflow behaviour and make adjustments when requirements or connected tools change.", RefreshCw],
] as const;

const safeguards = [
  ["Data Access", "Only use information and systems that the business is authorised to access.", LockKeyhole],
  ["Human Oversight", "Keep human review for important decisions, sensitive communication and situations where AI output may be inaccurate.", Users],
  ["Privacy and Security", "Review how connected tools handle information, permissions, retention and security before implementation.", ShieldCheck],
  ["Error Handling", "Plan what happens when an integration fails, information is missing or an unexpected input is received.", Settings2],
  ["Clear Ownership", "Define who monitors the workflow and who handles exceptions.", ClipboardList],
  ["Responsible AI Use", "Check AI-generated outputs wherever accuracy matters. Automation does not remove the need for responsible business processes.", CircleCheck],
] as const;

const industries: { name: string; href: string; copy: string; icon: IconType }[] = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", copy: "Organise enquiries, service requests and appointment-related administrative tasks.", icon: Sparkles },
  { name: "Ecommerce", href: "/industries/ecommerce", copy: "Structure order-related information and selected customer support workflows.", icon: ShoppingBag },
  { name: "Education", href: "/industries/education", copy: "Organise course enquiries, admission information and routine notifications.", icon: GraduationCap },
  { name: "Healthcare", href: "/industries/healthcare", copy: "Support suitable administrative workflows with appropriate privacy and oversight.", icon: Stethoscope },
  { name: "Manufacturing", href: "/industries/manufacturing", copy: "Explore repetitive information, reporting and internal workflow automation.", icon: Factory },
  { name: "Professional Services", href: "/industries/professional-services", copy: "Organise consultation enquiries, client intake and routine administrative tasks.", icon: BriefcaseBusiness },
  { name: "Real Estate", href: "/industries/real-estate", copy: "Structure property enquiries and internal lead-routing workflows.", icon: Home },
  { name: "Restaurants", href: "/industries/restaurants", copy: "Organise customer requests, feedback and selected administrative processes.", icon: Utensils },
  { name: "Startups", href: "/industries/startup", copy: "Connect compatible tools and streamline repetitive operational workflows.", icon: Lightbulb },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", copy: "Organise booking enquiries, customer requests and routine communication workflows.", icon: Plane },
];

const digitalServices = [
  ["Social Media Marketing", "Plan and manage social media communication, content and creative campaigns.", "/services/social-media-marketing"],
  ["Search Engine Optimization (SEO)", "Improve organic search visibility through technical, on-page and content optimisation.", "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Plan and manage paid advertising campaigns and performance reviews.", "/services/performance-marketing"],
  ["Website Development & Management", "Build and maintain websites that support business communication and enquiries.", "/services/website-development"],
  ["Digital PR & Media Relations", "Plan digital communication and media outreach.", "/services/digital-pr-and-media-relations"],
  ["AI Video and Creative", "Develop AI-assisted video concepts and creative content.", "/services/ai-video-and-creative"],
  ["Professional Video Editing", "Edit video content for digital platforms and campaigns.", "/services/video-editing"],
  ["Content Marketing", "Create useful content for websites and digital channels.", "/services/content-marketing"],
  ["AI Automation", "Explore workflow automation and AI-assisted business processes.", "/services/ai-automation"],
] as const;

const faqs = [
  ["What is AI automation?", "AI automation combines automation workflows with AI capabilities to assist with selected tasks such as processing, categorising or summarising information. The exact capabilities depend on the tools and workflow."],
  ["What AI automation services does Sharp Rays offer?", "Sharp Rays explores workflow automation, enquiry organisation, form and data workflows, AI-assisted information processing, notifications, integrations and workflow improvement."],
  ["Can AI automation help small businesses?", "Yes. Small businesses can explore automation for suitable repetitive tasks such as organising enquiries, routing information and creating reminders. The value depends on the process and implementation requirements."],
  ["Can you automate customer enquiries?", "Selected enquiry workflows can be organised and routed through compatible tools. Any automated customer communication should be reviewed for accuracy, privacy and appropriate human escalation."],
  ["Can you connect website forms with other tools?", "Where supported integrations and access permissions are available, website form information can be connected to compatible spreadsheets, databases, notification systems or other platforms."],
  ["Can AI automation help with lead management?", "Automation can help organise incoming lead information, route enquiries and create reminders. It does not guarantee lead conversion or sales."],
  ["Does every business need AI automation?", "No. Some workflows are better handled manually or with simple non-AI automation. The right approach depends on the problem, frequency, complexity and expected benefit."],
  ["Is AI automation fully independent of human involvement?", "Not necessarily. Important decisions, sensitive communication and uncertain AI outputs should retain appropriate human oversight."],
  ["Is my business data safe when using AI automation?", "Data safety depends on the tools, permissions, configurations, storage and data-handling policies involved. These should be reviewed before implementing a workflow, especially when personal or sensitive information is involved."],
  ["Can you automate workflows for clinics and healthcare businesses?", "Suitable administrative workflows can be assessed, but healthcare-related information requires particular care. Any solution must use appropriate privacy, security and access controls and should not replace clinical judgement."],
  ["How much does AI automation cost?", "Pricing depends on the number and complexity of workflows, integrations, data requirements and implementation scope. Contact Sharp Rays to discuss your specific requirements."],
  ["Do you provide ongoing automation support?", "Support and maintenance requirements can be discussed as part of the project scope. They depend on the workflow, connected platforms and support responsibilities."],
  ["How can I get started with Sharp Rays?", "Share your current workflow, the repetitive task you want to simplify and the tools you currently use through the Sharp Rays contact page."],
];

export default function BorivaliAIAutomationPageClient() {
  return (
    <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#FAF8F4] px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 82% 12%, rgba(198,167,122,.20), transparent 30%),radial-gradient(circle at 8% 90%, rgba(11,42,82,.06), transparent 28%)" }} />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            <Eyebrow>AI Automation in Borivali</Eyebrow>
            <h1 className="mt-6 max-w-[760px] font-[var(--font-new-york),Georgia,serif] text-[clamp(42px,6vw,72px)] leading-[1.04] tracking-[-.055em]">Make Repetitive Workflows <i className="text-[#A1845F]">Simpler</i> with AI and Automation.</h1>
            <p className="mt-7 max-w-[650px] text-[14px] leading-[2] text-[#657889] sm:text-[15px]">From organising incoming enquiries to streamlining repetitive business tasks, Sharp Rays explores practical AI automation opportunities that help businesses improve how everyday digital workflows are handled.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact?source=borivali-ai-automation" className="inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-7 py-4 text-[11px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your Automation Requirements <ArrowUpRight size={15} /></Link>
              <Link href="/services/ai-automation" className="inline-flex items-center gap-3 rounded-[9px] border border-[#C6A77A] bg-white/70 px-7 py-4 text-[11px] font-semibold transition hover:bg-white">Explore Our Digital Services <ArrowRight size={15} /></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E5DCCE] pt-6 text-[10px] font-semibold tracking-[.08em] text-[#718093]">
              <span className="flex items-center gap-2"><Workflow size={14} className="text-[#A1845F]" />Connected workflows</span>
              <span className="flex items-center gap-2"><Database size={14} className="text-[#A1845F]" />Organised information</span>
              <span className="flex items-center gap-2"><Bell size={14} className="text-[#A1845F]" />Clearer follow-ups</span>
            </div>
          </Reveal>
          <Reveal delay={.1}>
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#C6A77A]/35" />
              <div className="relative overflow-hidden rounded-[30px] border border-[#E7DED2] bg-gradient-to-br from-[#F0E6D8] via-[#FBF9F5] to-[#EAF0F2] p-5 shadow-[0_25px_70px_rgba(11,42,82,.08)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#DCD3C8] pb-4">
                  <div><p className="text-[9px] font-bold tracking-[.2em] text-[#A1845F]">WORKFLOW DESIGN BOARD</p><p className="mt-1 font-serif text-[20px]">From information to action</p></div>
                  <span className="rounded-full border border-[#DCCBB2] bg-white/70 px-3 py-1.5 text-[9px] text-[#8B765C]">BORIVALI · MUMBAI</span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white bg-white/75 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0E5D7] text-[#A1845F]"><MessageCircle size={18}/></span><div className="flex-1"><p className="text-[11px] font-semibold">New enquiry received</p><p className="mt-1 text-[9px] text-[#718093]">Capture the required details</p></div><Check size={15} className="text-[#7B9A80]"/></div>
                  <div className="ml-8 h-5 w-px bg-[#C6A77A]"/>
                  <div className="flex items-center gap-3 rounded-xl border border-white bg-white/75 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8EEF0] text-[#496D83]"><Database size={18}/></span><div className="flex-1"><p className="text-[11px] font-semibold">Information organised</p><p className="mt-1 text-[9px] text-[#718093]">Structure and route the details</p></div><Check size={15} className="text-[#7B9A80]"/></div>
                  <div className="ml-8 h-5 w-px bg-[#C6A77A]"/>
                  <div className="flex items-center gap-3 rounded-xl border border-white bg-white/75 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAE5EF] text-[#80658D]"><Bell size={18}/></span><div className="flex-1"><p className="text-[11px] font-semibold">Next action notified</p><p className="mt-1 text-[9px] text-[#718093]">Trigger the agreed workflow step</p></div><Check size={15} className="text-[#7B9A80]"/></div>
                </div>
                <div className="mt-5 rounded-xl border border-[#E4D8C8] bg-white/65 p-4"><p className="text-[9px] font-bold tracking-[.15em] text-[#A1845F]">THE PRINCIPLE</p><p className="mt-2 font-serif text-[18px] leading-[1.4]">A clear process. The right level of automation.</p></div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#E7DED2] bg-white px-5 py-4 shadow-lg sm:block"><p className="text-[9px] font-bold tracking-[.16em] text-[#A1845F]">SHARP RAYS</p><p className="mt-1 font-serif text-[18px]">We Create the “Oh, Wow.”!</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <Reveal><Eyebrow>AI Automation Agency in Borivali</Eyebrow></Reveal>
          <Reveal><h2 className="font-[var(--font-new-york),Georgia,serif] text-[clamp(28px,3.5vw,42px)] leading-[1.2] tracking-[-.035em]">What does an AI automation agency in Borivali <i className="text-[#A1845F]">do?</i></h2><p className="mt-5 text-[13px] leading-[2] text-[#657889]">An AI automation agency in Borivali helps businesses identify repetitive tasks and connect suitable digital tools to streamline workflows. Sharp Rays explores automation opportunities such as enquiry organisation, information handling, workflow coordination and AI-assisted processes, based on a business's requirements, existing systems and available integrations.</p></Reveal>
        </div>
      </section>

      {/* PROBLEM FIRST */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Heading eyebrow="Automation That Starts With a Real Business Problem" title={<>Not every task needs AI. The right workflow needs the <i className="text-[#A1845F]">right solution.</i></>} copy="Many businesses handle repetitive activities across forms, emails, spreadsheets, customer enquiries and internal processes. When these tasks are handled manually, information can become scattered and routine follow-ups can take additional time. AI automation begins by understanding how a process currently works, identifying repetitive steps and assessing whether a suitable automation can simplify the workflow." />
          <Reveal><div className="rounded-[24px] border border-[#E7DED2] bg-gradient-to-br from-[#F4EBDD] via-[#FBF8F2] to-[#EEF1F2] p-7 sm:p-9"><p className="font-serif text-[23px]">Potential areas to explore</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Organising incoming enquiries","Routing information to the right person","Structuring lead information","Supporting routine follow-ups","Connecting compatible digital tools","AI-assisted information processing"].map(item=><div key={item} className="flex gap-3 rounded-xl border border-white/80 bg-white/65 p-4 text-[11px] leading-[1.7] text-[#526779]"><Check size={14} className="mt-0.5 shrink-0 text-[#A1845F]"/>{item}</div>)}</div><p className="mt-6 border-t border-[#DCD3C8] pt-5 text-[11px] leading-[1.9] text-[#718093]">Automation should be designed around actual business requirements, not added simply because a workflow can use AI.</p></div></Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#FFFEFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="AI Automation Services" title={<>Practical automation opportunities for everyday business <i className="text-[#A1845F]">workflows.</i></>} copy="Explore ways to organise information, coordinate routine tasks and connect compatible business tools."/>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.title} delay={(i%4)*.035}><article className={`group relative h-full overflow-hidden rounded-[20px] border border-[#EAE2D7] bg-gradient-to-br ${s.tint} p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_14px_35px_rgba(11,42,82,.07)]`}><span className="absolute -right-7 -top-7 h-20 w-20 rounded-full border border-[#C6A77A]/30 transition-transform duration-700 group-hover:scale-150"/><span className="relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/75 text-[#A1845F]"><Icon size={20} strokeWidth={1.5}/></span><h3 className="relative mt-6 font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.3]">{s.title}</h3><p className="relative mt-3 text-[11px] leading-[1.95] text-[#718093]">{s.copy}</p></article></Reveal>})}</div>
        </div>
      </section>

      {/* BORIVALI USE CASES */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="AI Automation Ideas for Borivali Businesses" title={<>Explore automation around the way your business <i className="text-[#A1845F]">operates.</i></>} copy="Different business types have different information, customer and operational workflows. These examples are starting points for a requirements discussion."/>
<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {useCases.map((item, i) => {
    const Icon = item.icon;

    return (
      <Reveal key={item.title} delay={(i % 3) * 0.04}>
        <article className="h-full rounded-[20px] border border-[#E7DED2] bg-white/75 p-6 sm:p-7">
          <div className="flex items-center gap-4">
            <span className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${item.tint} text-[#A1845F]`}>
              <Icon size={21} strokeWidth={1.5} />
            </span>
            <h3 className="font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.25]">
              {item.title}
            </h3>
          </div>

          <ul className="mt-6 space-y-3">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-[11px] leading-[1.75] text-[#657889]"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#C6A77A]" />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    );
  })}
</div>
          <p className="mt-6 rounded-xl border border-[#E4D8C8] bg-[#FBF9F5] px-5 py-4 text-[11px] leading-[1.9] text-[#718093]">Healthcare workflows require particular care with personal and sensitive information. Any implementation must use appropriate permissions, security and suitable systems. These are potential use cases; actual implementation depends on the systems, access permissions, integrations and data requirements involved.</p>
        </div>
      </section>

      {/* HOW IT FITS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="How AI and Automation Fit Into Your Business" title={<>A connected workflow from incoming information to <i className="text-[#A1845F]">action.</i></>} copy="A workflow may combine information capture, routing, AI-assisted processing and human review. Not every process needs every step."/>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{workflow.map(([title,copy,Icon],i)=><Reveal key={title} delay={(i%3)*.035}><div className="h-full rounded-[18px] border border-[#EAE2D7] bg-[#FCFAF7] p-6"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E6D8] text-[#A1845F]"><Icon size={18}/></span><h3 className="mt-5 font-serif text-[20px]">{title}</h3><p className="mt-3 text-[11px] leading-[1.9] text-[#718093]">{copy}</p></div></Reveal>)}</div>
          <p className="mt-6 text-[11px] leading-[1.9] text-[#718093]">Not every workflow requires all these steps. The implementation should remain as simple as possible.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Our AI Automation Process" title={<>Understand first. <i className="text-[#A1845F]">Automate with purpose.</i></>} copy="A clear process helps define what should be automated, what tools are involved and where people need to remain in control."/>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{process.map(([title,copy,Icon],i)=><Reveal key={title} delay={(i%4)*.035}><div className="h-full rounded-[18px] border border-[#E7DED2] bg-white/80 p-6"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E6D8] text-[#A1845F]"><Icon size={18}/></span><h3 className="mt-5 font-serif text-[20px]">{title}</h3><p className="mt-3 text-[11px] leading-[1.9] text-[#718093]">{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      {/* DATA & RESPONSIBLE USE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20"><div><Heading eyebrow="AI Automation, Data and Responsible Use" title={<>Useful automation needs reliable <i className="text-[#A1845F]">controls.</i></>} copy="Automation can make workflows more organised, but it should be implemented with appropriate safeguards, clear ownership and realistic expectations."/></div>
          <div className="grid gap-3 sm:grid-cols-2">{safeguards.map(([title,copy,Icon],i)=><Reveal key={title} delay={(i%2)*.04}><div className="rounded-[17px] border border-[#EAE2D7] bg-white p-5"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2E8DA] text-[#A1845F]"><Icon size={15}/></span><h3 className="font-serif text-[18px]">{title}</h3></div><p className="mt-3 text-[11px] leading-[1.9] text-[#718093]">{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="AI Automation for Different Industries" title={<>Potential workflows across <i className="text-[#A1845F]">ten business categories.</i></>} copy="Explore industry pages to see how Sharp Rays approaches digital needs across different business types."/>
<div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
  {industries.map((item, i) => {
    const Icon = item.icon;

    return (
      <Reveal key={item.name} delay={(i % 5) * 0.03}>
        <Link
          href={item.href}
          title={`Explore ${item.name} industry solutions by Sharp Rays`}
          className="group block h-full rounded-[17px] border border-[#E7DED2] bg-white/80 p-5 transition hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-md"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1E7D9] text-[#A1845F]">
            <Icon size={18} />
          </span>

          <h3 className="mt-4 font-serif text-[18px]">
            {item.name}
          </h3>

          <p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">
            {item.copy}
          </p>

          <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.13em] text-[#A1845F]">
            Explore industry
            <ArrowUpRight size={12} />
          </span>
        </Link>
      </Reveal>
    );
  })}
</div>        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="All Nine Digital Services" title={<>Automation is one part of a connected <i className="text-[#A1845F]">digital strategy.</i></>} copy="Explore the wider services that can support your brand's digital presence and communication."/>
          <div className="mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{digitalServices.map(([title,copy,href])=><Reveal key={title}><Link href={href} title={`Explore ${title} by Sharp Rays`} className="group flex h-full items-start justify-between gap-4 rounded-[16px] border border-[#EAE2D7] bg-[#FCFAF7] p-5 transition hover:border-[#C6A77A] hover:bg-[#FAF6F0]"><div><h3 className="font-serif text-[19px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{copy}</p></div><ArrowUpRight size={16} className="mt-1 shrink-0 text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></Link></Reveal>)}</div>
        </div>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-16"><Heading eyebrow="Why Choose Sharp Rays" title={<>Automation should solve a problem, not add <i className="text-[#A1845F]">complexity.</i></>} copy="The starting point is your actual process, the people involved and the systems already in use—not a tool selected in isolation."/>
          <div className="grid gap-3 sm:grid-cols-2">{[["Business-First Thinking","Start with the process that needs improvement rather than choosing a tool first."],["Practical Use Cases","Focus on suitable repetitive tasks and workflows that can be clearly defined."],["Connected Digital Understanding","Consider how automation fits with your website, enquiry journey and other digital systems."],["Human Oversight","Keep people involved where review, judgement or approval is required."],["Clear Workflow Planning","Define the process, dependencies, responsibilities and limitations before implementation."]].map(([title,copy])=><div key={title} className="rounded-[16px] border border-[#E7DED2] bg-white/80 p-5"><h3 className="font-serif text-[18px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.9] text-[#718093]">{copy}</p></div>)}</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1120px]"><div className="rounded-[26px] border border-[#E7DED2] bg-gradient-to-br from-[#F4EBDD] via-[#FCFAF7] to-[#EEF2F2] p-7 sm:p-10 lg:p-12"><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div><Eyebrow>AI Automation Pricing</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">The right scope depends on the <i className="text-[#A1845F]">workflow.</i></h2><p className="mt-5 text-[12px] leading-[2] text-[#657889]">AI automation requirements can vary significantly. A simple notification workflow is different from a multi-step integration involving several platforms, data sources and AI processing.</p><p className="mt-4 text-[12px] leading-[2] text-[#657889]">The scope should be assessed according to the number of workflows, connected tools, integration availability, data and access requirements, AI processing requirements, testing, documentation and maintenance needs.</p><p className="mt-4 text-[12px] leading-[2] text-[#657889]">Contact Sharp Rays to discuss your workflow and understand the scope before proceeding.</p><Link href="/contact?source=borivali-ai-automation" title="borivali ai automation" className="mt-7 inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your Automation Requirements <ArrowUpRight size={14}/></Link></div>
          <div className="rounded-[19px] border border-white/90 bg-white/75 p-6"><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#A1845F]">Website Development Starting Prices</p><p className="mt-3 font-serif text-[19px]">Published website packages</p><div className="mt-5 space-y-3">{[["Starter Website","₹14,999"],["Business Website","₹24,999"],["Advanced Website","₹39,999"]].map(([name,price])=><div key={name} className="flex items-center justify-between border-b border-[#E9E1D6] pb-3"><span className="text-[11px] text-[#657889]">{name}</span><span className="font-serif text-[20px] text-[#0B2A52]">{price}</span></div>)}</div><p className="mt-5 text-[10px] leading-[1.85] text-[#718093]">These are website development starting prices only. They are separate from AI automation service pricing.</p><Link href="/pricing" title="Pricing" className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#A1845F]">View pricing <ArrowRight size={13}/></Link></div>
        </div></div></div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F4] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1180px]"><div className="mx-auto max-w-[720px] text-center"><Eyebrow>Frequently Asked Questions</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">AI Automation in Borivali <i className="text-[#A1845F]">— FAQs</i></h2><p className="mt-4 text-[12px] leading-[1.9] text-[#718093]">Helpful answers about workflow automation, integrations, data handling and project requirements.</p></div>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2">{faqs.map(([q,a],i)=><Reveal key={q} delay={(i%2)*.025}><div className="flex gap-4 border-b border-[#E5DCCE] py-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0E3D5] text-[#A1845F]"><MessageCircle size={15}/></span><div><h3 className="font-[var(--font-new-york),Georgia,serif] text-[17px] leading-[1.45] text-[#0B2A52]">{q}</h3><p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{a}</p></div></div></Reveal>)}</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-9 md:flex-row md:items-end"><div className="max-w-[720px]"><Eyebrow>Let's Simplify Your Workflow</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-[-.045em]">Have a Repetitive Task You Want to <i className="text-[#D8BD98]">Simplify?</i></h2><p className="mt-5 max-w-[650px] text-[12px] leading-[2] text-white/70">Let's understand your current workflow, identify suitable automation opportunities and explore a practical way to connect your digital tools.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact?source=borivali-ai-automation" className="inline-flex items-center gap-3 rounded-[9px] bg-white px-6 py-4 text-[10px] font-semibold text-[#0B2A52] transition hover:bg-[#F2E8DA]">Discuss Your Automation Requirements <ArrowUpRight size={14}/></Link><Link href="/services/ai-automation" className="inline-flex items-center gap-3 rounded-[9px] border border-white/35 px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-white/10">Explore AI Automation Services <ArrowRight size={14}/></Link></div></div>
      </section>
    </main>
  );
};
