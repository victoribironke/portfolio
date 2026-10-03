import { ArrowUpRight, ChessKnight } from "lucide-react";
import { CHESS_PROFILE_URL, getChessRatings } from "@/lib/chess";
import { CHESS_USERNAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Card from "./card";

type ChessRatingsProps = {
  className?: string;
};

const ChessRatings = async ({ className }: ChessRatingsProps) => {
  const ratings = await getChessRatings();

  return (
    <Card
      label="Chess"
      icon={<ChessKnight size={13} strokeWidth={1.75} />}
      className={className}
    >
      <dl className="flex flex-1 flex-col gap-2.5">
        {ratings.map(({ label, rating }) => (
          <div key={label} className="flex items-baseline gap-3 text-sm">
            <dt className="text-muted">{label}</dt>
            <span
              aria-hidden
              className="flex-1 translate-y-[-3px] border-b border-dotted"
            />
            <dd
              className={cn(
                "font-serif text-xl leading-none tabular-nums",
                rating === null && "text-faint",
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
        className="group mt-5 inline-flex w-fit items-center gap-1 text-xs text-muted hover:text-ink"
      >
        {CHESS_USERNAME} on chess.com
        <ArrowUpRight
          size={12}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </Card>
  );
};

export default ChessRatings;
