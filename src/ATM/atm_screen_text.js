import React, { Component } from 'react';

class AtmScreenText extends Component {
	constructor(props) {
		super(props);
		this.state = {
			withdrawText : 'Withdraw',
			depositText: 'Deposit',
			balanceText: 'Balance',
			reenterPinText: 'Re-Enter PIN'
		}
	}
	render() {
		return(
			<div className="text-container">
				<span className={this.props.screenTextClass}>{this.props.screenText}</span>
				<span id="withdraw-button-text"className="button-text">{this.state.withdrawText}</span>
				<span id="deposit-button-text"className="button-text">{this.state.depositText}</span>
				<span id="balance-button-text"className="button-text">{this.state.balanceText}</span>
				<span id="reenter-pin-button-text"className="button-text">{this.state.reenterPinText}</span>
				<div id="withdraw-text-deco" className="text-deco"></div>
				<div id="balance-text-deco" className="text-deco"></div>
				<div id="deposit-text-deco" className="text-deco"></div>
				<div id="reenter-pin-text-deco" className="text-deco"></div>
			</div>
			)
	}
}

export default AtmScreenText;