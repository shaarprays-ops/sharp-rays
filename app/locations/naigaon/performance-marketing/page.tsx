import type { Metadata } from "next";
import NaigaonPerformanceMarketingClient from "@/components/Locations/Naigaon/PerformanceMarketing/NaigaonPerformanceMarketingClient";

export const metadata: Metadata = {
  title: "Performance Marketing Agency in Naigaon | Sharp Rays",
  description:
    "Performance marketing in Naigaon with Google Ads, Meta Ads, campaign strategy and conversion tracking. Plan paid campaigns with Sharp Rays.",
  alternates: {
    canonical:
      "https://www.sharprays.com/locations/naigaon/performance-marketing",
  },
};

export default function NaigaonPerformanceMarketingPage() {
  return <NaigaonPerformanceMarketingClient />;
}