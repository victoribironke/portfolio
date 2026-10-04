import Link from "next/link";
import CommaList from "@/components/comma-list";
import LastGame from "@/components/last-game";
import LiveWordmark from "@/components/live-wordmark";
import MoveList from "@/components/move-list";
import NowPlayingLine from "@/components/now-playing-line";
import { getChessRatings, getRecentGames } from "@/lib/chess";
import { PAGES, SOCIALS } from "@/lib/constants";

export const revalidate = 43200;

const Home = async () => {
  const [[lastGame], ratings] = await Promise.all([
    getRecentGames(1),
    getChessRatings(),
  ]);
  const rated = ratings.filter((r) => r.rating !== null).slice(0, 2);

  return (
    <main className="flex min-h-svh flex-col justify-between gap-14 px-edge pt-edge pb-[clamp(1.5rem,2.6vw,2.75rem)]">
      <div className="flex animate-rise flex-col gap-[clamp(2rem,6vh,4rem)]">
        <header className="flex flex-col gap-5 text-[clamp(0.95rem,1.1vw,1.22rem)] leading-[1.4] sm:flex-row sm:items-start sm:justify-between sm:gap-16">
          <MoveList />

          <div className="flex min-w-0 flex-col sm:items-end sm:text-right">
            <NowPlayingLine />
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
        </header>

        <div className="grid items-end gap-x-[clamp(2rem,6vw,6rem)] gap-y-10 md:grid-cols-[minmax(0,1fr)_auto]">
          <p className="max-w-[52rem] text-[clamp(1.35rem,2.1vw,2.1rem)] leading-[1.28] tracking-[-0.012em] text-pretty">
            Victor Ibironke is a software engineer who builds things for the
            web, with a strong emphasis on simplicity, efficiency and usability.
            This is where he keeps his{" "}
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
            .
          </p>

          {lastGame && (
            <div className="flex w-[clamp(10rem,13vw,12rem)] flex-col gap-2">
              <span className="eyebrow">Last game</span>
              <LastGame game={lastGame} size="sm" />
              {rated.length > 0 && (
                <span className="text-sm text-muted">
                  {rated.map((r) => `${r.label} ${r.rating}`).join(" · ")}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="animate-fade [animation-delay:200ms]">
        <LiveWordmark />
      </div>
    </main>
  );
};

export default Home;
