import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import banner1 from 'Images/banner_home_mobile.jpg';
import LinkButton from 'Components/form/LinkButton';
import Slider from 'nuka-carousel';

const Banner = ({ image, children }) => (
	<div>
		<div className="banner-image" style={{ backgroundImage: `url(${image})`, height: '550px' }}>
			{children}
		</div>
	</div>
);

const SliderMobilee = function(props) {
	return (
		<Slider dragging={false} swiping={false} decorators={[]} wrapAround>
			<Banner image={banner1}>
				<div className="container" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '320px' }}>
					<div className="row">
						<div className="col-12">
							<h1 className="bold color-white" style={{ fontSize: '30px' }}>Nova internet <br />fibra óptica da JDNet</h1>
							<span className="light-italic medium-size color-white">Muito mais rápida e custo acessível.</span>
						</div>
					</div>
					<div className="row" style={{ marginTop: '30px' }}>
						<div className="col-6">
							<LinkButton to="/planos-fibra" className="large only-border light-blue" onClick={() => props.history.push('/planos-fibra')}>conheça</LinkButton>
						</div>
						<div className="col-6 align-right">
							<LinkButton className="large hideme bordless" href="#cards-planos-container"><span className="fa fa-chevron-circle-down fa-2x" /></LinkButton>
						</div>
					</div>
				</div>
			</Banner>
		</Slider>
	);
};

const SliderMobile = withRouter(SliderMobilee);


Banner.propTypes = {
	image: PropTypes.string,
	children: PropTypes.object
};

Banner.defaultProps = {
	image: void 0,
	children: void 0
};

SliderMobilee.propTypes = {
	history: PropTypes.object
};

SliderMobilee.defaultProps = {
	history: void 0
};

export default SliderMobile;
