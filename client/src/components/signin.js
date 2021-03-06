import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

import validate from '../helpers/validate';

import Back from '../utility/back';
import Input from '../utility/input';

class Signin extends Component {
  constructor (props) {
    super(props);

    this.state = {
      login: false,
      error: false
    }

    this.email = React.createRef();
    this.password = React.createRef();

    this.submit = this.submit.bind(this);
  }

  submit () {
    if(validate(this.email.current.value) && validate(this.password.current.value)) {
      Axios.post('https://super-smash-api.herokuapp.com/users/sign_in', {
        'email': this.email.current.value,
        'password': this.password.current.value,
      })
      .then(response => {
        console.log(response);
        this.setState({ login: true });
        this.props.userSignin(response.data);
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
    } else {
      this.setState({ error: true });
    }

  }

  render () {
    return (
      <div>
        <center><Back path=''/></center>
        <Input placeholder="email" ref={this.email} autoType="email" enter={this.submit}/>
        <Input placeholder="password" ref={this.password} autoType="password" enter={this.submit}/>
        <center className="signin-submit-wrapper"><button className="submit" onClick={this.submit}>submit</button></center>
        <center>{this.state.error ? <p className="error-message">email or password is incorrect</p> : <p></p>}</center>
        {this.state.login ? <Redirect to='/league'></Redirect> : null}
      </div>
    )
  }
}

export default Signin;