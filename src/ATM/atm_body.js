import React, { Component } from 'react';
import AtmScreen from './atm_screen.js';
import AtmButtons from './atm_buttons.js'

import spanningLogo from './assets/spanning_systems.png';
import bodyGraffiti from './assets/sticker_graf.png';

class AtmBody extends Component {
	render() {
		return (
			<div className="atm-body">
				<AtmButtons />
				<AtmScreen />
				<img className='spanning-logo' alt='spanning-logo' src={spanningLogo}/>
				<img className='body-graffiti' alt='body-graffiti' src={bodyGraffiti}/>
			</div>
			)
	}
}

export default AtmBody;