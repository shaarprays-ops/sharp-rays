import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BeautyWellnessHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]">
      {/* Desktop Image */}
      <div className="absolute inset-y-0 right-0 hidden w-[76%] lg:block">
        <Image
          src="/industries/wellness-beauty/beauty-hero.webp"
          alt="Luxury salon and wellness interior with spa towels, flowers and beauty products"
          title="Digital Marketing for Beauty and Wellness Businesses"
          fill
          priority
          sizes="56vw"
          className="object-cover object-center"
        />

        {/* Soft fade into text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
      </div>

      {/* Mobile Image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/industries/wellness-beauty/beauty-hero2.webp"
          alt="Premium beauty and wellness spa setting for salon and wellness marketing"
          title="Beauty and Wellness Digital Marketing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-white/86" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        <div className="flex min-h-[560px] items-center py-16 sm:min-h-[600px] sm:py-20 lg:min-h-[620px] lg:py-20">
          <div className="max-w-[720px] lg:w-[52%]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#B79A72]" />

              <p className="text-[10px]  uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
             Digital Marketing for Salons, Spas & Beauty Businesses
              </p>
               <span className="h-px w-7 bg-[#B79A72]" />
            </div>

            <h1 className="max-w-[700px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
             Get More Salon & Spa Bookings Through {" "}
              <span className="text-[#B79A72]">
              Google, Maps, Social Media and Paid Ads.
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:text-[16px]">
              We help beauty and wellness businesses improve local visibility,
              attract the right audience through Google and social media, and
              turn more enquiries into appointments and repeat customers.
            </p>

            <div className="mt-8">
              <Link
                href="/contact?industry=beauty-wellness#contact-form"
                title="Get My Beauty and Wellness Growth Strategy"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[15px] bg-[#0B2A52] px-6 text-[12px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#123B69] hover:shadow-[0_14px_35px_rgba(11,42,82,0.16)]"
              >
                Get My Growth Strategy

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