import "server-only";
import { CHESS_USERNAME } from "./constants";
import type { ChessRating } from "./types";

type ChessStats = Partial<
  Record<
    "chess_rapid" | "chess_blitz" | "chess_bullet" | "chess_daily",
    { last?: { rating?: number } }
  > & { tactics: { highest?: { rating?: number } } }
>;

export const CHESS_PROFILE_URL = `https://www.chess.com/member/${CHESS_USERNAME}`;

export const getChessRatings = async (): Promise<ChessRating[]> => {
  let stats: ChessStats = {};

  try {
    const res = await fetch(
      `https://api.chess.com/pub/player/${CHESS_USERNAME}/stats`,
    );

    if (!res.ok) throw new Error(`chess.com responded with ${res.status}`);

    stats = await res.json();
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
