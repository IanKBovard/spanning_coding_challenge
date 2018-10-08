import React, { Component } from 'react';
import AtmCards from './atm_cards.js';
import AtmScreen from './atm_screen.js';
import AtmButton from './atm_button.js'

class AtmBody extends Component {
	render() {
		return (
			<div className="atm-body">
				<AtmCards />
				<AtmScreen />
				<AtmButton />
			</div>
			)
	}
}

export default AtmBody;