
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EducationFinalCTA() {
  return (
    <section
      id="education-final-cta"
      className="relative w-full overflow-hidden bg-white text-[#0B2A52]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        <div className="relative isolate overflow-hidden rounded-[26px] bg-[#0B2A52] px-6 py-11 text-white sm:rounded-[30px] sm:px-9 sm:py-12 lg:px-12 lg:py-14 xl:px-14">
          {/* Subtle background details */}
          <div className="pointer-events-none absolute -right-36 -top-44 h-[450px] w-[450px] rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -right-20 -top-32 h-[330px] w-[330px] rounded-full border border-white/[0.06]" />
          <div className="pointer-events-none absolute -bottom-40 left-[25%] h-[280px] w-[280px] rounded-full bg-[#B79A72]/[0.05] blur-[35px]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
            {/* Left Content */}
            <div className="max-w-[790px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#D7BD98]" />

                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D7BD98] sm:text-[11px]">
                  Let&apos;s Grow Your Admissions
                </p>
              </div>

              <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
                More Enquiries Are Good.{" "}
                <span className="text-[#D7BD98]">
                  More Enrolments Are Better.
                </span>
              </h2>

              <p className="mt-5 max-w-[680px] text-[14px] leading-7 text-white/70 sm:text-[15px] lg:text-[16px]">
                Your institution needs more than visibility. It needs a
                strategy that helps the right students discover your
                programmes, trust your institution, enquire with confidence
                and move towards admission.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-start lg:items-end">
              <Link
                href="/contact?service=education-marketing#contact-form"
                title="Build My Education Marketing Strategy"
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[14px] bg-white px-6 text-[12px] font-medium text-[#0B2A52] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#F5F8FC] hover:shadow-[0_16px_35px_rgba(0,0,0,0.13)] sm:w-auto sm:text-[13px]"
              >
                Build My Education Marketing Strategy

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <p className="mt-4 max-w-[320px] text-left text-[11px] leading-5 text-white/45 lg:text-right">
                A strategy built around your institution, programmes and
                admission goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
