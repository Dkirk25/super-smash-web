import React from 'react';

import CharacterList from './characterList';
import CharacterListMobile from './characterListMobile';

import isMobile from '../helpers/isMobile';

const CharacterSelection = ({ submitCharacters, primary, secondary }) => {
  if(isMobile()) {
    return (
      <div>
        <center className="character-label-wrapper-center">
          <div className="character-label-wrapper">
            <p className="character-label">{"Primary:"}</p>
            <p className="primary-label">{`${primary ? primary : '?'}`}</p>
          </div>
          <div className="character-label-wrapper">
            <p className="character-label">{"Secondary:"}</p>
            <p className="secondary-label">{`${secondary ? secondary : '?'}`}</p>
          </div>
        </center>
        <CharacterListMobile submitCharacters={submitCharacters}/>
      </div>
    )
  } else {
    return (
      <div>
        <center className="character-label-wrapper-center">
          <div className="character-label-wrapper">
            <p className="character-label">{"Primary:"}</p>
            <p className="primary-label">{`${primary ? primary : '?'}`}</p>
          </div>
          <div className="character-label-wrapper">
            <p className="character-label">{"Secondary:"}</p>
            <p className="secondary-label">{`${secondary ? secondary : '?'}`}</p>
          </div>
        </center>
        <CharacterList submitCharacters={submitCharacters}/>
      </div>
    )
  }
}

export default CharacterSelection;