import Link from "next/link";
import CommaList from "@/components/comma-list";
import MoveList from "@/components/move-list";
import Wordmark from "@/components/wordmark";
import { PAGES, SITE, SOCIALS } from "@/lib/constants";

const InnerLayout = ({ children }: LayoutProps<"/">) => (
  <div
    data-theme="light"
    className="flex min-h-svh flex-col px-edge pb-[clamp(1.5rem,2.6vw,2.75rem)]"
  >
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 bg-bg py-[clamp(0.9rem,1.8vw,1.4rem)] text-[clamp(0.95rem,1.1vw,1.15rem)]">
      <Link
        href={PAGES.home}
        aria-label={`${SITE.name}, home`}
        className="w-[clamp(9rem,13vw,12rem)] transition-opacity hover:opacity-60"
      >
        <Wordmark />
      </Link>
      <MoveList direction="row" />
    </header>

    <main className="flex-1 animate-rise pt-[clamp(2rem,6vw,5rem)] pb-24">
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
