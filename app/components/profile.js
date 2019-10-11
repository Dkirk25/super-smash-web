// show info for a single user

import React from 'react';

const Profile = ({ user, showLeague }) => {

  return (
    <div className="profile-wrapper">
      <p className="profile-username">{user.username}</p>
      <p className="profile-main">{`1. ${user.main}`}</p>
      <p className="profile-secondary">{`2. ${user.secondary}`}</p>
      <p onClick={showLeague}>{'back'}</p>
    </div>
  )
}

export default Profile;