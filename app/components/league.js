// show all users in a league

import React from 'react';
import Axios from 'axios';

import users from '../helpers/users';

import LeagueUser from './leagueUser';

const League = ({ updateUser }) => {
  // Axios.get('https://super-smash-api.herokuapp.com/users')
  // .then(response => console.log(response))
  // .catch(error => console.log(error));
  return (
    <div>
      <center>
        <div className="league-title-wrapper">
          <p className="league-title">League Leaderboard</p>
        </div>
      </center>
        <div className="league-user-wrapper-main">
          <center>
            <div className="league-user-wrapper">
              <p className="league-user-username league-header">Username</p>
              <p className="league-user-main league-header">Main</p>
              <p className="league-user-points league-header">Score</p>
            </div>
            {users.map((user, i) => {
              return(<LeagueUser user={user} key={i} updateUser={updateUser}/>)
            })}
          </center>
        </div>
    </div>
  )
}

export default League;