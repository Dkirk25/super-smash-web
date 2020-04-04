import React from "react";
import { BulmaTypographyModifier, BulmaIsSizeModifier } from "../modifiers";
import { useBulma } from "../utils/helpers";
import clsx from "clsx";

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    BulmaTypographyModifier,
    BulmaIsSizeModifier {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type?: "title" | "subtitle";
  isSpaced?: boolean;
}

export const Title: React.FC<TitleProps> = props => {
  const { className, isSpaced, heading, type, children, ...rest } = props;

  const [bulma] = useBulma(props);

  const classes = clsx(
    bulma,
    {
      title: type === "title",
      subtitle: type === "subtitle",
      "is-spaced": isSpaced
    },
    className
  );

  switch (heading) {
    case "h1":
      return (
        <h1 className={classes} {...rest}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classes} {...rest}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classes} {...rest}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={classes} {...rest}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={classes} {...rest}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={classes} {...rest}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={classes} {...rest}>
          {children}
        </h1>
      );
  }
};

Title.defaultProps = {
  heading: "h1",
  type: "title"
};
