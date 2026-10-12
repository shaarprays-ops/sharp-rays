import type { Metadata } from "next";

import BlogPageContent from "@/components/Blog/BlogPageContent";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import { sanityClient } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

const SITE_URL = "https://www.sharprays.com";
const PAGE_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "SEO & Digital Marketing Insights | Sharp Rays",

  description:
    "Explore practical insights from Sharp Rays on SEO, social media marketing, performance marketing, websites, content, AI automation and AI video.",

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "Sharp Rays",

    title: "SEO & Digital Marketing Insights | Sharp Rays",

    description:
      "Practical insights on SEO, paid media, social media, websites, content and AI-led digital growth.",

    images: [
      {
        url: "/og/home.webp",
        width: 1200,
        height: 630,
        alt: "Sharp Rays digital marketing insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SEO & Digital Marketing Insights | Sharp Rays",

    description:
      "Practical insights on SEO, paid media, social media, websites, content and AI-led digital growth.",

    images: ["/og/home.webp"],
  },
};

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

export default async function BlogPage() {
  const now = new Date().toISOString();

  const posts: BlogPost[] = await sanityClient.fetch(
    BLOG_POSTS_QUERY,
    {
      now,
    }
  );

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

        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo/sharp-rays-logo.png`,
        },

        sameAs: [
          "https://www.linkedin.com/company/sharp-rays/",
          "https://www.instagram.com/sharpraysdigital/",
          "https://www.facebook.com/profile.php?id=61594116386615",
        ],
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,

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
            item: PAGE_URL,
          },
        ],
      },

      {
        "@type": "Blog",
        "@id": `${PAGE_URL}#blog`,

        url: PAGE_URL,

        name:
          "Sharp Rays Digital Marketing Insights",

        description:
          "Insights from Sharp Rays covering SEO, social media marketing, performance marketing, website development, content marketing, AI automation and AI video.",

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },

      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,

        url: PAGE_URL,

        name:
          "SEO & Digital Marketing Insights | Sharp Rays",

        description:
          "Explore practical insights from Sharp Rays on SEO, social media marketing, performance marketing, websites, content, AI automation and AI video.",

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },

        mainEntity: {
          "@id": `${PAGE_URL}#blog`,
        },

        about: [
          "Digital Marketing",
          "Search Engine Optimization",
          "Social Media Marketing",
          "Performance Marketing",
          "Website Development",
          "Content Marketing",
          "AI Automation",
          "AI Video",
        ],
      },

      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#blog-posts`,

        name: "Sharp Rays Blog Articles",

        numberOfItems: posts.length,

        itemListElement: posts.map(
          (post, index) => ({
            "@type": "ListItem",

            position: index + 1,

            url: `${SITE_URL}/blog/${post.slug}`,

            item: {
              "@type": "BlogPosting",

              "@id": `${SITE_URL}/blog/${post.slug}#article`,

              url: `${SITE_URL}/blog/${post.slug}`,

              headline: post.title,

              description: post.excerpt,

              ...(post.publishedAt && {
                datePublished:
                  post.publishedAt,
              }),

              ...(post.category?.title && {
                articleSection:
                  post.category.title,
              }),

              ...(post.tags?.length && {
                keywords: post.tags
                  .map(
                    (tag) =>
                      tag.title
                  )
                  .filter(Boolean)
                  .join(", "),
              }),

              author: post.author?.name
                ? {
                    "@type": "Person",
                    name:
                      post.author.name,
                  }
                : {
                    "@type":
                      "Organization",
                    "@id": `${SITE_URL}/#organization`,
                  },

              publisher: {
                "@id": `${SITE_URL}/#organization`,
              },
            },
          })
        ),
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      <BlogPageContent
        posts={posts}
      />

      <Footer />
    </main>
  );
}