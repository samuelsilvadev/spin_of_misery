import React from 'react';
import PropTypes from 'prop-types';

import Character from './character';

const CharacterBox = ({ characters, onCharacterClick }) => {
	return (
		<div className="character-box">
			{
				characters.map((character, index) => <Character character={character} index={index} onCharacterClick={onCharacterClick} key={character.name} />)
			}
		</div>
	)
};

CharacterBox.propTypes = {
	characters: PropTypes.array,
	onCharacterClick: PropTypes.func,
};

CharacterBox.defaultProps = {
	characters: [],
}

export default CharacterBox;
