
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Video,
  Camera,
  Sparkles,
  Play,
  Film,
  MonitorPlay,
  Image,
  Layers,
  Target,
  Building2,
  MapPin,
  Lightbulb,
  Palette,
  MessageSquare,
  Workflow,
  TrendingUp,
  FileText,
  BriefcaseBusiness,
  Clapperboard,
} from "lucide-react";

const services = [
  {
    icon: Video,
    title: "AI Video Production",
    description:
      "Create video content with AI-assisted production techniques for product showcases, brand communication and promotional campaigns.",
  },
  {
    icon: Clapperboard,
    title: "Promotional Videos",
    description:
      "Present your products, services, offers and business ideas through focused promotional video content.",
  },
  {
    icon: Film,
    title: "AI Video Editing",
    description:
      "Shape raw footage and creative assets into structured videos with editing, transitions, pacing and visual refinement.",
  },
  {
    icon: Layers,
    title: "Motion Graphics",
    description:
      "Use animated text, graphic elements and visual sequences to make information easier to understand.",
  },
  {
    icon: Image,
    title: "Creative Visuals",
    description:
      "Develop campaign creatives, branded visuals and digital assets that maintain a consistent visual direction.",
  },
  {
    icon: MonitorPlay,
    title: "Social Media Video Content",
    description:
      "Prepare short-form video concepts and creative assets for Reels, social posts and digital communication.",
  },
];

