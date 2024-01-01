import { formatTime } from "@/helpers/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const [time, setTime] = useState({
    hour: "00",
    minutes: "00",
    seconds: "00",
    am_pm: "AM",
  });

  useEffect(() => {
    setInterval(() => {
      const date = new Date(new Date().toLocaleString("en-US"));

      const hh = date.getHours();
      const hour = formatTime(hh > 12 ? hh - 12 : hh);
      const minutes = formatTime(date.getMinutes());
      const seconds = formatTime(date.getSeconds());

      const am_pm = hh >= 12 ? "PM" : "AM";

      setTime({ hour, minutes, seconds, am_pm });
    }, 1000);
  }, []);

  return (
    <header className="w-full flex items-center justify-between max-w-xl mb-16 gap-4">
      <h1 className="font-medium text-lg rs:text-xl mr-auto">
        VICTOR IBIRONKE
      </h1>
      <p className="opacity-75 text-sm">
        {time.hour}:{time.minutes}:{time.seconds} {time.am_pm}
      </p>
    </header>
  );
};

export default Header;
