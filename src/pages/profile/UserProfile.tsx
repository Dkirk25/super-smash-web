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
} from "../../components/bulma";
import MockUsers from "../../helpers/users";
import { Image } from "../../components/bulma/elements/Image";
import AboutMe from "./AboutMe";
import PastSeason from "./PastSeason";
import Record from "./Record";
import PreviousMatches from "./PreviousMatches";

export interface UserProfileProps {
  readonly content?: any;
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const [users] = React.useState(MockUsers);
  const user = users[0];

  const [tab, setTab] = React.useState<string>("previousMatches");

  const tabContent = React.useMemo(() => {
    switch (tab) {
      case "about":
        return <AboutMe userDetails={user} />;
      case "previousMatches":
        return <PreviousMatches />;
      case "record":
        return <Record />;
      case "history":
        return <PastSeason />;
      default:
        return (
          <Container>
            <Text>Some UI Error.</Text>
          </Container>
        );
    }
  }, [tab, user]);

  return (
    <Container>
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
        <Tabs
          activeTab={tab}
          onTabChange={setTab}
          isAligned="center"
          isSize="medium"
          isFullWidth
        >
          <Tab tabKey="about" isActive>
            About Me
          </Tab>
          <Tab tabKey="previousMatches">Previous Matches</Tab>
          <Tab tabKey="record">Record</Tab>
          <Tab tabKey="history">Past History</Tab>
        </Tabs>
        {tabContent}
      </Section>
    </Container>
  );
};

export default UserProfile;
