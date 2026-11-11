
import type { Metadata } from "next";
import NaigaonPageClient from "@/components/Locations/Naigaon/NaigaonPageClient";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Naigaon | Sharp Rays",
  description:
    "Digital marketing for Naigaon shops, Juchandra and Chandrapada units and new housing projects near Naigaon station: SEO, websites and ads. Free audit.",

  alternates: {
    canonical: "https://www.sharprays.com/locations/naigaon",
  },

  openGraph: {
    title: "Digital Marketing Agency in Naigaon | Sharp Rays",
    description:
      "Digital marketing for Naigaon shops, Juchandra and Chandrapada units and new housing projects near Naigaon station. Explore SEO, websites and social media services.",
    url: "https://www.sharprays.com/locations/naigaon",
    siteName: "Sharp Rays",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Naigaon | Sharp Rays",
    description:
      "SEO, website development and social media marketing for businesses around Naigaon.",
  },
};

export default function NaigaonPage() {
  return <NaigaonPageClient />;
}
