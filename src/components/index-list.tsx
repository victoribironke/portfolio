import Link from "next/link";

export type IndexItem = {
  key: string;
  href: string;
  /** Left column: a number, year or date. */
  label: string;
  title: string;
  description?: string;
  external?: boolean;
};

type IndexListProps = {
  items: IndexItem[];
};

const ROW =
  "group grid grid-cols-[4.5rem_1fr_auto] items-baseline gap-[clamp(1rem,3vw,2.5rem)] border-t py-[clamp(1.15rem,2vw,1.7rem)] max-sm:grid-cols-1 max-sm:gap-1.5";

/** Hairline-ruled rows: label, title + description, and an arrow on hover. */
const IndexList = ({ items }: IndexListProps) => (
  <ul className="border-b">
    {items.map(({ key, href, label, title, description, external }) => {
      const content = (
        <>
          <span className="text-[0.95rem] text-muted tabular-nums">
            {label}
          </span>
          <span className="flex flex-col gap-1.5">
            <span className="text-[clamp(1.15rem,1.9vw,1.7rem)] leading-tight font-medium tracking-[-0.015em] transition-opacity group-hover:opacity-60">
              {title}
            </span>
            {description && (
              <span className="max-w-[62ch] text-[clamp(0.95rem,1.1vw,1.1rem)] leading-snug text-muted">
                {description}
              </span>
            )}
          </span>
          <span
            aria-hidden
            className="-translate-x-1 self-center text-xl leading-none opacity-0 transition-all duration-300 ease-poster group-hover:translate-x-0 group-hover:opacity-90 max-sm:hidden"
          >
            {external ? "↗" : "→"}
          </span>
        </>
      );

      return (
        <li key={key}>
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={ROW}
            >
              {content}
            </a>
          ) : (
            <Link href={href} className={ROW}>
              {content}
            </Link>
          )}
        </li>
      );
    })}
  </ul>
);

export default IndexList;
