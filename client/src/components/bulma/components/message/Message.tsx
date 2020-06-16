import * as React from "react";
import clsx from "clsx";
import { BulmaColor } from "../../modifiers";

export interface MessageProps {
  readonly color?: BulmaColor;
}

export const Message: React.FC<MessageProps> = (props) => {
  const { children, color } = props;
  return (
    <article
      className={clsx("message", {
        [`is-${color}`]: !!color,
      })}
    >
      {children}
    </article>
  );
};
