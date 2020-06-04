import React from "react";
import clsx from "clsx";

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  isSelected?: boolean;
}

export const TableRow: React.FC<TableRowProps> = (props) => {
  const { className, children, isSelected, ...rest } = props;
  return (
    <tr
      className={clsx(
        {
          "is-selected": isSelected,
        },
        className
      )}
      {...rest}
    >
      {children}
    </tr>
  );
};
