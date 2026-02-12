import ChessRatings from "@/components/chess-ratings";
import Footer from "@/components/footer";
import MarkdownRenderer from "@/components/markdown-renderer";
import { BLOG_POSTS, PAGES } from "@/constants/constants";
import { getPostContent } from "@/lib/utils";
import { ArrowLeft, Calendar } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

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
      {/* Back link */}
      <Link href={PAGES.home} className="link-pill w-fit text-sm">
        <ArrowLeft size={14} />
        Back
      </Link>

      {/* Post header */}
      <section className="animate-fade-in space-y-3">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight gradient-text leading-snug">
          {post?.title}
        </h1>

        {post?.date_published && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={14} />
            <time>
              {new Date(post.date_published).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        )}

        {post?.desc && (
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            {post.desc}
          </p>
        )}
      </section>

      {slug === "my-chess-journey" && <ChessRatings />}

      {/* Article content */}
      <article className="animate-slide-up" style={{ animationDelay: "150ms" }}>
        <MarkdownRenderer markdown={markdown} />
      </article>

      <Footer />
    </>
  );
};

export default Page;
