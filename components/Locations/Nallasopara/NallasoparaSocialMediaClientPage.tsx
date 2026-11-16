"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, MessageCircle, Clapperboard, CalendarDays,
  Camera, Play, Users, ShoppingBag, GraduationCap, MapPin, BarChart3, Lightbulb,
  Palette, Smartphone, Video, Search, MonitorSmartphone, Megaphone, Newspaper,
  Film, FileText, Workflow, Sparkles, HeartPulse, Factory, BriefcaseBusiness,
  Building2, UtensilsCrossed, Rocket, Globe2, Check, Send, Eye, MousePointer2,
  MessageSquareText, ChartNoAxesCombined, Store, CirclePlay, Share2
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, delay: reduced ? 0 : delay, ease }}>{children}</motion.div>;
}
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.24em] ${light ? "text-[#E7B49C]" : "text-[#B56E54]"}`}><span className={`h-px w-8 ${light ? "bg-[#A86E5D]" : "bg-[#D9B6A7]"}`} />{children}</div>;
}
function Heading({ eyebrow, title, copy, light = false, center = false }: { eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean; center?: boolean }) {
  return <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}><div className={center ? "flex justify-center" : ""}><Eyebrow light={light}>{eyebrow}</Eyebrow></div><h2 className={`mt-5 font-[var(--font-new-york),Georgia,serif] text-[35px] font-normal leading-[1.1] tracking-[-.045em] sm:text-[45px] lg:text-[52px] ${light ? "text-[#FFF9F3]" : "text-[#142B43]"}`}>{title}</h2>{copy && <p className={`mt-5 max-w-[680px] text-[14px] leading-[1.9] ${light ? "text-[#C6D0D8]" : "text-[#687987]"} ${center ? "mx-auto" : ""}`}>{copy}</p>}</div>;
}
function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} title={typeof children === "string" ? children : "Contact Sharp Rays about social media marketing"} className="group inline-flex items-center justify-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 py-[15px] text-[12px] font-semibold tracking-[.02em] text-white transition duration-300 hover:bg-[#173F6F]">{children}<ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>;
}
function OutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} title={typeof children === "string" ? children : "Explore social media marketing services"} className="inline-flex items-center justify-center gap-3 rounded-[9px] border border-[#D8C8B8] bg-white/65 px-6 py-[14px] text-[12px] font-semibold text-[#203B54] transition hover:border-[#B56E54] hover:bg-white">{children}<ArrowRight size={14} /></Link>;
}

const socialServices = [
  { icon: Lightbulb, title: "Social Media Strategy", text: "A platform and content direction shaped around your audience, offer, business priorities and realistic publishing capacity.", tag: "Direction first", tint: "bg-[#F6E7DF]" },
  { icon: CalendarDays, title: "Content Planning & Calendars", text: "A practical monthly plan connecting themes, formats, campaigns, offers and publishing dates into one consistent rhythm.", tag: "Consistent presence", tint: "bg-[#E8EDF2]" },
  { icon: Clapperboard, title: "Instagram Reels & Short-form Video", text: "Reel concepts, hooks, scripts and edits that turn products, services, FAQs and everyday business moments into watchable stories.", tag: "Short-form storytelling", tint: "bg-[#EEE8F2]" },
  { icon: Palette, title: "Social Creatives & Carousels", text: "Branded posts, educational carousels, offer creatives and campaign visuals with a recognisable visual language.", tag: "Visual identity", tint: "bg-[#F4EBDD]" },
  { icon: MessageSquareText, title: "Captions & Content Writing", text: "Clear captions, calls to action and post copy that help people understand the offer and take a useful next step.", tag: "Useful messaging", tint: "bg-[#E5EEE8]" },
  { icon: Users, title: "Community & Engagement Support", text: "A considered approach to comments, messages and audience interactions, with response boundaries agreed in advance.", tag: "Audience connection", tint: "bg-[#F5E7E7]" },
  { icon: Megaphone, title: "Campaigns & Offer Promotion", text: "Coordinate launches, seasonal offers, admission windows and product communication across relevant social formats.", tag: "Campaign moments", tint: "bg-[#E7EDF5]" },
  { icon: ChartNoAxesCombined, title: "Insights & Performance Reporting", text: "Review reach, saves, shares, profile actions, enquiries and content patterns to inform the next planning cycle.", tag: "Learn and improve", tint: "bg-[#E9EEE5]" },
];

const industries = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", icon: Sparkles, copy: "Treatment explainers, service showcases, creator-style Reels and appointment-led content." },
  { name: "Ecommerce", href: "/industries/ecommerce", icon: ShoppingBag, copy: "Product demos, use-case videos, launches, customer questions and offer communication." },
  { name: "Education", href: "/industries/education", icon: GraduationCap, copy: "Course explainers, faculty introductions, student FAQs and admission-focused campaigns." },
  { name: "Healthcare", href: "/industries/healthcare", icon: HeartPulse, copy: "Responsible health education, practitioner introductions and clear service information." },
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory, copy: "Process videos, product capabilities, facility stories and B2B brand communication." },
  { name: "Professional Services", href: "/industries/professional-services", icon: BriefcaseBusiness, copy: "Expert insights, service explainers, founder perspectives and trust-building content." },
  { name: "Real Estate", href: "/industries/real-estate", icon: Building2, copy: "Property walkthroughs, project updates, location context and buyer education." },
  { name: "Restaurants", href: "/industries/restaurants", icon: UtensilsCrossed, copy: "Menu highlights, kitchen moments, new launches and local offer announcements." },
  { name: "Startups", href: "/industries/startup", icon: Rocket, copy: "Product storytelling, founder-led content, feature education and launch communication." },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", icon: Globe2, copy: "Destination stories, experience showcases, seasonal packages and useful travel content." },
];

const allServices = [
  { title: "Search Engine Optimisation (SEO)", desc: "Build search visibility through technical foundations, useful content and relevant optimisation.", icon: Search, href: "/locations/nalasopara/seo", tone: "bg-[#E7EDF3]" },
  { title: "Website Development & Management", desc: "Create responsive websites that explain your business and make enquiries easier.", icon: MonitorSmartphone, href: "/locations/nalasopara/website-development", tone: "bg-[#F5E8DE]" },
  { title: "Social Media Marketing", desc: "Plan social content, Reels and campaign communication around your audience and offers.", icon: Camera, href: "/locations/nalasopara/social-media-marketing", tone: "bg-[#F0E8F2]" },
  { title: "Performance Marketing", desc: "Structure paid campaigns, creative tests and conversion measurement around clear goals.", icon: BarChart3, href: "/services/performance-marketing", tone: "bg-[#E7EEE8]" },
  { title: "Digital PR & Media Relations", desc: "Shape brand stories and media communication around genuine business developments.", icon: Newspaper, href: "/services/digital-pr-and-media-relations", tone: "bg-[#F4EBDD]" },
  { title: "AI Video & Creative", desc: "Explore AI-assisted creative concepts and video workflows for business communication.", icon: Film, href: "/services/ai-video-and-creative", tone: "bg-[#E9EDF5]" },
  { title: "Professional Video Editing", desc: "Turn footage into polished Reels, Shorts and promotional videos with considered pacing.", icon: Video, href: "/services/video-editing", tone: "bg-[#F5E7E7]" },
  { title: "Content Marketing", desc: "Develop useful website pages, articles and resources around audience questions.", icon: FileText, href: "/services/content-marketing", tone: "bg-[#E6EEE8]" },
  { title: "AI Automation", desc: "Connect practical workflows for lead routing, follow-ups and repetitive business tasks.", icon: Workflow, href: "/services/ai-automation", tone: "bg-[#EEE8F2]" },
];

const faqs = [
  ["Does Sharp Rays provide social media marketing in Nalasopara?", "Sharp Rays offers social media strategy and marketing support for businesses targeting Nalasopara and nearby areas. The scope can include content planning, Instagram Reels, creative design, captions, campaign communication and performance reporting."],
  ["How much does social media marketing cost in Nalasopara?", "Social media marketing packages start at ₹14,999 per month, with higher starting packages at ₹24,999 and ₹39,999 per month. The final scope depends on platforms, content volume, creative requirements and agreed deliverables."],
  ["Can you create Instagram Reels for local retail businesses?", "Yes. Reels can be planned around product demonstrations, new arrivals, frequently asked questions, store highlights, seasonal offers and other relevant retail content."],
  ["Can social media help coaching classes with admissions?", "Social content can help explain courses, subjects, faculty, learning formats and admission information. Campaign timing and enquiry pathways should align with the institute's actual admission process."],
  ["Do you manage WhatsApp offers and enquiries?", "We can plan social content and offer communication that directs interested people to an appropriate WhatsApp contact or enquiry pathway. Reply handling and WhatsApp management must be defined in the agreed scope."],
  ["Which platforms do you support?", "The platform mix is selected according to the audience and business objective. Instagram and Facebook may suit visual and local communication, while LinkedIn or other platforms can be considered where relevant."],
  ["How many posts and Reels will be created each month?", "The monthly content volume depends on the selected package and agreed scope. The plan should specify the number and type of posts, Reels, stories, revisions and publishing support before work begins."],
  ["Will you guarantee followers, reach or sales?", "No. Social platform distribution and customer decisions cannot be guaranteed. We focus on a considered strategy, relevant creative, consistent execution and reviewing meaningful performance indicators."],
  ["Do you provide captions and creative designs?", "Yes. Captions and social creative design can be included according to the agreed content plan, brand requirements and monthly deliverables."],
  ["Can you promote seasonal offers and launches?", "Yes. Launches, festive campaigns, new products, admission windows and limited-time offers can be planned into the content calendar when the business details and timelines are confirmed."],
  ["Do you share monthly performance reports?", "Reporting can cover agreed indicators such as reach, engagement, saves, shares, profile actions, link activity and enquiries where tracking is available."],
  ["How can I get a social media marketing quote?", "Share your business type, social profiles, goals and the kind of content support you need. Sharp Rays can review the requirements and suggest a suitable monthly scope."],
];

export default function NalasoparaSocialMediaMarketingPageClient() {
  return <main className="overflow-hidden bg-[#FFFCF8] text-[#142B43]">
   
{/* HERO — Sharp Rays light premium editorial theme */}
<section className="relative isolate overflow-hidden bg-[#FFFEFC]">
  <div
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      backgroundImage:
        "radial-gradient(circle at 82% 18%, rgba(198,167,122,.16), transparent 30%), radial-gradient(circle at 12% 88%, rgba(11,42,82,.055), transparent 34%)",
    }}
  />

  <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-12 lg:pb-28 lg:pt-24">
    <Reveal>
      <Eyebrow>Social media marketing · Nalasopara</Eyebrow>

      <h1 className="mt-7 max-w-[650px] font-[var(--font-new-york),Georgia,serif] text-[46px] font-normal leading-[1.02] tracking-[-.055em] text-[#0B2A52] sm:text-[58px] lg:text-[70px]">
        Make your next post{" "}
        <span className="italic text-[#A1845F]">
          mean something.
        </span>
      </h1>

      <p className="mt-7 max-w-[590px] text-[14px] leading-[1.95] text-[#687987]">
        Social media marketing for Nalasopara businesses that need more than
        a posting schedule. Build a recognisable presence with Reels, useful
        content and WhatsApp-ready offer journeys for retail discovery and
        coaching admissions.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <PrimaryLink href="/contact">
          Get a Social Media Quote
        </PrimaryLink>

        <Link
          href="#social-services"
          title="Explore social media marketing services"
          className="inline-flex items-center gap-2 rounded-[9px] border border-[#D9CCBA] bg-white px-6 py-[14px] text-[12px] font-semibold text-[#0B2A52] transition hover:border-[#A1845F] hover:bg-[#FAF7F2]"
        >
          Explore Social Services <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#EAE3DA] pt-6 text-[10px] uppercase tracking-[.16em] text-[#7A8994]">
        <span className="flex items-center gap-2">
          <Camera size={14} className="text-[#A1845F]" />
          Instagram-first creative
        </span>
        <span className="flex items-center gap-2">
          <MessageCircle size={14} className="text-[#A1845F]" />
          WhatsApp-led enquiries
        </span>
        <span className="flex items-center gap-2">
          <Clapperboard size={14} className="text-[#A1845F]" />
          Reels & short-form video
        </span>
      </div>
    </Reveal>

    <Reveal delay={0.12} className="relative mx-auto w-full max-w-[520px]">
      <div className="relative rounded-[24px] border border-[#EAE2D7] bg-[#F8F5EF] p-4 shadow-[0_24px_70px_rgba(18,40,71,.09)] sm:p-5">
        <div className="flex items-center justify-between px-2 pb-4">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.2em] text-[#0B2A52]">
            <span className="h-2 w-2 rounded-full bg-[#A1845F]" />
            The content desk
          </div>
          <span className="text-[10px] text-[#8C8276]">
            NALASOPARA / SOCIAL
          </span>
        </div>

        <div className="grid grid-cols-[1.05fr_.95fr] gap-3">
          <div className="relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-[17px] bg-gradient-to-br from-[#E9DDCC] via-[#DCC9AF] to-[#C6A77A] p-5 text-[#0B2A52]">
            <div className="absolute -right-12 top-10 h-40 w-40 rounded-full border border-white/50" />
            <div className="absolute -right-3 top-20 h-28 w-28 rounded-full border border-white/50" />

            <span className="relative text-[9px] uppercase tracking-[.22em] text-[#5F5A50]">
              Reel concept / 01
            </span>

            <div className="relative">
              <p className="font-[var(--font-new-york),Georgia,serif] text-[34px] leading-[.98] tracking-[-.04em]">
                Show the
                <br />
                <i>why</i> behind
                <br />
                the offer.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[10px] text-[#46596A]">
                <CirclePlay size={16} /> Hook · story · action
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="flex min-h-[128px] flex-col justify-between rounded-[17px] border border-[#E5DED4] bg-[#FDFBF7] p-4 text-[#0B2A52]">
              <span className="text-[9px] uppercase tracking-[.18em] text-[#8B8175]">
                Retail / carousel
              </span>
              <div>
                <ShoppingBag size={22} className="text-[#A1845F]" />
                <p className="mt-3 font-[var(--font-new-york),Georgia,serif] text-[21px] leading-tight">
                  New in.
                  <br />
                  Worth a look.
                </p>
              </div>
            </div>

            <div className="flex min-h-[128px] flex-col justify-between rounded-[17px] border border-[#E8E0D5] bg-gradient-to-br from-[#F2EEE7] to-[#E9E1D5] p-4 text-[#0B2A52]">
              <span className="text-[9px] uppercase tracking-[.18em] text-[#8B8175]">
                Admissions / story
              </span>
              <div>
                <GraduationCap size={22} className="text-[#A1845F]" />
                <p className="mt-3 font-[var(--font-new-york),Georgia,serif] text-[21px] leading-tight">
                  Make course
                  <br />
                  choices clearer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-[13px] border border-[#EAE2D7] bg-white px-4 py-3">
          <div className="flex items-center gap-2 text-[10px] font-medium text-[#526475]">
            <MessageCircle size={15} className="text-[#A1845F]" />
            Social post → WhatsApp enquiry
          </div>
          <ArrowUpRight size={15} className="text-[#A1845F]" />
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 rounded-[12px] border border-[#E8DCCB] bg-[#FFFDF9] px-4 py-3 shadow-[0_12px_30px_rgba(18,40,71,.08)] sm:-left-8">
        <p className="text-[9px] uppercase tracking-[.18em] text-[#A1845F]">
          A useful content mix
        </p>
        <p className="mt-1 font-[var(--font-new-york),Georgia,serif] text-[20px] text-[#0B2A52]">
          Not just more posts.
        </p>
      </div>
    </Reveal>
  </div>

  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B2A52] via-[#C6A77A] to-[#E9DDCC]" />
</section>


    {/* DIRECT ANSWER */}
    <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:px-12">
      <Reveal className="grid gap-6 rounded-[20px] border border-[#E8DDD3] bg-[#F7F0E9] p-7 sm:p-9 lg:grid-cols-[190px_1fr] lg:items-start">
        <div><Eyebrow>At a glance</Eyebrow><p className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[25px] leading-tight text-[#17334D]">A social presence with a purpose.</p></div>
        <p className="text-[14px] leading-[2] text-[#526777]">Sharp Rays provides social media marketing for businesses targeting Nalasopara East, Nalasopara West and nearby areas. Services include Instagram strategy, Reels, creative design, captions, content calendars, campaign communication and performance reporting. We connect relevant content with clear next steps, including WhatsApp enquiries for retail offers and coaching admissions.</p>
      </Reveal>
    </section>

    {/* LOCAL STRATEGY — split panel */}
    <section className="mx-auto max-w-[1240px] px-5 pb-20 sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Reveal><Heading eyebrow="Local content angle" title={<>From the scroll to the <i>storefront.</i></>} copy="For a local audience, social content should answer a real question: what is available, why should someone consider it, and what should they do next? The strongest plan starts with the customer journey, not a random list of trending audio."/><div className="mt-7"><Link href="/locations/nalasopara" title="Explore digital marketing services in Nalasopara" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#B56E54] hover:text-[#0B2A52]">Explore Nalasopara location page <ArrowUpRight size={14}/></Link></div></Reveal>
        <Reveal delay={0.1} className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[18px] bg-[#E8EDF2] p-6"><div className="flex items-center justify-between"><Store size={22} className="text-[#B56E54]"/><span className="text-[9px] uppercase tracking-[.2em] text-[#6C7F8D]">Retail discovery</span></div><h3 className="mt-7 font-[var(--font-new-york),Georgia,serif] text-[27px] leading-tight text-[#17334D]">Make the offer easy to notice.</h3><p className="mt-3 text-[12px] leading-[1.85] text-[#607383]">Product demos, new arrivals, price or feature explainers, store moments and timely WhatsApp offer paths.</p><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white/75 px-3 py-1.5 text-[9px] text-[#526777]">Product Reels</span><span className="rounded-full bg-white/75 px-3 py-1.5 text-[9px] text-[#526777]">Offer stories</span></div></div>
          <div className="rounded-[18px] bg-[#F3E4DE] p-6 sm:translate-y-8"><div className="flex items-center justify-between"><GraduationCap size={22} className="text-[#B56E54]"/><span className="text-[9px] uppercase tracking-[.2em] text-[#8B6A5B]">Coaching admissions</span></div><h3 className="mt-7 font-[var(--font-new-york),Georgia,serif] text-[27px] leading-tight text-[#3D3440]">Make the course clearer.</h3><p className="mt-3 text-[12px] leading-[1.85] text-[#796B70]">Subject explainers, faculty introductions, batch information, student FAQs and admission enquiry prompts.</p><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-full bg-white/75 px-3 py-1.5 text-[9px] text-[#796B70]">Course explainers</span><span className="rounded-full bg-white/75 px-3 py-1.5 text-[9px] text-[#796B70]">Admission FAQs</span></div></div>
        </Reveal>
      </div>
    </section>

    {/* SERVICE GRID — cards */}
    <section id="social-services" className="bg-[#F5F1EB] py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <Reveal><Heading eyebrow="What we can manage" title={<>Social media services, <i>built as a system.</i></>} copy="A consistent social presence combines strategy, creative production, publishing and learning. Select the support your business needs, then define the monthly scope clearly." center/></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {socialServices.map((item, i) => { const Icon = item.icon; return <Reveal key={item.title} delay={i * .035}><article className="group flex h-full flex-col rounded-[17px] border border-[#E8DED4] bg-[#FFFCF8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(40,48,55,.08)]"><div className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${item.tint} text-[#A75F4A]`}><Icon size={21}/></div><span className="mt-6 text-[9px] font-semibold uppercase tracking-[.16em] text-[#B56E54]">{item.tag}</span><h3 className="mt-2 font-[var(--font-new-york),Georgia,serif] text-[22px] leading-tight text-[#17334D]">{item.title}</h3><p className="mt-3 text-[12px] leading-[1.85] text-[#6B7B86]">{item.text}</p><div className="mt-auto pt-5"><span className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#B56E54]">Explore the scope <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></span></div></article></Reveal> })}
        </div>
      </div>
    </section>

    {/* REELS / CONTENT FORMATS */}
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal><Heading eyebrow="Content formats" title={<>A feed with <i>different jobs.</i></>} copy="Every format should have a reason to exist. Mix discovery content with useful explanations, proof of process, timely offers and direct enquiry prompts."/><div className="mt-8"><PrimaryLink href="/contact">Plan My Content Mix</PrimaryLink></div></Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {n:"01",t:"Discovery Reels",d:"Hooks, demonstrations and short stories designed to introduce a product, service or idea.",c:"bg-[#F2E3DB]",i:Play},
            {n:"02",t:"Helpful Carousels",d:"Step-by-step explanations, checklists, comparisons and answers to common customer questions.",c:"bg-[#E8EDF2]",i:LayersIcon},
            {n:"03",t:"Stories & Updates",d:"Timely reminders, behind-the-scenes moments, availability updates and campaign prompts.",c:"bg-[#E9E5EF]",i:Eye},
            {n:"04",t:"WhatsApp Action Posts",d:"Clear offer details and contact prompts that make it easier to ask a question or enquire.",c:"bg-[#E7EEE8]",i:Send},
          ].map((x,i)=>{const Icon=x.i;return <Reveal key={x.t} delay={i*.05}><div className={`flex min-h-[190px] flex-col justify-between rounded-[18px] ${x.c} p-6`}><div className="flex items-start justify-between"><span className="text-[10px] uppercase tracking-[.2em] text-[#8B756C]">Format / {x.n}</span><Icon size={20} className="text-[#B56E54]"/></div><div><h3 className="font-[var(--font-new-york),Georgia,serif] text-[25px] text-[#18344D]">{x.t}</h3><p className="mt-2 text-[12px] leading-[1.8] text-[#637481]">{x.d}</p></div></div></Reveal>})}
        </div>
      </div>
    </section>

    {/* WHATSAPP FLOW */}
    <section className="bg-[#142F49] py-20 text-white">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <Reveal><Heading light eyebrow="From content to conversation" title={<>Make the next step <i>obvious.</i></>} copy="A social post can create interest, but the path after the post matters too. For suitable offers, connect the message to a clear WhatsApp or enquiry action without making the journey confusing."/></Reveal>
          <Reveal delay={.1}><div className="rounded-[20px] border border-white/10 bg-white/[.06] p-6 sm:p-8"><div className="mb-7 flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.2em] text-[#E7B49C]">Example customer journey</span><MessageCircle size={20} className="text-[#E7B49C]"/></div><div className="grid gap-3 sm:grid-cols-4">
            {[["01","See","A Reel or offer post"],["02","Understand","Details and context"],["03","Ask","WhatsApp or form"],["04","Follow up","Business response"]].map(([n,t,d],i)=><div key={n} className="relative rounded-[13px] bg-[#F8F0E9] p-4 text-[#17334D]"><span className="text-[9px] font-semibold tracking-[.16em] text-[#B56E54]">{n}</span><h3 className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[21px]">{t}</h3><p className="mt-2 text-[10px] leading-[1.65] text-[#71808B]">{d}</p>{i<3&&<ArrowRight size={13} className="absolute -right-[9px] top-1/2 z-10 hidden -translate-y-1/2 text-[#E7B49C] sm:block"/>}</div>)}
          </div><p className="mt-5 text-[11px] leading-[1.8] text-[#C4D0D9]">The journey is an example, not a promise of enquiry volume. Response time, offer relevance and the actual customer experience remain important.</p></div></Reveal>
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12">
      <Reveal><Heading eyebrow="How we work" title={<>A clear rhythm from brief to <i>better decisions.</i></>} copy="The process keeps the content connected to the business objective and makes the monthly scope easier to understand."/></Reveal>
      <div className="mt-10 grid gap-3 md:grid-cols-5">
        {[
          ["Understand","Audience, offer, platforms and business priorities."],
          ["Plan","Content pillars, monthly calendar and campaign moments."],
          ["Create","Reel concepts, scripts, captions and visual assets."],
          ["Publish","Approved content scheduled or handed over as agreed."],
          ["Review","Insights, content patterns and next-cycle improvements."],
        ].map(([t,d],i)=><Reveal key={t} delay={i*.05}><div className={`h-full rounded-[16px] p-5 ${["bg-[#F4E5DC]","bg-[#E8EDF2]","bg-[#EEE8F2]","bg-[#E6EEE8]","bg-[#F3EBDD]"][i]}`}><div className="mb-8 h-[3px] w-10 rounded-full bg-[#C77960]"/><h3 className="font-[var(--font-new-york),Georgia,serif] text-[24px] text-[#17334D]">{t}</h3><p className="mt-3 text-[12px] leading-[1.8] text-[#657783]">{d}</p></div></Reveal>)}
      </div>
    </section>

    {/* INDUSTRIES */}
    <section className="bg-[#F5F1EB] py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <Reveal><Heading eyebrow="Industry-aware content" title={<>Different businesses. <i>Different stories.</i></>} copy="The format, message and customer action should reflect the industry. Explore the sectors Sharp Rays supports." center/></Reveal>
        <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((x,i)=>{const Icon=x.icon;return <Reveal key={x.name} delay={i*.025}><Link href={x.href} title={`Explore ${x.name} digital marketing services`} className="group block h-full rounded-[15px] border border-[#E6DCD2] bg-[#FFFCF8] p-5 transition hover:-translate-y-1 hover:border-[#D6A18D] hover:shadow-lg"><div className="flex items-center justify-between"><Icon size={20} className="text-[#B56E54]"/><ArrowUpRight size={14} className="text-[#9AABB5] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-6 font-[var(--font-new-york),Georgia,serif] text-[19px] leading-tight text-[#17334D]">{x.name}</h3><p className="mt-2 text-[11px] leading-[1.75] text-[#71808B]">{x.copy}</p></Link></Reveal>})}
        </div>
      </div>
    </section>

    {/* ALL SHARP RAYS SERVICES */}
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><Reveal><Heading eyebrow="Beyond social media" title={<>One connected digital <i>ecosystem.</i></>} copy="Social content can work alongside your website, search visibility, creative production and lead workflows. Explore the wider Sharp Rays services."/></Reveal><Reveal><Link href="/services" title="Explore all Sharp Rays digital marketing services" className="inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold text-[#B56E54] hover:text-[#0B2A52]">All services <ArrowUpRight size={14}/></Link></Reveal></div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {allServices.map((x,i)=>{const Icon=x.icon;return <Reveal key={x.title} delay={i*.03}><Link href={x.href} title={`Explore ${x.title} by Sharp Rays`} className={`group flex h-full items-start gap-4 rounded-[15px] border border-[#E8DED4] ${x.tone} p-5 transition hover:-translate-y-1 hover:shadow-md`}><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-white/75 text-[#B56E54]"><Icon size={18}/></div><div className="min-w-0 flex-1"><h3 className="font-[var(--font-new-york),Georgia,serif] text-[19px] leading-tight text-[#17334D]">{x.title}</h3><p className="mt-2 text-[11px] leading-[1.75] text-[#687B88]">{x.desc}</p><span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-[#A65F49]">Explore <ArrowUpRight size={12} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></span></div></Link></Reveal>})}
      </div>
    </section>

    {/* PRICING */}
    <section className="bg-[#F1E8DF] py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal><Heading eyebrow="Monthly social media packages" title={<>Choose the support your <i>content needs.</i></>} copy="Transparent starting points for planning a suitable monthly scope. The final package should define platforms, creative volume, Reels, publishing responsibilities and reporting."/></Reveal>
          <Reveal><div className="grid gap-3 sm:grid-cols-3">
            {[["Starter","₹14,999","For a focused social presence and a clear monthly content rhythm."],["Growth","₹24,999","For broader content coverage and a more active creative calendar."],["Advanced","₹39,999","For more involved campaigns, content formats and coordinated execution."]].map(([n,p,d],i)=><div key={n} className={`rounded-[17px] p-5 ${i===1?"bg-[#17344D] text-white shadow-xl":"bg-[#FFFCF8] text-[#17344D]"}`}><span className={`text-[9px] font-semibold uppercase tracking-[.2em] ${i===1?"text-[#E7B49C]":"text-[#B56E54]"}`}>{n}</span><p className="mt-4 font-[var(--font-new-york),Georgia,serif] text-[31px] tracking-[-.04em]">{p}<span className={`ml-1 font-sans text-[10px] tracking-normal ${i===1?"text-[#C7D3DC]":"text-[#788792]"}`}>/mo*</span></p><p className={`mt-3 min-h-[62px] text-[11px] leading-[1.75] ${i===1?"text-[#C7D3DC]":"text-[#71808B]"}`}>{d}</p><Link href="/pricing" title={`View Sharp Rays pricing and ${n} package details`} className={`mt-5 inline-flex items-center gap-2 text-[10px] font-semibold ${i===1?"text-[#E7B49C]":"text-[#A65F49]"}`}>View pricing <ArrowUpRight size={13}/></Link></div>)}
          </div></Reveal>
        </div>
        <p className="mt-6 text-[10px] leading-[1.7] text-[#7C746D]">*Starting monthly prices. Final pricing and deliverables depend on platforms, content volume, production requirements and the agreed scope. Paid advertising budgets, if any, are separate.</p>
      </div>
    </section>

    {/* WHY SHARP RAYS */}
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal><Heading eyebrow="Why Sharp Rays" title={<>Creative with a <i>business reason.</i></>} copy="A useful social media plan should look and sound like the business it represents, while keeping the audience's needs and the next action in view."/></Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Audience before trends","Choose formats and topics for the people the business needs to reach."],
            ["A recognisable creative system","Build consistency across visuals, tone, content pillars and recurring formats."],
            ["Clear scope and deliverables","Agree on content volume, approvals, publishing and reporting before execution."],
            ["Connected customer journeys","Link social content with relevant website pages, enquiries and business follow-up."],
          ].map(([t,d],i)=><Reveal key={t} delay={i*.05}><div className="flex gap-4 border-b border-[#E8DED4] py-5"><div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4E5DC] text-[#B56E54]"><Check size={15}/></div><div><h3 className="font-[var(--font-new-york),Georgia,serif] text-[21px] text-[#17334D]">{t}</h3><p className="mt-2 text-[12px] leading-[1.8] text-[#71808B]">{d}</p></div></div></Reveal>)}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-[#F7F3EE] py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <Reveal><Heading eyebrow="Frequently asked questions" title={<>A few things worth <i>knowing.</i></>} copy="Clear answers about social media marketing, content scope and monthly planning." center/></Reveal>
        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {faqs.map(([q,a],i)=><Reveal key={q} delay={(i%2)*.04}><div className="border-t border-[#DCD2C8] py-6"><div className="flex items-start gap-4"><span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0DFD5] text-[#A65F49]"><MessageCircle size={14}/></span><div><h3 className="font-[var(--font-new-york),Georgia,serif] text-[20px] leading-snug text-[#17334D]">{q}</h3><p className="mt-3 text-[12px] leading-[1.9] text-[#6D7D88]">{a}</p></div></div></div></Reveal>)}
        </div>
      </div>
    </section>

    {/* INTERNAL LOCATION LINKS */}
    <section className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-5 border-b border-[#E8DED4] pb-8 sm:flex-row sm:items-center sm:justify-between"><div><Eyebrow>Explore nearby service areas</Eyebrow><h2 className="mt-3 font-[var(--font-new-york),Georgia,serif] text-[25px] text-[#17334D]">Social media marketing around Nalasopara</h2></div><div className="flex flex-wrap gap-4 text-[11px] font-semibold text-[#A65F49]"><Link href="/locations/vasai-road/social-media-marketing" title="Social media marketing services in Vasai Road" className="inline-flex items-center gap-1">Vasai Road <ArrowUpRight size={12}/></Link><Link href="/locations/virar/social-media-marketing" title="Social media marketing services in Virar" className="inline-flex items-center gap-1">Virar <ArrowUpRight size={12}/></Link><Link href="/locations/nalasopara" title="Digital marketing services in Nalasopara" className="inline-flex items-center gap-1">Nalasopara <ArrowUpRight size={12}/></Link></div></div>
      <p className="mt-6 text-[11px] leading-[1.8] text-[#75838C]">Explore the wider <Link href="/services/social-media-marketing" title="Social media marketing service overview by Sharp Rays" className="font-semibold text-[#A65F49] underline decoration-[#D8B5A6] underline-offset-4">social media marketing service</Link> or browse all <Link href="/locations" title="Sharp Rays location pages" className="font-semibold text-[#A65F49] underline decoration-[#D8B5A6] underline-offset-4">Sharp Rays locations</Link>.</p>
    </section>

    {/* CTA */}
    <section className="px-5 pb-20 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[24px] bg-[#17334D] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
        <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-white/20"/><div className="absolute -right-2 -top-10 h-56 w-56 rounded-full border border-white/20"/>
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><Eyebrow light>Let's shape your next month</Eyebrow><h2 className="mt-5 max-w-[700px] font-[var(--font-new-york),Georgia,serif] text-[38px] leading-[1.06] tracking-[-.04em] text-white sm:text-[52px]">Give your social presence a clearer point of view.</h2><p className="mt-5 max-w-[620px] text-[13px] leading-[1.9] text-white/85">Tell us about your business, your audience and what you want social media to help you communicate. We’ll help outline a practical direction and monthly scope.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact" title="Get a free social media marketing consultation from Sharp Rays" className="inline-flex items-center gap-3 rounded-[9px] bg-white px-6 py-[15px] text-[12px] font-semibold text-[#17334D] transition hover:bg-[#FFF3EA]">Get a Free Quote <ArrowUpRight size={15}/></Link><Link href="/pricing" title="Explore Sharp Rays pricing" className="inline-flex items-center gap-3 rounded-[9px] border border-white/50 px-6 py-[14px] text-[12px] font-semibold text-white transition hover:bg-white/10">View Pricing <ArrowRight size={14}/></Link></div></div>
      </div>
      <p className="mx-auto mt-7 max-w-[1240px] text-center font-[var(--font-new-york),Georgia,serif] text-[18px] text-[#6E7D87]">Sharp Rays — We Create the “Oh, Wow.”!</p>
    </section>
  </main>;
}

function LayersIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return <Share2 size={size} className={className}/>;
}
