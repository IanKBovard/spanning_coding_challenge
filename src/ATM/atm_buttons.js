import React, { Component } from 'react';
import AtmScreenText from './atm_screen_text.js';
import AtmCards from './atm_cards.js';
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
			selected: 'Home',
			card: 'none',
			pinInput: ''

		};
	}
	resetState() {
		this.setState({ 
			screenText: 'Please make a choice...',
			screenTextClass: 'screen-text-welcome',
			withdrawText: 'Withdraw',
			depositText: 'Deposit',
			balanceText: 'Balance',
			reenterPinText: 'Re-Enter PIN',
			selected: 'Home'
		});
	}
	onInputChange(e) {
		const reg = /^[0-9\b]+$/;
		if(e === '' || reg.test(e)){
			this.setState({
				pinInput: e
			});
		};
	};
	handleClick(e){
		switch(e.target.value) {
			case 'Enter':
				let cardCheck = this.state.pinInput[3];
				switch(cardCheck) {
					case "0":
					case "1":
						this.setState({ card: 'Star' });
						break;
					case "2":
					case "3":
						this.setState({ card: 'Pulse' });
						break;
					case "4":
					case "5":
						this.setState({ card: 'Maestro' });
						break;
					case "6":
					case "7":
						this.setState({ card: 'Mastercard' });
						break;
					case "8":
						this.setState({ card: 'Plus'});
						break;
					case "9":
						this.setState({ card: 'Visa' });
						break;
					default:
						break;
				}
				break;
			case 'Home':
				this.resetState();
			break;
			case 'Withdraw':
				this.setState({
					screenText: 'Out-of-order',
					screenTextClass: 'screen-text-broken',
					withdrawText: 'Enter',
					depositText: 'Home',
					balanceText: false,
					reenterPinText: false,
					selected: 'Withdraw'
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
					selected: 'Deposit'
				});
			break;	
			case 'Balance':
				axios.get('https://swapi.co/api/starships/9/').then((response) => {
					this.setState({
						screenText: `${response.data.cost_in_credits} credits` ,
						screenTextClass: 'screen-text-balance',
						withdrawText: false,
						depositText: 'Home',
						balanceText: false,
						reenterPinText: false,
						selected: 'Balance'
					});		
				}).catch((error) => {
					console.log(error)
				});
			break;
			case 'Re-Enter PIN':
				this.setState({
					screenText: 'Enter your four digit PIN number',
					screenTextClass: 'screen-text-pin',
					withdrawText: 'Enter',
					depositText: 'Home',
					balanceText: false,
					reenterPinText: false,
					selected: 'Re-Enter PIN'
				});
			break;
			default:
				break;			
		}
	}
	render() {
		return(
			<div>
				<AtmCards card={this.state.card}/>
				<div id="placeholder-deco-1" className="button-deco"></div>
				<div id="placeholder-deco-2" className="button-deco"></div>
				<div id="placeholder-deco-3" className="button-deco"></div>
				<div id="placeholder-deco-4" className="button-deco"></div>
				<button id="placeholder-button-1" className="atm-button" value={this.state.homeText}></button>
				<button id="placeholder-button-2" className="atm-button"></button>
				<button id="placeholder-button-3" className="atm-button"></button>
				<button id="placeholder-button-4" className="atm-button"></button>
				{this.state.selected === "Re-Enter PIN" ?<form><input autoFocus className="pin-input" type="text" maxLength="4" value={this.state.pinInput} onChange={(e) =>{ this.onInputChange(e.target.value)}} /></form> : null}
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