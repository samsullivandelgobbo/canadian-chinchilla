import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    // any domain
    domains: ["*"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fix Monaco editor issues in browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };

      // Completely disable Monaco editor since we're using Slate
      config.resolve.alias = {
        ...config.resolve.alias,
        "@monaco-editor/react": false,
        "monaco-editor": false,
      };
    }
    return config;
  },
};

export default withPayload(nextConfig);
