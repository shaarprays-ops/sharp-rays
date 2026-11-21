
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Disc3,
  Headphones,
  Music2,
  Radio,
  AudioLines,
  Sparkles,
  CheckCircle2,
  Globe,
  Waves,
  Layers3,
} from "lucide-react";

const experienceCards = [
  {
    number: "01",
    icon: Disc3,
    title: "Artist Identity",
    description:
      "A dedicated digital space that introduces the DJ and creates a recognisable online identity around the artist.",
  },
  {
    number: "02",
    icon: Headphones,
    title: "Music & Experience",
    description:
      "A music-inspired presentation that gives visitors a place to explore the artist's musical world and online presence.",
  },
  {
    number: "03",
    icon: Radio,
    title: "Event & Booking Presence",
    description:
      "A structured digital experience designed to make event-related information and booking enquiries easier to discover.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understanding the Artist",
    description:
      "We considered the needs of a DJ's online presence, where personal identity, music and event-related information need to work together.",
  },
  {
    number: "02",
    title: "Creating the Visual Direction",
    description:
      "We shaped the website experience around a contemporary music aesthetic, using strong visual hierarchy and an expressive presentation.",
  },
  {
    number: "03",
    title: "Structuring the Experience",
    description:
      "We focused on organising the artist's information into clear sections so visitors can explore the website without unnecessary complexity.",
  },
  {
    number: "04",
    title: "Developing the Website",
    description:
      "We brought the visual direction and planned structure together through website development, creating a dedicated digital destination for JKAYY.",
  },
];

const projectScope = [
  "Website design and development",
  "Artist-focused digital presentation",
  "Music-inspired visual direction",
  "Content and information structure",
  "Responsive website experience",
];

const faqs = [
  {
    question: "Who is JKAYY?",
    answer:
      "JKAYY is a DJ and music artist with a dedicated website that presents the artist's identity and online presence.",
  },
  {
    question: "What was the objective of the JKAYY website?",
    answer:
      "The objective was to create a dedicated digital destination that brings the artist's identity, music-related presence and relevant information together.",
  },
  {
    question: "Why does a DJ need a professional website?",
    answer:
      "A professional website gives a DJ a central online destination to introduce their identity, showcase their work and make it easier for visitors and potential collaborators to connect.",
  },
  {
    question: "What did Sharp Rays focus on for this project?",
    answer:
      "The project focused on website design and development, with attention to the artist's visual identity, website structure and overall digital presentation.",
  },
  {
    question: "Can a DJ website include event and booking information?",
    answer:
      "Yes. A DJ website can bring artist information, music, event details and booking enquiries into one organised digital experience.",
  },
  {
    question: "Can Sharp Rays create websites for artists and creatives?",
    answer:
      "Yes. Sharp Rays develops websites for artists, creators and creative professionals, with digital experiences shaped around their individual identity and goals.",
  },
];

