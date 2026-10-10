import type { Metadata } from "next";

import Image from "next/image";

import Link from "next/link";

import { notFound } from "next/navigation";

import {

  ArrowUpRight,

  CalendarDays,

  Clock3,

} from "lucide-react";

import CategoryInsightsGrid from "@/components/Blog/CategoryInsightsGrid";

import Navbar from "@/components/Home/Navbar";

import Footer from "@/components/Home/Footer";

import { sanityClient } from "@/sanity/lib/client";

import { urlFor } from "@/sanity/lib/image";

import {

  CATEGORY_BY_SLUG_QUERY,

  POSTS_BY_CATEGORY_QUERY,

} from "@/sanity/lib/queries";

export const revalidate = 60;

type PageProps = {

  params: Promise<{

    slug: string;

  }>;

};

type Category = {

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

type RelatedCategory = {

  title: string;

  slug: string;

  description: string;

};

const SITE_URL =

  "https://www.sharprays.com";

const RELATED_CATEGORY_MAP: Record<

  string,

  RelatedCategory[]

> = {

  seo: [

    {

      title:

        "Content Marketing",

      slug:

        "content-marketing",

      description:

        "Content strategy, organic visibility and useful search-led publishing.",

    },

    {

      title:

        "Website Development & Management",

      slug:

        "website-development-management",

      description:

        "Websites built around performance, search foundations and user journeys.",

    },

    {

      title:

        "Performance Marketing",

      slug:

        "performance-marketing",

      description:

        "Paid acquisition, conversion thinking and measurable campaign performance.",

    },

  ],

  "search-engine-optimization-seo":

    [

      {

        title:

          "Content Marketing",

        slug:

          "content-marketing",

        description:

          "Content strategy, organic visibility and useful search-led publishing.",

      },

      {

        title:

          "Website Development & Management",

        slug:

          "website-development-management",

        description:

          "Websites built around performance, search foundations and user journeys.",

      },

      {

        title:

          "Performance Marketing",

        slug:

          "performance-marketing",

        description:

          "Paid acquisition, conversion thinking and measurable campaign performance.",

      },

    ],

  "content-marketing": [

    {

      title:

        "Search Engine Optimization (SEO)",

      slug:

        "search-engine-optimization-seo",

      description:

        "Search visibility, technical foundations and organic growth strategy.",

    },

    {

      title:

        "Social Media Marketing",

      slug:

        "social-media-marketing",

      description:

        "Brand-led social strategy, content and audience connection.",

    },

    {

      title:

        "AI Video & Video Editing",

      slug:

        "ai-video-video-editing",

      description:

        "Modern video creation, editing and AI-assisted production.",

    },

  ],

  "performance-marketing": [

    {

      title:

        "Search Engine Optimization (SEO)",

      slug:

        "search-engine-optimization-seo",

      description:

        "Build stronger organic visibility alongside paid acquisition.",

    },

    {

      title:

        "Website Development & Management",

      slug:

        "website-development-management",

      description:

        "Improve landing experiences, performance and conversion journeys.",

    },

    {

      title:

        "Content Marketing",

      slug:

        "content-marketing",

      description:

        "Support acquisition with stronger messaging, content and intent.",

    },

  ],

};

function formatDate(

  date?: string

) {

  if (!date) {

    return "";

  }

  return new Intl.DateTimeFormat(

    "en-IN",

    {

      day: "2-digit",

      month: "short",

      year: "numeric",

    }

  ).format(

    new Date(date)

  );

}

function getReadTime(

  post: BlogPost

) {

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

    Math.ceil(

      words / 220

    )

  );

}

