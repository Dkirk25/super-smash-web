// root component: handle navigation and pass props

import React, { Component } from 'react';
import Header from './header';
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

let dave = {
  username: 'Redd_Eyezz',
  main: 'Luigi',
  secondary: 'Ice Climbers',
  score: '200',
  wins: '20',
  losses: '2',
  league: 'salty suite'
}

let cody = {
  username: 'MakeMeInk',
  main: 'Dark Pit',
  secondary: 'Zero Suit Samus',
  score: '190',
  wins: '19',
  losses: '3',
  league: 'salty suite'
}

let colby = {
  username: 'Bone',
  main: 'Pikachu',
  secondary: 'Ganondorf',
  score: '140',
  wins: '14',
  losses: '8',
  league: 'salty suite'
}

let person = {
  username: 'Human',
  main: 'Mario',
  secondary: 'Hero',
  score: '220',
  wins: '22',
  losses: '0',
  league: 'salty suite'
}

let users = sort([steve, kirk, javi, dave, cody, colby, person]);



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
          <Header />
          <League users={users} showProfile={this.showProfile}/>
        </div>
      )
    } else if (this.state.focus === 'profile') {
      return (
        <div>
          <Header />
          <Profile user={this.state.user} showLeague={this.showLeague}/>
        </div>
      )
    }
  }
}

export default Root;