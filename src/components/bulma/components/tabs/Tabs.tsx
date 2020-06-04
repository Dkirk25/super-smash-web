import * as React from "react";
import clsx from "clsx";

export interface TabsProps {
  readonly isAligned?: "center" | "right";
  readonly isSize?: "small" | "medium" | "large";
  readonly isVariant?: "boxed" | "toggle" | "toggle-rounded";
  readonly isFullWidth?: boolean;
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const { children, isAligned, isSize, isVariant, isFullWidth } = props;
  return (
    <div
      className={clsx("tabs", {
        "is-toggle": isVariant === "toggle" || isVariant === "toggle-rounded",
        "is-toggle-rounded": isVariant === "toggle-rounded",
        "is-boxed": isVariant === "boxed",
        [`is-${isSize}`]: !!isSize,
        "is-fullwidth": isFullWidth,
        "is-centered": isAligned === "center",
        "is-right": isAligned === "right",
      })}
    >
      <ul>{children}</ul>
    </div>
  );
};
