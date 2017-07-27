import React, { Component } from 'react';

import Board from '../containers/Board';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Game Of Life</h1>
        <Board />
        <footer className="footer">
          <p>Created by: <a href="https://github.com/alan2207" target="_blank">Alan</a></p>
        </footer>
      </div>
      
    );
  }
}
