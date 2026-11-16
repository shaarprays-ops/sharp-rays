"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, Workflow,
  MessageCircle, Users, ClipboardList, Bell, FileText, Mail, Megaphone,
  BrainCircuit, Store, ShoppingBag, GraduationCap, HeartPulse, Factory,
  BriefcaseBusiness, Building2, UtensilsCrossed, Rocket, Plane, MapPin,
  Globe2, ShieldCheck, Search, Settings2, Database, CalendarClock,
  Target, Layers3, Sparkles, MonitorSmartphone, Bot, GitBranch,
} from "lucide-react";

const NAVY = "#26364A";
const GOLD = "#A88659";

type IconType = typeof Workflow;

const challenges = [
  { title: "Repetitive Administrative Work", text: "Teams spend time performing the same routine activities instead of focusing on higher-value work.", icon: ClipboardList },
  { title: "Unorganised Customer Enquiries", text: "Messages and enquiries arriving through different channels can become difficult to track and manage.", icon: MessageCircle },
  { title: "Manual Lead Management", text: "Copying customer details, updating spreadsheets and organising follow-ups can consume valuable time.", icon: Users },
  { title: "Delayed Communication", text: "Without a structured process, enquiries and internal requests may not receive timely attention.", icon: Bell },
  { title: "Disconnected Business Workflows", text: "Information may be spread across forms, spreadsheets, email and other tools, making coordination harder.", icon: GitBranch },
  { title: "Limited Visibility Into Processes", text: "Businesses may struggle to understand where tasks are delayed, duplicated or unnecessarily complicated.", icon: Search },
];

const services = [
  { title: "Workflow Automation", icon: Workflow, line: "Connect routine business activities into more organised processes.", copy: "Build structured workflows around repetitive tasks, information movement and everyday process coordination.", points: ["Repetitive task automation", "Workflow planning", "Process coordination", "Automated task triggers", "Information movement between supported tools", "Workflow improvement opportunities"], tone: "from-[#E7EEF4] to-[#F7F4ED]" },
  { title: "Lead Management Automation", icon: Target, line: "Make incoming enquiries easier to organise and follow up.", copy: "Create more structured ways to capture lead information, route enquiries and keep lead records updated.", points: ["Lead capture workflows", "Enquiry organisation", "Lead information processing", "Lead assignment workflows", "Follow-up reminders", "Lead status updates"], tone: "from-[#E8EDF4] to-[#F8F6F1]" },
  { title: "Customer Enquiry Automation", icon: MessageCircle, line: "Improve how your business organises and responds to enquiries.", copy: "Set up suitable enquiry collection, categorisation and acknowledgement workflows with a clear route to human support.", points: ["Enquiry collection workflows", "Initial response automation", "FAQ workflows", "Enquiry categorisation", "Customer information organisation", "Human handover for complex requests"], tone: "from-[#F2EAE5] to-[#FBF7F0]" },
  { title: "AI-Assisted Customer Support", icon: Bot, line: "Help customers find approved information more efficiently.", copy: "Explore AI-assisted processes for common questions and information requests, with escalation when human judgement is needed.", points: ["FAQ-based assistance", "Information retrieval workflows", "Initial enquiry handling", "Support request categorisation", "Response suggestions", "Human escalation"], tone: "from-[#EEEAF4] to-[#F8F5F1]" },
  { title: "Data Entry & Information Processing", icon: Database, line: "Reduce repetitive manual handling of business information.", copy: "Organise information from supported forms, documents and spreadsheets through structured processing workflows.", points: ["Form data processing", "Information extraction", "Spreadsheet updates", "Data organisation", "Document workflow assistance", "Repetitive information handling"], tone: "from-[#E7F0ED] to-[#F8F7F1]" },
  { title: "Email & Communication Automation", icon: Mail, line: "Bring routine communication tasks into a clearer process.", copy: "Coordinate acknowledgements, reminders, alerts and routine messages through suitable automated workflows.", points: ["Email notifications", "Enquiry acknowledgements", "Follow-up reminders", "Internal communication alerts", "Routine message workflows", "Communication coordination"], tone: "from-[#F1EAE4] to-[#FAF6F0]" },
  { title: "Marketing Workflow Automation", icon: Megaphone, line: "Make selected marketing processes more organised.", copy: "Coordinate lead collection, campaign notifications, content workflows and reporting information.", points: ["Lead collection workflows", "Marketing enquiry organisation", "Content workflow coordination", "Campaign notification workflows", "Reporting data organisation", "Marketing task reminders"], tone: "from-[#E8EEF1] to-[#F8F5EE]" },
  { title: "AI-Powered Business Workflows", icon: BrainCircuit, line: "Use AI where a task involves interpreting information.", copy: "Explore AI-assisted processes for text, documents and structured business information where they offer practical value.", points: ["Text processing", "Information classification", "Content assistance workflows", "Document summarisation", "Data categorisation", "AI-assisted internal processes"], tone: "from-[#F0EAE5] to-[#FAF7F1]" },
];

