/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.akseleran.co.id",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

module.exports = nextConfig;
