
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Video,
  CalendarDays,
  Camera,
  Palette,
  MessageCircle,
  BarChart3,
  Target,
  Users,
  Store,
  Utensils,
  ShoppingBag,
  Building2,
  BriefcaseBusiness,
  Sparkles,
  Heart,
  Megaphone,
  Smartphone,
  Clapperboard,
  TrendingUp,
  MapPin,
  Image,
  Share2,
  Lightbulb,
  CalendarCheck,
  Eye,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Social Media Strategy",
    description:
      "Build a structured social media direction around your business, audience, brand positioning, content themes, and marketing objectives.",
    features: ["Audience understanding", "Platform planning", "Content direction"],
  },
  {
    icon: CalendarDays,
    title: "Social Media Management",
    description:
      "Keep your social presence organised with planned content, publishing schedules, platform coordination, and ongoing management.",
    features: ["Content calendar", "Publishing coordination", "Account management"],
  },
  {
    icon: Clapperboard,
    title: "Reels & Short-Form Videos",
    description:
      "Create short-form video content that presents your products, services, offers, experiences, and brand personality.",
    features: ["Reels concepts", "Video editing", "Short-form storytelling"],
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Develop visually consistent social media creatives that communicate your offers, brand identity, and important business updates.",
    features: ["Post designs", "Carousel creatives", "Story graphics"],
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Plan useful and engaging content around your products, services, business activities, seasonal moments, and audience interests.",
    features: ["Content ideas", "Captions and copy", "Creative direction"],
  },
  {
    icon: MessageCircle,
    title: "Community Engagement",
    description:
      "Support a more consistent brand presence through audience interaction, comment monitoring, and community-focused communication.",
    features: ["Comment monitoring", "Audience interaction", "Engagement planning"],
  },
  {
    icon: Megaphone,
    title: "Campaign & Festival Content",
    description:
      "Plan timely social media campaigns around relevant festivals, seasonal occasions, local activities, and business promotions.",
    features: ["Festival campaigns", "Seasonal content", "Promotional creatives"],
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description:
      "Review content performance and audience activity to understand what is working and identify opportunities to improve.",
    features: ["Content insights", "Engagement review", "Performance reporting"],
  },
];

const contentPillars = [
  {
    icon: ShoppingBag,
    title: "Product & Offer Showcases",
    description:
      "Present products, new arrivals, offers, collections, and business updates through clear visual storytelling.",
    format: "Posts · Stories · Reels",
  },
  {
    icon: Video,
    title: "Reels & Behind the Scenes",
    description:
      "Show how your business works, introduce your team, share product details, and create short-form videos.",
    format: "Reels · Short videos",
  },
  {
    icon: CalendarDays,
    title: "Festival & Seasonal Content",
    description:
      "Plan relevant festival creatives, seasonal campaigns, and timely content that connects with your business audience.",
    format: "Campaigns · Stories · Posts",
  },
  {
    icon: Users,
    title: "Community & Local Stories",
    description:
      "Share customer-focused information, local business updates, useful tips, and content that builds familiarity.",
    format: "Stories · Carousels · Reels",
  },
];

const industries = [
  {
    icon: Store,
    title: "Retail & Local Shops",
    text: "Product showcases, new arrivals, promotional creatives, festival campaigns, and local customer-focused content.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Food Brands",
    text: "Food Reels, menu highlights, seasonal offers, dining experiences, and festival-related content.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property",
    text: "Property showcases, project updates, amenities, walkthrough videos, and enquiry-focused content.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    text: "Expertise-led posts, service explainers, educational content, and brand communication.",
  },
  {
    icon: ShoppingBag,
    title: "Fashion & Lifestyle",
    text: "Product styling, collections, launch announcements, seasonal promotions, and visual storytelling.",
  },
  {
    icon: Users,
    title: "Education & Coaching",
    text: "Course information, educational posts, student-focused updates, programme highlights, and admission campaigns.",
  },
];

