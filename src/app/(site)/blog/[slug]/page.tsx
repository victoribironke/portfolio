import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ChessRatings from "@/components/chess-ratings";
import PortableTextRenderer from "@/components/portable-text-renderer";
import PostList from "@/components/post-list";
import Section from "@/components/section";
import { PAGES, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { getPostBySlug, getPosts } from "@/sanity/queries";

export const revalidate = 43200;

/** Posts that get a live chess ratings card under the header. */
const CHESS_POSTS = new Set(["my-chess-journey"]);

export const generateStaticParams = async () => {
  const posts = await getPosts();

  return posts.map(({ slug }) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const images = post.coverImage ? [{ url: post.coverImage }] : undefined;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: PAGES.post(slug) },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [SITE.name],
      url: PAGES.post(slug),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images,
      creator: SITE.twitter,
    },
  };
};

const Post = async ({ params }: PageProps<"/blog/[slug]">) => {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getPostBySlug(slug), getPosts()]);

  if (!post) notFound();

  const morePosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col gap-16">
      <article>
        <header className="mb-12 stagger space-y-6">
          <Link
            href={PAGES.blog}
            className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Writing
          </Link>

          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-lg leading-relaxed text-pretty text-muted">
              {post.description}
            </p>
          )}

          <p className="flex items-center gap-2 font-mono text-xs text-faint">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{Math.max(1, post.readingTime)} min read</span>
          </p>
        </header>

        {CHESS_POSTS.has(slug) && <ChessRatings className="mb-10" />}

        <div className="animate-rise [animation-delay:200ms]">
          <PortableTextRenderer body={post.body} />
        </div>
      </article>

      {morePosts.length > 0 && (
        <Section title="Keep reading" className="border-t pt-10">
          <PostList posts={morePosts} />
        </Section>
      )}
    </div>
  );
};

export default Post;
