
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  UsersRound,
  TrendingUp,
  MousePointer2,
  Check,
  CircleDot,
} from "lucide-react";

const growthStages = [
  {
    number: "01",
    title: "Launch",
    detail: "Build your presence",
    icon: Rocket,
  },
  {
    number: "02",
    title: "Reach",
    detail: "Connect with customers",
    icon: Target,
  },
  {
    number: "03",
    title: "Acquire",
    detail: "Generate opportunities",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Grow",
    detail: "Improve what works",
    icon: TrendingUp,
  },
];

export default function StartupHero() {
  return (
    <section
      id="startup-hero"
      aria-labelledby="startup-hero-heading"
      className="relative isolate overflow-hidden bg-white pt-20 pb-10 text-[#0B2A52] sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#B79A72]/[0.055] blur-[110px]" />
        <div className="absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#0B2A52]/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.07fr_0.93fr] lg:gap-14 lg:px-10 xl:gap-20">
        {/* LEFT — CONTENT */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              Digital Marketing for Startups
            </span>
          </div>

          <h1
            id="startup-hero-heading"
            className="max-w-[670px] font-serif text-[30px]  leading-[1.14] tracking-[-0.04em] sm:text-[32px] lg:text-[33px] xl:text-[34px]"
          >
            Launch Your Startup.{" "}
            <span className="text-[#B79A72]">
              Find Your First Customers.
            </span>{" "}
            Build for Growth.
          </h1>

          <div className="mt-6 max-w-[615px] space-y-4">
            <p className="text-[13px] leading-[1.9] text-[#0B2A52]/75 sm:text-[14px]">
              Sharp Rays helps early-stage startups and growing
              businesses launch their digital presence, reach
              relevant customers and build measurable acquisition
              strategies through startup SEO, performance marketing,
              websites, content, social media and AI automation.
            </p>

            <p className="text-[12px] leading-[1.9] text-[#0B2A52]/60 sm:text-[13px]">
              We focus on practical marketing priorities that match
              your product, audience, budget and growth stage —
              not unnecessary services or promises of instant success.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?service=startup-marketing"
              title="Build My Startup Growth Plan"
              className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-6 py-3 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_30px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
            >
              Build My Startup Growth Plan

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="#startup-growth-opportunities"
              title="Explore How We Help Startups"
              className="group inline-flex min-h-[49px] items-center justify-center gap-3 rounded-[12px] border border-[#E0E5EA] bg-white px-6 py-3 text-[12px] text-[#0B2A52] transition-all duration-300 hover:border-[#B79A72] hover:bg-[#FAF7F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
            >
              Explore How We Help

              <ArrowDown
                size={15}
                strokeWidth={1.6}
                className="text-[#B79A72] transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </Link>
          </div>

          {/* Bottom brand principle */}
          <div className="mt-9 flex items-start gap-3 border-t border-[#E8E5E0] pt-5">
            <CircleDot
              size={16}
              strokeWidth={1.6}
              className="mt-0.5 shrink-0 text-[#B79A72]"
            />

            <p className="max-w-[540px] text-[11px] leading-[1.8] text-[#788899]">
              Strategy before spending. Clear priorities before scaling.
              Marketing built around your startup's actual stage.
            </p>
          </div>
        </div>

        {/* RIGHT — STARTUP GROWTH VISUAL */}
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="relative overflow-hidden rounded-[24px] border border-[#E8E1D8] bg-[#FAF8F4] p-5 shadow-[0_22px_65px_-42px_rgba(11,42,82,0.17)] sm:p-7 lg:p-8">

            {/* Visual heading */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#B79A72]"
                  />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#A1845F]">
                    Startup Growth Framework
                  </span>
                </div>

                <h2 className="mt-3 font-serif text-[22px] font-normal leading-[1.3] text-[#0B2A52] sm:text-[26px]">
                  From Your First Launch
                  <span className="block text-[#B79A72]">
                    to Your Next Milestone.
                  </span>
                </h2>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0D3C2] bg-white text-[#B79A72]">
                <Rocket size={19} strokeWidth={1.5} />
              </span>
            </div>

            {/* Growth pathway */}
            <div className="relative mt-8">
              {/* Connecting line */}
              <span
                aria-hidden="true"
                className="absolute bottom-9 left-[21px] top-9 w-px bg-gradient-to-b from-[#D0B58D] via-[#DCD0BF] to-[#E8E1D8] sm:left-[25px]"
              />

              <div className="relative space-y-3">
                {growthStages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <div
                      key={stage.number}
                      className="group flex items-center gap-4 rounded-[15px] border border-[#E8E2D9] bg-white/90 px-4 py-4 transition-all duration-500 hover:border-[#D4BC99] hover:bg-white hover:shadow-[0_14px_25px_-22px_rgba(93,68,39,0.25)] motion-safe:hover:translate-x-1 sm:gap-5 sm:px-5"
                    >
                      <span
                        className={`relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border sm:h-[51px] sm:w-[51px] ${
                          index === 0
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                            : "border-[#E5D8C5] bg-[#FAF6EF] text-[#B79A72]"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.5} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] uppercase tracking-[0.13em] text-[#B79A72]">
                          Stage {stage.number}
                        </span>

                        <p className="mt-1 font-serif text-[20px] font-normal leading-[1.2] text-[#0B2A52] sm:text-[23px]">
                          {stage.title}
                        </p>

                        <p className="mt-1 text-[11px] leading-[1.65] text-[#7F8D9A]">
                          {stage.detail}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#C6AF90] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual footer */}
            <div className="mt-7 flex items-start gap-3 border-t border-[#E6DED3] pt-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#B79A72]">
                <Check size={16} strokeWidth={1.6} />
              </span>

              <p className="text-[11px] leading-[1.8] text-[#817C74]">
                A practical growth framework, tailored to your
                product, customers and available resources.
              </p>
            </div>
          </div>

          {/* Small floating brand detail */}
          <div className="pointer-events-none absolute -bottom-5 -left-5 hidden max-w-[215px] rounded-[13px] border border-[#E5DDD2] bg-white px-5 py-4 shadow-[0_15px_32px_-20px_rgba(11,42,82,0.18)] motion-safe:animate-[float_6s_ease-in-out_infinite] lg:block">
            <div className="flex items-center gap-2">
              <Target
                size={17}
                strokeWidth={1.5}
                className="text-[#B79A72]"
              />
              <span className="text-[10px] uppercase tracking-[0.11em] text-[#A08461]">
                Built for Your Stage
              </span>
            </div>

            <p className="mt-2 text-[11px] leading-[1.7] text-[#52687D]">
              The right marketing priorities at the right time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
