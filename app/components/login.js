import React from 'react';
import Back from './back';

const Login = ({ showLanding }) => {
  return (
    <div>
      <Back func={showLanding}/>
      <input id="login-username" type="text" placeholder="username"></input>
      <input id="login-password" type="text" placeholder="password"></input>
    </div>
  )
}

export default Login;