import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./utility/header";
import Profile from "./components/profile";
import League from "./components/league";
import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Results from "./components/results";
import Matches from "./components/matches";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: "",
      user: "",
      login: false,
      userid: null
    };

    this.updateUser = this.updateUser.bind(this);
    this.userSignin = this.userSignin.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
  }

  updateUser(user) {
    this.setState({ user });
  }

  userSignin(currentUser) {
    this.setState({ currentUser });
    this.updateUser();
  }

  updateLogin() {
    this.setState({ login: true });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/league">
            <Header login={this.state.login} />
            <League updateUser={this.updateUser} />
          </Route>
          <Route path="/profile">
            <Header login={this.state.login} />
            <Profile user={this.state.user} />
          </Route>
          <Route path="/schedule">
            <Header login={this.state.login} />
            {/* <Schedule /> */}
          </Route>
          <Route path="/results">
            <Header login={this.state.login} />
            <Results />
          </Route>
          <Route path="/matches">
            <Header login={this.state.login} />
            <Matches />
          </Route>
          <Route path="/signin">
            <Header login={this.state.login} />
            <Signin userSignin={this.userSignin} />
          </Route>
          <Route path="/signup">
            <Header login={this.state.login} />
            <Signup userSignin={this.userSignin} />
          </Route>
          <Route path="/">
            <Header login={this.state.login} />
            <Landing />
            {/* <League updateUser={this.updateUser}/>
            <Signup /> */}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

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
