import * as React from "react";
import clsx from "clsx";

export interface NavbarDividerProps {
  readonly className?: string;
}

export const NavbarDivider: React.FC<NavbarDividerProps> = (props) => {
  const { className } = props;
  return <hr className={clsx("navbar-divider", className)} />;
};
