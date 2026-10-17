import {
  BadgeCheck,
  Box,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const searchGroups = [
  {
    title: "Broad Category Searches",
    description:
      "These searches are often best served by category or collection pages.",
    icon: ShoppingBag,
    terms: [
      "men's running shoes",
      "women's ethnic wear",
      "organic skincare",
      "office chairs",
      "protein snacks",
    ],
  },
  {
    title: "Specific Product Searches",
    description:
      "These searches usually show stronger purchase intent and need focused product pages.",
    icon: Box,
    terms: [
      "black running shoes size 9",
      "vitamin c serum for oily skin",
      "wooden office desk 4 feet",
      "cotton kurta under ₹1500",
      "wireless headphones under ₹3000",
    ],
  },
  {
    title: "Commercial Research Searches",
    description:
      "These shoppers are comparing options, benefits and alternatives before buying.",
    icon: Search,
    terms: [
      "best serum for acne",
      "best running shoes for beginners",
      "product A vs product B",
      "best office chair for back support",
      "best skincare products for oily skin",
    ],
  },
  {
    title: "Brand & Product Searches",
    description:
      "Customers may also search directly for a brand, product, price or review.",
    icon: BadgeCheck,
    terms: [
      "[brand] running shoes",
      "[brand] skincare reviews",
      "[product name] price",
      "[brand] vs [competitor]",
    ],
  },
];

export default function EcommerceSearchIntent() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      {/* Soft Background */}
      <div className="pointer-events-none absolute -left-40 top-[-150px] h-[430px] w-[430px] rounded-full bg-[#DFECF9]/60 blur-[50px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[430px] w-[430px] rounded-full bg-[#E9F2FB]/70 blur-[50px]" />
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-white/60 blur-[70px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="max-w-[900px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Where We Help You Get Discovered
            </p>
          </div>

          <h2 className="max-w-[840px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            We Help Your Products Appear for{" "}
            <span className="text-[#B79A72]">
              Searches With Buying Intent.
            </span>
          </h2>

          <p className="mt-5 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:text-[16px]">
            Different ecommerce searches require different pages. We build SEO
            around what the shopper is actually trying to find.
          </p>
        </div>

        {/* Search Intent Groups */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {searchGroups.map(({ title, description, icon: Icon, terms }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[26px] border border-[#0B2A52]/[0.08] bg-white/82 p-6 shadow-[0_16px_45px_rgba(11,42,82,0.05)] backdrop-blur-[12px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#B79A72]/25 hover:shadow-[0_22px_55px_rgba(11,42,82,0.08)] sm:p-7"
            >
              {/* Number */}
              <span className="pointer-events-none absolute -right-3 -top-8 text-[110px] font-medium leading-none tracking-[-0.08em] text-[#0B2A52]/[0.035]">
                0{index + 1}
              </span>

              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F6EFE5] text-[#B79A72]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#B79A72]">
                      Search Intent 0{index + 1}
                    </span>

                    <h3 className="mt-1.5 text-[20px] font-medium leading-[1.15] tracking-[-0.025em] sm:text-[22px]">
                      {title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-[#0B2A52]/62 sm:text-[14px]">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {terms.map((term) => (
                    <span
                      key={term}
                      className="inline-flex items-center gap-2 rounded-full border border-[#0B2A52]/[0.07] bg-[#F8FBFD] px-3.5 py-2 text-[11px] font-medium text-[#0B2A52]/75 sm:text-[12px]"
                    >
                      <Search
                        size={12}
                        strokeWidth={1.8}
                        className="shrink-0 text-[#B79A72]"
                      />

                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Strategy Line */}
        <div className="mt-8 flex flex-col gap-4 rounded-[22px] border border-[#0B2A52]/[0.07] bg-white/65 px-5 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6EFE5] text-[#B79A72]">
              <Sparkles size={14} strokeWidth={1.8} />
            </span>

            <p className="max-w-[850px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
              We build your SEO and content strategy around the searches that
              can move customers closer to purchase.
            </p>
          </div>

          <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#B79A72] sm:text-[10px]">
            Discover → Compare → Buy
          </span>
        </div>
      </div>
    </section>
  );
}