const industries: { name: string; href: string; icon: IconType; intro: string; items: string[]; note?: string }[] = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", icon: Sparkles, intro: "For salons, spas, beauty professionals and wellness businesses.", items: ["Appointment enquiry organisation", "Booking notifications", "Customer enquiry handling", "Follow-up reminders", "Service information workflows", "Customer communication coordination"] },
  { name: "Ecommerce", href: "/industries/ecommerce", icon: ShoppingBag, intro: "For online stores, product brands and digital sellers.", items: ["Order information workflows", "Customer enquiry categorisation", "Product information organisation", "Order notification workflows", "Customer support assistance", "Internal task coordination"] },
  { name: "Education", href: "/industries/education", icon: GraduationCap, intro: "For schools, coaching classes, training institutes and educators.", items: ["Admission enquiry organisation", "Course enquiry workflows", "Student information processing", "Application notifications", "FAQ assistance", "Follow-up reminders"] },
  { name: "Healthcare", href: "/industries/healthcare", icon: HeartPulse, intro: "For clinics, dental practices, diagnostic centres and healthcare providers.", items: ["Appointment enquiry organisation", "Administrative notifications", "General service information workflows", "Enquiry categorisation", "Internal task coordination", "Routine communication assistance"], note: "Healthcare automation requires particular attention to patient privacy, data security, applicable regulations and human oversight. Sensitive clinical decisions should not be delegated to unverified automated systems." },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory, intro: "For manufacturers, industrial suppliers, distributors and B2B businesses.", items: ["Product enquiry organisation", "RFQ information processing", "Lead management workflows", "Internal notification systems", "Document handling", "Sales enquiry coordination"] },
  { name: "Professional Services", href: "/industries/professional-services", icon: BriefcaseBusiness, intro: "For consultants, agencies, financial professionals and service providers.", items: ["Consultation enquiry handling", "Lead organisation", "Client onboarding workflows", "Document processing", "Follow-up reminders", "Internal task management"] },
  { name: "Real Estate", href: "/industries/real-estate", icon: Building2, intro: "For real estate agencies, builders, property consultants and construction businesses.", items: ["Property enquiry collection", "Lead categorisation", "Site visit enquiry coordination", "Follow-up reminders", "Property information workflows", "Customer communication notifications"] },
  { name: "Restaurants", href: "/industries/restaurants", icon: UtensilsCrossed, intro: "For restaurants, cafes, bakeries, caterers and food businesses.", items: ["Reservation enquiry organisation", "Customer enquiry handling", "Order notification workflows", "Booking reminders", "Customer feedback collection", "Internal communication coordination"] },
  { name: "Startups", href: "/industries/startups", icon: Rocket, intro: "For new businesses and growing brands looking to organise their operations.", items: ["Lead management", "Internal workflow coordination", "Customer onboarding", "Data organisation", "Routine reporting", "Marketing task automation"] },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", icon: Plane, intro: "For travel operators, accommodation providers, tourism businesses and local experiences.", items: ["Booking enquiry organisation", "Travel enquiry categorisation", "Customer notifications", "Follow-up reminders", "Reservation information workflows", "Customer support assistance"] },
];

const areas = [
  { name: "Vasai West", title: "Enquiry & customer communication automation", copy: "Retailers, restaurants, salons and other customer-facing businesses often handle enquiries through multiple communication channels.", items: ["Organising incoming customer enquiries", "Automating enquiry acknowledgements", "Appointment and booking notifications", "Customer follow-up reminders", "Product and service information workflows", "Internal enquiry alerts"], note: "For businesses around Ambadi Road and Manikpur, the focus can be on making everyday customer communication easier to manage." },
  { name: "Vasai Fort", title: "Tourism & hospitality workflow automation", copy: "Tourism-related businesses, travel operators and hospitality providers may need to coordinate enquiries, bookings and customer information.", items: ["Travel enquiry organisation", "Booking enquiry workflows", "Customer information processing", "Reservation notifications", "Follow-up reminders", "Frequently asked question assistance"], note: "The aim is to make routine customer coordination more organised while keeping important booking confirmations and customer decisions appropriately supervised." },
  { name: "Vasai East", title: "Manufacturing & B2B workflow automation", copy: "Manufacturers, industrial suppliers and B2B companies often handle product enquiries, technical information, RFQs and business communication.", items: ["Product enquiry collection", "RFQ information organisation", "Lead management workflows", "Sales team notifications", "Document and information processing", "Internal follow-up coordination"], note: "For businesses around Waliv and Gauraipada, automation can help structure repetitive enquiry and information-handling processes." },
];

const tasks = [
  ["Customer Enquiry Handling", "Organise incoming enquiries and route them to the appropriate person or team.", MessageCircle],
  ["Lead Management", "Collect and structure customer details so potential opportunities are easier to follow up.", Users],
  ["Appointment Coordination", "Organise booking enquiries, notifications and reminders through suitable systems.", CalendarClock],
  ["Document Processing", "Assist with extracting, categorising or summarising information from supported documents.", FileText],
  ["Internal Notifications", "Notify the relevant team when a form, enquiry or workflow reaches a particular stage.", Bell],
  ["Marketing Operations", "Organise repetitive content, campaign and lead-related activities.", Megaphone],
  ["Reporting & Data Organisation", "Help structure information from supported sources into more manageable reporting workflows.", Database],
  ["Customer Communication", "Support routine acknowledgement messages and FAQ workflows, with appropriate human review.", Mail],
];

const process = [
  ["Understand Your Business", "We learn how your business currently handles enquiries, information, communication and everyday operations."],
  ["Identify Automation Opportunities", "We identify repetitive tasks, bottlenecks and workflows that may benefit from automation."],
  ["Map the Existing Process", "We understand the steps, people, information and software involved in the current workflow."],
  ["Recommend a Suitable Approach", "We evaluate whether traditional automation, AI-assisted processing or a combination is appropriate."],
  ["Plan the Workflow", "We define workflow logic, required inputs, outputs, integrations and human approval points."],
  ["Develop and Test", "The proposed workflow is configured or developed using suitable supported tools, then tested against relevant scenarios."],
  ["Review and Improve", "We review how the workflow performs and identify opportunities for refinement."],
];

