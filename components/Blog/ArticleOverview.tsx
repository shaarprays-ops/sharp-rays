import Link from "next/link";

type ArticleOverviewProps = {
  keyTakeaways?: string[];

  tags?: {
    _id?: string;
    title?: string;
    slug?: string;
  }[];
};

export default function ArticleOverview({
  keyTakeaways,
  tags,
}: ArticleOverviewProps) {
  const hasTakeaways =
    Boolean(keyTakeaways?.length);

  const hasTags =
    Boolean(tags?.length);

  if (!hasTakeaways && !hasTags) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1080px] px-5 pt-12 sm:px-8 sm:pt-14 md:px-10 lg:pt-16">
        {hasTakeaways && (
          <div className="border-y border-[#0B2A52]/10 py-8 sm:py-9">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6285AD]">
              Key Takeaways
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {keyTakeaways?.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex gap-4"
                >
                  <span className="mt-[2px] font-serif text-[18px] text-[#6285AD]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[14px] leading-7 text-[#0B2A52]/72">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasTags && (
          <div className="flex flex-wrap items-center gap-2 py-7">
            <span className="mr-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#6285AD]">
              Topics
            </span>

            {tags?.map((tag) => {
              if (!tag.title) return null;

              const key =
                tag._id ||
                tag.slug ||
                tag.title;

              if (!tag.slug) {
                return (
                  <span
                    key={key}
                    className="border border-[#0B2A52]/10 bg-[#f7fafc] px-3 py-2 text-[10px] font-medium text-[#0B2A52]/62"
                  >
                    {tag.title}
                  </span>
                );
              }

              return (
                <Link
                  key={key}
                  href={`/blog/tag/${tag.slug}`}
                  title={`Explore ${tag.title} Insights`}
                  className="border border-[#0B2A52]/10 bg-[#f7fafc] px-3 py-2 text-[10px] font-medium text-[#0B2A52]/62 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#6285AD]/35 hover:bg-[#eef4fa] hover:text-[#0B2A52]"
                >
                  {tag.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}