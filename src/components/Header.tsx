import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRecoilValue } from "recoil";
import { imageSrc } from "@/atoms/atoms";
import { cn, formatTime } from "@/lib/utils";
import { useState } from "react";

const Header = ({ className }: { className: string }) => {
  const src = useRecoilValue(imageSrc);
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
    <header
      className={cn(
        "w-full text-white z-10 fixed flex items-center justify-center px-6",
        className
      )}
    >
      <div className="w-full max-w-5xl py-4 px-6 relative overflow-hidden backdrop-blur-xl flex items-center justify-between gap-8 border border-zinc-700 rounded-2xl mt-6 bg-gray-100 bg-opacity-5">
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback className="text-black">VI</AvatarFallback>
        </Avatar>

        <p className="hidden md:block">VICTOR IBIRONKE</p>

        <p>
          {time.hour}:{time.minutes}:{time.seconds} {time.am_pm}
        </p>
      </div>
    </header>
  );
};

export default Header;
