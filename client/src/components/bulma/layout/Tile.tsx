import React from "react";
import clsx from "clsx";
import { useBulma } from "../utils/helpers";
import { BulmaComponentProps } from "../types";
import { BulmaSpanSizeModifier } from "../modifiers/span";

export interface TileProps
  extends BulmaComponentProps<React.HTMLAttributes<HTMLDivElement>>,
    BulmaSpanSizeModifier {
  isAncestor?: boolean;
  isParent?: boolean;
  isChild?: boolean;
  isVertical?: boolean;
  isBox?: boolean;
}

export const Tile: React.FC<TileProps> = props => {
  const {
    className,
    children,
    isAncestor,
    isParent,
    isChild,
    isVertical,
    spanSize,
    isBox,
    ...rest
  } = props;
  const [bulma] = useBulma(props);

  return (
    <div
      className={clsx(
        "tile",
        bulma,
        {
          box: isBox,
          "is-ancestor": isAncestor,
          "is-vertical": isVertical,
          "is-parent": isParent,
          "is-child": isChild
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
