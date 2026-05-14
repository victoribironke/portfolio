export type SpotifyNowPlaying = {
  isPlaying: boolean;
  title?: string;
  dominantColor?: string;
  artist?: string;
  album?: string;
  albumArt?: string;
  songUrl?: string;
  progressMs?: number;
  durationMs?: number;
  updatedAt?: number;
};
