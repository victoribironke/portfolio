import type { Metadata } from "next";
import PostList from "@/components/post-list";
import { PAGES } from "@/lib/constants";
import { getPosts, type PostSummary } from "@/sanity/queries";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes, essays and things I've learned along the way.",
  alternates: { canonical: PAGES.blog },
};

const groupByYear = (posts: PostSummary[]) =>
  Object.entries(
    Object.groupBy(posts, (post) => new Date(post.publishedAt).getFullYear()),
  ).sort(([a], [b]) => Number(b) - Number(a));

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-14">
      <header className="stagger space-y-4">
        <h1 className="font-serif text-5xl tracking-tight">Writing</h1>
        <p className="max-w-lg leading-relaxed text-muted">
          Notes, essays and things I&apos;ve learned along the way. Mostly about
          software, sometimes about everything else.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">Nothing here yet. Soon.</p>
      ) : (
        groupByYear(posts).map(([year, postsInYear = []]) => (
          <section key={year} className="animate-rise">
            <h2 className="mb-3 font-serif text-2xl text-faint">{year}</h2>
            <PostList posts={postsInYear} showDescription />
          </section>
        ))
      )}
    </div>
  );
};

export default Blog;
