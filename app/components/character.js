import React from 'react';
import isMiiFighter from '../helpers/isMiiFighter';

// TODO:
// make a helper function to handle all the special names and edge cases

const Character = ({ name, select, primary, secondary }) => {
  return (
    <div className={`character-img-wrapper ${primary === name ? "primary" : secondary === name ? "secondary" : null}`} onClick={_=>select(name)}>
      <img className={`character-img ${name}`} src={`https://super-smash-ranking.s3.amazonaws.com/portraits/${name}.png`}></img>
      <p className={`character-name ${primary === name ? "primary-name" : secondary === name ? "secondary-name" : null}`}>{`${name === 'Pokemon Trainer' ? 'POKÉMON TRAINER' : name.toUpperCase()}`}</p>
    </div>
  )
}

export default Character;