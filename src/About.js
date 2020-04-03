import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
	render() {
		return (
			<div>
				<h1>Sorry, Masih Development</h1>
				<div className="Menu-list">
					<Link to="/">Skuy Balek</Link>
				</div>
			</div>
		);
	}
}

export default About;
