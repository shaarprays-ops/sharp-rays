"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";

type BlogPost = {
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

  tags?: {
    _id?: string;
    title?: string;
    slug?: string;
  }[];

  author?: {
    name?: string;
  };
};

type BlogGridProps = {
  posts: BlogPost[];
  searchQuery?: string;
  selectedCategory?: string;
  initialVisibleCount?: number;
  enableLoadMore?: boolean;
};

export default function BlogGrid({
  posts,
  searchQuery = "",
  selectedCategory = "All Insights",
  initialVisibleCount = 6,
  enableLoadMore = false,
}: BlogGridProps) {
  const [visibleCount, setVisibleCount] =
    useState(initialVisibleCount);

  const isCategorySelected =
    selectedCategory !== "All Insights";

  const visiblePosts = useMemo(() => {
    if (!enableLoadMore) {
      return posts;
    }

    return posts.slice(
      0,
      visibleCount
    );
  }, [
    posts,
    visibleCount,
    enableLoadMore,
  ]);

  const hasMore =
    enableLoadMore &&
    visibleCount < posts.length;

  const handleLoadMore = () => {
    setVisibleCount(
      (current) =>
        Math.min(
          current + 6,
          posts.length
        )
    );
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-14 lg:pb-28 xl:px-20">
        <div className="mb-9 border-t border-[#0B2A52]/10 pt-10 sm:flex sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6285AD]">
              {searchQuery
                ? "Search Results"
                : isCategorySelected
                  ? "Category Insights"
                  : "Latest Insights"}
            </p>

            <h2 className="mt-3 font-serif text-[2.6rem] leading-[1] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
              {searchQuery
                ? `Results for “${searchQuery}”`
                : isCategorySelected
                  ? selectedCategory
                  : "Explore More Ideas."}
            </h2>
          </div>

          {!searchQuery &&
            !isCategorySelected && (
              <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-[#0B2A52]/62 sm:mt-0">
                Practical perspectives across search,
                advertising, websites, content and
                AI-led digital growth.
              </p>
            )}
        </div>

        {posts.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visiblePosts.map(
                (post) => (
                  <BlogCard
                    key={post._id}
                    post={post}
                  />
                )
              )}
            </div>

            {hasMore && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={
                    handleLoadMore
                  }
                  title="Load more Sharp Rays insights"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-[16px] border border-[#0B2A52]/15 bg-white px-6 py-3 text-[12px] font-medium text-[#0B2A52] shadow-[0_8px_24px_rgba(11,42,82,0.05)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#6285AD]/35 hover:bg-[#f8fbfe] hover:shadow-[0_12px_30px_rgba(11,42,82,0.08)]"
                >
                  Load More Insights
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="border border-[#0B2A52]/10 bg-[#f8fbfe] px-6 py-14 text-center">
            <p className="text-[15px] font-medium text-[#0B2A52]">
              No insights found.
            </p>

            <p className="mt-2 text-[13px] text-[#0B2A52]/55">
              There are currently no published posts
              in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}