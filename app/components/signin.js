import React, { Component } from 'react';
import Axios from 'axios';
import Back from './back';
import Input from './input';

class Signin extends Component {
  constructor (props) {
    super(props);

    this.email = React.createRef();
    this.password = React.createRef();

    this.submit = this.submit.bind(this);
  }

  submit () {
    Axios.post('https://super-smash-api.herokuapp.com/users/sign_in', {
      'email': this.email.current.value,
      'password': this.password.current.value || ''
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <Back func={this.props.showLanding}/>
        <Input placeholder="email" ref={this.email}/>
        <Input placeholder="password" ref={this.password}/>
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default Signin;