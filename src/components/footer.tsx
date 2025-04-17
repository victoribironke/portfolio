import Link from "next/link";
import { Separator } from "./ui/separator";
import { PAGES } from "@/constants/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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

      <h1 className="md:text-lg mt-6 w-full text-center max-w-sm mx-auto">
        I write about projects I'm working and other general life topics,
        sometimes
      </h1>

      <Input
        className="w-full mx-auto max-w-sm"
        placeholder="Your email address"
      />

      <Button className="w-full mx-auto max-w-sm">Subscribe</Button>
    </>
  );
};

export default Footer;
