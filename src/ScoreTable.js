import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance
} from './Rules';

class ScoreTable extends Component {
	getTotalScores() {
		const { scores } = this.props;
		let total = 0;
		for (let key in scores) {
			if (scores[key]) {
				total += scores[key];
			}
		}
		return total;
	}
	render() {
		const { scores, doScore } = this.props;
		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								score={scores.ones}
								description={ones.desc}
								doScore={(evt) => doScore('ones', ones.evalRoll)}
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								description={twos.desc}
								doScore={(evt) => doScore('twos', twos.evalRoll)}
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								description={threes.desc}
								doScore={(evt) => doScore('threes', threes.evalRoll)}
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								description={fours.desc}
								doScore={(evt) => doScore('fours', fours.evalRoll)}
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								description={fives.desc}
								doScore={(evt) => doScore('fives', fives.evalRoll)}
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								description={sixes.desc}
								doScore={(evt) => doScore('sixes', sixes.evalRoll)}
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								score={scores.threeOfKind}
								description={threeOfKind.desc}
								doScore={(evt) => doScore('threeOfKind', threeOfKind.evalRoll)}
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								description={fourOfKind.desc}
								doScore={(evt) => doScore('fourOfKind', fourOfKind.evalRoll)}
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								description={fullHouse.desc}
								doScore={(evt) => doScore('fullHouse', fullHouse.evalRoll)}
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								description={smallStraight.desc}
								doScore={(evt) => doScore('smallStraight', smallStraight.evalRoll)}
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								description={largeStraight.desc}
								doScore={(evt) => doScore('largeStraight', largeStraight.evalRoll)}
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								description={yahtzee.desc}
								doScore={(evt) => doScore('yahtzee', yahtzee.evalRoll)}
							/>
							<RuleRow
								name="Chance"
								score={scores.chance}
								description={chance.desc}
								doScore={(evt) => doScore('chance', chance.evalRoll)}
							/>
						</tbody>
					</table>
				</section>
				<div className="ScoreBoard">
					<h3>
						<strong>TOTAL:</strong> {this.getTotalScores()}
					</h3>
					{localStorage.getItem('hiscore') ? <h3>Hi-Score: {localStorage.getItem('hiscore')}</h3> : ''}
				</div>
			</div>
		);
	}
}

export default ScoreTable;
