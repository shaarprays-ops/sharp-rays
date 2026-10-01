import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sharprays.com";

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

/**
 * Check if a route should be excluded.
 */
function shouldExcludeRoute(route: string) {
  const segments = route.split("/").filter(Boolean);

  return segments.some((segment) => {
    // Route groups → (marketing)
    if (segment.startsWith("(") && segment.endsWith(")")) {
      return false;
    }

    // Parallel routes → @modal
    if (segment.startsWith("@")) {
      return true;
    }

    // Private folders → _components
    if (segment.startsWith("_")) {
      return true;
    }

    // Dynamic routes → [slug], [...slug], [[...slug]]
    if (segment.includes("[") || segment.includes("]")) {
      return true;
    }

    return (
      EXCLUDED_SEGMENTS.includes(segment) ||
      SPECIAL_SEGMENTS.includes(segment)
    );
  });
}

/**
 * Remove Next.js route groups such as:
 *
 * /services/(marketing)/seo
 *
 * becomes:
 *
 * /services/seo
 */
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

/**
 * Recursively scan app directory
 * and find every folder containing page.tsx/page.jsx/page.js/page.ts
 */
function getAppRoutes(
  directory: string,
  baseDirectory: string
): string[] {
  const routes: string[] = [];

  if (!fs.existsSync(directory)) {
    return routes;
  }

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

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
    let relativePath = path.relative(
      baseDirectory,
      directory
    );

    relativePath = relativePath
      .split(path.sep)
      .join("/");

    let route =
      relativePath === ""
        ? "/"
        : `/${relativePath}`;

    route = cleanRouteGroups(route);

    if (!shouldExcludeRoute(route)) {
      routes.push(route);
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const folderName = entry.name;

    // Ignore common non-route/internal folders
    if (
      folderName === "node_modules" ||
      folderName.startsWith("_") ||
      folderName.startsWith("@")
    ) {
      continue;
    }

    const childDirectory = path.join(
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

/**
 * Determine sitemap priority.
 */
function getPriority(route: string) {
  if (route === "/") return 1;

  if (route === "/services") return 0.95;

  if (route.startsWith("/services/")) {
    return 0.9;
  }

  if (route === "/work") return 0.9;

  if (route.startsWith("/work/")) {
    return 0.8;
  }

  if (route === "/about") return 0.8;

  if (route === "/contact") return 0.8;

  return 0.7;
}

/**
 * Determine update frequency.
 */
function getChangeFrequency(
  route: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/") return "weekly";

  if (route === "/work") return "weekly";

  if (route.startsWith("/work/")) {
    return "monthly";
  }

  if (route.startsWith("/services")) {
    return "monthly";
  }

  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * Supports:
   *
   * /app
   *
   * OR
   *
   * /src/app
   */

  const rootAppDirectory = path.join(
    process.cwd(),
    "app"
  );

  const srcAppDirectory = path.join(
    process.cwd(),
    "src",
    "app"
  );

  const appDirectory = fs.existsSync(rootAppDirectory)
    ? rootAppDirectory
    : srcAppDirectory;

  if (!fs.existsSync(appDirectory)) {
    console.warn(
      "Sitemap: app directory could not be found."
    );

    return [];
  }

  let routes = getAppRoutes(
    appDirectory,
    appDirectory
  );

  /**
   * Remove duplicates.
   */
  routes = [...new Set(routes)];

  /**
   * Sort routes.
   */
  routes.sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;

    return a.localeCompare(b);
  });

  const currentDate = new Date();

  return routes.map((route) => ({
    url:
      route === "/"
        ? SITE_URL
        : `${SITE_URL}${route}`,

    lastModified: currentDate,

    changeFrequency:
      getChangeFrequency(route),

    priority: getPriority(route),
  }));
}