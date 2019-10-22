import React from 'react';
import isMiiFighter from '../helpers/isMiiFighter';

const Character = ({ name, select, primary, secondary }) => {
  return (
    <div className={`character-img-wrapper ${primary === name ? "primary" : secondary === name ? "secondary" : null}`} onClick={_=>select(name)}>
      <img className={`character-img ${name}`} src={`https://super-smash-ranking.s3.amazonaws.com/portraits/${name}.png`}></img>
      <p className="character-name">{`${name.toUpperCase()}`}</p>
    </div>
  )
}

export default Character;