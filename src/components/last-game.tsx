import type { ChessGame } from "@/lib/types";
import { cn, formatRelative } from "@/lib/utils";
import ChessBoard from "./chess-board";

const RESULT_LABEL = { win: "Won", loss: "Lost", draw: "Drew" } as const;

type LastGameProps = {
  game: ChessGame;
  size?: "sm" | "md";
  className?: string;
};

/** A finished game: the final position and a one-line result. */
const LastGame = ({ game, size = "md", className }: LastGameProps) => (
  <a
    href={game.url}
    target="_blank"
    rel="noopener noreferrer"
    className={cn("group flex flex-col gap-3", className)}
  >
    <ChessBoard
      fen={game.fen}
      orientation={game.color}
      className="transition-opacity group-hover:opacity-80"
    />
    <span
      className={cn(
        "flex flex-col leading-snug",
        size === "sm" ? "text-sm" : "text-[0.95rem]",
      )}
    >
      <span>
        {RESULT_LABEL[game.result]}{" "}
        <span className="text-muted">
          {game.result === "draw"
            ? "with"
            : game.result === "win"
              ? "against"
              : "to"}
        </span>{" "}
        {game.opponent.username}
      </span>
      <span className="text-muted">
        <span className="capitalize">{game.timeClass}</span> ·{" "}
        {formatRelative(game.endedAt)}
      </span>
    </span>
  </a>
);

export default LastGame;
