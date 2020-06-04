import * as React from "react";
import clsx from "clsx";

export interface PanelTabsProps {
  readonly component?: React.ElementType;
  readonly className?: string;
}

export const PanelTabs: React.FC<PanelTabsProps> = (props) => {
  const { children, component = "p", className, ...rest } = props;
  return React.createElement(
    component,
    {
      className: clsx("panel-tabs", className),
      ...rest,
    },
    children
  );
};
