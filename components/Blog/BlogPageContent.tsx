
"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import BlogCategoryFilter from "@/components/Blog/BlogCategoryFilter";
import BlogGrid from "@/components/Blog/BlogGrid";
import BlogHero from "@/components/Blog/BlogHero";
import FeaturedBlog from "@/components/Blog/FeaturedBlog";
import PopularTopics from "@/components/Blog/PopularTopics";
import WeeklyPosts from "@/components/Blog/WeeklyPosts";

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  featured?: boolean;

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

    image?: {
      alt?: string;
      asset?: unknown;
    };
  };
};

type BlogPageContentProps = {
  posts: BlogPost[];
};

const ALL_BLOGS_PER_PAGE = 9;

export default function BlogPageContent({
  posts,
}: BlogPageContentProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const [allBlogsPage, setAllBlogsPage] = useState(1);
  const [isAllInsightsActive, setIsAllInsightsActive] =
    useState(false);

  const searchResultsRef = useRef<HTMLDivElement | null>(null);
  const allInsightsRef = useRef<HTMLElement | null>(null);

  /* =====================================================
     SORT POSTS BY PUBLICATION DATE
  ===================================================== */

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const dateA = a.publishedAt
        ? new Date(a.publishedAt).getTime()
        : 0;

      const dateB = b.publishedAt
        ? new Date(b.publishedAt).getTime()
        : 0;

      return dateB - dateA;
    });
  }, [posts]);

  /* =====================================================
     HERO
  ===================================================== */

  const latestPost = sortedPosts[0] || null;

  /* =====================================================
     LATEST THIS WEEK

     Monday to Sunday (India Standard Time).
     Includes today's latest blog, including the hero post.
  ===================================================== */

  const weeklyPosts = useMemo(() => {
    const now = new Date();

    const indiaDate = new Date(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      })
    );

    const startOfWeek = new Date(indiaDate);

    const day = startOfWeek.getDay();

    const daysSinceMonday =
      day === 0 ? 6 : day - 1;

    startOfWeek.setDate(
      startOfWeek.getDate() - daysSinceMonday
    );

    startOfWeek.setHours(0, 0, 0, 0);

    const IST_OFFSET = 330 * 60 * 1000;

    const weekStartUTC =
      startOfWeek.getTime() - IST_OFFSET;

    const weekEndUTC =
      weekStartUTC + 7 * 24 * 60 * 60 * 1000;

    return sortedPosts.filter((post) => {
      if (!post.publishedAt) return false;

      const publishedTime = new Date(
        post.publishedAt
      ).getTime();

      if (Number.isNaN(publishedTime)) {
        return false;
      }

      return (
        publishedTime >= weekStartUTC &&
        publishedTime < weekEndUTC &&
        publishedTime <= now.getTime()
      );
    });
  }, [sortedPosts]);

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

    sortedPosts.forEach((post) => {
      const title = post.category?.title;
      const slug = post.category?.slug;

      if (!title || !slug) return;

      if (!categoryMap.has(slug)) {
        categoryMap.set(slug, {
          title,
          slug,
        });
      }
    });

    return Array.from(categoryMap.values());
  }, [sortedPosts]);

  /* =====================================================
     POPULAR TAGS
  ===================================================== */

  const popularTags = useMemo(() => {
    const tagMap = new Map<
      string,
      {
        _id?: string;
        title?: string;
        slug?: string;
        count: number;
      }
    >();

    sortedPosts.forEach((post) => {
      const uniquePostTags = new Map<
        string,
        {
          _id?: string;
          title?: string;
          slug?: string;
        }
      >();

      post.tags?.forEach((tag) => {
        if (!tag.title) return;

        const key =
          tag.slug ||
          tag._id ||
          tag.title.toLowerCase();

        if (!uniquePostTags.has(key)) {
          uniquePostTags.set(key, tag);
        }
      });

      uniquePostTags.forEach((tag, key) => {
        const existing = tagMap.get(key);

        if (existing) {
          existing.count += 1;
        } else {
          tagMap.set(key, {
            ...tag,
            count: 1,
          });
        }
      });
    });

    return Array.from(tagMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 12);
  }, [sortedPosts]);

  /* =====================================================
     SEARCH
  ===================================================== */

  const isSearching = searchQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return [];

    return sortedPosts.filter((post) => {
      const tagsText =
        post.tags
          ?.map((tag) => tag.title)
          .filter(Boolean)
          .join(" ") || "";

      const searchableContent = [
        post.title,
        post.excerpt,
        post.category?.title,
        post.author?.name,
        tagsText,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(query);
    });
  }, [sortedPosts, searchQuery]);

  /* =====================================================
     SEARCH AUTO SCROLL
  ===================================================== */

  useEffect(() => {
    if (!isSearching) return;

    const timeout = window.setTimeout(() => {
      searchResultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);

    return () => window.clearTimeout(timeout);
  }, [isSearching, searchQuery]);

  /* =====================================================
     ALREADY DISPLAYED POSTS

     Exclude hero and weekly articles from
     Explore More and Featured Reading.
  ===================================================== */

  const excludedPostIds = useMemo(() => {
    return new Set([
      ...(latestPost ? [latestPost._id] : []),
      ...weeklyPosts.map((post) => post._id),
    ]);
  }, [latestPost, weeklyPosts]);

  /* =====================================================
     FEATURED READING

     Exclude hero and weekly articles.
  ===================================================== */

  const featuredPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.featured === true &&
        !excludedPostIds.has(post._id)
    );
  }, [sortedPosts, excludedPostIds]);

  /* =====================================================
     EXPLORE MORE / LATEST INSIGHTS

     This is a separate section.
     It is NOT the All Blogs archive.
  ===================================================== */

  const latestInsights = useMemo(() => {
    const featuredIds = new Set(
      featuredPosts.map((post) => post._id)
    );

    return sortedPosts
      .filter(
        (post) =>
          !excludedPostIds.has(post._id) &&
          !featuredIds.has(post._id)
      )
      .slice(0, 9);
  }, [
    sortedPosts,
    excludedPostIds,
    featuredPosts,
  ]);

  /* =====================================================
     ALL BLOGS

     Includes every fetched article.
     Independent of Hero, Weekly, Explore More
     and Featured Reading.
  ===================================================== */

  const allBlogsTotalPages = Math.max(
    1,
    Math.ceil(
      sortedPosts.length / ALL_BLOGS_PER_PAGE
    )
  );

  const allBlogsPosts = useMemo(() => {
    const startIndex =
      (allBlogsPage - 1) * ALL_BLOGS_PER_PAGE;

    return sortedPosts.slice(
      startIndex,
      startIndex + ALL_BLOGS_PER_PAGE
    );
  }, [sortedPosts, allBlogsPage]);

  /* RESET ALL BLOGS PAGE WHEN POSTS CHANGE */

  useEffect(() => {
    setAllBlogsPage(1);
  }, [posts]);

  /* =====================================================
     ALL INSIGHTS CARD CLICK

     All Blogs is always visible.
     This only scrolls to the section.
  ===================================================== */

  const handleOpenAllInsights = () => {
    setIsAllInsightsActive(true);

    allInsightsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      {/* HERO + SEARCH */}

      <BlogHero
        latestPost={latestPost}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* SEARCH RESULTS */}

      {isSearching && (
        <div
          ref={searchResultsRef}
          className="scroll-mt-24"
        >
          <BlogGrid
            posts={searchResults}
            searchQuery={searchQuery}
            selectedCategory="Search Results"
          />

          {searchResults.length === 0 && (
            <div className="mx-auto max-w-[1380px] px-5 py-12 text-center">
              <p className="text-[#0B2A52]/60">
                No articles found. Try different keywords.
              </p>
            </div>
          )}
        </div>
      )}

      {/* LATEST THIS WEEK */}

      {weeklyPosts.length > 0 && (
        <WeeklyPosts posts={weeklyPosts} />
      )}

      {/* EXPLORE BY CATEGORIES */}

      <BlogCategoryFilter
        categories={categories}
        onSelectAllInsights={handleOpenAllInsights}
        isAllInsightsActive={isAllInsightsActive}
      />

      {/* =====================================================
          ALL BLOGS - ALWAYS VISIBLE
          Directly below Explore by Categories.
      ===================================================== */}

      <section
        id="all-insights-archive"
        ref={allInsightsRef}
        className="scroll-mt-20 bg-[#F8FBFE] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">

          {/* ALL BLOGS HEADING */}

          <div className="mb-10 max-w-[760px] sm:mb-12">
            <div className="flex items-center gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A77D52] sm:text-[12px]">
                The Complete Collection
              </p>

              <span className="h-px w-10 bg-[#B79A72]/65" />
            </div>

            <h2 className="mt-4 font-serif text-[2.5rem] leading-[1.02] tracking-[-0.04em] text-[#0B2A52] sm:text-[3rem] lg:text-[3.4rem]">
              All Blogs
              <span className="text-[#B79A72]">.</span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#0B2A52]/60 sm:text-[15px]">
              Explore every article, guide, strategy and
              perspective published by Sharp Rays.
            </p>

            <p className="mt-3 text-[12px] font-medium text-[#6285AD]">
              {sortedPosts.length} articles
            </p>
          </div>

          {/* ALL BLOG CARDS */}

          <BlogGrid
            posts={allBlogsPosts}
            selectedCategory="All Insights"
            showHeader={false}
          />

          {/* ALL BLOGS PAGINATION */}

          {allBlogsTotalPages > 1 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">

              <button
                type="button"
                onClick={() =>
                  setAllBlogsPage((page) =>
                    Math.max(1, page - 1)
                  )
                }
                disabled={allBlogsPage === 1}
                className="rounded-full border border-[#0B2A52]/15 px-5 py-3 text-[12px] font-medium text-[#0B2A52] transition-all hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                Previous
              </button>

              {Array.from(
                { length: allBlogsTotalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setAllBlogsPage(page)}
                  aria-current={
                    allBlogsPage === page
                      ? "page"
                      : undefined
                  }
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-[12px] font-medium transition-all ${
                    allBlogsPage === page
                      ? "border-[#0B2A52] bg-[#0B2A52] text-white"
                      : "border-[#0B2A52]/15 bg-white text-[#0B2A52] hover:border-[#0B2A52] hover:bg-[#EEF5FB]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setAllBlogsPage((page) =>
                    Math.min(
                      allBlogsTotalPages,
                      page + 1
                    )
                  )
                }
                disabled={
                  allBlogsPage === allBlogsTotalPages
                }
                className="rounded-full border border-[#0B2A52]/15 px-5 py-3 text-[12px] font-medium text-[#0B2A52] transition-all hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                Next
              </button>

            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          EXPLORE MORE / LATEST INSIGHTS
          Separate from All Blogs. Do not remove.
      ===================================================== */}

      {latestInsights.length > 0 && (
        <BlogGrid
          posts={latestInsights}
          selectedCategory="All Insights"
        />
      )}

      {/* FEATURED READING */}

      {featuredPosts.length > 0 && (
        <FeaturedBlog posts={featuredPosts} />
      )}

      {/* POPULAR TOPICS */}

      {popularTags.length > 0 && (
        <PopularTopics tags={popularTags} />
      )}
    </>
  );
}
