import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "@portabletext/types";

import ArticleAuthor from "@/components/Blog/ArticleAuthor";
import ArticleBody from "@/components/Blog/ArticleBody";
import ArticleCTA from "@/components/Blog/ArticleCTA";
import ArticleHero from "@/components/Blog/ArticleHero";
import ArticleOverview from "@/components/Blog/ArticleOverview";
import ArticleSidebar, {
  type TocItem,
} from "@/components/Blog/ArticleSidebar";

import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import {
  BLOG_CATEGORIES_QUERY,
  BLOG_POST_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 60;

type BlogTag = {
  _id?: string;
  title?: string;
  slug?: string;
};

type BlogCategory = {
  _id: string;
  title: string;
  slug: string;
  postCount: number;
};

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  updatedAt?: string;
  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  featured?: boolean;
  keyTakeaways?: string[];

  featuredImage?: {
    alt?: string;
    asset?: unknown;
  };

  ogImage?: {
    alt?: string;
    asset?: unknown;
  };

  category?: {
    _id?: string;
    title?: string;
    slug?: string;
  };

  tags?: BlogTag[];

  author?: {
    name?: string;
    slug?: string;
    role?: string;
    bio?: string;

    image?: {
      asset?: unknown;
      alt?: string;
    };
  };

  body?: PortableTextBlock[];
};

type RelatedPost = {
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
    _id?: string;
    title?: string;
    slug?: string;
  };

  tags?: BlogTag[];

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

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://www.sharprays.com";

