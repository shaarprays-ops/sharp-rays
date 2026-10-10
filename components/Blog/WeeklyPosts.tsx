"use client";

import {
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import BlogCard from "@/components/Blog/BlogCard";

type WeeklyPost = {
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

type WeeklyPostsProps = {
  posts: WeeklyPost[];
};

const POSTS_PER_PAGE = 6;

export default function WeeklyPosts({
  posts,
}: WeeklyPostsProps) {
  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const uniquePosts =
    useMemo(() => {
      return Array.from(
        new Map(
          posts.map(
            (post) => [
              post._id,
              post,
            ]
          )
        ).values()
      );
    }, [posts]);

  if (
    !uniquePosts.length
  ) {
    return null;
  }

  const totalPages =
    Math.ceil(
      uniquePosts.length /
        POSTS_PER_PAGE
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
      page ===
        safeCurrentPage
    ) {
      return;
    }

    setCurrentPage(page);

    window.setTimeout(
      () => {
        sectionRef.current?.scrollIntoView(
          {
            behavior:
              "smooth",
            block:
              "start",
          }
        );
      },
      50
    );
  }

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-28 bg-white"
    >
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mb-9 border-t border-[#0B2A52]/10 pt-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6285AD]">
                Latest This Week
              </p>

              <h2 className="mt-3 font-serif text-[2.6rem] leading-[1] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
                Fresh From Sharp Rays.
              </h2>

              <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/62 sm:text-[15px]">
                Recently published thinking, ideas and practical insights from
                the past seven days.
              </p>
            </div>

            <p className="text-[11px] font-medium text-[#0B2A52]/45">
              {
                uniquePosts.length
              }{" "}
              {uniquePosts.length ===
              1
                ? "Insight"
                : "Insights"}{" "}
              this week
            </p>
          </div>
        </div>

        {/* MAX 6 = 2 ROWS ON DESKTOP */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map(
            (post) => (
              <BlogCard
                key={
                  post._id
                }
                post={
                  post
                }
              />
            )
          )}
        </div>

        {/* PREVIOUS / PAGE / NEXT */}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3 border-t border-[#0B2A52]/10 pt-8">
            <button
              type="button"
              disabled={
                safeCurrentPage ===
                1
              }
              onClick={() =>
                changePage(
                  safeCurrentPage -
                    1
                )
              }
              className="group inline-flex min-h-[44px] items-center gap-2 border border-[#0B2A52]/12 bg-white px-4 text-[11px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#0B2A52]/12 disabled:hover:bg-white disabled:hover:text-[#0B2A52]"
            >
              <ArrowLeft
                size={14}
                strokeWidth={
                  1.7
                }
              />

              Previous
            </button>

            <div className="inline-flex min-h-[44px] min-w-[72px] items-center justify-center border border-[#0B2A52]/12 bg-[#F8FBFE] px-4 text-[11px] font-medium text-[#0B2A52]">
              {
                safeCurrentPage
              }

              <span className="mx-1.5 text-[#0B2A52]/30">
                /
              </span>

              {totalPages}
            </div>

            <button
              type="button"
              disabled={
                safeCurrentPage ===
                totalPages
              }
              onClick={() =>
                changePage(
                  safeCurrentPage +
                    1
                )
              }
              className="group inline-flex min-h-[44px] items-center gap-2 border border-[#0B2A52]/12 bg-white px-4 text-[11px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#0B2A52]/12 disabled:hover:bg-white disabled:hover:text-[#0B2A52]"
            >
              Next

              <ArrowRight
                size={14}
                strokeWidth={
                  1.7
                }
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}