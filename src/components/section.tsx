import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, title, action, className, children }: SectionProps) => (
  <section id={id} className={cn("scroll-mt-12", className)}>
    <div className="mb-5 flex items-baseline justify-between gap-4">
      <h2 className="font-mono text-[0.7rem] tracking-[0.16em] text-faint uppercase">
        {title}
      </h2>
      {action}
    </div>
    {children}
  </section>
);

export default Section;
