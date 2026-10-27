
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Coffee,
  UtensilsCrossed,
  ChefHat,
  ShoppingBag,
  CakeSlice,
  Store,
  Sparkles,
} from "lucide-react";

const restaurantBusinesses = [
  {
    number: "01",
    title: "Cafés & Coffee Shops",
    category: "CAFÉS & COFFEE",
    icon: Coffee,
    description:
      "Improve nearby discovery, promote signature drinks and café experiences, build Instagram visibility and encourage regular visits from local customers.",
    image:
      "https://images.openai.com/static-rsc-4/Ohry01P5NHuVzvUtgpll8v5iC9chaHE5ef84juTHwgcKboxFgqaNYzHvtYaBPcfdFFsrAh2HZ4ARucnf8qcB5GR2yL1a91Tro2wVgB0G9zjn2uXpBz1Xzf-Z93LzL8a7GuLB_21_QKbyyF7sFEhX9km0h0PffEHy6xix_wdhud4?purpose=inline",
    imageAlt: "Premium café and coffee shop",
    size: "large",
    position: "object-center",
  },
  {
    number: "02",
    title: "Fine Dining & Premium Restaurants",
    category: "PREMIUM DINING",
    icon: UtensilsCrossed,
    description:
      "Build visibility around premium dining experiences, curated menus, reservations, special occasions and strong restaurant presentation.",
    image:
      "https://images.openai.com/static-rsc-4/m5-PXwISYWuZVCciSpAplV48I40na_CyWfzQyAWdTBJe0SvFJTC134UbyfimnlWYFB9QZ1cr0P4MoCrLC5j1vI68IGFPtTQDN3-oNOkACOE1RcFfTYAiL6_LuaJC5AX4DjPyzUz6tJaWk9OSUCbUeaJETnLduer0UXOKufIiq-E?purpose=inline",
    imageAlt: "Premium restaurant dining experience",
    size: "medium",
    position: "object-center",
  },
  {
    number: "03",
    title: "Cloud Kitchens & Delivery Brands",
    category: "DELIVERY FIRST",
    icon: ChefHat,
    description:
      "Focus on food discovery, menu presentation, relevant delivery-area demand, smoother ordering journeys and strategies that encourage repeat orders.",
    image:
      "https://images.openai.com/static-rsc-4/1CSPID_pdbr-gNn-HWM8nQ2TchjP3BH881jWs4fibm6-3EJHeQrgnEsMyo3ZconpGhIX_nltv48ycKKexH5wzxG_IK4lg8hogF2GsUQxmiJeqeX_qTCC7d4CS-JWow2HJbI6CCGe5IKPQ-D-Koxgeuje0PkoeDL-tbHuIjwtTX8?purpose=inline",
    imageAlt: "Cloud kitchen food preparation and delivery",
    size: "small",
    position: "object-center",
  },
  {
    number: "04",
    title: "QSR & Fast-Casual Restaurants",
    category: "QUICK SERVICE",
    icon: ShoppingBag,
    description:
      "Support nearby discovery, menu promotions, convenience-focused campaigns, outlet visibility and frequent customer visits.",
    image:
      "https://images.openai.com/static-rsc-4/h33YTSls1BEWgTdmMeU5-GuH24L9LWtlSQr9hHKaoG0Ef47bRPnUbfuw3adxaks1gpmT5KLBxm-pnOT0HvYxKy2Ig9bqaLTiLBCXhs0G1ZjIwb8Or_zNwR_Nz5PrkrBqAl7lZCGVbG6CX33MyvB0XfljQMGBr-ENb9Ja53P_lBo?purpose=inline",
    imageAlt: "Fast casual restaurant food experience",
    size: "small",
    position: "object-center",
  },
  {
    number: "05",
    title: "Bakeries & Dessert Businesses",
    category: "BAKERIES & DESSERTS",
    icon: CakeSlice,
    description:
      "Promote speciality products, festive collections, celebration orders, local searches and product-led social media content.",
    image:
      "https://images.openai.com/static-rsc-4/A9SUcghDh05EcxpZkArxRQ-O-C9dD3s9qgj8K8vjAy5AJ6Djbsn9ssSjFNvAvX1f7UYdSkblFbtvyiY2MQS9vkZbrLTmlD9eFDRcGjeZ1FRBeu5Au-eGZKWjKQovxxUKQkXSnHYvYQd_SqtSK9NXXtDcxjO9zNK7ALqQwJKQaTo?purpose=inline",
    imageAlt: "Artisan bakery and dessert presentation",
    size: "small",
    position: "object-center",
  },
  {
    number: "06",
    title: "Restaurant Chains & Multi-Location Brands",
    category: "MULTI-LOCATION BRANDS",
    icon: Store,
    description:
      "Improve individual outlet discovery through location pages, consistent business information, coordinated campaigns and locally relevant customer communication.",
    image:
      "https://images.openai.com/static-rsc-4/Rx6u2Mj74B05oXERkwLqTPQ0-gAYJn9CthtxE2GvP2fgj4_WXQebdVy23SgyEl-KyIv5ItgZsFlxarW_e5XrAxUEJ2nzohDJ7YAJHQnRNaeGyg_i5JjxaTCyK82rNfJ-jWHYN1AZT1wcpstTUpetwe1JhzvokzsgU-aU7BWHhG0?purpose=inline",
    imageAlt: "Restaurant chain and branded dining experience",
    size: "wide",
    position: "object-center",
  },
];

