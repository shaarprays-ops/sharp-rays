"use client";

import Image from "next/image";
import Link from "next/link";

export default function FinalHumanCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B79A72]" />
          <span className="text-xs tracking-[0.18em] text-[#B79A72] sm:text-sm">FINAL HUMAN CTA</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B79A72]" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">
          <div className="relative z-10 max-w-[600px]">
            <h2 className="text-[48px] leading-[0.98] tracking-[-0.045em] text-[#0B2A52] sm:text-[38px] md:text-[41px] lg:text-[54px] xl:text-[44px]">
              Think We’d Get Along
              <span className="ml-1 text-[#B79A72]">?</span>
            </h2>

            <div className="mt-7 h-[3px] w-16 bg-[#B79A72] sm:mt-8 sm:w-20" />

            <p className="mt-7 max-w-[500px] text-base leading-7 text-[#0B2A52]/70 sm:mt-8 sm:text-lg sm:leading-8">
              We like working with people who care about what they’re building.
            </p>

            <Link
              href="/contact"
              title="Start a Conversation with Sharp Rays"
              className="group mt-8 flex w-full max-w-[470px] items-center justify-between rounded-[3px] bg-[#0B2A52] px-6 py-5 !text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,42,82,0.18)] sm:mt-10 sm:px-7"
            >
              <span className="text-sm font-semibold !text-white sm:text-base">Start a Conversation</span>
              <span className="flex h-9 w-9 items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 10H25" stroke="#B79A72" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M18 3L25 10L18 17" stroke="#B79A72" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            <div className="mt-5 flex items-start gap-3 pl-3 sm:mt-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 shrink-0" aria-hidden="true">
                <path d="M24 4C19 5 13 7 10 12C8.5 14.5 8 18 8 21" stroke="#B79A72" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 21L3.5 17.5" stroke="#B79A72" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="pt-1 font-serif text-sm italic text-[#0B2A52]/60 sm:text-base">No pitch deck required.</p>
            </div>
          </div>

          <div className="relative flex w-full items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[680px]">
              <div className="absolute -right-3 -top-3 z-0 h-20 w-20 border-r border-t border-[#B79A72] sm:-right-5 sm:-top-5 sm:h-28 sm:w-28" />
              <div className="absolute -bottom-3 -left-3 z-0 h-20 w-20 border-b border-l border-[#0B2A52] sm:-bottom-5 sm:-left-5 sm:h-28 sm:w-28" />

              <div className="relative z-10 aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/about/about_cta.webp"
                  alt="Sharp Rays team collaborating in a creative digital workspace"
                  title="Sharp Rays Team and Creative Workspace"
                  fill
                  quality={70}
                  sizes="(max-width: 1023px) calc(100vw - 40px), 680px"
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="absolute -bottom-5 right-6 z-20 flex items-center gap-2 bg-white px-4 py-2 shadow-[0_8px_25px_rgba(11,42,82,0.08)]">
                <span className="h-2 w-2 rounded-full bg-[#B79A72]" />
                <span className="text-[10px] font-semibold tracking-[0.16em] text-[#0B2A52]">LET’S BUILD SOMETHING</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-32 right-[-80px] h-72 w-72 rounded-full border border-[#B79A72]/10 sm:h-96 sm:w-96" />
    </section>
  );
}
