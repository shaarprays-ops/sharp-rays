export type PricingPlan = {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
  note?: string;
  features: string[];
  cta: string;
  href: string;
};

export type PricingService = {
  id: string;
  label: string;
  title: string;
  description: string;
  offer?: string;
  plans: PricingPlan[];
  extra?: {
    title?: string;
    text?: string;
    items?: string[];
  };
  note?: string;
  detailsLabel: string;
  detailsHref: string;
};

export const pricingServices: PricingService[] = [
  {
    id: "website",
    label: "Website Development Packages",
    title: "Website Price in India: Business Website Plans",
    description:
      "A professional website without a large upfront cost. Design, development, hosting support and monthly updates come in one simple monthly plan.",
    plans: [
      {
        name: "Launch",
        price: "from ₹9,999/month",
        description:
          "For startups and growing businesses that need a professional website.",
        features: [
          "Up to 5 pages, brand-aligned design",
          "Mobile-responsive build",
          "Enquiry form, WhatsApp and call buttons",
          "Basic on-page SEO, Google Analytics and Search Console setup",
          "Hosting and SSL support, technical maintenance",
          "Up to 2 content updates per month",
        ],
        cta: "Start With Launch",
        href: "/contact?service=website&plan=launch",
      },
      {
        name: "Growth",
        price: "from ₹14,999/month",
        description:
          "For growing businesses that want to edit content and build stronger SEO.",
        popular: true,
        features: [
          "Up to 10 pages, custom UI/UX design",
          "Everything in Launch, plus:",
          "CMS so you can edit content yourself",
          "Blog setup and advanced lead forms",
          "Technical SEO foundations and conversion tracking",
          "Monthly website health review",
          "Up to 4 updates per month",
        ],
        cta: "Choose Growth",
        href: "/contact?service=website&plan=growth",
      },
      {
        name: "Scale",
        price: "from ₹24,999/month",
        description:
          "For businesses that need more features, integrations or a starter online store.",
        features: [
          "Up to 15 pages, advanced custom design with interactions",
          "Everything in Growth, plus:",
          "Up to 2 standard integrations",
          "Starter e-commerce (catalogue, cart, checkout, payment gateway)",
          "Advanced technical SEO and speed optimisation",
          "Monthly performance review",
          "Up to 6 updates per month",
        ],
        cta: "Choose Scale",
        href: "/contact?service=website&plan=scale",
      },
    ],
    note:
      "Minimum 6-month commitment for new website builds. Domain, paid plugins, photography and copywriting are quoted separately. Large stores, portals and web apps are quoted on request.",
    detailsLabel: "See website development details",
    detailsHref: "/services/website-development",
  },

  {
    id: "seo",
    label: "SEO Packages",
    title: "SEO Price in India: Monthly SEO Plans",
    description:
      "Get found by the right customers on Google and in AI search. Every plan starts with an audit and a clear priority list.",
    offer:
      "Free SEO Opportunity Review with every plan · Save 10% with quarterly billing",
    plans: [
      {
        name: "Foundation",
        price: "from ₹14,999/month",
        description:
          "For startups, local businesses and smaller websites.",
        features: [
          "Up to 5 priority page optimisations per month",
          "SEO audit and action plan",
          "Keyword and search-intent research",
          "Technical SEO checks and on-page SEO",
          "Meta titles, descriptions and internal linking",
          "Monthly SEO report",
        ],
        cta: "Start With Foundation",
        href: "/contact?service=seo&plan=foundation",
      },
      {
        name: "Growth",
        price: "from ₹24,999/month",
        description:
          "For businesses targeting more services, keywords or locations.",
        popular: true,
        features: [
          "Up to 10 priority page optimisations per month",
          "Everything in Foundation, plus:",
          "Competitor research and content gap analysis",
          "2 SEO content briefs per month",
          "Schema recommendations and AI search readiness",
          "Monthly strategy review",
        ],
        cta: "Choose Growth",
        href: "/contact?service=seo&plan=growth",
      },
      {
        name: "Scale",
        price: "from ₹39,999/month",
        description:
          "For competitive businesses and larger websites.",
        features: [
          "Up to 15 priority page optimisations per month",
          "Everything in Growth, plus:",
          "Topic cluster planning and advanced internal linking",
          "Local SEO support and schema strategy",
          "AI Overview optimisation and digital PR opportunity mapping",
          "Monthly growth strategy session and priority support",
        ],
        cta: "Choose Scale",
        href: "/contact?service=seo&plan=scale",
      },
    ],
    note:
      "SEO builds results over time. Most businesses see early progress in 3–6 months, depending on competition. New content writing and development work are scoped separately.",
    detailsLabel: "See SEO service details",
    detailsHref: "/services/search-engine-optimization",
  },

  {
    id: "social-media",
    label: "Social Media Marketing Packages",
    title: "Social Media Marketing Price in India: Monthly Plans",
    description:
      "Consistent, on-brand content, Reels included, planned to bring enquiries rather than just likes.",
    plans: [
      {
        name: "Starter",
        price: "from ₹12,999/month",
        features: [
          "1 platform",
          "Up to 12 content pieces per month, including 2 Reels",
          "Strategy, content calendar, posts, carousels and captions",
          "Publishing, scheduling and profile optimisation",
          "Monthly report",
        ],
        cta: "Start With Starter",
        href: "/contact?service=social-media&plan=starter",
      },
      {
        name: "Growth",
        price: "from ₹21,999/month",
        popular: true,
        features: [
          "Up to 2 platforms",
          "Up to 20 content pieces per month, including 4–6 Reels",
          "Everything in Starter, plus Stories and copywriting",
          "Community engagement support",
          "Monthly content optimisation and strategy review",
        ],
        cta: "Choose Growth",
        href: "/contact?service=social-media&plan=growth",
      },
      {
        name: "Scale",
        price: "from ₹34,999/month",
        features: [
          "Up to 3 platforms",
          "Up to 30 content pieces per month, including 8–10 Reels",
          "Everything in Growth, plus campaign and launch content",
          "Active community management and competitor review",
          "Monthly growth strategy and priority support",
        ],
        cta: "Choose Scale",
        href: "/contact?service=social-media&plan=scale",
      },
    ],
    note:
      "Shoots, paid ads and influencer fees are quoted separately.",
    detailsLabel: "See social media marketing details",
    detailsHref: "/services/social-media-marketing",
  },

  {
    id: "ads",
    label: "Google Ads & Meta Ads Packages",
    title: "Google Ads & Meta Ads Management Packages",
    description:
      "Paid campaigns managed for leads and sales, with proper tracking from day one.",
    plans: [
      {
        name: "Starter",
        price: "from ₹9,999/month",
        features: [
          "1 ad platform (Google or Meta)",
          "Campaign strategy, setup and management",
          "Audience and keyword research, ad copy support",
          "Conversion tracking and ongoing optimisation",
          "Monthly report and review",
        ],
        cta: "Start With Starter",
        href: "/contact?service=ads&plan=starter",
      },
      {
        name: "Growth",
        price: "from ₹16,999/month",
        popular: true,
        note: "Save ₹2,999 compared with two separate Starter plans.",
        features: [
          "Up to 2 ad platforms",
          "Everything in Starter, plus cross-platform strategy",
          "Retargeting and advanced conversion tracking",
          "Audience and creative testing",
          "Landing page recommendations",
        ],
        cta: "Choose Growth",
        href: "/contact?service=ads&plan=growth",
      },
      {
        name: "Scale",
        price: "from ₹23,999/month",
        note: "Save ₹5,998 compared with three separate Starter plans.",
        features: [
          "Up to 3 ad platforms",
          "Everything in Growth, plus advanced retargeting and segmentation",
          "Attribution tracking and funnel review",
          "Landing page conversion recommendations and ROAS analysis",
          "Priority support",
        ],
        cta: "Choose Scale",
        href: "/contact?service=ads&plan=scale",
      },
    ],
    detailsLabel: "See performance marketing details",
    detailsHref: "/services/performance-marketing",
  },

  {
    id: "ai-automation",
    label: "AI Automation Packages",
    title: "AI Automation & WhatsApp Automation Pricing",
    description:
      "Automate repetitive work — lead follow-ups, CRM updates, WhatsApp replies and reports — with a human check where it matters.",
    plans: [
      {
        name: "Starter",
        price: "from ₹14,999 one-time",
        features: [
          "1 focused workflow, up to 2 connected tools",
          "Triggers, notifications and basic CRM/sheet automation",
          "Testing, launch and documentation",
          "14 days support",
        ],
        cta: "Start With Automation",
        href: "/contact?service=ai-automation&plan=starter",
      },
      {
        name: "Growth",
        price: "from ₹29,999 one-time",
        popular: true,
        features: [
          "Up to 3 connected workflows, up to 4 integrations",
          "Lead qualification, routing and follow-up sequences",
          "AI classification and summaries, error alerts",
          "30 days support",
        ],
        cta: "Choose Growth",
        href: "/contact?service=ai-automation&plan=growth",
      },
      {
        name: "Scale",
        price: "from ₹49,999 one-time",
        features: [
          "Up to 5 connected workflows across multiple systems",
          "Advanced routing, API connections and document processing",
          "Reporting and support automation with human-in-the-loop controls",
          "60 days support",
        ],
        cta: "Build My Automation System",
        href: "/contact?service=ai-automation&plan=scale",
      },
    ],
    extra: {
      title: "Automation Care — from ₹4,999/month",
      text:
        "Ongoing monitoring, error checks, minor workflow changes and optimisation after your included support period ends.",
    },
    note:
      "Automation platforms, AI usage, APIs and WhatsApp message charges are paid separately.",
    detailsLabel: "See AI automation details",
    detailsHref: "/services/AI-Automation",
  },

  {
    id: "video-editing",
    label: "Video Editing Packages",
    title: "Video Editing Packages for Reels, Shorts & Ads",
    description:
      "Send us your footage and get polished, platform-ready videos every month.",
    plans: [
      {
        name: "Edit Starter",
        price: "from ₹9,999/month",
        features: [
          "Up to 6 videos per month",
          "Professional editing, captions, sound and colour",
          "Reels/Shorts formatting and brand text",
          "2 revisions per video",
        ],
        cta: "Start With Edit Starter",
        href: "/contact?service=video-editing&plan=starter",
      },
      {
        name: "Edit Growth",
        price: "from ₹17,999/month",
        popular: true,
        features: [
          "Up to 12 videos per month",
          "Everything in Edit Starter, plus motion graphics and transitions",
          "Hook optimisation, repurposing and basic ad edits",
          "Multiple aspect ratios and priority queue",
        ],
        cta: "Choose Edit Growth",
        href: "/contact?service=video-editing&plan=growth",
      },
      {
        name: "Edit Scale",
        price: "from ₹27,999/month",
        features: [
          "Up to 20 videos per month",
          "Everything in Edit Growth, plus advanced motion graphics",
          "Performance ad variations and creative testing",
          "Monthly creative review and priority support",
        ],
        cta: "Choose Edit Scale",
        href: "/contact?service=video-editing&plan=scale",
      },
    ],
    extra: {
      title: "AI Video Creation (no footage needed)",
      items: [
        "AI Starter — up to 3 AI videos/month — from ₹9,999/month",
        "AI Growth — up to 6 AI videos/month — from ₹17,999/month",
        "AI Scale — up to 10 AI videos/month — from ₹27,999/month",
      ],
    },
    detailsLabel: "See video & creative details",
    detailsHref: "/services/video-and-creative",
  },
];

