import React, { Component } from 'react';
import cardLogos from './assets/creditcard_sprite.png';

class AtmCards extends Component {
	render() {
		return(
			<div>
				<img src={cardLogos} className="card-logos" alt="logos"/>
			</div>
			)
	}
}
export default AtmCards;