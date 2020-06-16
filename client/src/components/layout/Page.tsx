import React from "react";

import { useUserContext } from "../../store/user/hooks";
import { auth } from "../../services/firebase";

export interface PageProps {}

export const Page: React.FC<PageProps> = (props) => {
  const [, setUser] = useUserContext();
  React.useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);
  const { children } = props;
  return <div style={{ minHeight: "100vh" }}>{children}</div>;
};
