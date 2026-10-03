"use client";

import { getTrackTint, useNowPlaying } from "@/hooks/use-now-playing";
import Wordmark from "./wordmark";

/** The wordmark, tinted by the album art and pulsing while music plays. */
const LiveWordmark = () => {
  const track = useNowPlaying();
  const color = track?.isPlaying ? track.color : null;

  return (
    <Wordmark
      className={track?.isPlaying ? "wordmark-live" : undefined}
      style={color ? { color: getTrackTint(color) } : undefined}
    />
  );
};

export default LiveWordmark;
