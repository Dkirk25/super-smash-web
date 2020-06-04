import React from "react";

import { Container, Box, Column, Content, Columns } from "../components/bulma";
import MockUsers from "../helpers/users";

export interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const [users] = React.useState(MockUsers);
  const user = users[0];

  return (
    <Container>
      {/* Row for Photo left side */}
      <Columns>
        <Column spanSize="one-fifth">
          <Box />
        </Column>

        {/* Username, how long they've been a member, total points  */}
        <Column>Hi</Column>
      </Columns>

      {/* Create naivagation tabs... Maybe have About Me (Contains fighters, any other contact info), Previous matches, Record (wins, losses, total), Previous Season details? */}

      <div className="league-title-wrapper">
        <p className="league-title">League Leaderboard</p>
      </div>
      <div className="league-user-wrapper-main">
        <div className="league-user-wrapper">
          <p className="league-header-username">Username</p>
          <p className="league-header-main">Main</p>
          <p className="league-header-points">Score</p>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
