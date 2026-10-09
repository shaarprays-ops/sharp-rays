"use client";

import Link from "next/link";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

type Tag = {
  _id?: string;
  title?: string;
  slug?: string;
};

type Category = {
  _id: string;
  title: string;
  slug: string;
  postCount: number;
};

type RelatedPost = {
  _id: string;
  title: string;
  slug: string;

  category?: {
    title?: string;
  };
};
type LatestPost = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;

  category?: {
    title?: string;
    slug?: string;
  };
};

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type ArticleSidebarProps = {
  title: string;
  tags?: Tag[];
  relatedPosts?: RelatedPost[];
  latestPosts?: LatestPost[];
  toc?: TocItem[];
  categories?: Category[];
  currentCategorySlug?: string;
};
export default function ArticleSidebar({
  title,
  tags = [],
  relatedPosts = [],
  latestPosts = [],
  toc = [],
  categories = [],
  currentCategorySlug,
}: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState(
    toc[0]?.id || ""
  );

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!toc.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      const readingLine = 165;

      let current =
        toc[0]?.id || "";

      for (const item of toc) {
        const heading =
          document.getElementById(
            item.id
          );

        if (!heading) continue;

        const top =
          heading.getBoundingClientRect().top;

        if (top <= readingLine) {
          current = item.id;
        } else {
          break;
        }
      }

      setActiveId((previous) =>
        previous === current
          ? previous
          : current
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(
        updateActiveSection
      );
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [toc]);

  const handleTocClick = (
    id: string
  ) => {
    const heading =
      document.getElementById(id);

    if (!heading) return;

    const targetTop =
      heading.getBoundingClientRect().top +
      window.scrollY -
      120;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  const getCurrentUrl = () =>
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const openShare = (
    url: string
  ) => {
    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleWhatsApp = () => {
    const url = getCurrentUrl();

    openShare(
      `https://wa.me/?text=${encodeURIComponent(
        `${title} ${url}`
      )}`
    );
  };

  const handleLinkedIn = () => {
    openShare(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        getCurrentUrl()
      )}`
    );
  };

  const handleFacebook = () => {
    openShare(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        getCurrentUrl()
      )}`
    );
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        getCurrentUrl()
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full space-y-5">
      {toc.length > 0 && (
        <section className="w-full border border-[#0B2A52]/10 bg-white p-5 shadow-[0_8px_26px_rgba(11,42,82,0.04)]">
          <div className="border-b border-[#0B2A52]/8 pb-4">
            <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#6285AD]">
              In This Article
            </p>

            <h2 className="mt-2 font-serif text-[1.35rem] leading-tight text-[#0B2A52]">
              On This Page
            </h2>
          </div>

          <nav
            className="mt-4"
            aria-label="Article table of contents"
          >
            <ul className="space-y-1">
              {toc.map(
                (
                  item,
                  index
                ) => {
                  const isActive =
                    activeId === item.id;

                  return (
                    <li
                      key={`${item.id}-${index}`}
                      className={
                        item.level === 3
                          ? "pl-3"
                          : ""
                      }
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleTocClick(
                            item.id
                          )
                        }
                        title={`Jump to ${item.text}`}
                        aria-current={
                          isActive
                            ? "location"
                            : undefined
                        }
                        className={`group grid w-full grid-cols-[24px_minmax(0,1fr)] gap-2.5 border-l-2 px-3 py-2.5 text-left transition-all duration-200 ${
                          isActive
                            ? "border-[#6285AD] bg-[#f2f7fb]"
                            : "border-transparent hover:border-[#6285AD]/30 hover:bg-[#f8fafc]"
                        }`}
                      >
                        <span
                          className={`pt-[1px] text-[9px] font-medium ${
                            isActive
                              ? "text-[#6285AD]"
                              : "text-[#0B2A52]/30"
                          }`}
                        >
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span
                          className={`text-[11px] leading-5 ${
                            isActive
                              ? "font-medium text-[#0B2A52]"
                              : "text-[#0B2A52]/55"
                          }`}
                        >
                          {item.text}
                        </span>
                      </button>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>

          {activeId && (
            <div className="mt-4 border-t border-[#0B2A52]/8 pt-4">
              <p className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#6285AD]">
                Currently Reading
              </p>

              <p className="mt-1.5 text-[11px] font-medium leading-5 text-[#0B2A52]">
                {toc.find(
                  (item) =>
                    item.id === activeId
                )?.text || ""}
              </p>
            </div>
          )}
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="w-full border border-[#0B2A52]/10 bg-white p-5 shadow-[0_8px_26px_rgba(11,42,82,0.04)]">
          <div className="flex items-end justify-between gap-4 border-b border-[#0B2A52]/8 pb-4">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#6285AD]">
                Related Insights
              </p>

              <h2 className="mt-2 font-serif text-[1.35rem] leading-tight text-[#0B2A52]">
                Similar Reads
              </h2>
            </div>

            <span className="text-[10px] font-medium text-[#6285AD]">
              {relatedPosts.length}
            </span>
          </div>

          <div>
            {relatedPosts
              .slice(0, 3)
              .map(
                (
                  post,
                  index
                ) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    title={`Read ${post.title}`}
                    className={`group block py-4 ${
                      index !==
                      Math.min(
                        relatedPosts.length,
                        3
                      ) -
                        1
                        ? "border-b border-[#0B2A52]/8"
                        : ""
                    }`}
                  >
                    {post.category?.title && (
                      <p className="mb-1.5 text-[8px] font-medium uppercase tracking-[0.13em] text-[#6285AD]">
                        {post.category.title}
                      </p>
                    )}

                    <p className="line-clamp-2 text-[11px] font-medium leading-5 text-[#0B2A52] transition-opacity group-hover:opacity-65">
                      {post.title}
                    </p>

                    <span className="mt-2 inline-flex items-center gap-1 text-[9px] text-[#0B2A52]/40">
                      Read insight

                      <ExternalLink
                        size={9}
                        strokeWidth={1.6}
                      />
                    </span>
                  </Link>
                )
              )}
          </div>
        </section>
      )}
      {latestPosts.length > 0 && (
  <section className="w-full border border-[#0B2A52]/10 bg-white p-5 shadow-[0_8px_26px_rgba(11,42,82,0.04)]">
    <div className="flex items-end justify-between gap-4 border-b border-[#0B2A52]/8 pb-4">
      <div>
        <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#6285AD]">
          Recently Published
        </p>

        <h2 className="mt-2 font-serif text-[1.35rem] leading-tight text-[#0B2A52]">
          Latest Insights
        </h2>
      </div>

      <span className="text-[10px] font-medium text-[#6285AD]">
        {latestPosts.length}
      </span>
    </div>

    <div>
      {latestPosts.slice(0, 3).map((post, index) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug}`}
          title={`Read ${post.title}`}
          className={`group block py-4 ${
            index !==
            Math.min(latestPosts.length, 3) - 1
              ? "border-b border-[#0B2A52]/8"
              : ""
          }`}
        >
          {post.category?.title && (
            <p className="mb-1.5 text-[8px] font-medium uppercase tracking-[0.13em] text-[#6285AD]">
              {post.category.title}
            </p>
          )}

          <p className="line-clamp-2 text-[11px] font-medium leading-5 text-[#0B2A52] transition-opacity group-hover:opacity-65">
            {post.title}
          </p>

          <span className="mt-2 inline-flex items-center gap-1 text-[9px] text-[#0B2A52]/40">
            Read latest
            <ExternalLink
              size={9}
              strokeWidth={1.6}
            />
          </span>
        </Link>
      ))}
    </div>
  </section>
)}

      {categories.length > 0 && (
        <section className="w-full border border-[#0B2A52]/10 bg-white p-5 shadow-[0_8px_26px_rgba(11,42,82,0.04)]">
          <div className="border-b border-[#0B2A52]/8 pb-4">
            <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#6285AD]">
              Explore
            </p>

            <h2 className="mt-2 font-serif text-[1.35rem] leading-tight text-[#0B2A52]">
              All Categories
            </h2>
          </div>

          <div className="mt-3 space-y-1">
            {categories.map(
              (category) => {
                const isActive =
                  currentCategorySlug ===
                  category.slug;

                return (
                  <Link
  key={category._id}
  href={`/blog/category/${category.slug}`}
  title={`Explore ${category.title} Insights`}
  className={`flex min-h-[46px] items-center justify-between gap-3 px-3 py-2.5 transition-all duration-200 ${
    isActive
      ? "bg-[#eef4fa]"
      : "bg-transparent hover:bg-[#f8fafc]"
  }`}
>
  <span
    className={`min-w-0 text-[10px] font-medium leading-4 ${
      isActive
        ? "text-[#0B2A52]"
        : "text-[#0B2A52]/60"
    }`}
  >
    {category.title}
  </span>

  <span
    className={`flex h-[26px] min-w-[28px] shrink-0 items-center justify-center border px-2 text-[9px] font-medium ${
      isActive
        ? "border-[#6285AD]/25 bg-white text-[#6285AD]"
        : "border-[#0B2A52]/8 bg-[#f8fafc] text-[#0B2A52]/40"
    }`}
  >
    {category.postCount}
  </span>
</Link>
                );
              }
            )}
          </div>
        </section>
      )}

      {tags.length > 0 && (
        <section className="w-full border border-[#0B2A52]/10 bg-white p-5 shadow-[0_8px_26px_rgba(11,42,82,0.04)]">
          <div className="border-b border-[#0B2A52]/8 pb-4">
            <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#6285AD]">
              Topics
            </p>

            <h2 className="mt-2 font-serif text-[1.35rem] leading-tight text-[#0B2A52]">
              Covered Here
            </h2>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => {
  if (!tag.title) return null;

  const key =
    tag._id ||
    tag.slug ||
    tag.title;

  if (!tag.slug) {
    return (
      <span
        key={key}
        className="inline-flex min-h-[30px] items-center border border-[#0B2A52]/10 bg-[#f7fafc] px-3 py-1.5 text-[9px] font-medium leading-4 text-[#0B2A52]/62"
      >
        {tag.title}
      </span>
    );
  }

  return (
    <Link
      key={key}
      href={`/blog/tag/${tag.slug}`}
      title={`Explore ${tag.title} Insights`}
      className="inline-flex min-h-[30px] items-center border border-[#0B2A52]/10 bg-[#f7fafc] px-3 py-1.5 text-[9px] font-medium leading-4 text-[#0B2A52]/62 transition-all duration-200 hover:border-[#6285AD]/35 hover:bg-[#eef4fa] hover:text-[#0B2A52]"
    >
      {tag.title}
    </Link>
  );
})}
            
          </div>
        </section>
      )}

      <section className="w-full border border-[#0B2A52]/10 bg-white p-5 shadow-[0_8px_26px_rgba(11,42,82,0.04)]">
        <div className="border-b border-[#0B2A52]/8 pb-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#6285AD]">
            Share This Blog
          </p>

          <h2 className="mt-2 font-serif text-[1.35rem] leading-tight text-[#0B2A52]">
            Share the Insight
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={
              handleWhatsApp
            }
            title="Share this blog on WhatsApp"
            className="min-h-[42px] border border-[#0B2A52]/10 bg-[#f7fafc] px-2 text-[9px] font-medium text-[#0B2A52] transition-all hover:border-[#6285AD]/35 hover:bg-[#eef4fa]"
          >
            WhatsApp
          </button>

          <button
            type="button"
            onClick={
              handleLinkedIn
            }
            title="Share this blog on LinkedIn"
            className="min-h-[42px] border border-[#0B2A52]/10 bg-[#f7fafc] px-2 text-[9px] font-medium text-[#0B2A52] transition-all hover:border-[#6285AD]/35 hover:bg-[#eef4fa]"
          >
            LinkedIn
          </button>

          <button
            type="button"
            onClick={
              handleFacebook
            }
            title="Share this blog on Facebook"
            className="min-h-[42px] border border-[#0B2A52]/10 bg-[#f7fafc] px-2 text-[9px] font-medium text-[#0B2A52] transition-all hover:border-[#6285AD]/35 hover:bg-[#eef4fa]"
          >
            Facebook
          </button>

          <button
            type="button"
            onClick={
              handleCopy
            }
            title="Copy blog link"
            className="flex min-h-[42px] items-center justify-center gap-1.5 border border-[#0B2A52]/10 bg-[#f7fafc] px-2 text-[9px] font-medium text-[#0B2A52] transition-all hover:border-[#6285AD]/35 hover:bg-[#eef4fa]"
          >
            {copied ? (
              <>
                <Check
                  size={11}
                  strokeWidth={1.8}
                />
                Copied
              </>
            ) : (
              <>
                <Copy
                  size={11}
                  strokeWidth={1.8}
                />
                Copy Link
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
}