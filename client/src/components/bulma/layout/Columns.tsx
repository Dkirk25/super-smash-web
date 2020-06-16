import React from "react";
import clsx from "clsx";
import { BulmaComponentProps } from "../types";
import { useBulma } from "../utils/helpers";

export interface ColumnsProps
  extends BulmaComponentProps<
    React.HTMLAttributes<HTMLDivElement>,
    {
      isVariable?: boolean;
      isVerticallyCentered?: boolean;
      isGapless?: boolean;
      isMultiline?: boolean;
      isCentered?: boolean;
      hasAddons?: boolean;
      isMobile?: boolean;
      isDesktop?: boolean;
    },
    "color"
  > {}

export const Columns: React.FC<ColumnsProps> = (props) => {
  const {
    isVerticallyCentered,
    isMobile,
    isCentered,
    isDesktop,
    children,
    className,
    hasAddons,
    isGapless,
    isMultiline,
    isVariable,
    ...rest
  } = props;

  const [bulma] = useBulma(props);
  return (
    <div
      className={clsx(
        "columns",
        bulma,
        {
          "has-addons": hasAddons,
          "is-gapless": isGapless,
          "is-multiline": isMultiline,
          "is-mobile": isMobile,
          "is-desktop": isDesktop,
          "is-centered": isCentered,
          "is-variable": isVariable,
          "is-vcentered": isVerticallyCentered,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
