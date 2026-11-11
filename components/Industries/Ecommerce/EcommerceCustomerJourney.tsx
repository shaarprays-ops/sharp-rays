import {
  ArrowRight,
  BarChart3,
  Grid2X2,
  RefreshCw,
  Search,
  ShoppingCart,
  Star,
} from "lucide-react";

const journey = [
  {
    title: "Discover",
    description:
      "Google, AI Search, Instagram, Shopping Ads, Meta Ads",
    icon: Search,
  },
  {
    title: "Explore",
    description:
      "Categories, collections, product pages and brand content",
    icon: Grid2X2,
  },
  {
    title: "Evaluate",
    description:
      "Reviews, pricing, product benefits, comparisons and trust signals",
    icon: Star,
  },
  {
    title: "Buy",
    description:
      "Add to cart, checkout, offers and payment experience",
    icon: ShoppingCart,
  },
  {
    title: "Return",
    description:
      "Email, WhatsApp, remarketing, replenishment and repeat purchase",
    icon: RefreshCw,
  },
];

export default function EcommerceCustomerJourney() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-[#0B2A52]">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[260px] w-[1200px] -translate-x-1/2 rounded-[50%] bg-[#EAF3FD]/65 blur-[30px]" />
      <div className="pointer-events-none absolute -left-32 top-[45%] h-[250px] w-[420px] rounded-[50%] bg-[#EEF5FC]" />
      <div className="pointer-events-none absolute -right-32 top-[42%] h-[250px] w-[420px] rounded-[50%] bg-[#EEF5FC]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[1050px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#B79A72]/60" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              How Ecommerce Customers Actually Buy
            </p>

            <span className="h-px w-12 bg-[#B79A72]/60" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Your Customer Journey Starts Before
            <br className="hidden sm:block" /> Someone Reaches a Product Page
            <span className="text-[#B79A72]">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px]">
            Customers rarely discover a product and purchase instantly. They
            search, compare, explore, evaluate and often return before they buy.
          </p>
        </div>

        {/* Desktop Journey */}
        <div className="relative mt-14 hidden lg:block">
          {/* Wave */}
          <div className="pointer-events-none absolute left-0 right-0 top-[78px] h-[110px]">
            <div className="absolute left-0 top-[30px] h-[85px] w-[24%] rounded-[50%] bg-[#E9F2FB]/85" />
            <div className="absolute left-[18%] top-[5px] h-[100px] w-[24%] rounded-[50%] bg-[#EDF5FC]" />
            <div className="absolute left-[38%] top-[25px] h-[90px] w-[24%] rounded-[50%] bg-[#E9F2FB]/85" />
            <div className="absolute left-[58%] top-[2px] h-[100px] w-[24%] rounded-[50%] bg-[#EDF5FC]" />
            <div className="absolute right-0 top-[25px] h-[90px] w-[24%] rounded-[50%] bg-[#E9F2FB]/85" />
          </div>

          <div className="relative z-10 grid grid-cols-5 gap-6">
            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto flex h-[118px] w-[118px] items-center justify-center rounded-full border border-[#BDD6F4] bg-white/85 text-[#1D5AA7] shadow-[0_14px_35px_rgba(11,42,82,0.05)] backdrop-blur-sm">
                    <Icon size={34} strokeWidth={1.7} />
                  </div>

                  {index < journey.length - 1 && (
                    <div className="absolute left-[calc(50%+78px)] top-[49px] flex w-[calc(100%-130px)] items-center justify-center">
                      <span className="h-px flex-1 bg-[#8DB8E9]/55" />
                      <ArrowRight
                        size={20}
                        strokeWidth={1.5}
                        className="-ml-1 text-[#0B2A52]"
                      />
                    </div>
                  )}

                  <h3 className="mt-5 text-[23px] font-medium tracking-[-0.025em] text-[#0B2A52]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[230px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Journey */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-[22px] border border-[#0B2A52]/[0.07] bg-[#F8FBFE] p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#BDD6F4] bg-white text-[#1D5AA7]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#B79A72]">
                      Step 0{index + 1}
                    </span>

                    <h3 className="mt-1 text-[19px] font-medium tracking-[-0.02em]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#0B2A52]/65">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}