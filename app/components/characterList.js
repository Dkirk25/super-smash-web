import React, { Component } from 'react';
import Character from './character';

let first = ['Mario', 'Donkey Kong', 'Link', 'Samus', 'Dark Samus', 'Yoshi', 'Kirby', 'Fox', 'Pikachu', 'Luigi', 'Ness', 'Captain Falcon', 'Jigglypuff'];
let second = ['Peach', 'Daisy', 'Bowser', 'Ice Climbers', 'Sheik', 'Zelda', 'Dr. Mario', 'Pichu', 'Falco', 'Marth', 'Lucina', 'Young Link', 'Ganondorf'];
let third = ['Mewtwo', 'Roy', 'Chrom', 'Mr. Game & Watch', 'Meta Knight', 'Pit', 'Dark Pit', 'Zero Suit Samus', 'Wario', 'Snake', 'Ike', 'Pokemon Trainer', 'Diddy Kong'];
let fourth = ['Lucas', 'Sonic', 'King Dedede', 'Olimar', 'Lucario', 'R.O.B.', 'Toon Link', 'Wolf', 'Villager', 'Mega Man', 'Wii Fit Trainer', 'Rosalina & Luma', 'Little Mac'];
let fifth = ['Greninja', 'Palutena', 'PAC-MAN', 'Robin', 'Shulk', 'Bowser Jr.', 'Duck Hunt', 'Ryu', 'Ken', 'Cloud', 'Corrin', 'Bayonetta', 'Inkling'];
let sixth = ['Ridley', 'Simon', 'Richter', 'King K. Rool', 'Isabelle', 'Incineroar', 'Piranha Plant', 'Joker', 'Hero', 'Banjo & Kazooie', 'Mii Brawler', 'Mii Swordfighter', 'Mii Gunner'];

let characters = [first, second, third, fourth, fifth, sixth];

class CharacterList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      primary: '',
      secondary: '',
    }

    this.select = this.select.bind(this);
  }

  select (name) {
    if(name === this.state.primary) {
      this.setState({ primary: '' }, () => {
        this.props.submitCharacters(this.state.primary, this.state.secondary);
      });
    } else if (name === this.state.secondary) {
      this.setState({ secondary: '' }, () => {
        this.props.submitCharacters(this.state.primary, this.state.secondary);
      });
    } else {
      if(!this.state.primary) {
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
      } else {
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
        <div className="character-list-wrapper">{
          characters.map((array, i) => {
            return (
              <div className="character-row-wrapper" key={i}>{
                array.map((name, j) => {
                  return (<Character key={`${i}:${j}`} name={name} select={this.select} primary={this.state.primary} secondary={this.state.secondary}/>)
                })
              }</div>
            )
          })
        }</div>
        </center>
    )
  }
}

export default CharacterList;