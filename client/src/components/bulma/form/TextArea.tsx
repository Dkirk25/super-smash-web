import React from "react";
import clsx from "clsx";

import { useBulma } from "../utils/helpers";
import { BulmaIsSizeModifier, BulmaVariantModifier } from "../modifiers";

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    BulmaIsSizeModifier,
    BulmaVariantModifier {}

export const TextArea = React.forwardRef((props: TextAreaProps, ref: any) => {
  const { color, className, ...rest } = props;
  const [bulma] = useBulma(props);
  return (
    <textarea
      ref={ref}
      className={clsx("textarea", bulma, className)}
      {...rest}
    ></textarea>
  );
});
