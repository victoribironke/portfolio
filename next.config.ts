import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  // headers: async () => {
  //   return [
  //     {
  //       source: "/api/:path*", // Apply to all API routes
  //       headers: [
  //         { key: "Access-Control-Allow-Origin", value: "*" }, // Allow all
  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,POST" },
  //         { key: "Access-Control-Allow-Headers", value: "Authorization" },
  //         { key: "Access-Control-Allow-Headers", value: "Content-Type" },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
