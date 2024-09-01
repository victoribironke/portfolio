import { formatTime } from "@/lib/utils";
import { useState } from "react";

const HeaderAndHero = () => {
  const [time, setTime] = useState({
    hour: "00",
    minutes: "00",
    seconds: "00",
    am_pm: "AM",
  });

  setInterval(() => {
    const date = new Date(new Date().toLocaleString("en-US"));

    const hh = date.getHours();
    const hour = formatTime(hh > 12 ? hh - 12 : hh);
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    const am_pm = hh >= 12 ? "PM" : "AM";

    setTime({ hour, minutes, seconds, am_pm });
  }, 1000);

  return (
    <section className="bg-black w-full min-h-[50vh] md:min-h-screen flex items-center justify-center flex-col gap-8 relative">
      <div className="w-full px-4 absolute top-10 text-center font-sub text-white">
        {time.hour}:{time.minutes}:{time.seconds} {time.am_pm}
      </div>

      <p className="text-white font-main text-5xl md:text-6xl lg:text-8xl text-center w-full">
        VICTOR IBIRONKE
      </p>

      <p className="font-sub text-lg md:text-xl lg:text-2xl text-center w-full text-gray-400 tracking-widest">
        FULL STACK DEVELOPER
      </p>
    </section>
  );
};

export default HeaderAndHero;
