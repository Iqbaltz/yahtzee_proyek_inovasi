import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	static defaultProps = {
		icons: [
			'fas fa-square',
			'fas fa-dice-one',
			'fas fa-dice-two',
			'fas fa-dice-three',
			'fas fa-dice-four',
			'fas fa-dice-five',
			'fas fa-dice-six'
		]
	};
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick(this.props.idx);
	}
	render() {
		const { icons, val, locked, disabled, rolling } = this.props;
		let classes = `Die ${icons[val || 0]} fa-5x `;
		if (locked) classes += 'Die-locked';
		if (rolling) classes += 'Die-rolling';
		return <i className={classes} onClick={this.handleClick} disabled={disabled} />;
	}
}

export default Die;
