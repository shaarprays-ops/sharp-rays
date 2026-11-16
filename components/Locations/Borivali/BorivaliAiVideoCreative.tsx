 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Sparkles, Clapperboard, Camera, Package,
  Megaphone, Film, WandSparkles, Layers3, Video, Globe2,
  MonitorPlay, ShieldCheck, Check, MessageCircle, Lightbulb, Palette,
  Scissors, Heart, ShoppingBag, GraduationCap, HeartPulse, Factory,
  BriefcaseBusiness, Home, Utensils, Plane, Store, Flower2, Play
} from "lucide-react";

type IconType = React.ElementType;

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.22em] text-[#A1845F] sm:text-[10px]">
    <span className="h-px w-5 bg-[#C6A77A]" />{children}
  </span>
);

const Heading = ({ eyebrow, title, copy, center = false }: {
  eyebrow: string; title: React.ReactNode; copy?: string; center?: boolean;
}) => (
  <Reveal>
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[850px]`}>
      <div className={center ? "flex justify-center" : ""}><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4.2vw,52px)] leading-[1.12] tracking-[-.045em] text-[#0B2A52]">{title}</h2>
      {copy && <p className={`mt-5 text-[13px] leading-[2] text-[#657889] sm:text-[14px] ${center ? "mx-auto max-w-[730px]" : ""}`}>{copy}</p>}
    </div>
  </Reveal>
);

const services: { title: string; copy: string; icon: IconType; tint: string }[] = [
  { title: "AI-Assisted Video Creation", copy: "Develop video concepts using suitable AI-assisted production tools and workflows, based on the project requirements.", icon: Clapperboard, tint: "from-[#F2E9DF] to-[#FCF9F5]" },
  { title: "Product Visuals and Video Concepts", copy: "Explore creative ways to present product details, collections, features and visual themes.", icon: Package, tint: "from-[#EAF0F2] to-[#F9FBFA]" },
  { title: "AI-Assisted Brand Storytelling", copy: "Develop visual concepts that communicate a brand's identity, message or campaign theme.", icon: Heart, tint: "from-[#F1EAF0] to-[#FBF8FA]" },
  { title: "Campaign Video Creatives", copy: "Explore video concepts and visual assets for seasonal campaigns, launches, announcements and promotional communication.", icon: Megaphone, tint: "from-[#F4EBDD] to-[#FCF9F4]" },
  { title: "Short-Form Video Concepts", copy: "Develop ideas for short-form content intended for Instagram Reels, YouTube Shorts and other suitable channels.", icon: Film, tint: "from-[#EAEFE8] to-[#FAFBF8]" },
  { title: "AI-Assisted Visual Experiments", copy: "Explore creative styles, environments, scenes and visual treatments using suitable AI tools.", icon: WandSparkles, tint: "from-[#EAEAF2] to-[#FAF9FC]" },
  { title: "Creative Direction and Storyboarding", copy: "Plan the visual approach, scene sequence, messaging and creative direction before production.", icon: Layers3, tint: "from-[#F5EAE5] to-[#FCF8F5]" },
  { title: "AI and Human-Led Creative Workflows", copy: "Combine AI-assisted generation with human creative review, editing and refinement where required.", icon: Scissors, tint: "from-[#E9EFF2] to-[#FAFBFC]" }
];

const businessIdeas: { title: string; points: string[]; icon: IconType; tint: string }[] = [
  { title: "Jewellers and Retail Businesses", points: ["Collection-focused video concepts", "Product detail and showcase visuals", "Festive campaign scenes", "New-arrival and launch creatives", "Brand storytelling concepts"], icon: Store, tint: "bg-[#F5EBDD]" },
  { title: "Clinics and Healthcare Businesses", points: ["General awareness video concepts", "Service explainer visuals", "Educational content concepts", "Brand introduction videos"], icon: HeartPulse, tint: "bg-[#EAF0F2]" },
  { title: "Coaching Classes and Education", points: ["Course introduction videos", "Educational visual explainers", "Admission campaign concepts", "Brand and programme introductions"], icon: GraduationCap, tint: "bg-[#F0EAF1]" },
  { title: "Restaurants and Cafes", points: ["Menu and food showcase concepts", "Seasonal campaign visuals", "Promotional video ideas", "Brand atmosphere and storytelling"], icon: Utensils, tint: "bg-[#F4E9E3]" },
  { title: "Real Estate Businesses", points: ["Property presentation concepts", "Location and lifestyle visuals", "Project introduction videos", "Campaign creatives"], icon: Home, tint: "bg-[#E9EFE9]" },
  { title: "Startups and Professional Services", points: ["Brand introduction videos", "Product and service explainers", "Concept-led campaign visuals", "Digital brand storytelling"], icon: BriefcaseBusiness, tint: "bg-[#ECECF3]" }
];

const process = [
  ["Creative Brief", "Understand the brand, intended audience, message, content objective and platform.", MessageCircle],
  ["Concept Development", "Explore creative directions, visual references, storytelling ideas and suitable formats.", Lightbulb],
  ["Script and Storyboard", "Plan the message, scene sequence, visual direction and content flow where required.", Layers3],
  ["AI-Assisted Production", "Use suitable AI tools and production workflows to develop the agreed visual concepts.", WandSparkles],
  ["Editing and Refinement", "Review generated material and refine the visual sequence, pacing, messaging and presentation.", Scissors],
  ["Quality and Brand Review", "Check the output for visual consistency, accuracy, brand alignment and platform suitability.", ShieldCheck],
  ["Final Delivery", "Prepare the agreed output formats and deliverables according to project requirements.", Check]
] as const;

const touchpoints = [
  ["Instagram and Facebook", "Reels concepts, promotional creatives, product showcases and campaign videos.", Camera],
  ["YouTube", "Short-form videos, brand introductions and suitable explainer content.", Video],
  ["Websites and Landing Pages", "Brand visuals, service explainers and selected video assets.", Globe2],
  ["Digital Advertising", "Campaign-focused video creatives and visual concepts suitable for the selected platform.", MonitorPlay],
  ["Product and Service Communication", "Visual presentations that help explain products, features, services or business ideas.", Package]
] as const;

const principles = [
  ["Brand Consistency", "Visuals should follow the brand's identity, tone and communication requirements."],
  ["Accuracy", "Product details, service information, claims and important visual elements should be checked."],
  ["Realistic Representation", "Generated scenes should not be presented as genuine customer experiences, real locations, actual products or completed projects when they are not."],
  ["Human Creative Review", "Creative direction, editing and quality checks remain important parts of the process."],
  ["Usage and Rights", "Tool terms, asset licences, platform requirements and permissions should be reviewed for the intended use."],
  ["Platform Suitability", "Video dimensions, duration, file formats and content requirements should match the intended destination."]
];

const industries: { name: string; href: string; copy: string; icon: IconType }[] = [
  { name: "Beauty & Wellness", href: "/industries/beauty-wellness", copy: "Service visuals, brand storytelling and promotional concepts.", icon: Flower2 },
  { name: "Ecommerce", href: "/industries/ecommerce", copy: "Product showcases, feature demonstrations and collection campaigns.", icon: ShoppingBag },
  { name: "Education", href: "/industries/education", copy: "Course explainers, educational visuals and admission campaign concepts.", icon: GraduationCap },
  { name: "Healthcare", href: "/industries/healthcare", copy: "Educational and service-related visuals subject to professional review.", icon: HeartPulse },
  { name: "Manufacturing", href: "/industries/manufacturing", copy: "Product applications, process explainers and industrial visual concepts.", icon: Factory },
  { name: "Professional Services", href: "/industries/professional-services", copy: "Brand introductions, service explainers and expertise-led content.", icon: BriefcaseBusiness },
  { name: "Real Estate", href: "/industries/real-estate", copy: "Project concepts, property communication and location-focused visuals.", icon: Home },
  { name: "Restaurants", href: "/industries/restaurants", copy: "Food showcases, menu visuals and seasonal promotional videos.", icon: Utensils },
  { name: "Startups", href: "/industries/startup", copy: "Product introductions, brand stories and concept-led campaign videos.", icon: Lightbulb },
  { name: "Travel & Hospitality", href: "/industries/travel-hospitality", copy: "Experience-led visuals, destination concepts and promotional content.", icon: Plane }
];

const digitalServices = [
  ["Social Media Marketing", "Plan and manage social media content, campaigns and brand communication.", "/services/social-media-marketing"],
  ["Search Engine Optimization (SEO)", "Improve organic search visibility through technical, on-page and content optimisation.", "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Plan and manage digital advertising campaigns.", "/services/performance-marketing"],
  ["Website Development & Management", "Build and maintain websites that present your brand and support enquiries.", "/services/website-development"],
  ["Digital PR & Media Relations", "Plan digital communication and media outreach.", "/services/digital-pr-and-media-relations"],
  ["AI Video and Creative", "Develop AI-assisted visual concepts, video content and campaign creatives.", "/services/ai-video-and-creative"],
  ["Professional Video Editing", "Edit and refine video content for digital platforms and campaigns.", "/services/video-editing"],
  ["Content Marketing", "Develop useful content for websites and digital communication.", "/services/content-marketing"],
  ["AI Automation", "Explore workflow automation and AI-assisted business processes.", "/services/ai-automation"]
] as const;

const faqs = [
  ["What are AI video and creative services?", "AI video and creative services use suitable AI-assisted tools and production techniques to develop visual concepts, videos and creative assets for brand communication."],
  ["What AI video services does Sharp Rays offer?", "Sharp Rays explores AI-assisted video creation, product visuals, brand storytelling, campaign creatives, short-form video concepts, visual experiments and creative direction."],
  ["Can AI videos be created for Borivali jewellers and retail businesses?", "Yes. Potential concepts include product showcases, collection highlights, new-arrival visuals and festive campaign videos. Final creative direction depends on the product and brand requirements."],
  ["Can you create Instagram Reels using AI?", "AI-assisted production can be used to explore short-form video concepts for Instagram Reels and other suitable platforms. The production approach depends on the content brief."],
  ["Can AI video be used for advertising?", "AI-assisted video content can be developed for suitable digital advertising campaigns, subject to platform specifications, policies and the accuracy of the creative."],
  ["Do you create scripts and storyboards?", "Scriptwriting, concept development and storyboarding can be included according to the project requirements and agreed scope."],
  ["Can AI-generated videos show real products?", "AI-generated visuals can sometimes alter product details. For product-focused content, important features, appearance and representations should be carefully checked before publishing."],
  ["Do AI-generated videos need editing?", "Often, yes. Editing and refinement can help improve pacing, scene continuity, messaging, brand consistency and platform suitability."],
  ["Can AI video content be used on websites and social media?", "Yes, where the final format, usage rights and platform requirements are suitable. Content can be planned for websites, social media and selected advertising placements."],
  ["Is AI video the same as professional video editing?", "No. AI video and creative focuses on AI-assisted concept development and visual production. Professional video editing focuses on editing and refining existing or supplied footage. Both services can complement each other."],
  ["How much do AI video and creative services cost?", "Pricing depends on the concept, duration, number of outputs, production complexity, editing and delivery requirements. Contact Sharp Rays to discuss your brief."],
  ["Can you create festive campaign videos for Borivali businesses?", "Yes. Festive and seasonal video concepts can be planned around a business's products, campaign message and intended audience."],
  ["How can I start an AI video project with Sharp Rays?", "Share your brand details, content requirements, preferred platform and creative references through the Sharp Rays contact page."]
];

export default function BorivaliAIVideoCreativePageClient() {
  return (
    <main className="overflow-hidden bg-[#FFFEFC] text-[#0B2A52]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#FAF8F4] px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 82% 12%, rgba(198,167,122,.20), transparent 30%),radial-gradient(circle at 8% 90%, rgba(11,42,82,.06), transparent 28%)" }} />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <Reveal>
            <Eyebrow>AI Video and Creative in Borivali</Eyebrow>
            <h1 className="mt-6 max-w-[760px] font-[var(--font-new-york),Georgia,serif] text-[clamp(42px,6vw,72px)] leading-[1.04] tracking-[-.055em]">Give Your Brand a More <i className="text-[#A1845F]">Creative</i> Way to Be Seen.</h1>
            <p className="mt-7 max-w-[650px] text-[14px] leading-[2] text-[#657889] sm:text-[15px]">Explore AI-assisted video concepts, product visuals, campaign creatives and visual storytelling designed around your brand. Sharp Rays combines creative direction with emerging AI tools to develop content possibilities for digital platforms.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact?source=borivali-ai-video-and-creative" title="Discuss Your Creative Project" className="inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-7 py-4 text-[11px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your Creative Project <ArrowUpRight size={15} /></Link>
              <Link href="/services/ai-video-and-creative" className="inline-flex items-center gap-3 rounded-[9px] border border-[#C6A77A] bg-white/70 px-7 py-4 text-[11px] font-semibold transition hover:bg-white">Explore Our Digital Services <ArrowRight size={15} /></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#E5DCCE] pt-6 text-[10px] font-semibold tracking-[.08em] text-[#718093]">
              <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#A1845F}" />AI-assisted concepts</span>
              <span className="flex items-center gap-2"><Clapperboard size={14} className="text-[#A1845F]" />Creative direction</span>
              <span className="flex items-center gap-2"><Palette size={14} className="text-[#A1845F]" />Brand-led visuals</span>
            </div>
          </Reveal>
          <Reveal delay={.1}>
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-[#C6A77A]/35" />
              <div className="relative overflow-hidden rounded-[30px] border border-[#E7DED2] bg-gradient-to-br from-[#F0E6D8] via-[#FBF9F5] to-[#EAF0F2] p-5 shadow-[0_25px_70px_rgba(11,42,82,.08)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#DCD3C8] pb-4">
                  <div><p className="text-[9px] font-bold tracking-[.2em] text-[#A1845F]">CREATIVE DIRECTION BOARD</p><p className="mt-1 font-serif text-[20px]">A visual idea, thoughtfully shaped</p></div>
                  <span className="rounded-full border border-[#DCCBB2] bg-white/70 px-3 py-1.5 text-[9px] text-[#8B765C]">BORIVALI · MUMBAI</span>
                </div>
                <div className="mt-6 grid grid-cols-[1.1fr_.9fr] gap-3">
                  <div className="relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[18px] bg-gradient-to-br from-[#D7C1A8] via-[#EDE2D4] to-[#B9C8C9] p-4">
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/65 text-[#8C6D4D]"><Play size={15} fill="currentColor" /></span>
                    <div className="relative z-10"><p className="text-[8px] font-bold tracking-[.18em] text-[#755D47]">VISUAL STORY</p><p className="mt-2 font-serif text-[25px] leading-[1.08] text-[#263E4B]">Make the idea feel real.</p></div>
                    <div className="absolute -right-8 top-10 h-36 w-36 rounded-full border-[18px] border-white/20" />
                    <div className="absolute bottom-12 right-5 h-20 w-20 rotate-12 rounded-[24px] border border-white/50 bg-white/20 backdrop-blur-sm" />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex min-h-[108px] flex-col justify-between rounded-[16px] bg-[#E7E9E3] p-4"><Camera size={18} className="text-[#8D795E]" /><div><p className="text-[8px] font-bold tracking-[.15em] text-[#8D795E]">PRODUCT</p><p className="mt-1 font-serif text-[16px]">Details matter</p></div></div>
                    <div className="flex min-h-[108px] flex-col justify-between rounded-[16px] bg-[#E8E2EB] p-4"><Megaphone size={18} className="text-[#806B8B]" /><div><p className="text-[8px] font-bold tracking-[.15em] text-[#806B8B]">CAMPAIGN</p><p className="mt-1 font-serif text-[16px]">A clear message</p></div></div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-xl border border-[#E4D8C8] bg-white/65 px-4 py-3"><span className="text-[9px] font-semibold tracking-[.12em] text-[#8B765C]">CONCEPT · STORYBOARD · REFINEMENT</span><Sparkles size={16} className="text-[#A1845F]" /></div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#E7DED2] bg-white px-5 py-4 shadow-lg sm:block"><p className="text-[9px] font-bold tracking-[.16em] text-[#A1845F]">SHARP RAYS</p><p className="mt-1 font-serif text-[18px]">We Create the “Oh, Wow.”!</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[.7fr_1.3fr] md:gap-16">
          <Reveal><Eyebrow>AI Video Agency in Borivali</Eyebrow></Reveal>
          <Reveal><h2 className="font-[var(--font-new-york),Georgia,serif] text-[clamp(28px,3.5vw,42px)] leading-[1.2] tracking-[-.035em]">What does an AI video and creative agency in Borivali <i className="text-[#A1845F]">do?</i></h2><p className="mt-5 text-[13px] leading-[2] text-[#657889]">An AI video and creative agency in Borivali uses suitable AI tools and creative production techniques to develop visual content for businesses. Sharp Rays explores AI-assisted video concepts, product-focused visuals, campaign creatives and brand storytelling, with creative direction shaped around the business objective, intended platform and content requirements.</p></Reveal>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Heading eyebrow="Creative Content With a Clear Purpose" title={<>Use AI as a creative tool, not a replacement for <i className="text-[#A1845F]">creative thinking.</i></>} copy="Digital content is increasingly visual. Brands need creative ways to introduce products, communicate ideas and present their identity across social media, websites and advertising campaigns. AI-assisted creative production can help explore visual concepts and content formats for different business requirements." />
          <Reveal><div className="rounded-[24px] border border-[#E7DED2] bg-gradient-to-br from-[#F2E8DA] via-[#FBF9F5] to-[#EAF0F2] p-7 sm:p-9"><p className="font-serif text-[23px]">Potential creative directions</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{["Product-focused video concepts","Visual storytelling for campaigns","AI-assisted scenes and environments","Promotional video concepts","Short-form social media content","Launch and seasonal creatives"].map((item)=><div key={item} className="flex gap-3 rounded-xl border border-white/80 bg-white/65 p-4 text-[11px] leading-[1.7] text-[#526779]"><Check size={14} className="mt-0.5 shrink-0 text-[#A1845F]" />{item}</div>)}</div><p className="mt-6 border-t border-[#DCD3C8] pt-5 text-[11px] leading-[1.9] text-[#718093]">Every project should begin with a defined creative brief, intended audience and platform requirements.</p></div></Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#FFFEFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="AI Video and Creative Services" title={<>Explore different formats for visual brand <i className="text-[#A1845F]">communication.</i></>} copy="From initial concept development to refined visual output, choose creative formats that support your message, audience and platform." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.title} delay={(i%4)*.035}><article className={`group relative h-full overflow-hidden rounded-[20px] border border-[#EAE2D7] bg-gradient-to-br ${s.tint} p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-[0_14px_35px_rgba(11,42,82,.07)]`}><span className="absolute -right-7 -top-7 h-20 w-20 rounded-full border border-[#C6A77A]/30 transition-transform duration-700 group-hover:scale-150" /><span className="relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/75 text-[#A1845F]"><Icon size={20} strokeWidth={1.5} /></span><h3 className="relative mt-6 font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.3]">{s.title}</h3><p className="relative mt-3 text-[11px] leading-[1.95] text-[#718093]">{s.copy}</p></article></Reveal>})}</div>
        </div>
      </section>

      {/* BORIVALI BUSINESS USE CASES */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="AI Video Ideas for Borivali Businesses" title={<>Make products, services and campaigns more <i className="text-[#A1845F]">visually engaging.</i></>} copy="Creative directions can be adapted to the type of business, its audience and the story it needs to communicate." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{businessIdeas.map((b,i)=>{const Icon=b.icon;return <Reveal key={b.title} delay={(i%3)*.04}><article className="h-full rounded-[20px] border border-[#E7DED2] bg-white/75 p-6 sm:p-7"><div className="flex items-center gap-4"><span className={`flex h-12 w-12 items-center justify-center rounded-[15px] ${b.tint} text-[#A1845F]`}><Icon size={21} strokeWidth={1.5}/></span><h3 className="font-[var(--font-new-york),Georgia,serif] text-[20px] leading-[1.25]">{b.title}</h3></div><ul className="mt-6 space-y-3">{b.points.map(point=><li key={point} className="flex gap-2 text-[11px] leading-[1.75] text-[#657889]"><span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#C6A77A]"/>{point}</li>)}</ul></article></Reveal>})}</div>
          <p className="mt-6 rounded-xl border border-[#E4D8C8] bg-[#FBF9F5] px-5 py-4 text-[11px] leading-[1.9] text-[#718093]">Healthcare content should be fact-checked and reviewed by appropriate professionals. AI-generated visuals must not misrepresent treatments, results or medical outcomes. For real estate, AI-generated scenes must not be presented as genuine property footage or actual amenities. Creative formats should be selected according to the actual product, audience and campaign purpose.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Our AI Video Creative Process" title={<>From an initial idea to a refined visual <i className="text-[#A1845F]">output.</i></>} copy="A considered process helps keep creative development aligned with the brief, the brand and the intended use." />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{process.map(([title,copy,Icon],i)=><Reveal key={title} delay={(i%4)*.035}><div className="h-full rounded-[18px] border border-[#EAE2D7] bg-[#FCFAF7] p-6"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0E6D8] text-[#A1845F]"><Icon size={18}/></span><h3 className="mt-5 font-serif text-[20px]">{title}</h3><p className="mt-3 text-[11px] leading-[1.9] text-[#718093]">{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      {/* TOUCHPOINTS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Where Creative Content Can Be Used" title={<>One creative concept can support different digital <i className="text-[#A1845F]">touchpoints.</i></>} copy="Plan each output around the destination, its audience and the format that makes sense for the content." />
          <div className="mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-5">{touchpoints.map(([title,copy,Icon],i)=><Reveal key={title} delay={i*.035}><div className="h-full rounded-[18px] border border-[#E7DED2] bg-white/80 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1E7D9] text-[#A1845F]"><Icon size={18}/></span><h3 className="mt-5 font-serif text-[18px]">{title}</h3><p className="mt-3 text-[10px] leading-[1.9] text-[#718093]">{copy}</p></div></Reveal>)}</div>
          <p className="mt-6 text-[11px] leading-[1.9] text-[#718093]">The final format, duration, aspect ratio and usage requirements should be decided before production.</p>
        </div>
      </section>

      {/* RESPONSIBLE USE */}
      <section className="bg-[#FFFEFC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20"><div><Heading eyebrow="Creative Quality and Responsible Use" title={<>AI-assisted does not mean <i className="text-[#A1845F]">unchecked.</i></>} copy="AI tools can produce useful creative material, but outputs need careful review. Creative quality also depends on accuracy, representation, permissions and the platform where the content will appear." /></div>
          <div className="grid gap-3 sm:grid-cols-2">{principles.map(([title,copy],i)=><Reveal key={title} delay={(i%2)*.04}><div className="rounded-[17px] border border-[#EAE2D7] bg-white p-5"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2E8DA] text-[#A1845F]"><ShieldCheck size={15}/></span><h3 className="font-serif text-[18px]">{title}</h3></div><p className="mt-3 text-[11px] leading-[1.9] text-[#718093]">{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Creative for Different Industries" title={<>Visual content opportunities across <i className="text-[#A1845F]">ten business categories.</i></>} copy="Explore how AI-assisted creative concepts can support different products, services and brand communication needs." />
          <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{industries.map((item,i)=>{const Icon=item.icon;return <Reveal key={item.name} delay={(i%5)*.03}><Link href={item.href} title={`Explore ${item.name} industry solutions by Sharp Rays`} className="group block h-full rounded-[17px] border border-[#E7DED2] bg-white/80 p-5 transition hover:-translate-y-1 hover:border-[#C6A77A] hover:shadow-md"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1E7D9] text-[#A1845F]"><Icon size={18}/></span><h3 className="mt-4 font-serif text-[18px]">{item.name}</h3><p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{item.copy}</p><span className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.13em] text-[#A1845F]">Explore industry <ArrowUpRight size={12} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></span></Link></Reveal>})}</div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]"><Heading eyebrow="Sharp Rays Digital Services" title={<>Creative production works best as part of a connected <i className="text-[#A1845F]">digital presence.</i></>} copy="Explore the wider services that can support your brand's digital communication and growth." />
          <div className="mt-11 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{digitalServices.map(([title,copy,href],i)=><Reveal key={title} delay={(i%3)*.035}><Link href={href} title={`Explore ${title} by Sharp Rays`} className="group flex h-full items-start justify-between gap-4 rounded-[16px] border border-[#EAE2D7] bg-[#FCFAF7] p-5 transition hover:border-[#C6A77A] hover:bg-[#FAF6F0]"><div><h3 className="font-serif text-[19px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.85] text-[#718093]">{copy}</p></div><ArrowUpRight size={16} className="mt-1 shrink-0 text-[#A1845F] transition group-hover:-translate-y-1 group-hover:translate-x-1"/></Link></Reveal>)}</div>
        </div>
      </section>

      {/* WHY SHARP RAYS */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-16"><Heading eyebrow="Why Choose Sharp Rays" title={<>Creative exploration with a clear production <i className="text-[#A1845F]">direction.</i></>} copy="The creative approach should make sense for the brand, the message and the intended audience—not simply follow a visual trend." />
          <div className="grid gap-3 sm:grid-cols-2">{[["Concept Before Production","Start with the message, audience and purpose before selecting a visual style."],["AI-Assisted Creative Exploration","Explore suitable AI tools and techniques to develop visual possibilities."],["Brand-Led Direction","Keep the creative output aligned with the business's identity and communication requirements."],["Human Review and Refinement","Review generated content for quality, accuracy and suitability."],["Connected Digital Thinking","Plan visual content that can support social media, websites and suitable advertising campaigns."]].map(([title,copy])=><div key={title} className="rounded-[16px] border border-[#E7DED2] bg-white/80 p-5"><h3 className="font-serif text-[18px]">{title}</h3><p className="mt-2 text-[10px] leading-[1.9] text-[#718093]">{copy}</p></div>)}</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1120px]"><div className="rounded-[26px] border border-[#E7DED2] bg-gradient-to-br from-[#F4EBDD] via-[#FCFAF7] to-[#EEF2F2] p-7 sm:p-10 lg:p-12"><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]"><div><Eyebrow>AI Video and Creative Pricing</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">Every creative project has different production <i className="text-[#A1845F]">requirements.</i></h2><p className="mt-5 text-[12px] leading-[2] text-[#657889]">The scope and cost of AI video and creative work can depend on the number of concepts and final outputs, video duration and format, script and storyboard requirements, complexity of AI-assisted scenes, editing and refinement, voice-over or music requirements, and usage and delivery specifications.</p><p className="mt-4 text-[12px] leading-[2] text-[#657889]">Contact Sharp Rays to discuss your creative brief and confirm the project scope.</p><Link href="/contact?source=borivali-ai-video-and-creative" className="mt-7 inline-flex items-center gap-3 rounded-[9px] bg-[#0B2A52] px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-[#173D68]">Discuss Your AI Video Project <ArrowUpRight size={14}/></Link></div>
            <div className="rounded-[19px] border border-white/90 bg-white/75 p-6"><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#A1845F]">Website Development Starting Prices</p><p className="mt-3 font-serif text-[19px]">Published website packages</p><div className="mt-5 space-y-3">{[["Starter Website","₹14,999"],["Business Website","₹24,999"],["Advanced Website","₹39,999"]].map(([name,price])=><div key={name} className="flex items-center justify-between border-b border-[#E9E1D6] pb-3"><span className="text-[11px] text-[#657889]">{name}</span><span className="font-serif text-[20px] text-[#0B2A52]">{price}</span></div>)}</div><p className="mt-5 text-[10px] leading-[1.85] text-[#718093]">These are website development starting prices only. They are not AI video, creative production or video editing prices.</p><Link href="/pricing" title="pricing" className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-[#A1845F]">Explore pricing <ArrowRight size={13}/></Link></div>
          </div></div></div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F4] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1180px]"><div className="mx-auto max-w-[720px] text-center"><Eyebrow>Frequently Asked Questions</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(31px,4vw,48px)] leading-[1.12] tracking-[-.04em]">AI Video and Creative in Borivali <i className="text-[#A1845F]">— FAQs</i></h2><p className="mt-4 text-[12px] leading-[1.9] text-[#718093]">Helpful answers about AI-assisted video concepts, creative production and project requirements.</p></div>
          <div className="mt-12 grid gap-x-12 md:grid-cols-2">{faqs.map(([q,a],i)=><Reveal key={q} delay={(i%2)*.025}><div className="flex gap-4 border-b border-[#E5DCCE] py-6"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0E3D5] text-[#A1845F]"><MessageCircle size={15}/></span><div><h3 className="font-[var(--font-new-york),Georgia,serif] text-[17px] leading-[1.45] text-[#0B2A52]">{q}</h3><p className="mt-3 text-[11px] leading-[1.95] text-[#718093]">{a}</p></div></div></Reveal>)}</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B2A52] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-9 md:flex-row md:items-end"><div className="max-w-[720px]"><Eyebrow>Let's Create Something Meaningful</Eyebrow><h2 className="mt-5 font-[var(--font-new-york),Georgia,serif] text-[clamp(34px,4.5vw,56px)] leading-[1.1] tracking-[-.045em]">Have a Creative Idea? <i className="text-[#D8BD98]">Let's Explore It.</i></h2><p className="mt-5 max-w-[650px] text-[12px] leading-[2] text-white/70">From AI-assisted product visuals and short-form videos to campaign concepts and brand storytelling, Sharp Rays can help turn your creative brief into a structured production direction.</p></div><div className="flex flex-wrap gap-3"><Link href="/contact?source=borivali-ai-video-and-creative" className="inline-flex items-center gap-3 rounded-[9px] bg-white px-6 py-4 text-[10px] font-semibold text-[#0B2A52] transition hover:bg-[#F2E8DA]">Discuss Your Creative Project <ArrowUpRight size={14}/></Link><Link href="/services/ai-video-and-creative" className="inline-flex items-center gap-3 rounded-[9px] border border-white/35 px-6 py-4 text-[10px] font-semibold text-white transition hover:bg-white/10">Explore AI Video Services <ArrowRight size={14}/></Link></div></div>
      </section>
    </main>
  );
}
