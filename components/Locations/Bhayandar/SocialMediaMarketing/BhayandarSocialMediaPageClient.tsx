
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  Camera,
  CalendarDays,
  MessageCircle,
  BarChart3,
  Target,
  Users,
  Store,
  Hotel,
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  Heart,
  Play,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

/* =========================================================
   ANIMATION
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
    <div className={center ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"}>
      <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
        {eyebrow}
      </p>

      <h2 className="font-[var(--font-new-york)] text-[30px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[39px] lg:text-[46px]">
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
   PAGE DATA
========================================================= */

const challenges = [
  {
    number: "01",
    title: "Inconsistent posting",
    description:
      "Irregular content can make it difficult for customers to understand what your business offers and what makes your brand relevant.",
    icon: CalendarDays,
  },
  {
    number: "02",
    title: "Content without direction",
    description:
      "Posting without a content strategy can lead to disconnected messages, repetitive creatives and unclear communication.",
    icon: Target,
  },
  {
    number: "03",
    title: "Limited short-form video",
    description:
      "Reels and short videos can help present products, services, experiences and business information in engaging formats.",
    icon: Play,
  },
  {
    number: "04",
    title: "Unclear enquiry journey",
    description:
      "Social content should make it easy for interested visitors to understand your offering and find the next step to contact you.",
    icon: MessageCircle,
  },
];

const services: {
  number: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  accent: string;
  tint: string;
}[] = [
  {
    number: "01",
    title: "Social Media Strategy",
    description:
      "A practical content direction based on your business, audience, platforms and communication objectives.",
    points: [
      "Audience and platform planning",
      "Content pillars and themes",
      "Monthly content direction",
    ],
    icon: Target,
    accent: "#668AA5",
    tint: "#EEF3F8",
  },
  {
    number: "02",
    title: "Social Media Management",
    description:
      "Consistent social media coordination to help maintain your brand presence across selected platforms.",
    points: [
      "Content calendar planning",
      "Creative and caption coordination",
      "Publishing support",
    ],
    icon: CalendarDays,
    accent: "#8E79AE",
    tint: "#F2EFF8",
  },
  {
    number: "03",
    title: "Instagram Reels & Short Videos",
    description:
      "Short-form video content to communicate your products, services, business personality and customer experience.",
    points: [
      "Reels concepts and planning",
      "Short-form video editing",
      "Platform-ready creative formats",
    ],
    icon: Clapperboard,
    accent: "#B87987",
    tint: "#F8EFF1",
  },
  {
    number: "04",
    title: "Social Media Creative Design",
    description:
      "Branded visual content that presents your offers, services, updates and business information consistently.",
    points: [
      "Post and carousel creatives",
      "Campaign visuals",
      "Brand-consistent layouts",
    ],
    icon: Camera,
    accent: "#B18B5F",
    tint: "#F7F1E8",
  },
  {
    number: "05",
    title: "Platform-Specific Content",
    description:
      "Content adapted to the communication style and audience expectations of relevant social media platforms.",
    points: [
      "Instagram content",
      "Facebook communication",
      "LinkedIn business content",
    ],
    icon: Users,
    accent: "#609286",
    tint: "#EDF5F1",
  },
  {
    number: "06",
    title: "Performance Review",
    description:
      "Review available platform insights to understand content performance and guide future improvements.",
    points: [
      "Content performance review",
      "Audience engagement insights",
      "Monthly improvement direction",
    ],
    icon: BarChart3,
    accent: "#7887A9",
    tint: "#F0F2F8",
  },
];

const localBusinessTypes = [
  {
    number: "01",
    title: "Uttan Road Resorts",
    category: "Hospitality & Tourism",
    description:
      "Reels and visual storytelling can showcase resort spaces, facilities, food, guest experiences and relevant seasonal offers. Content should use approved property visuals and accurate information.",
    icon: Hotel,
  },
  {
    number: "02",
    title: "Bhayandar West Shops",
    category: "Retail & Local Businesses",
    description:
      "Social content can introduce products, highlight new arrivals, communicate offers, share useful updates and make it easier for local customers to contact the business.",
    icon: Store,
  },
  {
    number: "03",
    title: "Restaurants & Food Businesses",
    category: "Food & Hospitality",
    description:
      "Product photography, short videos, menu highlights and behind-the-scenes content can help communicate the food, atmosphere and experience a business offers.",
    icon: UtensilsCrossed,
  },
  {
    number: "04",
    title: "Professional & Growing Businesses",
    category: "Services & B2B",
    description:
      "Educational posts, service explainers, team introductions and business updates can help communicate expertise and build a recognisable online presence.",
    icon: Building2,
  },
];

