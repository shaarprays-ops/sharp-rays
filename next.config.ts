import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4"],
  productionBrowserSourceMaps: false,

  experimental: {
    webpackMemoryOptimizations: true,
    serverSourceMaps: false,
    staticGenerationMaxConcurrency: 2,
    staticGenerationMinPagesPerWorker: 10,
  },
};

export default nextConfig;