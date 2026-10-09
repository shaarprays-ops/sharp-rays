import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  FileText,
  LayoutGrid,
  MonitorSmartphone,
  Search,
  Share2,
  Video,
} from "lucide-react";

type Category = {
  title: string;
  slug: string;
};

type BlogCategoryFilterProps = {
  categories: Category[];
};

const permanentCategories = [
  "All Insights",
  "Social Media Marketing",
  "Search Engine Optimization (SEO)",
  "Performance Marketing",
  "Website Development & Management",
  "Content Marketing",
  "AI Automation",
  "AI Video & Video Editing",
];

const categoryDetails = {
  "All Insights": {
    eyebrow: "Explore Everything",
    description:
      "Ideas, perspectives and practical thinking from Sharp Rays.",
    icon: LayoutGrid,
  },

  "Social Media Marketing": {
    eyebrow: "Build Stronger Presence",
    description:
      "Strategy, content and ideas for meaningful social growth.",
    icon: Share2,
  },

  "Search Engine Optimization (SEO)": {
    eyebrow: "Improve Search Visibility",
    description:
      "SEO thinking around rankings, visibility and organic growth.",
    icon: Search,
  },

  "Performance Marketing": {
    eyebrow: "Drive Better Results",
    description:
      "Paid media, targeting and conversion-focused insights.",
    icon: BarChart3,
  },

  "Website Development & Management": {
    eyebrow: "Build Better Experiences",
    description:
      "Design, development and digital experience thinking.",
    icon: MonitorSmartphone,
  },

  "Content Marketing": {
    eyebrow: "Create With Purpose",
    description:
      "Ideas, strategy and storytelling for modern brands.",
    icon: FileText,
  },

  "AI Automation": {
    eyebrow: "Automate Smarter",
    description:
      "Practical workflows, AI tools and automation thinking.",
    icon: Bot,
  },

  "AI Video & Video Editing": {
    eyebrow: "Create Smarter Video",
    description:
      "AI video, editing workflows and creative production ideas.",
    icon: Video,
  },
};

export default function BlogCategoryFilter({
  categories,
}: BlogCategoryFilterProps) {
  const categoryMap = new Map(
    categories.map((category) => [
      category.title.toLowerCase(),
      category,
    ])
  );

  const permanentCategoryNames =
    permanentCategories.map((item) =>
      item.toLowerCase()
    );

  const extraCategories =
    categories.filter(
      (category) =>
        !permanentCategoryNames.includes(
          category.title.toLowerCase()
        )
    );

  const allCategories = [
    ...permanentCategories.map((title) => {
      if (title === "All Insights") {
        return {
          title,
          slug: "",
        };
      }

      const existing =
        categoryMap.get(
          title.toLowerCase()
        );

      return {
        title,
        slug:
          existing?.slug || "",
      };
    }),

    ...extraCategories,
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[#EEF5FB] blur-[10px]" />

        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#F3F8FC]" />

        <div className="absolute right-[9%] top-[7%] h-[210px] w-[210px] rounded-full border border-[#6285AD]/10" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
        <div className="mb-12 max-w-[760px] lg:mb-14">
          <div className="flex items-center gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A77D52] sm:text-[12px]">
              Explore By Category
            </p>

            <span className="h-px w-10 bg-[#B79A72]/65" />
          </div>

          <h2 className="mt-4 font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
            Find Insights by Focus
            <span className="text-[#B79A72]">
              .
            </span>
          </h2>

          <p className="mt-5 max-w-[660px] text-[14px] leading-7 text-[#0B2A52]/60 sm:text-[15px]">
            Explore practical thinking across the areas that shape digital
            visibility, acquisition, content, technology and growth.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allCategories.map(
            (category) => {
              const isAllInsights =
                category.title ===
                "All Insights";

              const active =
                isAllInsights;

              const details =
                categoryDetails[
                  category.title as keyof typeof categoryDetails
                ] ?? {
                  eyebrow:
                    "Explore More",

                  description:
                    "Ideas and practical thinking around this topic.",

                  icon:
                    ArrowUpRight,
                };

              const Icon =
                details.icon;

              const href =
                isAllInsights
                  ? "/blog"
                  : category.slug
                    ? `/blog/category/${category.slug}`
                    : "/blog";

              const linkTitle =
                isAllInsights
                  ? "Explore All Sharp Rays Insights"
                  : `Explore ${category.title} Insights`;

              return (
                <Link
                  key={
                    category.title
                  }
                  href={
                    href
                  }
                  title={
                    linkTitle
                  }
                  className={`group relative min-h-[270px] overflow-hidden rounded-[24px] border px-6 py-6 text-left transition-all duration-300 ${
                    active
                      ? "border-[#0B2A52]/70 bg-[#F8FBFE] shadow-[0_14px_35px_rgba(11,42,82,0.10)]"
                      : "border-[#6285AD]/16 bg-white shadow-[0_8px_26px_rgba(11,42,82,0.045)] hover:-translate-y-[4px] hover:border-[#6285AD]/30 hover:shadow-[0_16px_36px_rgba(11,42,82,0.09)]"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-[150px] w-[150px] rounded-full bg-[#EEF5FB]" />

                  <div className="pointer-events-none absolute right-4 top-4 h-[76px] w-[76px] rounded-full border border-[#6285AD]/10" />

                  <div className="relative z-10 flex h-full min-h-[218px] flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div />

                      <div
                        className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? "border-[#0B2A52]/12 bg-[#0B2A52] text-white"
                            : "border-[#6285AD]/12 bg-white/80 text-[#174E88] group-hover:bg-[#EEF5FB]"
                        }`}
                      >
                        <Icon
                          size={
                            18
                          }
                          strokeWidth={
                            1.7
                          }
                        />
                      </div>
                    </div>

                    <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.18em] text-[#A77D52] sm:text-[11px]">
                      {
                        details.eyebrow
                      }
                    </p>

                    <h3 className="mt-8 max-w-[245px] font-serif text-[22px] leading-[1.05] tracking-[-0.03em] text-[#0B2A52]">
                      {
                        category.title
                      }
                    </h3>

                    <p className="mt-3 max-w-[240px] text-[13px] leading-[1.65] text-[#0B2A52]/58">
                      {
                        details.description
                      }
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-7">
                      <span
                        className={`text-[12px] font-medium transition-colors ${
                          active
                            ? "text-[#0B2A52]"
                            : "text-[#6285AD] group-hover:text-[#0B2A52]"
                        }`}
                      >
                        {active
                          ? "Selected"
                          : "Explore"}
                      </span>

                      <span
                        className={`flex h-[36px] w-[36px] items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                            : "border-[#6285AD]/18 bg-white text-[#0B2A52] group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight
                          size={
                            15
                          }
                          strokeWidth={
                            1.8
                          }
                          className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                        />
                      </span>
                    </div>
                  </div>

                  <span
                    className={`absolute bottom-0 left-8 right-8 h-[2px] origin-left rounded-full bg-[#0B2A52] transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}