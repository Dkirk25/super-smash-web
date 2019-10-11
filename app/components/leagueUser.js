// show a single user as a row in the league view

import React from 'react';

const LeagueUser = ({ user, showProfile }) => {
  return (
    <div className="league-user-wrapper">
      <p className="league-user-username" onClick={_=> showProfile(user)}>{user.username}</p>
      <p className="league-user-main">{user.main}</p>
      <p className="league-user-points">{user.score}</p>
    </div>
  )
}

export default LeagueUser;