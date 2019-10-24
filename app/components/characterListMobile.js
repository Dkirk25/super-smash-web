import React, { Component } from 'react';

import CharacterMobile from './characterMobile';

import characters from '../helpers/characters';
import queries from '../helpers/urlQueries';

class CharacterListMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: '',
      secondary: '',
    }

    this.select = this.select.bind(this);
  }

  select (name) {
    // if { primary } is set, reset it
    if(name === this.state.primary) {
      window.navigator.vibrate([75, 30, 75]);
      this.setState({ primary: '' }, () => {
        this.props.submitCharacters(this.state.primary, this.state.secondary);
      });
    }
    // if { secondary } is set, reset it
    else if (name === this.state.secondary) {
      window.navigator.vibrate([75, 30, 75]);
      this.setState({ secondary: '' }, () => {
        this.props.submitCharacters(this.state.primary, this.state.secondary);
      });
    } else {
      // if { primary } is not set, set it
      if(!this.state.primary) {
        window.navigator.vibrate(75);
        this.setState({ primary: name }, () => {
          if(this.state.secondary) {
            // send main and secondary back to sign up
            console.log('Primary:', this.state.primary);
            console.log('Secondary:', this.state.secondary);
            this.props.submitCharacters(this.state.primary, this.state.secondary);
          } else {
            this.props.submitCharacters(this.state.primary, this.state.secondary);
          }
        });
      } 
      // if { secondary } is not set, set it
      else {
        window.navigator.vibrate(75);
        this.setState({ secondary: name }, () => {
          // send main and secondary back to sign up
          console.log('Primary:', this.state.primary);
          console.log('Secondary:', this.state.secondary);
          this.props.submitCharacters(this.state.primary, this.state.secondary);
        });
      }
    }
  }

  render () {
    return (
      <center>
        <div className={`character-list-mobile-wrapper`} id="rgb-box">
          <div className="character-list-mobile">
            {characters.list.map((name, i) => (
            <CharacterMobile name={name} select={this.select} primary={this.state.primary} secondary={this.state.secondary} key={i}/>
            ))}
          </div>
        </div>
      </center>
    )
  }
}

export default CharacterListMobile;