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
					<Link to="/game">
						<span />
						<span />
						<span />
						<span />
						Play
					</Link>
					<a href="https://www.wikihow.com/Play-Yahtzee" target="_blank" rel="noopener noreferrer">
						<span />
						<span />
						<span />
						<span />
						Help
					</a>
					<Link to="/about">
						<span />
						<span />
						<span />
						<span />
						About
					</Link>
				</div>
			</div>
		);
	}
}

export default Menu;
