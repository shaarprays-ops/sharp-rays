export type BlogTag = {
  _id: string;
  title: string;
  slug: string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
  featured?: boolean;
  featuredImage?: {
    alt?: string;
    asset?: unknown;
  };
  category?: {
    _id?: string;
    title?: string;
    slug?: string;
  };
  tags?: BlogTag[];
  author?: {
    name?: string;
    role?: string;
    image?: {
      alt?: string;
      asset?: unknown;
    };
  };
};