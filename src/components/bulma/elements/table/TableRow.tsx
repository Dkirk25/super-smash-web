import React from "react";
import clsx from "clsx";

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean;
}

export const TableRow: React.FC<TableRowProps> = props => {
  const { className, children, selected, ...rest } = props;
  return (
    <tr
      className={clsx(
        {
          "is-selected": selected
        },
        className
      )}
      {...rest}
    >
      {children}
    </tr>
  );
};
