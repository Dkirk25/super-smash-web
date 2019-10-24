// show all users in a league

import React, { Component } from 'react';
import Axios from 'axios';

import example from '../helpers/users';

import LeagueUser from './leagueUser';

class League extends Component {

  constructor (props) {
    super(props);

    this.state = {
      users: [],
    }
  }

  componentDidMount () {
    Axios.get('https://super-smash-api.herokuapp.com/users')
    .then(response => {
      console.log(response);
      this.setState({ users: response.data });
    })
    .catch(error => console.log(error));
  }

  render () {
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
                <p className="league-header-username">Username</p>
                <p className="league-header-main">Main</p>
                <p className="league-header-points">Score</p>
              </div>
              {this.state.users.map((user, i) => {
                return(<LeagueUser user={user} key={i} updateUser={this.props.updateUser}/>)
              })}
            </center>
          </div>
      </div>
    )
  }
}

export default League;