import type { MetadataRoute } from "next";
import { PAGES, SITE } from "@/lib/constants";
import { getPosts } from "@/sanity/queries";

export const revalidate = 43200;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await getPosts();

  return [
    { url: SITE.url, changeFrequency: "daily", priority: 1 },
    ...[PAGES.projects, PAGES.blog, PAGES.interests].map((page) => ({
      url: `${SITE.url}${page}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${SITE.url}${PAGES.post(post.slug)}`,
      lastModified: post.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
};

export default sitemap;
