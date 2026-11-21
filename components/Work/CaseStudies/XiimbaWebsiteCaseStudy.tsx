"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Shirt,
  Palette,
  Layers3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const verticals = [
  {
    number: "01",
    icon: Shirt,
    title: "Fabric Collections",
    description:
      "Presenting Xiimba's fabric range, including cotton fabrics, woven fabrics, polyester blends, viscose blends and other textile materials.",
    tags: ["Cotton", "Woven Fabrics", "Blended Textiles"],
  },
  {
    number: "02",
    icon: Palette,
    title: "Dyeing & Printing",
    description:
      "Showcasing textile processing capabilities, from colour development and dyeing to printed patterns and fabric finishes.",
    tags: ["Dyeing", "Printing", "Finishing"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Custom Fabric Development",
    description:
      "Communicating Xiimba's ability to collaborate on fabric requirements, sampling, custom weave development and production.",
    tags: ["Custom Weaves", "Sampling", "Production"],
  },
];

const approach = [
  {
    number: "01",
    title: "Understanding the Textile Business",
    description:
      "We focused on Xiimba's textile manufacturing identity, its fabric range, processing capabilities and the requirements of fabric buyers and brands.",
  },
  {
    number: "02",
    title: "Structuring the Fabric Range",
    description:
      "The website content was organised to make fabric categories, processing capabilities and custom development services easier to understand and explore.",
  },
  {
    number: "03",
    title: "Building the Digital Presence",
    description:
      "We developed a website that presents Xiimba's textile offerings, manufacturing capabilities, quality approach and contact information.",
  },
  {
    number: "04",
    title: "Connecting Product and Capability",
    description:
      "The experience brings fabric collections, processing, custom development and manufacturing strengths together under one cohesive digital identity.",
  },
];

const projectScope = [
  "Website design and development",
  "Fabric range and category presentation",
  "Textile processing capabilities",
  "Custom fabric development information",
  "Manufacturing and contact information",
];

const faqs = [
  {
    question: "What does Xiimba specialise in?",
    answer:
      "Xiimba Attire Intelligence LLP is a textile company focused on fabric manufacturing, textile processing and fabric solutions for businesses and brands.",
  },
  {
    question: "What fabric categories are presented on the website?",
    answer:
      "The website presents categories including woven fabrics, cotton fabrics, polyester blends, viscose blends, processed fabrics, dyed fabrics, printed fabrics and finished fabrics.",
  },
  {
    question: "What textile processing capabilities does Xiimba highlight?",
    answer:
      "Xiimba highlights dyeing, printing and finishing processes designed to support fabric colour, patterns, texture and performance requirements.",
  },
  {
    question: "Does Xiimba support custom fabric development?",
    answer:
      "The website describes a custom development process that includes consultation, sampling and production to help meet specific fabric requirements.",
  },
  {
    question: "What was the objective of the Xiimba website?",
    answer:
      "The website presents Xiimba's textile identity, fabric range, manufacturing strengths and development capabilities in a clear digital experience for potential business partners and buyers.",
  },
  {
    question: "What does Sharp Rays focus on in website development?",
    answer:
      "Sharp Rays focuses on creating purposeful digital experiences through thoughtful content structure, visual presentation and website development.",
  },
];

export default function XiimbaWebsiteCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#FAF9F6] text-[#122847]">

      {/* HERO */}
      <section className="px-5 pb-16 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#8A806F]">
            <Link href="/work" className="transition hover:text-[#122847]">
              Our Work
            </Link>

            <span>/</span>

            <span>Xiimba</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4D9CC] bg-white px-4 py-2 text-xs font-medium text-[#8C7555]">
                <Sparkles size={14} />

                Website Development · Textile Manufacturing Website
              </div>

              <h1 className="max-w-[700px] font-[var(--font-new-york)] text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Bringing Xiimba’s Fabric Expertise to the Digital World.
              </h1>

              <p className="mt-7 max-w-[570px] text-base leading-8 text-[#6D7D88] sm:text-lg">
                A textile-focused website presenting Xiimba’s fabric range,
                manufacturing capabilities and custom textile solutions through
                a clear digital presence.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  href="https://www.xiimba.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit the Xiimba Textiles website"
                  className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1D3B60]"
                >
                  Visit Live Website
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D8CDBF] bg-white px-6 py-3.5 text-sm font-semibold text-[#122847] transition-all duration-300 hover:border-[#122847]"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </Link>

              </div>
            </motion.div>

            {/* VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-[#E7E0D5] bg-[#F0EDE5] p-5 sm:p-8">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C6A77A]/20 blur-3xl" />

                <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#8CA99A]/20 blur-3xl" />

                <div className="relative">

                  <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#927B5C]">
                      Xiimba Textiles
                    </span>

                    <Globe size={19} className="text-[#927B5C]" />
                  </div>

                  <div className="py-10 sm:py-14">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B5C]">
                      Fabric & Textile Solutions
                    </p>

                    <h2 className="mt-4 max-w-[400px] font-[var(--font-new-york)] text-4xl leading-tight text-[#122847] sm:text-5xl">
                      Fabric made for possibilities.
                    </h2>

                    <p className="mt-4 max-w-[390px] text-sm leading-7 text-[#6D7D88]">
                      From fabric collections to custom development, bringing
                      textile expertise and manufacturing together.
                    </p>

                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">

                    {[
                      { icon: Shirt, label: "Fabric Range" },
                      { icon: Palette, label: "Processing" },
                      { icon: Layers3, label: "Custom Textiles" },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-[#E3DCCF] bg-white/80 px-2 py-5 text-center sm:px-4"
                        >
                          <Icon
                            size={23}
                            strokeWidth={1.5}
                            className="mx-auto text-[#927B5C]"
                          />

                          <p className="mt-3 text-[10px] font-semibold text-[#53616E] sm:text-xs">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}

                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-xl bg-[#122847] px-4 py-4 text-white">
                    <span className="text-xs tracking-wide text-white/80">
                      Quality. Precision. Textile expertise.
                    </span>

                    <ArrowUpRight size={17} />
                  </div>

                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
                Textile Website Experience
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
              A textile business. Multiple fabric possibilities.
            </h2>
          </div>

          <div>

            <p className="text-base leading-8 text-[#6D7D88]">
              Xiimba is a textile company focused on fabric manufacturing and
              textile solutions. Its range includes woven fabrics, cotton
              fabrics, blended textiles and processed fabrics, alongside
              capabilities in dyeing, printing and finishing.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6D7D88]">
              The website was developed to present Xiimba’s fabric range,
              manufacturing strengths and custom development capabilities,
              helping visitors understand its textile offering and explore
              relevant services.
            </p>

          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-[680px]">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              Fabric Range
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Different fabrics. Diverse possibilities.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              The website introduces Xiimba’s textile categories and processing
              capabilities, giving fabric buyers and brands a clearer way to
              explore its offerings.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {verticals.map((item, index) => {
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

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                      <Icon size={21} strokeWidth={1.6} />
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
                        className="rounded-full bg-[#F5F2ED] px-3 py-2 text-[10px] font-medium text-[#7D786F]"
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

      {/* DIGITAL PRESENCE */}
      <section className="bg-[#F1EEE8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
                Digital Brand Presentation
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                Making textile capabilities easier to explore.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                When a textile business offers different fabric categories and
                processing capabilities, its website needs to make the range
                easy to understand while communicating the quality and
                versatility of its manufacturing.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
                The Xiimba website brings together fabric categories, dyeing
                and printing, finishing, custom development and manufacturing
                information into a connected digital experience.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Clear introduction to Xiimba’s textile business",
                  "Fabric categories and processing capabilities",
                  "Custom development and manufacturing information",
                  "Accessible enquiry and contact information",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">

                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#A28B68]"
                    />

                    <span className="text-sm text-[#53616E]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <Link
                href="https://www.xiimba.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Explore the Xiimba Textiles website"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D3B60]"
              >
                Explore Live Website
                <ArrowUpRight size={16} />
              </Link>

            </div>

            {/* ACTUAL XIIMBA WEBSITE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E8E2D8] bg-white p-3 shadow-[0_20px_60px_rgba(18,40,71,0.08)]">

                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-white">

                  <Image
                    src="/services/webdev/xiimba_web.webp"
                    alt="Xiimba textile website designed and developed by Sharp Rays"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center"
                  />

                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
                Xiimba · Website Development
              </p>

            </motion.div>

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
              Turning textile expertise into a digital experience.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
              Our approach focused on understanding Xiimba’s fabric range,
              organising textile information and presenting its manufacturing
              and processing capabilities through a connected website experience.
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

                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>

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
              A clear showcase for fabric and manufacturing capabilities.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
              The website brings together fabric categories, textile
              processing, custom development and manufacturing information
              in one central digital destination.
            </p>

          </div>

          <div className="rounded-[24px] border border-[#E8E2D8] bg-white p-7 sm:p-9">

            <div className="space-y-6">

              {projectScope.map((item, index) => (
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
            Every fabric range deserves a thoughtful digital showcase.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-8 text-[#6D7D88] sm:text-base">
            Xiimba’s textile offering spans fabric types, processing
            capabilities and custom development. The website provides a
            central place to communicate its capabilities and help potential
            buyers and brands understand the range of textile solutions
            available.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F3EE] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1100px]">

          <div className="mx-auto mb-14 max-w-[650px] text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A28B68]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight text-[#17334D] sm:text-5xl">
              A little more about the Xiimba textile website.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              A few things worth knowing about the Xiimba website project
              and its fabric-focused digital presence.
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
            Let’s build a website that brings your fabric range to life.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-7 text-white/65">
            From textile manufacturing websites to product-focused digital
            experiences, let’s create a meaningful online presence for
            your business.
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