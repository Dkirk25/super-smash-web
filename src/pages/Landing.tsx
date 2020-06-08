import React from "react";

import {
  Columns,
  Column,
  Container,
  Button,
  Content,
} from "../components/bulma";
import { auth } from "../services/firebase";
import { useUserContext } from "../store/user/hooks";

const creds = {
  email: "test@example.com",
  password: "password",
};

export interface LandingPageProps {}

const Landing: React.FC<LandingPageProps> = (props) => {
  const [user, setUser] = useUserContext();

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(creds.email, creds.password).then((res) => {
      if (res.user) {
        setUser(res.user);
      }
    });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Container>
      <Columns>
        <Column spanSize="full">
          <Content>
            {!user && <Button onClick={handleLogin}>Login</Button>}
            {!!user && <Button onClick={handleLogout}>Logout</Button>}
            {user && (
              <pre style={{ overflowWrap: "break-word" }}>
                {JSON.stringify(user, null, 2)}
              </pre>
            )}
          </Content>
        </Column>
      </Columns>
    </Container>
  );
};

export default Landing;
