import React from "react";

import { Column, Columns } from "../../../components/bulma";
import PreviousMatchContent from "./PreviousMatchContent";

export interface PreviousMatchesProps {
  readonly matchHistory: ReadonlyArray<IMatch>;
}

const PreviousMatches: React.FC<PreviousMatchesProps> = (props) => {
  const { matchHistory } = props;
  return (
    <Columns>
      <Column spanSize={"one-half"}></Column>
      <Column>
        {matchHistory.map((match: IMatch) => (
          <PreviousMatchContent match={match} />
        ))}
      </Column>
      <Column></Column>
    </Columns>
  );
};

export default PreviousMatches;
