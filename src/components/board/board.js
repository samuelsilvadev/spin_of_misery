import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
	arr
		.map(a => [Math.random(), a])
		.sort((a, b) => a[0] - b[0])
		.map(a => a[1])
);

const initialChars = [
	{
		name: 'Allen Iverson',
		img: 'img/250x180/iverson.png',
		clicked: false
	},
];

class Board extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: {
				score: 0
			},
			characters: shuffleArray(initialChars)
		};
	}

	render() {
		const { user, characters } = this.state;

		return (
			<div className="Board">
				<FadeIn
					in
					duration={450}
					length={'30px'}
					direction={'bottom'}
					delay={'1s'}>
					<h4>Spin the Wheel of Misery and face the consequences at your own risk.</h4>
				</FadeIn>
				<FadeIn
					in
					duration={500}
					direction={'bottom'}
					delay={'1.5s'}>
					<ScoreDisplay
						score={user.score} />
				</FadeIn>
				<CharacterBox
					characters={characters}
					onCharacterClick={this.onCharacterClick} />
			</div>
		)
	}

	onCharacterClick = (index) => {
		const { characters } = this.state;

		if (!characters[index].clicked) {
			this.setState(prevState => ({
				characters: shuffleArray(prevState.characters.map((character, current) => {
					return (current === index) ? { ...character, clicked: true } : character
				})),
				user: {
					...prevState.user,
					score: prevState.user.score + 1
				}
			}));
			//and shuffle
		} else {
			this.setState(prevState => ({
				characters: shuffleArray(prevState.characters.map(character => ({ ...character, clicked: false }))),
				user: {
					...prevState.user,
					score: 0
				}
			}));
			//and shuffle
		}
	}
}

export default Board;
