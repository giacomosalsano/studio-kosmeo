import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: "/studio-kosmeo",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
