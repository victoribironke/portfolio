import Link from "next/link";
import { PAGES } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import type { PostSummary } from "@/sanity/queries";

type PostListProps = {
  posts: PostSummary[];
  showDescription?: boolean;
};

const PostList = ({ posts, showDescription = false }: PostListProps) => (
  <ul className="-mx-3 stagger">
    {posts.map((post) => (
      <li key={post._id}>
        <Link
          href={PAGES.post(post.slug)}
          className="group flex flex-col gap-1 rounded-xl px-3 py-3.5 transition-colors hover:bg-surface-hover sm:flex-row sm:items-baseline sm:gap-6"
        >
          <time
            dateTime={post.publishedAt}
            className="shrink-0 font-mono text-xs text-faint tabular-nums sm:w-24"
          >
            {formatDate(post.publishedAt, {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </time>
          <div className="min-w-0">
            <h3 className="font-medium tracking-tight text-pretty decoration-accent underline-offset-4 group-hover:underline">
              {post.title}
            </h3>
            {showDescription && post.description && (
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
            )}
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
