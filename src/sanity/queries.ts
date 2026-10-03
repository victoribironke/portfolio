import type { PortableTextProps } from "@portabletext/react";
import { defineQuery } from "next-sanity";
import { client } from "./client";

export type Project = {
  _id: string;
  name: string;
  description: string;
  link: string;
};

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string | null;
  publishedAt: string;
  readingTime: number;
};

export type Post = PostSummary & {
  body: PortableTextProps["value"];
};

const POST_SUMMARY_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  description,
  "coverImage": coverImage.asset->url,
  publishedAt,
  "readingTime": round(length(pt::text(body)) / 5 / 200)
`;

const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) { _id, name, description, link }
`);

const POSTS_QUERY = defineQuery(`
  *[_type == "post" && visible == true] | order(publishedAt desc) {
    ${POST_SUMMARY_FIELDS}
  }
`);

const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    ${POST_SUMMARY_FIELDS},
    body
  }
`);

export const getProjects = () => client.fetch<Project[]>(PROJECTS_QUERY);

export const getPosts = () => client.fetch<PostSummary[]>(POSTS_QUERY);

export const getPostBySlug = (slug: string) =>
  client.fetch<Post | null>(POST_QUERY, { slug });
