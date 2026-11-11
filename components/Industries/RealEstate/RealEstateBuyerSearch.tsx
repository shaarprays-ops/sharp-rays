
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  MapPin,
  IndianRupee,
  Building2,
  House,
  Search,
  Check,
  ArrowUpRight,
  Target,
} from "lucide-react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = node.getBoundingClientRect();
    if (bounds.top >= window.innerHeight - 35) setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const searchGroups = [
  {
    number: "01",
    title: "Locations",
    icon: MapPin,
    eyebrow: "LOCATION-BASED PROPERTY SEARCHES",
    description:
      "Buyers often begin with a city, locality, employment hub or nearby landmark before exploring suitable properties.",
    searches: [
      "2 BHK flats in Pune",
      "apartments in Whitefield Bangalore",
      "new residential projects in Noida",
      "flats near Hinjewadi Pune",
    ],
    strategy:
      "We help develop project, locality and location-specific pages supported by relevant real estate SEO and Google Search campaigns.",
    focus: "Location SEO & Locality Pages",
    tags: ["Locality SEO", "Project Pages", "Google Search"],
  },
  {
    number: "02",
    title: "Budget",
    icon: IndianRupee,
    eyebrow: "BUDGET-BASED PROPERTY SEARCHES",
    description:
      "Many buyers narrow their choices by price range before deciding which projects or configurations to explore.",
    searches: [
      "2 BHK flats under 80 lakhs in Pune",
      "apartments under 1 crore in Bangalore",
      "flats under 60 lakhs in Noida",
      "luxury apartments above 2 crore in Mumbai",
    ],
    strategy:
      "We help align suitable property and project pages with genuine price ranges, available configurations and relevant budget-led search intent.",
    focus: "Budget-Relevant Property Discovery",
    tags: ["Price Intent", "Property Content", "Relevant Ads"],
  },
  {
    number: "03",
    title: "Projects",
    icon: Building2,
    eyebrow: "PROJECT-BASED PROPERTY SEARCHES",
    description:
      "Buyers also search for new launches, ongoing developments, possession timelines and project-specific information.",
    searches: [
      "new launch residential projects in Pune",
      "ready to move apartments in Noida",
      "under construction flats in Bangalore",
      "new residential projects near Kharadi",
    ],
    strategy:
      "We structure project pages around verified project details, available configurations, locations and the information buyers need when comparing developments.",
    focus: "Project SEO & Qualified Enquiries",
    tags: ["Project Landing Pages", "Search Visibility", "Lead Enquiries"],
  },
  {
    number: "04",
    title: "Property Types",
    icon: House,
    eyebrow: "PROPERTY-TYPE SEARCHES",
    description:
      "Property seekers compare specific configurations, housing formats and features that match their requirements.",
    searches: [
      "3 BHK apartments in Pune",
      "gated community villas in Bangalore",
      "studio apartments in Mumbai",
      "duplex homes in Hyderabad",
    ],
    strategy:
      "We develop relevant configuration and property-type content supported by clear availability, amenities and enquiry pathways.",
    focus: "Property-Type Visibility & Conversion",
    tags: ["Configuration SEO", "Property Pages", "Lead Conversion"],
  },
] as const;

