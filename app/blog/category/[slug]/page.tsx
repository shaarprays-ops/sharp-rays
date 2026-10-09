import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogGrid from "@/components/Blog/BlogGrid";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

import { sanityClient } from "@/sanity/lib/client";
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

const SITE_URL = "https://www.sharprays.com";

async function getCategory(slug: string) {
  return sanityClient.fetch<Category | null>(
    CATEGORY_BY_SLUG_QUERY,
    {
      slug,
    }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

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
    `Explore Sharp Rays insights about ${category.title}.`;

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
  const { slug } = await params;

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

  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      <Navbar />

      <section className="relative overflow-hidden bg-white px-5 pb-12 pt-32 sm:px-8 md:px-10 lg:px-14 lg:pb-16 lg:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[#EEF5FB]" />
          <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#F3F8FC]" />
        </div>

        <div className="relative mx-auto max-w-[1220px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6285AD] sm:text-[11px]">
            Blog Category
          </p>

          <h1 className="mt-4 max-w-[900px] font-serif text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[2.95rem] md:text-[3.1rem] lg:text-[3.35rem]">
            {category.title}
          </h1>

          {category.description && (
            <p className="mt-6 max-w-[760px] text-[14px] leading-7 text-[#0B2A52]/62 sm:text-[15px]">
              {
                category.description
              }
            </p>
          )}
        </div>
      </section>

      <BlogGrid
        posts={posts}
        selectedCategory={
          category.title
        }
        initialVisibleCount={6}
        enableLoadMore
      />

      <Footer />
    </main>
  );
}