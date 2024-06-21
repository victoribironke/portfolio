import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRecoilValue } from "recoil";
import { imageSrc } from "@/atoms/atoms";
import { cn, formatTime } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = ({ className }: { className: string }) => {
  const src = useRecoilValue(imageSrc);
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
    <header
      className={cn(
        "w-full border-b text-white border-zinc-700 z-10 backdrop-blur-xl fixed flex items-center justify-center",
        className
      )}
    >
      <div className="w-full max-w-5xl py-4 px-6 flex items-center justify-center gap-8">
        <Avatar className="mr-auto">
          <AvatarImage src={src} />
          <AvatarFallback className="text-black">VI</AvatarFallback>
        </Avatar>

        {/* <Link href="#about" className="hover:text-blue">
          about
        </Link>

        <Link href="#work" className="hover:text-blue">
          work
        </Link>

        <Link href="#contact" className="hover:text-blue">
          contact
        </Link> */}

        <p>
          {time.hour}:{time.minutes}:{time.seconds} {time.am_pm}
        </p>
      </div>
    </header>
  );
};

export default Header;
