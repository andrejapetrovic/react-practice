import React from 'react';

export default class Info extends React.Component {
	state = {
		title: "Fear of The Dark",
		singer: "Iron Maiden"
	}

	updateTitle = (e) => this.setState({...this.state, title: e.target.value})
	updateSinger = (e) => this.setState({...this.state, singer: e.target.value})

	render() {
		return (
			<div>
				<input type="text" value={this.state.title}
					onChange={this.updateTitle} />
				<input type="text" value={this.state.singer}
					onChange={this.updateSinger} />
				<br />
				<Comp1 title={this.state.title} singer={this.state.singer} />
				<Comp2 title={this.state.title} handleChange={this.updateTitle} />
			</div>
		);
	}
}

class Comp1 extends React.Component {
	render() {
		return (
			<div>
				<title>Comp1</title>
				<li>{this.props.title}</li>
				<li>{this.props.singer}</li>
				<br />
			</div>
		);
	}
}


class Comp2 extends React.Component {
	render() {
		return (
			<div>
				<title>Comp2</title>
				<li>{this.props.title}</li>
				<input type="text" value={this.props.title} onChange={this.props.handleChange} />
			</div>
		);
	}
}
