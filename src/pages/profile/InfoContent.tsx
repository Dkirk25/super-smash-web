import React from "react";

import { Column, Columns, Text } from "../../components/bulma";

export interface InfoContentProps {
  titleName: string;
  word?: string;
}

const InfoContent: React.FC<InfoContentProps> = (props) => {
  const { titleName, word } = props;
  return (
    <Columns>
      <Column spanSize="one-third">
        <Text fontSize={6} fontWeight="bold">
          {titleName}
        </Text>
      </Column>
      {word && (
        <Column>
          <Text>{word}</Text>
        </Column>
      )}
    </Columns>
  );
};

export default InfoContent;
