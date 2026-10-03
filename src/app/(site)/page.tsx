import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ChessRatings from "@/components/chess-ratings";
import NowPlaying from "@/components/now-playing";
import PostList from "@/components/post-list";
import ProjectList from "@/components/project-list";
import Section from "@/components/section";
import { PAGES } from "@/lib/constants";
import { getPosts, getProjects } from "@/sanity/queries";

export const revalidate = 43200;

const RECENT_POSTS = 5;

const Home = async () => {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);

  return (
    <div className="flex flex-col gap-20">
      <section className="stagger space-y-6">
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
          Hi, I&apos;m Victor. <br className="hidden sm:block" />
          <span className="text-muted">I make things for</span>{" "}
          <em className="text-accent">the web</em>
          <span className="text-muted">.</span>
        </h1>

        <div className="max-w-xl space-y-4 leading-relaxed text-pretty text-muted">
          <p>
            I&apos;m a software engineer who cares about simplicity, efficiency
            and usability, and who mostly builds things because they&apos;re fun
            to build.
          </p>
          <p>
            This is my little corner of the internet. It&apos;s where I keep the{" "}
            <a href="#projects" className="link text-ink">
              projects
            </a>{" "}
            I&apos;m tinkering with, the{" "}
            <Link href={PAGES.blog} className="link text-ink">
              things I write
            </Link>
            , and a peek at what I&apos;m up to away from the editor.
          </p>
        </div>
      </section>

      <Section
        title="Off the clock"
        className="animate-rise [animation-delay:150ms]"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <NowPlaying />
          <ChessRatings />
        </div>
      </Section>

      {projects.length > 0 && (
        <Section id="projects" title="Projects">
          <ProjectList projects={projects} />
        </Section>
      )}

      {posts.length > 0 && (
        <Section
          title="Writing"
          action={
            posts.length > RECENT_POSTS && (
              <Link
                href={PAGES.blog}
                className="group inline-flex items-center gap-1 text-xs text-muted hover:text-ink"
              >
                All {posts.length} posts
                <ArrowRight
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            )
          }
        >
          <PostList posts={posts.slice(0, RECENT_POSTS)} />
        </Section>
      )}
    </div>
  );
};

export default Home;
