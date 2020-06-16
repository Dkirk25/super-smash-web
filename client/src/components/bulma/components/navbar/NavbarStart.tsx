import * as React from "react";
import clsx from "clsx";

export interface NavbarStartProps {
  readonly className?: string;
}

export const NavbarStart: React.FC<NavbarStartProps> = (props) => {
  const { className, children } = props;
  return <div className={clsx("navbar-start", className)}>{children}</div>;
};
