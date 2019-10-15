// show info for a single user

import React from 'react';
import Back from './back';

const Profile = ({ user, showLeague }) => {

  const showPrimary = (event) => {
    event.currentTarget.className = "hidden";
    document.getElementById('primary-label').className = "profile-primary-label";
  }

  const hidePrimary = (event) => {
    event.currentTarget.className = "hidden";
    document.getElementById('primary').className = "profile-primary";
  }

  return (
    <div className="profile-wrapper">
      <center>
        <p className="profile-username">{user.username}</p>
        <p className="profile-score">{`${user.score}`}</p>
        <span id="primary" className="profile-primary">{`${user.main}`}</span>
        {/* <span onMouseLeave={hidePrimary} id="primary-label" className="hidden">{'Primary'}</span> */}
        <p className="profile-secondary">{`${user.secondary}`}</p>
        <Back func={showLeague}/>
      </center>
    </div>
  )
}

export default Profile;