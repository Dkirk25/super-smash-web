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

export interface PreviousMatchesProps {}

const PreviousMatches: React.FC<PreviousMatchesProps> = (props) => {
  return (
    <TabContent>
      <Text>Hi</Text>
    </TabContent>
  );
};

export default PreviousMatches;
