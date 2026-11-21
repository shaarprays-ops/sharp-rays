
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Armchair,
  Layers3,
  Shapes,
  Eye,
  Grid2X2,
  CheckCircle2,
  Sparkles,
  Palette,
  MoveUpRight,
} from "lucide-react";

const showcaseFeatures = [
  {
    number: "01",
    icon: Armchair,
    title: "Furniture Presentation",
    description:
      "Give chairs and furniture pieces the visual attention they deserve through a clean, organised product presentation.",
  },
  {
    number: "02",
    icon: Shapes,
    title: "Decorative Objects",
    description:
      "Present wall pieces and design-led objects in a way that helps visitors explore the character of each item.",
  },
  {
    number: "03",
    icon: Grid2X2,
    title: "Visual Browsing",
    description:
      "Create a straightforward browsing experience that helps visitors move through the collection and discover individual pieces.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understanding the Collection",
    description:
      "We considered the variety of showcase items and the importance of presenting each piece with enough visual space and clarity.",
  },
  {
    number: "02",
    title: "Creating a Visual Direction",
    description:
      "The design direction focuses on a refined, product-led presentation that allows the items themselves to remain the centre of attention.",
  },
  {
    number: "03",
    title: "Organising Product Discovery",
    description:
      "We focused on a clear content structure so visitors can explore different products and move naturally through the website.",
  },
  {
    number: "04",
    title: "Developing the Experience",
    description:
      "We brought the visual presentation, information structure and responsive layout together in a dedicated website experience.",
  },
];

const projectScope = [
  "Website design and development",
  "Product showcase presentation",
  "Furniture and decor content structure",
  "Visual browsing experience",
  "Responsive website development",
];

const faqs = [
  {
    question: "What is Poetry Dubai?",
    answer:
      "Poetry Dubai is a brand presenting furniture and decorative showcase items, including chairs, wall pieces and other design-focused products.",
  },
  {
    question: "What was the focus of the website project?",
    answer:
      "The focus was to create a clean, visually led website that presents the product collection and makes individual pieces easier to explore.",
  },
  {
    question: "Why does a furniture showcase brand need a website?",
    answer:
      "A dedicated website gives a furniture and decor brand a central place to present its collection, communicate its visual identity and help visitors discover its products.",
  },
  {
    question: "How should products be presented on a showcase website?",
    answer:
      "Product imagery, clear content structure and thoughtful spacing can help individual pieces stand out while keeping the browsing experience organised.",
  },
  {
    question: "What did Sharp Rays focus on for Poetry Dubai?",
    answer:
      "The project focused on website design and development, product presentation, content structure and a responsive browsing experience.",
  },
  {
    question: "Can Sharp Rays build websites for furniture and decor brands?",
    answer:
      "Yes. Sharp Rays creates product-focused websites for furniture, interiors and design-led businesses, with an emphasis on visual presentation and easy browsing.",
  },
];

