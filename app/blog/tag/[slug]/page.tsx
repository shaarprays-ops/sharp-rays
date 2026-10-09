import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogGrid from "@/components/Blog/BlogGrid";
import { sanityClient } from "@/sanity/lib/client";
import {
  POSTS_BY_TAG_QUERY,
  TAG_BY_SLUG_QUERY,
} from "@/sanity/lib/queries";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

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
  };
};

const SITE_URL = "https://www.sharprays.com";

async function getTag(slug: string) {
  return sanityClient.fetch<Tag | null>(
    TAG_BY_SLUG_QUERY,
    { slug }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const tag = await getTag(slug);

  if (!tag) {
    return {
      title: "Tag Not Found | Sharp Rays",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url =
    `${SITE_URL}/blog/tag/${tag.slug}`;

  const description =
    tag.description ||
    `Explore Sharp Rays insights about ${tag.title}, including practical ideas, strategies and digital growth perspectives.`;

  return {
    title: `${tag.title} Insights | Sharp Rays`,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: "Sharp Rays",
      title: `${tag.title} Insights | Sharp Rays`,
      description,
    },

    twitter: {
      card: "summary_large_image",
      title: `${tag.title} Insights | Sharp Rays`,
      description,
    },
  };
}

export default async function TagArchivePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const [tag, posts] =
    await Promise.all([
      getTag(slug),

      sanityClient.fetch<BlogPost[]>(
        POSTS_BY_TAG_QUERY,
        { slug }
      ),
    ]);

  if (!tag) {
    notFound();
  }

  return (
    <main className="bg-white text-[#0B2A52]">
        <Navbar />
      <section className="relative overflow-hidden border-b border-[#0B2A52]/10 bg-white">
        <div className="absolute left-[-140px] top-[-40px] h-[360px] w-[360px] rounded-full bg-[#6285AD]/8 blur-[100px]" />

        <div className="absolute right-[-120px] top-[20px] h-[380px] w-[380px] rounded-full bg-[#dce9f5]/55 blur-[100px]" />

        <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-24 xl:px-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6285AD] sm:text-[12px]">
            Blog Topic
          </p>

          <h1 className="mt-4 max-w-[850px] font-serif text-[2.8rem] leading-[0.98] tracking-[-0.04em] text-[#0B2A52] sm:text-[3.25rem] md:text-[3.6rem] lg:text-[4rem]">
            {tag.title}
          </h1>

          <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-[#0B2A52]/62 sm:text-[15px]">
            {tag.description ||
              `Explore practical Sharp Rays thinking, ideas and perspectives around ${tag.title}.`}
          </p>

          <div className="mt-7 inline-flex items-center border border-[#0B2A52]/10 bg-[#f7fafc] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.13em] text-[#0B2A52]/60">
            {posts.length} {posts.length === 1 ? "Insight" : "Insights"}
          </div>
        </div>
      </section>
<BlogGrid
  posts={posts}
  selectedCategory={tag.title}
  initialVisibleCount={6}
  enableLoadMore
/>
<Footer />
    </main>
  );
}