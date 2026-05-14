"use client";

import { SpotifyNowPlaying } from "@/lib/types";
import { getNowPlaying } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const POLL_INTERVAL = 60_000;

const SpotifyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const EqualizerBars = ({ color = "#1db954" }) => (
  <span className="equalizer" aria-label="Playing">
    <span style={{ background: color }} />
    <span style={{ background: color }} />
    <span style={{ background: color }} />
    <style>{`
      .equalizer {
        display: inline-flex;
        align-items: flex-end;
        gap: 2px;
        height: 12px;
      }
      .equalizer span {
        width: 3px;
        background: #1db954;
        border-radius: 1px;
        animation: eq-bounce 1.2s ease-in-out infinite;
      }
      .equalizer span:nth-child(1) { animation-delay: 0s;    height: 60%; }
      .equalizer span:nth-child(2) { animation-delay: 0.2s;  height: 100%; }
      .equalizer span:nth-child(3) { animation-delay: 0.4s;  height: 40%; }
      @keyframes eq-bounce {
        0%, 100% { transform: scaleY(0.4); }
        50%       { transform: scaleY(1);   }
      }
    `}</style>
  </span>
);

const Spotify = () => {
  const [track, setTrack] = useState<SpotifyNowPlaying>({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  const fetchTrack = async () => {
    const data = await getNowPlaying();

    setTrack(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrack();

    const id = setInterval(fetchTrack, POLL_INTERVAL);

    return () => clearInterval(id);
  }, []);

  const isPlaying = track?.isPlaying;

  return (
    <div
      className="p-4 rounded-2xl border border-[#35353bb3] bg-[#1d1d2080]"
      style={
        isPlaying && track.dominantColor
          ? {
              background: `radial-gradient(ellipse at top right, rgba(${track.dominantColor}, 0.5) 0%, #1d1d2080 100%)`,
            }
          : undefined
      }
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-1.5 text-[#ffffff40] text-[11px] tracking-widest uppercase">
          <SpotifyIcon />
          Spotify
        </span>
        {!loading && isPlaying && (
          <EqualizerBars color={track.complementaryColor} />
        )}
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[#ffffff08] animate-pulse shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <div className="h-2.5 w-3/4 rounded bg-[#ffffff08] animate-pulse" />
            <div className="h-2 w-1/2 rounded bg-[#ffffff06] animate-pulse" />
          </div>
        </div>
      )}

      {/* Not playing */}
      {!loading && !isPlaying && (
        <p className="text-[#ffffff30] text-xs tracking-wide">
          Not listening to anything.
        </p>
      )}

      {/* Now playing */}
      {!loading && isPlaying && (
        <div className="flex flex-col gap-3">
          <Link
            href={track.songUrl || ""}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            {track.albumArt && (
              <Image
                src={track.albumArt}
                alt={track.album || ""}
                width={50}
                height={50}
                className="rounded-md shrink-0 shadow-md group-hover:opacity-80 transition-opacity"
              />
            )}
            <div className="flex flex-col min-w-0">
              <span className="text-white font-medium truncate leading-tight group-hover:text-[#1db954] transition-colors">
                {track.title}
              </span>
              <span className="text-[#ffffff50] text-sm truncate mt-0.5">
                {track.artist}
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Spotify;
