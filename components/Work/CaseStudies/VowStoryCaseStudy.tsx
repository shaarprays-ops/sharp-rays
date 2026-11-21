
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Palette,
  Share2,
  Sparkles,
  Camera,
  Heart,
} from "lucide-react";

const socialImage = "/services/social/vow_social.webp";
const websiteImage = "/services/webdev/vow-story_web.webp";

const services = [
  {
    number: "01",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Managing the brand's social media presence through content planning, creative direction and event-focused communication for weddings, launches and curated experiences.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Website Development",
    description:
      "Developing a visually led website that introduces Vow Story, presents its event experiences and gives visitors a dedicated place to explore the brand.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Digital Brand Presentation",
    description:
      "Connecting the website and social media presence through consistent visual communication and a considered presentation of the brand's experiences.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understanding the Brand",
    description:
      "We started by understanding Vow Story's event-focused identity and the different experiences it brings together, from weddings to brand launches.",
  },
  {
    number: "02",
    title: "Creating Social Content",
    description:
      "We managed the social media presence with content planning and creative direction, helping communicate different event formats through a cohesive visual approach.",
  },
  {
    number: "03",
    title: "Developing the Website",
    description:
      "We developed a website to give Vow Story a dedicated digital destination where visitors can discover the brand and explore its event experiences.",
  },
  {
    number: "04",
    title: "Connecting the Digital Experience",
    description:
      "We approached social media and the website as connected brand touchpoints, creating a more consistent way for people to discover and understand Vow Story.",
  },
];

const projectDetails = [
  "Social media management",
  "Event-focused content planning",
  "Website design and development",
  "Digital brand presentation",
];

const faqs = [
  {
    question: "What services did Sharp Rays provide for Vow Story?",
    answer:
      "Sharp Rays worked on Vow Story's social media management and website development, bringing both digital touchpoints together as part of the brand's online presence.",
  },
  {
    question: "What type of brand is Vow Story?",
    answer:
      "Vow Story is an event-focused brand covering weddings, brand launches and curated experiences.",
  },
  {
    question: "Why is social media important for an event brand?",
    answer:
      "Social media helps event brands present their experiences, communicate different event formats and give audiences a visual way to discover their work.",
  },
  {
    question: "Why does an event brand need a website?",
    answer:
      "A website gives an event brand a dedicated place to introduce its identity, present its experiences and help visitors understand the services it offers.",
  },
  {
    question: "How do social media and a website work together?",
    answer:
      "Social media supports discovery and engagement, while the website provides a dedicated destination to explore the brand and its experiences in greater detail.",
  },
  {
    question: "Can Sharp Rays manage both services for event businesses?",
    answer:
      "Yes. Sharp Rays provides website development and social media management to help event businesses create a consistent and professional digital presence.",
  },
];

export default function VowStoryCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#FAF9F6] text-[#122847]">

     
{/* HERO */}
<section
  className="relative isolate overflow-hidden bg-[#FAF9F6] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32"
  aria-labelledby="vow-story-hero-heading"
