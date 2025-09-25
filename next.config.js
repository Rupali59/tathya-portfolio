/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Vercel handle all optimizations
  reactStrictMode: true,
  swcMinify: true,

  // Basic image configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
