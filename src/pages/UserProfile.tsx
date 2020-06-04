import React from "react";

import {
  Container,
  Box,
  Column,
  Content,
  Columns,
  Title,
  Text,
  Section,
  Tabs,
  Tab,
} from "../components/bulma";
import MockUsers from "../helpers/users";
import { Image } from "../components/bulma/elements/Image";

export interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const [users] = React.useState(MockUsers);
  const user = users[0];

  return (
    <Container>
      {/* Row for Photo left side */}
      <Section>
        <Box style={{ width: "100%", height: "auto" }}>
          <Columns>
            <Column spanSize="one-fifth">
              <Image>
                <img
                  src="http://s3.amazonaws.com/mlg-profile-production/user_avatars/defaultUserAvatar.png"
                  alt="user avatar"
                />
              </Image>
            </Column>

            {/* Username, how long they've been a member, total points  */}
            <Column>
              <Title>{user.username}</Title>
              <Columns>
                <Column spanSize="one-fifth">
                  <Content>
                    <Text fontSize={4} fontWeight="bold" isCased="caps">
                      Member Since
                    </Text>
                    <Text>01/01/2020</Text>
                  </Content>
                </Column>

                <Column>
                  <Content>
                    <Text fontSize={4} fontWeight="bold" isCased="caps">
                      Total Points
                    </Text>
                    <Text>500</Text>
                  </Content>
                </Column>
              </Columns>
            </Column>
          </Columns>
        </Box>
        <Tabs isAligned="center" isSize="medium" isFullWidth>
          <Tab isActive>About Me</Tab>
          <Tab> Previous Matches</Tab>
          <Tab>Record</Tab>
          <Tab>Past History</Tab>
        </Tabs>
      </Section>

      {/* Create naivagation tabs... Maybe have About Me (Contains fighters, any other contact info), Previous matches, Record (wins, losses, total), Previous Season details? */}
    </Container>
  );
};

export default UserProfile;
