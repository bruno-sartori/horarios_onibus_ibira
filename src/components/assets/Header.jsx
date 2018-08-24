import 'Css/header.less';
import React from 'react';
import LinkButton from 'Components/form/LinkButton';
import { isAndroid, isIOS } from 'react-device-detect';
import Navbar from './Navbar';

const getMap = (isAndroid)
	? 'geo:-21.0830673,-49.2386976'
	: (isIOS)
		? 'http://maps.apple.com/?ll=-21.0830673,-49.2386976'
		: 'https://www.google.com.br/maps/place/JDNet+Telecom/@-21.0830673,-49.2386976,17z/data=!3m1!4b1!4m5!3m4!1s0x94bc302ef85478fb:0x254bc1bc82aad5c4!8m2!3d-21.0830673!4d-49.2365089?hl=pt-BR';

const Header = function() {
	return (
		<div className="container-fluid" id="header">
			<div className="row header-bar d-none d-md-flex" style={{ padding: '8px' }}>
				<div className="col-1" />
				<div className="col-3">
					<LinkButton href="http://www.speedtest.net/" target="_blank" rel="noopener noreferrer" style={{ padding: '3px' }} className="botao-header">Teste de Velocidade</LinkButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<LinkButton href="http://187.49.240.50/central/" target="_blank" rel="noopener noreferrer" style={{ padding: '3px' }} className="botao-header">Central do Assinante</LinkButton>
				</div>
				<div className="col-2" />
				<div className="col-5" style={{ textAlign: 'right', paddingRight: '10px' }}>
					<a href="tel:0800-771-0299" className="color-white light"><span className="fa fa-phone" />&nbsp;0800-771-0299</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a href={getMap} target="_blank" className="color-white light"><span className="fa fa-map-marker" />&nbsp;&nbsp;R. Coronel Jonas G. Gonzaga, 1353-A, Ibirá</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a href="https://www.instagram.com/jdnettelecom/" target="_blank" rel="noopener noreferrer" className="color-white light"><span className="fa fa-instagram" /></a>&nbsp;&nbsp;
					<a href="https://www.facebook.com/jdnettelecom/" target="_blank" rel="noopener noreferrer" className="color-white light"><span className="fa fa-facebook" /></a>
				</div>
				<div className="col-1" />
			</div>
			<Navbar />
		</div>
	);
};

export default Header;
