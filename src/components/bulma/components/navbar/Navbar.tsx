import * as React from "react";
import clsx from "clsx";
import { ThemeColorVariant } from "../../modifiers";

export interface NavbarProps {
  readonly className?: string;
  readonly isTransparent?: boolean;
  /**
   * Add the corresponding has-navbar-fixed-top
   * or has-navbar-fixed-bottom modifier to either
   * <html> or <body> element to provide the appropriate
   * padding to the page
   */
  readonly isFixedTo?: "top" | "bottom";
  readonly color?: ThemeColorVariant;
  readonly isSpaced?: boolean;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    isSpaced,
    color,
    className,
    children,
    isTransparent,
    isFixedTo,
  } = props;
  return (
    <nav
      className={clsx(
        "navbar",
        {
          "is-transparent": isTransparent,
          "is-fixed-top": isFixedTo === "top",
          "is-fixed-bottom": isFixedTo === "bottom",
          [`is-${color}`]: !!color,
          "is-spaced": isSpaced,
        },
        className
      )}
    >
      {children}
    </nav>
  );
};
