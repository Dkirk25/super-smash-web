import React, { Component } from 'react';
import Axios from 'axios';
import Back from './back';
import Input from './input';
import Submit from './submit';
import CharacterList from './characterList';

class Signup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      primary: '',
      secondary: '',
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
    Axios.post('https://super-smash-api.herokuapp.com/users/sign_up', {
      'firstName': this.firstName.current.value,
      'lastName': this.lastName.current.value,
      'email': this.email.current.value,
      'username': this.username.current.value,
      'mainCharacter': this.state.primary,
      'secondaryCharacter': this.state.secondary,
      'encryptedPassword': this.encryptedPassword.current.value,
      'friendCode': this.friendCode.current.value
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  render () {
    return (
      <div>
        <Back func={this.props.showLanding}/>
        <Input placeholder="first name" ref={this.firstName}/>
        <Input placeholder="last name" ref={this.lastName}/>
        <Input placeholder="email" ref={this.email}/>
        <Input placeholder="password" ref={this.encryptedPassword}/>
        <Input placeholder="switch username" ref={this.username}/>
        <Input placeholder="friend code" ref={this.friendCode}/>
        <center className="character-label-wrapper">
          <div>
            <p className="character-label">{"Primary:"}</p>
            <p className="primary-label">{`${this.state.primary ? this.state.primary : '?'}`}</p>
          </div>
          <div>
            <p className="character-label">{"Secondary:"}</p>
            <p className="secondary-label">{`${this.state.secondary ? this.state.secondary : '?'}`}</p>
          </div>
        </center>
        <CharacterList submitCharacters={this.submitCharacters}/>
        <center><Submit func={this.submit} text="Submit"/></center>
      </div>
    )
  }
}

export default Signup;