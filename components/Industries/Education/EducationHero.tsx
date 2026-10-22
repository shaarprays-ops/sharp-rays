
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function EducationHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#F7FAFD] text-[#0B2A52]">
      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/industries/education/education-hero.webp"
          alt="Modern university campus with graduation cap, books and study materials"
          title="Digital Marketing for Education Institutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Desktop White-to-Image Gradient */}
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white via-white/95 to-white/5 lg:block" />

      {/* Extra White Gradient for Text Readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[66%] bg-gradient-to-r from-white via-white/85 to-transparent lg:block" />

      {/* Soft Curved Shape */}
      <div className="pointer-events-none absolute -left-[27%] -top-[46%] hidden h-[165%] w-[86%] rounded-[50%] bg-white/45 blur-[3px] lg:block" />

      {/* Decorative Curved Background */}
      <div className="pointer-events-none absolute -left-[12%] -bottom-[48%] hidden h-[75%] w-[65%] rounded-[50%] bg-[#F0F6FC]/85 lg:block" />

      {/* Mobile Background — No Image */}
      <div className="pointer-events-none absolute inset-0 bg-[#F7FAFD] lg:hidden" />

      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1500px] items-center px-5 py-20 sm:min-h-[600px] sm:px-8 md:px-10 lg:min-h-[660px] lg:px-14 lg:py-24 xl:min-h-[700px] xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        <div className="max-w-[760px] lg:w-[59%]">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#B79A72]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Digital Marketing for Education
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-[760px] text-[36px] font-medium leading-[1.07] tracking-[-0.035em] sm:text-[43px] md:text-[48px] lg:text-[46px] xl:text-[54px] min-[1920px]:text-[62px]">
            Turn Student Searches Into Qualified Enquiries and{" "}
            <span className="text-[#B79A72]">Admissions.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:max-w-[610px] lg:text-[16px] lg:leading-8">
            We help schools, colleges, universities, coaching institutes and
            education brands attract prospective students through SEO, Google
            Ads, social media marketing, admission-focused websites and
            automated enquiry follow-ups.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact?industry=education#contact-form"
              title="Get My Education Growth Plan"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[14px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white shadow-[0_8px_22px_rgba(11,42,82,0.12)] transition-all duration-300 hover:bg-[#17416D] sm:w-auto"
            >
              Get My Education Growth Plan
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="#education-services"
              title="Explore How We Help Education Institutions"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[14px] border border-[#0B2A52]/35 bg-white/80 px-6 text-[12px] font-medium text-[#0B2A52] backdrop-blur-sm transition-all duration-300 hover:border-[#0B2A52] hover:bg-white sm:w-auto"
            >
              Explore How We Help
              <ArrowRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
