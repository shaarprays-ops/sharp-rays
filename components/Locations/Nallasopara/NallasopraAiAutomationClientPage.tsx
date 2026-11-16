"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Workflow, Inbox, Users, BellRing,
  MessageSquareText, Bot, Database, Plug, BrainCircuit, Store, GraduationCap,
  HeartPulse, Building2, Factory, BriefcaseBusiness, Utensils, Rocket, Plane,
  Check, ShieldCheck, Settings2, Route, ClipboardList, Search, Globe2, Code2,
  Megaphone, Film, Video, FileText, WandSparkles, Clock3,
  ListChecks, Gauge, LockKeyhole, RefreshCw, Target, Layers3, Lightbulb
} from "lucide-react";

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
function Rise({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ duration: .62, ease: [0.22, 1, .36, 1], delay }} className={className}>{children}</motion.div>;
}
function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#A1845F] sm:text-[11px]">{children}</p>;
}
function Heading({ eyebrow, title, copy, center = false }: { eyebrow: string; title: ReactNode; copy?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-serif text-[clamp(29px,3.4vw,43px)] leading-[1.13] tracking-[-.045em] text-[#0B2A52]">{title}</h2>{copy && <p className={`mt-4 text-[13px] leading-[1.95] text-[#718093] sm:text-[14px] ${center ? "mx-auto max-w-[680px]" : "max-w-[680px]"}`}>{copy}</p>}</div>;
}
function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-[10px] bg-[#0B2A52] px-6 py-3 text-[12px] font-semibold text-white shadow-[0_10px_25px_rgba(11,42,82,.13)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173F6F]">{children}<ArrowUpRight size={15}/></Link>;
}
function OutlineLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-[10px] border border-[#D9CCBA] bg-white/85 px-6 py-3 text-[12px] font-semibold text-[#0B2A52] transition-all hover:-translate-y-0.5 hover:border-[#B79A72]">{children}<ArrowRight size={14}/></Link>;
}

const services = [
  ["Enquiry Management Automation","Bring incoming customer requests into a clearer, more organised process.",Inbox,["Supported form capture","Enquiry categorisation","Acknowledgement messages","Team notifications","Enquiry status records"]],
  ["Lead Management Automation","Create a structured way to manage potential customers from first contact to follow-up.",Users,["Lead capture by source","Requirement-based organisation","Team assignment","Status updates","Follow-up task creation"]],
  ["Automated Follow-Up Workflows","Make routine follow-up tasks easier to track without relying on memory alone.",BellRing,["Enquiry acknowledgements","Follow-up reminders","Scheduled communication","Internal notifications","Lead status updates"]],
  ["AI-Assisted Customer Communication","Use AI to help organise and prepare responses to common customer messages.",MessageSquareText,["Response drafting","Message summaries","Request classification","Suggested replies","FAQ organisation"]],
  ["Workflow & Task Automation","Connect repeatable activities into clear workflows across supported tools.",Workflow,["Form-to-notification flows","Enquiry-to-lead records","Lead-to-task creation","Document organisation","Status-based updates"]],
  ["AI Chatbot & FAQ Workflows","Help visitors find useful information and submit enquiries through guided conversations.",Bot,["Common business questions","Service information","Enquiry collection","Basic request categorisation","Human hand-off"]],
  ["Data Organisation & Processing","Reduce manual handling with structured information workflows.",Database,["Information organisation","Selected document extraction","Summaries and categorisation","Structured records","Review-ready outputs"]],
  ["Business Tool Integrations","Connect supported tools so information can move between systems with less repeated work.",Plug,["Integration planning","API and permission review","Data flow mapping","System connection","Workflow validation"]],
  ["AI-Assisted Business Workflows","Use AI where it adds a useful capability beyond ordinary rule-based automation.",BrainCircuit,["Message classification","Text summarisation","Draft generation","Information extraction","Knowledge-based assistance"]],
];
const industries = [
  ["Beauty & Wellness","Organise service enquiries, appointment requests and follow-up reminders.",HeartPulse,"/industries/beauty-wellness"],
  ["Ecommerce","Support order-related information, customer requests and product information workflows.",Store,"/industries/ecommerce"],
  ["Education","Organise course enquiries, admission requests, student information and follow-up tasks.",GraduationCap,"/industries/education"],
  ["Healthcare","Support administrative enquiry and appointment workflows with appropriate privacy safeguards.",HeartPulse,"/industries/healthcare"],
  ["Manufacturing","Organise business enquiries, product requests, documents and sales follow-ups.",Factory,"/industries/manufacturing"],
  ["Professional Services","Structure client enquiries, information, task assignments and document workflows.",BriefcaseBusiness,"/industries/professional-services"],
  ["Real Estate","Organise property enquiries, buyer requirements and project-interest follow-ups.",Building2,"/industries/real-estate"],
  ["Restaurants","Support reservation enquiries, customer questions and internal notifications.",Utensils,"/industries/restaurants"],
  ["Startups","Connect business tools and automate repeatable operational activities.",Rocket,"/industries/startup"],
  ["Travel & Hospitality","Organise booking enquiries, customer requests and follow-up communication.",Plane,"/industries/travel-hospitality"],
];
const allServices = [
  ["Social Media Marketing","Build a consistent presence through content planning and platform-specific communication.","/services/social-media-marketing",Globe2],
  ["Search Engine Optimisation (SEO)","Improve organic search foundations through technical SEO and useful content.","/services/search-engine-optimization",Search],
  ["Performance Marketing","Plan paid campaigns around objectives, audiences and measurable actions.","/locations/nalasopara/performance-marketing",Megaphone],
  ["Website Development & Management","Create responsive websites with clear navigation and enquiry pathways.","/services/website-development",Code2],
  ["Digital PR & Media Relations","Support brand communication through PR opportunities and strategic storytelling.","/services/digital-pr-and-media-relations",Globe2],
  ["AI Video and Creative","Develop AI-assisted visual concepts, promotional videos and creative assets.","/locations/nalasopara/ai-video-and-creative",WandSparkles],
  ["Professional Video Editing","Transform footage into polished videos with editing, captions and sound refinement.","/services/video-editing",Film],
  ["Content Marketing","Create useful articles, website content and digital resources.","/services/content-marketing",FileText],
  ["AI Automation","Simplify repetitive workflows for enquiries, follow-ups and business processes.","/locations/nalasopara/ai-automation",Workflow],
];
const faqs = [
  ["Does Sharp Rays provide AI automation services in Nalasopara?","Sharp Rays offers AI automation and workflow solutions for businesses targeting Nalasopara and surrounding areas. Projects can include enquiry management, lead organisation, automated follow-ups, workflow integrations and AI-assisted information processing."],
  ["What is AI automation for businesses?","AI automation combines automation workflows with AI capabilities to support tasks such as message classification, text summarisation, information extraction and response drafting. It can help businesses manage selected processes with less repetitive manual work."],
  ["What is the difference between AI automation and traditional automation?","Traditional automation follows predefined rules and triggers. AI-assisted automation can interpret less structured information and support tasks such as understanding messages, summarising text or generating draft responses. Both approaches can be combined."],
  ["Can automation help manage customer enquiries?","Yes. Depending on the tools available, enquiries can be collected, categorised, recorded and routed to the relevant person. Automated acknowledgements and follow-up reminders can also be included."],
  ["Can AI automation help coaching classes in Nalasopara?","AI-assisted workflows can help organise course enquiries, categorise common questions, record admission-related information and create follow-up tasks. Important admission decisions and customer communication should remain appropriately supervised."],
  ["Can automation help clinics?","Automation can support administrative processes such as enquiry organisation, appointment request routing and internal notifications. Sensitive healthcare information requires appropriate privacy, security and access controls."],
  ["Can you automate WhatsApp enquiries?","Possible WhatsApp workflows depend on the available official integration, platform permissions, account configuration and applicable messaging policies. The exact workflow should be assessed before implementation."],
  ["Can AI automation connect different business tools?","Yes, where suitable integrations or APIs are available. Feasibility depends on the platforms, permissions, available functionality and technical requirements."],
  ["Does every business need AI automation?","No. Some business processes are better handled through simple rule-based automation, while others may benefit from AI capabilities. The right solution depends on the task and the value it provides."],
  ["Is human involvement still required in AI automation?","Yes, for many workflows. Human review is important for sensitive information, uncertain AI outputs, important customer commitments and decisions that require professional judgement."],
  ["How much does AI automation cost?","Pricing depends on workflow complexity, integrations, tools, AI capabilities, testing requirements and ongoing maintenance. A project quote can be discussed after reviewing the requirements."],
  ["How can I start an AI automation project with Sharp Rays?","Share the business process you want to improve, the tools you currently use and the repetitive tasks you want to simplify. Sharp Rays can review the requirements and discuss a suitable approach."],
];
const process = [
  ["Understand the Workflow","Review the task, people involved, information used and current process.",Search],
  ["Find Repetitive Work","Identify repeated data entry, routine notifications, organisation or manual follow-ups.",Target],
  ["Define Requirements","Decide triggers, actions, conditions and where human review is needed.",ClipboardList],
  ["Select Suitable Tools","Choose platforms and integrations based on requirements, access and capability.",Settings2],
  ["Build & Connect","Develop the workflow and configure its conditions, actions and integrations.",Workflow],
  ["Test & Validate","Test expected scenarios, incomplete information and failure cases.",ShieldCheck],
  ["Deploy & Improve","Introduce the workflow, review usage and refine its reliability.",RefreshCw],
];
const localAreas = [
  ["Nalasopara East","Tulinj Road · Achole","Retail businesses, coaching classes and service providers may organise enquiries by product, course or service, send acknowledgements and create follow-up reminders."],
  ["Nalasopara West","Local service workflows","Service businesses may benefit from appointment request routing, customer request categorisation, service enquiry tracking and internal reminders."],
  ["Around Nalasopara Station","Enquiries routed clearly","Businesses serving people around the station can record relevant requirements and route enquiries to the appropriate person. The workflow should reflect the actual service area."],
];
const colors = ["from-[#F4EBDD] to-[#FFFEFC]","from-[#EEF2F4] to-[#FBFCFC]","from-[#F5ECEF] to-[#FDF9FA]","from-[#F0F1E9] to-[#FAFBF7]"];

export default function NalasoparaAIAutomationPageClient() {
  return <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
    {/* HERO — automation workflow studio */}
    <section className="relative isolate overflow-hidden bg-[#FFFEFC]">
      <div className="absolute inset-0 -z-10" style={{backgroundImage:"radial-gradient(circle at 78% 18%, rgba(198,167,122,.22), transparent 29%), radial-gradient(circle at 5% 88%, rgba(11,42,82,.07), transparent 32%)"}}/>
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.92fr] lg:gap-16 lg:px-12 lg:py-28">
        <Rise>
          <Eyebrow>AI AUTOMATION & SMART WORKFLOWS · NALASOPARA</Eyebrow>
          <h1 className="max-w-[690px] font-serif text-[clamp(39px,5.2vw,65px)] leading-[1.04] tracking-[-.055em] text-[#0B2A52]">Make everyday work <span className="italic text-[#A1845F]">flow better.</span></h1>
          <p className="mt-7 max-w-[570px] text-[14px] leading-[2] text-[#718093] sm:text-[15px]">Practical AI automation and workflow solutions for Nalasopara businesses. Organise enquiries, streamline repetitive tasks and connect digital tools around the way your business actually works.</p>
          <div className="mt-8 flex flex-wrap gap-3"><PrimaryLink href="/contact">Discuss Your Automation Requirements</PrimaryLink><OutlineLink href="#automation-solutions">Explore Automation Solutions</OutlineLink></div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-[#7B8794]"><span className="inline-flex items-center gap-2"><Workflow size={14} className="text-[#A1845F]"/> Connected workflows</span><span className="inline-flex items-center gap-2"><BrainCircuit size={14} className="text-[#A1845F]"/> AI where it helps</span><span className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-[#A1845F]"/> Human-aware processes</span></div>
        </Rise>
        <Rise delay={.12} className="relative mx-auto w-full max-w-[540px]">
          <div className="rounded-[30px] border border-[#E7DCCB] bg-gradient-to-br from-[#F4EBDD] via-[#FCF9F4] to-[#E9EEF0] p-4 shadow-[0_25px_70px_rgba(11,42,82,.10)] sm:p-6">
            <div className="flex items-center justify-between px-2 pb-4"><span className="text-[9px] font-bold tracking-[.22em] text-[#A1845F]">A SMARTER WORKFLOW</span><span className="text-[9px] tracking-[.12em] text-[#8A887F]">FLOW / 01</span></div>
            <div className="rounded-[22px] bg-[#F8F5EF] p-4 sm:p-5">
              <div className="flex items-center gap-3 rounded-[15px] border border-[#E7DED2] bg-white p-4"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3EBDD] text-[#A1845F]"><Inbox size={19}/></div><div className="flex-1"><p className="text-[11px] font-semibold text-[#0B2A52]">New customer enquiry</p><p className="mt-1 text-[9px] text-[#8994A0]">Website form · Message · Request</p></div><span className="h-2 w-2 rounded-full bg-[#B79A72]"/></div>
              <div className="ml-9 h-7 w-px border-l border-dashed border-[#B79A72]"/>
              <div className="flex items-center gap-3 rounded-[15px] border border-[#E7DED2] bg-white p-4"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF0F2] text-[#55788D]"><BrainCircuit size={19}/></div><div className="flex-1"><p className="text-[11px] font-semibold text-[#0B2A52]">Organise the information</p><p className="mt-1 text-[9px] text-[#8994A0]">Classify · Summarise · Record</p></div><Sparkles size={15} className="text-[#A1845F]"/></div>
              <div className="ml-9 h-7 w-px border-l border-dashed border-[#B79A72]"/>
              <div className="grid grid-cols-2 gap-3"><div className="rounded-[15px] border border-[#E7DED2] bg-white p-4"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4EBDD] text-[#A1845F]"><BellRing size={17}/></div><p className="mt-3 text-[10px] font-semibold text-[#0B2A52]">Notify the team</p><p className="mt-1 text-[9px] text-[#8994A0]">Relevant person</p></div><div className="rounded-[15px] border border-[#E7DED2] bg-white p-4"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2F4] text-[#55788D]"><ListChecks size={17}/></div><p className="mt-3 text-[10px] font-semibold text-[#0B2A52]">Create next step</p><p className="mt-1 text-[9px] text-[#8994A0]">Task · Follow-up</p></div></div>
            </div>
            <div className="flex items-center justify-between px-2 pt-4"><span className="text-[9px] tracking-[.16em] text-[#8B806F]">DESIGNED AROUND YOUR PROCESS</span><span className="font-serif text-[15px] italic text-[#A1845F]">Sharp Rays</span></div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#E7DCCB] bg-white/95 px-5 py-4 shadow-[0_12px_35px_rgba(11,42,82,.09)] sm:block"><span className="text-[9px] tracking-[.18em] text-[#A1845F]">LESS REPETITIVE WORK</span><p className="mt-1 font-serif text-[18px] text-[#0B2A52]">More organised days.</p></div>
        </Rise>
      </div>
    </section>

    {/* DIRECT ANSWER */}
    <section className="border-y border-[#EEE7DD] bg-[#FAF8F4] px-5 py-9 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-[190px_1fr] md:items-start"><Eyebrow>AT A GLANCE</Eyebrow><p className="text-[13px] leading-[2] text-[#637488] sm:text-[14px]">Sharp Rays offers AI automation and workflow solutions for businesses targeting Nalasopara East, Nalasopara West and surrounding areas. Solutions can include enquiry management, lead organisation, automated follow-ups, workflow integration, data handling and AI-assisted customer communication. We focus on identifying repetitive tasks and building practical workflows that help businesses manage information and everyday processes more efficiently.</p></div></section>

    {/* WHY AUTOMATION */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"><Rise><Heading eyebrow="WHY AUTOMATION" title={<>Less time on repeat tasks. More room for <span className="italic text-[#A1845F]">the real work.</span></>} copy="As a business grows, enquiries can arrive through different channels, customer information can become scattered and follow-ups can depend on memory. A thoughtful workflow helps bring those moving parts into a clearer process."/></Rise><div className="grid gap-3 sm:grid-cols-2">{[[Inbox,"Enquiries in different places","Bring supported requests into a more organised flow."],[Clock3,"Follow-ups to remember","Create reminders and next steps for routine communication."],[Database,"Information to organise","Keep customer details and requests structured for review."],[BrainCircuit,"Messages to understand","Use AI to classify or summarise information where it adds value."]].map(([Icon,title,copy],i)=>{const I=Icon as any;return <Rise key={title as string} delay={(i%2)*.05}><div className={`h-full rounded-[20px] border border-[#E9E1D6] bg-gradient-to-br ${colors[i]} p-6`}><div className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-white/85 text-[#A1845F]"><I size={19}/></div><h3 className="mt-5 font-serif text-[20px] text-[#0B2A52]">{title as string}</h3><p className="mt-2 text-[12px] leading-[1.85] text-[#718093]">{copy as string}</p></div></Rise>})}</div></div></section>

    {/* SERVICES */}
    <section id="automation-solutions" className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1200px]"><Heading eyebrow="WHAT WE CAN AUTOMATE" title={<>Practical workflows. Thoughtful use of <span className="italic text-[#A1845F]">AI.</span></>} copy="We look at how information moves through your business, identify repetitive activities and select suitable tools for the job."/><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(([title,copy,Icon,items],i)=>{const I=Icon as any;return <Rise key={title as string} delay={(i%3)*.04}><article className="group h-full rounded-[22px] border border-[#E8E0D5] bg-[#FFFEFC] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#CDB895] hover:shadow-[0_18px_45px_rgba(11,42,82,.07)] sm:p-7"><div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#F3EBDD] text-[#A1845F]"><I size={20}/></div><span className="font-serif text-[22px] italic text-[#D5C4AA]">✳</span></div><h3 className="mt-6 font-serif text-[21px] leading-tight text-[#0B2A52]">{title as string}</h3><p className="mt-3 min-h-[58px] text-[12px] leading-[1.9] text-[#718093]">{copy as string}</p><div className="mt-5 border-t border-[#EEE7DD] pt-4"><p className="mb-3 text-[9px] font-bold tracking-[.17em] text-[#A1845F]">POSSIBLE WORKFLOW ELEMENTS</p><ul className="space-y-2">{(items as string[]).map(x=><li key={x} className="flex gap-2 text-[11px] leading-[1.6] text-[#66778A]"><Check size={13} className="mt-0.5 shrink-0 text-[#A1845F]"/>{x}</li>)}</ul></div></article></Rise>})}</div></div></section>

    {/* LOCAL AREAS */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1180px]"><Heading eyebrow="LOCAL BUSINESS CONTEXT" title={<>Automation shaped around the way Nalasopara businesses <span className="italic text-[#A1845F]">operate.</span></>} copy="The right workflow depends on the business, its customer channels and how information is handled today."/><div className="mt-10 grid gap-4 md:grid-cols-3">{localAreas.map(([area,sub,copy],i)=><Rise key={area} delay={i*.05}><div className={`relative h-full overflow-hidden rounded-[23px] border border-[#E7DED2] bg-gradient-to-br ${colors[i]} p-7`}><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#C6A77A]/40"/><span className="text-[9px] font-bold tracking-[.18em] text-[#A1845F]">LOCAL WORKFLOW IDEA</span><h3 className="mt-5 font-serif text-[24px] leading-tight text-[#0B2A52]">{area}</h3><p className="mt-2 text-[10px] font-semibold tracking-[.1em] text-[#A1845F]">{sub}</p><p className="mt-5 text-[12px] leading-[1.9] text-[#718093]">{copy}</p></div></Rise>)}</div></div></section>

    {/* INDUSTRIES */}
    <section className="bg-[#FAF8F4] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1200px]"><Heading eyebrow="INDUSTRIES WE CAN SUPPORT" title={<>Different businesses. Different <span className="italic text-[#A1845F]">workflows.</span></>} copy="Automation should fit the information, customer interactions and operating requirements of each industry."/><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{industries.map(([name,copy,Icon,href],i)=>{const I=Icon as any;return <Rise key={name as string} delay={(i%5)*.035}><Link href={href as string} title={`${name} industry solutions by Sharp Rays`} className="group block h-full rounded-[18px] border border-[#E8E0D5] bg-white/85 p-5 transition-all hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_12px_30px_rgba(11,42,82,.06)]"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F4EBDD] text-[#A1845F]"><I size={17}/></div><h3 className="mt-4 font-serif text-[17px] text-[#0B2A52]">{name as string}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#718093]">{copy as string}</p><span className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold text-[#A1845F]">Explore industry <ArrowUpRight size={12}/></span></Link></Rise>})}</div></div></section>

    {/* TRADITIONAL VS AI */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1100px]"><Heading eyebrow="CHOOSE THE RIGHT APPROACH" title={<>Not every workflow needs <span className="italic text-[#A1845F]">AI.</span></>} copy="Traditional automation is often the right choice for predictable tasks. AI-assisted workflows are useful when information needs to be interpreted or summarised."/><div className="mt-10 grid gap-4 md:grid-cols-2"><Rise><div className="h-full rounded-[24px] border border-[#E7DCCB] bg-gradient-to-br from-[#F4EBDD] to-[#FFFEFC] p-7 sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#A1845F]"><Workflow size={22}/></div><p className="mt-6 text-[9px] font-bold tracking-[.2em] text-[#A1845F]">TRADITIONAL AUTOMATION</p><h3 className="mt-2 font-serif text-[27px] text-[#0B2A52]">When the rules are clear.</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#718093]">Follows predefined triggers and actions for predictable, repeatable processes.</p><ul className="mt-6 space-y-3">{["Form-to-spreadsheet workflows","Automatic email notifications","Task creation and reminders","Data synchronisation","Status-based workflow updates"].map(x=><li key={x} className="flex gap-2 text-[12px] text-[#607287]"><Check size={14} className="text-[#A1845F]"/>{x}</li>)}</ul></div></Rise><Rise delay={.06}><div className="h-full rounded-[24px] border border-[#DDE4E7] bg-gradient-to-br from-[#EDF2F4] to-[#FFFEFC] p-7 sm:p-9"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#54768B]"><BrainCircuit size={22}/></div><p className="mt-6 text-[9px] font-bold tracking-[.2em] text-[#54768B]">AI-ASSISTED AUTOMATION</p><h3 className="mt-2 font-serif text-[27px] text-[#0B2A52]">When context matters.</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#718093]">Can interpret less structured inputs and support language-based information tasks.</p><ul className="mt-6 space-y-3">{["Message classification","Text summarisation","Draft response generation","Document information extraction","Natural-language question answering"].map(x=><li key={x} className="flex gap-2 text-[12px] text-[#607287]"><Check size={14} className="text-[#54768B]"/>{x}</li>)}</ul></div></Rise></div><p className="mt-5 text-center text-[12px] leading-[1.8] text-[#718093]">The best solution is the simplest reliable workflow that solves the actual business problem.</p></div></section>

    {/* PROCESS */}
    <section className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1180px]"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="mb-3 text-[10px] font-bold uppercase tracking-[.23em] text-[#C6A77A]">FROM CURRENT PROCESS TO BETTER FLOW</p><h2 className="max-w-[430px] font-serif text-[clamp(30px,3.6vw,44px)] leading-[1.13] tracking-[-.04em]">A thoughtful process. <span className="italic text-[#D8C19D]">A useful outcome.</span></h2><p className="mt-5 max-w-[390px] text-[13px] leading-[1.9] text-[#D0D9E2]/75">We start by understanding how work happens today, then build and test a workflow that fits the actual requirement.</p></div><div className="grid gap-3 sm:grid-cols-2">{process.map(([title,copy,Icon],i)=>{const I=Icon as any;return <Rise key={title as string} delay={(i%2)*.04}><div className="h-full rounded-[18px] border border-white/15 bg-white/[.055] p-5 transition-colors hover:bg-white/[.09]"><div className="flex items-center justify-between"><I size={19} className="text-[#D8C19D]"/><span className="text-[9px] tracking-[.16em] text-[#C6A77A]">STEP {String(i+1).padStart(2,"0")}</span></div><h3 className="mt-5 font-serif text-[19px] text-white">{title as string}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#D0D9E2]/70">{copy as string}</p></div></Rise>})}</div></div></div></section>

    {/* QUALITY */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1180px]"><Heading eyebrow="BUILT TO BE USEFUL" title={<>What makes an automation workflow <span className="italic text-[#A1845F]">work well?</span></>} copy="A workflow should make a process easier to manage, not create more complexity. These are the foundations we consider."/><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[["A clearly defined problem","Identify the repetitive task or operational gap before selecting tools.",Target],["Simple workflow design","Avoid unnecessary steps, integrations and dependencies.",Route],["Reliable information handling","Ensure information is recorded, transferred and processed correctly.",Database],["Human oversight","Keep review for sensitive, uncertain or important decisions.",ShieldCheck],["Appropriate privacy controls","Consider data access, storage, permissions and customer consent.",LockKeyhole],["Error handling","Plan for failed integrations, missing information and unexpected inputs.",Settings2],["Useful measurement","Review whether the workflow reduces repetitive work or improves organisation.",Gauge]].map(([t,c,I],i)=>{const Icon=I as any;return <Rise key={t as string} delay={(i%3)*.04}><div className="flex gap-4 rounded-[18px] border border-[#EAE3D9] bg-white p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#A1845F]"><Icon size={18}/></div><div><h3 className="font-serif text-[18px] text-[#0B2A52]">{t as string}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#718093]">{c as string}</p></div></div></Rise>})}</div></div></section>

    {/* WHY SHARP RAYS */}
    <section className="bg-[#F8F6F1] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.8fr_1.2fr]"><Heading eyebrow="THE SHARP RAYS APPROACH" title={<>Automation that starts with the <span className="italic text-[#A1845F]">business problem.</span></>} copy="Effective automation requires more than connecting applications. It requires understanding the work and identifying where technology can genuinely help."/><div className="grid gap-3 sm:grid-cols-2">{[["Business requirements first","Understand the operational problem before recommending a solution."],["Practical use of AI","Use AI-assisted capabilities only where they provide a meaningful advantage."],["Connected workflows","Bring relevant tools and processes together where integrations are available."],["Human-centred processes","Keep human review where accuracy, judgement or customer care matters."],["Clear implementation","Make workflow requirements, responsibilities and expected behaviour understandable."],["Continuous improvement","Review workflows after deployment and improve reliability and usefulness."]].map(([t,c],i)=><Rise key={t} delay={(i%2)*.04}><div className="border-b border-[#E4DACE] py-4"><span className="text-[9px] font-bold tracking-[.18em] text-[#B79A72]">OUR PRINCIPLE</span><h3 className="mt-2 font-serif text-[19px] text-[#0B2A52]">{t}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#718093]">{c}</p></div></Rise>)}</div></div></section>

    {/* ALL SERVICES */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-[1200px]"><Heading eyebrow="MORE FROM SHARP RAYS" title={<>A connected set of digital services.</>} copy="AI automation can support business operations while other digital services help build visibility, communicate with audiences and generate enquiries."/><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{allServices.map(([t,c,href,Icon],i)=>{const I=Icon as any;return <Rise key={t as string} delay={(i%3)*.035}><Link href={href as string} title={`${t} by Sharp Rays`} className="group flex h-full gap-4 rounded-[17px] border border-[#EAE3D9] bg-[#FFFEFC] p-5 transition-all hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_12px_30px_rgba(11,42,82,.06)]"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4EBDD] text-[#A1845F]"><I size={18}/></div><div><h3 className="font-serif text-[18px] text-[#0B2A52]">{t as string}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#718093]">{c as string}</p><span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#A1845F]">Explore service <ArrowUpRight size={12}/></span></div></Link></Rise>})}</div></div></section>

    {/* PRICING */}
    <section className="bg-[#FAF8F4] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[1fr_.85fr]"><div><Heading eyebrow="PROJECT SCOPE & PRICING" title={<>A solution shaped around your <span className="italic text-[#A1845F]">workflow.</span></>} copy="A simple enquiry notification is different from a multi-step AI-assisted system connected to several business applications. Project scope should be clear before implementation begins."/></div><Rise><div className="rounded-[24px] border border-[#E6DACA] bg-white p-7 shadow-[0_16px_45px_rgba(11,42,82,.05)] sm:p-9"><p className="text-[9px] font-bold tracking-[.2em] text-[#A1845F]">WHAT SHAPES THE PROJECT</p><div className="mt-6 space-y-4">{[["Process to automate","The task, people involved and desired outcome."],["Tools and integrations","Platforms, APIs, permissions and data flow."],["Workflow logic","Triggers, conditions, actions and exceptions."],["AI and human review","AI capabilities and where a person must check the result."],["Testing and maintenance","Validation, monitoring and ongoing support requirements."]].map(([t,c])=><div key={t} className="flex gap-3 border-b border-[#F0EAE1] pb-4"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#B79A72]"/><div><h3 className="text-[12px] font-semibold text-[#0B2A52]">{t}</h3><p className="mt-1 text-[11px] leading-[1.7] text-[#718093]">{c}</p></div></div>)}</div><p className="mt-5 text-[11px] leading-[1.8] text-[#718093]">The final project quote reflects the agreed workflow and deliverables. Website development starting prices are separate from AI automation project fees.</p><PrimaryLink href="/contact">Discuss Your Requirements</PrimaryLink></div></Rise></div></section>

    
{/* FAQ */}
<section
  className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
  aria-labelledby="faq-heading"
>
  <div className="mx-auto max-w-[1600px]">

    {/* Heading */}
    <Rise>
      <div className="mx-auto max-w-[850px] text-center">
        <div className="flex justify-center">
          <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
        </div>

        <h2
          id="faq-heading"
          className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(36px,5vw,64px)] font-normal leading-[1.12] tracking-[-.045em] text-[#17334D]"
        >
          A few things worth <i>knowing.</i>
        </h2>

        <p className="mx-auto mt-7 max-w-[700px] font-[var(--font-new-york),Georgia,serif] text-[15px] leading-[1.9] text-[#657889] sm:text-[17px]">
          Clear answers about our services, process and how we
          help businesses grow.
        </p>
      </div>
    </Rise>

    {/* FAQ Items */}
    <div className="mt-16 grid gap-x-12 border-t border-[#DED5CB] md:grid-cols-2 lg:gap-x-16">
      {faqs.map(([q, a], i) => (
        <Rise key={q} delay={(i % 2) * 0.04}>
          <article className="flex h-full gap-5 border-b border-[#DED5CB] py-8 sm:gap-6 sm:py-9">

            {/* Icon */}
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0DFD5] text-[#B5654D]">
              <MessageCircle size={18} strokeWidth={1.7} />
            </span>

            {/* Question and Answer */}
            <div className="min-w-0">
              <h3 className="font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.4] text-[#17334D] sm:text-[25px]">
                {q}
              </h3>

              <p className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[13px] leading-[1.95] text-[#657889] sm:text-[15px]">
                {a}
              </p>
            </div>

          </article>
        </Rise>
      ))}
    </div>

  </div>
</section>

    {/* FINAL CTA */}
    <section className="relative overflow-hidden bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"><div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border border-white/10"/><div className="absolute -right-8 -top-16 h-[290px] w-[290px] rounded-full border border-[#C6A77A]/25"/><div className="relative mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-9 md:flex-row md:items-end"><div className="max-w-[690px]"><p className="mb-3 text-[10px] font-bold tracking-[.23em] text-[#C6A77A]">READY TO SIMPLIFY A PROCESS?</p><h2 className="font-serif text-[clamp(34px,4.5vw,54px)] leading-[1.08] tracking-[-.045em]">Make everyday workflows <span className="italic text-[#D8C19D]">work smarter.</span></h2><p className="mt-5 max-w-[600px] text-[13px] leading-[1.9] text-white/70">Whether you want to organise enquiries, improve follow-ups, connect business tools or explore AI-assisted workflows, let's identify a practical next step.</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href="/contact" className="inline-flex min-h-[48px] items-center gap-2 rounded-[10px] bg-[#F4EBDD] px-6 py-3 text-[12px] font-semibold text-[#0B2A52] transition hover:bg-white">Discuss Your Automation Requirements <ArrowUpRight size={14}/></Link><Link href="/contact" className="inline-flex min-h-[48px] items-center gap-2 rounded-[10px] border border-white/30 px-6 py-3 text-[12px] font-semibold text-white transition hover:bg-white/10">Contact Sharp Rays <ArrowRight size={14}/></Link></div></div><div className="relative mx-auto mt-12 max-w-[1120px] border-t border-white/15 pt-5 text-[10px] tracking-[.15em] text-white/50">SHARP RAYS <span className="px-2 text-[#C6A77A]">—</span> WE CREATE THE “OH, WOW.”!</div></section>
  </main>;
}
