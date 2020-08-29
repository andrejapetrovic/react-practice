import React from 'react';
import './App.css';
import Movie from './Components/Movie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
		<Router>
			<main>
				<nav>
					<ul>
						<li><a href="/">Home</a></li>
						<li><Link to="/new">New Movie</Link></li>
					</ul>
					</nav>

				<div className="App">
					<header className="App-header">
						<Route path="/new" component={Movie} />
					</header>
				</div>

			 </main>
			</Router>
  );
}

export default App;
