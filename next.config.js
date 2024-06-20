/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      }
    ],
  },
  experimental: {
    serverActions: true,
  },
  distDir: "out",
};

module.exports = nextConfig;
