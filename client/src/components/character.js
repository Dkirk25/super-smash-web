import React from "react";
import formatNames from "../helpers/formatNames";

// TODO:
// finish resizing all character models

const Character = ({ name, select, primary, secondary }) => {
  return (
    <div
      className={`character-img-wrapper ${
        primary === name ? "primary" : secondary === name ? "secondary" : null
      }`}
      onClick={_ => select(name)}
    >
      <img
        className={`character-img ${name}`}
        src={`https://super-smash-ranking.s3.amazonaws.com/portraits/${name}.png`}
        alt={name}
      />
      <p
        className={`character-name ${
          primary === name
            ? "primary-name"
            : secondary === name
            ? "secondary-name"
            : null
        }`}
      >{`${formatNames(name)}`}</p>
    </div>
  );
};

export default Character;
