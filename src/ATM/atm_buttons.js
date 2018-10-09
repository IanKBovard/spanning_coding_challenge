import React, { Component } from 'react';
import AtmScreenText from './atm_screen_text.js';

class AtmButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screenText: "Please make a choice...",
			screenTextClass: "screen-text-welcome"
		};
	}
	handleClick(e){
		this.setState({ screenText: e.target.value });
	}
	render() {
		return(
			<div>
				<div id="placeholder-deco-1" className="button-deco"></div>
				<div id="placeholder-deco-2" className="button-deco"></div>
				<div id="placeholder-deco-3" className="button-deco"></div>
				<div id="placeholder-deco-4" className="button-deco"></div>
				<button id="placeholder-button-1" className="atm-button"></button>
				<button id="placeholder-button-2" className="atm-button"></button>
				<button id="placeholder-button-3" className="atm-button"></button>
				<button id="placeholder-button-4" className="atm-button"></button>
				<div id="deposit-deco" className="button-deco"></div>
				<button id="deposit-button" className="atm-button" value="Deposit" onClick={(e) => this.handleClick(e)}></button>
				<div id="withdraw-deco" className="button-deco"></div>
				<button id="withdraw-button" className="atm-button" value="Withdraw" onClick={(e) => this.handleClick(e)}></button>
				<div id="balance-deco" className="button-deco"></div>
				<button id="balance-button" className="atm-button" value="Balance" onClick={(e) => this.handleClick(e)}></button>
				<div id="reenter-pin-deco" className="button-deco"></div>
				<button id="reenter-pin-button" className="atm-button" value="Re-Enter PIN" onClick={(e) => this.handleClick(e)}></button>		
				<AtmScreenText screenTextClass={this.state.screenTextClass} screenText={this.state.screenText}/>
			</div>
			)
	}
}
export default AtmButtons;