import React, { Component } from 'react';
import Game from './component/Game';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './component/Menu';
import Help from './component/Help';
import About from './component/About';

class App extends Component {
	componentDidMount() {
		console.log('di component didmount gan');
		const elem = document.getElementById('startingLoader');
		window.onload = () => {
			if (elem) {
				elem.remove();
			}
		};
	}

	render() {
		console.log('di render gan');
		return (
			<div className="App">
				<Switch className="switch">
					<Route exact path="/" render={() => <Menu />} />
					<Route exact path="/game" render={() => <Game />} />
					<Route exact path="/help" render={() => <Help />} />
					<Route exact path="/about" render={() => <About />} />
					<Route render={() => <h1 style={{ color: '#fff' }}>hehe, kamu cari apa?</h1>} />
				</Switch>
			</div>
		);
	}
}

export default App;
