import React from "react";

import {
  Container,
  Columns,
  Column,
  Table,
  TableRow,
} from "../components/bulma";
import MockUsers from "../helpers/users";

export interface LeaguePageProps {}
const LeaguePage: React.FC<LeaguePageProps> = (props) => {
  const [users] = React.useState(MockUsers);

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
              </tr>
            </thead>
            <tbody>
              {users.map((user: IUser) => {
                return (
                  <TableRow key={user.id}>
                    <td>{user.switchUsername}</td>
                    <td>{user.mainCharacter}</td>
                    <td>{user.secondaryCharacter}</td>
                  </TableRow>
                );
              })}
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

export default LeaguePage;
