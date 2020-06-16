import React from "react";

import { Box, Content, Text } from "../../components/bulma";

export interface RecordContentProps {
  title: string;
  record: string;
}

const RecordContent: React.FC<RecordContentProps> = (props) => {
  return (
    <Box style={{ width: "100%" }}>
      <Content style={{ textAlign: "center" }}>
        <u>
          <Text fontWeight={"bold"} fontSize={1}>
            {props.title}
          </Text>
        </u>
        <Text fontWeight={"bold"} fontSize={1}>
          {props.record}
        </Text>
      </Content>
    </Box>
  );
};

export default RecordContent;
