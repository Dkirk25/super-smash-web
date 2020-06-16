import React from "react";
import clsx from "clsx";

export interface TableContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  readonly component?: React.ElementType;
}

/**
 * https://bulma.io/documentation/elements/table/#table-container
 */
export const TableContainer: React.FC<TableContainerProps> = (props) => {
  const { component = "div", className, children } = props;
  return React.createElement(
    component,
    { className: clsx("table-container", className) },
    children
  );
};
