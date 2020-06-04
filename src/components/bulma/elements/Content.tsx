import React from "react";
import clsx from "clsx";

import {
  BulmaBaseHelper,
  BulmaResponsiveHelper,
  BulmaIsSizeModifier,
} from "../modifiers";
import { useBulma } from "../utils/helpers";

export interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BulmaBaseHelper,
    BulmaResponsiveHelper,
    BulmaIsSizeModifier {
  readonly component?: React.ElementType;
}

/**
 * Bulma v0.8.1
 *
 * Content: https://bulma.io/documentation/elements/content/
 */
export const Content: React.FC<ContentProps> = (props) => {
  const { component = "div", children, className, ...rest } = props;
  const [bulma] = useBulma(props);

  return React.createElement(
    component,
    {
      className: clsx("content", bulma, className),
      ...rest,
    },
    children
  );
};
