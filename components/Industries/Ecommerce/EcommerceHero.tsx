import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EcommerceHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-[#0B2A52]">
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/industries/ecommerce/ecommerce-desktop.webp"
          alt="Ecommerce growth visual with online store, shopping cart and sales performance"
          title="Digital Marketing for Ecommerce Brands"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Desktop readability fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/72 to-transparent xl:via-white/58 2xl:via-white/48" />
      </div>

      {/* Mobile / Tablet Background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/industries/ecommerce/ecommerce-mobile.webp"
          alt="Mobile ecommerce marketing visual with online shopping and sales growth"
          title="Ecommerce Digital Marketing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Mobile readability */}
        <div className="absolute inset-0 bg-white/86 sm:bg-white/82 md:bg-white/78" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:max-w-[1650px] min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px] min-[3840px]:max-w-[2800px]">
        <div className="flex min-h-[520px] items-center py-14 sm:min-h-[550px] sm:py-16 md:min-h-[570px] lg:min-h-[600px] lg:py-18 xl:min-h-[640px] xl:py-20 2xl:min-h-[680px] min-[1920px]:min-h-[720px] min-[2560px]:min-h-[780px] min-[3840px]:min-h-[900px]">
          <div className="w-full max-w-[700px] lg:w-[52%] xl:w-[48%] 2xl:max-w-[760px] min-[1920px]:max-w-[800px] min-[2560px]:max-w-[880px] min-[3840px]:max-w-[980px]">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5 sm:gap-3">
              <span className="h-px w-5 shrink-0 bg-[#B79A72] sm:w-7" />

              <p className="text-[9px] font-medium uppercase leading-5 tracking-[0.16em] text-[#B79A72] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px] min-[1920px]:text-[12px]">
                Digital Marketing for Ecommerce
              </p>

              <span className="hidden h-px w-7 shrink-0 bg-[#B79A72] sm:block" />
            </div>

            {/* Heading */}
            <h1 className="max-w-[680px] text-[30px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[34px] md:text-[38px] lg:text-[40px] xl:text-[44px] 2xl:text-[46px] min-[1920px]:max-w-[760px] min-[1920px]:text-[48px] min-[2560px]:max-w-[820px] min-[2560px]:text-[52px] min-[3840px]:max-w-[900px] min-[3840px]:text-[56px]">
              Turn More Product Searches Into{" "}
              <span className="text-[#B79A72]">
                Profitable Sales.
              </span>
            </h1>

            {/* Copy */}
            <p className="mt-5 max-w-[640px] text-[13px] leading-6 text-[#0B2A52]/72 sm:mt-6 sm:text-[14px] sm:leading-7 md:text-[15px] lg:text-[15px] xl:max-w-[660px] xl:text-[16px] min-[1920px]:max-w-[700px] min-[1920px]:text-[17px] min-[1920px]:leading-8 min-[2560px]:max-w-[760px] min-[2560px]:text-[18px] min-[3840px]:max-w-[820px] min-[3840px]:text-[19px]">
              We help ecommerce brands grow through SEO, Google Shopping, Meta
              Ads, conversion-focused product and category pages, content, and
              retention strategies built around profitable customer
              acquisition.
            </p>

            {/* CTA */}
            <div className="mt-7 sm:mt-8 min-[1920px]:mt-9">
              <Link
                href="/contact?industry=ecommerce#contact-form"
                title="Build My Ecommerce Growth Plan"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-3 rounded-[15px] bg-[#0B2A52] px-5 text-[11px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#123B69] hover:shadow-[0_14px_35px_rgba(11,42,82,0.16)] sm:w-auto sm:min-h-[50px] sm:px-6 sm:text-[12px] min-[1920px]:min-h-[52px] min-[1920px]:px-7 min-[1920px]:text-[13px] min-[2560px]:min-h-[54px] min-[2560px]:px-8"
              >
                Build My Ecommerce Growth Plan

                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}