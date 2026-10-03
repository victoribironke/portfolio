import Link from "next/link";
import CommaList from "@/components/comma-list";
import NowPlayingLine from "@/components/now-playing-line";
import Wordmark from "@/components/wordmark";
import { CHESS_PROFILE_URL, getChessRatings } from "@/lib/chess";
import { NAV, PAGES, SOCIALS } from "@/lib/constants";

export const revalidate = 43200;

const Home = async () => {
  const ratings = await getChessRatings();
  const rated = ratings.filter((r) => r.rating !== null).slice(0, 2);

  return (
    <main className="flex min-h-svh flex-col justify-between gap-16 px-edge pt-edge pb-[clamp(1.5rem,2.6vw,2.75rem)]">
      <header className="flex animate-rise flex-col gap-[clamp(1.75rem,5vh,3rem)]">
        <div className="flex flex-col gap-4 text-[clamp(0.95rem,1.1vw,1.22rem)] leading-[1.34] sm:flex-row sm:items-start sm:justify-between sm:gap-16">
          <nav aria-label="Primary" className="flex flex-col">
            <CommaList>
              {NAV.slice(0, 2).map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={href === PAGES.home ? "page" : undefined}
                  className="link-muted aria-[current=page]:text-fg"
                >
                  {label}
                </Link>
              ))}
            </CommaList>
            <CommaList>
              {NAV.slice(2).map(({ label, href }) => (
                <Link key={href} href={href} className="link-muted">
                  {label}
                </Link>
              ))}
            </CommaList>
          </nav>

          <div className="flex min-w-0 flex-col sm:items-end sm:text-right">
            <NowPlayingLine />
            {rated.length > 0 && (
              <a
                href={CHESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
              >
                {rated.map((r) => `${r.label} ${r.rating}`).join(", ")} on
                chess.com
              </a>
            )}
            <CommaList>
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-muted"
                >
                  {label}
                </a>
              ))}
            </CommaList>
          </div>
        </div>

        <p className="max-w-[60rem] text-[clamp(1.2rem,1.7vw,1.75rem)] leading-[1.34] tracking-[-0.008em] text-pretty">
          Victor Ibironke is a software engineer who builds things for the web,
          with a strong emphasis on simplicity, efficiency and usability. This
          is where he keeps his{" "}
          <Link href={PAGES.projects} className="link-draw">
            projects
          </Link>
          , his{" "}
          <Link href={PAGES.blog} className="link-draw">
            writing
          </Link>
          , and a running log of the{" "}
          <Link href={PAGES.interests} className="link-draw">
            things he&apos;s into
          </Link>
          , mostly music and chess.
        </p>
      </header>

      <div className="animate-fade [animation-delay:200ms]">
        <Wordmark />
      </div>
    </main>
  );
};

export default Home;
