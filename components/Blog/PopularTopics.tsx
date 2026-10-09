import Link from "next/link";

type Tag = {
  _id?: string;
  title?: string;
  slug?: string;
};

type PopularTopicsProps = {
  tags: Tag[];
};

export default function PopularTopics({
  tags,
}: PopularTopicsProps) {
  if (!tags.length) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="border-t border-[#0B2A52]/10 pt-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6285AD]">
            Popular Topics
          </p>

          <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-serif text-[2.6rem] leading-[1] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
                Explore What Matters.
              </h2>

              <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/62 sm:text-[15px]">
                Browse focused topics across search, advertising,
                content, websites, AI and digital growth.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {tags.map((tag) => {
              const key =
                tag._id ||
                tag.slug ||
                tag.title;

              if (!tag.title) {
                return null;
              }

              const href =
                tag.slug
                  ? `/blog/tag/${tag.slug}`
                  : "/blog";

              return (
                <Link
                  key={key}
                  href={href}
                  title={`Explore ${tag.title} Insights`}
                  className="border border-[#0B2A52]/10 bg-[#f7fafc] px-4 py-2.5 text-[12px] font-medium text-[#0B2A52]/72 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#6285AD]/35 hover:bg-[#eef4fa] hover:text-[#0B2A52]"
                >
                  {
                    tag.title
                  }
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}