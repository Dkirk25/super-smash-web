import React from "react";
import clsx from "clsx";

import { BulmaComponentProps } from "../types";
import { useBulma } from "../utils/helpers";

export interface LevelProps
  extends BulmaComponentProps<React.HTMLAttributes<HTMLDivElement>> {
  component?: React.ElementType;
  isMobile?: boolean;
}

export const Level: React.FC<LevelProps> = props => {
  const { component = "div", className, isMobile, children, ...rest } = props;
  const [bulma] = useBulma();

  return React.createElement(
    component,
    {
      className: clsx(
        "level",
        bulma,
        {
          "is-mobile": isMobile
        },
        className
      ),
      ...rest
    },
    children
  );
};
