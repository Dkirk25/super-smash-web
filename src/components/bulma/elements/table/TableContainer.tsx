import React from "react";
import clsx from "clsx";

export interface TableContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const TableContainer: React.FC<TableContainerProps> = props => {
  const { className, children } = props;
  return <div className={clsx("table-container", className)}>{children}</div>;
};
