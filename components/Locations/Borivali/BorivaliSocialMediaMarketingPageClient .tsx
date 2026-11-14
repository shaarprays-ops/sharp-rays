"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode, ElementType } from "react";
import {
  ArrowRight, ArrowUpRight, Megaphone,
  MessageCircle, Target, Palette, CalendarDays, BarChart3, Clapperboard,
  Camera, Sparkles, Store, HeartPulse, GraduationCap, Utensils, Home,
  BriefcaseBusiness, Flower2, ShoppingBag, Factory, Lightbulb, Plane,
  Search, ClipboardList, FileText, Eye, Layers3
} from "lucide-react";

type IconType = ElementType;

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.22em] text-[#A1845F] sm:text-[10px]">
    <span className="h-px w-5 bg-[#C6A77A]" />
    {children}
  </span>
);

const Heading = ({
  eyebrow, title, copy, center = false,
}: {
  eyebrow: string; title: ReactNode; copy?: string; center?: boolean;
}) => (
  <Reveal>
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[850px]`}>
      <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4.2vw,52px)] leading-[1.12] tracking-[-.045em] text-[#0B2A52]">{title}</h2>
      {copy ? <p className={`mt-5 text-[13px] leading-[2] text-[#657889] sm:text-[14px] ${center ? "mx-auto max-w-[730px]" : ""}`}>{copy}</p> : null}
    </div>
  </Reveal>
);

const approach = [
  { title: "Strategy", copy: "Define your audience, content direction, platform priorities and communication goals before publishing.", icon: Target, tint: "from-[#EAF0F2] to-[#FAFBFA]" },
  { title: "Creative Content", copy: "Develop visual content, captions, Reels and campaign creatives that communicate your brand clearly.", icon: Palette, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
  { title: "Consistent Publishing", copy: "Build a practical content calendar that keeps your brand active and recognisable.", icon: CalendarDays, tint: "from-[#EEEAF2] to-[#FAF8FB]" },
  { title: "Performance Insights", copy: "Review available platform insights to understand content performance and identify opportunities to improve.", icon: BarChart3, tint: "from-[#EAF0EB] to-[#F8FAF7]" },
];

const services: { title: string; copy: string; icon: IconType; tint: string }[] = [
  { title: "Social Media Strategy", copy: "Set content pillars, audience direction, platform priorities and a practical publishing approach aligned with your business goals.", icon: Target, tint: "from-[#EAF0F2] to-[#FAFBFA]" },
  { title: "Social Media Account Management", copy: "Plan and coordinate your social media presence with a consistent content direction and publishing schedule.", icon: ClipboardList, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
  { title: "Instagram Marketing", copy: "Develop Instagram-focused content strategies covering Reels, posts, Stories, profile presentation and audience engagement.", icon: Camera, tint: "from-[#EEEAF2] to-[#FAF8FB]" },
  { title: "Reels and Short-Form Video", copy: "Create short-form video concepts and content designed to present products, services, ideas and brand stories.", icon: Clapperboard, tint: "from-[#F3EAE9] to-[#FCF8F6]" },
  { title: "Social Media Creatives", copy: "Develop branded visual content for regular posts, announcements, promotions and campaigns.", icon: Palette, tint: "from-[#EAF0EB] to-[#F8FAF7]" },
  { title: "Content Calendar and Captions", copy: "Organise content themes, publishing schedules, captions and calls to action into a structured calendar.", icon: CalendarDays, tint: "from-[#F1EDE2] to-[#FBF9F3]" },
  { title: "Festive and Seasonal Campaigns", copy: "Plan relevant creative themes and social media communication for festive periods, seasonal promotions and business occasions.", icon: Sparkles, tint: "from-[#EAF0F3] to-[#FAFBFA]" },
  { title: "Performance Review and Optimisation", copy: "Use available platform insights to review reach, engagement, content interactions and other relevant indicators.", icon: BarChart3, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
];

const contentIdeas: { title: string; copy: string; icon: IconType; tint: string }[] = [
  { title: "Product Showcase Reels", copy: "Present jewellery collections, product details, new arrivals and visual highlights through short-form videos.", icon: Camera, tint: "bg-[#F5EBDD]" },
  { title: "Festive Campaign Creatives", copy: "Plan campaign themes and creative assets around relevant festive periods, seasonal occasions and promotional events.", icon: Sparkles, tint: "bg-[#F0EAF1]" },
  { title: "Collection and Launch Announcements", copy: "Introduce new collections, store updates, product launches and special announcements through coordinated content.", icon: Megaphone, tint: "bg-[#EAF0F2]" },
  { title: "Behind-the-Scenes Content", copy: "Show selected parts of your process, preparation, packaging, team activities or product presentation.", icon: Clapperboard, tint: "bg-[#E9EFE9]" },
  { title: "Educational and Informative Posts", copy: "Answer common customer questions and share useful information related to your products or services.", icon: FileText, tint: "bg-[#F4E9E3]" },
  { title: "Brand Storytelling", copy: "Build a consistent visual and verbal identity across your social media presence.", icon: Layers3, tint: "bg-[#ECECF3]" },
];

const businessContent: { title: string; points: string[]; icon: IconType; tint: string }[] = [
  { title: "Jewellery and Retail", points: ["Product showcase Reels", "Collection highlights and new arrivals", "Festive and seasonal campaign creatives", "Product education and brand storytelling"], icon: Store, tint: "bg-[#F5EBDD]" },
  { title: "Clinics and Healthcare", points: ["General health-awareness content", "Service information and educational posts", "Doctor or specialist introductions, where approved", "Appointment and service communication"], icon: HeartPulse, tint: "bg-[#EAF0F2]" },
  { title: "Coaching Classes and Education", points: ["Course and admission announcements", "Educational tips and informative Reels", "Faculty and learning-related content", "Important updates and student guidance"], icon: GraduationCap, tint: "bg-[#F0EAF1]" },
  { title: "Restaurants and Cafes", points: ["Food and menu highlights", "Preparation and presentation Reels", "Seasonal offers and announcements", "Brand atmosphere and experience-led content"], icon: Utensils, tint: "bg-[#F4E9E3]" },
  { title: "Real Estate", points: ["Property and project presentation", "Location and amenity highlights", "Educational property-related content", "Enquiry-focused creatives"], icon: Home, tint: "bg-[#E9EFE9]" },
  { title: "Professional Services", points: ["Expertise-led posts", "Service explainers", "Frequently asked questions", "Professional brand communication"], icon: BriefcaseBusiness, tint: "bg-[#ECECF3]" },
];

const platforms: { title: string; copy: string; icon: IconType; tint: string }[] = [
  { title: "Instagram", copy: "Reels, Stories, carousels, product showcases and visual brand storytelling.", icon: Camera, tint: "bg-[#F2E8EF]" },
  { title: "Facebook", copy: "Business updates, community-oriented content, announcements and campaign communication.", icon: MessageCircle, tint: "bg-[#EAF0F7]" },
  { title: "LinkedIn", copy: "Professional insights, company updates, industry perspectives and B2B brand communication.", icon: BriefcaseBusiness, tint: "bg-[#E8F0F3]" },
  { title: "YouTube", copy: "Short-form video and longer educational or brand-focused content, where relevant.", icon: Clapperboard, tint: "bg-[#F7E9E6]" },
];

const process = [
  ["Business and Brand Discovery", "Understand your business, services, audience, current social presence and communication priorities.", Search],
  ["Social Media Audit", "Review available profiles, content formats, visual consistency, messaging and existing platform insights.", Eye],
  ["Strategy and Content Direction", "Define content pillars, platform priorities, campaign opportunities and the publishing approach.", Target],
  ["Content Planning and Creation", "Develop content ideas, Reels concepts, captions, creative direction and the content calendar.", Palette],
  ["Review and Publishing", "Coordinate content review and publishing according to the agreed workflow.", CalendarDays],
  ["Performance Review", "Review available insights and use the findings to refine future content decisions.", BarChart3],
] as const;

const industries: { name: string; href: string; copy: string; icon: IconType }[] = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", copy: "Service showcases, educational content, offers and visual storytelling.", icon: Flower2 },
  { name: "Ecommerce", href: "/industries/ecommerce", copy: "Product Reels, collection launches, demonstrations and promotional content.", icon: ShoppingBag },
  { name: "Education", href: "/industries/education", copy: "Course explainers, admission announcements and educational content.", icon: GraduationCap },
  { name: "Healthcare", href: "/industries/healthcare", copy: "Informative posts, service explainers and awareness-led communication.", icon: HeartPulse },
  { name: "Manufacturing", href: "/industries/manufacturing", copy: "Product applications, process highlights and business-focused content.", icon: Factory },
  { name: "Professional Services", href: "/industries/professional-services", copy: "Expertise-led posts, service explainers and professional brand building.", icon: BriefcaseBusiness },
  { name: "Real Estate", href: "/industries/real-estate", copy: "Property highlights, project updates and location-focused content.", icon: Home },
  { name: "Restaurants", href: "/industries/restaurants", copy: "Menu showcases, food Reels, seasonal campaigns and announcements.", icon: Utensils },
  { name: "Startups", href: "/industries/startup", copy: "Brand storytelling, product communication and founder-led content.", icon: Lightbulb },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", copy: "Experience-led Reels, destination highlights and seasonal promotions.", icon: Plane },
];

const digitalServices = [
  ["Social Media Marketing", "Strategy, content planning, creative communication and social media management.", "/services/social-media-marketing"],
  ["Search Engine Optimization (SEO)", "Improve your website's search visibility through technical, on-page, content and relevant search optimisation.", "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Plan and manage paid advertising campaigns. Advertising spend is separate from service fees.", "/services/performance-marketing"],
  ["Website Development & Management", "Build and maintain a professional website that supports your brand and enquiry journey.", "/services/website-development"],
  ["Digital PR & Media Relations", "Plan digital communication and media outreach to strengthen brand visibility.", "/services/digital-pr-and-media-relations"],
  ["AI Video and Creative", "Explore AI-assisted video concepts and creative production for digital communication.", "/services/ai-video-and-creative"],
  ["Professional Video Editing", "Edit video content for social platforms, campaigns and other digital requirements.", "/services/video-editing"],
  ["Content Marketing", "Develop useful, audience-focused content for websites and digital channels.", "/services/content-marketing"],
  ["AI Automation", "Identify suitable repetitive workflows and explore automation opportunities.", "/services/ai-automation"],
] as const;

const faqs = [
  ["Which social media marketing services does Sharp Rays offer in Borivali?", "Sharp Rays offers social media strategy, account management, Instagram marketing, Reels and short-form video, social media creatives, content calendars, captions, festive campaign planning and performance reviews."],
  ["Do you provide Instagram marketing in Borivali?", "Yes. Instagram marketing can include profile content direction, Reels, Stories, carousels, creative posts, captions and content planning based on your business and audience."],
  ["Can you create Reels for Borivali jewellers and retail businesses?", "Yes. Reels can be planned around product showcases, collection highlights, new arrivals, product details, festive themes and brand storytelling."],
  ["Do you plan festive social media campaigns?", "Yes. Festive and seasonal campaign planning can include creative themes, content calendars, promotional posts, Reels concepts and coordinated brand communication."],
  ["Which platforms do you manage?", "Platform requirements can include Instagram, Facebook, LinkedIn and YouTube. The selection depends on your business objectives and target audience."],
  ["Is social media marketing suitable for small businesses?", "Yes. A practical strategy can help small businesses communicate their products and services consistently. The content plan should be aligned with available resources and business priorities."],
  ["How often should a business post on Instagram?", "There is no single posting frequency that works for every business. A sustainable schedule should consider your audience, content quality, resources and marketing objectives."],
  ["Do you create social media graphics and captions?", "Yes. Social media creative requirements can include branded graphics, post concepts, captions, content themes and calls to action, depending on the agreed scope."],
  ["Can social media marketing help generate enquiries?", "Social media can support awareness, audience engagement and enquiry opportunities. Actual enquiries depend on factors such as audience relevance, content, offer, competition and the enquiry journey. Results are not guaranteed."],
  ["Do you provide paid social media advertising?", "Sharp Rays offers Performance Marketing / Paid Media as a separate service. Advertising strategy, campaign management and media spend should be considered separately from organic social media management."],
  ["How much does social media marketing cost?", "The fee depends on the platforms, content volume, creative requirements, Reels production, campaign scope and management needs. Contact Sharp Rays to discuss a suitable scope. Website development prices are separate and are listed on the pricing page."],
  ["Do I need a website along with social media marketing?", "A website is not mandatory for every social media campaign, but it can provide a dedicated place for service details, business information and enquiries. Social media and website development can be planned together when appropriate."],
  ["How do we get started with Sharp Rays?", "Share your business details, social media profiles and marketing goals through the Sharp Rays contact page. The next step is to understand your requirements and discuss a suitable scope."],
];

export default function BorivaliSocialMediaMarketingPageClient() {
  return (
    <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#FAF8F4] px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 82% 12%, rgba(198,167,122,.20), transparent 30%),radial-gradient(circle at 8% 90%, rgba(11,42,82,.06), transparent 28%)" }} />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            <Eyebrow>Social Media Marketing in Borivali</Eyebrow>
            <h1 className="mt-6 max-w-[760px] font-[var(--font-new-york),Georgia,serif] text-[clamp(42px,6vw,72px)] leading-[1.04] tracking-[-.055em]">Make Your Brand More Visible. <i className="text-[#A1845F]">Give People a Reason to Engage.</i></h1>
            <p className="mt-7 max-w-[650px] text-[14px] leading-[2] text-[#657889] sm:text-[15px]">From Instagram Reels and creative posts to festive campaigns and consistent brand communication, Sharp Rays helps businesses build a stronger social media presence through purposeful content and platform-focused marketing.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact?source=borivali-social-media-marketing" title="Discuss Your Social Media Goals" className="inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-7 py-4 text-[11px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your Social Media Goals <ArrowUpRight size={15} /></Link>
              <Link href="/services/social-media-marketing" className="inline-flex items-center gap-3 rounded-[9px] border border-[#C6A77A] bg-white/70 px-7 py-4 text-[11px] font-semibold transition hover:bg-white">Explore Our Services <ArrowRight size={15} /></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E5DCCE] pt-6 text-[10px] font-semibold tracking-[.08em] text-[#718093]">
              <span className="flex items-center gap-2"><Camera size={14} className="text-[#A1845F]" />Instagram-first creative</span>
              <span className="flex items-center gap-2"><Clapperboard size={14} className="text-[#A1845F]" />Reels and short-form video</span>
              <span className="flex items-center gap-2"><CalendarDays size={14} className="text-[#A1845F]" />Planned publishing</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#C6A77A]/35" />
              <div className="relative overflow-hidden rounded-[30px] border border-[#E7DED2] bg-gradient-to-br from-[#F0E6D8] via-[#FBF9F5] to-[#EAF0F2] p-5 shadow-[0_25px_70px_rgba(11,42,82,.08)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#DCD3C8] pb-4">
                  <div><p className="text-[9px] font-bold tracking-[.2em] text-[#A1845F]">SOCIAL CONTENT DIRECTION</p><p className="mt-1 font-serif text-[20px]">A more considered presence</p></div>
                  <span className="rounded-full border border-[#DCCBB2] bg-white/70 px-3 py-1.5 text-[9px] text-[#8B765C]">BORIVALI · MUMBAI</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2E8EF] text-[#A1845F]"><Camera size={19} /></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#A1845F]">REELS</p><p className="mt-1 font-serif text-[18px]">Product stories</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">Short-form visual content</p></div>
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E5D7] text-[#A1845F]"><Sparkles size={19} /></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#A1845F]">CAMPAIGNS</p><p className="mt-1 font-serif text-[18px]">Seasonal ideas</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">Timely brand communication</p></div>
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8EEF0] text-[#496D83]"><Palette size={19} /></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#496D83]">CREATIVES</p><p className="mt-1 font-serif text-[18px]">Brand identity</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">A consistent visual language</p></div>
                  <div className="rounded-[17px] border border-white bg-white/75 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9EFE9] text-[#66836D]"><BarChart3 size={19} /></span><p className="mt-4 text-[8px] font-bold tracking-[.15em] text-[#66836D]">INSIGHTS</p><p className="mt-1 font-serif text-[18px]">Content review</p><p className="mt-1 text-[9px] leading-[1.7] text-[#718093]">Learn from platform data</p></div>
                </div>
                <div className="mt-4 rounded-xl border border-[#E4D8C8] bg-white/65 p-4"><p className="text-[9px] font-bold tracking-[.15em] text-[#A1845F]">THE PRINCIPLE</p><p className="mt-2 font-serif text-[18px] leading-[1.4]">Give every post a reason to exist.</p></div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#E7DED2] bg-white px-5 py-4 shadow-lg sm:block"><p className="text-[9px] font-bold tracking-[.16em] text-[#A1845F]">SHARP RAYS</p><p className="mt-1 font-serif text-[18px]">We Create the “Oh, Wow.”!</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <Reveal><Eyebrow>Social Media Marketing Agency in Borivali</Eyebrow></Reveal>
          <Reveal>
            <h2 className="font-[var(--font-new-york),Georgia,serif] text-[clamp(28px,3.5vw,42px)] leading-[1.2] tracking-[-.035em]">What does a social media marketing agency in Borivali <i className="text-[#A1845F]">do?</i></h2>
            <p className="mt-5 text-[13px] leading-[2] text-[#657889]">A social media marketing agency in Borivali helps businesses plan, create and manage content across platforms such as Instagram, Facebook and LinkedIn. Sharp Rays brings together social media strategy, creative content, Reels, campaign planning and performance insights to help local brands communicate consistently and build meaningful audience engagement.</p>
          </Reveal>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="Social Media Marketing That Fits Your Business" title={<>Your social presence should do more than fill a <i className="text-[#A1845F]">content calendar.</i></>} copy="A strong social media presence needs a clear direction. The content should reflect your brand, speak to the right audience and give people a reason to remember your business. For Borivali jewellers, retailers and other local brands, this can mean combining product-focused Reels, seasonal creatives, festive campaigns, informative posts and consistent brand storytelling." />
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 4) * 0.04}>
                  <article className={`h-full rounded-[20px] border border-[#EAE2D7] bg-gradient-to-br ${item.tint} p-6`}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/75 text-[#A1845F]"><Icon size={20} /></span>
                    <h3 className="mt-6 font-[var(--font-new-york),Georgia,serif] text-[21px]">{item.title}</h3>
                    <p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* REELS AND FESTIVE CAMPAIGNS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="Reels and Festive Campaigns for Borivali Brands" title={<>Turn everyday products and seasonal moments into <i className="text-[#A1845F]">engaging content.</i></>} copy="For jewellers and retail businesses around Borivali, social media offers an opportunity to present products, communicate offers and create a recognisable brand identity throughout the year." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contentIdeas.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.04}>
                  <article className="h-full rounded-[20px] border border-[#EAE2D7] bg-[#FCFAF7] p-6 transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(11,42,82,.06)]">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${item.tint} text-[#A1845F]`}><Icon size={21} /></span>
                    <h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[20px]">{item.title}</h3>
                    <p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-6 rounded-xl border border-[#E4D8C8] bg-[#FBF9F5] px-5 py-4 text-[11px] leading-[1.9] text-[#718093]">These are content directions, not claims of completed campaigns or guaranteed engagement outcomes.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="Our Social Media Marketing Services" title={<>A connected approach to planning, creating and <i className="text-[#A1845F]">managing content.</i></>} copy="From strategy and account management to Reels, creative production and performance review, the service scope is shaped around your business requirements." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 4) * 0.035}>
                  <article className={`group relative h-full overflow-hidden rounded-[20px] border border-[#EAE2D7] bg-gradient-to-br ${item.tint} p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_14px_35px_rgba(11,42,82,.07)]`}>
                    <span className="absolute -right-7 -top-7 h-20 w-20 rounded-full border border-[#C6A77A]/30 transition-transform duration-700 group-hover:scale-150" />
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/75 text-[#A1845F]"><Icon size={20} strokeWidth={1.5} /></span>
                    <h3 className="relative mt-6 font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.3]">{item.title}</h3>
                    <p className="relative mt-3 text-[11px] leading-[1.95] text-[#718093]">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS CONTENT */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="Social Media Content for Different Borivali Businesses" title={<>Different businesses need different content <i className="text-[#A1845F]">strategies.</i></>} copy="The content approach should reflect each business's audience, communication requirements and available resources." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {businessContent.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.04}>
                  <article className="h-full rounded-[20px] border border-[#E7DED2] bg-white p-6 sm:p-7">
                    <div className="flex items-center gap-4">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${item.tint} text-[#A1845F]`}><Icon size={21} strokeWidth={1.5} /></span>
                      <h3 className="font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.25]">{item.title}</h3>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2 text-[11px] leading-[1.75] text-[#657889]">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#C6A77A]" />{point}
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

      {/* PLATFORMS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="Platforms We Can Build Your Presence On" title={<>Choose platforms based on where your <i className="text-[#A1845F]">audience spends time.</i></>} copy="Not every business needs to publish on every platform. Platform selection should follow your audience and objectives." />
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 4) * 0.035}>
                  <article className="h-full rounded-[19px] border border-[#E7DED2] bg-white/80 p-6">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${item.tint} text-[#A1845F]`}><Icon size={21} /></span>
                    <h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[21px]">{item.title}</h3>
                    <p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="Our Social Media Marketing Process" title={<>A clear process from planning to performance <i className="text-[#A1845F]">review.</i></>} copy="A practical workflow helps keep content direction, approvals and publishing aligned." />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(([title, copy, Icon]) => (
              <Reveal key={title}>
                <article className="h-full rounded-[18px] border border-[#EAE2D7] bg-[#FCFAF7] p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E6D8] text-[#A1845F]"><Icon size={18} /></span>
                  <h3 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[20px]">{title}</h3>
                  <p className="mt-3 text-[11px] leading-[1.9] text-[#718093]">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="Social Media Marketing for Different Industries" title={<>Content strategies across <i className="text-[#A1845F]">ten business categories.</i></>} copy="Explore how content can be shaped around the audience, products, services and communication needs of different industries." />
          <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.name} delay={(i % 5) * 0.03}>
                  <Link href={item.href} title={`Explore ${item.name} industry solutions by Sharp Rays`} className="group block h-full rounded-[17px] border border-[#E7DED2] bg-white/80 p-5 transition hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-md">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1E7D9] text-[#A1845F]"><Icon size={18} /></span>
                    <h3 className="mt-4 font-serif text-[18px]">{item.name}</h3>
                    <p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{item.copy}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.13em] text-[#A1845F]">Explore industry <ArrowUpRight size={12} /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* NINE SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Heading eyebrow="All Nine Digital Services Under One Roof" title={<>Social media is one part of a connected <i className="text-[#A1845F]">digital presence.</i></>} copy="Your social media activity can work alongside your website, search visibility, content and other digital channels." />
          <div className="mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {digitalServices.map(([title, copy, href]) => (
              <Reveal key={title}>
                <Link href={href} title={`Explore ${title} by Sharp Rays`} className="group flex h-full items-start justify-between gap-4 rounded-[16px] border border-[#EAE2D7] bg-[#FCFAF7] p-5 transition hover:border-[#C6A77A] hover:bg-[#FAF6F0]">
                  <div><h3 className="font-serif text-[19px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{copy}</p></div>
                  <ArrowUpRight size={16} className="mt-1 shrink-0 text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-16">
          <Heading eyebrow="Why Choose Sharp Rays?" title={<>Creative thinking backed by a clear marketing <i className="text-[#A1845F]">direction.</i></>} copy="Social media should reflect your business goals, audience understanding and brand identity—not just a schedule of posts." />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Strategy Before Posting", "We begin with business goals and audience understanding rather than publishing content without a clear purpose."],
              ["Creative and Platform-Focused Execution", "Content formats and creative direction are planned around the platform and the message."],
              ["Connected Digital Services", "Social media can be aligned with website development, SEO, content marketing and other digital services."],
              ["A Consistent Brand Identity", "Maintain a recognisable visual and communication style across your digital presence."],
              ["Transparent Planning", "Understand the proposed content direction, deliverables, publishing workflow and service scope before starting."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-[16px] border border-[#E7DED2] bg-white/80 p-5">
                <h3 className="font-[var(--font-new-york),Georgia,serif] text-[18px]">{title}</h3>
                <p className="mt-2 text-[10px] leading-[1.9] text-[#718093]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1120px]">
          <div className="rounded-[26px] border border-[#E7DED2] bg-gradient-to-br from-[#F4EBDD] via-[#FCFAF7] to-[#EEF2F2] p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <Eyebrow>Social Media Marketing Pricing</Eyebrow>
                <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">A content plan shaped around your <i className="text-[#A1845F]">requirements.</i></h2>
                <p className="mt-5 text-[12px] leading-[2] text-[#657889]">Social media marketing requirements vary depending on the number of platforms, content volume, Reels requirements, creative production and campaign scope. Discuss your goals with Sharp Rays to understand the right scope and service fee for your business.</p>
                <p className="mt-4 text-[11px] leading-[1.9] text-[#718093]">Social media marketing fees are separate and should be confirmed according to the agreed scope. Paid advertising budgets, if applicable, are also separate from performance marketing service fees.</p>
                <Link href="/contact?source=borivali-social-media-marketing" className="mt-7 inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your Social Media Requirements <ArrowUpRight size={14} /></Link>
              </div>
              <div className="rounded-[19px] border border-white/90 bg-white/75 p-6">
                <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#A1845F]">Website Development Starting Prices</p>
                <p className="mt-3 font-serif text-[19px]">Published website packages</p>
                <div className="mt-5 space-y-3">
                  {[["Starter Website", "₹14,999"], ["Business Website", "₹24,999"], ["Advanced Website", "₹39,999"]].map(([name, price]) => (
                    <div key={name} className="flex items-center justify-between border-b border-[#E9E1D6] pb-3">
                      <span className="text-[11px] text-[#657889]">{name}</span>
                      <span className="font-serif text-[20px] text-[#0B2A52]">{price}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[10px] leading-[1.85] text-[#718093]">These are website development starting prices only. They are not social media marketing package prices.</p>
                <Link href="/pricing" title="View Pricing" className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#A1845F]">View pricing <ArrowRight size={13} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F4] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[720px] text-center">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">Social Media Marketing in Borivali <i className="text-[#A1845F]">— FAQs</i></h2>
            <p className="mt-4 text-[12px] leading-[1.9] text-[#718093]">Helpful answers about social media strategy, Instagram Reels, content planning and service scope.</p>
          </div>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2">
            {faqs.map(([question, answer], i) => (
              <Reveal key={question} delay={(i % 2) * 0.025}>
                <div className="flex gap-4 border-b border-[#E5DCCE] py-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0E3D5] text-[#A1845F]"><MessageCircle size={15} /></span>
                  <div>
                    <h3 className="font-[var(--font-new-york),Georgia,serif] text-[17px] leading-[1.45] text-[#0B2A52]">{question}</h3>
                    <p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-9 md:flex-row md:items-end">
          <div className="max-w-[720px]">
            <Eyebrow>Let's Build a Stronger Social Presence</Eyebrow>
            <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-[-.045em]">Give Your Social Media a Clearer <i className="text-[#D8BD98]">Direction.</i></h2>
            <p className="mt-5 max-w-[650px] text-[12px] leading-[2] text-white/70">Whether you want more consistent Instagram content, product-focused Reels, festive campaign creatives or a structured social media strategy, Sharp Rays can help you plan the next step.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?source=borivali-social-media-marketing" title="Discuss Your Social Media Goals" className="inline-flex items-center gap-3 rounded-[9px] bg-white px-6 py-4 text-[10px] font-semibold text-[#0B2A52] transition hover:bg-[#F2E8DA]">Let's Discuss Your Social Media Goals <ArrowUpRight size={14} /></Link>
            <Link href="/services/social-media-marketing" title="Explore Social Media Services" className="inline-flex items-center gap-3 rounded-[9px] border border-white/35 px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-white/10">Explore Social Media Services <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
