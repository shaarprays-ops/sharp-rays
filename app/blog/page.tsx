import BlogPageContent from "@/components/Blog/BlogPageContent";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import { sanityClient } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";

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
  const posts: BlogPost[] =
    await sanityClient.fetch(
      BLOG_POSTS_QUERY
    );

  return (
    <main className="overflow-hidden bg-white text-[#0B2A52]">
      <Navbar />
      <BlogPageContent
        posts={posts}
      />
      <Footer />
    </main>
  );
}