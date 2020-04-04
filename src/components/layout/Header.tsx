import React from "react";
import { Container, Column, Columns } from "../bulma";
import { Image } from "../bulma/elements/Image";

// TODO: show navigation options if user is signed in
// login = bool

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Container style={{ paddingTop: 16, paddingBottom: 16 }}>
      <Columns>
        <Column
          spanSize="one-third"
          spanOffset="one-third"
          style={{ textAlign: "center" }}
        >
          <Image size="1x1">
            <img src="./Smash.png" alt="Smash Logo" />
          </Image>
        </Column>
      </Columns>
    </Container>
  );
};

export default Header;
