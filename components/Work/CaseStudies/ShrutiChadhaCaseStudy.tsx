
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
} from "lucide-react";

const websiteImage = "/services/webdev/shruti_chadha_web.webp";
const socialImage = "/services/social/shruti_social.webp";

const services = [
  {
    number: "01",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Managing the social media presence with planned content, creative direction and a consistent visual presentation that reflects the interior design practice.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Website Development",
    description:
      "Creating a dedicated website to introduce the practice, showcase its digital presence and give potential clients a place to explore the brand.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Digital Brand Presentation",
    description:
      "Bringing the website and social media presence together through a considered visual approach and consistent brand communication.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understanding the Brand",
    description:
      "We began by understanding Shruti Chaddha's interior design practice and how its identity, work and creative perspective should be communicated online.",
  },
  {
    number: "02",
    title: "Managing Social Media",
    description:
      "We managed the social media presence with attention to content planning, creative presentation and a consistent visual direction.",
  },
  {
    number: "03",
    title: "Developing the Website",
    description:
      "We developed a website to give the brand a dedicated digital destination and a structured way to present its interior design practice.",
  },
  {
    number: "04",
    title: "Connecting the Experience",
    description:
      "We treated the website and social media as connected brand touchpoints, creating a more consistent experience for people discovering the practice.",
  },
];

const projectDetails = [
  "Social media management",
  "Social media content planning",
  "Website development",
  "Digital brand presentation",
];

const faqs = [
  {
    question: "What work did Sharp Rays do for Shruti Chaddha?",
    answer:
      "Sharp Rays managed Shruti Chaddha's social media presence and developed her website, bringing both digital touchpoints together as part of one project.",
  },
  {
    question: "Why is social media important for an interior designer?",
    answer:
      "Social media gives interior designers a platform to present their design perspective, share their work and help potential clients discover their practice.",
  },
  {
    question: "Why does an interior designer need a website?",
    answer:
      "A website provides a dedicated online destination where visitors can understand the design practice, explore its work and find relevant information about the brand.",
  },
  {
    question: "Why combine website development with social media management?",
    answer:
      "Social media and a website serve different purposes. Social media supports discovery and engagement, while the website provides a dedicated space to explore the brand in greater detail.",
  },
  {
    question: "Can Sharp Rays manage both services for my business?",
    answer:
      "Yes. Sharp Rays offers website development and social media management to help businesses build a consistent and well-structured digital presence.",
  },
  {
    question: "Which industries can benefit from these services?",
    answer:
      "Interior designers, architects, consultants, professional service providers and other businesses can benefit from a well-presented website and consistently managed social media presence.",
  },
];

export default function ShrutiChadhaCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#FAF9F6] text-[#122847]">

     
{/* HERO */}
<section
  className="relative isolate overflow-hidden bg-[#FAF9F6] px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12 lg:pb-28 lg:pt-32"
  aria-labelledby="shruti-hero-heading"
