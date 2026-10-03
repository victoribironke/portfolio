import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ChessRatings from "@/components/chess-ratings";
import IndexList from "@/components/index-list";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGES, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { getPostBySlug, getPosts } from "@/sanity/queries";

export const revalidate = 43200;

/** Posts that get a live chess ratings block above the body. */
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
    <div className="flex flex-col gap-[clamp(4rem,10vw,8rem)]">
      <article className="grid gap-x-[clamp(1rem,3vw,2.5rem)] gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)]">
        <aside className="flex flex-col gap-1 text-sm lg:sticky lg:top-24 lg:self-start">
          <Link href={PAGES.blog} className="mb-3 w-fit link-muted">
            ← Writing
          </Link>
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-muted">
            {Math.max(1, post.readingTime)} min read
          </span>
        </aside>

        <div className="flex min-w-0 flex-col">
          <header className="mb-[clamp(2rem,5vw,3.5rem)] flex flex-col gap-6">
            <h1 className="display-type text-[clamp(2.75rem,7vw,6.5rem)] text-balance">
              {post.title}
            </h1>
            {post.description && (
              <p className="max-w-[40rem] text-[clamp(1.1rem,1.5vw,1.45rem)] leading-snug text-pretty text-muted">
                {post.description}
              </p>
            )}
          </header>

          {CHESS_POSTS.has(slug) && (
            <ChessRatings size="sm" className="mb-12 border-y py-6" />
          )}

          <div className="max-w-[40rem]">
            <PortableTextRenderer body={post.body} />
          </div>
        </div>
      </article>

      {morePosts.length > 0 && (
        <section className="flex flex-col gap-6">
          <h2 className="eyebrow">Keep reading</h2>
          <IndexList
            items={morePosts.map((p) => ({
              key: p._id,
              href: PAGES.post(p.slug),
              label: String(new Date(p.publishedAt).getFullYear()),
              title: p.title,
              description: p.description,
            }))}
          />
        </section>
      )}
    </div>
  );
};

export default Post;
