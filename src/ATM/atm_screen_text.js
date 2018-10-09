import React, { Component } from 'react';

class AtmScreenText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			withdrawInput : 'Withdraw',
			depositInput: 'Deposit',
			balanceInput: 'Balance',
			reenterPinInput: 'Re-Enter PIN'
		}
	}
	render() {
		return(
			<div className="text-container">
				<span className={this.props.screenTextClass}>{this.props.screenText}</span>
				<div id="withdraw-text-deco" class="text-deco"></div>
				<div id="balance-text-deco" class="text-deco"></div>
				<div id="deposit-text-deco" class="text-deco"></div>
				<div id="reenter-pin-text-deco" class="text-deco"></div>
			</div>
			)
	}
}

export default AtmScreenText;