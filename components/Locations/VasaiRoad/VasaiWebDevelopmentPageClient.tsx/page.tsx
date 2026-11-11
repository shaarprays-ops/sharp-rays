"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, Globe2, Smartphone,
  ShoppingCart, Factory, Store, HeartPulse, GraduationCap, Building2,
  Utensils, BriefcaseBusiness, Sparkles, Code2, Layout, Layers3,
  MessageCircle, FileText, ShieldCheck, Gauge, Search, ClipboardCheck,
  Package, Settings2, MonitorSmartphone, MapPin, Rocket, Palette,
  ShoppingBag, Wrench, Target, Eye, Menu, Workflow,
} from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A47B4D] sm:text-[11px]">
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
  title: React.ReactNode;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-[740px]`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-[clamp(26px,3.1vw,38px)] leading-[1.16] tracking-[-0.04em] text-[#26364A]">
        {title}
      </h2>
      {copy && (
        <p className={`mt-4 text-[13px] leading-[1.9] text-[#748092] sm:text-[14px] ${center ? "mx-auto max-w-[650px]" : "max-w-[650px]"}`}>
          {copy}
        </p>
      )}
    </div>
  );
}

function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      title={typeof children === "string" ? children : undefined}
      className="group relative inline-flex min-h-[46px] items-center justify-center overflow-hidden rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-5 py-[11px] text-[13px] font-medium tracking-[-0.01em] text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,0.08)] backdrop-blur-[8px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#6285AD]/40 hover:bg-white hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)] active:translate-y-0 sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px] md:text-[15px]"
    >
      <span className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
      <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
      <span className="relative z-10 whitespace-nowrap text-[#0B2A52]">{children}</span>
      <ArrowUpRight size={14} className="relative z-10 ml-1 text-[#0B2A52] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

const accents = [
  { card: "bg-[#F0F5F8] border-[#D9E6ED]", icon: "bg-[#DDEBF2] text-[#47758E]", tag: "bg-[#DDEBF2] text-[#426D83]" },
  { card: "bg-[#F8F1E9] border-[#EADCCB]", icon: "bg-[#F0E2D1] text-[#A47745]", tag: "bg-[#F0E2D1] text-[#936B3F]" },
  { card: "bg-[#F0F3EF] border-[#DCE6D9]", icon: "bg-[#E0EBDD] text-[#63805D]", tag: "bg-[#E0EBDD] text-[#587552]" },
  { card: "bg-[#F7F0F3] border-[#EADCE4]", icon: "bg-[#EEDFE7] text-[#98677F]", tag: "bg-[#EEDFE7] text-[#895A72]" },
  { card: "bg-[#F2F1F8] border-[#E0DFF0]", icon: "bg-[#E5E3F2] text-[#7770A2]", tag: "bg-[#E5E3F2] text-[#6B6595]" },
  { card: "bg-[#F8F3E9] border-[#EAE2CC]", icon: "bg-[#F0E9D5] text-[#927D42]", tag: "bg-[#F0E9D5] text-[#806D38]" },
  { card: "bg-[#EEF4F2] border-[#D9E7E2]", icon: "bg-[#DDECE6] text-[#568071]", tag: "bg-[#DDECE6] text-[#4D7568]" },
];

const challenges = [
  ["No professional website", "Without a dedicated website, potential customers may struggle to find reliable information about your business, products, services and contact details.", Globe2],
  ["An outdated website", "Old content, inconsistent layouts and poor mobile experiences can make your business appear less professional.", Eye],
  ["Products are difficult to explore", "Without organized product categories, specifications and catalogue pages, visitors may struggle to understand your offerings.", Package],
  ["Not enough enquiries", "When contact details, enquiry forms or clear calls to action are difficult to find, visitors may leave without contacting you.", MessageCircle],
  ["Poor mobile experience", "Difficult navigation, excessive zooming and layouts that do not adapt to smaller screens create unnecessary friction.", Smartphone],
  ["Not built with SEO in mind", "Weak page structure, missing metadata, poor internal links and technical issues can make your website harder to understand.", Search],
  ["Too much dependence on social media", "Social profiles are useful, but a website gives your business control over its content, product information and customer experience.", Layers3],
];

