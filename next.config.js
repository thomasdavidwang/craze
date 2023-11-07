/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "crazeb76557f6f8834017a26f1cf7f76dc9a435113-staging.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

module.exports = nextConfig;
