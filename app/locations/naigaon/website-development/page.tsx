
import type { Metadata } from "next";
import NaigaonWebDevClient from "@/components/Locations/Naigaon/WebsiteDevelopment/NaigaonWebDevClient";

export const metadata: Metadata = {
  title: "Website Development in Naigaon | Sharp Rays",
  description:
    "Website design and development for Naigaon businesses. Sites for Juchandra units and new housing-project launches in Naigaon. Get a free quote.",
  alternates: {
    canonical:
      "https://www.sharprays.com/locations/naigaon/website-development",
  },
};

export default function NaigaonWebsiteDevelopmentPage() {
  return <NaigaonWebDevClient />;
}
