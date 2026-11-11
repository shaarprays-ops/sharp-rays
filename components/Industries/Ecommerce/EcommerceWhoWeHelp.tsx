import Image from "next/image";
import {
  ArrowRight,
  Grid2X2,
  Headphones,
  HeartPulse,
  Home,
  RefreshCw,
  Shirt,
  ShoppingBag,
  Store,
  Utensils,
  WandSparkles,
} from "lucide-react";

const categories = [
  {
    title: "Fashion & Apparel",
    image: "/industries/ecommerce/categories/fashion.webp",
    alt: "Fashion and apparel ecommerce products including clothing and accessories",
    titleText: "Fashion and Apparel Ecommerce Marketing",
    icon: Shirt,
  },
  {
    title: "Beauty & Skincare",
    image: "/industries/ecommerce/categories/beauty.webp",
    alt: "Beauty and skincare products for ecommerce marketing",
    titleText: "Beauty and Skincare Ecommerce Marketing",
    icon: WandSparkles,
  },
  {
    title: "Health & Wellness Products",
    image: "/industries/ecommerce/categories/wellness.webp",
    alt: "Health and wellness products sold through ecommerce stores",
    titleText: "Health and Wellness Ecommerce Marketing",
    icon: HeartPulse,
  },
  {
    title: "Food & Beverage",
    image: "/industries/ecommerce/categories/food.webp",
    alt: "Food and beverage products for ecommerce brands",
    titleText: "Food and Beverage Ecommerce Marketing",
    icon: Utensils,
  },
  {
    title: "Home & Furniture",
    image: "/industries/ecommerce/categories/home.webp",
    alt: "Furniture and home products for ecommerce stores",
    titleText: "Home and Furniture Ecommerce Marketing",
    icon: Home,
  },
  {
    title: "Electronics",
    image: "/industries/ecommerce/categories/electronics.webp",
    alt: "Electronics and technology products for ecommerce stores",
    titleText: "Electronics Ecommerce Marketing",
    icon: Headphones,
  },
  {
    title: "Accessories",
    image: "/industries/ecommerce/categories/accessories.webp",
    alt: "Fashion accessories and bags for ecommerce brands",
    titleText: "Accessories Ecommerce Marketing",
    icon: ShoppingBag,
  },
  {
    title: "D2C Brands",
    image: "/industries/ecommerce/categories/d2c.webp",
    alt: "Direct to consumer product packaging for ecommerce brands",
    titleText: "D2C Brand Ecommerce Marketing",
    icon: Store,
  },
  {
    title: "Subscription Products",
    image: "/industries/ecommerce/categories/subscription.webp",
    alt: "Subscription ecommerce products and recurring product boxes",
    titleText: "Subscription Product Ecommerce Marketing",
    icon: RefreshCw,
  },
  {
    title: "Multicategory Ecommerce Stores",
    image: "/industries/ecommerce/categories/multicategory.webp",
    alt: "Multiple ecommerce product packages representing a multi-category online store",
    titleText: "Multi-category Ecommerce Store Marketing",
    icon: Grid2X2,
  },
];

export default function EcommerceWhoWeHelp() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      {/* Soft decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-56 h-[580px] w-[580px] rounded-full bg-[#E7F1FC]/75" />
      <div className="pointer-events-none absolute -right-20 -top-44 h-[470px] w-[470px] rounded-full bg-white" />
      <div className="pointer-events-none absolute -left-32 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#EAF3FC]/50 blur-[45px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="max-w-[950px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              Who We Help
            </p>
          </div>

          <h2 className="max-w-[900px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            Built for Ecommerce Brands{" "}
            <span className="text-[#B79A72]">
              Across Different Categories.
            </span>
          </h2>

          <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-[#0B2A52]/68 sm:text-[15px] lg:text-[16px]">
            We adapt the growth strategy around your products, margins,
            customer behaviour and purchase cycle.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map(
            ({ title, image, alt, titleText, icon: Icon }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[20px] border border-[#0B2A52]/[0.07] bg-white shadow-[0_12px_34px_rgba(11,42,82,0.05)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#B79A72]/25 hover:shadow-[0_18px_45px_rgba(11,42,82,0.08)]"
              >
                {/* Card Header */}
                <div className="flex min-h-[88px] items-center gap-3 px-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7F0E5] text-[#0B2A52]">
                    <Icon size={19} strokeWidth={1.7} />
                  </span>

                  <h3 className="min-w-0 flex-1 text-[15px] font-medium leading-[1.2] tracking-[-0.02em] text-[#0B2A52] sm:text-[16px]">
                    {title}
                  </h3>

                  <ArrowRight
                    size={15}
                    strokeWidth={1.7}
                    className="shrink-0 text-[#0B2A52]/75 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                {/* Image */}
                <div className="relative mx-2 mb-2 aspect-[1.9/1] overflow-hidden rounded-[13px] bg-[#EDF4FA]">
                  <Image
                    src={image}
                    alt={alt}
                    title={titleText}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}