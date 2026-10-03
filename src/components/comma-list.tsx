import { Fragment } from "react";

type CommaListProps = {
  children: React.ReactNode[];
};

/** Renders items inline, separated by muted commas. */
const CommaList = ({ children }: CommaListProps) => (
  <span>
    {children.map((child, i) => (
      <Fragment key={i}>
        {child}
        {i < children.length - 1 && <span className="text-muted">, </span>}
      </Fragment>
    ))}
  </span>
);

export default CommaList;
