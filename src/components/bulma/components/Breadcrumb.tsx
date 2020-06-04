import * as React from "react";
import clsx from "clsx";

export interface BreadcrumbsProps {
  isAligned?: "center" | "right";
  hasSeparator?: "arrow" | "bullet" | "dot" | "succeeds";
  isSize?: "small" | "medium" | "large";
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { children, isAligned, hasSeparator, isSize } = props;
  return (
    <nav
      className={clsx("breadcrumb", {
        "is-centered": isAligned === "center",
        "is-right": isAligned === "right",
        [`is-${isSize}`]: !!isSize,
        [`has-${hasSeparator}-separator`]: !!hasSeparator,
      })}
    >
      <ul>{children}</ul>
    </nav>
  );
};

export interface BreadcrumbProps {
  to: string;
  isActive?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { children, to, isActive } = props;
  return (
    <li className={clsx({ "is-active": isActive })}>
      <a href={to}>{children}</a>
    </li>
  );
};
