import React, { Component } from 'react';
import AtmScreenText from './atm_screen_text.js';

class AtmScreen extends Component {
	render() {
		return (
			<div className="atm-screen">
				<AtmScreenText />
			</div>
			)
	}
}

export default AtmScreen;