"use client";

import { use, useEffect, useState } from "react";
import { NowPlayingContext } from "@/components/now-playing-provider";
import type { NowPlaying, TrackColor } from "@/lib/types";

export const useNowPlaying = () => use(NowPlayingContext);

/** Advances the track position locally between polls. */
export const useTrackProgress = (track: NowPlaying | null) => {
  const [now, setNow] = useState(() => Date.now());
  const isPlaying = track?.isPlaying ?? false;

  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [isPlaying]);

  if (!track?.isPlaying) return 0;

  return Math.min(
    Math.max(0, track.progressMs + (now - track.updatedAt)),
    track.durationMs,
  );
};

/** A light, legible tint of the album colour for use on dark backgrounds. */
export const getTrackTint = (color: TrackColor) =>
  `hsl(${color.hue} ${Math.max(color.saturation, 35)}% 72%)`;
