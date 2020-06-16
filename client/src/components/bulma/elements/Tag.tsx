import React from "react";
import clsx from "clsx";
import { useBulma } from "../utils/helpers";
import { BulmaComponentProps } from "../types";
import { BulmaVariantModifier, BulmaIsSizeModifier } from "../modifiers";

export interface TagProps
  extends BulmaComponentProps<
      React.HTMLAttributes<HTMLSpanElement>,
      {
        isRounded?: boolean;
        isDelete?: boolean;
      }
    >,
    BulmaVariantModifier,
    BulmaIsSizeModifier {}

export const Tag: React.FC<TagProps> = props => {
  const {
    className,
    variant,
    isRounded: rounded,
    isDelete,
    children,
    ...rest
  } = props;

  const [bulma] = useBulma(props);
  return (
    <span
      className={clsx(
        "tag",
        bulma,
        {
          "is-rounded": rounded,
          "is-delete": isDelete
        },
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
