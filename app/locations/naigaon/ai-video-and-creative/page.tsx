
import type { Metadata } from "next";
import NaigaonAIVideoAndCreativeClient from "@/components/Locations/Naigaon/AIVideoAndCreative/NaigaonAIVideoAndCreativeClient";

export const metadata: Metadata = {
  title: "AI Video & Creative Services in Naigaon | Sharp Rays",
  description:
    "AI video production, promotional videos, motion graphics and creative content for Naigaon businesses. Explore video and creative solutions with Sharp Rays.",
  alternates: {
    canonical:
      "https://www.sharprays.com/locations/naigaon/ai-video-and-creative",
  },
};

export default function NaigaonAIVideoAndCreativePage() {
  return <NaigaonAIVideoAndCreativeClient />;
}
