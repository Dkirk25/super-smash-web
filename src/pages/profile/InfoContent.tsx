import React from "react";

import { Column, Columns, Text } from "../../components/bulma";

export interface InfoContentProps {
  titleName: string;
  word: string;
}

const InfoContent: React.FC<InfoContentProps> = (props) => {
  return (
    <Columns>
      <Column spanSize="one-third">
        <Text fontSize={6} fontWeight="bold">
          {props.titleName}
        </Text>
      </Column>
      <Column>
        <Text>{props.word}</Text>
      </Column>
    </Columns>
  );
};

export default InfoContent;
