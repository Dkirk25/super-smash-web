import React from "react";

import { Column, Columns, Text } from "../../components/bulma";
import { Image } from "../../components/bulma/elements/Image";

export interface ImageContentProps {
  imageUrl: string;
  title: string;
}

const ImageContent: React.FC<ImageContentProps> = (props) => {
  return (
    <Columns>
      <Column spanSize="one-half">
        <Image>
          <img
            style={{ width: "75%" }}
            src={props.imageUrl}
            alt="user avatar"
          />
        </Image>
      </Column>
      <Column>
        <Text fontSize={3} fontWeight="bold" isCased="caps">
          {props.title}
        </Text>
      </Column>
    </Columns>
  );
};

export default ImageContent;
