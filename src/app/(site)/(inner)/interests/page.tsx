import type { Metadata } from "next";
import ChessRatings from "@/components/chess-ratings";
import LastGame from "@/components/last-game";
import NowPlaying from "@/components/now-playing";
import PageIntro from "@/components/page-intro";
import { getRecentGames } from "@/lib/chess";
import { PAGES, SITE } from "@/lib/constants";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Interests",
  description: "What Victor is listening to, and how his chess is going.",
  alternates: { canonical: PAGES.interests },
  openGraph: {
    title: `Interests · ${SITE.name}`,
    url: PAGES.interests,
    siteName: SITE.name,
  },
};

const Interests = async () => {
  const games = await getRecentGames(6);

  return (
    <>
      <PageIntro title="Interests">
        Away from the editor, there&apos;s usually music playing and a chess
        game going badly. Both update live.
      </PageIntro>

      <div className="flex flex-col">
        <section className="flex flex-col gap-6 border-t pt-5 pb-[clamp(3rem,7vw,5rem)]">
          <h2 className="eyebrow">Listening</h2>
          <NowPlaying />
        </section>

        <section className="flex flex-col gap-6 border-t pt-5 pb-[clamp(3rem,7vw,5rem)]">
          <h2 className="eyebrow">Chess ratings</h2>
          <ChessRatings />
        </section>

        {games.length > 0 && (
          <section className="flex flex-col gap-6 border-t pt-5">
            <h2 className="eyebrow">Recent games</h2>
            <ul className="grid grid-cols-2 gap-x-[clamp(1rem,2.5vw,2rem)] gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {games.map((game) => (
                <li key={game.url}>
                  <LastGame game={game} size="sm" />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
};

export default Interests;
