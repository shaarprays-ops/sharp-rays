export default function BeautyMarketingIntro() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBFAF7] text-[#0B2A52]">
      <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-[#B79A72]/[0.05]" />
      <div className="pointer-events-none absolute -right-24 bottom-[-40px] h-48 w-48 rounded-full border border-[#0B2A52]/[0.05]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-14 lg:py-16 xl:px-20">
        <div className="mx-auto max-w-[980px] rounded-[26px] border border-[#0B2A52]/[0.07] bg-white/85 px-6 py-8 text-center shadow-[0_16px_45px_rgba(11,42,82,0.045)] backdrop-blur-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              Marketing Built Around How Beauty Businesses Grow
            </p>

            <span className="h-px w-7 bg-[#B79A72]" />
          </div>

          <h2 className="mx-auto max-w-[820px] text-[28px] font-medium leading-[1.12] tracking-[-0.025em] sm:text-[32px] md:text-[36px] lg:text-[40px]">
            Digital Marketing Built for Salons, Spas & Beauty Businesses.
          </h2>

          <div className="mx-auto mt-5 max-w-[850px]">
            <p className="text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Whether you run a hair salon, beauty salon, spa, nail studio,
              bridal makeup business or wellness centre, your marketing needs
              to do more than generate views.
            </p>

            <p className="mt-3 text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              We combine local SEO, Google Ads, social media marketing, website
              development and automation to help your business get discovered,
              build trust and turn more enquiries into appointments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}