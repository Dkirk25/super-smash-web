import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Link = props => {
  const { children, ...rest } = props;
  return <RouterLink {...rest}>{children}</RouterLink>;
};
