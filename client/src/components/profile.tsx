import React from "react";

import Back from "../utility/back";

const Profile: React.FC<any> = props => {
  const { user } = props;
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
      <p className="profile-username">{user.username}</p>
      <p className="profile-score">{`${user.points}`}</p>
      <span
        id="primary"
        className="profile-primary"
      >{`${user.mainCharacter}`}</span>
      {/* <span onMouseLeave={hidePrimary} id="primary-label" className="hidden">{'Primary'}</span> */}
      <p className="profile-secondary">{`${user.secondaryCharacter}`}</p>
      <Back path="league" />
    </div>
  );
};

export default Profile;
