import 'Css/ImageTop.less';
import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ImageTop = function(props) {
	return (
		<div className="container-fluid">
			<div className={`row image-top ${props.image}`}>
				<div className="col-md-1 d-none d-md-block" />
				<div className="col-xs-12 col-md-10" style={{ paddingTop: '150px' }}>
					<ParallaxProvider>
						<Parallax offsetYMin="60%" offsetYMax="-60%" slowerScrollRate>
							<h1 className="extra-large-size bold">{props.children}</h1>
						</Parallax>
					</ParallaxProvider>
				</div>
				<div className="col-md-1 d-none d-md-block" />
			</div>
		</div>
	);
};

ImageTop.propTypes = {
	image: PropTypes.string,
	children: PropTypes.object
};

ImageTop.defaultProps = {
	image: '',
	children: void 0
};

export default ImageTop;
