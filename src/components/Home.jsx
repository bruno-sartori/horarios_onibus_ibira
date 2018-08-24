import 'Css/home.less';
import React, { Component } from 'react';
import Qualidades from 'Components/assets/Qualidades';
import Card from 'Components/assets/Card';
import LinkButton from 'Components/form/LinkButton';
import { Link } from 'react-router-dom';
import Carousel from 'Components/assets/Carousel';
import CarouselMobile from 'Components/assets/CarouselMobile';

class Home extends Component {
	render() {
		this.isMobile = false;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			this.isMobile = true;
		}

		const valorFibraReal = process.env.REACT_APP_A_PARTIR_FIBRA.split(',')[0];
		const valorFibraCentavo = `,${process.env.REACT_APP_A_PARTIR_FIBRA.split(',')[1]}`;

		const valorRadioReal = process.env.REACT_APP_A_PARTIR_RADIO.split(',')[0];
		const valorRadioCentavo = `,${process.env.REACT_APP_A_PARTIR_RADIO.split(',')[1]}`;

		return (
			<div>
				{ (this.isMobile === true) ? <CarouselMobile /> : <Carousel />}

				<div className="container-fluid cards-planos-container" id="cards-planos-container" style={{ paddingTop: '15px' }}>
					<div className="row">
						<div className="col-md-1 d-none d-md-block" />
						<div className="col-xs-12 col-md-10">
							<div className="row">
								<div className="col-12" style={{ marginTop: '40px' }}>
									<h1 className="color-white bold extra-large-size" style={{ padding: '0 15px' }}>Internet Banda Larga<br />Fibra Óptica ou Rádio</h1>
								</div>
							</div>
							<div className="row" style={{ marginTop: '15px' }}>
								{ /* CARD PLANOS FIBRA */}
								<div className="col-sm-12 col-md-4">
									<Card img="fibra" title="Fibra Óptica">
										<div className="container">
											<div className="row">
												<div className="col-12">
													<span className="around-value">à partir de</span>
													<h4 className="value"><span className="min">R$</span><span className="max">{valorFibraReal}</span><span className="min">{valorFibraCentavo}</span></h4>
													<span className="around-value">por mês</span>
												</div>
											</div>
											<div className="row" style={{ marginTop: '20px' }}>
												<div className="col-12">
													<span className="color-gray bold-italic medium-size">Planos de até 100Mb</span>
												</div>
											</div>
											<div className="row" style={{ marginTop: '30px' }}>
												<div className="col-12">
													<Link className="link-button medium only-border gray" to="/planos-fibra"><span className="italic medium-size">conheça os planos</span></Link>
												</div>
											</div>
										</div>
									</Card>
								</div>

								{ /* CARD PLANOS RADIO */ }
								<div className="col-sm-12 col-md-4">
									<Card img="radio" title="Rádio">
										<div className="container">
											<div className="row">
												<div className="col-12">
													<span className="around-value">à partir de</span>
													<h4 className="value"><span className="min">R$</span><span className="max">{valorRadioReal}</span><span className="min">{valorRadioCentavo}</span></h4>
													<span className="around-value">por mês</span>
												</div>
											</div>
											<div className="row" style={{ marginTop: '20px' }}>
												<div className="col-12">
													<span className="color-gray bold-italic medium-size">Planos de até 4Mb</span>
												</div>
											</div>
											<div className="row" style={{ marginTop: '30px' }}>
												<div className="col-12">
													<Link className="link-button medium only-border gray" to="/planos-radio"><span className="italic medium-size">conheça os planos</span></Link>
												</div>
											</div>
										</div>
									</Card>
								</div>

								{ /* CARD PLANOS RADIO */ }
								<div className="col-sm-12 col-md-4">
									<Card img="dedicado" title="Corporativo">
										<div className="container">
											<div className="row">
												<div className="col-12" style={{ marginTop: '30px' }}>
													<br /><br />
													<span className="around-value" style={{ textAlign: 'center' }}>Link dedicado e transporte de dados com segurança.</span>
												</div>
											</div>
											<div className="row" style={{ marginTop: '80px' }}>
												<div className="col-12">
													<Link className="link-button medium only-border gray" to="/corporativo">
														<span className="italic medium-size">conheça os planos</span>
													</Link>
												</div>
											</div>
										</div>
									</Card>
								</div>
							</div>
						</div>
						<div className="col-md-1 d-none d-md-block">
							<LinkButton className="bordless showme" href="#qualidades-container" style={{ position: 'absolute', bottom: '15px' }}><span className="fa fa-chevron-down fa-3x" /></LinkButton>
						</div>
					</div>
				</div>
				<Qualidades />
			</div>
		);
	}
}

export default Home;
