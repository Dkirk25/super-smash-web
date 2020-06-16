import React from "react";

import {
  Container,
  Box,
  Column,
  Columns,
  Text,
} from "../../../components/bulma";
import ImageContent from "../ImageContent";

export interface PreviousMatchesProps {
  readonly match: IMatch;
}

const PreviousMatches: React.FC<PreviousMatchesProps> = (props) => {
  const { match } = props;
  return (
    <Box style={{ width: "100%" }}>
      <Columns>
        <Column spanSize={"one-third"} style={{ paddingTop: "50px" }}>
          <ImageContent />
        </Column>
        <Column>
          <Container>
            <Text style={{ textAlign: "center" }}>June 7, 2020</Text>
            <Text
              style={{ paddingTop: "30px", textAlign: "center" }}
              fontSize={1}
              fontWeight="bold"
            >
              {match.score.leaderWins} -{" "}
              {match.score.numberOfRounds - match.score.leaderWins}
            </Text>
          </Container>
        </Column>
        <Column spanSize={"one-third"} style={{ paddingTop: "50px" }}>
          <ImageContent />
        </Column>
      </Columns>
    </Box>
  );
};

export default PreviousMatches;
