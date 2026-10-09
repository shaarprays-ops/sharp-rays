import BlogCard from "@/components/Blog/BlogCard";

type FeaturedBlogProps = {
  post: {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    publishedAt?: string;

    featuredImage?: {
      alt?: string;
      asset?: unknown;
    };

    category?: {
      title?: string;
      slug?: string;
    };

    author?: {
      name?: string;
      slug?: string;
      role?: string;
    };
  };
};

export default function FeaturedBlog({
  post,
}: FeaturedBlogProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-14 lg:pb-28 xl:px-20">
        <div className="mb-9 border-t border-[#0B2A52]/10 pt-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6285AD]">
            Featured Insight
          </p>

          <h2 className="mt-3 font-serif text-[2.6rem] leading-[1] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
            Featured Reading.
          </h2>

          <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/62 sm:text-[15px]">
            A selected Sharp Rays insight worth exploring in more detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <BlogCard post={post} />
        </div>
      </div>
    </section>
  );
}