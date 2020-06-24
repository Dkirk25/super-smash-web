import React from "react";

import {
  Container,
  Box,
  Column,
  Columns,
  Text,
} from "../../../components/bulma";
import ImageContent from "../ImageContent";

export interface PreviousMatchContentProps {
  match: IMatch;
  users: IUser[];
}

const PreviousMatchContent: React.FC<PreviousMatchContentProps> = (props) => {
  const { match, users } = props;

  const [player1, player2]: [
    IUser | undefined,
    IUser | undefined
  ] = React.useMemo(() => {
    if (users && match) {
      const p1 = users.find((u) => u.id === match.p1Id);
      const p2 = users.find((u) => u.id === match.p2Id);
      return [p1, p2];
    }
    return [undefined, undefined];
  }, [users, match]);

  return (
    <Box style={{ width: "100%" }}>
      <Columns>
        <Column spanSize={"one-third"} style={{ paddingTop: "50px" }}>
          <ImageContent player={player1} />
        </Column>
        <Column>
          <Container>
            <Text style={{ textAlign: "center" }}>{match.start}</Text>
            <Text
              style={{ paddingTop: "30px", textAlign: "center" }}
              fontSize={1}
              fontWeight="bold"
            >
              {match.matchScore.leaderWins} -{" "}
              {match.matchScore.numberOfRounds - match.matchScore.leaderWins}
            </Text>
          </Container>
        </Column>
        <Column spanSize={"one-third"} style={{ paddingTop: "50px" }}>
          <ImageContent player={player2} />
        </Column>
      </Columns>
    </Box>
  );
};

export default PreviousMatchContent;
