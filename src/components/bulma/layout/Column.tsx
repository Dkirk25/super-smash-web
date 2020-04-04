import React from "react";
import clsx from "clsx";
import { useBulma } from "../utils/helpers";
import { BulmaComponentProps } from "../types";
import {
  BulmaSpanSizeModifier,
  BulmaSpanOffsetModifier,
  BulmaPercentSpan
} from "../modifiers/span";

export interface ColumnProps
  extends BulmaComponentProps<
      React.HTMLAttributes<HTMLDivElement>,
      { isNarrow?: boolean }
    >,
    BulmaSpanSizeModifier<BulmaPercentSpan>,
    BulmaSpanOffsetModifier<BulmaPercentSpan> {}

export const Column: React.FC<ColumnProps> = props => {
  const {
    children,
    spanSize,
    spanOffset,
    className,
    isNarrow: narrow,
    ...rest
  } = props;
  const [bulma] = useBulma(props);
  return (
    <div
      className={clsx("column", bulma, { "is-narrow": narrow }, className)}
      {...rest}
    >
      {children}
    </div>
  );
};
