import React from "react";
import clsx from "clsx";

import { BulmaIsSizeModifier } from "../modifiers";
import { useBulma } from "../utils/helpers";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    BulmaIsSizeModifier {
  component?: React.ElementType;
  options?: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = (props) => {
  const { isSize, component = "div", children, options, ...rest } = props;

  const bulma = useBulma(props);

  const containerClassName = clsx("select", bulma, {});

  const child = React.useMemo(() => <select {...rest}>{children}</select>, [
    children,
    rest,
  ]);

  return React.createElement(
    component,
    { className: containerClassName },
    child
  );
};
