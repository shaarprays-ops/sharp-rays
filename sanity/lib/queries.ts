import { defineQuery } from "next-sanity";

/* =========================================================
   BLOG LISTING
========================================================= */

export const BLOG_POSTS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current)
  ] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,

    featuredImage {
      asset,
      alt
    },

    category-> {
      _id,
      title,
      "slug": slug.current
    },

    tags[]-> {
      _id,
      title,
      "slug": slug.current
    },

    author-> {
      name,
      "slug": slug.current,
      role,

      image {
        asset,
        alt
      }
    }
  }
`);

/* =========================================================
   SINGLE BLOG ARTICLE
========================================================= */

export const BLOG_POST_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    updatedAt,
    featured,
    seoTitle,
    metaDescription,
    canonicalUrl,
    noIndex,
    keyTakeaways,

    featuredImage {
      asset,
      alt
    },

    ogImage {
      asset,
      alt
    },

    category-> {
      _id,
      title,
      "slug": slug.current
    },

    tags[]-> {
      _id,
      title,
      "slug": slug.current
    },

    author-> {
      name,
      "slug": slug.current,
      role,
      bio,

      image {
        asset,
        alt
      }
    },

    body
  }
`);

/* =========================================================
   RELATED POSTS
========================================================= */

export const RELATED_POSTS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    slug.current != $slug
  ] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,

    featuredImage {
      asset,
      alt
    },

    category-> {
      _id,
      title,
      "slug": slug.current
    },

    tags[]-> {
      _id,
      title,
      "slug": slug.current
    },

    author-> {
      name,
      "slug": slug.current,
      role,

      image {
        asset,
        alt
      }
    },

    "tagMatchCount": count(
      tags[@._ref in $tagIds]
    ),

    "sameCategory":
      category._ref == $categoryId
  }
  | order(
      tagMatchCount desc,
      sameCategory desc,
      publishedAt desc
    )[0...3]
`);

/* =========================================================
   BLOG CATEGORIES + POST COUNT
========================================================= */

export const BLOG_CATEGORIES_QUERY = defineQuery(`
  *[
    _type == "category" &&
    defined(slug.current)
  ] | order(title asc) {
    _id,
    title,
    "slug": slug.current,

    "postCount": count(
      *[
        _type == "blogPost" &&
        defined(slug.current) &&
        category._ref == ^._id
      ]
    )
  }
`);
export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "category" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`);

export const POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    category->slug.current == $slug
  ]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,

    featuredImage {
      asset,
      alt
    },

    category-> {
      _id,
      title,
      "slug": slug.current
    },

    tags[]-> {
      _id,
      title,
      "slug": slug.current
    },

    author-> {
      name,
      "slug": slug.current,
      role,

      image {
        asset,
        alt
      }
    }
  }
`);
export const TAG_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "tag" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`);

export const POSTS_BY_TAG_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    $slug in tags[]->slug.current
  ]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    featured,

    featuredImage {
      asset,
      alt
    },

    category-> {
      _id,
      title,
      "slug": slug.current
    },

    tags[]-> {
      _id,
      title,
      "slug": slug.current
    },

    author-> {
      name,
      "slug": slug.current,
      role,

      image {
        asset,
        alt
      }
    }
  }
`);
/* =========================================================
   SITEMAP — BLOG POSTS
========================================================= */

export const SITEMAP_BLOG_POSTS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    (!defined(noIndex) || noIndex != true)
  ]
  | order(publishedAt desc) {
    "slug": slug.current,
    "lastModified": coalesce(
      updatedAt,
      _updatedAt,
      publishedAt
    )
  }
`);

/* =========================================================
   SITEMAP — BLOG CATEGORIES
========================================================= */

export const SITEMAP_CATEGORIES_QUERY = defineQuery(`
  *[
    _type == "category" &&
    defined(slug.current)
  ]
  | order(title asc) {
    "slug": slug.current,
    "lastModified": _updatedAt
  }
`);

/* =========================================================
   SITEMAP — BLOG TAGS
========================================================= */

export const SITEMAP_TAGS_QUERY = defineQuery(`
  *[
    _type == "tag" &&
    defined(slug.current)
  ]
  | order(title asc) {
    "slug": slug.current,
    "lastModified": _updatedAt
  }
`);
/* =========================================================
   LATEST BLOG POSTS
========================================================= */

export const LATEST_POSTS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    slug.current != $slug &&
    (!defined(noIndex) || noIndex != true)
  ]
  | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,

    category-> {
      _id,
      title,
      "slug": slug.current
    }
  }
`);