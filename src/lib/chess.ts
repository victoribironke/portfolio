import "server-only";
import { CHESS_USERNAME } from "./constants";
import type { ChessGame, ChessRating } from "./types";

const API = `https://api.chess.com/pub/player/${CHESS_USERNAME}`;

/** Ratings and games move faster than posts, so refresh them hourly. */
const CACHE = { next: { revalidate: 3600 } };

type ChessStats = Partial<
  Record<
    "chess_rapid" | "chess_blitz" | "chess_bullet" | "chess_daily",
    { last?: { rating?: number } }
  > & { tactics: { highest?: { rating?: number } } }
>;

type ApiPlayer = { username: string; rating: number; result: string };

type ApiGame = {
  url: string;
  fen: string;
  end_time: number;
  time_class: string;
  rules: string;
  white: ApiPlayer;
  black: ApiPlayer;
};

export const CHESS_PROFILE_URL = `https://www.chess.com/member/${CHESS_USERNAME}`;

const getJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, CACHE);

  if (!res.ok) throw new Error(`chess.com responded with ${res.status}`);

  return res.json();
};

export const getChessRatings = async (): Promise<ChessRating[]> => {
  let stats: ChessStats = {};

  try {
    stats = await getJson<ChessStats>(`${API}/stats`);
  } catch (error) {
    console.error("[chess] failed to fetch ratings", error);
  }

  return [
    { label: "Rapid", rating: stats.chess_rapid?.last?.rating ?? null },
    { label: "Blitz", rating: stats.chess_blitz?.last?.rating ?? null },
    { label: "Bullet", rating: stats.chess_bullet?.last?.rating ?? null },
    { label: "Daily", rating: stats.chess_daily?.last?.rating ?? null },
    { label: "Puzzles", rating: stats.tactics?.highest?.rating ?? null },
  ];
};

const toGame = (game: ApiGame): ChessGame => {
  const isWhite =
    game.white.username.toLowerCase() === CHESS_USERNAME.toLowerCase();
  const me = isWhite ? game.white : game.black;
  const opponent = isWhite ? game.black : game.white;

  return {
    url: game.url,
    fen: game.fen,
    endedAt: game.end_time * 1000,
    timeClass: game.time_class,
    color: isWhite ? "white" : "black",
    result:
      me.result === "win" ? "win" : opponent.result === "win" ? "loss" : "draw",
    rating: me.rating,
    opponent: { username: opponent.username, rating: opponent.rating },
  };
};

/** Most recent standard games, newest first. Looks back up to two months. */
export const getRecentGames = async (limit = 6): Promise<ChessGame[]> => {
  try {
    const { archives } = await getJson<{ archives: string[] }>(
      `${API}/games/archives`,
    );
    const games: ApiGame[] = [];

    for (const archive of archives.slice(-2).reverse()) {
      const month = await getJson<{ games: ApiGame[] }>(archive);
      games.push(...month.games.filter((g) => g.rules === "chess").reverse());

      if (games.length >= limit) break;
    }

    return games.slice(0, limit).map(toGame);
  } catch (error) {
    console.error("[chess] failed to fetch games", error);
    return [];
  }
};
