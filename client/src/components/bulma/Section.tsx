import React from "react";
import clsx from "clsx";
import { BulmaIsSizeModifier } from "./modifiers";
import { useBulma } from "./utils/helpers";

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BulmaIsSizeModifier {
  component?: React.ElementType;
}

export const Section: React.FC<SectionProps> = props => {
  const { component = "section", children, className, isSize, ...rest } = props;
  const [bulma] = useBulma(props);

  return React.createElement(
    component,
    {
      className: clsx("section", bulma, className),
      ...rest
    },
    children
  );
};
