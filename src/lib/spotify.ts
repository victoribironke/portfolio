import "server-only";
import sharp from "sharp";
import { CREDENTIALS } from "./constants";
import { redis } from "./redis";
import type { NowPlaying, TrackColor } from "./types";

const KEYS = {
  accessToken: "spotify:access_token",
  refreshToken: "spotify:refresh_token",
  expiresAt: "spotify:expires_at",
  nowPlaying: "spotify:now_playing",
};

type SpotifyTrack = {
  name: string;
  duration_ms: number;
  artists: { name: string }[];
  album: { name: string; images: { url: string }[] };
  external_urls: { spotify: string };
};

type SpotifyCurrentlyPlaying = {
  is_playing: boolean;
  progress_ms: number | null;
  item: SpotifyTrack | null;
};

const rgbToHueSaturation = (r: number, g: number, b: number) => {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const lightness = (max + min) / 2;
  const delta = max - min;

  if (delta === 0) return { hue: 0, saturation: 0 };

  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue: number;
  if (max === rn) hue = (gn - bn) / delta + (gn < bn ? 6 : 0);
  else if (max === gn) hue = (bn - rn) / delta + 2;
  else hue = (rn - gn) / delta + 4;

  return {
    hue: Math.round(hue * 60),
    saturation: Math.round(saturation * 100),
  };
};

const getTrackColor = async (imageUrl: string): Promise<TrackColor | null> => {
  try {
    const res = await fetch(imageUrl);
    const buffer = Buffer.from(await res.arrayBuffer());
    const { dominant } = await sharp(buffer).resize(50, 50).stats();
    const { r, g, b } = dominant;

    return { rgb: `${r} ${g} ${b}`, ...rgbToHueSaturation(r, g, b) };
  } catch (error) {
    console.error("[spotify] failed to extract album colour", error);
    return null;
  }
};

const getAccessToken = async () => {
  const [accessToken, refreshToken, expiresAt] = await Promise.all([
    redis.get<string>(KEYS.accessToken),
    redis.get<string>(KEYS.refreshToken),
    redis.get<number>(KEYS.expiresAt),
  ]);

  const isValid = accessToken && Date.now() < Number(expiresAt) - 60_000;
  if (isValid) return accessToken;

  if (!refreshToken) throw new Error("No Spotify refresh token in Redis");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: CREDENTIALS.spotify_client_id,
      client_secret: CREDENTIALS.spotify_client_secret,
    }),
  });

  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);

  const data: {
    access_token: string;
    expires_in: number;
    refresh_token?: string;
  } = await res.json();

  await Promise.all([
    redis.set(KEYS.accessToken, data.access_token),
    redis.set(KEYS.expiresAt, Date.now() + data.expires_in * 1000),
    data.refresh_token && redis.set(KEYS.refreshToken, data.refresh_token),
  ]);

  return data.access_token;
};

const cacheNowPlaying = async (track: NowPlaying) => {
  await redis.set(KEYS.nowPlaying, JSON.stringify(track));
  return track;
};

export const getNowPlaying = async (): Promise<NowPlaying> => {
  const accessToken = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    { headers: { Authorization: `Bearer ${accessToken}` }, cache: "no-store" },
  );

  // 204 means nothing is playing.
  if (res.status === 204) return cacheNowPlaying({ isPlaying: false });
  if (!res.ok) throw new Error(`Spotify API error: ${res.status}`);

  const data: SpotifyCurrentlyPlaying = await res.json();
  const { item } = data;

  // `item` is null for ads, podcasts in some regions, and private sessions.
  if (!data.is_playing || !item) return cacheNowPlaying({ isPlaying: false });

  const albumArt = item.album.images[0]?.url ?? null;

  return cacheNowPlaying({
    isPlaying: true,
    title: item.name,
    artist: item.artists.map((artist) => artist.name).join(", "),
    album: item.album.name,
    albumArt,
    songUrl: item.external_urls.spotify,
    progressMs: data.progress_ms ?? 0,
    durationMs: item.duration_ms,
    color: albumArt ? await getTrackColor(albumArt) : null,
    updatedAt: Date.now(),
  });
};
