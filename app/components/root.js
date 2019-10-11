// root component: handle navigation and pass props

import React, { Component } from 'react';
import Profile from './profile';
import League from './league';

import sort from './sort';

let steve = {
  username: 'let',
  main: 'Ness',
  secondary: 'Zelda',
  score: '80',
  wins: '8',
  losses: '14',
  league: 'salty suite'
}

let kirk = {
  username: 'Kirkpower',
  main: 'Captain Falcon',
  secondary: 'Isabelle',
  score: '120',
  wins: '12',
  losses: '10',
  league: 'salty suite'
}

let javi = {
  username: 'Javi',
  main: 'Snake',
  secondary: 'Donkey Kong',
  score: '150',
  wins: '15',
  losses: '7',
  league: 'salty suite'
}

let users = sort([steve, kirk, javi]);



class Root extends Component {
  constructor () {
    super();

    this.state = {
      focus: 'league',
      user: ''
    }

    this.showProfile = this.showProfile.bind(this);
    this.showLeague = this.showLeague.bind(this);
  }

  showProfile (user) {
    this.setState({ focus: 'profile', user })
  }

  showLeague () {
    this.setState({ focus: 'league' });
  }

  render () {
    if(this.state.focus === 'league') {
      return (
        <div>
          <League users={users} showProfile={this.showProfile}/>
        </div>
      )
    } else if (this.state.focus === 'profile') {
      return (
        <div>
          <center>
            <Profile user={this.state.user} showLeague={this.showLeague}/>
          </center>
        </div>
      )
    }
  }
}

export default Root;