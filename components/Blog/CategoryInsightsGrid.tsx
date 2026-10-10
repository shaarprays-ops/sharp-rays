"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  bodyText?: string;

  featuredImage?: {
    alt?: string;
    asset?: unknown;
  };

  category?: {
    _id?: string;
    title?: string;
    slug?: string;
  };

  tags?: {
    _id?: string;
    title?: string;
    slug?: string;
  }[];

  author?: {
    name?: string;
    slug?: string;
    role?: string;
  };
};

type CategoryInsightsGridProps = {
  posts: BlogPost[];
  categoryTitle: string;
};

function formatDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function getReadTime(post: BlogPost) {
  const text =
    `${post.bodyText || ""} ${post.excerpt || ""}`.trim();

  if (!text) {
    return 3;
  }

  const words =
    text
      .split(/\s+/)
      .filter(Boolean)
      .length;

  return Math.max(
    1,
    Math.ceil(words / 220)
  );
}

export default function CategoryInsightsGrid({
  posts,
  categoryTitle,
}: CategoryInsightsGridProps) {
  const [visibleCount, setVisibleCount] =
    useState(6);

  const visiblePosts =
    posts.slice(0, visibleCount);

  const hasMore =
    visibleCount < posts.length;

  if (posts.length === 0) {
    return (
      <section className="bg-white px-5 pb-20 sm:px-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px] border border-[#0B2A52]/10 bg-[#F8FBFE] px-6 py-16 text-center">
          <p className="text-[15px] font-medium text-[#0B2A52]">
            No insights published yet.
          </p>

          <p className="mt-2 text-[13px] text-[#0B2A52]/55">
            New articles in this category will appear here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="latest-insights"
      className="bg-white px-5 py-20 sm:px-8 md:px-10 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col gap-5 border-b border-[#0B2A52]/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">
              Latest Insights
            </p>
<h2 className="mt-3 max-w-[800px] font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
  Latest Insights
</h2>
          </div>

          <p className="max-w-[400px] text-[13px] leading-6 text-[#0B2A52]/55 md:text-right">
            Practical ideas, observations and guidance from Sharp Rays.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-9 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => {
            const imageUrl =
              post.featuredImage?.asset
                ? urlFor(
                    post.featuredImage
                  )
                    .width(1000)
                    .height(625)
                    .fit("crop")
                    .url()
                : null;

            const tags =
              post.tags
                ?.filter(
                  (tag) =>
                    tag.title &&
                    tag.slug
                )
                .slice(0, 3) || [];

            const formattedDate =
              formatDate(
                post.publishedAt
              );

            const readTime =
              getReadTime(post);

            return (
              <article
                key={post._id}
                className="group flex h-full flex-col border-t border-[#0B2A52]/14 pt-4"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  title={`Read ${post.title}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-[#EEF4F9]"
                >
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={
                        post.featuredImage
                          ?.alt ||
                        post.title
                      }
                      title={
                        post.featuredImage
                          ?.alt ||
                        post.title
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.20),transparent_35%),linear-gradient(135deg,#f8fbfe,#e7f0f8)]" />
                  )}
                </Link>

                <div className="flex flex-1 flex-col pt-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#6285AD]">
                    {post.category
                      ?.title ||
                      categoryTitle}
                  </p>

                  <h3 className="mt-3 font-serif text-[1.45rem] leading-[1.08] tracking-[-0.025em] text-[#0B2A52]">
                    <Link
                      href={`/blog/${post.slug}`}
                      title={`Read ${post.title}`}
                      className="transition-opacity duration-300 hover:opacity-70"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#0B2A52]/60">
                    {post.excerpt}
                  </p>

                  {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map(
                        (tag) => (
                          <Link
                            key={
                              tag._id ||
                              tag.slug
                            }
                            href={`/blog/tag/${tag.slug}`}
                            title={`Explore ${tag.title} insights`}
                            className="border border-[#0B2A52]/10 bg-[#F8FAFC] px-2.5 py-1.5 text-[9px] font-medium text-[#0B2A52]/58 transition-colors hover:border-[#6285AD]/30 hover:text-[#0B2A52]"
                          >
                            {
                              tag.title
                            }
                          </Link>
                        )
                      )}
                    </div>
                  )}

                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#0B2A52]/8 pt-5">
                    <div>
                      <p className="text-[11px] font-medium text-[#0B2A52]">
                        {post.author
                          ?.name ||
                          "Sharp Rays"}
                      </p>

                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[10px] text-[#0B2A52]/45">
                        {formattedDate && (
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays
                              size={12}
                              strokeWidth={
                                1.6
                              }
                            />
                            {
                              formattedDate
                            }
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1.5">
                          <Clock3
                            size={12}
                            strokeWidth={
                              1.6
                            }
                          />
                          {readTime} min read
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      title={`Read ${post.title}`}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[#0B2A52]/12 text-[#0B2A52] transition-all duration-300 hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white"
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount(
                  (count) =>
                    count + 6
                )
              }
              className="inline-flex min-h-[48px] items-center justify-center border border-[#0B2A52] bg-white px-7 text-[12px] font-medium text-[#0B2A52] transition-all duration-300 hover:bg-[#0B2A52] hover:text-white"
            >
              View More Insights
            </button>
          </div>
        )}
      </div>
    </section>
  );
}