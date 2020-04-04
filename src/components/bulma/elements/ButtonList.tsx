import React from "react";
import clsx from "clsx";

export interface ButtonListProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Bulma v0.8.1
 *
 * Button List: https://bulma.io/documentation/elements/button/#list-of-buttons
 */
export const ButtonList: React.FC<ButtonListProps> = props => {
  const { className, children, ...rest } = props;
  return (
    <div className={clsx("buttons", className)} {...rest}>
      {children}
    </div>
  );
};
