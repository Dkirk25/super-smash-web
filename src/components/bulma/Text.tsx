import React from "react";
import clsx from "clsx";

import { BulmaTypographyModifier } from "./modifiers";
import { useBulma } from "./utils/helpers";

export interface TextProps extends BulmaTypographyModifier {
  className?: string;
  heading?: "title" | "subtitle";
}
export const Text: React.FC<TextProps> = props => {
  const { children, className, heading, textSize } = props;
  const [bulma] = useBulma(props);
  return (
    <p
      className={clsx(
        {
          title: heading === "title",
          subtitle: heading === "subtitle"
        },
        bulma,
        className
      )}
    >
      {children}
    </p>
  );
};
