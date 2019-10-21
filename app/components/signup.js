import React, { Component } from 'react';
import Axios from 'axios';
import Back from './back';
import Input from './input';
import CharacterList from './characterList';

class Signup extends Component {
  constructor (props) {
    super(props);

    this.state = {

    }

    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.email = React.createRef();
    this.username = React.createRef();
    this.mainCharacter = React.createRef();
    this.secondaryCharacter = React.createRef();
    this.encryptedPassword = React.createRef();
    this.friendCode = React.createRef();

    this.submit = this.submit.bind(this);
  }

  submit () {
    Axios.post('https://super-smash-api.herokuapp.com/users/sign_up', {
      'firstName': this.firstName.current.value,
      'lastName': this.lastName.current.value,
      'email': this.email.current.value,
      'username': this.username.current.value,
      'mainCharacter': this.mainCharacter.current.value,
      'secondaryCharacter': this.secondaryCharacter.current.value,
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
        <Input placeholder="switch username" ref={this.username}/>
        <Input placeholder="main" ref={this.mainCharacter}/>
        <Input placeholder="secondary" ref={this.secondaryCharacter}/>
        <Input placeholder="password" ref={this.encryptedPassword}/>
        <Input placeholder="friend code" ref={this.friendCode}/>
        <CharacterList />
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default Signup;