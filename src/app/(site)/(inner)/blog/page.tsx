import type { Metadata } from "next";
import IndexList from "@/components/index-list";
import PageIntro from "@/components/page-intro";
import { PAGES } from "@/lib/constants";
import { getPosts } from "@/sanity/queries";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes, essays and things Victor has learned along the way.",
  alternates: { canonical: PAGES.blog },
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <>
      <PageIntro title="Writing" count={posts.length}>
        Notes, essays and things I&apos;ve learned along the way. Mostly about
        software, sometimes about everything else.
      </PageIntro>

      {posts.length === 0 ? (
        <p className="text-muted">Nothing here yet. Soon.</p>
      ) : (
        <IndexList
          items={posts.map((post) => ({
            key: post._id,
            href: PAGES.post(post.slug),
            label: String(new Date(post.publishedAt).getFullYear()),
            title: post.title,
            description: post.description,
          }))}
        />
      )}
    </>
  );
};

export default Blog;
