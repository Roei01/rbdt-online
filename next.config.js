/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
  },
  images: {
    domains: ["myrbdt.b-cdn.net"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
