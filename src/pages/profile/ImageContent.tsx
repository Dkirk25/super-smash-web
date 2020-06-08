import React from "react";

import { Box, Column, Content, Columns, Text } from "../../components/bulma";
import { Image } from "../../components/bulma/elements/Image";
import { TabContent } from "../../components/TabContent";
import InfoContent from "./InfoContent";

export interface ImageContentProps {}

// Contains fighters, any other contact info
const ImageContent: React.FC<ImageContentProps> = (props) => {
  return (
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
            Kirkpower
          </Text>
          <Text fontSize={7} fontWeight="bold">
            10th
          </Text>
        </Column>
      </Columns>
    </Image>
  );
};

export default ImageContent;
