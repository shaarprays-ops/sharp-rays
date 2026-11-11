import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BeautyWellnessHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]">
      {/* Desktop / Large Screen Image */}
      <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block xl:w-[64%] 2xl:w-[68%] min-[1920px]:w-[66%] min-[2560px]:w-[64%] min-[3840px]:w-[62%]">
        <Image
          src="/industries/wellness-beauty/beauty-hero.webp"
          alt="Luxury salon and wellness interior with spa towels, flowers and beauty products"
          title="Digital Marketing for Salons, Spas and Beauty Businesses"
          fill
          priority
          sizes="(min-width: 3840px) 62vw, (min-width: 2560px) 64vw, (min-width: 1920px) 66vw, (min-width: 1536px) 68vw, (min-width: 1280px) 64vw, (min-width: 1024px) 58vw, 0px"
          className="object-cover object-center"
        />

        {/* Image Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent xl:via-white/35 min-[1920px]:via-white/30" />
      </div>

      {/* Mobile / Tablet Image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/industries/wellness-beauty/beauty-hero2.webp"
          alt="Premium beauty and wellness spa setting for salon and wellness marketing"
          title="Beauty and Wellness Digital Marketing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />

        <div className="absolute inset-0 bg-white/88 sm:bg-white/84 md:bg-white/80" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1700px] min-[1920px]:px-24 min-[2560px]:max-w-[2100px] min-[2560px]:px-28 min-[3840px]:max-w-[2800px] min-[3840px]:px-36">
        <div className="flex min-h-[520px] items-center py-14 sm:min-h-[540px] sm:py-16 md:min-h-[560px] md:py-16 lg:min-h-[580px] lg:py-16 xl:min-h-[620px] xl:py-20 2xl:min-h-[650px] min-[1920px]:min-h-[700px] min-[2560px]:min-h-[760px] min-[3840px]:min-h-[880px]">
          {/* Content */}
          <div className="w-full max-w-[720px] lg:w-[52%] xl:w-[50%] min-[1920px]:max-w-[780px] min-[2560px]:max-w-[850px] min-[3840px]:max-w-[950px]">
            {/* Eyebrow */}
            <div className="mb-4 flex max-w-full items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-px w-5 shrink-0 bg-[#B79A72] sm:w-7 min-[1920px]:w-9" />

              <p className="text-[9px] font-medium uppercase leading-5 tracking-[0.16em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] min-[1920px]:text-[12px] min-[2560px]:text-[13px]">
                Digital Marketing for Salons, Spas & Beauty Businesses
              </p>

              <span className="hidden h-px w-7 shrink-0 bg-[#B79A72] sm:block min-[1920px]:w-9" />
            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-[30px] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[34px] md:text-[38px] lg:text-[40px] xl:text-[44px] 2xl:text-[46px] min-[1920px]:max-w-[760px] min-[1920px]:text-[48px] min-[2560px]:max-w-[820px] min-[2560px]:text-[52px] min-[3840px]:max-w-[900px] min-[3840px]:text-[56px]">
              Get More Salon & Spa Bookings Through{" "}
              <span className="text-[#B79A72]">
                Google, Maps, Social Media and Paid Ads.
              </span>
            </h1>

            {/* Copy */}
            <p className="mt-5 max-w-[640px] text-[13px] leading-6 text-[#0B2A52]/70 sm:mt-6 sm:text-[14px] sm:leading-7 md:text-[15px] lg:text-[15px] xl:text-[16px] min-[1920px]:max-w-[700px] min-[1920px]:text-[17px] min-[1920px]:leading-8 min-[2560px]:max-w-[760px] min-[2560px]:text-[18px] min-[3840px]:max-w-[830px] min-[3840px]:text-[19px]">
              We help beauty and wellness businesses improve local visibility,
              attract the right audience through Google and social media, and
              turn more enquiries into appointments and repeat customers.
            </p>

            {/* CTA */}
            <div className="mt-7 sm:mt-8 min-[1920px]:mt-9">
              <Link
                href="/contact?industry=beauty-wellness#contact-form"
                title="Get My Beauty and Wellness Growth Strategy"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-[15px] bg-[#0B2A52] px-5 text-[11px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#123B69] hover:shadow-[0_14px_35px_rgba(11,42,82,0.16)] sm:w-auto sm:px-6 sm:text-[12px] min-[1920px]:min-h-[52px] min-[1920px]:px-7 min-[1920px]:text-[13px] min-[2560px]:min-h-[54px] min-[2560px]:px-8"
              >
                Get My Growth Strategy

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 min-[1920px]:h-[17px] min-[1920px]:w-[17px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}