"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    number: "01",
    title: "STRATEGY",
    text: "Know where you're going.",
    image: "/about/Strategy.webp",
    alt: "Sharp Rays digital marketing strategy and growth planning",
    imageTitle: "Digital Marketing Strategy at Sharp Rays",
  },
  {
    number: "02",
    title: "CREATIVE",
    text: "Give people a reason to care.",
    image: "/about/creative_about.webp",
    alt: "Sharp Rays creative marketing and brand content development",
    imageTitle: "Creative Marketing and Brand Content at Sharp Rays",
  },
  {
    number: "03",
    title: "DISTRIBUTION",
    text: "Get the right message to the right people.",
    image: "/about/distribution_about.webp",
    alt: "Sharp Rays content distribution and digital marketing channels",
    imageTitle: "Content Distribution Strategy at Sharp Rays",
  },
  {
    number: "04",
    title: "GROWTH",
    text: "Measure it. Improve it. Scale it.",
    image: "/about/Growth_about.webp",
    alt: "Sharp Rays digital growth performance measurement and scaling",
    imageTitle: "Digital Growth and Performance at Sharp Rays",
  },
];

export default function WhatSharpraysIs() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="what-sharprays-is" className="relative w-full overflow-hidden bg-white px-5 py-[52px] text-[#0B2A52] sm:px-10 sm:py-[65px] lg:px-[55px] lg:py-[72px] xl:px-[70px] xl:py-[78px] 2xl:px-[90px] 2xl:py-[88px]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-[260px] -top-[240px] h-[460px] w-[460px] rounded-full border border-[#C6A77A]/[0.035] sm:-right-[330px] sm:-top-[250px] sm:h-[700px] sm:w-[700px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[300px] -left-[280px] h-[500px] w-[500px] rounded-full border border-[#0B2A52]/[0.025] sm:-bottom-[400px] sm:-left-[330px] sm:h-[680px] sm:w-[680px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1380px]">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease }}
            className="mb-[18px] flex items-center justify-center gap-[10px] sm:mb-[22px] sm:gap-[14px]"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B79A72]" />
            <span className="whitespace-nowrap text-[8px] uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.30em] md:text-xs">What SHARPRAYS Actually Is</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </motion.div>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
            className="m-0 max-w-[340px] font-[var(--font-new-york)] text-[2.2rem] font-medium leading-none tracking-[-0.055em] text-[#0B2A52] sm:max-w-[650px] sm:text-[2.6rem] md:text-[2.95rem] lg:max-w-[900px] lg:text-[3.1rem] xl:text-[3.35rem]"
          >
            So, What Is <span className="italic text-[#C6A77A]">SHARPRAYS?</span>
          </motion.h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.05, ease }}
            className="mt-[18px] flex w-full max-w-[850px] items-center justify-center gap-0 sm:mt-6 sm:gap-4"
          >
            <span aria-hidden="true" className="hidden h-[42px] w-px shrink-0 bg-[#C6A77A] sm:block lg:h-[50px]" />
            <p className="m-0 max-w-[330px] text-center text-[13px] leading-[1.65] text-[#607087] sm:max-w-[620px] sm:text-[14px] sm:leading-[1.7] lg:max-w-[730px] lg:text-[15px] 2xl:text-[16px]">
              We’re a digital growth partner combining strategy, creativity, technology and performance to help ambitious businesses build something that lasts.
            </p>
            <span aria-hidden="true" className="hidden h-[42px] w-px shrink-0 bg-[#C6A77A] sm:block lg:h-[50px]" />
          </motion.div>
        </div>

        <div className="mt-[42px] grid grid-cols-1 gap-y-[42px] sm:mt-[50px] sm:grid-cols-2 sm:gap-x-7 sm:gap-y-[52px] lg:mt-[58px] lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0 xl:mt-16 xl:gap-x-7 2xl:mt-[72px] 2xl:gap-x-9">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : index * 0.05, ease }}
              className="relative min-w-0"
            >
              <div className="relative h-[145px] w-full overflow-hidden sm:h-[170px] lg:h-[175px] xl:h-[185px] 2xl:h-[205px]">
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A77A]/[0.025] blur-[30px]" />
                <div className="absolute inset-0 transition-transform duration-500 hover:scale-[1.03]">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    title={pillar.imageTitle}
                    fill
                    quality={68}
                    sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-[15px] sm:mt-[18px]">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-[9px] font-semibold tracking-[0.16em] text-[#B79A72]">{pillar.number}</span>
                  <span className="h-px flex-1 bg-[#B79A72]/25" />
                </div>
                <h3 className="m-0 font-[var(--font-new-york)] text-[26px] font-medium leading-none tracking-[-0.045em] text-[#0B2A52] sm:text-[27px] lg:text-[28px] xl:text-[30px] 2xl:text-[33px]">
                  {pillar.title}
                </h3>
                <p className="mt-[10px] text-[13px] leading-[1.55] text-[#607087] sm:text-[14px] xl:text-[15px] 2xl:text-[16px]">{pillar.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
