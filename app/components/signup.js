import React from 'react';
import Back from './back';

const Signup = ({ showLanding }) => {
  return (
    <div>
      <Back func={showLanding}/>
    </div>
  )
}

export default Signup;