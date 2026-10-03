import Link from "next/link";
import { PAGES, SITE } from "@/lib/constants";
import NavLink from "./nav-link";

const SiteHeader = () => (
  <header className="flex animate-rise items-center justify-between gap-6">
    <Link
      href={PAGES.home}
      className="group flex items-center gap-2.5 text-sm font-medium tracking-tight"
    >
      <span
        aria-hidden
        className="grid size-7 place-items-center rounded-full bg-ink font-serif text-base text-paper italic transition-transform duration-300 group-hover:-rotate-12"
      >
        v
      </span>
      {SITE.name}
    </Link>

    <nav className="flex items-center gap-1 text-sm">
      <NavLink href={PAGES.home}>Home</NavLink>
      <NavLink href={PAGES.blog}>Writing</NavLink>
    </nav>
  </header>
);

export default SiteHeader;
