
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Factory,
  Package,
  Settings2,
  Globe2,
} from "lucide-react";

const manufacturingIndustries = [
  {
    title: "OEM & Component Manufacturers",
    description:
      "Improve visibility for technical components, engineering capabilities, product specifications and custom manufacturing enquiries.",
    image: "/industries/manufacturing/oem-manufacturing.webp",
    alt: "Precision manufacturing machinery producing industrial components",
    imageTitle: "OEM and Component Manufacturing Services",
    tag: "Precision & Components",
  },
  {
    title: "Machinery & Equipment Manufacturers",
    description:
      "Help buyers discover your machinery, understand product features, compare applications and submit quotation requests.",
    image: "/industries/manufacturing/machinery-manufacturing.webp",
    alt: "Industrial machinery and manufacturing equipment",
    imageTitle: "Machinery and Equipment Manufacturers",
    tag: "Machinery & Equipment",
  },
  {
    title: "Fabrication & Contract Manufacturers",
    description:
      "Reach businesses searching for CNC machining, metal fabrication, component production and custom manufacturing services.",
    image: "/industries/manufacturing/fabrication-manufacturing.webp",
    alt: "Industrial metal fabrication and contract manufacturing facility",
    imageTitle: "Fabrication and Contract Manufacturing Services",
    tag: "Custom Production",
  },
  {
    title: "Industrial Suppliers & Exporters",
    description:
      "Improve discoverability for product sourcing searches and develop clear supplier information for domestic and international markets.",
    image: "/industries/manufacturing/industrial-exporters.webp",
    alt: "Industrial products prepared for logistics and export",
    imageTitle: "Industrial Suppliers and Exporters",
    tag: "Supply & Export",
  },
];

const strategyPoints = [
  {
    icon: Package,
    title: "Standard Product Manufacturers",
    description:
      "Product-category SEO and relevant buyer searches.",
  },
  {
    icon: Settings2,
    title: "Custom Manufacturers",
    description:
      "Capability pages, technical content and RFQ pathways.",
  },
  {
    icon: Globe2,
    title: "Industrial Exporters",
    description:
      "Market-specific product content and international targeting.",
  },
];

export default function ManufacturingWhoWeHelp() {
  return (
    <section
      id="manufacturing-who-we-help"
      aria-labelledby="manufacturing-who-heading"
      className="relative overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">

        {/* CENTERED SECTION HEADER */}
        <div className="mx-auto max-w-[970px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 shrink-0 bg-[#B79A72]" />

            <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
              Manufacturing Businesses We Support
            </p>

            <span className="h-px w-8 shrink-0 bg-[#B79A72]" />
          </div>

          <h2
            id="manufacturing-who-heading"
            className="mx-auto max-w-[930px] text-[32px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            Whether You Manufacture Standard Products or Custom Components,{" "}
            <span className="text-[#B79A72]">
              Your Buyers Search Differently.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[750px] text-[14px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            Different manufacturing companies need different search
            strategies. We adapt digital marketing around your products,
            production capabilities, customer requirements and target markets.
          </p>
        </div>

        {/* FOUR INDUSTRY CARDS */}
        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4 lg:gap-5">
          {manufacturingIndustries.map((industry) => (
            <article
              key={industry.title}
              className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#E2E8EF] bg-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#D6C1A1] hover:shadow-[0_16px_35px_rgba(11,42,82,0.07)]"
            >
              {/* IMAGE */}
              <div className="relative h-[210px] overflow-hidden bg-[#F0F3F5] sm:h-[225px] xl:h-[205px]">
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  title={industry.imageTitle}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.045]"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] font-normal uppercase tracking-[0.13em] text-[#B79A72]">
                  {industry.tag}
                </p>

                <h3 className="mt-3 text-[19px] font-normal leading-[1.22] tracking-[-0.025em] text-[#0B2A52] sm:text-[20px]">
                  {industry.title}
                </h3>

                <p className="mt-4 text-[13px] font-normal leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                  {industry.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-[#E6ECF1]" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* STRATEGY AREA */}
        <div className="mt-16 border-t border-[#E2E8EF] pt-12 sm:mt-20 lg:mt-24 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.43fr_0.57fr] lg:items-start lg:gap-16 xl:gap-20">

            {/* LEFT CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72]">
                  A Strategy Built Around Your Business
                </p>
              </div>

              <h3 className="mt-5 max-w-[560px] text-[28px] font-normal leading-[1.15] tracking-[-0.03em] sm:text-[32px] lg:text-[36px]">
                Your Manufacturing Business Needs{" "}
                <span className="text-[#B79A72]">
                  Its Own Growth Strategy.
                </span>
              </h3>

              <p className="mt-6 max-w-[540px] text-[13px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                A standard product manufacturer may need strong
                product-category SEO. A custom manufacturer may benefit
                more from capability pages and technical RFQs. An exporter
                may require market-specific product content and
                international search targeting.
              </p>

              <p className="mt-4 max-w-[540px] text-[13px] font-normal leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                We help identify the combination of marketing services
                most relevant to your business.
              </p>

              <Link
                href="/contact"
                title="Discuss My Manufacturing Marketing Requirements"
                className="group mt-7 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-[11px] bg-[#0B2A52] px-5 py-3.5 text-center text-[12px] font-normal text-white transition-all duration-300 hover:bg-[#173D69] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:w-auto sm:px-6 sm:text-[13px]"
              >
                Discuss My Manufacturing Marketing Requirements

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* RIGHT STRATEGY LIST */}
            <div>
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-normal uppercase tracking-[0.17em] text-[#B79A72]">
                    Different Businesses. Different Priorities.
                  </p>

                  <h4 className="mt-3 text-[23px] font-normal leading-[1.2] tracking-[-0.025em] text-[#0B2A52] sm:text-[26px]">
                    Marketing That Matches Your Model.
                  </h4>
                </div>

                <Factory
                  size={25}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#B79A72]"
                />
              </div>

              {/* THREE STRATEGY ROWS */}
              <div className="border-t border-[#E2E8EF]">
                {strategyPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.title}
                      className="group flex items-start gap-4 border-b border-[#E2E8EF] py-6 sm:gap-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-[#E4EBF1] bg-[#F8FAFC] text-[#0B2A52] transition-colors duration-300 group-hover:border-[#E9DCC9] group-hover:bg-[#F8F2E9] group-hover:text-[#B79A72]">
                        <Icon size={21} strokeWidth={1.6} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <h5 className="text-[17px] font-normal leading-[1.3] tracking-[-0.02em] text-[#0B2A52] sm:text-[18px]">
                          {point.title}
                        </h5>

                        <p className="mt-2 text-[13px] font-normal leading-6 text-[#0B2A52]/62 sm:text-[14px]">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-start gap-3">
                <Check
                  size={17}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-[#B79A72]"
                />

                <p className="max-w-[560px] text-[12px] font-normal leading-6 text-[#0B2A52]/60 sm:text-[13px]">
                  Services selected around actual manufacturing capabilities,
                  buyer requirements and target markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