const platforms = [
  {
    name: "Instagram",
    description:
      "Visual storytelling, Reels, carousels, product discovery and brand communication.",
    icon: Camera,
    color: "#A96F8D",
    bg: "#F7EEF2",
  },
  {
    name: "Facebook",
    description:
      "Business updates, local communication, community engagement and promotional content.",
    icon: Users,
    color: "#6688B5",
    bg: "#EEF3FA",
  },
  {
    name: "LinkedIn",
    description:
      "Professional updates, B2B communication, industry insights and business credibility.",
    icon: Building2,
    color: "#668AA5",
    bg: "#EEF3F8",
  },
];
const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, audience, current social presence and marketing objectives.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define relevant platforms, content pillars, creative direction and a manageable publishing calendar.",
  },
  {
    number: "03",
    title: "Create & Publish",
    description:
      "We prepare the agreed content, coordinate creatives and publish according to the content plan.",
  },
  {
    number: "04",
    title: "Review & Improve",
    description:
      "We review available performance insights and use them to guide future content decisions.",
  },
];

const faqs = [
  {
    question:
      "What social media marketing services does Sharp Rays provide in Bhayandar?",
    answer:
      "Sharp Rays provides social media strategy, social media management, Instagram Reels, short-form video content, creative design, platform-specific content planning and performance reviews. The scope depends on your business requirements and selected package.",
  },
  {
    question:
      "Can you create Instagram Reels for resorts around Uttan Road?",
    answer:
      "Yes. Reels can be planned around resort spaces, facilities, food, experiences and relevant offers. Content depends on the available and approved property visuals, project brief and selected scope.",
  },
  {
    question:
      "Do you provide social media marketing for shops in Bhayandar West?",
    answer:
      "Yes. Social media content for local shops can include product highlights, new arrivals, offers, business updates, promotional creatives and short videos based on the shop's audience and objectives.",
  },
  {
    question:
      "Which social media platforms should my business use?",
    answer:
      "The right platforms depend on your audience, industry and content capabilities. Instagram can support visual discovery, Facebook can help with local communication and LinkedIn can be useful for professional and B2B audiences.",
  },
  {
    question: "Do you create Instagram Reels and short videos?",
    answer:
      "Yes. Reels and short-form videos can be part of a social media content plan. The creative direction, number of videos and production requirements depend on the selected package and project scope.",
  },
  {
    question: "How much does social media marketing cost?",
    answer:
      "Social media marketing packages are available in three categories. The suitable option depends on the number of platforms, content volume, Reels and management requirements. Visit the pricing page for the current package details.",
  },
  {
    question: "How often should my business post on social media?",
    answer:
      "Posting frequency depends on your audience, platform, content resources and objectives. A manageable, consistent schedule with useful content is generally more sustainable than publishing frequently without a clear direction.",
  },
  {
    question: "Can social media marketing help generate enquiries?",
    answer:
      "Social media can support enquiries by presenting your services clearly, building audience interest and providing useful contact options. Results depend on the offer, audience, content quality and conversion experience.",
  },
  {
    question: "Do you guarantee followers or sales?",
    answer:
      "No. Follower growth, engagement and sales depend on several factors, including audience demand, content, competition and platform distribution. Our approach focuses on relevant communication and measurable improvement rather than guaranteed numbers.",
  },
  {
    question: "How can I get started with Sharp Rays?",
    answer:
      "Contact Sharp Rays with your business details, target audience and social media goals. We can discuss your current presence and the most suitable content and management approach.",
  },
];

/* =========================================================
   SOCIAL MEDIA PRICING PLANS
========================================================= */

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

/* =========================================================
   FAQ STRUCTURED DATA
========================================================= */

