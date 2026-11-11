
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  Factory,
  FileText,
  Globe2,
  Layers3,
  Package,
  Ruler,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const websiteFeatures = [
  {
    icon: Package,
    title: "Products & Applications",
    description:
      "Show what you manufacture, available product categories, applications and relevant product information.",
  },
  {
    icon: Ruler,
    title: "Technical Specifications",
    description:
      "Provide available materials, dimensions, grades, tolerances and other relevant product specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Capabilities & Quality",
    description:
      "Present your production processes, machinery, quality practices and verifiable certifications.",
  },
  {
    icon: ClipboardList,
    title: "Quotation Requests",
    description:
      "Make it easy to share drawings, quantities, delivery requirements and product details through RFQ forms.",
  },
];

const websiteServices = [
  "Structured Product Pages",
  "Technical Content",
  "Capability Sections",
  "Downloadable Catalogues",
  "Responsive Layouts",
  "Clear RFQ Pathways",
];

function ManufacturingWebsitePreview() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#DCE5ED] bg-white shadow-[0_18px_55px_rgba(11,42,82,0.09)]">
      {/* Browser Bar */}
      <div className="flex h-11 items-center justify-between gap-3 border-b border-[#E6ECF1] bg-[#FAFBFC] px-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#D3DCE5]" />
          <span className="h-2 w-2 rounded-full bg-[#D3DCE5]" />
          <span className="h-2 w-2 rounded-full bg-[#D3DCE5]" />
        </div>

        <div className="flex min-w-0 max-w-[230px] flex-1 items-center justify-center gap-2 rounded-[6px] border border-[#E6ECF1] bg-white px-2 py-1.5">
          <Globe2 size={11} className="shrink-0 text-[#0B2A52]/45" />
          <span className="truncate text-[9px] text-[#0B2A52]/50">
            manufacturing-website.example
          </span>
        </div>

        <span className="h-2 w-5 rounded-full bg-[#E1E7ED]" />
      </div>

      {/* Website Navigation */}
      <div className="flex min-h-[65px] items-center justify-between gap-3 border-b border-[#E8EEF3] px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#0B2A52] text-white">
            <Factory size={18} strokeWidth={1.6} />
          </div>

          <div>
            <p className="text-[11px] font-normal tracking-[-0.02em]">
              INDUSTRIAL
            </p>
            <p className="text-[8px] tracking-[0.15em] text-[#B79A72]">
              MANUFACTURING
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-4 text-[10px] text-[#0B2A52]/65 sm:flex">
          <span>Products</span>
          <span>Capabilities</span>
          <span>Quality</span>
        </div>

        <span className="rounded-[7px] bg-[#0B2A52] px-3 py-2 text-[9px] text-white">
          Request Quote
        </span>
      </div>

      {/* Website Hero */}
      <div className="grid min-h-[260px] items-center gap-6 bg-[#0B2A52] p-6 text-white sm:grid-cols-[1.05fr_0.95fr] sm:p-8">
        <div>
          <p className="text-[9px] uppercase tracking-[0.15em] text-[#D4B88F]">
            Precision Manufacturing
          </p>

          <h3 className="mt-4 max-w-[310px] text-[23px] font-normal leading-[1.2] tracking-[-0.025em] sm:text-[27px]">
            Built Around Industrial Requirements.
          </h3>

          <p className="mt-4 max-w-[290px] text-[11px] leading-[1.8] text-white/65">
            Quality-focused components and manufacturing capabilities
            for industrial applications.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-[7px] bg-[#B79A72] px-3.5 py-2.5 text-[10px] text-white">
            Explore Products
            <ArrowUpRight size={12} strokeWidth={1.6} />
          </div>
        </div>

        {/* Technical Illustration */}
        <div
          aria-hidden="true"
          className="relative mx-auto flex aspect-[1.25] w-full max-w-[230px] items-center justify-center overflow-hidden rounded-[12px] border border-white/15 bg-white/[0.05]"
        >
          <svg viewBox="0 0 240 190" className="h-full w-full" fill="none">
            <g
              stroke="#D3E2ED"
              strokeWidth="1.3"
              strokeLinejoin="round"
            >
              <path d="M45 75L115 38L195 78L126 116Z" />
              <path d="M45 75V126L126 166V116Z" />
              <path d="M126 116L195 78V127L126 166Z" />
              <ellipse cx="119" cy="77" rx="32" ry="15" />
              <ellipse cx="119" cy="77" rx="14" ry="6" />
              <path d="M87 77V102" />
              <path d="M151 77V103" />
              <path d="M87 102Q119 122 151 103" />
            </g>

            <g
              stroke="#D4B88F"
              strokeWidth="1"
              strokeDasharray="4 5"
              opacity="0.8"
            >
              <path d="M30 66V138" />
              <path d="M23 66H39" />
              <path d="M23 138H39" />
              <path d="M47 149L126 185" />
              <path d="M132 183L207 142" />
            </g>
          </svg>

          <span className="absolute bottom-3 right-3 text-[8px] tracking-[0.12em] text-white/45">
            TECHNICAL VIEW
          </span>
        </div>
      </div>

      {/* Product Preview */}
      <div className="p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.15em] text-[#B79A72]">
              Explore Our Capabilities
            </p>

            <h4 className="mt-1.5 text-[16px] font-normal tracking-[-0.02em]">
              What We Manufacture
            </h4>
          </div>

          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="text-[#B79A72]"
          />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { title: "Components", icon: Layers3 },
            { title: "Processes", icon: Settings2 },
            { title: "Quality", icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex min-h-[90px] flex-col items-center justify-center gap-3 rounded-[9px] border border-[#E5ECF2] bg-[#FAFBFC] p-2 text-center"
              >
                <Icon
                  size={22}
                  strokeWidth={1.4}
                  className="text-[#B79A72]"
                />

                <span className="text-[10px] font-normal text-[#0B2A52]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ManufacturingWebsite() {
  return (
    <section
      id="manufacturing-website"
      aria-labelledby="manufacturing-website-heading"
      className="relative overflow-hidden bg-white py-16 text-[#0B2A52] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-[920px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-normal uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
              Your Website Is Part of Your Sales Process
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="manufacturing-website-heading"
            className="mx-auto max-w-[870px] text-[32px] font-normal leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            Your Website Should Show Buyers{" "}
            <span className="text-[#B79A72]">
              What You Can Actually Manufacture.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[740px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            Industrial buyers need more than a company introduction.
            Before contacting you, they want to understand your products,
            technical capabilities and ability to meet their requirements.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="mt-12 grid items-center gap-10 sm:mt-14 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
          {/* Website Preview */}
          <div className="min-w-0">
            <ManufacturingWebsitePreview />

            <p className="mt-4 text-center text-[11px] leading-5 text-[#0B2A52]/45">
              Illustrative manufacturing website design.
              Actual website content depends on your business.
            </p>
          </div>

          {/* Buyer Requirements */}
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
              What Industrial Buyers Look For
            </p>

            <h3 className="mt-4 max-w-[530px] text-[27px] font-normal leading-[1.2] tracking-[-0.03em] sm:text-[30px] lg:text-[33px]">
              Make the Right Information{" "}
              <span className="text-[#B79A72]">Easy to Find.</span>
            </h3>

            <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-[#0B2A52]/60 sm:text-[14px]">
              Your website should help buyers evaluate your products,
              production capabilities and suitability before making
              an enquiry.
            </p>

            <div className="mt-7 border-t border-[#E1E8EF]">
              {websiteFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-start gap-4 border-b border-[#E1E8EF] py-5 sm:gap-5 sm:py-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] border border-[#E3EAF1] bg-[#F8FAFC] text-[#0B2A52] transition-colors duration-300 group-hover:bg-[#F8F2E9] group-hover:text-[#B79A72]">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>

                    <div>
                      <h4 className="text-[18px] font-normal leading-[1.25] tracking-[-0.02em] sm:text-[19px]">
                        {feature.title}
                      </h4>

                      <p className="mt-2 max-w-[490px] text-[13px] leading-6 text-[#0B2A52]/62 sm:text-[14px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sharp Rays Solution */}
        <div className="mt-16 border-t border-[#E1E8EF] pt-12 sm:mt-20 lg:mt-24 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A72]" />

                <p className="text-[10px] uppercase tracking-[0.18em] text-[#B79A72]">
                  How Sharp Rays Helps
                </p>
              </div>

              <h3 className="mt-5 max-w-[540px] text-[28px] font-normal leading-[1.16] tracking-[-0.03em] sm:text-[32px] lg:text-[36px]">
                A Manufacturing Website Built for{" "}
                <span className="text-[#B79A72]">
                  Real Buyer Requirements.
                </span>
              </h3>

              <p className="mt-6 max-w-[540px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                We build and improve manufacturing websites with structured
                product pages, technical content, capability sections,
                downloadable catalogues, responsive layouts and clear
                RFQ pathways.
              </p>

              <p className="mt-4 max-w-[540px] text-[13px] leading-7 text-[#0B2A52]/65 sm:text-[14px]">
                We also focus on technical SEO, page performance, internal
                linking and website usability to help relevant buyers
                find information and contact your team.
              </p>

              <Link
                href="/contact"
                title="Improve My Manufacturing Website"
                className="group mt-7 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-[11px] bg-[#0B2A52] px-6 py-3.5 text-center text-[12px] font-normal text-white transition-colors duration-300 hover:bg-[#173D69] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A72] sm:w-auto sm:text-[13px]"
              >
                Improve My Manufacturing Website

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Deliverables */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.17em] text-[#B79A72]">
                Website Elements We Focus On
              </p>

              <div className="grid border-t border-[#E1E8EF] sm:grid-cols-2">
                {websiteServices.map((service, index) => (
                  <div
                    key={service}
                    className={`flex min-h-[76px] items-center gap-3 border-b border-[#E1E8EF] py-4 sm:px-4 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-[#E1E8EF]"
                        : ""
                    }`}
                  >
                    <Check
                      size={17}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#B79A72]"
                    />

                    <span className="text-[13px] leading-6 text-[#0B2A52]/75 sm:text-[14px]">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3">
                <FileText
                  size={18}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#B79A72]"
                />

                <p className="max-w-[550px] text-[12px] leading-6 text-[#0B2A52]/55 sm:text-[13px]">
                  From product discovery to technical evaluation and quotation
                  enquiries, your website should support every important
                  stage of the industrial buying journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
