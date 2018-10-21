import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FadeIn from '../transitions/fade-in';

class Character extends Component {

	render() {
		const { character } = this.props;

		return (
			<FadeIn
				delay="1.5s"
				duration={500}>
				<figure className="character">
					<img
						src={character.img}
						alt="character"
						className="profile-pic"
						onClick={this.handleClick} />
				</figure>
			</FadeIn>
		);
	}

	handleClick = () => {
		const { onCharacterClick, index } = this.props;

		onCharacterClick(index);
	}
}

Character.propTypes = {
	onCharacterClick: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	character: PropTypes.object.isRequired,
};

export default Character;
