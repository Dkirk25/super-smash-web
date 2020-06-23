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
import { Image } from "../../components/bulma/elements/Image";
import AboutMe from "./AboutMe";
import PastSeason from "./PastSeason";
import Record from "./Record";
import PreviousMatches from "./previous-matches/PreviousMatches";

import { useCurrentUser } from "../../store/user/hooks";
import { useMatches } from "../../store/matches/hooks";

export interface UserProfileProps {
  readonly content?: any;
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const user = useCurrentUser();
  const [matches] = useMatches();

  const listOfUserMatches: IMatch[] = React.useMemo(() => {
    if (matches && user) {
      const listOfMatches = matches.filter(
        (m) => m.p1Id === user.id || m.p2Id === user.id
      );
      return listOfMatches;
    }
    return [];
  }, [matches, user]);
  console.log(listOfUserMatches);

  const [tab, setTab] = React.useState<string>("record");

  const tabContent = React.useMemo(() => {
    if (user) {
      switch (tab) {
        case "about":
          return <AboutMe userDetails={user} />;
        case "previousMatches":
          return <PreviousMatches matchHistory={listOfUserMatches} />;
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
    }
    return null;
  }, [tab, user, listOfUserMatches]);

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
              <Title>{user?.switchUsername}</Title>
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
