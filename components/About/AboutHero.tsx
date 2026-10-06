"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative isolate w-full overflow-hidden bg-white lg:min-h-[100svh]">
      <Image
        src="/about/hero_about.webp"
        alt="Modern creative workspace background representing strategy, ideas and digital growth"
        title="Sharp Rays Creative Strategy Workspace"
        fill
        preload
        fetchPriority="high"
        quality={70}
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-30 object-cover object-[60%_center] sm:object-[58%_center] lg:object-center"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 bg-white/[0.02]" />

      <section className="relative z-10 mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-6 px-4 pb-0 pt-[90px] min-[375px]:px-5 sm:gap-8 sm:px-6 sm:pt-[105px] md:px-8 md:pt-[115px] lg:min-h-[100svh] lg:grid-cols-[0.95fr_1.05fr] lg:gap-4 lg:px-[5vw] lg:pb-12 lg:pt-[120px] xl:grid-cols-[0.92fr_1.08fr] xl:gap-6 xl:px-[6vw] xl:pb-16 xl:pt-[130px] 2xl:max-w-[2000px] 2xl:px-[7vw]">
        <div className="relative z-20 w-full max-w-[760px] lg:pb-8 xl:pb-10">
          <div className="mb-5 flex w-fit max-w-full items-center gap-2.5 sm:mb-6 sm:gap-3 md:mb-7 lg:mb-8 lg:gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B79A72]" />
            <p className="m-0 whitespace-nowrap text-[9px] font-medium uppercase leading-none tracking-[0.2em] text-[#B79A72] min-[375px]:text-[10px] sm:text-[11px] sm:tracking-[0.23em] md:text-[12px] xl:text-[13px]">
              About SharpRays
            </p>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h1 className="max-w-[820px] font-[var(--font-new-york)] text-[2.15rem] font-medium leading-[0.98] tracking-[-0.045em] text-[#0B2A52] min-[375px]:text-[2.3rem] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] xl:text-[3.35rem]">
            We Don&apos;t Just
            <br />
            Do Marketing.
            <br />
            <span className="text-[#B89A6A]">We Build Meaningful</span>
            <br />
            <span className="text-[#B89A6A]">Growth Engines.</span>
          </h1>

          <div className="mb-4 mt-5 h-[2px] w-8 origin-left bg-[#0B2A52] sm:mb-5 sm:mt-6 sm:w-9 md:w-10 lg:mb-6 lg:mt-7 lg:w-12" />

          <p className="max-w-[560px] text-[13px] leading-[1.65] text-[#35445A] min-[375px]:text-[14px] sm:text-[15px] md:max-w-[540px] md:text-[16px] lg:max-w-[500px] xl:max-w-[560px] xl:text-[17px] 2xl:text-[18px]">
            SHARPRAYS is a digital growth company built for brands that want more than activity, more than attention, and more than another agency on their vendor list.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4 lg:mt-8">
            <button
              type="button"
              onClick={() => document.getElementById("how-we-work")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-[16px] border border-[#6285AD]/30 bg-white/80 px-5 py-[10px] text-[12px] font-medium tracking-[-0.01em] text-[#0B2A52] shadow-[0_8px_30px_rgba(11,42,82,0.08)] backdrop-blur-[8px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-[#6285AD]/40 hover:bg-white hover:shadow-[0_10px_35px_rgba(98,133,173,0.15)] min-[375px]:min-h-[46px] min-[375px]:px-5 min-[375px]:py-[11px] min-[375px]:text-[13px] sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px] md:text-[15px]"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-[2px] rounded-[13px] border border-white/60" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <span className="relative z-10 whitespace-nowrap">How We Turn Thinking Into Action</span>
            </button>
          </div>
        </div>

        <div className="pointer-events-none relative z-10 flex h-[300px] w-full items-end justify-center min-[375px]:h-[340px] sm:h-[420px] md:h-[500px] lg:h-[580px] lg:justify-end xl:h-[min(72vh,720px)] 2xl:h-[min(75vh,800px)]">
          <Image
            src="/about/right_hero.webp"
            alt="Digital marketing professional working on brand strategy and growth planning"
            title="Sharp Rays Digital Marketing and Growth Strategy"
            fill
            preload
            fetchPriority="high"
            quality={72}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, (max-width: 1279px) 52vw, 50vw"
            className="object-contain object-bottom lg:object-right-bottom"
          />
        </div>
      </section>
    </main>
  );
}
