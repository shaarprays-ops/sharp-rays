import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EcommerceFinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">
      <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        <div className="relative overflow-hidden rounded-[30px] bg-[#0B2A52] px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-14">
          {/* Decorative details */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-white/[0.06]" />
          <div className="pointer-events-none absolute -bottom-32 left-[28%] h-[280px] w-[280px] rounded-full bg-white/[0.025]" />
          <div className="pointer-events-none absolute right-[18%] top-[30%] h-[160px] w-[160px] rounded-full bg-[#B79A72]/[0.04] blur-[10px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
            <div className="max-w-[780px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D7BD98]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D7BD98] sm:text-[11px]">
                  Ready to Grow?
                </p>
              </div>

              <h2 className="max-w-[760px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
                More Orders Are Good.{" "}
                <span className="text-[#D7BD98]">
                  Profitable Growth Is Better.
                </span>
              </h2>

              <p className="mt-5 max-w-[700px] text-[14px] leading-7 text-white/65 sm:text-[15px] lg:text-[16px]">
                We build ecommerce marketing around your products, margins,
                customers, acquisition costs and long-term growth goals — not
                vanity traffic.
              </p>
            </div>

            <div className="lg:flex lg:justify-end">
              <Link
                href="/contact?industry=ecommerce#contact-form"
                title="Build My Ecommerce Growth Strategy"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[15px] bg-white px-6 text-[12px] font-medium text-[#0B2A52] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#F7F2EA] hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] sm:w-auto"
              >
                Build My Ecommerce Growth Strategy

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}