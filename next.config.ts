import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  /**
   * Your current local-network development access.
   */
  allowedDevOrigins: [
    "192.168.1.4",
  ],

  /**
   * Don't expose production browser source maps.
   */
  productionBrowserSourceMaps: false,

  /**
   * Removes:
   * X-Powered-By: Next.js
   *
   * from response headers.
   */
  poweredByHeader: false,

  /**
   * Enable gzip / Brotli compression
   * when supported by the hosting environment.
   */
  compress: true,

  /**
   * Useful development checks.
   */
  reactStrictMode: true,

  /**
   * Security headers for the entire website.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;