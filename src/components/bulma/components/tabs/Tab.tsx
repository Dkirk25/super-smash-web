import * as React from "react";
import clsx from "clsx";

export interface TabProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly isActive?: boolean;
}

export const Tab: React.FC<TabProps> = (props) => {
  const { children, isActive, href, ...rest } = props;
  return (
    <li
      className={clsx({
        "is-active": isActive,
      })}
    >
      <a href={href} {...rest}>
        {children}
      </a>
    </li>
  );
};
