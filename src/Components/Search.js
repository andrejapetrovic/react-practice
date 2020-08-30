import React from 'react';

export default class Search extends React.Component {
	state = {
		query: "",
		list: [
			"Ko to tamo peva", "lotr", "Godfather I", "Godfather II"
		]
	}

	search = e => {
		e.preventDefault();
		var ret = this.state.list
			.filter(x => 
				x.toLowerCase().includes(
				e.target.query.value.toLowerCase()))
		console.log(ret);
	}

	render() {
		return (
			<form onSubmit={this.search}>
				<input type="text" name="query" />
				<input type="submit" value="Search" />
			</form>
		);
	}
}
