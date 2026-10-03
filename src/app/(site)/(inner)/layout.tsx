import Link from "next/link";
import CommaList from "@/components/comma-list";
import InnerNav from "@/components/inner-nav";
import Wordmark from "@/components/wordmark";
import { PAGES, SITE, SOCIALS } from "@/lib/constants";

const InnerLayout = ({ children }: LayoutProps<"/">) => (
  <div
    data-theme="light"
    className="flex min-h-svh flex-col px-edge pt-edge pb-[clamp(1.5rem,2.6vw,2.75rem)]"
  >
    <Link
      href={PAGES.home}
      aria-label={`${SITE.name}, home`}
      className="block animate-fade"
    >
      <Wordmark />
    </Link>

    <InnerNav />

    <main className="flex-1 animate-rise pt-[clamp(2rem,5vw,4rem)] pb-24 [animation-delay:120ms]">
      {children}
    </main>

    <footer className="flex flex-col gap-2 border-t pt-5 text-sm sm:flex-row sm:justify-between">
      <span className="text-muted">
        © {new Date().getFullYear()} {SITE.name}
      </span>
      <CommaList>
        {SOCIALS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
          >
            {label}
          </a>
        ))}
      </CommaList>
    </footer>
  </div>
);

export default InnerLayout;
