import * as React from "react";
import clsx from "clsx";

export interface MessageHeaderProps {}

export const MessageHeader: React.FC<MessageHeaderProps> = (props) => {
  const { children } = props;
  return <div className={clsx("message-header")}>{children}</div>;
};
