
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  MapPin,
  Search,
  Sparkles,
  Utensils,
  CalendarHeart,
  ShoppingBag,
  Globe2,
  Star,
  Navigation,
} from "lucide-react";

type CategoryId = "nearby" | "cuisine" | "occasions" | "ordering";

type Category = {
  id: CategoryId;
  number: string;
  label: string;
  subtitle: string;
  title: string;
  description: string;
  searches: string[];
  footer: string;
  Icon: typeof MapPin;
};

const categories: Category[] = [
  {
    id: "nearby",
    number: "01",
    label: "Nearby",
    subtitle: "Find a place close to me",
    title: "Location-Based Searches",
    description:
      "People are actively looking for places to eat around them. Make your restaurant easier to find in relevant local searches.",
    searches: [
      "restaurants near me",
      "best restaurants in [area]",
      "cafes near me",
      "family restaurant in [city]",
      "restaurants open near me",
    ],
    footer:
      "We improve local SEO, Google Business Profile information, restaurant listings and location-specific pages to support relevant local discovery.",
    Icon: MapPin,
  },
  {
    id: "cuisine",
    number: "02",
    label: "Cuisine",
    subtitle: "Find the food I want",
    title: "Cuisine-Based Searches",
    description:
      "Customers often know what they want to eat before deciding where to go.",
    searches: [
      "best Italian restaurant near me",
      "authentic Indian food in [city]",
      "pizza places near me",
      "vegetarian restaurant in [area]",
      "best biryani near me",
    ],
    footer:
      "We align restaurant pages, menu content and relevant SEO opportunities with the cuisines and dishes your restaurant actually offers.",
    Icon: Utensils,
  },
  {
    id: "occasions",
    number: "03",
    label: "Occasions",
    subtitle: "Find somewhere special",
    title: "Occasion-Based Searches",
    description:
      "Sometimes the occasion is what determines the restaurant a customer chooses.",
    searches: [
      "romantic dinner restaurants",
      "birthday celebration restaurants",
      "family dinner places near me",
      "restaurants for group dining",
      "best date night restaurants in [city]",
    ],
    footer:
      "We help communicate relevant dining experiences, ambience, facilities and occasion-specific offerings through your website and marketing.",
    Icon: CalendarHeart,
  },
  {
    id: "ordering",
    number: "04",
    label: "Ordering",
    subtitle: "Find something to order",
    title: "Food Ordering Searches",
    description:
      "When convenience matters, customers look for restaurants and food they can order quickly.",
    searches: [
      "food delivery near me",
      "restaurants offering takeaway",
      "order pizza online in [area]",
      "late night food delivery",
      "online food ordering in [city]",
    ],
    footer:
      "We help make your available ordering options, menu information and relevant restaurant pages clearer and easier to discover.",
    Icon: ShoppingBag,
  },
];

