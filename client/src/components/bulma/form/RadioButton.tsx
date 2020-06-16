import React from "react";
import clsx from "clsx";

export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelPosition?: "left" | "right";
  name: string;
}

export const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { className, labelPosition, children, ...rest } = props;
  return (
    <label className={clsx("radio", className)}>
      {labelPosition === "left" && children}
      {labelPosition === "left" && " "}
      <input type="radio" {...rest} />{" "}
      {(!labelPosition || labelPosition === "right") && children}
    </label>
  );
};
