import React, { Component } from 'react';
import atmSign from './assets/atm_sign.png';
import './index.css';

class AtmSign extends Component {
	render() {
		return (
			<div>
				<img src={atmSign} className="atm-sign" alt="atm"/>
			</div>
			)
	}

}

export default AtmSign;