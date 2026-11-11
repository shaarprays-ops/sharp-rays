import type { Metadata } from "next";
import NaigaonAIAutomationClient from "@/components/Locations/Naigaon/AIAutomation/NaigaonAIAutomationClient";

export const metadata: Metadata = {
  title: "AI Automation Services in Naigaon | Sharp Rays",
  description:
    "AI automation services in Naigaon for lead capture, CRM updates, WhatsApp workflows and repetitive business tasks. Explore practical automation with Sharp Rays.",
  alternates: {
    canonical: "https://www.sharprays.com/locations/naigaon/ai-automation",
  },
};

export default function NaigaonAIAutomationPage() {
  return <NaigaonAIAutomationClient />;
}