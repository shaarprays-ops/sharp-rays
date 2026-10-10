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

export default function BlogPageContent({
  posts,
}: BlogPageContentProps) {
  const [searchQuery, setSearchQuery] =
    useState("");

  const searchResultsRef =
    useRef<HTMLDivElement | null>(
      null
    );

  /* =====================================================
     HERO
  ===================================================== */

  const latestPost =
    posts[0];

  /* =====================================================
     LATEST THIS WEEK

     ALL posts from the last 7 days.
     No 3-post limit.
     Hero post is also allowed here.
  ===================================================== */

  const weeklyPosts =
    useMemo(() => {
      const now =
        new Date();

      const sevenDaysAgo =
        new Date(now);

      sevenDaysAgo.setDate(
        sevenDaysAgo.getDate() -
          7
      );

      return posts.filter(
        (post) => {
          if (
            !post.publishedAt
          ) {
            return false;
          }

          const publishedDate =
            new Date(
              post.publishedAt
            );

          return (
            publishedDate >=
              sevenDaysAgo &&
            publishedDate <=
              now
          );
        }
      );
    }, [posts]);

  /* =====================================================
     CATEGORIES
  ===================================================== */

  const categories =
    useMemo(() => {
      const categoryMap =
        new Map<
          string,
          {
            title: string;
            slug: string;
          }
        >();

      posts.forEach(
        (post) => {
          const title =
            post.category?.title;

          const slug =
            post.category?.slug;

          if (
            !title ||
            !slug
          ) {
            return;
          }

          if (
            !categoryMap.has(
              slug
            )
          ) {
            categoryMap.set(
              slug,
              {
                title,
                slug,
              }
            );
          }
        }
      );

      return Array.from(
        categoryMap.values()
      );
    }, [posts]);

  /* =====================================================
     POPULAR TAGS
  ===================================================== */

  const popularTags =
    useMemo(() => {
      const tagMap =
        new Map<
          string,
          {
            _id?: string;
            title?: string;
            slug?: string;
            count: number;
          }
        >();

      posts.forEach(
        (post) => {
          const uniquePostTags =
            new Map<
              string,
              {
                _id?: string;
                title?: string;
                slug?: string;
              }
            >();

          post.tags?.forEach(
            (tag) => {
              if (
                !tag.title
              ) {
                return;
              }

              const key =
                tag.slug ||
                tag._id ||
                tag.title.toLowerCase();

              if (
                !uniquePostTags.has(
                  key
                )
              ) {
                uniquePostTags.set(
                  key,
                  tag
                );
              }
            }
          );

          uniquePostTags.forEach(
            (
              tag,
              key
            ) => {
              const existing =
                tagMap.get(
                  key
                );

              if (existing) {
                existing.count +=
                  1;
              } else {
                tagMap.set(
                  key,
                  {
                    ...tag,
                    count: 1,
                  }
                );
              }
            }
          );
        }
      );

      return Array.from(
        tagMap.values()
      )
        .sort(
          (a, b) =>
            b.count -
            a.count
        )
        .slice(0, 12);
    }, [posts]);

  /* =====================================================
     SEARCH
  ===================================================== */

  const isSearching =
    searchQuery
      .trim()
      .length > 0;

  const searchResults =
    useMemo(() => {
      const query =
        searchQuery
          .trim()
          .toLowerCase();

      if (!query) {
        return [];
      }

      return posts.filter(
        (post) => {
          const tagsText =
            post.tags
              ?.map(
                (tag) =>
                  tag.title
              )
              .filter(Boolean)
              .join(" ") ||
            "";

          const searchableContent =
            [
              post.title,
              post.excerpt,
              post.category
                ?.title,
              post.author
                ?.name,
              tagsText,
            ]
              .filter(Boolean)
              .join(" ")
              .toLowerCase();

          return searchableContent.includes(
            query
          );
        }
      );
    }, [
      posts,
      searchQuery,
    ]);

  /* =====================================================
     SEARCH AUTO SCROLL
  ===================================================== */

  useEffect(() => {
    if (!isSearching) {
      return;
    }

    const timeout =
      window.setTimeout(
        () => {
          searchResultsRef.current?.scrollIntoView(
            {
              behavior:
                "smooth",
              block:
                "start",
            }
          );
        },
        150
      );

    return () =>
      window.clearTimeout(
        timeout
      );
  }, [
    isSearching,
    searchQuery,
  ]);

  /* =====================================================
     LATEST INSIGHTS
  ===================================================== */

  const latestInsights =
    useMemo(() => {
      return posts
        .filter(
          (post) =>
            post._id !==
            latestPost?._id
        )
        .slice(0, 9);
    }, [
      posts,
      latestPost,
    ]);

  /* =====================================================
     FEATURED POST
  ===================================================== */

  const featuredPost =
    useMemo(() => {
      return (
        posts.find(
          (post) =>
            post.featured &&
            post._id !==
              latestPost?._id
        ) ||
        posts.find(
          (post) =>
            post.featured
        ) ||
        null
      );
    }, [
      posts,
      latestPost,
    ]);

  return (
    <>
      {/* HERO */}

      <BlogHero
        latestPost={
          latestPost
        }
        searchQuery={
          searchQuery
        }
        onSearchChange={
          setSearchQuery
        }
      />

      {/* SEARCH RESULTS */}

      {isSearching && (
        <div
          ref={
            searchResultsRef
          }
          className="scroll-mt-24"
        >
          <BlogGrid
  posts={searchResults}
  searchQuery={searchQuery}
  selectedCategory="All Insights"
/>
        </div>
      )}

      {/* LATEST THIS WEEK */}

      {!isSearching &&
        weeklyPosts.length >
          0 && (
          <WeeklyPosts
            posts={
              weeklyPosts
            }
          />
        )}

      {/* CATEGORY ARCHIVES */}

      {!isSearching && (
        <BlogCategoryFilter
          categories={
            categories
          }
        />
      )}

      {/* LATEST INSIGHTS */}

      {!isSearching && (
        <BlogGrid
          posts={
            latestInsights
          }
          selectedCategory="All Insights"
        />
      )}

      {/* FEATURED */}

      {!isSearching &&
        featuredPost && (
        <FeaturedBlog
          post={
            featuredPost
          }
        />
      )}

      {/* POPULAR TOPICS */}

      {!isSearching &&
        popularTags.length >
          0 && (
          <PopularTopics
            tags={
              popularTags
            }
          />
        )}
    </>
  );
}