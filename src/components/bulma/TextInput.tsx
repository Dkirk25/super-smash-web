import React from "react";
import clsx from "clsx";
import { BulmaComponentProps } from "./types";
import { useBulma } from "./utils/helpers";
import { BulmaColor } from "./modifiers";

export interface TextInputProps
  extends BulmaComponentProps<
    React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    {
      color?: BulmaColor;
    }
  > {}

export const TextInput = React.forwardRef((props: TextInputProps, ref: any) => {
  const { color, className, ...rest } = props;
  const [bulma] = useBulma(props);
  return (
    <input ref={ref} className={clsx("input", bulma, className)} {...rest} />
  );
});
