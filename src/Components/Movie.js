import React from 'react';

export default class Movie extends React.Component {
	state = {
		title: 'Title',
		genre: 'Genre',
		description: 'Opis'
	}

	changeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.desc.value);
		this.setState({
			title: event.target.title.value,
			genre: event.target.genre.value,
			description: event.target.desc.value,
		});
	}

	render() {
		return (
			<div>
				{this.state.title}
				{this.state.genre}
				{this.state.description}
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
				<textarea name="desc" rows="10" cols="50" defaultValue={this.state.description}></textarea>
				<br />
				<input type="submit" value="Submit" />
			</form>
			</div>
		);
	}
}

