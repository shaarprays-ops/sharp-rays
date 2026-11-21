
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Gamepad2,
  Trophy,
  CircleDot,
  Users,
  CalendarDays,
  MapPin,
  Sparkles,
  CheckCircle2,
  Monitor,
  Target,
  Zap,
  PartyPopper,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    icon: CircleDot,
    title: "Pickleball",
    description:
      "A space for visitors to discover the pickleball experience and make plans to get on the court and play.",
    tags: ["Sports", "Competition", "Play"],
  },
  {
    number: "02",
    icon: Gamepad2,
    title: "PS5 Gaming",
    description:
      "A gaming experience where friends can book time, meet up and enjoy console gaming together.",
    tags: ["Console Gaming", "Friends", "Entertainment"],
  },
  {
    number: "03",
    icon: Target,
    title: "Pool Table",
    description:
      "A social gaming option for visitors who want to book a session and enjoy a game of pool.",
    tags: ["Pool", "Social Gaming", "Leisure"],
  },
];

const approach = [
  {
    number: "01",
    title: "Understanding the Experience",
    description:
      "We explored the idea behind Aftermatch as a destination that brings pickleball, gaming and social entertainment together.",
  },
  {
    number: "02",
    title: "Organising the Activities",
    description:
      "We focused on presenting the different activities clearly, helping visitors understand what they can experience at the venue.",
  },
  {
    number: "03",
    title: "Designing the Digital Journey",
    description:
      "The website experience was planned around discovery, activity information and the journey from exploring an experience to planning a visit.",
  },
  {
    number: "04",
    title: "Developing the Website",
    description:
      "We brought the content structure and visual direction together to create a dedicated digital presence for Aftermatch.",
  },
];

const projectScope = [
  "Website design and development",
  "Activity and experience presentation",
  "Gaming and sports content structure",
  "Booking-oriented information flow",
  "Responsive website experience",
];

const faqs = [
  {
    question: "What is Aftermatch?",
    answer:
      "Aftermatch is a social sports and gaming destination where visitors can enjoy activities such as pickleball, PS5 gaming and pool.",
  },
  {
    question: "What activities can visitors explore at Aftermatch?",
    answer:
      "The experiences highlighted in this project include pickleball, PS5 gaming and pool-table sessions.",
  },
  {
    question: "Can visitors book gaming experiences?",
    answer:
      "The concept includes booking experiences such as PS5 gaming and pool-table sessions so visitors can plan a visit and play.",
  },
  {
    question: "Why does a venue like Aftermatch need a website?",
    answer:
      "A website gives visitors one place to discover the venue, understand its activities and find the information they need before planning a visit.",
  },
  {
    question: "What did Sharp Rays work on for Aftermatch?",
    answer:
      "The project focused on website design and development, including the presentation of activities, content structure and the overall digital experience.",
  },
  {
    question: "Can Sharp Rays build websites for sports and entertainment venues?",
    answer:
      "Yes. Sharp Rays creates websites for businesses in sports, entertainment and leisure, with a focus on clear presentation and useful visitor experiences.",
  },
];

