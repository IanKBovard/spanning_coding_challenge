import React, { Component } from 'react';
import AtmCards from './atm_cards.js';
import AtmScreen from './atm_screen.js';
import AtmButtons from './atm_buttons.js'

class AtmBody extends Component {
	render() {
		return (
			<div className="atm-body">
				<AtmCards />
				<AtmButtons />
				<AtmScreen />
			</div>
			)
	}
}

export default AtmBody;