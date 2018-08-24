import 'Css/PlanoRadio.less';
import React from 'react';
import Card from 'Components/assets/Card';
import ImageTop from 'Components/assets/ImageTop';
import { Link } from 'react-router-dom';
import Qualidades from 'Components/assets/Qualidades';

const PlanoFibra = function() {
	const planos = [
		{ valor: process.env.REACT_APP_RADIO_RESIDENCIAL_1.split('|')[0], download: `${process.env.REACT_APP_RADIO_RESIDENCIAL_1.split('|')[1]} MEGA`, upload: `${process.env.REACT_APP_RADIO_RESIDENCIAL_1.split('|')[2]} Kb` },
		{ valor: process.env.REACT_APP_RADIO_RESIDENCIAL_2.split('|')[0], download: `${process.env.REACT_APP_RADIO_RESIDENCIAL_2.split('|')[1]} MEGA`, upload: `${process.env.REACT_APP_RADIO_RESIDENCIAL_2.split('|')[2]} Kb` },
		{ valor: process.env.REACT_APP_RADIO_RESIDENCIAL_3.split('|')[0], download: `${process.env.REACT_APP_RADIO_RESIDENCIAL_3.split('|')[1]} MEGA`, upload: `${process.env.REACT_APP_RADIO_RESIDENCIAL_3.split('|')[2]} Kb` },
		{ valor: process.env.REACT_APP_RADIO_EMPRESARIAL_1.split('|')[0], download: `${process.env.REACT_APP_RADIO_EMPRESARIAL_1.split('|')[1]} MEGA`, upload: `${process.env.REACT_APP_RADIO_EMPRESARIAL_1.split('|')[2]} MEGA` },
		{ valor: process.env.REACT_APP_RADIO_EMPRESARIAL_2.split('|')[0], download: `${process.env.REACT_APP_RADIO_EMPRESARIAL_2.split('|')[1]} MEGA`, upload: `${process.env.REACT_APP_RADIO_EMPRESARIAL_2.split('|')[2]} MEGA` },
		{ valor: process.env.REACT_APP_RADIO_EMPRESARIAL_3.split('|')[0], download: `${process.env.REACT_APP_RADIO_EMPRESARIAL_3.split('|')[1]} MEGA`, upload: `${process.env.REACT_APP_RADIO_EMPRESARIAL_3.split('|')[2]} MEGA` }

	];

	return (
		<div>
			<ImageTop image="radio">Planos<br />Rádio</ImageTop>
			<div className="container-fluid plano-radio-simples">
				<div className="row">
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10" style={{ paddingTop: '70px', paddingBottom: '30px' }}>
						<h1 className="extra-large-size bold color-white" style={{ marginLeft: '15px' }}>Planos Residenciais</h1>
						<div className="row" style={{ marginTop: '15px' }}>

							<div className="col-sm-12 col-md-4">
								<Card img="none" title={planos[0].download} >
									<div className="container">
										<div className="row">
											<div className="col-12">
												<br />
												<h4 className="value"><span className="min">R$</span><span className="max">{planos[0].valor.split(',')[0]}</span><span className="min">,{planos[0].valor.split(',')[1]}</span></h4>
												<span className="around-value">por mês</span>
											</div>
										</div>
										<div className="row" style={{ marginTop: '20px' }}>
											<div className="col-12">
												<p className="caracteristicas">
													Wi-fi Grátis<br />
													Internet Ilimitada (sem franquia)<br />
													Download: {planos[0].download}<br />
													Upload: {planos[0].upload}
												</p>
											</div>
										</div>
										<div className="row" style={{ marginTop: '30px' }}>
											<div className="col-12">
												<Link className="link-button medium gray" to="/fale-conosco/:scroll"><span className="italic medium-size color-white">assine já</span></Link>
											</div>
										</div>
									</div>
								</Card>
							</div>

							<div className="col-sm-12 col-md-4">
								<Card img="none" title={planos[1].download}>
									<div className="container">
										<div className="row">
											<div className="col-12">
												<br />
												<h4 className="value"><span className="min">R$</span><span className="max">{planos[1].valor.split(',')[0]}</span><span className="min">,{planos[1].valor.split(',')[1]}</span></h4>
												<span className="around-value">por mês</span>
											</div>
										</div>
										<div className="row" style={{ marginTop: '20px' }}>
											<div className="col-12">
												<p className="caracteristicas">
													Wi-fi Grátis<br />
													Internet Ilimitada (sem franquia)<br />
													Download: {planos[1].download}<br />
													Upload: {planos[1].upload}
												</p>
											</div>
										</div>
										<div className="row" style={{ marginTop: '30px' }}>
											<div className="col-12">
												<Link className="link-button medium gray" to="/fale-conosco/:scroll"><span className="italic medium-size color-white">assine já</span></Link>
											</div>
										</div>
									</div>
								</Card>
							</div>

							<div className="col-sm-12 col-md-4">
								<Card img="none" title={planos[2].download}>
									<div className="container">
										<div className="row">
											<div className="col-12">
												<br />
												<h4 className="value"><span className="min">R$</span><span className="max">{planos[2].valor.split(',')[0]}</span><span className="min">,{planos[2].valor.split(',')[1]}</span></h4>
												<span className="around-value">por mês</span>
											</div>
										</div>
										<div className="row" style={{ marginTop: '20px' }}>
											<div className="col-12">
												<p className="caracteristicas">
													Wi-fi Grátis<br />
													Internet Ilimitada (sem franquia)<br />
													Download: {planos[2].download}<br />
													Upload: {planos[2].upload}
												</p>
											</div>
										</div>
										<div className="row" style={{ marginTop: '30px' }}>
											<div className="col-12">
												<Link className="link-button medium gray" to="/fale-conosco/:scroll"><span className="italic medium-size color-white">assine já</span></Link>
											</div>
										</div>
									</div>
								</Card>
							</div>

						</div>
					</div>
					<div className="col-md-1 d-none d-md-block" />
				</div>
			</div>

			{ /* AVANÇADO */ }
			<div className="container-fluid plano-radio-avancado" style={{ marginBottom: '-40px' }}>
				<div className="row">
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10" style={{ paddingTop: '70px', paddingBottom: '30px' }}>
						<h1 className="extra-large-size bold color-white" style={{ marginLeft: '15px' }}>Planos Empresariais</h1>
						<div className="row" style={{ marginTop: '15px' }}>

							<div className="col-sm-12 col-md-4">
								<Card img="none" title={planos[3].download} className="blue">
									<div className="container">
										<div className="row">
											<div className="col-12">
												<br />
												<h4 className="value"><span className="min">R$</span><span className="max">{planos[3].valor.split(',')[0]}</span><span className="min">,{planos[3].valor.split(',')[1]}</span></h4>
												<span className="around-value">por mês</span>
											</div>
										</div>
										<div className="row" style={{ marginTop: '20px' }}>
											<div className="col-12">
												<p className="caracteristicas">
													Wi-fi Grátis<br />
													Internet Ilimitada (sem franquia)<br />
													Download: {planos[3].download}<br />
													Upload: {planos[3].upload}
												</p>
											</div>
										</div>
										<div className="row" style={{ marginTop: '30px' }}>
											<div className="col-12">
												<Link className="link-button medium gray" to="/fale-conosco/:scroll"><span className="italic medium-size color-white">assine já</span></Link>
											</div>
										</div>
									</div>
								</Card>
							</div>

							<div className="col-sm-12 col-md-4">
								<Card img="none" title={planos[4].download} className="blue">
									<div className="container">
										<div className="row">
											<div className="col-12">
												<br />
												<h4 className="value"><span className="min">R$</span><span className="max">{planos[4].valor.split(',')[0]}</span><span className="min">,{planos[4].valor.split(',')[1]}</span></h4>
												<span className="around-value">por mês</span>
											</div>
										</div>
										<div className="row" style={{ marginTop: '20px' }}>
											<div className="col-12">
												<p className="caracteristicas">
													Wi-fi Grátis<br />
													Internet Ilimitada (sem franquia)<br />
													Download: {planos[4].download}<br />
													Upload: {planos[4].upload}
												</p>
											</div>
										</div>
										<div className="row" style={{ marginTop: '30px' }}>
											<div className="col-12">
												<Link className="link-button medium gray" to="/fale-conosco/:scroll"><span className="italic medium-size color-white">assine já</span></Link>
											</div>
										</div>
									</div>
								</Card>
							</div>

							<div className="col-sm-12 col-md-4">
								<Card img="none" title={planos[5].download} className="blue">
									<div className="container">
										<div className="row">
											<div className="col-12">
												<br />
												<h4 className="value"><span className="min">R$</span><span className="max">{planos[5].valor.split(',')[0]}</span><span className="min">,{planos[5].valor.split(',')[1]}</span></h4>
												<span className="around-value">por mês</span>
											</div>
										</div>
										<div className="row" style={{ marginTop: '20px' }}>
											<div className="col-12">
												<p className="caracteristicas">
													Wi-fi Grátis<br />
													Internet Ilimitada (sem franquia)<br />
													Download: {planos[5].download}<br />
													Upload: {planos[5].upload}
												</p>
											</div>
										</div>
										<div className="row" style={{ marginTop: '30px' }}>
											<div className="col-12">
												<Link className="link-button medium gray" to="/fale-conosco/:scroll"><span className="italic medium-size color-white">assine já</span></Link>
											</div>
										</div>
									</div>
								</Card>
							</div>

						</div>
					</div>
					<div className="col-md-1 d-none d-md-block" />
				</div>
			</div>
			<Qualidades />
		</div>
	);
};

export default PlanoFibra;
