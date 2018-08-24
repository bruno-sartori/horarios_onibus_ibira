import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick() {
		if (typeof this.props.onClick === 'function') {
			this.props.onClick();
		}
	}

	render() {
		return (
			<button
				type={this.props.type}
				className={`link-button ${this.props.className}`}
				onClick={this.handleClick}
			>
				<span className="italic medium-size">{this.props.title}</span>
			</button>
		);
	}
}

Button.propTypes = {
	type: PropTypes.string,
	onClick: PropTypes.func,
	title: PropTypes.string,
	className: PropTypes.string
};

Button.defaultProps = {
	type: void 0,
	onClick: void 0,
	title: void 0,
	className: void 0

};

export default Button;
