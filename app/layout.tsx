import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

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
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T794RH8Z');
            `,
          }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T794RH8Z"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>
        <FloatingWhatsAppButton />

        {children}
      </body>
    </html>
  );
}