import React from "react";
import clsx from "clsx";
import { BulmaComponentProps } from "./types";

export interface ContainerProps
  extends BulmaComponentProps<
    React.HTMLAttributes<HTMLDivElement>,
    { isFluid?: boolean; component?: React.ElementType }
  > {}

export const Container: React.FC<ContainerProps> = props => {
  const {
    component = "div",
    className,
    children,
    isFluid: fluid,
    ...rest
  } = props;

  return React.createElement(
    component,
    {
      className: clsx(
        "container",
        {
          "is-fluid": fluid
        },
        className
      ),
      ...rest
    },
    children
  );
};
