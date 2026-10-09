import Image from "next/image";
import Link from "next/link";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { urlFor } from "@/sanity/lib/image";

type ArticleBodyProps = {
  value: PortableTextBlock[];
};

function getBlockText(
  block: PortableTextBlock
) {
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

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ArticleBody({
  value,
}: ArticleBodyProps) {
  if (!value?.length) {
    return null;
  }

  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p className="mb-6 text-[15px] leading-8 text-[#0B2A52]/76 sm:text-[16px]">
          {children}
        </p>
      ),

      h2: ({
        children,
        value,
      }) => {
        const text =
          getBlockText(
            value as PortableTextBlock
          );

        return (
          <h2
            id={slugify(text)}
            className="scroll-mt-32 mb-5 mt-12 font-serif text-[2.05rem] leading-[1.08] tracking-[-0.03em] text-[#0B2A52] sm:text-[2.35rem]"
          >
            {children}
          </h2>
        );
      },

      h3: ({
        children,
        value,
      }) => {
        const text =
          getBlockText(
            value as PortableTextBlock
          );

        return (
          <h3
            id={slugify(text)}
            className="scroll-mt-32 mb-4 mt-9 font-serif text-[1.55rem] leading-[1.15] tracking-[-0.02em] text-[#0B2A52]"
          >
            {children}
          </h3>
        );
      },

      blockquote: ({
        children,
      }) => (
        <blockquote className="my-10 border-l-2 border-[#6285AD] pl-6 font-serif text-[1.5rem] leading-[1.45] text-[#0B2A52]">
          {children}
        </blockquote>
      ),
    },

    list: {
      bullet: ({
        children,
      }) => (
        <ul className="mb-7 list-disc space-y-3 pl-6 text-[15px] leading-8 text-[#0B2A52]/76 sm:text-[16px]">
          {children}
        </ul>
      ),

      number: ({
        children,
      }) => (
        <ol className="mb-7 list-decimal space-y-3 pl-6 text-[15px] leading-8 text-[#0B2A52]/76 sm:text-[16px]">
          {children}
        </ol>
      ),
    },

    listItem: {
      bullet: ({
        children,
      }) => (
        <li>{children}</li>
      ),

      number: ({
        children,
      }) => (
        <li>{children}</li>
      ),
    },

    marks: {
      strong: ({
        children,
      }) => (
        <strong className="font-semibold text-[#0B2A52]">
          {children}
        </strong>
      ),

      em: ({
        children,
      }) => (
        <em>{children}</em>
      ),

      link: ({
        children,
        value,
      }) => {
        const href =
          value?.href ||
          "#";

        const external =
          typeof href ===
            "string" &&
          (href.startsWith(
            "http://"
          ) ||
            href.startsWith(
              "https://"
            ));

        if (external) {
          return (
            <a
              href={href}
              target={
                value?.openInNewTab
                  ? "_blank"
                  : undefined
              }
              rel={
                value?.openInNewTab
                  ? "noopener noreferrer"
                  : undefined
              }
              className="font-medium text-[#0B2A52] underline decoration-[#6285AD]/40 underline-offset-4 transition-colors hover:text-[#6285AD]"
            >
              {children}
            </a>
          );
        }

        return (
          <Link
            href={href}
            title="Read more"
            className="font-medium text-[#0B2A52] underline decoration-[#6285AD]/40 underline-offset-4 transition-colors hover:text-[#6285AD]"
          >
            {children}
          </Link>
        );
      },
    },

    types: {
      image: ({
        value,
      }) => {
        if (!value?.asset) {
          return null;
        }

        const src =
          urlFor(value)
            .width(1400)
            .height(875)
            .fit("crop")
            .url();

        return (
          <figure className="my-10">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#eef4fa]">
              <Image
                src={src}
                alt={
                  value.alt ||
                  "Sharp Rays blog image"
                }
                title={
                  value.alt ||
                  "Sharp Rays blog image"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover"
              />
            </div>

            {value.caption && (
              <figcaption className="mt-3 text-center text-[12px] leading-5 text-[#0B2A52]/50">
                {value.caption}
              </figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return (
    <article className="min-w-0">
      <PortableText
        value={value}
        components={
          components
        }
      />
    </article>
  );
}