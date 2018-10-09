import React, { Component } from 'react';
import AtmScreenText from './atm_screen_text.js';
import axios from 'axios';
class AtmButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screenText: 'Please make a choice...',
			screenTextClass: 'screen-text-welcome',
			withdrawText: 'Withdraw',
			depositText: 'Deposit',
			balanceText: 'Balance',
			reenterPinText: 'Re-Enter PIN',
		};
	}
	handleClick(e){
		switch(e.target.value) {
			case 'Home':
				this.setState({ 
					screenText: 'Please make a choice...',
					screenTextClass: 'screen-text-welcome',
					withdrawText: 'Withdraw',
					depositText: 'Deposit',
					balanceText: 'Balance',
					reenterPinText: 'Re-Enter PIN',
				});
			break;
			case 'Withdraw':
				this.setState({
					screenText: 'Out-of-order',
					screenTextClass: 'screen-text-broken',
					withdrawText: 'Enter',
					depositText: 'Home',
					balanceText: false,
					reenterPinText: false,
				});
			break;
			case 'Deposit':
				this.setState({
					screenText: 'Out-of-order',
					screenTextClass: 'screen-text-broken',
					withdrawText: 'Enter',
					depositText: 'Home',
					balanceText: false,
					reenterPinText: false,
				});
			break;	
			case 'Balance':
				axios.get('https://swapi.co/api/starships/9/').then((response) => {
					this.setState({
						screenText: response.data.cost_in_credits,
						screenTextClass: 'screen-text-balance',
						withdrawText: false,
						depositText: 'Home',
						balanceText: false,
						reenterPinText: false,
					});		
				}).catch((error) => {
					console.log(error)
				});
			break;
			case 'Re-Enter PIN':
				this.setState({
					screenText: 'PIN Number',
					screenTextClass: 'screen-text-welcome',
					withdrawText: 'Enter',
					depositText: 'Home',
					balanceText: false,
					reenterPinText: false,
				});
			break;
			default:
				break;			
		}
	}
	render() {
		return(
			<div>
				<div id="placeholder-deco-1" className="button-deco"></div>
				<div id="placeholder-deco-2" className="button-deco"></div>
				<div id="placeholder-deco-3" className="button-deco"></div>
				<div id="placeholder-deco-4" className="button-deco"></div>
				<button id="placeholder-button-1" className="atm-button" value={this.state.homeText}></button>
				<button id="placeholder-button-2" className="atm-button"></button>
				<button id="placeholder-button-3" className="atm-button"></button>
				<button id="placeholder-button-4" className="atm-button"></button>
				<div id="deposit-deco" className="button-deco"></div>
				<button id="deposit-button" className="atm-button" value={this.state.depositText} onClick={(e) => this.handleClick(e)}></button>
				<div id="withdraw-deco" className="button-deco"></div>
				<button id="withdraw-button" className="atm-button" value={this.state.withdrawText} onClick={(e) => this.handleClick(e)}></button>
				<div id="balance-deco" className="button-deco"></div>
				<button id="balance-button" className="atm-button" value={this.state.balanceText} onClick={(e) => this.handleClick(e)}></button>
				<div id="reenter-pin-deco" className="button-deco"></div>
				<button id="reenter-pin-button" className="atm-button" value={this.state.reenterPinText} onClick={(e) => this.handleClick(e)}></button>		
				<AtmScreenText screenText={this.state.screenText} screenTextClass={this.state.screenTextClass} withdrawText={this.state.withdrawText} balanceText={this.state.balanceText} depositText={this.state.depositText} reenterPinText={this.state.reenterPinText} />
			</div>
			)
	}
}
export default AtmButtons;