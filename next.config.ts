import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: [
    "192.168.1.4",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      
    ],
  },
};

export default nextConfig;