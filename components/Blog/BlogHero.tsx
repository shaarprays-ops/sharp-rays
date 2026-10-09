"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Search,
  X,
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

type BlogHeroProps = {
  latestPost?: {
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

      image?: {
        alt?: string;
        asset?: unknown;
      };
    };
  };

  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export default function BlogHero({
  latestPost,
  searchQuery,
  onSearchChange,
}: BlogHeroProps) {
  const imageUrl =
    latestPost?.featuredImage?.asset
      ? urlFor(latestPost.featuredImage)
          .width(1200)
          .height(675)
          .fit("crop")
          .url()
      : null;

  const authorImageUrl =
    latestPost?.author?.image?.asset
      ? urlFor(latestPost.author.image)
          .width(96)
          .height(96)
          .fit("crop")
          .url()
      : null;

  const formattedDate =
    latestPost?.publishedAt
      ? new Intl.DateTimeFormat("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(new Date(latestPost.publishedAt))
      : null;

  const readTime =
    latestPost?.excerpt
      ? Math.max(
          1,
          Math.ceil(
            latestPost.excerpt
              .trim()
              .split(/\s+/).length / 40
          )
        )
      : 1;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute left-[-160px] top-[60px] h-[360px] w-[360px] rounded-full bg-[#6285AD]/8 blur-[100px]" />
      <div className="absolute right-[-140px] top-[-80px] h-[420px] w-[420px] rounded-full bg-[#dce9f5]/55 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1380px] items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 md:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-14 lg:pb-24 lg:pt-24 xl:px-20">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6285AD]">
            Sharp Rays Insights
          </p>

          <h1 className="mt-4 max-w-[680px] font-serif text-[3rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[3.6rem] md:text-[4rem] lg:text-[4.35rem]">
            Ideas for Better Digital Growth.
          </h1>

          <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#0B2A52]/65 sm:text-[15px]">
            Practical thinking around SEO, performance marketing,
            content, websites, AI automation and the decisions that
            shape digital growth.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {[
              "Search",
              "Marketing",
              "AI",
              "Growth",
            ].map((item) => (
              <span
                key={item}
                className="border border-[#0B2A52]/10 bg-[#f7fafc] px-3 py-2 text-[11px] font-medium text-[#0B2A52]/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 max-w-[620px]">
            <label
              htmlFor="blog-search"
              className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-[#6285AD]"
            >
              Search Sharp Rays insights
            </label>

            <div className="flex min-h-[54px] items-center border border-[#0B2A52]/12 bg-white px-4 shadow-[0_10px_30px_rgba(11,42,82,0.05)]">
              <Search
                size={18}
                strokeWidth={1.7}
                className="shrink-0 text-[#6285AD]"
              />

              <input
                id="blog-search"
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  onSearchChange(event.target.value)
                }
                placeholder="Search blogs, topics or categories..."
                className="min-w-0 flex-1 bg-transparent px-3 text-[13px] text-[#0B2A52] outline-none placeholder:text-[#0B2A52]/35 sm:text-[14px]"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="Clear blog search"
                  title="Clear blog search"
                  className="inline-flex h-8 w-8 items-center justify-center text-[#0B2A52]/45 transition-colors duration-200 hover:text-[#0B2A52]"
                >
                  <X size={16} strokeWidth={1.8} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          {latestPost ? (
            <article className="overflow-hidden border border-[#0B2A52]/12 bg-white shadow-[0_18px_60px_rgba(11,42,82,0.07)]">
              <Link
                href={`/blog/${latestPost.slug}`}
                title={`Read ${latestPost.title}`}
                className="relative block aspect-[16/9] overflow-hidden bg-[#edf4fa]"
              >
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={
                      latestPost.featuredImage?.alt ||
                      latestPost.title
                    }
                    title={
                      latestPost.featuredImage?.alt ||
                      latestPost.title
                    }
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.22),transparent_38%),linear-gradient(135deg,#f5f9fc,#e8f0f8)]" />
                )}
              </Link>

              <div className="p-5 sm:p-6 lg:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.13em] text-[#6285AD]">
                  <span>Latest Insight</span>

                  {latestPost.category?.title && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-[#6285AD]/40" />
                      <span>{latestPost.category.title}</span>
                    </>
                  )}
                </div>

                <h2 className="font-serif text-[1.85rem] leading-[1.05] tracking-[-0.025em] text-[#0B2A52] sm:text-[2.1rem]">
                  <Link
                    href={`/blog/${latestPost.slug}`}
                    title={`Read ${latestPost.title}`}
                    className="transition-opacity duration-300 hover:opacity-75"
                  >
                    {latestPost.title}
                  </Link>
                </h2>

                <p className="mt-4 line-clamp-3 text-[13px] leading-6 text-[#0B2A52]/65 sm:text-[14px]">
                  {latestPost.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#0B2A52]/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#eaf1f7] text-[10px] font-semibold text-[#0B2A52]">
                      {authorImageUrl ? (
                        <Image
                          src={authorImageUrl}
                          alt={
                            latestPost.author?.image?.alt ||
                            latestPost.author?.name ||
                            "Sharp Rays author"
                          }
                          title={
                            latestPost.author?.image?.alt ||
                            latestPost.author?.name ||
                            "Sharp Rays author"
                          }
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      ) : (
                        "SR"
                      )}
                    </div>

                    <div>
                      <p className="text-[12px] font-medium text-[#0B2A52]">
                        {latestPost.author?.name || "Sharp Rays"}
                      </p>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-[#0B2A52]/45">
                        {formattedDate && (
                          <span className="inline-flex items-center gap-1">
                            <CalendarDays
                              size={12}
                              strokeWidth={1.6}
                            />
                            {formattedDate}
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1">
                          <Clock3
                            size={12}
                            strokeWidth={1.6}
                          />
                          {readTime} min read
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${latestPost.slug}`}
                    title={`Read ${latestPost.title}`}
                    className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#0B2A52]"
                  >
                    Read
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ) : (
            <div className="aspect-[16/9] border border-[#0B2A52]/10 bg-[#f4f8fb]" />
          )}
        </div>
      </div>
    </section>
  );
}