import ChessRatings from "@/components/chess-ratings";
import Footer from "@/components/footer";
import MarkdownRenderer from "@/components/markdown-renderer";
import { BLOG_POSTS } from "@/constants/constants";
import { getPostContent } from "@/lib/utils";
import { Metadata } from "next";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      type: "article",
      url: "https://www.victoribironke.com/blog/" + params.slug,
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

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await getPostContent(params.slug);
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  const markdown = data.split("---")[2].replaceAll(' align="center"', "");

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold">{post?.title}</h1>

      {params.slug === "my-chess-journey" && <ChessRatings />}

      <MarkdownRenderer markdown={markdown} />

      <Footer />
    </>
  );
};

export default Page;
