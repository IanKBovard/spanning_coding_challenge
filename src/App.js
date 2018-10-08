import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AtmSign from './ATM/atm_sign'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <AtmSign />
      </div>
    );
  }
}

export default App;