const services = [
  {
    title: "Business Website Development", line: "Give your business a professional digital presence",
    copy: "A professional business website helps visitors understand your company, explore your services and find the information they need.",
    icon: Globe2, tag: "Business essentials",
    points: ["Professional homepage design", "About and company information pages", "Service and product pages", "Contact and enquiry forms", "Responsive layouts", "Clear navigation", "SEO-friendly page structures", "WhatsApp contact integration where required"],
    suitable: "Small businesses, professional service providers, agencies and growing companies.",
  },
  {
    title: "Website Design & UI/UX", line: "Create a website experience that represents your brand",
    copy: "Good website design is about more than appearance. It should help visitors understand your business and navigate your website without confusion.",
    icon: Palette, tag: "Design & experience",
    points: ["Website layout and visual hierarchy", "Brand colours and typography", "User experience and navigation", "Responsive design", "Clear calls to action", "Consistent visual communication", "User-friendly page structures"],
    suitable: "Brands that want a more polished, consistent and usable website experience.",
  },
  {
    title: "Manufacturing & Industrial Websites", line: "Present your products and capabilities professionally",
    copy: "Industrial businesses often need websites that communicate company information, product ranges, technical specifications and business capabilities.",
    icon: Factory, tag: "B2B & industrial",
    points: ["Company profile pages", "Product catalogue structures", "Product category pages", "Product specifications", "Downloadable brochures", "Manufacturing capability information", "RFQ forms", "B2B enquiry functionality"],
    suitable: "Manufacturers, industrial suppliers, distributors and B2B businesses.",
  },
  {
    title: "Product Catalogue Websites", line: "Organize your products into a clear digital catalogue",
    copy: "A product catalogue website presents multiple products without necessarily requiring online checkout functionality.",
    icon: Package, tag: "Product discovery",
    points: ["Organized product categories", "Individual product pages", "Product images and descriptions", "Technical specifications", "Product filters where required", "Brochure downloads", "Enquiry buttons", "RFQ functionality"],
    suitable: "Manufacturers, wholesalers, distributors and industrial suppliers.",
  },
  {
    title: "E-commerce Website Development", line: "Build an online store for your products",
    copy: "An e-commerce website provides a dedicated platform to showcase products and manage customer purchases.",
    icon: ShoppingCart, tag: "Online selling",
    points: ["Product listings and categories", "Product detail pages", "Shopping cart functionality", "Checkout experience", "Payment gateway integration", "Order management", "Customer accounts", "Mobile-friendly shopping"],
    suitable: "Retailers, product-based businesses and D2C brands.",
  },
  {
    title: "Custom Website Development", line: "Build digital experiences around your requirements",
    copy: "Some businesses need functionality beyond standard website layouts. Custom development shapes the website around specific requirements.",
    icon: Code2, tag: "Custom functionality",
    points: ["Custom page layouts", "Interactive website components", "Custom enquiry workflows", "API integrations", "Dynamic content", "Custom forms", "Dashboard functionality", "Business-specific web applications"],
    suitable: "Businesses with specialized workflows or functionality requirements.",
  },
  {
    title: "Website Redesign & Modernization", line: "Give your existing website a better digital experience",
    copy: "A redesign can improve your website's structure, appearance and usability while considering existing search visibility and important URLs.",
    icon: MonitorSmartphone, tag: "Improve & modernize",
    points: ["Existing website evaluation", "Updated UI/UX design", "Improved navigation", "Mobile responsiveness", "Content restructuring", "SEO migration considerations", "Performance improvements", "Updated enquiry journeys"],
    suitable: "Businesses with outdated websites or changing brand and business needs.",
  },
];

const industries = [
  ["Beauty & Wellness", "Present services, treatments, facilities and business information.", "Service menus, galleries, appointment enquiries and WhatsApp integration.", Sparkles, "/industries/beauty-wellness"],
  ["E-commerce", "Develop online shopping experiences for product-based brands.", "Product categories, product pages, cart, checkout and payment integration.", ShoppingBag, "/industries/ecommerce"],
  ["Education", "Present courses, programmes, educational information and admission details.", "Course pages, programme information, enquiry forms and admission details.", GraduationCap, "/industries/education"],
  ["Healthcare", "Present services, practitioner information, facilities and appointment enquiry options.", "Service pages, department information, contact details and appointment forms.", HeartPulse, "/industries/healthcare"],
  ["Manufacturing", "Present products, specifications, manufacturing capabilities and company information.", "Product catalogues, RFQ forms, product categories, brochures and B2B enquiries.", Factory, "/industries/manufacturing"],
  ["Professional Services", "Build a credible digital presence for consultants, agencies and service providers.", "Service pages, company information, portfolio sections and enquiry forms.", BriefcaseBusiness, "/industries/professional-services"],
  ["Real Estate", "Showcase property information and real estate services.", "Property listings, image galleries, property details and enquiry forms.", Building2, "/industries/real-estate"],
  ["Restaurants", "Help customers explore menus, business information and available services.", "Digital menus, image galleries, location details and reservation enquiries.", Utensils, "/industries/restaurants"],
  ["Startups", "Create a professional digital foundation for businesses establishing an online presence.", "Brand-focused design, business information, service pages and scalable structure.", Rocket, "/industries/startups"],
  ["Travel & Hospitality", "Present destinations, stays, experiences and hospitality services.", "Destination pages, room or package details, galleries, booking enquiries and contact options.", Globe2, "/industries/travel-hospitality"],
];

const agencyServices = [
  ["Social Media Marketing", "Build a consistent social presence and connect with the right audience.", "Content planning, social media management, creative direction and audience engagement.", Sparkles, "/services/social-media-marketing"],
  ["Search Engine Optimization (SEO)", "Improve how your business is discovered through organic search.", "Technical SEO, on-page optimization, content strategy and local SEO.", Search, "/services/search-engine-optimization"],
  ["Performance Marketing / Paid Media", "Plan and optimize paid campaigns around meaningful business goals.", "Campaign strategy, audience targeting, ad creatives and performance analysis.", Target, "/services/performance-marketing"],
  ["Website Development & Management", "Create and maintain a website that supports your business online.", "Website design, development, responsive experiences, integrations and maintenance.", Code2, "/services/web-development-and-management"],
  ["Digital PR & Media Relations", "Strengthen brand credibility through thoughtful digital communications.", "Digital PR planning, media outreach, brand stories and online visibility.", FileText, "/services/digital-pr-and-media-relations"],
  ["AI Video and Creative", "Explore fresh visual ideas with AI-assisted creative production.", "AI video concepts, visual experiments, creative assets and motion-led content.", Sparkles, "/services/ai-video-and-creative"],
  ["Professional Video Editing", "Turn raw footage into clear, engaging and polished video content.", "Editing, pacing, transitions, sound refinement and platform-ready exports.", MonitorSmartphone, "/services/professional-video-editing"],
  ["Content Marketing", "Create useful content that answers audience questions and supports discovery.", "Content strategy, website articles, social content and editorial planning.", FileText, "/services/content-marketing"],
  ["AI Automation", "Reduce repetitive tasks with practical workflow automation.", "Workflow mapping, process automation, integrations and AI-assisted operations.", Workflow, "/services/ai-automation"],
];

