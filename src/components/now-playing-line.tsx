"use client";

import { useNowPlaying } from "@/hooks/use-now-playing";

/** One-line "currently listening" status for the home page. */
const NowPlayingLine = () => {
  const track = useNowPlaying();

  if (!track) return <span className="text-muted">Tuning in…</span>;

  if (!track.isPlaying)
    return <span className="text-muted">Not listening to anything</span>;

  return (
    <span className="flex min-w-0 items-center gap-2">
      <span aria-hidden className="flex h-[0.7em] shrink-0 items-end gap-[2px]">
        {[0, 0.2, 0.4].map((delay) => (
          <span
            key={delay}
            className="h-full w-[2px] origin-bottom animate-equalize bg-current"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </span>
      <span className="truncate">
        <span className="text-muted">Listening to </span>
        <a
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-draw"
        >
          {track.title}
        </a>
        <span className="text-muted">, {track.artist}</span>
      </span>
    </span>
  );
};

export default NowPlayingLine;
