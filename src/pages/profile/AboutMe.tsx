import React from "react";

import { Box, Column, Content, Columns, Text } from "../../components/bulma";
import { Image } from "../../components/bulma/elements/Image";
import { TabContent } from "../../components/TabContent";
import InfoContent from "./InfoContent";
import { useFighters } from "../../store/fighters/hooks";
import { useFirebaseImageURI } from "../../hooks/firebase";

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
        (f) => f.id === userDetails.mFighterId
      );
      const secondaryCharacter = fighters.find(
        (f) => f.id === userDetails.sFighterId
      );
      return [mainCharacter, secondaryCharacter];
    }
    return [undefined, undefined];
  }, [fighters, userDetails]);

  const primaryImgRef = useFirebaseImageURI(primary?.imageURI);
  const secondaryRef = useFirebaseImageURI(secondary?.imageURI);
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
                      ref={primaryImgRef}
                      style={{ width: "75%" }}
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
                      ref={secondaryRef}
                      style={{ width: "75%" }}
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
      <pre>Fighters: {JSON.stringify(fighters, null, 2)}</pre>
    </TabContent>
  );
};

export default AboutMe;
