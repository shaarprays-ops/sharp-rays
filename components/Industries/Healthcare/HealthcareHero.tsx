import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HealthcareHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]">
      {/* Desktop Background */}
      <div className="absolute inset-y-0 right-0 hidden w-[76%] lg:block">
        <Image
          src="/industries/healthcare/healthcare_hospital_desktop.webp"
          alt="Modern healthcare clinic interior with reception desk and waiting area"
          title="Digital Marketing for Healthcare Businesses"
          fill
          priority
          sizes="(min-width: 1024px) 76vw, 0px"
          className=" object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.9)_22%,rgba(255,255,255,0.45)_42%,rgba(255,255,255,0.06)_62%,rgba(255,255,255,0)_100%)]" />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/industries/healthcare/healthcare_hospital_mobile.webp"
          alt="Premium healthcare clinic environment for medical marketing"
          title="Healthcare Digital Marketing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/55" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%," />
      </div>

      {/* Soft decorative layers */}
      <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-[260px] w-[260px] rounded-full bg-[#EEF5FB]/80 blur-[22px]" />
      <div className="pointer-events-none absolute -right-24 top-[-100px] h-[240px] w-[240px] rounded-full bg-[#EEF5FB]/50 blur-[26px] lg:hidden" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        <div className="flex min-h-[580px] items-center py-14 sm:min-h-[640px] sm:py-16 md:min-h-[680px] lg:min-h-[720px] lg:py-20 xl:min-h-[760px]">
          <div className="max-w-[760px] lg:w-[52%] xl:max-w-[790px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <span className="h-px w-7 bg-[#B79A72]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
                Digital Marketing for Healthcare
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-[720px] text-[34px] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[60px] min-[1920px]:text-[64px]">
              Help More Patients Find and Trust Your{" "}
              <span className="text-[#B79A72]">Healthcare Business.</span>
            </h1>

            {/* Copy */}
            <p className="mt-5 max-w-[690px] text-[14px] leading-7 text-[#0B2A52]/70 sm:mt-6 sm:text-[15px] lg:text-[16px] lg:leading-8">
              We help hospitals, clinics, doctors and healthcare providers
              improve their Google visibility, communicate their medical
              services clearly and make appointment enquiries easier through
              healthcare SEO, local search, Google Ads, websites and patient
              communication solutions.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <Link
                href="/contact?industry=healthcare#contact-form"
                title="Get My Healthcare Growth Strategy"
                className="group inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[14px] bg-[#0B2A52] px-4 text-[11px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#123B69] hover:shadow-[0_14px_34px_rgba(11,42,82,0.16)] sm:min-h-[48px] sm:px-6 sm:text-[12px]"
              >
                Get My Healthcare Growth Strategy
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#healthcare-how-we-help"
                title="Explore How We Help Healthcare Businesses"
                className="group inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[14px] border border-[#0B2A52]/18 bg-white/75 px-4 text-[11px] font-medium text-[#0B2A52] backdrop-blur-sm transition-all duration-300 hover:border-[#B79A72]/50 hover:bg-white sm:min-h-[48px] sm:px-6 sm:text-[12px]"
              >
                Explore How We Help
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}