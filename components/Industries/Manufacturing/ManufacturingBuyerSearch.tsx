
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Boxes,
  Check,
  ChevronRight,
  Factory,
  Layers3,
  Search,
  Settings2,
} from "lucide-react";

const searchCategories = [
  {
    id: "products",
    label: "Products",
    heading: "Product-Based Searches",
    shortDescription: "What your business manufactures",
    description:
      "We help build product and category pages that explain what you manufacture, your available product range and the applications you serve.",
    searches: [
      "industrial valve manufacturer in India",
      "hydraulic cylinder supplier",
      "packaging machine manufacturer",
      "precision automotive components supplier",
    ],
    icon: Boxes,
    strategy: "Product & category pages",
  },
  {
    id: "materials",
    label: "Materials",
    heading: "Material-Based Searches",
    shortDescription: "Materials you work with",
    description:
      "We help highlight the materials you work with, your manufacturing capabilities and relevant applications so buyers can evaluate your business.",
    searches: [
      "stainless steel fabrication manufacturer",
      "aluminium die casting supplier India",
      "engineering plastic components manufacturer",
      "carbon steel pipe fittings supplier",
    ],
    icon: Layers3,
    strategy: "Material & capability pages",
  },
  {
    id: "processes",
    label: "Processes",
    heading: "Process-Based Searches",
    shortDescription: "Your manufacturing capabilities",
    description:
      "We create search-focused pages around your production processes, technical capabilities and services to help relevant industrial buyers find you.",
    searches: [
      "precision CNC machining services India",
      "sheet metal laser cutting manufacturer",
      "custom injection moulding services",
      "industrial powder coating services",
    ],
    icon: Settings2,
    strategy: "Manufacturing process pages",
  },
  {
    id: "suppliers",
    label: "Suppliers",
    heading: "Supplier-Based Searches",
    shortDescription: "Your supplier positioning",
    description:
      "We help position your manufacturing business for supplier-discovery searches by clearly presenting your products, capabilities and markets served.",
    searches: [
      "industrial equipment suppliers in India",
      "OEM component manufacturer India",
      "custom metal parts supplier",
      "industrial machinery exporter India",
    ],
    icon: Factory,
    strategy: "Supplier & industry pages",
  },
] as const;

type CategoryId = (typeof searchCategories)[number]["id"];

