import * as React from "react";
import clsx from "clsx";

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
