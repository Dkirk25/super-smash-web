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

export interface NavbarBrandProps {
  readonly className?: string;
}

export const NavbarBrand: React.FC<NavbarBrandProps> = (props) => {
  const { className, children } = props;
  return <div className={clsx("navbar-brand", className)}>{children}</div>;
};

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

export interface NavbarStartProps {
  readonly className?: string;
}

export const NavbarStart: React.FC<NavbarStartProps> = (props) => {
  const { className, children } = props;
  return <div className={clsx("navbar-start", className)}>{children}</div>;
};

export interface NavbarEndProps {
  readonly className?: string;
}

export const NavbarEnd: React.FC<NavbarEndProps> = (props) => {
  const { className, children } = props;
  return <div className={clsx("navbar-end", className)}>{children}</div>;
};

export interface NavbarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly className?: string;
  readonly hasDropdown?: boolean;
  readonly isHoverable?: boolean;
  readonly isLink?: boolean;
  readonly isExpanded?: boolean;
  readonly isActive?: boolean;
  readonly isTab?: boolean;
  readonly isDropUp?: boolean;
}

export const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  const {
    isDropUp,
    isActive,
    isExpanded,
    isTab,
    isLink,
    className,
    children,
    hasDropdown,
    isHoverable,
    href,
    ...rest
  } = props;

  if (href || isLink) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        href="#"
        className={clsx(
          "navbar-item",
          {
            "has-dropdown-up": isDropUp,
            "has-dropdown": hasDropdown,
            "is-hoverable": isHoverable,
            "is-expanded": isExpanded,
            "is-active": isActive,
            "is-tab": isTab,
          },
          className
        )}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <div
      className={clsx(
        "navbar-item",
        {
          "has-dropdown": hasDropdown,
          "is-hoverable": isHoverable,
          "is-expanded": isExpanded,
          "is-active": isActive,
          "is-tab": isTab,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export interface NavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly className?: string;
  readonly isArrowless?: boolean;
}

export const NavbarLink: React.FC<NavbarLinkProps> = (props) => {
  const { isArrowless, className, children, href, ...rest } = props;
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return (
    <a
      className={clsx(
        "navbar-link",
        { "is-arrowless": isArrowless },
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

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

export interface NavbarDividerProps {
  readonly className?: string;
}

export const NavbarDivider: React.FC<NavbarDividerProps> = (props) => {
  const { className } = props;
  return <hr className={clsx("navbar-divider", className)} />;
};
