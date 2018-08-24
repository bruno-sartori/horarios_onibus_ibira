import 'Css/Footer.less';
import React from 'react';
import { isAndroid, isIOS } from 'react-device-detect';
import boleto from 'Images/forma_pagamento/boleto.png';
import cielo from 'Images/forma_pagamento/cielo.png';
import dinersClub from 'Images/forma_pagamento/diners_club.png';
import masterCard from 'Images/forma_pagamento/master_card.png';
import visa from 'Images/forma_pagamento/visa.png';
import elo from 'Images/forma_pagamento/elo.png';
import { NavLink } from 'react-router-dom';
import americanExpress from 'Images/forma_pagamento/american_express.png';
import logoFooter from 'Images/logo_footer.png';

const getMap = (isAndroid)
	? 'geo:-21.0830673,-49.2386976'
	: (isIOS)
		? 'http://maps.apple.com/?ll=-21.0830673,-49.2386976'
		: 'https://www.google.com.br/maps/place/JDNet+Telecom/@-21.0830673,-49.2386976,17z/data=!3m1!4b1!4m5!3m4!1s0x94bc302ef85478fb:0x254bc1bc82aad5c4!8m2!3d-21.0830673!4d-49.2365089?hl=pt-BR';


const Footer = function() {
	return (
		<footer className="container-fluid footer">
			<div className="row">
				<div className="col-md-1 d-none d-md-block" />
				<div className="col-xs-12 col-md-10">
					<div className="row">

						<div className="col-md-4 d-none d-md-block coluna" style={{ borderRight: '1px solid #fff' }}>
							<div className="row">
								<div className="col-12">
									<h3>Formas de Pagamento</h3>
									<img src={boleto} alt="Boleto" />
									<img src={cielo} alt="Cielo" />
									<img src={dinersClub} alt="Diner's Club" />
									<img src={masterCard} alt="Master Card" /><br />
									<img src={visa} alt="Visa" />
									<img src={americanExpress} alt="American Express" />
									<img src={elo} alt="Elo" />
								</div>
							</div>
							<div className="row" style={{ marginTop: '85px' }}>
								<div className="col-6">
									<NavLink to="/" onClick={window.scrollTo(0, 0)}>Página Inicial</NavLink><br />
									<NavLink to="/planos-fibra" onClick={window.scrollTo(0, 0)}>Planos Fibra Óptica</NavLink><br />
									<NavLink to="/planos-radio" onClick={window.scrollTo(0, 0)}>Planos Rádio</NavLink><br />
									<NavLink to="/area-de-cobertura" onClick={window.scrollTo(0, 0)}>Área de Cobertura</NavLink><br />
								</div>
								<div className="col-6">
									<a target="_blank" rel="noopener noreferrer" href="http://187.49.240.50/central/">Central do Assinante</a><br />
									<a target="_blank" rel="noopener noreferrer" href="http://velocidade.algartelecom.com.br/">Teste sua Velocidade</a><br />
									<NavLink to="/corporativo" onClick={window.scrollTo(0, 0)}>Corporativo</NavLink><br />
									<NavLink to="/fale-conosco" onClick={window.scrollTo(0, 0)}>Contato</NavLink><br />
								</div>
							</div>
						</div>

						<div className="col-xs-12 col-md-4 coluna center">
							<div className="row">
								<div className="col-1" />
								<div className="col-10">
									<a href="tel:((17) 3551-2121)" className="color-white bold" style={{ fontSize: '29px' }}>(17) 3551-2121</a><br />
									<a href="tel:(0800-771-0299)" className="color-white bold" style={{ fontSize: '29px', position: 'absolute', margin: '-20px 0' }}>0800-771-0299</a>
								</div>
								<div className="col-1" />
							</div>
							<div className="row" style={{ marginTop: '70px' }}>
								<div className="col-1" />
								<div className="col-10">
									<h3 style={{ marginBottom: 0, paddingBottom: 0 }}>Expediente</h3>
									<p className="medium-size color-white" style={{ marginTop: 0, paddingTop: 0 }}>8h às 18h seg a sex, 8h às 12h sáb.</p>

									<h3 style={{ marginBottom: 0, paddingBottom: 0 }}>Call Center</h3>
									<p className="medium-size color-white" style={{ marginTop: 0, paddingTop: 0 }}>7h30 às 21h, seg a sáb e feriados.</p>

									<a href={getMap}><p className="color-white" style={{ paddingTop: '5px' }}>Rua Coronel Jonas G. Gonzaga, 1353-A, Centro, 15860-000 - Ibirá - SP</p></a>
								</div>
								<div className="col-1" />
							</div>
						</div>

						<div className="col-xs-12 col-md-4 coluna right">
							<div className="row">
								<div className="col-1" />
								<div className="col-10">
									<img src={logoFooter} alt="Logo JDNet" style={{ width: '250px' }} />
								</div>
								<div className="col-1" />
							</div>
							<div className="row" style={{ marginTop: '115px' }}>
								<div className="col-1" />
								<div className="col-10">
									<p className="small-size color-white ">
										&copy; 2018 JDNet Telecom. Criado por&nbsp;&nbsp;
										<a href="http://umbigostudio.com.br" target="_blank" rel="noopener noreferrer" className="small-size bold">
											Umbigo Studio
										</a>
										<br />
										Desenvolvido por&nbsp;&nbsp;
										<span className="small-size bold">
											Oton Solution
										</span>
									</p>
								</div>
								<div className="col-1" />
							</div>
						</div>

					</div>
				</div>
				<div className="col-md-1 d-none d-md-block" />
			</div>
		</footer>
	);
};

export default Footer;
