
"use client";

import { useMemo, useState } from "react";

import BlogCard from "@/components/Blog/BlogCard";

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

  author?: {
    name?: string;
    slug?: string;
    role?: string;
  };
};

type FeaturedBlogProps = {
  posts: BlogPost[];
};

const POSTS_PER_PAGE = 6;

export default function FeaturedBlog({
  posts,
}: FeaturedBlogProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    posts.length / POSTS_PER_PAGE
  );

  const paginatedPosts = useMemo(() => {
    const startIndex =
      (currentPage - 1) * POSTS_PER_PAGE;

    return posts.slice(
      startIndex,
      startIndex + POSTS_PER_PAGE
    );
  }, [posts, currentPage]);

  if (!posts || posts.length === 0) {
    return null;
  }

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1380px] px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 lg:px-14 lg:pb-28 xl:px-20">

        {/* SECTION HEADER */}

        <div className="mb-9 border-t border-[#0B2A52]/10 pt-10">
          <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#6285AD]">
            Featured Insights
          </p>

          <h2 className="mt-3 font-serif text-[2.6rem] leading-[1] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
            Featured Reading.
          </h2>

          <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/62 sm:text-[15px]">
            Handpicked Sharp Rays insights, ideas and practical
            perspectives worth exploring in more detail.
          </p>

          <p className="mt-3 text-[12px] text-[#6285AD]">
            {posts.length} featured articles
          </p>
        </div>

        {/* FEATURED BLOG GRID */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginatedPosts.map((post) => (
            <BlogCard
              key={post._id}
              post={post}
            />
          ))}
        </div>

        {/* PAGINATION */}

        {totalPages > 1 && (
          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 items-center gap-2 rounded-full border border-[#0B2A52]/15 px-4 text-[13px] text-[#0B2A52] transition hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span aria-hidden="true">←</span>
              Previous
            </button>

            {/* PAGE NUMBERS */}

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-label={`Go to page ${page}`}
                aria-current={
                  currentPage === page
                    ? "page"
                    : undefined
                }
                className={`h-10 min-w-10 rounded-full border px-3 text-[13px] transition ${
                  currentPage === page
                    ? "border-[#122847] bg-[#122847] text-white"
                    : "border-[#0B2A52]/15 text-[#0B2A52] hover:border-[#122847] hover:bg-[#122847] hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            {/* NEXT */}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-10 items-center gap-2 rounded-full border border-[#0B2A52]/15 px-4 text-[13px] text-[#0B2A52] transition hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              Next
              <span aria-hidden="true">→</span>
            </button>

          </div>
        )}

        {/* PAGINATION INFO */}

        {totalPages > 1 && (
          <p className="mt-5 text-center text-[12px] text-[#0B2A52]/50">
            Showing{" "}
            {(currentPage - 1) * POSTS_PER_PAGE + 1}
            {" – "}
            {Math.min(
              currentPage * POSTS_PER_PAGE,
              posts.length
            )}
            {" of "}
            {posts.length} featured articles
          </p>
        )}

      </div>
    </section>
  );
}
