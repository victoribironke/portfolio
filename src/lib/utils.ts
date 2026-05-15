import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SpotifyNowPlaying } from "./types";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getChessRatings = async () => {
  try {
    const req = await fetch(
      "https://api.chess.com/pub/player/boy_victor/stats",
    );
    const res = await req.json();

    return {
      data: [
        { title: "Rapid", rating: res.chess_rapid?.last?.rating },
        { title: "Blitz", rating: res.chess_blitz?.last?.rating },
        { title: "Bullet", rating: res.chess_bullet?.last?.rating },
        { title: "Daily", rating: res.chess_daily?.last?.rating },
      ],
      error: null,
    };
  } catch (e) {
    return {
      data: [
        { title: "Rapid", rating: 0 },
        { title: "Blitz", rating: 0 },
        { title: "Bullet", rating: 0 },
        { title: "Daily", rating: 0 },
      ],
      error: e,
    };
  }
};

export const getNowPlaying = async () => {
  try {
    const res = await fetch("/api/now-playing");

    const data = await res.json();

    return data.track as SpotifyNowPlaying;
  } catch {
    return { isPlaying: false };
  }
};

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h, s;

  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
      default:
        h = 1;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

export const getComplementaryColor = (r: number, g: number, b: number) => {
  const [h, s, l] = rgbToHsl(r, g, b);
  // Bump saturation and lightness so it's vivid enough to use as an accent

  return s < 20 ? "#1db954" : `hsl(${h}, ${s}%, ${Math.min(l + 25, 95)}%)`;
};

// export const getAccentColors = (r: number, g: number, b: number) => {
//   const [h, s, l] = rgbToHsl(r, g, b);

//   // Helper to ensure the hue loops correctly between 0 and 360
//   const adjustHue = (hue: number, amount: number) => (hue + amount + 360) % 360;

//   // Fallback for grays/blacks/whites to avoid dull accent colors
//   const safeSaturation = Math.max(s, 40);

//   return {
//     // 1. ANALOGOUS: Smooth blending, nature-like harmonies
//     analogousWarm: `hsl(${adjustHue(h, 30)}, ${safeSaturation}%, ${l}%)`,
//     analogousCool: `hsl(${adjustHue(h, -30)}, ${safeSaturation}%, ${l}%)`,

//     // 2. MONOCHROMATIC: Guaranteed to match, creates depth
//     lighter: `hsl(${h}, ${s}%, ${Math.min(l + 25, 95)}%)`,
//     darker: `hsl(${h}, ${s}%, ${Math.max(l - 25, 10)}%)`,

//     // 3. SPLIT-COMPLEMENTARY: A softer "pop" than pure complementary
//     splitWarm: `hsl(${adjustHue(h, 150)}, ${safeSaturation}%, ${Math.max(l, 50)}%)`,
//     splitCool: `hsl(${adjustHue(h, -150)}, ${safeSaturation}%, ${Math.max(l, 50)}%)`,
//   };
// };
