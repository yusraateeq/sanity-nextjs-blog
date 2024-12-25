import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'images.twinkl.co.uk'], // Allow images from Sanity's CDN
    
  },
};

export default nextConfig;
