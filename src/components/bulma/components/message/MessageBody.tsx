import * as React from "react";
import clsx from "clsx";

export interface MessageBodyProps {}

export const MessageBody: React.FC<MessageBodyProps> = (props) => {
  const { children } = props;
  return <div className={clsx("message-body")}>{children}</div>;
};
