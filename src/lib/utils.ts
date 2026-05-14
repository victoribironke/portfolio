import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SpotifyNowPlaying } from "./types";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getChessRatings = async () => {
  try {
    const req = await fetch(
      "https://api.chess.com/pub/player/boy_victor/stats",
    );
    const res = await req.json();

    return {
      data: [
        { title: "Rapid", rating: res.chess_rapid?.last?.rating },
        { title: "Blitz", rating: res.chess_blitz?.last?.rating },
        { title: "Bullet", rating: res.chess_bullet?.last?.rating },
        { title: "Daily", rating: res.chess_daily?.last?.rating },
      ],
      error: null,
    };
  } catch (e) {
    return {
      data: [
        { title: "Rapid", rating: 0 },
        { title: "Blitz", rating: 0 },
        { title: "Bullet", rating: 0 },
        { title: "Daily", rating: 0 },
      ],
      error: e,
    };
  }
};

export const getNowPlaying = async () => {
  try {
    const res = await fetch("/api/now-playing");

    const data = await res.json();

    return data.track as SpotifyNowPlaying;
  } catch {
    return { isPlaying: false };
  }
};
