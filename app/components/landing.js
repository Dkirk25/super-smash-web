import React from 'react';
import Header from './header';

const Landing = ({ showLogin, showSignup }) => {
  return (
    <div>
      <center>
        <div className="landing-login-wrapper">
          <button className="landing-login-btn" onClick={showLogin}>login</button>
        </div>
        <div className="landing-signup-wrapper">
          <button className="landing-signup-btn" onClick={showSignup}>signup</button>
        </div>
      </center>
    </div>
  )
}

export default Landing;