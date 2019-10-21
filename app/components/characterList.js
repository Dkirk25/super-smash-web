import React, { Component } from 'react';
import Character from './character';

class CharacterList extends Component {
  constructor (props) {
    super(props)

    this.select = this.select.bind(this);
  }

  select (event) {
    console.log('Mario was selected');
  }

  render () {
    return (
      <div>
        <Character name="mario" select={this.select}/>
      </div>
    )
  }
}

export default CharacterList;