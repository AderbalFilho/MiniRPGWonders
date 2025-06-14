import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/MiniRPGWonders/' : '',
  basePath: isProd ? '/MiniRPGWonders' : '',// <=== Fix missing images
  output: "export",// <=== enables static exports
};

export default nextConfig;
