import * as React from "react";
import clsx from "clsx";

export interface PanelHeadingProps {
  readonly component?: React.ElementType;
  readonly className?: string;
}

export const PanelHeading: React.FC<PanelHeadingProps> = (props) => {
  const { children, component = "p", className, ...rest } = props;
  return React.createElement(
    component,
    {
      className: clsx("panel-heading", className),
      ...rest,
    },
    children
  );
};
