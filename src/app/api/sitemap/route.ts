import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { NextResponse } from "next/server";
import { BLOG_POSTS } from "@/constants/constants";

export const GET = async (request: Request) => {
  const staticRoutes = [{ url: "/", changefreq: "daily", priority: 0.8 }];

  const links = [
    ...staticRoutes,
    ...BLOG_POSTS.map((post) => {
      return {
        url: `/blog/${post.slug}`,
        changefreq: "weekly",
        priority: 0.6,
      };
    }),
  ];

  const stream = new SitemapStream({
    hostname: `https://${request.headers.get("host") || "victoribironke.com"}`,
    xmlns: {
      news: false,
      xhtml: false,
      image: false,
      video: false,
    },
  });

  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
