import * as React from "react";
import clsx from "clsx";

export interface NavbarBrandProps {
  readonly className?: string;
}

export const NavbarBrand: React.FC<NavbarBrandProps> = (props) => {
  const { className, children } = props;
  return <div className={clsx("navbar-brand", className)}>{children}</div>;
};
