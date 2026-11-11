import type { Metadata } from "next";
import NaigaonSocialMediaMarketingClient from "@/components/Locations/Naigaon/SocialMediaMarketing/NaigaonSocialMediaMarketingClient";

export const metadata: Metadata = {
  title: "Social Media Marketing in Naigaon | Sharp Rays",
  description:
    "Social media marketing and Reels for Naigaon businesses. Social for new west-side housing projects and Naigaon shops. Plans from ₹14,999/mo. Talk to us.",
  alternates: {
    canonical:
      "https://www.sharprays.com/locations/naigaon/social-media-marketing",
  },
};

export default function NaigaonSocialMediaMarketingPage() {
  return <NaigaonSocialMediaMarketingClient />;
}