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
        "Sharp Rays is a digital marketing agency in India providing Social Media Marketing, Search Engine Optimization (SEO), Performance Marketing, Website Development & Management, Content Marketing, AI Automation, and AI Video & Video Editing services.",

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

        availableLanguage: [
          "English",
          "Hindi",
        ],
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

      knowsAbout: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "SEO",
        "Performance Marketing",
        "Google Ads",
        "Meta Ads",
        "Website Development",
        "Website Management",
        "Next.js Website Development",
        "Content Marketing",
        "AI Automation",
        "AI Video Creation",
        "Video Editing",
      ],

      hasOfferCatalog: {
        "@id":
          "https://www.sharprays.com/#services",
      },

      sameAs: [
        "https://www.linkedin.com/company/sharp-rays/",
        "https://www.instagram.com/sharpraysdigital/",
        "https://www.facebook.com/profile.php?id=61594116386615",
      ],
    },

    /* =====================================================
       SERVICE CATALOG
    ===================================================== */

    {
      "@type": "OfferCatalog",
      "@id": "https://www.sharprays.com/#services",

      name:
        "Sharp Rays Digital Marketing Services",

      description:
        "Sharp Rays provides digital marketing, website development, content, advertising, AI automation, and video services for businesses in India.",

      itemListElement: [
        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/social-media-marketing#service",

            name:
              "Social Media Marketing",

            serviceType:
              "Social Media Marketing",

            url:
              "https://www.sharprays.com/services/social-media-marketing",

            provider: {
              "@id":
                "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/seo#service",

            name:
              "Search Engine Optimization (SEO)",

            serviceType:
              "Search Engine Optimization",

            url:
              "https://www.sharprays.com/services/seo",

            provider: {
              "@id":
                "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/performance-marketing#service",

            name:
              "Performance Marketing",

            serviceType:
              "Performance Marketing and Paid Advertising",

            url:
              "https://www.sharprays.com/services/performance-marketing",

            provider: {
              "@id":
                "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/website-development#service",

            name:
              "Website Development & Management",

            serviceType:
              "Website Development and Website Management",

            url:
              "https://www.sharprays.com/services/website-development",

            provider: {
              "@id":
                "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/content-marketing#service",

            name:
              "Content Marketing",

            serviceType:
              "Content Marketing",

            url:
              "https://www.sharprays.com/services/content-marketing",

            provider: {
              "@id":
                "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/ai-automation#service",

            name:
              "AI Automation",

            serviceType:
              "AI Automation",

            url:
              "https://www.sharprays.com/services/ai-automation",

            provider: {
              "@id":
                "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",

            "@id":
              "https://www.sharprays.com/services/ai-video-editing#service",

            name:
              "AI Video & Video Editing",

            serviceType:
              "AI Video Creation and Professional Video Editing",

            url:
              "https://www.sharprays.com/services/ai-video-editing",

            provider: {
              "@id":
                "https://www.sharprays.com/#organization",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },
          },
        },
      ],
    },

    /* =====================================================
       LOCAL BUSINESS
    ===================================================== */

    {
      "@type": "LocalBusiness",
      "@id":
        "https://www.sharprays.com/#localbusiness",

      name:
        "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      url:
        "https://www.sharprays.com/",

      description:
        "Sharp Rays is a digital marketing agency in India offering Social Media Marketing, Search Engine Optimization, Performance Marketing, Website Development & Management, Content Marketing, AI Automation, and AI Video & Video Editing.",

      image: {
        "@id":
          "https://www.sharprays.com/#logo",
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
        "@id":
          "https://www.sharprays.com/#organization",
      },

      hasOfferCatalog: {
        "@id":
          "https://www.sharprays.com/#services",
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
      "@id":
        "https://www.sharprays.com/#website",

      url:
        "https://www.sharprays.com/",

      name:
        "Sharp Rays",

      alternateName:
        "Sharp Rays Digital Marketing Agency",

      description:
        "Sharp Rays provides Social Media Marketing, Search Engine Optimization (SEO), Performance Marketing, Website Development & Management, Content Marketing, AI Automation, and AI Video & Video Editing services in India.",

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