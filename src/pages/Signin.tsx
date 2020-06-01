import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

import {
  Button,
  Columns,
  Column,
  Container,
  TextInput,
  ButtonList,
} from "../components/bulma";
import { Field } from "../components/bulma/form/Field";

export interface SignInPageProps extends RouteComponentProps {
  userSignin: (user: any) => void;
}

const SignInPage: React.FC<SignInPageProps> = (props) => {
  const { history } = props;

  const onBack = React.useCallback(() => history.goBack(), [history]);
  const [login] = React.useState(false);
  const [error] = React.useState(false);

  const email = React.useRef();
  const password = React.useRef();

  const submit = () => {};

  if (login) {
    return <Redirect to="/league" />;
  }

  return (
    <Columns isCentered>
      <Column spanSize="one-quarter">
        <Container style={{ textAlign: "center" }}>
          <Field>
            <TextInput placeholder="Email" ref={email} onSubmit={submit} />
          </Field>
          <Field>
            <TextInput
              placeholder="Password"
              ref={password}
              onSubmit={submit}
            />
          </Field>
          <ButtonList>
            <Button onClick={onBack}>Back</Button>
            <Button onClick={submit}>Login</Button>
          </ButtonList>
        </Container>
      </Column>
    </Columns>
  );
};

export default SignInPage;
