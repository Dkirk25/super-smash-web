import React from 'react';

// TODO: show navigation options if user is signed in
// login = bool

const Header = ({ login }) => {
  return (
    <div className="header-wrapper">
      <center>
        <img className="smash-logo" src="./Smash.png"></img>
      </center>
    </div>
  )
}

export default Header;