const challenges = [
  {
    title: "Hard-to-explain products",
    description:
      "Some products and services need more than a static image. Video can demonstrate features, explain benefits and make the offering easier to understand.",
  },
  {
    title: "Content that looks repetitive",
    description:
      "Repeating the same visual format can make a brand's communication feel predictable. Different creative formats can introduce variety.",
  },
  {
    title: "Limited visual resources",
    description:
      "A business may have an idea or campaign but not all the footage and visual assets needed to communicate it effectively.",
  },
  {
    title: "Unclear brand storytelling",
    description:
      "Disconnected visuals and messaging can make it difficult for audiences to understand what a business stands for.",
  },
  {
    title: "Short attention windows",
    description:
      "Digital audiences often encounter content quickly. A clear opening, focused message and suitable visual sequence can help communicate the point.",
  },
  {
    title: "Campaigns without creative direction",
    description:
      "Visuals work better when they follow a defined concept, audience and communication objective instead of being created in isolation.",
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

const creativeFormats = [
  {
    icon: Play,
    title: "Short-form videos",
    text: "Reels, short promotional videos and concise product or service explainers.",
  },
  {
    icon: Camera,
    title: "Product visuals",
    text: "Visual presentations that highlight product details, features and use cases.",
  },
  {
    icon: MessageSquare,
    title: "Brand storytelling",
    text: "Creative sequences that communicate brand ideas, business values and messages.",
  },
  {
    icon: FileText,
    title: "Explainer content",
    text: "Structured visual communication for services, processes and complex ideas.",
  },
];

const useCases = [
  {
    title: "Real estate & housing projects",
    description:
      "Present project highlights, amenities, location context, property features and launch announcements through planned video and creative content.",
  },
  {
    title: "Local shops & retail",
    description:
      "Showcase products, new arrivals, seasonal collections, offers and store updates through engaging visual formats.",
  },
  {
    title: "Manufacturing & industrial businesses",
    description:
      "Explain products, production capabilities, applications and business offerings through clear visual storytelling.",
  },
  {
    title: "Education & professional services",
    description:
      "Turn courses, expertise, service information and frequently asked questions into accessible visual content.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the brief",
    description:
      "We understand your business, audience, communication objective, preferred format and available creative material.",
  },
  {
    number: "02",
    title: "Develop the concept",
    description:
      "We shape the idea, message, visual direction and content structure around the purpose of the project.",
  },
  {
    number: "03",
    title: "Create the visuals",
    description:
      "We develop suitable video and creative assets using the agreed production approach and available resources.",
  },
  {
    number: "04",
    title: "Edit & refine",
    description:
      "We review pacing, visual consistency, messaging and presentation, then refine the deliverables within the agreed scope.",
  },
  {
    number: "05",
    title: "Prepare for publishing",
    description:
      "We organise the final creative assets in the agreed formats for your website, social media or campaign use.",
  },
];

const faqs = [
  {
    question: "What are AI video and creative services?",
    answer:
      "AI video and creative services use AI-assisted tools and creative production techniques to develop video content, promotional visuals, motion graphics and digital assets for business communication and marketing.",
  },
  {
    question: "Do you provide AI video services in Naigaon?",
    answer:
      "Sharp Rays offers AI video and creative services for businesses targeting Naigaon and nearby areas. The scope can include AI-assisted video production, promotional videos, video editing, motion graphics and creative visual content.",
  },
  {
    question: "What types of videos can you create?",
    answer:
      "Depending on the brief, video projects can include promotional videos, product showcases, short-form social videos, explainers, brand storytelling and campaign content.",
  },
  {
    question: "Can AI video be used for real estate projects in Naigaon?",
    answer:
      "Video and creative content can help communicate project features, amenities, location information, launch announcements and property highlights. The appropriate format depends on the available project information and approved visual material.",
  },
  {
    question: "Do you create Instagram Reels and short videos?",
    answer:
      "Yes. Short-form video content can be developed for platforms such as Instagram and other suitable digital channels. The format, creative direction and deliverables depend on the project brief.",
  },
  {
    question: "Can you create product videos for ecommerce businesses?",
    answer:
      "Product-focused videos can present product features, usage, details and benefits. The creative approach depends on the product, available assets, audience and intended platform.",
  },
  {
    question: "Do you provide video editing as a separate service?",
    answer:
      "Video editing can be discussed as part of a creative project. Share your footage, desired output and editing requirements so the scope can be assessed.",
  },
  {
    question: "Do you use AI for every video project?",
    answer:
      "Not necessarily. The production approach depends on the creative brief, required output and available assets. AI-assisted methods can be combined with conventional editing and design techniques where appropriate.",
  },
  {
    question: "How much do AI video and creative services cost?",
    answer:
      "Project costs depend on video length, complexity, creative requirements, number of deliverables, editing scope and production inputs. Contact Sharp Rays with your brief to discuss a suitable quotation.",
  },
  {
    question: "Can you create creatives for social media campaigns?",
    answer:
      "Yes. Creative assets can be planned for social media campaigns, including promotional visuals, short-form videos, product content and brand communication.",
  },
  {
    question: "What do I need to share before starting a project?",
    answer:
      "Share your business details, project objective, target audience, preferred video or creative format, references if available and any existing brand or product assets.",
  },
  {
    question: "How can I get started with Sharp Rays?",
    answer:
      "Contact Sharp Rays with your project idea and requirements. We can discuss the creative direction, deliverables, production approach and quotation for your project.",
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

export default function NaigaonAIVideoAndCreativeClient() {
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
              AI Video & Creative · Naigaon, Maharashtra
            </div>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
              AI Video & Creative Services for{" "}
              <span className="font-serif italic text-[#A88659]">
                Naigaon
              </span>{" "}
              Businesses
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
              Turn business ideas into compelling visual content with
              AI-assisted video production, promotional videos, creative
              visuals, motion graphics and thoughtful storytelling.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
  href="/contact?source=naigaon-ai-video-and-creative"
  title="Discuss Your AI Video and Creative Project with Sharp Rays"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A88659]"
>
  Discuss Your Creative Project <ArrowUpRight size={17} />
</Link>

              <Link
  href="/services/ai-video-and-creative"
  title="Explore Sharp Rays AI Video and Creative Services"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#122847]/15 bg-white px-7 py-4 text-sm font-medium text-[#122847] transition hover:border-[#A88659] hover:bg-[#F2F0EA]"
>
  Explore AI Video Services <ArrowRight size={16} />
</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#667085]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                AI-Assisted Video
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Creative Visuals
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#A88659]" />
                Motion & Storytelling
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative rounded-[2rem] border border-[#E8E2D8] bg-white p-5 shadow-xl shadow-[#122847]/[0.06] sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-wider text-[#98A2B3]">
                    CREATIVE PRODUCTION
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#122847]">
                    Ideas into visuals
                  </p>
                </div>
                <div className="rounded-full bg-[#F2F0EA] p-3 text-[#A88659]">
                  <Sparkles size={21} />
                </div>
              </div>

              <div className="relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl bg-[#122847] p-6 text-white sm:p-8">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-[#B79A72]/20 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Creative direction
                  </span>
                  <Film size={20} className="text-[#C6A77A]" />
                </div>

                <div className="relative">
                  <p className="font-serif text-4xl leading-tight sm:text-5xl">
                    Make your
                    <br />
                    idea visible.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A77A] text-[#122847]">
                      <Play size={18} fill="currentColor" />
                    </span>
                    <span className="text-xs tracking-wide text-white/60">
                      Video · Design · Storytelling
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#FCFAF7] p-4">
                  <Video size={19} className="text-[#A88659]" />
                  <p className="mt-3 text-sm font-medium">Video content</p>
                  <p className="mt-1 text-xs text-[#98A2B3]">
                    Concepts & production
                  </p>
                </div>
                <div className="rounded-xl bg-[#FCFAF7] p-4">
                  <Palette size={19} className="text-[#A88659]" />
                  <p className="mt-3 text-sm font-medium">Creative assets</p>
                  <p className="mt-1 text-xs text-[#98A2B3]">
                    Visual communication
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
                Sharp Rays offers AI video and creative services for businesses
                targeting Naigaon, including AI-assisted video production,
                promotional videos, editing, motion graphics and digital
                creative assets. These services can help businesses present
                products, explain services, communicate project information
                and develop visual content for websites and social platforms.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — CREATIVE CHALLENGES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="01 / The creative challenge"
            title={
              <>
                Your business has a story.
                <br />
                <span className="font-serif italic text-[#A88659]">
                  Make it visual.
                </span>
              </>
            }
            description="A strong creative asset does more than look attractive. It helps people understand your offering, remember your message and see what makes your business relevant."
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

      {/* 04 — SERVICES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="02 / What we create"
            title={
              <>
                Creative production for{" "}
                <span className="font-serif italic text-[#A88659]">
                  modern brands.
                </span>
              </>
            }
            description="From AI-assisted video concepts to campaign visuals, each creative deliverable should have a clear purpose and fit the way your business communicates."
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
  href="/services/ai-video-and-creative"
  title="Explore Sharp Rays AI Video and Creative Services"
  className="inline-flex items-center gap-2 text-sm font-semibold text-[#122847] transition hover:text-[#A88659]"
>
  Explore our complete AI video and creative service
  <ArrowUpRight size={16} />
</Link>
          </div>
        </div>
      </section>

      {/* 05 — CREATIVE FORMATS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="03 / Creative formats"
            title={
              <>
                Different formats.
                <br />
                <span className="font-serif italic text-[#A88659]">
                  One clear message.
                </span>
              </>
            }
            description="Choose a creative format based on what your audience needs to see, understand or remember. The right combination depends on your communication objective."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {creativeFormats.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7">
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

      {/* 06 — AI-ASSISTED PRODUCTION */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="04 / AI-assisted creative production"
              title={
                <>
                  Technology supports the idea.
                  <br />
                  <span className="font-serif italic text-[#A88659]">
                    Creativity leads.
                  </span>
                </>
              }
              description="AI-assisted tools can support selected parts of the creative process. The approach should always be guided by the brief, brand identity, intended audience and quality requirements."
            />

            <div className="space-y-4">
              {[
                "Explore visual concepts and creative directions",
                "Develop suitable AI-assisted video elements",
                "Combine visual assets with editing and motion",
                "Keep messaging and brand presentation consistent",
                "Prepare formats for the intended digital platform",
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
                  <Sparkles className="text-[#C6A77A]" size={22} />
                  <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                    Creative workflow
                  </p>
                </div>

                <h3 className="max-w-md text-3xl font-medium leading-tight tracking-tight">
                  Start with the message. Build the visual around it.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  AI tools are part of the production toolkit, not a substitute
                  for understanding the brief or making thoughtful creative
                  decisions.
                </p>

                <div className="mt-9 space-y-3">
                  {[
                    ["01", "Concept & direction"],
                    ["02", "AI-assisted creation"],
                    ["03", "Editing & refinement"],
                    ["04", "Final creative assets"],
                  ].map(([number, label]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <span className="font-serif text-xl italic text-[#C6A77A]">
                        {number}
                      </span>
                      <span className="text-sm text-white/85">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 — LOCAL CONTEXT */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="05 / Creative content in Naigaon"
              title={
                <>
                  Visual communication shaped around{" "}
                  <span className="font-serif italic text-[#A88659]">
                    local business needs.
                  </span>
                </>
              }
              description="Businesses targeting Naigaon may need different creative approaches depending on their audience, products, services and campaigns."
            />

            <div className="space-y-4">
              {[
                "Promotional visuals for new west-side housing launches",
                "Project videos explaining amenities and key features",
                "Product showcases for Naigaon shops and retailers",
                "Creative content for local service businesses",
                "Video explainers for products and professional services",
                "Campaign assets for digital and social media channels",
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
                  Make every visual relevant to the audience you want to reach.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  Use local references when they genuinely support the business
                  message, campaign or project information.
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
                  Local references should accurately match the audience,
                  project or service coverage.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 — INDUSTRIES */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="06 / Industries"
            title={
              <>
                Creative content for{" "}
                <span className="font-serif italic text-[#A88659]">
                  different industries.
                </span>
              </>
            }
            description="A real estate video needs a different approach from a product showcase or an educational explainer. Creative direction should reflect the industry and the audience."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry, index) => (
              <Reveal key={industry} delay={index * 0.035}>
                <div className="flex min-h-28 flex-col justify-between rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-5 transition hover:border-[#B79A72]">
                  <Building2 className="text-[#B79A72]" size={20} />
                  <p className="mt-5 text-sm font-medium">{industry}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — USE CASES */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="07 / Where creative content fits"
            title={
              <>
                Give your message the{" "}
                <span className="font-serif italic text-[#A88659]">
                  right format.
                </span>
              </>
            }
            description="Explore how video and creative content can support different business communication needs."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {useCases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-[#E8E2D8] bg-white p-7 sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#B79A72]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — WHY SHARP RAYS */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="08 / Why Sharp Rays"
            title={
              <>
                Creative thinking before production.
                <br />
                <span className="font-serif italic text-[#A88659]">
                  Purpose before effects.
                </span>
              </>
            }
            description="AI video and creative work should support your brand communication. The objective is not simply to add effects, but to make the message clearer and the visual experience more purposeful."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "Concept-led approach",
                text: "Begin with the audience, message and objective before selecting a visual format.",
              },
              {
                icon: Palette,
                title: "Brand-aware creative",
                text: "Keep visual direction, tone and presentation aligned with your brand identity.",
              },
              {
                icon: Workflow,
                title: "Connected production",
                text: "Bring concept development, creation, editing and final delivery into one considered workflow.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.07}>
                  <div className="h-full rounded-2xl border border-[#E8E2D8] bg-[#FCFAF7] p-8">
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

      {/* 11 — PROCESS */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="09 / Our process"
            title={
              <>
                From first idea to{" "}
                <span className="font-serif italic text-[#A88659]">
                  final creative.
                </span>
              </>
            }
            description="A structured workflow helps keep the creative project aligned with its objective, visual direction and agreed deliverables."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <div className="relative h-full rounded-2xl border border-[#E8E2D8] bg-white p-6">
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

      {/* 12 — AI VIDEO PRICING */}
      <section className="bg-[#F2F0EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeading
            eyebrow="10 / AI video investment"
            title={
              <>
                Choose the right plan for{" "}
                <span className="font-serif italic text-[#A88659]">
                  your next video.
                </span>
              </>
            }
            description="Create AI-powered video content without needing existing footage. Choose a monthly plan based on how many AI videos your business needs."
            centered
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "AI Starter",
                price: "₹9,999",
                videos: "Up to 3 AI videos per month",
                description:
                  "For businesses starting with AI-generated video content.",
              },
              {
                name: "AI Growth",
                price: "₹17,999",
                videos: "Up to 6 AI videos per month",
                description:
                  "For businesses that need more regular AI video content.",
                featured: true,
              },
              {
                name: "AI Scale",
                price: "₹27,999",
                videos: "Up to 10 AI videos per month",
                description:
                  "For businesses with broader and ongoing video content needs.",
              },
            ].map((plan, index) => (
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
                    className={`mt-2 text-xs ${
                      plan.featured ? "text-white/55" : "text-[#667085]"
                    }`}
                  >
                    Starting price / month
                  </p>

                  <p
                    className={`mt-6 min-h-12 text-sm leading-6 ${
                      plan.featured ? "text-white/65" : "text-[#667085]"
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

                  <ul className="mb-8 space-y-4 text-sm">
                    <li className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#B79A72]"
                      />
                      <span>{plan.videos}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#B79A72]"
                      />
                      <span>AI video creation — no footage needed</span>
                    </li>
                  </ul>

                  <Link
  href="/pricing"
  title="View Sharp Rays AI Video and Creative Pricing"
  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
    plan.featured
      ? "bg-[#C6A77A] text-[#122847] hover:bg-white"
      : "bg-[#122847] text-white hover:bg-[#1D3B61]"
  }`}
>
  View Package Details <ArrowUpRight size={16} />
</Link><Link
                    href="/pricing"
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
            Prices are starting prices. Final scope and requirements should be
            confirmed before starting. Explore the complete details on our{" "}
            <Link
  href="/pricing"
  title="View Sharp Rays AI Video and Creative Pricing"
  className="font-semibold underline underline-offset-4"
>
  pricing page
</Link>
            .
          </p>
        </div>
      </section>


      {/* 12 — PROJECT ENQUIRY */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 rounded-[2rem] border border-[#E8E2D8] bg-[#FCFAF7] p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              10 / Start a creative project
            </p>
            <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              Have a video idea or campaign in mind?
              <span className="font-serif italic text-[#A88659]">
                {" "}
                Let's shape it.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#667085]">
              Tell us what you want to communicate, who you want to reach and
              what kind of visual content you need. We can discuss the creative
              direction and project scope.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
  href="/contact?source=naigaon-ai-video-creative-quote"
  title="Request an AI Video and Creative Project Quote from Sharp Rays"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#122847] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#A88659]"
>
  Request a Quote <ArrowUpRight size={17} />
</Link>
          </Reveal>
        </div>
      </section>

      {/* 13 — FAQs */}
      <section
        className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28"
        aria-labelledby="naigaon-ai-video-faq-heading"
      >
        <div className="mx-auto max-w-[1220px]">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A88659]">
              Questions Before You Start
            </p>

            <h2
              id="naigaon-ai-video-faq-heading"
              className="mt-4 font-[var(--font-new-york)] text-3xl font-medium leading-tight tracking-[-0.035em] text-[#122847] sm:text-4xl lg:text-5xl"
            >
              Frequently Asked{" "}
              <span className="text-[#B79A72]">Questions.</span>
            </h2>

            <p className="mt-5 text-[13px] leading-[1.9] text-[#718092] sm:text-sm">
              Clear answers about AI video production, creative services,
              promotional videos and visual content for Naigaon businesses.
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

      {/* 14 — FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#122847] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#B79A72]/10 blur-[100px]" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Your next creative idea starts here
          </p>

          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Make your next brand story{" "}
            <span className="font-serif italic text-[#C6A77A]">
              worth watching.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
            Tell us about your idea, your audience and the video or creative
            content you need. Let's discuss the right direction for your
            project.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
  href="/contact?source=naigaon-ai-video-creative-final"
  title="Start an AI Video and Creative Project with Sharp Rays"
  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A77A] px-8 py-4 text-sm font-semibold text-[#122847] transition hover:bg-white"
>
  Discuss Your Project
  <ArrowUpRight size={17} />
</Link>

          <Link
  href="/locations/naigaon"
  title="Explore Digital Marketing Services in Naigaon"
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
