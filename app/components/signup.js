import React, { Component } from 'react';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Back from './back';
import Input from './input';
import Submit from './submit';
import CharacterList from './characterList';
import StockIcon from './stockIcon';

class Signup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      primary: '',
      secondary: '',
      login: false
    }

    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.username = React.createRef();
    this.primaryCharacter = React.createRef();
    this.secondaryCharacter = React.createRef();
    this.encryptedPassword = React.createRef();
    this.friendCode = React.createRef();

    this.submit = this.submit.bind(this);
    this.submitCharacters = this.submitCharacters.bind(this);
  }

  submitCharacters (primary, secondary) {
    this.setState({ primary, secondary });
  }

  submit () {
    // Axios.post('https://super-smash-api.herokuapp.com/users/sign_up', {
    //   'firstName': this.firstName.current.value,
    //   'lastName': this.lastName.current.value,
    //   'email': this.email.current.value,
    //   'username': this.username.current.value,
    //   'mainCharacter': this.state.primary,
    //   'secondaryCharacter': this.state.secondary,
    //   'encryptedPassword': this.encryptedPassword.current.value,
    //   'friendCode': this.friendCode.current.value
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => {
    //   console.log(error);
    // })
    
    this.setState({ login: true })
  }

  render () {
    return (
      <div>
        <center><Back path=''/></center>
        <Input placeholder="first name" ref={this.firstName}/>
        <Input placeholder="last name" ref={this.lastName}/>
        <Input placeholder="email" ref={this.email}/>
        <Input placeholder="password" ref={this.encryptedPassword}/>
        <Input placeholder="switch username" ref={this.username}/>
        <Input placeholder="friend code" ref={this.friendCode}/>
        <center className="character-label-wrapper-center">
          <div className="character-label-wrapper">
            <p className="character-label">{"Primary:"}</p>
            <p className="primary-label">{`${this.state.primary ? this.state.primary : '?'}`}</p>
            {/* <StockIcon name={this.state.primary}/> */}
          </div>
          <div className="character-label-wrapper">
            <p className="character-label">{"Secondary:"}</p>
            <p className="secondary-label">{`${this.state.secondary ? this.state.secondary : '?'}`}</p>
            {/* <StockIcon name={this.state.secondary}/> */}
          </div>
        </center>
        <CharacterList submitCharacters={this.submitCharacters}/>
        <center><Submit func={this.submit} text="Submit"/></center>
        {this.state.login ? <Redirect to='/league'></Redirect> : null}
      </div>
    )
  }
}

export default Signup;