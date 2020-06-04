import * as React from "react";
import clsx from "clsx";

export interface NavbarBurgerProps {
  readonly isActive?: boolean;
  readonly className?: string;
}

export const NavbarBurger: React.FC<NavbarBurgerProps> = (props) => {
  const { className, isActive } = props;
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      role="button"
      className={clsx(
        "navbar-burger burger",
        {
          "is-active": isActive,
        },
        className
      )}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
};
