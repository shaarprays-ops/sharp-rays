import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CategoryPageContent, {
  type CategoryBlogPost,
  type CategoryData,
  type RelatedCategory,
} from "@/components/Blog/CategoryPageContent";

import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  CATEGORY_BY_SLUG_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 60;

const SITE_URL = "https://www.sharprays.com";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const RELATED_CATEGORIES_QUERY = `
  *[
    _type == "category" &&
    defined(slug.current) &&
    slug.current != $slug
  ]
  | order(title asc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

async function getCategory(slug: string) {
  return sanityClient.fetch<CategoryData | null>(
    CATEGORY_BY_SLUG_QUERY,
    { slug }
  );
}

function getCategorySeo(category: CategoryData) {
  const title = `${category.title} Insights & Guides | Sharp Rays`;

  const description =
    category.description ||
    `Explore practical ${category.title} insights, strategies and guides from Sharp Rays to improve visibility, engagement, performance and digital growth.`;

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

  const category = await getCategory(slug);

  if (!category) {
    return {
      title: "Blog Category Not Found | Sharp Rays",
      description:
        "The requested Sharp Rays blog category could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `${SITE_URL}/blog/category/${category.slug}`;

  const { title, description } =
    getCategorySeo(category);

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
          alt: `${category.title} insights and guides by Sharp Rays`,
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
   CATEGORY PAGE
===================================================== */

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const now = new Date().toISOString();

  const [
    category,
    posts,
    relatedCategories,
  ] = await Promise.all([
    getCategory(slug),

    sanityClient.fetch<CategoryBlogPost[]>(
      POSTS_BY_CATEGORY_QUERY,
      {
        slug,
        now,
      }
    ),

    sanityClient.fetch<RelatedCategory[]>(
      RELATED_CATEGORIES_QUERY,
      {
        slug,
      }
    ),
  ]);

  if (!category) {
    notFound();
  }

  const pageUrl =
    `${SITE_URL}/blog/category/${category.slug}`;

  const {
    title: seoTitle,
    description: seoDescription,
  } = getCategorySeo(category);

  /* =====================================================
     STRUCTURED DATA
  ===================================================== */

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",

        "@id": `${SITE_URL}/#organization`,

        name: "Sharp Rays",

        alternateName:
          "Sharp Rays Digital Marketing Agency",

        url: SITE_URL,

        sameAs: [
          "https://www.linkedin.com/company/sharp-rays/",
          "https://www.instagram.com/sharpraysdigital/",
          "https://www.facebook.com/profile.php?id=61594116386615",
        ],
      },

      {
        "@type": "WebSite",

        "@id": `${SITE_URL}/#website`,

        url: SITE_URL,

        name: "Sharp Rays",

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },

        inLanguage: "en-IN",
      },

      {
        "@type": "BreadcrumbList",

        "@id": `${pageUrl}#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },

          {
            "@type": "ListItem",
            position: 3,
            name: category.title,
            item: pageUrl,
          },
        ],
      },

      {
        "@type": "CollectionPage",

        "@id": `${pageUrl}#webpage`,

        url: pageUrl,

        name: seoTitle,

        headline: category.title,

        description: seoDescription,

        inLanguage: "en-IN",

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },

        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },

        about: {
          "@type": "Thing",
          name: category.title,
        },

        mainEntity: {
          "@id": `${pageUrl}#articles`,
        },
      },

      {
        "@type": "ItemList",

        "@id": `${pageUrl}#articles`,

        name: `${category.title} Articles`,

        numberOfItems: posts.length,

        itemListOrder:
          "https://schema.org/ItemListOrderDescending",

        itemListElement: posts.map(
          (post, index) => {
            const postUrl =
              `${SITE_URL}/blog/${post.slug}`;

            const imageUrl =
              post.featuredImage?.asset
                ? urlFor(post.featuredImage)
                    .width(1200)
                    .height(675)
                    .fit("crop")
                    .url()
                : undefined;

            const keywords =
              Array.from(
                new Set(
                  post.tags
                    ?.map(
                      (tag) =>
                        tag.title
                    )
                    .filter(
                      (
                        value
                      ): value is string =>
                        Boolean(value)
                    ) || []
                )
              );

            return {
              "@type": "ListItem",

              position: index + 1,

              url: postUrl,

              item: {
                "@type": "BlogPosting",

                "@id":
                  `${postUrl}#article`,

                url: postUrl,

                headline:
                  post.title,

                description:
                  post.excerpt,

                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": postUrl,
                },

                ...(post.publishedAt && {
                  datePublished:
                    post.publishedAt,
                }),

                articleSection:
                  category.title,

                ...(imageUrl && {
                  image: [
                    imageUrl,
                  ],
                }),

                ...(keywords.length > 0 && {
                  keywords:
                    keywords.join(
                      ", "
                    ),
                }),

                author:
                  post.author?.name
                    ? {
                        "@type": "Person",

                        name:
                          post.author
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
          __html: JSON.stringify(
            structuredData
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <CategoryPageContent
        category={category}
        posts={posts}
        relatedCategories={
          relatedCategories
        }
      />
    </>
  );
}