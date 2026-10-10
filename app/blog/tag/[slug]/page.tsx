import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import {
  POSTS_BY_TAG_QUERY,
  TAG_BY_SLUG_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 60;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Tag = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
};

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

const SITE_URL =
  "https://www.sharprays.com";

function formatDate(date?: string) {
  if (!date) return "";

  return new Intl.DateTimeFormat(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  ).format(new Date(date));
}

function getReadTime(post: BlogPost) {
  const text =
    `${post.bodyText || ""} ${post.excerpt || ""}`.trim();

  if (!text) return 3;

  const words = text
    .split(/\s+/)
    .filter(Boolean)
    .length;

  return Math.max(
    1,
    Math.ceil(words / 220)
  );
}

async function getTag(
  slug: string
) {
  return sanityClient.fetch<
    Tag | null
  >(
    TAG_BY_SLUG_QUERY,
    {
      slug,
    }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const tag =
    await getTag(slug);

  if (!tag) {
    return {
      title:
        "Blog Topic Not Found | Sharp Rays",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl =
    `${SITE_URL}/blog/tag/${tag.slug}`;

  const title =
    `${tag.title} Insights | Sharp Rays`;

  const description =
    tag.description ||
    `Explore Sharp Rays insights about ${tag.title}.`;

  return {
    title,
    description,

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "en_IN",
      url: pageUrl,
      siteName: "Sharp Rays",
      title,
      description,

      images: [
        {
          url:
            `${SITE_URL}/og/home.webp`,
          width: 1200,
          height: 630,
          alt:
            `${tag.title} Insights | Sharp Rays`,
        },
      ],
    },

    twitter: {
      card:
        "summary_large_image",
      title,
      description,
      images: [
        `${SITE_URL}/og/home.webp`,
      ],
    },
  };
}

export default async function TagPage({
  params,
}: PageProps) {
  const { slug } =
    await params;

  const now =
    new Date().toISOString();

  const [
    tag,
    posts,
  ] = await Promise.all([
    getTag(slug),

    sanityClient.fetch<
      BlogPost[]
    >(
      POSTS_BY_TAG_QUERY,
      {
        slug,
        now,
      }
    ),
  ]);

  if (!tag) {
    notFound();
  }

  /* =====================================================
     PARENT CATEGORY
  ===================================================== */

  const parentCategory =
    posts.find(
      (post) =>
        post.category?.slug &&
        post.category?.title
    )?.category;

  /* =====================================================
     RELATED TOPICS
  ===================================================== */

  const topicMap =
    new Map<
      string,
      {
        title: string;
        slug: string;
        count: number;
      }
    >();

  posts.forEach((post) => {
    post.tags?.forEach(
      (topic) => {
        if (
          !topic.title ||
          !topic.slug ||
          topic.slug === tag.slug
        ) {
          return;
        }

        const existing =
          topicMap.get(
            topic.slug
          );

        if (existing) {
          existing.count += 1;
        } else {
          topicMap.set(
            topic.slug,
            {
              title:
                topic.title,
              slug:
                topic.slug,
              count:
                1,
            }
          );
        }
      }
    );
  });

  const relatedTopics =
    Array.from(
      topicMap.values()
    )
      .sort(
        (a, b) =>
          b.count -
          a.count
      )
      .slice(0, 6);

  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      <Navbar />

      {/* =================================================
          TOPIC HERO
      ================================================= */}

      <section className="relative overflow-hidden border-b border-[#0B2A52]/8 bg-white px-5 pb-16 pt-32 sm:px-8 md:px-10 lg:px-14 lg:pb-20 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[220px] top-16 h-[440px] w-[440px] rounded-full bg-[#EEF5FB]" />

          <div className="absolute -right-[180px] top-[-80px] h-[520px] w-[520px] rounded-full bg-[#F5F9FC]" />

          <div className="absolute right-[12%] top-[22%] h-[160px] w-[160px] rounded-full border border-[#6285AD]/10" />
        </div>

        <div className="relative mx-auto max-w-[1280px]">
          <div className="max-w-[900px]">

            {/* BREADCRUMB */}

            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-[11px] text-[#0B2A52]/45"
            >
              <Link
                href="/blog"
                title="Sharp Rays Blog"
                className="transition-colors hover:text-[#0B2A52]"
              >
                Blog
              </Link>

              <span aria-hidden="true">
                /
              </span>

              <span>
                Topics
              </span>

              <span aria-hidden="true">
                /
              </span>

              <span
                aria-current="page"
                className="text-[#0B2A52]/70"
              >
                {tag.title}
              </span>
            </nav>

            {/* EYEBROW */}

            <div className="flex items-center gap-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">
                Blog Topic
              </p>

              <span className="h-px w-9 bg-[#6285AD]/35" />
            </div>

            {/* TITLE */}

            <h1 className="mt-5 font-serif text-[2.6rem] leading-[0.96] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
              {tag.title}
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-[#0B2A52]/60 sm:text-[15px]">
              {tag.description ||
                `Explore Sharp Rays insights about ${tag.title}, digital visibility and practical growth opportunities.`}
            </p>

            {/* COUNT */}

            <div className="mt-7 flex items-center gap-3">
              <span className="inline-flex min-h-[36px] items-center border border-[#0B2A52]/10 bg-white px-4 text-[11px] font-medium text-[#0B2A52]/65">
                {posts.length}{" "}
                {posts.length === 1
                  ? "Insight"
                  : "Insights"}
              </span>

              <Link
                href="/blog"
                title="Explore all Sharp Rays insights"
                className="text-[11px] font-medium text-[#6285AD] transition-colors hover:text-[#0B2A52]"
              >
                All Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          TOPIC ARTICLES
      ================================================= */}

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col gap-5 border-b border-[#0B2A52]/10 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">
                Topic Articles
              </p>

              <h2 className="mt-3 font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
                Articles About{" "}
                {tag.title}
              </h2>
            </div>

            <p className="max-w-[390px] text-[13px] leading-6 text-[#0B2A52]/55 md:text-right">
              Practical perspectives and guidance connected to this topic.
            </p>
          </div>

          {posts.length > 0 ? (
            <div
              className={
                posts.length === 1
                  ? "grid grid-cols-1"
                  : posts.length === 2
                    ? "grid gap-7 md:grid-cols-2"
                    : "grid gap-7 md:grid-cols-2 xl:grid-cols-3"
              }
            >
              {posts.map(
                (post) => {
                  const onePost =
                    posts.length ===
                    1;

                  const imageUrl =
                    post.featuredImage
                      ?.asset
                      ? urlFor(
                          post.featuredImage
                        )
                          .width(
                            1600
                          )
                          .height(
                            900
                          )
                          .fit(
                            "crop"
                          )
                          .url()
                      : null;

                  const date =
                    formatDate(
                      post.publishedAt
                    );

                  const readTime =
                    getReadTime(
                      post
                    );

                  const visibleTags =
                    post.tags
                      ?.filter(
                        (topic) =>
                          topic.title &&
                          topic.slug &&
                          topic.slug !==
                            tag.slug
                      )
                      .slice(0, 3) ||
                    [];

                  /* =====================================
                     ONE ARTICLE — WIDE EDITORIAL
                  ===================================== */

                  if (onePost) {
                    return (
                      <article
                        key={
                          post._id
                        }
                        className="grid border border-[#0B2A52]/10 bg-white lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
                      >
                        {/* IMAGE */}

                        <div className="flex h-full items-center justify-center p-5 sm:p-7 lg:p-8">
                          <Link
                            href={`/blog/${post.slug}`}
                            title={`Read ${post.title}`}
                            className="relative block aspect-[16/9] w-full overflow-hidden bg-[#EAF2F8]"
                          >
                            {imageUrl ? (
                              <Image
                                src={
                                  imageUrl
                                }
                                alt={
                                  post
                                    .featuredImage
                                    ?.alt ||
                                  post.title
                                }
                                title={
                                  post
                                    .featuredImage
                                    ?.alt ||
                                  post.title
                                }
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                              />
                            ) : (
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.24),transparent_34%),linear-gradient(135deg,#f5f9fc,#dfeaf5)]" />
                            )}
                          </Link>
                        </div>

                        {/* CONTENT */}

                        <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6285AD]">
                            {post
                              .category
                              ?.title ||
                              "Sharp Rays Insight"}
                          </p>

                          <h3 className="mt-4 font-serif text-[2rem] leading-[1.03] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.4rem] lg:text-[2.65rem]">
                            <Link
                              href={`/blog/${post.slug}`}
                              title={`Read ${post.title}`}
                              className="transition-opacity duration-300 hover:opacity-70"
                            >
                              {
                                post.title
                              }
                            </Link>
                          </h3>

                          <p className="mt-5 line-clamp-3 text-[14px] leading-7 text-[#0B2A52]/60">
                            {
                              post.excerpt
                            }
                          </p>

                          {visibleTags.length >
                            0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                              {visibleTags.map(
                                (
                                  topic
                                ) => (
                                  <Link
                                    key={
                                      topic._id ||
                                      topic.slug
                                    }
                                    href={`/blog/tag/${topic.slug}`}
                                    title={`Explore ${topic.title} insights`}
                                    className="rounded-full border border-[#0B2A52]/10 bg-[#F4F8FC] px-3 py-1.5 text-[9px] font-medium text-[#0B2A52]/65 transition-colors hover:border-[#6285AD]/30 hover:text-[#0B2A52]"
                                  >
                                    {
                                      topic.title
                                    }
                                  </Link>
                                )
                              )}
                            </div>
                          )}

                          <div className="mt-8 flex flex-col gap-5 border-t border-[#0B2A52]/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                              <p className="text-[12px] font-medium text-[#0B2A52]">
                                {post
                                  .author
                                  ?.name ||
                                  "Sharp Rays"}
                              </p>

                              <div className="mt-2 flex flex-wrap items-center gap-4 text-[10px] text-[#0B2A52]/45">
                                {date && (
                                  <span className="inline-flex items-center gap-1.5">
                                    <CalendarDays
                                      size={
                                        12
                                      }
                                      strokeWidth={
                                        1.6
                                      }
                                    />

                                    {
                                      date
                                    }
                                  </span>
                                )}

                                <span className="inline-flex items-center gap-1.5">
                                  <Clock3
                                    size={
                                      12
                                    }
                                    strokeWidth={
                                      1.6
                                    }
                                  />

                                  {
                                    readTime
                                  }{" "}
                                  min read
                                </span>
                              </div>
                            </div>

                            <Link
                              href={`/blog/${post.slug}`}
                              title={`Read ${post.title}`}
                              className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-[#0B2A52]/12 text-[#0B2A52] transition-all duration-300 hover:border-[#0B2A52] hover:bg-[#0B2A52] hover:text-white"
                            >
                              <ArrowUpRight
                                size={
                                  17
                                }
                                strokeWidth={
                                  1.7
                                }
                              />
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  }

                  /* =====================================
                     MULTIPLE ARTICLES
                  ===================================== */

                  return (
                    <article
                      key={
                        post._id
                      }
                      className="group flex h-full flex-col border-t border-[#0B2A52]/12 pt-4"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        title={`Read ${post.title}`}
                        className="relative block aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[#EAF2F8]"
                      >
                        {imageUrl ? (
                          <Image
                            src={
                              imageUrl
                            }
                            alt={
                              post
                                .featuredImage
                                ?.alt ||
                              post.title
                            }
                            title={
                              post
                                .featuredImage
                                ?.alt ||
                              post.title
                            }
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.20),transparent_35%),linear-gradient(135deg,#f7fafc,#e6eef6)]" />
                        )}
                      </Link>

                      <div className="flex flex-1 flex-col pt-5">
                        <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-[#6285AD]">
                          {post.category
                            ?.title ||
                            "Sharp Rays Insight"}
                        </p>

                        <h3 className="mt-3 font-serif text-[1.45rem] leading-[1.08] tracking-[-0.025em] text-[#0B2A52]">
                          <Link
                            href={`/blog/${post.slug}`}
                            title={`Read ${post.title}`}
                            className="transition-opacity duration-300 hover:opacity-70"
                          >
                            {
                              post.title
                            }
                          </Link>
                        </h3>

                        <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-[#0B2A52]/60">
                          {
                            post.excerpt
                          }
                        </p>

                        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#0B2A52]/8 pt-5">
                          <div>
                            <p className="text-[11px] font-medium text-[#0B2A52]">
                              {post
                                .author
                                ?.name ||
                                "Sharp Rays"}
                            </p>

                            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[10px] text-[#0B2A52]/45">
                              {date && (
                                <span className="inline-flex items-center gap-1.5">
                                  <CalendarDays
                                    size={
                                      12
                                    }
                                    strokeWidth={
                                      1.6
                                    }
                                  />

                                  {
                                    date
                                  }
                                </span>
                              )}

                              <span className="inline-flex items-center gap-1.5">
                                <Clock3
                                  size={
                                    12
                                  }
                                  strokeWidth={
                                    1.6
                                  }
                                />

                                {
                                  readTime
                                }{" "}
                                min read
                              </span>
                            </div>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            title={`Read ${post.title}`}
                            className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[#0B2A52]/12 text-[#0B2A52] transition-all duration-300 hover:bg-[#0B2A52] hover:text-white"
                          >
                            <ArrowUpRight
                              size={
                                15
                              }
                              strokeWidth={
                                1.7
                              }
                            />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          ) : (
            <div className="border border-[#0B2A52]/10 bg-[#F8FBFE] px-6 py-14 text-center">
              <p className="text-[14px] font-medium text-[#0B2A52]">
                No published insights available for this topic yet.
              </p>

              <p className="mt-2 text-[13px] text-[#0B2A52]/55">
                New articles will appear here when they are published.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          RELATED TOPICS
      ================================================= */}

      {relatedTopics.length >
        0 && (
        <section className="border-y border-[#0B2A52]/8 bg-[#F8FBFE] px-5 py-16 sm:px-8 md:px-10 lg:px-14 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">
                  Related Topics
                </p>

                <h2 className="mt-3 font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
                  Keep Exploring.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {relatedTopics.map(
                  (topic) => (
                    <Link
                      key={
                        topic.slug
                      }
                      href={`/blog/tag/${topic.slug}`}
                      title={`Explore ${topic.title} insights`}
                      className="inline-flex min-h-[44px] items-center gap-3 rounded-full border border-[#0B2A52]/10 bg-[#F4F8FC] px-4 text-[11px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#6285AD]/30 hover:bg-white"
                    >
                      {
                        topic.title
                      }

                      <ArrowUpRight
                        size={12}
                        strokeWidth={
                          1.7
                        }
                        className="text-[#6285AD]"
                      />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          PARENT CATEGORY
      ================================================= */}

      {parentCategory?.slug &&
        parentCategory.title && (
          <section className="bg-white px-5 py-16 sm:px-8 md:px-10 lg:px-14 lg:py-20">
            <div className="mx-auto max-w-[1280px]">
              <Link
                href={`/blog/category/${parentCategory.slug}`}
                title={`Explore ${parentCategory.title} insights`}
                className="group flex flex-col gap-8 border-t border-[#0B2A52]/12 pt-8 sm:flex-row sm:items-end sm:justify-between"
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD]">
                    Explore Parent Category
                  </p>

                  <h2 className="mt-3 max-w-[820px] font-serif text-[2.15rem] leading-[1] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.65rem]">
                    Explore{" "}
                    {
                      parentCategory.title
                    }
                  </h2>

                  <p className="mt-4 max-w-[640px] text-[13px] leading-6 text-[#0B2A52]/55">
                    Discover more Sharp Rays insights connected to this broader area.
                  </p>
                </div>

                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#0B2A52]/12 text-[#0B2A52] transition-all duration-300 group-hover:border-[#0B2A52] group-hover:bg-[#0B2A52] group-hover:text-white">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={
                      1.6
                    }
                  />
                </span>
              </Link>
            </div>
          </section>
        )}

      <Footer />
    </main>
  );
}