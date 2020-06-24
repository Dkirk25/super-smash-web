import React from "react";

import { Column, Columns, Text } from "../../components/bulma";
import { Image } from "../../components/bulma/elements/Image";

export interface ImageContentProps {
  player?: IUser | any;
}

// Contains fighters, any other contact info
const ImageContent: React.FC<ImageContentProps> = (props) => {
  const { player } = props;

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
            {player.switchUsername}
          </Text>
          <Text fontSize={7} fontWeight="bold">
            {player.totalGamesPlayed}
          </Text>
        </Column>
      </Columns>
    </Image>
  );
};

export default ImageContent;
