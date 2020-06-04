import React from "react";
import clsx from "clsx";
import { useBulma } from "../utils/helpers";
import { BulmaComponentProps } from "../types";
import {
  BulmaVariantModifier,
  BulmaIsSizeModifier,
  ThemeColorVariant,
} from "../modifiers";

export interface ButtonProps
  extends BulmaComponentProps<React.ButtonHTMLAttributes<HTMLButtonElement>>,
    BulmaVariantModifier,
    BulmaIsSizeModifier {
  readonly color?: ThemeColorVariant;
  readonly isDelete?: boolean;
  readonly isOutlined?: boolean;
  readonly isInverted?: boolean;
  readonly isFullWidth?: boolean;
  readonly isRounded?: boolean;
  readonly isLoading?: boolean;
  readonly isSelected?: boolean;
  readonly isFocused?: boolean;
  readonly isActive?: boolean;
  readonly isStatic?: boolean;
}

/**
 * Bulma v0.8.1
 *
 * Button: https://bulma.io/documentation/elements/button/
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    isSelected: selected,
    color,
    variant,
    isSize,
    children,
    className,
    isOutlined: outlined,
    isInverted: inverted,
    isFullWidth,
    isRounded: rounded,
    isLoading: loading,
    isFocused,
    isStatic,
    isActive,
    isDelete,
    ...rest
  } = props;

  const [bulma] = useBulma(props);
  return (
    <button
      className={clsx(
        bulma,
        {
          [`is-${color}`]: !!color,
          button: !isDelete,
          delete: isDelete,
          "is-active": isActive,
          "is-static": isStatic,
          "is-focused": isFocused,
          "is-selected": selected,
          "is-loading": loading,
          "is-rounded": rounded,
          "is-inverted": inverted,
          "is-outlined": outlined,
          "is-fullwidth": isFullWidth,
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
