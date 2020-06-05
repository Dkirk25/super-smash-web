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
import { TabContent } from "../../components/TabContent";

export interface SeasonProps {}

//  (wins, losses, total)
const Season: React.FC<SeasonProps> = (props) => {
  return (
    <TabContent>
      <Text>Hi</Text>
    </TabContent>
  );
};

export default Season;
