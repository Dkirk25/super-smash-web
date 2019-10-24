// show info for a single user

import React from 'react';
import Axios from 'axios';

import Back from './back';

const Profile = ({ user }) => {
  // let user;
  // let id = window.location.pathname.split('/profile/')[1];
  // Axios.get(`https://super-smash-ranking.herokuapp.com/users/${id}`)
  // .then(response => {
  //   console.log(response);
  //   user = response.data
  // })
  // .catch(error => console.log(error));
  return (
    <div className="profile-wrapper">
      <center>
        <p className="profile-username">{user.username}</p>
        <p className="profile-score">{`${user.points}`}</p>
        <span id="primary" className="profile-primary">{`${user.mainCharacter}`}</span>
        {/* <span onMouseLeave={hidePrimary} id="primary-label" className="hidden">{'Primary'}</span> */}
        <p className="profile-secondary">{`${user.secondaryCharacter}`}</p>
        <Back path='league'/>
      </center>
    </div>
  )
}

export default Profile;