import 'Css/navbar.less';
import 'Css/LinkButton.less';
import React, { Component } from 'react';
import $ from 'jquery';
import { isAndroid, isIOS } from 'react-device-detect';
import { OffCanvas, OffCanvasMenu } from 'react-offcanvas';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from 'Images/logo_mobile.png';


class NavBar extends Component {
	constructor(props) {
		super(props);

		this.getMap = (isAndroid)
			? 'geo:-21.0830673,-49.2386976'
			: (isIOS)
				? 'http://maps.apple.com/?ll=-21.0830673,-49.2386976'
				: 'https://www.google.com.br/maps/place/JDNet+Telecom/@-21.0830673,-49.2386976,17z/data=!3m1!4b1!4m5!3m4!1s0x94bc302ef85478fb:0x254bc1bc82aad5c4!8m2!3d-21.0830673!4d-49.2365089?hl=pt-BR';

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	componentDidMount() {
		window.addEventListener('load', () => {
			const touchsurface = document.getElementById('app');
			let startX;
			let startY;
			let dist;
			const threshold = 150; //	required min distance traveled to be considered swipe
			const allowedTime = 200; // maximum time allowed to travel that distance
			let elapsedTime;
			let startTime;

			const handleswipe = (isrightswipe) => {
				if (isrightswipe) {
					if (this.state.isOpen === false) {
						this.setState({
							isOpen: !this.state.isOpen
						});
					}
				}
			};

			if (touchsurface !== null) {
				touchsurface.addEventListener('touchstart', (e) => {
					const touchobj = e.changedTouches[0];
					dist = 0;
					startX = touchobj.pageX;
					startY = touchobj.pageY;
					startTime = new Date().getTime();
				}, false);

				touchsurface.addEventListener('touchend', (e) => {
					const touchobj = e.changedTouches[0];
					dist = touchobj.pageX - startX;
					elapsedTime = new Date().getTime() - startTime;
					const swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100);
					handleswipe(swiperightBol);
				}, false);
			}
		}, false);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		if (this.state.isOpen === true) {
			$('body section').css('overflow-y', 'hidden');
		} else {
			$('body section').css('overflow-y', 'scroll');
		}

		return (
			<div>
				<div className="row" style={{ backgroundColor: '#fff' }}>
					<div className="col-md-1 d-none d-md-block" />
					<div className="col-xs-12 col-md-10">
						<Navbar color="faded" light expand="md">
							<NavbarBrand>
								<Link to="/" style={{ cursor: 'pointer' }}>
									<img src={logo} width="123" height="70" alt="Logo da JDNet" />
								</Link>
							</NavbarBrand>
							<NavbarToggler onClick={this.toggle}><span className="fa fa-bars fa-2x" style={{ border: 'none' }} /></NavbarToggler>
							<Collapse isOpen={false} navbar>
								<Nav className="ml-auto" navbar>
									<NavItem>
										<NavLink exact activeClassName="active" to="/" >Início</NavLink>
									</NavItem>
									<NavItem>
										<NavLink exact activeClassName="active" to="/a-jdnet">A JDNet</NavLink>
									</NavItem>
									<NavItem>
										<NavLink exact activeClassName="active" to="/area-de-cobertura">Área de Cobertura</NavLink>
									</NavItem>
									<NavItem>
										<NavLink exact activeClassName="active" to="/planos-radio">Rádio</NavLink>
									</NavItem>
									<NavItem>
										<NavLink exact activeClassName="active" to="/planos-fibra">Fibra Óptica</NavLink>
									</NavItem>
									<NavItem>
										<NavLink exact activeClassName="active" to="/corporativo">Corporativo</NavLink>
									</NavItem>
									<NavItem>
										<NavLink exact activeClassName="active" to="/fale-conosco">Fale Conosco</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</Navbar>
					</div>
					<div className="col-md-1 d-none d-md-block" />
				</div>
				<OffCanvas width={(window.innerWidth > 0) ? window.innerWidth : screen.width} transitionDuration={300} isMenuOpened={this.state.isOpen} position="left">
					<OffCanvasMenu className="d-xs-block d-md-none background-dark-blue" style={{ width: '100vw', zIndex: '10000000' }} >
						<div className="row" style={{ padding: '20px 20px', height: '67vh' }}>
							<div className="col-2">
								<button onClick={this.toggle} style={{ padding: '0px' }} className="link-button bordless-header"><span className="fa fa-times fa-3x" /></button>
							</div>
							<div className="col-10">
								<ul className="mobile-nav">
									<li><NavLink exact activeClassName="active" onClick={this.toggle} to="/" >Início</NavLink></li>
									<li><NavLink exact activeClassName="active" onClick={this.toggle} to="/a-jdnet">A JDNet</NavLink></li>
									<li><NavLink exact activeClassName="active" onClick={this.toggle} to="/area-de-cobertura">Área de Cobertura</NavLink></li>
									<li><NavLink exact activeClassName="active" onClick={this.toggle} to="/planos-radio">Rádio</NavLink></li>
									<li><NavLink exact activeClassName="active" onClick={this.toggle} to="/planos-fibra">Fibra Óptica</NavLink></li>
									<li><NavLink exact activeClassName="active" onClick={this.toggle} to="/corporativo">Corporativo</NavLink></li>
									<li><NavLink exact activeClassName="active" onClick={this.toggle} to="/fale-conosco">Fale Conosco</NavLink></li>
									<li><a href="http://www.speedtest.net/" target="_blank" rel="noopener noreferrer" className="color-white">Teste de Velocidade</a></li>
									<li><a href="http://187.49.240.50/central/" target="_blank" rel="noopener noreferrer" className="color-white">Central do Assinante</a></li>
								</ul>
							</div>
						</div>
						<div className="row links-container background-orange" style={{ padding: '30px 20px' }}>
							<div className="col-12 only-landscape">
								<div className="row">
									<div className="col-3" style={{ textAlign: 'left', marginRight: 0 }}>
										<a href="https://www.instagram.com/jdnettelecom/" className="color-white" style={{ textAlign: 'left', fontSize: '15px' }}><span className="fa fa-instagram fa-3x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<a href="https://www.facebook.com/jdnettelecom/" className="color-white" style={{ textAlign: 'left', fontSize: '15px' }}><span className="fa fa-facebook-official fa-3x" /></a>
									</div>
									<div className="col-5" style={{ textAlign: 'right', paddingRight: 0, paddingLeft: 0, marginRight: 0, marginLeft: 0 }}>
										<p><a href={this.getMap} target="_blank" className="color-white light" style={{ fontFamily: 'UbuntuLight', fontSize: '15px' }}>Rua Coronel Jonas G. Gonzaga, 1353-A, Centro, 15.860-000 - Ibirá - SP</a></p><br />
									</div>
									<div className="col-4" style={{ textAlign: 'right', marginLeft: 0 }}>
										<h1 className="only-landscape">
											<a href="tel:((17) 3551-2121)" className="color-white light" style={{ fontSize: '20px' }}>(17) 3551-2121</a><br />
											<a href="tel:(0800-771-0299)" className="color-white light" style={{ fontSize: '20px' }}>0800-771-0299</a>
										</h1>
									</div>
								</div>
							</div>
							<div className="col-12 only-portrait">
								<div className="row">
									<div className="col-5" style={{ textAlign: 'left' }}>
										<a href="https://www.instagram.com/jdnettelecom/" className="color-white" style={{ textAlign: 'left', fontSize: '17px' }}><span className="fa fa-instagram fa-3x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<a href="https://www.facebook.com/jdnettelecom/" className="color-white" style={{ textAlign: 'left', fontSize: '17px' }}><span className="fa fa-facebook-official fa-3x" /></a>
									</div>
									<div className="col-7" style={{ textAlign: 'right' }}>
										<h1 className="only-portrait">
											<a href="tel:((17) 3551-2121)" className="color-white light" style={{ fontSize: '22px' }}>(17) 3551-2121</a><br />
											<a href="tel:(0800-771-0299)" className="color-white light" style={{ fontSize: '22px' }}>0800-771-0299</a>
										</h1>
										<h1 className="only-landscape">
											<a href="tel:((17) 3551-2121)" className="color-white light" style={{ fontSize: '22px' }}>(17) 3551-2121</a>&nbsp;&nbsp;&nbsp;
											<a href="tel:(0800-771-0299)" className="color-white light" style={{ fontSize: '22px' }}>0800-771-0299</a>
										</h1>
									</div>
								</div>
								<div className="row">
									<div className="col-12" style={{ textAlign: 'right' }}>
										<br />
										<p><a href={this.getMap} target="_blank" className="color-white light" style={{ fontFamily: 'UbuntuLight', fontSize: '17px' }}>Rua Coronel Jonas G. Gonzaga, 1353-A<br />Centro, 15.860-000 - Ibirá - SP</a></p><br />
									</div>
								</div>
							</div>
						</div>
					</OffCanvasMenu>
				</OffCanvas>
			</div>
		);
	}
}

export default NavBar;
