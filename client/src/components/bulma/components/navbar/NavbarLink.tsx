import * as React from "react";
import clsx from "clsx";

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
