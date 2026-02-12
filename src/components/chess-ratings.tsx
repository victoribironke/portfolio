import { getChessRatings } from "@/lib/utils";

const ChessRatings = async () => {
  const { data, error } = await getChessRatings();

  if (error) console.error(error);

  return (
    <div className="flex gap-3 flex-wrap">
      {data.map((d, i) => (
        <div className="glass-card flex overflow-hidden" key={i}>
          <div className="px-3 py-1.5 border-r border-border/50 text-sm font-medium text-muted-foreground">
            {d.title}
          </div>
          <div className="px-3 py-1.5 text-sm font-semibold">{d.rating}</div>
        </div>
      ))}
    </div>
  );
};

export default ChessRatings;
