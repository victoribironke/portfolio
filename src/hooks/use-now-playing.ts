"use client";

import { useEffect, useState } from "react";
import type { NowPlaying } from "@/lib/types";

const POLL_INTERVAL = 60_000;

const fetchNowPlaying = async (signal: AbortSignal) => {
  try {
    const res = await fetch("/api/now-playing", { signal });
    const data: { track: NowPlaying } = await res.json();

    return data.track;
  } catch {
    return null;
  }
};

/** Polls the Spotify endpoint. `track` is `null` until the first response. */
export const useNowPlaying = () => {
  const [track, setTrack] = useState<NowPlaying | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const update = async () => {
      const next = await fetchNowPlaying(controller.signal);

      if (controller.signal.aborted) return;

      // Re-stamp with the client clock so local progress isn't skewed.
      setTrack(
        next?.isPlaying
          ? { ...next, updatedAt: Date.now() }
          : { isPlaying: false },
      );
    };

    update();
    const id = setInterval(update, POLL_INTERVAL);

    return () => {
      controller.abort();
      clearInterval(id);
    };
  }, []);

  return track;
};

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
