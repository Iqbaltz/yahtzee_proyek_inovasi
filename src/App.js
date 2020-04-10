import React, { Component } from 'react';
import Game from './Game';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Help from './Help';
import About from './About';

class App extends Component {
	componentDidMount() {
		const elem = document.getElementById('startingLoader');
		window.onload = () => {
			if (elem) {
				elem.remove();
			}
		};
	}

	render() {
		return (
			<div className="App">
				<Switch className="switch">
					<Route exact path="/" render={() => <Menu />} />
					<Route exact path="/game" render={() => <Game />} />
					<Route exact path="/help" render={() => <Help />} />
					<Route exact path="/about" render={() => <About />} />
					<Route render={() => <h1>Oops! 404</h1>} />
				</Switch>
			</div>
		);
	}
}

export default App;
