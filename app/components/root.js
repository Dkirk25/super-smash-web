// root component: handle navigation and pass props

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './header';
import Profile from './profile';
import League from './league';
import Landing from './landing';
import Signin from './signin';
import Signup from './signup';

class Root extends Component {
  constructor () {
    super();

    this.state = {
      focus: 'landing',
      user: '',
      userid: null,
    }

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser (user) {
    this.setState({ user });
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route path='/league'>
            <Header />
            <League updateUser={this.updateUser}/>
          </Route>
          <Route path='/profile'>
            <Header />
            <Profile user={this.state.user}/>
          </Route>
          <Route path='/schedule'>
            <Header />
            {/* <Schedule /> */}
          </Route>
          <Route path='/signin'>
            <Header />
            <Signin />
          </Route>
          <Route path='/signup'>
            <Header />
            <Signup />
          </Route>
          <Route path='/'>
            <Header />
            <Landing />
            {/* <Signup /> */}
          </Route>
        </Switch>
      </Router>
    )
  }
}


export default Root;




// ** ** ** ** ** ** ** ** ** ** **
// OLD ROUTING

// if(this.state.focus === 'league') {
//   return (
//     <div>
//       <Header />
//       <League users={users} showProfile={this.showProfile}/>
//     </div>
//   )
// } else if (this.state.focus === 'profile') {
//   return (
//     <div>
//       <Header />
//       <Profile user={this.state.user} showLeague={this.showLeague}/>
//     </div>
//   )
// } else if (this.state.focus === 'signin') {
//   return (
//     <div>
//       <Header />
//       <Signin />
//     </div>
//   )
// } else if (this.state.focus === 'signup') {

// }



// if(this.state.focus === 'signin') {
//   return (
//     <div>
//       <Header />
//       <Signin showLanding={this.showLanding}/>
//     </div>
//   )
// } else if (this.state.focus === 'signup') {
//   return (
//     <div>
//       <Header />
//       <Signup showLanding={this.showLanding}/>
//     </div>
//   )
// } else if (this.state.focus === 'landing') {
//   return (
//     <div>
//       <Header />
//       <Landing showSignin={this.showSignin} showSignup={this.showSignup}/>
//     </div>
//   )
// }

// ** ** ** ** ** ** ** ** ** ** **