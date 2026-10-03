import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/constants";

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: "*", allow: "/", disallow: [PAGES.studio, "/api/"] },
  sitemap: `${SITE.url}/sitemap.xml`,
});

export default robots;
