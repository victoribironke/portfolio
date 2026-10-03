import { getNowPlaying } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    const track = await getNowPlaying();

    return Response.json({ track });
  } catch (error) {
    console.error("[spotify]", error);

    return Response.json({ track: { isPlaying: false } }, { status: 500 });
  }
};
