import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Header from '../utility/header';
import authenticateUser from '../helpers/authenticateUser';

const Landing = (props) => {
  if(authenticateUser()) {
    return (<Redirect to='/league'></Redirect>);
  } else {
    return (
      <div>
        <center>
          <div className="landing-wrapper">
            {/* <button className="landing-signin-btn" onClick={showSignin}>Sign In</button> */}
            <Link className="landing-btn" to='/signin'>Sign In</Link>
          </div>
          <div className="landing-wrapper">
            {/* <button className="landing-btn" onClick={showSignup}>Sign Up</button> */}
            <Link className="landing-btn" to='/signup'>Sign Up</Link>
          </div>
        </center>
      </div>
    )
  }
}

export default Landing;