export default function RestaurantSearchOpportunities() {
  const [activeId, setActiveId] = useState<CategoryId>("nearby");
  const [focusedSearch, setFocusedSearch] = useState<number | null>(null);

  const active =
    categories.find((item) => item.id === activeId) ?? categories[0];

  const ActiveIcon = active.Icon;

  const activate = (id: CategoryId) => {
    setActiveId(id);
    setFocusedSearch(null);
  };

  return (
    <section
      id="restaurant-search-opportunities"
      aria-labelledby="restaurant-search-heading"
      className="relative isolate overflow-hidden bg-[#F8FBFD] py-20 text-[#0B2A52] sm:py-24 lg:py-28"
    >
      {/* Subtle premium background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_88%_8%,rgba(183,154,114,0.10),transparent_36%),radial-gradient(ellipse_at_0%_95%,rgba(11,42,82,0.045),transparent_36%)]"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* CENTERED SECTION INTRO */}
        <div className="mx-auto max-w-[850px] text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#B79A72]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#A68A66] sm:text-[10px] sm:tracking-[0.2em]">
              How Diners Find Their Next Favourite Place
            </span>

            <span className="h-px w-7 bg-[#B79A72]" />
          </div>

          {/* Main Heading */}
          <h2
            id="restaurant-search-heading"
            className="mx-auto max-w-[790px] text-[29px] font-normal leading-[1.23] tracking-[-0.035em] text-[#0B2A52] sm:text-[35px] lg:text-[42px]"
          >
            Hungry Customers Are Searching Nearby.
            <span className="mt-1 block text-[#B79A72]">
              Is Your Restaurant Showing Up?
            </span>
          </h2>

          {/* Description */}
          <div className="mx-auto mt-6 max-w-[1000px] space-y-5">
            <p className="text-[13px] leading-[1.9] text-[#50627A] sm:text-[14px]">
              Before choosing where to eat, customers often search on Google,
              explore nearby restaurants on Maps, check menus, browse food
              content on Instagram and read reviews.
            </p>

            <p className="text-[13px] leading-[1.9] text-[#50627A] sm:text-[14px]">
              We help your restaurant become easier to discover when potential
              customers are deciding where to dine, what to order or which
              restaurant to visit.
            </p>
          </div>
        </div>

        {/* INTERACTIVE EXPLORER */}
        <div className="relative mt-12 lg:mt-14">
          {/* Decorative outer corners */}
          <div className="pointer-events-none absolute -left-4 -top-4 hidden h-24 w-24 rounded-tl-[28px] border-l border-t border-[#B79A72]/30 lg:block" />

          <div className="pointer-events-none absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-br-[28px] border-b border-r border-[#B79A72]/30 lg:block" />

          <div className="relative overflow-hidden rounded-[22px] border border-[#DCE4EC] bg-white shadow-[0_25px_90px_-45px_rgba(11,42,82,0.25)] sm:rounded-[28px]">
            {/* Explorer Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8EDF2] px-5 py-5 sm:px-8 lg:px-10 lg:py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#0B2A52] text-white">
                  <Compass size={19} strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="text-[14px] font-medium tracking-[-0.02em] text-[#0B2A52] sm:text-[16px]">
                    Explore Restaurant Search Opportunities
                  </h3>

                  <p className="mt-1 text-[11px] text-[#8A98AA]">
                    See how potential customers discover restaurants
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-[#E5EBF0] px-3 py-2 sm:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B79A72] opacity-35" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B79A72]" />
                </span>

                <span className="text-[10px] font-medium tracking-[0.04em] text-[#6F8092]">
                  INTERACTIVE EXPLORER
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[295px_minmax(0,1fr)] xl:grid-cols-[335px_minmax(0,1fr)]">
              {/* LEFT CATEGORY NAVIGATION */}
              <div className="border-b border-[#E8EDF2] bg-[#FBFCFD] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-7">
                <div className="mb-5 hidden items-center justify-between px-2 lg:flex">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9AA6B4]">
                    Discovery Pathways
                  </span>

                  
                </div>

                <div
                  role="tablist"
                  aria-label="Restaurant search categories"
                  className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-3"
                >
                  {categories.map((category) => {
                    const isActive = category.id === activeId;
                    const Icon = category.Icon;

                    return (
                      <button
                        key={category.id}
                        id={`restaurant-tab-${category.id}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="restaurant-search-panel"
                        onClick={() => activate(category.id)}
                        className={`group relative flex min-h-[94px] items-center gap-3 overflow-hidden rounded-[15px] border p-3 text-left transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72] sm:p-4 lg:min-h-[96px] ${
                          isActive
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white shadow-[0_12px_24px_-14px_rgba(11,42,82,0.65)]"
                            : "border-transparent bg-white text-[#0B2A52] hover:border-[#D9E1E9] hover:shadow-sm"
                        }`}
                      >
                        {/* Active Gold Indicator */}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#B79A72]" />
                        )}

                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                            isActive
                              ? "bg-white/10 text-[#D4B88E]"
                              : "bg-[#F1F5F8] text-[#8090A2] group-hover:bg-[#E9EFF4]"
                          }`}
                        >
                          <Icon size={19} strokeWidth={1.65} />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                           

                            <span className="text-[13px] font-medium sm:text-[15px]">
                              {category.label}
                            </span>
                          </div>

                          <p
                            className={`mt-1 text-[10px] leading-4 sm:text-[11px] ${
                              isActive
                                ? "text-white/60"
                                : "text-[#8391A0]"
                            }`}
                          >
                            {category.subtitle}
                          </p>
                        </div>

                        <ChevronRight
                          size={15}
                          className={`ml-auto hidden shrink-0 transition-transform duration-300 lg:block ${
                            isActive
                              ? "text-[#D4B88E]"
                              : "text-[#B9C4CE] group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Sidebar Note */}
                <div className="mt-8 hidden border-t border-[#E7ECF1] px-2 pt-7 lg:block">
                  <div className="mb-3 flex items-center gap-2 text-[#B79A72]">
                    <Sparkles size={15} strokeWidth={1.6} />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
                      Search Intent Matters
                    </span>
                  </div>

                  <p className="text-[12px] leading-[1.9] text-[#78899B]">
                    Different searches reveal different dining needs. Your
                    marketing should reflect them.
                  </p>
                </div>
              </div>

              {/* RIGHT SEARCH PANEL */}
              <div
                id="restaurant-search-panel"
                role="tabpanel"
                aria-labelledby={`restaurant-tab-${activeId}`}
                className="relative min-w-0 overflow-hidden px-5 pb-6 pt-7 sm:px-8 sm:pb-9 sm:pt-9 lg:px-10 lg:pb-10"
              >
                {/* Subtle Gold Glow */}
                <div className="pointer-events-none absolute right-0 top-0 h-60 w-60 rounded-full bg-[#F5F0E9] opacity-50 blur-[75px]" />

                <div key={activeId} className="relative">
                  {/* Panel Intro */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-[460px]">
                      <div className="mb-3 flex items-center gap-2">
                        <ActiveIcon
                          size={14}
                          strokeWidth={1.8}
                          className="text-[#B79A72]"
                        />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B79A72]">
                          {active.label} Discovery
                        </span>
                      </div>

                      <h4 className="text-[23px] font-normal leading-tight tracking-[-0.035em] text-[#0B2A52] sm:text-[27px] lg:text-[30px]">
                        {active.title}
                      </h4>

                      <p className="mt-3 max-w-[460px] text-[13px] leading-[1.85] text-[#79899B]">
                        {active.description}
                      </p>
                    </div>

                    <span className="rounded-full border border-[#E6E9E7] bg-white px-3 py-2 text-[10px] text-[#78899B]">
                      Example searches
                    </span>
                  </div>

                  {/* SEARCH PREVIEW */}
                  <div className="relative mt-7 overflow-hidden rounded-[18px] border border-[#E3E9EF] bg-[#FCFDFE] sm:mt-8 sm:rounded-[22px]">
                    {/* Browser Top Bar */}
                    <div className="flex items-center justify-between border-b border-[#E9EDF2] bg-white px-4 py-3 sm:px-6 sm:py-4">
                      <div className="flex items-center gap-[5px]">
                        <span className="h-[7px] w-[7px] rounded-full bg-[#D8DFE7]" />
                        <span className="h-[7px] w-[7px] rounded-full bg-[#D8DFE7]" />
                        <span className="h-[7px] w-[7px] rounded-full bg-[#D8DFE7]" />
                      </div>

                      <div className="flex items-center gap-2 text-[10px] font-medium text-[#9AA6B3]">
                        <Globe2 size={12} />
                        <span>Search discovery preview</span>
                      </div>

                      <div className="w-5" />
                    </div>

                    <div className="p-4 sm:p-6">
                      {/* Selected Search */}
                      <div className="flex min-h-[55px] items-center gap-3 rounded-[13px] border border-[#DEE6ED] bg-white px-4 shadow-[0_4px_18px_rgba(11,42,82,0.035)] transition-colors duration-300 sm:min-h-[63px] sm:px-5">
                        <Search
                          size={18}
                          className="shrink-0 text-[#B79A72]"
                          strokeWidth={1.8}
                        />

                        <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-[#344D68] transition-all duration-300 sm:text-[14px]">
                          {active.searches[focusedSearch ?? 0]}
                        </span>

                        <span className="hidden h-6 w-px bg-[#E6EBF0] sm:block" />

                        <Navigation
                          size={15}
                          className="hidden text-[#94A3B2] sm:block"
                        />
                      </div>

                      {/* Search List Heading */}
                      <div className="my-5 flex items-center justify-between gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#9BA7B4]">
                          People may search for
                        </span>

                        <span className="text-[10px] tabular-nums text-[#A7B1BD]">
                          {String(active.searches.length).padStart(2, "0")}{" "}
                          patterns
                        </span>
                      </div>

                      {/* Search Suggestions */}
                      <div className="space-y-2">
                        {active.searches.map((query, index) => {
                          const isSelected =
                            (focusedSearch ?? 0) === index;

                          return (
                            <button
                              key={query}
                              type="button"
                              onClick={() => setFocusedSearch(index)}
                              aria-pressed={isSelected}
                              className={`group flex w-full items-center gap-3 rounded-[11px] border px-3 py-3 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B79A72] sm:px-4 ${
                                isSelected
                                  ? "border-[#D9C6AB] bg-[#F9F6F1]"
                                  : "border-transparent bg-white hover:border-[#E4E9EF] hover:bg-[#F5F8FB]"
                              }`}
                            >
                              <span
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] transition-colors ${
                                  isSelected
                                    ? "bg-white text-[#B79A72]"
                                    : "bg-[#F4F6F8] text-[#A8B4C0]"
                                }`}
                              >
                                <Search size={13} strokeWidth={1.7} />
                              </span>

                              <span
                                className={`min-w-0 flex-1 text-[12px] sm:text-[13px] ${
                                  isSelected
                                    ? "font-medium text-[#0B2A52]"
                                    : "text-[#526981]"
                                }`}
                              >
                                {query}
                              </span>

                              <ArrowUpRight
                                size={15}
                                className={`shrink-0 transition-all duration-200 ${
                                  isSelected
                                    ? "text-[#B79A72]"
                                    : "text-[#BAC5D0] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0B2A52]"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>

                      {/* Search Disclaimer */}
                      <div className="mt-5 flex items-center gap-2 border-t border-[#E9EDF1] pt-4">
                        <Check
                          size={13}
                          strokeWidth={2}
                          className="shrink-0 text-[#B79A72]"
                        />

                        <p className="text-[10px] leading-5 text-[#98A4B1]">
                          Illustrative search patterns — not live search data
                          or rankings.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SHARP RAYS STRATEGY INSIGHT */}
                  <div className="mt-5 flex flex-col gap-4 rounded-[15px] border border-[#E8E4DD] bg-[#FAF8F4] px-5 py-5 sm:flex-row sm:items-start sm:gap-5 sm:px-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#E9DDCD] bg-white text-[#B79A72]">
                      <Sparkles size={17} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h5 className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#967955]">
                        How Sharp Rays Helps
                      </h5>

                      <p className="text-[12px] leading-[1.9] text-[#667588] sm:text-[13px]">
                        {active.footer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPLORER BOTTOM BAR */}
            <div className="flex flex-col gap-3 border-t border-[#E8EDF2] bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
              <div className="flex items-center gap-2.5">
                <Star size={13} className="shrink-0 text-[#B79A72]" />

                <span className="text-[11px] leading-5 text-[#8593A2]">
                  Relevant discovery starts with understanding customer intent.
                </span>
              </div>

              <a
                href="/contact"
                title="Discuss Your Restaurant Marketing Strategy"
                className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold text-[#0B2A52] transition-colors duration-300 hover:text-[#B79A72]"
              >
                Discuss Your Restaurant Strategy

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mt-12 grid gap-5 border-t border-[#DEE5ED] pt-8 sm:mt-14 sm:pt-9 lg:grid-cols-[200px_1fr] lg:gap-12">
          <div className="flex items-start gap-3">
            <span className="mt-2 h-px w-7 bg-[#B79A72]" />

            <span className="text-[10px] font-semibold uppercase leading-5 tracking-[0.17em] text-[#B79A72]">
              Beyond Just
              <br />
              Being Visible
            </span>
          </div>

          <div>
            <p className="max-w-[850px] text-[18px] font-normal leading-[1.65] tracking-[-0.025em] text-[#28425F] sm:text-[21px] lg:text-[24px]">
              From Google Search and Maps to social media discovery, we build
              restaurant marketing around{" "}
              <span className="text-[#B79A72]">
                what customers look for
              </span>{" "}
              before deciding where to eat or order.
            </p>

            <p className="mt-5 max-w-[800px] text-[11px] leading-[1.8] text-[#9AA7B5]">
              These are illustrative search patterns. Actual keyword
              targeting depends on your restaurant&apos;s cuisine, services,
              location and competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
