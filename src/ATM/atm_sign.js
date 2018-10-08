import React, { Component } from 'react';
import atmLogo from './assets/atm_sign.png';
import logoGraffiti from './assets/graffiti.png'
import './index.css';

class AtmSign extends Component {
	render() {
		return (
			<div className="atm-logo-container">
				<img src={atmLogo} className="atm-logo" alt="atm-logo"/>
				<img src={logoGraffiti} className="logo-graffiti"/>
			</div>
			)
	}

}

export default AtmSign;