import React, { Fragment } from 'react';
import isMiiFighter from '../helpers/isMiiFighter';

const StockIcon = ({ name }) => {
  if(name) {
    return (
      <div className="stock-icon-wrapper">
        <img className="stock-icon" src={`https://super-smash-ranking.s3.amazonaws.com/stock-icons/${isMiiFighter(name) ? 'Mii Fighter' : name}.png`}></img>
      </div>
    )
  } else {
    return (
      <div className="stock-icon-placeholder"></div>
    )
  }
}

export default StockIcon;