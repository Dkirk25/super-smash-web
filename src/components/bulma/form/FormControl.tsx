import React from "react";
import clsx from "clsx";

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  expanded?: boolean;
}

export const FormControl: React.FC<FormControlProps> = props => {
  const { className, children, expanded, ...rest } = props;
  return (
    <div
      className={clsx("control", { "is-expanded": expanded }, className)}
      {...rest}
    >
      {children}
    </div>
  );
};
