import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

class FadeIn extends Component {

	defaultStyle = {
		transition: `all ${this.props.duration}ms ease-in-out`,
		transitionDelay: this.props.delay,
		opacity: 0,
		position: 'relative'
	};

	transitionStyles = {
		entering: {
			opacity: 0,
			[this.props.direction]: this.props.length
		},
		entered: {
			opacity: 1,
			[this.props.direction]: '0'
		}
	};

	render() {
		const { in: _in, duration, children } = this.props;

		return (
			<Transition
				in={_in}
				timeout={duration}
				appear>
				{
					(state) => (
						<div style={{ ...this.defaultStyle, ...this.transitionStyles[state] }}>
							{children}
						</div>
					)
				}
			</Transition>
		)
	}
};

FadeIn.propTypes = {
	delay: PropTypes.string,
	direction: PropTypes.string,
	duration: PropTypes.number.isRequired,
	length: PropTypes.string,
	in: PropTypes.bool,
};

FadeIn.defaultProps = {
	delay: '0',
	length: '50px',
	in: true,
};

export default FadeIn;
