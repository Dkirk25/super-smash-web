import * as React from "react";
import clsx from "clsx";

export interface BasePanelBlockProps {
  readonly component?: React.ElementType;
  readonly className?: string;
}

type PanelBlockAnchorProps = {
  readonly component: "a";
  readonly isActive?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function isPanelBlockAnchorProps(
  props: unknown
): props is PanelBlockAnchorProps {
  return props && typeof props === "object" && (props as any).component === "a";
}

export type PanelBlockProps = BasePanelBlockProps &
  (PanelBlockAnchorProps | React.HTMLAttributes<HTMLElement>);

export const PanelBlock: React.FC<PanelBlockProps> = (props) => {
  if (isPanelBlockAnchorProps(props)) {
    const { children, component = "div", className, isActive, ...rest } = props;
    return React.createElement(
      component,
      {
        className: clsx("panel-block", { "is-active": isActive }, className),
        ...rest,
      },
      children
    );
  }

  const { children, component = "div", className, ...rest } = props;
  return React.createElement(
    component,
    {
      className: clsx("panel-block", className),
      ...rest,
    },
    children
  );
};
