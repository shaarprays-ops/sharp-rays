const businessTypes = [
  "Hair Salons",
  "Beauty Salons",
  "Unisex Salons",
  "Luxury Salons",
  "Spas",
  "Nail Studios",
  "Bridal Makeup Studios",
  "Beauty Parlours",
  "Skin & Beauty Studios",
  "Wellness Centres",
  "Salon Chains",
  "Salon & Spa Franchises",
];

export default function BeautyWhoWeHelp() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">
      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#B79A72]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
                Who We Help
              </p>

              <span className="h-px w-7 bg-[#B79A72]" />
            </div>

            <h2 className="text-[30px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[34px] md:text-[38px] lg:text-[42px] xl:text-[44px]">
              Marketing for Different Types of Beauty Businesses.
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
              Your marketing strategy should reflect the services you offer,
              your location, your audience and how customers choose your
              business.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {businessTypes.map((item, index) => (
              <div
                key={item}
                className="group flex min-h-[82px] items-center justify-between rounded-[18px] border border-[#0B2A52]/[0.08] bg-[#FBFAF7] px-4 py-4 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#B79A72]/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(11,42,82,0.05)]"
              >
                <span className="text-[13px] font-medium leading-5 text-[#0B2A52]/85 sm:text-[14px]">
                  {item}
                </span>

                <span className="ml-4 text-[9px] font-semibold tracking-[0.14em] text-[#B79A72]/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}