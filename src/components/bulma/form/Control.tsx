import React from "react";
import clsx from "clsx";
import { TextInputProps } from "./TextInput";
import { SelectProps } from "./Select";
import { ButtonProps } from "../elements/Button";
import { BulmaVariantModifier } from "../modifiers";

type ControlChild = TextInputProps | SelectProps | ButtonProps;

export interface ControlProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BulmaVariantModifier {
  expanded?: boolean;
  hasLeftIcons?: boolean;
  hasRightIcons?: boolean;
  children?:
    | React.ReactElement<ControlChild>
    | Array<React.ReactElement<ControlChild>>;

  /**
   * Passthrough prop from Field
   */
  success?: boolean;
  /**
   * Passthrough prop from Field
   */
  error?: boolean;
}

export const Control: React.FC<ControlProps> = (props) => {
  const {
    className,
    children,
    expanded,
    hasLeftIcons,
    hasRightIcons,
    success,
    error,
    variant,
    ...rest
  } = props;

  const child = React.Children.map(children, (child: any) =>
    React.cloneElement(child, {})
  );

  return (
    <div
      className={clsx(
        "control",
        {
          "is-expanded": expanded,
          "has-icons-left": hasLeftIcons,
          "has-icons-right": hasRightIcons,
        },
        className
      )}
      {...rest}
    >
      {child}
    </div>
  );
};