function BhayandarSocialStructuredData() {
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

export default function BhayandarSocialMediaPageClient() {
  return (
    <>
      <BhayandarSocialStructuredData />

      {/* =================================================
          01. HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-[#FCFAF7] px-5 pb-16 pt-20 sm:px-8 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[440px] w-[440px] rounded-full border border-[#E8DED1]/70" />
        <div className="pointer-events-none absolute -right-16 top-4 h-[320px] w-[320px] rounded-full border border-[#E8DED1]/60" />

        <div className="relative mx-auto grid max-w-[1220px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <Reveal>
            <div className="max-w-[680px]">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                  Social Media Marketing · Bhayandar
                </span>
              </div>

              <h1 className="font-[var(--font-new-york)] text-[40px] leading-[1.12] tracking-[-0.045em] text-[#122847] sm:text-[54px] lg:text-[63px]">
                Social Media Marketing for{" "}
                <span className="text-[#B79A72]">Bhayandar</span>{" "}
                Businesses.
              </h1>

              <p className="mt-6 max-w-[590px] text-[13px] leading-[2] text-[#718092] sm:text-[14px]">
                Build a more consistent social presence with strategic
                content, creative design and Reels. Sharp Rays helps
                Bhayandar businesses plan social media communication,
                including visual content for Uttan Road resorts and
                Bhayandar West shops.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  title="Discuss social media marketing for your Bhayandar business"
                  className="inline-flex items-center gap-3 rounded-full bg-[#122847] px-6 py-3.5 text-[11px] font-medium text-white transition-all hover:bg-[#23446D]"
                >
                  Discuss Your Social Strategy
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/services/social-media-marketing"
                  title="Explore Sharp Rays social media marketing services"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DED4C7] bg-white px-6 py-3.5 text-[11px] font-medium text-[#122847] transition-colors hover:border-[#B79A72]"
                >
                  Explore Our Services
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] text-[#718092]">
                {[
                  "Content Strategy",
                  "Instagram Reels",
                  "Social Media Management",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check size={13} className="text-[#A38561]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="rounded-[22px] border border-[#E7DDD0] bg-white p-5 shadow-[0_25px_70px_-45px_rgba(18,40,71,.28)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[#EEE8DF] pb-5">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.17em] text-[#A38561]">
                      Social Content Studio
                    </p>
                    <h2 className="mt-2 font-[var(--font-new-york)] text-[23px] text-[#122847]">
                      Ideas into content.
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7EEF2] text-[#A96F8D]">
                   <Camera size={20} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-[1.1fr_.9fr] gap-3">
                  <div className="relative flex min-h-[210px] flex-col justify-between overflow-hidden rounded-xl bg-[#EDE4D9] p-4">
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#B79A72]/40" />
                    <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-[#B79A72]/40" />

                    <span className="relative text-[8px] uppercase tracking-[0.17em] text-[#92734E]">
                      Reel Concept
                    </span>

                    <div className="relative">
                      <p className="font-[var(--font-new-york)] text-[24px] leading-tight text-[#122847]">
                        Show the experience.
                      </p>
                      <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#122847] text-white">
                        <Play size={15} fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex min-h-[98px] flex-col justify-between rounded-xl bg-[#F5EEF1] p-4">
                     <Camera size={19} className="text-[#A96F8D]" />
                      <p className="text-[10px] font-medium text-[#122847]">
                        Reels & Stories
                      </p>
                    </div>

                    <div className="flex min-h-[98px] flex-col justify-between rounded-xl bg-[#EEF3F8] p-4">
                      <Camera size={19} className="text-[#668AA5]" />
                      <p className="text-[10px] font-medium text-[#122847]">
                        Creative Design
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#F5F1EA] p-3">
                    <CalendarDays size={16} className="text-[#A38561]" />
                    <p className="mt-3 text-[9px] text-[#718092]">
                      Plan
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F5F1EA] p-3">
                    <Clapperboard size={16} className="text-[#A38561]" />
                    <p className="mt-3 text-[9px] text-[#718092]">
                      Create
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F5F1EA] p-3">
                    <BarChart3 size={16} className="text-[#A38561]" />
                    <p className="mt-3 text-[9px] text-[#718092]">
                      Review
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 -z-10 h-32 w-32 rounded-full bg-[#F0E2E7] blur-2xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          02. DIRECT ANSWER
      ================================================= */}

      <section className="bg-white px-5 py-14 sm:px-8 lg:py-16">
        <Reveal className="mx-auto max-w-[1050px]">
          <div className="grid gap-6 border-y border-[#E8DED1] py-8 md:grid-cols-[220px_1fr] md:gap-12">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                A Clear Answer
              </p>

              <h2 className="mt-3 font-[var(--font-new-york)] text-[22px] leading-tight text-[#122847]">
                What does social media marketing include?
              </h2>
            </div>

            <p className="text-[13px] leading-[2] text-[#718092]">
              Social media marketing includes planning and creating content
              for platforms such as Instagram, Facebook and LinkedIn to
              communicate with relevant audiences and support business
              objectives. It can involve content strategy, post and
              carousel design, Reels, publishing coordination, community
              communication and performance reviews. Sharp Rays plans the
              approach around your business, audience and selected
              platforms.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =================================================
          03. CHALLENGES
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Understanding Your Social Presence"
              title="What Can a Clearer Social Strategy"
              highlight="Help Your Business Improve?"
              description="A useful social media presence needs more than occasional posts. Your content should communicate what you offer, reflect your brand and give your audience a reason to engage."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {challenges.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 0.06}>
                  <article className="h-full rounded-[15px] border border-[#E9E0D5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-32px_rgba(18,40,71,.3)]">
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-new-york)] text-[26px] text-[#D2C1AA]">
                        {item.number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                        <Icon size={18} />
                      </span>
                    </div>

                    <h3 className="mt-8 font-[var(--font-new-york)] text-[19px] leading-snug text-[#122847]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
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
          04. OUR SERVICES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Our Social Media Services"
              title="A More Complete"
              highlight="Social Media Approach."
              description="From content planning to Reels and performance reviews, bring the important parts of your social media communication into one coordinated strategy."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} delay={index * 0.05}>
                  <article
                    className="group flex h-full flex-col rounded-[16px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-32px_rgba(18,40,71,.22)] sm:p-7"
                    style={{
                      borderColor: `${service.accent}35`,
                      backgroundColor: service.tint,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-[var(--font-new-york)] text-[27px]"
                        style={{ color: `${service.accent}90` }}
                      >
                        {service.number}
                      </span>

                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                        style={{ color: service.accent }}
                      >
                        <Icon size={19} />
                      </span>
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-[21px] text-[#122847]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3 border-t border-white/80 pt-5">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-[10px] leading-relaxed text-[#647487]"
                        >
                          <Check
                            size={13}
                            className="mt-0.5 shrink-0"
                            style={{ color: service.accent }}
                          />
                          {point}
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
          05. LOCAL BUSINESS CONTENT
      ================================================= */}

      <section className="bg-[#F5F1EA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                Social Media Around Bhayandar
              </p>

              <h2 className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]">
                Content That Reflects{" "}
                <span className="text-[#B79A72]">
                  Your Business.
                </span>
              </h2>

              <p className="mt-5 text-[12px] leading-[2] text-[#718092]">
                A resort, a neighbourhood shop and a professional
                business do not need the same social media content.
                We consider the audience, offering and type of
                communication before planning relevant content.
              </p>
            </Reveal>

            <div className="space-y-4">
              {localBusinessTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} delay={index * 0.07}>
                    <article className="flex gap-4 rounded-[15px] border border-[#E5DACA] bg-white p-5 sm:gap-6 sm:p-7">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F0E8] text-[#A38561]">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-[#A38561]">
                          {item.category}
                        </p>

                        <h3 className="mt-1 font-[var(--font-new-york)] text-[21px] text-[#122847]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[11px] leading-[1.9] text-[#788594]">
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
          06. PLATFORM STRATEGY
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="Platform Selection"
              title="Choose Platforms"
              highlight="That Fit Your Audience."
              description="Every platform has a different communication style. The right mix depends on your business category, target customers and the kind of content you can create consistently."
              center
            />
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;

              return (
                <Reveal key={platform.name} delay={index * 0.08}>
                  <article className="h-full rounded-[16px] border border-[#E9E0D5] bg-[#FCFAF7] p-7 transition-all duration-300 hover:-translate-y-1">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{
                        color: platform.color,
                        backgroundColor: platform.bg,
                      }}
                    >
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-7 font-[var(--font-new-york)] text-[23px] text-[#122847]">
                      {platform.name}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
                      {platform.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          07. PROCESS
      ================================================= */}

      <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="From Content Planning"
              highlight="to Consistent Publishing."
              description="A clear process helps align content direction, creative production and publishing with your business priorities."
              center
            />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.07}>
                <article className="relative h-full border-t border-[#DCCBB5] bg-white p-6 pt-7">
                  <span className="font-[var(--font-new-york)] text-[32px] text-[#B79A72]">
                    {step.number}
                  </span>

                  <h3 className="mt-6 font-[var(--font-new-york)] text-[20px] leading-snug text-[#122847]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-[1.9] text-[#788594]">
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

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
              Why Sharp Rays
            </p>

            <h2 className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[42px]">
              Social Media With{" "}
              <span className="text-[#B79A72]">
                a Clearer Direction.
              </span>
            </h2>

            <p className="mt-5 text-[12px] leading-[2] text-[#718092]">
              We bring strategy, content planning and creative
              communication together so your social media presence
              has a consistent direction rather than disconnected posts.
            </p>
          </Reveal>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {[
              {
                title: "Business-led content",
                description:
                  "Content planned around your products, services, audience and business objectives.",
                icon: Target,
              },
              {
                title: "Creative consistency",
                description:
                  "A coordinated visual direction across relevant social media formats.",
                icon: Camera,
              },
              {
                title: "Reels and short videos",
                description:
                  "Short-form video ideas and creative formats that suit your business communication.",
                icon: Clapperboard,
              },
              {
                title: "Performance awareness",
                description:
                  "Use available insights to review content and guide future improvements.",
                icon: BarChart3,
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

                  <p className="mt-2 text-[11px] leading-[1.9] text-[#788594]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          09. SOCIAL MEDIA PRICING
      ================================================= */}

      <section
        className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="bhayandar-social-pricing-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
                Social Media Marketing Pricing
              </p>

              <h2
                id="bhayandar-social-pricing-heading"
                className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]"
              >
                Find the Right Social Media{" "}
                <span className="text-[#B79A72]">Package.</span>
              </h2>

              <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
                Choose a package based on the number of platforms,
                content volume and short-form video requirements.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {socialPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
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
                    {plan.name} Package
                  </p>

                  <h3 className="mt-5 font-[var(--font-new-york)] text-[37px] leading-none tracking-[-0.04em] text-[#122847] sm:text-[42px]">
                    {plan.price}
                    <span className="ml-1 text-[12px] font-normal tracking-normal text-[#718092]">
                      /month
                    </span>
                  </h3>

                  <p className="mt-4 text-[11px] leading-[1.9] text-[#718092]">
                    {plan.description}
                  </p>

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
                      title={`View ${plan.name} social media marketing package details`}
                      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-[11px] font-medium transition ${
                        plan.featured
                          ? "bg-[#0B2A52] text-white hover:bg-[#163D69]"
                          : "border border-[#DDCDB9] bg-[#FCFAF7] text-[#0B2A52] hover:border-[#B79A72]"
                      }`}
                    >
                      View Package Details
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-7 text-center text-[11px] leading-[1.8] text-[#87929D]">
              Review the pricing page for complete package inclusions,
              deliverables and applicable terms.
            </p>

            <div className="mt-5 flex justify-center">
              <Link
                href="/pricing"
                title="Explore all Sharp Rays pricing packages"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#A38561] transition-colors hover:text-[#122847]"
              >
                Explore Complete Pricing
                <ArrowUpRight size={15} />
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
        aria-labelledby="bhayandar-social-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A38561]">
              Questions Before You Start
            </p>

            <h2
              id="bhayandar-social-faq-heading"
              className="font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-[#122847] sm:text-[43px]"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092]">
              Useful information about social media marketing,
              Instagram Reels, content planning and social media
              management for businesses around Bhayandar.
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
                Let's Build Your Social Presence
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-[32px] leading-[1.2] tracking-[-0.035em] text-white sm:text-[45px]">
                Ready to Give Your Brand{" "}
                <span className="text-[#C6A77A]">
                  a Stronger Voice?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-[580px] text-[12px] leading-[2] text-white/65">
                Tell us about your business, audience and social media
                goals. Let's plan content that communicates your brand
                with clarity and consistency.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  title="Contact Sharp Rays for social media marketing"
                  className="inline-flex items-center gap-3 rounded-full bg-[#C6A77A] px-6 py-3.5 text-[11px] font-semibold text-[#122847] transition-colors hover:bg-[#D7BC96]"
                >
                  Talk to Our Team
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/locations/bhayandar"
                  title="Explore digital marketing services in Bhayandar"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[11px] font-medium text-white transition-colors hover:border-[#C6A77A] hover:text-[#C6A77A]"
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
            href="/services/social-media-marketing"
            title="Explore Sharp Rays social media marketing services"
            className="transition-colors hover:text-[#A38561]"
          >
            Social Media Marketing Services
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
            href="/locations/mira-road/social-media-marketing"
            title="Social media marketing in Mira Road"
            className="transition-colors hover:text-[#A38561]"
          >
            Social Media Marketing in Mira Road
          </Link>

          <Link
            href="/locations/naigaon/social-media-marketing"
            title="Social media marketing in Naigaon"
            className="transition-colors hover:text-[#A38561]"
          >
            Social Media Marketing in Naigaon
          </Link>
        </div>
      </section>
    </>
  );
}
