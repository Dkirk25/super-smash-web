import React from "react";
import clsx from "clsx";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "left" | "right";
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { className, labelPosition, children, ...rest } = props;
  return (
    <label className={clsx("checkbox", className)}>
      {labelPosition === "left" && children}
      {labelPosition === "left" && " "}
      <input type="checkbox" {...rest} />{" "}
      {(!labelPosition || labelPosition === "right") && children}
    </label>
  );
};
