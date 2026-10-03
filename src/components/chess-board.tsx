import {
  ChessBishop,
  ChessKing,
  ChessKnight,
  ChessPawn,
  ChessQueen,
  ChessRook,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PIECES: Record<string, LucideIcon> = {
  k: ChessKing,
  q: ChessQueen,
  r: ChessRook,
  b: ChessBishop,
  n: ChessKnight,
  p: ChessPawn,
};

const FILES = "abcdefgh";

/** Expands the placement part of a FEN into 8 ranks of 8 squares (8th rank first). */
const parseFen = (fen: string) =>
  (fen.split(" ")[0] ?? "")
    .split("/")
    .map((rank) =>
      rank
        .split("")
        .flatMap((char) =>
          /\d/.test(char) ? Array<null>(Number(char)).fill(null) : [char],
        ),
    );

type ChessBoardProps = {
  fen: string;
  /** Which side is at the bottom. */
  orientation?: "white" | "black";
  showCoordinates?: boolean;
  className?: string;
};

const ChessBoard = ({
  fen,
  orientation = "white",
  showCoordinates = false,
  className,
}: ChessBoardProps) => {
  let ranks = parseFen(fen);
  if (orientation === "black")
    ranks = ranks.map((rank) => [...rank].reverse()).reverse();

  return (
    <div
      role="img"
      aria-label={`Chess position: ${fen}`}
      className={cn(
        "grid aspect-square grid-cols-8 grid-rows-8 overflow-hidden rounded-[3px]",
        className,
      )}
    >
      {ranks.flatMap((rank, row) =>
        rank.map((piece, col) => {
          const isLight = (row + col) % 2 === 0;
          const Piece = piece ? PIECES[piece.toLowerCase()] : null;
          const isWhitePiece = piece === piece?.toUpperCase();
          const file = FILES[orientation === "white" ? col : 7 - col] ?? "";
          const rankNumber = orientation === "white" ? 8 - row : row + 1;

          return (
            <div
              key={`${row}-${col}`}
              className={cn(
                "relative grid place-items-center",
                isLight ? "bg-fg/16" : "bg-fg/6",
              )}
            >
              {Piece && (
                <Piece
                  aria-hidden
                  strokeWidth={1.5}
                  className={cn(
                    "size-[78%]",
                    isWhitePiece ? "fill-none" : "fill-current",
                  )}
                />
              )}
              {showCoordinates && row === 7 && (
                <span className="absolute right-0.5 bottom-0 font-mono text-[0.55rem] text-muted">
                  {file}
                </span>
              )}
              {showCoordinates && col === 0 && (
                <span className="absolute top-0 left-0.5 font-mono text-[0.55rem] text-muted">
                  {rankNumber}
                </span>
              )}
            </div>
          );
        }),
      )}
    </div>
  );
};

export default ChessBoard;
