import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "i.scdn.co" },
    ],
  },
  redirects: async () => [
    { source: "/api/sitemap", destination: "/sitemap.xml", permanent: true },
    { source: "/writing", destination: "/blog", permanent: false },
    {
      source: "/aurelo-survey",
      destination: "https://tally.so/r/3NMD90",
      permanent: false,
    },
  ],
};

export default nextConfig;