const localCampaigns = [
  {
    icon: CalendarDays,
    title: "Festival Campaigns",
    label: "SEASONAL CONTENT",
    description:
      "Plan festival-related creatives, promotional messages, product showcases, and timely social media communication around occasions relevant to your customers.",
  },
  {
    icon: MapPin,
    title: "Jivdani-season Content",
    label: "LOCAL CONTEXT",
    description:
      "Develop relevant seasonal content for Virar retail and food brands around the Jivdani season, including product highlights, food offerings, visitor-focused information, and timely promotions.",
  },
  {
    icon: Store,
    title: "Local Business Stories",
    label: "COMMUNITY CONNECTION",
    description:
      "Showcase products, business activities, services, customer experiences, and local brand stories that help people understand what your business offers.",
  },
  {
    icon: Utensils,
    title: "Food & Dining Reels",
    label: "FOOD CONTENT",
    description:
      "Present menu highlights, food preparation, signature dishes, ambience, and seasonal offerings through short-form video concepts.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Brand",
    description:
      "We understand your business, products, audience, brand personality, competitors, and social media objectives.",
  },
  {
    number: "02",
    title: "Build the Content Direction",
    description:
      "We define content pillars, platform priorities, creative direction, campaign opportunities, and communication style.",
  },
  {
    number: "03",
    title: "Plan & Create",
    description:
      "We develop post ideas, Reels concepts, captions, designs, and a structured content calendar.",
  },
  {
    number: "04",
    title: "Publish & Engage",
    description:
      "Content is coordinated for publishing, while audience interactions and relevant engagement activities are reviewed.",
  },
  {
    number: "05",
    title: "Review & Improve",
    description:
      "We review available performance insights and use them to guide future content and campaign improvements.",
  },
];

const benefits = [
  {
    icon: Eye,
    title: "Consistent Brand Presence",
    text: "Maintain a recognisable and organised presence across your selected social media platforms.",
  },
  {
    icon: Heart,
    title: "Relevant Audience Connection",
    text: "Create content around your audience's interests, questions, products, and local business context.",
  },
  {
    icon: Video,
    title: "More Content Formats",
    text: "Use a mix of Reels, carousels, stories, and static creatives to communicate different messages.",
  },
  {
    icon: TrendingUp,
    title: "Performance-led Improvements",
    text: "Use content insights and engagement patterns to identify opportunities for better communication.",
  },
];

const faqs = [
  {
    question: "Do you provide social media marketing services in Virar?",
    answer:
      "Yes. Sharp Rays provides social media marketing services for businesses targeting customers in Virar and nearby areas. Services can include social media strategy, content planning, creative design, Reels, account management, and performance reporting.",
  },
  {
    question: "Which social media platforms do you manage?",
    answer:
      "Platform selection depends on your business, audience, and marketing objectives. Instagram and Facebook may be relevant for many local businesses, while LinkedIn and other platforms can be considered where they suit your audience.",
  },
  {
    question: "Do you create Instagram Reels for Virar businesses?",
    answer:
      "Yes. Reels concepts and short-form video content can be planned around your products, services, business activities, offers, and audience interests.",
  },
  {
    question: "Can you create festival content for local shops?",
    answer:
      "Yes. Festival-related content can include promotional creatives, product showcases, seasonal offers, greeting posts, and campaign ideas planned around relevant occasions for your business.",
  },
  {
    question: "Can you plan Jivdani-season content for Virar brands?",
    answer:
      "Yes. We can plan relevant seasonal content for Virar retail and food brands around the Jivdani season. Ideas may include product highlights, food offerings, visitor-focused information, and timely promotions.",
  },
  {
    question: "How much does social media marketing cost in Virar?",
    answer:
      "Sharp Rays social media marketing starts from ₹14,999 per month. The final scope depends on the platforms, content requirements, creative formats, publishing frequency, and management needs.",
  },
  {
    question: "Does social media marketing include paid advertisements?",
    answer:
      "Organic social media management and paid advertising are different activities. Advertising campaigns, media budgets, and campaign management should be discussed separately according to your requirements.",
  },
  {
    question: "How often will you publish content?",
    answer:
      "Publishing frequency depends on the selected service scope and content plan. The schedule is discussed before work begins so that content requirements and expectations are clear.",
  },
  {
    question: "Can social media marketing help my local business?",
    answer:
      "Social media can help local businesses communicate their products, services, offers, and updates to relevant audiences. Outcomes depend on content quality, audience relevance, consistency, competition, and other factors.",
  },
  {
    question: "How do you measure social media performance?",
    answer:
      "Performance can be reviewed through relevant platform insights such as reach, impressions, engagement, video views, profile activity, clicks, and enquiries where tracking is available.",
  },
];

