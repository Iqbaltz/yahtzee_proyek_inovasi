import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<div className="Menu-header">
					<h1>MAIN MENU</h1>
				</div>
				<div className="Menu-list">
					<Link to="/game">Play Game</Link>
					<Link to="/help">Help</Link>
					<Link to="/about">About</Link>
				</div>
			</div>
		);
	}
}

export default Menu;
