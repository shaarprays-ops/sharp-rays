import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import GlobalCallButton from "@/components/GlobalCallButton";
import GlobalSchema from "@/components/seo/GlobalSchema";
import GlobalContactPopup from "@/components/GlobalContactPopup";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.sharprays.com"),
  title: {
    default: "Sharp Rays | Digital Marketing & Creative Agency",
    template: "%s | Sharp Rays",
  },
  description:
    "Sharp Rays helps businesses grow through SEO, website development, social media marketing, performance marketing and AI-powered creative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <GlobalSchema />

  {children}
  <GlobalCallButton />
  <FloatingWhatsAppButton />
  <GlobalContactPopup />
</body>

      <GoogleTagManager gtmId="GTM-T794RH8Z" />
    </html>
  );
}