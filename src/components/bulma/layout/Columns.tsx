import React from "react";
import clsx from "clsx";
import { BulmaComponentProps } from "../types";
import { useBulma } from "../utils/helpers";

export interface ColumnsProps
  extends BulmaComponentProps<
    React.HTMLAttributes<HTMLDivElement>,
    {
      gapless?: boolean;
      multiline?: boolean;
      align?: "center" | "right";
      hasAddons?: boolean;
      mobile?: boolean;
      desktop?: boolean;
    },
    "color"
  > {}

export const Columns: React.FC<ColumnsProps> = props => {
  const {
    mobile,
    align,
    desktop,
    children,
    className,
    hasAddons,
    gapless,
    multiline,
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
          "is-gapless": gapless,
          "is-multiline": multiline,
          "is-mobile": mobile,
          "is-desktop": desktop
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
