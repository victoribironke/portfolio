import { CREDENTIALS } from "@/lib/constants";
import { redis } from "@/lib/redis";
import sharp from "sharp";

const getDominantColor = async (imageUrl: string) => {
  const res = await fetch(imageUrl);
  const buffer = await res.arrayBuffer();
  const { dominant } = await sharp(Buffer.from(buffer))
    .resize(50, 50) // small = fast
    .stats();

  return `${dominant.r}, ${dominant.g}, ${dominant.b}`;
};

const getValidAccessToken = async () => {
  const [accessToken, refreshToken, expiresAt] = await Promise.all([
    redis.get("spotify:access_token"),
    redis.get("spotify:refresh_token"),
    redis.get("spotify:expires_at"),
  ]);

  const shouldRefresh = !accessToken || Date.now() > Number(expiresAt) - 60_000;

  if (!shouldRefresh) return accessToken;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken as any,
      client_id: CREDENTIALS.spotify_client_id,
      client_secret: CREDENTIALS.spotify_client_secret,
    }),
  });

  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);

  const data = await res.json();

  await Promise.all([
    redis.set("spotify:access_token", data.access_token),
    redis.set("spotify:expires_at", Date.now() + data.expires_in * 1000),
    data.refresh_token
      ? redis.set("spotify:refresh_token", data.refresh_token)
      : Promise.resolve(),
  ]);

  return data.access_token;
};

export const GET = async () => {
  // const authHeader = request.headers.get("authorization");
  // if (authHeader !== `Bearer ${CREDENTIALS.cron_secret}`) {
  //   return Response.json({ error: "Unauthorized" }, { status: 401 });
  // }

  try {
    const accessToken = await getValidAccessToken();

    const res = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    // 204 = nothing playing
    if (res.status === 204) {
      await redis.set(
        "spotify:now_playing",
        JSON.stringify({ isPlaying: false }),
      );
      return Response.json({ success: true, track: { isPlaying: false } });
    }

    if (!res.ok) throw new Error(`Spotify API error: ${res.status}`);

    const data = await res.json();

    const dominantColor = await getDominantColor(
      data.item.album.images[0]?.url,
    );

    const track = {
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((a: any) => a.name).join(", "),
      album: data.item.album.name,
      albumArt: data.item.album.images[0]?.url ?? null,
      songUrl: data.item.external_urls.spotify,
      progressMs: data.progress_ms,
      dominantColor,
      durationMs: data.item.duration_ms,
      updatedAt: Date.now(),
    };

    await redis.set("spotify:now_playing", JSON.stringify(track));

    return Response.json({ success: true, track });
  } catch (err: any) {
    console.error("[spotify cron]", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
};
