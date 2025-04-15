import Link from "next/link";
import { Separator } from "./ui/separator";
import { PAGES } from "@/constants/constants";

const Footer = () => {
  return (
    <>
      <Separator />

      <div className="w-full flex items-center justify-center gap-4 flex-wrap">
        <Link
          href={PAGES.linkedin}
          target="_blank"
          className="border-b border-dashed w-fit hover:border-b-blue"
        >
          linkedin
        </Link>

        <span>/</span>

        <Link
          href={PAGES.github}
          target="_blank"
          className="border-b border-dashed w-fit hover:border-b-blue"
        >
          github
        </Link>

        <span>/</span>

        <Link
          href={PAGES.twitter}
          target="_blank"
          className="border-b border-dashed w-fit hover:border-b-blue"
        >
          twitter
        </Link>

        <span>/</span>

        <Link
          href={PAGES.instagram}
          target="_blank"
          className="border-b border-dashed w-fit hover:border-b-blue"
        >
          instagram
        </Link>
      </div>
    </>
  );
};

export default Footer;
