import React from 'react';
import PropTypes from 'prop-types';

const Bloco = function(props) {
	let imgCss = {};

	if (typeof props.imgHeight !== 'undefined') {
		imgCss = { height: props.imgHeight };
	}

	return (
		<div className="bloco">
			<img className="icon" src={props.image} alt="Wi-fi Grátis" style={imgCss} />
			<h2 className={props.titleClass}>{props.title}</h2>
			<p>{props.children}</p>
		</div>
	);
};

Bloco.propTypes = {
	titleClass: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.string,
	imgHeight: PropTypes.string
};

Bloco.defaultProps = {
	titleClass: '',
	image: void 0,
	title: void 0,
	children: void 0,
	imgHeight: void 0
};

export default Bloco;
