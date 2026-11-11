import { CheckCircle2 } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Ecommerce SEO",
    intro:
      "We improve how your products, categories and collections appear across search.",
    points: [
      "Category & collection SEO",
      "Product page optimisation",
      "Technical SEO",
      "Internal linking",
      "Structured data and schema",
      "Faceted navigation and filter SEO",
      "Content strategy",
      "AI search visibility",
    ],
  },
  {
    number: "02",
    title: "Google Shopping & Performance Marketing",
    intro:
      "We help you reach shoppers who are already searching for products like yours through:",
    points: [
      "Google Search",
      "Google Shopping",
      "Performance Max",
      "Remarketing",
      "Product feed optimisation",
      "Landing page alignment",
    ],
  },
  {
    number: "03",
    title: "Meta Ads",
    intro:
      "We use Meta Ads to create product discovery, build demand and retarget people who have already interacted with your brand.",
    points: [
      "Product discovery",
      "New customer acquisition",
      "Retargeting",
      "Abandoned purchase journeys",
      "Offers and promotions",
      "Creative testing",
    ],
  },
  {
    number: "04",
    title: "Product & Category Page Optimisation",
    intro: "Your ecommerce pages should do two jobs:",
    highlight: "Rank better. Convert better.",
    description:
      "We improve page structure, content, internal linking, product information, trust signals and conversion paths so visitors can understand your products and make decisions faster.",
  },
  {
    number: "05",
    title: "Content Marketing",
    intro:
      "We create content that supports shoppers before and during their buying journey.",
    points: [
      "Buying guides",
      "Product comparisons",
      "Category guides",
      "Product education",
      "Use-case content",
      "FAQs",
      "Seasonal content",
      "Search-led articles",
    ],
  },
  {
    number: "06",
    title: "Retention & AI Automation",
    intro:
      "Growth should not depend entirely on acquiring a new customer for every order. We can build workflows around:",
    points: [
      "Abandoned-cart follow-ups",
      "Post-purchase communication",
      "Review requests",
      "Repeat-purchase reminders",
      "Replenishment reminders",
      "WhatsApp campaigns",
      "Win-back campaigns",
      "Remarketing audiences",
    ],
  },
];

export default function EcommerceGrowthServices() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFD] text-[#0B2A52]">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(222,236,249,0.75),transparent_35%),radial-gradient(circle_at_top_right,rgba(232,240,248,0.65),transparent_32%),linear-gradient(to_bottom,#fbfdff,#f7fbfd)]" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Header */}
        <div className="mx-auto max-w-[930px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#B79A72]/60" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A72] sm:text-[11px]">
              What Sharp Rays Can Do for Your Store
            </p>

            <span className="h-px w-12 bg-[#B79A72]/60" />
          </div>

          <h2 className="text-[32px] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            What We Can Build to Help
            <br className="hidden sm:block" /> Your Ecommerce Brand Grow
            <span className="text-[#B79A72]">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px]">
            We connect search visibility, paid acquisition, conversion and
            retention so your marketing works as one growth system instead of
            disconnected channels.
          </p>
        </div>

        {/* Services Matrix */}
        <div className="mt-12 grid lg:grid-cols-3">
          {services.map((service, index) => {
            const isTopRow = index < 3;
            const isMiddleColumn = index % 3 === 1;
            const isRightColumn = index % 3 === 2;

            return (
              <article
                key={service.number}
                className={[
                  "relative px-0 py-8 sm:px-4 lg:px-8 lg:py-10",
                  isTopRow
                    ? "border-b border-[#0B2A52]/10"
                    : "",
                  !isRightColumn
                    ? "lg:border-r lg:border-[#0B2A52]/10"
                    : "",
                  isMiddleColumn ? "" : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DDEBFA] text-[15px] font-medium text-[#1B5EAB]">
                    {service.number}
                  </div>

                  <div className="min-w-0">
                    <h3 className="max-w-[340px] text-[21px] font-medium leading-[1.18] tracking-[-0.025em] text-[#0B2A52] sm:text-[23px]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-[390px] text-[13px] leading-6 text-[#0B2A52]/70 sm:text-[14px]">
                      {service.intro}
                    </p>

                    {service.highlight && (
                      <p className="mt-3 text-[14px] font-medium text-[#0B2A52]">
                        {service.highlight}
                      </p>
                    )}

                    {service.description && (
                      <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-[#0B2A52]/70 sm:text-[14px]">
                        {service.description}
                      </p>
                    )}

                    {service.points && (
                      <div className="mt-4 space-y-2">
                        {service.points.map((point) => (
                          <div key={point} className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={16}
                              strokeWidth={1.8}
                              className="mt-[2px] shrink-0 text-[#3478D4]"
                            />

                            <span className="text-[13px] leading-5 text-[#0B2A52]/76 sm:text-[14px]">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}