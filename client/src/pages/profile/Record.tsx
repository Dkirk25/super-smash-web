import React from "react";

import { Column, Columns } from "../../components/bulma";
import { TabContent } from "../../components/TabContent";
import RecordContent from "./RecordContent";

export interface RecordProps {}

const Record: React.FC<RecordProps> = (props) => {
  return (
    <TabContent>
      <Columns>
        <Column spanSize={"one-third"}>
          <RecordContent title={"WINS"} record={"10"} />
        </Column>
        <Column>
          <RecordContent title={"TOTAL"} record={"15"} />
        </Column>
        <Column>
          <RecordContent title={"LOSSES"} record={"5"} />
        </Column>
      </Columns>
    </TabContent>
  );
};

export default Record;
