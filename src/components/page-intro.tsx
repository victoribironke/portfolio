type PageIntroProps = {
  title: string;
  children: React.ReactNode;
};

/** Visually hidden heading with a large lede, in the voice of the home bio. */
const PageIntro = ({ title, children }: PageIntroProps) => (
  <header className="mb-[clamp(2rem,5vw,3.5rem)]">
    <h1 className="sr-only">{title}</h1>
    <p className="max-w-[44rem] text-[clamp(1.2rem,1.7vw,1.75rem)] leading-[1.34] tracking-[-0.008em] text-pretty">
      {children}
    </p>
  </header>
);

export default PageIntro;
