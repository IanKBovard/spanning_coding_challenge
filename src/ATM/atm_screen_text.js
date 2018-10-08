import React, { Component } from 'react';

class AtmScreenText extends Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Please make a choice...' };
	}
	handleClick(e){
		this.setState({})
	}
	render() {
		return(
			<div>
				<span>{this.state.text}</span>
			</div>
			)
	}
}

export default AtmScreenText;