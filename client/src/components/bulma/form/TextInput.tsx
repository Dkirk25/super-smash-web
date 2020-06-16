import React from "react";
import clsx from "clsx";

import { useBulma } from "../utils/helpers";
import { BulmaIsSizeModifier, BulmaVariantModifier } from "../modifiers";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    BulmaIsSizeModifier,
    BulmaVariantModifier {}

export const TextInput = React.forwardRef((props: TextInputProps, ref: any) => {
  const { color, className, ...rest } = props;
  const [bulma] = useBulma(props);
  return (
    <input ref={ref} className={clsx("input", bulma, className)} {...rest} />
  );
});
