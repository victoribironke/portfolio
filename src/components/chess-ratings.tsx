import { getChessRatings } from "@/lib/utils";

const ChessRatings = async () => {
  const { data, error } = await getChessRatings();

  if (error) console.error(error);

  return (
    <div className="flex gap-4 flex-wrap">
      {data.map((d, i) => (
        <div className="w-fit rounded-md border flex overflow-hidden" key={i}>
          <div className="px-3 py-1 border-r font-medium">{d.title}</div>
          <div className="px-3 py-1 bg-white text-black font-medium">
            {d.rating}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChessRatings;
