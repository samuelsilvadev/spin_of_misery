import React from 'react';
import PropTypes from 'prop-types';

const ScoreDisplay = ({ score }) => (
	<div className="score-keeper">Score: {score}</div>
);

ScoreDisplay.propTypes = {
	score: PropTypes.number,
};

export default ScoreDisplay;
