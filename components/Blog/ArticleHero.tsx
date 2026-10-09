import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

type ArticleHeroProps = {
  post: {
    title: string;
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

    author?: {
      name?: string;
      role?: string;

      image?: {
        alt?: string;
        asset?: unknown;
      };
    };
  };
};

export default function ArticleHero({
  post,
}: ArticleHeroProps) {
  const imageUrl =
    post.featuredImage?.asset
      ? urlFor(post.featuredImage)
          .width(1400)
          .height(788)
          .fit("crop")
          .url()
      : null;

  const authorImageUrl =
    post.author?.image?.asset
      ? urlFor(post.author.image)
          .width(96)
          .height(96)
          .fit("crop")
          .url()
      : null;

  const formattedDate =
    post.publishedAt
      ? new Intl.DateTimeFormat("en-IN", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(
          new Date(post.publishedAt)
        )
      : null;

  return (
    <section className="relative overflow-hidden border-b border-[#0B2A52]/10 bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(98,133,173,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1380px] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-14 lg:py-20 xl:px-20">
        <Link
          href="/blog"
          title="Back to Sharp Rays Insights"
          className="mb-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#6285AD] transition-colors hover:text-[#0B2A52]"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.7}
          />
          Back to Insights
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#6285AD] sm:text-[11px]">
              {post.category?.title && (
                <span>
                  {post.category.title}
                </span>
              )}

              {post.category?.title &&
                formattedDate && (
                  <span className="h-1 w-1 rounded-full bg-[#6285AD]/40" />
                )}

              {formattedDate && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays
                    size={12}
                    strokeWidth={1.6}
                  />
                  {formattedDate}
                </span>
              )}
            </div>

            <h1 className="max-w-[650px] font-serif text-[1.65rem] leading-[1.03] tracking-[-0.035em] text-[#0B2A52] sm:text-[1.65rem] md:text-[1.75rem] lg:text-[1.85rem] xl:text-[1.95rem]">
              {post.title}
            </h1>

            <p className="mt-6 max-w-[640px] text-[14px] leading-7 text-[#0B2A52]/66 sm:text-[15px] sm:leading-8">
              {post.excerpt}
            </p>

            {post.author?.name && (
              <div className="mt-8 flex items-center gap-3 border-t border-[#0B2A52]/10 pt-6">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#edf4fa] text-[11px] font-semibold text-[#0B2A52]">
                  {authorImageUrl ? (
                    <Image
                      src={authorImageUrl}
                      alt={
                        post.author.image?.alt ||
                        post.author.name
                      }
                      title={
                        post.author.image?.alt ||
                        post.author.name
                      }
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  ) : (
                    "SR"
                  )}
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#0B2A52]">
                    {post.author.name}
                  </p>

                  {post.author.role && (
                    <p className="mt-0.5 text-[11px] text-[#0B2A52]/45">
                      {post.author.role}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="relative aspect-video w-full overflow-hidden border border-[#0B2A52]/10 bg-[#eef4fa] shadow-[0_16px_40px_rgba(11,42,82,0.06)]">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={
                    post.featuredImage?.alt ||
                    post.title
                  }
                  title={
                    post.featuredImage?.alt ||
                    post.title
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.24),transparent_36%),linear-gradient(135deg,#f5f9fc,#e5eef7)]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}