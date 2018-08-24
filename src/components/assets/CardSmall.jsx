import 'Css/CardSmall.less';
import React from 'react';
import PropTypes from 'prop-types';

const CardSmall = function(props) {
	const none = (props.img === 'none') ? 'none' : '';

	return (
		<div className="card-small" style={{ width: '20rem' }}>
			<div className={`card-small-img-top ${none}`}>
				<div className="parent">
					<div className={`child  ${props.img} ${props.className}`}>
						<h2>{props.title}</h2>
					</div>
				</div>
			</div>
			<div className="card-small-block">
				{props.children}
			</div>
		</div>
	);
};

CardSmall.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.object,
	className: PropTypes.string
};

CardSmall.defaultProps = {
	img: void 0,
	title: void 0,
	children: void 0,
	className: void 0
};

export default CardSmall;