const faqs = [
  ["Which website development company in Vasai can build a business website?", "Sharp Rays provides website development solutions including business websites, website design, custom development, product catalogue websites and e-commerce solutions. The right approach depends on your business requirements and desired website functionality."],
  ["How much does website development cost in Vasai?", "Website development costs depend on the number of pages, design requirements, functionality, integrations and overall project scope. Sharp Rays offers starting packages at ₹14,999, ₹24,999 and ₹39,999. Visit our pricing page for actual package inclusions."],
  ["Do you develop websites for manufacturing companies in Vasai?", "Yes. Our website development capabilities include industrial website structures, company profile pages, product catalogues, technical information and RFQ functionality, depending on project requirements."],
  ["Can you build a product catalogue website for my business?", "Yes. A product catalogue website can organize products into categories, display product images and specifications, and allow visitors to submit enquiries or quotation requests."],
  ["Can you integrate WhatsApp into my business website?", "Yes. WhatsApp integration can provide visitors with a convenient way to enquire about products, services and business information. The implementation depends on the website requirements."],
  ["Do you provide website development in Vasai East and Vasai West?", "Our location-focused website development services are intended for businesses across Vasai East, Vasai West and surrounding areas. Contact us to discuss your website requirements and project scope."],
  ["Will my website work on mobile phones?", "We develop responsive website experiences designed to adapt to smartphones, tablets and desktop screens. The implementation is tested across relevant screen sizes."],
  ["Will my website be SEO-friendly?", "We consider SEO foundations during website development, including page structure, metadata, headings, internal links, mobile responsiveness and other relevant technical elements. Ongoing SEO services are a separate consideration depending on your requirements."],
  ["Can you redesign my existing website?", "Yes. Website redesign projects can include visual updates, improved navigation, content restructuring, responsive design and technical improvements. Existing URLs and SEO considerations should be reviewed before making changes."],
  ["Do you develop e-commerce websites?", "We can develop e-commerce website solutions with product listings, product pages, cart functionality, checkout and payment integrations depending on the project scope."],
  ["How long does it take to develop a website?", "Website development timelines depend on the number of pages, design complexity, functionality, content readiness and approval process. A timeline can be discussed after understanding your project requirements."],
  ["Will I be able to update my website after launch?", "Website editing and content management capabilities depend on the development approach and agreed project scope. We can discuss suitable content management options based on your requirements."],
  ["Do you provide website maintenance?", "Website maintenance and ongoing support depend on the agreed service scope. Contact us to discuss website updates, technical assistance and maintenance requirements."],
  ["How can I get started with Sharp Rays?", "You can contact Sharp Rays through the website enquiry form. Share your business type, website requirements, preferred features and project goals so we can discuss a suitable development approach."],
];

const process = [
  ["Understand Your Business", "We understand your company, audience, products, services and website objectives, then identify the website type, features and project scope.", Search],
  ["Website Planning & Structure", "We plan website architecture, page structure, navigation and user journeys. An industrial catalogue may need product categories and RFQ functionality; a local business may prioritize service pages and WhatsApp enquiries.", ClipboardCheck],
  ["UI/UX Design", "We develop the visual direction and page layouts around your brand identity and user requirements, considering typography, colours, layout and responsive design.", Palette],
  ["Website Development", "We turn approved designs into functional pages and implement the required features and integrations, which may include forms, catalogues, custom functionality and third-party tools.", Code2],
  ["Testing & Optimization", "We review responsive layouts, navigation, links, forms, content, images, basic technical SEO, browser compatibility and website performance.", Gauge],
  ["Website Launch", "After review and approval, the website can be deployed to the production environment with the required domain and hosting configuration.", Rocket],
  ["Post-Launch Support", "Where included in the agreed project scope, we assist with website-related updates, fixes and improvements. Support arrangements depend on the selected package.", Wrench],
];

const foundations = [
  ["Responsive website design", "Layouts adapt to smartphones, tablets and desktop screens.", Smartphone],
  ["SEO-friendly structure", "Organized pages, headings, URLs and internal links help search engines understand your offerings.", Search],
  ["Website performance", "We consider loading performance, image optimization and efficient resources for a smoother experience.", Gauge],
  ["User-friendly navigation", "Logical menus and page structures help visitors find important information.", Menu],
  ["Conversion-focused design", "Relevant enquiry forms, contact options and calls to action make the next step clear.", Target],
  ["Secure foundations", "HTTPS and appropriate security practices help protect website connections and interactions.", ShieldCheck],
  ["Accessible experiences", "Readable typography, suitable colour contrast, descriptive links and accessible interface elements.", Eye],
  ["Scalable architecture", "Website structures can accommodate additional pages, products, services and future functionality.", Workflow],
];

