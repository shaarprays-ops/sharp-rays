
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Globe2,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

const highlights = [
  "Manufacturing SEO",
  "B2B Lead Generation",
  "Industrial Websites",
  "Google Ads",
];

const journey = [
  { icon: Search, label: "Visibility" },
  { icon: Target, label: "B2B Buyers" },
  { icon: ArrowUpRight, label: "Enquiries" },
];

export default function ManufacturingHero() {
  return (
    <section
      id="manufacturing-hero"
      aria-labelledby="manufacturing-hero-heading"
      className="manufacturing-hero relative isolate overflow-hidden bg-gradient-to-br from-white via-[#F8FBFD] to-[#EDF5FA]"
    >
      <style>{`
        @keyframes srHeroReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes srHeroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes srHeroPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .45; }
        }

        @keyframes srHeroBar {
          from { transform: scaleY(.08); }
          to { transform: scaleY(1); }
        }

        .manufacturing-hero .sr-reveal {
          animation: srHeroReveal .85s ease-out both;
        }

        .manufacturing-hero .sr-float {
          animation: srHeroFloat 6s ease-in-out infinite;
        }

        .manufacturing-hero .sr-pulse {
          animation: srHeroPulse 2.4s ease-in-out infinite;
        }

        .manufacturing-hero .sr-chart-bar {
          transform-origin: bottom;
          animation: srHeroBar 1.1s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .manufacturing-hero .sr-reveal,
          .manufacturing-hero .sr-float,
          .manufacturing-hero .sr-pulse,
          .manufacturing-hero .sr-chart-bar {
            animation: none !important;
          }
        }
      `}</style>

      {/* Soft brand background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[550px] w-[550px] rounded-full bg-[#E1EDF6]/70 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-32 h-[440px] w-[440px] rounded-full bg-[#F0E8DC]/40 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-32 xl:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-20">
          {/* LEFT — Content */}
          <div className="relative z-10">
           
{/* Eyebrow */}
<div className="sr-reveal flex items-center gap-4">
  <span
    aria-hidden="true"
    className="h-px w-[42px] shrink-0 bg-[#B79A72]"
  />

  <span className="font-serif text-[10px] uppercase leading-relaxed tracking-[0.17em] text-[#B79A72] ">
    Digital Marketing for Manufacturing Companies
  </span>
</div>


            {/* Heading */}
            <h1
              id="manufacturing-hero-heading"
              className="sr-reveal mt-7 max-w-[720px] text-[clamp(2.45rem,4.2vw,4.4rem)] leading-[1.12] tracking-[-0.045em] text-[#0B2A52]"
              style={{ animationDelay: "100ms" }}
            >
              Get Found by Industrial Buyers{" "}
              <span className="text-[#B79A72]">
                Looking for What You Manufacture.
              </span>
            </h1>

            {/* Description */}
            <p
              className="sr-reveal mt-7 max-w-[605px] text-[14px] leading-[1.9] text-[#0B2A52]/65 sm:text-[15px]"
              style={{ animationDelay: "180ms" }}
            >
              Sharp Rays helps manufacturers, industrial suppliers and
              exporters improve Google visibility, reach relevant B2B
              buyers and generate qualified quotation enquiries through
              manufacturing SEO, Google Ads, industrial websites and
              lead automation.
            </p>

            {/* CTAs */}
            <div
              className="sr-reveal mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "260ms" }}
            >
              <Link
                href="/contact"
                title="Get My Manufacturing Growth Strategy"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[14px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-semibold text-white shadow-[0_12px_28px_rgba(11,42,82,0.13)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#153B69] hover:shadow-[0_18px_35px_rgba(11,42,82,0.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2A52]"
              >
                Get My Manufacturing Growth Strategy
               
              </Link>

              <Link
                href="#manufacturing-services"
                title="Explore How We Help"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[14px] border border-[#DCE6EF] bg-white/80 px-6 py-3.5 text-[12px] font-semibold text-[#0B2A52] transition-all duration-300 hover:-translate-y-1 hover:border-[#B79A72]/50 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B2A52]"
              >
                Explore How We Help
                
              </Link>
            </div>

            {/* Supporting highlights */}
            <div
              className="sr-reveal mt-10 max-w-[620px] border-t border-[#0B2A52]/10 pt-7"
              style={{ animationDelay: "350ms" }}
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                {highlights.map((highlight, index) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-3 text-[11px] font-medium text-[#0B2A52]/70 sm:text-[12px]"
                  >
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-[#B79A72]"
                      />
                    )}

                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Industrial visual */}
          <div
            className="sr-reveal relative mx-auto flex min-h-[470px] w-full max-w-[530px] items-center justify-center sm:min-h-[550px] lg:min-h-[570px]"
            style={{ animationDelay: "250ms" }}
          >
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute inset-x-3 top-12 aspect-square rounded-full bg-[radial-gradient(circle,#DDECF6_0%,#ECF3F8_55%,transparent_72%)]"
            />

            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="absolute left-[6%] top-[7%] h-[85%] w-[85%] rounded-full border border-[#0B2A52]/[0.045]"
            />

            <div
              aria-hidden="true"
              className="absolute left-[14%] top-[15%] h-[68%] w-[68%] rounded-full border border-dashed border-[#B79A72]/20"
            />

            {/* Main visual card */}
            <div className="sr-float relative z-10 w-[88%] max-w-[450px] overflow-hidden rounded-[25px] border border-white bg-white shadow-[0_30px_75px_rgba(11,42,82,0.14)]">
              {/* Manufacturing image */}
              <div className="relative h-[235px] overflow-hidden bg-[#DCE7EF] sm:h-[275px]">
                <Image
                  src="/industries/manufacturing/manufacturing_hero.webp"
                  alt="Modern industrial manufacturing facility with production machinery"
                  title="Modern industrial manufacturing facility with production machinery"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 450px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081F39]/90 via-[#081F39]/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-5">
                  <div className="mb-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/75">
                    <Factory size={14} />
                    Your Manufacturing Business
                  </div>

                  <h2 className="text-[22px] font-semibold tracking-[-0.025em] text-white sm:text-[25px]">
                    Built to Be Discovered.
                  </h2>
                </div>
              </div>

              {/* Process framework */}
              <div className="p-5 sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-[#0B2A52]/50">
                      Digital Growth Framework
                    </p>

                    <h3 className="mt-1 text-[17px] font-semibold tracking-[-0.025em] text-[#0B2A52]">
                      From Search to Enquiry
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EFE6] text-[#B79A72]">
                    <TrendingUp size={19} />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {journey.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.label}
                        className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2"
                      >
                        <div
                          className={`flex min-h-[78px] min-w-0 flex-1 flex-col items-center justify-center gap-2 rounded-[12px] px-1.5 text-center ${
                            index === journey.length - 1
                              ? "bg-[#F7F1E9]"
                              : "bg-[#F0F5F9]"
                          }`}
                        >
                          <Icon
                            size={19}
                            className={
                              index === journey.length - 1
                                ? "text-[#B79A72]"
                                : "text-[#0B2A52]"
                            }
                            strokeWidth={1.8}
                          />

                          <span className="text-[9px] font-semibold leading-tight text-[#0B2A52] sm:text-[10px]">
                            {step.label}
                          </span>
                        </div>

                        {index < journey.length - 1 && (
                          <ArrowRight
                            size={13}
                            className="shrink-0 text-[#B79A72]"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating card — Visibility */}
            <div
              className="sr-float absolute -right-1 top-[4%] z-20 rounded-[15px] border border-[#E4EAF0] bg-white p-4 shadow-[0_14px_35px_rgba(11,42,82,0.12)] sm:-right-4"
              style={{ animationDelay: "-3s" }}
            >
              <div className="mb-3 flex items-center gap-2">
                <Globe2 size={14} className="text-[#B79A72]" />
                <span className="text-[10px] font-semibold text-[#0B2A52]">
                  Search Visibility
                </span>
              </div>

              <div
                aria-label="Illustrative search visibility growth graphic"
                role="img"
                className="flex h-[48px] items-end gap-[5px]"
              >
                {[19, 28, 24, 35, 31, 46].map((height, index) => (
                  <div
                    key={index}
                    className={`sr-chart-bar w-[10px] rounded-t-[3px] ${
                      index === 5
                        ? "bg-[#B79A72]"
                        : "bg-[#B9CFDF]"
                    }`}
                    style={{
                      height,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating card — Qualified enquiries */}
            <div
              className="sr-float absolute -bottom-1 -left-1 z-20 flex items-center gap-3 rounded-[15px] border border-[#E4EAF0] bg-white px-4 py-3.5 shadow-[0_18px_40px_rgba(11,42,82,0.13)] sm:bottom-4 sm:-left-5"
              style={{ animationDelay: "-2s" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5EF] text-[#278456]">
                <CheckCircle2 size={20} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[#0B2A52] sm:text-[12px]">
                  Qualified B2B Enquiries
                </p>

                <p className="mt-1 text-[10px] text-[#0B2A52]/50">
                  Focused on buyer intent
                </p>
              </div>
            </div>

            {/* Small decorative accent */}
            <div
              aria-hidden="true"
              className="absolute bottom-[11%] right-[2%] h-2.5 w-2.5 rounded-full bg-[#B79A72]/55"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
