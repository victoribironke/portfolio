import ChessRatings from "@/components/chess-ratings";
import Footer from "@/components/footer";
import { MAILTO, PAGES } from "@/lib/constants";
import { getProjects, getPosts } from "@/sanity/queries";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

const Home = async () => {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="animate-fade-in space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight gradient-text">
          Victor Ibironke
        </h1>

        <p className="text-muted-foreground max-w-lg leading-relaxed">
          Software engineer building high-quality web projects — with a strong
          emphasis on simplicity, efficiency, and usability.
        </p>

        <div className="flex items-center gap-3 flex-wrap pt-1">
          <Link href={MAILTO} className="link-pill">
            <Mail size={14} />
            hello@victoribironke.com
          </Link>

          {/* <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-pill"
          >
            <Download size={14} />
            Resume
          </Link> */}
        </div>
      </section>

      {/* ─── Chess ─── */}
      <section
        className="animate-slide-up space-y-3"
        style={{ animationDelay: "100ms" }}
      >
        <p className="section-label">Chess Ratings</p>
        <ChessRatings />
      </section>

      {/* ─── Projects ─── */}
      {projects.length > 0 && (
        <section
          className="animate-slide-up space-y-3"
          style={{ animationDelay: "200ms" }}
        >
          <p className="section-label">Projects</p>

          <div className="stagger space-y-1">
            {projects.map((p) => (
              <Link
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                key={p._id}
                className="item-card flex items-start gap-3 group animate-slide-up"
              >
                <div className="flex-1 min-w-0">
                  <h6 className="font-medium flex items-center gap-1.5 text-lg">
                    {p.name}
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 -translate-y-0.5"
                    />
                  </h6>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ─── Writing ─── */}
      {posts.length > 0 && (
        <section
          className="animate-slide-up space-y-3"
          style={{ animationDelay: "300ms" }}
        >
          <p className="section-label">Writing</p>

          <div className="stagger space-y-1">
            {posts.map((b) => (
              <Link
                href={PAGES.post(b.slug)}
                key={b._id}
                className="item-card flex items-center justify-between gap-4 group animate-slide-up"
              >
                <span className="font-medium flex items-center gap-1.5 min-w-0">
                  <span className="truncate">{b.title}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 shrink-0 -translate-y-0.5"
                  />
                </span>
                <span className="text-xs text-muted-foreground shrink-0 hidden sm:block">
                  {new Date(b.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default Home;
