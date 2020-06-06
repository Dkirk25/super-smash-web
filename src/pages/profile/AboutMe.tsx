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
import { TabContent } from "../../components/TabContent";
import InfoContent from "./InfoContent";

export interface AboutMeProps {
  userDetails: IUser;
}

// Contains fighters, any other contact info
const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <TabContent>
      <Columns>
        <Column spanSize="one-fifth">
          <Content>
            <Text
              fontSize={4}
              fontWeight="bold"
              isCased="caps"
              style={{ textAlign: "center" }}
            >
              Info
            </Text>
            <InfoContent
              titleName="Friend Code:"
              word={props.userDetails.friendCode}
            />
            <InfoContent
              titleName="Full Name:"
              word={props.userDetails.fullName}
            />
            <InfoContent titleName="Email:" word={props.userDetails.email} />
          </Content>
        </Column>

        <Column>
          <Box style={{ width: "100%", height: "auto" }}>
            <Content>
              <Text fontSize={4} fontWeight="bold" isCased="caps">
                MAIN
              </Text>
              <Columns>
                <Column spanSize="one-half">
                  <Image>
                    <img
                      style={{ width: "75%" }}
                      src={props.userDetails.mainCharacter.imageURI}
                      alt="user avatar"
                    />
                  </Image>
                </Column>
                <Column>
                  <Text fontSize={3} fontWeight="bold" isCased="caps">
                    {props.userDetails.mainCharacter.name}
                  </Text>
                </Column>
              </Columns>
              <Text fontSize={4} fontWeight="bold" isCased="caps">
                SECONDARY
              </Text>
              <Columns>
                <Column spanSize="one-half">
                  <Image>
                    <img
                      style={{ width: "75%" }}
                      src={props.userDetails.secondaryCharacter.imageURI}
                      alt="user avatar"
                    />
                  </Image>
                </Column>
                <Column>
                  <Text fontSize={3} fontWeight="bold" isCased="caps">
                    {props.userDetails.secondaryCharacter.name}
                  </Text>
                </Column>
              </Columns>
            </Content>
          </Box>
        </Column>
      </Columns>
    </TabContent>
  );
};

export default AboutMe;
