import ChessRatings from "@/components/chess-ratings";
import Footer from "@/components/footer";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGES } from "@/lib/constants";
import { getPostBySlug } from "@/sanity/queries";
import { ArrowLeft, Calendar } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: "https://www.victoribironke.com/blog/" + slug,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
      creator: "@victoribironke_",
    },
  };
};

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

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
          {post.title}
        </h1>

        {post.publishedAt && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={14} />
            <time>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        )}

        {post.description && (
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            {post.description}
          </p>
        )}
      </section>

      {slug === "my-chess-journey" && <ChessRatings />}

      {/* Article content */}
      <article className="animate-slide-up" style={{ animationDelay: "150ms" }}>
        <PortableTextRenderer body={post.body} />
      </article>

      <Footer />
    </>
  );
};

export default Page;
