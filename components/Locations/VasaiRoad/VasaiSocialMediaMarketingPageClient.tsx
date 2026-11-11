"use client";

import Link from "next/link";
import type { ReactNode, ComponentProps } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, Camera as Instagram, Globe2 as Facebook,
  Clapperboard, CalendarDays, BarChart3, Target,
  Palette, MessageCircle, Store, Factory, Building2, HeartPulse,
  GraduationCap, Utensils, MapPin, BriefcaseBusiness, Rocket, Sparkles,
  Globe2, Search, MonitorSmartphone, Megaphone, Video, Lightbulb,
  ClipboardList, FileText, Handshake, MousePointerClick,
  TrendingUp,
  Users,
} from "lucide-react";



const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Rise({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={rise}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`mb-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#B18E64] sm:text-[11px] ${center ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

function Heading({
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
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[760px]`}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-[clamp(27px,3.2vw,39px)] leading-[1.16] tracking-[-.04em] text-[#183253]">
        {title}
      </h2>
      {copy && <p className={`mt-4 text-[13px] leading-[1.95] text-[#748294] sm:text-[14px] ${center ? "mx-auto max-w-[660px]" : "max-w-[680px]"}`}>{copy}</p>}
    </div>
  );
}

function SoftButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-[46px] items-center justify-center gap-2 overflow-hidden rounded-[15px] border px-5 py-[11px] text-[12px] font-medium tracking-[-.01em] transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 sm:min-h-[48px] sm:px-6 sm:text-[13px] ${
        secondary
          ? "border-[#D8E0E8] bg-white/80 text-[#17365B] shadow-[0_7px_25px_rgba(11,42,82,.055)] hover:border-[#9EB3C8] hover:bg-white hover:shadow-[0_10px_30px_rgba(98,133,173,.12)]"
          : "border-[#C9D6E3] bg-white text-[#17365B] shadow-[0_8px_28px_rgba(11,42,82,.09)] hover:border-[#A9BDD1] hover:shadow-[0_12px_34px_rgba(98,133,173,.16)]"
      }`}
    >
      <span className="pointer-events-none absolute inset-[2px] rounded-[12px] border border-white/70" />
      <span className="relative z-10">{children}</span>
      <ArrowUpRight size={14} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

const palette = [
  "border-[#DCE6EB] bg-[#F0F5F7]",
  "border-[#E9DFD2] bg-[#F8F3EC]",
  "border-[#DDE6DC] bg-[#F1F5EF]",
  "border-[#E9DDE3] bg-[#F8F1F4]",
  "border-[#E1DFF0] bg-[#F3F2F8]",
  "border-[#E9E3D2] bg-[#F8F5EC]",
];

const iconPalette = [
  "bg-[#DFEAF0] text-[#587B91]",
  "bg-[#F0E5D6] text-[#A17B50]",
  "bg-[#E1EBDD] text-[#648064]",
  "bg-[#F0E1E8] text-[#986B82]",
  "bg-[#E7E5F1] text-[#77739B]",
  "bg-[#F0EAD8] text-[#927F49]",
];

const challenges = [
  ["Inconsistent content", "Posting without a content calendar makes it difficult to maintain a recognisable brand presence and audience interest.", CalendarDays],
  ["Content without a clear strategy", "Random promotional posts may communicate offers but often fail to explain why customers should choose your business.", Lightbulb],
  ["Reaching the wrong audience", "A retailer, manufacturer and tourism business need different content formats, platforms and communication styles.", Target],
  ["Low engagement and limited enquiries", "Likes and views do not necessarily translate into website visits, WhatsApp conversations or qualified enquiries.", MessageCircle],
  ["Unclear brand identity", "Inconsistent visuals, messaging and tone can make a business difficult to recognise and remember.", Palette],
  ["Choosing the wrong platforms", "Instagram, Facebook and LinkedIn serve different purposes. Identical content everywhere may limit relevance.", MousePointerClick],
];

const services = [
  { title: "Social Media Strategy", copy: "Build a clear direction for what to publish, where to publish and how content should support your business objectives.", icon: Target, points: ["Audience and competitor research", "Platform selection", "Content pillars and messaging", "Monthly content planning", "Brand positioning and communication"], href: "/services/social-media-marketing" },
  { title: "Instagram Marketing", copy: "Build an Instagram presence that communicates your products, services and brand personality.", icon: Instagram, points: ["Profile optimisation", "Content planning and visual direction", "Reels and carousel concepts", "Captions and hashtag research", "Engagement-focused content"], href: "/services/social-media-marketing" },
  { title: "Reels Creation and Marketing", copy: "Use short-form video to demonstrate products, communicate expertise and introduce your business to new audiences.", icon: Clapperboard, points: ["Reel concepts and hooks", "Short-form video scripts", "Product and service showcases", "Educational and promotional Reels", "Behind-the-scenes content"], href: "/services/social-media-marketing" },
  { title: "Facebook Marketing", copy: "Maintain a consistent presence and communicate with audiences who discover and follow your business on Facebook.", icon: Facebook, points: ["Page optimisation", "Content planning", "Creative and promotional posts", "Community engagement"], href: "/services/social-media-marketing" },
  { title: "LinkedIn Marketing", copy: "Build professional visibility and communicate your expertise to business audiences.", icon: BriefcaseBusiness, points: ["Company page content", "Professional brand positioning", "Industry-focused posts", "Founder and leadership content", "B2B communication strategy"], href: "/services/social-media-marketing" },
  { title: "Social Media Content Creation", copy: "Create a recognisable visual identity and communicate your message consistently.", icon: Palette, points: ["Static creatives", "Carousel designs and infographics", "Promotional graphics", "Educational content", "Brand-aligned templates"], href: "/services/social-media-marketing" },
  { title: "Social Media Management", copy: "Bring planning, publishing and content coordination into a more organised process.", icon: ClipboardList, points: ["Content calendars", "Publishing coordination", "Caption development", "Platform-specific formatting", "Engagement monitoring and reporting"], href: "/services/social-media-marketing" },
  { title: "Social Media Performance Analysis", copy: "Understand what is working and use the findings to improve future content.", icon: BarChart3, points: ["Reach and impressions", "Engagement and Reel performance", "Profile activity", "Website visits", "Enquiry tracking where configured"], href: "/services/social-media-marketing" },
];

const industries = [
  ["Manufacturing and Industrial Businesses", "For manufacturers, industrial suppliers, distributors and B2B companies.", "Product and machinery showcases, process videos, capability posts and LinkedIn updates.", Factory, "/industries/manufacturing"],
  ["Real Estate and Construction", "For real estate agencies, builders, property consultants and construction businesses.", "Property walkthroughs, project updates, location content, property carousels and FAQs.", Building2, "/industries/real-estate"],
  ["Healthcare and Medical Services", "For clinics, dental practices, diagnostic centres and healthcare providers.", "Educational information, service introductions, team content, appointment details and awareness campaigns.", HeartPulse, "/industries/healthcare"],
  ["Education and Training", "For schools, coaching classes, training institutes and professional educators.", "Course introductions, learning tips, student activities, faculty introductions and educational Reels.", GraduationCap, "/industries/education"],
  ["Restaurants, Cafes and Food Businesses", "For restaurants, cafes, bakeries, caterers and food brands.", "Food photography, menu highlights, kitchen videos, new launches and seasonal promotions.", Utensils, "/industries/restaurants"],
  ["Tourism, Travel and Hospitality", "For tourism businesses, travel operators, accommodation providers and local experiences.", "Destination videos, experience showcases, travel information, local attractions and visitor FAQs.", Globe2, "/industries/travel-hospitality"],
  ["Beauty, Salon and Wellness Businesses", "For salons, spas, beauty professionals and wellness businesses.", "Service showcases, consented transformations, product features, tutorials and appointment information.", Sparkles, "/industries/beauty-wellness"],
  ["Professional and B2B Services", "For consultants, agencies, financial professionals and business service providers.", "Expertise-led posts, industry explainers, founder perspectives and LinkedIn thought leadership.", BriefcaseBusiness, "/industries/professional-services"],
  ["Startups and Growing Businesses", "For new brands and businesses building their market presence.", "Brand introductions, product explainers, founder stories, behind-the-scenes content and launch announcements.", Rocket, "/industries/startups"],
];

const localAreas = [
  { title: "Vasai West", sub: "Instagram Reels for retail and local businesses", icon: Store, tint: "bg-[#F8F2EA]", border: "border-[#EADFCF]", iconBg: "bg-[#F0E5D6] text-[#A17B50]", copy: "For shops, boutiques, restaurants, salons and customer-facing businesses, visual content can help people discover products and services.", items: ["Product showcase Reels", "New arrivals and collection highlights", "Store walkthroughs and FAQs", "Seasonal creatives and behind-the-scenes", "Location and service information"], platforms: "Instagram and Facebook", detail: "For businesses around Ambadi Road and Manikpur, content can highlight what is available, what makes the business useful and how customers can get in touch." },
  { title: "Vasai Fort", sub: "Tourism and experience-based content", icon: MapPin, tint: "bg-[#F0F4F2]", border: "border-[#DCE7E1]", iconBg: "bg-[#DFEAE4] text-[#668576]", copy: "Vasai Fort offers a visual storytelling opportunity for tourism-related businesses, local experiences, hospitality and businesses connected to the area.", items: ["Short-form destination videos", "Historical and cultural storytelling", "Local experience highlights", "Photography and visual guides", "Nearby places and travel FAQs"], platforms: "Instagram, Facebook and YouTube Shorts where suitable", detail: "Content should be accurate, respectful of the location and useful to people considering a visit." },
  { title: "Vasai East", sub: "LinkedIn for industrial and B2B businesses", icon: Factory, tint: "bg-[#F1F2F8]", border: "border-[#E1E1ED]", iconBg: "bg-[#E6E5F1] text-[#77749B]", copy: "Manufacturers, suppliers and industrial businesses need a different communication approach from retail brands. LinkedIn can help present capabilities, products and expertise.", items: ["Product and manufacturing showcases", "Company introductions and industry explainers", "Product application and process content", "Business updates and founder insights", "Catalogue and website content promotion"], platforms: "LinkedIn, supported by Instagram or Facebook where relevant", detail: "For businesses around Waliv and Gauraipada, content can focus on what the company manufactures, the industries it serves and how potential buyers can enquire." },
];

const platforms = [
  ["Instagram", "Visual and consumer-facing businesses, retail, lifestyle, food, beauty and local brands.", "Reels, carousels, Stories and product showcases.", Instagram, "bg-[#F8EFF3] text-[#A66B88]"],
  ["Facebook", "Local businesses and community-oriented communication.", "Updates, offers, photos and business information.", Facebook, "bg-[#EEF3FA] text-[#557EAE]"],
  ["LinkedIn", "Manufacturers, B2B companies, consultants and professional brands.", "Industry insights, company updates and expertise-led posts.", BriefcaseBusiness, "bg-[#EDF3F8] text-[#527C9E]"],
  ["YouTube", "Businesses with educational, demonstration or video content.", "Tutorials, explainers, product videos and Shorts.", Video, "bg-[#F9EEEE] text-[#B86C6C]"],
];

const process = [
  ["Understand your business", "We learn about your products or services, target audience, business goals and current online presence.", Search],
  ["Research your audience and market", "We identify relevant audience groups, competitor communication and content opportunities.", Users],
  ["Build your social media strategy", "We define the platforms, content pillars, brand messaging and publishing direction.", Target],
  ["Plan and create content", "We develop content concepts, captions, creative direction, Reels scripts and platform-specific assets.", Palette],
  ["Publish and manage", "Content is organised through a publishing calendar and coordinated for the selected platforms.", CalendarDays],
  ["Review performance", "We assess available data to understand what attracts attention, encourages engagement and supports enquiries.", BarChart3],
  ["Improve the strategy", "We use performance observations and business feedback to refine future content.", TrendingUp],
];

const contentTypes = [
  ["Awareness content", "Introduce your business, products, services and location to relevant audiences.", EyeIcon],
  ["Educational content", "Answer customer questions, explain industry topics and share useful information.", Lightbulb],
  ["Trust-building content", "Show your processes, team, work, expertise and genuine customer feedback where available and approved.", Handshake],
  ["Product and service content", "Explain what you offer, how it works and who it is suitable for.", PackageIcon],
  ["Engagement content", "Use relevant questions, polls, conversations and interactive formats to encourage participation.", MessageCircle],
  ["Conversion-focused content", "Make the next step clear through website links, WhatsApp enquiries, calls, booking information or contact forms.", MousePointerClick],
];

function EyeIcon(props: ComponentProps<typeof Target>) { return <Target {...props} />; }
function PackageIcon(props: ComponentProps<typeof FileText>) { return <FileText {...props} />; }

const whyUs = [
  ["Business-focused planning", "Content direction begins with your business objectives and audience rather than random posting.", Target],
  ["Platform-specific communication", "Instagram, Facebook and LinkedIn each need a suitable format, tone and content approach.", Globe2],
  ["Creative execution", "Visuals, Reels, carousels and captions should work together to communicate your brand.", Palette],
  ["Consistency and organisation", "A planned content calendar helps make publishing more structured and manageable.", CalendarDays],
  ["Connection with your website", "Social media can direct interested visitors towards relevant service pages, product information and enquiry forms.", MonitorSmartphone],
  ["Performance awareness", "We look beyond surface-level engagement and consider profile visits, website traffic and enquiries.", BarChart3],
];

const faqs = [
  ["Which is the best social media marketing agency in Vasai?", "The right agency depends on your business goals, target audience, content requirements and the platforms you want to use. Look for a team that understands your market, develops a clear strategy and can explain how performance will be evaluated. Sharp Rays provides social media strategy, content creation and marketing services for businesses."],
  ["What social media marketing services do you offer in Vasai?", "Services include social media strategy, Instagram marketing, Facebook marketing, LinkedIn marketing, Reels planning, creative content, content calendars, social media management and performance analysis."],
  ["Which industries can benefit from social media marketing in Vasai?", "Retail, manufacturing, real estate, healthcare, education, restaurants, tourism, hospitality, beauty and wellness, professional services and startups can all use social media. The content strategy and platform selection should be tailored to each industry's audience and objectives."],
  ["Do you provide Instagram marketing in Vasai?", "Yes. Instagram marketing can include profile optimisation, Reels concepts, carousel content, creative posts, captions, content planning and a platform-specific strategy."],
  ["Can you create Instagram Reels for shops in Vasai West?", "Reels can be planned around products, new arrivals, store experiences, services, offers and customer FAQs. The content direction should reflect the shop's audience and business objectives."],
  ["Can social media marketing help tourism businesses around Vasai Fort?", "Yes. Tourism-related businesses can use visual storytelling, short videos, destination information and experience-focused content to introduce their offerings. Content should be accurate and relevant to prospective visitors."],
  ["Is LinkedIn useful for manufacturers in Vasai East?", "LinkedIn can be useful for manufacturers and B2B businesses that want to communicate their capabilities, products, industry knowledge and company updates to professional audiences."],
  ["Which social media platform is best for my business?", "Instagram can suit visual and consumer-facing businesses, while LinkedIn can be useful for B2B and industrial companies. Facebook and YouTube may also be relevant depending on your audience and content."],
  ["How often should my business post on social media?", "Posting frequency depends on your available content resources, platform and audience. A realistic, consistent schedule with useful content is generally more sustainable than publishing frequently without a clear strategy."],
  ["How long does social media marketing take to show results?", "Results vary depending on your starting presence, content quality, audience, competition, consistency and marketing objectives. Building recognition and a reliable content system takes time; specific reach, engagement or enquiry outcomes should not be guaranteed."],
  ["Do you provide social media management?", "Social media management can include content planning, creative coordination, captions, publishing and performance monitoring. Confirm the exact platforms, deliverables and management scope for the selected plan before starting."],
  ["Does social media marketing include paid advertising?", "Organic social media marketing and paid advertising are different activities. Advertising campaigns require a separate discussion about campaign objectives, platform budgets, creative requirements and management scope."],
  ["Can social media marketing generate business enquiries?", "It can support enquiries by communicating your services, answering customer questions and directing interested audiences to your website, WhatsApp or contact channels. Actual enquiries depend on several factors, including the offering, audience, content and conversion process."],
  ["Do I need a website if my business is active on Instagram?", "A website is useful for presenting detailed service information, product catalogues, business credentials and enquiry options in one place. Instagram can support discovery, while your website provides a more complete destination for interested visitors."],
  ["How much does social media marketing cost in Vasai?", "Sharp Rays has published pricing options of ₹14,999, ₹24,999 and ₹39,999. Visit the pricing page to review the current plan details and inclusions."],
];

const allServices = [
  ["Social Media Marketing", "Build brand presence with strategy, content creation, Reels and platform management.", Instagram, "/services/social-media-marketing"],
  ["Search Engine Optimization", "Improve organic search visibility with technical, on-page, local SEO and content strategy.", Search, "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Reach relevant audiences through paid campaigns, targeting and optimisation.", Megaphone, "/services/performance-marketing"],
  ["Website Development & Management", "Create responsive websites that communicate your offering and support enquiries.", MonitorSmartphone, "/services/website-development"],
  ["Digital PR & Media Relations", "Strengthen brand communication, online reputation and media visibility.", FileText, "/services/digital-pr-media-relations"],
  ["AI Video and Creative", "Explore AI-assisted video production and creative solutions for digital campaigns.", Video, "/services/ai-video-creative"],
  ["Professional Video Editing", "Transform footage into polished videos for social media and brand communication.", Clapperboard, "/services/video-editing"],
  ["Content Marketing", "Build useful content through blogs, website copy and strategic content planning.", FileText, "/services/content-marketing"],
  ["AI Automation", "Identify repetitive business and marketing workflows that can benefit from automation.", Sparkles, "/services/ai-automation"],
];

export default function VasaiSocialMediaMarketingPageClient() {
  return (
    <main className="overflow-hidden bg-[#FCFBF8] text-[#183253]">
      {/* HERO */}
      <section className="relative isolate border-b border-[#EEE9E1]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(198,167,122,.17),transparent_31%),radial-gradient(circle_at_5%_88%,rgba(205,221,224,.34),transparent_31%)]" />
        <div className="mx-auto grid max-w-[1220px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-28">
          <Rise>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7DCCB] bg-white/80 px-4 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#9A7954]"><span className="h-1.5 w-1.5 rounded-full bg-[#B18E64]" /> Social Media Marketing Agency in Vasai</div>
            <h1 className="max-w-[680px] font-serif text-[clamp(35px,5vw,59px)] leading-[1.07] tracking-[-.05em] text-[#183253]">Social Media Marketing for <span className="text-[#B18E64]">Vasai Businesses</span></h1>
            <p className="mt-6 max-w-[620px] text-[14px] leading-[1.95] text-[#6F7F91] sm:text-[15px]">Build a stronger social presence with content that helps people discover your business, understand what you offer and take the next step.</p>
            <p className="mt-3 max-w-[620px] text-[13px] leading-[1.9] text-[#7A8795]">From Instagram Reels for Vasai West retailers to tourism-focused content around Vasai Fort and LinkedIn marketing for Vasai East industries, Sharp Rays creates social media strategies around your audience and business goals.</p>
            <div className="mt-8 flex flex-wrap gap-3"><SoftButton href="/contact?service=social-media-marketing">Discuss Your Social Media Strategy</SoftButton><SoftButton href="/services" secondary>Explore Our Services</SoftButton></div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-[#7A8795]">{["Strategy-led content","Platform-specific planning","Business-focused communication"].map(x=><span key={x} className="inline-flex items-center gap-2"><Check size={13} className="text-[#82977E]"/>{x}</span>)}</div>
          </Rise>
          <Rise delay={.1} className="relative">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#D9C6AC]/70"/>
            <div className="relative rounded-[30px] border border-white bg-white/80 p-3 shadow-[0_25px_80px_rgba(44,57,72,.12)]">
              <div className="rounded-[23px] bg-[#F2F3F0] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-[#DDE2DE] pb-4"><span className="text-[10px] font-bold tracking-[.18em] text-[#617184]">SOCIAL PRESENCE, WITH PURPOSE</span><span className="text-[9px] text-[#929B9A]">SHARP RAYS</span></div>
                <div className="py-7"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#A47E55]">Make your brand memorable</p><h3 className="mt-3 max-w-[320px] font-serif text-[31px] leading-[1.12] text-[#263B55]">Content that starts conversations.</h3><p className="mt-3 max-w-[300px] text-[11px] leading-5 text-[#7B8791]">A considered mix of creativity, consistency and meaningful communication.</p></div>
                <div className="grid grid-cols-3 gap-2">{[[Instagram,"Instagram","bg-[#F8EAF0] text-[#A66D89]"],[BriefcaseBusiness,"LinkedIn","bg-[#EAF1F7] text-[#547D9E]"],[Facebook,"Facebook","bg-[#EAF0F8] text-[#557EAD]"]].map(([Icon,label,style]:any)=><div key={label} className="rounded-xl border border-white bg-white/80 p-3"><span className={`inline-flex rounded-lg p-2 ${style}`}><Icon size={17}/></span><p className="mt-2 text-[9px] font-semibold text-[#536478]">{label}</p></div>)}</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#E8E1D7] bg-white px-4 py-3 shadow-lg"><div className="flex items-center gap-2"><span className="rounded-lg bg-[#EAF0EA] p-2 text-[#64816B]"><MessageCircle size={17}/></span><div><p className="text-[10px] font-bold text-[#34465A]">Content with a purpose</p><p className="mt-0.5 text-[9px] text-[#89929A]">From discovery to enquiry</p></div></div></div>
          </Rise>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="mx-auto max-w-[1220px] px-5 py-16 sm:px-8 lg:py-20">
        <Rise className="grid gap-8 rounded-[26px] border border-[#E9E4DB] bg-white p-7 shadow-[0_12px_40px_rgba(45,55,65,.04)] md:grid-cols-[.8fr_1.2fr] md:p-10">
          <div><Eyebrow>Your Social Media Partner</Eyebrow><h2 className="font-serif text-[28px] leading-tight tracking-[-.04em] text-[#183253]">What does a social media marketing agency in Vasai do?</h2><div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F4EEE5] px-3 py-2 text-[10px] font-semibold text-[#96734D]"><MapPin size={13}/> Vasai and surrounding areas</div></div>
          <div className="space-y-4 text-[13px] leading-[1.95] text-[#748294]"><p>A social media marketing agency in Vasai helps local businesses plan, create and manage content across platforms such as Instagram, Facebook and LinkedIn. Sharp Rays focuses on platform-specific strategies, Reels, creative content, audience engagement and business-focused campaigns to help Vasai businesses build visibility, communicate their value and generate relevant enquiries.</p><div className="grid gap-3 sm:grid-cols-3">{[["Plan","Clear content direction",Target],["Create","Brand-aligned creative",Palette],["Improve","Review useful signals",BarChart3]].map(([a,b,I]:any)=><div key={a} className="rounded-xl bg-[#F5F6F3] p-3"><I size={17} className="text-[#A47E55]"/><p className="mt-2 text-[11px] font-semibold text-[#44566A]">{a}</p><p className="mt-1 text-[10px] text-[#82909A]">{b}</p></div>)}</div></div>
        </Rise>
      </section>

      {/* CHALLENGES */}
      <section className="bg-[#F5F4F0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <Rise><Heading eyebrow="The Challenge" title="Posting regularly is not the same as growing your business" copy="Having a social media account is easy. Building a presence that communicates your value and attracts the right audience requires a clear strategy. These are common challenges businesses face." /></Rise>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{challenges.map(([t,c,I]:any,i)=><Rise key={t} delay={(i%3)*.04}><div className={`h-full rounded-[20px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${palette[i%palette.length]}`}><span className={`inline-flex rounded-xl p-3 ${iconPalette[i%iconPalette.length]}`}><I size={19}/></span><h3 className="mt-5 text-[14px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[11px] leading-[1.9] text-[#778392]">{c}</p></div></Rise>)}</div>
          <Rise className="mt-7 rounded-2xl border border-[#E6DFD4] bg-white p-6"><p className="text-[14px] font-semibold text-[#34465A]">Start with the right foundation</p><p className="mt-2 max-w-[780px] text-[12px] leading-[1.9] text-[#748294]">A practical social media strategy starts with your audience, business objectives and the platforms that make sense for your market.</p></Rise>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1220px] px-5 py-16 sm:px-8 lg:py-20">
        <Rise><Heading eyebrow="What We Do" title="Social media services built around your business goals" copy="Sharp Rays helps businesses plan and improve their social media presence with a combination of strategy, creative content and platform-specific marketing." /></Rise>
        <div className="mt-9 grid gap-4 md:grid-cols-2">{services.map((s,i)=><Rise key={s.title} delay={(i%2)*.05}><article className={`h-full rounded-[22px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(45,55,65,.08)] ${palette[i%palette.length]}`}><div className="flex items-center justify-between gap-3"><span className={`rounded-xl p-3 ${iconPalette[i%iconPalette.length]}`}><s.icon size={20}/></span><span className="text-[9px] font-bold uppercase tracking-[.16em] text-[#A18B70]">Social media solution</span></div><h3 className="mt-5 text-[16px] font-semibold text-[#34465A]">{s.title}</h3><p className="mt-2 text-[11px] leading-[1.9] text-[#748294]">{s.copy}</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{s.points.map(p=><div key={p} className="flex items-start gap-2 text-[10px] leading-5 text-[#667486]"><Check size={12} className="mt-1 shrink-0 text-[#82977E]"/>{p}</div>)}</div><Link href={s.href} className="mt-5 inline-flex items-center gap-2 border-t border-[#DADFE0]/80 pt-4 text-[11px] font-semibold text-[#9B7954] transition-colors hover:text-[#183253]">Discuss this service <ArrowRight size={13}/></Link></article></Rise>)}</div>
        <Rise className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E7E1D7] bg-white p-6 sm:flex-row sm:items-center"><div><p className="text-[14px] font-semibold text-[#34465A]">Need a social media plan that fits your business?</p><p className="mt-1 text-[12px] text-[#7B8794]">Let's discuss your audience, platforms and content requirements.</p></div><SoftButton href="/contact?service=social-media-marketing">Discuss Your Requirements</SoftButton></Rise>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F5F4F0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <Rise><Heading eyebrow="Industries We Help" title="Social media strategies for different business industries" copy="Every industry communicates differently. A retail store needs product-focused content, while a manufacturer needs to explain its capabilities and build professional credibility. Sharp Rays plans content around your business, audience and customer journey." /></Rise>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map(([t,c,ideas,I,href]:any,i)=><Rise key={t} delay={(i%3)*.035}><Link href={href} aria-label={`Explore ${t}`} className={`group block h-full rounded-[20px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(45,55,65,.09)] ${palette[i%palette.length]}`}><div className="flex items-center justify-between"><span className={`inline-flex rounded-xl p-3 ${iconPalette[i%iconPalette.length]}`}><I size={19}/></span><ArrowUpRight size={16} className="text-[#A18A70] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-4 text-[14px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[11px] leading-[1.85] text-[#748294]">{c}</p><div className="mt-4 rounded-xl border border-white/80 bg-white/65 p-3"><p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#A17D56]">Content opportunities</p><p className="mt-1.5 text-[10px] leading-[1.8] text-[#748294]">{ideas}</p></div><span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#9B7954]">Explore industry <ArrowRight size={12} className="transition-transform group-hover:translate-x-1"/></span></Link></Rise>)}</div>
          <Rise className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E7E1D7] bg-white p-6"><div><p className="text-[14px] font-semibold text-[#34465A]">Looking for an industry-specific approach?</p><p className="mt-1 text-[12px] text-[#7B8794]">Tell us about your business and the audience you want to reach.</p></div><SoftButton href="/contact?service=social-media-marketing" secondary>Talk About Your Industry</SoftButton></Rise>
        </div>
      </section>

      {/* LOCAL STRATEGY */}
      <section className="mx-auto max-w-[1220px] px-5 py-16 sm:px-8 lg:py-20">
        <Rise><Heading eyebrow="Local Relevance" title="Local audiences need locally relevant content" copy="A social media strategy should reflect what a business sells, who it wants to reach and how customers discover it. Different parts of Vasai offer different content opportunities." /></Rise>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">{localAreas.map((a,i)=><Rise key={a.title} delay={i*.05}><article className={`h-full rounded-[22px] border p-6 ${a.tint} ${a.border}`}><span className={`inline-flex rounded-xl p-3 ${a.iconBg}`}><a.icon size={21}/></span><p className="mt-5 text-[9px] font-bold uppercase tracking-[.16em] text-[#9B805E]">{a.sub}</p><h3 className="mt-2 text-[17px] font-semibold text-[#34465A]">{a.title}</h3><p className="mt-3 text-[11px] leading-[1.9] text-[#748294]">{a.copy}</p><ul className="mt-4 space-y-2">{a.items.map(x=><li key={x} className="flex items-start gap-2 text-[10px] leading-5 text-[#667486]"><Check size={12} className="mt-1 shrink-0 text-[#82977E]"/>{x}</li>)}</ul><div className="mt-4 rounded-xl border border-white/80 bg-white/70 p-3"><p className="text-[9px] font-bold uppercase tracking-[.12em] text-[#9B805E]">Recommended platforms</p><p className="mt-1 text-[10px] leading-5 text-[#748294]">{a.platforms}</p></div><p className="mt-3 text-[10px] leading-[1.8] text-[#7A8794]">{a.detail}</p></article></Rise>)}</div>
      </section>

      {/* PLATFORMS */}
      <section className="bg-[#F5F4F0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <Rise><Heading eyebrow="Choose the Right Channels" title="Your business does not need to be everywhere" copy="The right platform depends on your audience, offering and content capabilities. Start with one or two relevant platforms and build a consistent content system before expanding." /></Rise>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{platforms.map(([t,c,formats,I,style]:any,i)=><Rise key={t} delay={i*.04}><div className="h-full rounded-[20px] border border-[#E8E3DB] bg-white p-5 shadow-[0_8px_30px_rgba(45,55,65,.035)]"><span className={`inline-flex rounded-xl p-3 ${style}`}><I size={21}/></span><h3 className="mt-4 text-[15px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[11px] leading-[1.8] text-[#748294]">{c}</p><div className="mt-4 border-t border-[#EEEAE4] pt-3"><p className="text-[9px] font-bold uppercase tracking-[.12em] text-[#A17D56]">Content formats</p><p className="mt-1 text-[10px] leading-[1.8] text-[#748294]">{formats}</p></div></div></Rise>)}</div>
          <Rise className="mt-6 rounded-2xl border border-[#E5DED3] bg-white p-5"><p className="text-[12px] leading-[1.9] text-[#748294]"><strong className="text-[#42566C]">Our recommendation:</strong> Start with one or two relevant platforms and build a consistent content system before expanding.</p></Rise>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="mx-auto max-w-[1220px] px-5 py-16 sm:px-8 lg:py-20">
        <Rise><Heading eyebrow="Explore Sharp Rays Services" title="Complete digital solutions to build and grow your online presence" copy="Social media is one part of your digital growth strategy. Sharp Rays offers a range of digital services to help businesses strengthen their online presence, attract relevant audiences and build stronger brand communication." /></Rise>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{allServices.map(([t,c,I,href]:any,i)=><Rise key={t} delay={(i%3)*.04}><Link href={href} className={`group block h-full rounded-[19px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${palette[i%palette.length]}`}><div className="flex items-center justify-between"><span className={`rounded-xl p-3 ${iconPalette[i%iconPalette.length]}`}><I size={19}/></span><ArrowUpRight size={16} className="text-[#A18A70] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></div><h3 className="mt-4 text-[14px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[11px] leading-[1.85] text-[#748294]">{c}</p><span className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold text-[#9B7954]">Explore service <ArrowRight size={12}/></span></Link></Rise>)}</div>
        <Rise className="mt-7 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E7E1D7] bg-white p-6 sm:flex-row sm:items-center"><div><p className="text-[14px] font-semibold text-[#34465A]">Looking for more than one service?</p><p className="mt-1 text-[12px] leading-6 text-[#7B8794]">Connect social media marketing with SEO, website development, content marketing and other digital solutions.</p></div><SoftButton href="/services" secondary>Explore All Services</SoftButton></Rise>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F5F4F0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <Rise><Heading eyebrow="How We Work" title="A structured approach from planning to performance" copy="Our process brings business understanding, creative planning and performance review into one organised workflow." /></Rise>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{process.map(([t,c,I]:any,i)=><Rise key={t} delay={(i%3)*.04}><div className="h-full rounded-[19px] border border-[#E8E3DB] bg-white p-5"><span className="inline-flex rounded-xl bg-[#F2ECE3] p-3 text-[#A47E55]"><I size={19}/></span><h3 className="mt-4 text-[13px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[11px] leading-[1.9] text-[#748294]">{c}</p></div></Rise>)}</div>
        </div>
      </section>

      {/* CONTENT STRATEGY */}
      <section className="mx-auto max-w-[1220px] px-5 py-16 sm:px-8 lg:py-20">
        <Rise><Heading eyebrow="Content With Purpose" title="Create content for more than likes and followers" copy="Every post should have a purpose. A balanced content strategy can help people discover your business, understand your offering and develop confidence in your brand." /></Rise>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{contentTypes.map(([t,c,I]:any,i)=><Rise key={t} delay={(i%3)*.04}><div className={`h-full rounded-[19px] border p-5 ${palette[i%palette.length]}`}><span className={`inline-flex rounded-xl p-3 ${iconPalette[i%iconPalette.length]}`}><I size={19}/></span><h3 className="mt-4 text-[14px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[11px] leading-[1.9] text-[#748294]">{c}</p></div></Rise>)}</div>
        <Rise className="mt-6 rounded-2xl border border-[#E7E1D7] bg-[#FBFAF7] p-5"><p className="text-[11px] leading-[1.9] text-[#748294]">A good content mix should be adapted to your business rather than follow a fixed promotional-post ratio.</p></Rise>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-[#F5F4F0] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <Rise><Eyebrow>Why Sharp Rays</Eyebrow><h2 className="font-serif text-[clamp(27px,3.2vw,39px)] leading-[1.15] tracking-[-.04em] text-[#183253]">Strategy, creativity and business understanding</h2><p className="mt-4 text-[13px] leading-[1.9] text-[#748294]">Social media should be connected to your wider digital presence, not treated as an isolated activity.</p><div className="mt-6"><SoftButton href="/contact?service=social-media-marketing">Talk to Sharp Rays</SoftButton></div></Rise>
          <div className="grid gap-3 sm:grid-cols-2">{whyUs.map(([t,c,I]:any,i)=><Rise key={t} delay={(i%2)*.04}><div className={`h-full rounded-[18px] border p-5 ${palette[i%palette.length]}`}><span className={`inline-flex rounded-xl p-3 ${iconPalette[i%iconPalette.length]}`}><I size={18}/></span><h3 className="mt-4 text-[13px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[11px] leading-[1.85] text-[#748294]">{c}</p></div></Rise>)}</div>
        </div>
      </section>

      {/* DIGITAL ECOSYSTEM */}
      <section className="mx-auto max-w-[1220px] px-5 py-16 sm:px-8 lg:py-20">
        <Rise><Heading eyebrow="Connected Digital Presence" title="Connect social media with your website and SEO" copy="Social media can contribute to a broader digital marketing strategy when your platforms and website communicate a consistent message." /></Rise>
        <Rise className="mt-8 rounded-[24px] border border-[#E7E1D7] bg-white p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-4">{[["Social discovery","Instagram Reels can introduce a product or service.",Instagram],["Website information","Your website provides detailed information about the offering.",MonitorSmartphone],["Search visibility","SEO can help people discover relevant pages through search engines.",Search],["Enquiry pathway","Clear contact options help interested visitors reach your business.",MessageCircle]].map(([t,c,I]:any,i)=><div key={t} className="relative rounded-[17px] bg-[#F5F5F1] p-4"><span className="inline-flex rounded-xl bg-white p-3 text-[#A47E55]"><I size={18}/></span><h3 className="mt-3 text-[12px] font-semibold text-[#34465A]">{t}</h3><p className="mt-2 text-[10px] leading-[1.8] text-[#748294]">{c}</p></div>)}</div>
          <p className="mt-5 text-[11px] leading-[1.9] text-[#748294]">Social media engagement does not directly guarantee higher Google rankings. Its value is in building awareness, communicating expertise, supporting content discovery and creating additional routes for potential customers to reach your business.</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link href="/services/search-engine-optimization" className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#9B7954] hover:text-[#183253]">Explore SEO services <ArrowRight size={13}/></Link><Link href="/services/website-development" className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#9B7954] hover:text-[#183253]">Explore website development <ArrowRight size={13}/></Link></div>
        </Rise>
      </section>

      {/* PRICING */}
      <section className="bg-[#F5F4F0] py-16 lg:py-20">
        <div className="mx-auto max-w-[1220px] px-5 sm:px-8">
          <Rise><Heading eyebrow="Social Media Marketing Pricing" title="Choose a plan that fits your business requirements" copy="Social media marketing requirements vary depending on the platforms, content formats, creative requirements and level of management involved." /></Rise>
          <div className="mt-9 grid gap-5 md:grid-cols-3">{[["Plan 1","₹14,999","A starting option for businesses building a more organised social presence.","bg-[#EFF4F5] border-[#DCE7EA]"],["Plan 2","₹24,999","An option for businesses requiring broader content and platform support.","bg-[#F7F0E8] border-[#EADCCB]"],["Plan 3","₹39,999","An option for businesses with wider content and management requirements.","bg-[#F0F2EC] border-[#DDE5D5]"]].map(([name,price,copy,style]:any,i)=><Rise key={name} delay={i*.05}><div className={`h-full rounded-[22px] border p-6 ${style}`}><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#8A8F91]">{name}</p><p className="mt-3 font-serif text-[35px] tracking-[-.04em] text-[#26364A]">{price}</p><p className="mt-4 min-h-[45px] text-[11px] leading-[1.8] text-[#748294]">{copy}</p><p className="mt-4 text-[9px] leading-5 text-[#92999F]">See current package inclusions and terms.</p><div className="mt-5"><SoftButton href="/pricing" secondary>View Plan Details</SoftButton></div></div></Rise>)}</div>
          <p className="mt-5 text-[10px] leading-5 text-[#89939B]">The right plan depends on your business goals, selected platforms and content requirements. Confirm current deliverables and inclusions on the pricing page.</p>
          <div className="mt-5"><SoftButton href="/contact?service=social-media-marketing">Get a Social Media Marketing Quote</SoftButton></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FCFBF8] px-5 py-16 sm:px-8 lg:py-20" aria-labelledby="vasai-social-faq">
        <div className="mx-auto max-w-[1220px]">
          <Rise className="mx-auto max-w-[800px] text-center"><Eyebrow center>Questions Before You Start</Eyebrow><h2 id="vasai-social-faq" className="font-serif text-[clamp(27px,3.2vw,39px)] leading-[1.16] tracking-[-.04em] text-[#183253]">Frequently Asked <span className="text-[#B18E64]">Questions.</span></h2><p className="mt-4 text-[13px] leading-[1.9] text-[#748294]">Clear answers about social media strategy, content, platforms and pricing in Vasai.</p></Rise>
          <div className="mt-10 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">{faqs.map(([q,a],i)=><Rise key={q}><article className="flex h-full gap-4 border-b border-[#E4D9CC] py-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-serif text-[13px] text-[#B18E64]">{String(i+1).padStart(2,"0")}</span><div><h3 className="font-serif text-[17px] leading-[1.4] text-[#263B55] sm:text-[19px]">{q}</h3><p className="mt-3 text-[11px] leading-[1.95] text-[#708092]">{a}</p></div></article></Rise>)}</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-20">
        <Rise className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[30px] border border-[#E9E2D8] bg-[radial-gradient(circle_at_12%_0%,rgba(198,167,122,.16),transparent_36%),linear-gradient(135deg,#FFFFFF_0%,#F8F7F2_58%,#F1F5F4_100%)] px-7 py-12 text-center shadow-[0_18px_55px_rgba(45,55,65,.06)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-[#DCCDB9]/60"/><div className="pointer-events-none absolute -bottom-36 -left-16 h-72 w-72 rounded-full border border-[#D8E2DE]/70"/>
          <div className="relative mx-auto max-w-[760px]"><Eyebrow center>Let's Build Something Better</Eyebrow><h2 className="font-serif text-[clamp(29px,4vw,44px)] leading-[1.13] tracking-[-.04em] text-[#183253]">Ready to Build a Stronger Social Media Presence?</h2><p className="mt-5 text-[13px] leading-[1.95] text-[#718092]">Whether you run a retail business in Vasai West, a tourism-related business around Vasai Fort or an industrial company in Vasai East, your social media strategy should reflect your audience and business goals.</p><p className="mt-3 text-[12px] leading-[1.9] text-[#7C8996]">Let's create a content direction that communicates your value, builds brand recognition and gives potential customers a clear reason to connect.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><SoftButton href="/contact?service=social-media-marketing">Talk to Sharp Rays</SoftButton><SoftButton href="/services" secondary>Explore All Sharp Rays Services</SoftButton></div><p className="mt-7 text-[10px] tracking-wide text-[#9AA1A4]">Sharp Rays — We Create the “Oh, Wow.”!</p></div>
        </Rise>
      </section>
    </main>
  );
}
