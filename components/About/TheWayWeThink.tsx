"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TheWayWeThink() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-28 xl:px-20 xl:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B79A72]" />
            <span className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.30em] md:text-xs">The Way We Think</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.05, ease }}
          className="mt-10 sm:mt-12 lg:mt-16"
        >
          <h2 className="max-w-[1100px] text-[2.2rem] leading-[0.88] tracking-[-0.055em] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            A Few Things
            <br />
            We’ll Always{" "}
            <span className="relative inline-block text-[#B79A72]">Believe.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-[280px_1fr] lg:gap-16 xl:mt-24 xl:grid-cols-[320px_1fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease }}
            className="relative mx-auto w-full max-w-[320px] lg:mx-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/about/thewaywethink.webp"
                alt="Sharp Rays approach to strategy, creativity and digital growth"
                title="The Way We Think at Sharp Rays"
                fill
                quality={68}
                sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 320px, 320px"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A52]/40 via-transparent to-transparent" />
              <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-[#B79A72] sm:h-20 sm:w-20" />
              <div className="absolute bottom-5 left-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80">SHARPRAYS</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.08, ease }}
            className="flex items-center"
          >
            <div className="max-w-[850px]">
              <span className="mb-5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72]">OUR PRINCIPLES</span>
              <p className="text-[clamp(1.65rem,3vw,3rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#0B2A52]">
                We don’t believe in doing more for the sake of doing more.
                <span className="text-[#0B2A52]/35"> We believe in doing what matters.</span>
              </p>
              <div className="mt-7 h-px w-20 bg-[#B79A72]" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.08, ease }}
          className="mt-12 flex flex-col gap-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between lg:mt-20"
        >
          <div>
            <span className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#B79A72]">THE SIMPLE VERSION</span>
            <p className="max-w-[700px] text-[clamp(1.3rem,2vw,2rem)] font-medium leading-[1.15] tracking-[-0.025em] text-[#0B2A52]">
              Think harder. Create with purpose. Keep learning.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0B2A52]/45">Principles over trends</span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -right-32 top-[25%] h-72 w-72 rounded-full border border-[#B79A72]/10 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-20 top-[27%] h-52 w-52 rounded-full border border-[#0B2A52]/5 sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-[#0B2A52]/5" />
    </section>
  );
}
