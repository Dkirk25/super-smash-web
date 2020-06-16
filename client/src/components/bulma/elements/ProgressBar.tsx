import React from "react";
import clsx from "clsx";

import { BulmaComponentProps } from "../types";
import { useBulma } from "../utils/helpers";
import { BulmaIsSizeModifier, BulmaVariantModifier } from "../modifiers";

export interface ProgressBarProps
  extends BulmaComponentProps<
      React.HTMLAttributes<HTMLDivElement>,
      {
        value?: number;
        max?: number;
        label?: string | ((value: number) => string | number);
      }
    >,
    BulmaIsSizeModifier,
    BulmaVariantModifier {}

/**
 * Bulma v0.8.1
 *
 * ProgressBar: https://bulma.io/documentation/elements/progress/
 */
export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const { className, value, max, label } = props;

  const [bulma] = useBulma(props);

  const renderValue = React.useMemo(() => {
    if (typeof label === "function" && value !== undefined) {
      return label(value);
    }
    return label;
  }, [label, value]);

  return (
    <progress
      max={max}
      value={value}
      className={clsx("progress", bulma, className)}
    >
      {renderValue}
    </progress>
  );
};
