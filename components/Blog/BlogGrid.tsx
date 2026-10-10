"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

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
};

const POSTS_PER_PAGE = 9;

export default function BlogGrid({
  posts,
  searchQuery = "",
  selectedCategory = "All Insights",
}: BlogGridProps) {
  const [currentPage, setCurrentPage] =
    useState(1);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const isCategorySelected =
    selectedCategory !== "All Insights";

  /* =====================================================
     REMOVE DUPLICATE POSTS
  ===================================================== */

  const uniquePosts = useMemo(() => {
    return Array.from(
      new Map(
        posts.map((post) => [
          post._id,
          post,
        ])
      ).values()
    );
  }, [posts]);

  /* =====================================================
     RESET PAGE WHEN DATA / FILTER CHANGES
  ===================================================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [
    posts,
    searchQuery,
    selectedCategory,
  ]);

  /* =====================================================
     PAGINATION
  ===================================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(
      uniquePosts.length /
        POSTS_PER_PAGE
    )
  );

  const safeCurrentPage =
    Math.min(
      currentPage,
      totalPages
    );

  const startIndex =
    (safeCurrentPage - 1) *
    POSTS_PER_PAGE;

  const visiblePosts =
    uniquePosts.slice(
      startIndex,
      startIndex +
        POSTS_PER_PAGE
    );

  function changePage(
    page: number
  ) {
    if (
      page < 1 ||
      page > totalPages ||
      page === safeCurrentPage
    ) {
      return;
    }

    setCurrentPage(page);

    window.setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-28 bg-white"
    >
      <div className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-14 lg:pb-28 xl:px-20">
        {/* HEADER */}
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

        {/* POSTS */}
        {uniquePosts.length > 0 ? (
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

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-3 border-t border-[#0B2A52]/10 pt-8">
                <button
                  type="button"
                  onClick={() =>
                    changePage(
                      safeCurrentPage - 1
                    )
                  }
                  disabled={
                    safeCurrentPage === 1
                  }
                  className="group inline-flex min-h-[44px] items-center gap-2 border border-[#0B2A52]/12 bg-white px-4 text-[11px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#0B2A52]/12 disabled:hover:bg-white disabled:hover:text-[#0B2A52]"
                >
                  <ArrowLeft
                    size={14}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:-translate-x-[2px]"
                  />

                  Previous
                </button>

                <div className="inline-flex min-h-[44px] min-w-[72px] items-center justify-center border border-[#0B2A52]/12 bg-[#F8FBFE] px-4 text-[11px] font-medium text-[#0B2A52]">
                  {safeCurrentPage}

                  <span className="mx-1.5 text-[#0B2A52]/30">
                    /
                  </span>

                  {totalPages}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    changePage(
                      safeCurrentPage + 1
                    )
                  }
                  disabled={
                    safeCurrentPage ===
                    totalPages
                  }
                  className="group inline-flex min-h-[44px] items-center gap-2 border border-[#0B2A52]/12 bg-white px-4 text-[11px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#0B2A52]/12 disabled:hover:bg-white disabled:hover:text-[#0B2A52]"
                >
                  Next

                  <ArrowRight
                    size={14}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-[2px]"
                  />
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