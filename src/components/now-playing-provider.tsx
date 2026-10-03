"use client";

import { createContext, useEffect, useState } from "react";
import type { NowPlaying } from "@/lib/types";

const POLL_INTERVAL = 60_000;

/** `null` until the first response arrives. */
export const NowPlayingContext = createContext<NowPlaying | null>(null);

const fetchNowPlaying = async (signal: AbortSignal) => {
  try {
    const res = await fetch("/api/now-playing", { signal });
    const data: { track: NowPlaying } = await res.json();

    return data.track;
  } catch {
    return null;
  }
};

/** Polls Spotify once for every component on the page. */
const NowPlayingProvider = ({ children }: { children: React.ReactNode }) => {
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

  return <NowPlayingContext value={track}>{children}</NowPlayingContext>;
};

export default NowPlayingProvider;
