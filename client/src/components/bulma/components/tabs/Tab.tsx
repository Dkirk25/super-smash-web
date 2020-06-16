import * as React from "react";
import clsx from "clsx";

export interface TabProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> {
  readonly tabKey: string;
  readonly isActive?: boolean;
  readonly onClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    newTab: string
  ) => void;
  readonly disabled?: boolean;
}

export const Tab: React.FC<TabProps> = (props) => {
  const {
    disabled,
    children,
    isActive,
    href,
    tabKey,
    onClick,
    ...rest
  } = props;

  const handleClick: React.DOMAttributes<
    HTMLAnchorElement
  >["onClick"] = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!disabled && onClick) {
        onClick(event, tabKey);
      }
    },
    [disabled, onClick, tabKey]
  );

  return (
    <li
      className={clsx({
        "is-active": isActive,
      })}
    >
      <a
        className={clsx({
          "has-text-grey-light": disabled,
        })}
        href={href}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};
