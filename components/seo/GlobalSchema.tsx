const globalSchema = {
  "@context": "https://schema.org",

  "@graph": [
    /* =====================================================
       LOGO
    ===================================================== */

    {
      "@type": "ImageObject",
      "@id": "https://www.sharprays.com/#logo",

      url: "https://www.sharprays.com/logo/sharp-rays-logo.png",

      contentUrl:
        "https://www.sharprays.com/logo/sharp-rays-logo.png",

      caption: "Sharp Rays Logo",
    },

    /* =====================================================
       ORGANIZATION
    ===================================================== */

    {
      "@type": "Organization",
      "@id": "https://www.sharprays.com/#organization",

      name: "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      url: "https://www.sharprays.com/",

      logo: {
        "@id": "https://www.sharprays.com/#logo",
      },

      description:
        "Sharp Rays is a digital marketing agency helping businesses with SEO, social media marketing, performance marketing, website development, content marketing, AI video and AI automation.",

      slogan:
        "Digital growth, without the guesswork.",

      email:
        "info@sharprays.com",

      telephone:
        "+91-9415951060",

      address: {
        "@type": "PostalAddress",

        streetAddress:
          "Naigaon East",

        addressLocality:
          "Vasai-Virar",

        addressRegion:
          "Maharashtra",

        postalCode:
          "401208",

        addressCountry:
          "IN",
      },

      contactPoint: {
        "@type": "ContactPoint",

        telephone:
          "+91-9415951060",

        email:
          "info@sharprays.com",

        contactType:
          "customer service",

        areaServed:
          "IN",
      },

      areaServed: [
        {
          "@type": "City",
          name: "Vasai-Virar",
        },

        {
          "@type": "AdministrativeArea",
          name: "Palghar",
        },

        {
          "@type": "State",
          name: "Maharashtra",
        },

        {
          "@type": "City",
          name: "Mumbai",
        },

        {
          "@type": "Country",
          name: "India",
        },
      ],

      sameAs: [
        "https://www.linkedin.com/company/sharp-rays/",
        "https://www.instagram.com/sharpraysdigital/",
        "https://www.facebook.com/profile.php?id=61594116386615",
      ],
    },

    /* =====================================================
       LOCAL BUSINESS
    ===================================================== */

    {
      "@type": "LocalBusiness",
      "@id": "https://www.sharprays.com/#localbusiness",

      name: "Sharp Rays",

      url: "https://www.sharprays.com/",

      image: {
        "@id": "https://www.sharprays.com/#logo",
      },

      telephone:
        "+91-9415951060",

      email:
        "info@sharprays.com",

      address: {
        "@type": "PostalAddress",

        streetAddress:
          "Naigaon East",

        addressLocality:
          "Vasai-Virar",

        addressRegion:
          "Maharashtra",

        postalCode:
          "401208",

        addressCountry:
          "IN",
      },

      areaServed: [
        {
          "@type": "City",
          name: "Vasai-Virar",
        },

        {
          "@type": "AdministrativeArea",
          name: "Palghar",
        },

        {
          "@type": "State",
          name: "Maharashtra",
        },

        {
          "@type": "City",
          name: "Mumbai",
        },

        {
          "@type": "Country",
          name: "India",
        },
      ],

      parentOrganization: {
        "@id": "https://www.sharprays.com/#organization",
      },

      sameAs: [
        "https://www.linkedin.com/company/sharp-rays/",
        "https://www.instagram.com/sharpraysdigital/",
        "https://www.facebook.com/profile.php?id=61594116386615",
      ],
    },

    /* =====================================================
       WEBSITE
    ===================================================== */

    {
      "@type": "WebSite",
      "@id": "https://www.sharprays.com/#website",

      url:
        "https://www.sharprays.com/",

      name:
        "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      description:
        "Sharp Rays provides SEO, social media marketing, performance marketing, website development, content marketing, AI video and AI automation services.",

      publisher: {
        "@id":
          "https://www.sharprays.com/#organization",
      },

      inLanguage:
        "en-IN",
    },
  ],
};

export default function GlobalSchema() {
  return (
    <script
      id="sharp-rays-global-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(globalSchema).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}