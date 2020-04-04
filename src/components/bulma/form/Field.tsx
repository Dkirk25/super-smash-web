import React from "react";
import clsx from "clsx";
import { FormControl } from "./FormControl";

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  grouped?: boolean;
  multiline?: boolean;
  hasAddons?: boolean;
  label?: string;
  success?: boolean;
  error?: boolean;
  helpText?: string;
}

/**
 * Bulma v0.8.1
 *
 * Form Field: https://bulma.io/documentation/form/general/#form-field
 */
export const Field: React.FC<FieldProps> = props => {
  const {
    children,
    label,
    className,
    multiline,
    success,
    error,
    grouped,
    hasAddons,
    helpText,
    ...rest
  } = props;
  return (
    <div
      className={clsx(
        "field",
        {
          "has-addons": hasAddons,
          "is-grouped": grouped,
          "is-grouped-multiline": multiline
        },
        className
      )}
      {...rest}
    >
      {label && <label className={clsx("label")}>{label}</label>}
      {!grouped && <FormControl>{children}</FormControl>}
      {grouped && children}
      {helpText && (
        <p
          className={clsx("help", {
            "is-success": success && !error,
            "is-danger": error
          })}
        >
          {helpText}
        </p>
      )}
    </div>
  );
};