export default function AftermatchWebsiteCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#FAF9F6] text-[#122847]">

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-[#9CB8E8]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#C6A77A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">

          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#8A806F]">
            <Link href="/work" className="transition hover:text-[#122847]">
              Our Work
            </Link>
            <span>/</span>
            <span>Aftermatch</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE5EF] bg-white px-4 py-2 text-xs font-medium text-[#55729A]">
                <Gamepad2 size={15} />
                Sports · Gaming · Website Development
              </div>

              <h1 className="max-w-[700px] font-[var(--font-new-york)] text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Play More. Connect More. Make It Aftermatch.
              </h1>

              <p className="mt-7 max-w-[570px] text-base leading-8 text-[#6D7D88] sm:text-lg">
                A digital experience for a social sports and gaming
                destination, bringing pickleball, PS5 gaming and pool
                together under one online presence.
              </p>

              <p className="mt-4 max-w-[540px] text-sm leading-7 text-[#89919A]">
                Designed to help visitors discover the activities,
                explore the experiences and plan time at the venue.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#263F5D]"
                >
                  Start a Project
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D8CDBF] bg-white px-6 py-3.5 text-sm font-semibold text-[#122847] transition-all duration-300 hover:border-[#122847]"
                >
                  Explore Our Work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[28px] bg-[#122847] p-7 text-white sm:p-10">

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#547BB8]/30 blur-3xl" />
                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#C6A77A]/20 blur-3xl" />

                <div className="relative">

                  <div className="flex items-center justify-between border-b border-white/15 pb-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A77A]">
                      The Aftermatch Experience
                    </span>
                    <Sparkles size={21} className="text-[#C6A77A]" />
                  </div>

                  <div className="py-12 sm:py-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#AFC7EC]">
                      Your Next Play Starts Here
                    </p>

                    <h2 className="mt-5 font-[var(--font-new-york)] text-5xl leading-none tracking-tight sm:text-7xl">
                      AFTER
                      <br />
                      MATCH<span className="text-[#AFC7EC]">.</span>
                    </h2>

                    <p className="mt-5 max-w-[330px] text-sm leading-7 text-white/65">
                      From court time to console time, discover a
                      different way to spend time with friends.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-white/15 pt-6 sm:gap-3">
                    {[
                      { icon: CircleDot, label: "Pickleball" },
                      { icon: Gamepad2, label: "PS5 Gaming" },
                      { icon: Target, label: "Pool Table" },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/15 bg-white/5 px-2 py-5 text-center sm:px-4"
                        >
                          <Icon
                            size={23}
                            strokeWidth={1.6}
                            className="mx-auto text-[#AFC7EC]"
                          />
                          <p className="mt-3 text-[10px] font-semibold text-white/80 sm:text-xs">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Sport · Gaming · Social
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
                      <ArrowUpRight size={18} className="text-[#C6A77A]" />
                    </div>
                  </div>

                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
                Aftermatch · Website Development
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-y border-[#E9E4DA] bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              Project Overview
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-4xl">
              One destination. Different ways to play.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6D7D88]">
              Aftermatch brings together the energy of sports and
              social gaming in one destination. Visitors can explore
              activities such as pickleball, PS5 gaming and pool,
              making it a place to enjoy different experiences with
              friends.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6D7D88]">
              The website project focused on presenting these
              experiences clearly and creating a digital journey
              that helps visitors discover the activities and plan
              their time at the venue.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#55729A]">
              Explore the Experiences
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Not just one game. A whole lot of ways to have fun.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              The website brings the different activities into one
              organised presentation, helping visitors find the
              experience that suits their mood.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-[22px] border border-[#E8E2D8] bg-white p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDF2F8] text-[#55729A]">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <span className="text-xs tracking-widest text-[#B5A58F]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#6D7D88]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#F2F4F6] px-3 py-2 text-[10px] font-medium text-[#65758A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* WEBSITE SHOWCASE */}
      <section className="bg-[#EEF1F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#55729A]">
                Website Development
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                Turning the excitement of play into a digital experience.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                The Aftermatch website brings its sports and gaming
                experiences into one central digital destination.
                Visitors can explore the activities and understand
                the different ways to spend time at the venue.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
                The experience was approached with a focus on activity
                discovery, clear information and a journey that connects
                browsing with planning a visit.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Clear presentation of activities",
                  "Sports and gaming-focused content",
                  "Booking-oriented information flow",
                  "Responsive website experience",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#55729A]"
                    />
                    <span className="text-sm text-[#53616E]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#263F5D]"
              >
                Build Your Website
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* ACTUAL AFTERMATCH WEBSITE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[24px] border border-[#DCE3EB] bg-white p-3 shadow-[0_20px_60px_rgba(18,40,71,0.09)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-white">
                  <Image
                    src="/services/webdev/aftermatch_web.webp"
                    alt="Aftermatch pickleball and gaming website developed by Sharp Rays"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#55729A]">
                Aftermatch · Website Development
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BOOKING JOURNEY */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              The Visitor Journey
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              From discovering an activity to planning a visit.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
              A venue website should help visitors move from curiosity
              to action. The experience is organised around a simple
              discovery and booking-oriented journey.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EDF2F8] text-[#55729A]">
                <Sparkles size={23} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A28B68]">
                Step 01
              </p>
              <h3 className="mt-3 font-[var(--font-new-york)] text-2xl">
                Discover
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                Explore the sports and gaming activities available
                at Aftermatch.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EDF2F8] text-[#55729A]">
                <CalendarDays size={23} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A28B68]">
                Step 02
              </p>
              <h3 className="mt-3 font-[var(--font-new-york)] text-2xl">
                Plan & Book
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                Choose an experience and plan a session for your
                visit.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EDF2F8] text-[#55729A]">
                <PartyPopper size={23} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#A28B68]">
                Step 03
              </p>
              <h3 className="mt-3 font-[var(--font-new-york)] text-2xl">
                Show Up & Play
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                Visit the venue and enjoy your chosen sports or
                gaming experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="bg-[#F0EDF0] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#55729A]">
                Design Direction
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                A digital experience with the energy of play.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                A sports and gaming destination needs a digital
                presence that feels inviting and easy to explore.
                The design direction connects the excitement of
                the activities with a clear and structured interface.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-[22px] bg-[#122847] p-7 text-white">
                <Gamepad2 size={27} className="text-[#AFC7EC]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Playful Identity
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  A presentation that reflects the social and
                  entertainment-led nature of the venue.
                </p>
              </div>

              <div className="rounded-[22px] bg-white p-7 text-[#122847]">
                <Zap size={27} className="text-[#55729A]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Activity Discovery
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  Helping visitors understand the different ways
                  they can spend their time.
                </p>
              </div>

              <div className="rounded-[22px] bg-white p-7 text-[#122847]">
                <Users size={27} className="text-[#55729A]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Social Experience
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  A digital presence built around shared activities
                  and experiences with friends.
                </p>
              </div>

              <div className="rounded-[22px] bg-[#E4EAF2] p-7 text-[#122847]">
                <MapPin size={27} className="text-[#55729A]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Visit Planning
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  Bringing activity information and visit planning
                  into a connected journey.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#122847] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
              Our Approach
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Bringing sports, gaming and social experiences together.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
              Our approach focused on understanding the venue's
              different activities and presenting them through
              one connected website experience.
            </p>
          </div>

          <div>
            {approach.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid grid-cols-[48px_1fr] gap-5 border-b border-white/15 py-7 first:pt-0 last:border-0"
              >
                <span className="pt-1 text-sm font-medium text-[#C6A77A]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT SCOPE */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              Project Scope
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              The digital foundation behind the experience.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
              The project brings together the website elements
              needed to introduce Aftermatch, present its activities
              and help visitors plan their experience.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#E8E2D8] bg-white p-7 sm:p-9">
            <div className="space-y-6">
              {projectScope.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF2F8] text-xs text-[#55729A]">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium text-[#53616E]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PROJECT TAKEAWAY */}
      <section className="bg-[#EEF1F5] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px] text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#55729A]">
            <Trophy size={23} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#55729A]">
            The Bigger Picture
          </p>

          <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Great experiences deserve a place online, too.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-8 text-[#6D7D88] sm:text-base">
            Aftermatch brings different ways to play together in one
            destination. The website gives visitors a central place
            to discover those experiences and plan their next visit.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1100px]">

          <div className="mx-auto mb-14 max-w-[650px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A28B68]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight text-[#17334D] sm:text-5xl">
              A little more clarity before you begin.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              A few things worth knowing about the Aftermatch website
              and digital experiences for sports and gaming venues.
            </p>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.025 }}
                className="flex h-full gap-4 border-t border-[#DCD2C8] py-7"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE2D9] text-[11px] font-semibold text-[#927B5C]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-[var(--font-new-york)] text-[18px] leading-snug text-[#17334D] sm:text-[20px]">
                    {faq.question}
                  </h3>

                  <p className="mt-3 text-[11px] leading-6 text-[#6D7D88] sm:text-[12px] sm:leading-7">
                    {faq.answer}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[#122847] px-7 py-16 text-center text-white sm:px-12 sm:py-20">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#AFC7EC]">
            <Gamepad2 size={23} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Have a business or venue to build?
          </p>

          <h2 className="mx-auto mt-5 max-w-[750px] font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Let's create a digital experience people want to explore.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-7 text-white/65">
            From sports venues to entertainment destinations,
            let's build a website that brings your experience to life.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#122847] transition hover:bg-[#F1EEE8]"
          >
            Start a Project
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </section>

      {/* BACK TO WORK */}
      <div className="px-5 pb-12 text-center sm:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6D7D88] transition hover:text-[#122847]"
        >
          <ArrowRight size={16} className="rotate-180" />
          Back to Our Work
        </Link>
      </div>

    </main>
  );
}
