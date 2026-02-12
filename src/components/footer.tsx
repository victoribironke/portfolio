import Link from "next/link";
import { Separator } from "./ui/separator";
import { PAGES, RESUME_URL } from "@/constants/constants";

const LINKS = [
  { label: "linkedin", href: PAGES.linkedin },
  { label: "github", href: PAGES.github },
  { label: "twitter", href: PAGES.twitter },
  { label: "instagram", href: PAGES.instagram },
  { label: "resume", href: RESUME_URL },
];

const Footer = () => {
  return (
    <>
      <Separator />

      <div className="w-full flex items-center justify-center gap-4 flex-wrap animate-fade-in">
        {LINKS.map((link, i) => (
          <span key={link.label} className="flex items-center gap-4">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-dashed border-border w-fit hover:border-blue text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
            {i < LINKS.length - 1 && (
              <span className="text-muted-foreground/40">/</span>
            )}
          </span>
        ))}
      </div>
    </>
  );
};

export default Footer;
