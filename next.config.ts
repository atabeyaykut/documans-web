import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Ignore ESLint errors during builds (useful for CI/CD like AWS Amplify)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
