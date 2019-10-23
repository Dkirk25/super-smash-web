import React from 'react';

const CharacterMobile = ({ name, select, primary, secondary }) => {
  return (
    <div className="character-mobile-wrapper" onClick={_=>select(name)}>
      <p className="character-mobile-label">{`${name}`}</p>
      <img className="character-mobile-icon" src={`https://super-smash-ranking.s3.amazonaws.com/stock-icons/${name}.png`}></img>
    </div>
  )
}

export default CharacterMobile;