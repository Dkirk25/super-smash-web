import "bulma/css/bulma.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./components/profile";
import Results from "./components/results";
import Matches from "./components/matches";
import { Page } from "./components/layout/Page";

const Header = React.lazy(() => import("./components/layout/Header"));
const League = React.lazy(() => import("./pages/LeaguePage"));
const Landing = React.lazy(() => import("./pages/Landing"));
const SignInPage = React.lazy(() => import("./pages/Signin"));
const Signup = React.lazy(() => import("./pages/Signup"));

export interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <Page>
      <React.Suspense fallback={<div>loading...</div>}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/league" component={League} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/matches" component={Matches} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </React.Suspense>
    </Page>
  );
};

export default App;