
import Link from "next/link";
import { ArrowUpRight, Check, Rocket, Target, Compass, ArrowRight } from "lucide-react";

const priorities = [
  { icon: Rocket, label: "Your startup stage" },
  { icon: Target, label: "Your customer acquisition goals" },
  { icon: Compass, label: "Your available marketing budget" },
];

export default function StartupFinalCTA() {
  return (
    <section
      id="startup-final-cta"
      aria-labelledby="startup-final-cta-heading"
      className="bg-white px-5 pb-20 pt-5 text-[#0B2A52] sm:px-8 sm:pb-24 lg:px-10 lg:pb-28"
    >
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[22px] border border-[#E9DFD2] bg-[#FAF7F2]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-36 -top-48 h-[500px] w-[500px] rounded-full border border-[#DCC6A9]/50" />
          <div className="absolute -right-16 -top-28 h-[340px] w-[340px] rounded-full border border-[#DCC6A9]/40" />
          <div className="absolute right-10 top-0 h-[190px] w-[190px] rounded-full border border-[#DCC6A9]/35" />
        </div>

        <div className="relative grid gap-10 px-6 py-11 sm:px-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16 lg:px-14 lg:py-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#A1845F]">
                Your Startup Growth Starts With a Plan
              </span>
            </div>

            <h2
              id="startup-final-cta-heading"
              className="max-w-[670px] font-serif text-[32px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[39px] lg:text-[44px]"
            >
              Your Next Customer Won&apos;t Find You{" "}
              <span className="text-[#B79A72]">
                Just Because You Launched.
              </span>
            </h2>

            <p className="mt-5 max-w-[600px] text-[13px] leading-[1.95] text-[#586C7D] sm:text-[14px]">
              Tell us what you're building, where your startup stands
              and who you want to reach. We'll help identify practical
              marketing priorities aligned with your launch,
              acquisition goals and available resources.
            </p>
          </div>

          <div className="relative lg:border-l lg:border-[#E1D5C4] lg:pl-12">
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#A1845F]">
              Your Growth Plan Starts Here
            </span>

            <h3 className="mt-3 font-serif text-[23px] font-normal leading-[1.35]">
              The right priorities.
              <span className="block text-[#B79A72]">For your current stage.</span>
            </h3>

            <div className="mt-6 space-y-4">
              {priorities.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDCDB7] bg-white text-[#B79A72]">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>
                    <span className="text-[12px] text-[#526477]">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact?service=startup-marketing#contact-form"
              title="Build My Startup Growth Plan"
              className="group mt-8 inline-flex min-h-[49px] w-full items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-5 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
            >
              Build My Startup Growth Plan
              <ArrowUpRight size={16} strokeWidth={1.5} className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <p className="mt-4 text-[11px] leading-[1.8] text-[#897F73]">
              Tell us about your business goals. No confidential
              product plans or financial information required.
            </p>
          </div>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-[#E7DCCD] px-6 py-5 sm:px-10 lg:px-14">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#A08463]">
            Sharp Rays / Startup Growth
          </span>
          <span className="flex items-center gap-2 text-[11px] text-[#827360]">
            <Check size={14} className="text-[#B79A72]" />
            Strategy based on your startup's actual needs
          </span>
        </div>
      </div>
    </section>
  );
}
