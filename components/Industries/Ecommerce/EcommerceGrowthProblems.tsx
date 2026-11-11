import {
  ArrowUpRight,
  CircleDollarSign,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";

const problems = [
  {
    title: "People Find Your Store, But Don’t Buy",
    description:
      "Weak product pages, unclear value, poor trust signals or a difficult shopping experience can reduce conversion even when traffic is strong.",
    visual: "conversion",
  },
  {
    title: "Paid Ads Are Getting Expensive",
    description:
      "When targeting, creatives, product feeds, offers or landing pages are weak, customer acquisition costs can rise quickly.",
    visual: "ads",
  },
  {
    title: "Your Products Are Hard to Find on Google",
    description:
      "Poor category structure, thin product content, weak internal linking or technical SEO issues can limit organic visibility.",
    visual: "seo",
  },
  {
    title: "Customers Buy Once and Don’t Return",
    description:
      "Without remarketing, lifecycle communication and retention campaigns, you may keep paying to acquire customers you already reached.",
    visual: "retention",
  },
];

function ProblemVisual({ type }: { type: string }) {
  if (type === "conversion") {
    return (
      <div className="relative mx-auto h-[135px] max-w-[260px]">
        <div className="absolute left-3 top-4 h-[100px] w-[195px] rounded-[18px] border border-[#D7E3F0] bg-white shadow-[0_10px_28px_rgba(11,42,82,0.06)]">
          <div className="flex gap-3 p-3">
            <div className="flex h-11 w-14 items-center justify-center rounded-[10px] bg-[#EAF2FA]">
              <ShoppingCart size={20} className="text-[#0B2A52]" />
            </div>

            <div className="flex-1 space-y-2 pt-1">
              <div className="h-2 w-full rounded-full bg-[#DCE5EF]" />
              <div className="h-2 w-[75%] rounded-full bg-[#E7EDF4]" />
              <div className="h-5 w-[58%] rounded-full bg-[#DCE5EF]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-2 flex h-14 w-14 items-center justify-center rounded-full border border-[#EEF2F6] bg-white text-[#B79A72] shadow-[0_8px_22px_rgba(11,42,82,0.1)]">
          <ShoppingCart size={23} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#B79A72] text-[12px] text-white">
            ×
          </span>
        </div>
      </div>
    );
  }

  if (type === "ads") {
    return (
      <div className="relative mx-auto flex h-[135px] max-w-[260px] items-end justify-center">
        <div className="flex h-[90px] items-end gap-3">
          {[32, 50, 72, 96].map((height, index) => (
            <div
              key={index}
              style={{ height }}
              className="w-8 rounded-t-[5px] bg-gradient-to-t from-[#0B2A52] to-[#315A8B]"
            />
          ))}
        </div>

        <ArrowUpRight
          size={62}
          strokeWidth={2}
          className="absolute right-8 top-1 text-[#B79A72]"
        />

        <div className="absolute bottom-2 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#B79A72] text-white shadow-[0_10px_25px_rgba(183,154,114,0.2)]">
          <CircleDollarSign size={25} />
        </div>
      </div>
    );
  }

  if (type === "seo") {
    return (
      <div className="relative mx-auto h-[135px] max-w-[260px]">
        <div className="absolute left-3 top-4 h-[100px] w-[190px] rounded-[18px] border border-[#D7E3F0] bg-white shadow-[0_10px_28px_rgba(11,42,82,0.06)]">
          <div className="flex items-center gap-1.5 border-b border-[#E8EEF5] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4285F4]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
          </div>

          <div className="px-3 py-3">
            <div className="mb-3 flex h-7 items-center rounded-full bg-[#EFF4F9] px-3">
              <span className="mr-2 text-[13px] font-semibold text-[#4285F4]">
                G
              </span>

              <div className="h-2 flex-1 rounded-full bg-[#D8E2EC]" />

              <Search size={12} className="ml-2 text-[#0B2A52]" />
            </div>

            <div className="space-y-2">
              <div className="h-2 w-[88%] rounded-full bg-[#E3EAF2]" />
              <div className="h-2 w-[74%] rounded-full bg-[#EDF1F6]" />
              <div className="h-2 w-[82%] rounded-full bg-[#E3EAF2]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(11,42,82,0.1)]">
          <Search size={28} className="text-[#0B2A52]" />

          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B2A52] text-[12px] text-white">
            !
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex h-[135px] max-w-[260px] items-center justify-center">
      <div className="absolute h-[95px] w-[95px] rounded-full border-[8px] border-[#B79A72]/60 border-l-transparent" />

      <div className="absolute left-[48px] flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(11,42,82,0.09)]">
        <UserRound size={24} className="text-[#0B2A52]" />
      </div>

      <div className="absolute right-[46px] flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(11,42,82,0.09)]">
        <ShoppingCart size={23} className="text-[#B79A72]" />
      </div>
    </div>
  );
}

export default function EcommerceGrowthProblems() {
  return (
    <section className="relative overflow-hidden bg-white text-[#0B2A52]">
      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              What May Be Limiting Your Growth?
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2 className="mx-auto max-w-[760px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px] min-[1920px]:text-[48px]">
            More Traffic Does Not Always{" "}
            <span className="text-[#B79A72]">Mean More Revenue.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[670px] text-[14px] leading-7 text-[#0B2A52]/70 sm:text-[15px] lg:text-[16px] lg:leading-8">
            Getting people to your ecommerce store is only the beginning.
            Growth becomes difficult when traffic does not convert,
            acquisition costs keep rising and customers rarely return.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {problems.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[390px] flex-col rounded-[24px] border border-[#0B2A52]/[0.07] bg-white p-5 shadow-[0_12px_35px_rgba(11,42,82,0.045)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#0B2A52]/[0.1] hover:shadow-[0_18px_45px_rgba(11,42,82,0.075)] sm:p-6"
            >
              {/* Visual */}
              <div className="rounded-[18px] border border-[#0B2A52]/[0.035] bg-[#F8FAFC] px-3 py-4">
                <ProblemVisual type={item.visual} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col">
                <h3 className="mt-6 text-[20px] font-medium leading-[1.14] tracking-[-0.025em] text-[#0B2A52] lg:text-[21px]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/68 sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}