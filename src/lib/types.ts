export type NowPlaying =
  | { isPlaying: false }
  | {
      isPlaying: true;
      title: string;
      artist: string;
      album: string;
      albumArt: string | null;
      songUrl: string;
      progressMs: number;
      durationMs: number;
      /** The album art's dominant colour, used to tint the card. */
      color: TrackColor | null;
      updatedAt: number;
    };

export type ChessRating = {
  label: string;
  rating: number | null;
};

export type TrackColor = {
  /** Dominant colour as `r g b`. */
  rgb: string;
  /** Hue and saturation of the dominant colour, for a theme-aware accent. */
  hue: number;
  saturation: number;
};

export type ChessGame = {
  url: string;
  /** Final position. */
  fen: string;
  endedAt: number;
  timeClass: string;
  color: "white" | "black";
  result: "win" | "loss" | "draw";
  rating: number;
  opponent: { username: string; rating: number };
};
