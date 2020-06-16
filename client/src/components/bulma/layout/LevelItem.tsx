import React from "react";
import clsx from "clsx";

import { BulmaComponentProps } from "../types";
import { useBulma } from "../utils/helpers";

export interface LevelProps
  extends BulmaComponentProps<React.HTMLAttributes<HTMLDivElement>> {
  side?: "left" | "right";
}

export const Level: React.FC<LevelProps> = props => {
  const { side, className, children, ...rest } = props;
  const [bulma] = useBulma(props);
  return (
    <div
      className={clsx(
        bulma,
        {
          "level-item": !side,
          "level-left": side === "left",
          "level-right": side === "right"
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
