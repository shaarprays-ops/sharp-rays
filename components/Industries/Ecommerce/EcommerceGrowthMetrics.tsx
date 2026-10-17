import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  RefreshCw,
  Search,
  ShoppingBag,
  Target,
  WalletCards,
} from "lucide-react";

const metrics = [
  {
    number: "01",
    title: "Conversion Rate",
    description: "How effectively your traffic turns into customers.",
    icon: Target,
    label: "Traffic → Customers",
  },
  {
    number: "02",
    title: "Customer Acquisition Cost",
    description: "How much it costs to acquire each new customer.",
    icon: WalletCards,
    label: "Spend → Acquisition",
  },
  {
    number: "03",
    title: "ROAS",
    description: "How efficiently advertising spend generates revenue.",
    icon: BarChart3,
    label: "Ad Spend → Revenue",
  },
  {
    number: "04",
    title: "Average Order Value",
    description: "How much customers spend per purchase.",
    icon: ShoppingBag,
    label: "Order → Value",
  },
  {
    number: "05",
    title: "Repeat Purchase Rate",
    description: "How often customers return and buy again.",
    icon: RefreshCw,
    label: "Purchase → Repeat",
  },
  {
    number: "06",
    title: "Organic Revenue",
    description: "How much revenue comes from unpaid search visibility.",
    icon: Search,
    label: "Search → Revenue",
  },
];

export default function EcommerceGrowthMetrics() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      {/* Desktop Background Image Only */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/industries/ecommerce/ecommerce-metrics-bg.webp"
          alt="Ecommerce analytics and growth performance background"
          title="Ecommerce Growth Metrics and Performance"
          fill
          sizes="100vw"
          className=" object-center"
        />

        {/* Desktop readability overlay */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Mobile Background — NO IMAGE */}
      <div className="absolute inset-0 bg-[#F8FBFD] lg:hidden" />

      {/* Mobile decorative shapes */}
      <div className="pointer-events-none absolute -right-24 top-10 h-56 w-56 rounded-full bg-[#E5F0FB]/70 blur-[45px] lg:hidden" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-[#F2E9DC]/50 blur-[45px] lg:hidden" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              What Actually Matters
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            We Focus on the Numbers That Affect{" "}
            <span className="text-[#B79A72]">
              Ecommerce Growth.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px]">
            More traffic is useful only when it contributes to healthier
            revenue and stronger unit economics.
          </p>
        </div>

        {/* Metrics */}
        <div className="mx-auto mt-12 max-w-[1220px] overflow-hidden rounded-[28px] border border-[#0B2A52]/[0.07] bg-white/72 shadow-[0_20px_60px_rgba(11,42,82,0.06)] backdrop-blur-[14px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map(({ number, title, description, icon: Icon, label }, index) => (
              <article
                key={title}
                className={`group relative min-h-[230px] p-6 transition-colors duration-300 hover:bg-white/75 sm:p-7 ${
                  index < 3 ? "lg:border-b lg:border-[#0B2A52]/[0.07]" : ""
                } ${
                  index % 3 !== 2
                    ? "lg:border-r lg:border-[#0B2A52]/[0.07]"
                    : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-[#0B2A52]/[0.07] lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F0E5] text-[#B79A72]">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>

                  <span className="text-[10px] font-semibold tracking-[0.15em] text-[#0B2A52]/25">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-[20px] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[21px]">
                  {title}
                </h3>

                <p className="mt-3 max-w-[330px] text-[13px] leading-6 text-[#0B2A52]/62 sm:text-[14px]">
                  {description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-[#0B2A52]/[0.06] pt-4">
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.8}
                    className="text-[#B79A72]"
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0B2A52]/38">
                    {label}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-8 flex max-w-[900px] items-start justify-center gap-3 text-center">
          <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B79A72]/10 text-[#B79A72]">
            <ArrowDownRight size={13} strokeWidth={1.8} />
          </span>

          <p className="max-w-[760px] text-[14px] font-medium leading-7 text-[#0B2A52]/75 sm:text-[15px]">
            The goal is not vanity traffic. It is profitable acquisition,
            stronger conversion and more repeat revenue.
          </p>
        </div>
      </div>
    </section>
  );
}