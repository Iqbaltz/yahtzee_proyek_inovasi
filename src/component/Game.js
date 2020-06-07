import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import { Link } from 'react-router-dom';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;
const initialState = {
	dice: Array.from({ length: NUM_DICE }),
	locked: Array(NUM_DICE).fill(false),
	rollsLeft: NUM_ROLLS,
	rolling: false,
	scores: {
		ones: undefined,
		twos: undefined,
		threes: undefined,
		fours: undefined,
		fives: undefined,
		sixes: undefined,
		threeOfKind: undefined,
		fourOfKind: undefined,
		fullHouse: undefined,
		smallStraight: undefined,
		largeStraight: undefined,
		yahtzee: undefined,
		chance: undefined
	}
};

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
		this.roll = this.roll.bind(this);
		this.doScore = this.doScore.bind(this);
		this.toggleLocked = this.toggleLocked.bind(this);
		this.reset = this.reset.bind(this);
	}

	buttonMessages() {
		const messages = [ '0 rolls left', '1 roll left', '2 rolls left', 'Roll Dice' ];
		if (this.state.rolling) {
			return 'Rolling...';
		}
		return messages[this.state.rollsLeft];
	}

	reset() {
		this.setState(initialState);
	}

	roll(evt) {
		// roll dice whose indexes are in reroll
		if (!this.state.rolling) {
			this.setState({ rolling: true }, () => {
				setTimeout(() => {
					this.setState((st) => ({
						dice: st.dice.map((d, i) => (st.locked[i] ? d : Math.ceil(Math.random() * 6)))
					}));
				}, 250);
				setTimeout(() => {
					this.setState((st) => ({
						locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
						rollsLeft: st.rollsLeft - 1,
						rolling: false
					}));
				}, 1000);
			});
		}
	}

	toggleLocked(idx) {
		// toggle whether idx is in locked or not
		if (this.state.rollsLeft > 0 && !this.state.rolling && this.state.dice.some((d) => d != null)) {
			this.setState((st) => ({
				locked: [ ...st.locked.slice(0, idx), !st.locked[idx], ...st.locked.slice(idx + 1) ]
			}));
		}
	}

	doScore(rulename, ruleFn) {
		// evaluate this ruleFn with the dice and score this rulename
		if (!this.state.rolling && this.state.dice.some((d) => d != null)) {
			this.setState((st) => ({
				scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
				rollsLeft: NUM_ROLLS,
				locked: Array(NUM_DICE).fill(false),
				dice: Array.from({ length: NUM_DICE })
			}));
		}
	}

	render() {
		let gameOver = true;
		const { dice, locked, rollsLeft, rolling, scores } = this.state;
		for (const key in scores) if (scores[key] == null) gameOver = false;
		if (gameOver) {
			let total = 0;
			for (const key in scores) total += scores[key] || 0;
			localStorage.setItem('hiscore', Math.max(localStorage.getItem('hiscore'), total));
		}
		return (
			<div className="Game">
				<header className="Game-header">
					<Link className="btn-back" to="/">
						Back to Menu
					</Link>
					<h1 className="Game-title">Yahtzee!</h1>

					<section className="Game-dice-section">
						<Dice
							dice={dice}
							locked={locked}
							handleClick={this.toggleLocked}
							disabled={rollsLeft === 0}
							rolling={rolling}
						/>
						<div className="Game-button-wrapper">
							<button
								className="Game-reroll"
								disabled={locked.every((x) => x) || rollsLeft === 0 || rolling}
								onClick={gameOver ? this.reset : this.roll}
							>
								{gameOver ? 'Play Again?' : this.buttonMessages()}
							</button>
						</div>
					</section>
				</header>
				<ScoreTable doScore={this.doScore} scores={scores} />
			</div>
		);
	}
}

export default Game;
