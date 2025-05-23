import ChessRatings from "@/components/chess-ratings";
import Footer from "@/components/footer";
import MarkdownRenderer from "@/components/markdown-renderer";
import { BLOG_POSTS } from "@/constants/constants";
import { getPostContent } from "@/lib/utils";
import { Metadata } from "next";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "article",
      url: "https://www.victoribironke.com/blog/" + slug,
      images: [
        {
          url: post.image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: [
        {
          url: post.image,
        },
      ],
      creator: "@victoribironke_",
    },
  };
};

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const data = await getPostContent(slug);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const markdown = data.split("---")[2].replaceAll(' align="center"', "");

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold">{post?.title}</h1>

      {slug === "my-chess-journey" && <ChessRatings />}

      <MarkdownRenderer markdown={markdown} />

      <Footer />
    </>
  );
};

export default Page;
