import React from "react";

import formatNames from "../helpers/formatNames";

const CharacterMobile = ({ name, select, primary, secondary }) => {
  return (
    <div className="character-mobile-wrapper" onClick={_ => select(name)}>
      <p
        className={`character-mobile-label ${
          name === primary
            ? "primary-name"
            : name === secondary
            ? "secondary-name"
            : null
        }`}
      >{`${formatNames(name)}`}</p>
      <img
        className="character-mobile-icon"
        src={`https://super-smash-ranking.s3.amazonaws.com/stock-icons/${
          name.startsWith("Mii") ? "Mii Fighter" : name
        }.png`}
        alt={name}
      />
    </div>
  );
};

export default CharacterMobile;
