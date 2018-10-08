import React, { Component } from 'react';
import AtmLogo from './atm_logo.js';
import AtmBody from './atm_body.js';
import './index.css';


class ATM extends Component {
  render() {
    return ( 
      <div className="ATM">
        <AtmLogo />
        <AtmBody />
      </div>
    );
  }
}

export default ATM;
