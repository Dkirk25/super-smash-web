// show all users in a league

import React from 'react';
import LeagueUser from './leagueUser';

const League = ({ users, showProfile }) => {
  return (
    <div>
      <center>
        <div className="league-title-wrapper">
          <p className="league-title">League Leaderboard</p>
        </div>
        <div className="league-user-wrapper">
          <p className="league-user-username league-header">Username</p>
          <p className="league-user-main league-header">Main</p>
          <p className="league-user-points league-header">Score</p>
        </div>
        {users.map((user, i) => {
          return(<LeagueUser user={user} key={i} showProfile={showProfile}/>)
        })}
      </center>
    </div>
  )
}

export default League;