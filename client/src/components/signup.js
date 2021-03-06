import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

import Back from "../utility/back";
import Input from "../utility/input";
import Submit from "../utility/submit";
import CharacterSelection from "./characterSelection";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: "",
      secondary: "",
      login: false
    };

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

  submitCharacters(primary, secondary) {
    this.setState({ primary, secondary });
  }

  submit() {
    Axios.post("https://super-smash-api.herokuapp.com/users/sign_up", {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      email: this.email.current.value,
      username: this.username.current.value,
      mainCharacter: this.state.primary,
      secondaryCharacter: this.state.secondary,
      encryptedPassword: this.encryptedPassword.current.value,
      friendCode: this.friendCode.current.value
    })
      .then(response => {
        console.log(response);
        this.setState({ login: true });
        this.props.userSignin({
          firstName: this.firstName.current.value,
          lastName: this.lastName.current.value,
          email: this.email.current.value,
          username: this.username.current.value,
          mainCharacter: this.state.primary,
          secondaryCharacter: this.state.secondary,
          encryptedPassword: this.encryptedPassword.current.value,
          friendCode: this.friendCode.current.value
        });
      })
      .catch(error => {
        console.log(error);
        // tell the user they fucked up...
      });
  }

  render() {
    return (
      <div>
        <center>
          <Back path="" />
        </center>
        <Input placeholder="first name" ref={this.firstName} />
        <Input placeholder="last name" ref={this.lastName} />
        <Input placeholder="email" ref={this.email} />
        <Input placeholder="password" ref={this.encryptedPassword} />
        <Input placeholder="switch username" ref={this.username} />
        <Input placeholder="friend code" ref={this.friendCode} />
        <CharacterSelection
          mobile={this.props.mobile}
          primary={this.state.primary}
          secondary={this.state.secondary}
          submitCharacters={this.submitCharacters}
        />
        <center className="signup-submit-center">
          <Submit func={this.submit} text="Submit" />
        </center>
        {this.state.login ? <Redirect to="/league"></Redirect> : null}
      </div>
    );
  }
}

export default Signup;
