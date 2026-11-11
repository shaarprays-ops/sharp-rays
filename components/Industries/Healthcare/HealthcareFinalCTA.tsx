
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HealthcareFinalCTA() {
  return (
    <section
      id="healthcare-final-cta"
      className="relative overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        <div className="relative isolate overflow-hidden rounded-[22px] bg-[#0B2A52] px-6 py-10 text-white sm:rounded-[28px] sm:px-9 sm:py-12 lg:px-14 lg:py-16 xl:px-16">
          {/* Subtle architectural details */}
          <div className="pointer-events-none absolute -right-28 -top-44 h-[430px] w-[430px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-14 -top-28 h-[330px] w-[330px] rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute right-2 top-4 h-[220px] w-[220px] rounded-full border border-white/[0.05]" />
          <div className="pointer-events-none absolute -bottom-36 left-[25%] h-[250px] w-[250px] rounded-full bg-[#4779AB]/10 blur-[70px]" />

          <div className="relative grid items-center gap-9 lg:grid-cols-[1.45fr_0.55fr] lg:gap-12">
            {/* Main content */}
            <div className="max-w-[850px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 shrink-0 bg-[#D7BD98]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#D7BD98] sm:text-[11px]">
                  Build a Stronger Healthcare Digital Presence
                </p>
              </div>

              <h2 className="max-w-[800px] text-[30px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
                Better Visibility. Clearer Information.{" "}
                <span className="text-[#D7BD98]">
                  Easier Appointments.
                </span>
              </h2>

              <p className="mt-6 max-w-[770px] text-[14px] leading-7 text-white/80 sm:text-[15px]">
                Your healthcare business deserves a digital presence that
                helps people find reliable information, understand your
                services and connect with the appropriate team.
              </p>

              <p className="mt-3 max-w-[770px] text-[13px] leading-7 text-white/65 sm:text-[14px]">
                We build healthcare marketing strategies around your
                specialties, locations, patient information needs and
                operational goals — with accuracy, accessibility and
                responsible communication in mind.
              </p>
            </div>

            {/* Action */}
            <div className="flex flex-col items-start lg:items-end">
              <Link
                href="/contact?service=healthcare-marketing#contact-form"
                title="Build My Healthcare Growth Strategy with Sharp Rays"
                className="group inline-flex min-h-[43px] items-center justify-center gap-2 rounded-[13px] bg-white px-4 py-3 text-[11px] font-medium text-[#0B2A52] shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0F6FC] sm:min-h-[49px] sm:px-6 sm:text-[12px]"
              >
                Build My Healthcare Growth Strategy
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <p className="mt-4 max-w-[245px] text-left text-[11px] leading-5 text-white/50 lg:text-right">
                A strategy shaped around your healthcare organisation.
              </p>
            </div>
          </div>

          {/* Bottom rule */}
          <div className="relative mt-10 flex items-center gap-3 border-t border-white/10 pt-5 sm:mt-12">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D7BD98]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-white/50">
              Accuracy • Accessibility • Responsible Communication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
