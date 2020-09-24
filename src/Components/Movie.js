import React from 'react';

export default class Movie extends React.Component {
	state = {
		title: 'Title',
		genre: 'Genre',
		description: 'Opis',
		price: 350,
		releaseDate: "2020-11-02"
	}

	changeHandler = async (event) => {
		event.preventDefault();

		// const response = await fetch("https://")

		this.setState({
			title: event.target.title.value,
			genre: event.target.genre.value,
			description: event.target.desc.value,
			price: event.target.price.value,
			releaseDate: event.target.releaseDate.value
		});
	}

	getTest = async (event) => {
		fetch("https://localhost:44373/Movie/GetMovie",
			{
				method: "GET"
			})
			.then(res => res.json())
			.then(res => console.log(res));
	}

	render() {
		return (
			<div>
				{this.state.title}
				{this.state.genre}
				{this.state.description}
				{this.state.price}
				{this.state.releaseDate}
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
				<input type="text" defaultValue={this.state.price} name="price" />
				<br />
				<input type="text" defaultValue={this.state.releaseDate} name="releaseDate" />
				<br />
				<input type="submit" value="Submit" />
			</form>
			<button onClick={this.getTest}>Get Test</button>
			</div>
		);
	}
}

