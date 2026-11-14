"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  
  Play,
  Clapperboard,
  Camera,
  Video,
  CalendarDays,
  MessageCircle,
  BarChart3,
  Target,
  Users,
  TrendingUp,
  Image as ImageIcon,
  Store,
  Utensils,
  Coffee,
  ShoppingBag,
  Stethoscope,
  Building2,
  Sparkles,
  Heart,
  Eye,
  Smartphone,
  Palette,
  FileText,
  Send,
  Lightbulb,
} from "lucide-react";

const CONTACT_URL = "/contact?source=mira-road-social-media-marketing";

const services = [
  {
    icon: Camera,
    title: "Instagram Management",
    description:
      "Build a consistent Instagram presence with planned content, thoughtful captions, profile improvements and regular publishing.",
  },
  {
    icon: Clapperboard,
    title: "Reels Strategy & Creation",
    description:
      "Develop short-form video concepts, hooks and creative direction that help communicate your products, services and brand personality.",
  },
  {
    icon: Camera,
    title: "Creative & Visual Content",
    description:
      "Create branded posts, carousels, promotional creatives and visual content that gives your social profiles a recognisable identity.",
  },
  {
    icon: CalendarDays,
    title: "Content Planning",
    description:
      "Organise monthly content themes, publishing schedules and campaign ideas around your business priorities.",
  },
  {
    icon: FileText,
    title: "Captions & Copywriting",
    description:
      "Write platform-appropriate captions, calls to action and content copy that communicate clearly with your audience.",
  },
  {
    icon: BarChart3,
    title: "Performance Review",
    description:
      "Review available insights such as reach, engagement, profile activity and content performance to guide future improvements.",
  },
];

const industries = [
  {
    icon: Utensils,
    title: "Restaurants",
    description:
      "Food videos, menu highlights, preparation clips and restaurant experiences.",
  },
  {
    icon: Coffee,
    title: "Cafes & Bakeries",
    description:
      "Coffee moments, ambience, product showcases and behind-the-scenes content.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Ecommerce",
    description:
      "Product demonstrations, new arrivals, offers and shopping-focused content.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Wellness",
    description:
      "Educational posts, service explainers and professional brand communication.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Property walkthroughs, project updates and neighbourhood-focused videos.",
  },
  {
    icon: Users,
    title: "Professional Services",
    description:
      "Expert insights, service explainers and people-led brand content.",
  },
];

const contentFormats = [
  {
    number: "01",
    icon: Play,
    title: "Short-form Reels",
    description:
      "Quick, engaging video concepts built around product moments, useful information, demonstrations and brand stories.",
  },
  {
    number: "02",
    icon: ImageIcon,
    title: "Carousels & Educational Posts",
    description:
      "Multi-slide content that explains services, answers common questions and gives people a reason to save or share.",
  },
  {
    number: "03",
    icon: Camera,
    title: "Behind-the-scenes Content",
    description:
      "Show the people, process, preparation and everyday details that make your business distinctive.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Stories & Community Content",
    description:
      "Use stories, questions, updates and interactive formats to maintain an active conversation with your audience.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand your brand",
    description:
      "We learn about your business, audience, products, services, competitors and social media goals.",
  },
  {
    number: "02",
    title: "Build the content direction",
    description:
      "We define content pillars, creative themes, platform priorities and the type of communication your brand needs.",
  },
  {
    number: "03",
    title: "Plan & create",
    description:
      "We prepare content concepts, captions, creative assets and Reels ideas according to the agreed plan.",
  },
  {
    number: "04",
    title: "Publish & engage",
    description:
      "Content is organised for publishing, with agreed community and engagement activities.",
  },
  {
    number: "05",
    title: "Review & refine",
    description:
      "We assess available performance insights and use them to improve future content decisions.",
  },
];