export default function RealEstateBuyerSearch() {
  return (
    <section
      id="real-estate-lead-opportunities"
      aria-labelledby="real-estate-search-heading"
      className="relative overflow-hidden bg-white py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* SECTION INTRODUCTION */}
        <Reveal>
          <div className="mx-auto max-w-[830px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B79A72] sm:text-[11px]">
                Real Estate Buyer Search Opportunities
              </span>
              <span className="h-px w-8 bg-[#B79A72]" />
            </div>

            <h2
              id="real-estate-search-heading"
              className="font-serif text-[29px] font-normal leading-[1.22] tracking-[-0.035em] sm:text-[36px] lg:text-[42px]"
            >
              Buyers Search by Location, Budget and Property Type.{" "}
              <span className="text-[#B79A72]">
                Is Your Project Showing Up?
              </span>
            </h2>

            <div className="mx-auto mt-5 max-w-[720px] space-y-3">
              <p className="text-[13px] leading-[1.95] text-[#0B2A52]/75 sm:text-[14px]">
                People looking for property rarely search only
                for a developer&apos;s name.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
                They search for apartments, configurations, locations,
                budgets, new projects, possession status and the
                facilities that match their requirements.
              </p>

              <p className="text-[13px] leading-[1.95] text-[#0B2A52]/65 sm:text-[14px]">
                We help real estate businesses build search
                visibility around these buying decisions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* SEARCH DIRECTORY HEADING */}
        <Reveal>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-[#E6DDD2] pb-5 lg:mt-16">
            <div className="flex items-center gap-3">
              <Search size={18} strokeWidth={1.5} className="text-[#B79A72]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#A08461] sm:text-[11px]">
                Explore Property Buyer Search Opportunities
              </span>
            </div>

            <span className="font-serif text-[13px] text-[#B79A72]">
              04 Search Categories
            </span>
          </div>
        </Reveal>

        {/* FOUR PROPERTY SEARCH CATEGORIES */}
        <div className="mt-4 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {searchGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.number} className="h-full">
                <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[17px] border border-[#E8DED2] bg-[#FCFAF7] px-6 py-7 transition-all duration-500 hover:border-[#D4BA96] hover:shadow-[0_20px_45px_-35px_rgba(11,42,82,0.2)] sm:px-8 sm:py-9">

                  {/* ICON AND CATEGORY */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#E5D9C9] bg-white text-[#B79A72]">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>

                      <div>
                        <span className="text-[9px] uppercase tracking-[0.15em] text-[#A08461]">
                          Search Category
                        </span>

                        <h3 className="mt-1 font-serif text-[25px] font-normal leading-[1.25]">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-serif text-[19px] text-[#B79A72]">
                      {group.number}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-6 max-w-[490px] text-[12px] leading-[1.9] text-[#6A7C8C] sm:text-[13px]">
                    {group.description}
                  </p>

                  {/* SEARCH EXAMPLES */}
                  <div className="mt-7 border-t border-[#E5DBCE] pt-5">
                    <p className="mb-4 text-[10px] uppercase tracking-[0.15em] text-[#A08461]">
                      {group.eyebrow}
                    </p>

                    <div className="space-y-2.5">
                      {group.searches.map((query, index) => (
                        <div
                          key={query}
                          className="flex min-h-[46px] items-center gap-3 rounded-[9px] border border-[#EBE2D7] bg-white px-4 py-3 transition-colors duration-300 group-hover:border-[#E4D6C2]"
                        >
                          <span className="font-serif text-[11px] text-[#B79A72]">
                            0{index + 1}
                          </span>

                          <Search
                            size={15}
                            strokeWidth={1.5}
                            className="shrink-0 text-[#BCA17B]"
                          />

                          <span className="min-w-0 flex-1 text-[12px] leading-[1.65] text-[#334F66] sm:text-[13px]">
                            {query}
                          </span>

                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.5}
                            className="shrink-0 text-[#C7B69E]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SHARP RAYS STRATEGY */}
                  <div className="mt-auto pt-7">
                    <div className="border-t border-[#E5DBCE] pt-5">
                      <div className="flex items-center gap-2">
                        <Target size={16} strokeWidth={1.5} className="text-[#B79A72]" />

                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#A08461]">
                          How Sharp Rays Helps
                        </span>
                      </div>

                      <h4 className="mt-3 font-serif text-[20px] font-normal leading-[1.35]">
                        {group.focus}
                      </h4>

                      <p className="mt-3 max-w-[520px] text-[12px] leading-[1.9] text-[#66798B] sm:text-[13px]">
                        {group.strategy}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                        {group.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-2 text-[10px] text-[#927B5C]">
                            <Check size={13} strokeWidth={1.7} className="text-[#B79A72]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* KEYWORD DISCLAIMER */}
        <Reveal>
          <div className="mt-6 flex items-start gap-3">
            <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#B79A72]" />

            <p className="max-w-[1060px] text-[11px] leading-[1.9] text-[#8A95A0]">
              These are illustrative keyword patterns, not verified
              search-volume or ranking-difficulty figures. Actual
              targeting should reflect available properties,
              pricing, locations and competitive search results.
            </p>
          </div>
        </Reveal>

        {/* CLOSING COPY */}
        <Reveal>
          <div className="mt-12 grid gap-6 border-t border-[#E7DED2] pt-9 lg:mt-14 lg:grid-cols-[0.28fr_0.72fr] lg:gap-14">
            <div className="flex items-start gap-3 lg:pt-2">
              <Target size={19} strokeWidth={1.5} className="shrink-0 text-[#B79A72]" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#A08461]">
                Built Around Buyer Intent
              </span>
            </div>

            <div>
              <p className="max-w-[870px] font-serif text-[15px] font-normal leading-[1.55] text-[#284762] sm:text-[15px]">
                We build real estate SEO and performance marketing
                around what buyers are actively looking for —{" "}
                <span className="text-[#B79A72]">
                  not just broad property keywords.
                </span>
              </p>

              <p className="mt-4 max-w-[790px] text-[13px] leading-[1.9] text-[#6A7D8E]">
                The goal is to help relevant buyers discover
                your projects and understand whether they
                match their needs.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
