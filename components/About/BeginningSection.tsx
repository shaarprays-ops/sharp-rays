"use client";

import Image from "next/image";
import { Target } from "lucide-react";

export default function BeginningSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-[55px] sm:px-[5%] sm:py-[70px] lg:py-20">
      <div className="relative z-[5] mx-auto flex w-full max-w-[1450px] flex-col items-center gap-[35px] sm:gap-[45px] lg:grid lg:grid-cols-[48%_52%] lg:gap-5">
        <div className="relative z-10 w-full max-w-full lg:max-w-[680px] lg:pt-[10px]">
          <div className="mb-6 flex items-center gap-[10px] sm:mb-7 sm:gap-[14px] lg:mb-8">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#B79A72]" />
            <span className="whitespace-nowrap text-[8px] uppercase tracking-[0.22em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.30em] md:text-xs">THE BEGINNING</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#B79A72]" />
          </div>

          <h2 className="m-0 max-w-[680px] font-serif text-[2.2rem] font-medium leading-[1.08] tracking-[-1px] text-[#0B2A52] sm:text-[2.6rem] md:text-[2.95rem] lg:text-[3.1rem] lg:tracking-[-1.8px] xl:text-[3.35rem]">
            It Started With a
            <br />
            Simple Question
          </h2>

          <div className="relative mt-7 flex min-h-[105px] w-full max-w-[620px] items-center rounded-[16px] bg-white px-[18px] py-5 shadow-[0_10px_30px_rgba(11,42,82,0.09)] sm:min-h-[120px] sm:rounded-[20px] sm:px-6 sm:py-[22px] lg:min-h-[130px] lg:px-7 lg:py-6">
            <span className="absolute left-[18px] top-5 font-serif text-[45px] font-bold leading-[0.7] text-[#B79A72] sm:left-[25px] sm:top-6 sm:text-[55px]">“</span>
            <p className="ml-[45px] text-[14px] italic leading-[1.55] text-[#0B2A52] sm:ml-[55px] sm:text-[16px] lg:text-[17px]">
              Why does so much marketing look
              <br />
              busy—but accomplish so little?”
            </p>
          </div>

          <div className="mt-6 max-w-[620px] text-[14px] leading-[1.65] text-[#333333] sm:mt-7 sm:text-[15px] sm:leading-[1.7] lg:text-[16px] xl:text-[17px]">
            <p className="mb-[22px]">We saw businesses spending time creating content, running campaigns and chasing numbers without always having a clear reason behind what they were doing.</p>
            <p className="mb-[22px]">We believed there had to be a better way.</p>
            <p>So we started <strong className="font-extrabold text-[#0B2A52]">SHARPRAYS.</strong></p>
          </div>

          <div aria-hidden="true" className="absolute -bottom-[35px] -left-[5px] h-[45px] w-[90px] opacity-70 [background-image:radial-gradient(#B79A72_1.4px,transparent_1.4px)] [background-size:18px_18px] sm:-bottom-[45px] sm:left-0 sm:h-[60px] sm:w-[120px] sm:[background-size:22px_20px]" />
        </div>

        <div className="relative flex h-[390px] w-full items-center justify-center sm:h-[500px] lg:h-[620px]">
          <div className="absolute z-[5] h-[360px] w-full sm:h-[470px] sm:w-[92%] lg:h-[590px] lg:w-[88%]">
            <Image
              src="/about/Beginning.webp"
              alt="Sharp Rays creative workspace representing the beginning of our digital growth journey"
              title="The Beginning of Sharp Rays"
              fill
              quality={70}
              sizes="(max-width: 599px) calc(100vw - 40px), (max-width: 1023px) 92vw, 46vw"
              className="object-contain object-center"
            />
          </div>

          <div className="absolute bottom-0 right-0 z-10 flex min-h-[90px] w-[205px] items-center gap-3 rounded-[16px] bg-white p-[15px] shadow-[0_12px_32px_rgba(11,42,82,0.13)] sm:bottom-[15px] sm:right-[2%] sm:min-h-[105px] sm:w-[240px] sm:gap-[15px] sm:rounded-[20px] sm:px-5 sm:py-[18px] lg:right-0 lg:min-h-[115px] lg:w-[270px]">
            <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#0B2A52] sm:h-[50px] sm:w-[50px]">
              <Target className="h-6 w-6 text-[#0B2A52] sm:h-[29px] sm:w-[29px]" strokeWidth={2.1} />
              <span className="absolute -right-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-[#B79A72] sm:h-2 sm:w-2" />
            </div>
            <p className="m-0 text-[14px] font-medium leading-[1.4] text-[#0B2A52] sm:text-[15px] lg:text-[16px]">
              Clarity over
              <br />
              chaos.
            </p>
          </div>

          <div aria-hidden="true" className="absolute bottom-[5px] left-0 z-0 h-[65px] w-[100px] opacity-45 [background-image:radial-gradient(#0B2A52_1.4px,transparent_1.4px)] [background-size:19px_19px] sm:bottom-0 sm:left-[2%] sm:h-[90px] sm:w-[150px] sm:[background-size:23px_23px]" />
          <div aria-hidden="true" className="absolute right-0 top-5 z-0 h-[65px] w-[65px] opacity-35 [background-image:radial-gradient(#B79A72_1.4px,transparent_1.4px)] [background-size:18px_18px] sm:right-[3%] sm:top-[55px] sm:h-[85px] sm:w-[85px] sm:[background-size:20px_20px]" />
        </div>
      </div>
    </section>
  );
}