const faqs = [
  {
    question: "Do you provide social media marketing in Mira Road?",
    answer:
      "Yes. Sharp Rays provides social media marketing services for businesses targeting customers in Mira Road. The scope can include Instagram management, content planning, Reels, creative design, captions and performance reviews.",
  },
  {
    question: "Do you create Instagram Reels for restaurants in Mira Road?",
    answer:
      "Yes. Restaurant-focused content can include food preparation videos, menu highlights, dish showcases, ambience, staff moments and promotional Reels. The creative direction depends on the restaurant and its audience.",
  },
  {
    question: "Can you manage my business Instagram account?",
    answer:
      "Instagram management can include content planning, creative development, captions, publishing coordination and performance reviews. Account access and the exact responsibilities are agreed before work begins.",
  },
  {
    question: "How much does social media marketing cost?",
    answer:
      "Sharp Rays social media marketing plans start from ₹14,999 per month. The final scope depends on the number of platforms, content formats, creative requirements and publishing frequency.",
  },
  {
    question: "Do you create Reels and static posts?",
    answer:
      "Yes. A content plan can combine Reels, static posts, carousels and stories. The balance depends on your business goals, audience and the type of content available.",
  },
  {
    question: "Can social media marketing help a new business?",
    answer:
      "Social media can help a new business introduce its products or services, communicate its identity and build an initial audience. Results depend on the content, audience, consistency, offer and market.",
  },
  {
    question: "Do you provide social media content for cafes?",
    answer:
      "Yes. Cafe content can include coffee preparation, signature drinks, food showcases, ambience, customer experiences and seasonal promotions.",
  },
  {
    question: "Which platforms do you work with?",
    answer:
      "The social media strategy can focus on platforms suited to your audience and business goals. Instagram is an important option for visual storytelling, Reels and product-led content.",
  },
  {
    question: "How often should my business post on Instagram?",
    answer:
      "The right publishing frequency depends on your content resources, audience and goals. A realistic, consistent schedule is more useful than committing to a volume of content that cannot be maintained.",
  },
  {
    question: "Do you write captions and hashtags?",
    answer:
      "Content support can include captions, calls to action, relevant hashtags and creative copy based on the agreed monthly content plan.",
  },
  {
    question: "Can you promote my products through Reels?",
    answer:
      "Yes. Product-focused Reels can demonstrate features, show products in use, highlight details and communicate offers. The format should suit the product and the audience you want to reach.",
  },
  {
    question: "How do I get started with Sharp Rays?",
    answer:
      "Contact Sharp Rays with your business details, social media profiles and goals. We can discuss your current content, requirements and a suitable social media marketing plan.",
  },
];

