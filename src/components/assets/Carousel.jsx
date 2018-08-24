import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import banner1 from 'Images/full_banner_1300x780px.jpg';
import LinkButton from 'Components/form/LinkButton';
import Slider from 'nuka-carousel';

const Banner = ({ image, min, max, children }) => (
	<div className="banner-container">
		<Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
			<div className="banner-image" style={{ backgroundImage: `url(${image})`, height: '590px' }} />
		</Parallax>
		<div className="banner-children">{children}</div>
	</div>
);

const Carousell = function(props) {
	return (
		<ParallaxProvider>
			{ /* autoplay autoplayInterval={4000} swiping */ }
			<Slider decorators={[]} dragging={false} wrapAround>
				<Banner min="-30%" max="30%" image={banner1}>
					<div className="container" style={{ paddingLeft: '25px', paddingRight: '25px' }}>
						<div className="row" style={{ position: 'relative', top: '70px', zIndex: '99999' }}>
							<div className="col-6">
								<Parallax offsetXMin="-30%" offsetXMax="30%" slowerScrollRate>
									<h1 className="bold extra-large-size hideme">Nova internet <br />fibra óptica da JDNet</h1>
									<span className="light-italic large-size hideme">Muito mais rápida e custo acessível.</span>
								</Parallax>
							</div>
							<div className="col-6 align-right">
								<Parallax offsetXMin="30%" offsetXMax="-30%" slowerScrollRate>
									<LinkButton className="large only-border light-blue hideme" style={{ position: 'relative', top: '65px' }} onClick={() => props.history.push('/planos-fibra')}>conheça</LinkButton>
								</Parallax>
							</div>
						</div>
						<div className="row" style={{ paddingBottom: '0px' }}>
							<div className="col align-center" style={{ paddingBottom: '0px' }}>
								<LinkButton className="large hideme bordless" href="#cards-planos-container" style={{ position: 'relative', bottom: '0px', top: '70px', padding: '0', margin: '15px 40px' }}><span className="fa fa-chevron-circle-down fa-2x" /></LinkButton>
							</div>
						</div>
					</div>
				</Banner>
			</Slider>
		</ParallaxProvider>
	);
};

const Carousel = withRouter(Carousell);

Banner.propTypes = {
	image: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	children: PropTypes.object,
};

Banner.defaultProps = {
	image: void 0,
	min: void 0,
	max: void 0,
	children: void 0,
};


Carousell.propTypes = {
	history: PropTypes.object
};

Carousell.defaultProps = {
	history: void 0
};


export default Carousel;
