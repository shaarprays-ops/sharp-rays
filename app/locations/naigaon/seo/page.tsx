
import type { Metadata } from "next";
import NaigaonSEOPageClient from "@/components/Locations/Naigaon/SEO/NaigaonSEOPageClient";

export const metadata: Metadata = {
  title: "SEO Services in Naigaon | Local SEO & Maps | Sharp Rays",
  description:
    "SEO and Google Maps optimisation for Naigaon businesses. Improve local search visibility with keyword research, technical SEO and website optimisation.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/naigaon/seo",
  },
};

export default function NaigaonSEOPage() {
  return <NaigaonSEOPageClient />;
}
