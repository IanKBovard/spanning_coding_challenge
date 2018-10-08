import React, { Component } from 'react';
import './App.css';
import ATM from './ATM/atm_complete.js'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <ATM />
      </div>
    );
  }
}

export default App;