function getBlockText(block: PortableTextBlock) {
  if (!Array.isArray(block.children)) {
    return "";
  }

  return block.children
    .map((child) => {
      if (
        typeof child === "object" &&
        child !== null &&
        "text" in child &&
        typeof child.text === "string"
      ) {
        return child.text;
      }

      return "";
    })
    .join("");
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function getPost(slug: string) {
  const now = new Date().toISOString();

  return sanityClient.fetch<BlogPost | null>(
    BLOG_POST_QUERY,
    {
      slug,
      now,
    }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Sharp Rays",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const articleUrl =
    post.canonicalUrl ||
    `${SITE_URL}/blog/${post.slug}`;

  const socialImageSource =
    post.ogImage?.asset
      ? post.ogImage
      : post.featuredImage?.asset
        ? post.featuredImage
        : null;

  const socialImage = socialImageSource
    ? urlFor(socialImageSource)
        .width(1200)
        .height(630)
        .fit("crop")
        .url()
    : `${SITE_URL}/og/home.webp`;

  const title =
    post.seoTitle ||
    post.title;

  const description =
    post.metaDescription ||
    post.excerpt;

  return {
    title: `${title} | Sharp Rays`,
    description,

    alternates: {
      canonical: articleUrl,
    },

    robots: {
      index: !post.noIndex,
      follow: !post.noIndex,
    },

    openGraph: {
      type: "article",
      locale: "en_IN",
      url: articleUrl,
      siteName: "Sharp Rays",
      title,
      description,

      publishedTime: post.publishedAt,

      modifiedTime:
        post.updatedAt ||
        post.publishedAt,

      authors: post.author?.name
        ? [post.author.name]
        : ["Sharp Rays"],

      tags: post.tags
        ?.map((tag) => tag.title)
        .filter(
          (tag): tag is string =>
            Boolean(tag)
        ),

      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt:
            post.ogImage?.alt ||
            post.featuredImage?.alt ||
            post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const now =
    new Date().toISOString();

  const post =
    await getPost(slug);

  if (!post) {
    notFound();
  }

  /* =====================================================
     TABLE OF CONTENTS
  ===================================================== */

  const toc: TocItem[] =
    (post.body || [])
      .filter(
        (block) =>
          block._type === "block" &&
          (block.style === "h2" ||
            block.style === "h3")
      )
      .map((block): TocItem => {
        const text =
          getBlockText(block);

        return {
          id: slugifyHeading(text),
          text,
          level:
            block.style === "h3"
              ? 3
              : 2,
        };
      })
      .filter((item) =>
        Boolean(item.text)
      );

  /* =====================================================
     RELATED POSTS
  ===================================================== */

  const tagIds =
    post.tags
      ?.map((tag) => tag._id)
      .filter(
        (id): id is string =>
          Boolean(id)
      ) || [];

  const relatedPosts: RelatedPost[] =
    await sanityClient.fetch(
      RELATED_POSTS_QUERY,
      {
        slug: post.slug,
        categoryId:
          post.category?._id ||
          "",
        tagIds,
        now,
      }
    );

  /* =====================================================
     ALL CATEGORIES
  ===================================================== */

  const categories: BlogCategory[] =
    await sanityClient.fetch(
      BLOG_CATEGORIES_QUERY,
      {
        now,
      }
    );

  /* =====================================================
     SCHEMA
  ===================================================== */

  const articleUrl =
    `${SITE_URL}/blog/${post.slug}`;

  const featuredImageUrl =
    post.featuredImage?.asset
      ? urlFor(post.featuredImage)
          .width(1600)
          .height(900)
          .fit("crop")
          .url()
      : undefined;

  const articleSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "BlogPosting",

    "@id":
      `${articleUrl}#article`,

    headline:
      post.title,

    description:
      post.metaDescription ||
      post.excerpt,

    url:
      articleUrl,

    mainEntityOfPage: {
      "@id":
        `${articleUrl}#webpage`,
    },

    datePublished:
      post.publishedAt,

    dateModified:
      post.updatedAt ||
      post.publishedAt,

    image:
      featuredImageUrl
        ? [featuredImageUrl]
        : undefined,

    author:
      post.author?.name
        ? {
            "@type":
              "Person",

            name:
              post.author.name,

            url:
              post.author.slug
                ? `${SITE_URL}/blog/author/${post.author.slug}`
                : undefined,
          }
        : {
            "@type":
              "Organization",

            "@id":
              `${SITE_URL}/#organization`,

            name:
              "Sharp Rays",

            url:
              SITE_URL,
          },

    publisher: {
      "@id":
        `${SITE_URL}/#organization`,
    },

    inLanguage:
      "en-IN",

    articleSection:
      post.category?.title ||
      undefined,

    keywords:
      post.tags
        ?.map(
          (tag) =>
            tag.title
        )
        .filter(Boolean)
        .join(", ") ||
      undefined,
  };

  const webPageSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "WebPage",

    "@id":
      `${articleUrl}#webpage`,

    url:
      articleUrl,

    name:
      post.title,

    description:
      post.metaDescription ||
      post.excerpt,

    isPartOf: {
      "@id":
        `${SITE_URL}/#website`,
    },

    about: {
      "@id":
        `${articleUrl}#article`,
    },

    breadcrumb: {
      "@id":
        `${articleUrl}#breadcrumb`,
    },

    inLanguage:
      "en-IN",
  };

  const breadcrumbSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "BreadcrumbList",

    "@id":
      `${articleUrl}#breadcrumb`,

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        name:
          "Home",

        item:
          SITE_URL,
      },
      {
        "@type":
          "ListItem",

        position: 2,

        name:
          "Blog",

        item:
          `${SITE_URL}/blog`,
      },
      {
        "@type":
          "ListItem",

        position: 3,

        name:
          post.title,

        item:
          articleUrl,
      },
    ],
  };

  return (
    <main className="bg-white text-[#0B2A52]">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema
          ).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <ArticleHero post={post} />

      <ArticleOverview
        keyTakeaways={
          post.keyTakeaways
        }
        tags={post.tags}
      />

      <section className="relative bg-white px-5 pb-20 pt-8 sm:px-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid items-start gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14">
            <aside className="order-2 min-w-0 lg:order-1 lg:sticky lg:top-28 lg:self-start">
              <ArticleSidebar
                title={
                  post.title
                }
                toc={toc}
                tags={
                  post.tags
                }
                relatedPosts={
                  relatedPosts
                }
                categories={
                  categories
                }
                currentCategorySlug={
                  post.category
                    ?.slug
                }
              />
            </aside>

            <div className="order-1 min-w-0 lg:order-2">
              <ArticleBody
                value={
                  post.body ||
                  []
                }
              />
            </div>
          </div>
        </div>
      </section>

      <ArticleAuthor
        author={post.author}
      />

      <ArticleCTA />

      <Footer />
    </main>
  );
}