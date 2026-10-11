import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import GlobalCallButton from "@/components/GlobalCallButton";
import GlobalSchema from "@/components/seo/GlobalSchema";

export const metadata: Metadata = {
  title: "Sharp Rays",
  description: "Digital Marketing Agency",
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
        <GlobalCallButton />
        <FloatingWhatsAppButton />
        {children}
      </body>

      <GoogleTagManager gtmId="GTM-T794RH8Z" />
    </html>
  );
}