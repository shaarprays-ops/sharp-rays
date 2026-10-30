
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  ShieldCheck,
  TrendingUp,
  Check,
  Users,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "Better Visibility",
    description: "Be discovered by relevant clients",
  },
  {
    icon: ShieldCheck,
    title: "Stronger Credibility",
    description: "Showcase your firm's expertise",
  },
  {
    icon: TrendingUp,
    title: "Relevant Enquiries",
    description: "Support quality client acquisition",
  },
];

const firmTypes = [
  "Consulting Firms",
  "Business Advisors",
  "Professional Service Providers",
  "B2B Service Firms",
];

export default function ProfessionalServicesHero() {
  return (
    <section
      id="professional-services-hero"
      aria-labelledby="professional-services-hero-heading"
className="relative isolate overflow-hidden bg-[#F8FBFD] pb-16 pt-20 text-[#0B2A52] sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28"    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-52 h-[480px] w-[480px] rounded-full border border-[#B79A72]/15" />
        <div className="absolute -right-24 -top-36 h-[350px] w-[350px] rounded-full border border-[#B79A72]/10" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#0B2A52]/[0.025] blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* MAIN HERO */}
        <div className="grid items-center gap-9 lg:grid-cols-[1.12fr_0.88fr] lg:gap-11 xl:gap-14">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#B79A72]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#B79A72] sm:text-[11px]">
                Digital Marketing for Professional Services
              </span>
            </div>

            {/* Heading */}
            <h1
              id="professional-services-hero-heading"
              className="max-w-[680px] font-serif text-[32px] font-normal leading-[1.16] tracking-[-0.035em] sm:text-[39px] lg:text-[43px] xl:text-[48px]"
            >
              Help the Right Clients Find Your Expertise{" "}
              <span className="text-[#B79A72]">
                and Choose Your Firm.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[630px] text-[13px] leading-[1.9] text-[#0B2A52]/70 sm:text-[14px]">
              Sharp Rays helps consulting firms, business advisors and
              professional service providers improve Google visibility,
              demonstrate expertise and attract relevant client enquiries
              through professional services SEO, credible websites,
              expert-led content, suitable advertising and efficient
              enquiry management.
            </p>

            {/* CTA ROW */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/contact?service=professional-services-marketing"
                title="Get My Professional Services Growth Plan"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[11px] bg-[#0B2A52] px-5 py-3 text-[11px] font-medium text-white shadow-[0_9px_24px_rgba(11,42,82,0.11)] transition-all duration-300 hover:bg-[#163C68] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:text-[12px]"
              >
                Get My Professional Services Growth Plan

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#professional-services-opportunities"
                title="Professional services opportunities"
                className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#0B2A52] transition-colors hover:text-[#B79A72]"
              >
                <span className="border-b border-[#B79A72]/60 pb-1">
                  Explore Growth Opportunities
                </span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* BENEFITS */}
            <div className="mt-9 grid gap-4 border-t border-[#DFE6EC] pt-6 sm:grid-cols-3 sm:gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] border border-[#E4E8ED] bg-white text-[#B79A72] transition-colors duration-300 group-hover:border-[#D8C3A7] group-hover:bg-[#FAF6F0]">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[11px] font-medium leading-[1.5] text-[#0B2A52] sm:text-[12px]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10px] leading-[1.6] text-[#0B2A52]/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            {/* Thin decorative outline */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-3 hidden h-full w-full rounded-[22px] border border-[#B79A72]/30 sm:block"
            />

            {/* Proper rectangular image */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#E4EAF0] shadow-[0_18px_50px_-30px_rgba(11,42,82,0.24)] sm:aspect-[5/4] lg:aspect-[4/4.1]">
              <Image
                src="/industries/professional-services/professional-services-hero.webp"
                alt="Professional business consultants discussing strategy together in a modern office"
                title="Digital Marketing for Professional Services — Sharp Rays"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B2A52]/20 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 right-3 z-10 flex max-w-[275px] items-center gap-3 rounded-[13px] border border-[#E6E8EA] bg-white/95 px-4 py-3 shadow-[0_12px_32px_rgba(11,42,82,0.1)] backdrop-blur-md sm:-bottom-6 sm:right-[-8px] sm:px-5 sm:py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#FAF5EE] text-[#B79A72]">
                <Users size={19} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.12em] text-[#B79A72]">
                  Your Expertise Matters
                </p>

                <p className="mt-1 font-serif text-[16px] font-normal leading-[1.3] text-[#0B2A52] sm:text-[17px]">
                  Let the right clients find it.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM INDUSTRY STRIP */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-[#DFE6EC] pt-6 sm:mt-16">
          {firmTypes.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-[11px] text-[#0B2A52]/65"
            >
              <Check
                size={13}
                strokeWidth={1.8}
                className="text-[#B79A72]"
              />

              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
