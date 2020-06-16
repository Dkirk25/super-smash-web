import React from "react";
import clsx from "clsx";
import { BulmaBaseHelper, BulmaResponsiveHelper } from "../modifiers";
import { useBulma } from "../utils/helpers";

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BulmaBaseHelper,
    BulmaResponsiveHelper {}

/**
 * Bulma v0.8.1
 *
 * Box: https://bulma.io/documentation/elements/box/
 */
export const Box: React.FC<BoxProps> = (props) => {
  const { isHidden, isAligned, children, className, ...rest } = props;
  const [bulma] = useBulma(props);
  return (
    <div className={clsx("box", bulma, className)} {...rest}>
      {children}
    </div>
  );
};
