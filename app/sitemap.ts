import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

import { sanityClient } from "@/sanity/lib/client";
import {
  SITEMAP_BLOG_POSTS_QUERY,
  SITEMAP_CATEGORIES_QUERY,
  SITEMAP_TAGS_QUERY,
} from "@/sanity/lib/queries";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.sharprays.com";

/* =========================================================
   TYPES
========================================================= */

type SitemapSanityItem = {
  slug: string;
  lastModified?: string;
};

/* =========================================================
   EXCLUDED ROUTES
========================================================= */

/**
 * Routes/folders that should NEVER appear in sitemap.
 */
const EXCLUDED_SEGMENTS = [
  "api",
  "admin",
  "dashboard",
  "login",
  "signup",
  "sign-in",
  "sign-up",
  "private",
  "_components",
  "components",
];

/**
 * Next.js special files/folders that are not public routes.
 */
const SPECIAL_SEGMENTS = [
  "sitemap",
  "robots",
  "manifest",
];

/* =========================================================
   ROUTE FILTER
========================================================= */

function shouldExcludeRoute(route: string) {
  const segments = route
    .split("/")
    .filter(Boolean);

  return segments.some((segment) => {
    /**
     * Route groups:
     *
     * (marketing)
     *
     * are allowed because they disappear
     * from the public URL.
     */
    if (
      segment.startsWith("(") &&
      segment.endsWith(")")
    ) {
      return false;
    }

    /**
     * Parallel routes:
     *
     * @modal
     */
    if (segment.startsWith("@")) {
      return true;
    }

    /**
     * Private folders:
     *
     * _components
     */
    if (segment.startsWith("_")) {
      return true;
    }

    /**
     * Dynamic routes:
     *
     * [slug]
     * [...slug]
     * [[...slug]]
     *
     * Dynamic blog URLs are added
     * separately from Sanity.
     */
    if (
      segment.includes("[") ||
      segment.includes("]")
    ) {
      return true;
    }

    return (
      EXCLUDED_SEGMENTS.includes(segment) ||
      SPECIAL_SEGMENTS.includes(segment)
    );
  });
}

/* =========================================================
   CLEAN ROUTE GROUPS
========================================================= */

function cleanRouteGroups(route: string) {
  const segments = route
    .split("/")
    .filter(Boolean)
    .filter(
      (segment) =>
        !(
          segment.startsWith("(") &&
          segment.endsWith(")")
        )
    );

  return "/" + segments.join("/");
}

/* =========================================================
   SCAN APP DIRECTORY
========================================================= */

function getAppRoutes(
  directory: string,
  baseDirectory: string
): string[] {
  const routes: string[] = [];

  if (!fs.existsSync(directory)) {
    return routes;
  }

  const entries = fs.readdirSync(
    directory,
    {
      withFileTypes: true,
    }
  );

  const hasPage = entries.some(
    (entry) =>
      entry.isFile() &&
      [
        "page.tsx",
        "page.ts",
        "page.jsx",
        "page.js",
      ].includes(entry.name)
  );

  if (hasPage) {
    let relativePath =
      path.relative(
        baseDirectory,
        directory
      );

    relativePath =
      relativePath
        .split(path.sep)
        .join("/");

    let route =
      relativePath === ""
        ? "/"
        : `/${relativePath}`;

    route =
      cleanRouteGroups(route);

    if (
      !shouldExcludeRoute(route)
    ) {
      routes.push(route);
    }
  }

  for (const entry of entries) {
    if (
      !entry.isDirectory()
    ) {
      continue;
    }

    const folderName =
      entry.name;

    if (
      folderName ===
        "node_modules" ||
      folderName.startsWith(
        "_"
      ) ||
      folderName.startsWith(
        "@"
      )
    ) {
      continue;
    }

    const childDirectory =
      path.join(
        directory,
        folderName
      );

    routes.push(
      ...getAppRoutes(
        childDirectory,
        baseDirectory
      )
    );
  }

  return routes;
}

/* =========================================================
   PRIORITY
========================================================= */

function getPriority(
  route: string
) {
  if (route === "/") {
    return 1;
  }

  if (
    route === "/services"
  ) {
    return 0.95;
  }

  if (
    route.startsWith(
      "/services/"
    )
  ) {
    return 0.9;
  }

  if (route === "/work") {
    return 0.9;
  }

  if (
    route.startsWith(
      "/work/"
    )
  ) {
    return 0.8;
  }

  if (route === "/blog") {
    return 0.9;
  }

  if (
    route.startsWith(
      "/blog/category/"
    )
  ) {
    return 0.75;
  }

  if (
    route.startsWith(
      "/blog/tag/"
    )
  ) {
    return 0.7;
  }

  if (
    route.startsWith(
      "/blog/"
    )
  ) {
    return 0.8;
  }

  if (route === "/about") {
    return 0.8;
  }

  if (
    route === "/contact"
  ) {
    return 0.8;
  }

  return 0.7;
}

/* =========================================================
   CHANGE FREQUENCY
========================================================= */

