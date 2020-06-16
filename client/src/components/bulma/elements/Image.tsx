import React from "react";
import clsx from "clsx";

export interface ImageProps extends React.HTMLAttributes<HTMLElement> {
  size?:
    | 16
    | 24
    | 32
    | 48
    | 64
    | 96
    | 128
    | "square"
    | "1x1"
    | "5x4"
    | "4x3"
    | "3x2"
    | "5x3"
    | "16x9"
    | "2x1"
    | "3x1"
    | "4x5"
    | "3x4"
    | "2x3"
    | "3x5"
    | "9x16"
    | "1x2"
    | "1x3";
}

/**
 * Bulma v0.8.1
 *
 * Image: https://bulma.io/documentation/elements/image/
 */
export const Image: React.FC<ImageProps> = props => {
  const { children, className, size, ...rest } = props;
  return (
    <figure
      className={clsx(
        "image",
        {
          "is-16x16": size === 16,
          "is-24x24": size === 24,
          "is-32x32": size === 32,
          "is-48x48": size === 48,
          "is-64x64": size === 64,
          "is-96x96": size === 96,
          "is-128x128": size === 128,
          "is-square": size === "square"
        },
        className
      )}
      {...rest}
    >
      {children}
    </figure>
  );
};
