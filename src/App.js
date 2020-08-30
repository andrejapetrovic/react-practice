import React from 'react';
import './App.css';
import Movie from './Components/Movie';
import Search from './Components/Search';
import Info	from './Components/Info';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
		<Router>
			<main>
				<nav>
					<ul>
						<li><a href="/">Home</a></li>
						<li><Link to="/new">New Movie</Link></li>
						<li><Link to="/info">Info</Link></li>
					</ul>
					</nav>

				<div className="App">
					<Search />
					<header className="App-header">
						<Route path="/new" component={Movie} />
						<Route path="/info" component={Info} />
					</header>
				</div>

			 </main>
			</Router>
  );
}

export default App;
