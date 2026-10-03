"use client";

import { Disc3 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { NowPlaying as NowPlayingData } from "@/lib/types";
import { cn, formatDuration } from "@/lib/utils";
import Card from "./card";

const POLL_INTERVAL = 60_000;

const SpotifyIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const Equalizer = () => (
  <span aria-hidden className="flex h-3 items-end gap-[2px]">
    {[0, 0.2, 0.4].map((delay) => (
      <span
        key={delay}
        className="h-full w-[3px] origin-bottom animate-equalize rounded-[1px] bg-(--track-accent)"
        style={{ animationDelay: `${delay}s` }}
      />
    ))}
  </span>
);

const fetchNowPlaying = async (signal?: AbortSignal) => {
  try {
    const res = await fetch("/api/now-playing", { signal });
    const data: { track: NowPlayingData } = await res.json();

    return data.track;
  } catch {
    return null;
  }
};

/** Advances the track position locally between polls. */
const useProgress = (track: NowPlayingData | null) => {
  const [now, setNow] = useState(() => Date.now());
  const isPlaying = track?.isPlaying ?? false;

  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [isPlaying]);

  if (!track?.isPlaying) return 0;

  return Math.min(track.progressMs + (now - track.updatedAt), track.durationMs);
};

type NowPlayingProps = {
  className?: string;
};

const NowPlaying = ({ className }: NowPlayingProps) => {
  const [track, setTrack] = useState<NowPlayingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const progress = useProgress(track);

  useEffect(() => {
    const controller = new AbortController();

    const update = async () => {
      const next = await fetchNowPlaying(controller.signal);

      if (controller.signal.aborted) return;

      // Re-stamp with the client clock so local progress isn't skewed.
      setTrack(
        next?.isPlaying
          ? { ...next, updatedAt: Date.now() }
          : (next ?? { isPlaying: false }),
      );
      setIsLoading(false);
    };

    update();
    const id = setInterval(update, POLL_INTERVAL);

    return () => {
      controller.abort();
      clearInterval(id);
    };
  }, []);

  const playing = track?.isPlaying ? track : null;
  const color = playing?.color;

  return (
    <Card
      label="Listening"
      icon={<SpotifyIcon />}
      status={playing && <Equalizer />}
      className={cn("transition-colors duration-700", className)}
      style={
        {
          "--track-accent": color
            ? `hsl(${color.hue} ${Math.max(color.saturation, 35)}% var(--track-l))`
            : "#1db954",
          backgroundImage: color
            ? `radial-gradient(120% 90% at 100% 0%, rgb(${color.rgb} / 0.22), transparent 70%)`
            : undefined,
        } as React.CSSProperties
      }
    >
      {isLoading && (
        <div className="flex items-center gap-4" aria-busy>
          <div className="size-16 shrink-0 animate-pulse rounded-lg bg-surface-hover" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-3 w-3/4 animate-pulse rounded bg-surface-hover" />
            <div className="h-2.5 w-1/2 animate-pulse rounded bg-surface-hover" />
          </div>
        </div>
      )}

      {!isLoading && !playing && (
        <div className="flex flex-1 items-center gap-4">
          <div className="grid size-16 shrink-0 place-items-center rounded-lg border border-dashed text-faint">
            <Disc3 size={22} strokeWidth={1.5} />
          </div>
          <p className="text-sm leading-relaxed text-muted">
            Nothing playing right now.
            <span className="block text-faint">Check back in a bit.</span>
          </p>
        </div>
      )}

      {playing && (
        <div className="flex flex-1 flex-col justify-between gap-5">
          <a
            href={playing.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            {playing.albumArt ? (
              <Image
                src={playing.albumArt}
                alt={playing.album}
                width={64}
                height={64}
                className="size-16 shrink-0 rounded-lg shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="grid size-16 shrink-0 place-items-center rounded-lg bg-surface-hover text-faint">
                <Disc3 size={22} strokeWidth={1.5} />
              </div>
            )}
            <div className="min-w-0">
              <p className="truncate font-medium transition-colors group-hover:text-(--track-accent)">
                {playing.title}
              </p>
              <p className="truncate text-sm text-muted">{playing.artist}</p>
            </div>
          </a>

          <div className="space-y-1.5">
            <div className="h-[3px] overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-(--track-accent) transition-[width] duration-1000 ease-linear"
                style={{ width: `${(progress / playing.durationMs) * 100}%` }}
              />
            </div>
            <div className="flex justify-between font-mono text-[0.68rem] text-faint tabular-nums">
              <span>{formatDuration(progress)}</span>
              <span>{formatDuration(playing.durationMs)}</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default NowPlaying;