async function getCategory(

  slug: string

) {

  return sanityClient.fetch<

    Category | null

  >(

    CATEGORY_BY_SLUG_QUERY,

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

  const category =

    await getCategory(slug);

  if (!category) {

    return {

      title:

        "Blog Category Not Found | Sharp Rays",

      robots: {

        index: false,

        follow: false,

      },

    };

  }

  const pageUrl =

    `${SITE_URL}/blog/category/${category.slug}`;

  const title =

    `${category.title} Insights | Sharp Rays`;

  const description =

    category.description ||

    `Explore practical Sharp Rays insights about ${category.title}.`;

  return {

    title,

    description,

    alternates: {

      canonical:

        pageUrl,

    },

    robots: {

      index: true,

      follow: true,

    },

    openGraph: {

      type:

        "website",

      locale:

        "en_IN",

      url:

        pageUrl,

      siteName:

        "Sharp Rays",

      title,

      description,

      images: [

        {

          url:

            `${SITE_URL}/og/home.webp`,

          width:

            1200,

          height:

            630,

          alt:

            `${category.title} Insights | Sharp Rays`,

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

export default async function CategoryPage({

  params,

}: PageProps) {

  const { slug } =

    await params;

  const now =

    new Date().toISOString();

  const [

    category,

    posts,

  ] = await Promise.all([

    getCategory(slug),

    sanityClient.fetch<

      BlogPost[]

    >(

      POSTS_BY_CATEGORY_QUERY,

      {

        slug,

        now,

      }

    ),

  ]);

  if (!category) {

    notFound();

  }

  const featuredPost =

    posts[0];

  const latestPosts =

    featuredPost

      ? posts.filter(

          (post) =>

            post._id !==

            featuredPost._id

        )

      : posts;

  const featuredImage =

    featuredPost

      ?.featuredImage?.asset

      ? urlFor(

          featuredPost

            .featuredImage

        )

          .width(1600)
          .height(900)

          .fit("crop")

          .url()

      : null;

  const formattedFeaturedDate =

    formatDate(

      featuredPost

        ?.publishedAt

    );

  const featuredReadTime =

    featuredPost

      ? getReadTime(

          featuredPost

        )

      : 0;

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

  posts.forEach(

    (post) => {

      post.tags?.forEach(

        (tag) => {

          if (

            !tag.title ||

            !tag.slug

          ) {

            return;

          }

          const existing =

            topicMap.get(

              tag.slug

            );

          if (existing) {

            existing.count +=

              1;

          } else {

            topicMap.set(

              tag.slug,

              {

                title:

                  tag.title,

                slug:

                  tag.slug,

                count:

                  1,

              }

            );

          }

        }

      );

    }

  );

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

  /* =====================================================

     RELATED CATEGORIES

  ===================================================== */

  const relatedCategories =

    RELATED_CATEGORY_MAP[

      category.slug

    ] || [

      {

        title:

          "Search Engine Optimization (SEO)",

        slug:

          "search-engine-optimization-seo",

        description:

          "Improve visibility across search, AI discovery and organic journeys.",

      },

      {

        title:

          "Content Marketing",

        slug:

          "content-marketing",

        description:

          "Build stronger content systems around audience needs and business goals.",

      },

      {

        title:

          "Performance Marketing",

        slug:

          "performance-marketing",

        description:

          "Explore paid acquisition, conversion and campaign performance.",

      },

    ];

  return (

    <main className="overflow-hidden bg-white text-[#0B2A52]">

      <Navbar />

      {/* =================================================

          HERO

      ================================================= */}

      <section className="relative overflow-hidden border-b border-[#0B2A52]/8 bg-white px-5 pb-16 pt-32 sm:px-8 md:px-10 lg:px-14 lg:pb-20 lg:pt-40">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-[220px] top-16 h-[440px] w-[440px] rounded-full bg-[#EEF5FB]" />

          <div className="absolute -right-[180px] top-[-80px] h-[520px] w-[520px] rounded-full bg-[#F5F9FC]" />

          <div className="absolute right-[12%] top-[22%] h-[160px] w-[160px] rounded-full border border-[#6285AD]/10" />

        </div>

        <div className="relative mx-auto max-w-[1280px]">

          <div className="max-w-[920px]">

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

              <span aria-hidden="true">/</span>

              <span
                aria-current="page"
                className="text-[#0B2A52]/70"
              >
                {category.title}
              </span>
            </nav>

            <div className="flex items-center gap-4">

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">

                Blog Category

              </p>

              <span className="h-px w-9 bg-[#6285AD]/35" />

            </div>

            <h1 className="mt-5 font-serif text-[2.6rem] leading-[0.96] tracking-[-0.045em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">

              {

                category.title

              }

            </h1>

            <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-[#0B2A52]/60 sm:text-[15px]">

              {category.description ||

                `Practical insights, ideas and perspectives on ${category.title} from Sharp Rays.`}

            </p>

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

          FEATURED / LATEST

      ================================================= */}

      {featuredPost && (

        <section className="bg-[#F8FBFE] px-5 py-16 sm:px-8 md:px-10 lg:px-14 lg:py-20">

          <div className="mx-auto max-w-[1280px]">

            <div className="mb-8 flex items-center gap-4">

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">

                Featured In{" "}

                {

                  category.title

                }

              </p>

              <span className="h-px flex-1 bg-[#0B2A52]/8" />

            </div>

<article className="grid overflow-hidden border border-[#0B2A52]/10 bg-white lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

  <div className="flex h-full items-center justify-center p-5 sm:p-7 lg:p-8">

    <Link

      href={`/blog/${featuredPost.slug}`}

      title={`Read ${featuredPost.title}`}

      className="relative block aspect-[16/9] w-full overflow-hidden bg-[#EAF2F8]"

    >

      {featuredImage ? (

        <Image

          src={featuredImage}

          alt={

            featuredPost.featuredImage?.alt ||

            featuredPost.title

          }

          title={

            featuredPost.featuredImage?.alt ||

            featuredPost.title

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

     <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">

                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#6285AD]">

                  Latest Insight

                </p>

                <h2 className="mt-4 font-serif text-[2rem] leading-[1.03] tracking-[-0.035em] text-[#0B2A52] sm:text-[2.4rem] lg:text-[2.65rem]">

                  <Link

                    href={`/blog/${featuredPost.slug}`}

                    title={`Read ${featuredPost.title}`}

                    className="transition-opacity duration-300 hover:opacity-70"

                  >

                    {

                      featuredPost.title

                    }

                  </Link>

                </h2>

                <p className="mt-5 line-clamp-3 text-[14px] leading-7 text-[#0B2A52]/60">

                  {

                    featuredPost.excerpt

                  }

                </p>

                {featuredPost.tags &&

                  featuredPost.tags

                    .length >

                    0 && (

                    <div className="mt-6 flex flex-wrap gap-2">

                      {featuredPost.tags

                        .filter(

                          (tag) =>

                            tag.title &&

                            tag.slug

                        )

                        .slice(

                          0,

                          3

                        )

                        .map(

                          (

                            tag

                          ) => (

                            <Link

                              key={

                                tag._id ||

                                tag.slug

                              }

                              href={`/blog/tag/${tag.slug}`}

                              title={`Explore ${tag.title} insights`}

                              className="border border-[#0B2A52]/10 bg-[#F8FAFC] px-3 py-1.5 text-[9px] font-medium text-[#0B2A52]/58"

                            >

                              {

                                tag.title

                              }

                            </Link>

                          )

                        )}

                    </div>

                  )}

                <div className="mt-8 flex flex-col gap-5 border-t border-[#0B2A52]/10 pt-6 sm:flex-row sm:items-end sm:justify-between">

                  <div>

                    <p className="text-[12px] font-medium text-[#0B2A52]">

                      By{" "}

                      {featuredPost

                        .author

                        ?.name ||

                        "Sharp Rays"}

                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-[10px] text-[#0B2A52]/45">

                      {formattedFeaturedDate && (

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

                            formattedFeaturedDate

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

                          featuredReadTime

                        }{" "}

                        min read

                      </span>

                    </div>

                  </div>

                  <Link

                    href={`/blog/${featuredPost.slug}`}

                    title={`Read ${featuredPost.title}`}

                    className="inline-flex min-h-[46px] w-fit items-center gap-3 bg-[#0B2A52] px-5 text-[11px] font-medium text-white transition-colors hover:bg-[#174E88]"

                  >

                    Read Insight

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

          </div>

        </section>

      )}

      {/* =================================================

          LATEST CATEGORY ARTICLES

      ================================================= */}

      <CategoryInsightsGrid

        posts={latestPosts}

        categoryTitle={

          category.title

        }

      />

      {/* =================================================

          RELATED TOPICS

      ================================================= */}

      {relatedTopics.length >

        0 && (

        <section className="border-y border-[#0B2A52]/8 bg-[#F8FBFE] px-5 py-16 sm:px-8 md:px-10 lg:px-14 lg:py-20">

          <div className="mx-auto max-w-[1280px]">

            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

              <div>

                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">

                  Explore Related

                  Topics

                </p>

                <h2 className="mt-3 font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">

                  Go Deeper Into

                  The Topic.

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

                      className="group inline-flex min-h-[46px] items-center gap-3 border border-[#0B2A52]/12 bg-white px-4 text-[11px] font-medium text-[#0B2A52] transition-all duration-300 hover:border-[#6285AD]/35 hover:-translate-y-[1px]"

                    >

                      {

                        topic.title

                      }

                      <span className="text-[9px] text-[#0B2A52]/35">

                        {

                          topic.count

                        }

                      </span>

                      <ArrowUpRight

                        size={

                          13

                        }

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

          MORE FROM SHARP RAYS

      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 md:px-10 lg:px-14 lg:py-24">

        <div className="mx-auto max-w-[1280px]">

          <div className="mb-10 border-b border-[#0B2A52]/10 pb-8">

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#6285AD] sm:text-[11px]">

              More From Sharp Rays

            </p>

            <h2 className="mt-3 font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">

              Explore More Areas

              Of Growth.

            </h2>

          </div>

          <div className="grid border-l border-t border-[#0B2A52]/10 md:grid-cols-3">

            {relatedCategories.map(

              (

                item,

                index

              ) => (

                <Link

                  key={

                    item.slug

                  }

                  href={`/blog/category/${item.slug}`}

                  title={`Explore ${item.title} insights`}

                  className="group flex min-h-[240px] flex-col justify-between border-b border-r border-[#0B2A52]/10 bg-white p-6 transition-colors duration-300 hover:bg-[#F8FBFE] sm:p-7"

                >

                  <div className="flex items-start justify-between gap-5">

                    <span className="text-[10px] font-medium text-[#6285AD]">

                      0

                      {

                        index +

                        1

                      }

                    </span>

                    <ArrowUpRight

                      size={

                        17

                      }

                      strokeWidth={

                        1.6

                      }

                      className="text-[#6285AD] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"

                    />

                  </div>

                  <div>

                    <h3 className="font-serif text-[1.6rem] leading-[1.06] tracking-[-0.025em] text-[#0B2A52]">

                      {

                        item.title

                      }

                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[#0B2A52]/56">

                      {

                        item.description

                      }

                    </p>

                  </div>

                </Link>

              )

            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}