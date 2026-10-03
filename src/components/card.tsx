import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div"> & {
  label: string;
  icon?: React.ReactNode;
  status?: React.ReactNode;
};

/** A framed tile used for the "off the clock" widgets. */
const Card = ({
  label,
  icon,
  status,
  className,
  children,
  ...props
}: CardProps) => (
  <div
    className={cn(
      "relative flex flex-col overflow-hidden rounded-2xl border bg-surface p-5",
      className,
    )}
    {...props}
  >
    <div className="mb-5 flex items-center justify-between gap-3 text-faint">
      <span className="flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.14em] uppercase">
        {icon}
        {label}
      </span>
      {status}
    </div>
    {children}
  </div>
);

export default Card;
