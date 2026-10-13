import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TagPageContent, {
  type TagBlogPost,
  type TagData,
} from "@/components/Blog/TagPageContent";

import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  POSTS_BY_TAG_QUERY,
  TAG_BY_SLUG_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 60;

const SITE_URL = "https://www.sharprays.com";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getTag(slug: string) {
  return sanityClient.fetch<TagData | null>(
    TAG_BY_SLUG_QUERY,
    { slug }
  );
}

function getTagSeo(tag: TagData) {
  const title = `${tag.title} Insights & Guides | Sharp Rays`;

  const description =
    tag.description ||
    `Explore practical ${tag.title} insights, strategies and guides from Sharp Rays covering digital visibility, marketing and business growth.`;

  return {
    title,
    description,
  };
}

/* =====================================================
   DYNAMIC METADATA
===================================================== */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const tag = await getTag(slug);

  if (!tag) {
    return {
      title: "Blog Topic Not Found | Sharp Rays",
      description:
        "The requested Sharp Rays blog topic could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl =
    `${SITE_URL}/blog/tag/${tag.slug}`;

  const {
    title,
    description,
  } = getTagSeo(tag);

  return {
    metadataBase: new URL(SITE_URL),

    title,
    description,

    authors: [
      {
        name: "Sharp Rays",
        url: SITE_URL,
      },
    ],

    creator: "Sharp Rays",
    publisher: "Sharp Rays",

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
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
          url: `${SITE_URL}/og/home.webp`,
          width: 1200,
          height: 630,
          alt: `${tag.title} insights and guides by Sharp Rays`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `${SITE_URL}/og/home.webp`,
      ],
    },
  };
}

/* =====================================================
   TAG PAGE
===================================================== */

export default async function TagPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const now =
    new Date().toISOString();

  const [
    tag,
    posts,
  ] = await Promise.all([
    getTag(slug),

    sanityClient.fetch<
      TagBlogPost[]
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

  const pageUrl =
    `${SITE_URL}/blog/tag/${tag.slug}`;

  const {
    title: seoTitle,
    description: seoDescription,
  } = getTagSeo(tag);

  /* =====================================================
     STRUCTURED DATA
  ===================================================== */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      {
        "@type":
          "Organization",

        "@id":
          `${SITE_URL}/#organization`,

        name:
          "Sharp Rays",

        alternateName:
          "Sharp Rays Digital Marketing Agency",

        url:
          SITE_URL,

        sameAs: [
          "https://www.linkedin.com/company/sharp-rays/",
          "https://www.instagram.com/sharpraysdigital/",
          "https://www.facebook.com/profile.php?id=61594116386615",
        ],
      },

      {
        "@type":
          "WebSite",

        "@id":
          `${SITE_URL}/#website`,

        url:
          SITE_URL,

        name:
          "Sharp Rays",

        publisher: {
          "@id":
            `${SITE_URL}/#organization`,
        },

        inLanguage:
          "en-IN",
      },

      {
        "@type":
          "BreadcrumbList",

        "@id":
          `${pageUrl}#breadcrumb`,

        itemListElement: [
          {
            "@type":
              "ListItem",

            position:
              1,

            name:
              "Home",

            item:
              SITE_URL,
          },

          {
            "@type":
              "ListItem",

            position:
              2,

            name:
              "Blog",

            item:
              `${SITE_URL}/blog`,
          },

          {
            "@type":
              "ListItem",

            position:
              3,

            name:
              "Topics",

            item:
              `${SITE_URL}/blog`,
          },

          {
            "@type":
              "ListItem",

            position:
              4,

            name:
              tag.title,

            item:
              pageUrl,
          },
        ],
      },

      {
        "@type":
          "CollectionPage",

        "@id":
          `${pageUrl}#webpage`,

        url:
          pageUrl,

        name:
          seoTitle,

        headline:
          tag.title,

        description:
          seoDescription,

        inLanguage:
          "en-IN",

        isPartOf: {
          "@id":
            `${SITE_URL}/#website`,
        },

        publisher: {
          "@id":
            `${SITE_URL}/#organization`,
        },

        breadcrumb: {
          "@id":
            `${pageUrl}#breadcrumb`,
        },

        about: {
          "@type":
            "Thing",

          name:
            tag.title,
        },

        mainEntity: {
          "@id":
            `${pageUrl}#articles`,
        },
      },

      {
        "@type":
          "ItemList",

        "@id":
          `${pageUrl}#articles`,

        name:
          `${tag.title} Articles`,

        numberOfItems:
          posts.length,

        itemListOrder:
          "https://schema.org/ItemListOrderDescending",

        itemListElement:
          posts.map(
            (
              post,
              index
            ) => {
              const postUrl =
                `${SITE_URL}/blog/${post.slug}`;

              const imageUrl =
                post
                  .featuredImage
                  ?.asset
                  ? urlFor(
                      post.featuredImage
                    )
                      .width(
                        1200
                      )
                      .height(
                        675
                      )
                      .fit(
                        "crop"
                      )
                      .url()
                  : undefined;

              const keywords =
                Array.from(
                  new Set(
                    post.tags
                      ?.map(
                        (
                          topic
                        ) =>
                          topic.title
                      )
                      .filter(
                        (
                          value
                        ): value is string =>
                          Boolean(
                            value
                          )
                      ) ||
                      []
                  )
                );

              return {
                "@type":
                  "ListItem",

                position:
                  index + 1,

                url:
                  postUrl,

                item: {
                  "@type":
                    "BlogPosting",

                  "@id":
                    `${postUrl}#article`,

                  url:
                    postUrl,

                  headline:
                    post.title,

                  description:
                    post.excerpt,

                  mainEntityOfPage:
                    {
                      "@type":
                        "WebPage",

                      "@id":
                        postUrl,
                    },

                  ...(post.publishedAt && {
                    datePublished:
                      post.publishedAt,
                  }),

                  ...(post
                    .category
                    ?.title && {
                    articleSection:
                      post
                        .category
                        .title,
                  }),

                  ...(imageUrl && {
                    image: [
                      imageUrl,
                    ],
                  }),

                  ...(keywords.length >
                    0 && {
                    keywords:
                      keywords.join(
                        ", "
                      ),
                  }),

                  author:
                    post.author
                      ?.name
                      ? {
                          "@type":
                            "Person",

                          name:
                            post
                              .author
                              .name,
                        }
                      : {
                          "@type":
                            "Organization",

                          "@id":
                            `${SITE_URL}/#organization`,
                        },

                  publisher: {
                    "@id":
                      `${SITE_URL}/#organization`,
                  },
                },
              };
            }
          ),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              structuredData
            ).replace(
              /</g,
              "\\u003c"
            ),
        }}
      />

      <TagPageContent
        tag={tag}
        posts={posts}
      />
    </>
  );
}