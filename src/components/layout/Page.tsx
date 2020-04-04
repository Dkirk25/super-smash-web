import React from "react";

export interface PageProps {}

export const Page: React.FC<PageProps> = props => {
  const { children } = props;
  return <div style={{ minHeight: "100vh" }}>{children}</div>;
};
