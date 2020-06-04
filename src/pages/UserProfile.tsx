import React from "react";

import {
  Container,
  Box,
  Column,
  Content,
  Columns,
  Title,
  Navbar,
  Section,
  NavbarEnd,
  NavbarMenu,
  NavbarStart,
  NavbarItem,
  NavbarDropdown,
  NavbarDivider,
  NavbarBrand,
  NavbarBurger,
  ButtonList,
  Button,
} from "../components/bulma";
import MockUsers from "../helpers/users";

export interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const [users] = React.useState(MockUsers);
  const user = users[0];

  return (
    <Container>
      {/* Row for Photo left side */}
      <Section>
        <Columns>
          <Column spanSize="one-fifth">
            <Box />
          </Column>

          {/* Username, how long they've been a member, total points  */}
          <Column>
            <Title style={{ paddingBottom: "10%" }}>{user.username}</Title>
            <Columns>
              <Column spanSize="one-fifth">
                <Content>
                  <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                    Member Since
                  </span>
                  <Content>
                    <span style={{ fontSize: "18px" }}>01/01/2020</span>
                  </Content>
                </Content>
              </Column>

              <Column>
                <Content>
                  <span style={{ fontWeight: "bold", fontSize: "24px" }}>
                    Total Points
                  </span>
                  <Content>
                    <span style={{ fontSize: "18px" }}>500</span>
                  </Content>
                </Content>
              </Column>
            </Columns>
          </Column>
        </Columns>
      </Section>

      <Section>
        <Navbar isSpaced>
          <NavbarMenu>
            <NavbarStart>
              <NavbarItem style={{ fontSize: "24px" }} href="#">
                About Me
              </NavbarItem>
              <NavbarItem style={{ fontSize: "24px" }} href="#">
                Previous Matches
              </NavbarItem>
              <NavbarItem style={{ fontSize: "24px" }} href="#">
                Record
              </NavbarItem>
              <NavbarItem style={{ fontSize: "24px" }} href="#">
                Past History
              </NavbarItem>
            </NavbarStart>
          </NavbarMenu>
        </Navbar>
      </Section>

      {/* Create naivagation tabs... Maybe have About Me (Contains fighters, any other contact info), Previous matches, Record (wins, losses, total), Previous Season details? */}
    </Container>
  );
};

export default UserProfile;
