
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Camera as Instagram,
  Users as Facebook,
  BriefcaseBusiness as Linkedin,
  Video,
  Target,
  CalendarDays,
  BarChart3,
  MessageSquare,
  Building2,
  MapPin,
  Sparkles,
  Smartphone,
  TrendingUp,
  Palette,
  Search,
  Play,
  Lightbulb,
  FileText,
  Heart,
  Share2,
} from "lucide-react";


const services = [
  {
    icon: Instagram,
    title: "Instagram Marketing",
    description:
      "Build a consistent Instagram presence through strategic content, Reels, Stories and audience-focused creative.",
  },
  {
    icon: Video,
    title: "Reels & Short-Form Videos",
    description:
      "Create short-form video content that presents your products, services, projects and brand in an engaging format.",
  },
  {
    icon: CalendarDays,
    title: "Social Media Management",
    description:
      "Plan content calendars, coordinate publishing and maintain a consistent presence across your selected platforms.",
  },
  {
    icon: Palette,
    title: "Social Media Creatives",
    description:
      "Develop branded posts, carousels and campaign visuals that communicate your message clearly and consistently.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description:
      "Plan content themes, messaging and formats around your audience, business objectives and communication priorities.",
  },
  {
    icon: BarChart3,
    title: "Social Media Analytics",
    description:
      "Review content performance, audience engagement and account insights to identify opportunities for improvement.",
  },
];

const challenges = [
  {
    title: "Inconsistent posting",
    description:
      "Irregular content can make it difficult for people to understand what your business offers and stay connected with your brand.",
  },
  {
    title: "Low audience engagement",
    description:
      "Content that does not connect with audience interests may receive limited meaningful interaction.",
  },
  {
    title: "No clear content direction",
    description:
      "Posting without defined themes or objectives can make your social media presence feel disconnected.",
  },
  {
    title: "Unclear brand identity",
    description:
      "Inconsistent visuals, tone and messaging can make it harder for audiences to recognise your business.",
  },
  {
    title: "Not using video effectively",
    description:
      "Reels and short-form videos can communicate products, services and project details in a more visual format.",
  },
  {
    title: "Engagement without enquiries",
    description:
      "Social media activity needs a clear path for interested people to learn more, contact your business or take action.",
  },
];

const localAreas = [
  "Naigaon Station",
  "Naigaon West",
  "Juchandra",
  "Chandrapada",
];

const industries = [
  "Real Estate",
  "Manufacturing",
  "Education",
  "Healthcare",
  "Beauty & Wellness",
  "Ecommerce",
  "Professional Services",
  "Restaurants",
  "Startups",
  "Travel & Hospitality",
];

const process = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We learn about your business, audience, services, existing social media presence and marketing objectives.",
  },
  {
    number: "02",
    title: "Build the strategy",
    description:
      "We identify content pillars, suitable platforms, creative direction and a practical publishing approach.",
  },
  {
    number: "03",
    title: "Plan & create content",
    description:
      "We organise content ideas, captions, creatives, Reels and publishing schedules around the agreed strategy.",
  },
  {
    number: "04",
    title: "Publish & engage",
    description:
      "We follow the content calendar and maintain a consistent brand presence across the selected platforms.",
  },
  {
    number: "05",
    title: "Review & improve",
    description:
      "We review available performance insights and use them to guide future content and campaign decisions.",
  },
];

