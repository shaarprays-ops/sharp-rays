import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";
import type { BlogPost } from "./blogTypes";

export default function FeaturedInsight({ post }: { post?: BlogPost }) {
  if (!post) return null;

  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage).width(1200).height(675).fit("crop").url()
    : null;

  return (
    <section className="border-y border-[#0B2A52]/8 bg-[#F8FBFD]">
      <div className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 md:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mb-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.19em] text-[#6285AD]">
            Featured Insight
          </p>
          <h2 className="mt-3 font-serif text-[2.4rem] leading-none tracking-[-0.03em] text-[#0B2A52]">
            Worth a closer look.
          </h2>
        </div>

        <article className="grid overflow-hidden border border-[#0B2A52]/10 bg-white lg:grid-cols-[1.08fr_0.92fr]">
          <Link
            href={`/blog/${post.slug}`}
            title={`Read ${post.title}`}
            className="relative aspect-[16/9] overflow-hidden bg-[#edf4fa] lg:aspect-auto"
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={post.featuredImage?.alt || post.title}
                title={post.featuredImage?.alt || post.title}
                fill
                sizes="(max-width:1024px) 100vw, 56vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#eef5fb,#dce9f4)]" />
            )}
          </Link>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
            {post.category?.title && (
              <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#6285AD]">
                {post.category.title}
              </p>
            )}

            <h3 className="mt-4 font-serif text-[2rem] leading-[1.04] tracking-[-0.03em] text-[#0B2A52] sm:text-[2.35rem]">
              {post.title}
            </h3>

            <p className="mt-5 text-[13px] leading-7 text-[#0B2A52]/58">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              title={`Read ${post.title}`}
              className="mt-7 inline-flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#0B2A52]"
            >
              Read Featured Insight
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}