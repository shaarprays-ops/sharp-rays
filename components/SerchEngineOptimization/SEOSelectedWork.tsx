"use client";

import Image from "next/image";
import { ArrowUpRight, BarChart3, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const newYorkFont = {
  fontFamily: '"New York", "Bodoni Moda", Georgia, serif',
};

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    name: "Double Trouble Studio",
    domain: "dtsworld.in",
    url: "https://www.dtsworld.in",
    image: "/services/seo/dts.webp",
    imageAlt:
      "Double Trouble Studio SEO performance dashboard showing organic search visibility and optimization data",
    imageTitle: "Double Trouble Studio SEO Performance",
    focus: [
      "Keyword Research",
      "Technical SEO",
      "Service Page SEO",
      "Content Optimization",
    ],
  },
  {
    number: "02",
    name: "RNK Rentals",
    domain: "rnk.com",
    url: "https://www.rnk.com",
    image: "/services/seo/rnk.webp",
    imageAlt:
      "RNK Rentals SEO performance dashboard showing organic visibility and local search performance",
    imageTitle: "RNK Rentals SEO Performance",
    focus: [
      "Local SEO",
      "Service Page SEO",
      "Keyword Strategy",
      "Technical SEO",
    ],
  },
];

/* =========================================================
   MAIN
========================================================= */

export default function SEOSelectedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo-work"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 md:py-28 lg:py-32"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-280px] h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-[#EAF4FC]/75 blur-[160px]" />
        <div className="absolute -right-[280px] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#C6A77A]/[0.06] blur-[160px]" />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-7 md:px-8 lg:px-12 xl:px-14">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C6A77A]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#C6A77A] sm:text-[10px]">
              Selected SEO Work
            </span>

            <span className="h-px w-8 bg-[#C6A77A]" />
          </div>

          <h2
            style={newYorkFont}
            className="mx-auto mt-6 text-[2.6rem] font-medium leading-[1] tracking-[-0.045em] text-[#0B2A52] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            Real SEO Work.{" "}
            <span className="text-[#C6A77A]">Real Search Data.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-6 text-[#61778D] sm:text-[14px]">
            Selected search performance from websites we&apos;ve worked on.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}
        <div className="mx-auto mt-12 grid max-w-[1220px] grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 26,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.08,
                ease,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                    }
              }
              className="group relative overflow-hidden rounded-[24px] border border-[#D4E1EB] bg-white p-4 shadow-[0_14px_40px_rgba(11,42,82,0.045)] transition-[border-color,box-shadow] duration-500 hover:border-[#9EB9CF] hover:shadow-[0_22px_55px_rgba(11,42,82,0.09)] sm:p-5 md:p-6"
            >
              {/* BACKGROUND */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#EEF7FD]/75 via-white to-[#FFF9F0]/55 opacity-55"
              />

              {/* =================================================
                  TOP
              ================================================= */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#C6A77A]">
                    SEO Project {project.number}
                  </span>

                  <h3
                    style={newYorkFont}
                    className="mt-2 text-[25px] font-medium leading-[1.05] tracking-[-0.035em] text-[#0B2A52] sm:text-[28px]"
                  >
                    {project.name}
                  </h3>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    title={`Visit ${project.name} website`}
                    className="group/link mt-2 inline-flex items-center gap-1.5 text-[10px] font-medium text-[#3976B6]"
                  >
                    {project.domain}

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#0B2A52] text-white">
                  <Search size={15} strokeWidth={1.7} />
                </div>
              </div>

              {/* =================================================
                  SEO FOCUS
              ================================================= */}
              <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                {project.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D5E2EC] bg-white/80 px-3 py-1.5 text-[8px] font-semibold text-[#5E758B]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* =================================================
                  ANALYTICS IMAGE
              ================================================= */}
              <div className="relative z-10 mt-5 overflow-hidden rounded-[17px] border border-[#D6E2EB] bg-[#F7FAFC] p-2 shadow-[0_8px_26px_rgba(11,42,82,0.045)] sm:p-2.5">
                {/* SMALL IMAGE HEADER */}
                <div className="flex items-center justify-between gap-3 px-2 pb-2.5">
                  <div className="flex items-center gap-2">
                    <BarChart3
                      size={12}
                      strokeWidth={1.7}
                      className="text-[#3976B6]"
                    />

                    <span className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#0B2A52]/40">
                      Search Performance
                    </span>
                  </div>

                  <span className="h-2 w-2 rounded-full bg-[#62A578] shadow-[0_0_8px_rgba(98,165,120,0.4)]" />
                </div>

                {/* IMAGE */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-white">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    title={project.imageTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                </div>
              </div>

              {/* =================================================
                  BOTTOM
              ================================================= */}
              <div className="relative z-10 mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#3976B6]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#0B2A52]/38">
                    Verified Performance Data
                  </span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                  title={`Visit ${project.name} website`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D3E0E9] bg-white text-[#0B2A52] transition-all duration-300 hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white"
                >
                  <ArrowUpRight size={13} strokeWidth={1.6} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}