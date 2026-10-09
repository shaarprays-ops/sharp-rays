import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

type BlogCardProps = {
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
    };

    tags?: {
      _id?: string;
      title?: string;
      slug?: string;
    }[];

    author?: {
      name?: string;
    };
  };
};

export default function BlogCard({
  post,
}: BlogCardProps) {
  const imageUrl =
    post.featuredImage?.asset
      ? urlFor(post.featuredImage)
          .width(1200)
          .height(675)
          .fit("crop")
          .url()
      : null;

  const visibleTags =
    post.tags
      ?.filter((tag) => Boolean(tag.title))
      .slice(0, 3) || [];

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#0B2A52]/12 bg-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#6285AD]/35 hover:shadow-[0_16px_42px_rgba(11,42,82,0.07)]">
      <Link
        href={`/blog/${post.slug}`}
        title={`Read ${post.title}`}
        className="relative block aspect-[16/9] w-full overflow-hidden bg-[#eef4fa]"
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.featuredImage?.alt || post.title}
            title={post.featuredImage?.alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.20),transparent_36%),linear-gradient(135deg,#f5f9fc,#e8f0f8)]" />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {post.category?.title && (
          <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.13em] text-[#6285AD]">
            {post.category.title}
          </div>
        )}

        <h3 className="font-serif text-[13px] font-bold text-[#0B2A52] sm:text-[14px]">
          <Link
            href={`/blog/${post.slug}`}
            title={`Read ${post.title}`}
            className="transition-opacity duration-300 hover:opacity-75"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
          {post.excerpt}
        </p>

        {visibleTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={tag._id || tag.slug || tag.title}
                className="border border-[#0B2A52]/8 bg-[#f7fafc] px-2.5 py-1.5 text-[9px] font-medium text-[#0B2A52]/55"
              >
                {tag.title}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <p className="truncate text-[11px] text-[#0B2A52]/50">
            {post.author?.name || "Sharp Rays"}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            title={`Read ${post.title}`}
            className="group/link inline-flex shrink-0 items-center gap-1.5 text-[12px] font-medium text-[#0B2A52]"
          >
            Read More
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}