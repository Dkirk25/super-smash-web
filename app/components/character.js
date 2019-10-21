import React from 'react';


const Character = ({ name, select }) => {
  return (
    <div className="character-img-wrapper">
      <img className="character-img" src={`https://super-smash-ranking.s3.amazonaws.com/${name}.png`} onClick={select}></img>
    </div>
  )
}

export default Character;