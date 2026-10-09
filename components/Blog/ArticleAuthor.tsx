import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

type ArticleAuthorProps = {
  author?: {
    name?: string;
    role?: string;
    bio?: string;

    image?: {
      asset?: unknown;
      alt?: string;
    };
  };
};

export default function ArticleAuthor({
  author,
}: ArticleAuthorProps) {
  if (!author?.name) return null;

  const imageUrl = author.image?.asset
    ? urlFor(author.image)
        .width(240)
        .height(240)
        .url()
    : null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[900px] px-5 pb-16 sm:px-8 md:px-10 lg:pb-20">
        <div className="flex flex-col gap-6 border-t border-[#0B2A52]/10 pt-8 sm:flex-row sm:items-center">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#eef4fa]">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={
                  author.image?.alt ||
                  author.name
                }
                title={
                  author.image?.alt ||
                  author.name
                }
                fill
                sizes="64px"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,133,173,0.24),transparent_40%),linear-gradient(135deg,#f4f8fc,#e5eef7)]" />
            )}
          </div>

          <div>
            <p className="text-[12px] uppercase tracking-[0.16em] text-[#6285AD]">
              Written by
            </p>

            <h2 className="mt-1 font-serif text-[1.6rem] leading-tight text-[#0B2A52]">
              {author.name}
            </h2>

            {author.role && (
              <p className="mt-1 text-[13px] text-[#0B2A52]/55">
                {author.role}
              </p>
            )}

            {author.bio && (
              <p className="mt-4 max-w-[680px] text-[14px] leading-7 text-[#0B2A52]/68">
                {author.bio}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}