const socialPlans = [
  {
    name: "Starter",
    price: "₹12,999",
    description: "For businesses building a consistent social presence.",
    features: [
      "1 social media platform",
      "Up to 12 content pieces / month",
      "Includes 2 Reels / short videos",
    ],
  },
  {
    name: "Growth",
    price: "₹21,999",
    description: "For growing brands seeking broader social media management.",
    features: [
      "Up to 2 social media platforms",
      "Up to 20 content pieces / month",
      "Includes 4–6 Reels / short videos",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "₹34,999",
    description: "For brands requiring a more comprehensive social presence.",
    features: [
      "Up to 3 social media platforms",
      "Up to 30 content pieces / month",
      "Includes 8–10 Reels / short videos",
    ],
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
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
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-9 bg-[#C6A77A]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B765A]">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto mb-14 max-w-3xl text-center"
          : "mb-14 max-w-3xl"
      }
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#667085] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default function MiraRoadSocialMediaMarketingPageClient() {
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
    <main className="overflow-hidden bg-[#FCFAF7] text-[#122847]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[440px] w-[440px] rounded-full bg-[#C6A77A]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#0B2A52]/[0.04] blur-3xl" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <Reveal>
            <Eyebrow>SOCIAL MEDIA · MIRA ROAD</Eyebrow>

            <h1 className="max-w-[700px] font-[var(--font-new-york)] text-[clamp(2.7rem,5.5vw,5rem)] leading-[1.08] tracking-[-0.045em] text-[#122847]">
              Social Media Marketing
              <span className="block italic text-[#A78354]">
                for Mira Road Businesses
              </span>
            </h1>

            <p className="mt-7 max-w-[570px] text-[15px] leading-8 text-[#718096] sm:text-base">
              Give people a reason to stop scrolling and discover your brand.
              Sharp Rays plans social media content, creates Reels and develops
              creative campaigns for Mira Road businesses — including food and
              cafe content for restaurants around Mira Road East.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
             <Link
  href={CONTACT_URL}
  title="Discuss Social Media Marketing with Sharp Rays in Mira Road"
  aria-label="Discuss social media marketing services with Sharp Rays in Mira Road"
  className="group inline-flex items-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#0B2A52]"
>
                Discuss Your Social Media
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/services/social-media-marketing"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D7] px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#C6A77A]"
              >
                Explore Our Services <ArrowRight size={15} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#718096]">
              {["Instagram Strategy", "Reels & Creatives", "Content Planning"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-[#A78354]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[510px]">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#E8E1D7] bg-[#F5F1E9] p-5 shadow-[0_24px_70px_rgba(18,40,71,0.08)] sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B765A]">
                      Content in motion
                    </p>
                    <p className="mt-1 text-lg font-medium text-[#122847]">
                      Make every post count.
                    </p>
                  </div>
                  <Camera size={22} className="text-[#A78354]" />
                </div>

                <div className="mt-7 grid grid-cols-[1.1fr_.9fr] gap-3">
                  <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#D6C2A7] via-[#E9DCCB] to-[#F4EEE5] p-5">
                    <div className="absolute -right-12 top-8 h-40 w-40 rounded-full border border-white/50" />
                    <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-[#A78354]/15 blur-2xl" />

                    <div className="relative flex items-center justify-between">
                      <span className="rounded-full bg-white/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#765D42]">
                        Reel concept
                      </span>
                      <Play size={17} className="text-[#765D42]" />
                    </div>

                    <div className="relative">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#765D42]">
                        Food · Stories · People
                      </p>
                      <p className="mt-2 font-[var(--font-new-york)] text-3xl leading-tight text-[#122847]">
                        A little
                        <span className="block italic">taste of your brand.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-[#122847] p-4 text-white">
                      <Clapperboard
                        size={20}
                        className="text-[#C6A77A]"
                      />
                      <div>
                        <p className="text-[10px] text-white/50">01</p>
                        <p className="mt-1 text-sm font-medium">Reels</p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-white p-4">
                      <Palette size={20} className="text-[#A78354]" />
                      <div>
                        <p className="text-[10px] text-[#9AA3AF]">02</p>
                        <p className="mt-1 text-sm font-medium text-[#122847]">
                          Creatives
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-[#E8DED0] p-4">
                      <CalendarDays size={20} className="text-[#8B765A]" />
                      <div>
                        <p className="text-[10px] text-[#8B765A]">03</p>
                        <p className="mt-1 text-sm font-medium text-[#122847]">
                          Planning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white bg-white/75 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#9AA3AF]">
                        Content direction
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#122847]">
                        Discover · Connect · Engage
                      </p>
                    </div>
                    <TrendingUp size={20} className="text-[#A78354]" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#E8E1D7] bg-white px-5 py-4 shadow-lg sm:block">
                <p className="text-[10px] uppercase tracking-widest text-[#9AA3AF]">
                  The intention
                </p>
                <p className="mt-1 text-sm font-semibold text-[#122847]">
                  Be worth remembering.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="rounded-3xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 sm:p-10">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A88659]">
                <Sparkles size={15} /> Social media marketing in Mira Road
              </div>

              <p className="text-lg leading-8 text-[#344054] sm:text-xl sm:leading-9">
                Sharp Rays provides social media marketing for businesses in
                Mira Road, including Instagram strategy, Reels creation,
                creative design, content calendars, captions and account
                management. We develop content around your business, audience
                and local market — from restaurant and cafe videos to service
                explainers and product-focused posts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — WHY SOCIAL MEDIA */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 / The opportunity"
            title={
              <>
                Your audience is scrolling.
                <span className="block font-serif italic text-[#A88659]">
                  Give them something meaningful to notice.
                </span>
              </>
            }
            description="A social media presence is more than a collection of posts. It is a place to introduce your business, show what makes it different and build familiarity with the people you want to reach."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Build brand visibility",
                text: "Help more relevant people discover your products, services and business personality through consistent content.",
              },
              {
                icon: Heart,
                title: "Create audience connection",
                text: "Use useful, relatable and engaging content to give people reasons to interact with your brand.",
              },
              {
                icon: MessageCircle,
                title: "Encourage enquiries",
                text: "Make it easier for interested people to understand your offer and take the next step towards contacting you.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 / What we do"
            title={
              <>
                A social presence with
                <span className="block font-serif italic text-[#A88659]">
                  a clear creative direction.
                </span>
              </>
            }
            description="Bring strategy, content and publishing together with social media support planned around your business requirements."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <div className="group h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A] transition group-hover:bg-[#C6A77A] group-hover:text-[#122847]">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-xl font-medium text-[#122847]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services/social-media-marketing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
            >
              Explore our complete social media service
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 — FOOD & CAFE REELS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>03 / Food & cafe content · Mira Road East</Eyebrow>

            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
              Make people feel the experience
              <span className="block font-serif italic text-[#A88659]">
                before they walk in.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              For restaurants and cafes around Mira Road East, social media
              content can bring the menu, atmosphere and everyday moments to
              life. Show the details that make someone curious enough to visit
              or enquire.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Close-up food and drink showcases",
                "Kitchen preparation and behind-the-scenes clips",
                "Cafe ambience and customer experience",
                "New menu items and seasonal specials",
                "Restaurant stories and promotional Reels",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#122847] text-white">
                    <Check size={12} />
                  </span>
                  <p className="text-sm leading-6 text-[#475467]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-white p-5 shadow-[0_24px_60px_rgba(18,40,71,0.06)] sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                    Reel content direction
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-[#122847]">
                    A story in every detail.
                  </h3>
                </div>
                <Video size={22} className="text-[#A88659]" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#D5B99B] to-[#F0E3D2] p-4">
                  <span className="relative text-[9px] font-semibold uppercase tracking-widest text-[#765D42]">
                    The preparation
                  </span>
                  <div className="relative">
                    <Utensils size={25} className="text-[#765D42]" />
                    <p className="mt-3 text-sm font-medium text-[#122847]">
                      Behind the scenes
                    </p>
                  </div>
                </div>

                <div className="relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#D7DFD0] to-[#EEF0E7] p-4">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#58705A]">
                    The experience
                  </span>
                  <div>
                    <Coffee size={25} className="text-[#58705A]" />
                    <p className="mt-3 text-sm font-medium text-[#122847]">
                      Cafe moments
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-[#122847] p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#C6A77A]">
                    <Play size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">A simple Reel structure</p>
                    <p className="mt-1 text-xs text-white/55">
                      Hook · Visual story · Detail · Call to action
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-[#8792A1]">
                Creative examples are illustrative content directions, not
                representations of completed client campaigns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — CONTENT FORMATS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="04 / Content formats"
            title={
              <>
                Different formats.
                <span className="block font-serif italic text-[#A88659]">
                  One recognisable brand voice.
                </span>
              </>
            }
            description="A balanced content plan gives your business different ways to communicate, from short videos to useful posts and everyday updates."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {contentFormats.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.05}>
                  <div className="flex h-full gap-5 rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 sm:p-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-[#A88659]">
                        {item.number}
                      </p>
                      <h3 className="mt-2 text-xl font-medium text-[#122847]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#667085]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 — INDUSTRIES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="05 / Industries we work with"
            title={
              <>
                Content shaped around
                <span className="block font-serif italic text-[#A88659]">
                  what your business does.
                </span>
              </>
            }
            description="A restaurant, clinic and retail store do not need the same content strategy. The subject, format and tone should reflect the business and the people it wants to reach."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 transition hover:border-[#C6A77A]">
                    <Icon size={23} className="text-[#A88659]" />
                    <h3 className="mt-5 text-lg font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08 — CONTENT STRATEGY */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>06 / Strategy before posting</Eyebrow>

            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
              Every post should have
              <span className="block font-serif italic text-[#A88659]">
                a reason to exist.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#667085]">
              Posting regularly is only one part of social media marketing.
              Your content should work together to introduce the brand, explain
              what you offer, build familiarity and make enquiries easier.
            </p>

            <Link
              href="/services/social-media-marketing"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A88659]"
            >
              Explore Social Media Services <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[2rem] border border-[#E8E2D8] bg-[#FCFAF7] p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A88659]">
                Content pillars
              </p>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "Brand introduction",
                    text: "Who you are, what you offer and what makes your business different.",
                  },
                  {
                    title: "Product & service education",
                    text: "Useful information that helps customers understand your offering.",
                  },
                  {
                    title: "People & process",
                    text: "Behind-the-scenes moments that give your business a human side.",
                  },
                  {
                    title: "Offers & business updates",
                    text: "Relevant promotions, launches, announcements and seasonal content.",
                  },
                  {
                    title: "Community & interaction",
                    text: "Questions, conversations and content that invites people to participate.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 border-b border-[#E8E2D8] pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-serif text-2xl italic text-[#B79A72]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-medium text-[#122847]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#667085]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — OUR PROCESS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="07 / How we work"
            title={
              <>
                From content ideas
                <span className="block font-serif italic text-[#A88659]">
                  to a consistent presence.
                </span>
              </>
            }
            description="A structured process helps keep your social media activity connected to your brand, your audience and your business priorities."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-6">
                  <p className="font-serif text-4xl italic text-[#B79A72]">
                    {step.number}
                  </p>
                  <h3 className="mt-6 text-lg font-medium text-[#122847]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — PERFORMANCE */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="08 / Measuring progress"
            title={
              <>
                Look beyond likes.
                <span className="block font-serif italic text-[#A88659]">
                  Understand what your content does.
                </span>
              </>
            }
            description="Social media performance should be reviewed in the context of your goals. Different content formats can contribute to different stages of the customer journey."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Eye,
                title: "Reach",
                text: "Understand how many accounts your content reaches.",
              },
              {
                icon: Heart,
                title: "Engagement",
                text: "Review interactions such as comments, shares and saves.",
              },
              {
                icon: Users,
                title: "Profile activity",
                text: "Observe profile visits and audience actions.",
              },
              {
                icon: MessageCircle,
                title: "Enquiries",
                text: "Review relevant messages, calls and enquiry activity.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-6">
                    <Icon size={22} className="text-[#A88659]" />
                    <h3 className="mt-5 text-lg font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 — WHY SHARP RAYS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="09 / Why Sharp Rays"
            title={
              <>
                Creative thinking.
                <span className="block font-serif italic text-[#A88659]">
                  Clear business direction.
                </span>
              </>
            }
            description="Social media should look and sound like your business. We bring content planning and creative execution together with an understanding of what your brand needs to communicate."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Ideas with purpose",
                text: "Content concepts begin with your brand, audience and business objectives rather than random posting.",
              },
              {
                icon: Palette,
                title: "A consistent visual identity",
                text: "Creative direction helps your posts and Reels feel connected to your brand identity.",
              },
              {
                icon: Target,
                title: "Business-aware strategy",
                text: "Content priorities are planned around visibility, audience connection and relevant enquiries.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

    
{/* 12 — SOCIAL MEDIA PRICING */}
<section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
  <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#C6A77A]/[0.07] blur-3xl" />

  <div className="relative mx-auto max-w-[1200px]">

    {/* Separate pricing introduction */}
    <Reveal className="mb-14 overflow-hidden rounded-[2rem] border border-[#E8E2D8] bg-[#FCFAF7] px-7 py-12 text-center sm:px-12 sm:py-16">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A88659]">
        SOCIAL MEDIA MARKETING · PRICING
      </p>

      <h2 className="mx-auto mt-5 max-w-3xl font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.04em] text-[#122847] sm:text-4xl lg:text-5xl">
        Thoughtful content.
        <span className="block italic text-[#A88659]">
          Plans built around your brand.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#718096] sm:text-base">
        Choose a social media marketing plan based on your platform
        requirements, content volume and creative needs.
      </p>
    </Reveal>

    {/* Pricing cards */}
    <div className="grid items-stretch gap-5 md:grid-cols-3">
      {socialPlans.map((plan, index) => (
        <Reveal key={plan.name} delay={index * 0.07}>
          <div
            className={`relative flex h-full flex-col rounded-[1.8rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
              plan.featured
                ? "border-[#122847] bg-[#122847] text-white shadow-[0_24px_60px_rgba(18,40,71,0.16)]"
                : "border-[#E8E2D8] bg-[#FCFAF7] text-[#122847]"
            }`}
          >
            {plan.featured && (
              <span className="absolute right-6 top-6 rounded-full bg-[#C6A77A] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#122847]">
                Most Popular
              </span>
            )}

            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  plan.featured ? "text-[#C6A77A]" : "text-[#A88659]"
                }`}
              >
                {plan.name} Plan
              </p>

              <h3 className="mt-6 text-4xl font-medium tracking-[-0.04em]">
                {plan.price}
              </h3>

              <p
                className={`mt-2 text-xs ${
                  plan.featured ? "text-white/50" : "text-[#98A2B3]"
                }`}
              >
                Per month
              </p>

              <p
                className={`mt-6 min-h-[52px] text-sm leading-7 ${
                  plan.featured ? "text-white/65" : "text-[#667085]"
                }`}
              >
                {plan.description}
              </p>
            </div>

            <div
              className={`my-7 border-t ${
                plan.featured ? "border-white/15" : "border-[#E8E2D8]"
              }`}
            />

            <p
              className={`mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                plan.featured ? "text-white/45" : "text-[#98A2B3]"
              }`}
            >
              Package highlights
            </p>

            <ul className="mb-9 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6"
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      plan.featured
                        ? "bg-[#C6A77A]/15 text-[#C6A77A]"
                        : "bg-[#F2F0EA] text-[#A88659]"
                    }`}
                  >
                    <Check size={12} />
                  </span>

                  <span
                    className={
                      plan.featured ? "text-white/80" : "text-[#475467]"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/pricing"
              title={`View ${plan.name} Social Media Marketing Package on Sharp Rays Pricing Page`}
              className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition ${
                plan.featured
                  ? "bg-[#C6A77A] text-[#122847] hover:bg-white"
                  : "bg-[#122847] text-white hover:bg-[#1D3B61]"
              }`}
            >
              View Package Details
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal>
      <p className="mx-auto mt-9 max-w-2xl text-center text-xs leading-7 text-[#718092]">
        Shoots, paid advertising and influencer fees are quoted separately.
        Explore the complete package inclusions and pricing details on our{" "}
        <Link
          href="/pricing"
          className="font-semibold text-[#122847] underline decoration-[#C6A77A] underline-offset-4 transition hover:text-[#A88659]"
        >
          pricing page
        </Link>.
      </p>
    </Reveal>
  </div>
</section>


      {/* 13 — FAQ */}
      <section
        className="bg-[#FAF8F5] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="mira-road-social-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              Questions Before You Start
            </p>

            <h2
              id="mira-road-social-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
              Answers about Instagram marketing, Reels, creative content and
              social media management in Mira Road.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-white font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-[var(--font-new-york)] text-[19px] leading-[1.4] text-[#122847] sm:text-[21px]">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.95] text-[#708092] sm:text-[13px]">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Let&apos;s make your brand more visible
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Your next great post
            <span className="block font-serif italic text-[#C6A77A]">
              starts with an idea.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Tell us about your business, your audience and the kind of content
            you want to create. Let&apos;s plan a social media presence that feels
            like your brand.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
  href={CONTACT_URL}
  title="Contact Sharp Rays for Social Media Marketing in Mira Road"
  aria-label="Contact Sharp Rays about social media marketing in Mira Road"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
              Talk to Sharp Rays <ArrowUpRight size={17} />
            </Link>

            <Link
  href="/locations/mira-road"
  title="Explore Digital Marketing Services in Mira Road"
  aria-label="Explore all digital marketing services available in Mira Road"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
>
              Explore Mira Road Services <ArrowRight size={16} />
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/35">
            Sharp Rays · We Create the “Oh, Wow.”!
          </p>
        </Reveal>
      </section>
    </main>
  );
}