export default function PoetryDubaiWebsiteCaseStudy() {
  return (
    <main className="overflow-hidden bg-[#FAF9F6] text-[#122847]">

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#D9C9B5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">

          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#8A806F]">
            <Link href="/work" className="transition hover:text-[#122847]">
              Our Work
            </Link>
            <span>/</span>
            <span>Poetry Dubai</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8DFD2] bg-white px-4 py-2 text-xs font-medium text-[#967D5D]">
                <Layers3 size={15} />
                Furniture · Decor · Website Development
              </div>

              <h1 className="max-w-[680px] font-[var(--font-new-york)] text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                A Showcase Where Every Piece Has a Place.
              </h1>

              <p className="mt-7 max-w-[560px] text-base leading-8 text-[#6D7D88] sm:text-lg">
                A visually led website experience for Poetry Dubai,
                bringing furniture and decorative pieces into a
                refined digital showcase.
              </p>

              <p className="mt-4 max-w-[540px] text-sm leading-7 text-[#89919A]">
                Designed around product discovery, visual presentation
                and a clear browsing experience that lets individual
                pieces speak for themselves.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#122847] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#263F5D]"
                >
                  Start a Project
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D8CDBF] bg-white px-6 py-3.5 text-sm font-semibold text-[#122847] transition hover:border-[#122847]"
                >
                  Explore Our Work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* EDITORIAL HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[28px] bg-[#EAE3D9] p-7 sm:p-10">

                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#B9A58B]/30" />
                <div className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-[#B9A58B]/30" />

                <div className="relative">

                  <div className="flex items-center justify-between border-b border-[#B9A58B]/40 pb-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8A755B]">
                      Product & Design
                    </span>
                    <Sparkles size={20} className="text-[#A28B68]" />
                  </div>

                  <div className="py-14 sm:py-20">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A755B]">
                      The Art of Presentation
                    </p>

                    <h2 className="mt-5 font-[var(--font-new-york)] text-6xl leading-[0.95] tracking-tight text-[#263B4D] sm:text-8xl">
                      POETRY
                      <br />
                      <span className="italic">DUBAI.</span>
                    </h2>

                    <p className="mt-6 max-w-[300px] text-sm leading-7 text-[#716C64]">
                      Thoughtful objects. Distinctive pieces.
                      A visual space for design discovery.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#B9A58B]/40 pt-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#8A755B]">
                      Furniture · Objects · Design
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A28B68]/50">
                      <MoveUpRight size={17} className="text-[#8A755B]" />
                    </div>
                  </div>

                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
                Poetry Dubai · Website Development
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
              Let the products take centre stage.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6D7D88]">
              For a brand built around furniture and decorative
              objects, the way products are presented matters.
              Each item needs room to be noticed, while the overall
              collection should remain easy to explore.
            </p>

            <p className="mt-5 text-base leading-8 text-[#6D7D88]">
              The Poetry Dubai website project focused on creating
              a product-led digital showcase with a considered
              visual direction, clear content organisation and
              a straightforward browsing experience.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCT SHOWCASE FEATURES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-[680px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
              The Showcase Experience
            </p>

            <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
              Designed to make every detail easier to discover.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#6D7D88] sm:text-base">
              The website brings the product collection into a
              structured visual experience, allowing visitors to
              explore different types of furniture and decorative
              pieces.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {showcaseFeatures.map((item, index) => {
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1EAE0] text-[#967D5D]">
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
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* WEBSITE SHOWCASE */}
      <section className="bg-[#F0EDE7] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#967D5D]">
                Website Development
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                A digital home for furniture and design-led objects.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                The Poetry Dubai website brings its showcase items
                into a dedicated online experience. The presentation
                gives the collection a visual structure while keeping
                the focus on the products.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#6D7D88] sm:text-base">
                We approached the project with attention to product
                visibility, content organisation and a browsing
                experience that feels considered rather than crowded.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Product-focused website presentation",
                  "Clear showcase and content structure",
                  "Visual emphasis on individual pieces",
                  "Responsive website experience",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#967D5D]"
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

            {/* ACTUAL POETRY DUBAI WEBSITE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[24px] border border-[#E4DCCF] bg-white p-3 shadow-[0_20px_60px_rgba(18,40,71,0.08)]">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-white">
                  <Image
                    src="/services/webdev/poetry_web.webp"
                    alt="Poetry Dubai furniture and decorative products showcase website developed by Sharp Rays"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.2em] text-[#8A806F]">
                Poetry Dubai · Website Development
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DESIGN DIRECTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A28B68]">
                Design Direction
              </p>

              <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
                Less visual clutter. More room for the details.
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
                A product showcase should make browsing feel
                effortless. The visual direction for Poetry Dubai
                centres on balance, spacing and a clear hierarchy
                that supports the products rather than competing
                with them.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-[22px] bg-[#122847] p-7 text-white">
                <Eye size={27} className="text-[#C6A77A]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Visual Focus
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  Give product imagery the space it needs to
                  communicate shape, material and design.
                </p>
              </div>

              <div className="rounded-[22px] bg-[#EEE7DC] p-7 text-[#122847]">
                <Palette size={27} className="text-[#967D5D]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Refined Presentation
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  A considered visual language suited to a
                  furniture and decorative-products showcase.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7">
                <Grid2X2 size={27} className="text-[#967D5D]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Clear Organisation
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  A structured browsing experience that helps
                  visitors move through the collection.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#E8E2D8] bg-white p-7">
                <Layers3 size={27} className="text-[#967D5D]" />
                <h3 className="mt-7 font-[var(--font-new-york)] text-2xl">
                  Product Hierarchy
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6D7D88]">
                  Present the collection in a way that makes
                  individual pieces easier to notice.
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
              Making product discovery feel natural.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
              Our approach focused on understanding the collection,
              creating a suitable visual direction and organising
              the website around a clear product-browsing experience.
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
              The thinking behind the showcase.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#6D7D88] sm:text-base">
              The project brings together the website elements
              needed to present Poetry Dubai's collection through
              a clear and considered digital experience.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#E8E2D8] bg-white p-7 sm:p-9">
            <div className="space-y-6">
              {projectScope.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F1EAE0] text-xs text-[#967D5D]">
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
      <section className="bg-[#EEE7DC] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px] text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#967D5D]">
            <Sparkles size={23} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#967D5D]">
            The Bigger Picture
          </p>

          <h2 className="mt-4 font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Good design deserves to be seen, not hidden.
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-sm leading-8 text-[#6D7D88] sm:text-base">
            A thoughtfully structured showcase website gives
            furniture and decor brands a place to present their
            collections with clarity. The Poetry Dubai project
            reflects the value of combining visual presentation
            with a straightforward browsing experience.
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
              A few things worth knowing about the Poetry Dubai
              website and product showcase experiences.
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

      {/* FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px] bg-[#122847] px-7 py-16 text-center text-white sm:px-12 sm:py-20">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#C6A77A]">
            <Armchair size={22} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A77A]">
            Have a product collection to showcase?
          </p>

          <h2 className="mx-auto mt-5 max-w-[750px] font-[var(--font-new-york)] text-3xl leading-tight sm:text-5xl">
            Let's create a website that gives your products room to shine.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-7 text-white/65">
            From furniture collections to design-led brands,
            let's build a digital showcase around your products.
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
