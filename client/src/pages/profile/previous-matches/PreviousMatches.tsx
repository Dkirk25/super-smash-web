import React from "react";

import { Column, Columns } from "../../../components/bulma";
import PreviousMatchContent from "./PreviousMatchContent";

export interface PreviousMatchesProps {
  matchHistory: IMatch[];
}

const PreviousMatches: React.FC<PreviousMatchesProps> = (props) => {
  const { matchHistory } = props;
  return (
    <Columns>
      <Column spanSize={"one-half"}></Column>
      <Column>
        {matchHistory.map((match: IMatch) => (
          <PreviousMatchContent key={match.id} match={match} />
        ))}
      </Column>
      <Column></Column>
    </Columns>
  );
};

PreviousMatches.defaultProps = {
  matchHistory: [],
};

export default PreviousMatches;
