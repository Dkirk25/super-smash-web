import "bulma/css/bulma.css";
import React from "react";

import {
  Container,
  Section,
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarDivider,
  NavbarDropdown,
  NavbarStart,
  NavbarEnd,
  Button,
  ButtonList,
} from "../components/bulma";
// import { BulmaColor, ThemeColorVariant } from "../components/bulma/modifiers";

export default {
  title: "Navbar",
};

export const basic = () => {
  return (
    <Section>
      <Container>
        <Navbar>
          <NavbarBrand>
            <NavbarItem href="#">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma logo"
                width={112}
                height={28}
              />
            </NavbarItem>
            <NavbarBurger />
          </NavbarBrand>
          <NavbarMenu>
            <NavbarStart>
              <NavbarItem href="#">Home</NavbarItem>
              <NavbarItem href="#">Documentation</NavbarItem>
              <NavbarDropdown isExpanded primary="More">
                <NavbarItem href="#">About</NavbarItem>
                <NavbarItem href="#">Jobs</NavbarItem>
                <NavbarItem href="#">Contact</NavbarItem>
                <NavbarDivider />
                <NavbarItem href="#">Report an issue</NavbarItem>
              </NavbarDropdown>
            </NavbarStart>
            <NavbarEnd>
              <ButtonList>
                <Button>Sign Up</Button>
                <Button>Sign In</Button>
              </ButtonList>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      </Container>
    </Section>
  );
};
