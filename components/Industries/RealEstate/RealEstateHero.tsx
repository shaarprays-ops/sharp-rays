
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Search,
  MessageSquareText,
  MapPinned,
  Building2,
  Check,
} from "lucide-react";

const journey = [
  { number: "01", label: "Discover", icon: Search },
  { number: "02", label: "Enquire", icon: MessageSquareText },
  { number: "03", label: "Site Visit", icon: MapPinned },
];

const services = [
  "Real Estate SEO",
  "Property Lead Generation",
  "Google & Meta Ads",
  "Landing Pages",
  "CRM Automation",
];

export default function RealEstateHero() {
  return (
    <section
      id="real-estate-hero"
      aria-labelledby="real-estate-hero-heading"
      className="relative isolate overflow-hidden bg-[#FCFAF7] text-[#0B2A52]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#E8DCCA]/25 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="grid items-center gap-12 pb-16 sm:gap-14 sm:pb-20 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 lg:pb-24 xl:gap-16">

          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 shrink-0 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A1845F] sm:text-[11px]">
                Digital Marketing for Real Estate
              </span>
            </div>

            <h1
              id="real-estate-hero-heading"
              className="max-w-[690px] font-serif text-[35px] font-normal leading-[1.15] tracking-[-0.035em] sm:text-[44px] lg:text-[46px] xl:text-[52px]"
            >
              Turn Property Searches Into{" "}
              <span className="text-[#B79A72]">
                Qualified Leads and Site Visits.
              </span>
            </h1>

            <div className="mt-6 max-w-[600px] space-y-4">
              <p className="text-[14px] leading-[1.9] text-[#344E64] sm:text-[15px]">
                Your next buyer may already be searching for a property,
                project or location you serve.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#63788A] sm:text-[14px]">
                Sharp Rays helps real estate developers, builders,
                brokers and property consultants improve Google
                visibility, generate relevant property enquiries
                and support site visits through real estate SEO,
                Google Ads, Meta campaigns, project landing pages
                and lead automation.
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact?service=real-estate-marketing"
                title="Get My Real Estate Growth Strategy"
                className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-[12px] bg-[#0B2A52] px-5 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#123B69] hover:shadow-[0_12px_28px_rgba(11,42,82,0.15)] sm:w-auto"
              >
                Get My Real Estate Growth Strategy
                <ArrowUpRight size={16} strokeWidth={1.5} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#real-estate-lead-opportunities"
                title="Explore How We Generate Real Estate Leads"
                className="group inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-[12px] border border-[#E4D9CB] bg-white px-5 py-3.5 text-center text-[12px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#B79A72] hover:bg-[#F8F2EA] sm:w-auto"
              >
                Explore How We Generate Leads
                <ArrowDown size={15} strokeWidth={1.5} className="shrink-0 text-[#B79A72] transition-transform group-hover:translate-y-0.5" />
              </Link>
            </div>

            {/* SUPPORTING SERVICES */}
            <div className="mt-9 max-w-[620px] border-t border-[#E7DED2] pt-6">
              <div className="flex items-center gap-2.5">
                <Check size={15} strokeWidth={1.5} className="text-[#B79A72]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#A1845F]">
                  Supporting Marketing Services
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                {services.map((service) => (
                  <span key={service} className="inline-flex items-center gap-2 text-[11px] leading-[1.6] text-[#63788A]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#B79A72]" />
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PROPERTY VISUAL */}
          <div className="relative mx-auto w-full min-w-0 max-w-[590px] pb-7 lg:ml-auto">

            {/* Decorative architectural lines */}
            <div aria-hidden="true" className="pointer-events-none absolute -left-2 -top-2 h-[42%] w-[44%] border-l border-t border-[#D0BA9C] sm:-left-4 sm:-top-4" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-2 bottom-5 h-[38%] w-[42%] border-b border-r border-[#D0BA9C] sm:-right-4 sm:bottom-3" />

            {/* Native image: bypass Next.js image optimisation */}
            <div className="group relative aspect-[5/5.1] overflow-hidden rounded-[17px] bg-[#E8E1D6] sm:aspect-[6/5] lg:aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/industries/real-estate/real-estate-hero.webp"
                alt="Modern residential apartment building with landscaped surroundings"
                title="Real Estate Marketing for Developers, Builders and Property Consultants"
                width={960}
                height={1200}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B263C]/60 via-transparent to-transparent" />

              {/* Image top label */}
              <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3 sm:left-6 sm:right-6 sm:top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 text-[10px] font-medium text-[#0B2A52] backdrop-blur-sm sm:px-4">
                  <Building2 size={14} strokeWidth={1.5} className="shrink-0 text-[#B79A72]" />
                  Property Marketing
                </span>

                <span className="font-serif text-[15px] text-white/90 sm:text-[17px]">
                  SR / 01
                </span>
              </div>

              {/* Image bottom text */}
              <div className="absolute bottom-20 left-5 right-5 sm:bottom-24 sm:left-8 sm:right-8">
                <span className="text-[9px] font-medium uppercase tracking-[0.17em] text-white/80">
                  From Discovery to Decision
                </span>

                <p className="mt-2 max-w-[350px] font-serif text-[23px] font-normal leading-[1.23] text-white sm:text-[29px]">
                  Help the right buyers discover the right properties.
                </p>
              </div>
            </div>

            {/* BUYER JOURNEY */}
            <div className="relative z-10 mx-3 -mt-14 rounded-[14px] border border-[#E9E0D5] bg-white px-4 py-4 shadow-[0_18px_40px_-25px_rgba(11,42,82,0.2)] sm:mx-7 sm:-mt-16 sm:px-6 sm:py-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#A1845F]">
                  The Property Buyer Journey
                </span>
                <span className="text-[10px] text-[#A1845F]">01 — 03</span>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {journey.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.number} className="flex min-w-0 items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F1E9] text-[#B79A72] sm:h-9 sm:w-9">
                        <Icon size={16} strokeWidth={1.5} />
                      </span>

                      <div className="min-w-0">
                        <span className="block text-[9px] text-[#B79A72]">
                          {step.number}
                        </span>
                        <span className="block text-[10px] font-medium text-[#344E64] sm:text-[12px]">
                          {step.label}
                        </span>
                      </div>

                      {index < journey.length - 1 && (
                        <ArrowRight size={13} strokeWidth={1.5} className="ml-auto hidden shrink-0 text-[#C0AC90] xl:block" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
