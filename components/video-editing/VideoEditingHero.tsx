"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Scissors } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const newYorkFont = {
  fontFamily: '"New York", ui-serif, Georgia, serif',
};

const services = [
  "Reels & Shorts",
  "YouTube Editing",
  "Video Ads",
  "Brand Videos",
];

export default function VideoEditingHero() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="video-editing-hero"
      aria-labelledby="video-editing-hero-heading"
      className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]"
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-40 top-12 h-[500px] w-[500px] rounded-full bg-[#EDF5FB] opacity-75 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-[#FBF5EC] opacity-75 blur-[120px]" />
      </div>

      {/* MAIN LAYOUT */}

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1500px] items-center px-4 pb-14 pt-[145px] min-[375px]:px-5 sm:px-6 sm:pb-16 sm:pt-[155px] md:px-8 md:pt-[165px] lg:min-h-[730px] lg:px-10 lg:pb-20 lg:pt-[155px] xl:px-14 xl:pt-[165px] 2xl:px-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.97fr_1.03fr] lg:gap-10 xl:grid-cols-[0.98fr_1.02fr] xl:gap-14">
          {/* LEFT CONTENT */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
            className="relative z-10 max-w-[610px]"
          >
            {/* EYEBROW */}

            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#B79A72] sm:w-10" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#B79A72] sm:text-[9px] md:text-[10px]">
                Professional Video Editing Services
              </span>
            </div>

            {/* HEADING */}

            <h1
              id="video-editing-hero-heading"
              style={newYorkFont}
              className="mt-6 max-w-[620px] text-[2.15rem] font-medium leading-[1.02] tracking-[-0.04em] text-[#0B2A52] min-[375px]:text-[2.3rem] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]"
            >
              Professional Editing.
              <span className="block">Stronger Stories.</span>

              <span className="mt-2 block text-[1.65rem] font-normal leading-[1.1] tracking-[-0.03em] text-[#B79A72] min-[375px]:text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.35rem] xl:text-[2.55rem]">
                Videos Worth Watching.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[510px] text-[12px] leading-[1.8] text-[#59718A] min-[375px]:text-[13px] sm:text-[14px] sm:leading-7 md:text-[15px]">
              We transform your raw footage into polished Reels, YouTube
              videos, video ads and branded content through professional
              editing, motion graphics and purposeful storytelling.
            </p>

            {/* CTA BUTTONS */}

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact?service=video-editing#contact-form"
                title="Get a Professional Video Editing Quote"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[14px] border border-[#0B2A52] bg-[#0B2A52] px-5 py-3 text-[12px] font-medium !text-white shadow-[0_12px_28px_rgba(11,42,82,0.15)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#17436F] hover:!text-white sm:px-6 sm:text-[13px]"
              >
                <span className="!text-white">Get My Editing Quote</span>
                <ArrowUpRight size={15} className="!text-white" />
              </Link>

              <Link
                href="#video-editing-services"
                title="Explore Our Video Editing Services"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-[14px] border border-[#D5E1EA] bg-white px-5 py-3 text-[12px] font-medium !text-[#0B2A52] transition-all duration-300 hover:border-[#B79A72] hover:bg-[#FBF7F1] sm:px-6 sm:text-[13px]"
              >
                <span className="!text-[#0B2A52]">
                  Explore Our Services
                </span>
                <ArrowDownRight size={15} className="text-[#B79A72]" />
              </Link>
            </div>

            {/* SERVICE TYPES */}

            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#0B2A52]/10 pt-5">
              {services.map((service) => (
                <span
                  key={service}
                  className="flex items-center gap-2 text-[10px] font-medium text-[#70869B] sm:text-[11px]"
                >
                  <span className="h-1 w-1 rounded-full bg-[#B79A72]" />
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE COMPOSITION */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="relative mx-auto w-full max-w-[650px] pb-8 lg:ml-auto"
          >
            {/* MAIN IMAGE */}

            <div className="relative ml-auto w-[91%] overflow-hidden rounded-[22px] bg-[#0B2A52] shadow-[0_24px_65px_rgba(11,42,82,0.16)] sm:w-[88%] sm:rounded-[26px]">
              <div className="relative h-[310px] sm:h-[370px] md:h-[430px] lg:h-[460px] xl:h-[485px]">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85"
                  alt="Clapperboard during a professional video production, representing video editing services"
                  title="Professional Video Editing Services by Sharp Rays"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F]/80 via-transparent to-[#071A2F]/10" />

                {/* TOP LABEL */}

                <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-7 sm:top-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E4C597]" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[9px]">
                    Sharp Rays / Creative Studio
                  </span>
                </div>

                {/* CAPTION — POSITIONED AWAY FROM OVERLAP */}

                <div className="absolute bottom-8 right-5 z-10 w-[57%] text-right sm:bottom-10 sm:right-8 sm:w-[55%]">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.17em] text-[#E5C69A] sm:text-[9px]">
                    Crafted in the Edit
                  </span>

                  <p
                    style={newYorkFont}
                    className="mt-2 text-[1.2rem] leading-[1.12] tracking-[-0.03em] text-white sm:text-[1.5rem] md:text-[1.75rem]"
                  >
                    The Right Cut
                    <span className="block italic text-[#E1C49E]">
                      Changes Everything.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* SECONDARY IMAGE — SMALLER OVERLAP */}

            <div className="absolute bottom-1 left-0 z-20 w-[29%] overflow-hidden rounded-[15px] border-[5px] border-white bg-[#0B2A52] shadow-[0_14px_38px_rgba(11,42,82,0.17)] sm:bottom-0 sm:w-[28%] sm:rounded-[19px] sm:border-[6px]">
              <div className="relative aspect-[4/4.1]">
                <img
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=700&q=85"
                  alt="Film reels representing professional video post-production"
                  title="Video Editing and Post-Production"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071E36]/55 to-transparent" />
              </div>
            </div>

            {/* FLOATING DETAIL */}

            <div className="absolute right-0 top-[42%] z-20 hidden translate-x-[18%] rounded-full border border-[#DDE7EE] bg-white p-3 shadow-[0_12px_30px_rgba(11,42,82,0.09)] sm:flex">
              <Scissors size={18} strokeWidth={1.5} className="text-[#B79A72]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}