import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IMAGES, PAGES } from "@/constants/constants";
import { HeaderAndHeroProps } from "@/types/general";

const HeaderAndHero = ({ title, desc }: HeaderAndHeroProps) => {
  return (
    <section className="bg-black px-6 w-full min-h-[50vh] md:min-h-screen flex items-center justify-center flex-col gap-8">
      <div className="w-full font-sub text-white flex items-center justify-center gap-4">
        <Link href={PAGES.home}>
          <Avatar>
            <AvatarImage src={IMAGES.logo.src} alt="@victoribironke" />
            <AvatarFallback>VI</AvatarFallback>
          </Avatar>
        </Link>

        <Link
          href="mailto:hello@victoribironke.com"
          className="border-b pb-1 hover:pb-1.5"
        >
          hello@victoribironke.com
        </Link>
      </div>

      <p className="text-white max-w-5xl font-main text-5xl md:text-6xl lg:text-8xl text-center w-full uppercase">
        {title}
      </p>

      <p className="font-blog-heading max-w-3xl md:text-lg lg:text-xl text-center w-full text-gray-400 tracking-widest">
        {desc}
      </p>
    </section>
  );
};

export default HeaderAndHero;
