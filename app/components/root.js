import React, { Component } from 'react';

let user = {
  username: 'let',
  main: 'Ness',
  secondary: 'Zelda',
  score: '560',
  wins: '12',
  losses: '10',
}

class Root extends Component {
  constructor () {
    super();

  }

  render () {
    return (
      <div>{'HI :)'}</div>
    )
  }
}

export default Root;