const faqs = [
  {
    question: "What is social media marketing?",
    answer:
      "Social media marketing uses platforms such as Instagram, Facebook and LinkedIn to communicate with audiences, share useful content, build brand awareness and support business objectives.",
  },
  {
    question: "Do you provide social media marketing in Naigaon?",
    answer:
      "Sharp Rays offers social media marketing services for businesses targeting Naigaon and nearby areas. Services can include content strategy, Instagram marketing, Reels, creative design, social media management and performance reporting.",
  },
  {
    question: "Which social media platforms should my business use?",
    answer:
      "The right platforms depend on your audience, industry, content capabilities and business goals. Instagram can support visual discovery, Facebook can help with community communication and LinkedIn can be useful for professional and B2B audiences.",
  },
  {
    question: "Can social media marketing help real estate projects in Naigaon?",
    answer:
      "Social media can help real estate businesses communicate project details, amenities, location information, construction updates and enquiry options through planned posts, Reels and other suitable formats.",
  },
  {
    question: "Do you create Instagram Reels?",
    answer:
      "Yes. Reels and short-form video content can be included in a social media strategy. The content direction depends on your business, available footage, audience and agreed package scope.",
  },
  {
    question: "How much does social media marketing cost?",
    answer:
      "Sharp Rays offers social media marketing packages starting at ₹14,999, with additional packages at ₹24,999 and ₹39,999. The appropriate package depends on the required content, platforms and management scope. Visit the pricing page for details.",
  },
  {
    question: "Can social media marketing help local shops?",
    answer:
      "Social media can help local shops present products, share offers, communicate updates and make it easier for interested customers to discover and contact the business.",
  },
  {
    question: "How often should my business post on social media?",
    answer:
      "Posting frequency depends on your platform, audience, content resources and objectives. A manageable, consistent schedule with useful content is generally more sustainable than publishing frequently without a clear plan.",
  },
  {
    question: "Do you manage Instagram business accounts?",
    answer:
      "Social media management can include content planning, creative coordination, captions, publishing and performance reviews. The exact responsibilities should be confirmed as part of the agreed scope.",
  },
  {
    question: "Can social media marketing generate enquiries?",
    answer:
      "Social media can support enquiries by presenting your services clearly, building audience interest and providing useful contact options. Results depend on the offer, audience, content quality and conversion experience.",
  },
  {
    question: "Do you guarantee followers or sales?",
    answer:
      "No. Follower growth, engagement and sales depend on several factors, including audience demand, content, competition and platform distribution. A responsible strategy focuses on relevant communication and measurable improvement rather than guaranteed numbers.",
  },
  {
    question: "How can I start with Sharp Rays?",
    answer:
      "Contact Sharp Rays with your business details, target audience and social media goals. We can discuss your current presence and the most suitable content and management approach.",
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

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
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

export default function NaigaonSocialMediaMarketingClient() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden bg-[#FCFAF7] px-5 pb-24 pt-28 text-[#122847] sm:px-8 sm:pb-32 sm:pt-36 lg:px-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-[#122847]/[0.06]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#122847]/10 bg-white px-4 py-2 text-xs tracking-wide text-[#667085]">
              <MapPin size={13} className="text-[#A88659]" />
              Social Media Marketing · Naigaon, Maharashtra
            </div>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              Social Media Marketing for{" "}
              <span className="font-serif italic text-[#A88659]">
                Naigaon
              </span>{" "}
              Businesses
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Build a recognisable brand and a more consistent social presence
              with thoughtful content, Instagram marketing, Reels and
              audience-focused social media strategies.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
             <Link
  href="/contact?source=naigaon-social-media-marketing"
  title="Discuss Social Media Marketing Services in Naigaon with Sharp Rays"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A88659]"
>
  Discuss Your Social Strategy <ArrowUpRight size={17} />
</Link>

             <Link
  href="/services/social-media-marketing"
  title="Explore Sharp Rays Social Media Marketing Services"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#122847]/15 bg-white px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#A88659] hover:bg-[#F2F0EA]"
>
  Explore Social Media Services <ArrowRight size={16} />
</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#667085]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Content Strategy
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Instagram & Reels
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Social Media Management
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-white p-5 shadow-xl shadow-[#122847]/[0.06] sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-wider text-[#98A2B3]">
                    SOCIAL MEDIA PRESENCE
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#122847]">
                    Your brand in the feed
                  </p>
                </div>
                <div className="rounded-full bg-[#F2F0EA] p-3 text-[#A88659]">
                  <Instagram size={21} />
                </div>
              </div>

              <div className="rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#122847] text-[#C6A77A]">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Your Brand</p>
                    <p className="text-xs text-[#98A2B3]">
                      Social content preview
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-[#A88659]">
                    <Heart size={17} />
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="flex aspect-square flex-col justify-between rounded-xl bg-[#122847] p-4 text-white">
                    <Instagram size={19} className="text-[#C6A77A]" />
                    <p className="font-serif text-lg leading-tight">
                      Your story.
                      <br />
                      Your brand.
                    </p>
                  </div>
                  <div className="flex aspect-square flex-col justify-between rounded-xl bg-[#E9E3D8] p-4 text-[#122847]">
                    <Video size={19} className="text-[#A88659]" />
                    <p className="font-serif text-lg leading-tight">
                      Reels that
                      <br />
                      communicate.
                    </p>
                  </div>
                  <div className="flex aspect-square flex-col justify-between rounded-xl bg-[#F1EDE6] p-4 text-[#122847]">
                    <MessageSquare size={19} className="text-[#A88659]" />
                    <p className="font-serif text-lg leading-tight">
                      Content with
                      <br />
                      a purpose.
                    </p>
                  </div>
                  <div className="flex aspect-square flex-col justify-between rounded-xl bg-[#C6A77A] p-4 text-[#122847]">
                    <Target size={19} />
                    <p className="font-serif text-lg leading-tight">
                      Strategy
                      <br />
                      before posting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#FCFAF7] p-4">
                  <Play size={19} className="text-[#A88659]" />
                  <p className="mt-3 text-sm font-medium">Short-form video</p>
                  <p className="mt-1 text-xs text-[#98A2B3]">
                    Reels & video content
                  </p>
                </div>
                <div className="rounded-xl bg-[#FCFAF7] p-4">
                  <TrendingUp size={19} className="text-[#A88659]" />
                  <p className="mt-3 text-sm font-medium">Content insights</p>
                  <p className="mt-1 text-xs text-[#98A2B3]">
                    Review & improve
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-[#B79A72]/20 blur-3xl" />
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="rounded-3xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 sm:p-10">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#A88659]">
                <Sparkles size={15} />
                A quick answer
              </div>
              <p className="text-lg leading-8 text-[#344054] sm:text-xl sm:leading-9">
                Sharp Rays provides social media marketing in Naigaon,
                including Instagram management, content strategy, Reels,
                creative design and social media planning. We help businesses
                communicate their products, services and projects through
                relevant content for audiences around Naigaon Station,
                Naigaon West, Juchandra and Chandrapada.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — SOCIAL MEDIA CHALLENGES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 / The social media challenge"
            title={
              <>
                Posting more is not the same as{" "}
                <span className="font-serif italic text-[#A88659]">
                  connecting better.
                </span>
              </>
            }
            description="A useful social media presence needs more than frequent posts. It needs clear communication, consistent creative direction and content that makes sense for your audience."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                  <span className="text-xs font-semibold tracking-widest text-[#B79A72]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — SOCIAL MEDIA SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 / What we do"
            title={
              <>
                Social media built around your{" "}
                <span className="font-serif italic text-[#A88659]">
                  business goals.
                </span>
              </>
            }
            description="From content planning to creative execution, social media activities should connect your brand message with the people you want to reach."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <div className="group h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#122847]/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A] transition group-hover:bg-[#C6A77A] group-hover:text-[#122847]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium">
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
  title="Explore Complete Social Media Marketing Services by Sharp Rays"
  className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
>
  Explore our complete social media service
  <ArrowUpRight size={16} />
</Link>
          </div>
        </div>
      </section>

      {/* 05 — LOCAL SOCIAL MEDIA ANGLE */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="03 / Social media in Naigaon"
              title={
                <>
                  Content shaped around{" "}
                  <span className="font-serif italic text-[#A88659]">
                    local business needs.
                  </span>
                </>
              }
              description="A local social media strategy should reflect what your business offers, who it wants to reach and what information people need before making an enquiry."
            />

            <div className="space-y-4">
              {[
                "Project-focused content for new west-side housing launches",
                "Product and offer communication for Naigaon shops",
                "Instagram Reels for products, services and locations",
                "Creative posts that explain your business clearly",
                "Content calendars aligned with business priorities",
                "Clear contact and enquiry paths from social profiles",
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
            <div className="relative overflow-hidden rounded-[2rem] bg-[#122847] p-8 text-white sm:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="relative">
                <div className="mb-7 flex items-center gap-3">
                  <MapPin className="text-[#C6A77A]" size={22} />
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                    Local content context
                  </p>
                </div>

                <h3 className="max-w-md text-3xl font-medium leading-tight tracking-tight">
                  Make your social content relevant to the audience you serve.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Use relevant local context when it genuinely supports your
                  business message, project information or customer needs.
                </p>

                <div className="mt-9 grid grid-cols-2 gap-3">
                  {localAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] p-4 text-sm"
                    >
                      <MapPin size={14} className="shrink-0 text-[#C6A77A]" />
                      {area}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs leading-6 text-white/40">
                  Local references should be used where they accurately match
                  the audience, project or service coverage.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — CONTENT STRATEGY */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="04 / Content direction"
            title={
              <>
                Every post should have{" "}
                <span className="font-serif italic text-[#A88659]">
                  a purpose.
                </span>
              </>
            }
            description="A balanced content plan gives your audience different ways to understand your business, explore your offering and engage with your brand."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lightbulb,
                title: "Educational content",
                text: "Useful tips, explainers and answers to common audience questions.",
              },
              {
                icon: Video,
                title: "Reels & videos",
                text: "Short-form content that demonstrates products, services and ideas.",
              },
              {
                icon: Palette,
                title: "Brand storytelling",
                text: "Visual identity, brand values, processes and business updates.",
              },
              {
                icon: Target,
                title: "Promotional content",
                text: "Clear communication about offers, services, launches and enquiries.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-lg font-medium">{item.title}</h3>
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

      {/* 07 — INDUSTRIES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="05 / Industries"
            title={
              <>
                Social content for{" "}
                <span className="font-serif italic text-[#A88659]">
                  different industries.
                </span>
              </>
            }
            description="Every industry communicates differently. Content formats, messaging and platform choices should reflect what the audience wants to understand."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry, index) => (
              <Reveal key={industry} delay={index * 0.035}>
                <div className="flex min-h-28 flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-white p-5 transition hover:border-[#B79A72]">
                  <Building2 className="text-[#B79A72]" size={20} />
                  <p className="mt-5 text-sm font-medium">{industry}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — PLATFORM SELECTION */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="06 / Platform strategy"
              title={
                <>
                  Be present where your{" "}
                  <span className="font-serif italic text-[#A88659]">
                    audience is.
                  </span>
                </>
              }
              description="The best platform mix depends on your audience, business model, content format and available resources. A focused approach is often more practical than trying to manage every platform."
            />
          <Link
  href="/services/social-media-marketing"
  title="Explore Social Media Strategy and Marketing Services by Sharp Rays"
  className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A88659]"
>
  Explore social media services
  <ArrowUpRight size={16} />
</Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Instagram,
                  title: "Instagram",
                  text: "Visual storytelling, Reels, product discovery and community interaction.",
                },
                {
                  icon: Facebook,
                  title: "Facebook",
                  text: "Business updates, community communication and suitable local campaigns.",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  text: "Professional positioning, B2B communication and industry insights.",
                },
                {
                  icon: Video,
                  title: "Short-form video",
                  text: "Reusable video content adapted for the platforms your audience uses.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-6"
                  >
                    <Icon size={21} className="text-[#A88659]" />
                    <h3 className="mt-5 font-medium text-[#122847]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — WHY SHARP RAYS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="07 / Why Sharp Rays"
            title={
              <>
                Strategy before posting.{" "}
                <span className="font-serif italic text-[#A88659]">
                  Clarity before activity.
                </span>
              </>
            }
            description="Social media should support your wider digital presence. Content, brand presentation and website experience should work together rather than operate as disconnected activities."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Business-first thinking",
                text: "Content priorities should reflect your services, audience and business objectives.",
              },
              {
                icon: Palette,
                title: "Consistent creative direction",
                text: "A recognisable visual and messaging approach helps maintain a coherent brand presence.",
              },
              {
                icon: TrendingUp,
                title: "Performance awareness",
                text: "Use available insights to understand what connects with your audience and where to improve.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#122847] text-[#C6A77A]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-6 text-xl font-medium">{item.title}</h3>
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

      {/* 10 — SOCIAL MEDIA PROCESS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="08 / Our process"
            title={
              <>
                A clear process for{" "}
                <span className="font-serif italic text-[#A88659]">
                  consistent communication.
                </span>
              </>
            }
            description="A planned workflow helps keep your social media activities organised, from initial strategy to content review."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <div className="relative h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-6">
                  <p className="font-serif text-4xl italic text-[#B79A72]">
                    {step.number}
                  </p>
                  <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
      {/* 11 — PRICING */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="09 / Social media investment"
            title={
              <>
                Choose a starting point for{" "}
                <span className="font-serif italic text-[#A88659]">
                  your social presence.
                </span>
              </>
            }
            description="Choose a social media package based on your content requirements, platform coverage and business goals."
            centered
          />

          <div className="grid gap-5 md:grid-cols-3">
            {socialPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.06}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                    plan.featured
                      ? "border-[#122847] bg-[#122847] text-white shadow-2xl shadow-[#122847]/15"
                      : "border-[#E8E2D8] bg-white text-[#122847]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-[#C6A77A] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#122847]">
                      Popular
                    </span>
                  )}

                  <p
                    className={`text-sm ${
                      plan.featured ? "text-white/55" : "text-[#667085]"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <p className="mt-5 text-4xl font-medium tracking-tight">
                    {plan.price}
                  </p>

                  <p
                    className={`mt-3 min-h-12 text-sm leading-6 ${
                      plan.featured ? "text-white/55" : "text-[#667085]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`my-7 border-t ${
                      plan.featured
                        ? "border-white/15"
                        : "border-[#E8E2D8]"
                    }`}
                  />

                  <ul className="mb-8 space-y-3 text-sm">
                    {plan.features.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-[#B79A72]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                 <Link
  href="/pricing"
  title={`View Sharp Rays ${plan.name} Social Media Marketing Package Pricing`}
  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
    plan.featured
      ? "bg-[#C6A77A] text-[#122847] hover:bg-white"
      : "bg-[#122847] text-white hover:bg-[#1D3B61]"
  }`}
>
  View Package Details <ArrowUpRight size={16} />
</Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-7 text-center text-xs leading-6 text-[#667085]">
            Shoots, paid advertising and influencer fees are quoted separately.
            See complete package inclusions on our{" "}
            <Link
  href="/pricing"
  title="View Complete Sharp Rays Social Media Marketing Pricing"
  className="font-semibold underline underline-offset-4"
>
  pricing page
</Link>
            .
          </p>
        </div>
      </section>


      {/* 12 — FAQs */}
      <section
        className="bg-white px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-social-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              Questions Before You Start
            </p>

            <h2
              id="naigaon-social-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
              Clear answers about social media marketing, Instagram content,
              Reels and growing your business presence in Naigaon.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-[#E4D9CC] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question}>
                <article className="flex h-full gap-4 border-b border-[#E4D9CC] py-7 sm:py-8">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D2BF] bg-[#FCFAF7] font-[var(--font-new-york)] text-[15px] text-[#B79A72]">
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

      {/* 13 — FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Your next step starts here
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Give your brand a social presence that{" "}
            <span className="font-serif italic text-[#C6A77A]">
              connects.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Tell us about your business, your audience and what you want your
            social media presence to achieve. Let's plan the next step
            together.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
  href="/contact?source=naigaon-social-media-final"
  title="Start a Social Media Marketing Project with Sharp Rays in Naigaon"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
  Discuss Your Project
  <ArrowUpRight size={17} />
</Link>

           <Link
  href="/locations/naigaon"
  title="Explore All Digital Marketing Services in Naigaon"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10"
>
  Explore Naigaon Services
  <ArrowRight size={16} />
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