>
  {/* Background decoration */}
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
      <span className="text-[#122847]">Shruti Chaddha</span>
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
            Interior Design · Digital Presence
          </span>
        </div>

        <h1
          id="shruti-hero-heading"
          className="mt-8 max-w-[700px] font-[var(--font-new-york)] text-[42px] font-normal leading-[1.08] tracking-[-0.045em] text-[#122847] sm:text-[54px] lg:text-[66px]"
        >
          Where thoughtful design meets a{" "}
          <span className="text-[#B79A72]">thoughtful digital presence.</span>
        </h1>

        <p className="mt-7 max-w-[550px] text-[14px] leading-[2] text-[#6D7D88] sm:text-[15px]">
          A connected digital experience for interior designer
          Shruti Chaddha, bringing together social media management
          and website development under one considered brand direction.
        </p>

        <p className="mt-4 max-w-[530px] text-[12px] leading-[1.95] text-[#87919A] sm:text-[13px]">
          From presenting the design practice on social media to
          creating a dedicated website, the focus was on making
          the brand easier to discover and explore online.
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
            href="/work"
            className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-[#DED3C6] bg-white px-6 text-[12px] font-medium text-[#122847] transition hover:border-[#B79A72]"
          >
            Explore Our Work
            <ArrowRight size={15} className="text-[#A28B68]" />
          </Link>
        </div>
      </motion.div>

      {/* RIGHT — EDITORIAL BRAND PANEL, NO IMAGE */}
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

            {/* Top label */}
            <div className="flex items-center justify-between border-b border-[#DCD2C6] pb-6">
              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#967D5D]">
                A Connected Brand Experience
              </span>
              <Sparkles size={19} className="text-[#A28B68]" />
            </div>

            {/* Main statement */}
            <div className="py-12 sm:py-14">
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#968775]">
                Shruti Chaddha
              </p>

              <h2 className="mt-5 font-[var(--font-new-york)] text-[43px] leading-[1.04] tracking-[-0.045em] text-[#122847] sm:text-[55px]">
                Design
                <br />
                <span className="italic text-[#A28B68]">
                  Beyond
                </span>
                <br />
                Spaces.
              </h2>

              <p className="mt-6 max-w-[300px] text-[11px] leading-[1.9] text-[#71808A]">
                A considered digital identity that connects
                creative work with meaningful online presentation.
              </p>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-[#E5DCD0] bg-white/80 p-4 sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E9DF] text-[#927B5C]">
                  <Share2 size={18} strokeWidth={1.5} />
                </div>
                <p className="mt-5 text-[11px] font-semibold text-[#122847]">
                  Social Media
                </p>
                <p className="mt-1 text-[9px] leading-5 text-[#87919A]">
                  Content & Creative Direction
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5DCD0] bg-white/80 p-4 sm:p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0E9DF] text-[#927B5C]">
                  <Globe size={18} strokeWidth={1.5} />
                </div>
                <p className="mt-5 text-[11px] font-semibold text-[#122847]">
                  Website
                </p>
                <p className="mt-1 text-[9px] leading-5 text-[#87919A]">
                  Digital Brand Destination
                </p>
              </div>

            </div>

            {/* Bottom signature */}
            <div className="mt-6 flex items-center justify-between border-t border-[#DCD2C6] pt-5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#967D5D]">
                Identity · Experience · Presence
              </span>
              <Palette size={17} className="text-[#A28B68]" />
            </div>

          </div>
        </div>

        <p className="mt-4 text-right text-[9px] uppercase tracking-[0.2em] text-[#8A806F]">
          Shruti Chaddha · Digital Brand Presentation
        </p>
      </motion.div>

    </div>

    {/* PROJECT DETAILS */}
    <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E5DED4] pt-8 sm:grid-cols-4">
      {[
        ["Client", "Shruti Chaddha"],
        ["Industry", "Interior Design"],
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
              Two digital touchpoints. One connected brand experience.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6D7D88]">
              An interior design practice needs more than an online presence.
              It needs a thoughtful way to communicate its creative identity
              and make its work discoverable.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6D7D88]">
              For Shruti Chaddha, Sharp Rays worked across two important
              digital touchpoints: social media management and website
              development. The focus was on bringing the brand's online
              presentation together through a consistent digital experience.
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
              Building a stronger digital foundation.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              Our work brought together the website and social media presence
              to support a more cohesive presentation of the interior design
              practice.
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

      {/* WEBSITE SHOWCASE */}
      <section className="bg-[#F1EEE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
                01 / Website Development
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                A dedicated space for the design practice.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                We developed a website for Shruti Chaddha to establish a
                dedicated digital destination for the brand. The website
                forms an important part of the overall online experience,
                giving visitors a place to discover the practice and explore
                its digital presentation.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Dedicated brand website",
                  "Structured digital presentation",
                  "A central destination for online visitors",
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
              className="relative overflow-hidden rounded-[24px] bg-white p-2 shadow-[0_18px_60px_rgba(18,40,71,0.08)]"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[18px]">
                <Image
                  src={websiteImage}
                  alt="Shruti Chaddha website development showcase"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SHOWCASE */}
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
                  src={socialImage}
                  alt="Social media management creative for Shruti Chaddha"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
                02 / Social Media Management
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                Bringing the brand's presence to social media.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                We managed Shruti Chaddha's social media presence with a focus
                on content planning and creative presentation. The objective
                was to maintain a considered visual identity and communicate
                the interior design practice through its social media
                touchpoints.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Social media management",
                  "Content planning and creative direction",
                  "Consistent visual communication",
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

      {/* OUR APPROACH */}
      <section className="bg-[#122847] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
              Our Approach
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Thoughtful work across every digital touchpoint.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
              We approached the project by considering how the website and
              social media could work together to present the interior design
              practice consistently.
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
              media management to support the brand's online presentation.
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
            Great design deserves an equally thoughtful online presence.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-8 text-[#6D7D88] sm:text-base">
            A website and social media presence are important parts of how
            an interior design practice communicates with the world. By
            working across both, Sharp Rays helped bring Shruti Chaddha's
            digital touchpoints together into a connected brand experience.
          </p>

        </div>
      </section>

      {/* FAQ - APPROVED VIRAR STYLE */}
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
            Let's build a digital presence that reflects your brand.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-7 text-white/65">
            From website development to social media management, let's create
            a more meaningful online presence for your business.
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
