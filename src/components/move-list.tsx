"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ITEMS = [...NAV, { label: "Contact", href: `mailto:${SITE.email}` }];

type MoveListProps = {
  direction?: "row" | "column";
  className?: string;
};

/** Primary nav, numbered like moves in a game score: 1. Projects 2. Writing… */
const MoveList = ({ direction = "column", className }: MoveListProps) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={className}>
      <ol
        className={cn(
          "flex",
          direction === "column"
            ? "flex-col"
            : "flex-wrap gap-x-[clamp(1rem,2.5vw,2.25rem)] gap-y-1",
        )}
      >
        {ITEMS.map(({ label, href }, i) => {
          const isActive = pathname.startsWith(href);

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="group inline-flex items-baseline gap-[0.6em]"
              >
                <span className="font-mono text-[0.78em] text-muted tabular-nums">
                  {i + 1}.
                </span>
                <span
                  className={cn(
                    "link-draw transition-colors",
                    isActive ? "text-fg" : "text-muted group-hover:text-fg",
                  )}
                  data-active={isActive || undefined}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default MoveList;
