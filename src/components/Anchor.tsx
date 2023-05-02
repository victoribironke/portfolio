import { AnchorProps } from "@/types/general";
import Link from "next/link";

const Anchor = ({ to, text }: AnchorProps) => {
  return (
    <Link
      href={to}
      className="text-gray font-semibold hover:text-blue sm:text-lg border-b-[1px] border-blue pb-[0.1rem]"
      target="_blank"
    >
      {text}
    </Link>
  );
};

export default Anchor;
