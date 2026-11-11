import {
  Bot,
  FileSearch,
  Megaphone,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Store,
} from "lucide-react";

const growthStack = [
  {
    number: "01",
    title: "Ecommerce SEO",
    description:
      "Help your products, categories and collections get discovered organically.",
    icon: Search,
  },
  {
    number: "02",
    title: "Google Shopping & Search Ads",
    description:
      "Capture shoppers who are already showing active buying intent.",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Meta Ads",
    description:
      "Create demand, retarget visitors and test scalable campaign creatives.",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Product & Category Optimisation",
    description:
      "Improve search visibility, usability and conversion across key ecommerce pages.",
    icon: SlidersHorizontal,
  },
  {
    number: "05",
    title: "Content Marketing",
    description:
      "Build visibility around questions, comparisons and buying decisions.",
    icon: FileSearch,
  },
  {
    number: "06",
    title: "Retention & AI Automation",
    description:
      "Recover lost opportunities, improve follow-up and bring customers back.",
    icon: Bot,
  },
];

export default function EcommerceGrowthStack() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFD] text-[#0B2A52]">
      {/* Background */}
      <div className="pointer-events-none absolute -left-[220px] top-[140px] h-[480px] w-[480px] rounded-full bg-[#E7F1FA]/80" />
      <div className="pointer-events-none absolute -left-[120px] top-[220px] h-[300px] w-[300px] rounded-full border border-[#B79A72]/25" />
      <div className="pointer-events-none absolute -right-[220px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#EEF4FA]" />
      <div className="pointer-events-none absolute right-[8%] top-[-220px] h-[420px] w-[420px] rounded-full bg-[#F1E9DC]/45 blur-[20px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[850px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Your Ecommerce Growth Stack
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            The Channels We Bring Together to{" "}
            <span className="text-[#B79A72]">Grow Your Store.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[670px] text-[14px] leading-7 text-[#0B2A52]/66 sm:text-[15px] lg:leading-8">
            Ecommerce growth works best when search, paid media, content,
            conversion and retention support the same customer journey.
          </p>
        </div>

        {/* Main Layout */}
        <div className="mx-auto mt-14 max-w-[1280px] lg:mt-16">
          <div className="grid gap-5 lg:grid-cols-[1fr_320px_1fr] lg:items-center xl:grid-cols-[1fr_360px_1fr]">
            {/* Left */}
            <div className="space-y-5">
              {growthStack.slice(0, 3).map(
                ({ number, title, description, icon: Icon }) => (
                  <article
                    key={title}
                    className="group relative flex gap-5 rounded-[22px] border border-[#0B2A52]/[0.07] bg-white/80 p-5 shadow-[0_16px_40px_rgba(11,42,82,0.045)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(11,42,82,0.08)] sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#F5EFE6] text-[#B79A72]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-semibold tracking-[0.16em] text-[#B79A72]">
                          {number}
                        </span>

                        <span className="h-px w-7 bg-[#B79A72]/40" />
                      </div>

                      <h3 className="mt-2 text-[19px] font-medium leading-[1.18] tracking-[-0.02em] sm:text-[20px]">
                        {title}
                      </h3>

                      <p className="mt-2.5 max-w-[360px] text-[13px] leading-6 text-[#0B2A52]/62 sm:text-[14px]">
                        {description}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>

            {/* Center */}
            <div className="relative order-first mx-auto flex min-h-[330px] w-full max-w-[360px] items-center justify-center lg:order-none">
              <div className="absolute h-[300px] w-[300px] rounded-full border border-[#0B2A52]/[0.07]" />
              <div className="absolute h-[245px] w-[245px] rounded-full border border-[#B79A72]/25" />
              <div className="absolute h-[190px] w-[190px] rounded-full bg-[#EAF2FA]" />

              <div className="relative z-10 flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full bg-white shadow-[0_24px_60px_rgba(11,42,82,0.12)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2A52] text-white">
                  <Store size={21} strokeWidth={1.8} />
                </div>

                <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B2A52]/55">
                  Ecommerce
                </p>

                <p className="mt-1 text-[20px] font-medium tracking-[-0.025em]">
                  Growth
                </p>
              </div>

              <span className="absolute left-4 top-[48%] h-px w-14 bg-gradient-to-r from-transparent to-[#B79A72]/60 lg:left-0" />
              <span className="absolute right-4 top-[48%] h-px w-14 bg-gradient-to-l from-transparent to-[#B79A72]/60 lg:right-0" />
            </div>

            {/* Right */}
            <div className="space-y-5">
              {growthStack.slice(3).map(
                ({ number, title, description, icon: Icon }) => (
                  <article
                    key={title}
                    className="group relative flex gap-5 rounded-[22px] border border-[#0B2A52]/[0.07] bg-white/80 p-5 shadow-[0_16px_40px_rgba(11,42,82,0.045)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_50px_rgba(11,42,82,0.08)] sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#EEF4FA] text-[#0B2A52]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-semibold tracking-[0.16em] text-[#B79A72]">
                          {number}
                        </span>

                        <span className="h-px w-7 bg-[#B79A72]/40" />
                      </div>

                      <h3 className="mt-2 text-[19px] font-medium leading-[1.18] tracking-[-0.02em] sm:text-[20px]">
                        {title}
                      </h3>

                      <p className="mt-2.5 max-w-[360px] text-[13px] leading-6 text-[#0B2A52]/62 sm:text-[14px]">
                        {description}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-12 max-w-[820px] text-center">
          <div className="mx-auto mb-5 h-px w-20 bg-[#B79A72]/45" />

          <p className="text-[15px] font-medium leading-7 text-[#0B2A52]/75 sm:text-[16px]">
            From discovery to conversion to repeat purchase, every channel has
            a different role — but they work better when they are planned as
            one system.
          </p>
        </div>
      </div>
    </section>
  );
}