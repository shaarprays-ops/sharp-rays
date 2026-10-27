
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function ProfessionalServicesFinalCTA() {
  return (
    <section
      id="professional-services-final-cta"
      aria-labelledby="professional-final-cta-heading"
      className="bg-white px-5 pb-20 pt-4 text-[#0B2A52] sm:px-8 sm:pb-24 lg:px-10 lg:pb-28"
    >
      <div className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[23px] border border-[#E8DDCE] bg-[#F8F4ED] px-6 py-11 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        {/* Decorative champagne rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full border border-[#DCC7AA]/55 sm:-right-24" />
          <div className="absolute -right-16 -top-24 h-[335px] w-[335px] rounded-full border border-[#DCC7AA]/40" />
          <div className="absolute right-4 top-2 h-[220px] w-[220px] rounded-full border border-[#DCC7AA]/30" />
          <div className="absolute -bottom-40 left-10 h-[300px] w-[300px] rounded-full bg-white/50 blur-[90px]" />
        </div>

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          {/* Left */}
          <div className="max-w-[750px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#9F815C]">
                Let's Grow Your Professional Presence
              </span>
            </div>

            <h2
              id="professional-final-cta-heading"
              className="font-serif text-[30px] font-normal leading-[1.2] tracking-[-0.035em] sm:text-[38px] lg:text-[43px]"
            >
              Your Next Client May Be Looking for Exactly{" "}
              <span className="text-[#B79A72]">
                the Expertise You Offer.
              </span>
            </h2>

            <p className="mt-5 max-w-[650px] text-[13px] leading-[1.95] text-[#566C80] sm:text-[14px]">
              Tell us about your professional services, target
              clients and growth objectives. We'll help you
              explore a relevant digital strategy built around
              visibility, credibility and suitable client enquiries.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Relevant Search Visibility",
                "Professional Credibility",
                "Qualified Enquiry Opportunities",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-[11px] text-[#786A57] sm:text-[12px]"
                >
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.6}
                    className="text-[#B79A72]"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="w-full max-w-[340px] lg:text-right">
              <span className="font-serif text-[47px] leading-none text-[#B79A72]/45 sm:text-[58px]">
                &ldquo;
              </span>

              <p className="-mt-3 font-serif text-[19px] font-normal leading-[1.5] text-[#43576B] sm:text-[21px]">
                The right strategy starts with understanding
                your firm.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact?service=professional-services-marketing"
                  className="group inline-flex min-h-[51px] w-full items-center justify-center gap-3 rounded-[12px] bg-[#0B2A52] px-5 py-3.5 text-center text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#173D69] hover:shadow-[0_13px_28px_rgba(11,42,82,0.16)] motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72]"
                >
                  Get My Professional Services Growth Plan

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              <div className="mt-5 flex items-start gap-2 lg:justify-end">
                <ShieldCheck
                  size={15}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#B79A72]"
                />
                <p className="text-[11px] leading-[1.7] text-[#887C6D]">
                  Share business goals, not confidential client information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom signature */}
        <div className="relative mt-11 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2D5C3] pt-5 sm:mt-13">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#9F8767]">
            Sharp Rays / Professional Services
          </span>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[11px] text-[#7B6C57] transition-colors hover:text-[#B79A72]"
          >
            Explore All Services
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
