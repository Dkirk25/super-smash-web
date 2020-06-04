import React from "react";
import clsx from "clsx";

import { useBulma } from "./utils/helpers";
import {
  TypographyFontFamily,
  TypographyWeight,
  TypographySize,
  createBreakpointClasses,
} from "./modifiers";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  readonly className?: string;
  readonly heading?: "title" | "subtitle";
  readonly component?: React.ElementType;
  readonly fontSize?: TypographySize;
  readonly fontFamily?: TypographyFontFamily;
  readonly fontWeight?: TypographyWeight;
  readonly isCased?: "upper" | "lower" | "caps";
  readonly isItalic?: boolean;
  readonly isSpaced?: boolean;
}
export const Text: React.FC<TextProps> = (props) => {
  const {
    fontSize,
    isItalic,
    fontWeight,
    fontFamily,
    isCased,
    component = "p",
    children,
    className,
    heading,
    isSpaced,
    ...rest
  } = props;
  const [bulma] = useBulma(props);

  return React.createElement(
    component,
    {
      className: clsx(
        {
          title: heading === "title",
          subtitle: heading === "subtitle",
          "is-spaced": isSpaced,
          "is-capitalized": isCased === "caps",
          "is-lowercase": isCased === "lower",
          "is-uppercase": isCased === "upper",
          "is-italic": isItalic,
          "has-text-weight-lignt": fontWeight === "light",
          "has-text-weight-normal": fontWeight === "normal",
          "has-text-weight-medium": fontWeight === "medium",
          "has-text-weight-semibold": fontWeight === "semibold",
          "has-text-weight-bold": fontWeight === "bold",
          "is-family-sans-serif": fontFamily === "sans-serif",
          "is-family-monospace": fontFamily === "monospace",
          "is-family-primary": fontFamily === "primary",
          "is-family-secondary": fontFamily === "secondary",
          "is-family-code": fontFamily === "code",
        },
        createBreakpointClasses(`is-size`, fontSize),
        bulma,
        className
      ),
      ...rest,
    },
    children
  );
};
