import React from "react";
import { Redirect } from "react-router-dom";

import authenticateUser from "../helpers/authenticateUser";
import {
  Columns,
  Column,
  Container,
  Button,
  Content,
} from "../components/bulma";
import { auth } from "../services/firebase";

const creds = {
  email: "test@example.com",
  password: "password",
};

export interface LandingPageProps {}

const Landing: React.FC<LandingPageProps> = (props) => {
  const [user, setUser] = React.useState<firebase.User | null>(null);
  const [token, setToken] = React.useState("");

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(creds.email, creds.password).then((res) => {
      if (res.user) {
        setUser(res.user);
      }
    });
  };

  React.useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
      }
    });
  }, []);

  React.useEffect(() => {
    if (user) {
      user.getIdToken().then((id) => setToken(id));
    }
  }, [user]);

  if (authenticateUser()) {
    return <Redirect to="/league" />;
  } else {
    return (
      <Container>
        <Columns>
          <Column spanSize="full">
            <Content>
              {user && <p>Email: {user.email}</p>}
              {token && (
                <p style={{ overflowWrap: "break-word" }}>Token: {token}</p>
              )}
            </Content>
            {!user && <Button onClick={handleLogin}>Login</Button>}
          </Column>
        </Columns>
      </Container>
    );
  }
};

export default Landing;
