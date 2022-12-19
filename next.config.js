/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.fosterandpartners.com",
      "canadiangeographic.ca",
      "cdn.britannica.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
