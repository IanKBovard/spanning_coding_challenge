import React, { Component } from 'react';
import AtmCards from './atm_cards.js'
class AtmBody extends Component {
	render() {
		return (
			<div className="atm-body">
				<AtmCards />
				this is the body
			</div>
			)
	}
}

export default AtmBody;