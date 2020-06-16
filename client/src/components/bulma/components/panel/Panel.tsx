import * as React from "react";
import clsx from "clsx";

import { ThemeColorVariant } from "../../modifiers";

export interface PanelProps {
  readonly component?: React.ElementType;
  readonly className?: string;
  readonly color?: ThemeColorVariant;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const { component = "div", className, color, ...rest } = props;
  return React.createElement(component, {
    className: clsx("panel", { [`is-${color}`]: !!color }, className),
    ...rest,
  });
};
