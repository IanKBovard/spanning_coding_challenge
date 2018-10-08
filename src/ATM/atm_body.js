import React, { Component } from 'react';
import AtmCards from './atm_cards.js';
import AtmScreen from './atm_screen.js';
import AtmButton from './atm_button.js'

class AtmBody extends Component {
	render() {
		return (
			<div className="atm-body">
				<AtmCards />
				<AtmButton buttonId="deposit-button" buttonDecoId="deposit-deco" value="deposit"/>
				<AtmButton buttonId="withdraw-button" buttonDecoId="withdraw-deco" value="withdraw"/>
				<AtmButton buttonId="balance-button" buttonDecoId="balance-deco" value="balance"/>
				<AtmButton buttonId="reenter-pin-button" buttonDecoId="reenter-pin-deco" value="reenterPin"/>
				<AtmScreen />
			</div>
			)
	}
}

export default AtmBody;