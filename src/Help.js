import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Help extends Component {
	render() {
		return (
			<div>
				<h1>Masih Development Anjay</h1>
				<div className="Menu-list">
					<Link to="/">Skuy Balek</Link>
				</div>
			</div>
		);
	}
}

export default Help;
