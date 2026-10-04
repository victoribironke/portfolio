import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "./constants";
import { WORDMARK } from "./wordmark";

export const OG_SIZE = { width: 1200, height: 630 };

const EDGE = 56;

const COLORS = {
  dark: { bg: "#070707", fg: "#f2f1ec", muted: "rgba(242, 241, 236, 0.46)" },
  light: { bg: "#f2f1ec", fg: "#0a0a0a", muted: "rgba(10, 10, 10, 0.5)" },
};

type Theme = keyof typeof COLORS;

const fontPath = (file: string) =>
  join(process.cwd(), "src/assets/fonts", file);

/** Satori can't read variable fonts, so these are static instances. */
const FONTS = Promise.all([
  readFile(fontPath("geist-regular.ttf")),
  readFile(fontPath("geist-medium.ttf")),
  readFile(fontPath("bricolage-grotesque-condensed-extrabold.ttf")),
]).then(([regular, medium, display]) => [
  { name: "Geist", data: regular, weight: 400 as const },
  { name: "Geist", data: medium, weight: 500 as const },
  { name: "Bricolage", data: display, weight: 800 as const },
]);

const SITE_HOST = new URL(SITE.url).host.replace(/^www\./, "");

const render = async (element: React.ReactElement) =>
  new ImageResponse(element, { ...OG_SIZE, fonts: await FONTS });

const Wordmark = ({ width, color }: { width: number; color: string }) => (
  <svg
    width={width}
    height={(width * WORDMARK.height) / WORDMARK.width}
    viewBox={`0 0 ${WORDMARK.width} ${WORDMARK.height}`}
    fill={color}
  >
    {WORDMARK.glyphs.map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
);

type FrameProps = {
  theme: Theme;
  children: React.ReactNode;
};

const Frame = ({ theme, children }: FrameProps) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: EDGE,
      background: COLORS[theme].bg,
      color: COLORS[theme].fg,
      fontFamily: "Geist",
      fontSize: 24,
    }}
  >
    {children}
  </div>
);

/** Small wordmark on the left, a muted label on the right. */
const Header = ({ theme, label }: { theme: Theme; label: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Wordmark width={250} color={COLORS[theme].fg} />
    <span style={{ color: COLORS[theme].muted }}>{label}</span>
  </div>
);

const NAV = ["Projects", "Writing", "Interests"];

/** The home page poster: nav, bio and the full-width wordmark. */
export const renderPosterImage = () => {
  const { fg, muted } = COLORS.dark;

  return render(
    <Frame theme="dark">
      <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 32 }}>
            {NAV.map((item, i) => (
              <span key={item} style={{ display: "flex", gap: 12 }}>
                <span style={{ color: muted }}>{i + 1}.</span>
                <span style={{ color: muted }}>{item}</span>
              </span>
            ))}
          </div>
          <span style={{ color: muted }}>{SITE_HOST}</span>
        </div>

        <p
          style={{
            margin: 0,
            maxWidth: 900,
            fontSize: 38,
            lineHeight: 1.28,
            letterSpacing: "-0.012em",
          }}
        >
          Victor Ibironke is a software engineer who builds things for the web,
          with a strong emphasis on simplicity, efficiency and usability.
        </p>
      </div>

      <Wordmark width={OG_SIZE.width - EDGE * 2} color={fg} />
    </Frame>,
  );
};

type PageImageProps = {
  title: string;
  description: string;
  path: string;
  count?: number;
};

/** A section page: its name set huge, the lede in the right half. */
export const renderPageImage = ({
  title,
  description,
  path,
  count,
}: PageImageProps) => {
  const { muted } = COLORS.light;

  return render(
    <Frame theme="light">
      <Header theme="light" label={`${SITE_HOST}${path}`} />

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <span
            style={{
              fontFamily: "Bricolage",
              fontSize: 230,
              lineHeight: 0.8,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            {title}
          </span>
          {count !== undefined && (
            <span style={{ marginLeft: 10, fontSize: 32, color: muted }}>
              ({String(count).padStart(2, "0")})
            </span>
          )}
        </div>
        <p
          style={{
            margin: 0,
            marginLeft: "50%",
            fontSize: 28,
            lineHeight: 1.34,
          }}
        >
          {description}
        </p>
      </div>
    </Frame>,
  );
};

/** Shrinks long titles so they stay within three lines. */
const getTitleSize = (title: string) => {
  if (title.length <= 18) return 150;
  if (title.length <= 32) return 120;
  if (title.length <= 52) return 96;
  return 76;
};

type PostImageProps = {
  title: string;
  description?: string;
  date: string;
  readingTime: number;
};

/** A blog post: the title in the display face, the lede and reading time below. */
export const renderPostImage = ({
  title,
  description,
  date,
  readingTime,
}: PostImageProps) => {
  const { muted } = COLORS.light;

  return render(
    <Frame theme="light">
      <Header theme="light" label={`Writing · ${date}`} />

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <span
          style={{
            fontFamily: "Bricolage",
            fontSize: getTitleSize(title),
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            maxWidth: 1000,
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 48,
            fontSize: 26,
            color: muted,
          }}
        >
          <span style={{ maxWidth: 820, lineHeight: 1.34 }}>
            {description ?? ""}
          </span>
          <span style={{ flexShrink: 0 }}>
            {Math.max(1, readingTime)} min read
          </span>
        </div>
      </div>
    </Frame>,
  );
};
