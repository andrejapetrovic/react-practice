import React from 'react';

export default class Movie extends React.Component {
	state = {
		title: 'Fuck off'
	}

	changeHandler = (event) => {
		this.setState({title: event.target.value});
	}

	render() {
		return (
			<div>
				{this.state.title}
			<form>
				<input type="text" onChange={this.changeHandler}/>
			</form>
			</div>
		);
	}
}

