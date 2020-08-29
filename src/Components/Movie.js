import React from 'react';

export default class Movie extends React.Component {
	state = {
		title: 'Title'
	}

	changeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.title);
		this.setState({title: event.target.title.value});
	}

	render() {
		return (
			<div>
				{this.state.title}
			<form onSubmit={this.changeHandler}>
				<input type="text" defaultValue={this.state.title} name="title" />
				<input type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}

