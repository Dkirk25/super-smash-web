import React from 'react';
import { Link } from 'react-router-dom';

const Back = ({ path }) => {
  return (
    <div className="back-btn-wrapper">
      <Link className="back-btn" to={`/${path}`}>back</Link>
    </div>
  )
}

export default Back;