const reasons = [
  ["Design with purpose", "We consider your brand, audience and website objectives before planning the visual experience.", Palette],
  ["Functionality around your business", "We consider the features your website needs, such as product catalogues, RFQ forms, WhatsApp enquiries or custom functionality.", Settings2],
  ["SEO-friendly foundations", "We consider page structure, headings, metadata, internal linking and technical SEO foundations during planning.", Search],
  ["Responsive user experience", "We focus on layouts and navigation that work across mobile, tablet and desktop devices.", Smartphone],
  ["A clear development process", "We follow a structured process involving requirements, planning, design, development, testing and launch.", ClipboardCheck],
  ["Business-focused thinking", "We consider how visitors explore your offerings, understand your value and contact your business.", Target],
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
      <div className="min-w-0">
        <h3 className="font-serif text-[18px] leading-[1.4] text-[#26364A] sm:text-[20px]">{question}</h3>
        <p className="mt-3 text-[12px] leading-[1.95] text-[#708092]">{answer}</p>
      </div>
    </article>
  );
}

export default function VasaiWebsiteDevelopmentPageClient() {
  return (
    <main className="overflow-hidden bg-[#FBFAF7] text-[#26364A]">
      {/* HERO */}
      <section className="relative isolate border-b border-[#EAE7E0]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(198,167,122,.18),transparent_32%),radial-gradient(circle_at_10%_85%,rgba(205,221,224,.35),transparent_30%)]" />
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-28">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E6D9C8] bg-white/75 px-4 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#9A754D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A47B4D]" /> Website Design & Development · Vasai
            </div>
            <h1 className="max-w-[680px] font-serif text-[clamp(34px,5vw,57px)] leading-[1.08] tracking-[-.05em] text-[#26364A]">
              Website Development in Vasai for <span className="text-[#A47B4D]">Businesses Ready to Grow Online</span>
            </h1>
            <p className="mt-6 max-w-[620px] text-[14px] leading-[1.95] text-[#6F7D8D] sm:text-[15px]">
              Your website is more than a digital address. It is where potential customers discover your business, explore your offerings and decide whether to get in touch.
            </p>
            <p className="mt-3 max-w-[620px] text-[13px] leading-[1.9] text-[#7B8794]">
              Sharp Rays creates modern, responsive and SEO-friendly websites. From product catalogue and RFQ websites for manufacturers in Vasai East to WhatsApp-ready business websites for shops and service providers in Vasai West, we bring design, technology and functionality together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact?service=website-development">Get a Website Development Quote</ButtonLink>
              <ButtonLink href="/portfolio" secondary>Explore Our Work</ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-[#788493]">
              {["For manufacturers", "For retailers", "For startups", "For growing brands"].map((x) => (
                <span key={x} className="inline-flex items-center gap-2"><Check size={13} className="text-[#8C9D7B}" />{x}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#D8C4A8]/70" />
            <div className="relative rounded-[30px] border border-white bg-white/80 p-3 shadow-[0_25px_80px_rgba(44,57,72,.12)]">
              <div className="rounded-[23px] bg-[#F1F3F2] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-[#DDE2E0] pb-4">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#C6A77A]" /><span className="text-[10px] font-bold tracking-[.18em] text-[#536273]">YOUR BUSINESS ONLINE</span></div>
                  
                </div>
                <div className="grid grid-cols-[1fr_105px] items-center gap-4 py-8">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#A47B4D]">A clearer digital presence</p>
                    <h3 className="mt-3 font-serif text-[27px] leading-[1.12] text-[#26364A]">Built around your business.</h3>
                    <p className="mt-3 text-[10px] leading-5 text-[#7C8791]">Thoughtful design. Useful features. A better customer journey.</p>
                    <div className="mt-5 h-7 w-24 rounded-full bg-[#26364A]" />
                  </div>
                  <div className="flex h-[145px] flex-col justify-between rounded-[18px] bg-[#DCE7E4] p-3">
                    <div className="flex justify-end"><Globe2 size={20} className="text-[#64877D]" /></div>
                    <div className="space-y-2"><div className="h-2 w-full rounded bg-white/80" /><div className="h-2 w-4/5 rounded bg-white/70" /><div className="h-2 w-3/5 rounded bg-white/60" /></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[[Layout,"Design"],[Code2,"Develop"],[Rocket,"Launch"]].map(([Icon,label]: any) => <div key={label} className="rounded-xl border border-white bg-white/75 p-3"><Icon size={16} className="text-[#A47B4D]" /><p className="mt-2 text-[9px] font-semibold text-[#526174]">{label}</p></div>)}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#E8E1D7] bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2"><span className="rounded-lg bg-[#EAF0EA] p-2 text-[#64816B]"><Smartphone size={17} /></span><div><p className="text-[10px] font-bold text-[#34465A]">Responsive by design</p><p className="mt-0.5 text-[9px] text-[#89929A]">Across screen sizes</p></div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT ANSWER */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <Reveal className="grid gap-8 rounded-[26px] border border-[#E9E4DB] bg-white p-7 shadow-[0_12px_40px_rgba(45,55,65,.04)] md:grid-cols-[.8fr_1.2fr] md:p-10">
          <div><Eyebrow>Your Website Development Partner</Eyebrow><h2 className="font-serif text-[28px] leading-tight tracking-[-.04em] text-[#26364A]">Looking for a Website Development Company in Vasai?</h2><div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F4EEE5] px-3 py-2 text-[10px] font-semibold text-[#96734D]"><MapPin size={13} /> Vasai East · Vasai West</div></div>
          <div className="space-y-4 text-[13px] leading-[1.95] text-[#748092]"><p>Sharp Rays is a website development company offering website design, custom website development, business websites, product catalogue websites and e-commerce solutions for businesses in Vasai. We create responsive, SEO-friendly websites with clear navigation, professional design and practical enquiry features, including WhatsApp integration and RFQ functionality.</p><p>Every website is planned around your business requirements, audience and objectives.</p><div className="rounded-xl bg-[#F3F6F4] p-4"><p className="text-[11px] font-bold text-[#536F64]">What does a website development company do?</p><p className="mt-2 text-[12px] leading-[1.8] text-[#75827E]">It plans, designs and builds websites that help businesses present products, services and information online. This can include frontend and backend development, mobile responsiveness, content management, SEO foundations, integrations and enquiry functionality.</p></div></div>
        </Reveal>
      </section>

      {/* CHALLENGES */}
      <section className="bg-[#F3F2EE] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Reveal><Heading eyebrow="Understanding Your Business Needs" title="Is Your Website Helping Your Business Make the Right Impression?" copy="Your website is often one of the first places potential customers interact with your business. These are common issues that can make it harder for visitors to understand your offerings and contact you." /></Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map(([title, copy, Icon]: any, i) => <Reveal key={title} delay={i * .035}><div className={`h-full rounded-[20px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accents[i % accents.length].card}`}><div className="flex items-center justify-between"><span className={`rounded-xl p-3 ${accents[i % accents.length].icon}`}><Icon size={19} /></span></div><h3 className="mt-5 text-[15px] font-semibold text-[#34465A]">{title}</h3><p className="mt-2 text-[12px] leading-[1.85] text-[#778392]">{copy}</p></div></Reveal>)}
          </div>
          <Reveal className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#26364A] p-6 sm:flex-row sm:items-center sm:p-8"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#D8BD98]">A better website starts with the right structure</p><p className="mt-2 max-w-[650px] text-[13px] leading-6 text-white/75">Your website should reflect what your business offers, how customers search and what action you want visitors to take.</p></div><ButtonLink href="/contact?service=website-development">Discuss Your Requirements</ButtonLink></Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <Reveal><Heading eyebrow="What We Build" title="Website Development Services in Vasai for Different Business Requirements" copy="Every business needs a different kind of website. A manufacturer may require product catalogues and RFQ forms, while a retail business may need clear product information and WhatsApp enquiries." /></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => <Reveal key={s.title} delay={(i % 2) * .06}><article className={`group h-full rounded-[23px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(45,55,65,.08)] sm:p-7 ${accents[i].card}`}>
            <div className="flex flex-wrap items-center justify-between gap-3"><span className={`rounded-xl p-3 ${accents[i].icon}`}><s.icon size={21} /></span><span className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] ${accents[i].tag}`}>{s.tag}</span></div>
            <h3 className="mt-5 text-[18px] font-semibold tracking-[-.02em] text-[#304257]">{s.title}</h3><p className="mt-2 text-[12px] font-semibold text-[#9A754D]">{s.line}</p><p className="mt-3 text-[12px] leading-[1.85] text-[#748092]">{s.copy}</p>
            <div className="mt-5 grid gap-x-4 gap-y-2 sm:grid-cols-2">{s.points.map((p) => <div key={p} className="flex items-start gap-2 text-[11px] leading-5 text-[#667486]"><Check size={13} className="mt-1 shrink-0 text-[#82967B]" />{p}</div>)}</div>
            <div className="mt-5 border-t border-[#D9DEE0]/80 pt-4"><p className="text-[10px] leading-5 text-[#788493]"><strong className="text-[#4F6071]">Suitable for:</strong> {s.suitable}</p></div>
          </article></Reveal>)}
        </div>
        <Reveal className="mt-8"><div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E7E1D7] bg-white p-6 sm:flex-row sm:items-center"><div><p className="text-[14px] font-semibold text-[#34465A]">Not sure which website type is right for you?</p><p className="mt-1 text-[12px] text-[#7B8794]">Tell us what your business needs. We can discuss a suitable development approach.</p></div><ButtonLink href="/services/website-development">Explore Website Development <ArrowRight size={13} /></ButtonLink></div></Reveal>
      </section>

      {/* ALL SHARP RAYS SERVICES */}
      <section className="bg-[#FBFAF7] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Reveal>
            <Heading eyebrow="Explore Sharp Rays Services" title="More Ways We Help Your Business Grow" copy="Website development is one part of your digital presence. Explore the other services Sharp Rays offers to help businesses build visibility, communicate clearly and improve their online experience." />
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agencyServices.map(([title, copy, features, Icon, href]: any, i) => (
              <Reveal key={title} delay={(i % 3) * .04}>
                <Link href={href} className={`group flex h-full flex-col rounded-[20px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(45,55,65,.08)] ${accents[i % accents.length].card}`}>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-xl p-3 ${accents[i % accents.length].icon}`}><Icon size={19} /></span>
                    <ArrowUpRight size={17} className="text-[#A47B4D] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="mt-4 text-[14px] font-semibold text-[#34465A] group-hover:text-[#9A754D]">{title}</h3>
                  <p className="mt-2 text-[11px] leading-[1.8] text-[#748092]">{copy}</p>
                  <p className="mt-3 text-[10px] leading-[1.8] text-[#8A9299]">{features}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[10px] font-bold text-[#9A754D]">Explore Service <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E7E1D7] bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[14px] font-semibold text-[#34465A]">Looking for something else?</p>
              <p className="mt-1 text-[12px] text-[#7B8794]">Explore the complete range of Sharp Rays digital services.</p>
            </div>
            <Link href="/services" className="group inline-flex items-center gap-2 rounded-[14px] border border-[#6285AD]/30 bg-white/80 px-5 py-3 text-[12px] font-medium text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,.07)] transition hover:-translate-y-0.5 hover:shadow-lg">Explore All Services <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#F3F2EE] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Reveal><Heading eyebrow="Websites Built Around Your Industry" title="Website Solutions for Different Businesses in Vasai" copy="A website designed for a manufacturer should not necessarily look or function like one built for a neighbourhood retailer. Different businesses need different layouts, features and customer journeys." /></Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(([title, copy, features, Icon, href]: any, i) => (
              <Reveal key={title} delay={(i % 3) * .04}>
                <Link href={href} aria-label={`Explore ${title} industry solutions`} className={`group block h-full rounded-[19px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(45,55,65,.09)] ${accents[i % accents.length].card}`}>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-xl p-3 ${accents[i % accents.length].icon}`}><Icon size={19} /></span>
                    <ArrowUpRight size={17} className="text-[#A47B4D] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="mt-4 text-[14px] font-semibold text-[#34465A] group-hover:text-[#9A754D]">{title}</h3>
                  <p className="mt-2 text-[11px] leading-[1.8] text-[#748092]">{copy}</p>
                  <div className="mt-4 rounded-xl bg-white/65 p-3">
                    <p className="text-[9px] font-bold uppercase tracking-[.13em] text-[#9A754D]">Recommended features</p>
                    <p className="mt-1.5 text-[10px] leading-[1.8] text-[#748092]">{features}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-[#9A754D]">Explore {title} <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#E7E1D7] bg-white p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[14px] font-semibold text-[#34465A]">Explore all industries we help</p>
              <p className="mt-1 text-[12px] text-[#7B8794]">See how Sharp Rays supports businesses across different industries.</p>
            </div>
            <Link href="/industries" className="group inline-flex items-center gap-2 rounded-[14px] border border-[#6285AD]/30 bg-white/80 px-5 py-3 text-[12px] font-medium text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,.07)] transition hover:-translate-y-0.5 hover:shadow-lg">Explore All Industries <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </Reveal>
        </div>
      </section>

      {/* LOCAL */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <Reveal><Heading eyebrow="Designed Around Vasai's Business Environment" title="Website Development for Businesses Across Vasai East and Vasai West" copy="A manufacturer looking to communicate with distributors and B2B buyers needs a different website experience from a local shop trying to make its products and contact information accessible nearby." /></Reveal>
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          <Reveal><div className="h-full rounded-[24px] border border-[#DCE6E1] bg-[#EEF4F1] p-6 sm:p-8"><div className="flex items-center gap-3"><span className="rounded-xl bg-[#DCEBE3] p-3 text-[#5E806F]"><Factory size={22} /></span><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#6C8B7B]">Vasai East · Industrial areas</p><h3 className="mt-1 text-[18px] font-semibold text-[#34465A]">For Manufacturers Around Waliv and Gauraipada</h3></div></div><p className="mt-4 text-[12px] leading-[1.9] text-[#748092]">Manufacturing and industrial businesses may need websites that communicate product information, technical capabilities and company details to potential buyers.</p><div className="mt-5 space-y-3">{[["Product catalogue pages","Organize products into categories with descriptions, images and specifications."],["RFQ functionality","Allow potential buyers to submit product enquiries and quotation requests."],["Technical information","Present specifications, materials, dimensions, capabilities and brochures."],["Company profile pages","Communicate manufacturing capabilities and business information."],["B2B enquiry journeys","Help distributors, procurement teams and buyers contact the business."]].map(([t,c])=><div key={t} className="rounded-xl border border-white/80 bg-white/70 p-3"><p className="text-[11px] font-semibold text-[#536F64]">{t}</p><p className="mt-1 text-[10px] leading-5 text-[#7B8790]">{c}</p></div>)}</div></div></Reveal>
          <Reveal delay={.07}><div className="h-full rounded-[24px] border border-[#EADFCF] bg-[#F8F2E9] p-6 sm:p-8"><div className="flex items-center gap-3"><span className="rounded-xl bg-[#F0E3D2] p-3 text-[#A47B4D]"><Store size={22} /></span><div><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#A47B4D]">Vasai West · Local businesses</p><h3 className="mt-1 text-[18px] font-semibold text-[#34465A]">For Shops Around Ambadi Road and Manikpur</h3></div></div><p className="mt-4 text-[12px] leading-[1.9] text-[#748092]">Local retailers and service providers need websites that make it simple for customers to discover their offerings and get in touch.</p><div className="mt-5 space-y-3">{[["WhatsApp integration","Give visitors a direct way to enquire about products and services."],["Product and service showcases","Present important offerings through organized sections."],["Mobile-friendly design","Make the website easy to browse across smartphones and desktops."],["Business information","Display accurate contact details, hours, location and relevant details."],["Clear calls to action","Help visitors understand how to contact the business or enquire."]].map(([t,c])=><div key={t} className="rounded-xl border border-white/80 bg-white/70 p-3"><p className="text-[11px] font-semibold text-[#936F48]">{t}</p><p className="mt-1 text-[10px] leading-5 text-[#7B8790]">{c}</p></div>)}</div></div></Reveal>
        </div>
        <Reveal className="mt-6 rounded-2xl border border-[#E7E1D7] bg-white p-6"><p className="text-[14px] font-semibold text-[#34465A]">One location, different website requirements</p><p className="mt-2 max-w-[850px] text-[12px] leading-[1.9] text-[#748092]">A manufacturing business may prioritize product catalogues and quotation requests, while a local shop may prioritize product discovery and WhatsApp enquiries. The right website structure depends on your business model, target audience and the actions you want visitors to take.</p></Reveal>
      </section>

      {/* FOUNDATIONS */}
      <section className="bg-[#F3F2EE] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Reveal><Heading eyebrow="Built for Experience and Discoverability" title="A Good Website Needs More Than Attractive Design" copy="A website should look professional, function properly and provide a clear experience for visitors. We consider design, development and SEO foundations together when planning a website." /></Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {foundations.map(([title, copy, Icon]: any, i) => <Reveal key={title} delay={(i % 4) * .04}><div className={`h-full rounded-[18px] border p-5 ${accents[i % accents.length].card}`}><span className={`inline-flex rounded-xl p-3 ${accents[i % accents.length].icon}`}><Icon size={19} /></span><h3 className="mt-4 text-[13px] font-semibold text-[#34465A]">{title}</h3><p className="mt-2 text-[11px] leading-[1.85] text-[#748092]">{copy}</p></div></Reveal>)}
          </div>
          <p className="mt-7 text-[12px] leading-6 text-[#748092]">A good website combines visual design, technical functionality, usability and relevant content.</p>
          <div className="mt-5"><ButtonLink href="/contact?service=website-development">Discuss Your Website Project</ButtonLink></div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <Reveal><Heading eyebrow="How We Build Websites" title="A Clear Website Development Process From Idea to Launch" copy="A successful website starts with understanding what your business needs. Our process focuses on planning, designing, developing and reviewing the website before it goes live." /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map(([title, copy, Icon]: any, i) => <Reveal key={title} delay={(i % 3) * .05}><div className="relative h-full rounded-[20px] border border-[#E8E3DB] bg-white p-6 shadow-[0_8px_30px_rgba(45,55,65,.035)]"><div className="flex items-center justify-between"><span className="rounded-xl bg-[#F3EEE6] p-3 text-[#A47B4D]"><Icon size={19} /></span></div><h3 className="mt-5 text-[14px] font-semibold text-[#34465A]">{title}</h3><p className="mt-2 text-[11px] leading-[1.9] text-[#748092]">{copy}</p></div></Reveal>)}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#F3F2EE] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal><Eyebrow>Why Sharp Rays</Eyebrow><h2 className="font-serif text-[clamp(27px,3.2vw,39px)] leading-[1.15] tracking-[-.04em] text-[#26364A]">More Than Website Design. A Better Digital Experience for Your Business.</h2><p className="mt-4 text-[13px] leading-[1.9] text-[#748092]">We combine creativity, technology and practical thinking to build websites around business requirements.</p><div className="mt-6"><ButtonLink href="/contact?service=website-development">Let's Discuss Your Website</ButtonLink></div></Reveal>
          <div className="grid gap-3 sm:grid-cols-2">{reasons.map(([title, copy, Icon]: any, i) => <Reveal key={title} delay={(i % 2) * .05}><div className={`h-full rounded-[18px] border p-5 ${accents[i % accents.length].card}`}><span className={`inline-flex rounded-xl p-3 ${accents[i % accents.length].icon}`}><Icon size={18} /></span><h3 className="mt-4 text-[13px] font-semibold text-[#34465A]">{title}</h3><p className="mt-2 text-[11px] leading-[1.85] text-[#748092]">{copy}</p></div></Reveal>)}</div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <Reveal><Heading eyebrow="Our Creative Work" title="Explore Website Designs and Digital Experiences" copy="A website is best understood by seeing how its design, structure and functionality come together. Explore selected website designs, development work and digital experiences created by Sharp Rays." /></Reveal>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[["Business Website Designs","Professional layouts that communicate company information, services and brand identity.",Globe2],["Product Catalogue Experiences","Structured product categories, information and enquiry functionality.",Package],["UI/UX Design Concepts","Interface layouts, visual hierarchy, typography and user experience.",Palette],["Website Development Demonstrations","Responsive layouts, components and functionality working together.",Code2]].map(([title,copy,Icon]:any,i)=><Reveal key={title} delay={i*.04}><div className={`h-full rounded-[20px] border p-5 ${accents[i].card}`}><span className={`inline-flex rounded-xl p-3 ${accents[i].icon}`}><Icon size={20}/></span><h3 className="mt-5 text-[14px] font-semibold text-[#34465A]">{title}</h3><p className="mt-2 text-[11px] leading-[1.85] text-[#748092]">{copy}</p></div></Reveal>)}
        </div>
        <Reveal className="mt-6 rounded-2xl border border-[#E7E1D7] bg-white p-6"><p className="text-[13px] font-semibold text-[#34465A]">What each published project should include</p><div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{["Project name and industry","Website type","Services or functionality delivered","Actual project screenshot","Short project description","Live website link, where available"].map((x)=><div key={x} className="flex items-center gap-2 text-[11px] text-[#748092]"><Check size={13} className="text-[#819477]"/>{x}</div>)}</div><p className="mt-4 border-t border-[#EEEAE4] pt-4 text-[10px] leading-5 text-[#92999F]">Only publish genuine Sharp Rays work. Clearly label conceptual or demonstration projects. Do not present concepts as completed client projects or invent client results.</p></Reveal>
        <div className="mt-6"><ButtonLink href="/portfolio">Explore Our Portfolio</ButtonLink></div>
      </section>

      {/* PRICING */}
      <section className="bg-[#F3F2EE] py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <Reveal><Heading eyebrow="Website Development Pricing" title="Website Development Packages for Different Business Requirements" copy="A basic business website, an industrial product catalogue and a custom e-commerce platform involve different levels of design, functionality and development. Explore our starting packages." /></Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[["Starter","₹14,999","An option for businesses looking to establish a professional online presence.","bg-[#EFF4F5] border-[#DCE7EA]",Globe2],["Growth","₹24,999","An option for businesses requiring a broader website structure and additional functionality.","bg-[#F7F0E8] border-[#EADCCB]",Layers3],["Advanced","₹39,999","An option for businesses with wider website requirements and more extensive functionality.","bg-[#F0F2EC] border-[#DDE5D5]",Rocket]].map(([name,price,copy,style,Icon]:any,i)=><Reveal key={name} delay={i*.06}><div className={`relative h-full rounded-[23px] border p-6 sm:p-7 ${style} ${i===1?"shadow-[0_15px_40px_rgba(45,55,65,.08)] md:-translate-y-2":""}`}><div className="flex items-center justify-between"><span className="rounded-xl bg-white/80 p-3 text-[#8C765D]"><Icon size={20}/></span>{i===1&&<span className="rounded-full bg-[#E9D9C5] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#8A6744]">Popular choice</span>}</div><p className="mt-6 text-[11px] font-semibold uppercase tracking-[.16em] text-[#778392]">{name}</p><p className="mt-2 font-serif text-[36px] tracking-[-.04em] text-[#26364A]">{price}</p><p className="mt-1 text-[10px] font-medium text-[#A47B4D]">Starting package</p><p className="mt-4 min-h-[48px] text-[12px] leading-[1.8] text-[#748092]">{copy}</p><div className="mt-6"><ButtonLink href="/contact?service=website-development">Discuss This Package</ButtonLink></div></div></Reveal>)}
          </div>
          <p className="mt-6 text-[11px] leading-6 text-[#8A9299]">For package inclusions, deliverables and applicable terms, explore our pricing page. Confirm the actual number of pages, features, integrations and support arrangements before selecting a package.</p>
          <div className="mt-4"><Link href="/pricing" className="inline-flex items-center gap-2 text-[11px] font-bold text-[#9A754D] hover:text-[#26364A]">View all pricing <ArrowRight size={13}/></Link></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="website-faq-heading">
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <Eyebrow>Questions Before You Start</Eyebrow>
            <h2 id="website-faq-heading" className="font-serif text-[clamp(27px,3.5vw,40px)] leading-[1.15] tracking-[-.04em] text-[#26364A]">
              Frequently Asked <span className="text-[#B79A72]">Questions.</span>
            </h2>
            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Clear answers about website design, development, pricing and project requirements.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map(([q, a]) => (
              <Reveal key={q}>
                <FaqItem question={q} answer={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FBFAF7] px-5 pb-20 sm:px-8 lg:pb-28">
        <Reveal className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[30px] border border-[#E7DFD3] bg-[radial-gradient(circle_at_88%_15%,rgba(198,167,122,.20),transparent_30%),linear-gradient(135deg,#FFFFFF_0%,#F7F5F0_55%,#EEF3F3_100%)] px-7 py-12 text-center shadow-[0_18px_60px_rgba(45,55,65,.06)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#C6A77A]/25" />
          <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-[#9EB6C2]/25" />
          <div className="relative mx-auto max-w-[760px]">
            <Eyebrow>Let's Build Something Better</Eyebrow>
            <h2 className="font-serif text-[clamp(28px,4vw,43px)] leading-[1.13] tracking-[-.04em] text-[#26364A]">
              Ready to Build a Website That Works for Your Business?
            </h2>
            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Your business deserves a website that represents its value, communicates its offerings and makes it easier for potential customers to get in touch.
            </p>
            <p className="mt-3 text-[12px] leading-[1.9] text-[#7B8794]">
              Whether you need a professional business website, an industrial product catalogue, an RFQ-enabled website or a WhatsApp-ready digital presence, let's discuss your requirements and plan your next digital experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <ButtonLink href="/contact?service=website-development">Get a Website Development Quote</ButtonLink>
              <ButtonLink href="/portfolio" secondary>Explore Our Work</ButtonLink>
            </div>
            <p className="mt-7 text-[10px] tracking-wide text-[#8B9298]">Sharp Rays — We Create the 'Oh, Wow.'!</p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
