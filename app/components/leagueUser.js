// show a single user as a row in the league view

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const LeagueUser = ({ user, updateUser }) => {
  return (
    <div className="league-user-wrapper">
      {/* <p className="league-user-username" onClick={_=> showProfile(user)}>{user.username}</p> */}
      <Link className="league-user-username" to='/profile' onClick={_=>updateUser(user)}>{user.username}</Link>
      <p className="league-user-main">{user.main}</p>
      <p className="league-user-points">{user.score}</p>
    </div>
  )
}

export default LeagueUser;