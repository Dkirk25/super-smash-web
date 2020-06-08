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
import ImageContent from "./ImageContent";

export interface PreviousMatchesProps {}

const PreviousMatches: React.FC<PreviousMatchesProps> = (props) => {
  return (
    <Columns>
      <Column spanSize={"one-half"}></Column>
      <Column>
        <Box style={{ width: "100%" }}>
          <Columns>
            <Column spanSize={"one-third"} style={{ paddingTop: "50px" }}>
              <ImageContent />
            </Column>
            <Column>
              <Container>
                <Text style={{ textAlign: "center" }}>June 7, 2020</Text>
                <Text
                  style={{ paddingTop: "30px", textAlign: "center" }}
                  fontSize={1}
                  fontWeight="bold"
                >
                  7 - 1
                </Text>
              </Container>
            </Column>
            <Column style={{ paddingTop: "50px" }}>
              <Image>
                <img
                  style={{ width: "100%" }}
                  src="http://s3.amazonaws.com/mlg-profile-production/user_avatars/defaultUserAvatar.png"
                  alt="user avatar"
                />
                <Columns>
                  <Column>
                    <Text fontSize={7} fontWeight="bold">
                      Name:
                    </Text>
                    <Text fontSize={7} fontWeight="bold">
                      Ranked:
                    </Text>
                  </Column>
                  <Column>
                    <Text fontSize={7} fontWeight="bold">
                      Miguel
                    </Text>
                    <Text fontSize={7} fontWeight="bold">
                      11th
                    </Text>
                  </Column>
                </Columns>
              </Image>
            </Column>
          </Columns>
        </Box>
      </Column>
      <Column></Column>
    </Columns>
  );
};

export default PreviousMatches;
