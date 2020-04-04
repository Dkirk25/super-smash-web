import React from "react";
import { Redirect } from "react-router-dom";

import Back from "../utility/back";
import FighterSelection from "../components/FighterSelection";
import {
  Container,
  Columns,
  Column,
  TextInput,
  Field,
  Button,
  ButtonList,
} from "../components/bulma";

export interface SignUpProps {
  userSignin: (user: any) => void;
  mobile?: boolean;
}

const Signup: React.FC<SignUpProps> = (props) => {
  const firstName: any = React.useRef();
  const lastName: any = React.useRef();
  const email: any = React.useRef();
  const username: any = React.useRef();
  const encryptedPassword: any = React.useRef();
  const friendCode: any = React.useRef();

  const [primary, setPrimary] = React.useState<string | undefined>(undefined);
  const [secondary, setSecondary] = React.useState<string | undefined>(
    undefined
  );
  const [login] = React.useState(false);

  const handleSubmit = (primary?: string, secondary?: string) => {
    setPrimary(primary);
    setSecondary(secondary);
  };

  const submit = () => {
    console.log("Values");
  };

  if (login) {
    return <Redirect to="/league" />;
  }

  return (
    <Container>
      <Columns align="center">
        <Column spanSize={4}>
          <Back path="" />
          <Field>
            <TextInput placeholder="first name" ref={firstName} />
          </Field>
          <Field>
            <TextInput placeholder="last name" ref={lastName} />
          </Field>
          <Field>
            <TextInput placeholder="email" ref={email} />
          </Field>
          <Field>
            <TextInput placeholder="password" ref={encryptedPassword} />
          </Field>
          <Field>
            <TextInput placeholder="switch username" ref={username} />
          </Field>
          <Field>
            <TextInput placeholder="friend code" ref={friendCode} />
          </Field>
          <ButtonList>
            <Button>Cancel</Button>
            <Button onClick={submit}>Submit</Button>
          </ButtonList>
        </Column>
      </Columns>
      <Columns>
        <Column spanSize={12}>
          <FighterSelection
            // mobile={props.mobile}
            primary={primary}
            secondary={secondary}
            submitCharacters={handleSubmit}
          />
        </Column>
      </Columns>
    </Container>
  );
};

export default Signup;
