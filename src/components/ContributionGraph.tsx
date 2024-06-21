import { MouseEventHandler } from "react";
import GitHubCalendar from "react-github-calendar";
import { useState } from "react";
import { cn, getGitHubYears } from "@/lib/utils";

const ContributionGraph = () => {
  const today = new Date().getFullYear();
  const [calendarYear, setCalendarYear] = useState(today);

  const username = "victoribironke";
  const joinYear = 2021;
  const years = getGitHubYears(joinYear);

  return (
    <section className="w-full relative max-w-5xl flex xl:flex-row flex-col gap-4">
      <p className="w-fit max-w-5xl text-left font-mono text-blue bg-gray-100 bg-opacity-5 px-6 py-2 self-start backdrop-blur-sm rounded-xl absolute -top-12 left-0 z-0">
        contributions
      </p>

      <div className="rounded-2xl bg-gray-100 bg-opacity-5 p-6 backdrop-blur-sm max-h-fit">
        <GitHubCalendar
          username={username}
          blockSize={13}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? calendarYear : year)
            }
          />
        ))}
      </div>
    </section>
  );
};

const YearButton = ({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl text-center py-2 px-3 text-sm font-medium backdrop-blur-sm border border-transparent hover:border-zinc-700",
        year === currentYear ? "bg-blue" : "bg-gray-100 bg-opacity-5"
      )}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
};

export default ContributionGraph;
