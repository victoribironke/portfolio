import { FOOTER_LINKS } from "@/constants/constants";
import { addRefToUrl, cn } from "@/lib/utils";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black w-full flex items-center justify-center flex-col gap-20 mt-20 py-24 px-4">
      <div className="w-full max-w-5xl flex flex-wrap items-center justify-start gap-4">
        {FOOTER_LINKS.map((l, i) => (
          <p key={i}>
            <Link
              href={addRefToUrl(l.url)}
              className="flex items-center gap-1.5 border-b border-gray-50 text-white group font-sub pb-1"
            >
              <l.icon
                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-white"
                aria-hidden="true"
              />

              {l.name}
            </Link>
          </p>
        ))}
      </div>

      <p className="text-gray-400 font-sub w-full max-w-5xl">
        © Victor Ibironke {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
