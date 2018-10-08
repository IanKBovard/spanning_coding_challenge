import React, { Component } from 'react';

class AtmButton extends Component {
	constructor(props) {
		super(props)
		console.log(props);
	}
	render() {
		return(
			<div>
			<div id={this.props.buttonDecoId} className="button-deco" value={this.props.value}></div>
			<button id={this.props.buttonId} className="atm-button" value={this.props.value}></button>
			</div>
			)
	}
}

export default AtmButton;