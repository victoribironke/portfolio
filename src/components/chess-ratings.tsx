import { CHESS_PROFILE_URL, getChessRatings } from "@/lib/chess";
import { CHESS_USERNAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ChessRatingsProps = {
  size?: "lg" | "sm";
  className?: string;
};

const ChessRatings = async ({ size = "lg", className }: ChessRatingsProps) => {
  const ratings = await getChessRatings();

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <dl
        className={cn(
          "grid gap-x-[clamp(1rem,3vw,2.5rem)] gap-y-6",
          size === "lg"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            : "grid-cols-3 sm:grid-cols-5",
        )}
      >
        {ratings.map(({ label, rating }) => (
          <div key={label} className="flex flex-col gap-2">
            <dt className="eyebrow">{label}</dt>
            <dd
              className={cn(
                "display-type tabular-nums",
                size === "lg"
                  ? "text-[clamp(3.5rem,8vw,7.5rem)]"
                  : "text-[clamp(2rem,4vw,3rem)]",
                rating === null && "text-muted",
              )}
            >
              {rating ?? "—"}
            </dd>
          </div>
        ))}
      </dl>

      <a
        href={CHESS_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sm link-muted"
      >
        {CHESS_USERNAME} on chess.com ↗
      </a>
    </div>
  );
};

export default ChessRatings;
