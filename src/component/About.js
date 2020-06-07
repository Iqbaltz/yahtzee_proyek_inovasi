import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import avatar1 from '../images/avatar-1.svg';
import avatar2 from '../images/avatar-2.svg';
import avatar3 from '../images/avatar-3.svg';
import './About.css';

class About extends Component {
	render() {
		return (
			<div className="About">
				<div className="About-header">
					<Link className="btn-back" to="/">
						Back to Menu
					</Link>
					<h1>About Us</h1>
				</div>
				<div className="About-content">
					<div className="About-card">
						<img className="img-card" src={avatar1} alt="avatar" />
						<p className="title-card">Agum</p>
						<p className="subtitle-card">Designer</p>
					</div>
					<div className="About-card">
						<img className="img-card" src={avatar3} alt="avatar" />
						<p className="title-card">Muhammad Iqbal</p>
						<p className="subtitle-card">Developer</p>
					</div>
					<div className="About-card">
						<img className="img-card" src={avatar2} alt="avatar" />
						<p className="title-card">Job Ritonga</p>
						<p className="subtitle-card">Engineer</p>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
