import React from 'react';
import Header from './header';

const Landing = ({ showSignin, showSignup }) => {
  return (
    <div>
      <center>
        <div className="landing-signin-wrapper">
          <button className="landing-signin-btn" onClick={showSignin}>Sign In</button>
        </div>
        <div className="landing-signup-wrapper">
          <button className="landing-signup-btn" onClick={showSignup}>Sign Up</button>
        </div>
      </center>
    </div>
  )
}

export default Landing;