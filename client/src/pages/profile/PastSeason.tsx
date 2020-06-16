import React from "react";

import { Text } from "../../components/bulma";
import { TabContent } from "../../components/TabContent";

export interface PastSeasonProps {}

const PastSeason: React.FC<PastSeasonProps> = (props) => {
  return (
    <TabContent>
      {/* Little dropdown panel that shows Season 1, Season 2, etc... When you click it, an arrow points down with stats from that season. */}
      <Text>Hi</Text>
    </TabContent>
  );
};

export default PastSeason;