export default function JKAYYWebsiteCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#F9F7F3] text-[#122847]">

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#C6A77A]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">

          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#8A806F]">
            <Link href="/work" className="transition hover:text-[#122847]">
              Our Work
            </Link>
            <span>/</span>
            <span>JKAYY</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4D9CC] bg-white px-4 py-2 text-xs font-medium text-[#8C7555]">
                <AudioLines size={15} />
                DJ Artist · Website Development
              </div>

              <h1 className="max-w-[680px] font-[var(--font-new-york)] text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                An Artist's Identity. A Digital Stage.
              </h1>

              <p className="mt-7 max-w-[560px] text-base leading-8 text-[#6D7D88] sm:text-lg">
                A dedicated website experience for JKAYY, bringing the
                personality of a DJ and the energy of music into a
                distinctive digital presence.
              </p>

              <p className="mt-4 max-w-[540px] text-sm leading-7 text-[#89919A]">
                Designed to introduce the artist, present their creative
                identity and give visitors a central place to explore
                the JKAYY brand.
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

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#80618A]/30 blur-3xl" />
                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#C6A77A]/20 blur-3xl" />

                <div className="relative">

                  <div className="flex items-center justify-between border-b border-white/15 pb-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4B98F]">
                      Artist Website
                    </span>
                    <Disc3 size={22} className="text-[#D4B98F]" />
                  </div>

                  <div className="py-12 sm:py-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C6A77A]">
                      The Artist Experience
                    </p>

                    <h2 className="mt-5 font-[var(--font-new-york)] text-6xl leading-none tracking-tight sm:text-8xl">
                      JKAYY<span className="text-[#C6A77A]">.</span>
                    </h2>

                    <p className="mt-5 max-w-[320px] text-sm leading-7 text-white/65">
                      A digital space where artist identity meets the
                      world of music, performance and creative expression.
                    </p>
                  </div>

                  {/* WAVEFORM VISUAL */}
                  <div className="flex h-16 items-center justify-center gap-[5px] overflow-hidden border-y border-white/15 py-4">
                    {[18, 32, 46, 25, 54, 36, 62, 28, 45, 58, 23, 40, 64, 32, 48, 20, 56, 34, 44, 25, 52, 38, 18, 46, 30, 58, 22, 42, 34, 50].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="w-[3px] shrink-0 rounded-full bg-[#C6A77A]"
                          style={{ height: `${height}px` }}
                        />
                      )
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/55">
                      Music · Identity · Experience
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
                      <Music2 size={17} className="text-[#D4B98F]" />
                    </div>
                  </div>

                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
                JKAYY · Artist Website
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
              More than a website. An online identity for an artist.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6D7D88]">
              For a DJ, the experience goes beyond the music itself.
              An artist's digital presence needs to communicate personality,
              creative direction and the experience they bring to their
              audience.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6D7D88]">
              The JKAYY website project focused on creating a dedicated
              online destination that presents the artist through a
              music-inspired visual direction and a structured website
              experience.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE CARDS */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              The Digital Experience
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Built around the world of a DJ.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              The website experience brings together the elements that
              make an artist's online presence more recognisable,
              accessible and engaging.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {experienceCards.map((item, index) => {
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1EAF0] text-[#80618A]">
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
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* WEBSITE SHOWCASE */}
      <section className="bg-[#F0EDF0] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#80618A]">
                Website Development
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                A digital stage for the JKAYY identity.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                The website brings the artist's identity into a dedicated
                digital experience. Its visual direction takes inspiration
                from the expressive world of music and performance.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
                We focused on creating a cohesive presentation where
                visual impact, information structure and usability
                work together to introduce the artist.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Artist-focused website presentation",
                  "Music-inspired visual direction",
                  "Clear content and information structure",
                  "Responsive website experience",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#80618A]"
                    />
                    <span className="text-sm text-[#53616E]">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#263F5D]"
              >
                Create Your Website
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* ACTUAL JKAYY WEBSITE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E4DCE4] bg-white p-3 shadow-[0_20px_60px_rgba(18,40,71,0.09)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-white">
                  <Image
                    src="/services/webdev/jkayy_web.webp"
                    alt="JKAYY DJ artist website designed and developed by Sharp Rays"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#80618A]">
                JKAYY · Website Development
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
                Design Direction
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                Where visual expression meets digital structure.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                An artist's website should feel connected to the
                personality behind the name. The visual direction
                needs to create an impression while keeping the
                experience easy to explore.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-[22px] bg-[#122847] p-7 text-white">
                <Disc3 size={27} className="text-[#C6A77A]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Artist Identity
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  A distinctive presentation built around the artist
                  and their creative identity.
                </p>
              </div>

              <div className="rounded-[22px] bg-[#F0EDF0] p-7 text-[#122847]">
                <Waves size={27} className="text-[#80618A]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Music Aesthetic
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  Visual details that connect the digital experience
                  to the world of music.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7">
                <Layers3 size={27} className="text-[#A28B68]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Clear Structure
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  Organised information that helps visitors navigate
                  the website naturally.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7">
                <Globe size={27} className="text-[#A28B68]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Online Presence
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  A central digital destination for the artist's
                  identity and information.
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
              Turning an artist's identity into a digital experience.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
              Our approach focused on understanding the artist,
              shaping a fitting visual direction and bringing the
              complete website experience together.
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
              The creative thinking behind the website.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
              The project brings together the visual and structural
              elements needed to establish a dedicated online presence
              for a DJ and music artist.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#E8E2D8] bg-white p-7 sm:p-9">
            <div className="space-y-6">
              {projectScope.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1EAF0] text-xs text-[#80618A]">
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
      <section className="bg-[#F0EDF0] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px] text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#80618A]">
            <Sparkles size={23} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#80618A]">
            The Bigger Picture
          </p>

          <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Every artist deserves a digital stage of their own.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-8 text-[#6D7D88] sm:text-base">
            A thoughtfully designed website gives artists a space
            to express who they are beyond social media. The JKAYY
            project reflects how design and development can bring
            an artist's identity into one cohesive digital experience.
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
              A few things worth knowing about the JKAYY website
              and digital experiences for artists.
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

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#C6A77A]">
            <Headphones size={22} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Have a creative project in mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-[750px] font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Let's give your creative identity a digital stage.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-7 text-white/65">
            From artist portfolios to distinctive business websites,
            let's create a digital experience that feels like you.
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
