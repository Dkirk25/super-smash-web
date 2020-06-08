import React from "react";

import { Column, Columns } from "../../components/bulma";
import PreviousMatchContent from "./PreviousMatchContent";

export interface PreviousMatchesProps {}

const PreviousMatches: React.FC<PreviousMatchesProps> = (props) => {
  return (
    <Columns>
      <Column spanSize={"one-half"}></Column>
      <Column>
        {/* Call api endpoint to get list of previous matches??? */}
        <PreviousMatchContent />
        <PreviousMatchContent />
        <PreviousMatchContent />
      </Column>
      <Column></Column>
    </Columns>
  );
};

export default PreviousMatches;
