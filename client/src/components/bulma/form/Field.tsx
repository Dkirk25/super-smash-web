import React from "react";
import clsx from "clsx";
import { BulmaVariantModifier } from "../modifiers";

export interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BulmaVariantModifier {
  grouped?: boolean;
  multiline?: boolean;
  hasAddons?: boolean;
  label?: string;
  helpText?: string;
}

/**
 * Bulma v0.8.1
 *
 * Form Field: https://bulma.io/documentation/form/general/#form-field
 */
export const Field: React.FC<FieldProps> = (props) => {
  const {
    children,
    label,
    className,
    multiline,
    grouped,
    hasAddons,
    helpText,
    variant,
    ...rest
  } = props;

  return (
    <div
      className={clsx(
        "field",
        {
          "has-addons": hasAddons,
          "is-grouped": grouped,
          "is-grouped-multiline": multiline,
        },
        className
      )}
      {...rest}
    >
      {label && <label className={clsx("label")}>{label}</label>}
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, {})
      )}
      {helpText && (
        <p
          className={clsx("help", {
            "is-success": variant === "success",
            "is-danger": variant === "danger",
          })}
        >
          {helpText}
        </p>
      )}
    </div>
  );
};
