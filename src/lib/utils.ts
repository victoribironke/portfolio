import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants/constants";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getPostContent = async (slug: string) => {
  const owner = "victoribironke";
  const repo = "hashnode-blog-backup";
  const uid = BLOG_POSTS.find((p) => p.slug === slug)?.uid;

  if (!uid) {
    notFound();
  }

  const path = `${uid}.md`;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  const token = process.env.GITHUB_TOKEN;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const res = await req.json();
  return Buffer.from(res.content, "base64").toString("utf-8");
};
