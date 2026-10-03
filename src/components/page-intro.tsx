type PageIntroProps = {
  title: string;
  /** Shown as a superscript next to the title, e.g. the number of posts. */
  count?: number;
  children: React.ReactNode;
};

/** A page's name set huge, with the lede offset into the right column. */
const PageIntro = ({ title, count, children }: PageIntroProps) => (
  <header className="mb-[clamp(2.5rem,6vw,5rem)] flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)]">
    <h1 className="flex items-start display-type text-[clamp(4.5rem,16vw,16rem)] leading-[0.8] uppercase">
      {title}
      {count !== undefined && (
        <sup className="mt-[0.06em] ml-[0.08em] font-sans text-[0.14em] font-normal tracking-normal text-muted tabular-nums">
          ({String(count).padStart(2, "0")})
        </sup>
      )}
    </h1>
    <p className="max-w-[34rem] text-[clamp(1.15rem,1.6vw,1.6rem)] leading-[1.34] tracking-[-0.008em] text-pretty md:ml-[50%]">
      {children}
    </p>
  </header>
);

export default PageIntro;
