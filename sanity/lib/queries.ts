import { defineQuery } from "next-sanity";

/* =========================================================
   BLOG LISTING
========================================================= */

export const BLOG_POSTS_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ]
  | order(
    coalesce(publishedAt, _createdAt) desc
  ) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
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
    slug.current == $slug &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
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
    slug.current != $slug &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),

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
   BLOG CATEGORIES + LIVE POST COUNT
========================================================= */

export const BLOG_CATEGORIES_QUERY = defineQuery(`
  *[
    _type == "category" &&
    defined(slug.current)
  ]
  | order(title asc) {
    _id,
    title,
    "slug": slug.current,

    "postCount": count(
      *[
        _type == "blogPost" &&
        defined(slug.current) &&
        category._ref == ^._id &&
        dateTime(
          coalesce(publishedAt, _createdAt)
        ) <= dateTime($now)
      ]
    )
  }
`);

/* =========================================================
   CATEGORY
========================================================= */

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

/* =========================================================
   POSTS BY CATEGORY
========================================================= */

export const POSTS_BY_CATEGORY_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    category->slug.current == $slug &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ]
  | order(
    coalesce(publishedAt, _createdAt) desc
  ) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
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
   TAG
========================================================= */

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

/* =========================================================
   POSTS BY TAG
========================================================= */

export const POSTS_BY_TAG_QUERY = defineQuery(`
  *[
    _type == "blogPost" &&
    defined(slug.current) &&
    $slug in tags[]->slug.current &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ]
  | order(
    coalesce(publishedAt, _createdAt) desc
  ) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
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
    (!defined(noIndex) || noIndex != true) &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ]
  | order(
    coalesce(publishedAt, _createdAt) desc
  ) {
    "slug": slug.current,

    "lastModified": coalesce(
      updatedAt,
      _updatedAt,
      publishedAt,
      _createdAt
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
    (!defined(noIndex) || noIndex != true) &&
    dateTime(
      coalesce(publishedAt, _createdAt)
    ) <= dateTime($now)
  ]
  | order(
    coalesce(publishedAt, _createdAt) desc
  )[0...3] {
    _id,
    title,
    "slug": slug.current,
    "publishedAt": coalesce(publishedAt, _createdAt),

    category-> {
      _id,
      title,
      "slug": slug.current
    }
  }
`);