function getChangeFrequency(
  route: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/") {
    return "weekly";
  }

  if (route === "/blog") {
    return "weekly";
  }

  if (
    route.startsWith(
      "/blog/category/"
    )
  ) {
    return "weekly";
  }

  if (
    route.startsWith(
      "/blog/tag/"
    )
  ) {
    return "weekly";
  }

  if (
    route.startsWith(
      "/blog/"
    )
  ) {
    return "monthly";
  }

  if (route === "/work") {
    return "weekly";
  }

  if (
    route.startsWith(
      "/work/"
    )
  ) {
    return "monthly";
  }

  if (
    route.startsWith(
      "/services"
    )
  ) {
    return "monthly";
  }

  return "monthly";
}

/* =========================================================
   SITEMAP
========================================================= */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /**
   * Supports:
   *
   * /app
   *
   * OR
   *
   * /src/app
   */

  const rootAppDirectory =
    path.join(
      process.cwd(),
      "app"
    );

  const srcAppDirectory =
    path.join(
      process.cwd(),
      "src",
      "app"
    );

  const appDirectory =
    fs.existsSync(
      rootAppDirectory
    )
      ? rootAppDirectory
      : srcAppDirectory;

  /* =======================================================
     STATIC ROUTES
  ======================================================= */

  let routes: string[] = [];

  if (
    fs.existsSync(
      appDirectory
    )
  ) {
    routes =
      getAppRoutes(
        appDirectory,
        appDirectory
      );
  } else {
    console.warn(
      "Sitemap: app directory could not be found."
    );
  }

  routes = [
    ...new Set(routes),
  ];

  routes.sort(
    (a, b) => {
      if (a === "/") {
        return -1;
      }

      if (b === "/") {
        return 1;
      }

      return a.localeCompare(
        b
      );
    }
  );

  const currentDate =
    new Date();

  const staticEntries: MetadataRoute.Sitemap =
    routes.map(
      (route) => ({
        url:
          route === "/"
            ? SITE_URL
            : `${SITE_URL}${route}`,

        lastModified:
          currentDate,

        changeFrequency:
          getChangeFrequency(
            route
          ),

        priority:
          getPriority(
            route
          ),
      })
    );

  /* =======================================================
     SANITY DATA
  ======================================================= */

  let blogPosts: SitemapSanityItem[] =
    [];

  let categories: SitemapSanityItem[] =
    [];

  let tags: SitemapSanityItem[] =
    [];

  try {
    [
      blogPosts,
      categories,
      tags,
    ] =
      await Promise.all([
        sanityClient.fetch<
          SitemapSanityItem[]
        >(
          SITEMAP_BLOG_POSTS_QUERY
        ),

        sanityClient.fetch<
          SitemapSanityItem[]
        >(
          SITEMAP_CATEGORIES_QUERY
        ),

        sanityClient.fetch<
          SitemapSanityItem[]
        >(
          SITEMAP_TAGS_QUERY
        ),
      ]);
  } catch (error) {
    console.error(
      "Sitemap: failed to fetch Sanity blog URLs.",
      error
    );
  }

  /* =======================================================
     BLOG POSTS
  ======================================================= */

  const blogEntries: MetadataRoute.Sitemap =
    blogPosts
      .filter(
        (post) =>
          Boolean(post.slug)
      )
      .map(
        (post) => {
          const route =
            `/blog/${post.slug}`;

          return {
            url:
              `${SITE_URL}${route}`,

            lastModified:
              post.lastModified
                ? new Date(
                    post.lastModified
                  )
                : currentDate,

            changeFrequency:
              getChangeFrequency(
                route
              ),

            priority:
              getPriority(
                route
              ),
          };
        }
      );

  /* =======================================================
     CATEGORY ARCHIVES
  ======================================================= */

  const categoryEntries: MetadataRoute.Sitemap =
    categories
      .filter(
        (category) =>
          Boolean(
            category.slug
          )
      )
      .map(
        (category) => {
          const route =
            `/blog/category/${category.slug}`;

          return {
            url:
              `${SITE_URL}${route}`,

            lastModified:
              category.lastModified
                ? new Date(
                    category.lastModified
                  )
                : currentDate,

            changeFrequency:
              getChangeFrequency(
                route
              ),

            priority:
              getPriority(
                route
              ),
          };
        }
      );

  /* =======================================================
     TAG ARCHIVES
  ======================================================= */

  const tagEntries: MetadataRoute.Sitemap =
    tags
      .filter(
        (tag) =>
          Boolean(tag.slug)
      )
      .map(
        (tag) => {
          const route =
            `/blog/tag/${tag.slug}`;

          return {
            url:
              `${SITE_URL}${route}`,

            lastModified:
              tag.lastModified
                ? new Date(
                    tag.lastModified
                  )
                : currentDate,

            changeFrequency:
              getChangeFrequency(
                route
              ),

            priority:
              getPriority(
                route
              ),
          };
        }
      );

  /* =======================================================
     COMBINE + REMOVE DUPLICATES
  ======================================================= */

  const combinedEntries = [
    ...staticEntries,
    ...blogEntries,
    ...categoryEntries,
    ...tagEntries,
  ];

  const uniqueEntries =
    Array.from(
      new Map(
        combinedEntries.map(
          (entry) => [
            entry.url,
            entry,
          ]
        )
      ).values()
    );

  uniqueEntries.sort(
    (a, b) => {
      if (
        a.url === SITE_URL
      ) {
        return -1;
      }

      if (
        b.url === SITE_URL
      ) {
        return 1;
      }

      return a.url.localeCompare(
        b.url
      );
    }
  );

  return uniqueEntries;
}