import React from "react";
import { Text, TextProps } from "../Text";

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Pick<
      TextProps,
      | "fontSize"
      | "heading"
      | "component"
      | "fontFamily"
      | "fontWeight"
      | "isCased"
      | "isItalic"
      | "isSpaced"
    > {
  readonly component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  readonly isSpaced?: boolean;
}

export const Title: React.FC<TitleProps> = (props) => {
  const { component = "h1", children, ...rest } = props;

  return (
    <Text component={component} {...rest}>
      {children}
    </Text>
  );
};

Title.defaultProps = {
  component: "h1",
  heading: "title",
};
