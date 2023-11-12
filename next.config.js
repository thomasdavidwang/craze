/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  metadataBase: new URL("http://www.trynerve.com"),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.yale.edu",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
