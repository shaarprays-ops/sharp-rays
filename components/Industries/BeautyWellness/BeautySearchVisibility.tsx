import {
  Search,
  Sparkles,
} from "lucide-react";

const searchClusters = [
  {
    title: "Salon Searches",
    terms: [
      "salon near me",
      "beauty salon near me",
      "hair salon in [location]",
      "best salon in [location]",
    ],
  },
  {
    title: "Treatment Searches",
    terms: [
      "keratin treatment near me",
      "facial near me",
      "hair treatment near me",
      "nail extensions near me",
      "hair spa near me",
    ],
  },
  {
    title: "Spa & Wellness Searches",
    terms: [
      "spa near me",
      "body spa in [location]",
      "wellness centre in [city]",
    ],
  },
  {
    title: "Bridal & Occasion Searches",
    terms: [
      "bridal makeup artist in [city]",
      "bridal salon near me",
      "party makeup in [location]",
    ],
  },
];

const phoneSearches = [
  "salon near me",
  "beauty salon near me",
  "hair salon in delhi",
  "best salon in delhi",
  "keratin treatment near me",
  "facial near me",
  "hair treatment near me",
  "nail extensions near me",
  "spa near me",
  "body spa in delhi",
  "bridal makeup artist in delhi",
  "party makeup in delhi",
];

export default function BeautySearchVisibility() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      {/* Soft Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,#f7fbfd_0%,#ffffff_43%,#f6eee4_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-[-120px] h-[430px] w-[430px] rounded-full bg-[#DCEAF5]/45 blur-[70px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[-80px] h-[520px] w-[520px] rounded-full bg-[#E8D7BE]/30 blur-[65px]" />

      {/* Decorative architecture */}
      <div className="pointer-events-none absolute right-[5%] top-0 hidden h-full w-[32%] lg:block">
        <div className="absolute right-0 top-[-90px] h-[640px] w-[330px] rounded-t-[180px] border-[2px] border-[#B79A72]/25" />
        <div className="absolute right-[34px] top-[-40px] h-[560px] w-[265px] rounded-t-[150px] bg-white/25 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-16">
          {/* Left */}
          <div className="max-w-[820px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
                Where We Help You Get Discovered
              </p>
            </div>

            <h2 className="max-w-[780px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              We Help You Show Up for the{" "}
              <span className="text-[#B79A72]">
                Searches That Matter to Your Business.
              </span>
            </h2>

            {/* Search Clusters */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {searchClusters.map((cluster) => (
                <article
                  key={cluster.title}
                  className="rounded-[22px] border border-[#0B2A52]/[0.08] bg-white/76 p-5 shadow-[0_10px_30px_rgba(11,42,82,0.045)] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72]">
                      <Search size={15} strokeWidth={1.8} />
                    </span>

                    <h3 className="text-[15px] font-medium tracking-[-0.015em] text-[#0B2A52] sm:text-[16px]">
                      {cluster.title}
                    </h3>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {cluster.terms.map((term) => (
                      <div
                        key={term}
                        className="flex items-center gap-3 text-[#0B2A52]/72"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B79A72]" />

                        <span className="text-[12px] leading-5 sm:text-[13px]">
                          {term}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 max-w-[720px] text-[14px] leading-7 text-[#0B2A52]/72 sm:text-[15px] lg:text-[16px]">
              We build your SEO and advertising strategy around the services,
              treatments and locations your customers are actively searching
              for.
            </p>

            <span className="mt-5 block h-px w-20 bg-[#B79A72]" />
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto hidden min-h-[600px] w-full max-w-[620px] lg:block">
            {/* Gold orbit */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[410px] w-[510px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#B79A72]/35" />

            {/* Phone */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[570px] w-[285px] -translate-x-1/2 -translate-y-1/2 rotate-[2deg] rounded-[46px] border-[7px] border-[#161616] bg-[#111] p-[7px] shadow-[0_30px_70px_rgba(0,0,0,0.22)]">
              <div className="relative h-full overflow-hidden rounded-[36px] bg-white">
                {/* Dynamic island */}
                <div className="absolute left-1/2 top-3 z-20 h-[24px] w-[84px] -translate-x-1/2 rounded-full bg-black" />

                {/* Phone content */}
                <div className="px-5 pb-6 pt-12">
                  <div className="text-center">
                    <p className="text-[27px] font-semibold tracking-[-0.04em]">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-full border border-[#0B2A52]/10 bg-white px-3 py-2.5 shadow-[0_5px_18px_rgba(11,42,82,0.08)]">
                    <Search size={14} className="text-[#0B2A52]/70" />

                    <span className="text-[10px] font-medium text-[#0B2A52]">
                      salon near me
                    </span>

                    <Sparkles
                      size={13}
                      className="ml-auto text-[#B79A72]"
                    />
                  </div>

                  <div className="mt-4 space-y-3">
                    {phoneSearches.map((term) => (
                      <div
                        key={term}
                        className="flex items-center gap-3 text-[#0B2A52]/75"
                      >
                        <Search size={12} className="shrink-0" />

                        <span className="text-[9px] leading-4">
                          {term}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Side button */}
              <span className="absolute -right-[10px] top-[115px] h-[62px] w-[4px] rounded-r bg-[#303030]" />
            </div>

            {/* Base Platform */}
            <div className="absolute bottom-[-30px] left-1/2 h-[95px] w-[520px] -translate-x-1/2 rounded-t-[70px] border border-[#B79A72]/10 bg-[#F3E9DD]/80 shadow-[0_-10px_40px_rgba(183,154,114,0.08)]" />
          </div>

          {/* Mobile Visual */}
          <div className="relative mx-auto flex w-full max-w-[360px] justify-center lg:hidden">
            <div className="relative h-[500px] w-[250px] rounded-[42px] border-[6px] border-[#151515] bg-[#111] p-[6px] shadow-[0_28px_60px_rgba(0,0,0,0.20)]">
              <div className="relative h-full overflow-hidden rounded-[32px] bg-white">
                <div className="absolute left-1/2 top-3 h-[22px] w-[72px] -translate-x-1/2 rounded-full bg-black" />

                <div className="px-5 pb-5 pt-12">
                  <div className="text-center">
                    <p className="text-[24px] font-semibold tracking-[-0.04em]">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 rounded-full border border-[#0B2A52]/10 px-3 py-2.5 shadow-[0_4px_15px_rgba(11,42,82,0.07)]">
                    <Search size={13} />

                    <span className="text-[9px] font-medium">
                      salon near me
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {phoneSearches.slice(0, 8).map((term) => (
                      <div
                        key={term}
                        className="flex items-center gap-3 text-[#0B2A52]/70"
                      >
                        <Search size={11} />

                        <span className="text-[8px]">
                          {term}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}