const reasons = [
  ["Business-First Approach", "We begin by understanding the task and identifying whether automation is genuinely useful.", Target],
  ["Practical Workflow Planning", "Automation should fit the way your business operates rather than force your team into an unnecessarily complicated process.", Workflow],
  ["Suitable Technology Selection", "Tools and integrations should be selected according to your workflow, requirements and available systems.", Settings2],
  ["Human Oversight", "Important business decisions, sensitive information and complex customer situations should have appropriate human involvement.", ShieldCheck],
  ["Connected Digital Services", "Automation can complement your website, social media, content marketing and lead-generation activities.", Layers3],
  ["Focus on Efficiency", "The objective is to reduce avoidable repetitive work and make selected business processes easier to manage.", Check],
];

const otherServices = [
  ["Social Media Marketing", "Build your brand presence through strategy, content creation, Instagram marketing, Reels and platform management.", "/services/social-media-marketing"],
  ["Search Engine Optimization (SEO)", "Improve organic search visibility through technical SEO, on-page optimisation, local SEO and content strategy.", "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Reach relevant audiences through paid campaigns, audience targeting and performance optimisation.", "/services/performance-marketing"],
  ["Website Development & Management", "Create and maintain responsive websites that communicate your offering and support enquiries.", "/services/website-development"],
  ["Digital PR & Media Relations", "Strengthen brand communication, online reputation and visibility through digital PR.", "/services/digital-pr-media-relations"],
  ["AI Video and Creative", "Explore AI-assisted video production and creative solutions for brand communication.", "/services/ai-video-and-creative"],
  ["Professional Video Editing", "Transform raw footage into polished videos for social media and marketing campaigns.", "/services/video-editing"],
  ["Content Marketing", "Build useful content through blogs, website copy, educational resources and strategic planning.", "/services/content-marketing"],
  ["AI Automation", "Identify repetitive business and marketing tasks that can benefit from automation.", "/services/ai-automation"],
];

const faqs = [
  ["What does an AI automation agency in Vasai do?", "An AI automation agency helps businesses identify repetitive tasks and develop workflows using automation tools and AI-assisted processes. These workflows can support lead management, enquiry handling, information processing and internal coordination."],
  ["What AI automation services does Sharp Rays offer?", "Potential services include workflow automation, lead management automation, customer enquiry workflows, AI-assisted support, data processing, email automation, marketing workflow automation and AI-powered business processes."],
  ["Is AI automation useful for small businesses in Vasai?", "It can be useful when a small business regularly performs repetitive tasks such as organising enquiries, updating information, sending notifications or coordinating follow-ups. The best starting point is a task that consumes time and follows a clear process."],
  ["Can AI automation help manage customer enquiries?", "Yes. Suitable workflows can collect, organise and categorise enquiries, provide initial acknowledgements and route requests to the appropriate person. Complex or sensitive enquiries should have a human review process."],
  ["Can you automate lead management for businesses?", "Lead management workflows can help collect enquiry details, organise information, update supported systems and coordinate follow-up reminders. The available options depend on the software and integrations involved."],
  ["Can manufacturers in Vasai East use AI automation?", "Manufacturers can explore automation for product enquiries, RFQ organisation, internal notifications, information processing and sales follow-up coordination."],
  ["Can retail businesses in Vasai West automate customer communication?", "Retail businesses can explore enquiry organisation, routine notifications, appointment or booking workflows and customer information management using suitable supported tools."],
  ["What is the difference between AI automation and traditional automation?", "Traditional automation follows predefined rules and triggers. AI-assisted automation can also interpret, classify or summarise information. The right choice depends on the complexity of the task."],
  ["Do I need AI to automate my business?", "No. Many repetitive processes can be automated using straightforward rule-based workflows. AI should be introduced only when it provides a useful capability that traditional automation cannot efficiently provide."],
  ["Can AI automation connect different business applications?", "Some workflows can connect supported applications through available integrations or APIs. Compatibility, access permissions, security requirements and software limitations need to be checked before implementation."],
  ["Can AI automation help with marketing activities?", "Yes. Selected workflows can support lead collection, enquiry organisation, content coordination, notifications and reporting data organisation."],
  ["Is AI automation completely error-free?", "No. Automated systems can make mistakes, particularly when information is incomplete, ambiguous or incorrectly formatted. Testing, monitoring, validation and human oversight are important."],
  ["Is my business information safe when using AI automation?", "Data security depends on the tools, providers, permissions, integrations and information being processed. Sensitive information should be handled according to applicable privacy and security requirements. Access should be restricted to what the workflow actually needs."],
  ["How long does AI automation implementation take?", "Implementation time depends on the number of workflows, their complexity, available integrations, testing requirements and access to existing systems. A simple workflow and a multi-application automation project require different levels of work."],
];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] ${light ? "text-[#D9C29F]" : "text-[#9A7950]"}`}><span className="h-px w-8 bg-[#A88659]" />{children}</div>;
}

function SectionTitle({ eyebrow, title, copy, center = false }: { eyebrow: string; title: ReactNode; copy?: string; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}>
    <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
    <h2 className="mt-5 font-serif text-[34px] font-normal leading-[1.12] tracking-[-.045em] text-[#26364A] sm:text-[43px] lg:text-[52px]">{title}</h2>
    {copy && <p className={`mt-5 max-w-[680px] text-[14px] leading-[1.9] text-[#657487] ${center ? "mx-auto" : ""}`}>{copy}</p>}
  </div>;
}

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="group inline-flex items-center gap-2 rounded-full bg-[#26364A] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#A88659]">{children}<ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link>;
}

