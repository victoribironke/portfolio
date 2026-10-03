import { SITE } from "@/lib/constants";
import { WORDMARK } from "@/lib/wordmark";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Wordmark = ({ className, style }: WordmarkProps) => (
  <svg
    viewBox={`0 0 ${WORDMARK.width} ${WORDMARK.height}`}
    role="img"
    aria-label={SITE.name}
    className={cn(
      "block h-auto w-full overflow-visible fill-current transition-colors duration-1000",
      className,
    )}
    style={style}
  >
    {WORDMARK.glyphs.map((d, i) => (
      <path key={d} d={d} style={{ "--i": i } as React.CSSProperties} />
    ))}
  </svg>
);

export default Wordmark;
