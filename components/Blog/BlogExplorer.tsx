"use client";

import { useMemo, useState } from "react";

import BlogCategoryFilter from "./BlogCategoryFilter";
import BlogGrid from "./BlogGrid";
import BlogHero from "./BlogHero";
import FeaturedInsight from "./FeaturedInsight";
import PopularTopics from "./PopularTopics";
import WeeklyPosts from "./WeeklyPosts";
import type { BlogPost, BlogTag } from "./blogTypes";

export default function BlogExplorer({
  posts,
}: {
  posts: BlogPost[];
}) {
  const [searchQuery, setSearchQuery] = useState("");

  /* =====================================================
     LATEST POST
  ===================================================== */

  const latestPost = posts[0];

  /* =====================================================
     LATEST THIS WEEK

     All posts published during the last 7 days.
     WeeklyPosts handles 6 cards per page.
  ===================================================== */

  const weeklyPosts = useMemo(() => {
    const now = new Date();
    const sevenDaysAgo = new Date(now);

    sevenDaysAgo.setDate(
      sevenDaysAgo.getDate() - 7
    );

    return posts.filter((post) => {
      if (!post.publishedAt) {
        return false;
      }

      const publishedDate =
        new Date(post.publishedAt);

      return (
        publishedDate >= sevenDaysAgo &&
        publishedDate <= now
      );
    });
  }, [posts]);

  /* =====================================================
     FEATURED POST
  ===================================================== */

  const featuredPost =
    posts.find(
      (post) =>
        post.featured &&
        post._id !== latestPost?._id
    ) ||
    posts[1] ||
    posts[0];

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories = useMemo(() => {
    const categoryMap = new Map<
      string,
      {
        title: string;
        slug: string;
      }
    >();

    posts.forEach((post) => {
      const title =
        post.category?.title;

      const slug =
        post.category?.slug;

      if (!title || !slug) {
        return;
      }

      if (!categoryMap.has(slug)) {
        categoryMap.set(slug, {
          title,
          slug,
        });
      }
    });

    return Array.from(
      categoryMap.values()
    );
  }, [posts]);

  /* =====================================================
     POPULAR TOPICS
  ===================================================== */

  const tags = useMemo(() => {
    const map =
      new Map<
        string,
        BlogTag
      >();

    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        const key =
          tag._id ||
          tag.slug ||
          tag.title;

        if (!key) {
          return;
        }

        if (!map.has(key)) {
          map.set(key, tag);
        }
      });
    });

    return Array.from(
      map.values()
    );
  }, [posts]);

  /* =====================================================
     SEARCH
  ===================================================== */

  const normalizedSearch =
    searchQuery
      .trim()
      .toLowerCase();

  const searchResults =
    useMemo(() => {
      if (!normalizedSearch) {
        return [];
      }

      return posts.filter((post) => {
        const searchable = [
          post.title,
          post.excerpt,
          post.category?.title,
          post.author?.name,
          ...(post.tags?.map(
            (tag) => tag.title
          ) || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchable.includes(
          normalizedSearch
        );
      });
    }, [
      posts,
      normalizedSearch,
    ]);

  /* =====================================================
     ALL INSIGHTS

     Latest hero post excluded.
     BlogGrid handles 9 cards per page.
  ===================================================== */

  const allInsights =
    useMemo(() => {
      if (!latestPost) {
        return posts;
      }

      return posts.filter(
        (post) =>
          post._id !==
          latestPost._id
      );
    }, [
      posts,
      latestPost,
    ]);

  return (
    <>
      {/* =================================================
          HERO
      ================================================= */}

      <BlogHero
        latestPost={latestPost}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* =================================================
          SEARCH RESULTS
      ================================================= */}

      {normalizedSearch && (
        <section className="border-b border-[#0B2A52]/8 bg-[#F8FBFD]">
          <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-8 md:px-10 lg:px-14 lg:py-16 xl:px-20">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6285AD]">
              Search Results
            </p>

            <div className="mb-8 mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className="font-serif text-[2.1rem] leading-tight tracking-[-0.03em] text-[#0B2A52]">
                Results for “
                {searchQuery.trim()}
                ”
              </h2>

              <p className="text-[11px] text-[#0B2A52]/45">
                {searchResults.length}{" "}
                {searchResults.length === 1
                  ? "article"
                  : "articles"}
              </p>
            </div>

            <BlogGrid
              posts={searchResults}
              searchQuery={searchQuery}
              selectedCategory="All Insights"
            />
          </div>
        </section>
      )}

      {/* =================================================
          LATEST THIS WEEK
      ================================================= */}

      {!normalizedSearch &&
        weeklyPosts.length > 0 && (
          <WeeklyPosts
            posts={weeklyPosts}
          />
        )}

      {/* =================================================
          CATEGORY ARCHIVE LINKS
      ================================================= */}

      {!normalizedSearch && (
        <BlogCategoryFilter
          categories={categories}
        />
      )}

      {/* =================================================
          ALL INSIGHTS
      ================================================= */}

      {!normalizedSearch && (
        <section
          id="blog-results"
          className="scroll-mt-28 border-t border-[#0B2A52]/8 bg-[#F8FBFD]"
        >
          <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-8 md:px-10 lg:px-14 lg:py-20 xl:px-20">
            <div className="mb-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6285AD]">
                All Insights
              </p>

              <div className="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <h2 className="font-serif text-[2.2rem] leading-tight tracking-[-0.03em] text-[#0B2A52]">
                  Explore All Perspectives.
                </h2>

                <p className="text-[11px] text-[#0B2A52]/45">
                  {allInsights.length}{" "}
                  {allInsights.length === 1
                    ? "article"
                    : "articles"}
                </p>
              </div>
            </div>

            <BlogGrid
              posts={allInsights}
              selectedCategory="All Insights"
            />
          </div>
        </section>
      )}

      {/* =================================================
          FEATURED INSIGHT
      ================================================= */}

      {!normalizedSearch &&
        featuredPost && (
          <FeaturedInsight
            post={featuredPost}
          />
        )}

      {/* =================================================
          POPULAR TOPICS
      ================================================= */}

      {!normalizedSearch &&
        tags.length > 0 && (
          <PopularTopics
            tags={tags}
          />
        )}
    </>
  );
}