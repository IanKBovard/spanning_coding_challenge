import React, { Component } from 'react';
import starLogo from './assets/star_logo.png';
import pulseLogo from './assets/pulse_logo.png';
import maestroLogo from './assets/maestro_logo.png';
import mastercardLogo from './assets/mastercard_logo.png';
import plusLogo from './assets/plus_logo.png';
import visaLogo from './assets/visa_logo.png';

import starSelected from './assets/star_selected.png';
import pulseSelected from './assets/pulse_selected.png';
import maestroSelected from './assets/maestro_selected.png';
import mastercardSelected from './assets/mastercard_selected.png';
import plusSelected from './assets/plus_selected.png';
import visaSelected from './assets/visa_selected.png';

class AtmCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'none'
		};
	}
	render() {
		return(
			<div className="card-logos">
				<img src={starLogo} className="star-logo" alt="star"/>
				<img src={pulseLogo} className="pulse-logo" alt="pulse"/>
				<img src={maestroLogo} className="maestro-logo" alt="maestro"/>
				<img src={mastercardLogo} className="mastercard-logo" alt="mastercard"/>
				<img src={plusLogo} className="plus-logo" alt="plus"/>
				<img src={visaLogo} className="visa-logo" alt="visa"/>
			</div>
			)
	}
}
export default AtmCards;