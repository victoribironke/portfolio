import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { OG_SIZE, renderPostImage } from "@/lib/og";
import { formatDate } from "@/lib/utils";
import { getPostBySlug, getPosts } from "@/sanity/queries";

export const revalidate = 43200;

export const alt = `A post by ${SITE.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts.map(({ slug }) => ({ slug }));
};

const Image = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return renderPostImage({
    title: post.title,
    description: post.description,
    date: formatDate(post.publishedAt, { month: "long", year: "numeric" }),
    readingTime: post.readingTime,
  });
};

export default Image;
