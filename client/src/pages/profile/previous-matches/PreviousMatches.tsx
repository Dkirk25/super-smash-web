import React from "react";

import { Column, Columns } from "../../../components/bulma";
import PreviousMatchContent from "./PreviousMatchContent";

export interface PreviousMatchesProps {
  matchHistory: IMatch[];
  users: IUser[];
}

const PreviousMatches: React.FC<PreviousMatchesProps> = (props) => {
  const { matchHistory, users } = props;

  return (
    <Columns>
      <Column spanSize={"one-half"}></Column>
      <Column>
        {matchHistory.map((match: IMatch) => (
          <PreviousMatchContent key={match.id} match={match} users={users} />
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
