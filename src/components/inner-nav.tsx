"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PAGES, SITE } from "@/lib/constants";

const isActive = (pathname: string, href: string) =>
  href === PAGES.home ? pathname === href : pathname.startsWith(href);

/** Section nav spread across the page, pinned while content scrolls under. */
const InnerNav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Sections"
      className="group/nav sticky top-0 z-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 bg-bg py-[clamp(0.75rem,1.6vh,1.15rem)] text-[clamp(0.95rem,1.15vw,1.28rem)] max-sm:justify-start max-sm:gap-x-5"
    >
      {NAV.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          aria-current={isActive(pathname, href) ? "page" : undefined}
          className="link-draw transition-opacity [@media(hover:hover)]:group-hover/nav:opacity-45 [@media(hover:hover)]:hover:opacity-100!"
        >
          {label}
        </Link>
      ))}
      <a
        href={`mailto:${SITE.email}`}
        className="link-draw transition-opacity [@media(hover:hover)]:group-hover/nav:opacity-45 [@media(hover:hover)]:hover:opacity-100!"
      >
        Contact
      </a>
    </nav>
  );
};

export default InnerNav;