>
  {/* Background details */}
  <div className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[480px] w-[480px] rounded-full border border-[#D8C7B1]/40" />
  <div className="pointer-events-none absolute -right-16 top-12 -z-10 h-[340px] w-[340px] rounded-full bg-[#E8DED0]/35 blur-[100px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-[#EAE6DE]/50 blur-[100px]" />

  <div className="mx-auto max-w-[1240px]">

    {/* Breadcrumb */}
    <div className="mb-12 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8A806F]">
      <Link href="/work" className="transition hover:text-[#122847]">
        Our Work
      </Link>
      <ArrowRight size={11} />
      <span className="text-[#122847]">Vow Story</span>
    </div>

    <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E4D9CC] bg-white/80 px-4 py-2.5">
          <Sparkles size={14} className="text-[#A28B68]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8C7555]">
            Events · Weddings · Brand Experiences
          </span>
        </div>

        <h1
          id="vow-story-hero-heading"
          className="mt-8 max-w-[700px] font-[var(--font-new-york)] text-[42px] font-normal leading-[1.08] tracking-[-0.045em] text-[#122847] sm:text-[54px] lg:text-[66px]"
        >
          Every experience deserves a{" "}
          <span className="text-[#B79A72]">beautiful digital story.</span>
        </h1>

        <p className="mt-7 max-w-[550px] text-[14px] leading-[2] text-[#6D7D88] sm:text-[15px]">
          A connected digital presence for Vow Story, bringing
          together social media management and website development
          to present weddings, brand launches and curated experiences.
        </p>

        <p className="mt-4 max-w-[530px] text-[12px] leading-[1.95] text-[#87919A] sm:text-[13px]">
          From event-led social content to a dedicated website,
          the focus was on creating a consistent way for people
          to discover and explore the brand.
        </p>

        {/* Service tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-5 py-3 text-[11px] font-medium text-white">
            <Share2 size={14} />
            Social Media Management
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#E4D9CC] bg-white px-5 py-3 text-[11px] font-medium text-[#122847]">
            <Globe size={14} className="text-[#A28B68]" />
            Website Development
          </span>
        </div>

        {/* CTA */}
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#122847] px-6 text-[12px] font-medium text-white transition hover:bg-[#254362]"
          >
            Start a Project
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

     <Link
  href="#project-overview"
  title="Explore the Vow Story project overview"
  className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DED3C6] bg-white px-6 text-[12px] font-medium text-[#122847] transition hover:border-[#B79A72]"
>
  Explore the Project
  <ArrowRight size={15} className="text-[#A28B68]" />
</Link>
        </div>
      </motion.div>

      {/* RIGHT — EVENT BRAND CONCEPT PANEL, NO IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.12 }}
        className="relative mx-auto w-full max-w-[510px]"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-[#E8DED2] bg-[#F1EDE6] p-6 shadow-[0_25px_70px_-38px_rgba(18,40,71,0.22)] sm:p-9">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#C8B59D]/50" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#C8B59D]/40" />

          <div className="relative">

            {/* Panel heading */}
            <div className="flex items-center justify-between border-b border-[#DCD2C6] pb-6">
              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#967D5D]">
                The Vow Story Experience
              </span>
              <Sparkles size={19} className="text-[#A28B68]" />
            </div>

            {/* Editorial statement */}
            <div className="py-12 sm:py-14">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#968775]">
                Moments Worth Remembering
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-[45px] leading-[1.02] tracking-[-0.045em] text-[#122847] sm:text-[57px]">
                Stories
                <br />
                <span className="italic text-[#A28B68]">
                  Made
                </span>
                <br />
                Memorable.
              </h2>

              <p className="mt-6 max-w-[300px] text-[11px] leading-[1.9] text-[#71808A]">
                A connected digital identity for experiences
                that bring people, occasions and brands together.
              </p>
            </div>

            {/* Experience categories */}
            <div className="grid grid-cols-3 gap-2.5 border-t border-[#DCD2C6] pt-6">

              <div className="rounded-2xl border border-[#E5DCD0] bg-white/80 px-3 py-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E9DF] text-[#927B5C]">
                  <Heart size={18} strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-[10px] font-semibold text-[#122847]">
                  Weddings
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5DCD0] bg-white/80 px-3 py-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E9DF] text-[#927B5C]">
                  <Sparkles size={18} strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-[10px] font-semibold text-[#122847]">
                  Launches
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5DCD0] bg-white/80 px-3 py-5 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E9DF] text-[#927B5C]">
                  <Camera size={18} strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-[10px] font-semibold text-[#122847]">
                  Experiences
                </p>
              </div>

            </div>

            {/* Bottom signature */}
            <div className="mt-6 flex items-center justify-between border-t border-[#DCD2C6] pt-5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#967D5D]">
                Identity · Moments · Stories
              </span>
              <Palette size={17} className="text-[#A28B68]" />
            </div>

          </div>
        </div>

        <p className="mt-4 text-right text-[9px] uppercase tracking-[0.2em] text-[#8A806F]">
          Vow Story · Digital Brand Presentation
        </p>
      </motion.div>

    </div>

    {/* PROJECT DETAILS */}
    <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E5DED4] pt-8 sm:grid-cols-4">
      {[
        ["Client", "Vow Story"],
        ["Industry", "Events & Experiences"],
        ["Services", "Website & Social"],
        ["Project Focus", "Digital Presence"],
      ].map(([label, value]) => (
        <div key={label}>
          <p className="text-[9px] uppercase tracking-[0.18em] text-[#9A8A77]">
            {label}
          </p>
          <p className="mt-2 text-[12px] font-medium text-[#122847] sm:text-[13px]">
            {value}
          </p>
        </div>
      ))}
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
              Different experiences. One connected brand identity.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6D7D88]">
              Event brands communicate through experiences, emotions and
              visual storytelling. Their digital presence needs to reflect
              that variety while maintaining a recognisable brand identity.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6D7D88]">
              For Vow Story, Sharp Rays worked across social media management
              and website development. The project brought together event-led
              content and a dedicated website to create a more connected
              digital presentation of the brand.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              What We Did
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Building a digital presence around experiences.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              Our work focused on bringing Vow Story's social media and
              website together through a consistent digital presentation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-[22px] border border-[#E8E2D8] bg-white p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <span className="text-xs tracking-widest text-[#B5A58F]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#6D7D88]">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* SOCIAL MEDIA SHOWCASE */}
      <section className="bg-[#F1EEE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
                01 / Social Media Management
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                Communicating experiences through visual storytelling.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                We managed Vow Story's social media presence with a focus on
                event-led content and creative presentation. From weddings
                to brand launches, the content direction was designed to
                bring different experiences together under one recognisable
                brand identity.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Social media management",
                  "Event-focused content planning",
                  "Creative direction and visual communication",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#A28B68]"
                    />
                    <span className="text-sm text-[#53616E]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[24px] border border-[#E8E2D8] bg-white p-2"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[18px] bg-[#F1EEE8]">
                <Image
                  src={socialImage}
                  alt="Vow Story social media management project showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WEBSITE SHOWCASE */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[24px] border border-[#E8E2D8] bg-white p-2"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[18px] bg-[#F1EEE8]">
                <Image
                  src={websiteImage}
                  alt="Vow Story website development project showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
                02 / Website Development
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                A dedicated destination for every experience.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                We developed a website for Vow Story to bring its identity
                and event experiences into one dedicated online destination.
                The website provides a structured way for visitors to explore
                the brand and understand its range of experiences.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Dedicated brand website",
                  "Event and experience presentation",
                  "Structured digital brand experience",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#A28B68]"
                    />
                    <span className="text-sm text-[#53616E]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND EXPERIENCES */}
      <section className="bg-[#F1EEE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              Brand & Experiences
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Bringing different occasions under one identity.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
              The digital communication was shaped around the different
              experiences associated with Vow Story, keeping the brand
              presentation connected across its event formats.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-[22px] border border-[#E5DDD2] bg-white p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                <Heart size={21} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-[var(--font-new-york)] text-2xl">
                Weddings
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                Presenting wedding experiences through a thoughtful visual
                brand presentation.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#E5DDD2] bg-white p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                <Sparkles size={21} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-[var(--font-new-york)] text-2xl">
                Brand Launches
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                Communicating launch experiences as part of the brand's
                wider event identity.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#E5DDD2] bg-white p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                <Camera size={21} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-[var(--font-new-york)] text-2xl">
                Curated Experiences
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                Bringing different event formats together through consistent
                brand communication.
              </p>
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
              A connected approach to digital storytelling.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
              We considered how Vow Story's website and social media could
              work together to communicate the brand and its different
              experiences.
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
              The work behind the digital presence.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
              The project brought together website development and social
              media management to support Vow Story's online brand
              presentation.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#E8E2D8] bg-white p-7 sm:p-9">
            <div className="space-y-6">
              {projectDetails.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3EEE7] text-xs text-[#927B5C]">
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
      <section className="bg-[#F1EEE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px] text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#927B5C]">
            <Sparkles size={23} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
            The Bigger Picture
          </p>

          <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Every experience deserves a thoughtful digital story.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-8 text-[#6D7D88] sm:text-base">
            For an event brand, the digital experience is an important part
            of how people discover and understand its work. By bringing
            social media management and website development together,
            Sharp Rays helped create a more connected online presentation
            for Vow Story.
          </p>

        </div>
      </section>

      {/* FAQ - SAME NUMBERED, ALWAYS-VISIBLE STYLE */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1100px]">

          <div className="mx-auto mb-14 max-w-[650px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A28B68]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight text-[#17334D] sm:text-5xl">
              A little more clarity before you begin.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              A few things worth knowing about the project and the digital
              services behind it.
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

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Have a project in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-[750px] font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Let's create a digital presence people remember.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-7 text-white/65">
            From website development to social media management, let's
            create a meaningful online presence for your brand.
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
