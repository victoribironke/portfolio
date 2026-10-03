"use client";

import Image from "next/image";
import { useNowPlaying, useTrackProgress } from "@/hooks/use-now-playing";
import { formatDuration } from "@/lib/utils";

const NowPlaying = () => {
  const track = useNowPlaying();
  const progress = useTrackProgress(track);
  const playing = track?.isPlaying ? track : null;

  return (
    <div className="grid gap-[clamp(1.25rem,3vw,2.5rem)] sm:grid-cols-[minmax(0,20rem)_1fr] sm:items-end">
      <div
        className="relative aspect-square overflow-hidden rounded-[3px] bg-line transition-colors duration-700"
        style={
          playing?.color
            ? { backgroundColor: `rgb(${playing.color.rgb})` }
            : undefined
        }
      >
        {playing?.albumArt && (
          <Image
            src={playing.albumArt}
            alt={playing.album}
            fill
            sizes="(min-width: 640px) 20rem, 100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex min-w-0 flex-col gap-5">
        {!track && <p className="text-muted">Tuning in…</p>}

        {track && !playing && (
          <p className="display-type text-[clamp(2.5rem,6vw,5rem)] text-muted">
            Nothing playing right now.
          </p>
        )}

        {playing && (
          <>
            <a
              href={playing.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <span className="display-type text-[clamp(2.5rem,6vw,5rem)] text-balance transition-opacity group-hover:opacity-60">
                {playing.title}
              </span>
              <span className="text-[clamp(1.05rem,1.5vw,1.45rem)] text-muted">
                {playing.artist}
                <span className="max-sm:hidden"> · {playing.album}</span>
              </span>
            </a>

            <div className="flex flex-col gap-2">
              <div className="h-px bg-line">
                <div
                  className="h-px bg-fg transition-[width] duration-1000 ease-linear"
                  style={{
                    width: `${(progress / playing.durationMs) * 100}%`,
                  }}
                />
              </div>
              <div className="flex justify-between font-mono text-xs text-muted tabular-nums">
                <span>{formatDuration(progress)}</span>
                <span>{formatDuration(playing.durationMs)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