export default function RestaurantBusinesses() {
  return (
    <section
      id="restaurant-businesses"
      aria-labelledby="restaurant-businesses-heading"
      className="relative isolate overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 top-0 h-[470px] w-[470px] rounded-full bg-[#B79A72]/[0.055] blur-[100px]" />
        <div className="absolute -left-48 bottom-20 h-[480px] w-[480px] rounded-full bg-[#0B2A52]/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =============================== */}
        {/* CENTERED SECTION INTRO          */}
        {/* =============================== */}

        <div className="mx-auto max-w-[810px] text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <span className="font-serif text-[11px] font-normal uppercase tracking-[0.16em] text-[#B79A72] sm:text-[12px]">
              Restaurant Businesses We Work With
            </span>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          {/* Heading */}
          <h2
            id="restaurant-businesses-heading"
            className="mx-auto max-w-[790px] font-serif text-[30px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[37px] lg:text-[43px]"
          >
            Your Restaurant Type Changes How{" "}
            <span className="text-[#B79A72]">
              Customers Find and Choose You.
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mt-6 max-w-[690px] space-y-3">
            <p className="text-[13px] leading-[1.95] text-[#0B2A52]/70 sm:text-[14px]">
              A neighbourhood café, fine-dining restaurant and cloud
              kitchen do not need identical marketing strategies.
            </p>

            <p className="text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
              We adapt your restaurant digital marketing plan to your
              business model, customer preferences, location and
              commercial goals.
            </p>
          </div>
        </div>

        {/* =============================== */}
        {/* PORTFOLIO INTRO LINE             */}
        {/* =============================== */}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#E2E8ED] pb-5 lg:mt-16">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E0D5] bg-[#FAF7F2] text-[#B79A72]">
              <Sparkles size={16} strokeWidth={1.5} />
            </span>

            <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-[#0B2A52]/75">
              Explore Restaurant Categories
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-serif text-[13px] text-[#B79A72]">
              01 — 06
            </span>

            <span className="h-px w-7 bg-[#D9C5A8]" />

            <span className="text-[10px] uppercase tracking-[0.12em] text-[#91A0AE]">
              Different Businesses. Different Strategies.
            </span>
          </div>
        </div>

        {/* =============================== */}
        {/* EDITORIAL SHOWCASE GRID          */}
        {/* =============================== */}

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {restaurantBusinesses.map((business, index) => {
            const Icon = business.icon;

            const gridClasses =
              index === 0
                ? "md:col-span-7"
                : index === 1
                ? "md:col-span-5"
                : index >= 2 && index <= 4
                ? "md:col-span-4"
                : "md:col-span-12";

            const heightClasses =
              index <= 1
                ? "min-h-[400px] sm:min-h-[440px] lg:min-h-[500px]"
                : index === 5
                ? "min-h-[390px] sm:min-h-[420px] lg:min-h-[400px]"
                : "min-h-[380px] sm:min-h-[410px] lg:min-h-[440px]";

            const isWide = index === 5;

            return (
              <article
                key={business.number}
                className={`group relative isolate overflow-hidden rounded-[19px] bg-[#0B2A52] ${gridClasses} ${heightClasses}`}
              >
                {/* Full-bleed Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={business.image}
                    alt={business.imageAlt}
                    fill
                    unoptimized
                    sizes={
                      isWide
                        ? "(max-width: 768px) 100vw, 95vw"
                        : index <= 1
                        ? "(max-width: 768px) 100vw, 55vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className={`object-cover ${business.position} transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.07]`}
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A30]/95 via-[#071A30]/45 to-[#071A30]/10 transition-colors duration-500" />

                  {/* Additional color balance */}
                  <div className="absolute inset-0 bg-[#0B2A52]/10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* Subtle Border */}
                <div className="pointer-events-none absolute inset-0 rounded-[19px] border border-white/10 transition-colors duration-500 group-hover:border-[#D4B88E]/60" />

                {/* Corner accent */}
                <span className="pointer-events-none absolute right-0 top-0 h-[75px] w-[75px] border-r border-t border-[#D4B88E]/0 transition-all duration-500 group-hover:border-[#D4B88E]/55" />

                {/* Content Layer */}
                <div
                  className={`relative flex h-full flex-col justify-between p-6 text-white sm:p-7 lg:p-8 ${
                    isWide ? "lg:p-10" : ""
                  }`}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-[17px] font-normal text-[#E0C8A6]">
                        {business.number}
                      </span>

                      <span className="h-px w-7 bg-white/40" />

                      <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/75 sm:text-[10px]">
                        {business.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-[12px] border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:border-[#D4B88E]/70 group-hover:bg-[#B79A72] group-hover:text-[#0B2A52]">
                      <Icon size={21} strokeWidth={1.45} />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div
                    className={`relative mt-20 ${
                      isWide
                        ? "lg:flex lg:items-end lg:justify-between lg:gap-12"
                        : ""
                    }`}
                  >
                    <div className={isWide ? "max-w-[820px]" : ""}>
                      {/* Small gold bar */}
                      <span className="mb-4 block h-[2px] w-9 bg-[#D4B88E] transition-all duration-500 group-hover:w-16" />

                      {/* Business Title */}
                      <h3
                        className={`max-w-[460px] font-serif font-normal leading-[1.2] tracking-[-0.03em] ${
                          isWide
                            ? "text-[28px] sm:text-[34px] lg:max-w-[650px] lg:text-[39px]"
                            : index >= 2 && index <= 4
                            ? "text-[25px] sm:text-[28px] lg:text-[29px]"
                            : "text-[28px] sm:text-[33px] lg:text-[36px]"
                        }`}
                      >
                        {business.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`mt-4 text-[12px] leading-[1.9] text-white/80 sm:text-[13px] ${
                          isWide
                            ? "max-w-[680px]"
                            : "max-w-[480px]"
                        }`}
                      >
                        {business.description}
                      </p>
                    </div>

                    {/* Animated detail marker */}
                    <div
                      className={`mt-6 flex items-center gap-3 ${
                        isWide
                          ? "lg:mt-0 lg:shrink-0"
                          : ""
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#E0C8A6]">
                        Tailored Marketing
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#D4B88E] group-hover:bg-[#D4B88E] group-hover:text-[#0B2A52]">
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom animated line */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D4B88E] transition-all duration-700 ease-out group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* =============================== */}
        {/* FINAL EDITORIAL STATEMENT        */}
        {/* =============================== */}

        <div className="mt-12 border-t border-[#E2E8ED] pt-9 sm:mt-14 lg:mt-16">
          <div className="grid items-start gap-7 lg:grid-cols-[0.3fr_0.7fr] lg:gap-14">
            {/* Left Caption */}
            <div className="flex items-start gap-3">
              <span className="mt-2 h-px w-8 shrink-0 bg-[#B79A72]" />

              <span className="text-[10px] font-medium uppercase leading-[1.9] tracking-[0.15em] text-[#B79A72]">
                A Strategy That Fits
                <br />
                Your Restaurant
              </span>
            </div>

            {/* Closing Copy */}
            <div>
              <p className="max-w-[850px] font-serif text-[22px] font-normal leading-[1.5] tracking-[-0.025em] text-[#0B2A52] sm:text-[27px] lg:text-[30px]">
                We build restaurant marketing around{" "}
                <span className="text-[#B79A72]">
                  your cuisine, locations, ordering options,
                  customer behaviour and business goals
                </span>{" "}
                — not a one-size-fits-all campaign.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6DDD1] bg-[#FAF7F2] text-[#B79A72]">
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                  />
                </span>

                <span className="text-[11px] uppercase tracking-[0.13em] text-[#0B2A52]/60">
                  Built Around Your Business Model
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
