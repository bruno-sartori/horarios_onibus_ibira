import 'Css/Card.less';
import React from 'react';
import PropTypes from 'prop-types';

const Card = function(props) {
	const none = (props.img === 'none') ? 'none' : '';

	return (
		<div className="card" style={{ width: '20rem' }}>
			<div className={`card-img-top ${none}`}>
				<div className="parent">
					<div className={`child  ${props.img} ${props.className}`}>
						<h2>{props.title}</h2>
					</div>
				</div>
			</div>
			<div className="card-block">
				{props.children}
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.object,
	className: PropTypes.string
};

Card.defaultProps = {
	img: void 0,
	title: void 0,
	children: void 0,
	className: void 0
};

export default Card;
