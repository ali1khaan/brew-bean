import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Add these to help with the build
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  // Handle images
  images: {
    unoptimized: true,
  },

  // Ensure proper handling of client-side components
  experimental: {
    esmExternals: false,
  },
}

export default nextConfig
