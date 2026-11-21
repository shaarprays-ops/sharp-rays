
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Sparkles,
  Gauge,
  ShieldCheck,
  Layers3,
  MonitorSmartphone,
  CheckCircle2,
  Globe,
  Palette,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: CarFront,
    title: "Automotive Brand Presentation",
    description:
      "Presenting the VCarGlow brand through a dedicated digital experience that communicates its automotive focus and gives visitors a clear introduction.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Service Communication",
    description:
      "Organising automotive-related information into a structured presentation so visitors can explore the brand and understand its offerings.",
  },
  {
    number: "03",
    icon: MonitorSmartphone,
    title: "Digital Experience",
    description:
      "Creating a website experience designed to make the brand accessible across desktop and mobile screens.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understanding the Brand",
    description:
      "We started by understanding VCarGlow's automotive-focused identity and the role its website needed to play in presenting the brand online.",
  },
  {
    number: "02",
    title: "Planning the Website Structure",
    description:
      "We focused on organising the website content into clear sections so visitors could navigate the brand experience more easily.",
  },
  {
    number: "03",
    title: "Designing the Experience",
    description:
      "The visual direction and interface were developed around the automotive context, with attention to layout, readability and presentation.",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "We brought the planned experience together through website development, creating a dedicated digital destination for VCarGlow.",
  },
];

const projectScope = [
  "Website design and development",
  "Brand-focused website presentation",
  "Content and information structure",
  "Responsive interface development",
  "Digital brand experience",
];

const faqs = [
  {
    question: "What is VCarGlow?",
    answer:
      "VCarGlow is an automotive-focused brand with a dedicated website for presenting its identity and online presence.",
  },
  {
    question: "What was the objective of the VCarGlow website project?",
    answer:
      "The objective was to create a dedicated digital destination that introduces the brand and presents its automotive-focused information through a structured website experience.",
  },
  {
    question: "What did Sharp Rays work on for VCarGlow?",
    answer:
      "The project focused on website design and development, including the organisation of website information and the presentation of the brand online.",
  },
  {
    question: "Why is website design important for automotive brands?",
    answer:
      "A well-structured website helps automotive brands communicate their identity, present relevant information and give visitors a convenient way to explore the business.",
  },
  {
    question: "Is the VCarGlow website designed for mobile visitors?",
    answer:
      "The website experience was developed with responsive presentation in mind, helping visitors access its content across different screen sizes.",
  },
  {
    question: "Can Sharp Rays develop websites for automotive businesses?",
    answer:
      "Yes. Sharp Rays provides website design and development for businesses looking to establish a clear, professional and useful digital presence.",
  },
];

export default function VCarGlowWebsiteCaseStudy() {
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
            <span>VCarGlow</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4D9CC] bg-white px-4 py-2 text-xs font-medium text-[#8C7555]">
                <Sparkles size={14} />
                Automotive · Website Development
              </div>

              <h1 className="max-w-[700px] font-[var(--font-new-york)] text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Giving an Automotive Brand a Stronger Digital Presence.
              </h1>

              <p className="mt-7 max-w-[570px] text-base leading-8 text-[#6D7D88] sm:text-lg">
                A dedicated website experience for VCarGlow, bringing its
                automotive identity and brand information together through
                a considered digital presentation.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
              <Link
  href="https://www.vcarglow.com/"
  target="_blank"
  rel="noopener noreferrer"
  title="Explore the VCarGlow website"
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

            {/* HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-[#E7E0D5] bg-[#EDEAE3] p-5 sm:p-8">

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C6A77A]/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#8CA99A]/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#927B5C]">
                      VCarGlow
                    </span>
                    <CarFront size={21} className="text-[#927B5C]" />
                  </div>

                  <div className="py-10 sm:py-14">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#927B5C]">
                      Automotive Digital Experience
                    </p>

                    <h2 className="mt-4 max-w-[400px] font-[var(--font-new-york)] text-4xl leading-tight text-[#122847] sm:text-5xl">
                      A brand experience built around automobiles.
                    </h2>

                    <p className="mt-4 max-w-[390px] text-sm leading-7 text-[#6D7D88]">
                      Bringing the brand identity and website experience
                      together in one digital destination.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {[
                      { icon: Gauge, label: "Automotive" },
                      { icon: ShieldCheck, label: "Brand Identity" },
                      { icon: Globe, label: "Digital Presence" },
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
                      A dedicated digital destination.
                    </span>
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
                Website Design & Development
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
              Bringing an automotive brand online.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6D7D88]">
              A website is often an important first interaction between a
              brand and its audience. It needs to introduce the business,
              communicate its identity and make relevant information easy
              to explore.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6D7D88]">
              For VCarGlow, the project focused on creating a dedicated
              website experience that brings the brand's automotive
              identity and online presentation together.
            </p>
          </div>

        </div>
      </section>

      {/* WHAT WE DID */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              What We Did
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Creating a connected website experience.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              Our work focused on presenting the brand through a clear
              website structure and a considered digital experience.
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
    <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

      {/* CONTENT */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
          Website Development
        </p>

        <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
          A digital showcase for the VCarGlow brand.
        </h2>

        <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
          The website brings the brand's automotive identity into
          a dedicated online experience. Its presentation is designed
          to help visitors discover the brand and navigate the
          information available across the website.
        </p>

        <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
          We approached the project with attention to the overall
          interface, information structure and responsive presentation.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Brand-focused website presentation",
            "Structured content and navigation",
            "Responsive website interface",
            "Consistent visual experience",
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

       <Link
  href="https://www.vcarglow.com/"
  target="_blank"
  rel="noopener noreferrer"
  title="Visit the VCarGlow website"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D3B60]"
        >
          Explore Live Website
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* WEBSITE IMAGE */}
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
              src="/services/webdev/vcar_web.webp"
              alt="VCarGlow website developed by Sharp Rays"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
          VCarGlow · Website Development
        </p>
      </motion.div>

    </div>
  </div>
</section>


      {/* DESIGN APPROACH */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              Design & Experience
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Designed to make the brand easier to discover.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
              A considered website experience connects visual presentation,
              content structure and usability into one cohesive interface.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                <Palette size={21} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-[var(--font-new-york)] text-2xl">
                Visual Identity
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                A website presentation shaped around the brand's automotive
                context and overall visual direction.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                <Layers3 size={21} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-[var(--font-new-york)] text-2xl">
                Content Structure
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                Organised website information that gives visitors a clearer
                way to explore the brand.
              </p>
            </div>

            <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3EEE7] text-[#927B5C]">
                <MonitorSmartphone size={21} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-[var(--font-new-york)] text-2xl">
                Responsive Experience
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                A flexible interface designed to present the website
                consistently across different screen sizes.
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
              From brand understanding to a complete website experience.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
              We approached the VCarGlow project by bringing together
              the brand's identity, website structure and digital
              presentation.
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
              The project focused on building a dedicated website that
              brings the brand's identity and information together
              through a cohesive online presentation.
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
            A strong digital presence starts with a clear brand experience.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-8 text-[#6D7D88] sm:text-base">
            The VCarGlow website project reflects the importance of
            bringing brand identity, information and usability together.
            A dedicated website gives an automotive business a central
            place to introduce itself and connect with its audience.
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
              A little more clarity before you begin.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              A few things worth knowing about the VCarGlow website project
              and the role of a professional digital presence.
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
            Let's create a website that makes your brand stand out.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-7 text-white/65">
            From business websites to complete digital experiences,
            let's build something meaningful for your brand.
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