const relatedLinks = [
  {
    label: "Social Media Marketing",
    sub: "SOCIAL MEDIA PILLAR",
    href: "/services/social-media-marketing",
  },
  {
    label: "Virar",
    sub: "PARENT LOCATION",
    href: "/locations/virar",
  },
  {
    label: "Nalasopara Social Media",
    sub: "NEARBY LOCATION",
    href: "/locations/nalasopara/social-media-marketing",
  },
  {
    label: "Vasai Road Social Media",
    sub: "NEARBY LOCATION",
    href: "/locations/vasai-road/social-media-marketing",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
      {children}
    </p>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function VirarSocialMediaMarketingPageClient() {
  return (
    <main className="overflow-hidden bg-[#FCFAF7] text-[#0B2A52]">
      {/* 01 — HERO */}
      <section className="relative px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute -right-24 -top-20 h-[440px] w-[440px] rounded-full bg-[#C6A77A]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-[320px] w-[320px] rounded-full bg-[#DCE6EF]/60 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>Social Media Marketing · Virar</Eyebrow>

            <h1 className="max-w-3xl font-[var(--font-new-york)] text-4xl leading-[1.12] tracking-[-0.035em] sm:text-5xl lg:text-[64px]">
              Social Media Marketing
              <span className="block italic text-[#A78354]">
                for Virar Businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#66758A] sm:text-base">
              Build a more consistent social media presence with thoughtful
              content, Instagram Reels, creative design, and campaigns planned
              around your business. From festival communication to
              Jivdani-season content for Virar retail and food brands, make
              every post part of a clear content direction.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
             <Link
  href="/contact"
  title="Discuss social media marketing services with Sharp Rays"
  className="group inline-flex items-center gap-3 rounded-full bg-[#0B2A52] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24466E]"
>
                Discuss Your Social Media
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

             <Link
  href="#social-media-services"
  title="Jump to social media marketing services on this page"
  className="inline-flex items-center gap-2 rounded-full border border-[#DED8CE] bg-white/80 px-7 py-4 text-sm font-semibold text-[#0B2A52] transition hover:border-[#C6A77A]"
>
  Explore Services
  <ArrowRight size={16} />
</Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-[#788393]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A78354]" />
                Content planning
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A78354]" />
                Reels & creatives
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#A78354]" />
                Campaign management
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[550px]">
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-[#C6A77A]/25 via-white to-[#DCE6EF]/80 blur-xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-5 shadow-[0_30px_90px_rgba(11,42,82,0.10)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#EAE6DE] pb-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A78354]">
                    Social media direction
                  </p>
                  <h2 className="mt-2 font-[var(--font-new-york)] text-2xl">
                    Your brand, in motion.
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B2A52] text-[#D9BD95]">
                  <Camera size={24} />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F5F2EC] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#C6A77A]" />
                    <div className="h-2 w-2 rounded-full bg-[#D7D1C7]" />
                    <div className="h-2 w-2 rounded-full bg-[#D7D1C7]" />
                  </div>
                  <span className="text-[9px] tracking-wider text-[#8A929C]">
                    CONTENT PREVIEW
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-[1.1fr_0.9fr] gap-3">
                  <div className="flex min-h-[190px] flex-col justify-between rounded-xl bg-[#0B2A52] p-4 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-[#D9BD95]">
                      Brand storytelling
                    </span>
                    <div>
                      <div className="h-2 w-4/5 rounded-full bg-white/90" />
                      <div className="mt-2 h-2 w-3/5 rounded-full bg-white/50" />
                      <div className="mt-5 inline-flex rounded-full bg-[#D9BD95] px-3 py-2 text-[8px] font-semibold text-[#0B2A52]">
                        Explore the brand
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-rows-2 gap-3">
                    <div className="flex items-center justify-center rounded-xl bg-[#E9E1D6] text-[#A78354]">
                      <Camera size={29} />
                    </div>
                    <div className="flex items-center justify-center rounded-xl bg-[#E8EDF2] text-[#24466E]">
                      <Video size={29} />
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="flex h-12 items-center justify-center rounded-lg bg-white text-[#A78354]">
                    <Image size={17} />
                  </div>
                  <div className="flex h-12 items-center justify-center rounded-lg bg-white text-[#A78354]">
                    <CalendarDays size={17} />
                  </div>
                  <div className="flex h-12 items-center justify-center rounded-lg bg-white text-[#A78354]">
                    <MessageCircle size={17} />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { icon: Camera, label: "Instagram" },
                  { icon: Clapperboard, label: "Reels" },
                  { icon: CalendarCheck, label: "Planning" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl border border-[#EEEAE3] bg-[#FFFEFC] px-2 py-3 text-center"
                    >
                      <Icon size={17} className="mx-auto text-[#A78354]" />
                      <p className="mt-2 text-[9px] font-medium text-[#66758A]">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — DIRECT ANSWER */}
      <section className="border-y border-[#E4DED4] bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <Eyebrow>Social media marketing in Virar</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl">
              What does social media marketing include?
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#66758A]">
            Social media marketing helps businesses communicate with their
            audiences through planned content, creative design, short-form
            videos, community engagement, and campaign activities. For
            businesses in Virar, this can include Instagram marketing,
            festival-related content, Jivdani-season campaigns for retail and
            food brands, and regular communication about products and
            services. The strategy should reflect your business and the
            platforms your customers use.
          </p>
        </div>
      </section>

      {/* 03 — CHALLENGES */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <Eyebrow>Why social media needs a strategy</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] sm:text-5xl">
              Posting regularly is not the same as
              <span className="block italic text-[#A78354]">
                building a social presence.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#66758A]">
              Without a clear content direction, social media can become a
              cycle of random posts and last-minute promotions. A structured
              approach helps your brand communicate more consistently and
              make better use of each content format.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: CalendarDays,
                title: "Inconsistent Posting",
                text: "Content is published irregularly without a planned calendar or clear communication direction.",
              },
              {
                icon: Lightbulb,
                title: "Running Out of Content Ideas",
                text: "The same promotional posts are repeated because there is no defined set of content pillars.",
              },
              {
                icon: Video,
                title: "Limited Reels Content",
                text: "Products and services are not being presented through short-form video opportunities.",
              },
              {
                icon: Palette,
                title: "Inconsistent Brand Identity",
                text: "Different designs, colours, and messaging make the social media presence feel disconnected.",
              },
              {
                icon: Users,
                title: "Low Audience Interaction",
                text: "Content is published without enough attention to audience questions, interests, or engagement.",
              },
              {
                icon: BarChart3,
                title: "No Performance Review",
                text: "Businesses keep publishing without reviewing which content formats and messages are useful.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const backgrounds = [
                "from-[#F5EDE1] to-white",
                "from-[#EAF0F6] to-white",
                "from-[#EEF2EC] to-white",
              ];

              return (
                <Reveal key={item.title} delay={(index % 3) * 0.06}>
                  <article
                    className={`h-full rounded-[24px] border border-[#EAE5DC] bg-gradient-to-br ${backgrounds[index % 3]} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,42,82,0.07)]`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#A78354] shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — SERVICES */}
      <section
        id="social-media-services"
        className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-[#DED8CE] pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>What we do</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] sm:text-5xl">
                  Social media services
                  <span className="block italic text-[#A78354]">
                    for your business.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
                From content strategy and Reels to creative design and
                account management, we help organise the different parts of
                your social media presence.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const gradients = [
                "from-[#F8EDE0] to-white",
                "from-[#E8EEF6] to-white",
                "from-[#EAF1EB] to-white",
                "from-[#F0EAF4] to-white",
              ];

              return (
                <Reveal key={service.title} delay={(index % 4) * 0.05}>
                  <article
                    className={`group h-full rounded-[24px] border border-white bg-gradient-to-br ${gradients[index % 4]} p-6 shadow-[0_12px_35px_rgba(11,42,82,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(11,42,82,0.09)]`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A52] text-[#D9BD95] transition duration-300 group-hover:rotate-[-6deg] group-hover:bg-[#C6A77A] group-hover:text-[#0B2A52]">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-3 min-h-[120px] text-[12px] leading-7 text-[#66758A]">
                      {service.description}
                    </p>

                    <div className="mt-5 border-t border-[#DED8CE] pt-4">
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A78354]">
                        Included focus
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-[10px] text-[#66758A]"
                          >
                            <Check size={13} className="text-[#A78354]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — LOCAL CAMPAIGNS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-[#E4DED4] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <Eyebrow>Local content opportunities</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] sm:text-5xl">
                  Content that connects with
                  <span className="block italic text-[#A78354]">
                    Virar's local context.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
                Local relevance can make content more meaningful. We consider
                seasonal moments, audience interests, and business activities
                when planning campaigns for Virar brands.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {localCampaigns.map((campaign, index) => {
              const Icon = campaign.icon;
              const backgrounds = [
                "bg-[#F8F3EA]",
                "bg-[#EEF1F5]",
                "bg-[#EDF2EC]",
                "bg-[#F2EDF4]",
              ];

              return (
                <Reveal key={campaign.title} delay={index * 0.06}>
                  <article
                    className={`h-full rounded-[25px] border border-[#EAE5DC] ${backgrounds[index]} p-7 sm:p-9`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-semibold tracking-[0.17em] text-[#A78354]">
                        {campaign.label}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#A78354]">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3 className="mt-6 font-[var(--font-new-york)] text-2xl">
                      {campaign.title}
                    </h3>

                    <p className="mt-4 text-[12px] leading-7 text-[#66758A]">
                      {campaign.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-8 rounded-[22px] border border-[#EAE5DC] bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F3EDE3] text-[#A78354]">
                <Sparkles size={22} />
              </div>
              <div>
                <h3 className="font-[var(--font-new-york)] text-xl">
                  Local relevance, without forced promotion.
                </h3>
                <p className="mt-2 text-[12px] leading-7 text-[#66758A]">
                  Festival and Jivdani-season content should be relevant to
                  the brand, its audience, and the actual products or services
                  being offered. We plan content around those connections
                  rather than relying on generic occasion greetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CONTENT PILLARS */}
      <section className="bg-[#0B2A52] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>Content direction</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                  A content mix with
                  <span className="block italic text-[#D9BD95]">
                    more than one purpose.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-white/65 lg:justify-self-end">
                A balanced content plan gives your audience different ways
                to understand your business, discover your products, and
                interact with your brand.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contentPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.06}>
                  <article className="h-full rounded-[24px] border border-white/15 bg-white/[0.06] p-7 transition hover:border-[#D9BD95]/60 hover:bg-white/[0.09]">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#D9BD95] p-3 text-[#0B2A52]">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-white/65">
                      {pillar.description}
                    </p>
                    <div className="mt-6 border-t border-white/15 pt-4">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#D9BD95]">
                        {pillar.format}
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 — INDUSTRIES */}
      <section className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>Industries we work with</Eyebrow>
              <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                Social media for
                <span className="block italic text-[#A78354]">
                  different business needs.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#66758A]">
                Content should reflect what your business actually offers.
                We consider industry-specific audiences, products, services,
                and communication needs while planning social media activity.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.title} delay={(index % 3) * 0.06}>
                  <article className="group h-full rounded-[23px] border border-white bg-white/75 p-7 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,42,82,0.07)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2ECE2] text-[#A78354] transition group-hover:bg-[#0B2A52] group-hover:text-[#D9BD95]">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl">
                      {industry.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {industry.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 08 — PLATFORMS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Platform selection</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
              Choose platforms
              <span className="block italic text-[#A78354]">
                that fit your audience.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#66758A]">
              Not every business needs to be equally active on every
              platform. The right platform mix depends on your customers,
              content formats, business category, and marketing objectives.
              We help identify where your social media effort should be
              focused.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Camera,
                title: "Instagram",
                text: "Reels, Stories, carousels, product showcases, and visual brand communication.",
              },
              {
                icon: Users,
                title: "Facebook",
                text: "Business updates, community communication, promotional content, and local audience engagement.",
              },
              {
                icon: BriefcaseBusiness,
                title: "LinkedIn",
                text: "Professional positioning, business insights, expertise-led content, and B2B communication.",
              },
              {
                icon: Video,
                title: "Short-form Video",
                text: "Video-first content concepts that can be adapted to relevant short-form platforms.",
              },
            ].map((platform, index) => {
              const Icon = platform.icon;

              return (
                <Reveal key={platform.title} delay={index * 0.06}>
                  <article className="h-full rounded-[23px] border border-[#EAE5DC] bg-white p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2ECE2] text-[#A78354]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 font-[var(--font-new-york)] text-xl">
                      {platform.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {platform.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — PROCESS */}
      <section className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Our process</Eyebrow>
              <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                From content ideas
                <span className="block italic text-[#A78354]">
                  to a consistent presence.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#66758A]">
                A structured workflow helps keep your brand communication
                organised, relevant, and aligned with your business
                requirements.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {process.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <article className="h-full rounded-[22px] border border-white bg-white/80 p-6">
                  <span className="font-[var(--font-new-york)] text-3xl italic text-[#B89569]">
                    {item.number}
                  </span>
                  <div className="my-5 h-px w-full bg-[#E9E2D8]" />
                  <h3 className="font-[var(--font-new-york)] text-xl leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-7 text-[#66758A]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — BENEFITS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <Eyebrow>What a structured approach brings</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                  Make your social presence
                  <span className="block italic text-[#A78354]">
                    more intentional.
                  </span>
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-8 text-[#66758A] lg:justify-self-end">
                A clear content direction helps your business communicate
                consistently, use suitable formats, and understand how
                audiences respond to your social media activity.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const backgrounds = [
                "bg-[#F7F0E7]",
                "bg-[#EDF1F6]",
                "bg-[#EDF2ED]",
                "bg-[#F1EDF4]",
              ];

              return (
                <Reveal key={benefit.title} delay={index * 0.06}>
                  <article className="h-full rounded-[23px] border border-[#EAE5DC] bg-white p-7">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${backgrounds[index]} text-[#A78354]`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-6 font-[var(--font-new-york)] text-xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                      {benefit.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 — PRICING */}
      <section className="bg-[#F0EDE6] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <Eyebrow>Social media marketing investment</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
                  A starting point for
                  <span className="block italic text-[#A78354]">
                    consistent social media.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
                Choose a social media approach based on your content needs,
                platforms, creative requirements, and business objectives.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-[30px] border border-[#E5DED3] bg-[#FCFAF7] shadow-[0_20px_60px_rgba(11,42,82,0.06)]">
              <div className="grid lg:grid-cols-[1fr_0.85fr]">
                <div className="p-8 sm:p-12">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A77A]/40 bg-[#F6F0E7] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#98754B]">
                    <Sparkles size={13} />
                    Starting monthly investment
                  </span>

                  <h3 className="mt-7 font-[var(--font-new-york)] text-3xl sm:text-4xl">
                    Social Media Marketing
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-8 text-[#66758A]">
                    A starting point for businesses looking to organise
                    their social media presence with planned content,
                    creative communication, and consistent management.
                  </p>

                  <div className="mt-8 flex items-end gap-2">
                    <span className="font-[var(--font-new-york)] text-5xl text-[#0B2A52] sm:text-6xl">
                      ₹14,999
                    </span>
                    <span className="pb-2 text-sm text-[#7C8795]">
                      / month onwards
                    </span>
                  </div>

                  <p className="mt-3 text-[10px] leading-6 text-[#87909C]">
                    Final scope and pricing depend on platforms, content
                    volume, creative formats, and management requirements.
                  </p>

                 <Link
  href="/contact"
  title="Request a social media marketing quote from Sharp Rays"
  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0B2A52] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#24466E]"
>
                    Request a Quote
                    <ArrowUpRight size={17} />
                  </Link>
                </div>

                <div className="bg-[#0B2A52] p-8 text-white sm:p-12">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9BD95]">
                    Scope can be planned around
                  </p>

                  <div className="mt-7 space-y-5">
                    {[
                      "Selected social media platforms",
                      "Content strategy and calendar",
                      "Post and creative requirements",
                      "Reels and short-form video needs",
                      "Publishing and management scope",
                      "Performance review and reporting",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-[#D9BD95]"
                        />
                        <p className="text-sm leading-6 text-white/85">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 border-t border-white/15 pt-6">
                    <p className="text-[11px] leading-7 text-white/60">
                      Advertising spend, specialised production, and
                      additional requirements should be scoped separately
                      where applicable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12 — WHY SHARP RAYS */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Eyebrow>Why Sharp Rays</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-4xl leading-tight sm:text-5xl">
              More than just
              <span className="block italic text-[#A78354]">
                publishing posts.
              </span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#66758A]">
              We approach social media as an ongoing communication channel
              for your business. Content planning, creative direction,
              audience relevance, and performance review all contribute to
              a more organised presence.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Business-focused planning",
                text: "Content direction connected to your products, services, and objectives.",
              },
              {
                icon: Palette,
                title: "Consistent creative identity",
                text: "Visual communication that supports a recognisable brand presence.",
              },
              {
                icon: Video,
                title: "Reels-led opportunities",
                text: "Short-form video concepts suited to your business and audience.",
              },
              {
                icon: CalendarDays,
                title: "Planned content calendar",
                text: "A structured approach to publishing and seasonal opportunities.",
              },
              {
                icon: Users,
                title: "Audience understanding",
                text: "Content developed with customer interests and questions in mind.",
              },
              {
                icon: BarChart3,
                title: "Performance review",
                text: "Use available insights to guide content improvements.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[21px] border border-[#EAE5DC] bg-white p-6"
                >
                  <Icon size={22} className="text-[#A78354]" />
                  <h3 className="mt-4 font-[var(--font-new-york)] text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-6 text-[#66758A]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13 — RELATED SERVICES */}
      <section className="bg-[#F0EDE6] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>Connected digital services</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl">
              Build a stronger digital presence.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#66758A]">
              Connect social media marketing with other digital services
              to support your website, search visibility, and business
              communication.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SEO Services",
                text: "Improve your website's search visibility and organic reach.",
                href: "/locations/virar/seo",
              },
              {
                title: "Website Development",
                text: "Build a professional website that supports your brand and enquiries.",
                href: "/locations/virar/website-development",
              },
              {
                title: "Performance Marketing",
                text: "Plan paid campaigns around defined business objectives.",
                href: "/locations/virar/performance-marketing",
              },
              {
                title: "AI Automation",
                text: "Explore workflows that simplify repetitive business tasks.",
                href: "/locations/virar/ai-automation",
              },
              {
                title: "AI Video & Creative",
                text: "Explore AI-assisted video and creative content solutions.",
                href: "/locations/virar/ai-video-and-creative",
              },
              {
                title: "Virar Location Page",
                text: "Explore digital marketing services for businesses in Virar.",
                href: "/locations/virar",
              },
            ].map((item) => (
              <Link
  key={item.title}
  href={item.href}
  title={`Explore ${item.title} for businesses in Virar`}
  className="group flex items-center justify-between gap-4 rounded-2xl border border-[#DED8CE] bg-[#FCFAF7] p-6 transition hover:border-[#C6A77A] hover:bg-white"
>
                <div>
                  <h3 className="font-[var(--font-new-york)] text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-6 text-[#66758A]">
                    {item.text}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#A78354] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — FAQ */}
      <section
        id="virar-social-media-faq"
        className="bg-[#FCFAF7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-[#E4DED4] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <Eyebrow>Frequently asked questions</Eyebrow>
                <h2 className="font-[var(--font-new-york)] text-4xl leading-[1.1] text-[#0B2A52] sm:text-5xl">
                  A little more
                  <span className="block italic text-[#A78354]">
                    clarity before you begin.
                  </span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-8 text-[#66758A] lg:justify-self-end">
                Useful answers about social media marketing, Instagram
                Reels, festival campaigns, and content management for
                businesses in Virar.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.025}>
                <article className="h-full border-b border-[#E4DED4] py-7">
                  <div className="flex items-start gap-4">
                    <span className="font-[var(--font-new-york)] text-2xl italic text-[#C6A77A]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-[var(--font-new-york)] text-lg leading-snug text-[#0B2A52]">
                        {faq.question}
                      </h3>
                      <p className="mt-3 text-[12px] leading-7 text-[#66758A]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 15 — INTERNAL LINKS */}
      <section className="bg-[#F0EDE6] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow>Explore related pages</Eyebrow>
            <h2 className="font-[var(--font-new-york)] text-3xl text-[#0B2A52] sm:text-4xl">
              Continue exploring Sharp Rays.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#66758A]">
              Explore our social media marketing service pillar, the Virar
              location page, and social media services for nearby areas.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  title={`Explore ${item.label}`}
                  className="group flex items-center justify-between rounded-2xl border border-[#DED8CE] bg-[#FCFAF7] p-5 transition hover:border-[#C6A77A] hover:bg-white"
                >
                  <span>
                    <span className="block text-[8px] font-semibold tracking-[0.17em] text-[#A78354]">
                      {item.sub}
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-[#0B2A52]">
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-[#A78354] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>

            <Link
              href="/locations"
              title="Explore all Sharp Rays locations"
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[#0B2A52] hover:text-[#A78354]"
            >
              Explore all locations <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 16 — FINAL CTA */}
      <section className="bg-[#FCFAF7] px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#0B2A52] px-7 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-28 h-72 w-72 rounded-full bg-[#C6A77A]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-[#53769B]/30 blur-[90px]" />

          <Reveal className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#D9BD95]">
              <Sparkles size={25} />
            </div>

            <Eyebrow>Let's grow your social presence</Eyebrow>

            <h2 className="font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Give your brand a more meaningful social presence.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/65">
              Tell us about your business, audience, and content goals.
              Let's plan a social media approach that fits your brand and
              the customers you want to reach.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
  href="/contact"
  title="Discuss your social media marketing project with Sharp Rays"
  className="inline-flex items-center gap-3 rounded-full bg-[#D9BD95] px-7 py-4 text-sm font-semibold text-[#0B2A52] transition hover:bg-white"
>
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>

              <Link
  href="/locations/virar"
  title="Explore digital marketing services for businesses in Virar"
  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
>
                Explore Virar Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
