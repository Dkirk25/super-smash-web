import React from "react";
import { Link } from "react-router-dom";

const LeagueUser: React.FC<any> = props => {
  const { user, updateUser } = props;
  return (
    <div className="league-user-wrapper">
      {/* <p className="league-user-username" onClick={_=> showProfile(user)}>{user.username}</p> */}
      <Link
        className="league-user-username"
        to={`/profile/${user.id}`}
        onClick={_ => updateUser(user)}
      >
        {user.username}
      </Link>
      <p className="league-user-main">{user.mainCharacter}</p>
      <p className="league-user-points">{user.points}</p>
    </div>
  );
};

export default LeagueUser;