function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-2 rounded-full border border-[#DCCFBD] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#526477] transition hover:border-[#A88659] hover:text-[#A88659]">{children}<ArrowRight size={14}/></Link>;
}

function SoftLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="group inline-flex items-center gap-2 rounded-full bg-[#26364A] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#A88659]">{children}<ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></Link>;
}

export default function VasaiAIAutomationPageClient() {
  return <main className="overflow-hidden bg-[#FAF8F5] text-[#26364A]">
    {/* HERO */}
    <section className="relative isolate min-h-[700px] overflow-hidden bg-[#F5F1EA] px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:min-h-[760px] lg:px-12 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 78% 28%, rgba(198,167,122,.20), transparent 29%), radial-gradient(circle at 15% 90%, rgba(172,190,199,.22), transparent 32%)" }}/>
      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[620px] w-[620px] rounded-full border border-[#26364A]/[.07]"/>
      <div className="pointer-events-none absolute -right-20 top-40 -z-10 h-[420px] w-[420px] rounded-full border border-[#A88659]/30"/>
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <Reveal><div className="max-w-[700px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E6DED2] bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[.2em] text-[#927650] shadow-sm"><Workflow size={12}/> AI automation · Vasai, Maharashtra</div>
          <h1 className="mt-8 font-serif text-[46px] font-normal leading-[1.04] tracking-[-.05em] sm:text-[58px] lg:text-[70px]">AI automation services for <span className="text-[#A88659] italic">Vasai businesses.</span></h1>
          <p className="mt-7 max-w-[590px] text-[15px] leading-[1.95] text-[#596D80]">Spend less time on repetitive tasks and more time focusing on your business.</p>
          <p className="mt-3 max-w-[580px] text-[12px] leading-[1.9] text-[#82909B]">Sharp Rays helps businesses explore AI-assisted automation and smarter workflows for everyday operations. From organising customer enquiries for Vasai West businesses to streamlining lead management and communication for Vasai East companies, we focus on practical automation opportunities that support business efficiency.</p>
          <div className="mt-9 flex flex-wrap gap-3"><PrimaryLink href="/contact?source=vasai-ai-automation">Discuss Your Automation Requirements</PrimaryLink><SecondaryLink href="#automation-services">Explore Our Services</SecondaryLink></div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E5DED3] pt-6 text-[10px] uppercase tracking-[.15em] text-[#788795]"><span>Practical workflows</span><span>Human oversight</span><span>Business-first approach</span></div>
        </div></Reveal>
        <Reveal delay={.12}><div className="relative mx-auto w-full max-w-[590px]">
          <div className="relative aspect-[.94] overflow-hidden rounded-[5px] border border-[#DED8CD] bg-gradient-to-br from-[#E8EEF1] via-[#F5F2EB] to-[#E8E2D8] p-5 sm:p-7">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(18,40,71,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18,40,71,.08) 1px, transparent 1px)", backgroundSize: "38px 38px" }}/>
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#A88659]/10 blur-3xl"/>
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between"><span className="text-[9px] uppercase tracking-[.22em] text-[#9A7950]">Workflow intelligence</span><BrainCircuit size={19} className="text-[#A88659]" strokeWidth={1.2}/></div>
              <div className="mx-auto w-full max-w-[390px] space-y-3">
                <div className="border border-[#DED8CD] bg-white/95 p-4 text-[#26364A] shadow-[0_20px_50px_-30px_rgba(18,40,71,.35)]">
                  <div className="flex items-center justify-between border-b border-[#E8E1D6] pb-3"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#A88659]"/><span className="text-[9px] font-semibold tracking-[.15em]">NEW CUSTOMER ENQUIRY</span></div><span className="text-[8px] text-[#8B98A5]">WORKFLOW / 01</span></div>
                  <div className="mt-4 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center bg-[#EDF1F2] text-[#657D8E]"><MessageCircle size={19}/></div><div className="flex-1"><div className="h-2 w-4/5 bg-[#D8E0E5]"/><div className="mt-2 h-2 w-3/5 bg-[#E9ECEE]"/></div><Check size={17} className="text-[#9B8A67]"/></div>
                </div>
                <div className="grid grid-cols-2 gap-3"><div className="border border-[#DED8CD] bg-white/85 p-4"><Users size={17} className="text-[#A88659]"/><p className="mt-3 text-[10px] font-semibold tracking-[.08em]">LEAD ORGANISED</p><p className="mt-1 text-[9px] text-[#82909B]">Relevant details collected</p></div><div className="border border-[#DED8CD] bg-white/85 p-4"><Bell size={17} className="text-[#A88659]"/><p className="mt-3 text-[10px] font-semibold tracking-[.08em]">TEAM NOTIFIED</p><p className="mt-1 text-[9px] text-[#82909B]">Next step made visible</p></div></div>
                <div className="flex items-center justify-center gap-2 border border-[#D8CDBD] bg-[#F9F6EF] px-4 py-3 text-[9px] uppercase tracking-[.15em] text-[#806D52]"><GitBranch size={14}/> A connected business workflow</div>
              </div>
              <div className="flex items-end justify-between"><p className="max-w-[220px] font-serif text-[21px] leading-tight text-[#344A60]">Less repetition. <span className="italic text-[#A88659]">Clearer workflows.</span></p><span className="text-[9px] tracking-[.18em] text-[#82909B]">SHARP RAYS</span></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden max-w-[230px] border border-[#D7C3A5] bg-[#F7F3EB] p-4 text-[#26364A] shadow-xl sm:block"><span className="text-[9px] uppercase tracking-[.17em] text-[#9A7950]">Our point of view</span><p className="mt-2 font-serif text-[18px] leading-snug">Automate the right task. Keep people in control.</p></div>
        </div></Reveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A88659]/60 to-transparent"/>
    </section>

    {/* DIRECT ANSWER */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal><Eyebrow>A practical starting point</Eyebrow><h2 className="mt-5 max-w-[410px] font-serif text-[35px] leading-[1.12] tracking-[-.04em] sm:text-[43px]">What does an AI automation agency in <span className="italic text-[#A88659]">Vasai</span> do?</h2></Reveal>
        <Reveal delay={.08}><div className="border-l border-[#D9C8AE] pl-6 sm:pl-9"><p className="text-[16px] leading-[1.9] text-[#354B63]">An AI automation agency in Vasai helps businesses identify repetitive tasks and improve workflows using suitable automation tools and AI-assisted processes.</p><p className="mt-5 text-[13px] leading-[1.95] text-[#718092]">Sharp Rays focuses on practical automation opportunities such as enquiry handling, lead organisation, information processing and workflow coordination to help businesses reduce manual effort and manage everyday operations more efficiently.</p><div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">{["Understand the process","Find repetitive tasks","Keep human oversight"].map((x,i)=><div key={x} className="border-t border-[#D8C9B5] pt-3"><p className="mt-1 text-[11px] text-[#52677D]">{x}</p></div>)}</div></div></Reveal>
      </div>
    </section>

    {/* CHALLENGES */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <Reveal><SectionTitle eyebrow="The everyday challenge" title={<>Your team should not spend the day repeating the <span className="italic text-[#A88659]">same tasks.</span></>} copy="Many businesses depend on manual processes to manage enquiries, organise information, communicate with customers and coordinate everyday work. As operations grow, these tasks can become difficult to manage consistently."/></Reveal>
        <div className="grid gap-x-8 sm:grid-cols-2">{challenges.map(({title,text,icon:Icon},i)=><Reveal key={title} delay={(i%2)*.05}><article className="h-full border-b border-[#DED8CD] py-6"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1D7C9] bg-white/80 text-[#A88659]"><Icon size={17} strokeWidth={1.3}/></span><h3 className="text-[14px] font-semibold text-[#344A60]">{title}</h3></div><p className="mt-4 pl-[52px] text-[12px] leading-[1.9] text-[#718092]">{text}</p></article></Reveal>)}</div>
        <p className="lg:col-start-2 text-[11px] leading-[1.9] text-[#7B8792]">AI automation can help address suitable repetitive workflows, but the right solution begins with understanding how your business actually operates.</p>
      </div>
    </section>

    {/* SERVICES */}
    <section id="automation-services" className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="What we can automate" title={<>Practical automation for everyday business <span className="italic text-[#A88659]">operations.</span></>} copy="Sharp Rays helps businesses identify suitable opportunities to simplify repetitive work using automation and AI-assisted workflows."/></Reveal>
        <div className="mt-14 space-y-4">{services.map((service,i)=>{const Icon=service.icon;return <Reveal key={service.title} delay={i*.025}><article className={`group grid overflow-hidden border border-[#E2DACE] bg-[#FAF8F5] lg:grid-cols-[.72fr_1.28fr] ${i%2?"lg:grid-cols-[1.28fr_.72fr]":""}`}>
          <div className={`relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-gradient-to-br ${service.tone} p-6 sm:min-h-[250px] sm:p-8 ${i%2?"lg:order-2":""}`}><div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-[#26364A]/10 transition duration-700 group-hover:scale-125"/><div className="absolute -right-2 -top-2 h-36 w-36 rounded-full border border-[#A88659]/50"/><div className="relative flex items-center justify-between"><span className="text-[10px] font-semibold tracking-[.2em] text-[#8D795E]">WORKFLOW</span><Icon size={22} strokeWidth={1.2} className="text-[#9B7C53]"/></div><div className="relative"><p className="mt-2 max-w-[290px] font-serif text-[24px] leading-tight text-[#26364A]">{service.title}<span className="text-[#B08D5C]">.</span></p></div></div>
          <div className={`flex flex-col p-6 sm:p-9 lg:p-10 ${i%2?"lg:order-1":""}`}><h3 className="font-serif text-[27px] leading-tight tracking-[-.03em] sm:text-[32px]">{service.title}</h3><p className="mt-3 font-serif text-[18px] leading-snug text-[#A17F53]">{service.line}</p><p className="mt-4 max-w-[650px] text-[12px] leading-[1.95] text-[#718092]">{service.copy}</p><div className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">{service.points.map(point=><div key={point} className="flex items-start gap-2 text-[11px] leading-[1.7] text-[#52677D]"><Check size={13} className="mt-0.5 shrink-0 text-[#B18E60]"/>{point}</div>)}</div></div>
        </article></Reveal>})}</div>
        <p className="mt-7 border-l-2 border-[#A88659] pl-4 text-[11px] leading-[1.9] text-[#7B8792]">The exact automation possibilities depend on your existing software, available integrations, data requirements and business process. Not every task should be automated, and important customer-facing or business-critical decisions should retain appropriate human oversight.</p>
      </div>
    </section>

{/* INDUSTRIES */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionTitle
            eyebrow="Industries we support"
            title={<>Automation shaped around your <span className="italic text-[#A88659]">industry.</span></>}
            copy="Every industry has different operational requirements. A retail business may need better enquiry organisation, while a manufacturer may need more structured handling of product enquiries and internal information."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ name, href, icon: Icon, intro, items, note }, i) => (
            <Reveal key={name} delay={(i % 5) * 0.035}>
              <Link href={href} title={`Explore AI Automation for ${name}`} className="group block h-full">
                <article className="flex h-full flex-col border border-[#E8E1D7] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#A88659] hover:shadow-[0_18px_45px_-35px_rgba(18,40,71,.45)]">
                  <div className="flex items-center justify-between">
                    <Icon size={22} strokeWidth={1.25} className="text-[#A88659]" />
                    <ArrowUpRight size={15} className="text-[#B8A78F] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-7 font-serif text-[19px] leading-tight text-[#26364A]">{name}</h3>
                  <p className="mt-3 text-[11px] leading-[1.8] text-[#718092]">{intro}</p>
                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[.13em] text-[#9A7950]">Potential workflows</p>
                  <ul className="mt-2 space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2 text-[10px] leading-[1.65] text-[#617387]">
                        <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#A88659]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {note && <p className="mt-4 border-t border-[#EAE5DC] pt-3 text-[9px] leading-[1.7] text-[#8A949D]">{note}</p>}
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* LOCAL AREAS */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Across Vasai" title={<>Local workflows deserve practical <span className="italic text-[#A88659]">automation.</span></>} copy="Different business areas have different operational needs. Automation should be designed around the tasks businesses actually perform, rather than introducing unnecessary technology."/></Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">{areas.map((area,i)=><Reveal key={area.name} delay={i*.06}><article className="relative flex h-full flex-col overflow-hidden border border-[#E5DED3] bg-gradient-to-br from-[#F0F3F3] via-[#F8F7F2] to-[#F3EEE7] p-7 sm:p-8"><div className="absolute -right-14 -top-14 h-64 w-64 rounded-full border border-[#26364A]/[.07]"/><div className="absolute -right-3 top-0 h-44 w-44 rounded-full border border-[#A88659]/30"/><div className="relative flex h-full flex-col"><span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#9A7950]"><MapPin size={13}/>{area.name}</span><h3 className="mt-6 font-serif text-[27px] leading-tight text-[#26364A]">{area.title}</h3><p className="mt-4 text-[12px] leading-[1.9] text-[#68798A]">{area.copy}</p><ul className="mt-6 space-y-3">{area.items.map(x=><li key={x} className="flex gap-2 text-[10px] leading-[1.7] text-[#52677D]"><Check size={13} className="mt-0.5 shrink-0 text-[#A88659]"/>{x}</li>)}</ul><p className="mt-6 border-t border-[#DED9CF] pt-4 text-[10px] leading-[1.85] text-[#7B8792]">{area.note}</p></div></article></Reveal>)}</div>
      </div>
    </section>

    {/* AI VS TRADITIONAL */}
    <section className="bg-[#F4F5F2] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="Choose the right approach" title={<>AI automation or traditional <span className="italic text-[#A88659]">automation?</span></>} copy="Not every business task needs artificial intelligence. Some processes are better handled through straightforward automation, while others may benefit from AI-assisted capabilities."/></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal><article className="h-full border border-[#E4E1D9] bg-white p-7 sm:p-9"><div className="flex items-center gap-3 text-[#A88659]"><Settings2 size={21}/><span className="text-[10px] font-semibold uppercase tracking-[.18em]">Rule-based workflows</span></div><h3 className="mt-6 font-serif text-[29px] text-[#26364A]">Traditional Workflow Automation</h3><p className="mt-4 text-[12px] leading-[1.9] text-[#718092]">Suitable for repetitive tasks that follow clearly defined rules.</p><ul className="mt-6 space-y-3">{["Sending notifications after form submissions","Updating spreadsheet records","Creating task reminders","Moving information between supported applications","Triggering routine follow-up workflows"].map(x=><li key={x} className="flex gap-3 border-b border-[#ECE7DE] pb-3 text-[11px] text-[#52677D]"><Check size={14} className="shrink-0 text-[#A88659]"/>{x}</li>)}</ul></article></Reveal>
          <Reveal delay={.08}><article className="h-full border border-[#DCCDB8] bg-[#F8F5EF] p-7 sm:p-9"><div className="flex items-center gap-3 text-[#A88659]"><BrainCircuit size={21}/><span className="text-[10px] font-semibold uppercase tracking-[.18em]">AI-assisted processes</span></div><h3 className="mt-6 font-serif text-[29px] text-[#26364A]">AI-Assisted Automation</h3><p className="mt-4 text-[12px] leading-[1.9] text-[#718092]">Suitable for workflows that involve interpreting, classifying or processing information.</p><ul className="mt-6 space-y-3">{["Categorising customer enquiries","Summarising documents","Processing written information","Drafting response suggestions","Organising unstructured text","Answering supported questions using approved information"].map(x=><li key={x} className="flex gap-3 border-b border-[#E6DED2] pb-3 text-[11px] text-[#52677D]"><Check size={14} className="shrink-0 text-[#A88659]"/>{x}</li>)}</ul></article></Reveal>
        </div>
        <div className="mt-7 border-l-2 border-[#A88659] bg-white/70 p-5 sm:p-6"><h3 className="font-serif text-[21px] text-[#26364A]">Which should your business choose?</h3><p className="mt-2 text-[12px] leading-[1.9] text-[#718092]">Use traditional automation when a task follows predictable rules. Consider AI-assisted automation when a workflow requires language understanding or information interpretation. In some cases, combining both approaches can provide a more practical solution.</p></div>
      </div>
    </section>

    {/* BUSINESS TASKS */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20"><Reveal><SectionTitle eyebrow="Where to begin" title={<>Find the repetitive work worth <span className="italic text-[#A88659]">improving.</span></>} copy="The best automation opportunities often begin with tasks that are repeated frequently and follow a reasonably clear process."/></Reveal>
        <div className="grid gap-x-8 sm:grid-cols-2">{tasks.map(([title,copy,icon],i)=>{const Icon=icon as IconType;return <Reveal key={title as string} delay={(i%2)*.04}><article className="flex h-full gap-4 border-b border-[#EAE5DC] py-5"><span className="mt-1 text-[#A88659]"><Icon size={19} strokeWidth={1.3}/></span><div><h3 className="text-[13px] font-semibold text-[#344A60]">{title as string}</h3><p className="mt-2 text-[11px] leading-[1.85] text-[#718092]">{copy as string}</p></div></article></Reveal>})}</div>
      </div>
      <p className="mx-auto mt-8 max-w-[1200px] border-l-2 border-[#A88659] pl-4 text-[11px] leading-[1.9] text-[#7B8792]">The objective is not to automate everything. It is to identify tasks where automation can create practical value without adding unnecessary complexity.</p>
    </section>

    {/* PROCESS */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="How we work" title={<>From identifying repetitive tasks to building a <span className="italic text-[#A88659]">useful workflow.</span></>} copy="A considered process helps keep the proposed automation connected to your business requirements and the people who use it."/></Reveal>
        <div className="mt-14 grid gap-0 border-y border-[#D4C9B8] md:grid-cols-4">{process.map(([title,copy],i)=><Reveal key={title} delay={i*.04}><article className={`flex h-full flex-col py-7 md:px-6 ${i===0?"md:pl-0":""} ${i%4!==3?"md:border-r md:border-[#D4C9B8]":""}`}><h3 className="mt-7 font-serif text-[23px] leading-tight text-[#26364A]">{title}</h3><p className="mt-3 min-h-[90px] text-[11px] leading-[1.9] text-[#68798A]">{copy}</p><div className="mt-5 border-t border-[#D4C9B8] pt-4 text-[9px] uppercase tracking-[.15em] text-[#9A7950]">Workflow stage</div></article></Reveal>)}</div>
      </div>
    </section>

    {/* WHY SHARP RAYS */}
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20"><Reveal><SectionTitle eyebrow="Why Sharp Rays" title={<>Practical automation. <span className="italic text-[#A88659]">Real business context.</span></>} copy="Automation should solve an actual business problem. Adding technology without understanding the workflow can create unnecessary complexity."/></Reveal>
        <div className="grid gap-x-8 sm:grid-cols-2">{reasons.map(([title,copy,icon],i)=>{const Icon=icon as IconType;return <Reveal key={title as string} delay={(i%2)*.05}><article className="border-b border-[#EAE5DC] py-6"><Icon size={21} strokeWidth={1.3} className="text-[#A88659]"/><h3 className="mt-4 font-serif text-[21px] text-[#26364A]">{title as string}</h3><p className="mt-2 text-[11px] leading-[1.9] text-[#718092]">{copy as string}</p></article></Reveal>})}</div>
      </div>
    </section>

    {/* OTHER SERVICES */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]"><Reveal><SectionTitle eyebrow="10 / More from Sharp Rays" title={<>Complete digital solutions to build and grow your <span className="italic text-[#A88659]">online presence.</span></>} copy="AI automation is one part of your digital growth strategy. Explore the wider services Sharp Rays offers to help businesses strengthen their online presence and customer communication."/></Reveal>
        <div className="mt-12 grid gap-x-10 md:grid-cols-2">{otherServices.map(([title,copy,href],i)=><Reveal key={title} delay={(i%2)*.04}><Link href={href} className="group flex h-full items-start justify-between gap-4 border-t border-[#D8CDBD] py-6"><div><h3 className="font-serif text-[21px] text-[#26364A] transition group-hover:text-[#9A7950]">{title}</h3><p className="mt-2 max-w-[470px] text-[11px] leading-[1.85] text-[#718092]">{copy}</p><span className="mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.14em] text-[#9A7950]">Explore service <ArrowUpRight size={13}/></span></div><ArrowUpRight size={17} className="mt-1 shrink-0 text-[#A88659] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></Link></Reveal>)}</div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-[#D8CDBD] pt-7"><p className="max-w-[570px] text-[12px] leading-[1.9] text-[#718092]">Combine automation with website development, performance marketing and social media marketing for a more connected digital workflow.</p><Link href="/services" className="inline-flex min-h-11 items-center gap-3 border border-[#D8D0C4] bg-white/70 px-5 text-[10px] font-semibold uppercase tracking-[.13em] text-[#344A60] transition hover:border-[#A88659] hover:bg-white">Explore all services <ArrowUpRight size={15}/></Link></div>
      </div>
    </section>

    {/* DIGITAL ECOSYSTEM */}
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><Reveal><SectionTitle eyebrow="11 / Connected digital workflows" title={<>Connect your website, marketing and <span className="italic text-[#A88659]">business processes.</span></>} copy="Automation can become more useful when your website, marketing activities and customer communication processes work together."/></Reveal>
        <Reveal delay={.08}><div className="border border-[#E3DDD2] bg-[#F5F1EA] p-6 sm:p-8"><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{[{name:"Website forms",icon:MonitorSmartphone},{name:"Campaign leads",icon:Target},{name:"Social enquiries",icon:MessageCircle},{name:"AI-assisted sorting",icon:BrainCircuit},{name:"Team notifications",icon:Bell},{name:"Reporting data",icon:Database}].map(({name,icon:Icon},i)=><div key={name} className="flex min-h-[112px] flex-col justify-between border border-[#E2DACE] bg-white p-4"><Icon size={19} className="text-[#A88659]"/><p className="text-[10px] font-medium text-[#52677D]">{name}</p></div>)}</div><div className="mt-4 flex items-center justify-center gap-3 border border-[#D8CDBD] bg-[#F5EFE5] p-4 text-[10px] font-semibold uppercase tracking-[.15em] text-[#806D52]"><Workflow size={16}/> Connected business workflow</div></div></Reveal>
      </div>
      <div className="mx-auto mt-8 max-w-[1200px]"><p className="text-[11px] leading-[1.9] text-[#7B8792]">For example, website forms can feed enquiry information into a supported lead workflow; paid campaigns can connect with structured lead collection; social enquiries can be organised through supported integrations; AI-assisted workflows can categorise information; internal notifications can help teams respond; and reporting workflows can organise selected business information. The actual workflow depends on your website, software, permissions, integrations and data requirements. Automation does not replace good business processes. It works best when the underlying process is clearly understood and appropriately designed.</p><p className="mt-4 text-[11px] leading-[1.9] text-[#718092]">Explore <Link className="underline decoration-[#A88659] underline-offset-4" href="/services/website-development">website development</Link>, <Link className="underline decoration-[#A88659] underline-offset-4" href="/services/performance-marketing">performance marketing</Link> and <Link className="underline decoration-[#A88659] underline-offset-4" href="/services/social-media-marketing">social media marketing</Link>.</p></div>
    </section>

    {/* PRICING */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20"><Reveal><Eyebrow>Project options</Eyebrow><h2 className="mt-5 font-serif text-[36px] leading-[1.12] tracking-[-.04em] text-[#26364A] sm:text-[46px]">Automation shaped around your <span className="italic text-[#A88659]">requirements.</span></h2><p className="mt-5 text-[13px] leading-[1.95] text-[#718092]">AI automation requirements differ depending on workflow complexity, the number of applications involved, integration availability, data handling and testing requirements.</p><p className="mt-4 text-[11px] leading-[1.85] text-[#7B8792]">Confirm the number of workflows, supported applications, setup requirements, testing, maintenance and any third-party software costs before starting.</p><div className="mt-7"><Link href="/pricing" className="inline-flex min-h-11 items-center gap-3 border border-[#D8D0C4] bg-white/70 px-5 text-[10px] font-semibold uppercase tracking-[.13em] text-[#344A60] transition hover:border-[#A88659] hover:bg-white">View pricing details <ArrowUpRight size={15}/></Link></div></Reveal>
        <div className="grid gap-3 sm:grid-cols-3">{[["Starter","₹14,999","Published option"],["Growth","₹24,999","Published option"],["Advanced","₹39,999","Published option"]].map(([name,price,label],i)=><Reveal key={name} delay={i*.06}><article className={`min-h-[190px] border p-5 ${i===1?"border-[#A88659] bg-[#F9F5ED]":"border-[#E3DDD2] bg-white/80"}`}><span className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#9A7950]">{label}</span><h3 className="mt-5 font-serif text-[20px] text-[#26364A]">{name}</h3><p className="mt-4 font-serif text-[29px] tracking-[-.04em] text-[#26364A]">{price}</p><p className="mt-2 text-[9px] leading-[1.7] text-[#87919A]">See current inclusions and scope on the pricing page.</p></article></Reveal>)}</div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28" aria-labelledby="vasai-ai-faq-heading">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-[800px] text-center">
          <Eyebrow>AI Automation Questions Answered</Eyebrow>
          <h2 id="vasai-ai-faq-heading" className="font-serif text-[clamp(32px,4.5vw,52px)] leading-[1.12] tracking-[-0.04em] text-[#26364A]">
            Frequently Asked Questions About{" "}
            <span className="italic text-[#A88659]">AI Automation Services in Vasai.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
          {faqs.map(([q, a], i) => (
            <Reveal key={q} delay={i * 0.015}>
              <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white text-[#B79A72]">
                  <MessageCircle size={15} strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="font-serif text-[19px] leading-[1.4] text-[#26364A] sm:text-[21px]">{q}</h3>
                  <p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">{a}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="bg-[#F0EBE3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-[6px] bg-[#26364A] px-7 py-14 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10"/>
        <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-white/10"/>
        <Reveal className="relative mx-auto max-w-[760px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D2B991]">Let's Make Your Workflows Simpler</p>
          <h2 className="font-serif text-[clamp(34px,5vw,58px)] leading-[1.1] tracking-[-0.04em] text-white">Ready to make your business work <span className="italic text-[#D2B991]">smarter?</span></h2>
          <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-[2] text-white/65">Whether you manage customer enquiries, coordinate appointments or handle repetitive business tasks, let's identify where practical automation can make your processes easier to manage.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <SoftLink href="/contact?source=vasai-ai-automation">Discuss Your Automation Requirements</SoftLink>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#26364A]">Explore All Services <ArrowUpRight size={14}/></Link>
          </div>
        </Reveal>
      </div>
    </section>
  </main>;
}
