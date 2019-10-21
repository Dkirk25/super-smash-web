// root component: handle navigation and pass props

import React, { Component } from 'react';
import Header from './header';
import Profile from './profile';
import League from './league';
import Landing from './landing';
import Signin from './signin';
import Signup from './signup';

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
      focus: 'landing',
      user: '',
      userid: null,
    }

    this.showProfile = this.showProfile.bind(this);
    this.showLeague = this.showLeague.bind(this);
    this.showSignin = this.showSignin.bind(this);
    this.showSignup = this.showSignup.bind(this);
    this.showLanding = this.showLanding.bind(this);
    this.checkCookie = this.checkCookie.bind(this);
  }

  showProfile (user) {
    this.setState({ focus: 'profile', user })
  }

  showLeague () {
    this.setState({ focus: 'league' });
  }

  showLanding () {
    this.setState({ focus: 'landing' })
  }

  showSignin () {
    this.setState({ focus: 'signin' });
  }

  showSignup () {
    this.setState({ focus: 'signup' });
  }

  checkCookie () {
    console.log(document.cookie.userid);
    let cookie = document.cookie.split(';').filter((string) => {
      if(string.substring(0,6) === 'userid') return string;
    })[0];

    if(cookie) {
      this.setState({ userid: cookie.split('=')[1], focus: 'league' });
    }
  }

  componentDidMount () {
    this.checkCookie();
  }

  render () {
    if(this.state.userid) {
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
      } else if (this.state.focus === 'signin') {
        return (
          <div>
            <Header />
            <Signin />
          </div>
        )
      } else if (this.state.focus === 'signup') {

      }
    } 
    
    else {
      if(this.state.focus === 'signin') {
        return (
          <div>
            <Header />
            <Signin showLanding={this.showLanding}/>
          </div>
        )
      } else if (this.state.focus === 'signup') {
        return (
          <div>
            <Header />
            <Signup showLanding={this.showLanding}/>
          </div>
        )
      } else if (this.state.focus === 'landing') {
        return (
          <div>
            <Header />
            <Landing showSignin={this.showSignin} showSignup={this.showSignup}/>
          </div>
        )
      }
    }
  }
}

export default Root;