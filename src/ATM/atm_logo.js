import React, { Component } from 'react';
import atmLogo from './assets/atm_sign.png';
import logoGraffiti from './assets/graffiti.png'

class AtmLogo extends Component {
	render() {
		return (
			<div className="atm-logo-container">
				<img src={atmLogo} className="atm-logo" alt="atm-logo"/>
				<img src={logoGraffiti} className="logo-graffiti"/>
			</div>
			)
	}

}
//color is #126CAE
export default AtmLogo;