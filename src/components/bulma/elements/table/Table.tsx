import React from "react";
import clsx from "clsx";

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  readonly bordered?: boolean;
  readonly striped?: boolean;
  readonly narrow?: boolean;
  readonly hoverable?: boolean;
  readonly fullWidth?: boolean;
}

export const Table: React.FC<TableProps> = props => {
  const {
    children,
    className,
    bordered,
    striped,
    narrow,
    hoverable,
    fullWidth,
    ...rest
  } = props;
  return (
    <table
      className={clsx(
        "table",
        {
          "is-bordered": bordered,
          "is-striped": striped,
          "is-narrow": narrow,
          "is-hoverable": hoverable,
          "is-fullwidth": fullWidth
        },
        className
      )}
      {...rest}
    >
      {children}
    </table>
  );
};
