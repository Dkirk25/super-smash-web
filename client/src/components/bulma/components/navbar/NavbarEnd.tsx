import * as React from "react";
import clsx from "clsx";

export interface NavbarEndProps {
  readonly className?: string;
}

export const NavbarEnd: React.FC<NavbarEndProps> = (props) => {
  const { className, children } = props;
  return <div className={clsx("navbar-end", className)}>{children}</div>;
};
