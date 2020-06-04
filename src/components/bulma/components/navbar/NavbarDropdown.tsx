import * as React from "react";
import clsx from "clsx";

import { NavbarLink, NavbarItemProps, NavbarItem } from ".";

/**
 * isActive is used for JS to open the dropdown
 */
export interface NavbarDropdownProps
  extends Pick<NavbarItemProps, "isActive" | "isExpanded"> {
  readonly className?: string;
  readonly primary?: React.ReactNode;
  readonly isRight?: boolean;
  readonly isBoxed?: boolean;
}

export const NavbarDropdown: React.FC<NavbarDropdownProps> = (props) => {
  const { className, children, primary, isRight, isBoxed, ...rest } = props;
  return (
    <NavbarItem hasDropdown isHoverable {...rest}>
      <NavbarLink>{primary}</NavbarLink>
      <div
        className={clsx(
          "navbar-dropdown",
          { "is-right": isRight, "is-boxed": isBoxed },
          className
        )}
      >
        {children}
      </div>
    </NavbarItem>
  );
};
