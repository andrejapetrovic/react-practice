import React from 'react';

export default class Movie extends React.Component {
	state = {
		title: 'Title',
		genre: 'Genre',
	}

	changeHandler = (event) => {
		event.preventDefault();
		this.setState({
			title: event.target.title.value,
			genre: event.target.genre.value
		});
		console.log(this.state);
	}

	render() {
		return (
			<div>
				{this.state.title}
				<br />
				{this.state.genre}
			<form onSubmit={this.changeHandler}>
				<input type="text" defaultValue={this.state.title} name="title" />
				<br />
				<label>Zanr </label>
				<select name="genre">
					<option>Komedija</option>
					<option>Akcioni</option>
					<option>Triler</option>
				</select>
				<br />
				<input type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}