export default function ManufacturingBuyerSearch() {
  const [activeTab, setActiveTab] = useState<CategoryId>("products");

  const active =
    searchCategories.find((item) => item.id === activeTab) ??
    searchCategories[0];

  return (
    <section
      id="industrial-buyer-search"
      aria-labelledby="industrial-search-heading"
      className="relative overflow-hidden bg-white text-[#0B2A52]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20 min-[1920px]:max-w-[1750px] min-[2560px]:max-w-[2100px]">
        {/* CENTERED INTRODUCTION */}
        <div className="mx-auto max-w-[960px] text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B79A72]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B79A72] sm:text-[11px]">
              How Your Potential Buyers Search
            </p>

            <span className="h-px w-8 bg-[#B79A72]" />
          </div>

          <h2
            id="industrial-search-heading"
            className="mx-auto max-w-[900px] text-[32px] font-medium leading-[1.1] tracking-[-0.035em] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]"
          >
            Buyers Don&apos;t Always Search for Your Company.{" "}
            <span className="text-[#B79A72]">
              They Search for What You Make.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px] lg:text-[16px] lg:leading-8">
            When procurement teams, engineers and businesses look for
            manufacturing partners, they search for specific products,
            materials, production processes and suppliers.
            Your website needs to reflect how those buyers search.
          </p>
        </div>

        {/* MAIN SEARCH EXPLORER */}
        <div className="mx-auto mt-12 max-w-[1280px] sm:mt-14 lg:mt-16">
          <div className="grid gap-7 lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-9 xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-11">
            {/* LEFT CATEGORY NAVIGATION */}
            <div className="min-w-0">
              <div className="mb-6">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72]">
                  Explore Search Intent
                </p>

                <h3 className="mt-3 text-[23px] font-medium leading-[1.2] tracking-[-0.025em] sm:text-[25px]">
                  How Industrial Buyers Find Suppliers
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/60 sm:text-[14px]">
                  Select a category to explore the searches your potential
                  B2B buyers may use.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Industrial search categories"
                aria-orientation="vertical"
                className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1"
              >
                {searchCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeTab === category.id;

                  return (
                    <button
                      key={category.id}
                      id={`industrial-search-tab-${category.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="industrial-search-panel"
                      onClick={() => setActiveTab(category.id)}
                      className={`group flex min-h-[95px] w-full items-center gap-3 rounded-[16px] border px-3 py-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72] sm:px-4 lg:min-h-[89px] ${
                        isActive
                          ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-[0_10px_25px_rgba(11,42,82,0.12)]"
                          : "border-[#E5EBF1] bg-white text-[#0B2A52] hover:border-[#B79A72]/50 hover:bg-[#FAFBFC]"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${
                          isActive
                            ? "bg-white/10 text-[#E2C7A0]"
                            : "bg-[#F5F7F9] text-[#0B2A52]"
                        }`}
                      >
                        <Icon size={19} strokeWidth={1.7} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-medium leading-5 sm:text-[14px]">
                          {category.label}
                        </span>

                        <span
                          className={`mt-1 hidden text-[11px] leading-4 lg:block ${
                            isActive
                              ? "text-white/60"
                              : "text-[#0B2A52]/45"
                          }`}
                        >
                          {category.shortDescription}
                        </span>
                      </span>

                      <ChevronRight
                        size={16}
                        strokeWidth={1.7}
                        className={`hidden shrink-0 transition-transform duration-300 lg:block ${
                          isActive
                            ? "text-[#DCC4A2]"
                            : "text-[#0B2A52]/25 group-hover:translate-x-1"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* SUPPORTING INSIGHT */}
              <div className="mt-7 hidden border-t border-[#E5EBF1] pt-6 lg:block">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#B79A72]" />

                  <p className="text-[13px] leading-6 text-[#0B2A52]/60">
                    Industrial SEO works best when your website clearly
                    presents your products, capabilities and relevant
                    applications.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SEARCH PREVIEW */}
            <div
              id="industrial-search-panel"
              role="tabpanel"
              aria-labelledby={`industrial-search-tab-${activeTab}`}
              tabIndex={0}
              className="min-w-0 overflow-hidden rounded-[22px] border border-[#DCE5EE] bg-white shadow-[0_18px_55px_rgba(11,42,82,0.055)] outline-none focus-visible:ring-2 focus-visible:ring-[#B79A72]"
            >
              {/* BROWSER TOP BAR */}
              <div className="flex items-center justify-between gap-4 border-b border-[#E9EEF3] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D7E0E8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D7E0E8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D7E0E8]" />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#0B2A52]/40">
                  Search Intent Explorer
                </span>

                <Search
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#0B2A52]/45"
                />
              </div>

              <div
                key={activeTab}
                className="p-5 sm:p-7 lg:p-8 xl:p-9"
              >
                {/* PREVIEW HEADING */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#B79A72]">
                      Buyer Search Examples
                    </p>

                    <h3 className="mt-2 text-[23px] font-medium leading-[1.2] tracking-[-0.03em] sm:text-[27px]">
                      {active.heading}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#0B2A52]/55">
                      Illustrative searches relevant to industrial buyers
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-[#E5EBF1] bg-[#F8FAFC] text-[#0B2A52]">
                    <Search size={21} strokeWidth={1.65} />
                  </div>
                </div>

                {/* SEARCH INPUT VISUAL */}
                <div className="mt-7 flex min-h-[52px] items-center gap-3 rounded-[12px] border border-[#DDE6EE] bg-[#FAFBFC] px-4">
                  <Search
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#0B2A52]/45"
                  />

                  <span className="min-w-0 flex-1 truncate text-[12px] text-[#0B2A52]/55 sm:text-[13px]">
                    {active.searches[0]}
                  </span>

                  <span className="h-5 w-px shrink-0 bg-[#E1E7ED]" />

                  <span className="shrink-0 text-[10px] font-medium text-[#B79A72]">
                    B2B Search
                  </span>
                </div>

                {/* SEARCH QUERY LIST */}
                <div className="mt-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-medium text-[#0B2A52]/50">
                      Related industrial searches
                    </span>

                    <span className="text-[10px] text-[#0B2A52]/35">
                      Examples
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-[14px] border border-[#E7EDF3]">
                    {active.searches.map((query) => (
                      <div
                        key={query}
                        className="group flex min-h-[66px] items-center gap-3 border-b border-[#E7EDF3] bg-white px-4 py-3 transition-colors duration-300 last:border-b-0 hover:bg-[#F8FAFC] sm:gap-4 sm:px-5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F7F9] text-[#0B2A52]/55">
                          <Search size={15} strokeWidth={1.7} />
                        </span>

                        <span className="min-w-0 flex-1 text-[13px] font-medium leading-5 text-[#0B2A52]/80 sm:text-[14px]">
                          {query}
                        </span>

                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.6}
                          className="shrink-0 text-[#B79A72] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* STRATEGY PANEL */}
                <div className="mt-7 rounded-[17px] border border-[#E5EBF1] bg-[#F8FAFC] p-5 sm:p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#B79A72]">
                      <Check size={17} strokeWidth={1.8} />
                    </span>

                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#B79A72]">
                      How Sharp Rays Helps
                    </span>
                  </div>

                  <h4 className="mt-4 text-[19px] font-medium leading-[1.25] tracking-[-0.025em] sm:text-[21px]">
                    Visibility Built Around What Your Buyers Need.
                  </h4>

                  <p className="mt-3 max-w-[670px] text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px] sm:leading-7">
                    {active.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#E1E8EF] pt-4">
                    <span className="text-[11px] text-[#0B2A52]/50">
                      Relevant website focus:
                    </span>

                    <span className="rounded-full border border-[#E0E7EE] bg-white px-3 py-1.5 text-[11px] font-medium text-[#0B2A52]">
                      {active.strategy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        
      </div>
    </section>
  );
}
