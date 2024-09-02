import { FOOTER_LINKS, PAGES } from "@/constants/constants";
import { addRefToUrl } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black w-full flex items-center justify-center flex-col gap-10 min-h-[50vh] md:min-h-[35vh] px-6 py-20">
      <div className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {FOOTER_LINKS.map((l, i) => (
          <Link
            href={addRefToUrl(l.url)}
            className="flex items-center justify-center group"
            key={i}
            target="_blank"
          >
            <l.icon
              className="flex-shrink-0 h-5 w-5 text-white scale-125 md:scale-150"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>

      <Link
        href={PAGES.blog}
        className="border-b pb-1 hover:pb-1.5 text-white font-sub"
      >
        Blog
      </Link>

      <p className="text-gray-400 font-sub w-full max-w-5xl text-center">
        © Victor Ibironke {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
