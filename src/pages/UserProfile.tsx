import React from "react";

import {
  Container,
  Columns,
  Column,
  Table,
  TableRow,
} from "../components/bulma";
import MockUsers from "../helpers/users";

export interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const [users] = React.useState(MockUsers);
  const user = users[0];

  return (
    <Container>
      <Columns>
        <Column spanSize={4}>
          <Table bordered>
            <thead>
              <tr>
                <th>Username</th>
                <th>Primary</th>
                <th>Secondary</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                <TableRow key={user.id}>
                <td>{user.username}</td>
                <td>{user.mainCharacter}</td>
                <td>{user.secondaryCharacter}</td>
                <td>{user.points}</td>
                </TableRow>
            </tbody>
          </Table>
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
        </Column>
      </Columns>
    </Container>
  );
};

export default UserProfile;