export const pricingFaqs = [
  {
    question:
      "How much does digital marketing cost per month in India?",
    answer:
      "It depends on the services and scope. At Sharp Rays, monthly plans start from ₹9,999/month for a single service, and most growing businesses combine 2–3 services. When comparing agencies, compare what is included — not just the price.",
  },
  {
    question:
      "What is included in your digital marketing price list?",
    answer:
      "Each package lists exactly what you get: pages, posts, Reels, keywords, platforms, reports and support. Anything not listed, such as shoots or paid tools, is quoted separately.",
  },
  {
    question:
      "What is the website price in India at Sharp Rays?",
    answer:
      "Our website plans start from ₹9,999/month, with design, build, hosting support and monthly updates included. There is a 6-month minimum for new builds. Larger e-commerce stores and web apps are quoted after a short call.",
  },
  {
    question:
      "What is the SEO price in India per month?",
    answer:
      "Our SEO plans start from ₹14,999/month, with 10% off on quarterly billing. The price depends on your website size, competition and how many services or locations you target.",
  },
  {
    question:
      "What is the social media marketing price in India?",
    answer:
      "Our social media plans start from ₹12,999/month for 1 platform and up to 12 content pieces, including Reels. Growth and Scale plans add more platforms, Reels and community management.",
  },
  {
    question:
      "Is ad spend included in the ads management price?",
    answer:
      "No. Our fee covers strategy, setup, management and reporting; your ad budget is paid directly to the platform. Prices are exclusive of applicable taxes.",
  },
  {
    question:
      "Do you guarantee rankings or leads?",
    answer:
      "No. Nobody can honestly guarantee Google rankings or a fixed number of leads. We guarantee clear scope, consistent work and honest reporting from your real data.",
  },
  {
    question:
      "Which is the best digital marketing package for a growing business?",
    answer:
      "Most growing businesses start with a website plus one channel: SEO for steady long-term enquiries, or ads for faster leads. Book a free audit and we'll recommend the smallest plan that can realistically reach your goal.",
  },
];