import 'Css/LinkButton.less';
import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = function(props) {
	return (
		<a
			{...props}
			href={props.href}
			onClick={(typeof props.onClick !== 'undefined') ? props.onClick : false}
			className={`link-button ${props.className}`}
		>
			{props.children}
		</a>
	);
};

LinkButton.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.object
};

LinkButton.defaultProps = {
	className: 'medium',
	href: void 0,
	onClick: void 0,
	children: void 0
};

export default LinkButton;
