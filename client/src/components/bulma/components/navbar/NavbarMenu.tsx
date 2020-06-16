import * as React from "react";
import clsx from "clsx";

export interface NavbarMenuProps {
  readonly className?: string;
  readonly isActive?: boolean;
}

export const NavbarMenu: React.FC<NavbarMenuProps> = (props) => {
  const { className, children, isActive } = props;
  return (
    <div className={clsx("navbar-menu", { "is-active": isActive }, className)}>
      {children}
    </div>
  );
};
