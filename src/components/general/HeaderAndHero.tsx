import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IMAGES } from "@/constants/constants";

const HeaderAndHero = () => {
  return (
    <section className="bg-black px-6 w-full min-h-[50vh] md:min-h-screen flex items-center justify-center flex-col gap-8">
      <div className="w-full font-sub text-white flex items-center justify-center gap-4">
        <Avatar>
          <AvatarImage src={IMAGES.logo.src} alt="@victoribironke" />
          <AvatarFallback>VI</AvatarFallback>
        </Avatar>

        <Link
          href="mailto:hello@victoribironke.com"
          className="border-b pb-1 hover:pb-1.5"
        >
          hello@victoribironke.com
        </Link>
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
