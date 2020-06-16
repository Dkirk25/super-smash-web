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
import { ThemeColorVariant } from "../components/bulma/modifiers";
// import { BulmaColor, ThemeColorVariant } from "../components/bulma/modifiers";

export default {
  title: "Navbar",
};

export const basic = () => {
  return (
    <Section style={{ background: "#DDD" }}>
      <Navbar>
        <NavbarBrand>
          <NavbarItem href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma logo"
              height={28}
            />
          </NavbarItem>
          <NavbarBurger />
        </NavbarBrand>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem href="#">Home</NavbarItem>
            <NavbarItem href="#">Documentation</NavbarItem>
            <NavbarDropdown primary="More">
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
    </Section>
  );
};

export const transparent = () => {
  return (
    <Section style={{ background: "#DDD" }}>
      <Navbar isTransparent>
        <NavbarBrand>
          <NavbarItem href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma logo"
              height={28}
            />
          </NavbarItem>
          <NavbarBurger />
        </NavbarBrand>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem href="#">Home</NavbarItem>
            <NavbarItem href="#">Documentation</NavbarItem>
            <NavbarDropdown primary="More" isBoxed>
              <NavbarItem href="#">About</NavbarItem>
              <NavbarItem href="#" isActive>
                Jobs
              </NavbarItem>
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
    </Section>
  );
};

export const spaced = () => {
  return (
    <Section style={{ background: "#DDD" }}>
      <Navbar isSpaced>
        <NavbarBrand>
          <NavbarItem href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma logo"
              height={28}
            />
          </NavbarItem>
          <NavbarBurger />
        </NavbarBrand>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem href="#">Home</NavbarItem>
            <NavbarItem href="#">Documentation</NavbarItem>
            <NavbarDropdown primary="More">
              <NavbarItem href="#">About</NavbarItem>
              <NavbarItem href="#" isActive>
                Jobs
              </NavbarItem>
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
      <Navbar isSpaced>
        <NavbarBrand>
          <NavbarItem href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma logo"
              height={28}
            />
          </NavbarItem>
          <NavbarBurger />
        </NavbarBrand>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem href="#">Home</NavbarItem>
            <NavbarItem href="#">Documentation</NavbarItem>
            <NavbarDropdown primary="More">
              <NavbarItem href="#">About</NavbarItem>
              <NavbarItem href="#" isActive>
                Jobs
              </NavbarItem>
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
    </Section>
  );
};

const colorVariants: Array<ThemeColorVariant> = [
  "primary",
  "secondary",
  "link",
  "info",
  "warning",
  "danger",
  "text",
  "success",
];

export const colors = () => {
  return (
    <Section>
      {colorVariants.map((color) => (
        <Navbar color={color}>
          <NavbarBrand>
            <NavbarItem href="#">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma logo"
                height={28}
              />
            </NavbarItem>
            <NavbarBurger />
          </NavbarBrand>
          <NavbarMenu>
            <NavbarStart>
              <NavbarItem href="#">Home</NavbarItem>
              <NavbarItem href="#">Documentation</NavbarItem>
              <NavbarDropdown primary="More">
                <NavbarItem href="#">About</NavbarItem>
                <NavbarItem href="#" isActive>
                  Jobs
                </NavbarItem>
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
      ))}
    </Section>
  );
};
