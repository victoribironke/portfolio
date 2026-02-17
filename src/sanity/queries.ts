import { client } from "./client";

export type Project = {
  _id: string;
  name: string;
  description: string;
  link: string;
  order: number;
};

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string | null;
  publishedAt: string;
};

export type Post = PostSummary & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
};

export const getProjects = async (): Promise<Project[]> => {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      name,
      description,
      link,
      order
    }`
  );
};

export const getPosts = async (): Promise<PostSummary[]> => {
  return client.fetch(
    `*[_type == "post" && visible == true] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "coverImage": coverImage.asset->url,
      publishedAt
    }`
  );
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      "coverImage": coverImage.asset->url,
      publishedAt,
      body
    }`,
    { slug }
  );
};
