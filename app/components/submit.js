import React from 'react';

const Submit = ({ func, text }) => {
  return (
    <div className="submit-wrapper">
      <button className="submit" onClick={func}>{text ? text : Submit}</button>
    </div>
  )
}

export default Submit;