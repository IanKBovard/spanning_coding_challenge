import React, { Component } from 'react';
import AtmSign from './atm_sign.js';
import AtmBody from './atm_body.js';
import './index.css';


class ATM extends Component {
  render() {
    return ( 
      <div className="ATM">
        <AtmSign />
        <AtmBody />
      </div>
    );
  }
}

export default ATM;
