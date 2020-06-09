import React from "react";

import { Box, Column, Content, Columns, Text } from "../../components/bulma";
import { Image } from "../../components/bulma/elements/Image";
import { TabContent } from "../../components/TabContent";
import InfoContent from "./InfoContent";
import { useFighters } from "../../store/fighters/hooks";

export interface AboutMeProps {
  userDetails: IUser;
}

// Contains fighters, any other contact info
const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { userDetails } = props;
  const [fighters] = useFighters();

  const [primary, secondary]: [
    IFighter | undefined,
    IFighter | undefined
  ] = React.useMemo(() => {
    if (fighters && userDetails) {
      const mainCharacter = fighters.find(
        (f) => f.id === userDetails.mainCharacter
      );
      const secondaryCharacter = fighters.find(
        (f) => f.id === userDetails.secondaryCharacter
      );
      return [mainCharacter, secondaryCharacter];
    }
    return [undefined, undefined];
  }, [fighters, userDetails]);
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
              word={props.userDetails.switchFriendCode}
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
                      src={primary?.imageURI}
                      alt="user avatar"
                    />
                  </Image>
                </Column>
                <Column>
                  <Text fontSize={3} fontWeight="bold" isCased="caps">
                    {primary?.name}
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
                      src={secondary?.imageURI}
                      alt="user avatar"
                    />
                  </Image>
                </Column>
                <Column>
                  <Text fontSize={3} fontWeight="bold" isCased="caps">
                    {secondary?.name}
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
