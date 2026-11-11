
import { readFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "next-sanity";

type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
};

const SITE_URL = "https://www.sharprays.com";

const POSTS_QUERY = `
  *[
    _type == "post" &&
    defined(title) &&
    defined(slug.current) &&
    (!defined(publishedAt) || publishedAt <= now())
  ] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt
  }
`;

async function getPublishedPosts(): Promise<BlogPost[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!projectId || !dataset) {
    throw new Error("Sanity project ID or dataset is missing");
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2026-03-01",
    useCdn: false,
    perspective: "published",
  });

  return client.fetch<BlogPost[]>(POSTS_QUERY);
}

async function getBaseContent(detailed: boolean): Promise<string> {
  const filename = detailed
    ? "llms-full-base.txt"
    : "llms-base.txt";

  const filePath = path.join(
    process.cwd(),
    "public",
    filename
  );

  return (await readFile(filePath, "utf8")).trim();
}

function formatBlogSection(
  posts: BlogPost[],
  detailed: boolean
): string {
  const lines: string[] = [
    "## Latest Published Blog Articles",
    "",
    `Official blog: ${SITE_URL}/blog`,
    "",
  ];

  for (const post of posts) {
    const title = post.title.replace(/\s+/g, " ").trim();
    const url = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`;

    lines.push(`- [${title}](${url})`);

    if (detailed && post.excerpt) {
      lines.push(`  - Summary: ${post.excerpt.replace(/\s+/g, " ").trim()}`);
    }

    if (detailed && post.publishedAt) {
      lines.push(`  - Published: ${post.publishedAt.slice(0, 10)}`);
    }
  }

  return lines.join("\n");
}

export async function generateLLMS(
  detailed: boolean
): Promise<string> {
  const [baseContent, posts] = await Promise.all([
    getBaseContent(detailed),
    getPublishedPosts(),
  ]);

  const cleanedBase = detailed
    ? baseContent.replace(
        /## 6\. Blog summaries[\s\S]*?(?=## 7\. Privacy and terms|$)/i,
        ""
      )
    : baseContent;

  return [
    cleanedBase.trim(),
    "",
    "---",
    "",
    formatBlogSection(posts, detailed),
    "",
  ].join("\n");
}
